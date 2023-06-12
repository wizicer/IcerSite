<template>
  <PostItem v-for="item in postList.filter((_) => _.lang == lang.value)" v-bind="item"></PostItem>
</template>

<script setup lang="ts">
import { postList } from "../utils";
import { useData, withBase } from "vitepress";
import { computed } from "vue";
const { lang } = useData();
</script>
