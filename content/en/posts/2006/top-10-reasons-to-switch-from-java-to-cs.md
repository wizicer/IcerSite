---
title: Ten important reasons to move from Java to C#
tags:
- C#
categories:
- childhoods
date: 2006-08-15
lang: en
translateDate: 9/30/2023
---

* Original: Will Wagers
* Original: <http://www.csharphelp.com/archives4/archive664.html>
* Translation: Ice Mage - ~~C\#代码中心[CCSharp.Net]~~
* Principle: Ice magicians do not like to stick to words, they are translated according to the ice magician's own understanding, please have the ability to read English friends to view the original article.
* Copyright: The copyright belongs to the original author, please bring the name of the translator Ice Sorcerer ~~[CCSharp.Net]~~.

Why should a Java developer go to C\#开发上来呢? (in no particular order)

Memory access for C language style ("C Style") **

C\#则很好的同意程序员在需要的时候可以使用C语言样式 ("C Style") memory management and pointer memory access than in other languages where programmers have to use APIs to access specified memory. Of course, Java and other object-oriented programming languages explicitly deny such memory operations. C\#的程序员则可以使用微软提供的 the **unsafe** keyword for such memory operations.

**2、Extensions for component development**

C\#向他的开发者们展示了他这样一个强大的面向组件开发的语言特性, it supports properties, indexers, delegates, inheritance, versioning, and attributes, and it doesn't require a difficult or stodgy naming and some related classes.

**3、Similar**

Java developers will quickly discover C\#显得是那么的熟悉和舒服. C\#是非常像Java的, of course, C\#还支持一些其他的关键字和结构. So, a Java programmer can learn C\#这门语言 in a day or two, but learning the API is another problem.

4 Interactive XML Web services

C#通过可以从任何一个平台进行聚合的交互式XML Web services to shorten program development time. Microsoft likes to hide some technical data: this is both good and bad, like a double-edged sword. Novice developers often don't know or understand exactly how the invisible parts work. But on the other hand, it does increase productivity. Of course, Java developers also have many IDEs to choose from, many of which also support Web services to some extent.

**5. Play an important role. .NET Framework

C\#开发者可以很轻松的使用. .NET Framework - a rich, thread-safe library, data access class, network operation class, etc. Recently, however, various bridge software has developed something that allows Java programs to access the .NET Framework library as if they were accessing the Java library.

6 Object-based type system

C#给他的程序员提供了一套以对象为基础的类型系统, which eliminates the complex, lengthy code writing often required in Java programs.

7 Standards-based language

C\#提供给程序员的是一套以标准为基础 (ECMA) is a language that includes all its advantages, which is a significant advantage over Java.

**8. Aimed at various equipment**

C#让程序员使用同样的工具和同样的技术来开发台式机或是各种掌上机或是无线设备 Of course, these devices must have Windows installed.

**9、Visual Studio .NET IDE**

C#为开发者提供了IDE (Integrated Development Environment), which provides task lists, property editors, Microsoft IntelliSense®, form designers, and more. When it comes to development on Windows, Visual Studio is king. Of course, aside from Microsoft-specific features, Visual Studio lags behind Eclipse and some other IDEs.

**10、Support XML comments**

C\#允许开发者使用XML (eXtensible Markup Language Extended Markup Language) annotations to use useful custom source code documentation. Of course, Java also has other implementations. (Ice Magician's Note: e.g. Javadoc)

**Conclusion**

This table originated at Microsoft, and because of Java and C\#是出于竞争关系, each round of their competition will come up with something better than others. In fact, C\#和Java都是一门非常优秀的语言, they are very similar, they each have their own advantages and disadvantages, unless you work in a company that only uses Microsoft products, otherwise for most projects, two languages and even some other languages will be involved.

