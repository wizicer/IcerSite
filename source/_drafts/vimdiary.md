# VIM Diary

## 2015-5-20

### pipe content from console output to vim

`vim -`, eg: `ls -la | vim -`

### shortcut to exit vim

* `ZZ` save and exit
* `ZQ` exit without save

### Highlight changes in unified diff

0. copy diff.vim from installation location to your own customizable location.
0. modify diff.vim like following:

```patch
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

:%s/pattern//gn
Omit g to display the number of lines where the pattern matches:

:%s/pattern//n

[Link](http://vim.wikia.com/wiki/Count_number_of_matches_of_a_pattern)

## 2016-5-3

### Perform same operation across buffers

1. store operation in macro `a`
2. [OPTIONAL] `set nomore` to avoid interruption during processing
3. `:bufdo execute "norma! @a" | update`

## 2016-4-29

### Pick the first spell suggestion

`1z=`

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
2. refer to [Link](https://github.com/vim/vim/blob/master/appveyor.yml)

## No Answer Questions

### Convert `Space Separated` to CamelCase

No answer.
