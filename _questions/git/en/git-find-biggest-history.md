---
title: "git find biggest history"
date: 2016-4-20
lang: en
category: Git
---

One-liner:
```sh
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -10 | awk '{print$1}')"
```

[Link](http://stackoverflow.com/questions/10622179/how-to-find-identify-large-files-commits-in-git-history)
