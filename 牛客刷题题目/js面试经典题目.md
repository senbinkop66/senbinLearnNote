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

##  CSS sprites

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

