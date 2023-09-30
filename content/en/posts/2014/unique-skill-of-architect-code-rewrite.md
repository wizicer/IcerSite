---
title: The architect's nirvana – code rewriting
tags:
- 架构
- 微信
categories:
- 冰河杂谈
date: 2014-03-18
lang: en
translateDate: 9/30/2023
---
As a software developer, you must have heard the term 'refactoring', in our usual development life, in order to make the code easier to understand and deal with some problems that are not noticed in the process of writing code, we will refactor our code quite frequently. But I'm not here today to talk about how to refactor or why we do it, if you do need it, you can check out the book [Refactoring: Improving the Design of Existing Code].

Today I want to talk about 'rewriting', which is my tried-and-true trick as an entry-level architect, and I share it with you here.

In fact, in terms of ideas and techniques, rewriting should be classified as refactoring, but there is a difference, that is, refactoring ** needs to be familiar with ** legacy code, and rewriting ** does not need to be familiar with ** legacy code.

> Code is alive, it will gradually age and lose vitality over time.

Write a good code, his life will be very long (what is good code, in fact, there is a lot of discussion, such as applying the 'SOLID' principle to write code, this is not discussed here), but in any case, he always has a life cycle, there will be a day of old age and loss of vitality, when that day comes, should we decide to overturn and redo it or let it fend for itself?

And in the teamwork, it may have been with your personal qualities, you can make the code evergreen, but you can't avoid your team members to destroy the vitality of your code, of course, there is a good practice - only the owner of the code base can check in the code, any code completed by others needs to be personally reviewed by the owner, personally check in, so he can ensure that the quality of this code is in line with his own before checking in, but this has high requirements for the owner. And if you need to develop large projects in a short period of time, there are great limitations, and the code on Github is almost always managed in this way, even source code like Linux is managed in this way.

If it is not for the above practice, imagine that you are in a team of different levels, each person is responsible for the development of a module, after the system goes online and enters the maintenance stage, someone leaves and finds that the module designed is complex and not easy to understand, and it is extremely difficult for subsequent personnel to understand and modify, and then consider rewriting at this time?

I know your doubts, you must feel that this is more costly, the risk is more difficult to control, if you start to consider rewriting this matter after this matter has happened, then don't think about it, it must be very costly, and the risk is extremely high, at this time it is indeed not recommended to easily conclude and rewrite.

> So, I'm writing this in the hope that you'll be prepared before it happens.

Let's first analyze what happens in general that a rewrite is necessary.

## There are generally some reasons that cause a rewrite

* An inexperienced developer whose part of the low-quality code enters the codebase, making it difficult to maintain later
* A simple module becomes so complex that it is difficult to maintain later by patching multiple times
* In the early stage, due to the incomplete understanding of the system or business, the design at that time could not fully meet the needs of the customer
* A complex module was found to have an anomaly, its legacy code is not easily understood, and the module developer can no longer find it

**Note**: The so-called 'patching' method refers to the way that you can make the program normal by judging the specific situation and giving special treatment after you find an abnormal situation that has not been preconsidered by the framework. The potential harm of this approach is that you don't know how many more of these particular cases there will be.

Should we prepare for something in advance before this time comes?

## What should we prepare for the rewrite in advance

**Fully define the interface **, define the interface of each module, there should be no strong coupling between the interfaces, for most cases can refer to the typical Rest style design, the interface should try to avoid cooperation with special application scenarios, so that the call of the interface must follow some non-intuitive consciousness of the call rules.
**Reducing the scope of modules** so that the scope of each module is reduced, which can simplify the interface and reduce the amount of rewriting work.
**Do a good job of automatic testing of the interface**, the benefits of TDD will not be elaborated in this article, it is an important foundation for refactoring, but also an important foundation for rewriting.
** Use new technology frequent refactoring **, note that here is 'refactoring', this article seems to be biased from our title, but in fact, it is not, after all, rewriting is also something that we try to avoid, but there is absolutely no way to completely avoid it, so often use new technology to refactor the system, making the code more streamlined, conducive to the continuation of code vitality, and avoiding the occurrence of such high-cost events as rewriting.

> Finally, I still have to emphasize that my point is not to let everyone rewrite the code frequently, but to make everyone realize that there must be a possibility of having to rewrite the code, especially in teams with different levels, so preparing for this possibility in advance is definitely many times better than holding Buddha's feet temporarily.

[refactoring]: http://book.douban.com/subject/1229923/
