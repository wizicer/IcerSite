# VIM Diary

## 2016-5-19

Q: Count number of matches of a pattern
A: 

To count the number of matches of a pattern, use the substitute command with the n flag. The
following shows the number of times that pattern matches text in the current buffer:

:%s/pattern//gn
Omit g to display the number of lines where the pattern matches:

:%s/pattern//n

[Link](http://vim.wikia.com/wiki/Count_number_of_matches_of_a_pattern)


## 2015-5-20

Q: pipe content from console output to vim
A: `vim -`, eg: `ls -la | vim -`

Q: shortcut to exit vim
A:
  * `ZZ` save and exit
  * `ZQ` exit without save
