---
title: "如何让Git在windows下不区分（忽略）大小写"
ref: "case-insensitive in windows"
date: 2016-5-16
lang: zh
category: Git
---
Git are case-sensitive, while Windows is case-insensitive.

<!--more-->

Then a very strange situation happened when directory `abc` and `Abc` both exist in git repository.
In \*nix you may find they are two directory while in Windows, you will find only `Abc` directory
exists.

Due to the character of git, [security vulnerability](https://developer.atlassian.com/blog/2014/12/securing-your-git-server/) was found and fixed in `2.2.1`.
