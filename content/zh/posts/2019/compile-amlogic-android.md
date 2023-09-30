---
title: Compile Android with AMLogic
tags:
- Android
lang: zh
ref: compile-android-with-amlogic
categories:
- 日志
date: 2019-12-10
---

从<http://www.bee-link.com/forum.php?mod=viewthread&tid=48307&extra=page%3D1>下载源代码

参考以下指南：
* <https://nathanpfry.com/how-to-setup-ubuntu-18-04-lts-bionic-beaver-to-compile-android-roms/>
* <http://openlinux.amlogic.com/Docs/Common/How_to_build_compiled_server>
* <https://source.android.com/setup/build/initializing>


## 操作系统

安装全新的 `Ubuntu 18.04 x64`。

## 准备环境

你可以忽略这一步，因为它只是为了避免 git 警告充斥日志。

```sh
$ git config --global user.name xxx
$ git config --global user.email xxx@xxx.com
```

## 安装 go

```sh
$ sudo apt-get install binutils bison gcc make
$ bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
$ gvm install go1.13 -B
$ gvm use go1.13
```

## 安装依赖

依赖下载地址：

* <https://releases.linaro.org/archive/13.11/components/toolchain/binaries/>
* <https://releases.linaro.org/components/toolchain/binaries/6.3-2017.02/arm-linux-gnueabihf/>

```sh
$ sudo apt-get remove openjdk-* icedtea-*
$ sudo apt-get install git ccache lzop bison gperf build-essential zip curl zlib1g-dev g++-multilib python-networkx libxml2-utils bzip2 libbz2-dev libghc-bzlib-dev squashfs-tools pngcrush liblz4-tool optipng libc6-dev-i386 gcc-multilib libssl-dev gnupg flex lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z1-dev libgl1-mesa-dev xsltproc unzip python-pip python-dev libffi-dev libxml2-dev libxslt1-dev libjpeg8-dev openjdk-8-jdk
$ sudo apt install gcc-arm-none-eabi
$ sudo apt install u-boot-tools
$ tar -xf gcc-linaro-aarch64-none-elf-4.8-2013.11_linux.tar.xz
$ sudo mv gcc-linaro-aarch64-none-elf-4.8-2013.11_linux /opt
$ tar -xf gcc-linaro-6.3.1-2017.02-x86_64_arm-linux-gnueabihf.tar.xz
$ sudo mv gcc-linaro-6.3.1-2017.02-x86_64_arm-linux-gnueabihf /opt
```

## 开始编译

提取并构建镜像。

```sh
$ tar -zxf GT-King_SDK.tar.gz
$ cd s922x
$ ./s922x
```

输出文件位置：`out/target/product/galilei/`
