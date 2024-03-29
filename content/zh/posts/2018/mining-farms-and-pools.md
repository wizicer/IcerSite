---
title: 矿场与矿池
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-27
---

## 基本介绍

之所以要把矿场和矿池这两个概念放在一起来讲。是因为这两个概念是非常容易误用。他们是完全不同的两种概念，但他们却有很强的相关性。

### 矿场

矿场也可以被称之为挖矿基地。是指在地理上集中大量的矿工。基于区块链网络的算力水平不断上升。单个矿工难以获得区块奖励，因此通过规模化，和商业化运作的模式。将大量的矿机集中到挖矿成本较低的地方，进行挖矿。因此矿场的主要成本。来自于购买矿机的硬件成本及矿机运行的电力成本。

### 矿池

矿池对于区块链来看，是其中的一个完整节点。他通过网络，联合小算力的矿工，合并成大量的算力。以此整合区块链网络中的零散算力，并在所有提供算力的成员中共享奖励。由于区块链全网的算力提升到一定程度后，单个矿工，难以在区块链网络中获得区块奖励。这使得小矿工无法获得稳定的收入。因此通过加入矿池，集结成网络中较大比例的算力。可以比单独获取区块获得奖励几率更大。另外，对于组建一个矿池来说。除了需要一个区块链的完整节点之外，还需要稳定、快速的带宽。

## 矿机 

矿场的组成元素就是矿工。而矿工手中拥有大量的矿机。我们这里说一下矿机的发展历史。

从最初使用cpu挖矿，很快的就进化到使用gpu挖矿。然后，随着很多其他行业人士的加入。通过使用电子行业中，常使用的fpga——一种通用的硬件编程芯片，来进一步提升了算力。到现在，已经最终发展到了使用asic——专用集成电路挖矿。这是一种专门为区块链挖矿设计的芯片。它比以往的所有方式来说，拥有体积更小、功耗更低、可靠性更强、性能更高的优点。因此现在被广泛的使用，而前面三种由于已经完全不是asic挖矿的对手，已经被时代淘汰。

在前面几代的发展过程中，每一代，算力的提升都非常明显，但进入到ASIC挖矿之后。算力的提升将不再会像以前那么明显了。将会和类似于CPU、gpu一样的发展速度，继续通过制造工艺的提升，而提高性能。

最近有一种新的挖矿形式，是云挖矿。其实算是对以前挖矿方式的一种商业模式的改进。用户已经不再需要自己拥有矿机。来进行挖矿操作，而是可以向矿机服务商租用矿机。依次在云上挖矿。这项服务的出现，也预示着整个挖矿行业的曾经传说般的暴利已经不复存在了。

## 矿池的分类 

矿池的分类，主要分为**托管矿池**和**p2p矿池**。现在的绝大部分矿池都是托管矿池。

通常情况下，会有一家公司或者个人经营一个矿池服务器。矿池服务器运行着专业软件以及协调矿池中矿工们工作的矿池采矿协议。矿池同时也连接到一个或更多区块链的完整节点。同样的，与其他完整节点一样，矿池服务器也拥有一个完整的区块链数据副本。

这样的话，可以使得矿工们只需要做计算操作，而无需验证区块和交易。当然，也因此会从矿工的收入当中收取一定百分比的费用，作为矿池的维护费用。

对于矿工来说，运行一个完整节点的区块链软件，需要监控、维护和频繁升级。缺乏维护和技术都很有可能会导致宕机，宕机就意味着，矿工无法持续的获得利益。因此对于很多矿工来说，不需要运行一个完整节点就能挖矿，是加入托管矿池的一大好处。

不过，一方面，使用托管矿池也会存在矿池管理员作恶的可能性。矿池管理员可以挟持矿池中所有或部分矿工的算力进行攻击区块链网络。另一方面，中心化的矿池服务器。也可能导致单点故障。例如遭受了DOS拒绝服务攻击，这时，服务器出问题了，或者速度减慢了，这都会使矿池中的矿工不能继续挖矿，而造成利益损失。

### 矿池的中心化问题 

为了解决这个由中心化造成的问题。提出和实施了一个新的矿池挖矿方法。P2p矿池。它是一种点对点的矿池，没有中心管理员。它通过矿池服务器，去中心化的实现了一个并行的类似于区块链的系统叫做份额链。这是一个难度较低，但专用于记账的区块链系统，它允许矿池中的矿工在一个去中心化的矿池中合作，以每30秒一个份额区块的速度，在份额链上记录，贡献算力的矿工的份额。当原区块链中的区块成功创建了，矿池将根据份额链中的份额数据，奖励所有取得份额的矿工。简言之，他就是使用另一条区块链系统来记录矿工所贡献的算力，并根据其记录分配奖励，这个过程是去中心化的共识机制来做的。

不过这种方式，比托管矿池更加的复杂，因为他要求矿工需要有专用的计算机，来运行一个区块链的完整节点。以及p2p的挖矿节点软件。它是一种比单独挖矿更有效的混合方法，他不需要像托管矿池那样，给管理员太多权力。不过由于份额链本身也可能遭受51%的攻击。因此它并不能直接解决比特币本身51%攻击的问题，但是作为多样化挖矿生态系统的一部分，它能够使得区块链的生态更加丰富多样，也更加的强大。

### 矿池的利益分配

矿工加入矿池，那必然涉及报酬的分配问题。因此我们这里说一下托管矿池的几种分配模式。

这里先说明一下——挖矿手续费，这是矿工在矿池挖矿时，支付给矿池的技术服务费。每一种分配模式，一般都会有一定比例的挖矿手续费。

第一种分配模式是pps。按算力占比获益。即根据你的算力在矿池中的占比，每天给你固定的收益。在这种模式下。矿工只要保证固定的算力。就会获得固定的收益。

第二种是pplns。按贡献占比获益。他会根据矿工过去一段时间内。成功挖出的区块比例来分配。在这种模式下。分配利益通常具有滞后性和惯性。比如当你新加入到一个矿池中时。刚开始的一段时间，收益都会比较低，因为别人在这个矿池中已经贡献了很多个区块，而你是新来的，你的贡献还很少，所以每一次分配时，收益都较低。但随着时间的推移。挖出来的区块变多了，就会和实际的算力贡献基本上一致了，同样的，当你离开这个矿池不再挖矿的时候。你贡献的区块还在，因此在这之后的一段时间里面，你还依旧能够获得收益。直到历史贡献结算完成。

对比pps和pplns来说。我们通常情况下可以认为。pps分配模式就类似于打工。你提供算力，矿池回报给你固定的收益。而pplns。就类似于组队。根据各自的贡献来分配利益。

不过根据老矿工统计，长期来看pps和pplns的收益，基本上是平衡的。

以上这两种是被用得最为广泛的分配模式，除此之外也有不同的矿池，会提供一些创新的模式，比如说这里还有pps+和solo模式。

Pps+是融合了pps和pplns两种。其中块奖励根据pps分配，而交易费是根据pplns进行分配。

而solo，单独挖矿，则是由矿池主要提供技术支持。矿工自己不需要维护完整节点，因此矿池主要是收手续费。

## 矿池的挑战

接下来讲一下矿池遇到的挑战。近年来由于矿池行业的企业逐渐走向集中化，因此小矿池在竞争中劣势明显。很难与大矿池进行竞争。矿池的市场定位是服务业。因此行业的前景主要取决于可挖矿币种的行业走向。从现在区块链的发展来看，采用pow工作量证明共识机制的项目逐渐减少。也使得整个挖矿行业都在逐渐变得低迷。

而对应的，转型也就必须提上议事日程了。包括如何转型到pos共识机制也是需要投入研究精力的。

## 矿工的挑战 

另一方面。矿场中的矿工也就受到了不小的挑战。随着时间推移，区块的奖励越来越小。而全网的算力还在不断的增长，也使得矿工获得收益的比例越来越小。即便保持现有的算力。也会使每天的收益变得越来越少。而许多能够提供廉价电力的方式，已经被现在的矿场占领，或宣告非法。寻找更多廉价电力的方式的难度也在逐步提高。另一方面，区块链泡沫破灭带来的价值缩水，会更加使得矿工的产出无法补贴其电力支出。

## 总结

去中心化的区块链造就了这么一个独特的产业。它还会存在多久，会有多大的规模，我们都无法预知。未来面临的挑战恐怕会更多。但他们都在切实的证明着区块链的强大。

## 参考资料

* [*https://www.jianshu.com/p/0b109ddc0f22*](https://www.jianshu.com/p/0b109ddc0f22)
* [*https://www.jianshu.com/p/282cff61b7a8*](https://www.jianshu.com/p/282cff61b7a8)
* [*https://www.jianshu.com/p/c6182515703f*](https://www.jianshu.com/p/c6182515703f)
* [*https://www.jianshu.com/p/0c991a562fff*](https://www.jianshu.com/p/0c991a562fff)
* [*https://baike.baidu.com/item/挖矿基地/22739236*](https://baike.baidu.com/item/挖矿基地/22739236)
* [*https://baike.baidu.com/item/矿机/6878024?fr=aladdin*](https://baike.baidu.com/item/矿机/6878024?fr=aladdin)
