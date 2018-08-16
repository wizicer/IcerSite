---
title: "debug VS2015 extension project"
date: 2016-4-24
lang: en
category: C#
---



1. Right click on the project and select Properties
2. Go to the Debug Tab
3. Click on the radio button for Start External Program. Point it to the devenv.exe binary.
   On my machine it's located at
   C:\Program Files (x86)\Microsoft Visual Studio 10.0\Common7\IDE\devenv.exe
   On a non x64 machine though you can remove the " (x86)" portion.
4. Then set the command line arguments to /rootsuffix Exp

[Link](http://stackoverflow.com/questions/9281662/how-to-debug-visual-studio-extensions)

