---
title: "`LoadFile` vs `LoadFrom` in `Assembly`"
date: 2016-5-12
lang: en
category: C#
---

* `LoadFrom`, default action when .Net load assembly, load only once for same identity even in two
  location with different meta data.
* `LoadFile`, load exactly what was requested, and would not load dependency.
