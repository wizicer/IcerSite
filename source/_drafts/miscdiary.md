# Misc Diary


## 2016-5-5

### Vim in textarea in browser

Extension `wasavi`

## 2016-4-28

### UAC `default` vs `not dim`

`not dim` means no secure desktop launched, it's highly risky that already a malware on your PC.

## 2016-4-27

### Import/export settings of BeyondCompare with command line

No such command line support, however, we can simply overwrite the setting file.

### Merge two OneNote pages

Sadly, no convenience way.


## 2016-4-22

### separate MultiProg compiler from itself

0. `eCLR.dll` is compiled as managed CPP with lots of unsafe compiler option.
0. the program is generated under project folder with `.exe` extension.
0. `eCLR.dll` start process `/eCLR/CIL-Compiler` to compile from project to binary using method
   named LinkImage.  (with uncertainty)
0. Execute `/eCLR/CIL-Compiler/____.exe ___/res/___.exe` would generate `___.img`.

### Supported language(syntax) highlighting of gitlab/github

Github use linguist as Parser.

## 2016-4-21

### Markdown table with multi-line cell

Markdown not support it and so did some famous enhancement of original markdown,
use following workaround:

1. Use `<BR />` or directly HTML code.
2. Consider re-organize content to get rid of multi-line content.

## No Answer Questions

### Markdown preprocessor

Could try ejs
