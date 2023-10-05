---
title: C#自动代码生成
tags:
- 作品展示
date: 2015-12-31
---

自动生成C#代码，以避免重复拷贝大量的代码片段，属于编辑时修改，典型用途是WPF的各种实体生成。

代码仓库： https://github.com/wizicer/HiddenCodeAutoGen


## 安装

确保你已经安装了VS2015，然后运行 `build.bat`，你会在根目录下得到 `HiddenCodeAutoGenerator.vsix` 文件。

打开它并将其安装到你的VS中。

## 特性

* 支持VS2015
* 对以下内容提供开箱即用的生成器
  * RelayCommand
  * DependencyProperty
  * **[实验性]**Entity
  * ViewModel 属性
* 容易插入（带脚本）模式

## 入门

![设置自定义工具属性](https://github.com/wizicer/HiddenCodeAutoGen/blob/master/doc/propertyset.png "设置自定义工具属性")

将 `Custom Tool` 设置为 `HiddenCodeAutoGenerator`。

在你的代码顶部放置以下代码：
（当然，你应确保相应的生成器存在于相对路径中）

```
// <AutoGen src="..\..\..\Commons\AutoGen\AutoGen.cs" />
// <AutoGen src="..\..\..\Commons\AutoGen\AutoGenINPC.cs" />
```

当前可用的生成器：

* [AutoGen]()

## 用法

目前，有四个生成器可用，主要关注于WPF MVVM开发。

有关详细信息，你可以参考 [测试案例](https://github.com/wizicer/HiddenCodeAutoGen/tree/master/UnitTests/TestCases)

### Relay Command

以下几行：
```csharp
[AutoGenCommand("NewProject")]
[AutoGenCommand("OpenProject", "this.NewProject")]
[AutoGenCommand("SaveProject", "this.SaveProject", "this.CanSaveProject")]
```
变为：
```csharp
/// <summary>
/// The NewProject command
/// </summary>
private RelayCommand _newProjectCommand;

/// <summary>
/// Gets the NewProject command.
/// </summary>
/// <value>The NewProject command.</value>
public ICommand NewProjectCommand
{
    get { return this._newProjectCommand ?? (this._newProjectCommand = new RelayCommand(this.ExecuteNewProjectWrap)); }
}

/// <summary>
/// delegate for invoking NewProjectCommand
/// </summary>
private void ExecuteNewProjectWrap(object obj)
{
    ExecuteNewProject(obj);
}

/// <summary>
/// Invoked when NewProjectCommand invokes
/// </summary>
partial void ExecuteNewProject(object obj);

/// <summary>
/// The OpenProject command
/// </summary>
private RelayCommand _openProjectCommand;

/// <summary>
/// Gets the OpenProject command.
/// </summary>
/// <value>The OpenProject command.</value>
public ICommand OpenProjectCommand
{
    get { return this._openProjectCommand ?? (this._openProjectCommand = new RelayCommand(this.NewProject)); }
}

/// <summary>
/// The SaveProject command
/// </summary>
private RelayCommand _saveProjectCommand;

/// <summary>
/// Gets the SaveProject command.
/// </summary>
/// <value>The SaveProject command.</value>
public ICommand SaveProjectCommand
{
    get { return this._saveProjectCommand ?? (this._saveProjectCommand = new RelayCommand(this.SaveProject, this.CanSaveProject)); }
}
```

### Dependency Property

以下几行：
```csharp
[AutoGenDP("WireInfo", typeof(string), "null")]
[AutoGenDP("WireInfo2", typeof(Wire), "new Wire()")]
```
变为：
```csharp
/// <summary>
/// Gets / sets the WireInfo property value, This is a dependency property
/// </summary>
public string WireInfo
{
    get { return (string)GetValue(WireInfoProperty); }
    set { SetValue(WireInfoProperty, value); }
}

/// <summary>
/// Defines the WireInfo dependnecy property.
/// </summary>
public static readonly System.Windows.DependencyProperty WireInfoProperty =
    System.Windows.DependencyProperty.Register("WireInfo", typeof(string), typeof(WireBaseViewModel),
        new System.Windows.PropertyMetadata("null", new System.Windows.PropertyChangedCallback(OnWireInfoPropertyChanged)));

/// <summary>
/// Invoked when the WireInfo property changes
/// </summary>
partial void OnWireInfoPropertyChanged(System.Windows.DependencyPropertyChangedEventArgs e);

private static void OnWireInfoPropertyChanged(System.Windows.DependencyObject d, System.Windows.DependencyPropertyChangedEventArgs e)
{
    WireBaseViewModel control = d as WireBaseViewModel;
    control.OnWireInfoPropertyChanged(e);
}
/// <summary>
/// Gets / sets the WireInfo2 property value, This is a dependency property
/// </summary>
public Wire WireInfo2
{
    get { return (Wire)GetValue(WireInfo2Property); }
    set { SetValue(WireInfo2Property, value); }
}

/// <summary>
/// Defines the WireInfo2 dependnecy property.
/// </summary>
public static readonly System.Windows.DependencyProperty WireInfo2Property =
    System.Windows.DependencyProperty.Register("WireInfo2", typeof(Wire), typeof(WireBaseViewModel),
        new System.Windows.PropertyMetadata(new Wire(), new System.Windows.PropertyChangedCallback(OnWireInfo2PropertyChanged)));

/// <summary>
/// Invoked when the WireInfo2 property changes
/// </summary>
partial void OnWireInfo2PropertyChanged(System.Windows.DependencyPropertyChangedEventArgs e);

private static void OnWireInfo2PropertyChanged(System.Windows.DependencyObject d, System.Windows.DependencyPropertyChangedEventArgs e)
{
    WireBaseViewModel control = d as WireBaseViewModel;
    control.OnWireInfo2PropertyChanged(e);
}
```

### Notified Property

以下几行：
```csharp
[AutoGen("WireData", typeof(string), "null")]
[AutoGen("Visibility", typeof(Visibility), "Visibility.Hidden")]
```
变为：
```csharp
/// <summary>
/// Field which backs the WireData property
/// </summary>
private string _wireData = "null";

/// <summary>
/// Gets / sets the WireData value
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

/// <summary>
/// Invoked when the value of WireData changes
/// </summary>
partial void OnWireDataChanged(string value);
/// <summary>
/// Field which backs the Visibility property
/// </summary>
private Visibility _visibility = Visibility.Hidden;

/// <summary>
/// Gets / sets the Visibility value
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

/// <summary>
/// Invoked when the value of Visibility changes
/// </summary>
partial void OnVisibilityChanged(Visibility value);
```

### Entity

以下几行：
```csharp
[AutoGenEntity("WireData", typeof(string), false)]
[AutoGenEntity("Visibility", typeof(Visibility), true, "Visibility.Hidden")]
```
变为：
```csharp
public string WireData { get; set; }
public Visibility Visibility { get; private set; }

public WireBaseViewModel(string wireData, Visibility visibility = Visibility.Hidden)
{
    this.WireData = wireData;
    this.Visibility = visibility;
}
```