---
title: "convert VimWiki to markdown using Vim"
ref: "convert VimWiki to markdown using Vim"
date: 2016-4-25
lang: en
category: Vim
---

```
{% raw %}
* Convert bold: %s/\*\(.*\)\*/**\1**/g
* Convert named link: %s/\[\[\(.\{-}\)|\(.\{-}\)\]\]/[\2](\1)/g
* Convert link: %s/\[\[\(.\{-}\)\]\]/<\1>/g
* Title: 
  * First: %s/= \(.*\) =/# \1/g
  * May multiple: %s/=\(.*\)=/#\1/g
* Picture: %s/{{\(.\{-}\)}}/![](\1)/g
* Fenced code start: %s/{{{class="brush:\(.*\)"/```\1/g
* Fenced code end: %s/}}}/```/g
* Manual change # ordered list
{% endraw %}
```
