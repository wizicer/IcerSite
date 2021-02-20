---
title: "XnView replace background with transparent color"
ref: "XnView replace background with transparent color"
date: 2016-5-9
lang: en
category: Misc
---

<!--more-->

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
