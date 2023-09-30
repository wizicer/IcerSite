---
title: Distributed application dApps
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-22
lang: en
translateDate: 9/30/2023
---

## dApp

APP is the meaning of the app application that we often mention. And the D letter in front. It means distributed. Therefore, dApps can be considered distributed applications. According to its definition, as long as it is running on a distributed system, distributed applications that will not run due to the damage or stop of a single node can be called dApps. However, since distributed applications are proposed on the basis of blockchain, many times everyone will default to the fact that distributed applications must run on the blockchain.

The concept of distributed applications is still very new. Therefore, there is still a lot of debate about its specific definition. Now the mainstream view of distributed applications is used here.

Before diving into the details, let me mention a concept that many people may misuse. Distributed application dApps. In some cases, it is written as ÐApp, that is, a horizontal bar is added to the letter D. Usually, in addition to wanting to indicate that the distributed application is a special application on the blockchain, it also implies that the application is running on the Ethereum blockchain. Because of this usage, the definition comes from Ethereum, and the letter D plus a dash comes from Old English, which is pronounced /ɛð/. When writing letters, it is eth, which exactly matches the first three letters of Ethereum, eth. So if a distributed application is not running on the Ethereum system. D with horizontal bars should be avoided.

## Basic composition 

A typical distributed application consists of two parts: interface presentation and smart contract.

Compared to traditional apps. The server part of the traditional application is replaced by a smart contract on the blockchain. In addition, there are some other differences between him and traditional applications.

The first is that the data is distributed and stored. ** Prevents centralization and single points of failure.

**The second is that the data is immutable. This ensures that what we are using is stable. Application of determinism. It is not manipulated.

## Development

When developing blockchain-based distributed applications, the following two points should be considered.

**First, modular design. Due to the immutability of the blockchain. Once the distributed application is live. Unless the developer reserves a backdoor, it is impossible to modify it. The application that reserves the backdoor is not afraid to be used when the user knows it. Therefore, in order to ensure the scalability of the system. and the stability of the currently online module. Sub-module design should be considered.

Second, the business model. **Traditional apps can be paid for by developers. Let the user experience. Finally, let some users pay to support the entire business. This is also mainly because the price developers have to pay to provide the experience is not high. And a distributed application with continuous operation capabilities. Most likely, it can only be paid by the user. Otherwise, developers are vulnerable to witch attacks. That is, hacker nodes imitate unlimited virtual user experience services. The user's payment will be paid to the blockchain node running the program, which is usually the miner.

## Choice of the underlying blockchain 

As the basic blockchain choices for distributed applications, there are usually the following.

**First, choose a well-known basic public chain. Of course, you need to make sure that this public chain can support your distributed application development.

Second, use a customized blockchain. It can be started from scratch or further customized on existing open source systems, and deployed in the form of a public chain or an alliance chain.

Third, use sidechains. ** The high-frequency transaction data of the application is saved in the sidechain, and returned to the public chain at the same time after the transaction is completed.

## References

* [*https://en.wikipedia.org/wiki/Eth*](https://en.wikipedia.org/wiki/Eth)
* [*https://www.jianshu.com/p/0f4a1c5a1389*](https://www.jianshu.com/p/0f4a1c5a1389)
* [*https://www.jianshu.com/p/6a41485170bf*](https://www.jianshu.com/p/6a41485170bf)
