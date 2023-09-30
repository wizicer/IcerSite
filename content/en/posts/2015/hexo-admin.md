---
title: hexo-admin - Admin for static blogs[JS]
tags:
- Javascript
- Hexo
lang: zh
ref: hexo-admin
categories:
- 源代码分析
date: 2015-02-23
translateDate: 9/30/2023
---

# Basic information

* Name: [hexo-admin]
* Version: 0.1.3
* Open source protocol: ISC
* Description: Dedicated background manager for static blog HEXO

This is mainly for my wife, because she does not understand the program, and does not plan to know how to push/pull, it is already very difficult to persuade her to join the ranks of markdown, so I found this background program to cooperate with the [HEXO blog] (http://hiyaphoto.com) I helped her build, so that she can easily and intuitively edit background articles.

The overall feeling was good, but it lacked some important features, so I added a delete function to myself [Wizicer's fork], but because I encountered a large number of posts duplicate bugs in one of the editing processes of Hyo itself, I didn't have time to solve the problem, so I didn't PR the update.

In addition, the picture-related functions are also quite weak, and basically the pictures (seven cows used) are first transmitted in another place and then pasted. The author has mentioned to himself that the image upload function is improved, but it is still open.

There is also a serious problem that editing the page title will result in a new page (and duplicate) instead of changing the name, (*edit: but just looked at the latest repo situation, it seems that the latest [0.2.0] (https://github.com/jaredly/hexo-admin/commit/2b5f8529585fc2a6e9afe451f36af6e355a88e66) fixed, It hasn't been tested yet. *)

# Dependencies

## Framework components
* [body-parser]: Middleware used to parse the body part of an HTTP request, does not support the body of a multipart (mainly used to upload files). One of the prerequisites in server, this type of component, I tend to use [busboy] lately.
* [serve-static] : As the name suggests, a component used to servo static files. In this program, it is mainly servo image style and other static files.
* [react]: A UI framework from Facebook, so it is usually the V part of MVC
* [react-router]: A routing library designed for react, combined with react, to become the C part of MVC

## Basic components
* [es6-promise] : A lightweight asynchronous code management component that will execute asynchronously with a synchronous code reading experience.
* [lodash] : A library with richer features than [underscore], the basic usage is the same, as the name suggests, this is a basic class library that comes out later and hopes to replace its predecessors, mainly to bring a series of functional programming experience to JS extension methods.
* [marked]: A markdown parsing library that claims to be extremely efficient.

## Eye-catching components
* [moment]: Feature-rich library for manipulating datetimes that can easily convert the time to a human-readable style (e.g., 30 minutes ago).
* [code-mirror] : Very famous online code editor, mainly used in this program for highlighting markdown. Note that on npm, the component has been renamed [CodeMirror].
[superagent]: An elegant and feature-rich HTTP manipulation (Ajax) component using the streaming interface (Fluent API).
[superagent-browserify]: A wrapper that enables superagent to work with [browserify].
* [reactify]: A wrapper that enables the ability to convert JSX (primarily a file format used in the React framework) to work with [browserify], and is mainly used to make demo sites in this project.

## Style components

* [normalize.css] : Initializes the base style of the page style, optimized for HTML5
* [font-awesome] : Extremely rich and easy-to-use icon set
* Fonts: [OpenSans], [Inconsolata]

## Other components

It must be mentioned that [Hexo] is the root of its normal operation, please refer to [hexo-admin] for installation methods.

Another theme that must be mentioned is the [Casper] theme, from which the style file '/www/css/screen.css' comes from.

# Development methodology

The original author provided a makefile, but for Windows users, this seems not very friendly, although there are omake, cygwin and other options, anyway, the result is that I am useless, so I changed to use grunt on my [Wizicer's fork].

If you use the original author's way, it would be the following command:

* 'npm test': Run the test method, but the project does not have a test case, and this command will tell you that the command does not exist.
* 'npm prepublish': Initiates the pre-release state, mainly to compile the less file.

If you use [wizicer's fork], that's the following command:

* 'grunt': starts in development state, monitors disk file changes.
* 'grunt pub': compile the file and prepare it for release.

# Summary scoring

**Rated on a scale of 1-5, with 5 being the highest**

* Code clarity: 3
* Maintenance: 1
* Weakening dependency: 3
* System stability: 1
* Author maintenance: 1

*Note: This score is the words of the Ice Sorcerer's family and is for reference only*

[hexo-admin]: http://jaredly.github.io/hexo-admin/
[Wizicer's fork]: https://github.com/wizicer/hexo-admin

[body-parser]: https://www.npmjs.com/package/body-parser
[moment]: https://www.npmjs.com/package/moment
[serve-static]: https://www.npmjs.com/package/serve-static
[code-mirror]: https://www.npmjs.com/package/code-mirror
[es6-promise]: https://www.npmjs.com/package/es6-promise
[react]: https://www.npmjs.com/package/react
[react-router]: https://www.npmjs.com/package/react-router
[lodash]: https://www.npmjs.com/package/lodash
[marked]: https://www.npmjs.com/package/marked
[reactify]: https://www.npmjs.com/package/reactify
[superagent]: https://www.npmjs.com/package/superagent
[superagent-browserify]: https://www.npmjs.com/package/superagent-browserify

[busboy]: https://www.npmjs.org/package/busboy
[codemirror]: https://www.npmjs.com/package/codemirror
[underscore]: https://www.npmjs.com/package/underscore
[browserify]: https://www.npmjs.com/package/browserify
[Casper]: https://github.com/lacymorrow/casper
[Hexo]: http://hexo.io/

[normalize.css]: http://necolas.github.io/normalize.css/
[OpenSans]: http://www.google.com/fonts/specimen/Open+Sans
[Inconsolata]: http://www.google.com/fonts/specimen/Inconsolata
[font-awesome]: http://fortawesome.github.io/Font-Awesome/
