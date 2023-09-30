---
title: A complete collection of commonly used commands in Docker
tags:
- 编程
categories:
- 命令备忘录
date: 2019-02-05
lang: en
translateDate: 9/30/2023
---

> **This list is constantly being updated**, last updated on 2019-2-7

## Execute the command

Sometimes you need to execute commands in a container, or simply start a bash – a one-size-fits-all tool to get things done.

The commands are described below by Docker and Docker Compose, respectively.

### Docker

First of all, you need to know the name of the container, if you don't know, you can run the 'docker ps' command to list all the running containers and get the container name from it.

Here we use the 'docker exec' command to execute the command and cooperate
'-i' <ruby>interaction <rt>interactive</rt></ruby>
and
'-t' terminal <ruby><rt>terminal</rt></ruby>
option parameter to open the terminal and maintain interaction.

```bash
$ docker exec -i -t container_name /bin/bash
```

The '-i' and '-t' option arguments can be combined into '-it', and multiple commands can be executed directly.

```bash
$ docker exec -it container_name sh -c "echo a && echo b"
```

### Docker Compose

If you use Docker Compose, whether it is the 'run' command or the 'exec' command, it will automatically assign a terminal.
Therefore, it is only necessary to simply execute the following command.

```bash
$ docker-compose exec container_name /bin/bash
```

The same method can be used to execute commands directly.

```bash
$ docker-compose exec container_name command
```

But if you need to execute a series of commands, you need to use the 'sh' command to connect them.

```bash
$ docker-compose exec container_name sh -c 'echo a && echo b' 
```

## Go to the command line of Docker for Windows

When using the Windows version of Docker, you actually run a customized Linux on Hyper-V, which uses the LinuxKit distribution.
However, since this Linux is not a complete distribution, the functionality is limited, and in fact, there is rarely a need to enter directly.
But if you really need this, just use the following command.

```bash
docker run -it --rm --privileged --pid=host justincormack/nsenter1
```

#### Reference

* <https://www.bretfisher.com/getting-a-shell-in-the-docker-for-windows-vm/>
* [nsenter](https://github.com/justincormack/nsenter1)

## Transfer images from one host to another

### Docker Hub

This is a public Docker image distribution center, but it also provides paid enterprise version image functionality, which can be disclosed.

After executing the 'docker login', you can use the following command to push the image to Docker Hub

```bash
$ docker publish
```

### Self-built image distribution center

We start with the following command
<ruby>Private <rt>Registry</rt>, a self-built image distribution center</ruby>

```bash
$ docker run -d -p 5000:5000 --name registry registry:2
```

Use the following command to tag and link the image to the self-created image distribution center:

```bash
$ docker image tag myimage (ip-address):5000/myfirstimage
```

On the first host, use the following command to push the image:

```bash
$ docker push (ip-address):5000/myfirstimage
```

On another host, use the following command to pull the image off.

```bash
$ docker pull (ip-address):5000/myfirstimage
```

There may be a hint of certificate problems during use, so please refer to the following reference URL.

#### Reference

* <https://docs.docker.com/registry/>

### Transfer via file

First, use the following command on the source host to store the image as a tar file:

```bash
$ docker save -o <save image to path> <image name>
```

Next, copy the tar file to the target host, which may use the 'cp' or 'scp' command.
After the copy is complete, run the following command on the target host to restore the image on the host:

```bash
$ docker load -i <path to image tar file>
```

If two hosts can connect using 'ssh', perhaps the following quick method will be more convenient,
Complete the whole process of packing, compressing, transferring and releasing the loading in sequence.

```bash
$ docker save <image> | bzip2 | \
      ssh user@host 'bunzip2 | docker load'
```

If you are using a system that contains the 'pv' command, you can also put it in it to monitor the entire process.

```bash
$ docker save <image> | bzip2 | pv | \
      ssh user@host 'bunzip2 | docker load'
```

#### Reference

* <https://stackoverflow.com/questions/23935141/how-to-copy-docker-images-from-one-host-to-another-without-via-repository>
## Clear up space

After Docker is used for a long time, it is easy to have the problem of taking up too much space, so clean up in the following different ways

### Delete images that are no longer in use

In general, if you pull a lot of images, especially if you have compiled images locally multiple times,
You can use the following command to delete these unused images.

```bash
$ docker rmi $(docker images -q --filter "dangling=true")
```

### Delete the stopped container

Containers that have been stopped without intending to retain their state can also be deleted.

```bash
$ docker rm `docker ps --no-trunc -aq`
```

#### Reference

* <https://gist.github.com/ngpestelos/4fc2e31e19f86b9cf10b> 
* <http://stackoverflow.com/questions/17236796/how-to-remove-old-docker-containers> 
## Proxy on ubuntu

For 'Ubuntu 16.04 LTS' systems, the built-in 'systemd' can be used, as follows:

1. Create a directory:

```bash
$ mkdir /etc/systemd/system/docker.service.d
```

2. Create the '/etc/systemd/system/docker.service.d/http-proxy.conf' file with the following contents:

```bash
[Service]
Environment="HTTP_PROXY=https://web-proxy.corp.xxxxxx.com:8080/"
Environment="HTTPS_PROXY=https://web-proxy.corp.xxxxxx.com:8080/"
Environment="NO_PROXY=localhost,127.0.0.1,localaddress,.localdomain.com"
```

3. Application changes:

```bash
$ systemctl daemon-reload
```

4. Restart docker:

```bash
$ systemctl restart docker
```

#### Reference

* <https://stackoverflow.com/questions/26550360/docker-ubuntu-behind-proxy> 

