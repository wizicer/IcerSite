---
title: Game Ideas and Production Issue 6
tags:
- 游戏思想与制作
categories:
- 游戏思想与制作
date: 2004-01-24
lang: en
translateDate: 9/30/2023
---

## is written at the beginning

I haven't seen you for a long time, I don't know if you remember my old friend? The last issue of the magazine probably dates back to October of the previous year, when I promised to publish an article about the "martial arts system" in this issue, I don't know if it has whetted the appetite of many friends, here I owe you first, rest assured, this issue I will definitely dedicate this late "super cool point" to everyone.

A long time ago, due to my studies, I had to give up this newspaper, but today I did decide to hold another issue because of the game production competition held by Tianqing Digital, I watched his competition requirements, not high at all (to be honest, I think it's too low, completely look down on China's game production elite), this is also very good, can make rookies like me get a workout, this is really a good opportunity, everyone must seize it, so in this issue, I decided to give some help to friends who are interested in participating in the competition and winning prizes, and I hope that everyone can achieve good results.

Official Website: http://2004.91.com/

## Super Cool Point – Martial Arts System

I don't know if you have noticed that recent online games seem to like the "combo system" at the same time, that is, your existing several martial arts through its system synthesis at one time, and improve a lot of attack power, this is the existing combo system, it feels just more gorgeous colors, in the game company's introduction words are said to increase the diversity of the game, but for the practice masters who value "martial arts", will they be interested in those martial arts that have no offensive power? Once there is a so-called strategy, everything is reduced to the ordinary, and everyone repeats the same path as others, is this the "diversity" we need?

Now let's assume a world, the characters in this world are the same as our form, so we can make a mannequin to represent them, at this time, in the game world, we can make an interface for the character who represents himself to learn martial arts, and the martial arts here are not like those games, you can get it by "buying books", "adding skill points" or directly "leveling up", here we control the "skinned skeleton villain" movement on the screen through the keyboard. At this time, the whole screen looks more like a fighting game, because multiple people can "practice" at the same time, so players can imitate each other, learn from each other, and compete with each other. You can then record the martial arts that you feel satisfied with like recording a macro and set it as a shortcut for future use.

When fighting, everyone has their own default non-conditioned reflexes, and then we can also design conditioned reflexes for our own characters, so that when the characters accept the attacks of others, they will produce corresponding evasive behaviors, and whether the dodge is successful depends on whether your characters react quickly, and whether the conditioned and unconditioned reflexes can correctly avoid the opponent's attacks. And we should make each part of the body attach the corresponding agility, defense, strength and burst value, etc., and these should be recessive, can not let the player see, when the corresponding part is damaged, the degree of damage depends on the defense, after the injury, the corresponding defense, strength, agility, etc. will be reduced, and so on a series of additional value work. I think that in this way, the gameplay will be much improved, and of course the competitiveness will be improved even more.

Having said all this, everyone must think that there must be many problems waiting to be solved, right? Because our technology is not high enough, and the server must not make everyone take up too many resources in order to accommodate more people. Let me specifically address these known issues:

1, skin skeleton villain: in fact, this is an action system supported by a three-dimensional system, the keyboard can be designed with some keys, respectively control the main joints of the villain, the corresponding joint movement, will drive his connected joints to move together, I don't want to introduce more in this regard, because there are many experts in this area, more monographs, if you are interested, welcome to look for it on the Internet, I want to use network resources.

2. Combat system: Does it sound complicated? What kind of conditioning and so on to be applied, we imagine that we must apply a three-dimensional computing system, otherwise how to judge the contact between characters, but if we don't want to represent the real world, then we just need some systems that are a little more complex than now.

Perhaps there are many issues of this kind that I have mentioned, and you are welcome to discuss them with me.

## Super cool point - column description

This is the third issue of this column, and I have talked about some of my own thoughts, I don't know what your opinion is? I don't know if I said what everyone wanted to hear. I think this is a unique column, I will insist on running this column, and I hope that everyone can support me and tell me my thoughts and opinions.

## Basic Game Design Guide - Column Introduction

This column is mainly for the game production competition held by Tianqing Digital, hoping to lead those friends who are not very clear about this aspect to enter the state smoothly, in this part I will only point a little fur, put forward some slightly more technical things to introduce it, and if you don't understand anything else, you are also welcome to write to discuss.

## Basic Game Design Guide – Tetris

Tetris is a very classic game, the game process I don't think I need to introduce it, and the specific game rules, the organizer has given it very clearly (at first I saw the topic of Tetris, really shocked me, thought he asked us to develop an artificial intelligence, can get the most points), we just need to construct the basic framework and add bricks to it.

1. The first is to analyze the game process, and the entire game process can be expressed as:

```cpp
Initialize() //initialize
{
    Initialize the game interface;
    Randomly calculate the blocks that will fall and store them in the cache;
    Enter the main loop;
}

MainLoop() // Main loop program
{
    Retrieve the currently falling block from the cache;
    while (the block has not yet settled)
    {
        Accept user keyboard events and handle them; You can design an interface for setting up a custom keyboard
        Calculate the waiting time for the drop according to the difficulty, etc.;
        if (Reach Drop Time) 
        {
            Drop the block by one block;
            if (can no longer fall) // indicates that the position where it cannot be dropped has been reached
                Exit the loop;
        }
    }
    if (block out of available area) // indicates that the user has already lost
        Exit the main program;
    Several of the horizontal columns that monitor the impact of the block reach a full row status; This can be simplified with special data structures
    Extra points, delete the full horizontal column and move the upper horizontal column down; Different scores are added depending on the number of rows eliminated
    Randomly calculate the next falling square; Determines whether it is displayed based on the user's selection
}
```

2, let's take a look at the simple data structure representation I mentioned first, because the requirement is '10X20' grid, and it is only ten cells horizontally, so '2^10=1024' is far less than the range of integer, and the condition for judging the full row is that the number of representations of this row is equal to 1024. In fact, this optimization is not very useful, because the original data scale is very small. In addition, it should be noted that the squares that have not yet been stabilized should not be put into the main array, which is not easy to operate, and the reasons for this can be understood as soon as you think about it, I will not describe in detail.

3. Finally, let's take a look at the network part of the game, we only need to add a little code on the basis of the original program, which is expressed as:

```cpp
Initialize() //initialize
{
    Initialize the game interface;
    Randomly calculate the blocks that will fall and store them in the cache;
    Connect to the network and prepare for battle;
    Enter the main loop;
}

MainLoop() // Main loop program
{
    Retrieve the currently falling block from the cache;
    while (the block has not yet settled)
    {
        Accept user keyboard events and handle them; You can design an interface for setting up a custom keyboard
        Calculate the waiting time for the drop according to the difficulty, etc.;
        if (Reach Drop Time) 
        {
            Drop the block by one block;
            if (can no longer fall) // indicates that the position where it cannot be dropped has been reached
                Exit the loop;
        }
    }
    if (block out of available area) // indicates that the user has already lost
    {
        Exit the main program;
        Tell the other user that the user has lost;
    }
    Several of the horizontal columns that monitor the impact of the block reach a full row status; This can be simplified with special data structures
    if (number of rows full >1)
        The number of rows that are currently full of rows is transmitted through the network protocol;
    Extra points, delete the full horizontal column and move the upper horizontal column down; Different scores are added depending on the number of rows eliminated
    Randomly calculate the next falling square; Determines whether it is displayed based on the user's selection
}

Connection_DataArrival (Data) // Event of receiving information transmitted over the network
{
    Analyze the resulting data; The main thing is to judge the type of data
    if (data is the number of rows)
        Add new rows of random shape from the bottom of your own area according to the number of analyzed rows;
    else
        Tell the user that he won and end the program;
}
```

4. I think I've made it clear, right? Of course, in the end, in order to get the grand prize, of course, you have to spare no effort to embarrass your program to decorate it well, which may involve the problem of colored squares, but this is all a problem of data structure, I don't need to say more. If you feel free, you can take a look at an excerpt from a new Tetris plan I wrote before, maybe it will be enlightening.

## Basic Game Design Guide – Little Bee

Really, why describe other people's bees as bad bees, I don't know who the bees offended so diligently, with such a notoriety, hey, it is also a last resort, if not for us programmers, will they attack our spacecraft? But if it weren't for the planning requirements, our bees would still be very well-behaved. Hey, having said so much nonsense, in short, programmers are very critical and master the objective laws of the world. ^o^

Little bee this game, I believe everyone must have played a lot in childhood, (what?) Haven't fought? So I still don't need to describe the specific process, the organizer gave too much detail, it seems that there is only one more "absorption" function than the previous play, we just need to construct the basic framework and add bricks to it.

1. The first is to analyze the game process, and the entire game process can be expressed as:

```cpp
Initialize() //initialize
{
    Load the bee group;
    Make the ship temporarily invincible;
    Initialize the spacecraft position;
}

MainLoop() // Main loop program
{
    Handling keyboard events (i.e. making the ship act based on keyboard events); The degree of change can be calculated from the data in memory
    IF (Spaceship Bullet Issued)
        calculate the next position of the ship's bullet;
    for (i=1; i< Number of bees; i++) // Calculate for each bee
    {
        Acquire a random number and determine the bee's next move; Depending on the type of bee, the type of action that occurs is also different
        if (action is not absorption)
            Perform actions according to the action instructions;
        else if (the absorption range of the bee coincides with the ship) and (the ship is not invincible or dodgy)
        {
            Subtract one spaceship;
            if (Number of Ships<0) 
                Game over;
            Make the ship temporarily invincible;
            Initialize the spacecraft position;
        } 
        if (the ship bullet coincides with the bee)
        {
            Reduce the HP of this bee;
            if (HP<=0)
            {
                if (the bee owns the spaceship)
                {
                    Delete the ship;
                    Make the spacecraft have a secondary aircraft;
                }
                Delete the bee;
            }
            Initialize the ship bullets;
        }
        If (the bee coincides with the spacecraft) // collision
        {
            if (the ship is not dodging)
                Reduce the bee HP;
            if (the ship is not invincible) or (the ship is in the dodge state)
            {
                Subtract one spaceship;
                if (Number of Ships<0) 
                    Game over;
                Make the ship temporarily invincible;
                Initialize the spacecraft position;
            }
        }
    }
    for (i=1; i< Number of bullets fired; i++) // Count the bullets fired by each bee
    {
        Calculate the next position of the bullet;
        if (the bullet coincides with the ship) and (the ship is not invincible) // The calculation about the secondary aircraft is the same as that of the main engine
        {
            Remove the bullet;
            Subtract one spaceship;
            if (Number of Ships<0) 
                Game over;
            Make the ship temporarily invincible;
            Initialize the spacecraft position;
        }
        else if (bullets fly out of the border)
            Remove the bullet;
        else
            Move the bullet to the next position;
    }
    if (no prop dropped) // Calculate about the prop
        Drop items randomly;
    else if (item coincides with spaceship)
        Change the state according to the effect of the prop;
    Display the screen status;
}
```

2. I don't think I need to say anything more, right? I think this is very clear, maybe some details have not been written, I think those are definitely not structural difficulties.

## Game Plan Selection - New Tetris

Free Super Tetris development documentation

Introduction: The game supports network battle, there are a variety of battle methods, can also be single-player combat, can also have a variety of combat methods, you can edit your own map, can appear tiles and other information, network battle uses IP addresses to make computers connect.

Comprehensive freewheeling:

1. Editable initial patterns already in the play area at the beginning of the game
2. You can edit and design the style and characteristics of your own unique drop tiles
3. Edit the style of the play area
4. You can design the rules of the game yourself

Game rules setting rules

1. Set the tiles that can appear under this rule and the probability of tiles
2. The style and background of the play area under these rules
3. Tiles that meet certain rules execute certain rules at regular times or when specified events occur

Each tile has its own properties

1. Penetrability (can set the level of penetrability)
2. Bomb (bomb power can be set)
3. Timed bomb, when just built, it does not react, but after a while, it blows up like a bomb, and it can also be set to explode when a tile is squeezed on it.
4. The heart-piercing style, which can "pierce the heart with one arrow", will be removed from all below him.

*Note: This was written when I was very young, so it can only be regarded as an article that records my own thoughts, and maybe it can be useful to everyone

## Introduction to excellent games - column description

I have heard a story that in the nineties of the last century, the Chinese government gathered more than a hundred computer experts in China to develop an operating system with its own intellectual property rights, and technically speaking, it far exceeded Windows at that time, but because the government did not vigorously promote this system, so that in the end this excellent operating system was only used in the military department, losing the ability to compete with Windows. This may be their mistake in the market, but we can't deny him because of its mistake in the market, and there are many excellent works in this situation, and I think we should dig out such works and learn from them.

I think this may be another column that needs to be worked on together, so please introduce the game that you think is excellent.

## Introduction to the excellent game – God is crazy too
"God Also Crazy" is the earliest game I came into contact with, and I have always been fond of him, 97 years of work, completely pure 3D, as you can imagine, it was already very gorgeous at that time, so that my integrated graphics card at that time made my machine die I don't know how many times, but the love for it far exceeded the fear of death.

The setting of the world, the design of the spherical map, making the environment more realistic and easy to understand, complete 3D surface design, more factors to consider, terrain that can be changed at any time, unexpected combat methods, three-way combat by land, sea and air, reproducing the real tactical design, the artificial intelligence of the little people makes the player's operation more satisfactory, when the order given by the player is completed, they will do their own thing, such as helping the people around them repair the house, move wood, etc., and then if it's okay, They would gather in groups of three or five and chat about the sky, leisurely and at ease. If any villain is unfortunately abandoned in a place where he cannot come out, he will commit suicide after a while without being rescued, and will no longer occupy your limit. Sometimes you will give all your forces to attack others, about two hundred people go out together, you will definitely not see traffic jams, they will pass smoothly, and there will be no phenomenon of heavy people, they will definitely be separate independent people, very smooth passage even in very narrow places.

Finally, let's talk about the magic part that excites me the most, the whole game has about two dozen kinds of magic, which is very rich, and has a lot of peculiar effects, which play a decisive role in turning the tide of the war, so attacking the opponent's priest is always the focus of the game, and magic has a lagging effect, so it is estimated that the attack position of magic is also a skill. And players must not be happy that they are surrounded by mountains, because this is the most favorable terrain for using volcanic eruptions, one is enough to make the entire clan collapse, and maybe in a moment the original basin will become a flat river, and the next moment may be an endless ocean.

Eight types of buildings, six classes of troops (including priests), two means of transportation (ships and hot air balloons), a little stingy, but I feel that the classes are very sophisticated, they each perform their own duties, making the war full of suspense, although the priest is powerful, but the samurai or fire samurai, only need to give him three times, he will ascend to heaven. Although samurai can pick ten with one, when they meet a missionary, dozens of samurai will be attracted and then can only watch their samurai become each other's samurai.

It is worth mentioning that its sound effect processing in the game, the same main theme five styles of music loop, so that you can not feel the repetition of the music, and when fighting, add passionate drums, not only make the player's mood get ups and downs, but also make us get an unprecedented aural impact.

It's also extremely fast to read and write, almost instantaneously, making it the fastest real-time strategy game I've seen, and perfect for players who prefer the SL style of play.

Finally, I still have to mention his shortcomings, the reason why he can't be popular like interstellar, the most important thing is that he can't fight against computers, and the computer in the mission version is too simple, and many people feel that its troops are too few, and each class can only do one thing, can not have any other effects, so I feel that his tactics are too simple. The whole game is too focused on magic, and it is also a rejection for players who don't like magic.

I used to be looking forward to "God Is Crazy 4", but then I knew that this was impossible, because later I heard that the company was dissolved due to a little conflict between high-level talents in their company, and I thought it was really a pity after hearing about it. I feel better until now, because I think I already have their game manufacturing technology at that time, and I am only a little short of time to design and build, I don't know if you are interested in learning about this game, you are welcome to experience it and discuss it with me.

## is written at the end

Finally finished this issue of the magazine, my heart is also relieved, because this issue is completely my painstaking efforts, all the articles are written by me, although in the end, it seems that I really only wrote five articles, I don't know if everyone is still satisfied, as long as it can inspire everyone. In the future, I will not be able to have so much time to run this magazine again, because learning is the first after all, I have to sprint for my bright future, after this year, I feel that I have changed a lot, and I am no longer so interested in the program, because the so-called "experts" only know how to appreciate the surface, if you have read my "diary that is not a diary", then you know what I mean. I still like to write little software that makes people crazy and "experts" scoff at it, maybe it's in my nature to experiment with novel technologies.

Thank you for reading so much of my nonsense, maybe I'll look for new friends who would like to start a magazine together, or merge with other magazines, or just make this magazine disappear, I don't know which one would be the best option, but one thing is certain, I definitely won't have a lot of time for this. I hope you can vote for the development of this newspaper~~

## Copyright Notice

All content in this issue is copyrighted by Ice Sorcerer, please bring the author's name if you want to reprint it.

## Let your friends join us too

The development of this newspaper, relying on my spiritual motivation alone is far from enough! I need your support, your encouragement, your opinion, your criticism... If you have any views on this newspaper, please feel free to express them on my forum.

If you think this newspaper is good, please introduce this newspaper to your friends!

