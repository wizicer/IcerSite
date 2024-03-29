<template>
  <div class="archive-page">
    <div class="timeline-container">
      <div class="timeline-item" :class="item.type" v-for="item in archivesList">
        <div class="timeline-item-node">
          <BIconCalendar v-if="item.type === 'post'" />
          <span v-else-if="item.type === 'month'">{{ theme.locales?.blog?.list?.icon?.month ?? "M" }}</span>
          <span v-else>{{ theme.locales?.blog?.list?.icon?.year ?? "Y" }}</span>
        </div>
        <div class="timeline-item-wrapper space-y-2">
          <template v-if="item.type === 'post'">
            <div class="post-item">
              <span class="date">{{ formatDate(item.date) }}</span>
              <a v-if="item.type === 'post'" :href="withBase(item.url)">
                {{ item.title }}
              </a>

              <template v-if="item.tags">
                <span class="tag-margin"></span>
                <BIconTags class="mr-1" />
                <a class="tag" :href="`tags.html#${tag}`" v-for="(tag, index) in item.tags">
                  <span>{{ tag }}</span>
                  <span v-if="index !== item.tags.length - 1">,&nbsp;</span>
                </a>
              </template>
            </div>
          </template>
          <div class="content" v-else>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BIconTags, BIconCalendar } from "bootstrap-icons-vue";
import { computed } from "vue";
import { withBase } from "vitepress";
import { postList } from "../utils";
import { useData } from "vitepress";
const { lang, theme } = useData();

type NodeType = "year" | "month" | "post";
interface ArchivesList {
  type: NodeType;
  title: string;
  snippets?: string;
  coverImg?: string;
  createTime: number;
  url: string;
  lang: string;
  top?: boolean;
  tags?: string[];
  date?: string;
}

const data = Object.create(null);
function defaultMonthConverter(month: number) {
  if (month == 1) return "January";
  if (month == 2) return "February";
  if (month == 3) return "March";
  if (month == 4) return "April";
  if (month == 5) return "May";
  if (month == 6) return "June";
  if (month == 7) return "July";
  if (month == 8) return "August";
  if (month == 9) return "September";
  if (month == 10) return "October";
  if (month == 11) return "November";
  if (month == 12) return "December";
  return "Unknown";
}
const archivesList = computed<ArchivesList[]>(() => {
  for (const post of postList.filter((_) => _.lang == lang.value)) {
    const { date } = post;
    const _createTime = new Date(date);
    const year = _createTime.getUTCFullYear();
    const month = _createTime.getMonth() + 1;
    let addYearItemFlag = false;
    if (!data[year]) {
      data[year] = {};
      addYearItemFlag = true;
    }
    if (!data[year][month]) {
      data[year][month] = [];
      let _monthList = data[year][month];
      if (addYearItemFlag) {
        _monthList.push({
          type: "year",
          title: (theme.value?.locales?.blog?.list?.item?.year ?? ((year: number) => `${year}`))(year),
        });
      }
      _monthList.push({
        type: "month",
        title: (theme.value?.locales?.blog?.list?.item?.month ?? defaultMonthConverter)(month),
      });
    }
    post.type = "post";
    data[year][month].push(post);
  }
  let archivesList = [];
  for (const yearItem of Object.values(data).reverse()) {
    for (const monthItem of Object.values(yearItem as Record<string, any>).reverse()) {
      archivesList.push.apply(archivesList, monthItem);
    }
  }
  return archivesList;
});

function formatDate(date: string | undefined): string {
  const d = new Date(date ?? 0);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
</script>

<style lang="scss" scoped>
.archive-page {
  margin-top: 45px;
}
.timeline {
  &-item {
    position: relative;
    padding-bottom: 15px;
    display: flex;
    padding: 10px 0;
    $node-width: 25px;
    &.year {
      &:not(:first-child) {
        margin-top: 10px;
      }
      .timeline-item-wrapper {
        font-size: 24px;
      }
    }
    &.month .timeline-item-wrapper {
      font-size: 18px;
    }
    &:not(:last-child)::before {
      content: "";
      position: absolute;
      display: block;
      left: calc($node-width / 2);
      width: 0;
      top: calc(50% - calc($node-width / 2));
      bottom: -$node-width;
      border-left: 1px dashed var(--vp-c-divider);
    }
    &-node {
      width: $node-width;
      // height: $node-width;
      background: var(--vp-c-bg-soft);
      border-radius: 50%;
      z-index: 9;
      left: 0;
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--vp-c-text-2);
      font-size: 12px;
    }
    .timeline-item-wrapper a {
      color: var(--vp-c-text-1);
      &.tag {
        color: var(--vp-c-text-3);
      }
      &:hover {
        color: var(--vp-c-brand);
      }
    }
  }
}
.post-item {
  // display: flex;
  // justify-content: flex-start;
  // align-items: flex-end;
  line-height: 1rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
  font-size: 14px;
  white-space: nowrap;
  // & > span {
  //   display: flex;
  // }
  & > svg {
    display: inline-block;
  }
  & > .date {
    margin-left: 0.5rem;
    width: 6rem;
    display: inline-block;
  }
  & > .tag-margin {
    margin-left: 2rem;
  }
  & > .tag {
    display: inline-block;
    &:hover {
      color: var(--vp-c-brand);
    }
  }
}
</style>
