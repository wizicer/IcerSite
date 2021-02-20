---
title: move object gradually?
ref: move object gradually?
date: 2016-5-14
lang: en
category: Unity
---

1. Use iTween
2. Set use
   ```cs
   startPoint = CrewControl.transform.position;
   startTime = Time.time;
   endPoint = this.transform.position;
   ```
   Update use 
   ```cs
   if (Time.time - startTime < duration)
   {
       CrewControl.transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
   }
   ```
