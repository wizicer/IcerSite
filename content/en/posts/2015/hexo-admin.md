---
title: hexo-admin - An Admin Interface for Hexo[JS]
tags:
- Javascript
- Hexo
lang: en
ref: hexo-admin
categories:
- 源代码分析
date: 2015-02-23
updated: 2015-05-27
translateDate: 9/30/2023
---

# Basic Information

* Name: [hexo-admin]
* Version: 0.1.3
* License: ISC
* Description: The administrator interface for static blogging program Hexo

My wife don't program, to better use Hexo, I downloaded this plug-in. With its help, my wife can
easily edit her [Hexo Blog](http://hiyaphoto.com) in an intuitive way.

It's really great, however it lack one important feature -- `Delete Post`, so I added it in [fork of
wizicer].

I found another really annoying bug of Hexo itself, which made this plug-in less useful: every time
you save file, a duplicated post would appear in local Hexo blog.

(*edit: since Hexo 3.0, this issue has been fixed*)

The blog of my wife is about photograph, there are lots of opportunity to embed image in blog. She
complains a lot about images. Currently, she would like to upload to some place else and then paste
the url. There is an open issue raised by author of this plug-in about enhance it with image upload.

There are another severe issue, a new page would be created when you try to edit title, the expected
behavior should be rename the page.

(*edit: just quick glance, it looks fixed in latest
[0.2.0](https://github.com/jaredly/hexo-admin/commit/2b5f8529585fc2a6e9afe451f36af6e355a88e66)*)

# Dependencies

## Framework Components

* [body-parser] : middleware to parse body of http request，not support multipart bodies (used in
  upload file). One of you must have component in server development. Recently, I prefer using
  [busboy].
* [serve-static] : easy to understand by its name, serve static files in server. It used to serve
  image and style files.
* [react] : very famous UI framework maintained by Facebook, it acts as View in MVC architecture.
* [react-router] : router library for react, it acts as Controller in MVC architecture.

## Basic Components

* [es6-promise] : lightweight library for organizing asynchronous, with its help, you can write
  asynchronous code like writing synchronous code.
* [lodash] : a library like [underscore] with more function，the basic usage is same.
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
