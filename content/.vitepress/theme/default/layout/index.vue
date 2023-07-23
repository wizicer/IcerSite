<template>
  <Layout :class="{indent}">
    <template #doc-before v-if="isPost">
      <PostHeader />
      <OldNotice :date="date" />
    </template>
    <template #doc-before v-else-if="title">
      <div class="post_header-container">
        <h1 class="post_header-title">
          {{ title }}
        </h1>
      </div>
      <OldNotice :date="date" />
    </template>

    <template #home-features-after>
      <div class="BlogList">
        <div class="container">
          <div class="main">
            <div class="header">
              <h1>最新博客</h1>
              <div class="header-link">
                <a :href="withBase('./archives')">查看所有</a>
              </div>
            </div>
            <PageIndex :maxItem="4" />
          </div>
        </div>
      </div>
    </template>
    <!-- <template v-if="isPost" #doc-after>
      <ClientOnly>
        <PostBottom />
      </ClientOnly>
    </template> -->
  </Layout>
</template>

<script setup lang="ts">
import OldNotice from "../components/OldNotice.vue";
import defaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";
import { withBase } from "vitepress";
const { Layout } = defaultTheme;
const { frontmatter } = useData();
const isPost = computed<boolean>(() => !!frontmatter.value.isPost);
const title = computed<string>(() => frontmatter.value.title);
const date = computed<string>(() => frontmatter.value.date);
const indent = computed<boolean>(() => !!(frontmatter.value.indent ?? true));
</script>

<style lang="scss" scoped>
.post_header {
  &-container {
    .meta {
      padding: 1rem 0;
    }
  }
  &-title {
    letter-spacing: -0.02em;
    line-height: 48px;
    font-size: 36px;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    .post-title {
      letter-spacing: -0.02em;
      line-height: 40px;
      font-size: 32px;
    }
  }
}

.BlogList {
  padding: 0px 24px 48px;

  @media (min-width: 640px) {
    padding: 0px 48px 64px;
  }
  @media (min-width: 960px) {
    padding: 0px 64px 64px;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1152px;

    @media (min-width: 960px) {
      flex-direction: row;
    }

    .main {
      position: relative;
      z-index: 10;
      order: 2;
      flex-grow: 1;
      flex-shrink: 0;

      @media (min-width: 960px) {
        order: 1;
        width: calc((100% / 3) * 2);
      }
    }
  }
  .header {
    border-bottom: 1px solid #aaa;
    margin: 32px 0 16px;
    padding-bottom: 8px;

    h1 {
      font-size: 2rem;
      display: inline-block;
    }
    .header-link {
      float: right;
      a {
        color: #666;
      }
    }
  }
}

::v-deep.Layout.indent main.main .vp-doc {
  & > div > p {
    text-indent: 2em;
  }
  & > div > ul {
    margin-left: 2em;
  }
}
</style>
