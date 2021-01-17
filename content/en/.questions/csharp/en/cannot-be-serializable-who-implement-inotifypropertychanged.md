---
title: "Cannot be Serializable who implement INotifyPropertyChanged"
ref: "Cannot be Serializable who implement INotifyPropertyChanged"
date: 2016-5-11
lang: en
category: C#
---

Because the event, change it to:

```cs
[field:NonSerializable]
public event ChangedEventHandler PropertyChanged;
```
