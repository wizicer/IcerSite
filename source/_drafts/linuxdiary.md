# Linux Diary
## 2016-5-18

### disk space shortage and need to find the largest one

1. `df` to roughly find largest mount
2. `du -m --max-depth 1 | sort -rn | head -11` to find TOP 10 by size directories

Hint: use `-h` for human readable size format

## 2016-4-29

### cAdvisor or influxdb?

cAdvisor has very basic function, while influxdb is only a database.
They can be used in combination, other keyword is `docker-monitor`

### for each directory in bash

`for D in *; do [ -d "${D}"] && my_command; done`

