---
title: C# automatic code generation
tags:
- 作品展示
date: 2015-12-31
lang: en
translateDate: 10/6/2023
---

Automatically generate C# code to avoid repeated copying of a large number of code snippets, which is modified during editing, and is typically used for WPF entity generation.

Code repository: https://github.com/wizicer/HiddenCodeAutoGen

## Installation

Make sure you have VS2015 installed, then run 'build.bat' and you'll get the 'HiddenCodeAutoGenerator.vsix' file in the root directory.

Open it and install it into your VS.

## Attributes

* Support VS2015
* Provides an out-of-the-box generator for:
  * RelayCommand
  * DependencyProperty
  **[Experimental]**Entity
  * ViewModel property
* Easy to insert (with script) mode

## Get started

![Set custom tool properties] (https://github.com/wizicer/HiddenCodeAutoGen/blob/master/doc/propertyset.png "Setting Custom Tool Properties")

Set 'Custom Tool' to 'HiddenCodeAutoGenerator'.

Place the following code at the top of your code:
(Of course, you should make sure that the corresponding generator exists in a relative path)

```
 <AutoGen src="..\..\..\Commons\AutoGen\AutoGen.cs" />
 <AutoGen src=".. \.. \.. \Commons\AutoGen\AutoGenINPC.cs" />
```

Currently available generators:

* [AutoGen]()

## Usage

Currently, there are four generators available, mainly focused on WPF MVVM development.

For more information, you can refer to [Test case] (https://github.com/wizicer/HiddenCodeAutoGen/tree/master/UnitTests/TestCases)

### Relay Command

The following lines:
```csharp
[AutoGenCommand("NewProject")]
[AutoGenCommand("OpenProject", "this. NewProject")]
[AutoGenCommand("SaveProject", "this. SaveProject", "this. CanSaveProject")]
```
Into:
```csharp
 <summary>
 The NewProject command
/// </summary>
private RelayCommand _newProjectCommand;

 <summary>
 Gets the NewProject command.
/// </summary>
 <value>The NewProject command.</value>
public ICommand NewProjectCommand
{
    get { return this._newProjectCommand ?? (this._newProjectCommand = new RelayCommand(this. ExecuteNewProjectWrap)); }
}

 <summary>
 delegate for invoking NewProjectCommand
/// </summary>
private void ExecuteNewProjectWrap(object obj)
{
    ExecuteNewProject(obj);
}

 <summary>
 Invoked when NewProjectCommand invokes
/// </summary>
partial void ExecuteNewProject(object obj);

 <summary>
 The OpenProject command
/// </summary>
private RelayCommand _openProjectCommand;

 <summary>
 Gets the OpenProject command.
/// </summary>
 <value>The OpenProject command.</value>
public ICommand OpenProjectCommand
{
    get { return this._openProjectCommand ?? (this._openProjectCommand = new RelayCommand(this. NewProject)); }
}

 <summary>
 The SaveProject command
/// </summary>
private RelayCommand _saveProjectCommand;

 <summary>
 Gets the SaveProject command.
/// </summary>
 <value>The SaveProject command.</value>
public ICommand SaveProjectCommand
{
    get { return this._saveProjectCommand ?? (this._saveProjectCommand = new RelayCommand(this. SaveProject, this. CanSaveProject)); }
}
```

### Dependency Property

The following lines:
```csharp
[AutoGenDP("WireInfo", typeof(string), "null")]
[AutoGenDP("WireInfo2", typeof(Wire), "new Wire()")]
```
Into:
```csharp
 <summary>
 Gets / sets the WireInfo property value, This is a dependency property
/// </summary>
public string WireInfo
{
    get { return (string)GetValue(WireInfoProperty); }
    set { SetValue(WireInfoProperty, value); }
}

 <summary>
 Defines the WireInfo dependnecy property.
/// </summary>
public static readonly System.Windows.DependencyProperty WireInfoProperty =
    System.Windows.DependencyProperty.Register("WireInfo", typeof(string), typeof(WireBaseViewModel),
        new System.Windows.PropertyMetadata("null", new System.Windows.PropertyChangedCallback(OnWireInfoPropertyChanged)));

 <summary>
 Invoked when the WireInfo property changes
/// </summary>
partial void OnWireInfoPropertyChanged(System.Windows.DependencyPropertyChangedEventArgs e);

private static void OnWireInfoPropertyChanged(System.Windows.DependencyObject d, System.Windows.DependencyPropertyChangedEventArgs e)
{
    WireBaseViewModel control = d as WireBaseViewModel;
    control. OnWireInfoPropertyChanged(e);
}
 <summary>
 Gets / sets the WireInfo2 property value, This is a dependency property
/// </summary>
public Wire WireInfo2
{
    get { return (Wire)GetValue(WireInfo2Property); }
    set { SetValue(WireInfo2Property, value); }
}

 <summary>
 Defines the WireInfo2 dependnecy property.
/// </summary>
public static readonly System.Windows.DependencyProperty WireInfo2Property =
    System.Windows.DependencyProperty.Register("WireInfo2", typeof(Wire), typeof(WireBaseViewModel),
        new System.Windows.PropertyMetadata(new Wire(), new System.Windows.PropertyChangedCallback(OnWireInfo2PropertyChanged)));

 <summary>
 Invoked when the WireInfo2 property changes
/// </summary>
partial void OnWireInfo2PropertyChanged(System.Windows.DependencyPropertyChangedEventArgs e);

private static void OnWireInfo2PropertyChanged(System.Windows.DependencyObject d, System.Windows.DependencyPropertyChangedEventArgs e)
{
    WireBaseViewModel control = d as WireBaseViewModel;
    control. OnWireInfo2PropertyChanged(e);
}
```

### Notified Property

The following lines:
```csharp
[AutoGen("WireData", typeof(string), "null")]
[AutoGen("Visibility", typeof(Visibility), "Visibility.Hidden")]
```
Into:
```csharp
 <summary>
 Field which backs the WireData property
/// </summary>
private string _wireData = "null";

 <summary>
 Gets / sets the WireData value
/// </summary>
public string WireData
{
    get { return _wireData; }
    set
    {
        if (_wireData == value) return;
        _wireData = value;

OnWireDataChanged(value);
        OnPropertyChanged("WireData");
    }
}

 <summary>
 Invoked when the value of WireData changes
/// </summary>
partial void OnWireDataChanged(string value);
 <summary>
 Field which backs the Visibility property
/// </summary>
private Visibility _visibility = Visibility.Hidden;

 <summary>
 Gets / sets the Visibility value
/// </summary>
public Visibility Visibility
{
    get { return _visibility; }
    set
    {
        if (_visibility == value) return;
        _visibility = value;

OnVisibilityChanged(value);
        OnPropertyChanged("Visibility");
    }
}

 <summary>
 Invoked when the value of Visibility changes
/// </summary>
partial void OnVisibilityChanged(Visibility value);
```

### Entity

The following lines:
```csharp
[AutoGenEntity("WireData", typeof(string), false)]
[AutoGenEntity("Visibility", typeof(Visibility), true, "Visibility.Hidden")]
```
Into:
```csharp
public string WireData { get; set; }
public Visibility Visibility { get; private set; }

public WireBaseViewModel(string wireData, Visibility visibility = Visibility.Hidden)
{
    this. WireData = wireData;
    this. Visibility = visibility;
}
```