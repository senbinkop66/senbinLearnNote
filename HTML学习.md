# HTML基础

## HTML 元素

### HTML 元素

1. HTML 文档由 HTML 元素定义。
2. HTML 文档由嵌套的 HTML 元素构成。
3. 开始标签常被称为**起始标签（opening tag）**，结束标签常称为**闭合标签（closing tag）**。

### HTML 元素语法

- HTML 元素以**开始标签**起始
- HTML 元素以**结束标签**终止
- **元素的内容**是开始标签与结束标签之间的内容
- 某些 HTML 元素具有**空内容（empty content）**
- 空元素**在开始标签中进行关闭**（以开始标签的结束而结束）
- 大多数 HTML 元素可拥有**属性**

### 嵌套的 HTML 元素

```html
<!DOCTYPE html>
<html>
<body>
    <p>这是第一个段落。</p>
</body>
</html>
```

以上实例包含了三个 HTML 元素。

- `<html>` 元素定义了整个 HTML 文档。这个元素拥有一个开始标签 `<html>` ，以及一个结束标签 `</html>`。元素内容是另一个 HTML 元素（body 元素）。
- `<body>` 元素定义了 HTML 文档的主体。这个元素拥有一个开始标签 `<body>` 以及一个结束标签 `</body>`。元素内容是另一个 HTML 元素（p 元素）。
- 这个 `<p>` 元素定义了 HTML 文档中的一个段落。这个元素拥有一个开始标签 `<p>` 以及一个结束标签 `</p>`。元素内容是: 这是第一个段落。

### 不要忘记结束标签

即使您忘记了使用结束标签，大多数浏览器也会正确地显示 HTML：因为关闭标签是可选的。但不要依赖这种做法。忘记使用结束标签会产生不可预料的结果或错误。

### HTML 空元素

- 没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。
- `<br>` 就是没有关闭标签的空元素（`<br>` 标签定义换行）。
- 在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。
- 在开始标签中添加斜杠，比如 `<br />`，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。
- 即使 `<br>` 在所有浏览器中都是有效的，但使用 `<br />` 其实是更长远的保障。

### HTML 提示：使用小写标签

HTML 标签对大小写不敏感：`<P>` 等同于 `<p>`。许多网站都使用大写的 HTML 标签。建议使用小写标签，因为万维网联盟（W3C）在 HTML 4 中**推荐**使用小写，而在未来 (X)HTML 版本中**强制**使用小写。

## HTML 属性

### HTML 属性

- 属性是 HTML 元素提供的附加信息。
- HTML 元素可以设置**属性**
- 属性可以在元素中添加**附加信息**
- 属性一般描述于**开始标签**
- 属性总是以名称/值对的形式出现，**比如：name="value"**。

### HTML 属性常用引用属性值

- 属性值应该始终被包括在引号内。
- 双引号是最常用的，不过使用单引号也没有问题。
- **提示:** 在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：name='John "ShotGun" Nelson'

### HTML 提示：使用小写属性

- 属性和属性值对大小写不敏感。
- 不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。
- 而新版本的 (X)HTML 要求使用小写属性。

### 常见HTML 元素的属性

| 属性  |                             描述                             |
| :---: | :----------------------------------------------------------: |
| class | 为html元素定义一个或多个类名（classname）(类名从样式文件引入) |
|  id   |                       定义元素的唯一id                       |
| style |              规定元素的行内样式（inline style）              |
| title |            描述了元素的额外信息 (作为工具条使用)             |

### HTML 全局属性

|                             属性                             |                            描述                            |
| :----------------------------------------------------------: | :--------------------------------------------------------: |
| [accesskey] |                 设置访问元素的键盘快捷键。                 |
| [class] |                规定元素的类名（classname）                 |
| [contenteditable] |                 规定是否可编辑元素的内容。                 |
| [contextmenu] | 指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单 |
| [data-*] |                  用于存储页面的自定义数据                  |
| [dir] |                 设置元素中内容的文本方向。                 |
| [draggable] |                  指定某个元素是否可以拖动                  |
| [dropzone] |          指定是否将数据复制，移动，或链接，或删除          |
| [hidden] |              hidden 属性规定对元素进行隐藏。               |
| [id] |                     规定元素的唯一 id                      |
| [lang] |                 设置元素中内容的语言代码。                 |
| [spellcheck] |                    检测元素是否拼写错误                    |
| [style] |             规定元素的行内样式（inline style）             |
| [tabindex] |                设置元素的 Tab 键控制次序。                 |
| [title] |          规定元素的额外信息（可在工具提示中显示）          |
| [translate] |        指定是否一个元素的值在页面载入时是否需要翻译        |

## HTML 标题

### HTML 标题

- 标题（Heading）是通过 `<h1>` - `<h6>` 标签进行定义的。
- `<h1>` 定义最大的标题。 `<h6>` 定义最小的标题。
- **注释:** 浏览器会自动地在标题的前后添加空行。

### 标题很重要

- 请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成**粗体**或**大号**的文本而使用标题。
- 搜索引擎使用标题为您的网页的结构和内容编制索引。
- 因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。
- 应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

```html
	<h1>标题h1</h1>
	<h2>标题h2</h2>
	<h3>标题h3</h3>
	<h4>标题h4</h4>
	<h5>标题h5</h5>
	<h6>标题h6</h6>
```

## HTML 水平线

`<hr>` 标签在 HTML 页面中创建水平线，可用于分隔内容。

```html
<p>这是一个段落。</p>
<hr>
<p>这是一个段落。</p>
<hr>
<p>这是一个段落。</p>
```

## HTML 注释

可以将注释插入 HTML 代码中，这样可以提高其可读性，使代码更易被人理解。浏览器会忽略注释，也不会显示它们。注释写法如下:

```html
<p>这是一个段落。</p>
<!-- 这是一个注释 -->
<p>这是一个段落。</p>
<!--  -->
```

**注释:** 开始括号之后（左边的括号）需要紧跟一个叹号，结束括号之前（右边的括号）不需要，合理地使用注释可以对未来的代码编辑工作产生帮助。

## HTML 段落

- HTML 可以将文档分割为若干段落。
- 段落是通过 `<p>` 标签定义的。
- **注意：**浏览器会自动地在段落的前后添加空行。（`</p>` 是块级元素）

```html
<p>这是一个段落 </p>
<p>这是另一个段落</p>
```

## HTML 折行

- 如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 `<br>` 标签：
- `<br />` 元素是一个空的 HTML 元素。由于关闭标签没有任何意义，因此它没有结束标签。

```html
<p>这个<br>段落<br>演示了分行的效果</p>
```

## HTML 输出

- 我们无法确定 HTML 被显示的确切效果。屏幕的大小，以及对窗口的调整都可能导致不同的结果。
- 对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。
- 当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

## HTML 文本格式化

- HTML 中存在一些格式化文本的标签，它们可以被直接使用，而不用您再去写样式进行调整。

### HTML 格式化标签

- HTML 使用标签 `<b>` ("bold") 与 `<i>` ("italic") 对输出的文本进行格式, 如：**粗体** or *斜体*。这些HTML标签被称为格式化标签。
- 通常标签 `<strong>` 替换加粗标签 `<b>` 来使用, `<em>` 替换 `<i>` 标签使用。然而，这些标签的含义是不同的，`<b>` 与 `<i>` 定义粗体或斜体文本。`<strong>` 或者 `<em>` 意味着你要呈现的文本是重要的，所以要突出显示。现今所有主要浏览器都能渲染各种效果的字体。不过，未来浏览器可能会支持更好的渲染效果。

### HTML 文本格式化标签

- **<b>**   定义粗体文本
- **<em>**    定义着重文字
- **<i>** 定义斜体字
- **<small>** 定义小号字
- **<strong>**    定义加重语气
- **<sub>**   定义下标字
- **<sup>**   定义上标字
- **<ins>**   定义插入字
- **<del>**   定义删除字

```html
	<h3>HTML文本格式化标签</h3>
	<b>b 加粗文本</b><br>
	<i>i 斜体文本</i><br>
	A<sub>sub下标</sub><br>
	B<sup>sup上标</sup><br>
	<em>em 着重文字</em><br>
	<small>small 小号文字</small><br>
	<strong>strong 加重语气</strong><br>
	<ins>ins 插入字</ins><br>
	<del>del 删除字</del><br>
	<hr>
```

### HTML "计算机输出" 标签

- **<code>**  定义计算机代码
- **<kbd>**   定义键盘码
- **<samp>**  定义计算机代码样本
- **<var>**   定义变量
- **<pre>**   定义预格式文本

```html
	<h3>HTML计算机输出标签</h3>
	<code>code 计算机代码</code><br>
	<kbd>kbd 键盘码</kbd><br>
	<samp>samp 计算机代码样本</samp><br>
	<var> var 变量</var><br>
	<pre>pre 预格式文本</pre><br>
	<hr>
```

### HTML 引文, 引用, 及标签定义

- **<abbr>**  定义缩写
- **<address>**   定义地址
- **<bdo>**   定义文字方向
- **<blockquote>**    定义长的引用
- **<q>** 定义短的引用语
- **<cite>**  定义引用、引证
- **<dfn>**   定义一个定义项目。

```html
	<h3>HTML引文，引用，及标签定义</h3>
	<abbr>abbr 缩写</abbr><br>
	<address>address 地址</address><br>
	<bdo>bdo 文字方向</bdo><br>
	<blockquote>blockquote 长的引用</blockquote><br>
	<q>q 短的引用</q><br>
	<cite>cite 引用、引证</cite><br>
	<dfn>dfn 一个定义项目</dfn><br>
	<hr>
```

## HTML 链接

HTML 使用超级链接与网络上的另一个文档相连。几乎可以在所有的网页中找到链接。点击链接可以从一张页面跳转到另一张页面。

### HTML 链接（超链接）

HTML使用标签 `<a>` 来设置超文本链接。超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。

当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。在标签`<a>` 中使用了href属性来描述链接的地址。默认情况下，链接将以以下形式出现在浏览器中：

- 一个未访问过的链接显示为蓝色字体并带有下划线。
- 访问过的链接显示为紫色并带有下划线。
- 点击链接时，链接显示为红色并带有下划线。
- 注意：如果为这些超链接设置了 CSS 样式，展示样式会根据 CSS 的设定而显示。

### 链接语法

```html
<a href="url">链接文本</a>
```

href 属性描述了链接的目标。**提示:** "链接文本" 不必一定是文本。图片或其他 HTML 元素都可以成为链接。

### target 属性

使用 target 属性，你可以定义被链接的文档在何处显示。<a> 标签的 target 属性规定在何处打开链接文档。

```html
<a href="https://www.nowcoder.com/" target="_blank" rel="noopener noreferrer">访问牛客教程!</a>
<a href="https://mo.fish" target="_blank" rel="noopener no referrer">a 链接 新页面打开</a>
<a target="_blank|_self|_parent|_top|framename">
```

#### 属性值

|     值      |                 描述                 |
| :---------: | :----------------------------------: |
|   _blank    |      在新窗口中打开被链接文档。      |
|    _self    | 默认。在相同的框架中打开被链接文档。 |
|   _parent   |     在父框架集中打开被链接文档。     |
|    _top     |     在整个窗口中打开被链接文档。     |
| *framename* |    在指定的框架中打开被链接文档。    |

### id 属性

id属性可用于创建在一个HTML文档书签标记。

**提示:** 书签是不以任何特殊的方式显示，在HTML文档中是不显示的，所以对于读者来说是隐藏的。

```html
	<!-- 1. 在HTML文档中插入ID:  -->
	<a id="tips">有用的提示部分</a>
	<!-- 2. 在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"： -->
	<a href="#tips">访问有用的提示部分</a>
	<!-- 3. 或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"： -->
	<a href="https://www.nowcoder.com/html/html-links.html#tips">
	访问有用的提示部分</a>
```

### download 属性

- download 属性定义了下载链接的地址。
- href 属性必须在 `<a>` 标签中指定。
- 属性同样可以指定下载文件的名称。文件名称没有限定值，浏览器会自动在文件名称末尾添加该下载文件的后缀 (.img, .pdf, .txt, .html, 等)。
- download 属性是HTML5中新增的 `<a>` 标签属性。

```html
<a href="/images/logo.png" download="/images/logo.png">
```

### hreflang 属性

<a> 标签的 hreflang 属性用于指定被链接文档的语言。该属性只有设置了href属性才能起作用。

**注意：** 和 lang 属性不同的是，hreflang 属性不会指定标签中的内容所使用的语言，而是指定被 href 属性调用的文档所使用的语言。

```html
<a hreflang="en" href="http://www.nowcoder.com/">牛客教程</a>
<a hreflang="language_code">
```

*language_code*=双字符的语言代码，指定被链接文档的语言。

### media 属性

- media 属性规定目标 URL 是为什么类型的媒介/设备进行优化的。
- 该属性用于规定目标 URL 是为特殊设备（比如 iPhone）、语音或打印媒介设计的。
- 该属性可接受多个值。
- 只能在 href 属性存在时使用。
- 该属性是 HTML5 中的新属性。

```html
<a href="/tags/att-a-media.html?output=print" media="print and (resolution:300dpi)">可打印的媒体属性页</a>
```

#### 可能的运算符

| 运算符 |       描述        |
| :----: | :---------------: |
|  and   | 规定 AND 运算符。 |
|  not   | 规定 NOT 运算符。 |
|   ,    | 规定 OR 运算符。  |

#### 设备

|     值     |                    描述                    |
| :--------: | :----------------------------------------: |
|    all     |            默认。适合所有设备。            |
|   aural    |                语音合成器。                |
|  braille   |               盲文反馈装置。               |
|  handheld  |      手持设备（小屏幕、有限的带宽）。      |
| projection |                  投影机。                  |
|   print    |          打印预览模式/打印页面。           |
|   screen   |                计算机屏幕。                |
|    tty     | 电传打字机以及使用等宽字符网格的类似媒介。 |
|     tv     | 电视类型设备（低分辨率、有限的分页能力）。 |

#### 值

|         值          | 描述                                                         |
| :-----------------: | :----------------------------------------------------------- |
|        width        | 规定目标显示区域的宽度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (min-width:500px)" |
|       height        | 规定目标显示区域的高度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (max-height:700px)" |
|    device-width     | 规定目标显示器/纸张的宽度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (device-width:500px)" |
|    device-height    | 规定目标显示器/纸张的高度。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (device-height:500px)" |
|     orientation     | 规定目标显示器/纸张的取向。 可能的值："portrait" 或 "landscape" 例子：media="all and (orientation: landscape)" |
|    aspect-ratio     | 规定目标显示区域的宽度/高度比。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (aspect-ratio:16/9)" |
| device-aspect-ratio | 规定目标显示器/纸张的 device-width/device-height 比率。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (aspect-ratio:16/9)" |
|        color        | 规定目标显示器的 bits per color。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (color:3)" |
|     color-index     | 规定目标显示器能够处理的颜色数。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (min-color-index:256)" |
|     monochrome      | 规定在单色帧缓冲中的每像素比特。 可使用 "min-" 和 "max-" 前缀。 例子：media="screen and (monochrome:2)" |
|     resolution      | 规定目标显示器/纸张的像素密度 (dpi or dpcm)。 可使用 "min-" 和 "max-" 前缀。 例子：media="print and (resolution:300dpi)" |
|        scan         | 规定 tv 显示器的扫描方法。 可能的值是："progressive" 和 "interlace"。 例子：media="tv and (scan:interlace)" |
|        grid         | 规定输出设备是网格还是位图。 可能的值："1" 代表网格，"0" 是其他。 例子：media="handheld and (grid:1)" |

### rel 属性

- <a> 标签的 rel 属性用于指定当前文档与被链接文档的关系。只有在使用了 href 属性才能使用 rel属性。
- **注意：**尽管浏览器不会以任何方式使用该属性，不过搜索引擎可以利用该属性获得更多有关链接的信息。

```html
<a rel="nofollow" href="http://www.functravel.com/">Cheap Flights</a>
```

#### 属性值

|     值     |                             描述                             |
| :--------: | :----------------------------------------------------------: |
| alternate  |         文档的可选版本（例如打印页、翻译页或镜像）。         |
| stylesheet |                      文档的外部样式表。                      |
|   start    |                     集合中的第一个文档。                     |
|    next    |                     集合中的下一个文档。                     |
|    prev    |                     集合中的前一个文档。                     |
|  contents  |                          文档目录。                          |
|   index    |                          文档索引。                          |
|  glossary  |                文档中所用字词的术语表或解释。                |
| copyright  |                     包含版权信息的文档。                     |
|  chapter   |                          文档的章。                          |
|  section   |                          文档的节。                          |
| subsection |                         文档的子段。                         |
|  appendix  |                          文档附录。                          |
|    help    |                          帮助文档。                          |
|  bookmark  |                          相关文档。                          |
|            |                                                              |
|  nofollow  | Google 使用 "nofollow"，用于指定 Google 搜索引擎不要跟踪链接。 |
|  licence   |                                                              |
|    tag     |                                                              |
|   friend   |                                                              |

### type 属性

type 属性规定目标文档的 MIME 类型。只能在 href 属性存在时使用。

```html
<a href="//www.nowcoder.com/" type="text/html">nowcoder.com</a>
```



### 基本的注意事项 - 有用的提示

**注释：** 请始终将正斜杠添加到子文件夹。假如这样书写链接：`href="https://www.nowcoder.com/html"`，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：`href="https://www.nowcoder.com/html/"`。

### 创建电子邮件链接

```html
	<p>
	这是一个电子邮件链接：
	<a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
	发送邮件</a>
	</p>
```

### 

## HTML头部

### HTML  \<head\>  元素

`<head>` 元素包含了所有的头部标签元素。在 `<head>`元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。

可以添加在头部区域的元素标签为: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, `<noscript>`, `<base>`。

- **<head>**  定义了文档的信息
- **<title>** 定义了文档的标题
- **<base>**  定义了页面链接标签的默认链接地址
- **<link>**  定义了一个文档和外部资源之间的关系
- **<meta>**  定义了HTML文档中的元数据
- **<script>**    定义了客户端的脚本文件
- **<style>** 定义了HTML文档的样式文件

### HTML \<title\> 元素

`<title>` 标签定义了不同文档的标题。

`<title>` 在 HTML/XHTML 文档中是必须的。

`<title>` 元素:

- 定义了浏览器工具栏的标题
- 当网页添加到收藏夹时，显示在收藏夹中的标题
- 显示在搜索引擎结果页面的标题

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>文档标题</title>
</head>
<body>
```



### HTML\<base\> 元素

`<base>` 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接

```html
<head>
	<base href="http://www.nowcoder.com/images/" target="_blank">
</head>
```

### HTML \<link\> 元素

`<link>` 标签定义了文档与外部资源之间的关系。`<link>` 标签通常用于链接到样式表

```html
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### HTML \<style\> 元素

`<style>` 标签定义了HTML文档的样式文件引用地址.在`<style>` 元素中你也可以直接添加样式来渲染 HTML 文档.

```html
<head>
    <style type="text/css">
        body { background-color:yellow }
        p { color:blue }
    </style>
</head>
```

### HTML \<meta\> 元素

- meta标签描述了一些基本的元数据。
- `<meta>` 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。
- META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。
- 元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。
- `<meta>` 一般放置于 `<head>` 区域。

```html
<head>
	<meta charset="utf-8">
	<!-- 为搜索引擎定义关键词: -->
	<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
	<!-- 为网页定义描述内容: -->
	<meta name="description" content="免费 Web & 编程 教程">
	<!-- 定义网页作者: -->
	<meta name="author" content="Nowcoder">
	<!-- 每30秒钟刷新当前页面: -->
	<meta http-equiv="refresh" content="30">
</head>
```

### HTML \<script\> 元素

`<script>` 标签用于加载脚本文件，如： JavaScript。

## HTML 样式- CSS

CSS (Cascading Style Sheets) 用于渲染HTML元素标签的样式。

### 如何使用CSS

CSS 是在 HTML 4 开始使用的,是为了更好的渲染HTML元素而引入的.

CSS 可以通过以下方式添加到HTML中:

- 内联样式- 在HTML元素中使用"style" **属性**
- 内部样式表 -在HTML文档头部 `<head>` 区域使用 `<style>` **元素** 来包含CSS
- 外部引用 - 使用外部 CSS **文件**

最好的方式是通过外部引用CSS文件.

### 内联样式

当特殊的样式需要应用到个别元素时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。以下实例显示出如何改变段落的颜色和左外边距。

```html
<p style="color:blue;margin-left:20px;">这是一个段落。</p>
```

### 内部样式表

当单个文件需要特别样式时，就可以使用内部样式表。你可以在`<head>` 部分通过 `<style>` 标签定义内部样式表:

```html
<head>
<style type="text/css">
    body { background-color:yellow; }
    p { color:blue; }
</style>
</head>
```

### 外部样式表

当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。

```html
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### 已弃用的标签和属性

在HTML 4, 原来支持定义HTML元素样式的标签和属性已被弃用。这些标签将不支持新版本的HTML标签。

不建议使用的标签有: `<font>`, `<center>`, `<strike>` 。不建议使用的属性: color 和 bgcolor。

## HTML 图像

使用`<img>`标签定义 HTML 页面中的图像，`<img>`标签有两个必需的属性：`src`和`alt`。还有一个可选的title属性。

### 图像标签

在 HTML 中，图像由`<img>` 标签定义。<img> 是空标签，意思是说，它只包含属性，并且没有闭合标签。

**注释：**从技术上讲，图像并不会插入 HTML 页面中，而是链接到 HTML 页面上。`<img>` 标签的作用是为被引用的图像创建占位符。

**提示：**通过在 `<a>` 标签中嵌套 `<img>` 标签，给图像添加到另一个文档的链接。

### 源属性

要在页面上显示图像，你需要使用源属性（src）。src 指 "source"。源属性的值是图像的 URL 地址。定义图像的语法是：

```html
<img src="url" alt="some_text">
```

URL 指存储图像的位置。如果名为 `x.png` 的图像位于 `www.nowcoder.com` 的 `images` 目录中，那么其 URL 为 `http://www.nowcoder.com/images/x.png`。

浏览器将图像显示在文档中图像标签出现的地方。如果你将图像标签置于两个段落之间，那么浏览器会首先显示第一个段落，然后显示图片，最后显示第二段。

### alt属性

alt 属性用来为图像定义一串预备的可替换的文本。替换文本属性的值是用户定义的。

在浏览器无法载入图像时，替换文本属性告诉读者她们失去的信息。此时，浏览器将显示这个替代性的文本而不是图像。为页面上的图像都加上替换文本属性是个好习惯，这样有助于更好的显示信息，并且对于那些使用纯文本浏览器的人来说是非常有用的。

### 设置图像的高度与宽度

height（高度） 与 width（宽度）属性用于设置图像的高度与宽度。属性值默认单位为像素:

```html
<img src="pulpit.jpg" alt="Pulpit rock" width="300" height="200">
```

 指定图像的高度和宽度是一个很好的习惯。如果图像指定了高度宽度，页面加载时就会保留指定的尺寸。如果没有指定图片的大小，加载页面时有可能会破坏HTML页面的整体布局。

**注意:** 假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以我们的建议是：慎用图片。

**注意:** 加载页面时，要注意插入页面图像的路径，如果不能正确设置图像的位置，浏览器无法加载图片，图像标签就会显示一个破碎的图片。

### HTML 图像标签

|  标签  |            描述            |
| :----: | :------------------------: |
| <img>  |          定义图像          |
| <map>  |        定义图像地图        |
| <area> | 定义图像地图中的可点击区域 |

### 创建图像映射

本例显示如何创建带有可供点击区域的图像地图。其中的每个区域都是一个超级链接。

```html
	<img src="//static.nowcoder.com/tutorial/web-examples/img/planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

	<map name="planetmap">
	  <area shape="rect" coords="0,0,82,126" alt="Sun"  href="//static.nowcoder.com/tutorial/web-examples/sun.html">
	  <area shape="circle" coords="90,58,3" alt="Mercury"  href="//static.nowcoder.com/tutorial/web-examples/mercur.html">
	  <area shape="circle" coords="124,58,8" alt="Venus"  href="//static.nowcoder.com/tutorial/web-examples/venus.html">
	</map>
```

### HTML 4.01 与 HTML5之间的差异

HTML5 中不支持以下属性：align、border、hspace、longdesc、vspace。

在 HTML 4.01 中，以下属性：align、border、hspace、vspace **已废弃**。

### HTML 与 XHTML 之间的差异

在 HTML 中，`<img>` 标签没有结束标签。

在 XHTML 中，`<img>` 标签必须被正确地关闭。

## HTML 表格

### 定义表格

- 在HTML中，通过 `<table>` 标签来定义表格。
- 每个表格均有若干行（由 `<tr>` 标签定义），每行被分割为若干单元格（由 `<td>` 标签定义）。
- 字母 td 指表格数据（table data），即数据单元格的内容。
- 数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
- 更复杂的 HTML 表格也可能包括 `<caption>`、`<col>`、`<colgroup>`、`<thead>`、`<tfoot>` 以及 `<tbody>` 元素。

```html
<table border="1">
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
```

### 边框属性

如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。

### 定义表格的页眉

`<thead>` 标签用于组合 HTML 表格的表头内容。

`<thead>` 元素应该与 和 元素结合起来使用，用来规定表格的各个部分（表头、主体、页脚）。

通过使用这些元素，使浏览器有能力支持独立于表格表头和表格页脚的表格主体滚动。当包含多个页面的长的表格被打印时，表格的表头和页脚可被打印在包含表格数据的每张页面上。

`<thead>` 标签必须被用在以下情境中：作为 `<table>` 元素的子元素，出现在 `<caption>`、`<colgroup>` 元素之后，`<tbody>`、 `<tfoot>` 和 `<tr>` 元素之前。

**注释：** `<thead>` 元素内部必须包含一个或者多个 `<tr>` 标签。

**提示：** `<thead>`、`<tbody>` 和 `<tfoot>` 元素默认不会影响表格的布局。不过，您可以使用 CSS 来为这些元素定义样式，从而改变表格的外观。

### 定义表格的主体

`<tbody>` 标签用于组合 HTML 表格的主体内容。

### 定义表格的页脚

`<tfoot>` 标签用于组合 HTML 表格的页脚内容。

```html
<table border="1">
    <thead>
        <tr>
        <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Sum</td>
            <td>$180</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
</table>
```

### 定义表格的表头

`<th>` 标签定义 HTML 表格中的表头单元格。HTML 表格有两种单元格类型：

- 表头单元格 - 包含头部信息（由 `<th>` 元素创建）
- 标准单元格 - 包含数据（由 td) 元素创建）

`<th>` 元素中的文本通常呈现为粗体并且居中。`<td>` 元素中的文本通常是普通的左对齐文本。

**提示：**如果需要将内容横跨多个行或列，请使用 colspan 和 rowspan 属性！

```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
```

### 定义表格的行

`<tr>` 标签定义 HTML 表格中的行。一个 `<tr>` 元素包含一个或多个 <td> 元素。

### 定义表格单元

`<td>` 标签定义 HTML 表格中的标准单元格。

### 定义表格标题

`<caption>` 标签定义表格的标题。`<caption>` 标签必须直接放置到 `<table>` 标签之后。您只能对每个表格定义一个标题。

**提示：**通常这个标题会被居中于表格之上。然而，CSS 属性 "text-align" 和 "caption-side" 能用来设置标题的对齐方式和显示位置。

```html
<table border="1">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

### 定义表格列的组

`<colgroup>` 标签用于对表格中的列进行组合，以便对其进行格式化。

通过使用 `<colgroup>` 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。

**注释：**只能在 `<table>` 元素之内，在任何一个 `<caption>` 元素之后，在任何一个 `<thead>`、`<tbody>`、`<tfoot>`、`<tr>` 元素之前使用 `<colgroup>` 标签。

**提示：**如果想对 `<colgroup>` 中的某列定义不同的属性，请在 `<colgroup>` 标签内使用 `<col>` 标签。

```html
<table border="1">
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
```

### 定义用于表格列的属性

`<col>` 标签规定了 元素内部的每一列的列属性。

通过使用 `<col>` 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。

span 属性规定 col 元素应该横跨的列数。

## HTML 列表

### HTML 有序列表

有序列表是一列项目，列表项目使用数字进行标记。有序列表使用 `<ol>` 标签，每个列表项使用 `<li>` 标签。

```html
<ol>
    <li>Coffee</li>
    <li>Milk</li>
</ol>
```

#### type 属性

type 属性规定列表中要使用的标记类型（字母或数字）。不赞成使用。请使用样式代替。

|  值  |                  描述                   |
| :--: | :-------------------------------------: |
|  1   |     默认。十进制数字 (1, 2, 3, 4)。     |
|  a   | 字母顺序的有序列表，小写 (a, b, c, d)。 |
|  A   | 字母顺序的有序列表，大写 (A, B, C, D)。 |
|  i   |    罗马数字，小写 (i, ii, iii, iv)。    |
|  I   |    罗马数字，大写 (I, II, III, IV)。    |

```html
<ol type="1|a|A|i|I">
```

### HTML无序列表

无序列表也是一列项目，列表项目使用粗体圆点（典型的小黑圆圈）进行标记。无序列表使用 `<ul>` 标签，每个列表项使用 `<li>` 标签。

```html
<ul>
    <li>Coffee</li>
    <li>Milk</li>
</ul>
```

#### type 属性

HTML5不再支持 `<ul>` type 属性。请使用 CSS替代。`<ul>` 的 type 属性在 HTML 4.01 中已废弃。请使用 CSS替代。

type 属性规定列表的项目符号的类型。

|   值   |       描述       |
| :----: | :--------------: |
|  disc  | 默认值。实心圆。 |
| circle |     空心圆。     |
| square |    实心方块。    |

```html
<ul type="disc|circle|square">
```

### HTML 自定义列表

自定义列表不仅仅是一列项目，而是项目及其注释的组合。

自定义列表以 `<dl>` 标签开始，每个自定义列表项以 `<dt>` 开始，每个自定义列表项的定义以 `<dd>` 开始。

`<dl>` 标签定义一个描述列表。

`<dl>` 标签与 <dt> （定义项目/名字）和 <dd>（描述每一个项目/名字）一起使用。

在 `<dd>` 标签内，您能放置段落、换行、图片、链接、列表等等。

```html
<dl>
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
</dl>
```

**提示:** 列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

##  HTML 区块

### HTML 区块元素

大多数 HTML 元素被定义为**块级元素**或**内联元素**。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。实例: `<h1>`, `<p>`, `<ul>`, `<table>` 。

### HTML 内联元素

内联元素在显示时通常不会以新行开始。实例: `<b>`, `<td>`, `<a>`, `<img>` 。

### HTML \<div\> 元素

- HTML <div> 元素是**块级元素**，它可用于组合其他 HTML 元素的容器。
- `<div> 标签定义 HTML 文档中的一个分隔区块或者一个区域部分。`
- `<div> 标签常用于组合块级元素，以便通过 CSS 来对这些元素进行格式化。`
- `<div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。`
- 如果与 CSS 一同使用，<div> 元素可用于对大的内容块设置样式属性。
- `<div> 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 <table> 元素进行文档布局不是表格的正确用法。<table> 元素的作用是显示表格化的数据。`

**提示：** `<div>` 元素经常与 CSS 一起使用，用来布局网页。

**注释：**默认情况下，浏览器通常会在 `<div>` 元素前后放置一个换行符。然而，您可以通过使用 CSS 改变这种情况。

```html
<div style="color:#0000FF">
  <h3>这是一个在 div 元素中的标题。</h3>
  <p>这是一个在 div 元素中的文本。</p>
</div>
```

### HTML\<span\> 元素

- HTML <span> 元素是**内联元素**，可用作文本的容器
- <span> 元素也没有特定的含义。
- 当与 CSS 一同使用时，<span> 元素可用于为部分文本设置样式属性。
- `<span>` 用于对文档中的行内元素进行组合。
- `<span>` 标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。如果不对 `<span>` 应用样式，那么 `<span>` 元素中的文本与其他文本不会任何视觉上的差异。
- `<span>` 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。

**提示：**被 `<span>` 元素包含的文本，您可以使用 CSS 对它定义样式，或者使用 JavaScript 对它进行操作。

```html
<p>我的母亲有 <span style="color:blue">蓝色</span> 的眼睛。</p>
```

## HTML 布局

### 布局 - 使用 \<div\> 元素

div 元素是用于分组 HTML 元素的块级元素。

```html
<div id="container" style="width:500px">
    <div id="header" style="background-color:#FFA500;">
        <h1 style="margin-bottom:0;">主要的网页标题</h1>
    </div>
    <div id="menu" 
         style="background-color:#FFD700;height:200px;width:100px;float:left;">
        <b>菜单</b><br>
        HTML<br>
        CSS<br>
        JavaScript
    </div>
    <div id="content" 
         style="background-color:#EEEEEE;height:200px;width:400px;float:left;">
        内容在这里
    </div>
    <div id="footer" 
         style="background-color:#FFA500;clear:both;text-align:center;">
        版权 © nowcoder.com
    </div>
</div>
```

### 布局 - 使用表格

使用 HTML `<table>` 标签是创建布局的一种简单的方式。大多数站点可以使用 `<div>` 或者 `<table>` 元素来创建多列。CSS 用于对元素进行定位，或者为页面创建背景以及色彩丰富的外观。

即使可以使用 HTML 表格来创建漂亮的布局，但设计表格的目的是呈现表格化数据 - 表格不是布局工具！

## HTML 表单

### 表单

- 表单是一个包含表单元素的区域。
- 表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。
- 表单使用表单标签 `<form>` 来设置

```html
<form>
    input 元素
</form>
```

`<form>` 元素包含一个或多个如下的表单元素：
`<input> 、<textarea> 、<button> 、<select> 、<option> 、<optgroup> 、<fieldset> 、<label>.`

#### 属性 

##### accept 属性

在 HTML5 中，不支持 `<form>` accept 属性。

accept 属性规定能够通过文件上传进行提交的服务器接受的文件类型。

**提示：**请避免使用该属性作为验证工具。应该在服务器端验证文件上传。

```html
<form action="form_action.html" accept="image/gif,image/jpeg">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  Your image: <input type="file" name="pic" id="pic"><br>
  <input type="submit" value="提交">
</form>
<form accept="MIME_type"></form>
```

*MIME_type*:允许被提交/被上传的一个或多个 MIME 类型。如需规定多个 MIME 类型，请使用逗号分隔它们。

##### accept-charset 属性

accept-charset 属性规定表单提交时使用的字符编码。默认值是保留字符串 "UNKNOWN"（表示编码为包含 `<form>` 元素的文档的编码）。

表单提交时使用的字符编码列表，多个字符编码使用空格分隔。 常用值： UTF-8 - Unicode 字符编码， ISO-8859-1 - 拉丁字母表的字符编码 。理论上讲，可使用任何字符编码，但没有浏览器可以理解所有的编码。字符编码使用得越广泛，浏览器对其支持越好。

```html
<form accept-charset="character_set">
```

##### action 属性

action 属性规定当提交表单时，向何处发送表单数据。

```html
<form action="URL">
```

##### autocomplete 属性

autocomplete 属性是 HTML5 中的新属性。autocomplete 属性规定表单是否应该启用自动完成功能。自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。

```html
<form autocomplete="on|off">
```

autocomplete "on" 适用于表单，默认。规定启用自动完成功能。浏览器会基于用户之前键入的值自动完成值。

"off" 适用于特定的输入字段，反之亦然。规定禁用自动完成功能。用户必须在每次使用时输入值到每个字段中，浏览器不会自动完成输入。

##### enctype 属性

enctype 属性规定在将表单数据发送到服务器之前如何对其进行编码。

**注意：**只有 method="post" 时才使用 enctype 属性。

```html
<form enctype="value">
```

**属性值**

|                值                 |                             描述                             |
| :-------------------------------: | :----------------------------------------------------------: |
| application/x-www-form-urlencoded | 默认。在发送前对所有字符进行编码 （将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值）。 |
|        multipart/form-data        |  不对字符编码。当使用有文件上传控件的表单时，该值是必需的。  |
|            text/plain             |          将空格转换为 "+" 符号，但不编码特殊字符。           |

##### method 属性

method 方法规定如何发送表单数据（form-data）（表单数据会被发送到在 action 属性中规定的页面中）。

表单数据可被作为 URL 变量的形式来发送（method="get"）或者作为 HTTP post 事务的形式来发送（method="post"）。

###### **关于 GET 的注释：**

- 将表单数据以名称/值对的形式附加到 URL 中：URL?name=value&age=value。
- URL 的长度是有限的（大约 3000 字符）
- 绝不要使用 GET 来发送敏感数据！（在 URL 中是可见的）
- 对于用户希望加入书签的表单提交很有用
- GET 更适用于非安全数据，比如在 Google 中查询字符串

###### **关于 POST 的注释：**

- 将表单数据附加到 HTTP 请求的 body 内（数据不显示在 URL 中）
- 没有长度限制
- 通过 POST 提交的表单不能加入书签
- 以 HTTP post 事务的形式发送表单数据（form-data）。

```html
<form method="get|post">
```

##### name 属性

name 属性规定表单的名称。name 属性用于在 JavaScript 中引用元素，或者在表单提交之后引用表单数据。

在 XHTML 中，name 属性已废弃。请使用 id 属性代替。

```html
<form name="text">
```

##### novalidate 属性

novalidate 属性是一个布尔属性。novalidate 属性规定当提交表单时不对表单数据（输入）进行验证。novalidate 属性是 HTML5 中的新属性。

```html
<form action="demo_form.html" novalidate>
    E-mail: <input type="email" name="user_email">
    <input type="submit">
</form>
```

##### target 属性

target 属性规定一个名称或一个关键词，指示在何处打开 action URL，即在何处显示提交表单后接收到的响应。

target 属性定义浏览器上下文（比如选项卡、窗口或内联框架）的名称或关键词。

```html
<form target="_blank|_self|_parent|_top|framename">
```



### 输入元素

多数情况下被用到的表单标签是输入标签（`<input>`）。输入类型是由类型属性（type）定义的。

- `<input>` 标签规定了用户可以在其中输入数据的输入字段。
- `<input>` 元素在 `<form>` 元素中使用，用来声明允许用户输入数据的 input 控件。
- 输入字段可通过多种方式改变，取决于 type 属性。

**注意:** `<input>` 元素是空的,它只包含标签属性。

**提示:** 你可以使用 <label> 元素来定义 `<input>` 元素的标注。

#### 属性



### 文本框

文本框通过 `<input type="text">` 标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本框。

```html
<form>
    First name: <input type="text" name="firstname"><br>
    Last name: <input type="text" name="lastname">
</form>
```

**注意:** 表单本身并不可见。同时，在大多数浏览器中，文本框的默认宽度是 20 个字符。

### 密码字段

密码字段通过标签 `<input type="password">` 来定义：

```html
<form>
    Password: <input type="password" name="pwd">
</form>
```

**注意:** 密码字段字符不会明文显示，而是以星号或圆点替代。

### 单选按钮

`<input type="radio">` 标签定义了表单单选框选项。

```html
<form>
    <input type="radio" name="sex" value="male"> Male <br>
    <input type="radio" name="sex" value="female"> Female
</form>
```

### 复选框

`<input type="checkbox">` 定义了复选框. 用户需要从若干给定的选择中选取一个或若干选项。

```html
<form>
    <input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
    <input type="checkbox" name="vehicle" value="Car">I have a car
</form>
```

### 提交按钮

`<input type="submit">` 定义了提交按钮.

当用户单击确认按钮时，表单的内容会被传送到另一个文件。表单的动作属性定义了目的文件的文件名。由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理。

```html
<form name="input" action="http://www.nowcoder.com" method="get">
    Username: <input type="text" name="user">
    <input type="submit" value="Submit">
</form>
```

### 文本区域

`<textarea>` 标签定义一个多行的文本输入控件。

文本区域中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）。

可以通过 cols 和 rows 属性来规定 textarea 的尺寸大小，不过更好的办法是使用 CSS 的 height 和 width 属性。

```html
<textarea rows="10" cols="30">
    我是一个文本框。
</textarea>
```

|                             属性                             |    值     |                       描述                       |
| :----------------------------------------------------------: | :-------: | :----------------------------------------------: |
| [autofocus](https://www.nowcoder.com/tutorial/10010/4594ff7ac3384052a8b7d52ece5dfc46) | autofocus |     规定当页面加载时，文本区域自动获得焦点。     |
| [cols](https://www.nowcoder.com/tutorial/10010/983b9015912945d389528bf5411b6bbb) | *number*  |            规定文本区域内可见的宽度。            |
| [disabled](https://www.nowcoder.com/tutorial/10010/de3d4b5c41d242c092c7c63a5c992a50) | disabled  |                规定禁用文本区域。                |
| [form](https://www.nowcoder.com/tutorial/10010/d91e606b22ea4d24a7de4cbf82adad7d) | *form_id* |        定义文本区域所属的一个或多个表单。        |
| [maxlength](https://www.nowcoder.com/tutorial/10010/ebe7b310890f4153a3bcd6c5f18e181f) | *number*  |          规定文本区域允许的最大字符数。          |
| [name](https://www.nowcoder.com/tutorial/10010/cd23672cc9014e32a008f4db5455be9f) |  *text*   |               规定文本区域的名称。               |
| [placeholder](https://www.nowcoder.com/tutorial/10010/60eb7284812b4553b33d4567501b4219) |  *text*   |  规定一个简短的提示，描述文本区域期望的输入值。  |
| [readonly](https://www.nowcoder.com/tutorial/10010/2f3ebb5982f841d5947ded8c00370221) | readonly  |               规定文本区域为只读。               |
| [required](https://www.nowcoder.com/tutorial/10010/c36b1d775e4e413cac5224bc2b6722f4) | required  |          规定文本区域是必需的/必填的。           |
| [rows](https://www.nowcoder.com/tutorial/10010/03ef5c77e2ff4cb98e9a104742de5a8b) | *number*  |            规定文本区域内可见的行数。            |
| [wrap](https://www.nowcoder.com/tutorial/10010/769edf5507414f85bc81fbf1383b17e5) | hard soft | 规定当提交表单时，文本区域中的文本应该怎样换行。 |

### \<label\> 标签

`<label>` 标签为 input 元素定义标注（标记）。

label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。

`<label>` 标签的 for 属性应当与相关元素的 id 属性相同。**提示:** "for" 属性可把 label 绑定到另外一个元素。请把 "for" 属性的值设置为相关元素的 id 属性的值。

```html
<form action="demo_form.php">
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" value="female"><br><br>
  <input type="submit" value="提交">
</form>
```

