---
title: School Album Batch Downloader V1.11 BUILD0512
slug: album-downloader
tags:
- 作品展示
- 下载器
- 客户端
categories:
- program
date: 2009-05-12
lang: en
translateDate: 9/30/2023
---

Album downloader developed for the intranet
 It is convenient for students to download in bulk
 Requires .NET 2.0

# Features:
 1. In the download directory, a picture browsing page in the form of a web page will be generated
 2. You can directly view the picture thumbnail in the software
 3. It can be downloaded quickly and in batches, and supports batch execution of setting tasks

# Update content
Updated on May 12, 2009:
 1. Modify the download mechanism to prevent freezing.

Updated on May 10, 2009:
 1. Fixed the problem that the previous version could not download multiple albums in order to improve the speed;
 2. Most of the code is refactored to improve efficiency;
 3. Add the function of remembering login status, which is recorded by IE's cookie.

Updated April 29, 2009:
 1. Greatly improve the login speed;
 2. Fixed the error of copying and pasting links on the homepage;
 3. The download process is changed to asynchronous transfer to improve responsiveness.

~~Huajun Download~~ (Sorry, the network service update is too fast, and it is no longer functional, so do not download)

# Instructions for use

Recently, many people have asked me about the specific use of this software, and some aspects may not be done directly enough. Therefore, it can mainly explain the basic operation of the software:

1. **Login**
I don't need to say this, the .net program, the source code is easy to view, and the classmates who are afraid of my number theft will look at the source code to confirm. Also, the username is not remembered by my program, but by IE, and if you don't want to, I turn off IE's cookie.
! [](s2.jpg)

2. **Download Album**
First copy the address of your favorite album on the intranet, of course, you can also copy the user name to view all the albums of the user, as shown below:
! [](s1.jpg)
! [](s3.jpg)

3. **Click Get from clipboard**
If it is an album, it will go directly to the list, and if it is a user, it will be placed in the left box. (Note: There are many places in the school that can be copied and pasted directly)
! [](s4.jpg)
If you are a user, when the user ID number appears in the left box, **Click Get Albums** to put all the user's albums into the download list.
! [](s5.jpg)
Note: The download list supports right-click for simple removal.

4. **View thumbnails**
Double-click an item in the list to display all the photos of the album in the lower box, and double-click an item to view the thumbnail of the picture.
! [](s6.jpg)

5. **Batch download**
Click Batch Download in the upper right corner to start batch downloading the items in the list above. Before you begin, you need to select a save directory.
! [](s7.jpg)
The various statuses are shown in the figure:
! [](s8.jpg)

6. **Click to get friends list**
You can easily get a list of all your friends, and you can click Get Album to get all the albums of that friend.
! [](s9.jpg)

7. **File Directory Structure**
Each album directory contains an index.htm file that can be opened like an album to view all pictures.
! [](s10.jpg)

Finally, thank you for checking out, thank you for your support, and welcome suggestions and suggestions for improvement.
