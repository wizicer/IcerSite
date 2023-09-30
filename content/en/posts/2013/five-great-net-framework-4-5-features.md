---
title: Five powerful new features in .NET 4.5
tags:
- C#
- HTML
categories:
- 冰河杂谈
date: 2013-07-03
lang: en
translateDate: 9/30/2023
---

Translator: [Ice Magician] (http://icerdesign.com)
[Five Great .NET Framework 4.5 Features] (http://www.codeproject.com/Articles/599756/Five-Great-NET-Framework-4-5-Features)

# Introduction
Microsoft's. The Net 4.5 framework has been released for almost a year, and other Microsoft products have similar lack of communication, only one or two features of this product are known to developers, and the rest can only be simple documentation on MSDN until the end.

For example, when you ask a . What kind of update do Net programmers have in .Net 4.5, most likely they will answer you about async and await (at least that's what my friends around me answered)

Of course, it is very difficult to know all the feature points, after all, some features do not seem useful when they are not involved in your scope of work at all.

So in this article, I've selected five of my favorite features to present. To reiterate, my favorite feature is not necessarily your favorite, but I have tried to consider choosing most of them when choosing. It is used by net programmers, and I hope my article will meet this expectation.

! [](http://www.codeproject.com/KB/dotnet/599756/a1.jpg)

> Note: The new features discussed in this article are limited to core libraries (.Net 4.5 Core) and will not cover ASP.NET, WCF, WPF, WF, etc.

# Feature 1: async and await
! [](http://www.codeproject.com/KB/dotnet/599756/a2.jpg)

This feature has been heavily publicized and almost every one. Net instructors talk about it, but it's still my favorite new feature, and don't worry, you'll know right away why I love it so much.

> 'async' and 'await'_ are pairs of markers that can be used to mark where a task (thread) will return when it completes. _

The above sentence is a bit awkward, so let's try to understand this sentence with actual code.

First, let's take a look at the following code execution steps:

0. After the 'main' function starts, the 'Method()' method is called
0. The 'Method()' method starts a 'LongTask' function with 'Task' (the content is to wait 10 seconds)
0. Immediately after starting 'LongTask' will go back and execute the rest of the code in the 'Method()' method. In other words, after starting multithreading ('Task.Run'), 'LongTask' is running, and the remaining code in the 'Method()' method is executed

Next, we want the behavior of the third step to change, and we want to finish executing 'LongTask()' before returning to the 'Method()' method to continue executing the rest of the code. Here we use the 'async' and 'await' keywords to achieve the above behavior.

! [](http://www.codeproject.com/KB/dotnet/599756/a3.jpg)

Here are three points to note:
0. 'async' and 'await' come in pairs, stand-alone cannot be used
0. 'async' is the token of the method, this flag simply indicates that the method will contain the 'await' keyword
0. The 'await' keyword marks where you need to return to after the task finishes, so you will often associate this keyword with the 'Task' class.

The following figure is a modified version of the code we discussed earlier using 'async' and 'await', except for the third step, which is executed after the second step is executed, and the rest of the code is the same as before. Simply put, the task 'LongTask' will only return to 'Method()' after the execution of the task 'LongTask' is completed.

! [](http://www.codeproject.com/KB/dotnet/599756/a4.jpg)

Now that you know 'async' and 'await', let me ask you a question for homework: the same can be achieved using the 'Task.Wait' or 'Task.ContineWith' methods, but what is the difference?

# Feature 2: Zip compression
! [](http://www.codeproject.com/KB/dotnet/599756/a5.jpg)

Zip format is one of the most accepted compressed archive formats right now. Almost all operating systems support manipulating this format.

In the previous. None of the Net versions have built-in support for Zip compression, so developers usually use third-party components like 'DotnetZip' to achieve this effect. However, in . In Net4.5, the Zip compression format has been built into the framework in the 'System.IO.Compression' namespace.

To use it, let's first reference two namespaces:
- `System.IO.Compression.FileSystem`
- `System.IO.Comptession`

Let's bring it into the code next:
```csharp
using System.IO.Compression;
```

If you want to package all the files in a folder, use the 'CreateFromDirectory' method:
```csharp
ZipFile.CreateFromDirectory(@"D:\data",@"D:\data.zip");
```

If you want to unzip, you can use the 'ExtractToDirectory' method:
```csharp
ZipFile.ExtractToDirectory(@"D:\data.zip", @"D:\data\unzip");
```

# Feature 3: Regular expression execution timeout
! [](http://www.codeproject.com/KB/dotnet/599756/a6.jpg)

'Regular expressions' are the best way to do string class verification, if you are new to 'regular expressions', I recommend watching a [video] (http://youtu.be/f-JcHBF0b_0), but the standard regular expression logic leaves the possibility of DoS (denial of service) attacks for hackers, and my detailed explanation will make you understand why.

If we have a regular expression '^(\d+)$', the regular expression wants the string to contain only numbers. You can observe the Regex Symbolic Diagram to understand how regular expressions are evaluated. If we want to validate the string '123456X', there will be 6 paths to verify, as shown below:

! [](http://www.codeproject.com/KB/dotnet/599756/a7.jpg)

But if we add one more number to it, it will become 7 paths. In other words, as the length of the string increases, the regular expression will take more time to compute, and in other words, the calculation time and string length are line-scale.

! [](http://www.codeproject.com/KB/dotnet/599756/a8.jpg)

We change the previously defined regular expression to a more complex '^(\d+)+$', and you will see that the evaluation process of the regular expression becomes more complicated, if we try to validate the string '123456X', 32 paths will be evaluated, and if you lengthen the string by one character, 64 paths will be evaluated

! [](http://www.codeproject.com/KB/dotnet/599756/a9.jpg)

In other words, the calculation time will multiply as the string increases.

! [](http://www.codeproject.com/KB/dotnet/599756/a10.jpg)

Now you might ask, what does this matter? This long computation time is likely to be discovered by hackers to do DoS attacks, they only need to request an extra-long string from your server to verify, and your server will always be there.

Of course, the best solution to this problem is to set a timeout period when validating with regular expressions. This feature is available in .NET 4.5, as in the following code. From then on, even if the user sends a malicious string, our program will not get stuck there.
```csharp
try
{
  var regEx = new Regex(@"^(\d+)+$", RegexOptions.Singleline, TimeSpan.FromSeconds(2));
  var match = regEx.Match("123453109839109283090492309480329489812093809x");
}
catch (RegexMatchTimeoutException ex)
{
  Console.WriteLine("Regex Timeout");
}
```

# Feature 4: Profile optimization (improve startup performance)
! [](http://www.codeproject.com/KB/dotnet/599756/a11.jpg)

We all know it. Net's program binaries are in IL format, and at runtime, the JIT (Just-in-Time) compiler translates IL code into machine code on the fly. That's why we often complain. Net programs start slowly, and we always need to wait for JIT to convert IL code into machine code.

To improve startup efficiency, in .Net 4.5 we have a mechanism called Profile Optimization. The configuration is really just a simple file containing a list of methods needed when the program starts, so when the program starts, the background JIT (Backgroud JIT) runs and transpiles these methods to the machine code.

The process of compiling the startup method in the background JIT will be carried out using multiple cores to obtain higher startup efficiency. It must be noted that **You must use a multi-core CPU for configuration optimization**. If you don't have a multi-core CPU, these settings will be ignored.

! [](http://www.codeproject.com/KB/dotnet/599756/a12.jpg)

In order to create a configuration file, you first need to introduce the 'System.Runtime' namespace, and then you can call the 'SetProfileRoot' and 'StartProfile' methods in the class 'ProfileOptimization'. Therefore, when the program starts, the background JIT will read the configuration file and compile your startup method in the background to reduce the startup time.

```csharp
using System.Runtime;

 Call the Setprofilerroot and Startprofile method
ProfileOptimization.SetProfileRoot(@"D:\ProfileFile");

ProfileOptimization.StartProfile("ProfileFile");
```

One thing to note: 'ProfileOptimization' is enabled by default for ASP.NET 4.5 and Silverlight 5, so you don't have to write these codes manually to enable them.

# Feature 5: Garbage Collection (GC) (background GC garbage cleanup)
! [](http://www.codeproject.com/KB/dotnet/599756/a13.jpg)

About. For Web programs, garbage collection (GC) is indeed a very heavy and heavy task. Especially in ASP.NET programs, a large number of requests cause the server to create a large number of objects, so that the GC must work hard to clean up these unwanted objects.

! [](http://www.codeproject.com/KB/dotnet/599756/a14.jpg)

In .Net 4.0, when the GC performs cleanup, all program threads are paused. In the figure above, we have three threads running and two GCs running on different threads (and running on separate logical processors), and now the program threads are running and performing their own tasks (each of which creates some objects).

At some point in time, background GCs perform cleanup, and when they perform cleanup, all other program threads are paused. This causes the program to briefly become unresponsive at that time.

! [](http://www.codeproject.com/KB/dotnet/599756/a15.jpg)

In order to overcome the above problem, the server GC (Server GC) was born, in the server GC, there will be an additional thread running in the background, used to clean up Gen 2 ([watch this video to understand GC Gen 0,1,2] (http://youtu.be/gC8NdlOeNEs)) objects in the background to reduce the load of the main GC thread, because two GC threads are running, which makes the main application thread shorter pause, As a result, the throughput of the application is increased. To enable server GC, simply add the 'gcServer' XML tag and set it to 'true':

```xml
<configuration>
   <runtime>
      <gcServer enabled="true"/>
   </runtime>
</configuration> 
```

# Three more new features worth exploring
## Set the default culture at the application domain level
In the previous . If we need to set Culture in the Net version, we need to set Culture in every thread. The following code demonstrates the pain of setting up Culture at the thread level. And if our program is a heavy multithreaded program, it will be even more painful.
```csharp
CultureInfo cul = new CultureInfo(strCulture);
Thread.CurrentThread.CurrentCulture = cul;
Thread.CurrentThread.CurrentUICulture = cul;
```

In 4.5, we can set Culture at the App Domain level, and then all threads for that application domain inherit the Culture, and the following shows how to use 'DefaultThreadCurrentCulture'
```csharp
CultureInfo culture = CultureInfo.CreateSpecificCulture("fr-FR");
CultureInfo.DefaultThreadCurrentCulture = culture;
```

## Arrays support more than 2G size
Actually, I'm not sure what kind of scene needs a 2G size set. So personally, I don't know when this feature will be used, and usually if we need a large set, we will spread it out into small parts. But I believe there must be enough important reasons to let. Net4.5 supports this feature.

## The console supports Unicode
I think very few people use consoles, but I've seen some people use consoles for academic research purposes. Anyway, we can now have a console that supports Unicode.

# References
* <http://msdn.microsoft.com/en-us/library/ms171868.aspx>
[Five Great .NET Framework 4.5 Features] (http://www.codeproject.com/Articles/599756/Five-Great-NET-Framework-4-5-Features)

> **Translator's Note**: The author of this article recommends two videos for beginners to understand some basic concepts, if you encounter problems with disconnection, please consult your programmer friends around you.
