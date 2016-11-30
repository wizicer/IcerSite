title: 使用AngularJS指令扩展HTML语法
tags:
- Javascript
- HTML
categories:
- 冰河杂谈
date: 2013-7-7
---

译者：[冰河魔法师](http://icerdesign.com)
原文：[Extending HTML with AngularJS Directives](http://www.codeproject.com/Articles/607873/Extending-HTML-with-AngularJS-Directives)

# AngularJS介绍
AngularJS是Google推出的Web应用开发框架，它提供了一系列的核心功能，它们不但结合的很好，而且还是按照易于扩展的方式设计的，包括有数据绑定，操作文档对象模型(DOM)，路由/视图管理，模块载入等等。

AngularJS不仅仅只是一个类库，它提供了一套完整的框架，因此它能使你在开发时不用去考虑使用各种其他的类库，同时它是来自开发了Chrome（译者注：当然不要忘记它们家的Chrome Book）的Google，它们一直在为创建下一代Web应用程序而努力（有兴趣可以看看[Polymer](http://www.polymer-project.org/)项目），我相信在五到十年后，我们不会再使用AngularJS来开发Web应用程序，不过我们一定会使用另外一个与其类似的框架。

对我来说，AngularJS中最令人兴奋的特性就是可以编写自定义指令(Directive)，自定义指令可以让你用新的标签或者属性来扩展HTML。指令可以跨项目的重复使用，并且和.NET中的自定义控件很像。

> 译者注：Directive可被翻译为指令，不过因为代码中也会用到该命令，故后文都保留为directive

在本文中包含了基于Bootstrap、Google JavaScript APIs和Wijmo的差不多50个自定义指令的示例。示例都有完整的注释和文档，这应该会是开始写你自己的指令的很好参考。你可以在这里查看[线上示例](http://demo.componentone.com/wijmo/Angular/AngularExplorer/AngularExplorer)。

创建指令并裁剪到你所需要程度是非常简单的，所有的指令都是可以在多个项目中被测试、维护和重用的，正确的实现方式可以让你的指令被轻松的重用或增强，甚至都不需要改动一行代码。

本文主要关注指令，不过在我们进入到正题前，还是让我们快速的过一下AngularJS的基本功能。

要使用AngularJS，必须在HTML页面中添加引用，并且添加`ng-app`属性到HTML或者BODY标签上，具体可见如下示例：

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

当AngularJS载入后，它会扫描整个文档中的`ng-app`属性，这个标签通常都设置为应用程序的主模块？？，一旦`ng-app`属性被发现了，Angular会处理整个文档，载入主模块及其依赖模块、扫描全文档中的自定义指令以及一系列操作。

在以上的示例中，`ng-init`属性为`msg`变量赋入初值`hello world`，并且用`ng-model`属性将这个变量的值绑定到一个输入框元素。用大括号括起来一段文字来表示绑定表达式。AngularJS会计算表达式并在值发生任何变化的时候重新计算并更新至文档中。你可以看这个示例：<http://jsfiddle.net/Wijmo/HvSQQ/>

# AngularJS模块(Module)
模块对象充当了AngularJS应用程序的根(Root)的作用，其中有对象`config`,`controller`,`factory`,`filter`,`directive`和一些其他的。

如果你熟悉.NET并且不熟悉Angular，那么下表中的类比会让你更容易的理解AngularJS中的不同对象：

| AngularJS        | .NET           | 说明                       |
|------------------|----------------|----------------------------|
| module           | Assembly       | 应用程序构建块             |
| controller       | ViewModel      | 包含逻辑并暴露给视图(View) |
| scope            | DataContext    | 提供可以绑定到视图的数据   |
| filter           | ValueConverter | 在数据真实展现前进行修改   |
| directive        | Component      | 可重用的界面元素           |
| factory, service | 工具类         | 给其他模块元素提供服务     |

以下这段代码创建了一个模块，并包含了controller, filter和directive

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

`module`方法需要传入模块名字和依赖的模块列表。在以上示例中，我们创建的模块不需要依赖任何其他模块，所以传入的空列表。注意依赖列表即便是空的也必须被显式传入，不传的话会导致AngularJS取到上一个命名模块，我们将会在下一章节进一步讨论。

`controller`方法会暴露`$scope`对象，通过该对象可以访问controller的所有属性和方法，该对象由Angular管理并传递给view和directive。在以上示例中，这个controller只添加了一个`msg`属性到scope中去。一个应用程序模块可以有多个controller，每一个都负责一个或多个view，controller并不一定需要是模块的成员，不过最佳实践是使其成为模块成员。

`filter`方法会返回一个用来修改input的方法，Angular只提供了少量的几个filter，不过你可以添加你自己的，并且是和官方的一样的使用方法。在以上示例中，我们就定义了一个filter用来将字符串全转成大写字母。filter不仅仅可以用来格式化内容，同时还可以修改数组，由AngularJS提供的格式化filter有`number`,`date`,`currency`,`uppercase`,`lowercase`，数组filter则有`filter`,`orderBy`和`limitTo`。filter可以带参数，格式为：`值 | filter名字 : filter参数1 : filter参数2 ...`

`directive`方法的第二个参数同样是返回一个方法，这个方法可以取得一个元素（绑定该指令的元素）并可以根据scope来修改它，在以上示例中，我们分别绑定了两个事件`mouseenter`和`mouseleave`用来实现鼠标悬浮时高亮的功能。这是我们的第一个directive，粗略的演示了它能做到什么。AngularJS的directive可以用作属性、元素或甚至是注释，并可嵌套和互通。我们将会在后续的章节理讲到更多。

这里有使用以上模块的示例：

```html
<body ng-app#"myApp" ng-controller"myCtrl">
  <input ng-model="msg" />
  <p my-dctv >
    {{ msg | myUpperFilter }}
  </p>
</body>
```

你可以在这里查看可运行实例：<http://jsfiddle.net/Wijmo/JKBbV/>

注意应用模块、controller以及filter的名字都被当作属性的`值`，它们反映了具体的JavaScript对象，所以它们是区分大小写的。

而directive的名字，是用作属性的`名字`，它修饰一个HTML元素，所以它是不区分大小写的，不过AngularJS会将驼峰式命名(camel-cased)转成连字号分隔命名(hyphen-separated)的字符串。所以`myDctv`就变成了`my-dctv`。你应该会注意到系统的directive`ngApp`,`ngController`和`ngModel`就变成了`ng-app`,`ng-controller`和`ng-model`

# 工程文件组织
AngularJS本来的设计就是可以支持大工程的，工程中可以包含许多模块，将不同的模块放入不同的文件，然后按照你喜欢的方式来管理这些文件。我见过许多项目都是遵循了Brian Ford在其博文[Building Huuuuuge Apps with AngularJS](http://briantford.com/blog/huuuuuge-angular-apps.html)中描述的规范，一句话说来就是一个模块一个文件，然后按类型归类。因此controller就放在`controllers`目录中（并命名为`XXXCtrl`），directive指令就放在`directives`目录中（并命名为`XXXDctv`

通常情况，一个标准的项目目录结构如下：

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

比如说如果你想要使用一个模块，那就像如下那样将其定义在`app.js`文件中：

```javascript
// app.js
angular.module("appModule", []);
```

为了将元素加到模块中去，你需要传入模块名字并获得其实例，之后便可以像以前一样对该实例进行操作，比如说`formatFilter.js`文件的内容会长成如下样子：

```javascript
// formatFilter.js
// retrieve module by name
var app = angular.module("appModule");

// add a filter to the module
app.filter("formatFilter", function() {
  return function(input, format) {
    return Globalize.format(input, format);
  }
}})
```

如果你的应用程序包含了多个模块，请记得为每一个模块指定依赖项，比如说一个应用程序包含`app`,`controls`和`data`三个模块，那我们可以用如下方式进行设置：

```javascript
// app.js (the main application module, depends on "controls" and "data" modules)
angular.module("app", [ "controls", "data"])

// controls.js (the controls module, depends on "data" module)
angular.module("controls", [ "data" ])

// data.js (the data module, no dependencies)
angular.module("data", [])
```

在你的应用程序主页面中需要用`ng-app`指令来指定主模块，之后AngularJS会自动的将其所有依赖项引入：

```html
<html ng-app="app">
...
</html>
```

之后，主页面及其视图(view)就可以使用在那三个模块中已经定义的元素。

如果您想看使用以上方式组织的相当大的工程实例，请参见[线上示例](http://demo.componentone.com/wijmo/Angular/AngularExplorer/AngularExplorer)

好了，您已经对AngularJS的基本知识有一定的了解了，是时候开始我们的主题：directive指令，在接下来的章节中我们将讲解一些基本概念并创建一些directive指令，以此来说明它能做到些什么。

# AngularJS指令：为什么要学习如何实现？
我早先有提过，对我来说directive指令是AngularJS中最令人兴奋的特性，这是因为它的独一无二，在AngularJS中的其他特性大都可以在其他框架中找到。不但如此，能够在纯HTML中创建可重用组件的方式实在是非常的强大。以我对现今的Web应用程序框架的了解，AngularJS的确是唯一一个支持该特性的。

现在已有一些JavaScript的产品给开发者提供了控件使用，比如说，非常流行的前端框架Bootstrap就能提供样式及一些组件，但问题是，为了使用这些组件，做HTML开发的设计师必须切换到JavaScript模式并编写jQuery代码来激活面板。的确jQuery已经足够简单了，但它依旧需要设计师人工的去和HTML标签同步，这样不但枯燥乏味、容易出错还不宜扩展。

在AngularJS的主页上有一个将Bootstrap的面板组件包装起来方便使用的简单directive指令。如下，使用directive指令后使得面板更加的方便，同时还可以轻松的复用和分享：

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

你可以在这里查看可运行实例：<http://jsfiddle.net/Wijmo/ywUYQ/>

你可以看到除开有`<tabs>`和`<pane>`这样的directive命令标签之外，这页就像一个普通的HTML。所以做HTML开发的设计师根本就不用写任何的JS代码，当然这个需要有人提前将directive命令写出来，不过这个一旦写出来后就可以到处重用而不用改代码的。

正因为directive指令如此的有用且并不是那么难写，所以已经有很多人将热门的类库都搬过来了。比如说，AngularJS团队就已经为Bootstrap创建了一系列的directive指令：[UI Bootstrap](http://angular-ui.github.io/bootstrap/)；ComponentOne也将自己Wijmo库写成了directive指令：[Wijmo Library](http://wijmo.com/angularjs-components-preview/)；还有一些为jQueryUI编写的：[jQueryUI widgets](https://github.com/wlepinski/angularjs-jqueryui)

诶？等等，如果已经有这么多已经做好了的directive指令可以直接使用，为什么我们还要学会去如何创建？这的确是个好问题，我想有以下几个理由让你需要继续学习：
* **有可能你需要的directive指令还暂无人实现** 。有可能你想使用的类库正好还没人实现了，而你也不想等着别人实现。当然也可能是你不喜欢别人的实现方式，或者你想改进它。
* **你自己可能会有特殊的需求** 。比如说你在一个金融企业工作，需要在许多应用程序中都使用某一种固定样式的表单，这个表单可能是一个datagrid，并使用特定的方式下载、编辑、验证和回传数据，我想很难会有在你们公司之外的人会创建一个类似的功能给你直接使用。不过你可以自己创建一个自定义directive指令，并让同组的HTML设计师来像如下那样使用：<br>
```xml
<body ng-app="abcFinance">
  <h3>Offshore Investment Summary</h3>
  <abc-investment-form
    customer="currentCustomer"
    country="currentCountry">
  </abc-investment-form>
</body>
```
directive指令`abcInvectmentForm`可以被一致的重用到很多应用程序。我们只要统一的维护directive指令，根据新的业务需求修改后便可以很容易的反映到所有应用程序上去。

好了，读到这里我想你一定是想知道如何实现，并迫不及待的想知道如何实现的，OK，我们开始吧。

# AngularJS指令：如何实现？
在文章开头演示的directive指令非常的简单，仅仅引向了一个方法，而一个典型的directive指令则包含更多的元素：

```javascript
// create directive module (or retrieve existing module)
var m = angular.module("myApp");

// create the "my-dir" directive 
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
    controller: [ "$scope", function ($scope) { …  }],
    link: function (scope, element, attrs, controller) {…}
  }
});
```

注意directive指令的命名规则：`my`前缀可比作是命名空间(namespace)，所以如果应用程序使用了来自不同模块的directive指令，我们可以很容易知道是在哪里定义的。当然这并非要求，不过这是让项目更容易理解的推荐实践。

`directive`构造器需要返回一个有许多属性的对象，在AngularJS的站点上都有完整的文档，不过内容都比较精简，所以我还是在这里尽我可能的解释一下： 
* `restrict`: 决定directive指令是否可以用在HTML中，可选项有"A","E","C","M"，分别代表属性(Attribute)、元素(Element)、类(Class)、注释(Comment)，默认为"A"属性。在这里我们更关心元素，因为我们需要创建类似于`tab`这样的元素(标签)。
* `scope`: 创建一个仅属于directive指令的独立作用域，作用域变量是以directive指令的属性方式传入的。当我们创建可复用组件的时候，不应去依赖父作用域（ _译者注：说白了，就是按照创建静态方法的方式把变量传入，不要用全局变量就可以了_ ），于是独立作用域的作用就非常重要了。`scope`作用域对象定义了作用域变量（局部变量）的名字和类型，在示例中定义了三种作用域变量（局部变量）
  * `name: "@" (单向值类型)`: @符号标明这个变量是传递值类型的，directive指令可以从其调用者那里获得具体值并使用，但是却不能改变其调用者那里的值，因此是独立的，这个是用得最频繁的一种类型。
  * `amount: "#" (双向引用类型)`: 符号标明这个变量是传递引用类型的，directive指令不但可以从其调用者那里获得具体值，同时还可以改变其值，并反映到父作用域中。通常情况会在directive指令需要修改父作用域中值的时候（比如说编辑器控件），或者需要传入的值是复杂类型不易序列化为字符串，或者是值结构很复杂以致序列化为字符串的开销很大。
  * `save: "&" (表达式)`: &符号标明该变量保存一个在父作用域上下文(Context)中执行的表达式，它让directive指令可以执行具体动作（ _译者注：其实就是回调函数_ ）
* `template`: 用来替换原始标签的模板字符串，原始标签内的东西会被完全替换掉，而模板中使用的变量需存在于独立作用域，在这里你可以写一些类似于宏的指令。不过可能大多数情况在这个字段里可能只有一个空的`<div>`，然后再由下面会讨论到的`link`方法来生成内容。
* `replace`: 决定是否要用上面定义的模板来替换原始的标签，默认值是`false`，表示保留原标签并将模板的内容附加在其后。
* `transclude`: 决定是否复制原始标签之间的内容。例如在前文中的tab指令的标签内还有其他的HTML内容，就设为了true，否则若其间完全没有HTML内容，那就设为flase或者直接就忽略它让其保持默认值。
* `link`: 这个方法包含了directive指令的主要逻辑，是用来操作DOM、监听事件等，它有如下参数
  * `scope`: 关联到directive指令的独立作用域，默认所有其中的变量均为`undefined`，所以就需要在程序逻辑中监听变量变化的事件。
  * `element`: 关联到包含本directive指令的DOM元素，`link`方法默认使用`jQuery`操作元素（若无`jQuery`加载，则默认载入Angular自带的`jqLite`）
  * `controller`: 在有嵌套directive指令的情况，该参数会提供子directive指令的引用，这样两级的directive指令就可以互相通信了。我们之前讨论过的`tab`directive指令应该能让你更容易理解：<http://jsfiddle.net/Wijmo/ywUYQ/>

注意当`link`方法被调用的时候，作用域中值类型("@")是还没有初始化的，如果你希望在后来某个时间点当变量发生变化的时候得到通知那就应该使用`scope.$watch`命令，这个将会在下一节中讨论。

如果你到现在还没能熟悉directive指令，那么深入理解的最好方式就是亲自尝试一下编写代码，你可以在这里尝试：<http://jsfiddle.net/Wijmo/LyJ2T/>

在上面的示例中，定义了一个controller及其三个成员`customerName`, `creadit`和`save`。还定义了一个和本节示例中差不多的directive命令，在独立作用域中有三个成员`name`, `amount`和`save`。而HTML部分则向你展示了如何在标准HTML中使用directive指令。你可以使者修改HTML标签、独立作用域中的变量、模板等等。尝试之后，你应该会对directive指令如何工作有较为深刻的认识了。

# 指令与父作用域(Parent Scope)的通信
之前我们也已经粗略的提到过direcitve指令有自己的独立作用域，因此它们能在不同的工程中重复使用并根据不同的父作用域改变其内容。我们接下来就讨论一下不同的作用域之间是如何通信的。

我们假设你在directive指令中定义了如下的独立作用域：

```javascript
scope: {              // set up directive's isolated scope
  name: "@",          // name var passed by value (string, one-way)
  amount: "=",        // amount var passed by reference (two-way)
  save: "&"           // save command
},
```

并且directive指令是按照如下方式使用的：

```xml
<my-dir
  name="{{customerName}}"
  amount="customerCredit"
  save="saveCustomer()"
/>
```

你应该注意到`name`属性的内容是由大括号括上的，而`amount`则不是，这是因为`name`是传递的值类型。若无大括号，则会将字符串`customerName`传递进去，使用大括号就是告诉AngularJS先计算其值再将其传入，相似的，因为`amount`是引用类型，所以不需要写大括号。

在directive指令内部可以很轻松的通过`scope`对象读取相应变量值：

```javascript
var name = scope.name;
var amount = scope.amount;
```

以上两句代码可以立即获得相应变量值，在其父作用域中改变了对应变量值，在此处也无法获得其最新值。为了获得值改变的通知，我们可以使用`scope.$watch`方法进行监听，该方法的定义如下：

```javascript
scope.$watch(watchExpression, listenerFunction, objectEquality);
```

`watchExpression`是你需要监听的变量（我们这里就是`name`和`amount`），`listenerFunction`是在监听变量被修改后触发执行的方法，这个方法将会负责根据最新值更新directive指令。

最后一个参数`objectEquality`决定AngularJS是否要比较变量的新老值，如果设为true，那么AngularJS将会深度比较新老值（遍历数据结构比较，而非仅仅比较引用是否一致）。当变量为引用类型("=")时，这会非常重要，比如说变量是个复杂类型，将其设为true就会使得`listenerFunction`被调用前先执行深度比较，即便引用并没有发生变化（大部分情况我们都仅是修改复杂类型中的个别属性，故引用是没有发生变化的）

好，回到我们的示例，你可以像如下的方式监听变量的变化：

```javascript
scope.$watch("name", function(newValue, oldValue, srcScope) {
  // handle the new value of "name"
});
scope.$watch("amount", function(newValue, oldValue, srcScope) {
  // handle the new value of "amount"
});
```

注意`listernerFunction`方法分别传入了新旧值，以及scope对象，通常情况scope都用不到，毕竟新值已经可以直接读取，不过有些时候还是需要了解其他变量的情况。有一种特殊情况，在初始化的时候新老值会是一样的。

在我们的示例中，`amount`变量是引用类型，其父作用域很有可能也会像我们这里一样监听着其变化。

大多数情况，你都不需要专门为此做什么，当用户交互或者程序执行让值改变时，AngularJS会自动检测到变化。不过也有例外，AngularJS是无法检测到由DOM事件、setTimeout、XHR或是三方库产生的变化，在这种时候，我们需要手动的调用`scope.$apply`方法，这个会广播给所有监听者。

假设我们有一个方法`updateAmount`会做一些计算并修改amount属性，我们会这样写代码：

```javascript
function updateAmount() {
  // update the amount value
  scope.amount = scope.amount * 1.12;
  // inform listeners of the change
  if (!scope.$$phase) scope.$apply("amount");
}
```

`scope.$$phase`变量是由AngularJS管理的，标明是否正在更新scope变量，通过判断其值来避免在更新过程中调用`$apply`方法。

一句话说就是`scope.$watch`接收变化通知，`scope.$apply`发出变化通知（不过一般用不到）

还是那句老话，学习的最好方式是实践，你可以在这里<http://jsfiddle.net/Wijmo/aX7PY/>尝试一下，这个示例定义了一个controller和一个directive指令，其中都有方法会改变数组中的数据，并且都会监听和发出`apply`请求，你可以试着将`scope.$watch`和`scope.$apply`注释掉看看效果。


# 公共代码/依赖注入
有时候你会需要编写公共代码以供多个directive指令调用，当然，你绝对不会希望把代码复制多份来使用，所以我们有必要把公共代码集合到一起并统一暴露给所有directive指令使用。

你可以通过`factory`模块来实现，在如下代码中我们定义了一个名为`myUtil`的模块：

```javascript
// the module
var app = angular.module("app", []);

// utilities shared by all directives
app.factory("myUtil", function () {
  return {
    // watch for changes in scope variables
    // call update function when all have been initialized
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

    // change the value of a scope variable and notify listeners
    apply: function (scope, prop, value) {
      if (scope[prop] != value) {
        scope[prop] = value;
        if (!scope.$$phase) scope.$apply(prop);
      }
    }
  )
});
```

在上述的`myUtil`模块中包含两个方法：
* `watchScope`: 监听一系列的变量变化，在其变化时回调`updateFn`方法，并能排除directive指令初始化的情况，同时还支持超时时间以保证回调更新不会过于频繁
* `apply`: 修改变量并使用`scope.$apply`机制通知AngularJS系统(只有新旧值不同时才执行)

我们可以以如下方式使用刚才定义的方法：

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
        // modify DOM here
      }
    }
  }
}]);
```

由此可以看出，我们可简单的添加一个myUtil的`factory`模块，于是其所有方法都可以被directive指令调用了。

你可以在这里查看可运行实例：<http://jsfiddle.net/Wijmo/GJm9M/>

尽管看上去很简单，AngularJS内部却有不少机制在确保可以这样简单的完成工作，它会检查directive指令，发现有"myUtil"参数，然后根据这个名字去找到对应的`factory`模块，接着就将引用注入进去。依赖注入是一个大主题，这里就不细究了，有兴趣可以看看[AngularJS的文档](http://docs.angularjs.org/guide/di)

正式因为依赖注入是依靠名字来进行的，于是在浓缩(minification)代码的时候会有些问题。当你准备浓缩代码并用于生产环境的时候，缩减代码工具对变量的自动更名会破坏正常的依赖注入。为了解决这个问题，AngularJS允许你使用字符串数组的方式定义模块元素。在上面这个示例里，你可以注意到在真正的方法构造前有两个字符串，这个会使得AngularJS以字符串的方式去寻找对应的模块。

> **特别注意:** 如果你准备对你的directive指令做浓缩，你必须在所有direcitive指令或controller需要带参数的地方以字符串数组申明的方式进行。这个情况并没有被很好的记入官方文档。在[AngularJS首页](http://angularjs.org/#components-js)的Bootstrap的tab示例并没有被浓缩，不过这个是浓缩过的：<http://jsfiddle.net/Wijmo/ywUYQ/>

对于`factory`多说一句，在AngularJS中还有另外三个理念差不多的类型：`provider`, `service`和`value`，它们的区别非常的微小，至少我是从开始Angular就一直使用`factory`，还一直没有找到使用其他类型的需求。

# 示例

## Bootstrap折叠指令

## Google地图指令

## Wijmo图表指令

## Wijmo表格指令

# 更多的指令

# 结论

# 参考
