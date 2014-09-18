title: 应用于智能家居控制的PLC
author:
  name: 梁爽
  url: http://icerdesign.com
output: plcofhomeautomation.html
controls: true
theme: ..\template\reveal-cleaver-theme

--

# 应用于智能家居控制的PLC

--

## 目录

* `PLC简介`
* 智能家居现状
* 未来方向
* 当前成果

--

### PLC

可编程逻辑控制器（Programmable Logic Controller，PLC）

它采用一类可编程的存储器，用于其内部存储程序，执行逻辑运算、顺序控制、定时、计数与算术操作等面向用户的指令，并通过数字或模拟式输入/输出控制各种类型的机械或生产过程。

> 来源：[百度百科](plc)

--

### 优势

* 不用繁琐的搭建开发执行环境
* 编程方式简单且易于掌握
* 编程过程更倾向于自动化领域的标准方式

--

### 61131.3标准

* 图形化语言
  * 梯形图（LD）
  * 功能模块图（FBD）
  * 顺序功能图（SFC）
* 文本语言
  * 语句表（IL）
  * 结构文本（ST）

--

### 梯形图（LD）

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/Ladder.jpg)

--

### 功能模块图（FBD）

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/editor.jpg)

--

### 顺序功能图（SFC）

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/SFC.jpg)

--

### 语句表（IL）

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/IL.jpg)

--

### 结构文本（ST）

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/sourcecode.jpg)

--

## 目录

* PLC简介
* `智能家居现状`
* 未来方向
* 当前成果

--

### 智能家居的误区

* 智能家居=智能家电？ 
> `eg.将冰箱等所有传统家庭设备连入网络？`
* 智能家居=智能监控？ 
> `eg.远程监控屋内情况？`
* 智能家居=智能控制？ 
> `eg.用手机替代遥控器？`

--

# 这是我们想要的智能家居？

--

# 不是！
## 这就是我们的结论

--

## 非常抱歉

我们也不知道智能家居的真正未来是什么样的。。。

--

## 目录

* PLC简介
* 智能家居现状
* `未来方向`
* 当前成果

--

### 未来方向

* 借助成熟的PLC打造智能家居的控制平台
* 通过增加系统实时性以保证任务的顺利完成
* 增加沙盒机制打造App平台
* 增加安全栓机制确保平台的运行安全性

--

## 目录

* PLC简介
* 智能家居现状
* 未来方向
* `当前成果`

--

### 成果目标

目标：打造一款拥有自主产权的PLC，作为核心

我们需要打造以下部件：

* 上位机控制软件
* 图形化编辑器
* 图形化在线调试
* 编译器
* 运行时环境

--

接下来是`美图欣赏`

--

## 硬件平台

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/hardware.jpg)

--

## 上位机控制界面

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/controlUI.jpg)

--

## 图形化编辑器

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/editor.jpg)

--

## HTML5的梯形图编辑器

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/ladderUI.png)

--

## 源代码

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/sourcecode.jpg)

--

## 目标代码

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/targetcode.jpg)

--

## 运行图

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/plcofhomeautomation/runninglcd.jpg)

--

# 欢迎加入
## 如果你对`PLC`或`编译器`或`编辑器`的开发有兴趣

--

# 谢谢


[format]: https://github.com/jdan/cleaver
[plc]: http://baike.baidu.com/subview/3180185/11149814.htm?from_id=275974&type=syn&fromtitle=PLC&fr=aladdin
