---
title: Write with Markdown on the WeChat public platform
tags:
- 技术
- 微信
categories:
- 冰河杂谈
date: 2014-03-06
ref: writing-with-markdown-in-wechat
lang: en
translateDate: 9/30/2023
---
## Why?
Writing with [Markdown] is a way I like very much, after all, the pure text way of writing will be the least disturbed, do not worry about typography, do not worry about the font, everything is already preset, of course, with the powerful customizable features of CSS can make the effect as you like, here is to use this feature to customize.

> to add here that [Markdown] has won the love of a large number of professional writers in recent years with its simple grammar, easier to learn and type, and if writing is an indispensable part of your life and you don't know [Markdown], now is the time to find out.

Okay, back here, if you decide to read on, you already have the consciousness to write with [Markdown], let's move on to the WeChat public platform.

For two purposes, one is that my articles can be sent not only on the WeChat public platform, but also to blogs or other places without reformatting and continue to have rich layout effects, and secondly, it can be easily written, so there is no doubt that [Markdown], which was already my writing tool, was definitely elected.

The WeChat public platform has some restrictions so that the general ordinary copy and paste [Markdown] generated articles will be somewhat lacking, through the Internet search found that no one solved, so personally go to the battle to solve it, here will be the steps and situation shared, convenient for everyone's reference and use.

## How to use?

### Preconditions
* [Pandoc] Please download and install it from the official website

### Method one

* Get project files:
```
$ git clone https://github.com/wizicer/wx-article-starter.git
```
* Add your own [Markdown] file with '.md' as the extension
* Execute 'build.bat' to generate 'html' files
* Open the file and copy and paste it into the edit window of the WeChat official platform

### Method two
* Fork the project
* Download the project locally
* Add your own [Markdown] file with '.md' as the extension
* Execute 'build.bat' to generate 'html' files
* Open the file and copy and paste it into the edit window of the WeChat official platform

## How do I modify the style?

> The following specific steps are ignored for users who do not need to modify the style

The WeChat public platform, as a terminal for many news distribution, has its own peculiarities, and I found the following limitations (may not be complete, it will be constantly added):

* Filter out `<div>`/`<a>` tags (i.e. no full-page background, no links)
* Preset a CSS file that changes the CSS style that is not explicitly specified

On the basis of understanding the above limitations, it is good to do, as follows:

* Prepare a document generated using [Markdown].
**KEY STEP**: Download a copy of WeChat's preset CSS as 'OVERRIDE .css' and 'link' it to the page
* Linking the 'style.css' we created ourselves, I chose the style I used to use [Markdown].
* Adjust the 'style.css' file and preview it in your browser until satisfied

In fact, the key point is the CSS file preset by WeChat.

> **Note**: This article will be updated iteratively, please check the web version for the latest version

[pandoc]: http://johnmacfarlane.net/pandoc/
[Markdown]: http://daringfireball.net/projects/markdown/
