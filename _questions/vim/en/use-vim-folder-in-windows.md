---
title: "use .vim folder in windows"
date: 2016-4-25
lang: en
category: Vim
---

Add following lines to vimrc:
```vim
if has('win32') || has('win64')
  set runtimepath=$HOME/.vim,$VIM/vimfiles,$VIMRUNTIME,$VIM/vimfiles/after,$HOME/.vim/after
endif
```

[Link](http://stackoverflow.com/questions/5440281/is-it-possible-to-use-a-folder-named-vimfiles-to-replace-vim-in-macvim)
