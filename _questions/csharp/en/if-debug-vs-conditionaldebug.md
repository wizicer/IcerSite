---
title: "#if DEBUG vs. Conditional(\"DEBUG\")"
date: 2015-5-23
lang: en
category: C#
---

Extract key information from [this great explanation](http://stackoverflow.com/a/3788719/2558077)

* `#if DEBUG`: The code in here won't even reach the IL on release.
* `[Conditional("DEBUG")]`: This code will reach the IL, however calls to the method will be omitted
  unless DEBUG is set when the caller is **compiled**.

**Common Best Practice**

* Use `#if DEBUG` for different variable assignment.
* Use `[Conditional("DEBUG")]` for method invocation.
