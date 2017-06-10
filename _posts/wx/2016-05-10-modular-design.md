---
title: 模块化设计
tags:
- 微信
categories:
- 冰河杂谈
date: 2014-3-9
---
![](2-ara1.jpg)

在CES2014上，中兴展出了一款叫做`Eco-Mobius`的模块化手机，所谓模块化即是允许用户对手机中的一些部件进行更换，由于中兴的这款手机还是纯粹的概念机，是只能展示在橱柜中模型，所以他也只是畅想了一下：可以更换摄像头、电池、显示屏、处理器、内存等方面。

![](2-zte.jpg)


如果大家还有点印象的话，应该会想起来13年上半年便有新闻出来，提到Moto的`Project Ara`计划，最近的新闻更是说这种手机的原型已经接近完成了，预计明年（即2015年）有望出货，而且仅要50美元。

![](2-ara2.jpg)

这种模块化手机的最大特色就是把各种手机中的模块拆分出来，让用户自行选择。其实这种思路并不新鲜，电脑diy就是这样的思路，由于不同的用户根据自己的需求，会产生不同的使用场景，故其所需要的配置也不一样，类似于我们配电脑的时候，为了让游戏可以有更好更流畅的显示效果，用户会选择更加高档的显卡，而现如今用户也有了这样的选择，喜欢游戏的用户不用为了那颗高速的芯片而被迫花大价钱购买那颗高质量的照相机了。尤其是在这个拥有众多手机游戏爱好者的年代。

不过，对于这种模块化手机来说，要想大部分主要部件都可模块化还是非常有难度，主要有以下几个方面的挑战：

* `通信接口问题`，就如工控行业多年来各个厂商都有各自的通信协议及方式一样，尚无领导者的模块化手机也一定会经历很长一段时间接口不统一问题，对消费者最直接的伤害就是各个厂商出品的模块无法通用。

  不过即便对于原始厂商来说，就算自己的模块遵循同样的协议规范，要确保各种不同档次的部件可以被用户自由组合后正常使用而不出现兼容性问题，对于生产厂商来说也是一个难题，就如21世纪初，购置内存条常常都要担心是否能兼容的问题一样，是需要多年的磨合以及厂商们的共同努力才能解决的。

* `通信速度问题`，模块间想要高速通信的话，那成本一定是十分高昂的，尤其是还允许随意组合的方式，当然对于这个问题，我倒是觉得可以借鉴工控领域里面控制器的普遍做法，核心处理部件集成在一起，可以扩展的仅仅是IO接口和通讯接口。

  ![](2-xiaomi.jpg)

  在网上搜索中又发现了小米手机的雷军也曾在微博中提到他们YY的模块化手机，从图片上可以看出模块化比较简单，分成四个部分：`屏幕`、`电池`、`核心`、`摄像头`，的确这样能比较好控制整机的品质，无论用户想要怎么配合部件，手机的基本形状都是不会变化的。

* `外观`，太过灵活的模块，会对模块的要求极高，要么每个模块的边角都是一样的，这样将会使得手机失去个性化，要是模块边角不一致又会导致不易拼装组合。

  不过`Project Ara`又提出了可以使用3D打印的方式做模块，如果未来随着3D打印的普及，用打印出来的个性化外壳包装一堆模块，的确应该是一个很好的方向。

手机并不是我关心的方向，故就此打住，接下来我们来看看这种模块化的思想是否可以应用到工业控制或家居控制中来。

对于`工业控制`，由于其成本高昂，且不是那么在意外观，故实现模块化扩展很多年了，貌似的确没有什么启发意义。

对于`家居控制`，现在的主要两派，一派使用传统工业控制的硬件和软件搭建控制中心，是和上面说的的一样，早已实现模块化，但因为其成本高、操作复杂，常被另一派斥责。

这另一派使用全新的技术，使用互联网模式打造，重用户体验和简化操作，因为及其重视简单易用，故大多都在尽量做其垂直领域的大而全产品（俗称平台级产品），几乎完全不提供扩展或局部升级的方案。

之前关注过一款智能设备，他可以通过无线Wifi连接到你的手机端，它本身可以录制红外信号，使得你可以通过你的手机远程令其发射预置的红外信号，以达到控制家用电器的能力，本身还是挺不错的，不过问题就在于这款设备不支持`IO`或`通信`端口的扩展，对于大部分红外家电常用同一个信号做开和关的功能，在你完全不知道该设备的状态，是非常容易出现误操作，发送了关机命令但由于没有反馈机制意外丢失信号没能正常关机，的确无法让普通用户对这样的智能设备完全的放心。

由于现有的家电通常都没有现成的接口可供智能设备使用，故现在最关键的还是得让这样的设备多些传感器模块，增强反馈，而这些传感器模块正是我们现在最希望和需要用模块化的方式接入的。