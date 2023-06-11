---
title: .Net 4.5 的五项强大新特性
tags:
- C#
- HTML
categories:
- 冰河杂谈
date: 2013-07-03
---

译者：[冰河魔法师](http://icerdesign.com)
原文：[Five Great .NET Framework 4.5 Features](http://www.codeproject.com/Articles/599756/Five-Great-NET-Framework-4-5-Features)

# 介绍
微软的.Net 4.5框架已经发布了差不多一年了，和其他微软发布的产品有类似的缺乏沟通的问题，这个产品中只有一到两个特性是开发者们所知道的，剩下的那些直到最后都只能是在MSDN上面的一些简单文档而已。

比如说，当你问一个.Net程序员在.Net4.5中究竟有什么样的更新，他们多半会回答你说async和await（至少我周围的朋友是这样回答的）

当然，要想知道所有的特性点是非常困难的，毕竟有些特性在你的工作范围内一点都不涉及的情况下看起来好像也没什么用。

所以在这篇文章里，我选择了五个我最喜欢的特性来介绍。重申一下，我最喜欢的特性不一定是你最喜欢的，但是我在选择的时候已经尽量考虑选择大部分.Net程序员都会用到的，我希望我的文章能够达到这个期望。

![](http://www.codeproject.com/KB/dotnet/599756/a1.jpg)

> 注意：这篇文章讨论的新特性仅限于核心库(.Net 4.5 Core)，不会涉及 ASP.NET, WCF, WPF, WWF等。

# 特性一：async和await
![](http://www.codeproject.com/KB/dotnet/599756/a2.jpg)

这个特性被大量的宣传过，而且几乎每个.Net讲师都会提及它，不过它依旧是我最爱的新特性，不用急，你马上就能知道为什么我这么喜爱它了。

> `async`_和_`await`_是一对标记符，可以用来标记当一个任务（线程）完成后将返回到哪里。_

上面这句话有点拗口，所以我们还是一起来尝试用实际的代码来理解这句话。

首先我们来看看下面这段代码的执行步骤：

0. `main`函数启动后，调用了`Method()`方法
0. `Method()`方法里面用`Task`启动了一个`LongTask`函数（内容为等待10秒）
0. 启动`LongTask`后会立即返回并执行`Method()`方法中的剩余代码。换句话说，启动多线程（`Task.Run`）后，`LongTask`在运行，而`Method()`方法中剩余的代码也能被执行

接下来我们希望第三步执行的行为变化一下，我们希望在执行完`LongTask()`后才回到`Method()`方法继续执行剩余的代码。这里我们使用`async`和`await`关键字来实现上述行为。

![](http://www.codeproject.com/KB/dotnet/599756/a3.jpg)

这里有三点需要注意的地方：
0. `async`和`await`是成对出现的，独立是无法使用的
0. `async`是标记方法的，这个标记只是指示出该方法中将包含`await`关键字
0. `await`关键字标记了任务执行结束后需要返回到的位置，所以你常常会将该关键字与`Task`类联用。

下面这幅图是将我们之前讨论过的代码使用`async`和`await`改造过后的版本，除了第三步是在第二步执行完成后执行的外，其他部分都是和以前一样的。简单来说就是只会在任务`LongTask`执行完成后才会回到`Method()`中继续执行。

![](http://www.codeproject.com/KB/dotnet/599756/a4.jpg)

现在你已经了解了`async`和`await`，我来问一个问题权当家庭作业吧：使用`Task.Wait`或`Task.ContineWith`方法也可以达到同样的效果，不过他们有什么差别呢？

# 特性二：Zip压缩
![](http://www.codeproject.com/KB/dotnet/599756/a5.jpg)

Zip格式是现在接受程度最高之一的压缩档案格式。几乎所有操作系统都支持操作该格式。

在以前的.Net版本中都没有内建对Zip压缩功能的支持，所以通常情况开发人员都会使用第三方的类似于`DotnetZip`之类的组件来达到该效果。不过在.Net4.5中，Zip压缩格式已经被内置到框架中去了，在`System.IO.Compression`命名空间中。

要使用它，我们就先引用一下两个命名空间：
- `System.IO.Compression.FileSystem`
- `System.IO.Comptession`

接下来将其引入代码：
```csharp
using System.IO.Compression;
```

如果你想将一个文件夹中的所有文件都打包进来，就使用`CreateFromDirectory`方法：
```csharp
ZipFile.CreateFromDirectory(@"D:\data",@"D:\data.zip");
```

如果你想解压，可以使用`ExtractToDirectory`方法：
```csharp
ZipFile.ExtractToDirectory(@"D:\data.zip", @"D:\data\unzip");
```

# 特性三：正则表达式执行超时
![](http://www.codeproject.com/KB/dotnet/599756/a6.jpg)

`正则表达式`是做字符串类验证的最好方式，如果你是第一次接触`正则表达式`，推荐你看一段[视频](http://youtu.be/f-JcHBF0b_0)，但是标准的正则表达式逻辑却会给黑客们留下DoS（拒绝服务）攻击的可能性，我接下来详细的说明会让你明白这是为什么。

假如我们有个正则表达式`^(\d+)$`，这个正则表达式希望这个字符串里只包含数字。你可以观察正则表达式符号图（Regex Symbolic Diagram）来了解正则表达式是如何被计算的。如果我们要验证字符串`123456X`，将会有6条路径来验证，如下图：

![](http://www.codeproject.com/KB/dotnet/599756/a7.jpg)

但是如果我们多加一个数字进去，将会变成7条路径。换句话说，随着字符串长度的增长，正则表达式将会花掉更多的时间来计算，再换句话说，计算时间和字符串长度是成线型比例的。

![](http://www.codeproject.com/KB/dotnet/599756/a8.jpg)

我们将之前定义的正则表达式变成更复杂的`^(\d+)+$`，你将看到正则表达式的计算过程变得更加复杂，如果我们试图验证字符串`123456X`，将会计算32条路径，只要你将字符串加长一个字符，将会计算64条路径

![](http://www.codeproject.com/KB/dotnet/599756/a9.jpg)

换句话说，计算时间将会随着字符串的增加而成倍增加。

![](http://www.codeproject.com/KB/dotnet/599756/a10.jpg)

现在你有可能会问，这个有什么关系呢？这种超长的计算时间很有可能会被黑客发现来做DoS攻击，他们只需要向你的服务器请求一个超长的字符串要验证，你的服务器将会一直等在那里。

当然，解决这个问题的最佳方案就是在用正则表达式做验证的时候设置一个超时时间。在.Net4.5中就有这个功能，像如下代码中那样就可以。从此之后，哪怕用户发来了恶意字符串，我们的程序也不会卡死在那里。
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

# 特性四：配置(Profile)优化（提高启动性能）
![](http://www.codeproject.com/KB/dotnet/599756/a11.jpg)

我们都知道.Net的程序二进制文件是IL格式的，在运行时，由JIT(Just-in-Time)编译器即时的将IL代码转译成机器代码。因此我们常常都会抱怨.Net程序的启动速度缓慢，我们总是需要等待JIT将IL代码转换成机器代码。

为了提高启动效率，在.Net4.5中，我们有一个称之为配置优化(Profile Optimization)的机制。配置其实仅仅是一个含有程序启动时所需方法列表的简单文件，所以当程序启动的时候，后台JIT(Backgroud JIT)运行并转译这些方法至机器代码。

后台JIT编译启动方法的过程会使用多核进行，以得到更高的启动效率。必须注意的是 **你必须使用多核CPU来实现配置优化** 。如果你没有多核CPU，那么这些设置将会被忽略。

![](http://www.codeproject.com/KB/dotnet/599756/a12.jpg)

为了创建一个配置文件，你首先需要引入`System.Runtime`命名空间，然后你就可以调用在类`ProfileOptimization`中的`SetProfileRoot`和`StartProfile`方法。于是，当程序启动，后台JIT便会读取配置文件并且在后台编译你的启动方法，以此来减少启动时间。

```csharp
using System.Runtime;

// Call the Setprofilerroot and Startprofile method
ProfileOptimization.SetProfileRoot(@"D:\ProfileFile");

ProfileOptimization.StartProfile("ProfileFile");
```

有一点需要注意：`ProfileOptimization`默认对于ASP.NET 4.5和Silverlight 5是开启的，所以对于它们来说不用手动写这些代码来开启。

# 特性五：垃圾回收(GC)（后台GC垃圾清理）
![](http://www.codeproject.com/KB/dotnet/599756/a13.jpg)

对于.Net程序来说，垃圾回收(GC)的确是一件非常繁重和频繁(heavy)的任务。尤其是在ASP.NET程序中，大量的请求使得服务器建立了大量的对象，使得GC必须努力的工作以便把这些不需要的对象清理掉。

![](http://www.codeproject.com/KB/dotnet/599756/a14.jpg)

在.Net4.0中，当GC执行清理的时候，所有的程序线程均被暂停了。在上图中，我们有三个线程运行以及两个GC运行在不同的线程（并在独立的逻辑处理器上运行）中，现在程序线程运行并执行它们自己的任务（这些任务均会创建一些对象）。

在某个时间点后台GC执行清理，当它们执行清理的时候，所有其他程序线程均会被暂停。这样就使得程序在那个时候会短暂的失去响应。

![](http://www.codeproject.com/KB/dotnet/599756/a15.jpg)

为了克服以上这个问题，服务器GC(Server GC)因此而生，在服务器GC中，将会多一个线程运行在后台，用来在后台清理Gen 2（[观看这段视频来了解GC Gen 0,1,2](http://youtu.be/gC8NdlOeNEs)）的对象使得主GC线程的负载减小，由于两个GC线程在运行，这样使得主应用线程变得更短的暂停，因此而提高了应用程序的吞吐率(throughput)。要启用服务器GC，只需要添加`gcServer`XML标签并将其设为`true`即可：

```xml
<configuration>
   <runtime>
      <gcServer enabled="true"/>
   </runtime>
</configuration> 
```

# 另外三个值得探索的新特性
## 设置应用域级别缺省Culture
在之前的.Net版本中如果我们需要设置Culture，需要在每一个线程中设置Culture。下面这段代码就演示我们在线程级别设置Culture的痛苦之处。而且如果我们的程序是重多线程程序，那会是更加的痛苦。
```csharp
CultureInfo cul = new CultureInfo(strCulture);
Thread.CurrentThread.CurrentCulture = cul;
Thread.CurrentThread.CurrentUICulture = cul;
```

在4.5中，我们可以在应用域(App Domain)级别设置Culture，然后所有该应用域的线程均会继承该Culture，下面就演示了如何使用`DefaultThreadCurrentCulture`
```csharp
CultureInfo culture = CultureInfo.CreateSpecificCulture("fr-FR");
CultureInfo.DefaultThreadCurrentCulture = culture;
```

## 数组支持超过2G大小
其实我也不确定什么样的场景需要2G大小的集合。所以我个人来看，我并不知道什么时候这个特性会被用到，通常情况如果我们需要大集合的时候都会把它分散为小部分。不过我相信一定有足够重要的理由让.Net4.5支持这个特性。

## 控制台支持Unicode
我想应该很少人会用控制台把，不过我看见过一些人使用控制台来做学术研究目的。不管怎么样，我们现在可以有支持Unicode的控制台了。

# 参考文献
* <http://msdn.microsoft.com/en-us/library/ms171868.aspx>
* 本文原文：[Five Great .NET Framework 4.5 Features](http://www.codeproject.com/Articles/599756/Five-Great-NET-Framework-4-5-Features)



> **译者注**: 本文作者推荐了两个视频来服务初学者，使其了解一些基本概念，若观看遇到连接断开的问题，请咨询周围程序员朋友。
