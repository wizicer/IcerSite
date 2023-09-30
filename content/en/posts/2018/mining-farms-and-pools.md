---
title: Mines and pools
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-27
lang: en
translateDate: 9/30/2023
---

## Basic introduction

The reason why we want to put the two concepts of mine and mining pool together. This is because these two concepts are very easy to misuse. They are two completely different concepts, but they have a strong correlation.

### Mine

A mine can also be called a mining base. Refers to the geographical concentration of a large number of miners. The level of computing power based on blockchain networks is rising. It is difficult for individual miners to receive block rewards, so through the model of scale, and commercial operation. Concentrate a large number of mining machines in places with low mining costs for mining. Hence the main cost of the mine. It comes from the hardware cost of purchasing the mining rig and the electricity cost of the mining rig operation.

### Mining pools

The mining pool is a complete node of the blockchain. Through the network, he unites miners with small computing power and merges them into a large amount of computing power. This integrates the fragmented computing power in the blockchain network and shares the rewards among all members who provide the computing power. Since the computing power of the entire blockchain network is increased to a certain extent, it is difficult for a single miner to obtain block rewards in the blockchain network. This prevents small miners from receiving a stable income. Therefore, by joining the mining pool, a larger proportion of computing power is gathered into the network. You can have a greater chance of getting rewards than if you get blocks alone. Also, for the formation of a mining pool. In addition to needing a full node of the blockchain, stable and fast bandwidth is required.

## Miner 

The constituent elements of a mine farm are miners. And miners have a large number of mining machines in their hands. Let's talk about the history of the development of mining machines here.

From the beginning of CPU mining, it quickly evolved to use GPU mining. Then, with a lot of other industry players joining. Computing power is further enhanced by using FPGAs, a general-purpose hardware programming chip commonly used in the electronics industry. By now, it has finally developed to use ASIC - application-specific integrated circuit mining. This is a chip specially designed for blockchain mining. It's smaller, less power-consuming, more reliable, and more performant than ever before. Therefore, it is now widely used, and the first three have been eliminated by the times because they are no longer competitors of ASIC mining at all.

In the development process of previous generations, each generation, the improvement of computing power is very obvious, but after entering ASIC mining. The increase in computing power will no longer be as obvious as before. It will continue to improve performance through the improvement of manufacturing processes at the same development rate as CPUs and GPUs.

Recently, there is a new form of mining, cloud mining. In fact, it is an improvement on the business model of the previous mining method. Users no longer need to own their own mining rigs. to carry out mining operations, but you can rent mining rigs from mining machine service providers. Mining on the cloud in turn. The emergence of this service also indicates that the once legendary profiteering of the entire mining industry no longer exists.

## Classification of mining pools 

The classification of mining pools is mainly divided into **hosted mining pool** and **P2P mining pool**. The vast majority of mining pools today are managed mining pools.

Typically, there is a company or individual operating a mining pool server. Pool servers run specialized software and pool mining protocols that coordinate the work of miners in the pool. Mining pools are also connected to full nodes of one or more blockchains. Similarly, like other full nodes, the pool server has a complete copy of the blockchain data.

This allows miners to only do computations without validating blocks and transactions. Of course, a percentage of the miner's income is collected as the maintenance of the pool.

For miners, blockchain software running a full node requires monitoring, maintenance, and frequent upgrades. Lack of maintenance and technology is likely to lead to downtime, which means that miners cannot sustainably reap benefits. Therefore, for many miners, mining without running a full node is a big benefit of joining a managed mining pool.

However, on the one hand, using managed mining pools also has the potential for pool administrators to do evil. Pool administrators can take the hash power of all or part of the miners in the pool to attack the blockchain network. On the other hand, centralized mining pool servers. It can also result in a single point of failure. For example, in the event of a DOS denial-of-service attack, the server goes wrong or slows down, which will make the miners in the pool unable to continue mining, resulting in loss of profit.

### Centralization of mining pools 

To solve this problem caused by centralization. A new mining method for mining pools was proposed and implemented. P2P mining pools. It is a peer-to-peer mining pool with no central administrator. It decentralizes a parallel blockchain-like system called a share chain through a mining pool server. This is a less difficult, but dedicated blockchain system for bookkeeping, which allows miners in a mining pool to cooperate in a decentralized mining pool, recording the share of miners on the share chain at the rate of one share block every 30 seconds, contributing the hash power. When a block in the original blockchain is successfully created, the pool will reward all miners who earn a share based on the share data in the share chain. In short, he uses another blockchain system to record the computing power contributed by miners and distribute rewards based on their records, a process done by a decentralized consensus mechanism.

However, this method is more complicated than hosting mining pools, because it requires miners to have dedicated computers to run a full node of the blockchain. and P2P mining node software. It is a more efficient hybrid method than solo mining, and it does not need to give administrators as much power as the hosting pool. However, because the share chain itself can also suffer a 51% attack. Therefore, it does not directly solve the problem of 51% attacks on Bitcoin itself, but as part of the diversified mining ecosystem, it can make the blockchain ecosystem richer and more powerful.

### Distribution of benefits from mining pools

When miners join the pool, it necessarily involves the distribution of remuneration. So let's talk about several allocation patterns for managed mining pools.

Let's explain here first - mining fees, which are the technical service fees paid by miners to the mining pool when they mine in the pool. Each distribution model generally has a certain percentage of mining fees.

The first distribution mode is PPS. Benefit from the proportion of computing power. That is, according to the proportion of your hash power in the mining pool, it gives you a fixed income every day. In this mode. Miners only need to guarantee a fixed hash rate. will get a fixed income.

The second is PPLNS. Benefit from contribution percentage. He will be based on miners over a period of time. The proportion of blocks successfully mined to distribute. In this mode. The distribution of benefits is often lagging and inertia. For example, when you are new to a mining pool. In the beginning, the payoff will be relatively low, because others have already contributed many blocks in this pool, and you are new and your contribution is still small, so each time you distribute, the payoff is lower. But over time. The more blocks are mined, the actual computing power contribution will be basically the same, and the same is true when you leave the pool and stop mining. The blocks you contributed are still there, so you'll still earn for some time after that. Until the historical contribution settlement is completed.

Compare PPS and PPLNS. We can usually think. The PPS distribution model is similar to part-time work. You provide hash power, and the pool returns you a fixed income. And pplns. It's like teaming. Distribute benefits according to their respective contributions.

However, according to the statistics of old miners, the benefits of PPS and PPLNS are basically balanced in the long run.

These two are the most widely used distribution models, in addition to different mining pools, which will provide some innovative models, such as PPS+ and Solo models.

PPS+ is a fusion of PPS and PPLNS. Where block rewards are distributed according to PPS, while transaction fees are distributed according to PPLNS.

Solo, on the other hand, is mainly supported by mining pools. Miners themselves do not need to maintain full nodes, so mining pools mainly charge fees.

## Mining Pool Challenge

Let's talk about the challenges encountered by mining pools. In recent years, as enterprises in the mining pool industry are gradually becoming more centralized, small mining pools have obvious disadvantages in competition. It is difficult to compete with large mining pools. The market positioning of mining pools is the service industry. Therefore, the outlook for the industry mainly depends on the direction of the minable coin. From the current development of blockchain, the number of projects adopting the PoW proof-of-work consensus mechanism is gradually decreasing. It also makes the entire mining industry gradually become sluggish.

Correspondingly, transformation must also be put on the agenda. Including how to transition to a POS consensus mechanism also requires research efforts.

## Miners' challenge 

On the other hand. Miners in the mine have also been challenged. Over time, the rewards for blocks get smaller and smaller. The computing power of the whole network is still growing, which also makes the proportion of miners getting smaller and smaller. Even if the existing computing power is maintained. It will also make the daily gain less and less. Many of the ways to provide cheap electricity have been taken over or outlawed by current mines. It is also becoming more difficult to find more ways to get cheap electricity. On the other hand, the shrinking value brought about by the bursting of the blockchain bubble will make it even more impossible for miners' output to subsidize their electricity expenses.

## Summary

Decentralized blockchain has created such a unique industry. How long it will exist, and on what scale it will be, we cannot predict. The challenges ahead are likely to be even greater. But they are all tangible proof of the power of blockchain.

## References

* [*https://www.jianshu.com/p/0b109ddc0f22*](https://www.jianshu.com/p/0b109ddc0f22)
* [*https://www.jianshu.com/p/282cff61b7a8*](https://www.jianshu.com/p/282cff61b7a8)
* [*https://www.jianshu.com/p/c6182515703f*](https://www.jianshu.com/p/c6182515703f)
* [*https://www.jianshu.com/p/0c991a562fff*](https://www.jianshu.com/p/0c991a562fff)
* [*https://baike.baidu.com/item/ Mining Base/22739236*](https://baike.baidu.com/item/ Mining Base/22739236)
* [*https://baike.baidu.com/item/ miner/6878024?fr=aladdin*](https://baike.baidu.com/item/ miner/6878024?fr=aladdin)
