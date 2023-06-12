<template>
  <PostItem v-for="item in postList.filter((_) => _.lang == lang).slice(0, maxItem)" v-bind="item"></PostItem>
</template>

<script setup lang="ts">
import { postList } from "../utils";
import { useData } from "vitepress";
import { ref } from "vue";
interface IndexProps {
  maxItem?: number;
}
const props = defineProps<IndexProps>();
const { lang } = useData();
const maxItem = ref(props.maxItem ?? 10);
</script>
