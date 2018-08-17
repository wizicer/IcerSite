---
title: "Send keystroke to application"
ref: "Send keystroke to application"
date: 2016-6-10
lang: en
category: C#
---

The goal I want to achieve is send keystroke to another application, which is the core function of my
new open source application [TouchAssistant](https://github.com/wizicer/TouchAssistant). And I want
the keystroke can be customized easily by configuration from user interaction.

<!--more-->

1. Use WinAPI `keybd_event` as this [Link](http://stackoverflow.com/questions/8339565) suggested.
   example as followed:

  ```cs
  [DllImport("user32.dll")]
  static extern uint keybd_event(byte bVk, byte bScan, int dwFlags, int dwExtraInfo);
  ```

  So far, I'm using this API, no shortcoming except no one liner to simulate keystroke with
  modifier.

2. Use WinAPI `SendInput` as this [Link](http://www.pinvoke.net/default.aspx/user32.sendinput)
   suggested. **Note** this API is available after Vista.

  ```cs
  [DllImport("user32.dll")]
  static extern uint SendInput (uint nInputs, [MarshalAs(UnmanagedType.LPArray), In] INPUT[] pInputs, int cbSize);
  ```

  Much complex than previous one, however, it may get better compatibility especially with future
  version of Windows.

3. Original WinForm has a method like following:

  ```cs
  System.Windows.Forms.SendKeys.SendWait("{ESC}");
  ```

  Very powerful function, and can be configured to use `keybd_event` or `SendInput` internally.
  However, it's not so good to reference `System.Windows.Forms` in WPF application.

4. There is an open source project [Windows Input Simulator](http://inputsimulator.codeplex.com/). 
  
  Good wrapper, however, cannot gain enough flexibility for user customization like AHK or SendKeys
  did.

5. Integrate AHK by using <https://github.com/amazing-andrew/AutoHotkey.Interop>
