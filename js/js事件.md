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