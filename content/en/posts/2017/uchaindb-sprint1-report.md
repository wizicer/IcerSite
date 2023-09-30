---
title: Report on the results of iteration 1 of the blockchain database
tags:
- 区块链
- 微信
categories:
- 冰河杂谈
date: 2017-08-11
lang: en
translateDate: 9/30/2023
---

Although I will develop alone now, the development habits accumulated over the years will not change, and I first made an iteration plan as shown in the figure below,
An iteration takes four weeks to determine the ultimate goal of the iteration:

> A basically stable blockchain database product with basic blockchain functions and can accommodate basic data volumes.
 
Although this iteration was delayed for a few days to be fully completed, I can barely mark it as a successful iteration.
After all, when setting a goal, it is a big goal set by feeling, and there is no particularly big expectation that it can really be completed.

(Huh?) You said that this month is almost halfway through, and I said that it was only a few days to postpone? In fact, in recent days, I have been dragged to see outsourcing projects to do demand analysis, which is another story. ）

### After basic operation, the measured results are as follows:

* The following test results are all using i5 CPU as the host,
  Tests that run the blockchain database in its virtual machine (the host is also running multiple other virtual machines for other purposes and a test program for stress testing)
* The first and second blockchain databases restarted by watchdogs have been hung for 104~106 hours (that is, the fourth day),
  At the same time, the other two are still working normally for a long time. (The error that occurs is that the WebSocketSharp component send interface call is stuck).
  After restarting, it will automatically establish a connection with the normal blockchain database to reach consensus and restore the block information to resume normal operation.
* Single contract, when the total number of transactions reaches 20W, there is no performance bottleneck at all (the current database speed limit is 100 transactions per second)
* For a single contract, when the total number of transactions reaches 50W, the transaction processing speed is 35 transactions per second.
* "The scenario of multiple contracts has not yet been tested, and from the test of small data volume, a slight increase in the number of contracts can improve performance"
* Block speed: up to 1 second (if there is no transaction within 1 second, no block will be produced)
* When the number of transactions reaches 30W, the memory occupies 400M
* When the number of transactions reaches 50W, the memory occupies 500M
 
According to the measured results and my current positioning of potential customers, the tentative performance optimization goal is: **At 100W transactions, it can reach 20 transactions per second, the memory occupation does not exceed 400M, and supports 10 query requests per second**.
Moreover, the goal is achieved in multiple virtual machines in a single physical machine mentioned above, so after the final deployment to a dedicated server, the performance should be at least 4 times higher (according to experience should be more than 10 times better), which can be considered to meet the requirements of most small information systems.
 
These are the results so far.

## Q&A time
 
### 1、What is the difference between a blockchain database and a general blockchain?

Blockchain is known to come mainly from Bitcoin, so the early blockchain design is mainly for the financial field, for the storage of non-monetary digital assets, there is no special design, it is a by-product. The blockchain database directly considers and optimizes the storage of non-monetary digital assets.
 
### 2. What are the difficulties that will be encountered in the known future?

Blockchain databases are still very new products, and it is a challenge for developers who want to use blockchain databases, both from the perspective of stability and ease of development, so it may be difficult to convince them to use them.

* Solution 1: Improve the development experience of terminal developers, making it faster and easier to get started.
* Solution 2: Take the lead in doing some demonstration cases, of course, not just a demonstration in the laboratory, but also a product that has been tested in the market.
 
### 3、Since the goal is a universal blockchain database, will it be compatible with SQL standards in the future?

It should not be, first of all, the blockchain database itself is not a relational database, and secondly, the blockchain database has many properties that traditional databases do not have, even if the statement compatibility layer is forced, it will be fatal to the performance improvement of the database.
 
### 4. Are you already facing problems or difficulties?

The blockchain has a long history of data that cannot be changed, but recently the data may be replaced by the nature, resulting in the front-end display will be very different from before, now Bitcoin has such properties, such as you submit a transaction, you get the corresponding transaction ID, but does not mean that your transaction will necessarily enter the blockchain that cannot change the history, so Bitcoin will recommend everyone for large purchases, must wait an hour for about 6 blocks to clearly know that your transaction is successful. As a traditional information system, it is difficult to imagine that it is difficult to ask the user to wait a while to confirm that the information entry is successful.

Solution: Make a supervision layer, use the information entered by personnel to enter the supervision layer first, and the supervision layer ensures that the information enters the blockchain smoothly, and reports any abnormalities.
 
### 5. For blockchain, if historical data is always retained, won't the database one day be huge?

Yes, this is a major problem with a blockchain, it cannot be stored distributed, any node needs to store all complete data, of course, everyone has also proposed some solutions:
* Start with a certain block as a history package, and that block as a new genesis block. (This is something I came up with casually, and I haven't done a clear verification)
* Sidechain, put all high-frequency transactions outside the blockchain for operation, and finally summarize the results at one time to reduce the amount of data. (This is a popular solution now, and many companies have tried to do it)
 
### 6. How to solve high-frequency large-volume trading?

There is no solution for the time being, I plan to go step by step, first take the step of small data volume blockchain database system, solidly remove these technical obstacles, and give priority to serving developers of small information systems with better user experience. In the future, consider the scenario of high-frequency trading.
