---
title: "Error Message: Cannot modify the return value of 'expression' because it is not a variable"
ref: "Error Message: Cannot modify the return value of 'expression' because it is not a variable"
date: 2016-5-24
lang: en
category: C#
---

Example code which raises the error:
```cs
public Point Origin { get; set; }

Origin.X = 10; // fails with CS1612
```

<!--more-->

As a matter of fact, the misuse itself is obviously to who familiar with the character of `struct`
-- `immutable`. However, the message itself is really confusing.

PS: workaround code

```cs
Origin = new Point(10, Origin.Y);
```
