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

### 1 Document 类型节点

Document 类型是 JavaScript 中表示文档节点的类型。在浏览器中，文档对象 document 是 HTMLDocument 的实例（HTMLDocument 继承 Document），表示整个 HTML 页面。document 是 window 对象的属性，因此是一个全局对象。Document 类型的节点有以下特征： 
- nodeType 等于 9； 

- nodeName 值为"#document"； 

- nodeValue 值为 null； 

- parentNode 值为 null； 

- ownerDocument 值为 null； 

- 子节点可以是 DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction 或 Comment 类型。 

Document 类型可以表示 HTML 页面或其他 XML 文档，但最常用的还是通过 HTMLDocument 的实 例取得 document 对象。document 对象可用于获取关于页面的信息以及操纵其外观和底层结构。

### 2 文档子节点

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

### 3 文档信息

document 作为 HTMLDocument 的实例，还有一些标准 Document 对象上所没有的属性。这些属性 提供浏览器所加载网页的信息。其中第一个属性是 title，包含<title>元素中的文本，通常显示在浏 览器窗口或标签页的标题栏。通过这个属性可以读写页面的标题，修改后的标题也会反映在浏览器标题 栏上。不过，修改 title 属性并不会改变<title>元素。下面是一个例子：

```js
// 读取文档标题
let originalTitle = document.title;
// 修改文档标题
document.title = "New page title";
```

接下来要介绍的 3 个属性是 URL、domain 和 referrer。其中，URL 包含当前页面的完整 URL（地 址栏中的 URL），domain 包含页面的域名，而 referrer 包含链接到当前页面的那个页面的 URL。如 果当前页面没有来源，则 referrer 属性包含空字符串。所有这些信息都可以在请求的 HTTP 头部信息 中获取，只是在 JavaScript 中通过这几个属性暴露出来而已，如下面的例子所示：

```js
// 取得完整的 URL
let url = document.URL;
// 取得域名
let domain = document.domain;
// 取得来源
let referrer = document.referrer;
```

URL 跟域名是相关的。比如，如果 document.URL 是 http://www.wrox.com/WileyCDA/，则document.domain 就是 www.wrox.com。

在这些属性中，只有 domain 属性是可以设置的。出于安全考虑，给 domain 属性设置的值是有限制的。如果 URL 包含子域名如 p2p.wrox.com，则可以将 domain 设置为"wrox.com"（URL 包含“www”时也一样，比如 www.wrox.com）。不能给这个属性设置 URL 中不包含的值，比如：

```js
// 页面来自 p2p.wrox.com
document.domain = "wrox.com"; // 成功
document.domain = "nczonline.net"; // 出错！
```

当页面中包含来自某个不同子域的窗格（<frame>）或内嵌窗格（<iframe>）时，设置 document.domain 是有用的。因为跨源通信存在安全隐患，所以不同子域的页面间无法通过 JavaScript 通信。此时，在每个页面上把 document.domain 设置为相同的值，这些页面就可以访问对方的 JavaScript 对象了。比如，一个加载自 www.wrox.com 的页面中包含一个内嵌窗格，其中的页面加载自 p2p.wrox.com。这两个页面的 document.domain 包含不同的字符串，内部和外部页面相互之间不能 访问对方的 JavaScript 对象。如果每个页面都把 document.domain 设置为 wrox.com，那这两个页面 之间就可以通信了

浏 览 器 对 domain 属 性 还 有 一 个 限 制 ， 即 这 个 属 性 一 旦 放 松 就 不 能 再 收 紧 。 比 如 ， 把document.domain 设置为"wrox.com"之后，就不能再将其设置回"p2p.wrox.com"，后者会导致错误，比如：

```js
// 页面来自 p2p.wrox.com
document.domain = "wrox.com"; // 放松，成功
document.domain = "p2p.wrox.com"; // 收紧，错误！
```

### 4 定位元素

使用 DOM 最常见的情形可能就是获取某个或某组元素的引用，然后对它们执行某些操作。 document 对象上暴露了一些方法，可以实现这些操作。getElementById()和 getElementsBy- TagName()就是 Document 类型提供的两个方法。

#### getElementById()

 getElementById()方法接收一个参数，即要获取元素的 ID，如果找到了则返回这个元素，如果 没找到则返回 null。参数 ID 必须跟元素在页面中的 id 属性值完全匹配，包括大小写。比如页面中有 以下元素：

```html
<div id="myDiv">Some text</div>
```

可以使用如下代码取得这个元素：

```js
let div = document.getElementById("myDiv"); // 取得对这个<div>元素的引用
//但参数大小写不匹配会返回 null：
let div = document.getElementById("mydiv"); // null
```

如果页面中存在多个具有相同 ID 的元素，则 getElementById()返回在文档中出现的第一个元素。

#### getElementsByTagName()

getElementsByTagName()是另一个常用来获取元素引用的方法。这个方法接收一个参数，即要 获取元素的标签名，返回包含零个或多个元素的 NodeList。在 HTML 文档中，这个方法返回一个 HTMLCollection 对象。考虑到二者都是“实时”列表，HTMLCollection 与 NodeList 是很相似的。 例如，下面的代码会取得页面中所有的<img>元素并返回包含它们的 HTMLCollection：

```js
let images = document.getElementsByTagName("img");
```

这里把返回的 HTMLCollection 对象保存在了变量 images 中。与 NodeList 对象一样，也可以使用中括号或 item()方法从 HTMLCollection 取得特定的元素。而取得元素的数量同样可以通过length 属性得知，如下所示：

```js
alert(images.length); // 图片数量
alert(images[0].src); // 第一张图片的 src 属性
alert(images.item(0).src); // 同上
```

#### namedItem()

HTMLCollection 对象还有一个额外的方法 namedItem()，可通过标签的 name 属性取得某一项的引用。例如，假设页面中包含如下的<img>元素：

```html
<img src="myimage.gif" name="myImage">
```

那么也可以像这样从 images 中取得对这个<img>元素的引用：

```js
let myImage = images.namedItem("myImage");
```

这样，HTMLCollection 就提供了除索引之外的另一种获取列表项的方式，从而为取得元素提供了便利。对于 name 属性的元素，还可以直接使用中括号来获取，如下面的例子所示：

```js
let myImage = images["myImage"];
```

对 HTMLCollection 对象而言，中括号既可以接收数值索引，也可以接收字符串索引。而在后台，数值索引会调用 item()，字符串索引会调用 namedItem()。

要取得文档中的所有元素，可以给 getElementsByTagName()传入*。在 JavaScript 和 CSS 中，一般被认为是匹配一切的字符。来看下面的例子：

```js
let allElements = document.getElementsByTagName("*");
```

这行代码可以返回包含页面中所有元素的 HTMLCollection 对象，顺序就是它们在页面中出现的顺序。因此第一项是<html>元素，第二项是<head>元素，以此类推。

**注意** 对于 document.getElementsByTagName()方法，虽然规范要求区分标签的大小 写，但为了最大限度兼容原有 HTML 页面，实际上是不区分大小写的。如果是在 XML 页 面（如 XHTML）中使用，那么 document.getElementsByTagName()就是区分大小 写的。

#### getElementsByName()

HTMLDocument 类型上定义的获取元素的第三个方法是 getElementsByName()。顾名思义，这个方法会返回具有给定 name 属性的所有元素。getElementsByName()方法最常用于单选按钮，因为同一字段的单选按钮必须具有相同的 name 属性才能确保把正确的值发送给服务器

```html
<fieldset>
	<legend>Which color do you prefer?</legend>
	<ul>
		<li>
			<input type="radio" value="red" name="color" id="colorRed">
			<label for="colorRed">Red</label>
		</li>
		<li>
			<input type="radio" value="green" name="color" id="colorGreen">
			<label for="colorGreen">Green</label>
		</li>
		<li>
			<input type="radio" value="blue" name="color" id="colorBlue">
			<label for="colorBlue">Blue</label>
		</li>
	</ul>
</fieldset>
```

这里所有的单选按钮都有名为"color"的 name 属性，但它们的 ID 都不一样。这是因为 ID 是为了匹配对应的<label>元素，而 name 相同是为了保证只将三个中的一个值发送给服务器。然后就可以像下面这样取得所有单选按钮：

```js
let radios = document.getElementsByName("color");
```

与 getElementsByTagName()一样，getElementsByName()方法也返回 HTMLCollection。不过在这种情况下，namedItem()方法只会取得第一项（因为所有项的 name 属性都一样）。

### 5 特殊集合

document 对象上还暴露了几个特殊集合，这些集合也都是 HTMLCollection 的实例。这些集合是 访问文档中公共部分的快捷方式，列举如下。
- document.anchors 包含文档中所有带 name 属性的<a>元素。

- document.applets 包含文档中所有<applet>元素（因为<applet>元素已经不建议使用，所 以这个集合已经废弃）。

- document.forms 包含文档中所有<form>元素（与 document.getElementsByTagName ("form") 返回的结果相同）。

- document.images 包含文档中所有<img>元素（与 document.getElementsByTagName ("img") 返回的结果相同）。

- document.links 包含文档中所有带 href 属性的<a>元素。

这些特殊集合始终存在于 HTMLDocument 对象上，而且与所有 HTMLCollection 对象一样，其内 容也会实时更新以符合当前文档的内容。

### 6 DOM 兼容性检测

由于 DOM 有多个 Level 和多个部分，因此确定浏览器实现了 DOM 的哪些部分是很必要的。 document.implementation 属性是一个对象，其中提供了与浏览器 DOM 实现相关的信息和能力。 DOM Level 1 在 document.implementation 上只定义了一个方法，即 hasFeature()。这个方法接 收两个参数：特性名称和 DOM 版本。如果浏览器支持指定的特性和版本，则 hasFeature()方法返回 true，如下面的例子所示：

```js
let hasXmlDom = document.implementation.hasFeature("XML", "1.0");
```

由于实现不一致，**因此 hasFeature()的返回值并不可靠。目前这个方法已经被废弃，不再建议使用**。为了向后兼容，目前主流浏览器仍然支持这个方法，但无论检测什么都一律返回 true。

### 7 文档写入

document 对象有一个古老的能力，即向网页输出流中写入内容。这个能力对应 4 个方法：write()、 writeln()、open()和 close()。其中，write()和 writeln()方法都接收一个字符串参数，可以将 这个字符串写入网页中。write()简单地写入文本，而 writeln()还会在字符串末尾追加一个换行符 （\n）。这两个方法可以用来在页面加载期间向页面中动态添加内容，如下所示：

```html
<html>
	<head>
		<title>document.write() Example</title>
	</head>
	<body>
		<p>The current date and time is:
		<script type="text/javascript">
			document.write("<strong>" + (new Date()).toString() + "</strong>");
		</script>
		</p>
	</body>
</html>
```

这个例子会在页面加载过程中输出当前日期和时间。日期放在了<strong>元素中，如同它们之前 就包含在 HTML 页面中一样。这意味着会创建一个 DOM 元素，以后也可以访问。通过 write()和 writeln()输出的任何 HTML 都会以这种方式来处理。 

write()和 writeln()方法经常用于动态包含外部资源，如 JavaScript 文件。在包含 JavaScript 文 件时，记住不能像下面的例子中这样直接包含字符串"</script>"，因为这个字符串会被解释为脚本块 的结尾，导致后面的代码不能执行：

```html
<html>
	<head>
		<title>document.write() Example</title>
	</head>
	<body>
		<p>The current date and time is:
		<script type="text/javascript">
			document.write("<script type=\"text/javascript\" src=\"file.js\">"+"</script>");
		</script>
		</p>
	</body>
</html>
```

虽然这样写看起来没错，但输出之后的"</script>"会匹配最外层的<script>标签，导致页面中显示出");。为避免出现这个问题，需要对前面的例子稍加修改：

```html
<html>
	<head>
		<title>document.write() Example</title>
	</head>
	<body>
		<p>The current date and time is:
		<script type="text/javascript">
			document.write("<script type=\"text/javascript\" src=\"file.js\">"+"<\/script>");
		</script>
		</p>
	</body>
</html>
```

这里的字符串"<\/script>"不会再匹配最外层的<script>标签，因此不会在页面中输出额外内容。

前面的例子展示了在页面渲染期间通过 document.write()向文档中输出内容。如果是在页面加载完之后再调用 document.write()，则输出的内容会重写整个页面，如下面的例子所示：

```html
<html>
	<head>
		<title>document.write() Example</title>
	</head>
	<body>
		<p>This is some content that you won't get to see because it will be overwritten.</p>
            <script type="text/javascript">
                window.onload = function(){
                	document.write("Hello world!");
                };
			</script>
		</p>
	</body>
</html>
```

这个例子使用了 window.onload 事件处理程序，将调用 document.write()的函数推迟到页面加载完毕后执行。执行之后，字符串"Hello world!"会重写整个页面内容。

open()和 close()方法分别用于打开和关闭网页输出流。在调用 write()和 writeln()时，这两个方法都不是必需的。

**注意** 严格的 XHTML 文档不支持文档写入。对于内容类型为 application/xml+xhtml的页面，这些方法不起作用。

## 1.3 Element 类型

除了 Document 类型，Element 类型就是 Web开发中最常用的类型了。Element 表示 XML或 HTML元素，对外暴露出访问元素标签名、子节点和属性的能力。Element 类型的节点具有以下特征：

- nodeType 等于 1；
- nodeName 值为元素的标签名；
- nodeValue 值为 null；
- parentNode 值为 Document 或 Element 对象；
- 子节点可以是 Element、Text、Comment、ProcessingInstruction、CDATASection、EntityReference 类型。

可以通过 nodeName 或 tagName 属性来获取元素的标签名。这两个属性返回同样的值（添加后一个属性明显是为了不让人误会）。比如有下面的元素：

```html
<div id="myDiv"></div>
```

可以像这样取得这个元素的标签名：

```js
let div = document.getElementById("myDiv");
alert(div.tagName); // "DIV"
alert(div.tagName == div.nodeName); // true
```

例子中的元素标签名为 div，ID 为"myDiv"。注意，div.tagName 实际上返回的是"DIV"而不是 "div"。在 HTML 中，元素标签名始终以全大写表示；在 XML（包括 XHTML）中，标签名始终与源 代码中的大小写一致。如果不确定脚本是在 HTML 文档还是 XML 文档中运行，最好将标签名转换为小 写形式，以便于比较：

```js
if (element.tagName == "div"){ // 不要这样做，可能出错！
	// do something here
}
if (element.tagName.toLowerCase() == "div"){ // 推荐，适用于所有文档
	// 做点什么
}
```

这个例子演示了比较 tagName 属性的情形。第一个是容易出错的写法，因为 HTML 文档中 tagName返回大写形式的标签名。第二个先把标签名转换为全部小写后再比较，这是推荐的做法，因为这对 HTML和 XML 都适用。

### 1 HTML 元素

**所有 HTML 元素都通过 HTMLElement 类型表示，包括其直接实例和间接实例**。另外，**HTMLElement 直接继承 Element 并增加了一些属性。每个属性都对应下列属性之一**，它们是所有 HTML 元素上都有 的标准属性：

- id，元素在文档中的唯一标识符；
- title，包含元素的额外信息，通常以提示条形式展示；
- lang，元素内容的语言代码（很少用）；
- dir，语言的书写方向（"ltr"表示从左到右，"rtl"表示从右到左，同样很少用）；
- className，相当于 class 属性，用于指定元素的 CSS 类（因为 class 是 ECMAScript 关键字，所以不能直接用这个名字）。

所有这些都可以用来获取对应的属性值，也可以用来修改相应的值。比如有下面的 HTML 元素：

```html
<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
```

这个元素中的所有属性都可以使用下列 JavaScript 代码读取：

```js
let div = document.getElementById("myDiv");
alert(div.id); // "myDiv"
alert(div.className); // "bd"
alert(div.title); // "Body text"
alert(div.lang); // "en"
alert(div.dir); // "ltr"
```

而且，可以使用下列代码修改元素的属性：

```js
div.id = "someOtherId";
div.className = "ft";
div.title = "Some other text";
div.lang = "fr";
div.dir ="rtl";
```

**并非所有这些属性的修改都会对页面产生影响**。比如，把 id 或 lang 改成其他值对用户是不可见 的（假设没有基于这两个属性应用 CSS 样式），而修改 title 属性则只会在鼠标移到这个元素上时才会 反映出来。修改 dir 会导致页面文本立即向左或向右对齐。修改 className 会立即反映应用到新类名 的 CSS 样式（如果定义了不同的样式）。

如前所述，所有 HTML 元素都是 HTMLElement 或其子类型的实例。下表列出了所有 HTML 元素及其对应的类型（斜体表示已经废弃的元素）。

### 2. 取得属性

每个元素都有零个或多个属性，通常用于为元素或其内容附加更多信息。与属性相关的 DOM 方法 主要有 3 个：getAttribute()、setAttribute()和 removeAttribute()。这些方法主要用于操纵 属性，包括在 HTMLElement 类型上定义的属性。下面看一个例子：

```js
let div = document.getElementById("myDiv");
alert(div.getAttribute("id")); // "myDiv"
console.log(div.id);  //"myDiv"
alert(div.getAttribute("class")); // "bd"
alert(div.getAttribute("title")); // "Body text"
alert(div.getAttribute("lang")); // "en"
alert(div.getAttribute("dir")); // "ltr"
```

**注意传给 getAttribute()的属性名与它们实际的属性名是一样的**，因此这里要传"class"而非"className"（className 是作为对象属性时才那么拼写的）。**如果给定的属性不存在，则 getAttribute() 返回 null。**

getAttribute()方法**也能取得**不是 HTML 语言正式属性的**自定义属性的值**。比如下面的元素：

```html
<div id="myDiv" my_special_attribute="hello!"></div>
```

这个元素有一个自定义属性 my_special_attribute，值为"hello!"。可以像其他属性一样使用getAttribute()取得这个属性的值：

```js
let value = div.getAttribute("my_special_attribute");
```

**注意，属性名不区分大小写**，因此"ID"和"id"被认为是同一个属性。另外，**根据 HTML5 规范的要求，自定义属性名应该前缀 data-以方便验证。**

**元素的所有属性也可以通过相应 DOM 元素对象的属性来取得**。当然，这包括 HTMLElement 上定 义的直接映射对应属性的 5 个属性，还有所有公认（非自定义）的属性也会被添加为 DOM 对象的属性。 比如下面的例子：

```html
<div id="myDiv" align="left" my_special_attribute="hello"></div>
```

因为 id 和 align 在 HTML 中是<div>元素公认的属性，所以 DOM 对象上也会有这两个属性。但my_special_attribute 是自定义属性，因此不会成为 DOM 对象的属性。

通过 DOM 对象访问的属性中有**两个返回的值**跟使用 getAttribute()取得的值**不一样**。首先是 **style 属性**，这个属性用于为元素设定 CSS 样式。在使用 getAttribute()访问 style 属性时，返回的 是 CSS 字符串。而在通过 DOM 对象的属性访问时，style 属性返回的是一个（CSSStyleDeclaration） 对象。DOM 对象的 style 属性用于以编程方式读写元素样式，因此不会直接映射为元素中 style 属 性的字符串值。

第二个属性其实是一类，即**事件处理程序（或者事件属性）**，比如 onclick。在元素上使用事件属 性时（比如 onclick），属性的值是一段 JavaScript 代码。如果使用 getAttribute()访问事件属性， 则返回的是字符串形式的源代码。而通过 DOM 对象的属性访问事件属性时返回的则是一个 JavaScript 函数（未指定该属性则返回 null）。这是因为 onclick 及其他事件属性是可以接受函数作为值的。

考虑到以上差异，开发者在进行 DOM编程时通常会**放弃使用 getAttribute()而只使用对象属性**。getAttribute()主要用于取得自定义属性的值。

### 3.设置属性

与 getAttribute()配套的方法是 setAttribute()，这个方法接收两个参数：**要设置的属性名** 和**属性的值**。如果属性已经存在，则 setAttribute()会以指定的值替换原来的值；如果属性不存在， 则 setAttribute()会以指定的值创建该属性。下面看一个例子：

```js
div.setAttribute("id", "someOtherId");
div.setAttribute("class", "ft");
div.setAttribute("title", "Some other text");
div.setAttribute("lang","fr");
div.setAttribute("dir", "rtl");
```

**setAttribute()适用于 HTML 属性，也适用于自定义属性**。另外，使用 setAttribute()方法 设置的属性名**会规范为小写形式**，因此"ID"会变成"id"。 

因为元素属性也是 DOM 对象属性，**所以直接给 DOM 对象的属性赋值也可以设置元素属性的值**， 如下所示：

```js
div.id = "someOtherId";
div.align = "left";
```

注意，在 DOM 对象上添加自定义属性，如下面的例子所示，**不会自动让它变成元素的属性**：

```js
div.mycolor = "red";
alert(div.getAttribute("mycolor")); // null（IE 除外）
```

这个例子添加了一个自定义属性 mycolor 并将其值设置为"red"。在多数浏览器中，这个属性不 会自动变成元素属性。因此调用 getAttribute()取得 mycolor 的值会返回 null。 

最后一个方法 **removeAttribute()**用于从元素中删除属性。**这样不单单是清除属性的值，而是会 把整个属性完全从元素中去掉，**如下所示：

```js
div.removeAttribute("class");
```

这个方法用得并不多，但在序列化 DOM 元素时可以通过它控制要包含的属性。

### 4.attributes 属性

Element 类型是唯一使用 attributes 属性的 DOM 节点类型。attributes 属性包含一个 NamedNodeMap 实例，是一个类似 NodeList 的“实时”集合。元素的每个属性都表示为一个 Attr 节 点，并保存在这个 NamedNodeMap 对象中。NamedNodeMap 对象包含下列方法：

- getNamedItem(name)，返回 nodeName 属性等于 name 的节点；
- removeNamedItem(name)，删除 nodeName 属性等于 name 的节点；
- setNamedItem(node)，向列表中添加 node 节点，以其 nodeName 为索引；
- item(pos)，返回索引位置 pos 处的节点。

attributes 属性中的每个节点的 nodeName 是对应属性的名字，nodeValue 是属性的值。比如，要取得元素 id 属性的值，可以使用以下代码：

```js
let id = element.attributes.getNamedItem("id").nodeValue;
```

下面是使用中括号访问属性的简写形式：

```js
let id = element.attributes["id"].nodeValue;
```

同样，也可以用这种语法设置属性的值，即先取得属性节点，再将其 nodeValue 设置为新值，如下所示：

```js
element.attributes["id"].nodeValue = "someOtherId";
```

removeNamedItem()方法与元素上的 removeAttribute()方法类似，也是删除指定名字的属性。 下面的例子展示了这两个方法唯一的不同之处，就是 removeNamedItem()返回表示被删除属性的 Attr 节点：

```js
let oldAttr = element.attributes.removeNamedItem("id");
```

setNamedItem()方法很少使用，它接收一个属性节点，然后给元素添加一个新属性，如下所示：

```js
element.attributes.setNamedItem(newAttr);
```

一般来说，因为使用起来更简便，通常开发者更喜欢使用 getAttribute()、removeAttribute() 和 setAttribute()方法，而不是刚刚介绍的 NamedNodeMap 对象的方法。 

**attributes 属性最有用的场景是需要迭代元素上所有属性的时候**。这时候往往是要把 DOM 结构 序列化为 XML 或 HTML 字符串。比如，以下代码能够迭代一个元素上的所有属性并以 attribute1= "value1" attribute2="value2"的形式生成格式化字符串：

```js
function outputAttributes(element) {
	let pairs = [];
	for (let i = 0, len = element.attributes.length; i < len; ++i) {
		const attribute = element.attributes[i];
		pairs.push(`${attribute.nodeName}="${attribute.nodeValue}"`);
	}
	return pairs.join(" ");
}
```

这个函数使用数组存储每个名/值对，迭代完所有属性后，再将这些名/值对用空格拼接在一起。（这 个技术常用于序列化为长字符串。）这个函数中的 for 循环使用 attributes.length 属性迭代每个属 性，将每个属性的名字和值输出为字符串。不同浏览器返回的 attributes 中的属性顺序也可能不一样。 HTML 或 XML 代码中属性出现的顺序不一定与 attributes 中的顺序一致。

### 5.创建元素

可以使用 document.createElement()方法创建新元素。这个方法接收一个参数，即要创建元素 的标签名。在 HTML 文档中，标签名是不区分大小写的，而 XML 文档（包括 XHTML）是区分大小写 的。要创建<div>元素，可以使用下面的代码：

```js
let div = document.createElement("div");
```

使用 createElement()方法创建新元素的同时也会将其 ownerDocument 属性设置为 document。此时，可以再为其添加属性、添加更多子元素。比如：

```js
div.id = "myNewDiv";
div.className = "box";
```

在新元素上设置这些属性只会附加信息。因为这个元素还没有添加到文档树，所以不会影响浏览器 显示。**要把元素添加到文档树，可以使用 appendChild()、insertBefore()或 replaceChild()。** 比如，以下代码会把刚才创建的元素添加到文档的<body>元素中：

```js
document.body.appendChild(div);
```

元素被添加到文档树之后，浏览器会立即将其渲染出来。之后再对这个元素所做的任何修改，都会立即在浏览器中反映出来。

### 6.元素后代

**元素可以拥有任意多个子元素和后代元素，因为元素本身也可以是其他元素的子元素。**childNodes 属性包含元素所有的子节点，这些子节点可能是其他元素、文本节点、注释或处理指令。不同浏览器在 识别这些节点时的表现有明显不同。比如下面的代码：

```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

在解析以上代码时，<ul>元素会包含 7 个子元素，其中 3 个是<li>元素，还有 4 个 Text 节点（表 示<li>元素周围的空格）。如果把元素之间的空格删掉，变成下面这样，则所有浏览器都会返回同样数 量的子节点：

```html
<ul id="myList"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>
```

所有浏览器解析上面的代码后，<ul>元素都会包含 3 个子节点。考虑到这种情况，通常在执行某个操作之后需要先检测一下节点的 nodeType，如下所示：

```js
for (let i = 0, len = element.childNodes.length; i < len; ++i) {
    if (element.childNodes[i].nodeType == 1) {
    	// 执行某个操作
    }
}
```

以上代码会遍历某个元素的子节点，并且只在 nodeType 等于 1（即 Element 节点）时执行某个 操作。 

**要取得某个元素的子节点和其他后代节点，可以使用元素的 getElementsByTagName()方法**。在 元素上调用这个方法与在文档上调用是一样的，只不过搜索范围限制在当前元素之内，即只会返回当前 元素的后代。对于本节前面<ul>的例子，可以像下面这样取得其所有的<li>元素：

```js
let ul = document.getElementById("myList");
let items = ul.getElementsByTagName("li");
```

这里例子中的<ul>元素只有一级子节点，如果它包含更多层级，则所有层级中的<li>元素都会返回。

## 1.4 Text 类型

Text 节点由 Text 类型表示，包含按字面解释的纯文本，也可能包含转义后的 HTML 字符，但不含 HTML 代码。Text 类型的节点具有以下特征：

- nodeType 等于 3；
- nodeName 值为"#text"；
- nodeValue 值为节点中包含的文本；
- parentNode 值为 Element 对象；
- 不支持子节点。

Text 节点中包含的文本可以通过 nodeValue 属性访问，也可以通过 data 属性访问，这两个属性 包含相同的值。修改 nodeValue 或 data 的值，也会在另一个属性反映出来。文本节点暴露了以下操 作文本的方法：

- appendData(text)，向节点末尾添加文本 text；
- deleteData(offset, count)，从位置 offset 开始删除 count 个字符；
- insertData(offset, text)，在位置 offset 插入 text；
- replaceData(offset, count, text)，用 text 替换从位置 offset 到 offset + count 的文本；
- splitText(offset)，在位置 offset 将当前文本节点拆分为两个文本节点；
- substringData(offset, count)，提取从位置 offset 到 offset + count 的文本。

除了这些方法，还可以通过 length 属性获取文本节点中包含的字符数量。这个值等于 nodeValue. length 和 data.length。 

**默认情况下，包含文本内容的每个元素最多只能有一个文本节点**。例如：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<style>
	</style>
</head>	
<body>
	<!-- 没有内容，因此没有文本节点 -->
	<div></div>
	<!-- 有空格，因此有一个文本节点 -->
	<div> </div>
	<!-- 有内容，因此有一个文本节点 -->
	<div>Hello World!</div>
	<button onclick="changeText()">更改文本</button>

</body>
<script type="text/javascript">
	let div=document.getElementsByTagName("div");
	console.log(div);
	function changeText(){
		div[1].firstChild.nodeValue = "Some other message";
		console.log("dd");
	}

</script>
</html>
```

示例中的第一个<div>元素中不包含内容，因此不会产生文本节点。只要开始标签和结束标签之间 有内容，就会创建一个文本节点，因此第二个<div>元素会有一个文本节点的子节点，虽然它只包含空 格。这个文本节点的 nodeValue 就是一个空格。第三个<div>元素也有一个文本节点的子节点，其 nodeValue 的值为"Hello World!"。下列代码可以用来访问这个文本节点：

```js
let textNode = div.firstChild; // 或 div.childNodes[0]
```

取得文本节点的引用后，可以像这样来修改它：

```js
	let div=document.getElementsByTagName("div");
	console.log(div);
	function changeText(){
		div[1].firstChild.nodeValue = "Some other message";
		console.log("dd");
	}

```

只要节点在当前的文档树中，这样的修改就会马上反映出来。修改文本节点还有一点要注意，就是 HTML 或 XML 代码（取决于文档类型）会被转换成实体编码，即小于号、大于号或引号会被转义，如 下所示：

```js
// 输出为"Some &lt;strong&gt;other&lt;/strong&gt; message"
div.firstChild.nodeValue = "Some <strong>other</strong> message";
```

这实际上是在将 HTML 字符串插入 DOM 文档前进行编码的有效方式。

### 1. 创建文本节点

document.createTextNode()可以用来创建新文本节点，它接收一个参数，即要插入节点的文本。跟设置已有文本节点的值一样，这些要插入的文本也会应用 HTML 或 XML 编码，如下面的例子所示：

```js
let textNode = document.createTextNode("<strong>Hello</strong> world!");
```

创建新文本节点后，其 ownerDocument 属性会被设置为 document。但在把这个节点添加到文档树之前，我们不会在浏览器中看到它。以下代码创建了一个<div>元素并给它添加了一段文本消息：

```js
let element = document.createElement("div");
element.className = "message";
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
document.body.appendChild(element);
```

这个例子首先创建了一个<div>元素并给它添加了值为"message"的 class 属性，然后又创建了 一个文本节点并添加到该元素。最后一步是把这个元素添加到文档的主体上，这样元素及其包含的文本 会出现在浏览器中。 

一般来说一个元素只包含一个文本子节点。不过，也可以让元素包含多个文本子节点，如下面的例 子所示：

```js
let element = document.createElement("div");
element.className = "message";
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
let anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);
document.body.appendChild(element);
```

在将一个文本节点作为另一个文本节点的同胞插入后，两个文本节点的文本之间不会包含空格。

### 2. 规范化文本节点

DOM 文档中的同胞文本节点可能导致困惑，因为一个文本节点足以表示一个文本字符串。同样， DOM 文档中也经常会出现两个相邻文本节点。为此，有一个方法可以合并相邻的文本节点。这个方法 叫 normalize()，是在 Node 类型中定义的（因此所有类型的节点上都有这个方法）。在包含两个或多 个相邻文本节点的父节点上调用 normalize()时，所有同胞文本节点会被合并为一个文本节点，这个 文本节点的 nodeValue 就等于之前所有同胞节点 nodeValue 拼接在一起得到的字符串。来看下面的 例子：

```js
let element = document.createElement("div");
element.className = "message";
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
let anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);
document.body.appendChild(element);
alert(element.childNodes.length); // 2
element.normalize();
alert(element.childNodes.length); // 1
alert(element.firstChild.nodeValue); // "Hello world!Yippee!"
```

浏览器在解析文档时，永远不会创建同胞文本节点。同胞文本节点只会出现在 DOM 脚本生成的文档树中。

### 3. 拆分文本节点

Text 类型定义了一个与 normalize()相反的方法——splitText()。这个方法可以在指定的偏移 位置拆分 nodeValue，将一个文本节点拆分成两个文本节点。拆分之后，原来的文本节点包含开头到 偏移位置前的文本，新文本节点包含剩下的文本。这个方法返回新的文本节点，具有与原来的文本节点 相同的 parentNode。来看下面的例子：

```js
let element = document.createElement("div");
element.className = "message";
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
document.body.appendChild(element);
let newNode = element.firstChild.splitText(5);
alert(element.firstChild.nodeValue); // "Hello"
alert(newNode.nodeValue); // " world!"
alert(element.childNodes.length); // 2
```

在这个例子中，包含"Hello world!"的文本节点被从位置 5 拆分成两个文本节点。位置 5 对应 "Hello"和"world!"之间的空格，因此原始文本节点包含字符串"Hello"，而新文本节点包含文本"world!"（包含空格）。

**拆分文本节点最常用于从文本节点中提取数据的 DOM 解析技术。**

## 1.5 Comment 类型
