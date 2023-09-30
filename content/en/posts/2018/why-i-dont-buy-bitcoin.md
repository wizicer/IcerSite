---
title: Why don't I buy Bitcoin
tags:
- 杂文
- 微信
categories:
- 冰河杂谈
date: 2018-01-14
lang: en
translateDate: 9/30/2023
---

I used C# in 2017 to implement my own blockchain database, and I kept learning from the source code and white paper of Bitcoin and Ethereum.
Indirectly implemented a new token, further understanding of the impact of client upgrades on the blockchain, and what kind of changes the upgrade can make to the blockchain.

As the ancestor of cryptocurrencies, Bitcoin personally admires its technology, and it is still an important reference object for my blockchain database.
But after a few rounds of development and practice, I'm already about to embark on a different path to blockchain, which is different from cryptocurrencies.

In view of the fact that people have often asked whether bitcoin can be bought recently, here is a summary of my understanding.

Note: This article requires you to already have the basic concepts of Bitcoin.
 
## Bitcoin is decentralized, but the following centralization is taking shape

**Developer centric**,
  It's true that I don't know who is working on Bitcoin, but only 35 of the 500 or so contributors on Github have submitted code more than 20 times.
  It is not a problem to control this small number of people and then control Bitcoin, and this part of the developers has the ability to modify the core technology of Bitcoin.
  It even has the ability to modify the total amount of 21 million bitcoins that is known as common sense
  (Of course, this modification is likely to cause the entire Bitcoin to collapse in an instant, and it should not happen in the short time due to profit drive).
**Pool centralization**,
  The mining pool is not simply a large number of miners, but an organization that many scattered miners join by mining alone and it is difficult to obtain stable income.
  But mining pools gain a higher say while gaining the hash power of these miners.
  Although the mining pool protocol in the Bitcoin improvement opinion can effectively reduce the rights of mining pools, it has not been implemented.
  I am afraid that this change that touches the interests of others will not be really implemented
  (Not to mention that large mining pools must also have a certain number of core developers to control whether these changes can be implemented.)
**Full node centralization**,
  The volume of the full node continues to expand (200G+), which is almost beyond the range that ordinary personal computers can support. It will become increasingly difficult for ordinary people to monitor Bitcoin.

> there is a center, it will be controlled, and it will no longer be the free bitcoin of the past.
 
## Bitcoin's profitability is not optimistic

**Transaction fees are too high**,
  At the current price, an ordinary transaction is already ridiculously expensive, although the price of bitcoin fluctuates very large, but the transaction fee is also as high as $10 or more for a long time.
  The point is that Bitcoin's transaction fee is based on the amount of data rather than the amount of data, so there is no significant difference between the fee for 0.00001 BTC and 1000 BTC you trade.
  Not to mention a scenario similar to that of charitable organizations that accept bits and pieces of money and then use them collectively
  (Because the transaction contains too many transactions in the previous item, the amount of data in the transaction is large, which in turn leads to higher transaction fees).
**Trading hours are too long**,
  Bitcoin's current capacity, up to 7 transactions per second, is common sense, and the often mentioned Lightning Network, which is conducive to increasing the number of transactions,
  Due to the impact on the income of miners, it is difficult to promote it because it does not receive a positive response from mining pools with greater voice power.
 
## Several other aspects that could impact Bitcoin

**Various tokens and hard forks**,
  In the past few years, various tokens have emerged in an endless stream, and there is even no lack of tokens that have modified some definitions in the Bitcoin client and are directly online.
  But anyway, at least a developer had to be found to modify the compiled code.
  And now there are even more powerful, with https://forkgen.tech/, you only need 0.01 bitcoins (about more than $100),
  You can immediately order your own tokens, the name, issuance you set, pay money to download the modified source code according to your needs and compiled client,
  This change will allow more tokens to be listed without a technical background.
 
## If you still plan to invest in Bitcoin, you must know how to avoid the following risks

**Online wallets are not allowed**,
  There have been multiple incidents of online wallets being hacked and large amounts of Bitcoin stolen, but for most non-developers, it can be difficult to identify whether a wallet is online or not.
  In fact, because non-online wallets do not have a clear source of income, people usually do not learn about their existence from mainstream channels.
**Cannot reuse wallet addresses**,
  Each transaction should use the newly generated address, as your public key will need to be presented each time the address is used.
  An algorithm that backcounts another public key from a public key is safe now, but it is not guaranteed to be cracked someday in the future
  (Don't underestimate that many well-known and widely used encryption algorithms at that time were declared insecure in 10~20 years), and your wallet is dangerous.
  In addition, the newly generated address makes it harder for others to trace you back to you in the real world.
**Don't get rid of the private key**,
  The private key is the only material for proving and using the bitcoins you own, in fact, there are a large number of bitcoins due to their holders losing the private key,
  This unusable bitcoin has completely become a pile of historical data in the blockchain that no longer has value.
* I won't mention policy risks, and I can't talk about non-technical issues.
 
I'm optimistic about the future of decentralized collaboration and mutual oversight pioneered by Bitcoin, but I'm not going to invest in Bitcoin, and its risk level is beyond my tolerance. So I'm now investing in my own blockchain database, a trusted database of mutual monitoring, and I believe even more that this is the greatest asset that Bitcoin will bring to the future of the information world.

