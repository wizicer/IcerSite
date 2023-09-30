---
title: The prototype of the Unichain database was shown for the first time
slug: first-prototype-show-of-uchaindb
tags:
- 区块链
- 微信
categories:
- 冰河杂谈
date: 2018-01-26
lang: en
translateDate: 9/30/2023
---

Today will show the first phase of the prototype client of the Youchain database, although the first phase of the prototype code of the core database has been completed for a short period of time.
However, only the core code of the database operation API can obviously not be used to show others the concept of blockchain database.
Therefore, this display can not be carried out until the client that can demonstrate the design ideas of the Youchain database is basically formed.
 
Before the show, the vision of YouChain Database was first clarified:
> Make a database whose history is immutable
 
At the same time, it also explains several basic scenarios of the Unichain database again:

1. **Senior leaders who cannot personally monitor data changes in the database**, through the YouChain client on their own mobile phones,
   You can know with confidence: **The database information under my jurisdiction has not been modified by the front-line database administrators, and the data is trustworthy. **
2. **Multiple organizations jointly operate a project**, do not fully trust each other, and always worry that the project data will be modified by each other's personnel,
   The full client node on PC ensures that data can be recovered at any time.
   Through the lightweight mobile client (no central server), you can monitor whether the database data has been abnormally modified at any time.
 
## This demo begins
 
Scene of this exhibition:

* Youchain database core data table display interface
* By donating to a charitable project, observe the data changes in the Youchain client
* Simulate DBAs modifying databases directly
* Observe the data changes and modification history in the UChain client
 
First, the **Youchain database core data table display interface** was displayed**

![](first-prototype-show-of-uchaindb/1.png)
 
By donating to a charity project (local beta), **Observe the data changes in the YouChain client**, and deliberately select a more special number in order to make the data changes more obvious
 
![](first-prototype-show-of-uchaindb/2.png)
 
After donating, **Go to the YouChain client to view, find a new piece of data**
 
![](first-prototype-show-of-uchaindb/3.png)
 
Simulate DBA directly modifying the database: **Open the database directly and change the 123 just donated to 125**.
 
![](first-prototype-show-of-uchaindb/4.png)
 
Open the UniChain client again, observe the data changes in the table (the fields that have changed are marked in green)
 
![](first-prototype-show-of-uchaindb/5.png)
 
Click the link, **Open Modification History View**:(and you can view the records related to the modification of the cell's record and the content of the modification)
 
![](first-prototype-show-of-uchaindb/6.png)
 
## End of the demo, let's break down the details below

Understand a few points of this scenario

**Distributed Youchain Database**,
  Based on blockchain technology, Youchain Database is a blockchain specially designed for database information storage, and also supports distributed full nodes and lightweight nodes.
  The full node stores all data, and can restore the data to any version or fork it into a new independent database;
  As a monitoring node, a lightweight node can listen to and consult the entire node, and store a small amount of information to confirm whether the monitoring object has information modification operations.
**Standalone storage client with monitoring**,
  This client is an independent client, and all data is read directly to the blockchain database.
  The monitoring information is stored in the local client, so there is no possibility that the information in the client can be forged or intercepted by others.
**Not all information is open to the public**, although the demo example is a donation data table that is open to the public, but the UniChain database supports non-public internal use.
 
More than just these points seen above (future outlook)

* The first phase of the Youchain database project, **using database snapshots**,
  Without modifying the original information system, you can easily and quickly access the Youchain database.
* The second phase of the Youchain database project, ** directly used as a relational database**,
  However, the functionality is more limited than existing relational databases (such as SqlServer or MySql) on the market.
  However, it can also obtain functions such as smart contracts unique to the blockchain, so the original information system needs to be partially transformed to access.
 
> The core question raised: **Users who don't understand blockchain may not understand how to use the client**.

My reply is as follows:

> The blockchain database itself is professional, and basic blockchain knowledge is required to use the client well.
> As the underlying technology developer, our responsibility is to be a database with unmodifiable historical records from the underlying mechanism.
> At the same time, we provide technical feasibility to ensure that professional users have access to the appropriate information to verify the data**, and thus prove the reliability of the data itself.
 
