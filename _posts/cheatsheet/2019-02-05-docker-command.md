---
title: Docker常用命令大全
tags:
- 编程
categories:
- 命令备忘录
date: 2019-2-5
---

> **此列表不断更新中**，最后更新于2019-2-7

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

## 将镜像从一台主机传输到另一台主机

### Docker Hub

这是一个公共的Docker镜像集散地，不过他也提供收费的企业版镜像功能，可以不用公开。

在执行过`docker login`之后，可以使用以下命令推送镜像至Docker Hub

```bash
$ docker publish
```

### 自建镜像集散地

我们首先使用以下命令启动
<ruby>自建镜像集散地<rt>Private Registry</rt></ruby>

```bash
$ docker run -d -p 5000:5000 --name registry registry:2
```

使用以下命令将该镜像标记，链接至自建镜像集散地

```bash
$ docker image tag myimage (ip-address):5000/myfirstimage
```

在第一台主机上，使用以下命令将该镜像推送上去

```bash
$ docker push (ip-address):5000/myfirstimage
```

在另外一台主机上，使用以下命令将该镜像拉取下来。

```bash
$ docker pull (ip-address):5000/myfirstimage
```

使用过程中可能会有证书问题的提示，请根据以下参考网址进行处理。

#### 参考

* <https://docs.docker.com/registry/>


### 通过文件传送

首先在源主机使用以下命令将镜像存储为tar文件

```bash
$ docker save -o <save image to path> <image name>
```

接下来把这个tar文件拷贝到目标主机上，这个过程你可能会用到`cp`或`scp`命令。
拷贝完成后，在这目标主机上执行以下命令，即可将镜像在该主机上恢复出来。

```bash
$ docker load -i <path to image tar file>
```

如果两台主机可以使用`ssh`进行连接，或许以下快速方法会更加方便，
顺序的完成打包、压缩、传送并释放装载的全过程。

```bash
$ docker save <image> | bzip2 | \
      ssh user@host 'bunzip2 | docker load'
```

如果你所使用系统中含有`pv`命令，也可以将其放在其中，可以监控整个流程。

```bash
$ docker save <image> | bzip2 | pv | \
      ssh user@host 'bunzip2 | docker load'
```

#### 参考

* <https://stackoverflow.com/questions/23935141/how-to-copy-docker-images-from-one-host-to-another-without-via-repository>


## 清理空间

Docker用久了后，很容易出现空间占用过多的问题，通过以下不同的方式进行清理

### 删除不再使用的镜像

通常情况，如果拉取了很多镜像，尤其是在本地多次编译过镜像时尤为突出，
可以使用以下命令删除这些没有被使用的镜像。

```bash
$ docker rmi $(docker images -q --filter "dangling=true")
```

### 删除已经停止的容器

已经停止的容器，而没有打算保留其状态，也是可以被删除的。

```bash
$ docker rm `docker ps --no-trunc -aq`
```

#### 参考

* <https://gist.github.com/ngpestelos/4fc2e31e19f86b9cf10b> 
* <http://stackoverflow.com/questions/17236796/how-to-remove-old-docker-containers> 

## Proxy on ubuntu

对于`Ubuntu 16.04 LTS`系统，可以使用内置的`systemd`，步骤如下：

1. 建立目录:

```bash
$ mkdir /etc/systemd/system/docker.service.d
```

2. 创建 `/etc/systemd/system/docker.service.d/http-proxy.conf` 文件，内容如下:

```bash
[Service]
Environment="HTTP_PROXY=https://web-proxy.corp.xxxxxx.com:8080/"
Environment="HTTPS_PROXY=https://web-proxy.corp.xxxxxx.com:8080/"
Environment="NO_PROXY=localhost,127.0.0.1,localaddress,.localdomain.com"
```

3. 应用变化:

```bash
$ systemctl daemon-reload
```

4. 重启docker:

```bash
$ systemctl restart docker
```

#### 参考

* <https://stackoverflow.com/questions/26550360/docker-ubuntu-behind-proxy> 

