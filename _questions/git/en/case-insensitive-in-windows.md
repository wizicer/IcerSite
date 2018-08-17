---
title: "case-insensitive in windows"
ref: "case-insensitive in windows"
date: 2016-5-16
lang: en
category: Git
---

Git are case-sensitive, while Windows is case-insensitive.

Then a very strange situation happened when directory `abc` and `Abc` both exist in git repository.
In \*nix you may find they are two directory while in Windows, you will find only `Abc` directory
exists.

Due to the character of git, [security vulnerability](https://developer.atlassian.com/blog/2014/12/securing-your-git-server/) was found and fixed in `2.2.1`.
