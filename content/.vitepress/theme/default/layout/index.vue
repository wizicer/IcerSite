<template>
  <Layout>
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

    <!-- <template v-if="isPost" #doc-after>
      <ClientOnly>
        <PostBottom />
      </ClientOnly>
    </template> -->
  </Layout>
</template>

<script setup lang="ts">
import OldNotice from '../components/OldNotice.vue'
import defaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { computed } from "vue";
const { Layout } = defaultTheme;
const { frontmatter } = useData();
const isPost = computed<boolean>(() => !!frontmatter.value.isPost);
const title = computed<string>(() => frontmatter.value.title);
const date = computed<string>(() => frontmatter.value.date);
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
</style>
