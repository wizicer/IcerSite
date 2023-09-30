---
title: A little insight from a year of entrepreneurship
tags:
- 杂文
- 微信
categories:
- 冰河杂谈
date: 2018-06-18
lang: en
translateDate: 9/30/2023
---

> I have been afraid to log on to social networks for some time recently, always afraid that my friends will care about my blockchain database

And I didn't even dare to mention it until I finished the performance improvement.
Because the change this time is very large, the test cases are red, and even the overall system cannot be compiled for several days, the key is that the code being written is a completely new field for me, and there is no existing experience to support my prediction of this situation.
The reality is, I know where I'm going and the milestones along the way, but I don't have experience estimating the distance between the milestones.
On a journey that I didn't know when I would reach my destination, the only thing that sustained me was faith.
Fortunately, this period finally passed smoothly.

## Tests that should be taken more seriously

> In my career, I actually attach great importance to testing, but this incident was caused by insufficient testing, and here is a very good experience.

Last month, I thought the version of the software was nearing completion and was in the process of finalizing bug fixes and preparing to go live.
However, a performance problem was accidentally discovered, which should have been detected earlier. Here's why:
1. I follow the process of test-driven development, so I will be more relieved and confident when the test cases are all passed;
2. The initial test case is for the blockchain part and the initial database instructions;
3. The performance problem was caused by the later addition of database instructions that happened not to be included in the original test case.

This adds a new entry to my test checklist: **Test case coverage should be revisited when new features are added**.

## Packaging DEMOs as commercial products is not a good practice

The initial idea of writing this program last year was very simple, to make a basic blockchain database program
 * First, I can learn and verify whether blockchain is a technical direction that I can control and be interested in;
 * Second, through this prototype program, it is proved that the specific application of blockchain database, a kind of blockchain, is feasible.

Apparently this program helped me achieve both purposes, but there was a problem when trying to convert this program into a commercial program that could be sold.
IN ESSENCE, IT IS A MATTER OF SHORT-TERM SUCCESS, AND TRYING TO PACKAGE DEMOS INTO COMMERCIAL PRODUCTS, OF COURSE, DON'T MAKE TOO MUCH FUSS, SUCH THINGS HAVE ACTUALLY APPEARED MANY TIMES IN MY PART-TIME CAREER, AT THAT TIME I PLAYED A ROLE OF STRONG OPPOSITION, ONLY THIS TIME I became a connivator. But fortunately it stopped in time.

As a technical prototype, it uses relatively simple processing methods in many aspects, such as directly mapping the complete database in memory, which is why I have mentioned the total amount of data of 1 million many times. This performance issue made me realize:

* First, this design is not feasible as a product, it is not an architecture that can be extended.
* Second, in the long run, it should be implemented in the architecture that the database should have, at least the architecture should be scalable, and the future should only be constantly updated to each small module with performance problems, not the overall architecture changes.

## Rewrite the code and get back on the road

> During this time, I completely rewrote the underlying code.

The architecture is now such that, except for caching mechanisms for improved performance, all data is written to the file immediately or read directly from the file when needed. On the other hand, I changed the part of reading and writing files that I wrote myself to use an open-source NoSQL database to help me with efficient file management and read and write queries.

In order to ensure the correctness of the data and reduce the double calculation of historical data, the 'Patricia Merkle' tree (actually 'Radix Trie' + 'hash') structure proposed by Ethereum is adopted. Such a design, I understand that the time complexity of the increase and query should be 'O(log(n)',
where n is the number of all data units in the database, because each leaf node stores only one cell in the data table, which will cause the complexity of the random query of the entire table to become 'O(klog(n)', where k is the number of cells that need to be returned by this query.

So far, the blockchain database program section has finally passed all the defined test cases (although not complete, but a small milestone) and basic performance indicators. More importantly, after the architecture modification, there is no longer a limit on the amount of data, and the read and write speed is also logarithmic slowed down (that is, the performance slows down extremely slowly as the amount of data increases).

## About starting a business

> It has been one year since I started my business in July last year.

This year has basically been spent polishing products and walking on the detour of entrepreneurship.
From the initial rush to find partners, recruit people and find investment, to now not in a hurry to polish products, there have been several waves of different degrees of conceptual and conceptual impact.
From the appearance and behavior, I seem to have not changed from a year ago, but I can deeply feel in my heart that I am growing rapidly in all aspects.
It was this feeling—the feeling of having the ability to create an era—that made me fall in love with entrepreneurship.

## About blockchain databases

I saw a product called chainSQL released the other day, and looked at the details:

* The company (announced) released a white paper on its blockchain product in January 2017
* The company completed a financing of 36 million yuan in October 2017
* The open source code on GitHub was originally checked in in November 2017 (but it is likely to be developed in-house, and the code was removed from the inside when open source without keeping a history)
* Integrate the source code of Ripple (another well-known blockchain project developed abroad since 2011).
* There are only a few developers who check in the code for the project
* The white paper clearly states that it is a "first in the warehouse and then consensus" solution

Speaking of the matter of "first entering the warehouse and then reaching a consensus", it is worth mentioning that this solution is consistent with the blockchain solutions of Baidu, JD.com and Tencent that have been disclosed.
And the target audience and product vision of several of them are completely consistent with my current products, which can be said to be a competitive relationship.
But my solutions are completely different from all of them, and for this reason I pay special attention to their developments and news.

In my opinion, "first enter the database and then consensus" has a fatal disadvantage, that is, like traditional databases, because the blockchain and the database are two separate parts, so like traditional databases, once the top administrator modifies the internal data of the database, there will be data tampering.
Even if a copy of the data is stored on the blockchain, it must be recovered and cross-referenced to determine whether the data has been modified.
My blockchain database, on the other hand, uses the Merkle tree used by regular blockchain projects to ensure that the original data is absolutely unchanged.

Sometimes I also "understand" their approach, only the practice of "first entering the warehouse and then consensus" can quickly make an extremely high-performance "blockchain".
Because of this solution, the performance is basically the same as the performance of the database, and our true blockchain-based database is basically the same as the blockchain in terms of speed, and for the customers they want to leverage, they need this high-performance story.

So I will continue to stick to my path, because I believe that all vendors who do blockchain databases will eventually return to the path I am taking, which actually brings more buffer time for me to accumulate thresholds.

## Finally

For the judgment of the blockchain industry, I still think that blockchain databases will be an area that can make a big difference.
However, in fact, it seems that the development of the blockchain industry, especially the blockchain database industry, is slower than expected.
Blockchain is an emerging technology, and it really takes more time to sink down and seriously study from the bottom, so that we can see further and go further.

