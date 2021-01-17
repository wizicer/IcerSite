---
title: "Double click .jar file to execute in windows"
ref: "Double click .jar file to execute in windows"
date: 2016-4-22
lang: en
category: Windows
---

Execute following script with admin privilege.

```batch
assoc .jar=jarfile
ftype jarfile="C:\DevTools\jrex86\bin\javaw.exe" -jar "%%1" %%*
```

[Link](http://stackoverflow.com/a/30571306/2558077)
