# CSharp Diary

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
