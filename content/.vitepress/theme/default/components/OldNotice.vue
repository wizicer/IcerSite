<template>
  <div v-if="age < 23 && age > 1" class="post-bottom space-y-2">
    <div>
      <span>{{ (theme.locales?.info?.oldNotice ?? defaultOldNotice)(age) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useData } from "vitepress";
const { theme } = useData();
interface OldNoticeProps {
  date?: string;
}

function defaultOldNotice(age) {
  return `LEGACY WARNING: This article was written when the author was ${age} years old. The content mentioned might be immature or outdated, please evaluate accordingly.`;
}
const props = defineProps<OldNoticeProps>();
const age = computed(() => {
  const date1 = new Date("1986-08-08");
  const date2 = new Date(props.date ?? 0);

  var ageDate = new Date(date2.getTime() - date1.getTime()); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
});
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
