---
title: An in-depth discussion of the tabletop sprites
tags:
- 冰河作品选
categories:
- 冰河作品选
date: 2004-12-19
lang: en
translateDate: 9/30/2023
---

Keywords: Desktop Genie screen saver plugin technology

## Preamble

Desktop elves, a kind of software that takes various forms of life as a manifestation and makes the software more humane often provides convenience to users, which may be strange and distant for modern new humans, but they must not know that such a small thing was once the most precious treasure of the tide, so that in the previous forum, there were always people who asked others to help make desktop elves to give to their girlfriends, and later, the functions of the computer became more and more numerous, and the functions of the desktop elves became more and more single, until they were finally eliminated. But its ideas have been incorporated into many software, such as the assistant in Microsoft Office, the agent function provided by Windows 2000 and above, and some pet breeding games. Therefore, we already have higher requirements for the new era of desktop wizards, and now this is a fertile ground for untapped ground, and now we will discuss it from its basic framework, extended functions, and in-depth exploration.

## Basic framework

Since we need to dive in, so I'll first get an idea of its basic framework, but let's take a look at the basic framework of the Desktop Genie first:

```cpp
Initialize () // initialization section
{
    Load the image data of the sprite into memory;
    Call the API so that the program is always at the top of the screen;
}
MainLoop() // The main loop portion of the sprite
{
    Draw sprites and make non-sprites partially transparent;
    Get the user's actions;
    Switch (user action)
    {
        case drag:
            Follow the user's mouse movement;
            break；
        ......
        Other response processing;
        ......
    }
    Perform actions according to the sprite's default AI;
}
Exit () // End sprite
{
    Free up memory data;
    Quit;
}
```

Let's explain the main operation process of Desktop Genie. No matter what the program is, it is inevitable to initialize the part, initialization, all the required pictures into memory, to speed up the program running has a significant role, because a sprite will inevitably have many repetitive actions, repeated loading from the hard disk will waste a lot of time. Then it's about keeping the entire program at the top of the screen, that is, keeping the desktop wizard within view. After entering the main loop part of the game, we have to draw the corresponding picture according to the actions of the elf, and make the non-elf part transparent, that is, so that the elf can be displayed completely and without cumbersome, and also make the elf more beautiful, and then change the form of the elf according to the user's operation, as well as the deformation trend, and record it after the final simple AI processing, and wait until the next loop. Finally, when a certain requirement is met, or the user makes a request to exit, the program frees the memory data and exits.

Later we will focus on the response processing part of the wizard and the AI part, and the two are inseparable, increasing the response event must increase the corresponding AI processing, next we will look at several basic AI processing:

```cpp
AgentAI-Follower () // Simple sprite that runs with the mouse
{
    Get mouse position;
    Calculate the speed at which the elf needs to walk based on the distance of the mouse from the current sprite; When the distance is very far, a fast run is required
    Get the next move of the elf based on the current movement and movement trend of the sprite;
}
AgentAI-RandomRun () // Simple sprite running randomly
{
    Get a position at random;
    Calculate the speed at which the sprite needs to walk based on the distance between the random position and the current sprite position; When the distance is very far, a fast run is required
    Get the next move of the elf based on the current movement and movement trend of the sprite;
}

```

Above we have shown you several commonly used simple desktop wizard running processes and basic structural frameworks with simple pseudocode, and we can see that there are still many extensible parts in these codes, so we continue to discuss...

## Extended functionality

Let's see what a computer user thinks of the desktop genie with a human-centered mindset. I remember that in the early days, I also liked to use the desktop sprite to decorate the desktop, but later found that the desktop sprite often hindered our normal use of the computer, because he always dangled next to the mouse, and from time to time he would click on it, and then it would affect the mood...

But fortunately, we thought of another solution:

```cpp
AgentAI-Escaper () // Simple escape from the mouse running sprite
{
    Get the distance of the mouse from the current sprite;
    if (Distance> Safe Distance)
        Calculate the speed at which the genie needs to walk based on the distance between the mouse and the safe distance; When the distance is very far, a fast run is required
    else
        Calculate the speed at which the genie needs to walk based on the distance between the mouse and the safe distance; When the distance is close, a fast run is required
    Get the next move of the elf based on the current movement and movement trend of the sprite;
}
```

This program can keep the elf at a certain distance, when we bring the mouse close to the elf, the elf will quickly escape, when the mouse is away from the elf, the elf chases back, and even grimaces ^-^.

In addition, we can also consider combining the desktop wizard with the screen saver, controlled through the inside of the program, when the mouse stops moving the user's set duration, you can start the program, so that the desktop wizard runs on the desktop from various forms, which not only plays the role of screen saver, but also makes the desktop more active, we express this scheme:

```cpp
AgentAI-ScreenSaver (// Sprite combined with screen saver).
{
    Get the current time and calculate the time difference from the last mouse movement;
    if (Time Difference< User Set Time)
        Follow normal elven activity; That is, the various modes of movement mentioned earlier
    else
        Make the elves move on the desktop according to certain rules; This rule is usually to make the genie walk all over the screen
    Get the next move of the elf based on the current movement and movement trend of the sprite;
}
```

Above we simply enriched the activities of the table elf and made him more active, and when that wasn't enough, we could continue the discussion...

## In-depth discussion

Many times, we feel that this desktop sprite seems to have no other role than making the desktop more active, but it occupies a huge amount of system resources (relative to its role), so we can try to add some vitality to him, but from the existing framework, in addition to enriching the elf's actions, I really can't think of anything better, in fact, now that the Internet has become so popular, we can now even let our desktop sprite connect to the Internet, which adds a bit of practicalityNow let's try to complete a simple task: to make the genie instantly report the latest information of a forum, to make him a forum elf, let's first look at his program flow:

```cpp
Login() // Log in and initialize the section
{
    Load the image data of the sprite into memory;
    Call the API so that the program is always at the top of the screen;
    obtain a username and password and send it to the forum server;
    Wait for feedback from the server;
    if (consent to entry)
        Enter the main program;
    else
        Prompt an error and log in again;
}

MainLoop() // The main loop portion of the sprite
{
    Draw sprites and make non-sprites partially transparent;
    Get the user's actions;
    if (locally operable)
        Conduct local operations;
    else
    {
        Send the operation to the server;
        Wait for feedback from the server;
        switch (feedback)
        {
            Case New Post:
                Make the genie act accordingly to tell the user that there is a new sticker; The user can define what kind of information is accepted
                break；
            ......
            Other feedback processing;
            ......
        }
    }
    Perform actions according to the sprite's default AI;
}

Exit () // End sprite
{
    Send away requests to the server;
    Free up memory data;
    Quit;
}

```

As can be seen from the above program, the whole program is similar to the basic framework, but the network connection part is added, so we can easily extend the functionality through the basic framework.
If the pictures and actions of the elves are always repeated, it is inevitable that there will be no boredom, but for an independent software developer, it is impossible to have so much energy to develop multiple sprite pictures, so we must do a good job of the interface of the program, so that others, even users, can develop the elves themselves.

! [](1.png)

Just like in the figure above, as long as the program is divided into the above parts, then the extensibility of the entire program has been greatly improved, and it can easily be that the whole program becomes colorful.
In practice, if you provide a desktop sprite that doesn't have a very practical use, then usually no one will come specifically to make sprite pictures for your program, but we can also have another strategy, that is, provide your own program as a plugin to others, as shown in the following figure:

! [](2.png)

This makes it easy to make Desktop Sprites widely available.

## Summary

This article only from the point of view of implementing such programs, provides ideas and processes, we can think along this idea, add more new elements, new functions, integrate more advantages, according to the basic framework to improve and enrich the entire program, and even consider optimization according to the system structure, so that the program occupies a great reduction in system resources.
