---
title: "`gf` with auto file extension, especially in wiki markdown"
ref: "`gf` with auto file extension, especially in wiki markdown"
date: 2016-4-20
lang: en
category: Vim
---

Put following in vimrc

```vim
autocmd FileType markdown setlocal suffixesadd=.md,.markdown
```
