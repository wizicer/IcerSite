---
title: 区块链数据库是什么以及我准备怎么做？
tags:
- 区块链
- 微信
categories:
- 冰河杂谈
date: 2017-07-03
---

> 离开霍尼后，我会开始自己创业之旅，我选择了区块链数据库这个方向，让我在这里做些简单的答疑吧。
 
## 什么是区块链？

区块链是比特币背后的技术，
1. 数据结构方面来讲就是每个节点都有签名的链表，而这每个节点就是历史。
2. 通俗角度来讲，就是一本帐本，每一笔交易都记录在册，且签名认证了。

区块链的特点是防篡改，历史上的任何一笔交易修改了，该历史节点后面的所有交易记录的签名认证便无效了。
而区块链的使用者只要记下任意一笔交易的签名认证编码，只要该编码还存在于区块链中，
你便可以极有信心的认为发生在你记下该笔交易以前的任意一笔交易都是没有被修改过的。
 
## 什么是区块链数据库？

数据库是信息系统统一存储数据的地方。而区块链数据库就是用区块链技术确保所有数据变化都被记录下来，并极难被篡改的数据库。

对于高层领导来说，使用传统数据库开发的信息系统饱受被一线数据库管理人员偷改数据库的风险。
而使用区块链数据库后，任何一个更改必然留下历史，且该历史是极难被修改的。
 
## 什么是区块链金融？

一种是以比特币为代表的一系列电子货币系统，其本质是极难被篡改的账本，甚至是被篡改后会重伤篡改者本身利益的一套系统。
与区块链数据库最大的区别在于，其具有和货币类似的信心价值，
其市场流通价格会因为参与其中的人们对其信心的变化而呈现出与法币（如人民币）相比较的巨大波动。

另一种是基于比特币系统架构的私有金融区块链，与比特币的区别在于该区块链仅能在受限的范围内被访问，
用以解决企业内部的信任问题，例如银行多个节点的结账审计问题。与区块链数据库最大的区别在于，
其基于金融系统打造，基础交易被设计为数字型的转账记录，数据库型的基础交易是被设计为数据库更改方法记录。
 
## 为什么做区块链数据库而不是区块链金融？

诚然当前最火的还数区块链金融，但我个人对金融理解并不深刻，故并不打算在此方向深入，准备在区块链数据库方向深耕的理由有以下几个：

* 区块链是当前火爆的技术，在风口上创业的成功率还是会高一些；
* 区块链数据库是能够支撑各种信息系统的通用基础架构，势必是未来信息系统必不可少的一部分；
* 当前最火的是区块链金融，大量的金融类企业花重金将相关人才都笼络走了，
  愿意在经济利益上不如金融的数据库上花力气的人变少了，竞争减少了；
* 当前区块链数据库的市场并没有被培育起来，认同度较低，
  但我单凭经验认为区块链数据库替换传统数据库作为重要信息存储的趋势势不可挡，
  故从现在到成熟至少有一到两年的窗口期，这个时间足够让我的区块链数据库变得成熟，从而在市场上形成竞争力；
 
## 做区块链数据库都需要哪些知识？

以下是我识别出来的关键技术点，以及我在该技术方向上的积累。

* P2P网络：做过多年网络底层通讯协议的我，还真想找机会尝试亲自实现P2P网络，这次是个好机会；
* 认证链表：基本数据结构而已，对学软件开发的都没有难度；
* 智能合约执行环境：做过比较基础的编译器和解释器，对概念还是比较熟悉的，是时候实施一个商用的执行环境了；
* 共识机制：很多博弈论的东西，蛮好玩的，但是确实这方面完全没有积累；
* 数据库状态构建：虽然只有SQLServer和memcached较为深入的用过，
  但鉴于这两个数据库分别代表了关系型数据库和键值对数据库，故对数据库的理解相信还是到位的；
* 信息加密、认证：因为兴趣，十多年前便研习过《密码学》课本；
 
其实还有很多技术点，因为比较细节（而且反正我在那方面也没有积累^o^）就不一一列举了。
 
## 有什么时间安排吗？

俗话说计划赶不上变化，变化一定有的，但是没有计划也就没有了变化的基础，这里是我的基础计划：

* 第一个半年（即至2017年底）：
  * 实现区块链数据库，并使其适配合作伙伴的产品；
  * 寻找合伙人；
  * 寻找合作伙伴，帮助其在自己的产品中搭载我们的区块链数据库；
* 第二个半年（即至2018年中）：
  * 招人：1开发+1~2测试；
  * 使区块链数据库更加成熟，使得其具备更广泛的适用性；
  * 继续寻找合作伙伴，在帮助其集成的同时，完成企业开发平台的搭建；
* 第三个半年（即至2018年底）：
  * 进行一定量的市场推广，以确保有一定量的收入或订单；
  * 找资本，找钱；
  * 提高区块链数据库的吞吐能力，性能提升；
 
## 你会接外包项目吗？

会的，不过有两个要求：

* 项目必须要使用我们的区块链数据库；
* 我们可以在官网的客户名单里写上客户的名字；
 
## 风险与对策？

* 风险一：一年半时间过去了，市场对区块链数据库的需求量不如预期，无人问津，收入无法覆盖人员工资。
* 解决方法：带团队接外包工作，一方面通过项目推广区块链数据库，一方面维持生存。
* 风险二：风口效应加剧，区块链数据库相关创业公司大幅度增多，甚至有大型企业参与竞争，市场从蓝海迅速转变成了红海。
* 解决方法：迅速收拢业务范畴，从提供通用型区块链数据库平台，转变为垂直行业区块链数据库服务提供商，专门为某一已形成积淀的行业服务。
* 风险三：想法很美好，但是实现上发生了困难，包括而不限于1）无法实现功能；2）实现功能需要花去比预想更多的资源。
* 解决方案：小步快跑，不是以一次性造出完善的产品为目标，而是不断迭代，初代产品目标为能完成主要功能，可以缺乏一些边角功能或增强功能，可以快速的证明思路和试错，并修正。

## 如何联系我？
当前在家里开辟了一小块空间作为我的工作室，坐标杨浦区同济大学旁，熟人朋友你们还是用惯常的渠道联系我就好了，新朋友推荐使用邮箱与我联系：liangshuangde@163.com。
