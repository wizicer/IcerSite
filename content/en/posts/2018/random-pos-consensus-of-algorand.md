---
title: Algorand – Random proof-of-stake consensus
tags:
- 区块链
- 教程
categories:
- 区块链五分钟
date: 2018-09-14
lang: en
translateDate: 9/30/2023
---

## Introduction

Let's talk about Algorand today. This is a blockchain underlying technology that I've only been exposed to in recent days. Its main contribution is in the consensus algorithm. Its core idea is relatively new, and in my opinion, its idea may leave an important mark in the consensus algorithm of the blockchain.

First of all, Algorand's background is quite strong, Silvio in MIT's Department of Mechanical Engineering and Computer Science
Professor Micali proposed the blockchain protocol as the lead author. His research interests include cryptography, zero-knowledge, pseudo-random number generation, security protocol and mechanism design. He won the Gödel Award in 1993, the RSA Award in the field of cryptography in 2004, and the Turing Award in 2012. These are all heavyweight awards in the field of computers, and the awards are in the field of cryptography.

Algorand is a combination of algorithmic algorithm and random words. As the name suggests, it is a blockchain protocol based on random algorithms. Therefore, he proposed that the design goal was low energy consumption. Democratization. The probability of a fork is low. Good scalability.

## Basic mechanism

Many of the designs in Algorand are similar to those of traditional Bitcoin or Ethereum.

As far as the blockchain network is concerned, any node can join the network at any time, without application, and there is no limit to the number of nodes.

As far as transaction design is concerned, an electronic signature mechanism is used to lock a certain amount of currency. It is also necessary to use electronic signatures to transfer a certain amount of money from one public key to another, and cryptographically lock it with the corresponding private key.

As far as block design is concerned. The hash pointer of the previous block is still put into the current block, and then the hash value of the current block is formed to ensure that after the information of any previous block is tampered with, its subsequent blocks will become invalid.

## Innovative practices

The difference is that nodes with two-thirds of the equity in the system are required to be honest, which is defined as their behavior in compliance with the relevant guidelines. And can send and receive messages perfectly. From this requirement, it can be inferred that it uses the Byzantine consensus protocol.

Another significant difference is that it does not introduce incentives, and it can even be considered that there is no native currency, only proof of stake.

The biggest innovation in the entire Algorand mechanism is the consensus mechanism. The underlying algorithm of the consensus mechanism, very similar to the Byzantine agreement.

But its most prominent distinguishing feature is also the origin of its name. It is to use a random algorithm to select the next batch of validators. Therefore, the biggest difference compared to traditional algorithms is that all validators are replaceable.

## How

A seed parameter is created in each round, and this seed parameter is impossible to predict and certainly cannot be manipulated.

In this round, it builds based on the current seed parameters and announces a random algorithm. This algorithm is also known as a verifiable random function, and a key parameter in this random algorithm is the user's private key, which, like every blockchain network, is known only to the user himself.

Next, each user runs the random algorithm published by the system with his own private key to obtain his own credentials.

The user who meets certain conditions is the validator of this round, and in this step, a special credential recipient is the leader.

The probability of this random algorithm screening validators or leaders is determined by/the equity of network assets held by the user.

Next, all validators plus leaders work together to run the Byzantine protocol to create new blocks.

## Features

But how did he manage to be low-energy, democratic, less likely to fork and scalable?

The essence of this algorithm is a pos proof-of-stake mechanism. Therefore, lower energy consumption can be achieved compared to PoW proof of work.

The algorithm is designed as a public chain, so all nodes can join and exit at any time, achieving democratization.

The basic consensus method of this algorithm is the Byzantine algorithm, so the chance of forking is small.

It is worth mentioning in particular that the so-called fork here is not the same concept as we generally say, soft forks and hard forks made when the blockchain is upgraded or changed. No matter how the blockchain is designed, it is impossible to prevent a hard fork after someone modifies the consensus protocol. After its hard fork, it may form a new currency, which has no direct impact on the original currency. Therefore, it is not usually discussed.

Finally, its good scalability is mainly reflected in the high possibility of improving transaction speed after achieving low energy consumption.

## How to prevent attacks? 

In fact, just after listening to this, you may ask, how does Algorand prevent attacks?

Let's do a demonstration of an attack.

Since each validator and leader are calculated by a random algorithm from the seed parameters. And this seed parameter is unpredictable and cannot be manipulated. Therefore, no one can predict which nodes the next round of validators and leaders will be.

At the moment when validators and leaders are sending out consensus messages. The perpetrator may know this information and which nodes are validators this round, but because this information is impossible to withdraw, the perpetrator has no opportunity to tamper with the information or bribe them to withdraw their information.

After the next round of verification, there will be a new set of validators and leaders.

Therefore, if you want to attack this network, there must be enough evil nodes. This ratio was not proposed in the original paper. I calculated roughly that when the evil ones own 30% of the entire network. His success rate is about 4%.

## Summary 

This is an emerging approach. Moreover, the author himself has been studying cryptography and random numbers for many years, so we have reason to believe that the random number algorithm proposed by him can withstand verification. In the future, such a consensus method is likely to become a new development direction.

