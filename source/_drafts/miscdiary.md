# Misc Diary

## 2016-5-14

### XnView replace background with transparent color

**Step 1: Determine the transparent colour**

In some images, the background colour is different to all the other colours and it's obvious which
is the background colour. But in some images it might be not so obvious. 

In this case you can use the colour info to determine the index of the background colour: 

0. Select menu "View > Display Colour Information" The mouse cursor's shape will change to a
   pipette. Also next to the mouse cursor, the index, the RGB colour and Hex value of the colour
   will be displayed. 
0. Move the mouse cursor to an area for your image which is the background. 
0. Now remember the index of the colour which ranges from 0..255 

**Step 2: Set the transparent colour**

Now that you have reduced size and set reduced colour depth of your image, you finally set the
transparent colour of your image.

For setting the transparent colour (assuming that XnView and your image are still open) 

0. Open the "Colour map" dialog using menu "Image > Edit colour map" 
0. Click onto the colour with the index that you have determined above in Step 3.). 
0. If you have used an odd colour (e.g. magenta) as background, double click onto the selected
   colour. Now you can change the colour of your transparent colour to whichever colour you like
   (actually it doesn't matter much, since the colour will be transparent in real life.). 
0. Set the checkbox "Use transparent colour" 

Note: Make sure you first perform b.) and then d.), otherwise the transparent colour will not be
set properly.

[Link](http://newsgroup.xnview.com/viewtopic.php?t=5595)

## 2016-5-9

### find binddn of ldap

`dsquery user -name Ja*` [Link](http://serverfault.com/questions/130543/how-can-i-figure-out-my-ldap-connection-string)

### test ldap?

Only way is to use a tool.

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

## 2016-4-26

### wrong spell check in OneNote -- appears full of red lines

OneNote -> Review -> Language -> Set Spell Checker -> proper language

## 2016-4-25

### how to uninstall all dependency no longer available in package.json

`npm prune`

### hexo break line even without an empty line

Set in `_config.yml`
```
marked:
  breaks: false
```

[Link](https://github.com/hexojs/hexo-renderer-marked)

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
