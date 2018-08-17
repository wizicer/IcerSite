---
title: "Voom plugin with error: python's site module could not be loaded"
date: 2016-4-20
lang: en
category: Vim
---



Due to bug of Python 2.7.11, workaround:

1. Install other version.
2. after install execute following command (of course, need admin privilege). refer to [Link](https://github.com/vim/vim/blob/master/appveyor.yml)
   ```bat
   reg copy HKLM\SOFTWARE\Python\PythonCore\2.7 HKLM\SOFTWARE\Python\PythonCore\2.7-32 /s /reg:32
   reg copy HKLM\SOFTWARE\Python\PythonCore\2.7 HKLM\SOFTWARE\Python\PythonCore\2.7-32 /s /reg:64
   ```

