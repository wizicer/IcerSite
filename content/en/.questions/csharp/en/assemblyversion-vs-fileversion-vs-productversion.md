---
title: "`AssemblyVersion` vs `FileVersion` vs `ProductVersion`"
ref: "`AssemblyVersion` vs `FileVersion` vs `ProductVersion`"
date: 2016-5-12
lang: en
category: C#
---

* `AssemblyVersion` is used for assembly reference.
* `FileVersion` is used for mark which build the assembly produced.
* `ProductVersion` is used for marketing, not used in program. **Note**: aka
  `AssemblyInformationalVersion`

eg, version of `mscorlib 2.0.0.0`

* `AssemblyVersion`: 2.0.0.0
* `FileVersion`: 2.0.50727.3521
* `ProductVersion`: 2.0.50727.3521
