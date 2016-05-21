title: Vim Diary
tags:
- Vim
categories:
- Diary
description:
  Diary for vim, shortcuts or customization to Vim
date: 2016-5-20
---

## 2015-5-20

### pipe content from console output to vim

`vim -`, eg: `ls -la | vim -`

### shortcut to exit vim

* `ZZ` save and exit
* `ZQ` exit without save

### Highlight changes in unified diff

0. copy diff.vim from installation location to your own customizable location.
0. modify diff.vim like following:

```diff
diff --git a/syntax/diff.vim b/syntax/diff.vim
--- a/syntax/diff.vim
+++ b/syntax/diff.vim
@@ -366,9 +366,9 @@ hi def link diffBDiffer		Constant
 hi def link diffIsA		Constant
 hi def link diffNoEOL		Constant
 hi def link diffCommon		Constant
-hi def link diffRemoved		Special
+hi def link diffRemoved		Error
 hi def link diffChanged		PreProc
-hi def link diffAdded		Identifier
+hi def link diffAdded		Todo
 hi def link diffLine		Statement
 hi def link diffSubname		PreProc
 hi def link diffComment		Comment
```

## 2016-5-19

### Count number of matches of a pattern

To count the number of matches of a pattern, use the substitute command with the n flag. The
following shows the number of times that pattern matches text in the current buffer:

```
:%s/pattern//gn
```

Omit g to display the number of lines where the pattern matches:

```
:%s/pattern//n
```

[Link](http://vim.wikia.com/wiki/Count_number_of_matches_of_a_pattern)

## 2016-5-10

### color scheme in Vim in ConEmu not work

1. follow [guide](http://conemu.github.io/en/VimXterm.html)
2. rename/remove `/bin/vim` from git bash which is not supported.

### multiple condition in Vim

`&&`, tip: help expr

### switch case of letter

`~` in visual mode

## 2016-5-3

### Perform same operation across buffers

1. store operation in macro `a`
2. [OPTIONAL] `set nomore` to avoid interruption during processing
3. `:bufdo execute "norma! @a" | update`

## 2016-4-29

### Pick the first spell suggestion

`1z=`

## 2016-4-25

### use .vim folder in windows

Add following lines to vimrc:
```vim
if has('win32') || has('win64')
  set runtimepath=$HOME/.vim,$VIM/vimfiles,$VIMRUNTIME,$VIM/vimfiles/after,$HOME/.vim/after
endif
```

[Link](http://stackoverflow.com/questions/5440281/is-it-possible-to-use-a-folder-named-vimfiles-to-replace-vim-in-macvim)

### convert VimWiki to markdown using Vim

```
* Convert bold: %s/\*\(.*\)\*/**\1**/g
* Convert named link: %s/\[\[\(.\{-}\)|\(.\{-}\)\]\]/[\2](\1)/g
* Convert link: %s/\[\[\(.\{-}\)\]\]/<\1>/g
* Title: 
  * First: %s/= \(.*\) =/# \1/g
  * May multiple: %s/=\(.*\)=/#\1/g
* Picture: %s/{{\(.\{-}\)}}/![](\1)/g
* Fenced code start: %s/{{{class="brush:\(.*\)"/```\1/g
* Fenced code end: %s/}}}/```/g
* Manual change # ordered list
```

### vim non-greedy search

The non-greedy version of `*` is `\{-}`. So, simply replace `.*` with `.\{-`

[Link](http://vi.stackexchange.com/questions/196/how-to-make-regex-matchers-non-greedy)

## 2016-4-22

### go back end of word (go to end of previous word)

Use `ge`

## 2016-4-21

### `gf` with auto file extension, especially in wiki markdown

Put following in vimrc

```vim
autocmd FileType markdown setlocal suffixesadd=.md,.markdown
```

## 2016-4-20

### Voom plugin with error: python's site module could not be loaded

Due to bug of Python 2.7.11, workaround:

1. Install other version.
2. after install execute following command (of course, need admin privilege). refer to [Link](https://github.com/vim/vim/blob/master/appveyor.yml)
   ```bat
   reg copy HKLM\SOFTWARE\Python\PythonCore\2.7 HKLM\SOFTWARE\Python\PythonCore\2.7-32 /s /reg:32
   reg copy HKLM\SOFTWARE\Python\PythonCore\2.7 HKLM\SOFTWARE\Python\PythonCore\2.7-32 /s /reg:64
   ```

## No Answer Questions

### Convert `Space Separated` to CamelCase

No answer.