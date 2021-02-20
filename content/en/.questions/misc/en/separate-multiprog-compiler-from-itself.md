---
title: "separate MultiProg compiler from itself"
ref: "separate MultiProg compiler from itself"
date: 2016-4-22
lang: en
category: Misc
---

0. `eCLR.dll` is compiled as managed CPP with lots of unsafe compiler option.
0. the program is generated under project folder with `.exe` extension.
0. `eCLR.dll` start process `/eCLR/CIL-Compiler` to compile from project to binary using method
   named LinkImage.  (with uncertainty)
0. Execute `/eCLR/CIL-Compiler/____.exe ___/res/___.exe` would generate `___.img`.
