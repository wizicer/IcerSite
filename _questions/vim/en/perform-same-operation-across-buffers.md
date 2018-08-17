---
title: "Perform same operation across buffers"
date: 2016-4-29
lang: en
category: Vim
---

1. store operation in macro `a`
2. [OPTIONAL] `set nomore` to avoid interruption during processing
3. `:bufdo execute "norma! @a" | update`
