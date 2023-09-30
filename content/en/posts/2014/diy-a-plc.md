---
title: Make a PLC with your own hands
tags:
- DIY
- 微信
categories:
- 冰河杂谈
date: 2014-03-25
ref: diy-a-plc
lang: en
translateDate: 9/30/2023
---
How about we make a 'Programmable Logic Controller' ('programmable logic controller') ourselves? Just like many computer majors have written the simplest operating system by themselves, as a software person in the field of industrial control, how can you not make a simple PLC by yourself?

PLC has actually undergone a long period of evolution, although the earliest PLC is also running on a single-chip microcomputer, but only supports the programming of specified modules, and the 'lower configuration' is actually transmitting the connection information between each point and each point, and then the PLC analyzes and runs internally according to this information. And now PLC, most of them can be called 'soft PLC' (also known as 'Soft PLC'), that is, on the PC side has been compiled into 'binary files', the process of downloading to the PLC is the process of copying or burning the program, which makes the high performance of the PC better played, the PLC we are discussing today belongs to the soft PLC.

> If you want to find me for code, although I have tried to make a simple and basic, but I have to say that a complete PLC is quite large and complex, my own is only for my own learning and use, there are not enough comments and documents to help others understand, so here I can recommend a fairly good open source project (I also borrowed a lot of components from this project when I tried it myself), this open source project is called 'beremiz'.

**First of all, let's consider, what components do I need for the PLC I want to make myself? **

### Software environment
**PLC program IDE**, which is convenient for developers to write and debug the human-machine interface of the program, and supports the development of multiple languages. Optional open source projects:
  * [PLCEdit]: Developed in full accordance with IEC61131 standards, supported in all five languages, developed in Python, so it can be cross-platform.
  * [Beremiz]: A complete open source PLC solution, but placed here mainly because it not only uses the PLCEdit mentioned above, but also enhances it to add important online debugging capabilities.
  * [SoapBox Snap][soapbox]: Developed using C# + WPF, only supports ladder diagrams as a language, but already supports online debugging functions, including simulators.
  ** My solution **: I use Node.js + HTML5 development, only support ladder diagram one language, do not support online debugging, the biggest advantage of using HTML5 solution has two points, one is to adapt to the needs of future development, the other is similar to home routers, you can embed web pages into the device, so as long as a browser that can browse HTML5 web pages can configure PLC.

> According to the IEC61131-3 standard commonly used in the field of industrial control, the programming language in the field of industrial control is divided into two categories and five languages, the two categories refer to graphical programming and code programming, graphical programming has Ladder (ladder diagram), FBD (Function Block Diagram) and SFC (Sequential Function Chart, sequence function chart), And code programming has IL (Instruction List) and ST (Structured Text), I will not expand the specific content, you need to Baidu Encyclopedia or Wikipedia by yourself.

**HMI designer**, Human-machine interface, that is, man-machine interface, is mainly used to display real-time data in the control process, and set some buttons to facilitate the operator to quickly control the system. Alternatives:
  * [Beremiz]: Developed using SVG technology, the style is highly extensible, but the logic scalability is weak.
  **My Solution**: Developed using HTML5 technology, not only is there a rich open source editor to choose from, but users can embed JS logic themselves.

**Compiler**, as the name implies, converts a program written in an IDE environment into a binary sequence that can be run directly on a microcontroller. Optional open source projects:
  * [mat]: The most comprehensive open source compiler that enters definition files that conform to its standards and can support both IL and ST text languages. Using pure C development, using macro definitions a lot, makes me struggle to look at the code.
  * [Avrian-Jump][avrian]: A very rudimentary ladder editor, and can translate this ladder into a binary program for 'ATMega168', developed using js, and operated directly on the web page.
  **My solution**: My first solution was to use the C# language to recognize code through regular expressions and turn it into executable Python code. Later, the regular expression method was changed to [Coco/R][cocor], which is a special compiler generator.

**Other necessary class libraries or drivers**, usually IO drivers, and communication protocol stacks, of course, can not lack basic class libraries for developers to call. Many times it is embedded in the compiler or provides enough flexibility for users to develop their own.

### Hardware environment

**MCU, Microcontroller Unit, microprocessor unit, the part used to specifically execute logic and, if necessary, may also undertake communication, program updates, and logging.

** ** peripheral circuit**, in fact, the main peripheral circuit is IO related circuit, but as a software person, this aspect does not need to be very clear, we only need to purchase some standard development boards, will handle these things properly.

My solution: Run Linux simulations with virtual machines and use environments like RaspberryPi that support running Linux and Python.

There will be many solutions or open source projects in each sub-item, here, I only list what I have used and understood, I believe you can easily search for more similar open source components through Google, so I will not list them here.

The above briefly introduces the basic components of the PLC system designed by yourself, as well as some optional open source projects and their features. Making a PLC is not a simple thing, I believe you can't easily make your own PLC after reading this article, but I hope that through this article, you can understand that the components needed to make your own PLC, and in fact, it is not unattainable.

[soapbox]: http://soapboxautomation.com/products/soapbox-snap/
[plcedit]: http://www.plcedit.org/
[mat]: http://mat.sourceforge.net/
[beremiz]: http://www.beremiz.org/
[cocor]: http://www.ssw.uni-linz.ac.at/Coco/
[avrian]: https://github.com/tadpol/Avrian-Jump
