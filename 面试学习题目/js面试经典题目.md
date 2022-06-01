# 问答题

## Cookie的弊端

cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。

第一：每个特定的域名下最多生成20个cookie

1.IE6或更低版本最多20个cookie

2.IE7和之后的版本最后可以有50个cookie。

3.Firefox最多50个cookie

4.chrome和Safari没有做硬性限制

IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。

cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。

IE 提供了一种存储可以持久化用户数据，叫做 userData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在cookie中的session对象的大小。

2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。

3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。

4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：

1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。

2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

## 浏览器本地存储是怎样的

在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。

html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。

而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

## web storage和cookie的区别

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的UserData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。

localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

## display:none和visibility:hidden的区别？

display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。

visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。

## CSS中 link 和@import 的区别是？

(1) link属于HTML标签，而@import是CSS提供的;

(2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

(3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题;

## position的absolute与fixed共同点与不同点

共同点：

1、改变行内元素的呈现方式，将display置为inline-block 

2、使元素脱离普通文档流，不再占据文档物理空间

3、覆盖非定位文档元素

不同点：

1、abuselute与fixed的根元素不同，abuselute的根元素可以设置，fixed根元素是浏览器。

滚动网页，fixed与浏览器的距离是不变的。

## CSS的盒子模型

1）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)

2）有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 padding;

## CSS 选择符有哪些？哪些属性可以继承？

CSS 选择符：

```
1.id选择器(# myid)

2.类选择器(.myclassname)

3.标签选择器(div, h1, p)

4.相邻选择器(h1 + p)

5.子选择器(ul > li)

6.后代选择器(li a)

7.通配符选择器( * )

8.属性选择器(a[rel = "external"])

9.伪类选择器(a: hover, li:nth-child)
```

可继承的样式：

```
1.font-size

2.font-family

3.color

4.text-indent
```

不可继承的样式：

```
1.border

2.padding

3.margin

4.width

5.height
```

优先级算法：

```
1.优先级就近原则，同权重情况下样式定义最近者为准;

2.载入样式以最后载入的定位为准;

3.!important >  id > class > tag  

4.important 比 内联优先级高，但内联比 id 要高
```

## 优先级算法如何计算？ CSS3新增伪类有那些？

CSS3新增伪类举例：

```
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。

p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。

p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。

p:only-child   选择属于其父元素的唯一子元素的每个 <p> 元素。

p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

:enabled :disabled 控制表单控件的禁用状态。

:checked     单选框或复选框被选中。
```

```
:first-child 选择属于其父元素的首个元素。

:last-child 选择属于其父元素的最后一个元素。

:only-child 选择属于其父元素唯一的元素。

:nth-child(n) 选择属于其父元素的任意一个子元素。

:empty 选择没有子元素的元素。

:not(selector) 将满足指定选择器的元素给排除在外
```

```
内联样式，如: style="..."，权值为1000。
ID选择器，如：#content，权值为100。
类，伪类、属性选择器，如.content，权值为10。
类型选择器、伪元素选择器，如div p，权值为1。
通配符、子选择器、相邻选择器等。如* > +，权值为0。
继承的样式没有权值
```

## 列出display的值，说明他们的作用。

display 的值的作用：

1.block 像块类型元素一样显示。

2.inline 缺省值。像行内元素类型一样显示。

3.inline-block 像行内元素一样显示，但其内容像块类型元素一样显示。

4.list-item 像块类型元素一样显示，并添加样式列表标记。



## position的值， relative和absolute分别是相对于谁进行定位的？

position 的值的定位区别：

1.absolute 生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。

2.fixed 生成固定定位的元素，相对于浏览器窗口进行定位（老IE不支持）。

3.relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。

4.static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。

5.inherit 规定从父元素继承 position 属性的值。

## CSS3有哪些新特性？

```
1. CSS3实现圆角（border-radius），阴影（box-shadow），
2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
4. 增加了更多的CSS选择器  多背景 rgba
5. 在CSS3中唯一引入的伪类是 ::selection.
6. 媒体查询，多栏布局
7. border-image
```

## 为什么要初始化CSS样式。

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

*最简单的初始化方法就是（不建议）：

```css
{padding: 0; margin: 0;}
```

淘宝的样式初始化： 

```css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; } 
```

## 对BFC规范的理解？

**块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个 BFC 中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的 margin 会发生折叠。

W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。

块格式化上下文包含创建它的元素内部的所有内容.

块格式化上下文对浮动定位（参见 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)）与清除浮动（参见 [`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（[Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)）也只会发生在属于同一BFC的块级元素之间。

## CSS sprites

CSS Sprites 其实就是把网页中一些背景图片整合到一张图片文件中，再利用 CSS 的"background-image"，"background-repeat"，"background-position" 的组合进行背景定位，background-position 可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了 http2。

CSS **图像合并**（**Image sprites**） 技术，亦作 CSS 贴图定位、图像精灵（sprite，意为精灵），被运用于众多使用大量小图标的网页应用之上。它可取图像的一部分来使用，使得使用一个图像文件替代多个小文件成为可能。相较于一个小图标一个图像文件，单独一张图片所需的 HTTP 请求更少，对内存和带宽更加友好。

备注: 当使用 HTTP/2 时，使用多个小流量请求实际上可能更为带宽友好。

## 语义化的理解

```
1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4. 便于团队开发和维护，语义化使得网页更具可读性，是进一步开发网页的必要步骤，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
```

Semantics（语义）

在编程中，**语义**指的是一段代码的含义 — 例如 "运行这行 JavaScript 代码会产生怎样的影响?", 或者 "这个 HTML 的元素有什么作用，扮演了什么样的角色"（而不只是 "它看上去像是什么?"。）

语义化的含义就是用正确的标签做正确的事情，html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

```
1. <!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。 
2. 严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。
3. 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
4. DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。 
```

### 文档类型声明

在 [HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML) 中，文档类型 doctype 的声明是必要的。在所有文档的头部，你都将会看到"`<!DOCTYPE html>`" 的身影。这个声明的目的是防止浏览器在渲染文档时，切换到我们称为“[怪异模式(兼容模式)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)”的渲染模式。“`<!DOCTYPE html>`" 确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。

### 怪异模式和标准模式

目前浏览器的排版引擎使用三种模式：怪异模式（Quirks mode）、接近标准模式（Almost standards mode）、以及标准模式（Standards mode）。在**怪异模式**下，排版会模拟 Navigator 4 与 Internet Explorer 5 的非标准行为。为了支持在网络标准被广泛采用前，就已经建好的网站，这么做是必要的。在**标准模式**下，行为即（但愿如此）由 HTML 与 CSS 的规范描述的行为。在**接近标准模式**下，只有少数的怪异行为被实现。

### [**浏览器如何决定使用哪个模式？**](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode#how_does_mozilla_determine_which_mode_to_use.3f)

对 [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 文件来说，浏览器使用文件开头的 DOCTYPE 来决定用怪异模式处理或标准模式处理。为了确保你的页面使用标准模式，请确认你的页面如同本范例一样拥有 DOCTYPE：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset=UTF-8>
    <title>Hello World!</title>
  </head>
  <body>
  </body>
</html>
```

### [**我要如何知道目前是哪个模式？**](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode#what_are_the_differences_between_the_modes.3f)

在 Firefox 中，请从右键菜单选择 *查看页面信息*，然后查看 *渲染模式*。

在 Internet Explorer 中，请按下 F12，然后查看 *文档模式*。

## 多少种Doctype文档类型

```
1. 该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
2. HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
3. XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
4. Standards （标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。
```

## HTML与XHTML有什么区别

HTML是**超文本标记语言**（Hyper Text Markup Language）的首字母缩略词，那么什么是超文本？什么是标记语言？

超文本：超文本简单的意思就是“文本内的文本”。文本中有链接，是超文本。每次单击一个链接来打开一个新网页时，都是单击一个超文本来完成的。

标记语言：标记语言是一种编程语言，用于使文本更具交互性和动态性。它可以将文本转换为图像，表格，链接等。

XHTML代表**可扩展超文本标记语言**。它是HTML和XML语言之间的交叉。

XHTML几乎与HTML相同，但它比HTML更严格。XHTML是HTML定义为XML应用程序。它受到所有主流浏览器的支持

```
HTML和XHTML之间的区别

尽管XHTML与HTML几乎相同，但正确创建代码更为重要，因为XHTML在语法和区分大小写方面比HTML更严格严谨。XHTML文档是格式良好的，并使用标准XML解析器进行解析，这与HTML不同，HTML需要宽松的HTML特定解析器。

总的来说，与HTML相比，XHTML发生了一些变化，有了一下差异。这些变化可分为三个部分：

文档结构的变化

1、所有文件都必须有DOCTYPE。

2、<html>中的xmlns属性是必需的，必须为文档指定xml命名空间。

3、<html>，<head>，<title>和<body>对于各自的结束标记是必需的。

XHTML标签的变化

1、所有的XHTML标签必须为小写。

2、必须要结束所有XHTML标记，即要结束</>标签。例：<h1></h1>，<hr/>，<img/>

3、必须正确嵌套所有XHTML标记，标签的嵌套顺序要正确。

4、XHTML文档必须有一个根元素。

XHTML属性的变化

1、必须正确添加所有XHTML属性。

2、所有XHTML属性必须为小写，且必须加上引号。

2、XHTML属性不能被缩写。

3、必须引用XHTML属性值
```

## html常见兼容性问题？

```
1. png24位的图片在iE6浏览器上出现背景
解决方案：做成PNG8，也可以引用一段脚本处理.

2. 浏览器默认的margin和padding不同
解决方案：加一个全局的 *{margin:0;padding:0;} 来统一。

3. IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。
1
#box{ float:left; width:10px; margin:0 0 0 10px;} 
这种情况之下IE会产生20px的距离
解决方案：在float的标签样式控制中加入 _display:inline; 将其转化为行内属性。( _ 这个符号只有ie6会识别)

4. 渐进识别的方式，从总体中逐渐排除局部。 
首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 
接着，再次使用 "+" 将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

.bb{
    background-color:#f1ee18; /*所有识别*/
    .background-color:#00deff\9; /*IE6、7、8识别*/
    +background-color:#a200ff; /*IE6、7识别*/
    _background-color:#1e0bd1; /*IE6识别*/ 
} 

5.IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用 getAttribute() 获取自定义属性；Firefox下,只能使用getAttribute()获取自定义属性
解决方法：统一通过getAttribute()获取自定义属性

6. IE下，event对象有 x、y 属性，但是没有 pageX、pageY属性; Firefox下，event对象有 pageX、pageY 属性，但是没有 x、y 属性
解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

7. Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示
解决方法：可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

8. 超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不在具有 hover 和 active 了
解决方法：改变CSS属性的排列顺序 L-V-H-A
a:link {}
a:visited {}
a:hover {}
a:active {}

9. 怪异模式问题：漏写 DTD 声明，Firefox 仍然会按照标准模式来解析网页，但在 IE 中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写 DTD 声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html) 推荐的写法：<!DOCTYPE html>

10. 上下margin重合问题：ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
解决方法：养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。

11. ie6对png图片格式支持不好
解决方案：引用一段脚本处理
```

## 浮动的工作原理？清除浮动的技巧

**浮动的工作原理**

```
浮动是让某元素脱离文档流，在浮动框之前和之后的非定位元素会当它不存在一样，可能沿着它的另一侧垂直流动，但都为其腾出空间，块级元素也不例外（被浮动元素占据了部分行空间的块级元素，仍然被看作是占据了一整行，只不过是被浮动元素占据的那部分空间无法利用罢了）。

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止；如果当前线上的水平空间不足，它将逐行向下移动，直到有空间为止（所以浮动元素不会影响页面上方布局）。任何元素都可以浮动，浮动元素会生成一个块级框（拥有块级元素特性，但不占整行），而不论它本身是何种元素。

另外因为浮动元素脱离了文档流，所有它无法为其文档流中的父级元素撑起高度。
```

```
浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。

1. 使用空标签清除浮动。
这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

2. 使用overflow。
给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

3. 使用after伪对象清除浮动。
该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；

可以给父元素设置overflow：auto或者hidden
```

**清除浮动技巧**

```
1、clear清除浮动

left    在左侧不允许浮动元素。

right在右侧不允许浮动元素。

both在左右两侧均不允许浮动元素。

none默认值。允许浮动元素出现在两侧。

在 CSS1 和 CSS2 中，这是通过自动为清除元素（即设置了 clear 属性的元素）增加上外边距实现的。在 CSS2.1 中，会在元素上外边距之上增加清除空间，而外边距本身并不改变。不论哪一种改变，最终结果都一样。例如：如果声明为左边清除，会使元素的上外边框边界刚好在左边浮动元素的下外边距边界之下。

要注意了，我们是通过在别的元素上清除浮动来实现撑开高度的， 而不是在浮动元素上。浮动元素脱离了文档流，就算为其加了清除空间，也影响不了父元素的高度，最多能让其某侧不允许其他浮动元素。

clear 只能作用与块级元素或浮动元素，不过上面已经说了作用于浮动元素的弊端，所以一般都是使用块级元素。

全浏览器通用的clearfix方案，使用伪元素清除浮动【推荐】

// 引入了zoom以支持IE6/7

// 同时加入:before以解决现代浏览器上边距折叠的问题

.clearfix:before,

.clearfix:after {

    display: table;

    content: " ";

}

.clearfix:after {

    clear: both;

}

.clearfix{

    *zoom: 1;

}

另外：也可以在父级元素中增加一个专门清除浮动的块级元素。（不推荐）
```

```
BFC清除浮动

   BFC全称是块状格式化上下文，它是按照块级盒子布局的。我们了解他的特征、触发方式、常见使用场景这些就够了。

BFC的主要特征

BFC容器是一个隔离的容器，和其他元素互不干扰；所以我们可以用触发两个元素的BFC来解决垂直边距折叠问题。

BFC可以包含浮动；通常用来解决浮动父元素高度坍塌的问题。

其中，BFC清除浮动就是用的“包含浮动”这条特性。

那么，怎样才能触发BFC呢？

BFC的触发方式

我们可以给父元素添加以下属性来触发BFC：

float 为 left | right

overflow 为 hidden | auto | scorll

display 为 table-cell | table-caption | inline-block | flex | inline-flex

position 为 absolute | fixed
```

## 浮动元素引起的问题和解决办法？

浮动元素引起的问题：

1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构

解决方法：

使用 CSS 中的 clear:both; 属性来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加clearfix样式：

```css
.clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix{display: inline-block;} /* for IE/Mac */

```

清除浮动的几种方法：

1. 额外标签法，<div style="clear:both;"></div>（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）
2. 使用after伪元素

```css
#parent:after{
    content:".";
    height:0;
    visibility:hidden;
    display:block;
    clear:both;
}
```

3. 浮动外部元素
4. 设置 overflow 为 hidden 或者 auto

## IE 8以下版本的浏览器中的盒模型有什么不同

ie8以下的盒模型定义元素的宽高包括padding和border

css3中的box-sizing取值：

border-box：任何元素的内边距和边框在已设定的宽高内绘制

content-box：任何元素的内边距和边框在已设定的宽高外绘制

## DOM操作——怎样添加、移除、移动、复制、创建和查找节点。

创建新节点

```js
createDocumentFragment() // 创建一个DOM片段
createElement() // 创建一个具体的元素
createTextNode() // 创建一个文本节点
```

添加、移除、替换、插入

```js
appendChild()
removeChild()
replaceChild()
insertBefore() // 在已有的子节点前插入一个新的子节点
```

查找

```js
getElementsByTagName() // 通过标签名称
getElementsByName() // 通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
getElementById() // 通过元素Id，唯一性
```

## html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

```
新特性：
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
1. 拖拽释放(Drag and drop) API 
2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
3. 音频、视频API(audio,video)
4. 画布(Canvas) API
5. 地理(Geolocation) API
6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
7. sessionStorage 的数据在浏览器关闭后自动删除
8. 表单控件，calendar、date、time、email、url、search  
9. 新的技术webworker, websocket, Geolocation

移除的元素：
1. 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
2. 对可用性产生负面影响的元素：frame，frameset，noframes；
```

支持HTML5新标签：

1. IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是html5shiv框架）：

```html
<!--[if lt IE 9]> 
<script> src="http://html5shiv.googlecode.com/svn/trunk/html5.js"</script> 
<![endif]--> 
```

如何区分： 

DOCTYPE声明新增的结构元素、功能元素

## iframe的优缺点？

```
优点：
1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本

缺点：
1. iframe会阻塞主页面的Onload事件
2. 即时内容为空，加载也需要时间
3. 没有语意
```



## 如何实现浏览器内多个标签页之间的通信?

调用 localstorge、cookies 等本地存储方式

```
使用本地存储方法

1.cookie
        
 （1）客户端和服务器端都会请求服务器，性能下降

 （2）存储限制，4kb

 （3）页面的cookie是共享的


storage
    只是在客户端使用，不会请求服务器处理,存储量比较大,只能存储字符串，非字符串的数据在存储之前会被转换为字符串
   1. seessionStorage
        临时性的，页面打开有，页面关闭没有
        数据不共享
   2.localStorage
        永久性的存储
        数据共享
   3.api
        clear（）删除所有值，ff中没有实现
        getItem（）根据指定的名字name获取对应的值
        key（index）获得index处的值
        removeItem（name）删除由name指定的明值对
        setItem(name，value)
        


3.postMessage
        html5新特性，专门设计出来用于跨页面脚本通信
        有浏览器兼容问题
        需要相同的的协议，端口号，以及域名

4.SharedWorker
        使用SharedWorked可以创建一个多页面共享的进程，通过这种方式来实现多页面之间的消息互通
        html5新特性，有浏览器兼容问题
        需要相同的的协议，端口号，以及域名

5.websocket
        websocket长连接，全双工通讯
        相当于后端做一个信息中转站，信息从第一个标签，传到后端，再传到第二个标签
        需要后端支持
        有浏览器兼容问题

6.轮询模式
        相当于后端做一个信息中转站，信息从第一个标签，传到后端，再传到第二个标签
         需要后端支持
        无浏览器兼容问题   
```



## webSocket 如何兼容低浏览器？

Adobe Flash Socket 、 ActiveX HTMLFile (IE) 、 基于 multipart 编码发送 XHR 、 基于长轮询的 XHR

```
websocket 是什么？
简单说，WebSocket 不是 HTTP 协议，HTTP 只负责建立 WebSocket 连接。

websocket 的原理自然就是 socket，即 tcp/ip 通讯

http 也是基于 tcp/ip 通讯，只不过包了一层，加了限制并简化了使用

在线聊天目前一般还是用 ajax 做的，html5 毕竟还不算全面普及；

你可以把 WebSocket 看成是 HTTP 协议为了支持长连接所打的一个大补丁，它和 HTTP 有一些共性，是为了解决 HTTP 本身无法解决的某些问题而做出的一个改良设计。

在以前 HTTP 协议中所谓的 keep-alive connection 是指在一次 TCP 连接中完成多个 HTTP 请求，但是对每个请求仍然要单独发 header；所谓的 polling 是指从客户端（一般就是浏览器）不断主动的向服务器发 HTTP 请求查询是否有新数据。

这两种模式有一个共同的缺点，就是除了真正的数据部分外，服务器和客户端还要大量交换 HTTP header，信息交换效率很低。

它们建立的“长连接”都是伪。长连接，只不过好处是不需要对现有的 HTTP server 和浏览器架构做修改就能实现。

WebSocket 解决的第一个问题是，通过第一个 HTTP request 建立了 TCP 连接之后，之后的交换数据都不需要再发 HTTP request 了，使得这个长连接变成了一个真。长连接。

但是不需要发送 HTTP header 就能交换数据显然和原有的 HTTP 协议是有区别的，所以它需要对服务器和客户端都进行升级才能实现。

在此基础上 WebSocket 还是一个双通道的连接，在同一个 TCP 连接上既可以发也可以收信息。此外还有 multiplexing 功能，几个不同的 URI 可以复用同一个 WebSocket 连接。

这些都是原来的 HTTP 不能做到的。
```



## 线程与进程的区别

```
线程具有许多传统进程所具有的特征，故又称为轻型进程(Light—Weight Process)或进程元；而把传统的进程称为重型进程(Heavy—Weight Process)，它相当于只有一个线程的任务。在引入了线程的操作系统中，通常一个进程都有若干个线程，至少包含一个线程。

根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位

资源开销：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。

包含关系：如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程。

内存分配：同一进程的线程共享本进程的地址空间和资源，而进程之间的地址空间和资源是相互独立的

影响关系：一个进程崩溃后，在保护模式下不会对其他进程产生影响，但是一个线程崩溃整个进程都死掉。所以多进程要比多线程健壮。

执行过程：每个独立的进程有程序运行的入口、顺序执行序列和程序出口。但是线程不能独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制，两者均可并发执行

```



## 如何对网站的文件和资源进行优化？

```
1.尽可能减少http请求次数，将css, js, 图片各自合并 
2.使用CDN，降低通信距离 
3.添加Expire/Cache-Control头 
4.启用Gzip压缩文件 
5.将css放在页面最上面 
6.将script放在页面最下面 
7.避免在css中使用表达式 
8.将css, js都放在外部文件中 
9.减少DNS查询 
10.最小化css, js，减小文件体积 
11.避免重定向 
12.移除重复脚本 
13.配置实体标签ETag 
14.使用AJAX缓存，让网站内容分批加载，局部更新
```



## 请说出三种减少页面加载时间的方法

```
1、优化图片 2、选择图片格式（GIF：提供的颜色较少，可用在一些对颜色要求不高的地方）  3、最好设置宽高，在页面加载不成功时，可以先留出位置来 4、减少http请求次数 5、背景图片合并 6、对代码进行压缩 7、正确书写代码格式 8、采用外部导入 9、调整兼容性 10、 优化CSS（压缩合并css，如 margin-top, margin-left...) 
11、 网址后加斜杠（如www.campr.com/目录，会判断这个目录是什么文件类型，或者是目录。）
```

```
3. 标明高度和宽度（如果浏览器没有找到这两个参数，它需要一边下载图片一边计算大小，如果图片很多，浏览器需要不断地调整页面。这不但影响速度，也影响浏览体验。  当浏览器知道了高度和宽度参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容。从而加载时间快了，浏览体验也更好了）
```



## 你都使用哪些工具来测试代码的性能？

```
1. Profiler
2. JSPerf（http://jsperf.com/nexttick-vs-setzerotimeout-vs-settimeout）
3. Dromaeo
```

[8 种用于前端性能分析工具](https://segmentfault.com/a/1190000039227668)



## 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

```
什么是FOUC？
FOUC - Flash Of Unstyled Content 文档样式闪烁 即 文档样式短暂失效
如果使用 import 引入 css 文件会导致某些页面在IE下出现一些奇怪的现象：

以无样式显示页面内容的瞬间闪烁

形成原因
通过 @import 引入 css 样式

<style>
    @import "../fouc.css";
</style> 
样式表放在页面底部
有多个样式表，放在 html 不同位置
原理：IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。

解决方法：
在head里面加入一个link或者script标签
```



## null和undefined的区别？

值 `null` 特指对象的值未设置。它是 JavaScript [基本类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 之一，在布尔运算中被认为是[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)。

值 `null` 是一个字面量，不像 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，它不是全局对象的一个属性。`null` 是表示缺少的标识，指示变量未指向任何对象。把 `null` 作为尚未创建的对象，也许更好理解。在 API 中，`null` 常在返回类型应是一个对象，但没有关联的值的地方使用。

当检测 `null` 或 `undefined` 时，注意[相等（==）与全等（===）两个操作符的区别](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ，前者会执行类型转换：

```js
typeof null        // "object" (因为一些以前的原因而不是'null')
typeof undefined   // "undefined"
null === undefined // false
null  == undefined // true
null === null // true
null == null // true
!null //true
isNaN(1 + null) // false
isNaN(1 + undefined) // true
```



全局属性`**undefined**`表示原始值`undefined。`它是一个JavaScript的 [原始数据类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 。

`undefined`是*全局对象*的一个属性。也就是说，它是全局作用域的一个变量。`undefined`的最初值就是原始数据类型`undefined`。

在现代浏览器（JavaScript 1.8.5/Firefox 4+），自ECMAscript5标准以来undefined是一个不能被配置（non-configurable），不能被重写（non-writable）的属性。即便事实并非如此，也要避免去重写它。

一个没有被赋值的变量的类型是undefined。如果方法或者是语句中**操作的变量没有被赋值，则会返回undefined**

一个函数如果没有使用return语句指定[`返回`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return)值，就会返回一个undefined值。

```
null是一个表示"无"的对象，转为数值时为0
undefined是一个表示"无"的原始值，转为数值时为NaN

当声明的变量还未被初始化时，变量的默认值为undefined
null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象

undefined表示 “缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：
1. 变量被声明了，但没有赋值时，就等于 undefined
2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined
3. 对象没有赋值的属性，该属性的值为 undefined
4. 函数没有返回值时，默认返回 undefined

null表示“没有对象”，即该处不应该有值。典型用法是：
1. 作为函数的参数，表示该函数的参数不是对象
2. 作为对象原型链的终点
```



## new操作符具体干了什么呢?

```
1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型
2. 属性和方法被加入到 this 引用的对象中
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this
```

```js
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj); 
```

**`new` 运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#语法)

```
new constructor[([arguments])]
```

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#参数)

- `constructor`

  一个指定对象实例的类型的类或函数。

- `arguments`

  一个用于被 `constructor` 调用的参数列表。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#描述)

**`new`** 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即`**{}**`）；
2. 为步骤1新创建的对象添加属性`**__proto__**`，将该属性链接至构造函数的原型对象 ；
3. 将步骤1新创建的对象作为`**this**`的上下文 ；
4. 如果该函数没有返回对象，则返回`**this**`。

创建一个用户自定义的对象需要两步：

1. 通过编写函数来定义对象类型。
2. 通过 `new` 来创建对象实例。

创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象，看下面的例子：

当代码 `new *Foo*(...)` 执行时，会发生以下事情：

1. 一个继承自 `*Foo*.prototype` 的新对象被创建。
2. 使用指定的参数调用构造函数 *`Foo`*，并将 `this` 绑定到新创建的对象。`new *Foo*` 等同于 *`new Foo`*`()`，也就是没有指定参数列表，*`Foo`* 不带任何参数调用的情况。
3. 由构造函数返回的对象就是 `new` 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

你始终可以对已定义的对象添加新的属性。例如，`car1.color = "black"` 语句给 `car1` 添加了一个新的属性 `color`，并给这个属性赋值 "`black`"。但是，这不会影响任何其他对象。要将新属性添加到相同类型的所有对象，你必须将该属性添加到 `Car` 对象类型的定义中。

你可以使用 `Function.prototype` 属性将共享属性添加到以前定义的对象类型。这定义了一个由该函数创建的所有对象共享的属性，而不仅仅是对象类型的其中一个实例。下面的代码将一个值为 `null` 的 `color` 属性添加到 `car` 类型的所有对象，然后仅在实例对象 `car1` 中用字符串 "`black`" 覆盖该值。详见 [prototype (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)。



## 对JSON 的了解？

**JSON** 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 。它基于 JavaScript 语法，但与之不同：**JavaScript不是JSON，JSON也不是JavaScript**。

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。

它是基于JavaScript的一个子集。

数据格式简单, 易于读写, 传输占用带宽小。

```
{  "age":"12",   "name":"back"}
```

JSON对象包含两个方法: 用于解析 JSON 的 `parse()` 方法，以及将对象/值转换为 JSON字符串的 `stringify()` 方法。

除了这两个方法, JSON这个对象本身并没有其他作用，也不能被调用或者作为构造函数调用。



## js延迟加载的方式有哪些？

JS延迟加载：也就是**等页面加载完成之后再加载 JavaScript 文件。**  

js的延迟加载有助与提高页面的加载速度。

一般有以下几种方式：

- defer 属性
- async属性
- 动态创建DOM方式
- 使用jquery的getScript方法
- 使用settimeout延迟方法
- 让js最后加载。

### 1、defer属性

用途：表明脚本在执行时不会影响页面的构造。也就是说，**脚本会被延迟到整个页面都解析完毕之后再执行。**

HTML 4.01 为`<script>`标签定义了`defer`属性。标签定义了defer属性元素中设置defer属性。

在`<script>` 元素中设置 `defer` 属性，等于**告诉浏览器立即下载**，但**延迟执行**。

```html
 	<script src="test1.js" defer="defer"></script>
    <script src="test2.js" defer="defer"></script>
```

`HTML5`规范要求脚本按照它们出现的先后顺序执行。在现实当中，**延迟脚本并不一定会按照顺序执行。**

`defer`属性**只适用于外部脚本文件**。支持 HTML5 的实现会忽略嵌入脚本设置的 `defer`属性。

### 2. async 属性

目的：**不让页面等待脚本下载和执行**，从而**异步加载页面其他内容**。

HTML5 为 `<script>`标签定义了 `async`属性。与`defer`属性类似，都用于改变处理脚本的行为。同样，**只适用于外部脚本文件**。

异步脚本**一定会在页面 load 事件前执行**。
 **不能保证脚本会按顺序执行。**

```html
    <script src="test1.js" async></script>
    <script src="test2.js" async></script>
```

注意：async和defer一样，都不会阻塞其他资源下载，所以不会影响页面的加载。
缺点：**不能控制加载的顺序**

### 3、动态创建DOM方式

将创建DOM的script脚本放置在标签前， 接近页面底部

```html
<script type="text/javascript">  
   (function(){     var scriptEle = document.createElement("script");
     scriptEle.type = "text/javasctipt";
     scriptEle.async = true;
     scriptEle.src = "http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js";
     var x = document.getElementsByTagName("head")[0];
     x.insertBefore(scriptEle, x.firstChild);
 })();</script>  

```

### 4、使用jQuery的getScript()方法

```js
$.getScript("outer.js",function(){//回调函数，成功获取文件后执行的函数  
      console.log("脚本加载完成")  
});
```

### 5、使用setTimeout延迟方法

延迟加载js代码，给网页加载留出更多时间

```js
<script type="text/javascript">  
   function testLoad() {  
       console.log("11");
        //.....这里可以写向后端的请求
   }  
   (function(){
        setTimeote(function(){           
            testLoad();
        }, 1000); //延迟一秒加载    })()
</script>  
```

### 6.让JS最后加载

把js外部引入的文件放到页面底部，来让js最后引入，从而加快页面加载速度



## 如何解决跨域问题?

```
1. jsonp（jsonp 的原理是动态插入 script 标签）
2. document.domain + iframe
3. window.name、window.postMessage
4. 服务器上设置代理页面
```

### **什么是跨域？**

跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。

广义的跨域：

```xml
1.) 资源跳转： A链接、重定向、表单提交
2.) 资源嵌入： <link>、<script>、<img>、<frame>等dom标签，还有样式中background:url()、@font-face()等文件外链
3.) 脚本请求： js发起的ajax请求、dom和js对象的跨域操作等
```

其实我们通常所说的跨域是狭义的，是由浏览器同源策略限制的一类请求场景。

**什么是同源策略？**
同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。

同源策略限制以下几种行为：

```mipsasm
1.) Cookie、LocalStorage 和 IndexDB 无法读取
2.) DOM 和 Js对象无法获得
3.) AJAX 请求不能发送
```

### **常见跨域场景**

```awk
URL                                      说明                    是否允许通信
http://www.domain.com/a.js
http://www.domain.com/b.js         同一域名，不同文件或路径           允许
http://www.domain.com/lab/c.js

http://www.domain.com:8000/a.js
http://www.domain.com/b.js         同一域名，不同端口                不允许
 
http://www.domain.com/a.js
https://www.domain.com/b.js        同一域名，不同协议                不允许
 
http://www.domain.com/a.js
http://192.168.4.12/b.js           域名和域名对应相同ip              不允许
 
http://www.domain.com/a.js
http://x.domain.com/b.js           主域相同，子域不同                不允许
http://domain.com/c.js
 
http://www.domain1.com/a.js
http://www.domain2.com/b.js        不同域名                         不允许
```

### **跨域解决方案**

1、 通过jsonp跨域
2、 document.domain + iframe跨域
3、 location.hash + iframe
4、 window.name + iframe跨域
5、 postMessage跨域
6、 跨域资源共享（CORS）
7、 nginx代理跨域
8、 nodejs中间件代理跨域
9、 WebSocket协议跨域

#### **一、 通过jsonp跨域**

通常为了减轻web服务器的负载，我们把js、css，img等静态资源分离到另一台独立域名的服务器上，在html页面中再通过相应的标签从不同域名下加载静态资源，而被浏览器允许，基于此原理，我们可以通过动态创建script，再请求一个带参网址实现跨域通信。

1.）原生实现：

```xml
 <script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script);

    // 回调执行函数
    function handleCallback(res) {
        alert(JSON.stringify(res));
    }
 </script>
```

服务端返回如下（返回时即执行全局函数）：

```javascript
handleCallback({"status": true, "user": "admin"})
```

2.）jquery ajax：

```javascript
$.ajax({
    url: 'http://www.domain2.com:8080/login',
    type: 'get',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "handleCallback",    // 自定义回调函数名
    data: {}
});
```

3.）vue.js：

```javascript
this.$http.jsonp('http://www.domain2.com:8080/login', {
    params: {},
    jsonp: 'handleCallback'
}).then((res) => {
    console.log(res); 
})
```

后端node.js代码示例：

```javascript
var querystring = require('querystring');
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    var params = qs.parse(req.url.split('?')[1]);
    var fn = params.callback;

    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + JSON.stringify(params) + ')');

    res.end();
});

server.listen('8080');
console.log('Server is running at port 8080...');
```

jsonp缺点：只能实现get一种请求。

#### **二、 document.domain + iframe跨域**

此方案仅限主域相同，子域不同的跨域应用场景。

实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

1.）父窗口：([http://www.domain.com/a.html)](https://link.segmentfault.com/?enc=fDwSoIM%2FAoXpG8DGtzU6NA%3D%3D.TdqK9TxrnxOQk0qPZ2pxf7cwsHqxbZOoAOQbj%2Be28nQ%3D)

```xml
<iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
<script>
    document.domain = 'domain.com';
    var user = 'admin';
</script>
```

2.）子窗口：([http://child.domain.com/b.html)](https://link.segmentfault.com/?enc=oGaDY0jMJLcxEdzF0vb7fA%3D%3D.Z0dNL9NxCliHsWOaC3ENw1UgS7sL%2FtYW%2BJvNvNYgOWU%3D)

```xml
<script>
    document.domain = 'domain.com';
    // 获取父窗口中变量
    alert('get js data from parent ---> ' + window.parent.user);
</script>
```

#### **三、 location.hash + iframe跨域**

实现原理： a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

具体实现：A域：a.html -> B域：b.html -> A域：c.html，a与b不同域只能通过hash值单向通信，b与c也不同域也只能单向通信，但c与a同域，所以c可通过parent.parent访问a页面所有对象。

1.）a.html：([http://www.domain1.com/a.html)](https://link.segmentfault.com/?enc=GdBMqptjr8%2BA8BuF8z4P%2Fg%3D%3D.HmTo5Q8x2k%2BGXaQoJfIkMjouF%2F7JlpiikcOYPPxvhSI%3D)

```xml
<iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"></iframe>
<script>
    var iframe = document.getElementById('iframe');

    // 向b.html传hash值
    setTimeout(function() {
        iframe.src = iframe.src + '#user=admin';
    }, 1000);
    
    // 开放给同域c.html的回调方法
    function onCallback(res) {
        alert('data from c.html ---> ' + res);
    }
</script>
```

2.）b.html：([http://www.domain2.com/b.html)](https://link.segmentfault.com/?enc=dupmnpmFadNUL%2BYdhZCFbA%3D%3D.pSO8elebFUgsVLO0D2i34bnWJ%2FyFMGWY%2BuQGJfgNEUE%3D)

```xml
<iframe id="iframe" src="http://www.domain1.com/c.html" style="display:none;"></iframe>
<script>
    var iframe = document.getElementById('iframe');

    // 监听a.html传来的hash值，再传给c.html
    window.onhashchange = function () {
        iframe.src = iframe.src + location.hash;
    };
</script>
```

3.）c.html：([http://www.domain1.com/c.html)](https://link.segmentfault.com/?enc=CSSUdV%2FLR7Wm%2BCmRhYgsgg%3D%3D.Pp2jN710pgeHkU7tFauGfXGu9uwSoNBfO11Ql22v6pM%3D)

```xml
<script>
    // 监听b.html传来的hash值
    window.onhashchange = function () {
        // 再通过操作同域a.html的js回调，将结果传回
        window.parent.parent.onCallback('hello: ' + location.hash.replace('#user=', ''));
    };
</script>
```

#### **四、 window.name + iframe跨域**

window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。

1.）a.html：([http://www.domain1.com/a.html)](https://link.segmentfault.com/?enc=b6YPf0ouHYlw%2Bq2nPvsfsg%3D%3D.yygrwMcWtNXoeVX1oaWKp6rS3sAHB4x3nj9JdCUJxvk%3D)

```javascript
var proxy = function(url, callback) {
    var state = 0;
    var iframe = document.createElement('iframe');

    // 加载跨域页面
    iframe.src = url;

    // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
    iframe.onload = function() {
        if (state === 1) {
            // 第2次onload(同域proxy页)成功后，读取同域window.name中数据
            callback(iframe.contentWindow.name);
            destoryFrame();

        } else if (state === 0) {
            // 第1次onload(跨域页)成功后，切换到同域代理页面
            iframe.contentWindow.location = 'http://www.domain1.com/proxy.html';
            state = 1;
        }
    };

    document.body.appendChild(iframe);

    // 获取数据以后销毁这个iframe，释放内存；这也保证了安全（不被其他域frame js访问）
    function destoryFrame() {
        iframe.contentWindow.document.write('');
        iframe.contentWindow.close();
        document.body.removeChild(iframe);
    }
};

// 请求跨域b页面数据
proxy('http://www.domain2.com/b.html', function(data){
    alert(data);
});
```

2.）proxy.html：([http://www.domain1.com/proxy....](https://link.segmentfault.com/?enc=dQmQm1eylxl72xNb12uzxA%3D%3D.u71VYTGRN4pNU%2Bu6sMchhU5qKSbmSV7bs84MCTK5LY4seg3xRooqk%2F7h8eLsaza5)
中间代理页，与a.html同域，内容为空即可。

3.）b.html：([http://www.domain2.com/b.html)](https://link.segmentfault.com/?enc=dYWH%2B8KXDd3xI1sAzG9KkQ%3D%3D.fGwaZ9qTu2PP4rl%2BgzFIRn%2BmZQaNDQhsrTRGdF4YHgc%3D)

```xml
<script>
    window.name = 'This is domain2 data!';
</script>
```

总结：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。

#### **五、 postMessage跨域**

postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
a.） 页面和其打开的新窗口的数据传递
b.） 多窗口之间消息传递
c.） 页面与嵌套的iframe消息传递
d.） 上面三个场景的跨域数据传递

用法：postMessage(data,origin)方法接受两个参数
data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
origin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

1.）a.html：([http://www.domain1.com/a.html)](https://link.segmentfault.com/?enc=OHl47SW178lf%2BSCCg1dzeA%3D%3D.C9DNYBG5dPkeambKs3oCkBuCZ1t7maUebWz03WJmWX0%3D)

```xml
<iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"></iframe>
<script>       
    var iframe = document.getElementById('iframe');
    iframe.onload = function() {
        var data = {
            name: 'aym'
        };
        // 向domain2传送跨域数据
        iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com');
    };

    // 接受domain2返回数据
    window.addEventListener('message', function(e) {
        alert('data from domain2 ---> ' + e.data);
    }, false);
</script>
```

2.）b.html：([http://www.domain2.com/b.html)](https://link.segmentfault.com/?enc=2RQMB61YEjQ%2BkGgYTANs7w%3D%3D.l2uyampgp2S5UjzRko1YwL00%2B%2B8D5OizOeP4WODN%2BEM%3D)

```xml
<script>
    // 接收domain1的数据
    window.addEventListener('message', function(e) {
        alert('data from domain1 ---> ' + e.data);

        var data = JSON.parse(e.data);
        if (data) {
            data.number = 16;

            // 处理后再发回domain1
            window.parent.postMessage(JSON.stringify(data), 'http://www.domain1.com');
        }
    }, false);
</script>
```

#### **六、 跨域资源共享（CORS）**

普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。

需注意的是：由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。如果想实现当前页cookie的写入，可参考下文：七、nginx反向代理中设置proxy_cookie_domain 和 八、NodeJs中间件代理中cookieDomainRewrite参数的设置。

目前，所有浏览器都支持该功能(IE8+：IE8/9需要使用XDomainRequest对象来支持CORS）)，CORS也已经成为主流的跨域解决方案。

##### **1、 前端设置：**

1.）原生ajax

```javascript
// 前端设置是否带cookie
xhr.withCredentials = true;
```

示例代码：

```javascript
var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容

// 前端设置是否带cookie
xhr.withCredentials = true;

xhr.open('post', 'http://www.domain2.com:8080/login', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('user=admin');

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);
    }
};
```

2.）jQuery ajax

```javascript
$.ajax({
    ...
   xhrFields: {
       withCredentials: true    // 前端设置是否带cookie
   },
   crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    ...
});
```

3.）vue框架

a.) axios设置：

```javascript
axios.defaults.withCredentials = true
```

b.) vue-resource设置：

```javascript
Vue.http.options.credentials = true
```

##### **2、 服务端设置：**

若后端设置成功，前端浏览器控制台则不会出现跨域报错信息，反之，说明没设成功。

1.）Java后台：

```java
/*
 * 导入包：import javax.servlet.http.HttpServletResponse;
 * 接口参数中定义：HttpServletResponse response
 */

// 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
response.setHeader("Access-Control-Allow-Origin", "http://www.domain1.com"); 

// 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
response.setHeader("Access-Control-Allow-Credentials", "true"); 

// 提示OPTIONS预检时，后端需要设置的两个常用自定义头
response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
```

2.）Nodejs后台示例：

```javascript
var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', function(req, res) {
    var postData = '';

    // 数据块接收中
    req.addListener('data', function(chunk) {
        postData += chunk;
    });

    // 数据接收完毕
    req.addListener('end', function() {
        postData = qs.parse(postData);

        // 跨域后台设置
        res.writeHead(200, {
            'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
            'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）
            /* 
             * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
             * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
             */
            'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie
        });

        res.write(JSON.stringify(postData));
        res.end();
    });
});

server.listen('8080');
console.log('Server is running at port 8080...');
```

#### **七、 nginx代理跨域**

##### **1、 nginx配置解决iconfont跨域**

浏览器跨域访问js、css、img等常规静态资源被同源策略许可，但iconfont字体文件(eot|otf|ttf|woff|svg)例外，此时可在nginx的静态资源服务器中加入以下配置。

```crmsh
location / {
  add_header Access-Control-Allow-Origin *;
}
```

##### **2、 nginx反向代理接口跨域**

跨域原理： 同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨越问题。

实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

nginx具体配置：

```nginx
#proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;

    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
```

1.) 前端代码示例：

```javascript
var xhr = new XMLHttpRequest();

// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;

// 访问nginx中的代理服务器
xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
xhr.send();
```

2.) Nodejs后台示例：

```javascript
var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', function(req, res) {
    var params = qs.parse(req.url.substring(2));

    // 向前台写cookie
    res.writeHead(200, {
        'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'   // HttpOnly:脚本无法读取
    });

    res.write(JSON.stringify(params));
    res.end();
});

server.listen('8080');
console.log('Server is running at port 8080...');
```

#### **八、 Nodejs中间件代理跨域**

node中间件实现跨域代理，原理大致与nginx相同，都是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。

##### **1、 非vue框架的跨域（2次跨域）**

利用node + express + http-proxy-middleware搭建一个proxy服务器。

1.）前端代码示例：

```javascript
var xhr = new XMLHttpRequest();

// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;

// 访问http-proxy-middleware代理服务器
xhr.open('get', 'http://www.domain1.com:3000/login?user=admin', true);
xhr.send();
```

2.）中间件服务器：

```javascript
var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/', proxy({
    // 代理跨域目标接口
    target: 'http://www.domain2.com:8080',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
        res.header('Access-Control-Allow-Credentials', 'true');
    },

    // 修改响应信息中的cookie域名
    cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
}));

app.listen(3000);
console.log('Proxy server is listen at port 3000...');
```

3.）Nodejs后台同（六：nginx）

##### **2、 vue框架的跨域（1次跨域）**

利用node + webpack + webpack-dev-server代理接口跨域。在开发环境下，由于vue渲染服务和接口代理服务都是webpack-dev-server同一个，所以页面与代理接口之间不再跨域，无须设置headers跨域信息了。

webpack.config.js部分配置：

```javascript
module.exports = {
    entry: {},
    module: {},
    ...
    devServer: {
        historyApiFallback: true,
        proxy: [{
            context: '/login',
            target: 'http://www.domain2.com:8080',  // 代理跨域目标接口
            changeOrigin: true,
            secure: false,  // 当代理某些https服务报错时用
            cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
        }],
        noInfo: true
    }
}
```

#### 九、 WebSocket协议跨域

WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。
原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。

1.）前端代码：

```html
<div>user input：<input type="text"></div>
<script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js"></script>
<script>
var socket = io('http://www.domain2.com:8080');

// 连接成功处理
socket.on('connect', function() {
    // 监听服务端消息
    socket.on('message', function(msg) {
        console.log('data from server: ---> ' + msg); 
    });

    // 监听服务端关闭
    socket.on('disconnect', function() { 
        console.log('Server socket has closed.'); 
    });
});

document.getElementsByTagName('input')[0].onblur = function() {
    socket.send(this.value);
};
</script>
```

2.）Nodejs socket后台：

```javascript
var http = require('http');
var socket = require('socket.io');

// 启http服务
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end();
});

server.listen('8080');
console.log('Server is running at port 8080...');

// 监听socket连接
socket.listen(server).on('connection', function(client) {
    // 接收信息
    client.on('message', function(msg) {
        client.send('hello：' + msg);
        console.log('data from client: ---> ' + msg);
    });

    // 断开处理
    client.on('disconnect', function() {
        console.log('Client socket has closed.'); 
    });
```



## document.write和 innerHTML 的区别

```
document.write是直接写入到页面的内容流，如果在写之前没有调用document.open,  浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。 
document.write是直接将内容写入页面的内容流，会致使页面所有重绘，innerHTML将内容写入某个DOM节点，不会致使页面所有重绘。

innerHTML则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。如果想修改document的内容，则需要修改document.documentElement.innerElement。 

innerHTML很多情况下都优于document.write，其原因在于其允许更精确的控制要刷新页面的那一个部分。
```



## .call() 和 .apply() 的作用？

改变上下文，即改变this指向，劫持另一个对象的属性方法供自己使用

```
apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.

Function.apply(obj,args)方法能接收两个参数
obj：这个对象将代替Function类里this对象
args：这个是数组，它将作为参数传给Function（args-->arguments）

call:和apply的意思一样,只不过是参数列表不一样.

Function.call(obj,[param1[,param2[,…[,paramN]]]])
obj：这个对象将代替Function类里this对象
params：这个是一个参数列表
```



## 哪些操作会造成内存泄漏？

```
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

1. setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
```

### 引起内存泄漏的原因

#### 1、意外的全局变量

由于 js 对未声明变量的处理方式是在全局对象上创建该变量的引用。如果在浏览器中，全局对象就是 window 对象。变量在窗口关闭或重新刷新页面之前都不会被释放，如果未声明的变量缓存大量的数据，就会导致内存泄露。

- 未声明变量

```javascript
function fn() {
  a = 'global variable'
}
fn()
```

- 使用 this 创建的变量(this 的指向是 window)。

```javascript
function fn() {
  this.a = 'global variable'
}
fn()
```

解决方法：

- 避免创建全局变量
- 使用严格模式,在 JavaScript 文件头部或者函数的顶部加上 `use strict`。

#### 2、闭包引起的内存泄漏

原因：闭包可以读取函数内部的变量，然后让这些变量始终保存在内存中。如果在使用结束后没有将局部变量清除，就可能导致内存泄露。

```javascript
function fn () {
  var a = "I'm a";
  return function () {
    console.log(a);
  };
}
```

解决：将事件处理函数定义在外部，解除闭包，或者在定义事件处理函数的外部函数中。

比如：在循环中的函数表达式，能复用最好放到循环外面。

```javascript
// bad
for (var k = 0; k < 10; k++) {
  var t = function (a) {
    // 创建了10次  函数对象。
    console.log(a)
  }
  t(k)
}

// good
function t(a) {
  console.log(a)
}
for (var k = 0; k < 10; k++) {
  t(k)
}
t = null
```

#### 3、没有清理的 DOM 元素引用

原因：虽然别的地方删除了，但是对象中还存在对 dom 的引用。

```javascript
// 在对象中引用DOM
var elements = {
  btn: document.getElementById('btn'),
}
function doSomeThing() {
  elements.btn.click()
}

function removeBtn() {
  // 将body中的btn移除, 也就是移除 DOM树中的btn
  document.body.removeChild(document.getElementById('button'))
  // 但是此时全局变量elements还是保留了对btn的引用, btn还是存在于内存中,不能被GC回收
}
```

解决方法：手动删除，`elements.btn = null`。

#### 4、被遗忘的定时器或者回调

定时器中有 dom 的引用，即使 dom 删除了，但是定时器还在，所以内存中还是有这个 dom。

```javascript
// 定时器
var serverData = loadData()
setInterval(function () {
  var renderer = document.getElementById('renderer')
  if (renderer) {
    renderer.innerHTML = JSON.stringify(serverData)
  }
}, 5000)

// 观察者模式
var btn = document.getElementById('btn')
function onClick(element) {
  element.innerHTMl = "I'm innerHTML"
}
btn.addEventListener('click', onClick)
```

解决方法：

- 手动删除定时器和 dom。
- removeEventListener 移除事件监听



## 如何判断当前脚本运行在浏览器还是node环境中？

```
通过判断 Global 对象是否为window，如果不为window，当前脚本没有运行在浏览器中。即在node中的全局变量是global ,浏览器的全局变量是window。 可以通过该全局变量是否定义来判断宿主环境
```

```js
exports = typeof window === 'undefined' ? global : window ;
//获取全局对象的方式
//同理可得，typeof window可以用来判断是不是在浏览器环境中
```



## 什么叫优雅降级和渐进增强？

```
1. 优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效。

2. 渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。
```

渐进增强和优雅降级这两个概念是在 CSS3 出现之后火起来的。由于低级浏览器不支持 CSS3，但是 CSS3 特效太优秀不忍放弃，所以在高级浏览器中使用CSS3，而在低级浏览器只保证最基本的功能。二者的目的都是关注不同浏览器下的不同体验，但是它们侧重点不同，所以导致了工作流程上的不同。

```
渐进增强（Progressive Enhancement）：一开始就针对**低版本浏览器**进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。
渐进增强的观点：应关注于内容本身。内容是我们建立网站的诱因。有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得渐进增强成为一种更为合理的设计范例。
```

```
优雅降级（Graceful Degradation）：一开始就构建站点的**完整功能**，然后再针对低版本浏览器进行兼容。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。
优雅降级的观点：应针对最高级、最完善的浏览器来开发网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。你可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。
```

```
渐进增强的写法，优先考虑老版本浏览器的可用性，最后才考虑新版本的可用性。而在现在前缀CSS3和正常CSS3都可用的情况下，**正常CSS3会覆盖前缀CSS3。**

优雅降级的写法，优先考虑新版本浏览器的可用性，最后才考虑老版本的可用性。而在现在前缀CSS3和正常CSS3都可用的情况下，**前缀CSS3会覆盖正常的CSS3。**
```



## 对Node的优点和缺点提出了自己的看法？

```
链接：https://www.nowcoder.com/questionTerminal/bcc28350c5174ab3a56c34dd45f1bd29
来源：牛客网

node优点：node是基于事件驱动和无阻塞的 所以适合高并发操作 node.js的客户端和服务端代码语言相同 都是js

缺点：node.js更新很快 会出现版本兼容问题 并且也缺少足够多第三方库支持

node.js的适用场景：聊天 实时消息推送 高并发
```



## 对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？

```
前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。
1. 实现界面交互
2. 提升用户体验
3. 有了Node.js，前端可以实现服务端的一些事情

前景：
1. 前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好
2. 参与项目，快速高质量完成实现效果图，精确到1px；
3. 与团队成员，UI设计，产品经理的沟通；
4. 做好的页面结构，页面重构和用户体验；
5. 处理hack，兼容、写出优美的代码格式；
6. 针对服务器的优化、拥抱最新前端技术。
```



## 你有哪些性能优化的方法？

```
1. 减少http请求次数：CSS Sprites, JS、CSS 源码压缩、图片大小控制合适；网页 Gzip，CDN 托管，data 缓存 ，图片服务器
2. 前端模板 JS + 数据，减少由于HTML标签导致的带宽浪费，前端用变量保存 AJAX 请求结果，每次操作本地变量，不用请求，减少请求次数
3. 用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能
4. 当需要设置的样式很多时设置 className 而不是直接操作 style
5. 少用全局变量、缓存DOM节点查找的结果。减少 IO 读取操作
6. 避免使用 CSS Expression（css表达式)又称 Dynamic properties(动态属性)
7. 图片预加载，将样式表放在顶部，将脚本放在底部，加上时间戳
```



## http状态码有那些？分别代表是什么意思？

1.背景介绍

当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。

 当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。

 HTTP状态码由三个十进制数字组成，三位数字代码分别代表着不同的请求状态，**第一个十进制数字定义了状态码的类型**，后两个数字没有分类的作用。



2.HTTP状态码分类

HTTP状态码共分为5种类型：

```
1开头：（被接受，需要继续处理。）这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。

2开头 （请求成功）这一类型的状态码，代表请求已成功被服务器接收、理解、并接受

3开头 （请求被重定向）这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 location 域中指明。

4开头：（请求错误）这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个 HEAD 请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。

5开头：（服务器错误）这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。除非这是一个HEAD 请求，否则服务器应当包含一个解释当前错误状态以及这个状况是临时的还是永久的解释信息实体。浏览器应当向用户展示任何在当前响应中被包含的实体。
```

如何记忆这些状态码

Http 状态码是做Web开发的必备的基础知识，面试中也会经常出现这方面的考题。但是要记住全部的状态码不是一件容易的事，部分状态码记忆：

```
1. 100-199 用于指定客户端应响应的某些动作
2. 200-299 用于表示请求成功
3. 300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息
4. 400-499 用于指出客户端的错误
400：语义有误，当前请求无法被服务器理解
401：当前请求需要用户验证
403：服务器已经理解请求，但是拒绝执行它
5. 500-599 用于指出服务器错误
503：服务不可用
```

3 常见问题
有哪些常见的状态码？

一般只需要了解以下常见的状态码就够了：

```
200 OK：服务器成功处理了请求（这个是我们见到最多的）

301 Moved Permanently：资源移动。所请求资源自动到新的URL，浏览器自动跳转到新的URL

304 Not Modified：服务端的资源与客户端上一次请求的一致，不需要重新传输，客户端使用本地缓存的即可

400 Bad Request：用于告诉客户端它发送了一个错误的请求

404 Not Found：(页面丢失)未找到资源

500 Internal Server Error：服务器内部出现了错误

501 Internal Server Error：服务器遇到一个错误，使其无法对请求提供服务
```



## 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

```
分为4个步骤：
1. 当发送一个 URL 请求时，不管这个 URL 是 Web 页面的 URL 还是 Web 页面上每个资源的 URL，浏览器都会开启一个线程来处理这个请求，同时在远程 DNS 服务器上启动一个 DNS 查询。这能使浏览器获得请求对应的 IP 地址。
2. 浏览器与远程 Web 服务器通过 TCP 三次握手协商来建立一个 TCP/IP 连接。该握手包括一个同步报文，一个同步-应答报文和一个应答报文，这三个报文在 浏览器和服务器之间传递。该握手首先由客户端尝试建立起通信，而后服务器应答并接受客户端的请求，最后由客户端发出该请求已经被接受的报文。
3. 一旦 TCP/IP 连接建立，浏览器会通过该连接向远程服务器发送 HTTP 的 GET 请求。远程服务器找到资源并使用 HTTP 响应返回该资源，值为 200 的 HTTP 响应状态表示一个正确的响应。
4. 此时，Web 服务器提供资源服务，客户端开始下载资源。

请求返回后，便进入了我们关注的前端模块
简单来说，浏览器会解析 HTML 生成 DOM Tree，其次会根据 CSS 生成 CSS Rule Tree，而 javascript 又可以根据 DOM API 操作 DOM
```

总体来说分为以下几个过程:

1. DNS解析
2. TCP连接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文
5. 浏览器解析渲染页面
6. 连接结束



## 平时如何管理你的项目？

```
1. 先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等
2. 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）
3. 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）
4. 页面进行标注（例如 页面 模块 开始和结束）
5. CSS 跟 HTML 分文件夹并行存放，命名都得统一（例如 style.css）
6. JS 分文件夹存放 命名以该 JS 功能为准的英文翻译
7. 图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理 
```



## 说说最近最流行的一些东西吧？常去的哪些网站？

```
最流行的一些东西：
1. Node.js
2. Mongodb
3. npm
4. MVVM
5. MEAN
6. three.js
7. React

常去的网站：
1. 牛客网
2. Github
3. CSDN
```



## javascript继承的 6 种方法

```
1. 原型链继承
2. 借用构造函数继承
3. 组合继承(原型+借用构造)
4. 原型式继承
5. 寄生式继承
6. 寄生组合式继承
```

### 1、原型链继承

**核心：** 将父类的实例作为子类的原型

### 2、构造继承

**核心：**使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

### 3、实例继承

**核心：**为父类实例添加新特性，作为子类实例返回

### 4、拷贝继承

### 5、组合继承

**核心：**通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

### 6、寄生组合继承

**核心：**通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点



## ajax 的过程是怎样的

```
1. 创建XMLHttpRequest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回的数据
6. 使用JavaScript和DOM实现局部刷新
```

 AJAX全称为“Asynchronous JavaScript and XML”（异步JavaScript和XML），是一种创建交互式网页应用的网页开发技术。Ajax的工作原理相当于在用户和服务器之间加了—个中间层(AJAX引擎),使用户操作与服务器响应异步化。并不是所有的用户请求都提交给服务器,像—些数据验证和数据处理等都交给Ajax引擎自己来做, 只有确定需要从服务器读取新数据时再由Ajax引擎代为向服务器提交请求。

实现一个AJAX异步调用和局部刷新,通常需要以下几个步骤:

```
   创建XMLHttpRequest对象,也就是创建一个异步调用对象.
   创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
   设置响应HTTP请求状态变化的函数.
   发送HTTP请求.
   获取异步调用返回的数据.
   使用JavaScript和DOM实现局部刷新.
```



## 异步加载和延迟加载

```
   1. 异步加载的方案: 动态插入script标签
   2. 通过ajax去获取js代码，然后通过eval执行
   3. script标签上添加defer或者async属性
   4. 创建并插入iframe，让它异步执行js
   5. 延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。
```

   

## 前端的安全问题？

```
1. XSS
	XSS指cross-site-scripting, 跨站脚本攻击，指通过存在web安全漏洞的web网站注册的用户的浏览器内运行非法的html标签或者js而进行的攻击。用户通过在自己的浏览器上运行这些脚本就会被攻击。
	
2. sql注入
	指的是针对web应用使用的数据库，通过运行非法的SQL而产生的攻击。
	
3. CSRF：是跨站请求伪造，很明显根据刚刚的解释，他的核心也就是请求伪造，通过伪造身份提交POST和GET请求来进行跨域的攻击
	跨站点请求伪造攻击，指的是攻击者通过设置好的陷阱，强制对已完成认证的用户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击。
完成CSRF需要两个步骤：
	1. 登陆受信任的网站A，在本地生成 COOKIE
	2. 在不登出A的情况下，或者本地 COOKIE 没有过期的情况下，访问危险网站B。

4. OS命令注入攻击，指的是通过web应用，执行非法的操作系统命令达到非法攻击的目的。
5. HTTP首部注入攻击，指攻击者通过在相应首部字段内插入换行，然后添加任意响应首部过主体的攻击。 
6. 邮件首部注入攻击，指攻击者通过向邮件首部to或subject内任意添加非法内容引起的攻击。
7. 会话劫持，指攻击者通过某种手段拿到了用户的会话id，并非法使用此会话id伪装成用户达到攻击的目的。
8. DDoS，一种让运行中的服务成停止状态的攻击。
```

```
8大典型的前端安全问题，它们分别是：

老生常谈的XSS 
警惕iframe带来的风险
别被点击劫持了
错误的内容推断
防火防盗防猪队友：不安全的第三方依赖包
用了HTTPS也可能掉坑里
本地存储数据泄露
缺失静态资源完整性校验
```



## ie 各版本和 chrome 可以并行下载多少个资源

```
IE6：2个；

IE7：4个；

IE8+：6个

FireFox，Chrome：6个。
```

同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在6以内。有些资源的请求时间很长，因而会阻塞其他资源的请求。因此，对于一些静态资源，如果放到不同的域名下面就能实现与其他资源的并发请求。



## javascript里面的继承怎么实现，如何避免原型链上面的对象共享

用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量

1.利用原型来继承,通过增加一个空的函数来避免[原型链](https://so.csdn.net/so/search?q=原型链&spm=1001.2101.3001.7020)上的对象共享

```js
 var a = {name：“小明”}；
        var b = cloneObj(a);
         function cloneObj(obj){undefined
                var f = function(）{}；
                f.prototype = obj;
                return new f();
        }
}
```

2.使用extend，多用于插件封装

```javascript
Var item={name:”olive”,age:23};

Var item1={name:”Momo”,sex:”gril”};

Var result=$.extend({},item,item1);

//结果：

Result={name:”Momo”,age:23,sex:”gril”};

```



## grunt， YUI compressor 和 google clojure用来进行代码压缩的用法。

grunt：
UglifyJS 是基于 NodeJS 的 Javascript 语法解析/压缩/格式化工具
官网：http://lisperator.net/uglifyjs/ 或者 https://github.com/mishoo/UglifyJS2
安装：

```bash
$ npm install uglify-js -g
使用方法见官网 demo
```

YUI compressor：

YUI Compressor 是一个用来压缩 JS 和 CSS 文件的工具，采用Java开发。

使用方法：

```bash
// 压缩JS
java -jar yuicompressor-2.4.2.jar --type js --charset utf-8 -v src.js > packed.js
// 压缩CSS
java -jar yuicompressor-2.4.2.jar --type css --charset utf-8 -v src.css > packed.css
```

Google Closure Compiler：

官网：https://developers.google.com/closure/compiler/

使用方法：

```
1. 在命令行下使用一个google编译好的java程序

2. 使用google提供的在线服务

3. 使用google提供的RESTful API
```



## Flash、Ajax各自的优缺点，在使用中如何取舍？

```
Flash：
1. Flash适合处理多媒体、矢量图形、访问机器
2. 对CSS、处理文本上不足，不容易被搜索

Ajax：
1. Ajax对CSS、文本支持很好，支持搜索
2. 多媒体、矢量图形、机器访问不足

共同点：
1. 与服务器的无刷新传递消息
2. 可以检测用户离线和在线状态
2. 操作DOM
```



## 请解释一下 JavaScript 的同源策略。

概念：

同源策略是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。

这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议，指一段脚本只能读取来自同一来源的窗口和文档的属性。

为什么要有同源限制：

我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。



## 什么是 "use strict"; ? 使用它的好处和坏处分别是什么？

```
ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：
1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
2. 消除代码运行的一些不安全之处，保证代码运行的安全；
3. 提高编译器效率，增加运行速度；
4. 为未来新版本的Javascript做好铺垫。
注：经过测试 IE6,7,8,9 均不支持严格模式。

缺点：
现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。
```



## GET和POST的区别，何时使用POST？

GET和POST的区别　　

```
	（1）get是从服务器上获取数据，post是向服务器传送数据。

　　（2）get是将参数数据加到URL中，用户可以看到。post是将内容放置在http请求信息体内传送，用户看不到这个过程。

　　（3）对于get方法，服务器端是用Request.QueryString获取变量的值，对于post方法，服务器端用Request.Form获取提交的数据。

　　（4）get传送的数据量较小，不能大于2kb。post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80kb，IIS5中为100kb。

　　（5）get安全性非常低，post安全性较高。但是执行效率却比post方法好。
```

仅用于POST请求  **在以下情况只能用POST请求**

```
1.无法使用缓存文件；
2.向服务器发送大量数据；
3.发送包含未知字符的用户输入时，post比get更稳定也更可靠
```

**建议使用get方法的情况**：

```
1、get方式的安全性较Post方式要差些，包含机密信息的话，建议用Post数据提交方式
2、在做数据查询时，建议用Get方式；而在做数据添加、修改或删除时，建议用Post方式；
```



## 哪些地方会出现css阻塞，哪些地方会出现js阻塞？

js 的阻塞特性：所有浏览器在下载 JS 的时候，会阻止一切其他活动，比如其他资源的下载，内容的呈现等等。直到 JS 下载、解析、执行完毕后才开始继续并行下载其他资源并呈现内容。为了提高用户体验，新一代浏览器都支持并行下载 JS，但是 JS 下载仍然会阻塞其它资源的下载（例如.图片，css文件等）。

由于浏览器为了防止出现 JS 修改 DOM 树，需要重新构建 DOM 树的情况，所以就会阻塞其他的下载和呈现。

嵌入 JS 会阻塞所有内容的呈现，而外部 JS 只会阻塞其后内容的显示，2 种方式都会阻塞其后资源的下载。也就是说外部样式不会阻塞外部脚本的加载，但会阻塞外部脚本的执行。

CSS 怎么会阻塞加载了？CSS 本来是可以并行下载的，在什么情况下会出现阻塞加载了(在测试观察中，IE6 下 CSS 都是阻塞加载）

当 CSS 后面跟着嵌入的 JS 的时候，该 CSS 就会出现阻塞后面资源下载的情况。而当把嵌入 JS 放到 CSS 前面，就不会出现阻塞的情况了。

根本原因：因为浏览器会维持 html 中 css 和 js 的顺序，样式表必须在嵌入的 JS 执行前先加载、解析完。而嵌入的 JS 会阻塞后面的资源加载，所以就会出现上面 CSS 阻塞下载的情况。

嵌入JS应该放在什么位置？

```
\1. 放在底部，虽然放在底部照样会阻塞所有呈现，但不会阻塞资源下载。

\2. 如果嵌入JS放在head中，请把嵌入JS放在CSS头部。

\3. 使用 defer（只支持IE）

\4. 不要在嵌入的JS中调用运行时间较长的函数，如果一定要用，可以用 setTimeout 来调用
```

Javascript无阻塞加载具体方式：

```
\1. 将脚本放在底部。<link>还是放在head中，用以保证在js加载前，能加载出正常显示的页面。<script>标签放在</body>前。

\2. 阻塞脚本：由于每个<script>标签下载时阻塞页面解析过程，所以限制页面的<script>总数也可以改善性能。适用于内联脚本和外部脚本。

\3. 非阻塞脚本：等页面完成加载后，再加载js代码。也就是，在 window.onload 事件发出后开始下载代码。

\4. defer属性：支持IE4和fierfox3.5更高版本浏览器

\5. 动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。代码如下：
```

```html
<script>
    var script=document.createElement("script");
    script.type="text/javascript";
    script.src="file.js";
    document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

此技术的重点在于：无论在何处启动下载，文件额下载和运行都不会阻塞其他页面处理过程，即使在head里（除了用于下载文件的 http 链接）。



## eval是做什么的？

```
1. 它的功能是把对应的字符串解析成JS代码并运行
2. 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）
```

`**eval()**` 函数会将传入的字符串当做 JavaScript 代码进行执行。

```js
console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false
```

```

```

eval(string)

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#参数)

- `string`

  一个表示 JavaScript 表达式、语句或一系列语句的字符串。表达式可以包含变量与已存在对象的属性。

### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#返回值)

返回字符串中代码的返回值。如果返回值为空，则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。



`eval()` 是全局对象的一个函数属性。

`eval()` 的参数是一个字符串。如果字符串表示的是表达式，`eval()` 会对表达式进行求值。如果参数表示一个或多个 JavaScript 语句，那么`eval()` 就会执行这些语句。不需要用 `eval()` 来执行一个算术表达式：因为 JavaScript 可以自动为算术表达式求值。

如果你以字符串的形式构造了算术表达式，那么可以在后面用 `eval()`对它求值。例如，假设你有一个变量 `x`，您可以通过将表达式的字符串值（例如 `3 * x + 2`）赋值给一个变量，然后在你的代码后面的其他地方调用 `eval()`，来推迟涉及 `x` 的表达式的求值。

如果 `eval()` 的参数不是字符串， `eval()` 会将参数原封不动地返回。在下面的例子中，`String` 构造器被指定，而 `eval()` 返回了 `String` 对象而不是执行字符串。

### [永远不要使用 `eval`！](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21)

`eval()` 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 就不容易被攻击。

`eval()` 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。

此外，现代JavaScript解释器将javascript转换为机器代码。 这意味着任何变量命名的概念都会被删除。 因此，任意一个eval的使用都会强制浏览器进行冗长的变量名称查找，以确定变量在机器代码中的位置并设置其值。 另外，新内容将会通过 `eval()` 引进给变量， 比如更改该变量的类型，因此会强制浏览器重新执行所有已经生成的机器代码以进行补偿。 但是，（谢天谢地）存在一个非常好的eval替代方法：只需使用 [window.Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)。 这有个例子方便你了解如何将`eval()`的使用转变为`Function()`。

使用eval的糟糕代码:

```js
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
```



 不用eval的更好的代码:

```js
function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
```



## 写一个通用的事件侦听器函数

```js
// event(事件)工具集，来源：github.com/markyun
markyun.Event = {
    // 页面加载完成后
    readyEvent : function(fn) {
        if (fn==null) {
            fn=document;
        }
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = fn;
        } else {
            window.onload = function() {
                oldonload();
                fn();
            };
        }
    },
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent : function(element, type, handler) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function() {
                handler.call(element);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    // 移除事件
    removeEvent : function(element, type, handler) {
        if (element.removeEnentListener) {
            element.removeEnentListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    }, 
    // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
    stopPropagation : function(ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        } else {
            ev.cancelBubble = true;
        }
    },
    // 取消事件的默认行为
    preventDefault : function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 获取事件目标
    getTarget : function(event) {
        return event.target || event.srcElement;
    },
    // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
    getEvent : function(e) {
        var ev = e || window.event;
        if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                ev = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return ev;
    }
};
```



## Node.js 的适用场景

```
1. 高并发
2. 聊天
3. 实时消息推送   
```

### Node特点

**1.异步I/O**
在Node中，绝大多数的操作都以异步的方式进行调用，从文件读取到网络请求，均是如此，异步I/O意味着每个调用之间无须等待之前的I/O调用结束，在编程模型上可以提升效率，如果存在两个文件读取任务，最终的耗时只取决于最慢的那个文件读取耗时，对于同步I/O而言，他的耗时是两个任务之和。

**2.事件与回调**
在Node中事件得到了广泛的应用，如创建一个服务器，我们会为器其绑定request对象，对于请求对象绑定data和end事件，同时在前端我们通常也是为Ajax请求绑定success事件、error事件等。同样，在Node中回调也是无处不在的，事件的处理基本都是依赖回调来实现的，在JavaScript中，可以将函数作为对象传递给方法作为实参进行调用。

**3.单线程**
Node保持了JavaScript在浏览器中单线程的特点，而且在Node中，JavaScript与其余线程是无法共享任何状态的。JavaScript采用单线程的原因和他最早的用途有关，最早在Web浏览器中，JavaScript主要做的是响应用户DOM操作以及做表单校验，这些功能使用单线程来处理完全够了，而且对于DOM操作来说，使用多线程的话还将造成线程安全问题，同时多线程还将给浏览器带来更大的内存消耗并降低CPU的使用率。

单就单线程本身来说，存在如下几个弱点：

1、无法利用多核CPU
2、错误会引起整个应用退出，应用的健壮性需要考虑
3、大量计算占用CPU将使阻塞程序的运行
严格来说，Node并非真正的单线程架构，Node自身还有一定的I/O线程存在，这些I/O线程由底层libuv处理，这就意味着Node在访问系统I/O时还是多线程的，对于文件读取、SQL查询、网路请求这些具体操作，Node还是使用多线程来进行处理从而保证Node的处理效率。

**4.跨平台**
Node刚发布的时候，只能在Linux平台上运行，后来Node在架构层面进行了改动，在Node和操作系统之间引入了一层libuv，从而实现跨平台。

### Node适合的应用场景

**1.I/O密集型**
Node异步I/O的特点使得他可以轻松面对I/O密集型的业务场景，处理效率将比同步I/O高，虽然同步I/O可以采用多线程或者多进程的方式进行，但是相比Node自带异步I/O的特性来说，将增加对内存和CPU的开销。

**2.高并发场景**
针对高并发请求场景，Node的异步I/O以及事件回调特点可以高效的处理并发请求



## JavaScript 原型，原型链 ? 有什么特点？

- 原型对象也是普通的对象，是对象一个自带隐式的 `__proto__` 属性，原型也有可能有自己的原型，如果一个原型对象的原型不为null的话，我们就称之为原型链
- 原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链

```
JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。

当我们修改原型时，与之相关的对象也会继承这一改变。

当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，

就会查找他的prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。
```

什么是原型，原型有什么特点

```
链接：https://www.nowcoder.com/questionTerminal/dafdf862d4614009a9eab014a157dd83
来源：牛客网

JavaScript 的每个对象都继承另一个对象，后者称为“原型”（prototype）对象。只有null除外，它没有自己的原型对象。

使用原型的好处是：原型对象上的所有属性和方法，都能被对应的构造函数创建的实例对象共享（这就是 JavaScript 继承机制的基本设计），也就是说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中。

每一个构造函数都有一个prototype（原型）属性，这个属性就是使用构造函数创建出来的实例对象的原型对象。
```

什么是原型链，原型链有什么特点

```
链接：https://www.nowcoder.com/questionTerminal/dafdf862d4614009a9eab014a157dd83
来源：牛客网

对象的属性和方法，有可能是定义在自身，也有可能是定义在它的原型对象上。由于原型本身也是对象，又有自己的原型，所以形成了一条原型链（prototype chain）。

如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype，即Object构造函数的prototype属性指向的那个对象。而Object.prototype对象的原型就是没有任何属性和方法的null对象，而null对象没有自己的原型。

“原型链”的作用是，读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的Object.prototype还是找不到，则返回undefined。

如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

需要注意的是，一级级向上，在原型链寻找某个属性，对性能是有影响的。所寻找的属性在越上层的原型对象，对性能的影响越大。如果寻找某个不存在的属性，将会遍历整个原型链。
```



## 怎么重构页面？对网站重构的理解

页面重构就是根据原有页面内容和结构的基础上 通过div+css写出符合web标准的页面结构 结构完整 可通过标准验证 标签语义化 结构合理 充分考虑到页面在站点中的

```
1. 编写 CSS
2. 让页面结构更合理化，提升用户体验
3. 实现良好的页面效果和提升性能
```

```
网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变 UI 的情况下，对网站进行优化，在扩展的同时保持一致的 UI。

对于传统的网站来说重构通常是：
1. 表格(table)布局改为 DIV + CSS
2. 使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对 IE6 有效的)
3. 对于移动平台的优化
4. 针对于 SEO 进行优化
5. 深层次的网站重构应该考虑的方面
6. 减少代码间的耦合
7. 让代码保持弹性
8. 严格按规范编写代码
9. 设计可扩展的API
10. 代替旧有的框架、语言(如VB)
11. 增强用户体验
12. 通常来说对于速度的优化也包含在重构中
13. 压缩JS、CSS、image等前端资源(通常是由服务器来解决)
14. 程序的性能优化(如数据读写)
15. 采用CDN来加速资源加载
16. 对于JS DOM的优化
17. HTTP服务器的文件缓存
```



## WEB应用从服务器主动推送Data到客户端有那些方式？

```
1. html5 websocket
2. WebSocket 通过 Flash
3. XHR长时间连接
4. XHR Multipart Streaming
5. 不可见的Iframe
6. <script>标签的长时间连接(可跨域)
```



## 事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

```
1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为
2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件
3. ev.stopPropagation();
注意旧ie的方法：ev.cancelBubble = true;
```



## Ajax 是什么？Ajax 的交互模型？同步和异步的区别？如何解决跨域问题？

```
Ajax 是什么：
1. 通过异步模式，提升了用户体验
2. 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用
3. Ajax 在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。

Ajax 的最大的特点：
1. Ajax可以实现动态不刷新（局部刷新）
2. readyState 属性 状态 有5个可取值： 0 = 未初始化，1 = 启动， 2 = 发送，3 = 接收，4 = 完成

Ajax 同步和异步的区别:
1. 同步：提交请求 -> 等待服务器处理 -> 处理完毕返回，这个期间客户端浏览器不能干任何事
2. 异步：请求通过事件触发 -> 服务器处理（这是浏览器仍然可以作其他事情）-> 处理完毕
ajax.open方法中，第3个参数是设同步或者异步。

Ajax 的缺点：
1. Ajax 不支持浏览器 back 按钮
2. 安全问题 Ajax 暴露了与服务器交互的细节
3. 对搜索引擎的支持比较弱
4. 破坏了程序的异常机制
5. 不容易调试

解决跨域问题：
1. jsonp
2. iframe
3. window.name、window.postMessage
4. 服务器上设置代理页面
```



## js对象的深度克隆代码实现

```js
function clone(Obj) {
    var buf;   
    if (Obj instanceof Array) {
        buf = [];  // 创建一个空的数组
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object){
        buf = {};  // 创建一个空对象
        for (var k in Obj) {  // 为这个对象添加新的属性
            buf[k] = clone(Obj[k]);
        }
        return buf;
    }else{
        return Obj;
    }
}
```



## JS获取浏览器UA(User Agent 用户代理)方法

获取用户浏览器/代理设备，这个是属于BOM部分的

主要考察对 `navigator` 的理解

```
封装一个 browser() 方法

为了方便使用，这里创建一个方法来返回浏览器的检查结果。返回结果包含有如下属性：

webkit：webkit 版本号。如果浏览器为非 webkit 内核，此属性为 undefined。
chrome：chrome 浏览器版本号。如果浏览器为 chrome，此属性为 undefined。
ie：ie 浏览器版本号。如果浏览器为非 ie，此属性为 undefined。暂不支持 ie10+
firefox：firefox 浏览器版本号。如果浏览器为非 firefox，此属性为 undefined。
safari：safari 浏览器版本号。如果浏览器为非 safari，此属性为 undefined。
opera：opera 浏览器版本号。如果浏览器为非 opera，此属性为 undefined。
```



```html
<script> 
function whatBrowser() {  
    document.Browser.Name.value=navigator.appName;  
    document.Browser.Version.value=navigator.appVersion;  
    document.Browser.Code.value=navigator.appCodeName;  
    document.Browser.Agent.value=navigator.userAgent;  
}
</script>
```



## js 数组去重

### 1.利用ES6 Set去重（ES6中最常用）

```js
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。

### 2.利用for嵌套for，然后splice去重（ES5中最常用）

双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。

```js
function unique(arr){            
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。

### 3.利用indexOf去重

新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

### 4.利用sort()

利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
     var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```

### 5.利用对象的属性不能相同的特点进行去重（这种数组去重的方法有问题，不建议用，有待改进）

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var arrry= [];
     var  obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            arrry.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return arrry;
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", 15, false, undefined, null, NaN, 0, "a", {…}]    //两个true直接去掉了，NaN和{}去重
```

### 6.利用includes

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```

### 7.利用hasOwnProperty

利用hasOwnProperty 判断是否存在对象属性

```js
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了
```

### 8.利用filter

```js
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```

### 9.利用递归去重

```js
function unique(arr) {
        var array= arr;
        var len = array.length;

    array.sort(function(a,b){   //排序后更加方便去重
        return a - b;
    })

    function loop(index){
        if(index >= 1){
            if(array[index] === array[index-1]){
                array.splice(index,1);
            }
            loop(index - 1);    //递归loop，然后数组去重
        }
    }
    loop(len-1);
    return array;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

### 10.利用Map数据结构去重

创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果

```js
function arrayNonRepeatfy(arr) {
  let map = new Map();
  let array = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(map .has(arr[i])) {  // 如果有该key值
      map .set(arr[i], true); 
    } else { 
      map .set(arr[i], false);   // 如果没有该key值
      array .push(arr[i]);
    }
  } 
  return array ;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

### 11.利用reduce+includes

```js
function unique(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

### 12. [...new Set(arr)]

```js
[...new Set(arr)] 
//代码就是这么少----（其实，严格来说并不算是一种，相对于第一种方法来说只是简化了代码）
```



## HTTP状态码

```
100 Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
200 OK   正常返回信息
201 Created  请求成功并且服务器创建了新的资源
202 Accepted  服务器已接受请求，但尚未处理
301 Moved Permanently  请求的网页已永久移动到新位置
302 Found  临时性重定向
303 See Other  临时性重定向，且总是使用 GET 请求新的 URI
304 Not Modified  自从上次请求后，请求的网页未修改过
400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求
401 Unauthorized  请求未授权
403 Forbidden  禁止访问
404 Not Found  找不到如何与 URI 相匹配的资源
500 Internal Server Error  最常见的服务器端错误
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）
```



## cache-control

```
网页的缓存是由HTTP消息头中的“Cache-control”来控制的，常见的取值有private、no-***、max-age、must-revalidate等，默认为private。

Expires 头部字段提供一个日期和时间，响应在该日期和时间后被认为失效。允许客户端在这个时间之前不去检查（发请求），等同max-age的效果。但是如果同时存在，则被Cache-Control的max-age覆盖。

Expires = "Expires" ":" HTTP-date
例如：
Expires: Thu, 01 Dec 1994 16:00:00 GMT （必须是GMT格式）
如果把它设置为-1，则表示立即过期

Expires 和 max-age 都可以用来指定文档的过期时间，但是二者有一些细微差别
1. Expires在HTTP/1.0中已经定义，Cache-Control:max-age在HTTP/1.1中才有定义，为了向下兼容，仅使用max-age不够
2. Expires指定一个绝对的过期时间(GMT格式),这么做会导致至少2个问题：
    2.1客户端和服务器时间不同步导致Expires的配置出现问题。 
    2.2很容易在配置后忘记具体的过期时间，导致过期来临出现浪涌现象
3. max-age 指定的是从文档被访问后的存活时间，这个时间是个相对值(比如:3600s)，相对的是文档第一次被请求时服务器记录的Request_time(请求时间)
4. Expires 指定的时间可以是相对文件的最后访问时间(Atime)或者修改时间(MTime)，而max-age相对对的是文档的请求时间(Atime)
5. 如果值为 no-***,那么每次都会访问服务器。如果值为max-age，则在过期之前不会重复访问服务器。
```



## js 操作获取和设置 cookie

```js
// 创建cookie
function setCookie(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieText += '; expires=' + expires;
    }
    if (path) {
        cookieText += "; path=" + path     }
    if (domain) {
        cookieText += '; domain=' + domain;
    }
    if (secure) {
        cookieText += '; secure';
    }
    document.cookie = cookieText;
}
// 获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}
// 删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
```



---

## **JSONP的优缺点**

​    **1.优点**
​        1.1它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制，JSONP可以跨越同源策略；
​        1.2它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持
​        1.3在请求完毕后可以通过调用callback的方式回传结果。将回调方法的权限给了调用方。这个就相当于将controller层和view层终于分开了。我提供的jsonp服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续view操作都由调用者来自己定义就好了。如果有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个jsonp服务。
​    **2.缺点**
​        2.1它只支持GET请求而不支持POST等其它类型的HTTP请求
​        2.2它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
​        2.3 jsonp在调用失败的时候不会返回各种HTTP状态码。
​        2.4缺点是安全性。万一假如提供jsonp的服务存在页面注入漏洞，即它返回的javascript的内容被人控制的。那么结果是什么？所有调用这个 jsonp的网站都会存在漏洞。于是无法把危险控制在一个域名下…所以在使用jsonp的时候必须要保证使用的jsonp服务必须是安全可信的。
