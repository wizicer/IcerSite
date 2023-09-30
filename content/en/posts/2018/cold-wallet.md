---
title: Cold wallet
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-24
lang: en
translateDate: 9/30/2023
---

## Definition of cold wallet

An important basis for owning and using money on the blockchain is the private key. This needs to be kept by the user himself, usually, the private key will be saved in the wallet, so the security of the wallet is very important. The simple classification of wallets can be divided into cold wallets and hot wallets. The difference is whether it is connected or not. Because cold wallets are not networked, they can effectively prevent hacker attacks.

Cold wallets are not something unique to blockchain. In the past, most of the students had already used it, such as things like the bank's U treasure and U shield. It's actually a cold wallet.

## Two forms of cold wallet

One of the first forms of cold wallets was the use of paper media. Print out the private key. Only when you want to use it, enter the private key into the hot wallet for use. However, because in this process, there is a process of entering the private key into the hot wallet, this process may be hacked, resulting in the loss of the private key, which in turn leads to the loss of assets.

Therefore, it is common to use another form of cold wallet. This is also a method commonly used by major banks as mentioned earlier - hardware cold wallet. First of all, the private key is stored in the wallet of this hardware. Every time you need to use it. All signed by this hardware cold wallet. Therefore, the private key does not go through the hot wallet. This way it does not lead to a situation where the private key is compromised.

## Security of cold wallets 

However, it should be noted that cold wallets are not absolutely safe either. Even if he is theoretically very safe. However, it is not ruled out that the implementation of this cold wallet may be manipulated.

First, let's look at the possibility of being manipulated

### If using a smart device as a cold wallet

First, it is possible to accidentally download a modified cold wallet program.

Second, when borrowing someone else's charger, you may encounter a maliciously modified charger to inject malicious programs into the device.

### If you use a special device as a cold wallet, although the possibility of being manipulated is greatly reduced, it is still possible

First, the back door is quietly buried by the insiders before leaving the factory.

Second, malicious insiders may update a new version containing a malicious program onto a user's device on the grounds of an update.

### The specific modification methods are usually as follows:

First. Make the random number generator in the wallet signature algorithm problematic. If the random number generator generates random numbers with specific rules, in this case, even if your device is not connected to the Internet, as long as you use the same private key and sign twice, you can mathematically deduce what the private key is. Once Sony's PS3 was because of the use of insecure random numbers, which led hackers to reverse the private key, and finally announced that PS3 was completely cracked.

Second. During the signing process, do some tricks, such as changing the address where the coins are sent to the hacker's own address and then signing. And a more covert design might be that such malicious modifications are only for large amounts of money. No modifications are made for small amounts. It will make the user more defenseless.

Third. Use high-frequency sound information leakage. Given that the system already acts as a cold wallet, the network is completely disabled. Hackers may still use high-frequency sound messages to obtain private keys. Because high-frequency sound cannot be heard by humans, but it can be heard by recording equipment.

## Summary

Overall, using a cold wallet is definitely a good thing and will make the whole process more secure, but using a secure cold wallet is even more important.

If you really want to ask. How to protect cold wallets from hackers, then the best way should be. Either take him with you or put him in a safe deposit box.

Or expect a future mature coinless blockchain technology to bring the ability to quickly verify whether a procedure has been modified.

## References

* [*https://www.jianshu.com/p/f8eb5aaf8ae6*](https://www.jianshu.com/p/f8eb5aaf8ae6)
* [*https://www.jianshu.com/p/9e5cf428d874*](https://www.jianshu.com/p/9e5cf428d874)
