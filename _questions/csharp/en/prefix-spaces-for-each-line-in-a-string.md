---
title: "Prefix spaces for each line in a string"
date: 2016-6-12
lang: en
category: C#
---

My code generator requires to generate code with right indentation, so I need to prefix spaces for
each line of a string. After google the world, there isn't a out-of-box solution for me to use,
finally I came up with my own solution:

```cs
internal static string Indent(this string content, int level = 1) =>
    string.Join(Environment.NewLine, content
        .Split(new[] { "\r\n" }, StringSplitOptions.None)
        .Select(_ => $"{(_ == string.Empty ? string.Empty : new string(' ', level * 4))}{_}")
        .ToArray());
```

Usage like this:

```cs
var result = str.Indent();
```
