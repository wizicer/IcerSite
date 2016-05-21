# Linux Diary

## 2016-5-18

### disk space shortage and need to find the largest one

1. `df` to roughly find largest mount
2. `du -m --max-depth 1 | sort -rn | head -11` to find TOP 10 by size directories

Hint: use `-h` for human readable size format

## 2016-5-18

### get file date

`date -r <filename>`

## 2016-5-9

### Ubuntu X64 Node down?

**Situation:** 

Up for more than 150 days in Hyper-V Virtual machine, Memory up to 2300M, however, no process
possessed such memory.  User here face similar situation:
<http://unix.stackexchange.com/questions/259659>

**Solution:** 

Finally restart the virtual machine, and restraint memory size

### How to diagnose memory in linux

* `ps aux --sort rss` [Link](http://alvinalexander.com/linux/unix-linux-process-memory-sort-ps-command-cpu)
* `free -m`

### bash tab auto completion with case insensitive

```sh
# If ~./inputrc doesn't exist yet, first include the original /etc/inputrc so we don't override it
if [ ! -a ~/.inputrc ]; then echo "\$include /etc/inputrc" > ~/.inputrc; fi
# Add option to ~/.inputrc to enable case-insensitive tab completion
echo "set completion-ignore-case On" >> ~/.inputrc
```

[Link](http://askubuntu.com/questions/87061/can-i-make-tab-auto-completion-case-insensitive-in-the-terminal)

## 2016-4-29

### cAdvisor or influxdb?

cAdvisor has very basic function, while influxdb is only a database.
They can be used in combination, other keyword is `docker-monitor`

### for each directory in bash

`for D in *; do [ -d "${D}"] && my_command; done`

## 2016-4-25

### cross platform link file command.

Very complex: <http://stackoverflow.com/questions/18641864/git-bash-shell-fails-to-create-symbolic-links>

## 2016-4-20

### Bash execute next command even error?

use `||`

### move all files to subfolder without error in linux

No simple solution, one way is to use `||` ignore all error

