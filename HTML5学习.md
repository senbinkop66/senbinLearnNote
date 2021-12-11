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

## HTML5 地理定位

HTML5 Geolocation（地理定位）用于定位用户的位置。

### 定位用户的位置

HTML5 Geolocation API 用于获得用户的地理位置。

鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

**注意:** Geolocation（地理定位）对于拥有 GPS 的设备，比如 iPhone，地理定位更加精确。

### 使用地理定位

请使用 getCurrentPosition() 方法来获得用户的位置。

```html
	<h3>HTML5 Geolocation 地理定位</h3>
	<div>
		<p id="demo1">地理位置</p>
		<button onclick="getLocation()">点击获取位置</button>
	</div>
	<div id="mapholder"></div>
	<script src="https://maps.google.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript">
		var x=document.getElementById("demo1");
		function getLocation(){
            //检测是否支持地理定位
			if (navigator.geolocation) {
                //如果支持，则运行 getCurrentPosition() 方法。如果不支持，则向用户显示一段消息。
                //如果 getCurrentPosition() 运行成功，则向参数 showPosition 中规定的函数返回一个 coordinates 对象
				navigator.geolocation.getCurrentPosition(showPosition,showError);
			}else{
				x.innerHTML="该浏览器不支持获取地理位置";
			}
		}
		/*
		function showPosition(position){
			x.innerHTML="维度:"+position.coords.latitude+"<br>经度:"+position.coords.longitude;
		}
		*/
		function showError(error){
			switch(error.code){
				case error.PERMISSION_DENIED:
					x.innerHTML="用户拒绝对获取地理位置的请求。"
					break;
				case error.POSITION_UNAVAILABLE:
					x.innerHTML="位置信息是不可用的。"
					break;
				case error.TIMEOUT:
					x.innerHTML="请求用户地理位置超时。"
					break;
				case error.UNKNOWN_ERROR:
					x.innerHTML="未知错误。"
					break;
			}
		}
		function showPosition(position) {
            //showPosition() 函数获得并显示经度和纬度
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			latlon = new google.maps.LatLng(lat, lon)
			mapholder = document.getElementById('mapholder')
			mapholder.style.height = '250px';
			mapholder.style.width = '500px';

			var myOptions = {
				center: latlon,
				zoom: 14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				navigationControlOptions: {
					style: google.maps.NavigationControlStyle.SMALL
				}
			};
			var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
			var marker = new google.maps.Marker({
				position: latlon,
				map: map,
				title: "You are here!"
			});
		}
	</script>
```

### 处理错误和拒绝

getCurrentPosition() 方法的第二个参数用于处理错误，它规定当获取用户位置失败时运行的函数。

错误代码：

- Permission denied - 用户不允许地理定位
- Position unavailable - 无法获取当前位置
- Timeout - 操作超时

### 在地图中显示结果

如需在地图中显示结果，您需要访问可使用经纬度的地图服务，比如谷歌地图或百度地图。

### 给定位置的信息

本页演示的是如何在地图上显示用户的位置。不过，地理定位对于给定位置的信息同样很有用处。

实例:

- 更新本地信息
- 显示用户周围的兴趣点
- 交互式车载导航系统 (GPS)

### 返回数据

若成功，则 getCurrentPosition() 方法返回对象。始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性。

|          属性           |          描述          |
| :---------------------: | :--------------------: |
|     coords.latitude     |     十进制数的纬度     |
|    coords.longitude     |     十进制数的经度     |
|     coords.accuracy     |        位置精度        |
|     coords.altitude     | 海拔，海平面以上以米计 |
| coords.altitudeAccuracy |     位置的海拔精度     |
|     coords.heading      | 方向，从正北开始以度计 |
|      coords.speed       |   速度，以米/每秒计    |
|        timestamp        |    响应的日期/时间     |

### Geolocation 对象 

watchPosition() - 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。

clearWatch() - 停止 watchPosition() 方法。

下面的例子展示 watchPosition() 方法，您需要一台精确的 GPS 设备来测试该例（比如 iPhone）。

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>牛客教程(nowcoder.com)</title>
</head>
<body>
	<p id="demo">点击按钮获取您当前坐标（可能需要比较长的时间获取）：</p>
	<button onclick="getLocation()">点我</button>
	<script>
		var x = document.getElementById("demo");

		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.watchPosition(showPosition);
			} else {
				x.innerHTML = "该浏览器不支持获取地理位置。";
			}
		}

		function showPosition(position) {
			x.innerHTML = "纬度: " + position.coords.latitude +
				"<br>经度: " + position.coords.longitude;
		}
	</script>
</body>
</html>
```

## Video(视频)

HTML5 规定了一种通过 video 元素来包含视频的标准方法。

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持Video标签。
</video>
```

`<video>` 元素提供了 播放、暂停和音量控件来控制视频。

同时 `<video>` 元素也提供了 width 和 height 属性控制视频的尺寸.如果设置的高度和宽度，所需的视频空间会在页面加载时保留。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。

`<video> 与 </video>` 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。

`<video>` 元素支持多个 `<source> 元素，<source>` 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式。

```html
	<h3>HTML5 Vedio</h3>
	<video width="300" height="500" controls>
		<source src="video1/video1.mp4" type="video/mp4">
			该浏览器不支持vedio
	</video>
	<div style="text-align: left;">
		<button onclick="playPause()">播放/暂停</button>
		<button onclick="makeBig()">放大</button>
		<button onclick="makeSmall()">缩小</button>
		<button onclick="makeNormal()">普通</button>
		<br>
		<video id="video1" width="320">
			<source src="video1/video2.mp4" type="video/mp4">
		</video>
	</div>
	<script type="text/javascript">
		var myVideo=document.getElementById("video1");
		function playPause(){
			if (myVideo.paused) {
				myVideo.play();
			}else{
				myVideo.pause();
			}
		}
		function makeBig(){
			myVideo.width=640;
		}
		function makeSmall(){
			myVideo.width=200;
		}
		function makeNormal(){
			myVideo.width=320;
		}
	</script>
```

### 视频格式

- MP4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件,  video/mp4
- WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件,  video/webm
- Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件,  video/ogg

###  使用 DOM 进行控制

HTML5 `<video>` 和 `<audio>` 元素同样拥有方法、属性和事件。

`<video>` 和 `<audio>` 元素的方法、属性和事件可以使用JavaScript进行控制。

其中的方法用于播放、暂停以及加载等。其中的属性（比如时长、音量等）可以被读取或设置。其中的 DOM 事件能够通知您，比方说，`<video>` 元素开始播放、已暂停，已停止，等等。

### video属性

|                             属性                             |         值         | 描述                                                         |
| :----------------------------------------------------------: | :----------------: | :----------------------------------------------------------- |
| [autoplay](https://www.nowcoder.com/tutorial/10010/548d3d533a154c2b96c574c80db8a209) |      autoplay      | 如果出现该属性，则视频在就绪后马上播放。                     |
| [controls](https://www.nowcoder.com/tutorial/10010/a4ca492fcbf14c19a0e06db8ba66942e) |      controls      | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| [height](https://www.nowcoder.com/tutorial/10010/9895c5ad4fb4473789f7d9dad5c23cef) |      *pixels*      | 设置视频播放器的高度。                                       |
| [loop](https://www.nowcoder.com/tutorial/10010/2f6447994b854b16abe0c8a1d1a819f0) |        loop        | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| [muted](https://www.nowcoder.com/tutorial/10010/40da56afbf7c463ea4cf709092a305cd) |       muted        | 如果出现该属性，视频的音频输出为静音。                       |
| [poster](https://www.nowcoder.com/tutorial/10010/4d7ece6bb0144db3ac9d7a7db0bffab3) |       *URL*        | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
| [preload](https://www.nowcoder.com/tutorial/10010/dd1eaa2580f1417894b7b52286c9aaf4) | auto metadata none | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](https://www.nowcoder.com/tutorial/10010/57356b7085c543dcb7929d2ad2912562) |       *URL*        | 要播放的视频的 URL。                                         |
| [width](https://www.nowcoder.com/tutorial/10010/12b339dc570f4769b27c09c858e0df39) |      *pixels*      | 设置视频播放器的宽度。                                       |

### source标签

`<source>` 标签为媒体元素（比如 `<video>` 和 `<audio>`）定义媒体资源。

`<source>` 标签允许您规定两个视频/音频文件共浏览器根据它对媒体类型或者编解码器的支持进行选择。

|                             属性                             |      值       | 描述                                       |
| :----------------------------------------------------------: | :-----------: | :----------------------------------------- |
| [media](https://www.nowcoder.com/tutorial/10010/6022529e4d2f46c0b23afb3c7eeaad6e) | *media_query* | 规定媒体资源的类型，供浏览器决定是否下载。 |
| [src](https://www.nowcoder.com/tutorial/10010/f6feada4223b47b182e99c5aa812e6f3) |     *URL*     | 规定媒体文件的 URL。                       |
| [type](https://www.nowcoder.com/tutorial/10010/83a5c7e3dc104d3097233f347761a5a6) |  *MIME_type*  | 规定媒体资源的 MIME 类型。                 |

### track标签

```html
<video width="320" height="240" controls>
    <source src="forrest_gump.mp4" type="video/mp4">
    <source src="forrest_gump.ogg" type="video/ogg">
    <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
    <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>
```

<`track>` 标签为媒体元素（比如 <`audio>` and <`video>`）规定外部文本轨道。

这个元素用于规定字幕文件或其他包含文本的文件，当媒体播放时，这些文件是可见的。

|                             属性                             |                        值                         | 描述                                                         |
| :----------------------------------------------------------: | :-----------------------------------------------: | :----------------------------------------------------------- |
| [default](https://www.nowcoder.com/tutorial/10010/1d90562126f34d3aa343e8f8d775a27f) |                      default                      | 规定该轨道是默认的。 如果用户没有选择任何轨道，则使用默认轨道。 |
| [kind](https://www.nowcoder.com/tutorial/10010/6c16d0a6cee84a51ae3d3199303c1f92) | captions chapters descriptions metadata subtitles | 规定文本轨道的文本类型。                                     |
| [label](https://www.nowcoder.com/tutorial/10010/580d80098c9c490a9355b7b5c32c75af) |                      *text*                       | 规定文本轨道的标签和标题。                                   |
| [src](https://www.nowcoder.com/tutorial/10010/e8a0a28dec4f455fb66c3dc1189140c8) |                       *URL*                       | 必需的。规定轨道文件的 URL。                                 |
| [srclang](https://www.nowcoder.com/tutorial/10010/55adbd0cc4e54ba0824fbf01c546ca34) |                  *language_code*                  | 规定轨道文本数据的语言。 如果 kind 属性值是 "subtitles"，则该属性是必需的。 |

## Audio(音频)

HTML5 规定了在网页上嵌入音频元素的标准，即使用 `<audio>` 元素。

```html
<audio controls>
    <source src="horse.ogg" type="audio/ogg">
    <source src="horse.mp3" type="audio/mpeg">
    您的浏览器不支持 audio 元素。
</audio>
```

control 属性供添加播放、暂停和音量控件。

在 <`audio>` 与 <`/audio>` 之间你需要插入浏览器不支持的 <`audio>` 元素的提示文本 。

<`audio>` 元素允许使用多个 <`source>` 元素， <`source>` 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文件。

##  Input类型

HTML5 拥有多个新的表单输入类型。这些新特性提供了更好的输入控制和验证。

```html
	<h3>HTML5 input类型</h3>
	选择颜色:<input type="color" name="favcolor">
	选择日期:<input type="date" name="birthday">
	日期和时间：<input type="datetime" name="birthdaytime">
	datetime-local:<input type="datetime-local" name="birthdaytime2">
	年和月:<input type="month" name="month1">
	<br>
	E-mail:<input type="email" name="email1">
	数值(0-100)：<input type="number" name="number1" min="0" max="100">
	数值阈：<input type="range" name="range1" min="1" max="100" value="66">
	搜索：<input type="search" name="search1">
	电话:<input type="tel" name="tel1">
	<br>
	时间：<input type="time" name="time1">
	URL:<input type="url" name="url1">
	周：<input type="week" name="week1">
	<hr>
```

**注意:** 并不是所有的主流浏览器都支持新的input类型，不过您已经可以在所有主流的浏览器中使用它们了。即使不被支持，仍然可以显示为常规的文本域。

