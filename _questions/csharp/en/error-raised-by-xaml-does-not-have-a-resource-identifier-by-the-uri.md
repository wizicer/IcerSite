---
title: "Error raised by xaml: `does not have a resource identifier by the uri`"
date: 2016-5-12
lang: en
category: C#
---

Scenario is when try to load two different version of assemblies.(same code with different Assembly
Version) 

It's limitation to Xaml generator. Workaround:
1. put `<AssemblyVersion>` in `.csproj` file.
2. use build parameter.
