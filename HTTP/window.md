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

