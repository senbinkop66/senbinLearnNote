# 0 DOM 简介

## DOM (文档对象模型)

文档对象模型（DOM，Document Object Model）是 HTML 和 XML 文档的编程接口。DOM 表示由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。脱胎于网景和微软早期的动态 HTML（DHTML，Dynamic HTML），DOM 现在是真正跨平台、语言无关的表示和操作网页的方式。

DOM 是 W3C（万维网联盟）的标准。DOM 定义了访问 HTML 和 XML 文档的标准：

"W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。"

W3C DOM 标准被分为 3 个不同的部分：

- 核心 DOM - 针对任何结构化文档的标准模型
- XML DOM - 针对 XML 文档的标准模型
- HTML DOM - 针对 HTML 文档的标准模型

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

# 1 节点层级

任何 HTML 或 XML 文档都可以用 DOM 表示为一个由节点构成的层级结构。节点分很多类型，每 种类型对应着文档中不同的信息和（或）标记，也都有自己不同的特性、数据和方法，而且与其他类型 有某种关系。这些关系构成了层级，让标记可以表示为一个以特定节点为根的树形结构。

```html
<html>
	<head>
		<title>Sample Page</title>
	</head>
	<body>
		<p>Hello World!</p>
	</body>
</html>
```

其中，document 节点表示每个文档的根节点。在这里，根节点的唯一子节点是<html>元素，我们称之 为文档元素（documentElement）。文档元素是文档最外层的元素，所有其他元素都存在于这个元素之 内。每个文档只能有一个文档元素。在 HTML 页面中，文档元素始终是<html>元素。在 XML 文档中， 则没有这样预定义的元素，任何元素都可能成为文档元素。

 HTML 中的每段标记都可以表示为这个树形结构中的一个节点。

- 元素节点表示 HTML 元素，

- 属性 节点表示属性，

- 文档类型节点表示文档类型，

- 注释节点表示注释。

  DOM 中总共有 12 种节点类型，这些 类型都继承一种基本类型。

## 1.1 Node 类型

### nodeType 属性

DOM Level 1 描述了名为 Node 的接口，这个接口是所有 DOM 节点类型都必须实现的。Node 接口 在 JavaScript 中被实现为 Node 类型，在除 IE 之外的所有浏览器中都可以直接访问这个类型。在 JavaScript 中，**所有节点类型都继承 Node 类型**，因此所有类型都共享相同的基本属性和方法。

 每个节点都有 nodeType 属性，表示该节点的类型。节点类型由定义在 Node 类型上的 12 个数值 常量表示：

- Node.ELEMENT_NODE（1）
- Node.ATTRIBUTE_NODE（2）
- Node.TEXT_NODE（3）
- Node.CDATA_SECTION_NODE（4）
- Node.ENTITY_REFERENCE_NODE（5）
- Node.ENTITY_NODE（6）
- Node.PROCESSING_INSTRUCTION_NODE（7）
- Node.COMMENT_NODE（8）
- Node.DOCUMENT_NODE（9）
- Node.DOCUMENT_TYPE_NODE（10）
- Node.DOCUMENT_FRAGMENT_NODE（11）
- Node.NOTATION_NODE（12）

节点类型可通过与这些常量比较来确定，比如：

```js
if (someNode.nodeType==Node.ELEMENT_NODE) {
	console.log("Node is an element.");
}
```

浏览器并不支持所有节点类型。开发者最常用到的是元素节点和文本节点。

### nodeName 与 nodeValue

nodeName 与 nodeValue 保存着有关节点的信息。这两个属性的值完全取决于节点类型。在使用这两个属性前，最好先检测节点类型，如下所示：

```js
if (someNode.nodeType == 1){
	value = someNode.nodeName; // 会显示元素的标签名
}
```

在这个例子中，先检查了节点是不是元素。如果是，则将其 nodeName 的值赋给一个变量。

对元素而言，nodeName 始终等于元素的标签名，而 nodeValue 则始终为 null。

### 节点关系

文档中的所有节点都与其他节点有关系。这些关系可以形容为家族关系，相当于把文档树比作家谱。 在 HTML 中，<body>元素是<html>元素的子元素，而<html>元素则是<body>元素的父元素。<head> 元素是<body>元素的同胞元素，因为它们有共同的父元素<html>。

 每个节点都有一个 childNodes 属性，其中包含一个 NodeList 的实例。NodeList 是一个类数组 对象，用于存储可以按位置存取的有序节点。

注意，NodeList 并不是 Array 的实例，但可以使用中括 号访问它的值，而且它也有 length 属性。NodeList 对象独特的地方在于，它其实是一个对 DOM 结 构的查询，因此 DOM 结构的变化会自动地在 NodeList 中反映出来。我们通常说 NodeList 是实时的 活动对象，而不是第一次访问时所获得内容的快照。

下面的例子展示了如何使用中括号或使用 item()方法访问 NodeList 中的元素：

```js
let firstChild = someNode.childNodes[0];
let secondChild = someNode.childNodes.item(1);
let count = someNode.childNodes.length;
```

无论是使用中括号还是 item()方法都是可以的，但多数开发者倾向于使用中括号，因为它是一个类数组对象。

注意，**length 属性表示那一时刻 NodeList 中节点的数量**。

使用 Array.prototype.slice()可以像前面介绍 arguments 时一样把 NodeList 对象转换为数组。比如：

```js
let arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);
```

当然，使用 ES6 的 Array.from()静态方法，可以替换这种笨拙的方式：

```js
let arrayOfNodes = Array.from(someNode.childNodes);
```

每个节点都有一个 parentNode 属性，指向其 DOM 树中的父元素。childNodes 中的所有节点都 有同一个父元素，因此它们的 parentNode 属性都指向同一个节点。此外，childNodes 列表中的每个 节点都是同一列表中其他节点的同胞节点。而使用 previousSibling 和 nextSibling 可以在这个列 表的节点间导航。这个列表中第一个节点的 previousSibling 属性是 null，最后一个节点的 nextSibling 属性也是 null，如下所示：

```js
if (someNode.nextSibling === null){
	alert("Last node in the parent's childNodes list.");
} else if (someNode.previousSibling === null){
	alert("First node in the parent's childNodes list.");
}
```

注意，如果 childNodes 中只有一个节点，则它的 previousSibling 和 nextSibling 属性都是null。

父节点和它的第一个及最后一个子节点也有专门属性：firstChild 和 lastChild 分别指向 childNodes 中的第一个和最后一个子节点。

- someNode.firstChild 的值始终等于 someNode. childNodes[0]，而 someNode.lastChild 的值始终等于 someNode.childNodes[someNode. childNodes.length-1]。
- 如果只有一个子节点，则 firstChild 和 lastChild 指向同一个节点。
- 如 果没有子节点，则 firstChild 和 lastChild 都是 null。

上述这些节点之间的关系为在文档树的节 点之间导航提供了方便。

还有一个便利的方法是 **hasChildNodes()**，这个方法如果返回 true 则说明节点有一个或多个子节点。相比查询childNodes 的 length 属性，这个方法无疑更方便。

最后还有一个所有节点都共享的关系。**ownerDocument 属性**是一个指向代表整个文档的文档节点 的指针。所有节点都被创建它们（或自己所在）的文档所拥有，因为一个节点不可能同时存在于两个或者多个文档中。这个属性为迅速访问文档节点提供了便利，因为无需在文档结构中逐层上溯了。

注意 虽然所有节点类型都继承了 Node，但并非所有节点都有子节点。

### 操纵节点

#### appendChild()

因为所有关系指针都是只读的，所以 DOM 又提供了一些操纵节点的方法。最常用的方法是 appendChild()，用于在 childNodes 列表末尾添加节点。添加新节点会更新相关的关系指针，包括 父节点和之前的最后一个子节点。appendChild()方法返回新添加的节点，如下所示：

```js
let returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); // true
alert(someNode.lastChild == newNode); // true
```

如果把文档中已经存在的节点传给 appendChild()，则这个节点会从之前的位置被转移到新位置。 即使 DOM 树通过各种关系指针维系，一个节点也不会在文档中同时出现在两个或更多个地方。因此， 如果调用 appendChild()传入父元素的第一个子节点，则这个节点会成为父元素的最后一个子节点， 如下所示：

```js
// 假设 someNode 有多个子节点
let returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild); // false
alert(returnedNode == someNode.lastChild); // true
```

####  insertBefore()

如果想把节点放到 childNodes 中的特定位置而不是末尾，则可以使用 insertBefore()方法。 这个方法接收两个参数：要插入的节点和参照节点。调用这个方法后，要插入的节点会变成参照节点的 前一个同胞节点，并被返回。如果参照节点是 null，则 insertBefore()与 appendChild()效果相 同，如下面的例子所示：

```js
// 作为最后一个子节点插入
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); // true
// 作为新的第一个子节点插入
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); // true
alert(newNode == someNode.firstChild); // true
// 插入最后一个子节点前面
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true
```

#### replaceChild()

appendChild() 和 insertBefore() 在 插 入 节 点 时 不 会 删 除 任 何 已 有 节 点 。 相 对 地 ，replaceChild()方法接收两个参数：要插入的节点和要替换的节点。要替换的节点会被返回并从文档树中完全移除，要插入的节点会取而代之。下面看一个例子：

```js
// 替换第一个子节点
let returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
// 替换最后一个子节点
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
```

使用 replaceChild()插入一个节点后，所有关系指针都会从被替换的节点复制过来。虽然被替换的节点从技术上说仍然被同一个文档所拥有，但文档中已经没有它的位置。

####  removeChild()

要移除节点而不是替换节点，可以使用 removeChild()方法。这个方法接收一个参数，即要移除
的节点。被移除的节点会被返回，如下面的例子所示：

```js
// 删除第一个子节点
let formerFirstChild = someNode.removeChild(someNode.firstChild);
// 删除最后一个子节点
let formerLastChild = someNode.removeChild(someNode.lastChild);
```

与 replaceChild()方法一样，通过 removeChild()被移除的节点从技术上说仍然被同一个文档所拥有，但文档中已经没有它的位置。

上面介绍的 4 个方法都用于操纵某个节点的子元素，也就是说使用它们之前必须先取得父节点（使用前面介绍的 parentNode 属性）。并非所有节点类型都有子节点，如果在不支持子节点的节点上调用这些方法，则会导致抛出错误。

#### cloneNode()方法

所有节点类型还共享了两个方法。第一个是 cloneNode()，会返回与调用它的节点一模一样的节 点。cloneNode()方法接收一个布尔值参数，表示是否深复制。在传入 true 参数时，会进行深复制， 即复制节点及其整个子 DOM 树。如果传入 false，则只会复制调用该方法的节点。复制返回的节点属 于文档所有，但尚未指定父节点，所以可称为孤儿节点（orphan）。可以通过 appendChild()、 insertBefore()或 replaceChild()方法把孤儿节点添加到文档中。以下面的 HTML 片段为例：

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>	
```

如果myList保存着对这个<ul>元素的引用，则下列代码展示了使用cloneNode()方法的两种方式：

```js
let deepList = myList.cloneNode(true);
alert(deepList.childNodes.length); // 3（IE9 之前的版本）或 7（其他浏览器）
let shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length); // 0
```

在这个例子中，deepList 保存着 myList 的副本。这意味着 deepList 有 3 个列表项，每个列表项 又 各 自 包 含 文 本 。 变 量 shallowList 则 保 存 着 myList 的 浅 副 本 ， 因 此 没 有 子 节 点 。

**注意** cloneNode()方法不会复制添加到 DOM 节点的 JavaScript 属性，比如事件处理程 序。这个方法只复制 HTML 属性，以及可选地复制子节点。除此之外则一概不会复制。 IE 在很长时间内会复制事件处理程序，这是一个 bug，所以推荐在复制前先删除事件处 理程序。

#### normalize()方法

这个方法唯一的任务就是处理文档子树中的文本节 点。由于解析器实现的差异或 DOM 操作等原因，可能会出现并不包含文本的文本节点，或者文本节点之间互为同胞关系。在节点上调用 normalize()方法会检测这个节点的所有后代，从中搜索上述两种 情形。如果发现空文本节点，则将其删除；如果两个同胞节点是相邻的，则将其合并为一个文本节点。 这个方法将在本章后面进一步讨论。

## 1.2 Document 类型

### Document 类型节点

Document 类型是 JavaScript 中表示文档节点的类型。在浏览器中，文档对象 document 是 HTMLDocument 的实例（HTMLDocument 继承 Document），表示整个 HTML 页面。document 是 window 对象的属性，因此是一个全局对象。Document 类型的节点有以下特征： 
- nodeType 等于 9； 

- nodeName 值为"#document"； 

- nodeValue 值为 null； 

- parentNode 值为 null； 

- ownerDocument 值为 null； 

- 子节点可以是 DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction 或 Comment 类型。 

Document 类型可以表示 HTML 页面或其他 XML 文档，但最常用的还是通过 HTMLDocument 的实 例取得 document 对象。document 对象可用于获取关于页面的信息以及操纵其外观和底层结构。

### 文档子节点

所有主流浏览器都支持 document.documentElement 和 document.body。

#### documentElement 属性

虽然 DOM 规范规定 Document 节点的子节点可以是 DocumentType、Element、Processing- Instruction 或 Comment，但也提供了两个访问子节点的快捷方式。第一个是 documentElement 属 性，始终指向 HTML 页面中的<html>元素。虽然 document.childNodes 中始终有<html>元素，但使用 documentElement 属性可以更快更直接地访问该元素。假如有以下简单的页面：

```html
<html>
    <body>
    </body>
</html>
```

浏览器解析完这个页面之后，文档只有一个子节点，即<html>元素。这个元素既可以通过documentElement 属性获取，也可以通过 childNodes 列表访问，如下所示：

```js
let html = document.documentElement; // 取得对<html>的引用
alert(html === document.childNodes[0]); // true
alert(html === document.firstChild); // true
```

这个例子表明 documentElement、 firstChild 和 childNodes[0]都指向同一个值，即<html>元素。

#### body 属性

作为 HTMLDocument 的实例，document 对象还有一个 body 属性，直接指向<body>元素。因为这个元素是开发者使用最多的元素，所以 JavaScript 代码中经常可以看到 document.body，比如：

```js
let body = document.body; // 取得对<body>的引用
```

Document 类型另一种可能的子节点是 DocumentType。<!doctype>标签是文档中独立的部分，其信息可以通过 doctype 属性（在浏览器中是 document.doctype）来访问，比如：

```js
let doctype = document.doctype; // 取得对<!doctype>的引用
```

另外，严格来讲出现在<html>元素外面的注释也是文档的子节点，它们的类型是 Comment。不过，由于浏览器实现不同，这些注释不一定能被识别，或者表现可能不一致。

一般来说，appendChild()、removeChild()和 replaceChild()方法不会用在 document 对象上。这是因为文档类型（如果存在）是只读的，而且只能有一个 Element 类型的子节点（即<html>，已经存在了）。

### 文档信息

