---
title: "How to add strong name to dll(sign a dll)?"
date: 2016-4-25
lang: en
category: C#
---

```sh
ildasm.exe xxx.dll /out:xxx.il
ilasm.exe xxx.il /dll /key=xxx.snk /output=xxx-signed.dll
```
