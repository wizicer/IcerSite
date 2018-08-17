---
title: "How to 'blame' a deleted line"
ref: "How to 'blame' a deleted line"
date: 2016-5-18
lang: en
category: Git
---

```sh
git log -S <string> path/to/file(wildcard supported)
git log -G <regex> path/to/file(wildcard supported)
```
