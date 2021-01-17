---
title: "`Task.Run` with STA apartment state"
ref: "`Task.Run` with STA apartment state"
date: 2016-5-16
lang: en
category: C#
---

Use following code instead of `Task.Run`, [Source](https://github.com/xunit/xunit/issues/103#issuecomment-62822506)

<!--more-->

```cs
public static Task<T> StartSTATask<T>(Func<T> func)
{
    var tcs = new TaskCompletionSource<T>();
    var thread = new Thread(() =>
    {
        try
        {
            var result = func();
            tcs.SetResult(result);
        }
        catch (Exception e)
        {
            tcs.SetException(e);
        }
    });
    thread.SetApartmentState(ApartmentState.STA);
    thread.Start();
    return tcs.Task;
}
```
