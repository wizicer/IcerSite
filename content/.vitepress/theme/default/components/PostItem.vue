<template>
  <div class="post_item-container">
    <div class="post_item-content">
      <h2>
        <a :href="withBase(url)">
          {{ props.title }}
          <Badge v-if="props.top" type="tip" :text="theme?.locales?.blog?.list?.top ?? 'Top'" />
        </a>
      </h2>
      <p>{{ props.snippets }}</p>
      <PostMeta :tags="props.tags" :createTime="new Date(props.date ?? 0).getTime()" />
    </div>
    <div class="post_item-image" v-if="props.coverImg">
      <img :src="coverImg" alt="coverImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostMeta from "./PostMeta.vue";
import { withBase } from "vitepress";
import { computed } from "vue";
import { useData } from "vitepress";
const { theme } = useData();
interface Props {
  title: string;
  snippets?: string;
  coverImg?: string;
  createTime: number;
  localePath?: string;
  url: string;
  date?: string;
  top?: boolean;
  tags?: string[];
}

const props = defineProps<Props>();
const coverImg = computed(() => {
  const coverImg = props.coverImg;
  if (coverImg && props.localePath && !coverImg.startsWith(props.localePath)) {
    return withBase(coverImg);
  }
  return coverImg;
});
</script>

<style lang="scss" scoped>
.post_item {
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-top: 1px solid var(--vp-c-divider-light);
    margin: 15px 0 16px;
    &:first-child {
      border: none;
    }
    h2 {
      border: none;
      margin-top: 15px;
      font-size: 1.5rem;
      padding-bottom: 0.75rem;
    }
    h2 a {
      color: var(--vp-c-text-1);
    }
  }
  &-content p {
    word-break: break-all;
  }
  &-meta {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .create_time {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 14px;
    }
  }
  &-image {
    width: 120px;
    margin: 15px 0 15px 25px;
    border-radius: 3px;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      flex-shrink: 0;
    }
  }
}
</style>
