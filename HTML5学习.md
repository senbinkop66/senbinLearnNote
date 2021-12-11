# HTML5学习笔记

## HTML5 简介

HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。

HTML5的设计目的是为了在移动设备上支持多媒体。HTML5 是下一代 HTML 标准。

HTML5 是 W3C 与 WHATWG 合作的结果,WHATWG 指 Web Hypertext Application Technology Working Group。

WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0。在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。

HTML5 中的一些有趣的新特性：

- 用于绘画的 canvas 元素
- 用于媒介回放的 video 和 audio 元素
- 对本地离线存储的更好的支持
- 新的特殊内容元素，比如 article、footer、header、nav、section
- 新的表单控件，比如 calendar、date、time、email、url、search

`<!doctype>` 声明必须位于 HTML5 文档中的第一行,使用非常简单：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>文档标题</title>
</head>
<body>
    文档内容...
</body>
</html>
```

**注意：** 对于中文网页需要使用 `<meta charset="utf-8">` *声明编码，否则会出现乱码。*

### HTML5 的改进

- 新元素
- 新属性
- 完全支持 CSS3
- Video 和 Audio
- 2D/3D 制图
- 本地存储
- 本地 SQL 数据
- Web 应用

### HTML5 多媒体

使用 HTML5 你可以简单的在网页中播放 视频(video)与音频 (audio) 。

- HTML5  <vedio>
- HTML5 <audio>

### HTML5 应用

使用 HTML5 你可以简单地开发应用

- 本地数据存储
- 访问本地文件
- 本地 SQL 数据
- 缓存引用
- Javascript 工作者
- XHTMLHttpRequest 2

### HTML5 图形

使用 HTML5 你可以简单的绘制图形:

- 使用 <canvas> 元素。
- 使用内联 SVG。
- 使用 CSS3 2D 转换、CSS3 3D 转换。

### HTML5 使用 CSS3

- 新选择器
- 新属性
- 动画
- 2D/3D 转换
- 圆角
- 阴影效果
- 可下载的字体

## HTML5 浏览器支持

你可以让一些较早的浏览器（不支持HTML5）支持 HTML5。

现代的浏览器都支持 HTML5。

此外，所有浏览器，包括旧的和最新的，对无法识别的元素会作为内联元素自动处理。

正因为如此，你可以 **"教会"** 浏览器处理 **"未知"** 的 HTML 元素

### 将 HTML5 元素定义为块元素

HTML5 定了 8 个新的 HTML **语义（semantic）** 元素。所有这些元素都是 **块级** 元素。

为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 **display** 属性值为 **block**:

```css
header, section, footer, aside, nav, main, article, figure {
    display: block; 
}
```

### 为 HTML 添加新元素

你可以为 HTML 添加新的元素。

该实例向 HTML 添加的新的元素，并为该元素定义样式，元素名为 `<myHero>` ：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>为 HTML 添加新元素</title>
    <script>
        document.createElement("myHero")
    </script>
    <style>
        myHero {
            display: block;
            background-color: #ddd;
            padding: 50px;
            font-size: 30px;
        }
    </style> 
</head>
<body>
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
    <myHero>我的第一个新元素</myHero>
</body>
</html>
```

### Internet Explorer 浏览器问题

你可以使用以上的方法来为 IE 浏览器添加 HTML5 元素，但是 Internet Explorer 8 及更早 IE 版本的浏览器不支持以上的方式。

我们可以使用 Sjoerd Visscher 创建的 "HTML5 Enabling JavaScript", " **shiv**" 来解决该问题：

```html
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

以上代码是一个注释，作用是在 IE 浏览器的版本小于 IE9 时将读取 html5.js 文件，并解析它。

**注意：**国内用户请使用如下开源的静态资源库（Google 资源库在国内不稳定）：

```html
<!--[if lt IE 9]>
  <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
<![endif]-->
```

针对IE浏览器 html5shiv 是比较好的解决方案。html5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。

### 完美的 Shiv 解决方案

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>渲染 HTML5</title>
  <!--[if lt IE 9]>
  <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
  <![endif]-->
</head>
<body>
<h1>我的第一篇文章</h1>
    <article>
        牛客教程 —— 学的不仅是技术，更是梦想！！！
    </article>
</body>
</html>
```

html5shiv.js 引用代码必须放在 `<head>` 元素中，因为 IE 浏览器在解析 HTML5 新元素时需要先加载该文件。

## HTML5 新元素

### \<canvas\> 新元素

- \<canvas\>    标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API

### 新多媒体元素

- \<audio\> 定义音频内容
- \<video\> 定义视频（video 或者 movie）
- \<source\>    定义多媒体资源 - \<video\> 和 - \<audio\>
- \<embed\> 定义嵌入的内容，比如插件。
- \<track\> 为诸如 - \<video\> 和 - \<audio\> 元素之类的媒介规定外部文本轨道。

### 新表单元素

- \<datalist\>  定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。
- \<keygen\>    规定用于表单的密钥对生成器字段。
- \<output\>    定义不同类型的输出，比如脚本的输出。

### 新的语义和结构元素

HTML5提供了新的元素来创建更好的页面结构：

- \<article\>   定义页面独立的内容区域。
- \<aside\> 定义页面的侧边栏内容。
- \<bdi\>   允许您设置一段文本，使其脱离其父元素的文本方向设置。
- \<command\>   定义命令按钮，比如单选按钮、复选框或按钮
- \<details\>   用于描述文档或文档某个部分的细节
- \<dialog\>    定义对话框，比如提示框
- \<summary\>   标签包含 details 元素的标题
- \<figure\>    规定独立的流内容（图像、图表、照片、代码等等）。
- \<figcaption\>    定义 - \<figure\> 元素的标题
- \<footer\>    定义 section 或 document 的页脚。
- \<header\>    定义了文档的头部区域
- \<mark\>  定义带有记号的文本。
- \<meter\> 定义度量衡。仅用于已知最大和最小值的度量。
- \<nav\>   定义导航链接的部分。
- \<progress\>  定义任何类型的任务的进度。
- \<ruby\>  定义 ruby 注释（中文注音或字符）。
- \<rt\>    定义字符（中文注音或字符）的解释或发音。
- \<rp\>    在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
- \<section\>   定义文档中的节（section、区段）。
- \<time\>  定义日期或时间。
- \<wbr\>   规定在文本中的何处适合添加换行符。

### 已移除的元素

以下的 HTML 4.01 元素在HTML5中已经被删除：

- \<acronym\>
- \<applet\>
- \<basefont\>
- \<big\>
- \<center\>
- \<dir\>
- \<font\>
- \<frame\>
- \<frameset\>
- \<noframes\>
- \<strike\>
- \<tt\>

## Canvas

- `<canvas>` 标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形。
- HTML5 `<canvas>` 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.
- `<canvas>` 标签只是图形容器，您必须使用脚本来绘制图形。
- 你可以通过多种方法使用 canvas 绘制路径,盒、圆、字符以及添加图像。

### 创建一个画布

一个画布在网页中是一个矩形框，通过 `<canvas>` 元素来绘制.**注意:** 默认情况下 `<canvas>` 元素没有边框和内容。

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**注意:** 标签通常需要指定一个id属性 (脚本中经常引用), width 和 height 属性定义的画布的大小.

**提示:** 你可以在HTML页面中使用多个 `<canvas>` 元素.

使用 style 属性来添加边框:

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```

### 使用 JavaScript 来绘制图像

canvas 元素本身是没有绘图能力的，所有的绘制工作必须在 JavaScript 内部完成：

```js
	<script type="text/javascript">
		var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,150,75);
	</script>
```

1. 首先，找到 `<canvas>` 元素：
2. 然后，创建 context 对象：getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
3. 设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是 #000000（黑色）。
4. fillRect(x, y, width, height) 方法定义了矩形当前的填充方式。

### Canvas 坐标

canvas 是一个二维网格。canvas 的左上角坐标为 (0, 0)

上面的 fillRect 方法拥有参数 (0, 0, 150, 75)。意思是：在画布上绘制 150 x 75 的矩形，从左上角开始 (0, 0)。

```html
<canvas id="myCanvas" 
        style="float:left;width:199px;height:99px;border:1px solid #c3c3c3" 
        onmousemove="cnvs_getCoordinates(event)" 
        onmouseout="cnvs_clearCoordinates()">
    您的浏览器不支持 HTML5 canvas 标签。
</canvas>

```

```js
function cnvs_getCoordinates(e) {
    x = e.clientX;
    y = e.clientY;
    document.getElementById("xycoordinates")
        .innerHTML = "Coordinates: (" + x + "," + y + ")";
}
function cnvs_clearCoordinates() {
    document.getElementById("xycoordinates").innerHTML = "";
}
```

画布的 X 和 Y 坐标用于在画布上对绘画进行定位。鼠标移动的矩形框上，显示定位坐标。

### Canvas - 路径

在Canvas上画线，我们将使用以下两种方法：

- moveTo(x, y) 定义线条开始坐标
- lineTo(x, y) 定义线条结束坐标

绘制线条我们必须使用到 "ink" 的方法，就像stroke()。

```html
	<canvas id="myCanvas3" width="200" height="100" style="border: 1px solid #000000">canvas 路径</canvas>
	<script type="text/javascript">
		var c=document.getElementById("myCanvas3");
		var ctx=c.getContext("2d");
		ctx.moveTo(0,0);
		ctx.lineTo(200,100);
		ctx.stroke();
	</script>
```

在canvas中绘制圆形，我们将使用以下方法：

```js
arc(x, y, r, start, stop)
```

实际上我们在绘制圆形时使用了 "ink" 的方法，比如 stroke() 或者 fill()。

```html
	<canvas id="myCanvas4" width="200" height="100" style="border: 1px solid #00ccc0;">绘制圆形</canvas>
	<script type="text/javascript">
		var c=document.getElementById("myCanvas4");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.arc(95,50,40,0,2*Math.PI);
		ctx.stroke();
	</script>
```

### Canvas - 文本

使用 canvas 绘制文本，重要的属性和方法如下：

- font - 定义字体
- fillText(text, x, y) - 在 canvas 上绘制实心的文本
- strokeText(text, x, y) - 在 canvas 上绘制空心的文本

#### 绘制实心文本

```html
	<canvas id="myCanvas1" width="200" height="100" style="border: 1px solid #000000">显示实心文本</canvas>
	<script type="text/javascript">
		var c=document.getElementById('myCanvas1');
		var ctx=c.getContext("2d");
		ctx.font="30px Arial";
		ctx.fillText("Canva 实心文本",10,50);
	</script>
```

#### 绘制空心文本

```html
<canvas id="myCanvas5" width="300" height="100" style="border: 1px solid #000000">显示空心文本</canvas>
<script type="text/javascript">
	var c=document.getElementById('myCanvas5');
	var ctx=c.getContext("2d");
	ctx.font="30px Arial";
	ctx.strokeText("Canva 空心文本",10,50);
</script>
```

### Canvas - 渐变

渐变可以填充在矩形, 圆形, 线条, 文本等等, 各种形状可以自己定义不同的颜色。

以下有两种不同的方式来设置Canvas渐变：

- createLinearGradient(x, y, x1, y1) - 创建线条渐变
- createRadialGradient(x, y, r, x1, y1, r1) - 创建一个径向/圆渐变

当我们使用渐变对象，必须使用两种或两种以上的停止颜色。

addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1。

使用渐变，设置 fillStyle 或 strokeStyle 的值为 渐变，然后绘制形状，如矩形、文本、或一条线。

#### 使用 createLinearGradient

```html
	<canvas id="myCanvas6" width="200" height="100" style="border: 1px solid #000000">线性渐变</canvas>
	<script type="text/javascript">
		var c=document.getElementById('myCanvas6');
		var ctx=c.getContext("2d");
		//创建渐变
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"blue");
		grd.addColorStop(1,"white");
		//填充渐变
		ctx.fillStyle=grd;
		ctx.fillRect(10,10,150,80);
	</script>
```

#### 使用 createRadialGradient

```html
	<canvas id="myCanvas7" width="200" height="100" style="border: 1px solid #000000">径向/圆渐变</canvas>
	<script type="text/javascript">
		var c=document.getElementById('myCanvas7');
		var ctx=c.getContext("2d");
		//创建渐变
		var grd=ctx.createRadialGradient(75,50,5,90,60,100);
		grd.addColorStop(0,"green");
		grd.addColorStop(1,"white");
		//填充渐变
		ctx.fillStyle=grd;
		ctx.fillRect(10,10,150,80);
	</script>
```

### Canvas - 图像

把一幅图像放置到画布上, 使用以下方法:

- drawImage(image, x, y)

```html
	<img id="liverpool" src="image1/img1.png" alt="liverpool" width="100" height="85">
	<canvas id="myCanvas8" width="200" height="100" style="1px solid #d4ddd4">图像放于画布上</canvas>
	<script type="text/javascript">
		var c=document.getElementById("myCanvas8");
		var ctx=c.getContext("2d");
		var img=document.getElementById("liverpool");
		ctx.drawImage(img,10,10)
	</script>
```

## 内联 SVG

HTML5 支持内联 SVG。

### 什么是SVG？

- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用于定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG 是万维网联盟的标准

### SVG优势

与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：

- SVG 图像可通过文本编辑器来创建和修改
- SVG 图像可被搜索、索引、脚本化或压缩
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大

```html
	<h3>内联SVG</h3>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
		<polygon points="100,10 40,180 190,60 10,60 160,180"style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
	</svg>
```

### SVG 与 Canvas两者间的区别

- SVG 是一种使用 XML 描述 2D 图形的语言。
- Canvas 通过 JavaScript 来绘制 2D 图形。
- SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的，您可以为某个元素附加 JavaScript 事件处理器。
- 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
- Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。
- 如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### Canvas 与 SVG 的比较

下表列出了 canvas 与 SVG 之间的一些不同之处。

**Canvas**

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

**SVG**

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

## MathML

HTML5 可以在文档中使用 MathML 元素，对应的标签是 `<math>...</math>` 。

MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。

```html
	<h3>HTML5 MathML</h3>
	<math xmlns="http://www.w3.org/1998/Math/MathML">
		<mrow>
			<msup><mi>a</mi><mn>2</mn></msup>
			<mo>+</mo>
			<msup><mi>b</mi><mn>2</mn></msup>
			<mo>=</mo>
			<msup><mi>c</mi><mn>2</mn></msup>
		</mrow>
	</math>
```

## HTML5 拖放

拖放是一种常见的特性，即抓取对象以后拖到另一个位置。在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。

### 设置元素为可拖放

首先，为了使元素可拖动，把 draggable 属性设置为 true ：

```html
<img draggable="true">
```

### 拖动什么

然后，规定当元素被拖动时，会发生什么。

在上面的例子中，ondragstart 属性调用了一个函数，drag(event)，它规定了被拖动的数据。

dataTransfer.setData() 方法设置被拖数据的数据类型和值：

```js
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}
```

### 放到何处

ondragover 事件规定在何处放置被拖动的数据。

默认地，无法将数据/元素放置到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。

这要通过调用 ondragover 事件的 event.preventDefault() 方法：

```js
event.preventDefault()
```

### 进行放置

当放置被拖数据时，会发生 drop 事件。

在上面的例子中，ondrop 属性调用了一个函数，drop(event)：

```js
function drop(ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
```

代码解释：

- 调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
- 通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
- 被拖数据是被拖元素的 id ("drag1")
- 把被拖元素追加到放置元素（目标元素）中

### 在两个 `<div>` 元素之间拖放图像。

```html
	<h3>HTML5 拖放</h3>
	<p>拖动图片到矩形框中</p>
	<div id="drag0" ondrop="drop(event)" ondragover="allowDrop(event)">
		<img id="drag1" src="image1/img2.png" draggable="true" ondragstart="drag(event)" width="90" height="80">
	</div>
	<div id="drag2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
	<script type="text/javascript">
        //阻止对元素的默认处理方式
		function allowDrop(ev){
			ev.preventDefault();
		}
        //ondragover 事件规定在何处放置被拖动的数据。
		function drag(ev){
			ev.dataTransfer.setData("Text",ev.target.id);
		}
        //进行放置 - ondrop
		function drop(ev){
			ev.preventDefault();
			var data=ev.dataTransfer.getData("Text");
			ev.target.appendChild(document.getElementById(data))
		}
	</script>
```

