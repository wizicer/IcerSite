---
title: "Ternary(?:) condition returning method(delegate) not compile."
ref: "Ternary(?:) condition returning method(delegate) not compile."
date: 2016-6-10
lang: en
category: C#
---

I\'m facing the same situation like [this link](http://stackoverflow.com/q/6015747/2558077).

<!--more-->

Here is the reproductive code with solution:

```cs
private static void Test()
{
    var c = true;

    // The following line provokes a compiler error:
    // "Type of conditional expression cannot be determined because there is 
    // no implicit conversion between 'method group' and 'method group".
    //var d = c ? a : b;

    // Instead, following code work as expected.
    var d = c ? (Func<bool>)a : b;
}

private static bool a()
{
    return true;
}

private static bool b()
{
    return false;
}
```

However, before I got this simple solution, I worked on another solution and find out it gain better
visibility and maintainability.

Take a look:

```cs
var genDict = new Dictionary<ClassTypeEnum, Func<string, string, string>>
{
    [ClassTypeEnum.FirstLevel] = GenFirstLevelClass,
    [ClassTypeEnum.Array] = GenArrayClass,
    [ClassTypeEnum.Standard] = GenStandardClass,
};
var genType = isFirstLevelClass ? ClassTypeEnum.FirstLevel : (isArrayClass ? ClassTypeEnum.Array : ClassTypeEnum.Standard);
output += genDict[genType](classname, content).Indent();
```

The signature of `GenFirstLevelClass`, `GenArrayClass` and `GenStandardClass` are like following:

```cs
private static string GenStandardClass(string classname, string content)
```

Here is the version which workaround this issue.

```cs
var gen = isFirstLevelClass ? GenFirstLevelClass : (isArrayClass ? GenArrayClass : (Func<string, string, string>)GenStandardClass);
output += gen(classname, content).Indent();
```

How do you think?
