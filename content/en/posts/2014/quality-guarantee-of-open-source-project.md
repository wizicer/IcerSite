---
title: How do open source projects guarantee quality?
tags:
- 杂文
- 微信
categories:
- 冰河杂谈
date: 2014-04-01
lang: en
translateDate: 9/30/2023
---
Some time ago, I often complained that the company is not a software company, there is not enough software testing to ensure the quality assurance brought by the rapid change of software, resulting in serious problems with software quality, recently carefully thought about the quality assurance mechanism of open source projects, and have some new gains.

**In the previous software development company**, there were dedicated testers and developers working closely together to produce the same version, because the purpose is unified, so everyone works extremely closely, and relatively less concerned about the constraints of the process, which can be more efficient and quickly fix problems. Most of the time it looks good, but there are times when it is not good enough, that is, this combination is actually enough to feed the inertia of the developer, thinking that there are testers to check anyway, so there is no need to care so much about the quality of the program.

** The current company, no longer a software company, basically can be said to have no testers, only quality assurance personnel, their purpose is only to stand in the customer's position to see whether the system can run normally, they no longer need to work with developers for a certain point in time, because the version they get is the version that basically has no problems, if there is a problem, they do not need to work with the development to complete within a certain point in time, only need to report the problem, After the development is repaired, you can get the next version and verify it. This does have the advantage of clear responsibilities and a meticulous division of labor, and the bad thing is that even a small problem may take 40+ times (this is an exaggerated amount) time to deal with.

For this reason, I want to break my head and can't think of a good solution, the big leader has come up with an idea, the company does not allow this type of tester to exist, he has no way, but you can consider finding an intern to be responsible, but compared to the software company developers and testers 1:1 ratio or 2:1 ratio is too small, the immaturity of interns, coupled with the testing work is not a simple matter, making such a solution simply not feasible.

In fact, the problem we are facing now is how to allow developers to complete the test work on their own, so that the product can be released maturely, and then the conclusion is ** as long as the developer's experience is sufficient and the literacy is high enough to achieve **, but obviously the cost of this kind of team is extremely high, quite uneconomical, if it is my own company, I will definitely equip my developers 1:1 with testers, in this way, I don't need everyone to be veteran and highly literate, there will be testers to force them forward, Testers don't have to be elite, as long as they can faithfully execute the test cases step by step, they can be on the job.

Okay, I went around and back, but it made me understand why software companies like this configuration, because it's the lowest cost and good results. But anyway, this matter is actually not very good for the developers themselves, and developers who have not yet considered quality are even more difficult to improve under the coddling of nanny testers.

Here I think of a special case, that is, **open source projects**, there are many participants, then it must not be guaranteed that everyone can be as experienced and highly qualified as the initiator, so how does **open source projects control quality? **

Taken together, there are mainly the following two approaches:

* The initiator 'reviews' every piece of code checked into the trunk
* Use a 'test-driven' approach with 'continuous integration' to ensure the quality of the code

The former can ensure the quality well, as long as the initiator has enough literacy and enough sense of responsibility, he can ensure that every piece of code in the code repository is as he wrote himself, so the code quality can be quite well guaranteed.

The latter can more easily ensure the quality of the code, as long as the vast majority of the entire system (usually more than 80%) is covered by automatic testing, so any code changes need to be verified by automatic testing, under the premise of large coverage, as long as it can pass all automatic tests, the quality of this new code has been explained, if it can be supplemented by the first step of the initiator code review mechanism, it can fully guarantee the quality of the code.

This is a common scenario I see on GitHub, which actually provides us with a good reference, perhaps greatly improving the coverage of automated tests is the core of the current problem.
