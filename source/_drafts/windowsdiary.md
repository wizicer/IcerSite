# Windows Diary

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
