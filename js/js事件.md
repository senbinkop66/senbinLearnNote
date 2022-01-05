# 事件

JavaScript 与 HTML 的交互是通过事件实现的，事件代表文档或浏览器窗口中某个有意义的时刻。 可以使用仅在事件发生时执行的监听器（也叫处理程序）订阅事件。在传统软件工程领域，这个模型叫 “观察者模式”，其能够做到页面行为（在 JavaScript 中定义）与页面展示（在 HTML 和 CSS 中定义）的 分离。 

事件最早是在 IE3 和 Netscape Navigator 2 中出现的，当时的用意是把某些表单处理工作从服务器转 移到浏览器上来。到了 IE4 和 Netscape Navigator 3 发布的时候，这两家浏览器都提供了类似但又不同的 API，而且持续了好几代。DOM2 开始尝试以符合逻辑的方式来标准化 DOM 事件 API。目前所有现代 浏览器都实现了 DOM2 Events 的核心部分。IE8 是最后一个使用专有事件系统的主流浏览器。 

浏览器的事件系统非常复杂。即使所有主流浏览器都实现了 DOM2 Events，规范也没有涵盖所有的 事件类型。BOM 也支持事件，这些事件与 DOM 事件之间的关系由于长期以来缺乏文档，经常容易被 混淆（HTML5 已经致力于明确这些关系）。而 DOM3 新增的事件 API 又让这些问题进一步复杂化了。 根据具体的需求不同，使用事件可能会相对简单，也可能会非常复杂。但无论如何，理解其中的核心概 念还是最重要的。

## 1 事件流

在第四代 Web 浏览器（IE4 和 Netscape Communicator 4）开始开发时，开发团队碰到了一个有意思 的问题：页面哪个部分拥有特定的事件呢？要理解这个问题，可以在一张纸上画几个同心圆。把手指放 到圆心上，则手指不仅是在一个圆圈里，而且是在所有的圆圈里。两家浏览器的开发团队都是以同样的 方式看待浏览器事件的。当你点击一个按钮时，实际上不光点击了这个按钮，还点击了它的容器以及整 个页面。 

**事件流描述了页面接收事件的顺序**。结果非常有意思，IE 和 Netscape 开发团队提出了几乎完全相 反的事件流方案。IE 将支持事件冒泡流，而 Netscape Communicator 将支持事件捕获流。

### 1.1 事件冒泡

**IE 事件流被称为事件冒泡**，这是因为事件被定义为从最具体的元素（文档树中最深的节点）开始触发，然后向上传播至没有那么具体的元素（文档）。比如有如下 HTML 页面：

```html
<!DOCTYPE html>
<html>
    <head>
    	<title>Event Bubbling Example</title>
    </head>
    <body>
    	<div id="myDiv">Click Me</div>
    </body>
</html>
```

在点击页面中的<div>元素后，click 事件会以如下顺序发生：
(1) <div>
(2) <body>
(3) <html>
(4) document

也就是说，<div>元素，即被点击的元素，最先触发 click 事件。然后，click 事件沿 DOM 树一路向上，在经过的每个节点上依次触发，直至到达 document 对象。

**所有现代浏览器都支持事件冒泡**，只是在实现方式上会有一些变化。IE5.5 及早期版本会跳过<html>元素（从<body>直接到 document）。**现代浏览器中的事件会一直冒泡到 window 对象。**

### 1.2 事件捕获

Netscape Communicator 团队提出了另一种名为事件捕获的事件流。**事件捕获的意思是最不具体的节 点应该最先收到事件，而最具体的节点应该最后收到事件。**事件捕获实际上**是为了在事件到达最终目标 前拦截事件**。如果前面的例子使用事件捕获，则点击<div>元素会以下列顺序触发 click 事件：

(1) document
(2) <html>
(3) <body>
(4) <div>

在事件捕获中，click 事件首先由 document 元素捕获，然后沿 DOM 树依次向下传播，直至到达实际的目标元素<div>。

虽然这是 Netscape Communicator 唯一的事件流模型，但**事件捕获得到了所有现代浏览器的支持**。实际上，**所有浏览器都是从 window 对象开始捕获事件**，而 **DOM2 Events 规范规定的是从 document 开始**。

由于旧版本浏览器不支持，因此实际当中几乎不会使用事件捕获。通常建议使用事件冒泡，特殊情况下可以使用事件捕获。

### 1.3 DOM 事件流

DOM2 Events 规范规定事件流分为 3 个阶段：*事件捕获、到达目标和事件冒泡*。**事件捕获最先发生**，为提前拦截事件提供了可能。然后，实际的目标元素接收到事件。**最后一个阶段是冒泡**，最迟要在这个阶段响应事件。仍以前面那个简单的 HTML 为例，点击<div>元素会以如图 17-3 所示的顺序触发事件。

![DOM 事件流](E:\pogject\学习笔记\image\js\DOM 事件流.png)

在 DOM 事件流中，**实际的目标（<div>元素）在捕获阶段不会接收到事件**。这是因为捕获阶段从 document 到<html>再到<body>就结束了。下一阶段，即会在<div>元素上触发事件的“到达目标” 阶段，**通常在事件处理时被认为是冒泡阶段的一部分**（稍后讨论）。然后，冒泡阶段开始，事件反向传 播至文档。

大多数支持 DOM 事件流的浏览器实现了一个小小的拓展。虽然 DOM2 Events 规范明确捕获阶段不命中事件目标，但**现代浏览器都会在捕获阶段在事件目标上触发事件**。最终结果**是在事件目标上有两个机会来处理事件**。

**注意** 所有现代浏览器都支持 DOM 事件流，只有 IE8 及更早版本不支持。

## 2 事件处理程序

事件意味着用户或浏览器执行的某种动作。比如，单击（click）、加载（load）、鼠标悬停 （mouseover）。为响应事件而调用的函数被称为**事件处理程序（或事件监听器**）。事件处理程序的名字 **以"on"开头**，因此 click 事件的处理程序叫作 onclick，而 load 事件的处理程序叫作 onload。有 很多方式可以指定事件处理程序。

### 2.1 HTML 事件处理程序

特定元素支持的每个事件都可以使用事件处理程序的名字以 HTML 属性的形式来指定。此时属性 的值必须是能够执行的 JavaScript 代码。例如，要在按钮被点击时执行某些 JavaScript 代码，可以使用以 下 HTML 属性：

```html
<input type="button" value="Click Me" onclick="console.log('Clicked')"/>
```

点击这个按钮后，控制台会输出一条消息。这种交互能力是通过为 onclick 属性指定 JavaScript 代码值来实现的。注意，因为属性的值是 JavaScript 代码，所以不能在未经转义的情况下使用 HTML 语 法字符，比如和号（&）、双引号（"）、小于号（<）和大于号（>）。此时，为了避免使用 HTML 实体， 可以使用单引号代替双引号。如果确实需要使用双引号，则要把代码改成下面这样：

```html
<input type="button" value="Click Me" onclick="console.log(&quot;Clicked&quot;)"/>
```

在 HTML 中定义的事件处理程序可以包含精确的动作指令，**也可以调用在页面其他地方定义的脚本**，比如：

```html
<script>
    function showMessage() {
    	console.log("Hello world!");
    }
</script>
<input type="button" value="Click Me" onclick="showMessage()"/>
```

在这个例子中，单击按钮会调用 showMessage()函数。showMessage()函数是在单独的<script> 元素中定义的，而且也可以在外部文件中定义。**作为事件处理程序执行的代码可以访问全局作用域中的 一切。** 

以这种方式指定的事件处理程序有一些特殊的地方。首先，**会创建一个函数来封装属性的值**。**这个 函数有一个特殊的局部变量 event，其中保存的就是 event 对象**.

```html
<!-- 输出"click" -->
<input type="button" value="Click Me" onclick="console.log(event.type)">
```

有了这个对象，就不用开发者另外定义其他变量，也不用从包装函数的参数列表中去取了。

在这个函数中，**this 值相当于事件的目标元素**，如下面的例子所示：

```html
<!-- 输出"Click Me" -->
<input type="button" value="Click Me" onclick="console.log(this.value)">
```

这个动态创建的包装函数还有一个特别有意思的地方，就是**其作用域链被扩展了**。在这个函数中，**document 和元素自身的成员都可以被当成局部变量来访问**。这是通过使用 with 实现的：

```js
function() {
    with(document) {
        with(this) {
        	// 属性值
        }
    }
}
```

这意味着**事件处理程序可以更方便地访问自己的属性**。下面的代码与前面的示例功能一样：

```js
<!-- 输出"Click Me" -->
<input type="button" value="Click Me" onclick="console.log(value)">
```

**如果这个元素是一个表单输入框，则作用域链中还会包含表单元素**，事件处理程序对应的函数等价于如下这样：

```js
function() {
    with(document) {
        with(this.form) {
            with(this) {
            	// 属性值
            }
        }
    }
}
```

本质上，经过这样的扩展，**事件处理程序的代码就可以不必引用表单元素**，**而直接访问同一表单中的其他成员了**。下面的例子就展示了这种成员访问模式：

```html
<form method="post">
	<input type="text" name="username" value="">
	<input type="button" value="Echo Username" onclick="console.log(username.value)">
</form>
```

点击这个例子中的按钮会显示出文本框中包含的文本。注意，事件处理程序中的代码直接引用了username。

在 HTML 中指定事件处理程序有一些问题。第一个问题是**时机问题**。有可能 HTML 元素已经显示 在页面上，用户都与其交互了，而事件处理程序的代码还无法执行。比如在前面的例子中，如果 showMessage()函数是在页面后面，在按钮中代码的后面定义的，那么当用户在 showMessage()函数 被定义之前点击按钮时，就会发生错误。为此，大多数 HTML 事件处理程序会封装在 try/catch 块中， 以便在这种情况下静默失败，如下面的例子所示：

```html
<input type="button" value="Click Me" onclick="try{showMessage();}catch(ex) {}">
```

这样，如果在 showMessage()函数被定义之前点击了按钮，就不会发生 JavaScript 错误了，这是因为错误在浏览器收到之前已经被拦截了。

另一个问题是**对事件处理程序作用域链的扩展在不同浏览器中可能导致不同的结果**。不同 JavaScript 引擎中标识符解析的规则存在差异，因此访问无限定的对象成员可能导致错误。 

使用 HTML 指定事件处理程序的最后一个问题是 HTML 与 JavaScript 强耦合。**如果需要修改事件处 理程序，则必须在两个地方，即 HTML 和 JavaScript 中，修改代码**。这也是很多开发者不使用 HTML 事件处理程序，而使用 JavaScript 指定事件处理程序的主要原因。

### 2.2 DOM0 事件处理程序

在 JavaScript 中指定事件处理程序的**传统方式**是**把一个函数赋值给（DOM 元素的）一个事件处理程 序属性**。这也是在第四代 Web 浏览器中开始支持的事件处理程序赋值方法，直到现在所有现代浏览器 仍然都支持此方法，主要原因是简单。要使用 JavaScript 指定事件处理程序，必须先取得要操作对象的 引用。

 **每个元素（包括 window 和 document）都有通常小写的事件处理程序属性**，比如 onclick。只要 把这个属性赋值为一个函数即可：

```js
let btn = document.getElementById("myBtn");
btn.onclick = function() {
	console.log("Clicked");
};
```

这里先从文档中取得按钮，然后给它的 onclick 事件处理程序赋值一个函数。注意，前面的代码 在运行之后才会给事件处理程序赋值。因此如果在页面中上面的代码出现在按钮之后，则有可能出现用 户点击按钮没有反应的情况。 

**像这样使用 DOM0 方式为事件处理程序赋值时，所赋函数被视为元素的方法**。因此，事件处理程 序会在元素的作用域中运行，**即 this 等于元素**。下面的例子演示了使用 this 引用元素本身：

```js
let btn = document.getElementById("myBtn");
btn.onclick = function() {
	console.log(this.id); // "myBtn"
};
```

点击按钮，这段代码会显示元素的 ID。这个 ID 是通过 this.id 获取的。不仅仅是 id，**在事件处 理程序里通过 this 可以访问元素的任何属性和方法**。

以这种方式添加事件处理程序是**注册在事件流的 冒泡阶段**的。 

**通过将事件处理程序属性的值设置为 null，可以移除通过 DOM0 方式添加的事件处理程序**，如下 面的例子所示：

```js
btn.onclick = null; // 移除事件处理程序
```

把事件处理程序设置为 null，**再点击按钮就不会执行任何操作了**。

**注意** 如果事件处理程序是在 HTML 中指定的，则 onclick 属性的值是一个包装相应 HTML 事件处理程序属性值的函数。这些事件处理程序也可以通过在 JavaScript 中将相应 属性设置为 null 来移除。

### 2.3 DOM2 事件处理程序

DOM2 Events 为事件处理程序的赋值和移除定义了两个方法：**addEventListener()和 remove- EventListener()**。这两个方法暴露在所有 DOM 节点上，它们接收 3 个参数：**事件名、事件处理函 数和一个布尔值**，true 表示在捕获阶段调用事件处理程序，**false（默认值）表示在冒泡阶段调用事 件处理程序**。

仍以给按钮添加 click 事件处理程序为例，可以这样写：

```js
let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
	console.log(this.id);
}, false);
```

以上代码为按钮添加了会在事件冒泡阶段触发的 onclick 事件处理程序（因为最后一个参数值为 false）。与 DOM0 方式类似，这个事件处理程序同样在被附加到的元素的作用域中运行。**使用 DOM2 方式的主要优势是可以为同一个事件添加多个事件处理程序**。来看下面的例子：

```js
let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
	console.log(this.id);
}, false);
btn.addEventListener("click", () => {
	console.log("Hello world!");
}, false);
```

这里给按钮添加了两个事件处理程序。**多个事件处理程序以添加顺序来触发**，因此前面的代码会先 打印元素 ID，然后显示消息“Hello world!”。 

通过 addEventListener()添加的事件处理程序**只能使用 removeEventListener()并传入与添 加时同样的参数来移除**。这**意味着使用 addEventListener()添加的匿名函数无法移除**，如下面的例 子所示：

```js
let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
	console.log(this.id);
}, false);

// 其他代码
btn.removeEventListener("click", function() { // 没有效果！
	console.log(this.id);
}, false);
```

这个例子通过 addEventListener()添加了一个匿名函数作为事件处理程序。然后，又以看起来 相同的参数调用了 removeEventListener()。但实际上，第二个参数与传给 addEventListener() 的完全不是一回事。**传给 removeEventListener()的事件处理函数必须与传给 addEventListener() 的是同一个**，如下面的例子所示：

```js
let btn = document.getElementById("myBtn");
let handler = function() {
	console.log(this.id);
};

btn.addEventListener("click", handler, false);
// 其他代码
btn.removeEventListener("click", handler, false); // 有效果！
```

这个例子有效，因为调用 addEventListener()和 removeEventListener()时传入的是同一个 函数。 

大多数情况下，**事件处理程序会被添加到事件流的冒泡阶段**，主要原因是跨浏览器兼容性好。把事 件处理程序注册到捕获阶段通常用于在事件到达其指定目标之前拦截事件。**如果不需要拦截，则不要使 用事件捕获**。

### 2.4 IE 事件处理程序

IE 实现了与 DOM 类似的方法，即 **attachEvent()和 detachEvent()**。这两个方法接收两个同样 的参数：事件处理程序的名字和事件处理函数。因为 IE8 及更早版本只支持事件冒泡，所以使**用 attachEvent()添加的事件处理程序会添加到冒泡阶段**。 

要使用 attachEvent()给按钮添加 click 事件处理程序，可以使用以下代码：

```js
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick",function(){
	console.log("Clicked");
});
```

注意，**attachEvent()的第一个参数是"onclick**"，而不是 DOM 的 addEventListener()方法 的"click"。 

在 IE 中使用 attachEvent()与使用 DOM0 方式的主要区别是事件处理程序的作用域。使用 DOM0 方式时，事件处理程序中的 this 值等于目标元素。而使用 attachEvent()时，事件处理程序**是在全 局作用域中运行的**，因此 **this 等于 window**。来看下面使用 attachEvent()的例子：

```js
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function() {
	console.log(this === window); // true
});
```

理解这些差异对编写跨浏览器代码是非常重要的。

与使用 addEventListener()一样，使用 attachEvent()方法也可以给一个元素添加多个事件处理程序。比如下面的例子：

```js
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function() {
	console.log("Clicked");
});
btn.attachEvent("onclick", function() {
	console.log("Hello world!");
});
```

这里调用了两次 attachEvent()，分别给同一个按钮添加了两个不同的事件处理程序。不过，与 DOM 方法不同，这里的事件处理程序会**以添加它们的顺序反向触发**。换句话说，在点击例子中的按钮 后，控制台中会先打印出"Hello world!"，然后再打印出"Clicked"。 

使用 attachEvent()添加的事件处理程序将使用 detachEvent()来移除，只要提供相同的参数。 与使用 DOM 方法类似，作为事件处理程序添加的匿名函数也无法移除。但**只要传给 detachEvent() 方法相同的函数引用，就可以移除**。下面的例子演示了附加和剥离事件：

```js
var btn = document.getElementById("myBtn");
var handler=function(){
	console.log("Clicked");
}
btn.attachEvent("onclick",handler);
//
btn.detachEvent("onclick",handler);
```

这里先把事件处理程序保存到变量 handler，之后又将其传给 detachEvent()来移除事件处理程序。

### 2.5 跨浏览器事件处理程序

为了以跨浏览器兼容的方式处理事件，很多开发者会选择使用一个 JavaScript 库，**其中抽象了不同 浏览器的差异**。有些开发者也可能会自己编写代码，以便使用最合适的事件处理手段。自己编写跨浏览 器事件处理代码也很简单，主要依赖能力检测。要确保事件处理代码具有最大兼容性，**只需要让代码在 冒泡阶段运行即可**。 

为此，需要先创建一个 **addHandler()方法**。这个方法的任务是根据需要分别使用 DOM0 方式、 DOM2 方式或 IE 方式来添加事件处理程序。这个方法会在 EventUtil 对象（本章示例使用的对象）上 添加一个方法，以实现跨浏览器事件处理。添加的这个 addHandler()方法接收 3 个参数：目标元素、 事件名和事件处理函数。 

有了 addHandler()，还要写一个也接收同样的 3 个参数的 **removeHandler()**。这个方法的任务 是移除之前添加的事件处理程序，不管是通过何种方式添加的，默认为 DOM0 方式。 

以下就是包含这两个方法的 EventUtil 对象：

```js
var EventUtil={
	addHandler:function(element,type,handler){
		if (element.addEventListener) {
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	}
};

```

两个方法都是首先检测传入元素上是否存在 DOM2 方式。如果有 DOM2 方式，就使用该方式，传 入事件类型和事件处理函数，以及表示冒泡阶段的第三个参数 false。否则，如果存在 IE 方式，则使 用该方式。注意这时候必须在事件类型前加上"on"，才能保证在 IE8 及更早版本中有效。**最后是使用 DOM0 方式（在现代浏览器中不会到这一步**）。注意使用 DOM0 方式时使用了中括号计算属性名，并将 事件处理程序或 null 赋给了这个属性。 可以像下面这样使用 EventUtil 对象：

```js
var btn = document.getElementById("myBtn");
var handler=function(){
	console.log("Clicked");
}
EventUtil.addHandler(btn,"click",handler);
//其他代码
EventUtil.removeHandler(btn,"onclick",handler);
```

这里的 addHandler()和 removeHandler()方法**并没有解决所有跨浏览器一致性问题**，比如 **IE 的作用域问题、多个事件处理程序执行顺序问题等**。不过，这两个方法已经实现了跨浏览器添加和移除 事件处理程序。另外也要注意，DOM0 只支持给一个事件添加一个处理程序。好在 DOM0 浏览器已经 很少有人使用了，所以影响应该不大。

## 3 事件对象

在 DOM 中发生事件时，所有相关信息都会被收集并存储在一个名为 **event** 的对象中。这个对象包 含了一些基本信息，比如**导致事件的元素、发生的事件类型，以及可能与特定事件相关的任何其他数据**。 例如，鼠标操作导致的事件会生成鼠标位置信息，而键盘操作导致的事件会生成与被按下的键有关的信 息。所有浏览器都支持这个 event 对象，尽管支持方式不同。

### 3.1 DOM 事件对象

在 DOM 合规的浏览器中，**event 对象是传给事件处理程序的唯一参数**。不管以哪种方式（DOM0 或 DOM2）指定事件处理程序，都会传入这个 event 对象。下面的例子展示了在两种方式下都可以使 用事件对象：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
	console.log(event.type); // "click"
};
btn.addEventListener("click", (event) => {
	console.log(event.type); // "click"
}, false);
```

这个例子中的两个事件处理程序都会在控制台打出 event.type 属性包含的事件类型。这个属性中 始终包含被触发事件的类型，如"click"（与传给 addEventListener()和 removeEventListener() 方法的事件名一致）。 

在通过 HTML 属性指定的事件处理程序中，同样可以使用变量 event 引用事件对象。下面的例子 中演示了如何使用这个变量：

```js
<input type="button" value="Click Me" onclick="console.log(event.type)">
```

以这种方式提供 event 对象，可以让 HTML 属性中的代码实现与 JavaScript 函数同样的功能。 

如前所述，**事件对象包含与特定事件相关的属性和方法**。*不同的事件生成的事件对象也会包含不同 的属性和方法*。不过，所有事件对象都会包含下表列出的这些公共属性和方法。

![事件对象公共属性和方法](E:\pogject\学习笔记\image\js\事件对象公共属性和方法.png)

#### this、currentTarget 和 target

在事件处理程序内部，**this 对象始终等于 currentTarget 的值**，而 target 只包含事件的实际 目标。**如果事件处理程序直接添加在了意图的目标，则 this、currentTarget 和 target 的值是一样 的**。下面的例子展示了这两个属性都等于 this 的情形：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
	console.log(event.currentTarget===this); // true
	console.log(event.target===this);  //true;
};
```

上面的代码检测了 currentTarget 和 target 的值是否等于 this。因为 click 事件的目标是按 钮，所以这 3 个值是相等的。**如果这个事件处理程序是添加到按钮的父节点（如 document.body）上， 那么它们的值就不一样了**。比如下面的例子在 document.body 上添加了单击处理程序：

```js
var btn = document.getElementById("myBtn");
document.body.onclick = function(event) {
	console.log(event.currentTarget===this); // true
	console.log(event.target===this);  //false;
	console.log(event.currentTarget === document.body); // true
	console.log(this === document.body); // true
	console.log(event.target === document.getElementById("myBtn")); // true
};
```

这种情况下点击按钮，this 和 currentTarget 都等于 document.body，这是**因为它是注册事件 处理程序的元素**。**而 target 属性等于按钮本身，这是因为那才是 click 事件真正的目标**。由于按钮 本身并没有注册事件处理程序，因此 click 事件**冒泡**到 document.body，从而触发了在它上面注册的 处理程序。 

#### type 属性

**type 属性在一个处理程序处理多个事件时很有用**。比如下面的处理程序中就使用了 event.type：

```js
var btn = document.getElementById("myBtn");

let handler=function(event){
	switch(event.type){
		case "click":
			console.log("Clicked");
			break;
		case "mouseover":
			event.target.style.backgroundColor="red";
			break;
		case "mouseout":
			event.target.style.backgroundColor="";
			break;
	}
};

btn.onclick=handler;
btn.onmouseover=handler;
btn.onmouseout=handler;
```

在这个例子中，函数 handler 被用于处理 3 种不同的事件：click、mouseover 和 mouseout。 当按钮被点击时，应该在控制台打印一条消息，如前面的例子所示。而把鼠标放到按钮上，会导致按钮 背景变成红色，接着把鼠标从按钮上移开，背景颜色应该又恢复成默认值。**这个函数使用 event.type 属性确定了事件类型，从而可以做出不同的响应。** 

#### preventDefault()方法和cancelable 属性

**preventDefault()方法用于阻止特定事件的默认动作**。比如，链接的默认行为就是在被单击时导 航到 href 属性指定的 URL。如果想阻止这个导航行为，可以在 onclick 事件处理程序中取消，如下 面的例子所示：

```html
<a href="https://www.baidu.com/" id="myLink" target="_blank">preventDefault</a>
<script type="text/javascript">
let link = document.getElementById("myLink");
link.onclick = function(event) {
	event.preventDefault();
};
</script>
```

任何可以通过 preventDefault()取消默认行为的事件，**其事件对象的 cancelable 属性都会设置为 true。**

#### stopPropagation()方法

**stopPropagation()方法用于立即阻止事件流在 DOM 结构中传播，取消后续的事件捕获或冒泡**。 例如，直接添加到按钮的事件处理程序中调用 stopPropagation()，可以阻止 document.body 上注 册的事件处理程序执行。比如：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
	console.log("Clicked");
	event.stopPropagation();
};
document.body.onclick = function(event) {
	console.log("Body clicked");
};
```

如果这个例子中不调用stopPropagation()，那么点击按钮就会打印两条消息。但这里由于click 事件不会传播到 document.body，因此 onclick 事件处理程序永远不会执行。 

####  eventPhase 属性

**eventPhase 属性可用于确定事件流当前所处的阶段**。

- 如果事件处理程序在捕获阶段被调用，则 eventPhase 等于 1；

- 如果事件处理程序在目标上被调用，则 eventPhase 等于 2；

- 如果事件处理程序 在冒泡阶段被调用，则 eventPhase 等于 3。

不过要注意的是，**虽然“到达目标”是在冒泡阶段发生的， 但其 eventPhase 仍然等于 2**。下面的例子展示了 eventPhase 在不同阶段的值：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
    //接着，会触发按钮本身的事件处理程序（尽管是注册在冒泡阶段）
	console.log(event.eventPhase);  //2
};
document.body.addEventListener("click", (event) => {
    //首先会触发注册在捕获阶段的 document.body 上的事件处理程序
	console.log(event.eventPhase); // 1
}, true);

document.body.onclick = (event) => {
    //最后触发的是注册在冒泡阶段的 document.body 上的事件处理程序
	console.log(event.eventPhase); // 3
};
```

在这个例子中，点击按钮首先会触发注册在捕获阶段的 document.body 上的事件处理程序， 显示 eventPhase 为 1。接着，会触发按钮本身的事件处理程序（尽管是注册在冒泡阶段），此时显 示 eventPhase 等于 2。最后触发的是注册在冒泡阶段的 document.body 上的事件处理程序，显示 eventPhase 为 3。**而当 eventPhase 等于 2 时，this、target 和 currentTarget 三者相等**。

注意 **event 对象只在事件处理程序执行期间存在，一旦执行完毕，就会被销毁**。

### 3.2 IE 事件对象

与 DOM 事件对象不同， **IE 事件对象可以基于事件处理程序被指定的方式以不同方式来访问**。如果事件处理程序是使用 DOM0 方式指定的，则 event 对象只是 window 对象的一个属性，如下所示：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    let event = window.event;
    console.log(event.type); // "click"
};
```

这里，window.event 中保存着 event 对象，其 event.type 属性保存着事件类型（IE 的这个属 性的值与 DOM 事件对象中一样）。不过，**如果事件处理程序是使用 attachEvent()指定的，则 event 对象会作为唯一的参数传给处理函数**，如下所示：

```js
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function(event) {
	console.log(event.type); // "click"
});
```

**使用 attachEvent()时，event 对象仍然是 window 对象的属性**（像 DOM0 方式那样），只是出 于方便也将其作为参数传入。 

**如果是使用 HTML 属性方式指定的事件处理程序，则 event 对象同样可以通过变量 event 访问**（与 DOM 模型一样）。下面是在 HTML 事件属性中使用 event.type 的例子：

```html
<input type="button" value="Click Me" onclick="console.log(event.type)">
```

I**E 事件对象也包含与导致其创建的特定事件相关的属性和方法，其中很多都与相关的 DOM 属性和 方法对应**。与 DOM 事件对象一样，基于触发的事件类型不同，event 对象中包含的属性和方法也不一 样。不过，所有 IE 事件对象都会包含下表所列的公共属性和方法。

| 属性/方法    | 类 型  | 类 型  | 说 明                                                        |
| ------------ | ------ | ------ | ------------------------------------------------------------ |
| cancelBubble | 布尔值 | 读/写  | 默认为 false，设置为 true 可以取消冒泡（与 DOM 的 stopPropagation()方法相同） |
| returnValue  | 布尔值 | 布尔值 | 默认为 true，设置为 false 可以取消事件默认行为 （与 DOM 的 preventDefault()方法相同） |
| srcElement   | 元素   | 只读   | 事件目标（与 DOM 的 target 属性相同）                        |
| type         | 字符串 | 只读   | 触发的事件类型                                               |

#### srcElement 属性

由于事件处理程序的作用域取决于指定它的方式，**因此 this 值并不总是等于事件目标**。为此，**更 好的方式是使用事件对象的 srcElement 属性代替 this**。下面的例子表明，不同事件对象上的 srcElement 属性中保存的都是事件目标：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function() {
	console.log(window.event.srcElement === this); // true
};
btn.attachEvent("onclick", function(event) {
	console.log(event.srcElement === this); // false
});
```

在第一个以 DOM0 方式指定的事件处理程序中，srcElement 属性等于 this，而在第二个事件处 理程序中（运行在全局作用域下），两个值就不相等了。 

#### returnValue 属性

returnValue 属性等价于 DOM 的 preventDefault()方法，都是用于取消给定事件默认的行为。 **只不过在这里要把 returnValue 设置为 false 才是阻止默认动作**。下面是一个设置该属性的例子：

```js
var link = document.getElementById("myLink");
link.onclick = function() {
	window.event.returnValue = false;
};
```

在这个例子中，returnValue 在 onclick 事件处理程序中被设置为 false，阻止了链接的默认行 为。

#### cancelBubble 属性

与 DOM 不同，没有办法通过 JavaScript 确定事件是否可以被取消。 **cancelBubble 属性与 DOM stopPropagation()方法用途一样，都可以阻止事件冒泡**。因为 IE8 及更早版本不支持捕获阶段，所以只会取消冒泡。stopPropagation()则既取消捕获也取消冒泡。下 面是一个取消冒泡的例子：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function() {
	console.log("Clicked");
	window.event.cancelBubble = true;
};
document.body.onclick = function() {
	console.log("Body clicked");
};
```

通过在按钮的 onclick 事件处理程序中将 cancelBubble 设置为 true，可以阻止事件冒泡到document.body，也就阻止了调用注册在它上面的事件处理程序。于是，点击按钮只会输出一条消息

### 3.3 跨浏览器事件对象

虽然 DOM 和 IE 的事件对象并不相同，但它们有足够的相似性可以实现跨浏览器方案。**DOM 事件对象中包含 IE 事件对象的所有信息和能力，只是形式不同。这些共性可让两种事件模型之间的映射成 为可能**。本章前面的 EventUtil 对象可以像下面这样再添加一些方法：

```js
var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{

            element["on"+type]=handler;
        }
    },
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{

            element["on"+type]=null;
        }
    },
    getEvent:function(event){
    	return event ? event : window.event;
    },
    getTarget:function(event){
    	return event.target || event.srcElement;
    },
    preventDefault:function(event){
    	if (event.preventDefault) {
    		event.preventDefault();
    	}else{
    		event.returnValue=false;
    	}
    },
    stopPropagation:function(event){
    	if (event.stopPropagation) {
    		event.stopPropagation();
    	}else{
    		event.cancelBubble=true;
    	}
    }
};
```

这里一共给 EventUtil 增加了 4 个新方法。**首先是 getEvent()**，其返回对 event 对象的引用。 IE 中事件对象的位置不同，而使用这个方法可以不用管事件处理程序是如何指定的，都可以获取到 event 对象。**使用这个方法的前提是，事件处理程序必须接收 event 对象，并把它传给这个方法**。下 面是使用 EventUtil 中这个方法统一获取 event 对象的一个例子：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {
	event = EventUtil.getEvent(event);
};
```

在 DOM 合规的浏览器中，event 对象会直接传入并返回。而在 IE 中，event 对象可能并没有被 定义（因为使用了 attachEvent()），因此返回 window.event。这样就可以确保无论使用什么浏览器， 都可以获取到事件对象。 

**第二个方法是 getTarget()，其返回事件目标**。在这个方法中，首先检测 event 对象是否存在 target 属性。如果存在就返回这个值；否则，就返回 event.srcElement 属性。下面是使用这个方 法的示例：

```js
btn.onclick = function(event) {
	event = EventUtil.getEvent(event);
    
	let target = EventUtil.getTarget(event);
	console.log(target);
};

```

**第三个方法是 preventDefault()，其用于阻止事件的默认行为**。在传入的 event 对象上，如果 有 preventDefault()方法，就调用这个方法；否则，就将 event.returnValue 设置为 false。下 面是使用这个方法的例子：

```js
let link = document.getElementById("myLink");
link.onclick = function(event) {
	console.log("preventDefault");
	event = EventUtil.getEvent(event);
	EventUtil.preventDefault(event);
};
```

以上代码能在所有主流浏览器中阻止单击链接后跳转到其他页面。这里首先通过 EventUtil. getEvent()获取事件对象，然后又把它传给了 EventUtil.preventDefault()以阻止默认行为。 

**第四个方法 stopPropagation()以类似的方式运行**。同样先检测用于停止事件流的 DOM 方法， 如果没有再使用 cancelBubble 属性。下面是使用这个通用 stopPropagation()方法的示例：

```js
var btn = document.getElementById("myBtn");
btn.onclick = function(event) {

	console.log("Clicked");

	event = EventUtil.getEvent(event);

	let target = EventUtil.getTarget(event);
	console.log(target);

	EventUtil.stopPropagation(event);
};

document.body.onclick = function(event) {
	console.log("Body clicked");
};
```

同样，先通过 EventUtil.getEvent()获取事件对象，然后又把它传给了 EventUtil.stop Propagation()。不过，这个方法在浏览器上可能会停止事件冒泡，也可能会既停止事件冒泡也停止 事件捕获。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>test js</title>
</head>
<body>

	<input type="button" value="Click Me" id="myBtn"><br>
	<a href="https://www.baidu.com/" id="myLink" target="_blank">preventDefault</a>
<script type="text/javascript">
var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{

            element["on"+type]=handler;
        }
    },
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{

            element["on"+type]=null;
        }
    },
    getEvent:function(event){
    	return event ? event : window.event;
    },
    getTarget:function(event){
    	return event.target || event.srcElement;
    },
    preventDefault:function(event){
    	if (event.preventDefault) {
    		event.preventDefault();
    	}else{
    		event.returnValue=false;
    	}
    },
    stopPropagation:function(event){
    	if (event.stopPropagation) {
    		event.stopPropagation();
    	}else{
    		event.cancelBubble=true;
    	}
    }
};

var btn = document.getElementById("myBtn");
btn.onclick = function(event) {

	console.log("Clicked");

	event = EventUtil.getEvent(event);

	let target = EventUtil.getTarget(event);
	console.log(target);

	EventUtil.stopPropagation(event);
};

document.body.onclick = function(event) {
	console.log("Body clicked");
};

let link = document.getElementById("myLink");
link.onclick = function(event) {
	console.log("preventDefault");
	event = EventUtil.getEvent(event);
	EventUtil.preventDefault(event);
};

</script>

</body>
</html>
```

## 4 事件类型
