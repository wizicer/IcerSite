---
title: "restart network adapter?"
ref: "restart network adapter?"
date: 2016-5-4
lang: en
category: Windows
---

```batch
wmic path win32_networkadapter where NetConnectionID="Wireless Network Connection" call disable
wmic path win32_networkadapter where NetConnectionID="Wireless Network Connection" call enable
```
