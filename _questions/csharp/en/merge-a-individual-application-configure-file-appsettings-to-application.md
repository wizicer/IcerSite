---
title: "Merge a individual application configure file (AppSettings) to application"
date: 2016-5-24
lang: en
category: C#
---

**Scenario Description**: for some reason we don't want to modify the main configure file which name
is `xxx.exe.config`, so we store configures in another file `ConfigurationFile`.

<!--more-->

**Failure Trial**

Intuitively, I write following code try to open the extra configure file.

```cs
var c = ConfigurationManager.OpenExeConfiguration(path);
```

Whatever path you use until you have `xxx.exe` and `xxx.exe.config` in pair, you will get following
error:

```
Exception thrown: 'System.Configuration.ConfigurationErrorsException' in System.Configuration.dll

Additional information: An error occurred loading a configuration file: The parameter 'exePath' is invalid.
```

**Success Trial**

The key is we have a configure file without its executable exist, how we workaround this issue is
`new ExeConfigurationFileMap { ExeConfigFilename = Path.Combine(loc, ConfigurationFile) };`

The complete code of merge as followed:

```cs
private static void MergeAppSettings()
{
    var loc = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
    var map = new ExeConfigurationFileMap { ExeConfigFilename = Path.Combine(loc, ConfigurationFile) };
    var cfg = ConfigurationManager.OpenMappedExeConfiguration(map, ConfigurationUserLevel.None);
    foreach (KeyValueConfigurationElement item in cfg.AppSettings.Settings)
    {
        if (ConfigurationManager.AppSettings[item.Key] == null)
        {
            ConfigurationManager.AppSettings[item.Key] = item.Value;
        }
    }
}
```
