# Git Diary

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

## 2016-4-20

### Move files to sub folder with history

use `filter-branch --tree-filter`

### Merge two repository

Directly merge them, you may want use `filter-branch` if subdirectory needed.

## No Answer Questions

### Find orphan pages in gitlab wiki
