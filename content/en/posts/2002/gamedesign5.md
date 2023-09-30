---
title: Game Ideas and Production Issue 5
tags:
- 游戏思想与制作
categories:
- 游戏思想与制作
date: 2002-10-01
lang: en
translateDate: 9/30/2023
---

## This is how game planning is practiced (1)

You ready? Our proposal is about to start designing!

First of all, we have to establish what kind of game we want to do, RPG? RTG? SLG? AVG?

Oh? I don't understand what RPG is (right?) ）、RTG、SLG、AVG？ Nothing, the planning is like this step by step, don't pretend to understand if you don't understand, first look at the article in the last issue!

........................

OK? Got it! Let's go ahead!

Here, we are going to choose RPG to compile.

If you want to do a game well, you can't just think about how to finish the game as soon as possible, many of the plans I have seen are often "straight to the point", one is the characters, plot, items, etc., which has several major disadvantages: one is not good to determine the center (that is, the characteristics of the game) and the other is that it is easy to fall into the stereotype, so that your plan is no different from others.

OK, without further ado, how can these shortcomings be avoided? That, of course, is to determine the features of the game first.

Well, start now: (Note: This tutorial is based on the "Legend of Ice Magic" plan)

## "Ice Magic" Planning Plan (1)

Game tenet: Our game should let you "only think of the unthinkable, not impossible"

Of course, we don't want to make the game too complicated, you know, the game world is not a copy of the real world, but a world with many similarities with the real world, the game can be made more complicated, but not all functions must be used, maybe you will feel, this is not in vain, in fact, otherwise, when the player after playing again, suddenly find another function of the game, very fun, and can also explode, players will definitely have a sense of novelty, must repeat the game! This effectively extends the life of RPGs, why not?

Well, for example, I don't know if you've played NOX, to be honest, I think that one is quite good, with my interest, of course I am a magician, the first set down, I only learned twenty kinds of magic, I thought I had learned almost the same, when I finished the second set, I had learned more than thirty kinds of magic, just then, I saw the code of NOX in the nomad tribe, tuned it up, wow... Magicians have a total of sixty types of magic! So, in the third set, I learned more than forty kinds of magic, and on the basis of the second set, I found more than a dozen secret scenes, and I am still very interested! If I counted correctly, I've already played twelve sets, haha... It's good that an RPG can do this!

Pre-selected list of game features:

0. The so-called pre-selection list, that is, in the production of the game, for various reasons, some game features will be brushed off.

1. Suggested combat system

- The last issue of "Game Thinking and Production" has been introduced, if you haven't read it, hurry up!

2. Semi-timely RPG combat system

- This system is very different from the previous system, please see below for the specific differences!

3. Magic Array System

- Netizens who know me well, I believe this is not the nth time I have heard of it! Hehe, it's very simple to say!

- In short, teammates can use a special magic after standing in a certain formation.

4. Martial arts system

- This one is the most difficult, and no one has tried it yet, so I see that most of it will be brushed off, 555 ...

- However, in the next issue of the magazine, I will introduce it specifically and discuss the actual technology with you.

5. Special upgrade system

- Really special, simply indescribable, a later tutorial will be dedicated to.

6. Increase if needed

The first part of my proposal is really simple, but it's important, just like people write articles to identify the center. The structure of the plan is ever-changing, but one thing must not change: it must be absolutely practical, not simply beautiful!

In fact, I don't know if this design plan will work, but I have to try.

## PC Game Programming (2) [Reprint]

> Text omitted

## Game literacy knowledge (2)

### A few parts of the essential game for an open game

The so-called open game here refers to a game in which the player himself can change the content of the game. As an amateur, players often do not have game development technology, so in order to facilitate the majority of players to change the game content at will, game developers often have to design special game development programs for games, here I will briefly introduce it.

### Game map editor

Dedicated to editing game worlds, this is a must-do in every game. It's also easy to master because it's so intuitive! However, pay attention to the understanding of several professional words, such as "trap", which is easy to understand, that is, when the protagonist comes to this "trap", the plot will occur.

### Game script editor

How the plot of the game should develop, when to speak, when to change the map... This series of problems and so on will be solved in the script editor, which is actually the director's script.

Script editors used to be a necessary tool for games, but now some changes have changed, and many games use scripts that are "comparable to C" when developing, which may be a good thing for programmers, because screenwriting will be no different from programming, but for ordinary players, it may not be a good thing, after all, they really don't know how to program.

### Game Item Editor

In the mini-game, there is little need to exist, but when the game is bigger, it is impossible to do without this.

### Game character editor

It's usually not used in mini-games, because there are only a few characters in it, and you can get it in a few clicks!

--- 

Huh, a little eyebrow? Just find some open games to practice your hands!

Hehe...... Huh... Huh, hehe... By the way, make an advertisement (everyone pour ~~)

The Ice Magic Theory Beta is also an open game and is in beta, so you are welcome to participate in the test.

## Where should graphical MUDs go? ——How to build a virtual world [reprinted]

> Text omitted

Glacier Note: I can't remember where this article came from, maybe many people have seen this article, but I put it up anyway to remind everyone to play the game to play "level", not simply play level!

Regarding the author's final statement "play how you want, play how you want", this is simple, as long as all players can program, then the problem is not solved? Hehe......

## Super Cool Point - Semi-real-time RPG combat system

Semi-real-time RPG combat system has been mentioned in many places, and even called "use" by some games, previously played a game called "Sword Spirit", its combat method can be selected as "semi-real-time", only after using it, I know that the original one person hit it, and if you are fast enough, it will hit you at least five times, and you can hit it four times! This is obviously not interesting, and no one would want to use this feature a second time! (Unless he wanted to die in the first place) To be honest, this game is too difficult to play and not interesting at all.

The agility coefficient in "Xuanyuan Sword" is quite interesting, and the effect of fusing this coefficient with the classical Japanese battle is really good!

In fact, we can also be creative, in the Japanese battle, there is also a way to go to the grid, remember? Just like "Overlord Saber", "Fantasy Simulation Battle", "Genesis", usually, the agility of the character can only be used to determine the distance the character can go in this turn, in the real situation, there will never be someone standing there waiting for you to cut, and we think ARPG requires quick response, so now we have to use grafting technology to perfectly combine ARPG and Japanese battle, hehe, to say big, in fact, just improve it.

Because it is made similar to ARPG, when controlling the game, the player can only control the protagonist alone, which needs to be combined with the "recommended action" mentioned last time, if you don't know, go and see, the following starts.

I won't introduce the method of Japanese-style grid battle, well, suppose there are two people, A and B, A's agility is 20, B's agility is 30, then if you let A walk one square, then B should walk 1.5 blocks, and must move at the same time, in fact, you can also calculate when walking diagonally, for example, simply set the ratio of square diagonal to side length is 3:2, then A walks one block (not diagonal), B has to walk diagonally.

Let's talk about walking first, now let's talk about combat, assuming A's proficiency in his weapon is 200, and B is 50, we can get A's agility for their own weapons, A = agility + proficiency / 10 = 40, and B only has 35, which means that A hit 8 times, B only hit 7 times (assuming they are not dead!). ）

I'm really sorry, this article is not finished, I really feel a little uncomfortable, I really can't write, here I apologize to everyone.

## C++ learning tips

Do you believe it? I can't know C language after making a lot of small games, and a passable educational software, and can also API, DX and a little compilation?

Hehe, really, bought a book, went to the house to read it carefully before shouting fooled, he actually did not introduce how to write "Hello word", to the first start to analyze a program, look at me are big!

There is no way, only to carry forward the spirit of learning VB back then, although there was a basic foundation of Basic at that time, but it was useless, because VB would not recognize "PRINT" Hello world!" Target.

Hehe, without further ado, after a few hours of looking at each other that night (it recognized me, but I still didn't recognize it), summed up some experience, hoping to help C++ beginners like me!

- Tip I: Free to flip MSDN, #Include命令我就是从那里搞懂的.
- Tip II: The execution method of C language is very different from VB, but it is very similar, VB is interpreted to run, the commands that can be interpreted are all in msvbvm60 .dll, and the commands that can be interpreted by C language are all in the header (*.h), I understand it this way, I don't know right?
- Tip III: The book I bought has a sentence about pointers: "The key to using C well is whether you can use pointers well." "I pour ~, that master can tell me what the pointer is?
- Tip IV: By the way, cracking with VC++6.0 is not as convenient as using winice!
- Tip V: Is what I said useful? If you have questions, you can ask me, and then I will help you ask the master...

## Construct the system

I don't know if you remember UO? In the huge UO world, of course, there are all kinds of systems, and it is these rich systems that make UO full of fun, let's review it!

> Text omitted

## A little copyright notice

All those not marked "[excerpt]" are articles of the Ice Magician, all rights reserved, if you need to reprint, please notify me and attach the source!

If your article is reproduced and your copyright is seriously damaged, please let me know and I will immediately apologize to you and try to recover the loss!

## is written at the end

I felt a little uncomfortable during this time, I don't know why, maybe I was too tired, just came back from Chengdu, just rushed to write articles, write games, debug ASP, learn C++, publish electronic magazines, especially tiring is for my bamboo leaf revision, alas! Time is running out, school is about to start, I heard that after the start of school, there will be military training and a bottom-out exam, no way, forget it, if you can find a like-minded classmate in the future, then everyone will enjoy it, and there is hope that this magazine will be changed to semi-monthly (fantasy ... ）

If there is no big problem, by the nineteenth, my bamboo leaves can be successfully revised, and then in a few days you can see the theoretical version of "The Legend of Ice Magic" Demo2, oh yes, I have debugged an ASP voting system, mainly used to count the situation of this journal, I hope you must vote!

Sorry, I believe you must think that this magazine is terrible, nothing, please tell me, the development of this newspaper, must have your participation, can you tell me your impressions of this newspaper?

My E-mail: ~~xx~~

## About this newspaper

The development of this newspaper, relying on my spiritual motivation alone is far from enough! I need your support, your encouragement, your opinion, your criticism... If you have any views on this newspaper, please feel free to express them on my forum.

If you think this newspaper is good, please introduce this newspaper to your friends!
