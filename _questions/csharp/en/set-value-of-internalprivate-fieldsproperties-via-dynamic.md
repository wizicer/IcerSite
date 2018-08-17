---
title: "Set value of internal/private fields/properties via dynamic"
ref: "Set value of internal/private fields/properties via dynamic"
date: 2016-4-25
lang: en
category: C#
---

It's impossible to set value through dynamic, instead, use reflection with `BindingFlags.Instance |
BindingFlags.NonPublic`
