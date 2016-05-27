title: CSharp Diary
tags:
- C#
- WPF
categories:
- Diary
description:
  Diary for C#, WPF and .Net
date: 2016-5-27
---

## 2016-5-27

### Compile Error: Create a delegate when there is a conditional attribute

Solution: Wrapping in lambda function.

[Link](http://stackoverflow.com/questions/20638873/create-a-delegate-when-there-is-a-conditional-attribute)

### `<Service Include="{B4F97281-0DBD-4835-9ED8-7DFB966E87FF}" />` in csproj file

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

## 2016-5-25

### Error Message: Cannot modify the return value of 'expression' because it is not a variable

Example code which raises the error:
```cs
public Point Origin { get; set; }

Origin.X = 10; // fails with CS1612
```

As a matter of fact, the misuse itself is obviously to who familiar with the character of `struct`
-- `immutable`. However, the message itself is really confusing.

PS: workaround code

```cs
Origin = new Point(10, Origin.Y);
```

## 2016-5-24

### Merge a individual application configure file (AppSettings) to application

**Scenario Description**: for some reason we don't want to modify the main configure file which name
is `xxx.exe.config`, so we store configures in another file `ConfigurationFile`.

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

### #if DEBUG vs. Conditional("DEBUG")

Extract key information from [this great explanation](http://stackoverflow.com/a/3788719/2558077)

* `#if DEBUG`: The code in here won't even reach the IL on release.
* `[Conditional("DEBUG")]`: This code will reach the IL, however calls to the method will be omitted
  unless DEBUG is set when the caller is **compiled**.

**Common Best Practice**

* Use `#if DEBUG` for different variable assignment.
* Use `[Conditional("DEBUG")]` for method invocation.

## 2015-5-23

### `Task.Run` with STA apartment state

Use following code instead of `Task.Run`, [Source](https://github.com/xunit/xunit/issues/103#issuecomment-62822506)

```cs
public static Task<T> StartSTATask<T>(Func<T> func)
{
    var tcs = new TaskCompletionSource<T>();
    var thread = new Thread(() =>
    {
        try
        {
            var result = func();
            tcs.SetResult(result);
        }
        catch (Exception e)
        {
            tcs.SetException(e);
        }
    });
    thread.SetApartmentState(ApartmentState.STA);
    thread.Start();
    return tcs.Task;
}
```

## 2016-5-16

### Dependency check(restriction) of csproj

1. still cannot achieved by using code analysis
2. use `.Net Architecture Checker`

## 2016-5-12

### `AssemblyVersion` vs `FileVersion` vs `ProductVersion`

* `AssemblyVersion` is used for assembly reference.
* `FileVersion` is used for mark which build the assembly produced.
* `ProductVersion` is used for marketing, not used in program. **Note**: aka
  `AssemblyInformationalVersion`

eg, version of `mscorlib 2.0.0.0`

* `AssemblyVersion`: 2.0.0.0
* `FileVersion`: 2.0.50727.3521
* `ProductVersion`: 2.0.50727.3521

### Error raised by xaml: `does not have a resource identifier by the uri`

Scenario is when try to load two different version of assemblies.(same code with different Assembly
Version) 

It's limitation to Xaml generator. Workaround:
1. put `<AssemblyVersion>` in `.csproj` file.
2. use build parameter.

### Error `xceed.wpf.toolkit.aerolite` in xaml when use xceed

Ignore it, as it's internal mechanism to try to load it.

### `LoadFile` vs `LoadFrom` in `Assembly`

* `LoadFrom`, default action when .Net load assembly, load only once for same identity even in two
  location with different meta data.
* `LoadFile`, load exactly what was requested, and would not load dependency.

### Dynamic Module(Assembly)?

Use `AssemblyBuilder`

## 2016-5-11

### `Task.Run` is not available and error `doesn't contain a definition for 'GetAwaiter'` in `Task.Factory.StartNew` 

`Task.Run` is available since .Net 4.5 and this error would disappear after switched target to 4.5

### async WPF click event for CPU intensive operation

Lesson learned:

1. Don't use async/await in .Net 4.0.
2. Use `Task.Run` to replace the CPU intensive code.
3. Need to manually fire `PropertyChanged` event for ViewModel.

### async linq?

In a word, linq was not designed to be asynced.

### Side effects of `[Serializable]`

No, because it's `Attribute` which only read by some program runtime.

### Caliburn.Micro `PropertyChangedBase` not Serializable. (Even mark as Serializable who inherit it)

It marks with `[DataContract]`, maybe mark field with `[DataMember]` can fix this(not test).

### Cannot be Serializable who implement INotifyPropertyChanged

Because the event, change it to:

```cs
[field:NonSerializable]
public event ChangedEventHandler PropertyChanged;
```

### Performance: AppDomain vs Process

No comparison found, however, obviously AppDomain should be much faster than process which not
involving a lot of system resource allocation.

## 2016-5-9

### Ignore first time SelectionChanged event

1. use variable to lock
2. use `Loaded` event to wire SelectionChanged event.

## 2016-5-4

### shortcut to navigate in Peek Definition

* <kbd>Shift</kbd>+<kbd>Esc</kbd>: Jump Between
* <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+[<kbd>-</kbd>/<kbd>+</kbd>]: Navigate between definition window
* [<kbd>Shift</kbd>+]<kbd>F8</kbd>: navigate between multiple results

### Annotate a file in VS2015(git blame)

Right click file in solution, `Annotate`

## 2016-4-29

### Select-All design pattern with post-selection events (single or multiple confirmation)

Differentiate Select-All and Single-Select by event source/args.

## 2016-4-27

### How to add strong name to dll(sign a dll)?

```sh
ildasm.exe xxx.dll /out:xxx.il
ilasm.exe xxx.il /dll /key=xxx.snk /output=xxx-signed.dll
```

## 2016-4-25

### `protected internal` in C#?

`protected internal` means `protected` **OR** `internal`.
In order to make it protected **AND** internal, mark parent as `internal`

### Unit test `DateTime.Now`

Only way is use agent.

### Set value of internal/private fields/properties via dynamic

It's impossible to set value through dynamic, instead, use reflection with `BindingFlags.Instance |
BindingFlags.NonPublic`

### Error `CS0656` after used dynamic

Need to reference `Microsoft.CSharp`

## 2016-4-24

### image comments in VS2015

no stable extension so far, only available one is <https://github.com/lukesdm/image-comments> without maintenance for years

### should I sign my extension before uploading to VS gallery?

No, many famous extension didn't sign itself.

### what if I want to sign my extension for VS?

Here is the tutorial: <http://www.jeff.wilcox.name/2010/03/vsixcodesigning/>

### debug VS2015 extension project

1. Right click on the project and select Properties
2. Go to the Debug Tab
3. Click on the radio button for Start External Program. Point it to the devenv.exe binary.
   On my machine it's located at
   C:\Program Files (x86)\Microsoft Visual Studio 10.0\Common7\IDE\devenv.exe
   On a non x64 machine though you can remove the " (x86)" portion.
4. Then set the command line arguments to /rootsuffix Exp

[Link](http://stackoverflow.com/questions/9281662/how-to-debug-visual-studio-extensions)

## No Answer Questions

### VsVim shortcut key missing in option

No answer found so far on the internet.

### WPF Error: Cannot find governing FrameworkElement or FrameworkContentElement for target element

DataGrid do not inherit DataContext, need to use `dummyElement` and reference it by `ElementName`.

However, if we want to bind/use property of ItemsSource, so far, no way.

### Count `IEnumerable<T>` without knowing T

no answer, maybe it's impossible.

### UWP with MVVM

Not fully searched, possible resources:

* https://blogs.msdn.microsoft.com/johnshews_blog/2015/09/09/a-minimal-mvvm-uwp-app/
* https://github.com/Fody/PropertyChanged
* https://github.com/Fody/Fody/

### How to restrict team member misuse IoC?

