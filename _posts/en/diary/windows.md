title: Windows Diary
tags:
- Windows
categories:
- Diary
description:
  Diary for Windows usage, including batch script or registry tweak
date: 2016-6-11
---

## 2016-6-11

### PowerPoint not scale properly on high resolution monitor

It's really strange that PowerPoint which is key product of Microsoft would not scale properly on
high resolution monitor while Excel and Word worked properly. And this problem even not fix in
Office 2016.

According to [this link](http://www.danantonielli.com/adobe-app-scaling-on-high-dpi-displays-fix/),
you can fix Adobe Applications.

According to [this link](http://answers.microsoft.com/en-us/office/forum/office_365hp-powerpoint/powerpoint-will-not-scale-properly-on-second/90235c12-ee4b-44ec-aafb-856b4edd6948),
you can fix PowerPoint 2013.

Following is my step to fix it in my machine with PowerPoint 2016 installed.

Copy and paste following code to a text file with `.reg` extension.

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SideBySide]
"PreferExternalManifest"=dword:00000001
```

In the directory where the powerpoint exe resides (e.g. C:\Program Files (x86)\Microsoft Office\Office14\POWERPNT.EXE), create a file with the same name followed by ".manifest" and add the text below. (e.g. C:\Program Files (x86)\Microsoft Office\Office14\POWERPNT.EXE.manifest)
Note: I had to change the security settings of the folder so I could create the file.

In the directory where the powerpoint exe resides (e.g. C:\Program Files\Microsoft Office\root\Office16\POWERPNT.EXE),
find the file with the same name followed by `.manifest` and change the
text as below. (e.g. C:\Program Files\Microsoft Office\root\Office16\POWERPNT.EXE.manifest)

**Note**: if you read the links I mentioned above, you may aware the difference, Office 2016 come
with a default `.manifest` file. That's why we should modify it now.

Changes as following:

```diff
diff --git a/powerpnt.exe.manifest b/powerpnt.exe.manifest
--- a/powerpnt.exe.manifest
+++ b/powerpnt.exe.manifest
@@ -24,7 +24,7 @@
    </compatibility>
    <asmv3:application xmlns:asmv3="urn:schemas-microsoft-com:asm.v3">
       <asmv3:windowsSettings xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">
-         <dpiAware>True/PM</dpiAware>
+         <dpiAware>false</dpiAware>
       </asmv3:windowsSettings>
    </asmv3:application>
```

What you need is change `<dpiAware>True/PM</dpiAware>` to `<dpiAware>false</dpiAware>`. 

**Note**: make sure you open this file with admin privilege as it required.

## 2016-5-4

### restart network adapter?

```batch
wmic path win32_networkadapter where NetConnectionID="Wireless Network Connection" call disable
wmic path win32_networkadapter where NetConnectionID="Wireless Network Connection" call enable
```

### require administrator privilege at startup of batch script?

put following script at the beginning of the batch file.

```batch
:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params = %*:"=""
    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs"
    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B
:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------
```

### Double click .jar file to execute in windows

Execute following script with admin privilege.

```batch
assoc .jar=jarfile
ftype jarfile="C:\DevTools\jrex86\bin\javaw.exe" -jar "%%1" %%*
```

[Link](http://stackoverflow.com/a/30571306/2558077)

## 2016-4-22

### Install pip in windows

Start with `2.7.9`, pip already in python default installation package.
To use it, just type `python -m pip install {something}`

