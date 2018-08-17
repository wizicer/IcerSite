---
title: "Highlight changes in unified diff"
date: 2016-5-19
lang: en
category: Vim
---

<!--more-->

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
