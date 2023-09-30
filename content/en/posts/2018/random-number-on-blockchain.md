---
title: Random numbers on the blockchain
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-18
lang: en
translateDate: 9/30/2023
---

## Random numbers

The use of random numbers has a long history and has been used in all aspects of life, such as games, games, etc. There are many ways to generate random numbers. Since ancient times, we have used methods such as rolling dice and flipping coins to generate random numbers. After entering the computer age, we used computers to generate pseudo-random numbers. Or use sensors to get random numbers from the physical world. This traditional method of generating random numbers has been well studied and discussed.

But the random numbers on the blockchain are different from the past.

Random numbers are very critical for blockchain technology, in fact, in essence, blockchain, as a core of the distributed ledger, is to randomly select the bookkeeper of the block, and this randomness must also be provable, can not be manipulated, and should not be predicted. Otherwise, malicious nodes will take advantage of this feature to attack the blockchain.

## Random numbers on the blockchain

The following is a separate discussion of the two current blockchain consensus mechanisms.

In the PoW proof-of-work scenario. It is to have all nodes compete to calculate a difficult mathematical problem. Only when the node with high computing power has a high probability of becoming a bookkeeper.

In the POS proof-of-stake scheme. Only those who have a high share of proof of stake have a higher chance of becoming a bookkeeper. Algorand, mentioned a few days ago, actually uses a special random number method to make it under the POS proof-of-stake mechanism. It allows all equity owners to obtain a more equal chance of bookkeeping. Make it more random and less likely to be manipulated.

The use of consensus mechanism to generate blocks can ensure the immutability of the blockchain, but its cost is high, as a small range of random numbers, it is inevitable that such a consensus mechanism will not be used to clarify the fairness of random numbers, but can be based on the blockchain platform that has obtained consensus to do random number generator.

## The difficulty of random number generators on the blockchain 

Blockchain as a decentralized platform. All information is public, so designing a usable random number generator is more difficult. This random number generator, in addition to satisfying/unpredictable/this characteristic, should also have the characteristics of uncontrollable, difficult to collude, and provably fair. We all know that blockchain is a distributed ledger. The same operation is repeated on each node. If you let each node generate its own random number, the result of the operation will be completely different. Therefore, it is clear that the random number generator on the blockchain will be completely different from the traditional random number generation mechanism.

If the blockchain network generates random numbers by obtaining physical sensor information, it will involve the issue of on-chain security. This enables the node responsible for the chain to have the ability to manipulate random numbers. If a computer is used to generate pseudo-random numbers, it is obvious when only one person is involved. This person can know in advance what a random number is, and fairness cannot be guaranteed. If it is a multiplayer, there must be a last participant. This participant has a greater advantage over others because he can know the generated random number in advance. You can change the content of the submission according to the situation, or choose not to submit. This enables the last participant to manipulate random numbers. In addition, in the case of multiple collaborators, there is also the possibility of collusion.

## Solution

### Prophecy mechanism

Representatives have the Oraclize and Reality Keys programs.

It is a trusted third-party data source, moved to the chain, this data source is based on TLS, that is, we browse the website is often seen https. Since there is a server's signature, the porter itself cannot be falsified, which is also known as the TLS notarization mechanism.

The advantage is that it is fast to get random numbers.

The disadvantage is that it still cannot be prevented from falsifying or modifying the content by the provider of the data itself.

### Block data as a seed

Use the block data on the blockchain as seed information to generate random numbers.

The advantage is that all the data comes from the blockchain. Safe and verifiable.

The downside is. When the benefits of modifying the nonce are greater than the rewards of a single block, miners may be bribed to manipulate the nonce by trying to construct blocks that benefit them.

### Multiplayer cooperatively generates random numbers

The way to use smart contracts. Multiple participants each send any number of their own choosings to the smart contract. After some time, the smart contract will collect these numbers and construct a final number through some mathematical calculations. The final number will be returned to the participant as a random number.

**Pros are**. The number of seeds obtained from several different sources to generate the final random number. Randomness is guaranteed.

The downside is. If there are not enough participants in a given period, valid random numbers will not be obtained. And. Due to the need to wait for participants to join, the time to obtain this random number will be slow.

### Threshold signature random number

All members have a logical private key, but each member only has a part of this private key, the complete private key will not exist in the hands of any member, so no member can directly calculate the signature, when signing, each member will use the part of the private key they own to sign the information, and then collect enough member signatures to calculate the complete signature, but still can not reverse the complete private key. Therefore, no single member can do evil. The resulting signature can be used as a random number. During the signing process, no individual can predict the signing result in advance, so it is impossible to manipulate random numbers.

The advantage is that it is highly secure and prevents collusion.

The disadvantage is that generating random numbers is more expensive, slower, and requires waiting for all members to sign.

## Summary 

It can be seen that the random algorithm on the blockchain is also very complex and very important, because of its wide range of use, and it is more secure and auditable than previous random number algorithms, and the unfairness caused by a non-qualified random algorithm may be disastrous for users and applications.

Overall, the random number algorithm in the blockchain network will be an important direction for future development.

## References

* [*http://yi-programmer.com/2018-03-08\_randomness-in-blockchain.html*](http://yi-programmer.com/2018-03-08_randomness-in-blockchain.html)
* [*https://randao.org/whitepaper/Randao\_v0.85.pdf*](https://randao.org/whitepaper/Randao_v0.85.pdf)
* [*https://blog.csdn.net/elwingao/article/details/53763175*](https://blog.csdn.net/elwingao/article/details/53763175)
