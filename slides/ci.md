title: Continuous Integration
author:
  name: 冰河魔法师<Liang, Icer>
  url: http://icerdesign.com
output: ci.html
controls: true
theme: ..\template\reveal-cleaver-theme

--

# Continuous Integration

--

### What can be learned from this session?

* Why should we need CI?
* How to establish a CI environment?
* Tricks on CI from my experience.

--

## What is Continuous Integration

* Continuous integration (CI) is the **practice**
* In software engineering, of merging all developer working copies with a **shared mainline** several times a day. 
* It was first named and proposed as part of **eXtreme Programming** (XP). 

--

## Why I like CI so much?

Long story I should tell you.

--

## XP programming
![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/xpcircles.jpg)

But CI not only in XP, it can be used independently.

--

# Why we should use CI?

--

# 快
## Super Quick

--

## CI is Accelerator

* Early to know if can be built properly.
* Early to get deliverable.
* Immediate unit testing of all changes
* Historical data can support future decision.
* Cost less to get a release package.


<!--When unit tests fail, or a bug is discovered, developers might revert the codebase back to a bug-free state, without wasting time debugging;
Integration problems are detected and fixed continuously - no last minute hiatus before release dates;
Early warning of broken/incompatible code;
Early warning of conflicting changes;
Immediate unit testing of all changes;
Constant availability of a "current" build for testing, demo, or release purposes;
The immediate impact of checking in incomplete or broken code acts as an incentive to developers to learn to work more incrementally with shorter feedback cycles.-->

--

### How many of the following items are you consistently performing on your project

* On average, is everyone on your team committing code at least **once a day**? Are you employing techniques to make it easier to commit code **often**?
* What percentage of each day's integration builds is **successful** (that is, the most recent build run has passed)?
* Is everyone on your team running a **private build** before committing to the repository so that integration errors are reduced?

--

### How many of the following items are you consistently performing on your project

* Have you scripted your builds to **fail** if any of your tests or inspections fail?
* Is a **broken** integration build a priority to fix on your projects?
* Do you **avoid** getting the latest code from the version control system when there is a broken build?
* How often do you consider adding **automated processes** to your build and CI system -- on a continuous or even periodic basis?

--

## Advantages #1

* When unit tests fail or a bug emerges, developers might revert the codebase to a bug-free state, without wasting time debugging
* Developers detect and fix integration problems continuously — avoiding last-minute chaos at release dates, (when everyone tries to check in their slightly incompatible versions).
* Early warning of broken/incompatible code
* Early warning of conflicting changes
* Immediate unit testing of all changes

--

## Advantages #2

* Constant availability of a "current" build for testing, demo, or release purposes
* Immediate feedback to developers on the quality, functionality, or system-wide impact of code they are writing
* Frequent code check-in pushes developers to create modular, less complex code
* Metrics generated from automated testing and CI (such as metrics for code coverage, code complexity, and features complete) focus developers on developing functional, quality code, and help develop momentum in a team

--

## Disadvantages

* Initial setup time required
* Well-developed test-suite required to achieve automated testing advantages

--

## Value of CI

* Reduce Risk
* Reduce repetitive manual processes
* Get Deployable software at any time
* Enable better project visibility
* Establish greater confidence in product from DEV team

--

# Toolchain For CI
<!--在这里我们需要解决一个重要的问题，就是如何搭建一个完整的CI环境，跟随我一起来挑选并搭建我们自己的CI环境吧。-->
<!--不过由于个人的经历有限，这里的工具都只列举了所有我用过的，这样也才有我在这里给大家推荐的意义，一些大型工具很难在同一时期都被用起来，所以有些工具的介绍是基于几年前使用时的经验，如有不妥之处，欢迎提出。-->
--

## Source Control

* SVN
* Clearcase
* TFS
* Git
* VSS<!--这是Visual Studio 6自带的工具，基于文件共享机制的工具，很多年前就早已不更新了，有一个致命问题就是由于多人同时访问同一文件的缘故，偶尔会导致文件损坏，且缺乏很好的恢复机制，故导致时不时的总会遇到代码失踪的情况，后被微软升级为TFS了，机制完全重写了-->

--

## Comparison

|                 | SVN  | Clearcase | TFS     | Git   |
| --              | --   | --        | --      | --    |
| Free?           | Yes  | No        | No      | Yes   |
| Command Line?   | Yes  | Yes       | Partial | Yes   |
| Lock?           | No   | Yes       | Yes     | No    |
| Merge Base?     | File | Element   | File    | Line  |
| Temporary Save? | No   | Net Drive | Shelf   | Stash |
<!--源代码管理工具是不能随便的，他肩负着相当重要的责任，每次签入哪怕就快上10秒，一天就可以节省几分钟了，我想有人会在想了，我可能好几天都不用签入一次代码，所以这个加快是没用的，但是不知道你有没有想过，导致你不愿意频繁签入的原因是什么？会不会就是这个每次的签入时间过长？不这么频繁的签入，表面上看来是提高效率，减少了无用的操作，但是实际上是减少了发生错误的几率，变相的提高了你的生产效率。
我见过一些朋友写代码，是一旦写完能work就感觉完成了，所以一次性签入代码，他们觉得这样看来，用什么源代码管理器貌似都没有关系，反正都是偶尔一次的签入，其实这样是忽略了源代码管理器的一个重要功能，帮你记录代码历史，让你敢于抛开已有的束缚，勇往直前，对代码进行重构改进-->
--

## Glance at Clearcase Helper
<!--整个工具的目的都是希望能够像SVN或者Git这样的现代化代码管理工具一样的签入代码到Clearcase-->

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/CCHelperMain.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/CCHelperCommit.png)

--

## CI Platform

* Hudson/Jenkins
* CruiseControl.Net
* gitlab-ci

--

### Basic Feature

* Building/testing software projects continuously
* Monitoring executions of externally-run jobs
* Change set support
* Report
* Plugin support
* Alert
* Distributed build

--

## Comparison

|               | Jenkins | CC.Net | gitlab-ci |
| --            | --      | --     | --        |
| Free?         | Yes     | Yes    | Yes       |
| API?          | Plugin  | Plugin | Native    |
| Distribute?   | Yes     | Yes    | Yes       |
| Plugin Number | 200+    | 50+    | 10+       |
| Language      | Java    | C#     | Ruby      |
| Configuration | On-Page | Xml    | script    |

--
## Bug Tracking

* gitlab
* JIRA
* Redmine

--

### Basic Feature

* Multiple projects support
* Flexible issue tracking system
* Gantt chart and calendar
* Feeds & email notifications
* Time tracking

--

## Comparison

|               | gitlab | JIRA   | redmine |
| --            | --     | --     | --      |
| Free?         | Yes    | No     | Yes     |
| API?          | Native | Native | Plugin  |
| Tag for issue | Yes    | No     | No      |
| Workflow      | No     | Yes    | Yes     |
| Export        | No     | Yes    | Yes     |

--

## Wiki

* ScrewTurn Wiki
* OneNote/SharePoint
* redmine
* gitlab

--

## Comparison

|                  | STWiki      | OneNote | redmine | gitlab  |
| --               | --          | --      | --      | --      |
| Free?            | Yes         | No      | Yes     | Yes     |
| History          | Yes         | Yes     | Yes     | Yes     |
| Picture-friendly | No          | Yes     | No      | No      |
| Database         | File/Plugin | File    | MySql   | git rep |
| API              | No          | No      | Plugin  | Yes     |
| Show source      | Plugin      | No      | Plugin  | No      |

--

## Code Metric
<!--这里就没有比较了，因为他们都可以串行起来，全部用起来-->
* Code Style
  * StyleCop
* Potential risk check
  * Klockwork<!--缺点是收费软件，且只能嵌入开发环境，无法持续集成-->
  * FxCop<!--缺点是太过敏感，大惊小怪，爆出的错误报警异常多，以至于难于处理-->
  * Icer Code Checker<!--自己定制的方便使用，缺点是功能缺乏-->
* Duplication Check
  * simian<!--该软件实际为收费软件，且无可替代的产品-->
* Code Complexity
  * VS Code Metric Tool<!--稍微正常编写的代码，很难在这项指标上看到异常-->
* Unit test
  * Code Coverage

--

# Demo for Code metric

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportUnitTest.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportCodeCoverage.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportCodeCoverageDetail.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportCodeMetrics.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportCodeMetricsDetail.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportOpenTask.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportOpenTaskDetail.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportSimianNStylecop.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportSimianNStylecopDetail.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportWarning.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ReportWarningDetail.png)

--

# Process
<!--到这里，我们就可以把我们之前了解到的那些软件工具综合利用起来了，集成在一起就是我们今天所需要的CI系统-->
--

## Detail Step

* Developers check out code into their private workspaces.
* When done, the commit changes to the repository.
* The CI server monitors the repository and checks out changes when they occur.
* The CI server builds the system and runs unit and integration tests.
* The CI server releases deployable artifacts for testing.
* The CI server assigns a build label to the version of the code it just built.
* The CI server informs the team of the successful build.
* If the build or tests fail, the CI server alerts the team.
* The team fix the issue at the earliest opportunity.
* Continue to continually integrate and test throughout the project.

from [ThoughtWorks](http://www.thoughtworks.com/continuous-integration)

--

## 签入～构建～验证～反馈
## Check in & Build & Verify & Response

--

## CI Circle
![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/continuous-integration.png)

--

Let's Take Jenkins as example

--

## Job in Jenkins

* is **triggered** by an event
* **builds** the project
* **verifies** the project through automated tests
* and **publishes** the build to a repository

--

# Demo on Jenkins

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsProjects.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsExecutor.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ProjectPage.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ProjectBuild.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/ProjectWorkspace.png)

--

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/PluginTrigger.png)

--

## Team Responsibilities

* Check in frequently
* Don’t check in broken code
* Don’t check in untested code
* Don’t check in when the build is broken
* Don’t go home after checking in until the system builds

--

# 签～守
## Check in & wait until success
<!--在以前的公司，有可以给手机发短信的接口，每天晚八点都会准时的把当前的build情况发至手机，当然只有失败的时候才发，所以团队成员都会比较主意不要让失败的build留着过夜的。-->

--

## Tricks

* Use a Super awesome build server
* A job per commit/push  - who broke the build?
* Create multiple jobs instead of a super job
* Split your code repository if it's too big
* Create jobs at the level of  components and modules
* Limit console output - reduces stuck jobs
* Limit disk writes (logging/tracing) for faster jobs
* Monitor for memory leaks. Verify plugin quality.

--
<!--

## Tricks

* Token
* Code Review
* Multi-Stage CI-->

# Useful Plugins

--

### Useful Plugins #1

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsPlugin1.png)

--

### Useful Plugins #2

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsPlugin2.png)

--

### Useful Plugins #3

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsPlugin3.png)

--

### Useful Plugins #4

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsPlugin4.png)

--

### Useful Plugins #5

![](https://raw.githubusercontent.com/wizicer/IcerSite/dev/slides/ci/JenkinsPlugin5.png)

--

# Question?

--

## Follow me on my blog
#### <http://icerdesign.com>

[format]: https://github.com/jdan/cleaver
[ciwiki]: http://en.wikipedia.org/wiki/Continuous_integration
[citw]: http://www.thoughtworks.com/continuous-integration

<style type="text/css">
table {
	border: 1px solid #666666 !important;
	border-collapse: collapse;
    margin-left:auto !important; 
    margin-right:auto !important;
}
table th {
	border: 1px solid #666666 !important;
	padding: 8px !important;
	background-color: #565656;
}
table td {
	border: 1px solid #666666 !important;
	padding: 8px !important;
	background-color: #444444;
}
</style>
