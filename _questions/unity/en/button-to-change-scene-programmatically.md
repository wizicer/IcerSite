---
title: button to change scene programmatically
ref: button to change scene programmatically
date: 2016-5-6
lang: en
category: Unity
---

1. I add an empty game object. I attach my new script.
   ```cs
   public void NextLevelButton(string levelName)
   {
       SceneManager.LoadScene(levelName);
   }
   ```
2. I associate this game object with my new script to the Button(in the inspector) by: Clicking the
   +(plus) button to add a callback from an object->script->method.

[Link](http://answers.unity3d.com/questions/836635/can-ui-buttons-load-scenes.html)

