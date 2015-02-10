﻿title: 基于wifi、红外和蓝牙4.0的家庭智能控制
author:
  name: 梁爽、余其涛、秦建鑫
  url: http://icerdesign.com
output: smarthome.html
controls: true

--

# 家庭智能控制
## 基于**wifi**、**红外**和**蓝牙4.0**

--

# 设计理念

--

### 为什么要智能控制？

* 最基本的目标是为人们提供一个`舒适`、`安全`、`方便`和`高效`的生活环境

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/smarthome/smart_home_scratch.jpg)

--

### 目标和限制

* 将更多的用户设备接入到智能家庭控制中来
* 使用通用的方式支持用户的老旧设备

--

### 功能

* 智能家电控制
* 智能灯光控制
* 电动窗帘控制
* 防盗报警
* 门禁对讲
* 煤气泄露检测
* 本地控制
* 手机远程控制
* 定时控制
* 。。。

--

# 设计方案

--

### 总体方案


* 控制中枢分为主机和分机（廉价分机以用以降低成本）
* 每一个房间一个主机或分机，或者在没有红外需求的相邻小房间可以考虑使用同一个分机

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/smarthome/smart_home_overview.jpg)

--

### 主机方案——硬件
* 主板选择
  * ARM芯片
* 必备组件
  * Wifi模块
  * 红外模块（含发射和录制）
  * 蓝牙模块
  * 存储

--
### 主机方案——硬件
* 选配组件
  * 摄像头模块
  * 各种传感器
  * 433M/315M射频模块

--

### 主机方案——软件

* 运行ARM版Linux

--

### 从机方案——硬件

* 主板选择
  * 廉价Cortex核
* 必备组件
  * Wifi模块
  * 红外模块（含发射和录制）
  * 极其有限的存储

--

### 从机方案——硬件
* 选配组件
  * 摄像头模块
  * 蓝牙模块
  * 各种传感器
  * 433M/315M射频模块

--

### 智能受控插线板——Wifi受控插线板

* 通过网络，认证用户可以通过移动客户端等方式进行远程控制
* 其自身可以存储多组定时数据
* 可进行离线定时开关操作

--

### 智能受控插线板——红外受控插线板

* 通过红外线进行控制
* 根据接收到的红外指令可以简单被控制为`开启`或者`关闭`

--

### 手机软件

* 监察家庭设备情况
* 远程控制家庭设备

--

### 服务方案

* 提供服务器供用户设备连接，以备用户手机连接进行操作（配置，监控）

--

# 关键技术
## 硬件部分：蓝牙、Wifi、红外

--

### 蓝牙

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/smarthome/bluetooth_compatibility.jpg)

我们使用`Bluetooth SMART`，即`蓝牙BLE`

--

### 红外

* 红外信息接收，用于录制其他遥控的信息
* 多向（至少6向以尽量确保无死角发射）红外信息发送

--

### Wifi

* 主机模式，可被连接，连接后可直接打开浏览器或移动客户端进行配置
* 从机模式，连入互联网/局域网进行智能控制
* 中继模式，在家庭中扩展无线网络范围

--

# 关键技术
## 接口部分：可扩展模块化设计

--

### 模块化设计连接装置

使用模块化设计的方法设计连接装置，用以连接蓝牙模块、433/315M射频模块以及未来可能新增的其他无线或有线传输方式。

--

### 模块化设计传感器

使用模块化设计的方法设计传感器连接，以保证未来更多的新型传感器都能方便快速的接入该平台，故我们进行以下约束：
1. 使用IIC连接
2. 所有传感器均数字化传输（模拟量须先行做AD转换）
3. 采集频率不能高于100Hz

--

# 关键技术
## 软件部分：移动App、服务器和通道加密

--

### 移动App

* 界面设计：符合各平台的风格，并易于用户操作
* 跨平台设计：无论哪一种移动平台背后均使用同样的方式接入服务器
* 流畅：作为用户控制家庭设备的中枢，使用频度异常之高，故必须可快速开启使用
* 快捷：为用户提供可选的快捷方式，以快速完成部分常用操作
* 内置常用遥控：为用户准备常用的遥控设置，以使得大部分用户可以不用特意配置便可使用。

--

### 服务器及通道加密

* Rest风格服务：以最容易理解的方式进行服务
* API开放：开放的API可以方便三方开发者加入，同时也可以使极客用户定制自己的产品
* OAuth2.0验证机制：以确保用户的认证安全
* 全程SSL加密：以此来保障通信数据的绝对安全
* 遥控配置云分享：鼓励用户将自己配置好的遥控信息写好品牌等信息分享给其他用户使用

--

# 关键技术
## 安全部分：离线操作及安全栅

--

### 离线操作

* 用户与控制中枢处于同一网络环境时，即使不与互联网连接也可以直接进行操控

--

### 安全栅

* 用户可以设置受控设备的类型，系统根据设备类型自动匹配一定的安全栅规则
* 用户亦可自行设定设备的安全栅规则
* 通常规则如下：
  * 电流量连续XX分钟超过XXmA
  * 通电时长超过XX分钟
  * 开启时间只能是XX:XX到XX:XX
  * ...

[format]: https://github.com/jdan/cleaver