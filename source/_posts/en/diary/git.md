title: Git Diary
tags:
- Git
categories:
- Diary
description:
  Diary for git experiences and special scripts
date: 2016-5-16
---

## 2016-5-16

### check out without change files

`git symbolic-ref HEAD refs/heads/branchname`

### get SHA of first commit in git?

`git rev-list --max-parents=0 HEAD`

## 2016-5-13

### revert commit after push

`git revert`

### unstage all

`git reset`

However, if the repository don't have the first commit, you may want `rm -rf .git && git init`

### why git not track folder?

No answer, however, without folder tracking merge a old branch to another branch which done rename a
folder may not complete automatically.

## 2016-5-12

### squash all commits to one commit at one point

`No Answer`

The scenario of this question is because some company open source its project without sharing the
whole history, so it keeps two different history copy.

## 2016-5-9

### find deleted file in history

`git log --all -- FILEPATH(wildcard allowed)`

### gitlab wiki TOC

`[[_TOC_]]`, NOTE: preview mode not work.

## 2016-5-6

### UNC link in gitlab

```
file://///.....
```

## 2016-5-4

### push tag

`git push --follow-tags`

## 2016-4-29

### Delete remote branch

`git push origin :branchname`

### Error: src refspec ... matches more than one

Root cause is same name of branch and tag appears, usually we remove the conflicting tag to avoid
the confliction.

## 2016-4-25

### produce patch file

`git diff commit[..commit] >xxx.patch`

### `reflog` of gitlab

Not supported in gitlab, github supported via API.

### Find reflog of remote repo.

Not possible, because reflog is local only.

### How to audit force push in gitlab?

No way, only to `protect` it.

### dot file management with git with proper ignore

Add following pattern:
```
.*
!/.gitignore
```

[Link](http://stackoverflow.com/questions/8021441/gitignore-hidden-dot-directories)

## 2016-4-24

### word file git diff

1. `.gitattributes` file in root folder of your git project
```
*.docx diff=pandoc
```
2. `.gitconfig` file in your home folder
```
[diff "pandoc"]
    textconv=pandoc --to=markdown
    prompt = false
```

[Link](http://blog.martinfenner.org/2014/08/25/using-microsoft-word-with-git/)

### git find biggest history

One-liner:
```sh
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -10 | awk '{print$1}')"
```

[Link](http://stackoverflow.com/questions/10622179/how-to-find-identify-large-files-commits-in-git-history)

## 2016-4-20

### Move files to sub folder with history

use `filter-branch --tree-filter`

### Merge two repository

Directly merge them, you may want use `filter-branch` if subdirectory needed.

## No Answer Questions

### Find orphan pages in gitlab wiki
