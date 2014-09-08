﻿title: 蓝牙4.0，你跟上了吗？
tags:
- 微信
categories:
- 冰河杂谈
date: 2014-3-16
---
今天主要和大家聊一下蓝牙4.0，首先解释几个名词：

* `BLE`：Bluetooth Low Energy
* `SoC`：System on Chip

## 蓝牙4.0更新了什么？
更新项目到还是挺多的，不过我这里就只列一下我感觉到的值得重视的更新项目：

* 更低的电源消耗，一颗纽扣电池可供`待机`一两年
* 传输距离更远，理论距离比之前的10－20m提高到了100m

好吧，和同学聊了一下这个方案，认为在通信的时候耗电量还是有点大，当时误认为`CC2400`系列只需要`1.7mW`的功率，但查阅资料后发现，那个是待机功率，而不是传输时候的功率。根据`CC2540`的官方手册数据，传输数据的时候需要约`20mA`，按照使用`3.3V`的电压来看，传输数据需要`66mW`，与CC2400系列比起来，功耗几乎相当，不过带宽的确大了很多，所以在此可以看出，他不但没有耗电量过大的问题，还的确拥有不小的优势。

当然使用蓝牙方案的话，还有另外一个好处，就是较为通用，可以不用额外的设备，靠移动设备本身配备的蓝牙功能便可以连接上来，因此如果我们的设备需要应用在生活场景中，甚至本身就常常需要与便携设备打交道，那么应该就不用疑问了，使用蓝牙方案吧。

## CC2540/2541能给我们带来什么？
CC2540是一种SoC方案，包含了一些基本的元素：

* 一颗8051的MCU
* 12位ADC
* 扩展的128k/256k Flash

对我来说，吸引力最大的还是那一颗8051的芯，尤其是还加上了扩展的内存，让我们可以存储相对较长的程序，所以对于很多情况来说，可以大幅度的简化外围设计。

**一点点补充**：其实运行在2.4G频率上的低功耗解决方案也还是不少，不过这一次之所以这么关注这款蓝牙芯片，主要还是因为可以很好的和便携设备结合起来。

## 我们畅想一下拿这个可以做什么？

好了，最后到了最开心的时刻了，就是畅想我们能够拿这款芯片来做什么，其实在上一期文章中已经畅想过新的工业自动化车间的无屏幕尝试，这篇文章其实也就是受到当时的无屏幕实践的驱动，试图寻找一款适合具体实施的芯片。

其实在家居控制里面这个也是有很好的可行性的，比如对于我来说，我现在就特别需要这么一个功能：晚上超过十点尚未熄灯，那就每隔十分钟报时一次以催促睡觉。若使用这款芯片的话，可以考虑接一个光敏电阻作为传感器，将信号发至主机，主机接收信号后根据时间判断操控音箱进行报时操作。

现在很多的可穿戴设备都是已经用上这样的解决方案了，例如各种计步器、手环、健康监控设备，估计未来会有更大一批的设备都会使用这套方案与你手中的平板手机进行互动。

{% ghimg /wizicer/IcerSite/dev/images/wx/5-band.jpg %}