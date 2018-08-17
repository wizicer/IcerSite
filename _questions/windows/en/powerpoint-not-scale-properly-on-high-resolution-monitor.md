---
title: "PowerPoint not scale properly on high resolution monitor"
ref: "PowerPoint not scale properly on high resolution monitor"
date: 2016-5-4
lang: en
category: Windows
---

<!--more-->
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
