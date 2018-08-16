---
title: "async WPF click event for CPU intensive operation"
date: 2016-5-11
lang: en
category: C#
---

Lesson learned:

1. Don't use async/await in .Net 4.0.
2. Use `Task.Run` to replace the CPU intensive code.
3. Need to manually fire `PropertyChanged` event for ViewModel.
