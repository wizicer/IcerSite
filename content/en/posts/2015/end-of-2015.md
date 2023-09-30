---
title: 2015 came to an end
tags:
- 杂文
categories:
- 冰河杂谈
date: 2015-12-31
lang: en
translateDate: 9/30/2023
---

Well, it's time to sum up 2015.

Several big things happened this year, the decoration and the move into a new home, the daughter has spoken, the wife has quit to take the children at home and do what she likes.

## Tools

This year, a series of electronic devices have been added to the home, and the following are more satisfactory:

* Surface Pro 3: In every way, its appearance has brought a lot of convenience to my life, especially on the shuttle,
  Whether it's reading a book, taking notes, organizing materials, or watching a movie, it can play a considerable value.
* Lumia 1520: Large-screen mobile phone, this size is really not used to at first, although it is true that I don't want to toss Android, and I don't like the iOS system,
  Only WP is optional, but I still have to say that after matching the operating system of Windows 10, it is indeed quite good.
* NAS: In order to do more attempts, the previous Atom core NAS was specially upgraded to the I5 core version, equipped with 16G memory, 500G SSD,
  9T data disk (including backup disk), feel very comfortable, can run 7 virtual machines at the same time completely smoothly, used to cooperate with my different home services,
  Create virtual machines from time to time to do all kinds of novel experiments.
* Dell U2414H: Dell's professional-grade monitor, which was known as the narrowest bezel monitor in the world at the time, but what I actually wanted to buy was its Daisy Chain feature.
  That is, I can connect the DP interface of SP3 to the subordinate display, so that my SP3 does not need to plug in the DP connection.
  Just put on the Dock and enjoy dual monitors. However, it is a pity that after Microsoft pushed the BIOS update in June, this function was not normal.
  From time to time, it will break, and then it will simply not be usable at all. So this monitor is right to appreciate.
* Game console: The original I5 console was requisitioned as a NAS, so it was equipped with a new fourth-generation I5 as my wife's work computer, my game computer,
  And for the first time spent a lot of money to buy an NV GTX 960 graphics card worth 1600, the most expensive graphics card ever, of course I know in the eyes of netizens,
  This is just getting started. Among the 770 and 960 of the same price, the 960 was chosen without hesitation, because of its low power consumption,
  It can achieve the degree that the graphics card fan does not need to rotate in daily use.
* UPS: I don't know why for a while, occasionally tripping, I really feel sorry for my NAS, so I gave one, and suffered an early morning power outage,
  Looking at the logs, I found that my small capacity UPS could actually last for more than an hour.
* SSD: I tried to buy an SSD at the end of last year, and I was shocked when I first started using it, so I bought five in a row this year.
  Replace the three computers at home except SP3, which has naturally used SSDs, and the company's two computers, with SSDs,
  Suddenly, I felt that I had entered a new era, and a sense of local tyrants was born.
* Canon 5DMark III: Actually, I don't take pictures, but the benefits of this device have been really rewarding, since I have it,
  The photographer's wife doesn't mention its name in my ear anymore.

This year I used some pretty good software, among which the following are recommended:

* Word 2016: Dipped in the company's light, participated in the Microsoft HUB program, bought for 70 yuan,
  The biggest difference from the previous version is that you can easily use the stylus on SP3.
* ConEmu: A tool similar to TMUX under Linux, it is definitely a must-have for command-line enthusiasts.
* Chocolatey: Package management tool under Windows, unfortunately basically useless in the LAN, but in the network environment of foreign companies,
  It is very convenient to install a new computer, especially if you need to reinstall the virtual machine from time to time.
* Sumatra PDF: Exceptionally compact PDF reader with automatic refresh.
* Latex: A powerful tool for writing papers, the formulas, algorithms, and words written naturally become tall (compared to the word version).
* JPEGView: Very small image viewing tool, in fact, it should not be needed, but Windows 10 removed the previous very convenient image viewing tool that supports automatic refresh.
  I had to look for an alternative tool that could automatically refresh, so there it was, but the disadvantage was that the configuration could not be automatically saved.
* mRemoteNG: This is an open source project developed using VB.Net to manage a large number of remote connections, which can help remember passwords, which is really convenient.
* Visual Studio 2015: Has pretty many nice improvements but for depth. For NET developers, many of these shortcomings can still be felt.
  As an extremely wide audience, under the premise that the function and stability far exceed the various IDEs, its scalability has reached Eclipse, which is really valuable.
* Docker: The famous container tool that can effectively isolate various applications on the same machine (virtual machine),
  Let me run gitlab, redmine and Apache on the same computer, the stability is generally OK, but it has been running for about 100 days,
  There was an unrecoverable crash in more than 50 days, and the stability was still poor compared to another server that ran a pure node application (no strike at all for 100 days).
* GitHubLab: It's also famous, and it's really good for setting up internal processes, but I'm also thinking about non-critical (non-leakable) data.
  Similar tools from outside can be purchased directly to eliminate maintenance costs.

## Game development

Since last year, I have been implementing the idea of not making games, but this year in the middle of the year, my thoughts drifted and I thought about how to make games.
Fortunately, I stopped in time and did not spend too much time on this.
My wife said that game development is like my first love, and it is difficult to dissipate in my heart, and even encouraged me to turn to the road of game development.
But I also know that I've been away from the front lines of game development for too long, and the change of technology and the shift in core has made it difficult for me to move into game development in order to maintain revenue.
Anyway, I always had to put down game development in order to be more professional and deep.

Let it go, maybe ten years from now, when I won my financial freedom, I was able to pick up my old love of game development and now I have to concentrate.

## Javascript

This year, I was fortunate enough to be able to officially use the JavaScript that I wanted to try last year on a medium-sized project, although not large.
However, the architecture design is designed according to medium-sized projects, and the pit that was originally wanted to be opened last year has been completely reduced to a pit because of the existence of this project.

This year I tried CoffeeScript + Angular 1.4 in depth, the Internet is really changing rapidly, and now it seems that this combination has lagged a little behind,
If the next opportunity comes, I will consider using TypeScript+Angular 2.0.

But this year to get a conclusion that is very important to me (if you happen to be. Net developers, maybe this conclusion is as important to you),
Just looking at the current Nodejs development environment, for enterprise applications, the front-end uses Angular as a rich client, while the back-end uses C#/F#.
It can get better performance and maintainability improvement. Although I have proven the stability of Nodejs through several projects, it is really good.
However, the development support tools are still relatively limited, so that visual programming methods such as performance tuning and tracing debugging cannot be used.
This will not reduce the cost of the Nodejs project.

## C#/.Net

This year, even if Microsoft has repeatedly released new products, it seems that there is no way to change the status quo that most HR and headhunters believe that C# is an outdated language.
As a result, C# programmers don't perform as valuable on job boards as programmers in other language types.
I remembered that a classmate didn't want to learn C# in the past, thinking that the language was too simple, the tools were too convenient, and it would be worthless in the future.
On the surface, it seems that his choice is right, but this is based on the programmer's thinking, if I were the boss.
Of course, I will choose something that creates more value at the cheapest price, so even as a multilingual enthusiast,
I'm still willing to let my company use C#/.Net.

When using other languages, it is common to see many design patterns due to their language characteristics.
I used to look forward to the early application of some of these pretty good features to C#, but fortunately,
These features really appear on C# one by one, and this year Microsoft has opened up a large number of core projects.
I believe this will greatly improve the C# language and . the maturity of the Net platform,
As. Net Architect, I am very gratified,
I sincerely hope to see more developers choose C# as their important development language. Net as its development platform.

## Conclusion

There is always a lot to say, but I still have to stop here, summarizing this year in one sentence:
It's not a good time, there is no bright spot to be proud of, and although it is not a stumbling life, there is still potential to be tapped.
