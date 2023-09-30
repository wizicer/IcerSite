<template>
  <div v-if="frontmatter.translateDate" class="post-bottom space-y-2">
    <div>
      <span>{{ theme.locales?.info?.translationNotice ?? defaultNotice }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from "vitepress";
const { theme, frontmatter } = useData();
const defaultNotice= `This article has been translated using machine translator. It may not perfectly capture the nuances of the original text. I appreciate your understanding in this matter.`;
</script>

<style lang="scss" scoped>
.post-bottom {
  margin-top: 25px;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--vp-custom-block-tip-border);
  color: var(--vp-custom-block-tip-text);
  background-color: var(--vp-custom-block-tip-bg);
  font-size: 14px;
}
</style>
