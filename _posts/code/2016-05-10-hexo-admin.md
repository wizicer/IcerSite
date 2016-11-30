---
title: hexo-admin - 静态博客的后台管理程序[JS]
tags:
- Hexo
- JS
- 视频
categories:
- 源代码分析
date: 2015-02-23
---

# 基本信息

* 名字：[hexo-admin]
* 版本：0.1.3
* 开源协议：ISC
* 说明：静态博客hexo的专用后台管理程序

这个主要是找来给我老婆使用的，因为她不懂程序，也不打算懂得如何push/pull，能劝说她加入到markdown的行列已经是非常不易的了，所以找来这个后台程序配合上我帮她搭建的[hexo博客](http://hiyaphoto.com)，让她可以方便直观的编辑后台文章。

用下来总体感觉还不错，不过缺少一些重要功能，于是我在自己[wizicer的fork]上面加了删除功能，不过因为当时遭遇到hexo本身的一个编辑过程会出现大量posts重复的bug，没时间把问题解决完，故也没有把更新PR过去。

另外，图片相关功能也是相当弱的，基本上都是在另外地方先传好图片（用的七牛）再贴过来的。作者给自己提了一个issue就是改进图片上传功能，不过还是open状态。

还有一个较为严重的问题就是编辑页面标题会产生新页面（并产生重复）而不是改名，(*edit:不过刚才看了一下最新的repo情况，貌似最新的[0.2.0](https://github.com/jaredly/hexo-admin/commit/2b5f8529585fc2a6e9afe451f36af6e355a88e66)修复了，尚未测试了。*)

# 依赖情况

## 框架组件
* [body-parser]: 用于解析http请求的正文(body)部分的中间件，不支持multipart的正文（主要用作上传文件使用）。server中必备组件之一，这类型的组件，最近我倾向于使用[busboy]。
* [serve-static]: 顾名思义，用于伺服静态文件的组件。在本程序中主要是伺服图片样式等静态文件。
* [react]: facebook出的一种UI框架，所以通常会是MVC中的V部分
* [react-router]: 专为react设计的路由库，和react合并使用，成为MVC中的C部分

## 基本组件
* [es6-promise]: 轻量级的异步代码管理组件，将异步执行的代码拥有同步代码的阅读体验。
* [lodash]: 比[underscore]功能更加丰富的库，基本使用方法都是一样的，顾名思义也知道这个是后出来希望替代其前辈的基本类库，主要是为js带来一系列函数式编程体验的扩展方法。
* [marked]: 一个markdown解析库，自称效率极高。

## 点睛组件
* [moment]: 功能丰富的用于操作日期时间的库，可以方便的将时间转换成适合人类阅读的样式（例如：30分钟前）。
* [code-mirror]: 非常著名的在线代码编辑器，在本程序中主要用于markdown的高亮。需要注意的是在npm上面，该组件已经更名为[codemirror]。
* [superagent]: 使用流式接口(Fluent API)的优雅且功能丰富的HTTP操作（Ajax）组件。
* [superagent-browserify]: 使得superagent可以和[browserify]一起工作的封装。
* [reactify]: 使得转换JSX的功能（主要用在React框架中的一种文件格式）可以和[browserify]一起工作的封装，本工程中主要用于制作demo站点。

## 样式组件

* [normalize.css]: 初始化页面样式的基础样式，专为HTML5优化
* [font-awesome]: 极其丰富且易用的图标集
* 字体：[OpenSans]，[Inconsolata]

## 其他组件

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

# 五分钟带你熟悉源代码

(视频晚点添加)

# 总结评分

**评分为1-5分，5分最高**

* 代码清晰度： 3
* 适宜维护度： 1
* 弱化依赖度： 3
* 系统稳定度： 1
* 作者维护度： 1

*注意：此评分为冰河魔法师一家之言，仅供参考*

[hexo-admin]: http://jaredly.github.io/hexo-admin/
[wizicer的fork]: https://github.com/wizicer/hexo-admin

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
