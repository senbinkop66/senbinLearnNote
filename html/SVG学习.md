----

https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial

----

# 引言

SVG是一种XML语言，类似 XHTML，可以用来绘制矢量图形，例如右面展示的图形。SVG 可以通过定义必要的线和形状来创建一个图形，也可以修改已有的位图，或者将这两种方式结合起来创建图形。图形和其组成部分可以形变（be transformed）、合成、或者通过滤镜完全改变外观。

SVG 诞生于 1999 年，之前有几个相互竞争的格式规范被提交到W3C，但是都没有获得批准。主流浏览器均支持 SVG。加载慢是 SVG 的一个缺点。但是 SVG 也有自身的优点，比如它实现了 DOM 接口（比 Canvas 方便），不需要安装第三方扩展 (extensions，原文有误，应该是插件 plugins，类似 flash)。当然，是否使用 SVG 还要取决于你要实现什么。

### [基本要素](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Introduction#基本要素)

HTML 提供了定义标题、段落、表格等等内容的元素。与此类似，SVG 也提供了一些元素，用于定义圆形、矩形、简单或复杂的曲线。一个简单的 SVG 文档由`<svg>`根元素和基本的形状元素构成。另外还有一个`g`元素，它用来把若干个基本形状编成一个组。

从这些开始，SVG 可以变得更加复杂。SVG 支持渐变、旋转、动画、滤镜效果、与 JavaScript 交互等等功能，但是所有这些额外的语言特性，都需要在一个定义好的图形区域内实现。

### [开始之前](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Introduction#before_you_start)

包括[Inkscape](https://www.inkscape.org/)在内的很多免费应用原生支持 SVG 格式的文件。但是本教程建议在学习过程中使用 XML 或文本编辑器，因为想要理解 SVG 内部的原理，最好的方法就是动手写一些 SVG 的标记。你需要注意到你的最终目标。各种 SVG 浏览器是有差异的，因此很可能你制作了一个 SVG 图形，并且用一个工具调试正常后，却在另外一个浏览器中无法正常显示。这是因为不同的浏览器支持 SVG 标准的程度不同，另外，如果你将其他技术和 SVG 一起使用（比如[JavaScript](https://developer.mozilla.org/en-US/JavaScript)和[CSS](https://developer.mozilla.org/en-US/CSS)），也会出现类似的情况。

所有的现代浏览器都支持 SVG，在某些情况下甚至几个版本都支持 SVG。[Can I use](https://caniuse.com/#feat=svg)上有一份比较详细的支持 SVG 的浏览器列表，Firefox 1.5 以后的版本支持 SVG 的部分内容，并且支持的程度越来越高。希望通过这份教程，MDN 能帮助开发者理解 Gecko 内核和其他一些主要编译器之间的差异。

正式开始之前，你需要基本掌握 XML 和其它标记语言比如说HTML，如果你不是很熟悉 XML，这里有几个重点一定要记住：

- SVG 的元素和属性必须按标准格式书写，因为 XML 是区分大小写的（这一点和 HTML 不同）
- SVG 里的属性值必须用引号引起来，就算是数值也必须这样做。

### [SVG 的种类](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Introduction#svg的种类)

自从 2003 年成为 W3C 推荐标准以来，最接近的“完整版”SVG 版本是 1.1 版，它基于 1.0 版，并且增加了更多便于实现的模块化内容，SVG1.1 的第二个版本在 2011 年成为推荐标准，完整的 SVG1.2 本来是下一个标准版本，但它又被 SVG2.0 取代。SVG2.0 正在制定当中，它采用了类似 CSS3 的制定方法，通过若干松散耦合的组件形成一套标准。

除了完整的 SVG 推荐标准，W3C 工作组还在 2003 年推出了 SVG Tiny 和 SVG Basic。这两个配置文件主要瞄准移动设备。首先 SVG Tiny 主要是为性能低的小设备生成图元，而 SVG Basic 实现了完整版 SVG 里的很多功能，只是舍弃了难以实现的大型渲染（比如动画）。2008 年，SVG Tiny1.2 成为 W3C 推荐标准。

# 入门

### [一个简单的示例](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Getting_Started#a_simple_example)

让我们直接从一个简单的例子开始，看一下下面代码：

```html
  <div id="test1">
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="" y="" width="100%" height="100%" fill="#748854" stroke="" stroke-width=""/>
      <circle r="80" cx="150" cy="100" fill="#423991" stroke="" stroke-width=""/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
  </div>
```

绘制流程包括以下几步：

1. 从svg元素开始：
   - 应舍弃来自 (X)HTML 的 doctype 声明，因为基于 SVG 的 DTD 验证导致的问题比它能解决的问题更多。
   - SVG 2 之前，version 属性和 baseProfile 属性用来供其他类型的验证识别 SVG 的版本。SVG 2 不推荐使用 version 和 baseProfile 这两个属性。
   - 作为 XML 的一种方言，**SVG 必须正确的绑定命名空间（在 xmlns 属性中绑定）**。 请阅读[命名空间速成](https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course) 页面获取更多信息。
2. 绘制一个完全覆盖图像区域的矩形 `<rect/>，`把背景颜色设为红色。
3. `一个半径 80px 的绿色圆圈<circle/>`绘制在红色矩形的正中央（向右偏移 150px，向下偏移 100px）。
4. 绘制文字“SVG”。文字被填充为白色， 通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的。

### [SVG 文件的基本属性](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Getting_Started#svg文件的基本属性)

- 最值得注意的一点是元素的渲染顺序。SVG 文件全局有效的规则是 “后来居上”，越后面的元素越可见。

- web 上的 svg 文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到 HTML 文件中：

  - 如果 HTML 是 XHTML 并且声明类型为`application/xhtml+xml，`可以直接把 SVG 嵌入到 XML 源码中。

  - 如果 HTML 是 HTML5 并且浏览器支持 HTML5，同样可以直接嵌入 SVG。然而为了符合 HTML5 标准，可能需要做一些语法调整。

  - 可以通过 `object` 元素引用 SVG 文件：

    ```html
            <object data="image.svg" type="image/svg+xml" />
    ```

  - 类似的也可以使用 `iframe` 元素引用 SVG 文件：

    ```html
            <iframe src="image.svg"></iframe>
    ```

  - 理论上同样可以使用 `img` 元素，但是在低于 4.0 版本的 Firefox 中不起作用。

  - 最后 SVG 可以通过 JavaScript 动态创建并注入到 HTML DOM 中。 这样具有一个优点，可以对浏览器使用替代技术，在不能解析 SVG 的情况下，可以替换创建的内容。

- SVG 如何处理大小和单位将在[下一页](https://developer.mozilla.org/zh-cn/docs/Web/SVG/Tutorial/Positions)详解。

### [SVG 文件类型](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Getting_Started#svg_file_types)

SVG 文件有两种形式。普通 SVG 文件是包含 SVG 标记的简单文本文件。推荐使用 “.svg”（全部小写）作为此类文件的扩展名。

由于在某些应用（比如地图应用等）中使用时，SVG 文件可能会很大，SVG 标准同样允许 gzip 压缩的 SVG 文件。推荐使用 “.svgz”（全部小写）作为此类文件扩展名 。不幸的是，如果服务器是微软的 IIS 服务器，使 gzip 压缩的 SVG 文件在所有的可用 SVG 的用户代理上可靠地起作用是相当困难的，而且 Firefox 不能在本地机器上加载 gzip 压缩的 SVG 文件。 除非知道处理发布内容的 Web 服务器可以正确的处理 gzip，否则要避免使用 gzip 压缩的 SVG。

### [关于 Web 服务器的小提示](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Getting_Started#a_word_on_webservers)

如果你已经知道了如何创建基本 SVG 文件，下一步就是把它们上传到 web 服务器，但是在这阶段有一些陷阱。对于普通 SVG 文件，服务器应该会发送下面的 HTTP 头：

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

对于 gzip 压缩的 SVG 文件，服务器应该会发送下面的 HTTP 头：

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

可以利用[Network Monitor panel](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor#Headers)或者[web-sniffer.net](http://web-sniffer.net/)之类的网站来检查服务器是否给 SVG 文件发送正确的 HTTP 头，向[web-sniffer.net](http://web-sniffer.net/)提交你的一个 SVG 文件的链接，然后查看 HTTP 响应头。如果发现服务器没有发送上述的响应头部值，那么你应该联系你的服务器供应商。如果不能说服他们为 SVG 修正服务器配置，可能还有一些我们可以自行解决的办法。 请阅读 SVG 维基的[server configuration page](http://svg-whiz.com/wiki/index.php?title=Server_Configuration)以找到一些简单的解决方案。

服务器配置错误是 SVG 加载失败的常见原因，所以一定要确保你的服务器配置正确。如果不能把服务器配置成给 SVG 文件发送正确的响应头，这时 Firefox 很有可能把该文件的标记显示成文本或乱码，甚至会要求查看者选择打开文件的应用程序。

# 坐标定位

## [网格](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Positions#the_grid)

![img](https://developer.mozilla.org/@api/deki/files/78/=Canvas_default_grid.png)

对于所有元素，SVG 使用的坐标系统或者说网格系统，和[Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)用的差不多（所有计算机绘图都差不多）。这种坐标系统是：以页面的左上角为 (0,0) 坐标点，坐标以像素为单位，x 轴正方向是向右，y 轴正方向是向下。注意，这和你小时候所教的绘图方式是相反的。但是在 HTML 文档中，元素都是用这种方式定位的。

#### 示例：

元素

```html
<rect x="0" y="0" width="100" height="100" />
```

定义一个矩形，即从左上角开始，向右延展 100px，向下延展 100px，形成一个 100*100 大的矩形。

### [什么是 "像素"?](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Positions#什么是_像素)

基本上，在 SVG 文档中的 1 个像素对应输出设备（比如显示屏）上的 1 个像素。但是这种情况是可以改变的，否则 SVG 的名字里也不至于会有“Scalable”（可缩放）这个词。**如同 CSS 可以定义字体的绝对大小和相对大小，SVG 也可以定义绝对大小**（比如使用“pt”或“cm”标识维度）**同时 SVG 也能使用相对大小**，只需给出数字，不标明单位，输出时就会采用用户的单位。

**在没有进一步规范说明的情况下，1 个用户单位等同于 1 个屏幕单位**。要明确改变这种设定，SVG 里有多种方法。我们从`svg`根元素开始：

```html
<svg width="100" height="100">
```

上面的元素定义了一个 100*100px 的 SVG 画布，这里 1 用户单位等同于 1 屏幕单位。

```html
<svg width="200" height="200" viewBox="0 0 100 100">
```

这里定义的画布尺寸是 `200*200px`。但是，viewBox 属性定义了画布上可以显示的区域：从 (0,0) 点开始，100 宽*100 高的区域。这个 `100*100 `的区域，会放到 `200*200` 的画布上显示。**于是就形成了放大两倍的效果。**

用户单位和屏幕单位的映射关系被称为**用户坐标系统**。除了缩放之外，坐标系统还可以旋转、倾斜、翻转。**默认的用户坐标系统 1 用户像素等于设备上的 1 像素**（但是设备上可能会自己定义 1 像素到底是多大）。在定义了具体尺寸单位的 SVG 中，比如单位是“cm”或“in”，最终图形会以实际大小的 1 比 1 比例呈现。

下面是引自 SVG1.1 规范的一段说明：

> […] 假设在用户的设备环境里，1px 等于 0.2822222 毫米（即分辨率是 90dpi），那么所有的 SVG 内容都会按照这种比例处理： […] "1cm" 等于 "35.43307px"（即 35.43307 用户单位）；

# 基本形状

## [基本形状](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#basic_shapes)

要想插入一个形状，你可以在文档中创建一个元素。不同的元素对应着不同的形状，并且使用不同的属性来定义图形的大小和位置。有一些形状因为可以由其他的形状创建而略显冗余， 但是它们用起来方便，可让我们的 SVG 文档简洁易懂。右边的图片展示了所有的基本形状。生成它们的代码如下：

```html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

### [矩形](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#rectangles)

就像你能联想到的，`rect`元素会在屏幕上绘制一个矩形 。其实只要 6 个基本属性就可以控制它在屏幕上的位置和形状。 上面的图例中最先展示了 2 个矩形，虽然这有点冗余了。右边的那个图形设置了 rx 和 ry 属性用来控制圆角。如果没有设置圆角，则默认为 0。

```html
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
<rect x="" y="" width="100%" height="100%" fill="#748854" stroke="" stroke-width=""/>
```

- x

  矩形左上角的 x 位置

- y

  矩形左上角的 y 位置

- width

  矩形的宽度

- height

  矩形的高度

- rx

  圆角的 x 方位的半径

- ry

  圆角的 y 方位的半径

### [圆形 ](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#circle)

正如你猜到的，`circle`元素会在屏幕上绘制一个圆形。它只有 3 个属性用来设置圆形。

```html
<circle cx="25" cy="75" r="20"/>
<circle r="80" cx="150" cy="100" fill="#423991" stroke="" stroke-width=""/>
```

- r

  圆的半径

- cx

  圆心的 x 位置

- cy

  圆心的 y 位置

### [椭圆](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#ellipse)

[Ellipse](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) 是`circle`元素更通用的形式，你可以分别缩放圆的 x 半径和 y 半径（通常数学家称之为**长轴半径**和**短轴半径**）。

```html
<ellipse cx="75" cy="75" rx="20" ry="5"/>
<ellipse rx="100" ry="80" cx="150" cy="100" fill="#422011" stroke="" stroke-width=""/>
```

- rx

  椭圆的 x 半径

- ry

  椭圆的 y 半径

- cx

  椭圆中心的 x 位置

- cy

  椭圆中心的 y 位置

### [线条](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#线条)

[Line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) 绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置。

```html
<line x1="10" x2="50" y1="110" y2="150"/>
<line x1="100" y1="100" x2="500" y2="300" stroke="#32fbcb" stroke-width="10"/>
```

- x1

  起点的 x 位置

- y1

  起点的 y 位置

- x2

  终点的 x 位置

- y2

  终点的 y 位置

### [折线](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#polyline)

[Polyline](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline)是一组连接在一起的直线。因为它可以有很多的点，折线的的所有点位置都放在一个 points 属性中：

```html
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>

<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145" fill="" stroke="#648393" stroke-width="5"/>
```

- points

  点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。**每个点必须包含 2 个数字**，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。

### [多边形](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#polygon)

`polygon`和折线很像，它们都是由连接一组点集的直线构成。不同的是，`polygon`的路径在最后一个点处自动回到第一个点。需要注意的是，矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个矩形。

```html
<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>

<polygon points="50 260, 55 180, 70 180, 60 290, 65 205, 50 195, 35 205, 340 190, 30 180, 45 180" fill="#b93241" stroke="" stroke-width=""/>
```

- points

  点集数列。每个数字用空白符、逗号、终止命令或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。路径绘制完后闭合图形，所以最终的直线将从位置 (2,2) 连接到位置 (0,0)。

### [路径](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Basic_Shapes#path)

**`path`可能是 SVG 中最常见的形状**。你可以用 path 元素绘制矩形（直角矩形或者圆角矩形）、圆形、椭圆、折线形、多边形，以及一些其他的形状，例如贝塞尔曲线、2 次曲线等曲线。因为 path 很强大也很复杂，所以会在[下一章](https://developer.mozilla.org/en/SVG/Tutorial/Paths)进行详细介绍。这里只介绍一个定义路径形状的属性。

```html
<path d="M 20 230 Q 40 205, 50 230 T 90230"/>

<path d="" stroke-width="" stroke="" fill=""/>
```

- d

  一个点集数列以及其它关于如何绘制路径的信息。

# 路径

如上一章所说，`<path>`元素是 SVG基本形状中最强大的一个。  你可以用它创建线条，曲线，弧形等等。

另外，path 只需要设定很少的点，就可以创建平滑流畅的线条（比如曲线）。虽然`polyline`元素也能实现类似的效果，但是必须设置大量的点（点越密集，越接近连续，看起来越平滑流畅），并且这种做法不能够放大（放大后，点的离散更明显）。**所以在绘制 SVG 时，对路径的良好理解很重要**。虽然不建议使用 XML 编辑器或文本编辑器创建复杂的路径，但了解它们的工作方式将有助于识别和修复 SVG 中的显示问题。

提到过，path 元素的形状是通过属性`d`定义的，**属性`d`的值是一个 “命令 + 参数” 的序列**，我们将讲解这些可用的命令，并且展示一些示例。

每一个命令都用一个关键字母来表示，比如，字母“M”表示的是“Move to”命令，当解析器读到这个命令时，它就知道你是打算移动到某个点。跟在命令字母后面的，是你需要移动到的那个点的 x 和 y 轴坐标。比如移动到 (10,10) 这个点的命令，应该写成“M 10 10”。这一段字符结束后，解析器就会去读下一段命令。

每一个命令都有两种表示方式，一种是用**大写字母**，表示采用**绝对定位**。另一种是用**小写字母**，表示采用**相对定位**（例如：*从上一个点开始，向上移动 10px，向左移动 7px*）。

`因为属性 d`采用的是用户坐标系统，所以**不需标明单位**。在后面的教程中，我们会学到如何让变换路径，以满足更多需求。

## [直线命令](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths#line_commands)

`<path>`元素里有 5 个画直线的命令，顾名思义，直线命令就是在两个点之间画直线。首先是“Move to”命令，M，前面已经提到过，它需要两个参数，分别是需要移动到的点的 x 轴和 y 轴的坐标。假设，你的画笔当前位于一个点，在使用 M 命令移动画笔后，只会移动画笔，但不会在两点之间画线。因为 **M 命令仅仅是移动画笔，但不画线**。所以 **M 命令经常出现在路径的开始处，用来指明从何处开始画**。

```
M x y
或
m dx dy
```

这有一个比较好的例子，不过我们没画任何东西，只是将画笔移动到路径的起点，所以我们不会看到任何图案。但是，我把我们移动到的点标注出来了，所以在下面的例子里会看到 (10,10) 坐标上有一个点。注意，如果只画 path，这里什么都不会显示。（这段不太好理解，说明一下：为了更好地展示路径，下面的所有例子里，在用 path 绘制路径的同时，也会用 circle 标注路径上的点。）

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10" stroke-width="" stroke="" fill=""/>
      <circle r="2" cx="10" cy="10" fill="#ff0000" stroke="" stroke-width=""/>
    </svg>
```

能够真正画出线的命令有三个（M 命令是移动画笔位置，但是不画线），最常用的是“Line to”命令，`L`，`L`需要两个参数，分别是一个点的 x 轴和 y 轴坐标，**L 命令将会在当前位置和新位置（L 前面画笔所在的点）之间画一条线段**。

```
 L x y (or l dx dy)
```

另外还有两个简写命令，用来绘制水平线和垂直线。`H`，绘制水平线。`V`，绘制垂直线。**这两个命令都只带一个参数**，标明在 x 轴或 y 轴移动到的位置，**因为它们都只在坐标轴的一个方向上移动**。

```
 H x (or h dx)
 V y (or v dy)
```

现在我们已经掌握了一些命令，可以开始画一些东西了。先从简单的地方开始，画一个简单的矩形（同样的效果用`<rect/>`元素可以更简单的实现），矩形是由水平线和垂直线组成的，所以这个例子可以很好地展现前面讲的画线的方法。

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 H 90 V 90 H 10 L 10 10" stroke-width="" stroke="" fill="#fd00ff"/>
      <circle r="2" cx="10" cy="10" fill="#ff0000" stroke="" stroke-width=""/>
      <circle r="2" cx="90" cy="10" fill="#ff0000" stroke="" stroke-width=""/>
      <circle r="2" cx="90" cy="90" fill="#ff0000" stroke="" stroke-width=""/>
      <circle r="2" cx="10" cy="90" fill="#ff0000" stroke="" stroke-width=""/>
    </svg>
```

最后，我们可以通过一个“闭合路径命令”Z 来简化上面的 path，`Z`命令会从当前点画一条直线到路径的起点，尽管我们不总是需要闭合路径，但是它还是经常被放到路径的最后。另外，**Z 命令不用区分大小写**。

```
 Z (or z)
```

所以上面例子里用到的路径，可以简化成这样：

```html
<path d="M10 10 H 90 V 90 H 10 Z" stroke-width="" stroke="" fill="#fd00ff"/>
```

你也可以使用这些命令的**相对坐标形式**来绘制相同的图形，如之前所述，相对命令使用的是小写字母，它们的参数不是指定一个明确的坐标，而是**表示相对于它前面的点需要移动多少距离**。例如前面的示例，画的是一个 80*80 的正方形，用相对命令可以这样描述：

```html
<path d="M10 10 h 80 v 80 h -80 Z" stroke-width="" stroke="#000" fill="transparent"/>
```

上述路径是：画笔移动到 (10,10) 点，由此开始，向右移动 80 像素构成一条水平线，然后向下移动 80 像素，然后向左移动 80 像素，然后再回到起点。

你可能会问这些命令有什么用，因为 `<polygon>` 和 `<polyline>` 可以做到画出一样的图形。答案是，**这些命令可以做得更多**。如果你只是画直线，那么其他元素可能会更好用，但是**，path 却是众多开发者在 SVG 绘制中经常用到的**。据我所知，它们之间不存在性能上的优劣。但是通过脚本生成 path 可能有所不同，因为另外两种方法只需要指明点，而 path 在这方面的语法会更复杂一些。

## [曲线命令](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths#curve_commands)

绘制平滑曲线的命令有三个，**其中两个用来绘制贝塞尔曲线，另外一个用来绘制弧形或者说是圆的一部分**。如果你在 Inkscape、Illustrator 或者 Photoshop 中用过路径工具，可能对贝塞尔曲线有一定程度的了解。欲了解贝塞尔曲线的完整数学讲解，请阅读这份[Wikipedia 的文档](http://en.wikipedia.org/wiki/Bézier_curve)。在这里不用讲得太多。贝塞尔曲线的类型有很多，**但是在 path 元素里，只存在两种贝塞尔曲线：三次贝塞尔曲线 C，和二次贝塞尔曲线 Q。**

### [贝塞尔曲线](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths#bezier_curves)

我们从稍微复杂一点的三次贝塞尔曲线 C 入手，三次贝塞尔曲线需要定义**一个点和两个控制点**，所以用 C 命令创建三次贝塞尔曲线，需要设置三组坐标参数：

```
 C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
```

这里的最后一个坐标 (x,y) 表示的是曲线的终点，另外两个坐标是控制点，(x1,y1) 是起点的控制点，(x2,y2) 是终点的控制点。如果你熟悉代数或者微积分的话，会更容易理解控制点，**控制点描述的是曲线起始点的斜率**，曲线上**各个点的斜率，是从起点斜率到终点斜率的渐变过程。**（文字描述不好，维基百科上有图示，更直观。）

![img](https://developer.mozilla.org/@api/deki/files/159/=Cubic_Bezier_Curves.png)

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 C 20 20, 40 20, 50 10" stroke-width="" stroke="#000000" fill="transparent"/>
      <path d="M10 10 L 20 20 M 40 20 L 50 10" stroke="#336699" stroke-width="1"/>
      <circle r="2" cx="10" cy="10" fill="red"/>
      <circle r="2" cx="20" cy="20" fill="red"/>
      <circle r="2" cx="40" cy="20" fill="red"/>
      <circle r="2" cx="50" cy="10" fill="red"/>

      <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
      <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
      <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
      <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
      <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
      <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
      <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
      <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
    </svg>
```

上面的例子里，创建了 9 个三次贝塞尔曲线。有一点比较遗憾，标记控制点的代码会比较庞大，所以在这里舍弃了。（之前所有点都用 circle 标记，此处一样，只不过没把代码列出来）。如果你想更准确地控制它们，可以自己动手把他们画出来。**图例上的曲线从左往右看，控制点在水平方向上逐渐分开**，图例上的曲线**从上往下看，控制点和曲线坐标之间离得越来越远**。这里要注意观察，曲线沿着起点到第一控制点的方向伸出，逐渐弯曲，然后沿着第二控制点到终点的方向结束。

你可以将若干个贝塞尔曲线连起来，从而创建出一条很长的平滑曲线。**通常情况下，一个点某一侧的控制点是它另一侧的控制点的对称**（以保持斜率不变）。这样，你可以使用一个简写的贝塞尔曲线命令 S，如下所示：

```
 S x2 y2, x y (or s dx2 dy2, dx dy)
```

S 命令可以用来创建与前面一样的贝塞尔曲线**，但是，如果 S 命令跟在一个 C 或 S 命令后面，则它的第一个控制点会被假设成前一个命令曲线的第二个控制点的中心对称点**。如果 S 命令单独使用，前面没有 C 或 S 命令，那当前点将作为第一个控制点。下面是 S 命令的语法示例，图中左侧红色标记的点对应的控制点即为蓝色标记点。

![img](https://developer.mozilla.org/@api/deki/files/363/=ShortCut_Cubic_Bezier.png)

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke-width="1" stroke="#00FF00" fill="transparent"/>
      <path d="M10 80 L 40 10 M 65 10 L 125 150 M 150 150 L 180 80" stroke="#336699" stroke-width="1"/>
      <circle r="2" cx="10" cy="80" fill="red"/>
      <circle r="2" cx="40" cy="10" fill="red"/>
      <circle r="2" cx="65" cy="10" fill="red"/>
      <circle r="2" cx="95" cy="80" fill="red"/>
      <circle r="2" cx="125" cy="150" fill="red"/>
      <circle r="2" cx="150" cy="150" fill="red"/>
      <circle r="2" cx="180" cy="80" fill="red"/>
    </svg>
```

另一种可用的贝塞尔曲线是**二次贝塞尔曲线 Q**，它比三次贝塞尔曲线简单，**只需要一个控制点，用来确定起点和终点的曲线斜率**。因此它需要两组参数，控制点和终点坐标。

```
 Q x1 y1, x y (or q dx1 dy1, dx dy)
```

![img](https://developer.mozilla.org/@api/deki/files/326/=Quadratic_Bezier.png)

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 95 10 180 80" stroke-width="1" stroke="#00FF00" fill="transparent"/>
      <path d="M10 80 L 95 10 L 180 80" stroke="#336699" stroke-width="1" fill="transparent"/>
      <circle r="2" cx="10" cy="80" fill="red"/>
      <circle r="2" cx="95" cy="10" fill="red"/>
      <circle r="2" cx="180" cy="80" fill="red"/>
    </svg>
```

就像三次贝塞尔曲线有一个 S 命令，二次贝塞尔曲线有一个差不多的 T 命令，可以通过更简短的参数，延长二次贝塞尔曲线。

```
 T x y (or t dx dy)
```

和之前一样，**快捷命令 T 会通过前一个控制点，推断出一个新的控制点**。这意味着，在你的第一个控制点后面，可以只定义终点，就创建出一个相当复杂的曲线。需要注意的是，**T 命令前面必须是一个 Q 命令，或者是另一个 T 命令**，才能达到这种效果。**如果 T 单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线。**

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke-width="1" stroke="#00FF00" fill="transparent" />
      <path d="M10 80 L 52.5 10 L 137.5 150 L 180 80" stroke="#336699" stroke-width="1" fill="transparent" />
      <circle r="2" cx="10" cy="80" fill="red"/>
      <circle r="2" cx="52.5" cy="10" fill="red"/>
      <circle r="2" cx="95" cy="80" fill="red"/>
      <circle r="2" cx="137.5" cy="150" fill="red"/>
      <circle r="2" cx="180" cy="80" fill="red"/>
    </svg>
```

虽然三次贝塞尔曲线拥有更大的自由度，但是两种曲线能达到的效果总是差不多的。具体使用哪种曲线，通常取决于需求，以及对曲线对称性的依赖程度。

### [弧形](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths#arcs)

弧形命令 A 是另一个创建 SVG 曲线的命令。基本上，**弧形可以视为圆形或椭圆形的一部分**。假设，已知椭圆形的长轴半径和短轴半径，并且已知两个点（在椭圆上），根据半径和两点，可以画出两个椭圆，在每个椭圆上根据两点都可以画出两种弧形。所以，仅仅根据半径和两点，可以画出四种弧形。**为了保证创建的弧形唯一，A 命令需要用到比较多的参数**：

```
 A rx ry x-axis-rotation large-arc-flag sweep-flag x y
 a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

弧形命令 A 的前两个参数分别是 x 轴半径和 y 轴半径，它们的作用很明显，不用多做解释，如果你不是很清楚它们的作用，可以参考一下椭圆[ellipse](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/ellipse)命令中的相同参数。弧形命令 A 的第三个参数**表示弧形的旋转情况**，下面的例子可以很好地解释它：

![img](https://developer.mozilla.org/@api/deki/files/346/=SVGArcs_XAxisRotation.png)

```html
    <svg version="1.1" baseProfile="full" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 315 
               L 110 215 
               A 30 50 0 0 1 162.55 162.45 
               L 172.55 152.45 
               A 30 50 -45 0 1 215.1 109.9 
               L 315 10" 
        stroke-width="1" stroke="#000" stroke-width="2" fill="#00FF00" fill-opacity="0.5" />
    </svg>
```

如图例所示，画布上有一条对角线，中间有两个椭圆弧被对角线切开 (x radius = 30, y radius = 50)。第一个椭圆弧的 x-axis-rotation（x 轴旋转角度）是 0，所以弧形所在的椭圆是正置的（没有倾斜）。**在第二个椭圆弧中，x-axis-rotation 设置为-45，所以这是一个旋转了 45 度的椭圆**，并以短轴为分割线，形成了两个对称的弧形。参看图示中的第二个椭圆形。

对于上图没有旋转的椭圆，只有 2 种弧形可以选择，不是 4 种，因为两点连线（也就是对角线）正好穿过了椭圆的中心。像下面这张图，就是普通的情况，可以画出两个椭圆，四种弧。

![img](https://mdn.mozillademos.org/files/15822/SVGArcs_XAxisRotation_with_grid_ellipses.png)

上面提到的四种不同路径将由接下来的两个参数决定。如前所讲，还有两种可能的椭圆用来形成路径，它们给出的四种可能的路径中，有两种不同的路径。这里要讲的参数是 **large-arc-flag（角度大小）和 sweep-flag（弧线方向）**，large-arc-flag 决定弧线是大于还是小于 180 度，**0 表示小角度弧，1 表示大角度弧**。sweep-flag 表示弧线的方向，0 表示从起点到终点**沿逆时针**画弧，1 表示从起点到终点沿**顺时针**画弧。下面的例子展示了这四种情况。

```html
<?xml version="1.0" standalone="no"?>
<svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/>
  <path d="M230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/>
  <path d="M80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/>
  <path d="M230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/>
</svg>
```

你应该已经猜到了，最后两个参数是指定弧形的终点，弧形可以简单地创建圆形或椭圆形图标，比如你可以创建若干片弧形，组成一个*饼图*。

如果你是从[Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)过渡到 SVG，那么弧形会比较难以掌握，但它也是非常强大的。用路径来绘制完整的圆或者椭圆是比较困难的，因为圆上的任意点都可以是起点同时也是终点，无数种方案可以选择，真正的路径无法定义。通过绘制连续的路径段落，也可以达到近似的效果，但使用真正的 circle 或者 ellipse 元素会更容易一些。

# 填充和边框

可以使用几种方法来着色（包括指定对象的属性）使用内联 CSS 样式、内嵌 CSS 样式，或者使用外部 CSS 样式文件。大多数的 web 网站的 SVG 使用的是内联样式 CSS，对于这些方法都有优缺点。

## [Fill 和 Stroke 属性](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes#fill_and_stroke_attributes)

### [上色](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes#painting)

现在你难免面露难色，但是大多数基本的涂色可以通过在元素上设置两个属性来搞定：`fill`属性和`stroke`属性。**`fill`属性设置对象内部的颜色**，`stroke`属性**设置绘制对象的线条的颜色**。你可以使用在 HTML 中的 CSS 颜色命名方案定义它们的颜色，比如说颜色名（像*red*这种）、rgb 值（像 rgb(255,0,0) 这种）、十六进制值、rgba 值，等等。

```html
 <rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"
       fill-opacity="0.5" stroke-opacity="0.8"/>
```

此外，在 SVG 中你**可以分别定义填充色和边框色的不透明度**，属性`fill-opacity`控制填充色的不透明度，属性`stroke-opacity`控制描边的不透明度。

> 注意，FireFox 3+ 支持 rgba 值，并且能够提供同样的效果，但是为了在其他浏览器中保持兼容，最好将它和填充/描边的不透明度分开使用。如果同时指定了 rgba 值和填充/描边不透明度，它们将都被调用。

### [描边](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes#stroke)

除了颜色属性，还有其他一些属性用来控制绘制描边的方式。

![img](https://developer.mozilla.org/@api/deki/files/355/=SVG_Stroke_Linecap_Example.png)

```html
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

`stroke-width`属性**定义了描边的宽度**。注意，描边是以路径为中心线绘制的，在上面的例子里，路径是粉红色的，描边是黑色的。如你所见，**路径的每一侧都有均匀分布的描边**。

第二个影响描边的属性是`stroke-linecap`属性，如上所示。**它控制边框终点的形状**。

`stroke-linecap`属性的值有三种可能值：

- `butt`用**直边**结束线段，它是常规做法，线段边界 90 度垂直于描边的方向、贯穿它的终点。
- `square`的效果差不多，但是会稍微超出`实际路径`的范围，**超出的大小由`stroke-width`控制**。
- `round`表示边框的终点是**圆角**，圆角的半径也是由`stroke-width`控制的。

还有一个`stroke-linejoin`属性，用来**控制两条描边线段之间，用什么方式连接**。

![img](https://developer.mozilla.org/@api/deki/files/356/=SVG_Stroke_Linejoin_Example.png)

```html
<?xml version="1.0" standalone="no"?>
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

每条折线都是由两个线段连接起来的，连接处的样式由`stroke-linejoin`属性控制，它有三个可用的值，**`miter`是默认值，表示用方形画笔在连接处形成尖角**，`round`表示用圆角连接，实现平滑效果。最后还有一个值`bevel`，连接处会形成一个斜接。

最后，你可以通过指定`stroke-dasharray`属性，将虚线类型应用在描边上。

![img](https://developer.mozilla.org/@api/deki/files/354/=SVG_Stroke_Dasharray_Example.png)

```html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

`stroke-dasharray`属性的参数，是一组用逗号分割的数字组成的数列。注意，和`path`不一样，这里的数字**必须**用逗号分割（空格会被忽略）。每一组数字，**第一个用来表示填色区域的长度，第二个用来表示非填色区域的长度**。所以在上面的例子里，第二个路径会先做 5 个像素单位的填色，紧接着是 5 个空白单位，然后又是 5 个单位的填色。

如果你想要更复杂的虚线模式，你可以定义更多的数字。第一个例子指定了 3 个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式（奇数个循环两次变偶数个）。**所以该路径首先渲染 5 个填色单位，10 个空白单位，5 个填色单位**，然后回头以这 3 个数字做一次循环，**但是这次是创建 5 个空白单位，10 个填色单位，5 个空白单位**。

通过这两次循环得到偶数模式，**并将这个偶数模式不断重复。**

另外还有一些关于填充和边框的属性，包括`fill-rule`，用于定义如何给图形重叠的区域上色；`stroke-miterlimit`，定义什么情况下绘制或不绘制边框连接的`miter`效果；还有`stroke-dashoffset`，定义虚线开始的位置。

## [使用 CSS](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes#using_css)

除了定义对象的属性外，你也可以通过 CSS 来样式化`填充`和`描边`。**语法和在 HTML 里使用 CSS 一样，只不过你要把`background-color`、`border`改成`fill`和`stroke`**。注意，不是所有的属性都能用 CSS 来设置。上色和填充的部分一般是可以用 CSS 来设置的，比如`fill`，`stroke`，`stroke-dasharray`等，但是不包括下面会提到的渐变和图案等功能。另外，`width`、`height`，以及路径的命令等等，都不能用 CSS 设置。判断它们能不能用 CSS 设置还是比较容易的。

> [SVG 规范](https://www.w3.org/TR/SVG/propidx.html)将属性区分成 properties 和其他 attributes，前者是可以用 CSS 设置的，后者不能。

CSS 可以利用 style 属性插入到元素的行间：

```html
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

或者利用 `<style>` 设置一段样式段落。就像在 HTML 里这样的 `<style>` 一般放在`<head>`里，在 svg 里 `<style>` 则放在`<defs>`标签里。`<defs>`表示定义，这里面可以定义一些不会在 SVG 图形中出现、但是可以被其他元素使用的元素。

```html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

如上把样式放到一块你可以更轻松地调整一大组元素的样式，同样你也可以使用**hover**这样的伪类来创建翻转之类的效果：

```css
 #MyRect:hover {
   stroke: black;
   fill: blue;
 }

```

你最好读一下 CSS 教程以便掌握它，一些可以在 HTML 里使用的 CSS，在 svg 里可能无法正常工作，比如`before`和`after`伪类。所以这里需要一点经验。

你也可以定义一个外部的样式表，但是要符合[normal XML-stylesheet syntax](https://www.w3.org/TR/xml-stylesheet/)的 CSS 规则：

```html
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

style.css 看起来就像这样：

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

# 渐变

并非只能简单填充颜色和描边，更令人兴奋的是，你还可以创建和并在填充和描边上应用渐变色。

有两种类型的渐变：线性渐变和径向渐变。你**必须**给渐变内容指定一个 id 属性，否则文档内的其他元素就不能引用它。为了让渐变能被重复使用，渐变内容需要定义在<defs>标签内部，而不是定义在形状上面。

## [线性渐变](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#svglineargradient)

线性渐变沿着直线改变颜色，要插入一个线性渐变，你需要在 SVG 文件的defs 元素内部，创建一个`<linearGradient>` 节点。

### [基础示例](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#基础示例)

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <linearGradient id="Gradient1">
        <stop class="stop1" offset="0%"/>
        <stop class="stop2" offset="50%"/>
        <stop class="stop3" offset="100%"/>
      </linearGradient>
      <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="50%" stop-color="black" stop-opacity="0"/>
        <stop offset="100%" stop-color="blue"/>
      </linearGradient>
      <style type="text/css"><![CDATA[
        #rect1 { fill: url(#Gradient1); }
        .stop1 { stop-color: red; }
        .stop2 { stop-color: black; stop-opacity: 0; }
        .stop3 { stop-color: blue; }
      ]]></style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)"/>

</svg>
```

以上是一个应用了线性渐变的`<rect>`元素的示例。线性渐变内部有几个`<stop>` 结点，这些结点通过指定位置的 offset（偏移）属性和 stop-color（颜色中值）属性来说明在渐变的特定位置上应该是什么颜色；可以直接指定这两个属性值，也可以通过 CSS 来指定他们的值，该例子中混合使用了这两种方法。例如：该示例中指明了渐变开始颜色为红色，到中间位置时变成半透明的黑色，最后变成蓝色。虽然你可以根据需求按照自己的喜好插入很多中间颜色，**但是偏移量应该始终从 0% 开始**（或者 0 也可以，百分号可以扔掉），**到 100%（或 1）结束**。如果stop设置的位置**有重合，将使用 XML 树中较晚设置的值**。而且，类似于填充和描边，你也可以指定属性stop-opacity来设置某个位置的半透明度（同样，对于 FF3 你也可以设置 rgba 值）。

```html
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

使用渐变时，我们需要在一个对象的属性`fill`或属性`stroke`中引用它，这跟你在 CSS 中使用`url`引用元素的方法一样。在本例中，url 只是一个渐变的引用，我们已经给这个渐变一个 ID——“Gradient”。**要想附加它，将属性`fill`设置为`url(#Gradient)`即可**。现在对象就变成多色的了，也可以用同样的方式处理`stroke`。

`<linearGradient>`元素还需要一些其他的属性值，它们指定了渐变的大小和出现范围。渐变的方向可以通过两个点来控制，它们分别是属性 x1、x2、y1 和 y2，这些属性定义了渐变路线走向。渐变色默认是水平方向的，但是通过修改这些属性，就可以旋转该方向。下例中的 Gradient2 创建了一个垂直渐变。

```html
 <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
```

**注意：** 你也可以在渐变上使用`xlink:href 属性。如果`使用了该属性时，一个渐变的属性和颜色中值（stop）可以被另一个渐变包含引用。在下例中，你就不需要在 Grandient2 中重新创建全部的颜色中值（stop）。

```html
 <linearGradient id="Gradient1">
   <stop id="stop1" offset="0%"/>
   <stop id="stop2" offset="50%"/>
   <stop id="stop3" offset="100%"/>
 </linearGradient>
 <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"
    xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Gradient1"/>
```

尽管通常你可能在文档的顶部就定义了 Gradient1，但我在结点上直接包含了 xlink 的命名空间，关于这点的更多信息我们会在[讨论图片](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Other_content_in_SVG)的时候详解。

## [径向渐变](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#radial_gradient)

径向渐变与线性渐变相似，只是它是从一个点开始发散绘制渐变。创建径向渐变需要在文档的defs中添加一个`<radialGradient>`元素

### [示例](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#示例)

```html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="RadialGradient1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
      <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient1)"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient2)"/>

</svg>
```

中值（stops）的使用方法与之前一致，但是现在这个对象的颜色是中间是红色的，且向着边缘的方向渐渐的变成蓝色。跟线性渐变一样，`<radialGradient>` 节点可以有多个属性来描述其位置和方向，但是它更加复杂。**径向渐变也是通过两个点来定义其边缘位置，两点中的第一个点定义了渐变结束所围绕的圆环，它需要一个中心点，由 cx 和 cy 属性及半径 r 来定义**，通过设置这些点我们可以移动渐变范围并改变它的大小，如上例的第二个`<rect>`所展示的。

第二个点被称为**焦点**，由 fx 和 fy 属性定义。第一个点描述了渐变边缘位置，焦点则描述了渐变的中心，如下例。

### [中心和焦点](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#中心和焦点)

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="Gradient"
            cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100"
        fill="url(#Gradient)" stroke="black" stroke-width="2"/>

  <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2"/>
  <circle cx="35" cy="35" r="2" fill="white" stroke="white"/>
  <circle cx="60" cy="60" r="2" fill="white" stroke="white"/>
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">(fx,fy)</text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx,cy)</text>

</svg>
```

因为如果焦点如之前描述的那样被移到圆圈的外面，渐变将不能正确呈现，所以该点会被假定在圆圈范围内。如果没有给出焦点，将认为该点与中心点的位置一致。

线性渐变和径向渐变都需要一些额外的属性用于描述渐变过程，这里我希望额外提及一个`spreadMethod`属性，该属性控制了当渐变到达终点的行为，但是此时该对象尚未被填充颜色。这个属性可以有三个值：pad、reflect 或 repeat。

**Pad** 就是目前我们见到的效果，即当渐变到达终点时，最终的偏移颜色被用于填充对象剩下的空间。

**reflect** 会让渐变一直持续下去，不过它的效果是与渐变本身是相反的，以 100% 偏移位置的颜色开始，逐渐偏移到 0% 位置的颜色，然后再回到 100% 偏移位置的颜色。

**repeat** 也会让渐变继续，但是它不会像 reflect 那样反向渐变，而是跳回到最初的颜色然后继续渐变。

### [spreadMethod](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Gradients#spreadmethod)

```html
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="GradientPad"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="pad">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
      <radialGradient id="GradientRepeat"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="repeat">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
      <radialGradient id="GradientReflect"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="reflect">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#GradientPad)"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientRepeat)"/>
  <rect x="120" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientReflect)"/>

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">Pad</text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">Repeat</text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">Reflect</text>

</svg>
```

两种渐变都有一个叫做 `gradientUnits（渐变单元）`的属性，它描述了用来描述渐变的大小和方向的单元系统。该属性有两个值：`userSpaceOnUse` 、`objectBoundingBox。默认值为 objectBoundingBox，我们目前看到的效果都是在这种系统下的，它大体上定义了对象的渐变大小范围，所以你只要指定从 0 到 1 的坐标值，渐变就会自动的缩放到对象相同大小。`userSpaceOnUse 使用绝对单元，所以你必须知道对象的位置，并将渐变放在同样地位置上。上例中的 radialGradient 需要被重写成：

```html
 <radialGradient id="Gradient" cx="60" cy="60" r="50" fx="35" fy="35" gradientUnits="userSpaceOnUse">
```

你也可以利用属性gradientTransform给渐变添加额外的变化，但是因为我们还没有介绍transforms，所以我们将在后续的章节中介绍它。

如果对象边界框不是一个正方形，处理gradientUnits="objectBoundingBox"还有一些其他警告，但是这些方法特别复杂因此有待一些了解得更深的人来解释他们。

# 图案

在我看来 patterns（图案）是 SVG 中用到的最让人混淆的填充类型之一。它的功能非常强大，所以我认为他们值得讨论一下并且我们应至少对他们有最基本的了解。跟渐变一样，`<pattern>`需要放在 SVG 文档的 `<defs>` 内部。

```html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white"/>
      <stop offset="95%" stop-color="blue"/>
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red"/>
      <stop offset="95%" stop-color="orange"/>
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
      <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
    </pattern>

  </defs>

  <rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="200" height="200"/>
</svg>
```

