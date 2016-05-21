# CSharp Diary

## 2016-5-21

### How to restrict team member misuse IoC?




## 2016-5-16

### Dependency check(restriction) of csproj

1. still cannot achieved by using code anlysis
2. use `.Net Architecture Checker`

## 2016-5-12

### `AssemblyVersion` vs `FileVersion` vs `ProductVersion`

* `AssemblyVersion` is used for assembly reference.
* `FileVersion` is used for mark which build the assembly produced.
* `ProductVersion` is used for marketing, not used in program.

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

## No Answer Questions

### VsVim shortcut key missing in option

No answer found so far on the internet.

### WPF Error: Cannot find governing FrameworkElement or FrameworkContentElement for target element

DataGrid do not inherit DataContext, need to use `dummyElement` and reference it by `ElementName`.

However, if we want to bind/use property of ItemsSource, so far, no way.

### Count `IEnumerable<T>` without knowing T

no answer, maybe it's impossible.
