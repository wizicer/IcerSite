理解git（git的本质）
===================

## 一个提交

## 库目录结构

## 内部命令

## windows下的git特性

> Security[edit]
> On 17 December 2014, an exploit was found affecting the Windows and Mac versions of the Git client.
> An attacker could perform arbitrary code execution on a Windows or Mac computer with Git installed
> by creating a malicious Git tree (directory) named .git (a directory in Git repositories that stores
> all the data of the repository) in a different case (such as .GIT or .Git, needed because Git
> doesn't allow the all-lowercase version of .git to be created manually) with malicious files in the
> .git/hooks subdirectory (a folder with executable files that Git runs) on a repository that the
> attacker made or on a repository that the attacker can modify. If a Windows or Mac user "pulls"
> (downloads) a version of the repository with the malicious directory, then switches to that
> directory, the .git directory will be overwritten (due to the case-insensitive nature of the Windows
> and Mac filesystems) and the malicious executable files in .git/hooks may be run, which results in
> the attacker's commands being executed. An attacker could also modify the .git/config configuration
> file, which allows the attacker to create malicious Git aliases (aliases for Git commands or
> external commands) or modify existing aliases to execute malicious commands when run. The
> vulnerability was patched in version 2.2.1 of Git, released on 17 December 2014, and announced on
> the next day.[78][79] git version 2.6.1, released on 29 September 2015, contained a patch for a
> security vulnerability (CVE-2015-7545)[80] which allowed arbitrary code execution.[81] The
> vulnerability was exploitable if an attacker could convince a victim to clone a specific URL, as the
> arbitrary commands were embedded in the URL itself.[82] An attacker could use the exploit via a
> man-in-the-middle attack if the connection was unencrypted,[82] as they could redirect the user to a
> URL of their choice. Recursive clones were also vulnerable, since they allowed the controller of a
> repository to specify arbitrary URLs via the gitmodules file.[82]

[Git Wiki]: https://en.wikipedia.org/wiki/Git_(software)
