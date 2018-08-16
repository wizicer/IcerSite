---
title: disk space shortage and need to find the largest one
date: 2016-5-18
lang: en
category: Linux
---

1. `df` to roughly find largest mount
2. `du -m --max-depth 1 | sort -rn | head -11` to find TOP 10 by size directories

Hint: use `-h` for human readable size format

