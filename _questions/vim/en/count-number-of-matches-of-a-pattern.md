---
title: "Count number of matches of a pattern"
ref: "Count number of matches of a pattern"
date: 2016-5-10
lang: en
category: Vim
---

To count the number of matches of a pattern, use the substitute command with the n flag. The
following shows the number of times that pattern matches text in the current buffer:

```
:%s/pattern//gn
```

<!--more-->

Omit g to display the number of lines where the pattern matches:

```
:%s/pattern//n
```

[Link](http://vim.wikia.com/wiki/Count_number_of_matches_of_a_pattern)
