---
title: "Event during DragMove?"
date: 2016-5-31
lang: en
category: C#
---

In my application [TouchAssistant](https://github.com/wizicer/TouchAssistant) I want it *disappear*
after few seconds if no user interaction, however, after called `DragMove()`, there is no chance for me to
listen to extra events to know if user still interacted with the program.

<!--more-->

There is a very good explanation about it from this [Link](http://stackoverflow.com/questions/3592488).

> DragMove starts a modal message loop and doesn't return until the mouse button is released, so by
> the time the button receives the MouseLeftButtonDown event it's already lost the chance to click.

The solution is simple, just set a variable before executing `DragMove`, and unset the variable
after the execution. Your program can depend on this variable.
