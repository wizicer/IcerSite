---
title: Docker常用命令大全
tags:
- 编程
categories:
- 命令备忘录
date: 2019-2-5
---

> **此列表不断更新中**，最后更新于2019-2-5

## 执行命令

有时候你需要在一个容器中执行命令，或者干脆启动一个bash——用这个万能的工具完成任务。

以下分别以Docker和Docker Compose来描述命令。

### Docker

首先你需要知道容器的名字，不知道的话，可以运行`docker ps`命令列出所有运行的容器，从中获取容器名称。

这里我们使用`docker exec`命令来执行命令，并配合
`-i`<ruby>交互<rt>interactive</rt></ruby>
和
`-t`<ruby>终端<rt>terminal</rt></ruby>
选项参数来开启终端并保持交互。

```bash
$ docker exec -i -t container_name /bin/bash
```

`-i`和`-t`选项参数可以合并为`-it`，同时也可以直接执行多条命令。

```bash
$ docker exec -it container_name sh -c "echo a && echo b"
```

### Docker Compose

如果使用Docker Compose的话，其内含的不管是`run`命令还是`exec`命令，都会自动的分配一个终端，
因此只需要简单的执行以下命令。

```bash
$ docker-compose exec container_name /bin/bash
```

同样的方法可以用来直接执行命令。

```bash
$ docker-compose exec container_name command
```

但是如果需要执行一系列的命令，则需要使用`sh`命令将他们连接起来。

```bash
$ docker-compose exec container_name sh -c 'echo a && echo b' 
```

## 进入Windows版Docker的命令行

在使用Windows版Docker时，其实在Hyper-V上运行了一个订制后的Linux，其使用的是LinuxKit发布版本，
但鉴于这个Linux并非时完整的发行版，因此功能是受限的，其实很少是有需要直接进入的。
不过真要是有这个需求，就用以下命令即可。

```bash
docker run -it --rm --privileged --pid=host justincormack/nsenter1
```

#### 参考

* <https://www.bretfisher.com/getting-a-shell-in-the-docker-for-windows-vm/>
* [nsenter](https://github.com/justincormack/nsenter1)
