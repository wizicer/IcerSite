# Unity Diary

## 2016-5-14

### make 2d object glow when event fires

* use shader to calculate glow shadow (very complex)
* visible/invisible or change color of a substrate/glow layer

### change opacity of GameObject

`[GameObject].SetActive(false);` another way is to disable renderer of that object.

### change opacity or something else frame by frame.

Use animation. Don’t use code.

### unity  not support C# 6.0?

Yes, only C# 4.0 supported.

### call function in another script of another gameobject

Just use the type of that script as a field, and bind with the gameobject which has this type of script as component.

### how to edit prefab?

Some things you can add by clicking on the prefab and adding items using the Component menu. For
more involved changes, drag the prefab into the scene, make whatever changes are necessary (ignore
the message about breaking the prefab link), and when done, select Apply Changes to Prefab from the
GameObject menu. Then delete the prefab from the scene.

[Link](http://answers.unity3d.com/questions/17976/edit-source-prefab-change-position-or-add-new-game.html) 

### MouseDown event not fire?

Need Box Collider to detect this type of event.

### MouseDown event not fire after add one statement inside another object.

Didn't find why, however, set location at `Start()` workaround this issue, maybe it's a bug.

### replace texture from jpg to png

So far as I know, no way.

### replace pure color backgrounds as transparent?

No way, do it in an image processing software.

### move object gradually?

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
	
### error "no model is available for preview" when previewing animation

Drag and drop the model source file into the animation preview window. 

[Link](http://answers.unity3d.com/questions/374149/how-do-i-set-or-change-the-default-preview-model-f.html) 

### make health bar in unity3d 5 (which is using new GUI system)

Add image inside panel, change its anchor to left (hold shift key), change scale programmatically

## 2016-5-6

### integrate git with unity 3d

Edit -> Project Settings -> Editor
Set Version Control to meta files. Set Asset Serialization to force text.

[Link](http://stackoverflow.com/questions/18225126/how-to-use-git-for-unity-source-control)

And download <https://raw.githubusercontent.com/github/gitignore/master/Unity.gitignore>

### cannot open script with VS2015.

Detail can be found in editor.log located under C:\Users\xxx\AppData\Local\Unity\Editor\Editor.log
Identified as a bug in community forum. Workaround is restart.

Found it may because last VS start failed and not close properly. Kill it in task manager first and try again.

### showing Load 'name' (-1) couldn't be loaded because it has not been added to the built settings

To add a level to the build settings use the menu `File`->`Build` Settings...

[Link](http://answers.unity3d.com/questions/1011691/showing-load-name-1-couldnt-be-loaded-because-it-h.html)

### button to change scene programmatically


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

### MonoBehaviour lifecycle

<http://docs.unity3d.com/Manual/ExecutionOrder.html>


### glow an object when mouse hover

get Renderer and change its `material.color` when OnMouseEnter/Over/Exit event
Refer to <http://docs.unity3d.com/ScriptReference/MonoBehaviour.OnMouseEnter.html>
