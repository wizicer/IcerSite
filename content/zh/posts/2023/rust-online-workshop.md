---
title: Rust开发工作坊（线上直播）
tags:
  - 编程
  - 活动
date: 2023-09-07
updated: 2023-10-05
wip: true
lessons:
  - date: 23/9/7
    bili: https://www.bilibili.com/video/BV1bG411R7t1/
  - date: 23/9/21
    bili: https://www.bilibili.com/video/BV1Fm4y157GA/
  - date: 23/9/28
    bili: https://www.bilibili.com/video/BV1eN411E7Eo/
  - date: 23/10/5
  - date: 23/10/12
  - date: 23/10/19
  - date: 23/10/26
  - date: 23/11/2
  - date: 23/11/9
  - date: 23/11/16
  - date: 23/11/23
  - date: 23/11/30
  - date: 23/12/7
  - date: 23/12/14
  - date: 23/12/21
  - date: 23/12/28
  - date: 24/1/4
  - date: 24/1/11
  - date: 24/1/18
  - date: 24/1/25
  - date: 24/2/1
#   - date: 24/2/8 // day before lunar new year'eve
#   - date: 24/2/15 // lunar first month, 6th
  - date: 24/2/22
  - date: 24/2/29
  - date: 24/3/7
  - date: 24/3/14
  - date: 24/3/21
  - date: 24/3/28
#   - date: 24/4/4 //qingming
  - date: 24/4/11
  - date: 24/4/18
  - date: 24/4/25
  - date: 24/5/2
  - date: 24/5/9
  - date: 24/5/16
  - date: 24/5/23
  - date: 24/5/30
  - date: 24/6/6
slides:
  - name: 00 - Rust 入门
    link: 00-introduction
    lessons: 3
  - name: 01 - 所有权
    lessons: 1
  - name: 02 - 结构化数据
    lessons: 2
  - name: 03 - 泛型 & 特性
    lessons: 3
  - name: 04 - 闭包
    lessons: 1
  - name: "05 - std: 标准库"
    lessons: 2
  - name: "06 - std: 指针类型"
    lessons: 1
  - name: "07 - 杂项: 语法，包，标准库"
    lessons: 2
  - name: 08 - I/O（输入/输出）
    lessons: 2
  - name: 09 - 网络编程
    lessons: 1
  - name: 10 - 并发 I
    lessons: 3
  - name: 11 - 并发 II
    lessons: 3
  - name: 12 - 非安全代码 & 外部函数接口（FFI）
    lessons: 3
  - name: 13 - 宏!
    lessons: 2
  - name: 14 - 社区/贡献
    lessons: 1
  - name: 15 - Rust的夜间版本
    lessons: 3
  - name: 16 - 高阶特性边界
    lessons: 1
  - name: 17 - 借用 & 所有权
    lessons: 1
  - name: 18 - 跨平台编译
    lessons: 1
---

<script setup>
import { useData } from 'vitepress'
import { isProxy, toRaw } from 'vue';

const { frontmatter } = useData()
const lessons = toRaw(frontmatter.value).lessons
const slides = toRaw(frontmatter.value).slides
let start = 0;
for (let i = 0; i < slides.length; i++) {
  let end = start +slides[i].lessons;
  lessons[start].slide = slides[i];
  start = end;
}

// function getTitle(number) {
//     return `第 ${number} 课【${ lessons[number - 1].date }】 ${ lessons[number - 1]?.name }`;
// }

</script>

<table class="rust_table">

<thead>
<tr>
<td>#</td>
<td>时间</td>
<td>直播</td>
<td>课程</td>
</tr>
</thead>

<tbody>

<tr v-for="(lesson, idx) in lessons">
<td>{{idx+1}}</td>
<td>{{lesson.date}}</td>
<td>
<a v-if="lesson.bili" :href="lesson.bili" target="_blank">回放链接</a>
</td>
<td v-if="lesson.slide && lesson.slide.lessons > 0" :rowspan="lesson.slide.lessons">
<a v-if="lesson.slide.link" :href="lesson.slide.link" target="_blank">{{lesson.slide.name}}</a>
<span v-else>{{lesson.slide.name}}</span>
</td>
</tr>

</tbody>

</table>

<style>
    table.rust_table {

    }
</style>

