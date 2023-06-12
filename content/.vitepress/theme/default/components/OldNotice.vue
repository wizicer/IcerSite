<template>
  <div v-if="age < 23 && age > 1" class="post-bottom space-y-2">
    <div>
      <span>老文章预警：该文写于作者{{ age }}岁，里面提到的东西可能会过于幼稚或已经过时，请注意分辨。</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
interface OldNoticeProps {
  date?: string;
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
