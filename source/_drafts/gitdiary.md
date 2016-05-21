# Git Diary

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
