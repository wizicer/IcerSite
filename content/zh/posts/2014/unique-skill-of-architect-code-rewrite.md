---
title: 架构师的必杀技——代码重写
tags:
- 架构
- 微信
categories:
- 冰河杂谈
date: 2014-03-18
---
作为软件开发者的你，一定听说过`重构`一词，在我们平时的开发生活中，为了使代码更加易于理解和处理一些代码编写过程中没有注意到的问题，我们会相当频繁的对我们的代码进行重构处理。不过今天我在这里不是想讲该如何重构，或者我们为什么要做重构，如果你的确有这方面的需求你可以查看[《重构：改善既有代码的设计》][refactoring]这本书。

今天我想讲的是`重写`，这是我作为一名入门级架构师屡试不爽的必杀技，在这里分享给你。

其实从思想和技法上来说，重写应该可以归类为重构，但有一点不同的，就是重构**需要熟悉**遗留代码，而重写**不需要熟悉**遗留代码。

> 代码是有生命力的，他会随着时间的推移，逐渐的老去，失去活力。

写出一段好的代码，他的生命力将会很长（何谓好的代码，其实有很多讨论，例如应用`SOLID`原则编写代码，这个就不在这里讨论了），但无论如何，他始终是有生命周期的，终将有老去和失去活力的一天，当那一天到来，我们应该决定推翻重做还是任由其自生自灭？

而且在团队合作中，本来可能以你个人的素养，你可以做到代码永世长青，但是你无法避免你的团队成员破坏你代码的生命力，当然有一个很好的实践——只有代码库的Owner才能签入代码，任何由其他人完成的代码都需要由Owner亲自审核后，亲自签入，故他可以在签入前，保证这段代码的素质是符合自己的，但这对Owner的要求高，且若需要在短时间内开发大型工程就会有极大的局限，Github上的代码几乎都是用这种方式管理的，甚至像Linux这类源代码也是用这种模式进行管理的。

若非上面那种实践，设想你处于一个水平参差不齐的团队，每个人负责一个模块的开发，系统上线进入维护阶段后，某人离职后发现其设计的模块复杂且不易理解，有极大的难度让后续人员去理解并进行修改，这个时候再来考虑重写？

我知道你的疑问，一定会觉得这样是不是成本更高，风险更加不易控制，若你是在这件事情已经发生后才开始考虑重写这件事情，那不用想了，一定是成本很高，且风险极大，这种时候的确不建议轻易下结论重写。

> 于是，我之所以写这篇文章便是希望你能在发生这件事情之前就做好准备。

我们首先来分析一下，一般都会有些什么情况会导致重写是必须发生的。

## 一般有些什么原因会导致需要重写

* 一个没有经验的开发者，他的一部分低素质代码进入了代码库，导致后期难以维护
* 一个简单的模块通过多次`打补丁`的方式，变得异常复杂，以致后期难以维护
* 自己在早期由于对系统或者业务的理解不彻底，出现当时的设计无法充分满足客户需求的情况
* 一个复杂的模块被发现有异常情况，其遗留代码不易被理解，同时该模块开发人员已无法找到

**注解**：所谓`打补丁`的方式，是指你在发现未被框架预先考虑到的异常情况出现后，通过判断特定情况给予特殊处理的方式让程序得以正常的方式。这种处理方式的潜在危害就是你不知道还会有多少个这种特殊情况存在。

我们是不是应该在这个时间到来之前，提前做一点什么准备呢？

## 我们应为重写提前做好什么准备

* **充分定义好接口**，将每个模块的接口定义好，接口之间不应有强耦合，对于大部分情况均可参考典型的Rest风格设计，接口应尽量避免与特殊的应用场景配合，使得接口的调用必须遵循某种非直观意识的调用规则。
* **缩小模块范围**，使每个模块的范围减少，可以起到简化接口及减少重写工作量的作用。
* **对接口做好自动测试**，TDD的好处在本文就不详细阐述了，它是重构的重要根基，也同样是重写的重要根基。
* **使用新技术频繁重构**，注意这里是`重构`，这一条看起来好像和我们的标题偏了，但其实不然，毕竟重写也是我们要尽量避免发生的事情，只不过是绝对没有办法完全避免的事情，故经常使用新技术重构系统，使得代码更加精简，有利于代码生命力的延续，避免重写这种高成本事件的发生。

> 末了，我还是得再强调一下，我的观点**不是**要让大家去经常重写代码，而是希望能够让大家认识到，一定会有不得不重写代码的可能性，尤其是在水平参差不齐的团队中，所以提前为这种可能性做好准备，绝对比临时抱佛脚强上很多倍。

[refactoring]: http://book.douban.com/subject/1229923/
