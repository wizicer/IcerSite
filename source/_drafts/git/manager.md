管理者的工作
============

## 服务器搭建
## 理解配置
* 简写alias
## 管理更多类型的文件
## 找出破坏者
## 钩子
## 从别处导入

* 私有git
* SVN
* ClearCase

### 存档文件

1. create folder
2. initialize git
3. initialize gitignore
4. commit the gitignore
5. no space allowed in filename, so rename
6. use following script to check in code with history

```bash
#!/bin/bash

folder=WpfWireAutoRouting
filepattern=*.7z
gitignoreurl=https://raw.githubusercontent.com/github/gitignore/master/VisualStudio.gitignore

# stop if error
set -e

# initialize repo
mkdir $folder && cd $folder
curl $gitignoreurl>.gitignore
git init
git add -A && git commit -m 'initial gitignore'
firstcommit="$(git rev-list --max-parents=0 HEAD)"
cd ..

# iterate all history file
for file in `ls -tr $filepattern`
do 
    # get the date of the file which would be used as commit date
    date="$(date -r $file)"

    # my zip file includes subfolder, so extract here
    7z x $file

    # commit changes
    cd $folder
    git add -A && git commit -m "from $file" --date="$date"

    # clean changes preparing next commit
    git co $firstcommit
    git clean -fdx

    # change head without checkout files
    git symbolic-ref HEAD refs/heads/master
    cd ..
done

cd $folder && git reset && cd ..
```

