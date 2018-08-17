---
title: "word file git diff"
ref: "word file git diff"
date: 2016-4-24
lang: en
category: Git
---

1. `.gitattributes` file in root folder of your git project
```
*.docx diff=pandoc
```
2. `.gitconfig` file in your home folder
```ini
[diff "pandoc"]
    textconv=pandoc --to=markdown
    prompt = false
```

[Link](http://blog.martinfenner.org/2014/08/25/using-microsoft-word-with-git/)
