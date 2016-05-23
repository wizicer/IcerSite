基础知识
========

## 历史

> Git development began in April 2005, after many developers of the Linux kernel gave up access to
> BitKeeper, a proprietary source control management (SCM) system that they had previously used to
> maintain the project.[12] The copyright holder of BitKeeper, Larry McVoy, had withdrawn gratis use
> of the product after claiming that Andrew Tridgell had reverse-engineered the BitKeeper
> protocols.[13]
>
> Torvalds wanted a distributed system that he could use like BitKeeper, but none of the available
> free systems met his needs, particularly in terms of performance. Torvalds cited an example of a
> source-control management system requiring 30 seconds to apply a patch and update all associated
> metadata, and noted that this would not scale to the needs of Linux kernel development, where
> syncing with fellow maintainers could require 250 such actions at a time. For his design criteria,
> he specified that patching should take no more than three seconds,[7] and added an additional
> three points:
>
> * take Concurrent Versions System (CVS) as an example of what not to do; if in doubt, make the
>   exact opposite decision[9]
> * support a distributed, BitKeeper-like workflow[9]
> * include very strong safeguards against corruption, either accidental or malicious[8]
>
> These criteria eliminated every then-existing version-control system except Monotone. Performance
> considerations excluded this, too.[9] So immediately after the 2.6.12-rc2 Linux kernel development
> release, Torvalds set out to write his own system.[9]
>
> Torvalds quipped about the name git (which means "unpleasant person" in British English slang):
> "I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now
> 'git'."[14][15] The man page describes Git as "the stupid content tracker".[16] The readme file of
> the source code elaborates further:[17]
>
> > The name "git" was given by Linus Torvalds when he wrote the very first version. He described
> > the tool as "the stupid content tracker" and the name as (depending on your mood):
> >
> >  - random three-letter combination that is pronounceable, and not actually used by any common
> >    UNIX command.  The fact that it is a mispronunciation of "get" may or may not be relevant.
> >  - stupid. contemptible and despicable. simple. Take your pick from the dictionary of slang.
> >  - "global information tracker": you're in a good mood, and it actually works for you. Angels
> >    sing, and a light suddenly fills the room.
> >  - "goddamn idiotic truckload of sh\*t": when it breaks
>
> The development of Git began on 3 April 2005.[18] Torvalds announced the project on 6 April;[19]
> it became self-hosting as of 7 April.[18] The first merge of multiple branches took place on 18
> April.[20] Torvalds achieved his performance goals; on 29 April, the nascent Git was benchmarked
> recording patches to the Linux kernel tree at the rate of 6.7 per second.[21] On 16 June Git
> managed the kernel 2.6.12 release.[22]
>
> Torvalds turned over maintenance on 26 July 2005 to Junio Hamano, a major contributor to the
> project.[23] Hamano was responsible for the 1.0 release on 21 December 2005, and remains the
> project's maintainer.[24]

[Git Wiki]: https://en.wikipedia.org/wiki/Git_(software)


> 你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。
>
> 不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。
>
> 安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。
>
> Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：
>
> Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。
>
> Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。
>
> 历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。

[git]: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137402760310626208b4f695940a49e5348b689d095fc000

> The first open-source DVCS systems included Arch, Monotone, and Darcs. However, open source DVCSs
> were never very popular until Git and Mercurial came along. The development of git, now the
> world's most popular open source DVCS, was prompted by the decision of the company that made
> BitKeeper to rescind the free license that Linus Torvalds and some other Linux kernel developers
> had previously taken advantage of.

[Distributed]: https://en.wikipedia.org/wiki/Distributed_version_control

## 未来

> Future[edit]
>
> Some originally centralized systems now offer some distributed features. For example, Subversion
> is able to do many operations with no network.[8] Team Foundation Server and Visual Studio Team
> Services now host centralized and distributed version control repositories via hosting Git.

## 分布式

> Distributed vs. centralized[edit]
>
> Distributed revision control takes a peer-to-peer approach to
> version control, as opposed to the client-server approach of centralized systems. Rather than a
> single, central repository on which clients synchronize, each peer's working copy of the codebase
> is a complete repository.[1] Distributed revision control synchronizes repositories by exchanging
> patches (sets of changes) from peer to peer. This results in some important differences from a
> centralized system:
>
> * No canonical, reference copy of the codebase exists by default; only working copies.
> * Common operations (such as commits, viewing history, and reverting changes) are fast, because
>   there is no need to communicate with a central server.[2]
> * Communication is only necessary when sharing changes among other peers.
> * Each working copy effectively functions as a remote backup of the codebase and of its
>   change-history, protecting against data loss.[2] Other differences include:
>
> * Multiple "central" repositories.
> * Code from disparate repositories is merged based on a web of trust, i.e., historical merit or
>   quality of changes.
> * Numerous different development models are possible, such as development / release branches or a
>   Commander / Lieutenant model, allowing for efficient delegation of topical developments in very
>   large projects.[3] Lieutenants are project members who have the power to dynamically decide
>   which branches to merge.
> * Network is not involved for common operations.
> * A separate set of "sync" operations are available for committing or receiving changes with
>   remote repositories.  DVCS proponents point to several advantages of distributed version control
>   systems over the traditional centralised model:
>
> * Allows users to work productively when not connected to a network.
> * Makes most operations much faster.
> * Allows participation in projects without requiring permissions from project authorities, and
>   thus arguably better fosters culture of meritocracy[citation needed] instead of requiring
>   "committer" status.
> * Allows private work, so users can use their changes even for early drafts they do not want to
>   publish.
> * Avoids relying on one physical machine as a single point of failure.
> * Permits centralized control of the "release version" of the project
> * On FLOSS software projects it is much easier to create a project fork from a project that is
>   stalled because of leadership conflicts or design disagreements.
>
> Software development author Joel Spolsky, the owner of a commercial DVCS, described distributed
> version control as "possibly the biggest advance in software development technology in the [past]
> ten years."[4] A disadvantage is that initial cloning of a repository is slower as compared to
> centralized checkout, because all branches and revision history are copied. This may be
> significant if access speed is slow and the repository size is large enough. For instance, the
> size of the cloned git repository (all history, branches, tags, etc.) for the Linux kernel is
> approximately the size of the checked-out uncompressed HEAD, whereas the equivalent checkout of a
> single branch in a centralized checkout would be the compressed size of the contents of HEAD
> (except without any history, branches, tags, etc.). Another problem with DVCS is the lack of
> locking mechanisms that is part of most centralized VCS and still plays an important role when it
> comes to non-mergable binary files such as graphic assets.

[Distributed]: https://en.wikipedia.org/wiki/Distributed_version_control

## 安装

* git
* tortoisegit
* alias
* credential helper

## 环境

