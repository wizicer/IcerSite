---
title: "&lt;Service Include=\"{B4F97281-0DBD-4835-9ED8-7DFB966E87FF}\" /&gt; in csproj file"
date: 2016-5-25
lang: en
category: C#
---

"This behavior is intentional."

<!--more-->

As described in this [answer](https://connect.microsoft.com/VisualStudio/feedback/details/800245/vs2013rc-adds-to-vs2012-c-project-section-itemgroup) from Microsoft:

> This behavior is intentional.
>
> To support third-party test frameworks, like NUnit and XUnit, Visual Studio 2012 loaded Test
> Explorer on solution open, regardless of whether it contained test projects. This added seconds of
> delay to startup and solution open scenarios for all users, majority of whom don't use tests.
>
> In Visual Studio 2013, we changed it so that Test Explorer package is loaded only when the solution
> contains one or more test projects. Test projects are identified in two different ways. Projects
> created from one of the built-in unit test project templates are identified using project type
> GUIDs. Other types of projects, such as Class Library project with XUnit or NUnit tests, are
> identified by Test Explorer during first test discovery and "tagged" with the \<Service/\> item.

To workaround this issue: 

> Personally I don't like this service added to my project files and I think having it is more like a
> workaround rather than a proper solution. So marking your test projects as test projects seems more
> correct to me and this can be achieved by adding this to the first PropertyGroup:

```xml
<ProjectTypeGuids>{3AC096D0-A1C2-E12C-1390-A8335801FDAB};{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}</ProjectTypeGuids>
<TestProjectType>UnitTest</TestProjectType>
```

> {3AC096D0-A1C2-E12C-1390-A8335801FDAB} means Test Project and {FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}
> - C#. For other project type guids go [here](http://www.mztools.com/Articles/2008/MZ2008017.aspx)

[Link](http://stackoverflow.com/questions/18614342/what-is-service-include-in-a-csproj-file-for)
