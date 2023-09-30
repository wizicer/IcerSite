---
title: Extend HTML syntax using AngularJS directives
tags:
- Javascript
- HTML
categories:
- 冰河杂谈
date: 2013-07-07
lang: en
translateDate: 9/30/2023
---

Translator: [Ice Magician] (http://icerdesign.com)
[Extending HTML with AngularJS Directives] (http://www.codeproject.com/Articles/607873/Extending-HTML-with-AngularJS-Directives)

# Introduction to AngularJS
AngularJS is Google's web application development framework that provides a set of core features that not only work well together, but are also designed in an easily extensible way, including data binding, manipulating the Document Object Model (DOM), routing/view management, module loading, and more.

AngularJS is more than just a library, it provides a complete framework so you don't have to think about using various other libraries when developing, and it's from Google, which developed Chrome, and they've been working hard to create the next generation of web applications (check out [Polymer]( http://www.polymer-project.org/ project), I believe that in five to ten years, we will no longer use AngularJS to develop web applications, but we will definitely use a similar framework.

For me, the most exciting feature of AngularJS is the ability to write custom directives that allow you to extend HTML with new tags or attributes. Directives can be reused across projects, and . Custom controls in .NET are similar.

> Translator's Note: Directive can be translated as a directive, but because the command is also used in the code, it is retained as a directive later

This article contains examples of almost 50 custom directives based on Bootstrap, Google JavaScript APIs, and Wijmo. The examples are fully annotated and documented, which should be a good reference to start writing your own instructions. You can see [online example] (http://demo.componentone.com/wijmo/Angular/AngularExplorer/AngularExplorer) here.

Creating directives and trimming them to the extent you need them is very simple, all directives can be tested, maintained, and reused in multiple projects, and the right implementation allows your directives to be easily reused or enhanced without even changing a single line of code.

This article focuses on directives, but before we get down to business, let's take a quick look at the basic features of AngularJS.

To use AngularJS, you must add a reference to the HTML page and add the 'ng-app' attribute to the HTML or BODY tag, as shown in the following example:

```html
<html>
  <head>
    <script src="http://code.angularjs.org/angular-1.0.1.js"></script>
  </head>
  <body ng-app ng-init#"msg  'hello world'">
    <input ng-model="msg" />
    <p>{{msg}}</p>
  </body>
</html>
```

When AngularJS is loaded, it scans the 'ng-app' attribute throughout the document, and this tag is usually set to the main module of the application. Once the 'ng-app' attribute is discovered, Angular processes the entire document, loads the main module and its dependent modules, scans the entire document for custom directives, and a series of operations.

In the example above, the 'ng-init' attribute assigns the initial value 'hello world' to the 'msg' variable, and the 'ng-model' attribute binds the value of this variable to an input box element. Enclose a paragraph of text in curly braces to represent the binding expression. AngularJS evaluates the expression and recalculates it and updates it to the document if there is any change in the value. You can look at this example: <http://jsfiddle.net/Wijmo/HvSQQ/>

# AngularJS Module
Module objects act as the root of an AngularJS application, with objects 'config', 'controller', 'factory', 'filter', 'directive' and a few others.

If you are familiar with . .NET and not familiar with Angular, then the analogies in the following table will make it easier to understand the different objects in AngularJS:

| AngularJS        | .NET           | Description |
|------------------|----------------|----------------------------|
| module           | Assembly       | Application building blocks |
| controller       | ViewModel      | Contains logic and exposes it to View
| scope            | DataContext    | Provides data | that can be bound to a view
| filter           | ValueConverter | Make changes before the data is actually displayed |
| directive        | Component      | Reusable interface elements |
| factory, service | Tools | Provide services to other module elements |

The following code creates a module containing controller, filter, and directive

```javascript
var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function($scope) {
  $scope.msg = "hello world";
});

myApp.filter("myUpperFilter", function() {
  return function(input) {
    return input.toUpperCase();
  }
});

myApp.directive("myDctv", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.css("background", "yellow");
    });
    element.bind("mouseleave", function() {
      element.css("background", "none");
    });
  }
});
```

The 'module' method needs to pass in the module name and a list of dependent modules. In the example above, the module we created does not need to depend on any other module, so an empty list is passed in. Note that the dependency list must be explicitly passed in even if it is empty, and failure to pass it will cause AngularJS to fetch the previous named module, which we will discuss further in the next section.

The 'controller' method exposes the '$scope' object, through which all the properties and methods of the controller can be accessed, which is managed by Angular and passed to the view and directive. In the example above, the controller only adds an 'msg' attribute to the scope. An application module can have multiple controllers, each responsible for one or more views, and controllers do not necessarily need to be members of the module, although it is a best practice to make them members.

The 'filter' method returns a method for modifying the input, and Angular only provides a few filters, but you can add your own and use it in the same way as the official one. In the example above, we define a filter to convert strings to all uppercase letters. The filter can not only be used to format the content, but also to modify the array, the formatting filters provided by AngularJS are 'number', 'date', 'currency', 'uppercase', 'lowercase', and array filters have 'filter', 'orderBy' and 'limitTo'. filter can take parameters in the format: 'value | filter name : filter parameter 1 : filter parameter 2 ...'

The second parameter of the 'directive' method is also a method that can take an element (the element bound to the directive) and modify it according to the scope, in the above example, we bind two events 'mouseenter' and 'mouseleave' respectively to implement the function of highlighting when the mouse is hovering. This is our first directive that gives a rough demonstration of what it can do. AngularJS' directives can be used as attributes, elements, or even comments, and can be nested and interconnected. We'll cover more in later chapters.

Here are examples of using the above modules:

```html
<body ng-app#"myApp" ng-controller"myCtrl">
  <input ng-model="msg" />
  <p my-dctv >
    {{ msg | myUpperFilter }}
  </p>
</body>
```

You can view the runnable instances here: <http://jsfiddle.net/Wijmo/JKBbV/>

Note that the names of application modules, controllers, and filters are treated as 'values' of attributes, which reflect specific JavaScript objects, so they are case-sensitive.

The directive name, which is used as an attribute, decorates an HTML element, so it is case-insensitive, but AngularJS converts camel-cased to hyphen-separated strings. So 'myDctv' became 'my-dctv'. You should notice that the system's directives 'ngApp', 'ngController' and 'ngModel' become 'ng-app', 'ng-controller' and 'ng-model'

# Project file organization
AngularJS is designed to support large projects, which can contain many modules, put different modules into different files, and then manage these files the way you like. I've seen many projects follow the specifications described by Brian Ford in his blog post Building Huuuuuge Apps with AngularJS.html http://briantford.com/blog/huuuuuge, which in a word is one module and one file, categorized by type. So controllers are placed in the 'controllers' directory (and named 'XXXCtrl') and directives are placed in the 'directives' directory (and named 'XXXDctv'

In general, a standard project directory structure is as follows:

```
Root
        default.html
        styles
               app.css
        partials
               home.html
               product.html
               store.html
        scripts
               app.js
               controllers
                       productCtrl.js
                       storeCtrl.js
               directives
                       gridDctv.js
                       chartDctv.js
               filters
                       formatFilter.js
               services
                       dataSvc.js
               vendor
                       angular.js
                       angular.min.js
```

For example, if you want to use a module, define it in the 'app.js' file as follows:

```javascript
 app.js
angular.module("appModule", []);
```

In order to add an element to a module, you need to pass in the module name and get its instance, and then you can manipulate the instance as before, for example, the contents of the 'formatFilter.js' file will look like this:

```javascript
 formatFilter.js
 retrieve module by name
var app = angular.module("appModule");

 add a filter to the module
app.filter("formatFilter", function() {
  return function(input, format) {
    return Globalize.format(input, format);
  }
}})
```

If your application contains multiple modules, remember to specify dependencies for each module, for example, if an application contains three modules: 'app', 'controls' and 'data', then we can set it as follows:

```javascript
 app.js (the main application module, depends on "controls" and "data" modules)
angular.module("app", [ "controls", "data"])

 controls.js (the controls module, depends on "data" module)
angular.module("controls", [ "data" ])

 data.js (the data module, no dependencies)
angular.module("data", [])
```

In your application's main page, you need to specify the main module with the 'ng-app' directive, and AngularJS will automatically bring in all its dependencies:

```html
<html ng-app="app">
...
</html>
```

The main page and its view can then use the elements already defined in those three modules.

If you want to see a fairly large project example organized in the above way, see [Online example] (http://demo.componentone.com/wijmo/Angular/AngularExplorer/AngularExplorer)

Okay, now that you have some basic knowledge of AngularJS, it's time to start our topic: directives, and in the next chapters we'll explain what it can do by explaining some basic concepts and creating directives.

# AngularJS Directives: Why Learn How to Implement Them?
As I mentioned earlier, directive directives are the most exciting feature of AngularJS for me because it's unique, and most of the other features in AngularJS can be found in other frameworks. Not only that, but the way to create reusable components in plain HTML is really powerful. From what I know of today's web application frameworks, AngularJS is indeed the only one that supports this feature.

For example, the very popular front-end framework Bootstrap provides styles and some components, but the problem is that in order to use these components, designers doing HTML development must switch to JavaScript mode and write jQuery code to activate the panel. It is true that jQuery is simple enough, but it still requires designers to manually synchronize with HTML tags, which is not only boring, error-prone and unsuitable for extension.

On the main page of AngularJS there is a simple directive directive that wraps Bootstrap's panel components for easy use. As follows, using the directive directive makes the panel more convenient, and can also be easily reused and shared:

```javascript
<body ng-app="components">
  <h3>BootStrap Tab Component</h3>
  <tabs>
    <pane title="First Tab">
      <div>This is the content of the first tab.</div>
    </pane>
    <pane title="Second Tab">
      <div>This is the content of the second tab.</div>
    </pane>
  </tabs>
</body>
```

You can view the runnable instances here: <http://jsfiddle.net/Wijmo/ywUYQ/>

You can see that apart from the directive command tags like '' and ''<tabs><pane>', the page looks like a normal HTML. So designers who do HTML development don't have to write any JS code at all, of course, someone needs to write the directive command in advance, but once this is written, it can be reused everywhere without changing the code.

Because directives are so useful and not so difficult to write, many people have moved over popular libraries. For example, the AngularJS team has created a series of directives for Bootstrap: [UI Bootstrap] (http://angular-ui.github.io/bootstrap/); ComponentOne also wrote its own Wijmo library as a directive: [Wijmo Library](http://wijmo.com/angularjs-components-preview/); There are also those written for jQueryUI: [jQueryUI widgets](https://github.com/wlepinski/angularjs-jQueryui)

Huh? Wait, if there are already so many directives that have been prepared and can be used directly, why do we have to learn how to create them? That's a really good question, and I think there are a few reasons why you need to keep learning:
**It is possible that the directive you need has not yet been implemented**. It's possible that the library you want to use hasn't been implemented yet, and you don't want to wait for someone else to implement it. Of course, it may also be that you don't like the way others implement it, or you want to improve it.
**You may have special needs yourself**. For example, if you work in a financial company and need to use a fixed style form in many applications, this form may be a datagrid, and use a specific way to download, edit, validate, and return data, I think it is difficult for someone outside your company to create a similar feature for you to use directly. However, you can create a custom directive yourself and have the same group of HTML designers use it as <br>follows:
```xml
<body ng-app="abcFinance">
  <h3>Offshore Investment Summary</h3>
  <abc-investment-form
    customer="currentCustomer"
    country="currentCountry">
  </abc-investment-form>
</body>
```
The directive 'abcInvectmentForm' can be consistently reused across many applications. We only need to maintain the directive directive uniformly, which can be easily reflected on all applications after being modified according to the new business requirements.

Well, reading this I think you must want to know how to achieve it, and can't wait to know how to achieve it, OK, let's get started.

# AngularJS directives: how to do it?
The directive directive shown at the beginning of the article is very simple and leads to only one method, while a typical directive directive contains more elements:

```javascript
 create directive module (or retrieve existing module)
var m = angular.module("myApp");

 create the "my-dir" directive 
myApp.directive("myDir", function() {
  return {
    restrict: "E",        // directive is an Element (not Attribute)
    scope: {              // set up directive's isolated scope
      name: "@",          // name var passed by value (string, one-way)
      amount: "=",        // amount var passed by reference (two-way)
      save: "&"           // save event
    },
    template:             // replacement HTML (can use our scope vars here)
      "<div>" +
      "  {{name}}: <input ng-model='amount' />" +
      "  <button ng-click='save()'>Save</button>" +
      "</div>",
    replace: true,        // replace original markup with template
    transclude: false,    // do not copy original HTML content
    controller: [ "$scope", function ($scope) { ...  }],
    link: function (scope, element, attrs, controller) {...}
  }
});
```

Note the naming rules for directive directives: the 'my' prefix can be compared to a namespace, so if the application uses directive directives from different modules, we can easily know where they are defined. Of course, this is not a requirement, but it is a recommended practice to make the project easier to understand.

The 'directive' constructor needs to return an object with many properties, which is fully documented on the AngularJS site, but the content is relatively streamlined, so I'll explain it here as much as I can: 
* 'restrict': Determines whether the directive directive can be used in HTML, with options "A", "E", "C", and "m", representing Attribute, Element, Class, Comment, and defaults to the "A" attribute. Here we care more about elements because we need to create elements (tags) like 'tab'.
* 'scope': Creates a separate scope that belongs only to the directive directive, and the scope variable is passed in as a property of the directive directive. When we create reusable components, we should not rely on the parent scope, so the role of independent scope is very important. The 'scope' scope object defines the name and type of the scope variable (local), and in the example there are three scope variables (local)
  * 'name: "@" (one-way value type)': @符号标明这个变量是传递值类型的, the directive directive can get a specific value from its caller and use it, but it cannot change the value of its caller, so it is independent, which is the most frequently used type.
  * 'amount: "#" (bidirectional reference type)': The symbol indicates that the variable is passing a reference type, and the directive directive can not only obtain a specific value from its caller, but also change its value and reflect it in the parent scope. Typically, when the directive directive needs to modify a value in the parent scope (such as an editor control), or the value that needs to be passed in is a complex type that is not easy to serialize to a string, or the value structure is so complex that serializing to a string is expensive.
  * 'save: "&" (expression)': The & symbol indicates that the variable holds an expression that is executed in the parent scope context, which allows the directive directive to perform specific actions.
* 'template': The template string used to replace the original tag, the contents of the original tag will be completely replaced, and the variables used in the template need to exist in a separate scope, where you can write some macro-like instructions. However, it is possible that in most cases there may be only one empty '' in this field<div>, and then the 'link' method discussed below will generate the content.
* 'replace': Decide whether you want to replace the original tag with the template defined above, the default value is 'false', which means to keep the original tag and append the content of the template to it.
* 'transclude': Decide whether to copy content between the original tags. For example, if there is other HTML content in the tag of the tab directive in the previous article, set it to true, otherwise if there is no HTML content at all, set it to flase or simply ignore it and keep it at its default value.
* 'link': This method contains the main logic of the directive directive, which is used to manipulate the DOM, listen for events, etc., and it has the following parameters
  * 'scope': The independent scope associated with the directive directive, all variables in it are 'undefined' by default, so it is necessary to listen for variable change events in the program logic.
  * 'element': Linked to the DOM element containing this directive, the 'link' method uses the 'jQuery' action element by default (if no 'jQuery' is loaded, the 'jqLite' that comes with Angular is loaded by default)
  * 'controller': In the case of nested directives, this parameter provides a reference to the subdirective directive so that the two levels of directive directives can communicate with each other. The 'tab' directive we discussed earlier should make it easier for you to understand: <http://jsfiddle.net/Wijmo/ywUYQ/>
Note that the value type ("@") in scope has not been initialized when the 'link' method is called, and if you want to be notified at a later point when the variable changes, you should use the 'scope.$watch' command, which will be discussed in the next section.

If you haven't been familiar with directive instructions by now, the best way to understand it is to try coding yourself, and you can try it here: <http://jsfiddle.net/Wijmo/LyJ2T/>
In the example above, a controller and its three members 'customerName', 'creadit' and 'save' are defined. It also defines a directive command similar to the example in this section, with three members 'name', 'amount' and 'save' in a separate scope. The HTML section shows you how to use directive directives in standard HTML. You can make changes to HTML tags, variables in independent scopes, templates, and more. After trying it, you should have a good understanding of how the directive command works.

# Directive communication with the Parent Scope
We have also mentioned briefly before that direcitve directives have their own independent scope, so they can be reused in different projects and change their contents according to different parent scopes. Let's discuss how different scopes communicate with each other.

Let's assume that you define the following independent scope in the directive directive:

```javascript
scope: {              // set up directive's isolated scope
  name: "@",          // name var passed by value (string, one-way)
  amount: "=",        // amount var passed by reference (two-way)
  save: "&"           // save command
},
```

And the directive directive is used as follows:

```xml
<my-dir
  name="{{customerName}}"
  amount="customerCredit"
  save="saveCustomer()"
/>
```

You should note that the contents of the 'name' attribute are enclosed in curly braces, while 'amount' is not, because 'name' is the type of value passed. If there are no curly braces, the string 'customerName' will be passed in, and the use of curly braces is to tell AngularJS to calculate its value before passing it in, similarly, because 'amount' is a reference type, so there is no need to write curly braces.

Inside the directive directive, you can easily read the value of the corresponding variable through the 'scope' object:

```javascript
var name = scope.name;
var amount = scope.amount;
```

The above two sentences of code immediately get the corresponding variable value, change the corresponding variable value in its parent scope, and cannot get its latest value here. To get notified of the value change, we can listen using the 'scope.$watch' method, which is defined as follows:

```javascript
scope.$watch(watchExpression, listenerFunction, objectEquality);
```

'watchExpression' is the variable you need to listen to (we're here 'name' and 'amount'), 'listenerFunction' is the method that triggers execution after the listening variable is modified, and this method will be responsible for updating the directive directive with the latest value.

The last parameter, 'objectEquality', determines whether AngularJS compares the old and new values of the variable, and if set to true, AngularJS will compare the old and new values in depth (traversing the data structure comparison, not just comparing whether the references are consistent). This is important when the variable is of reference type ("="), for example, if the variable is a complex type, setting it to true will cause the 'listenerFunction' to perform a deep comparison before being called, even if the reference has not changed (in most cases we are only modifying individual properties in the complex type, so the reference has not changed)

Well, going back to our example, you can listen for variable changes like this:

```javascript
scope.$watch("name", function(newValue, oldValue, srcScope) {
   handle the new value of "name"
});
scope.$watch("amount", function(newValue, oldValue, srcScope) {
   handle the new value of "amount"
});
```

Note that the 'listernerFunction' method passes in the old and new values, as well as the scope object, which is usually not used by scope, after all, the new value can already be read directly, but sometimes it is necessary to understand the situation of other variables. There is a special case where the old and new values will be the same when initializing.

In our example, the 'amount' variable is a reference type, and its parent scope will most likely listen for changes as we did here.

In most cases, you don't need to do anything specifically for this, and AngularJS automatically detects the change when the user interacts or the program executes to change the value. There are exceptions, however, AngularJS cannot detect changes caused by DOM events, setTimeout, XHR, or third-party libraries, in which case we need to manually call the 'scope.$apply' method, which will be broadcast to all listeners.

Suppose we have a method 'updateAmount' that does some calculations and modifies the amount property, and we would write the code like this:

```javascript
function updateAmount() {
   update the amount value
  scope.amount = scope.amount * 1.12;
   inform listeners of the change
  if (!scope.$$phase) scope.$apply("amount");
}
```

The 'scope.$$phase' variable is managed by AngularJS to indicate whether the scope variable is being updated, and avoid calling the '$apply' method during the update process by judging its value.

In a word, 'scope.$watch' receives change notifications, and 'scope.$apply' sends change notifications (but it is generally not used)

Again, as the old saying goes, the best way to learn is to practice, you can <http://jsfiddle.net/Wijmo/aX7PY/>try it here, this example defines a controller and a directive, both of which have methods that change the data in the array, and both listen and make 'apply' requests, you can try to combine 'scope.$watch' and 'scope.$apply' Comment it out to see the effect.

# Common code/dependency injection
Sometimes you need to write common code for multiple directive directives to call, of course, you definitely don't want to copy the code to use multiple copies, so it is necessary to put the common code together and expose it to all directive directives.

You can do this with the 'factory' module, in the following code we define a module called 'myUtil':

```javascript
 the module
var app = angular.module("app", []);

 utilities shared by all directives
app.factory("myUtil", function () {
  return {
     watch for changes in scope variables
     call update function when all have been initialized
    watchScope: function (scope, props, updateFn, updateOnTimer) {
      var cnt = props.length;
      angular.forEach(props, function (prop) {
        scope.$watch(prop, function (value) {
          if (--cnt <= 0) {
            if (updateOnTimer) {
              if (scope.updateTimeout) clearTimeout(scope.updateTimeout);
              scope.updateTimeout = setTimeout(updateFn, 50);
            } else {
              updateFn();
            }
          }
        })
      })
    },

 change the value of a scope variable and notify listeners
    apply: function (scope, prop, value) {
      if (scope[prop] != value) {
        scope[prop] = value;
        if (!scope.$$phase) scope.$apply(prop);
      }
    }
  )
});
```

There are two methods in the 'myUtil' module above:
* 'watchScope': listens for a series of variable changes, calls the 'updateFn' method when it changes, and eliminates the case of directive initialization, while also supporting timeouts to ensure that callbacks are not updated too frequently
* 'apply': Modify variables and notify the AngularJS system using the 'scope.$apply' mechanism (only if the old and new values are different)

We can use the method just defined as follows:

```javascript
app.directive("myDir", ["$rootScope", "myUtil", 
               function ($rootScope,   myUtil) {
  return {
    restrict: "E",
    scope: {
      v1: "@", v2: "@", v3: "@", v4: "@", v5: "@", v6: "@"
    },
    template: "<div/>",
    link: function (scope, element, attrs) {
      var ctr = 0,
          arr = ["v1", "v2", "v3", "v4", "v5", "v6"];
      myUtil.watchScope(scope, arr, updateFn);
      function updateFn() {
        console.log("# updating my-dir " + ++ctr);
         modify DOM here
      }
    }
  }
}]);
```

As you can see, we can simply add a myUtil 'factory' module, so that all its methods can be called by the directive directive.

You can see the runnable instance here: <http://jsfiddle.net/Wijmo/GJm9M/>

Although it seems simple, AngularJS has a number of mechanisms inside to ensure that the job is done this easily, it checks the directive directive, finds the "myUtil" parameter, finds the corresponding 'factory' module based on that name, and then injects the reference into it. Dependency injection is a big topic, I won't go into detail here, if you are interested, you can take a look at [AngularJS documentation] (http://docs.angularjs.org/guide/di)

Officially, because dependency injection relies on names, there are some problems when concentrating code. When you're ready to condense your code for production, automatic renaming of variables by the code reduction tools breaks normal dependency injection. To solve this problem, AngularJS allows you to define module elements as arrays of strings. In the example above, you can notice that there are two strings before the real method is constructed, which causes AngularJS to find the corresponding module as a string.

> **Note: If you are going to condense your directive instructions, you must do so in the form of string array declarations where all direcitive directives or controllers need parameters. This situation is not well documented in the official documentation. The Bootstrap tab example in [AngularJS homepage] (http://angularjs.org/#components-js) is not condensed, but this is condensed: <http://jsfiddle.net/Wijmo/ywUYQ/>
For 'factory' to put it alone, there are three other types of concepts similar in AngularJS: 'provider', 'service' and 'value', and the difference is very small, at least I have been using 'factory' since Angular and have not found a need to use other types of things.

# Example

## Bootstrap folding instructions

## Google Maps directive

## Wijmo chart instructions

## Wijmo table directive

# More directives

# Conclusion

# Reference
