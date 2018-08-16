---
title: "Unit test hangs when testing WPF program with `Dispatcher`"
date: 2016-5-27
lang: en
category: C#
---

The unit test hangs at following statement which is working well in real life WPF program.

<!--more-->

```cs
Application.Current.Dispatcher.Invoke(DispatcherPriority.Background, new Action(() => { }));
```

Following phenomenons may draw your attention that caused this issue:

* Unit test sometime passed, sometime hangs(seems always running in Test Explorer).
* Unit test in Resharper reported `aborted` with a hand icon.
* Only after I start unit test with `nunit-console.exe`, and attached to it to debug with Visual
  Studio, I found which statement hangs.

To workaround this issue, following implementation may help.
Credit to [this Link](http://stackoverflow.com/a/24363344/2558077)

```cs
public static class DispatcherUtil
{
    [SecurityPermission(SecurityAction.Demand, Flags = SecurityPermissionFlag.UnmanagedCode)]
    public static void DoEvents()
    {
        var frame = new DispatcherFrame();
        Dispatcher.CurrentDispatcher.BeginInvoke(DispatcherPriority.Background,
            new DispatcherOperationCallback(ExitFrame), frame);
        Dispatcher.PushFrame(frame);
    }

    public static void DoEventsSync()
    {
        var frame = new DispatcherFrame();
        Dispatcher.CurrentDispatcher.Invoke(DispatcherPriority.Background,
            new DispatcherOperationCallback(ExitFrame), frame);
        Dispatcher.PushFrame(frame);
    }

    private static object ExitFrame(object frame)
    {
        ((DispatcherFrame)frame).Continue = false;
        return null;
    }
}
```
