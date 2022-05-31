# Window

`window` 对象表示一个包含DOM文档的窗口，其 `document` 属性指向窗口中载入的 [DOM文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 。使用 [`document.defaultView`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/defaultView) 属性可以获取指定文档所在窗口。

```js
  console.log(document.defaultView)
  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

`window`作为全局变量，**代表了脚本正在运行的窗口**，暴露给 Javascript 代码。

本节为 DOM `Window` 对象中可用的所有方法、属性和事件提供简要参考。`window` 对象实现了 `Window` 接口，此接口继承自 `AbstractView` 接口。一些额外的全局函数、命名空间、对象、接口和构造函数与 window 没有典型的关联，但却是有效的，它们在 [JavaScript参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) 和 [DOM参考](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 中列出。

**在有标签页功能的浏览器中，每个标签都拥有自己的 `window` 对象**；也就是说，同一个窗口的标签页之间不会共享一个 `window` 对象。有一些方法，如 [`window.resizeTo`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resizeTo) 和 [`window.resizeBy`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resizeBy) 之类的方法**会作用于整个窗口**而不是 `window` 对象所属的那个标签。**一般而言，如果一样东西无法恰当地作用于标签，那么它就会作用于窗口。**

---

# DOMParser

**`DOMParser`** 可以将存储在字符串中的 [XML](https://developer.mozilla.org/zh-CN/docs/Glossary/XML) 或 [HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML) 源代码解析为一个 DOM [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)。

> **注意：**[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 支持从URL可寻址资源解析XML和HTML，在其[`response`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/response) 属性中返回`Document`。

你可以使用[`XMLSerializer`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLSerializer) 接口执行相反的操作 - 将DOM树转换为XML或HTML源。

对于HTML文档，您还可以通过设置 [`Element.innerHTML`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML) 和[`outerHTML`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/outerHTML) 属性的值，将部分 DOM 替换为从HTML构建的新 DOM 树。还可以读取这些属性以获取对应于相应 DOM 子树的 HTML 片段。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#语法)

```js
let domparser = new DOMParser();
```

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#方法)

[`DOMParser.parseFromString()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString)

### [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#语法_2)

```js
let doc = domparser.parseFromString(string, mimeType)
```

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#返回值)

基于 **`mimeType`** 参数，返回 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 或 [`XMLDocument`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLDocument) 或其他文档类型。

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#参数)

该方法接收 2 个必要参数：

- `string`

  要解析的 [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)。它必须包含 [HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML)、[xml](https://developer.mozilla.org/zh-CN/docs/Glossary/XML)、xhtml+xml 或 [svg](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG) 文档。

- `mimeType`

一个DOMString。这个字符串决定了一个类的方法的返回值。可能的值如下：

| `mimeType`              | doc.constructor |
| :---------------------- | :-------------- |
| `text/html`             | `Document`      |
| `text/xml`              | `XMLDocument`   |
| `application/xml`       | `XMLDocument`   |
| `application/xhtml+xml` | `XMLDocument`   |
| `image/svg+xml`         | `XMLDocument`   |

## [解析 XML](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#解析_xml)

一旦建立了一个解析对象以后，你就可以使用它的 `parseFromString` 方法来解析一个 XML 字符串：

```js
let parser = new DOMParser(),
    doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
```

#### 错误处理

如果解析失败, `DOMParser` 不会抛出任何异常，而是会返回一个给定的错误文档：

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
(error description)
<sourcetext>(a snippet of the source XML)</sourcetext>
</parsererror>
```

解析错误会显示在[错误控制台](https://developer.mozilla.org/zh-CN/zh-cn/Error_Console)，包括文档的地址和错误的源代码。

## [解析 SVG 或者 HTML 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#解析_svg_或者_html_文档)

`DOMParser` 也可以用来解析 SVG 文档 (Firefox 10.0 / Thunderbird 10.0 / SeaMonkey 2.7) 或者 HTML 文档 (Firefox 12.0 / Thunderbird 12.0 / SeaMonkey 2.9)。根据给定的 MIME 类型不同，`parseFromString` 方法可能返回三种不同类型的文档。如果MIME类型是 `text/xml`，则返回一个 `XMLDocument`，如果 MIME 类型是 `text/svg+xml`，则返回一个 `SVGDocument`，如果MIME类型是 `text/html`，则返回一个 `HTMLDocument`。

```js
let parser = new DOMParser();
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
// 返回一个 Document 对象，但不是 SVGDocument，也不是 HTMLDocument

parser = new DOMParser();
doc = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
// 返回一个 SVGDocument 对象，同时也是一个 Document 对象。

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html")
// 返回一个 HTMLDocument 对象，同时也是一个 Document 对象。
```

## [DOMParser HTML 扩展](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser#domparser_html_扩展)

```js
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
	"use strict";

	var proto = DOMParser.prototype,
        nativeParse = proto.parseFromString;

	// Firefox/Opera/IE throw errors on unsupported types
	try {
		// WebKit returns null on unsupported types
		if ((new DOMParser()).parseFromString("", "text/html")) {
			// text/html parsing is natively supported
			return;
		}
	} catch (ex) {}

	proto.parseFromString = function(markup, type) {
		if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
			var
			  doc = document.implementation.createHTMLDocument("")
			;
	      		if (markup.toLowerCase().indexOf('<!doctype') > -1) {
        			doc.documentElement.innerHTML = markup;
      			}
      			else {
        			doc.body.innerHTML = markup;
      			}
			return doc;
		} else {
			return nativeParse.apply(this, arguments);
		}
	};
}(DOMParser));
```

---

# Image()

**`Image()`**函数将会创建一个新的[`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)实例。

它的功能等价于 [`document.createElement('img')`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image#语法)

```js
Image(width, height)
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image#参数)

- width

  图片的宽度 (即 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-width) 属性).

- height

  图片的高度 (即 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-height) 属性).

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image#示例)

```js
var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
document.body.appendChild(myImage);
```

上面的代码相当于在 <body>中定义了下面的HTML:

```html
<img width="100" height="200" src="picture.jpg">
```

---

# DOMContentLoaded

当初始的 **HTML** 文档被完全加载和解析完成之后，**`DOMContentLoaded`** 事件被触发，而无需等待样式表、图像和子框架的完全加载。

模拟的css文件：CSS.php

```php
<?php
sleep(3);
?>
```

测试代码：

```html
<link rel="stylesheet" href="css.php">
<script>
document.addEventListener('DOMContentLoaded',function(){
    console.log('3 seconds passed');
});
</script>
```

如果将link置于script之后，就会立即打印。

## [加速中](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/DOMContentLoaded_event#加速中)

如果您希望 DOM 在用户请求页面后尽可能快地解析，你可以做的一些事情是把你的 [JavaScript 异步化](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) 以及 [优化样式表的加载](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery), 由于被并行加载而减慢页面加载，从主 html 文档“窃取”流量。

## [常规信息](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/DOMContentLoaded_event#常规信息)

| 属性              | 类型                                                         | 描述                                       |
| :---------------- | :----------------------------------------------------------- | :----------------------------------------- |
| `target` 只读     | [`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) | 产生该事件的对象(DOM树中最顶级的那个对象). |
| `type` 只读       | [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) | 事件类型.                                  |
| `bubbles` 只读    | [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 该事件是否冒泡.                            |
| `cancelable` 只读 | [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 该事件是否可取消默认行为.                  |

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/DOMContentLoaded_event#示例)

```html
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });

  for(var i=0; i<1000000000; i++){
      // 这个同步脚本将延迟DOM的解析。
      // 所以DOMContentLoaded事件稍后将启动。
  } 
</script>
```

---

# Worker

Worker 接口是 [Web Workers API ](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)的一部分，指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。要创建一个 Worker **，**只须调用 `Worker(URL) `构造函数，函数参数 `URL` 为指定的脚本。

Worker 也可以创建新的 Worker，当然，**所有 Worker 必须与其创建者[同源](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)**（注意：[Blink](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5R3B4RN4GHU)暂时不支持嵌套 Worker）。 

需要注意的是，不是所有函数和构造函数(或者说…类)都可以在 Worker 中使用。具体参考页面 [Worker 所支持的函数和类](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)。Worker 可以使用 [`XMLHttpRequest`](https://developer.mozilla.org/en-US/DOM/XMLHttpRequest) 发送请求，但是请求的 `responseXML` 与 `channel` 两个属性值始终返回 `null` （`fetch` 仍可正常使用，没有类似的限制）。 

## [构造函数](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker#构造函数)

- [`Worker()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker)

  创建一个专用Web worker，它只执行URL指定的脚本。使用 [Blob URL](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) 作为参数亦可。

## [属性](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker#属性)

*继承*父对象*[`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 的属性，以及实现对象 [`AbstractWorker` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Worker)的属性。*

### [*事件句柄*](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker#事件句柄)

- [`AbstractWorker.onerror` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Worker/error_event)

  当[`ErrorEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/ErrorEvent) 类型的事件冒泡到 worker 时，事件监听函数 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/EventTarget/addEventListener_380cb5f366307beb2c072f74e561ee98) 被调用. 它继承于 [`AbstractWorker` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Worker).

- [`Worker.onmessage`](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/Worker/message_event)

  当[`MessageEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MessageEvent)类型的事件冒泡到 worker 时，事件监听函数 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/EventTarget/addEventListener_380cb5f366307beb2c072f74e561ee98) 被调用. 例如，一个消息通过 [`DedicatedWorkerGlobalScope.postMessage` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)，从执行者发送到父页面对象，消息保存在事件对象的 [`data` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data) 属性中.

- [`Worker.onmessageerror`](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/Worker/messageerror_event)

  当`messageerror` 类型的事件发生时，对应的`event handler` 代码被调用。

## [方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker#方法)

*继承*父对象*[`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 的方法，以及实现对象 [`AbstractWorker` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Worker)的方法。*

- [`Worker.postMessage()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage)

  发送一条消息到最近的外层对象，消息可由任何 JavaScript 对象组成。

- [`Worker.terminate()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/terminate)

  立即终止 worker。该方法不会给 worker 留下任何完成操作的机会；就是简单的立即停止。Service Woker 不支持这个方法。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker#示例)

下面的代码通过构造函数 [`Worker()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker) 创建了一个 [`Worker`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 对象。

```html
      <form>
        <div>
          <label for="number1">Multiply number 1: </label>
          <input type="text" id="number1" value="0">
        </div>
        <div>
          <label for="number2">Multiply number 2: </label>
          <input type="text" id="number2" value="0">
        </div>
        <div>
          <label for="result">result: </label>
          <input type="text" id="result" value="" disabled>
        </div>
      </form>
<script type="text/javascript">

  let first = document.querySelector("#number1");
  let second = document.querySelector("#number2");
  let result = document.querySelector('#result');
  if (window.Worker) {
    let myWorker = new Worker("worker.js");
    first.onchange = function() {
      myWorker.postMessage([first.value, second.value]);
      console.log("Message posted to worker");
    }
    second.onchange = function() {
      myWorker.postMessage([first.value, second.value]);
      console.log('Message posted to worker');
    }
    myWorker.onmessage = function(e){
      result.value = e.data;
      console.log("Message received from worker");
    }
  }else{
    console.log('Your browser doesn\'t support web workers.');
  }
  

</script>
```

```js
//worker.js
onmessage = function(e) {
	console.log("Worker: Message received from main script");
	let result = e.data[0] * e.data[1];
	if (isNaN(result)) {
		postMessage("Please write two numbers");
	}else{
		let workerResult = result;
		console.log("Worker: Posting message back to main script");
		postMessage(workerResult);
	}
}
```

---

# 页面生命周期

HTML 页面的生命周期包含三个重要事件：

- `DOMContentLoaded` —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img>` 和样式表之类的外部资源可能尚未加载完成。
- `load` —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。
- `beforeunload/unload` —— 当用户正在离开页面时。

每个事件都是有用的：

- `DOMContentLoaded` 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。
- `load` 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。
- `beforeunload` 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。
- `unload` 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。

我们探索一下这些事件的细节。

## DOMContentLoaded

`DOMContentLoaded` 事件发生在 `document` 对象上。

我们必须使用 `addEventListener` 来捕获它：

```js
document.addEventListener("DOMContentLoaded", ready);
// 不是 "document.onDOMContentLoaded = ..."
```

例如：

```html
<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
<script type="text/javascript">
  function ready() {
    let img = document.querySelector("#img");
    console.log('DOM is ready');

    // 图片目前尚未加载完成（除非已经被缓存），所以图片的大小为 0x0
    console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }
  document.addEventListener("DOMContentLoaded", ready);
  
  // DOM is ready
  // test.html:19 Image size: 0x0
</script>
```

在示例中，`DOMContentLoaded` 处理程序在文档加载完成后触发，所以它可以查看所有元素，包括它下面的 `<img>` 元素。

但是，它不会等待图片加载。因此，`alert` 显示其大小为零。

乍一看，`DOMContentLoaded` 事件非常简单。**DOM 树准备就绪 —— 这是它的触发条件**。它并没有什么特别之处。

### DOMContentLoaded 和脚本

当浏览器处理一个 HTML 文档，并在文档中遇到 `<script>` 标签时，就会在继续构建 DOM 之前运行它。这是一种防范措施，因为脚本可能想要修改 DOM，甚至对其执行 `document.write` 操作，所以 `DOMContentLoaded` 必须等待脚本执行结束。

因此，`DOMContentLoaded` 肯定在下面的这些脚本执行结束之后发生：

```html
<script>
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready!");
  });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>

<script>
  console.log("Library loaded, inline script executed");
</script>
```

```
Library loaded, inline script executed
DOM ready!
```

在上面这个例子中，我们首先会看到 “Library loaded…”，然后才会看到 “DOM ready!”（所有脚本都已经执行结束）。

>**不会阻塞 `DOMContentLoaded` 的脚本**
>
>此规则有两个例外：
>
>1. 具有 `async` 特性（attribute）的脚本不会阻塞 `DOMContentLoaded`，[稍后](https://zh.javascript.info/script-async-defer) 我们会讲到。
>2. 使用 `document.createElement('script')` **动态生成并添加到网页的脚本**也不会阻塞 `DOMContentLoaded`。

### DOMContentLoaded 和样式

外部样式表不会影响 DOM，因此 `DOMContentLoaded` 不会等待它们。

但这里有一个陷阱。如果在样式后面有一个脚本，那么该脚本必须等待样式表加载完成：

```html
<link type="text/css" rel="stylesheet" href="style.css">
<script>
  // 在样式表加载完成之前，脚本都不会执行
  alert(getComputedStyle(document.body).marginTop);
</script>
```

**原因**是，**脚本可能想要获取元素的坐标和其他与样式相关的属性**，如上例所示。因此，它必须等待样式加载完成。

当 `DOMContentLoaded` 等待脚本时，它现在也在等待脚本前面的样式。

### 浏览器内建的自动填充

Firefox，Chrome 和 Opera 都会在 `DOMContentLoaded` 中自动填充表单。

例如，如果页面有一个带有登录名和密码的表单，并且浏览器记住了这些值，那么在 `DOMContentLoaded` 上，浏览器会尝试自动填充它们（如果得到了用户允许）。

因此，如果 `DOMContentLoaded` 被需要加载很长时间的脚本延迟触发，那么自动填充也会等待。你可能在某些网站上看到过（如果你使用浏览器自动填充）—— 登录名/密码字段**不会立即自动填充**，**而是在页面被完全加载前会延迟填充**。这实际上是 `DOMContentLoaded` 事件之前的延迟。

## window.onload

当整个页面，包括样式、图片和其他资源被加载完成时，会触发 `window` 对象上的 `load` 事件。可以通过 `onload` 属性获取此事件。

下面的这个示例正确显示了图片大小，因为 `window.onload` 会等待所有图片加载完毕：

```html
<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
<script>
  let img = document.querySelector("#img");
  window.onload = function() { 
    // 也可以用 window.addEventListener('load', (event) => {
    console.log('Page loaded');

    // 此时图片已经加载完成
    console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
  /*
  Page loaded
  test.html:20 Image size: 177x160
  */
</script>
```

## window.onunload

当访问者离开页面时，`window` 对象上的 `unload` 事件就会被触发。我们可以在那里做一些不涉及延迟的操作，例如关闭相关的弹出窗口。

有一个值得注意的**特殊情况是发送分析数据**。

假设我们收集有关页面使用情况的数据：鼠标点击，滚动，被查看的页面区域等。

自然地，当用户要离开的时候，我们希望通过 `unload` 事件将数据保存到我们的服务器上。

有一个特殊的 `navigator.sendBeacon(url, data)` 方法可以满足这种需求，详见规范 https://w3c.github.io/beacon/。

它在后台发送数据，转换到另外一个页面不会有延迟：浏览器离开页面，但仍然在执行 `sendBeacon`。

使用方式如下：

```js
let analyticsData = { /* 带有收集的数据的对象 */ };

window.addEventListener("unload", function() {
  navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
});
```

- 请求以 POST 方式发送。
- 我们不仅能发送字符串，还能发送表单以及其他格式的数据，在 [Fetch](https://zh.javascript.info/fetch) 一章有详细讲解，但通常它是一个字符串化的对象。
- 数据大小限制在 64kb。

当 `sendBeacon` 请求完成时，浏览器可能已经离开了文档，**所以就无法获取服务器响应**（对于分析数据来说通常为空）。

还有一个 `keep-alive` 标志，该标志用于在 [fetch](https://zh.javascript.info/fetch) 方法中为通用的网络请求执行此类“离开页面后”的请求。你可以在 [Fetch API](https://zh.javascript.info/fetch-api) 一章中找到更多相关信息。

如果我们要取消跳转到另一页面的操作，在这里做不到。但是我们可以使用另一个事件 —— `onbeforeunload`。

## window.onbeforeunload

如果访问者触发了离开页面的导航（navigation）或试图关闭窗口，`beforeunload` 处理程序将要求进行更多确认。

如果我们要取消事件，浏览器会询问用户是否确定。

你可以通过运行下面这段代码，然后重新加载页面来进行尝试：

```js
window.onbeforeunload = function() {
  return false;
};
```

由于历史原因，返回非空字符串也被视为取消事件。在以前，浏览器曾经将其显示为消息，但是根据 [现代规范](https://html.spec.whatwg.org/#unloading-documents) 所述，它们不应该这样。

这里有个例子：

```js
window.onbeforeunload = function() {
  return "有未保存的值。确认要离开吗？";
};
```

它的行为已经改变了，因为有些站长通过显示误导性和恶意信息滥用了此事件处理程序。所以，目前一些旧的浏览器可能仍将其显示为消息，但除此之外 —— 无法自定义显示给用户的消息。

### `event.preventDefault()` 在 `beforeunload` 处理程序中不起作用

这听起来可能很奇怪，但大多数浏览器都会忽略 `event.preventDefault()`。

这意味着，以下代码可能不起作用：

```javascript
window.addEventListener("beforeunload", (event) => {
  // 不起作用，所以这个事件处理程序没做任何事儿
  event.preventDefault();
});
```

相反，在这样的处理程序中，应该将 `event.returnValue` 设置为一个字符串，以获得类似于上面代码的结果：

```javascript
window.addEventListener("beforeunload", (event) => {
  // 起作用，与在 window.onbeforeunload 中 return 值的效果是一样的
  event.returnValue = "有未保存的值。确认要离开吗？";
});
```

## readyState

如果我们在文档加载完成之后设置 `DOMContentLoaded` 事件处理程序，会发生什么？

很自然地，它永远不会运行。

在某些情况下，我们不确定文档是否已经准备就绪。我们希望我们的函数在 DOM 加载完成时执行，无论现在还是以后。

`document.readyState` **属性**可以为我们提供当前加载状态的信息。

它有 3 个可能值：

- `loading` —— 文档正在被加载。
- `interactive` —— 文档被全部读取。
- `complete` —— 文档被全部读取，并且所有资源（例如图片等）都已加载完成。

所以，我们可以检查 `document.readyState` 并设置一个处理程序，或在代码准备就绪时立即执行它。

像这样：

```js
function work() { /*...*/ }

if (document.readyState == 'loading') {
  // 仍在加载，等待事件
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM 已就绪！
  work();
}
```

## readystatechange

还有一个 `readystatechange` 事件，会在状态发生改变时触发，因此我们可以打印所有这些状态，就像这样：

```js
// 当前状态
console.log(document.readyState);

// 状态改变时打印它
document.addEventListener('readystatechange', () => console.log(document.readyState));
```

`readystatechange` 事件**是跟踪文档加载状态的另一种机制**，它很早就存在了。现在则很少被使用。

但是为了完整起见，让我们看看完整的事件流。

这是一个带有 `<iframe>`，`<img>` 和记录事件的处理程序的文档：

```html
<script>
  console.log('initial readyState:' + document.readyState);

  document.addEventListener('readystatechange', () => console.log('readyState:' + document.readyState));
  document.addEventListener('DOMContentLoaded', () => console.log('DOMContentLoaded'));

  window.onload = () => console.log('window onload');
</script>

<iframe src="test.html" onload="console.log('iframe onload')"></iframe>

<img src="http://en.js.cx/clipart/train.gif" id="img">
<script>
  let img = document.querySelector("#img");
  img.onload = () => console.log('img onload');
</script>
```

```
test.html:12 initial readyState:loading
test.html:14 readyState:interactive
test.html:15 DOMContentLoaded
test.html:20 iframe onload
test.html:25 img onload
test.html:14 readyState:complete
test.html:17 window onload
```

- 在 `DOMContentLoaded` 之前，`document.readyState` 会立即变成 `interactive`。它们俩的意义实际上是相同的。
- 当所有资源（`iframe` 和 `img`）都加载完成后，`document.readyState` 变成 `complete`。这里我们可以发现，它与 `img.onload`（`img` 是最后一个资源）和 `window.onload` 几乎同时发生。转换到 `complete` 状态的意义与 `window.onload` 相同。区别在于 `window.onload` 始终在所有其他 `load` 处理程序之后运行。

## 总结

页面生命周期事件：

- 当 DOM 准备就绪时，document 上的DOMContentLoaded 事件就会被触发。在这个阶段，我们可以将 JavaScript 应用于元素。
  - 诸如 `<script>...</script>` 或 `<script src="..."></script>` 之类的脚本会阻塞 `DOMContentLoaded`，浏览器将等待它们执行结束。
  - 图片和其他资源仍然可以继续被加载。
- 当页面和所有资源都加载完成时，`window` 上的 `load` 事件就会被触发。我们很少使用它，因为通常无需等待那么长时间。
- 当用户想要离开页面时，`window` 上的 `beforeunload` 事件就会被触发。如果我们取消这个事件，浏览器就会询问我们是否真的要离开（例如，我们有未保存的更改）。
- 当用户最终离开时，`window` 上的 `unload` 事件就会被触发。在处理程序中，我们只能执行不涉及延迟或询问用户的简单操作。正是由于这个限制，它很少被使用。我们可以使用 `navigator.sendBeacon` 来发送网络请求。
- document.readyState是文档的当前状态，可以在readystatechange事件中跟踪状态更改：
  - `loading` —— 文档正在被加载。
  - `interactive` —— 文档已被解析完成，与 `DOMContentLoaded` 几乎同时发生，但是在 `DOMContentLoaded` 之前发生。
  - `complete` —— 文档和资源均已加载完成，**与 `window.onload` 几乎同时发生**，但是在 `window.onload` 之前发生。



---

