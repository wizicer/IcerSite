title: hexo-admin - An Admin Interface for Hexo[JS]
tags:
- Hexo
- JS
categories:
- Code Analysis
date: 2015-05-27
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

* [body-parser]: middleware to parse body of http request，not support multipart bodies (used in
  upload file). One of you must have component in server development. Recently, I prefer using
  [busboy].
* [serve-static]: easy to understand by its name, serve static files in server. It used to serve
  image and style files.
* [react]: very famous UI framework maintained by Facebook, it acts as View in MVC architecture.
* [react-router]: router library for react, it acts as Controller in MVC architecture.

## Basic Components

* [es6-promise]: lightweight library for organizing asynchronous, with its help, you can write
  asynchronous code like writing synchronous code.
* [lodash]: a library like [underscore] with more function，the basic usage is same.
* [lodash]: 比[underscore]功能更加丰富的库，基本使用方法都是一样的，顾名思义也知道这个是后出来希望替代其前辈的基本类库，主要是为js带来一系列函数式编程体验的扩展方法。
* [marked]: 一个markdown解析库，自称效率极高。

## Special Components

* [moment]: 功能丰富的用于操作日期时间的库，可以方便的将时间转换成适合人类阅读的样式（例如：30分钟前）。
* [code-mirror]: 非常著名的在线代码编辑器，在本程序中主要用于markdown的高亮。需要注意的是在npm上面，该组件已经更名为[codemirror]。
* [superagent]: 使用流式接口(Fluent API)的优雅且功能丰富的HTTP操作（Ajax）组件。
* [superagent-browserify]: 使得superagent可以和[browserify]一起工作的封装。
* [reactify]: 使得转换JSX的功能（主要用在React框架中的一种文件格式）可以和[browserify]一起工作的封装，本工程中主要用于制作demo站点。

## Style

* [normalize.css]: 初始化页面样式的基础样式，专为HTML5优化
* [font-awesome]: 极其丰富且易用的图标集
* Font：[OpenSans]，[Inconsolata]

## Other Components

必须要提到的是[Hexo]是其正常运行的根本，安装方法请参照[hexo-admin]。

另外一个必须提到的是[Casper]主题，样式文件`/www/css/screen.css`就是出自此主题。

# 开发方法

原作者提供了makefile，不过对于windows用户来说，这个貌似不太友好，虽然有omake，cygwin等可选，反正结果就是我都没有用，所以我在自己[wizicer的fork]上面改成使用grunt了。

如果你使用原作者的方式，那就是如下命令：

* `npm test`: 运行测试方法，不过该工程没有一个测试用例，且该命令会告诉你该命令不存在。
* `npm prepublish`: 启动预发布状态，主要就是编译一下less文件。

如果你使用[wizicer的fork]，那就是如下命令：

* `grunt`: 以开发状态启动，会监控磁盘文件变化。
* `grunt pub`: 编译文件，准备发布。

# Mark

**Mark from 1-5, 5 is best**

* Code Clearness： 3
* Easy to maintenance： 1
* Light dependencies： 3
* Stability： 1
* Maintenance Frequency： 1

*Note: this mark is from Icer, for your reference only*

[hexo-admin]: http://jaredly.github.io/hexo-admin/
[fork of wizicer]: https://github.com/wizicer/hexo-admin

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
