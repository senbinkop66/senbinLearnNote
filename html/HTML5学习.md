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



## HTML 多媒体

### 什么是多媒体？

多媒体来自多种不同的格式，它可以是您听到或看到的任何内容，文字、图片、音乐、音效、录音、电影、动画等等。

在因特网上，您会经常发现嵌入网页中的多媒体元素，现代浏览器已支持多种多媒体格式。

### 多媒体格式

多媒体元素（比如视频和音频）存储于媒体文件中，确定媒体类型的最常用的方法是查看文件扩展名。

当浏览器得到文件扩展名 .htm 或 .html 时，它会假定该文件是 HTML 页面。.xml 扩展名指示 XML 文件，而 .css 扩展名指示样式表。图片格式则通过 .gif 或 .jpg 来识别。

多媒体元素元素也拥有带有不同扩展名的文件格式，比如 .swf、.wmv、.mp3 以及 .mp4。

## HTML 插件

辅助应用程序（helper application）是可由浏览器启动的程序。辅助应用程序也称为插件。

辅助程序可用于播放音频和视频（以及其他）。辅助程序是使用 `<object>` 标签来加载的。

使用辅助程序播放视频和音频的一个优势是，您能够允许用户来控制部分或全部播放设置。

插件可以通过 `<object>` 标签或者 `<embed>` 标签添加在页面中。

大多数辅助应用程序允许对音量设置和播放功能（比如后退、暂停、停止和播放）的手工（或程序的）控制。

### \<object\> 元素

所有主流浏览器都支持 `<object>` 标签。

`<object>` 元素定义了在 HTML 文档中嵌入的对象。

该标签用于插入对象 (例如在网页中嵌入 Java 小程序, PDF 阅读器, Flash 播放器) 。

```html
<object width="400" height="50" data="bookmark.swf"></object>
```

`<object>` 元素同样可用于包含HTML文件：

```html
<object width="100%" height="500px" data="snippet.html"></object>
```

或者插入一张图片：

```html
<object data="audi.jpeg"></object>
<object height="50" width="100" data="horse.mp3"></object>
```

### \<param\> 标签

`<param>` 标签支持大部分主流浏览器。但是 `<object>` 定义的文件格式不是所有的浏览器都支持。

<param> 元素允许您为插入 XHTML 文档的对象规定 run-time 设置，也就是说，此标签可为包含它的 <object> 或者 <applet> 标签提供参数。

```html
<object data="horse.wav">
  <param name="autoplay" value="true">
</object>
```



### \<embed\> 元素

所有主流浏览器都支持 `<embed>` 元素。

`<embed>` 元素表示一个 HTML Embed 对象 。

`<embed>` 元素已经出现很长一段时间了，但是在 HTML5 前并未被详细说明，该元素在 HTML 5 页面上会被验证，在 HTML 4 上不会。

```html
<embed width="400" height="50" src="bookmark.swf">
```

注意 `<embed>` 元素没有关闭标签。 **不能使用替代文本**。

- `<embed>` 元素无法回退来显示错误消息。

`<embed>` 元素同样可用于包含 HTML 文件，或者插入一张图片：

```html
<embed width="100%" height="500px" src="snippet.html">
<embed src="audi.jpeg">
<embed height="50" width="100" src="horse.mp3">
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

### color

color 类型用在input字段主要用于选取颜色。

```html
选择你喜欢的颜色: <input type="color" name="favcolor">
```

### date

date 类型允许你从一个日期选择器选择一个日期。

```html
生日: <input type="date" name="bday">
```

### time

time 类型允许你选择一个时间。

```html
选择时间: <input type="time" name="usr_time">
```

### datetime

datetime 类型允许你选择一个日期（UTC 时间）。

```html
生日 (日期和时间): <input type="datetime" name="bdaytime">
```

### datetime-local

datetime-local 类型允许你选择一个日期和时间 (无时区)。

```html
生日 (日期和时间): <input type="datetime-local" name="bdaytime">
```

### month

month 类型允许你选择一个月份。

```html
生日 (月和年): <input type="month" name="bdaymonth">
```

### week

week 类型允许你选择周和年。

```html
选择周: <input type="week" name="week_year">
```



### email

email 类型用于应该包含 e-mail 地址的输入域。

```html
E-mail: <input type="email" name="email">
```

### tel

tel 类型用于定义输入电话号码字段。

```html
电话号码: <input type="tel" name="usrtel">
```

### url

url 类型用于应该包含 URL 地址的输入域。在提交表单时，会自动验证 url 域的值。

```html
添加您的主页: <input type="url" name="homepage">
```



### number

number 类型用于应该包含数值的输入域，您还能够设定对所接受的数字的限定。

```html
数量 ( 1 到 5 之间 ): <input type="number" name="quantity" min="1" max="5">
```

使用下面的属性来规定对数字类型的限定：

|   属性    |            描述            |
| :-------: | :------------------------: |
| disabled  |    规定输入字段是禁用的    |
|    max    |      规定允许的最大值      |
| maxlength | 规定输入字段的最大字符长度 |
|    min    |      规定允许的最小值      |
|  pattern  | 规定用于验证输入字段的模式 |
| readonly  |  规定输入字段的值无法修改  |
| required  |  规定输入字段的值是必需的  |
|   size    | 规定输入字段中的可见字符数 |
|   step    | 规定输入字段的合法数字间隔 |
|   value   |    规定输入字段的默认值    |

### range

range 类型用于应该包含一定范围内数字值的输入域，range 类型显示为滑动条。

```html
<input type="range" name="points" min="1" max="10">
```

请使用下面的属性来规定对数字类型的限定：

- max - 规定允许的最大值
- min - 规定允许的最小值
- step - 规定合法的数字间隔
- value - 规定默认值

### search

search 类型用于搜索域，比如站点搜索或 Google 搜索。

```html
Search Google: <input type="search" name="googlesearch">
```

##  

## 表单元素

HTML5 有以下新的表单元素:

- `<datalist>`
- `<keygen>`
- `<output>`

**注意：** 不是所有的浏览器都支持HTML5 新的表单元素，但是你可以在使用它们，即使浏览器不支持表单属性，仍然可以显示为常规的表单元素。

### \<datalist\> 元素

`<datalist>` 元素规定输入域的选项列表。

`<datalist>` 属性规定 form 或 input 域应该拥有自动完成功能，当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项。

使用 `<input>` 元素的列表属性与 `<datalist>` 元素绑定。

```html
<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

### \<keygen\> 元素

`<keygen>` 元素的作用是提供一种验证用户的可靠方法。

`<keygen>` 标签规定用于表单的密钥对生成器字段。当提交表单时，会生成两个键，一个是私钥，一个公钥。

私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

```html
<form action="x" method="get">
    用户名: <input type="text" name="usr_name">
    加密: <keygen name="security">
    <input type="submit">
</form>
```

### \<output\> 元素

`<output>` 元素用于不同类型的输出，比如计算或脚本输出。

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    0
    <input type="range" id="a" value="50">100 +
    <input type="number" id="b" value="50">=
    <output name="x" for="a b"></output>
</form>
```

## 表单属性

### autocomplete 属性

autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项。

**提示:** autocomplete 属性有可能在 form元素中是开启的，而在input元素中是关闭的。

**注意:** autocomplete 适用于 <form> 标签，以及以下类型的 <input> 标签：text, search, url, telephone, email, password, datepickers, range 以及 color。

```html
	<h5>自动完成功能 autocomplete 属性</h5>
	<form action="#",autocomplete="on">
		name:<input type="text" name="name">
		age:<input type="text" name="age">
		email:<input type="email" name="email2" autocomplete="off">
		<input type="submit">
	</form>
```

### novalidate 属性

novalidate 属性是一个 boolean(布尔) 属性。novalidate 属性规定在提交表单时不应该验证 form 或 input 域。

```html
<form action="x.php" novalidate>
  E-mail: <input type="email" name="user_email">
  <input type="submit">
</form>
```

### autofocus 属性

autofocus 属性是一个 boolean 属性。autofocus 属性规定在页面加载时，域自动地获得焦点。

```html
First name:<input type="text" name="fname" autofocus>
```

### form 属性

form 属性规定输入域所属的一个或多个表单。

**提示:** 如需引用一个以上的表单，请使用空格分隔的列表。

```html
<form action="x.php" id="form1">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="提交">
</form>

Last name: <input type="text" name="lname" form="form1">
```

###  formaction 属性

formaction 属性用于描述表单提交的URL地址。formaction 属性会覆盖 `<form>` 元素中的 action 属性。

**注意:** formaction 属性用于 type="submit" 和 type="image"。

```html
<form action="x.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交"><br>
  <input type="submit" formaction="y.php" value="提交">
</form>
```

### formenctype 属性

formenctype 属性描述了表单提交到服务器的数据编码 (只对form表单中 method="post" 的表单)。formenctype 属性覆盖 form 元素的 enctype 属性。

**主要:** 该属性与 type="submit" 和 type="image" 配合使用。

```html
<form action="x.php" method="post">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="提交">
  <input type="submit" formenctype="multipart/form-data" value="以 Multipart/form-data 提交">
</form>
```

### formmethod 属性

formmethod 属性定义了表单提交的方式。formmethod 属性覆盖了 `<form>` 元素的 method 属性。

**注意:** 该属性可以与 type="submit" 和 type="image" 配合使用。

```html
<form action="x.php" method="get">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交">
  <input type="submit" formmethod="post" formaction="y.php" value="使用 POST 提交">
</form>
```

### formnovalidate 属性

novalidate 属性是一个 boolean 属性。novalidate属性描述了 `<input>` 元素在表单提交时无需被验证。formnovalidate 属性会覆盖 `<form>` 元素的novalidate属性.

**注意:** formnovalidate 属性与 type="submit“ 一起使用。

```html
<form action="x.php">
  E-mail: <input type="email" name="userid"><br>
  <input type="submit" value="提交"><br>
  <input type="submit" formnovalidate value="不验证提交">
</form>
```

### formtarget 属性

formtarget 属性指定一个名称或一个关键字来指明表单提交数据接收后的展示。formtarget 属性覆盖 `<form>` 元素的target属性。

**注意:** formtarget 属性与 type="submit" 和 type="image" 配合使用>。

```html
<form action="x.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="正常提交">
  <input type="submit" formtarget="_blank" value="提交到一个新的页面上">
</form>
```

### height 和 width 属性

height 和 width 属性规定用于 image 类型的 `<input>` 标签的图像高度和宽度。

**注意:** height 和 width 属性只适用于 image 类型的 `<input>` 标签。

**提示:** 图像通常会同时指定高度和宽度属性。如果图像设置高度和宽度，图像所需的空间 在加载页时会被保留。如果没有这些属性， 浏览器不知道图像的大小，并不能预留 适当的空间。图片在加载过程中会使页面布局效果改变 （尽管图片已加载）。

```html
<input type="image" src="x.png" alt="Submit" width="48" height="48">
```

### list 属性

list 属性规定输入域的 datalist。datalist 是输入域的选项列表。

```html
<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

### min 和 max 属性

min、max 和 step 属性用于为包含数字或日期的 input 类型规定限定（约束）。

**注意:** min、max 和 step 属性适用于以下类型的 <input> 标签：date pickers、number 以及 range。

```html
Enter a date before 1980-01-01:
<input type="date" name="bday" max="1979-12-31">

Enter a date after 2000-01-01:
<input type="date" name="bday" min="2000-01-02">

Quantity (between 1 and 5):
<input type="number" name="quantity" min="1" max="5">
```

### multiple 属性

multiple 属性是一个 boolean 属性.multiple 属性规定 <input> 元素中可选择多个值。

**注意:** multiple 属性适用于以下类型的 <input> 标签：email 和 file。

```html
Select images: <input type="file" name="img" multiple>
```

### pattern 属性

pattern 属性描述了一个正则表达式用于验证 <input> 元素的值。

**注意:** pattern 属性适用于以下类型的 <input> 标签: text, search, url, tel, email, 和 password。

**提示：** 是用来全局 [title](https://www.nowcoder.com/tutorial/10010/05207e871a2b4b8384a0edd05370a158) 属性描述了模式.

**提示：** 您可以在我们的 [JavaScript 教程](https://www.nowcoder.com/tutorial/10009/93ea8bfac75844888a914d1b8741b791) 中学习到有关正则表达式的内容

```html
Country code: <input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">
```

### placeholder 属性

placeholder 属性提供一种提示（hint），描述输入域所期待的值。简短的提示在用户输入值前会显示在输入域上。

**注意:** placeholder 属性适用于以下类型的 `<input>` 标签：text, search, url, telephone, email 以及 password。

```html
<input type="text" name="fname" placeholder="First name">
```

### required 属性

required 属性是一个 boolean 属性。required 属性规定必须在提交之前填写输入域（不能为空）。

**注意:** required 属性适用于以下类型的 `<input>` 标签：text, search, url, telephone, email, password, date pickers, number, checkbox, radio 以及 file。

```html
Username: <input type="text" name="usrname" required>
```

### step 属性

step 属性为输入域规定合法的数字间隔。如果 step="3"，则合法的数是 -3, 0, 3, 6 等。

**提示：** step 属性可以与 max 和 min 属性创建一个区域值。

**注意:** step 属性与以下type类型一起使用: number, range, date, datetime, datetime-local, month, time 和 week。

```html
<input type="number" name="points" step="3">
```



## HTML5 语义元素

语义元素 = 有意义的元素

### 什么是语义元素

一个语义元素能够清楚的描述其意义给浏览器和开发者。

**无语义** 元素实例: `<div>` 和 `<span>` - 无需考虑内容。

**语义** 元素实例: `<form>`, `<table>`, and `<img>` - 清楚的定义了它的内容。

### HTML5中新的语义元素

HTML5 提供了新的语义元素来明确一个 Web 页面的不同部分：

 `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<figcaption>`, `<figure>`, `<footer>`

### \<header\> 元素

`<header>` 元素描述了文档的头部区域。`<header>` 元素主要用于定义内容的介绍展示区域。在页面中你可以使用多个 `<header>` 元素。

```html
<article>
  <header>
    <h1>Internet Explorer 9</h1>
    <p><time pubdate datetime="2011-03-15"></time></p>
  </header>
  <p>Windows Internet Explorer 9(缩写为 IE9 )是在2011年3月14日21:00发布的</p>
</article>
```

### \<nav\> 元素

`<nav>` 标签定义导航链接的部分。`<nav>` 元素用于定义页面的导航链接部分区域，但是，不是所有的链接都需要包含在 `<nav>` 元素中！

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>牛客教程(nowcoder.com)</title>
</head>
<body>

	<nav>
		<a href="//www.nowcoder.com/courses/">课程</a> |
		<a href="//www.nowcoder.com/project/recommend/">项目</a> |
		<a href="//www.nowcoder.com/library/">图书馆</a> |
		<a href="//www.nowcoder.com/stacks/0/0/">技术栈</a>
	</nav>

</body>
</html>
```

### \<article\> 元素

`<article>` 标签定义独立的内容。

```html
<article>
  <h1>Internet Explorer 9</h1>
  <p>Windows Internet Explorer 9(缩写为 IE9 )在2011年3月14日21:00 发布。</p>
</article>
```

### \<section\> 元素

<section> 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

根据 W3C HTML5文档：section 包含了一组内容及其标题。

```html
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is...</p>
</section>
```

### \<aside\> 元素

`<aside>` 标签定义页面主区域内容之外的内容（比如侧边栏）。aside 标签的内容应与主区域的内容相关。

```html
<p>My family and I visited The Epcot center this summer.</p>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```

### \<footer\> 元素

`<footer>` 元素描述了文档的底部区域。`<footer>` 元素应该包含它的包含元素。

一个页脚通常包含文档的作者，著作权信息，链接的使用条款，联系信息等。文档中你可以使用多个 `<footer>` 元素。

```html
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p><time pubdate datetime="2012-03-01"></time></p>
</footer>
```

### \<figure\> 和 \<figcaption\> 元素

\<figure\> 标签规定独立的流内容（图像、图表、照片、代码等等）。`<figcaption>` 标签定义 `<figure>` 元素的标题。

`<figcaption>` 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。

```html
<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
  <figcaption>Fig1. - The Pulpit Pock, Norway.</figcaption>
</figure>
```

以上的元素都是块元素(除了`<figcaption>`)。

为了让这些块及元素在所有版本的浏览器中生效，你需要在样式表文件中设置一下属性 (以下样式代码可以让旧版本浏览器支持本章介绍的块级元素)：

```css
header, section, footer, aside, nav, article, figure {
    display: block;
}
```

## HTML5 Web 存储

HTML5 web 存储，一个比cookie更好的本地存储方式。

### 什么是 HTML5 Web 存储?

使用HTML5可以在本地存储用户的浏览数据。

早些时候，本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速，这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上。它也可以存储大量的数据，而不影响网站的性能。

数据以 键/值 对存在，web网页的数据只允许该网页访问使用。

客户端存储数据的两个对象为：

- localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
- sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

在使用 web 存储前,应检查浏览器是否支持 localStorage 和sessionStorage。

```js
if(typeof(Storage) !== "undefined") {
    // 是的! 支持 localStorage  sessionStorage 对象!
} else {
    // 抱歉! 不支持 web 存储。
}
```

### localStorage 对象

localStorage 对象存储的数据没有时间限制，第二天、第二周或下一年之后，数据依然可用。

```html
	<h3>HTML5 Web存储</h3>
	<p>localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。</p>
	<p><button onclick="clickCounter()" type="button">点击显示计数1</button></p>
	<div id="result1"></div>
	<script type="text/javascript">
		function clickCounter(){
			if (typeof(Storage)!=="undefined") {
				if (localStorage.clickcount) {
					localStorage.clickcount=Number(localStorage.clickcount)+1;
				}else{
					localStorage.clickcount=1;
				}
				document.getElementById("result1").innerHTML="点击按钮 "+localStorage.clickcount+"次。";
			}else{
				document.getElementById("result1").innerHTML="该浏览器不支持web存储。";
			}
		}
	</script>
```

不管是 localStorage，还是 sessionStorage，可使用的API都相同，常用的有如下几个（以localStorage为例）：

- 保存数据：localStorage.setItem(key,value);
- 读取数据：localStorage.getItem(key);
- 删除单个数据：localStorage.removeItem(key);
- 删除所有数据：localStorage.clear();
- 得到某个索引的key：localStorage.key(index);

**提示:** 键/值对通常以字符串存储，你可以按自己的需要转换该格式。

### sessionStorage 对象

sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

如何创建并访问一个 sessionStorage：

```html
	<p>sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。</p>
	<p><button onclick="clickCounter2()" type="button">点击显示计数2</button></p>
	<div id="result2"></div>
	<script type="text/javascript">
		function clickCounter2(){
			if (typeof(Storage)!=="undefined") {
				if (sessionStorage.clickcount) {
					sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
				}else{
					sessionStorage.clickcount=1;
				}
				document.getElementById("result2").innerHTML="点击按钮 "+sessionStorage.clickcount+"次。";
			}else{
				document.getElementById("result2").innerHTML="该浏览器不支持web存储。";
			}
		}
	</script>
```

### Web Storage 应用

开发一个简单的网站列表程序，网站列表程序实现以下功能：

- 可以输入网站名，网址，以网站名作为key存入localStorage；
- 根据网站名，查找网址；
- 列出当前已保存的所有网站；

```html
	<h5>Web Storage 开发一个简单的用户列表程序</h5>
	<div style="border: 1px dashed #ddd;width: 360px;text-align: left;">
		<label for="name">name:</label>
		<input type="text" name="name" id="name1" class="text"><br>
		<label for="age">age:</label>
		<input type="text" name="age" id="age1"><br>
		<input type="button" onclick="save()" value="Add record">
		<br>
		<label for="search_name">input name:</label>
		<input type="text" name="search_name" id="search_name">
		<input type="button" onclick="find()" value="search user">
		<p id="find_result"></p>
	</div>
	<script type="text/javascript">
		function save(){
			var name=document.getElementById("name1").value;
			var age=document.getElementById("age1").value;
			localStorage.setItem(name,age);
			alert("add successfully!");
		}
		function find(){
			var search_name=document.getElementById("search_name").value;
			var find_age=localStorage.getItem(search_name);
			var find_result=document.getElementById("find_result");
			find_result.innerHTML=search_name+" 的age是:"+find_age;
		}
	</script>
```

## HTML5 Web SQL

Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。

如果你是一个 Web 后端程序员，应该很容易理解 SQL 的操作。Web SQL 数据库可以在最新版的 Safari, Chrome 和 Opera 浏览器中工作。

### 核心方法

以下是规范中定义的三个核心方法：

1. **openDatabase**：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
2. **transaction**：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
3. **executeSql**：这个方法用于执行实际的 SQL 查询。

### 打开数据库

我们可以使用 openDatabase() 方法来打开已存在的数据库，如果数据库不存在，则会创建一个新的数据库，使用代码如下：

```js
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
```

openDatabase() 方法对应的五个参数说明：

1. 数据库名称
2. 版本号
3. 描述文本
4. 数据库大小
5. 创建回调

第五个参数，创建回调会在创建数据库后被调用。

### 执行查询操作

执行操作使用 database.transaction() 函数：

```js
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
});
```

上面的语句执行后会在 'mydb' 数据库中创建一个名为 LOGS 的表。

### 插入数据

在执行上面的创建表语句后，我们可以插入一些数据：

```js
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "牛客教程")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.nowcoder.com")');
});
```

我们也可以使用动态值来插入数据：

```js
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {  
  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
  tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [e_id, e_log]);
});
```

实例中的 e_id 和 e_log 是外部变量，executeSql 会映射数组参数中的每个条目给 "?"。

### 读取数据

```js
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "牛客教程")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.nowcoder.com")');
});

db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
      var len = results.rows.length, i;
      msg = "<p>查询记录条数: " + len + "</p>";
      document.querySelector('#status').innerHTML +=  msg;

      for (i = 0; i < len; i++){
         alert(results.rows.item(i).log );
      }

   }, null);
});
```

### 删除记录

删除记录使用的格式如下：

```js
db.transaction(function (tx) {
    tx.executeSql('DELETE FROM LOGS  WHERE id=1');
});
```

删除指定的数据id也可以是动态的：

```js
db.transaction(function(tx) {
    tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);
});
```

### 更新记录

更新记录使用的格式如下：

```js
db.transaction(function (tx) {
    tx.executeSql('UPDATE LOGS SET log='www.baidu.com' WHERE id=2');
});
```

更新指定的数据id也可以是动态的：

```js
db.transaction(function(tx) {
    tx.executeSql('UPDATE LOGS SET log='www.baidu.com' WHERE id=?', [id]);
});
```



## HTML5 应用程序缓存

使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。

### 什么是应用程序缓存？

HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。

应用程序缓存为应用带来三个优势：

1. 离线浏览 - 用户可在应用离线时使用它们
2. 速度 - 已缓存资源加载得更快
3. 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

### Cache Manifest 基础

如需启用应用程序缓存，请在文档的 `<html>` 标签中包含 manifest 属性：

```html
<!DOCTYPE HTML>
<html manifest="demo.appcache">
    ...
</html>
```

每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。

manifest 文件的建议的文件扩展名是：".appcache"。

**注意：**manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"，必须在 web 服务器上进行配置。

### Manifest 文件

manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

manifest 文件可分为三个部分：

- CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存。
- NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存。
- FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）。

#### **CACHE MANIFEST**

第一行，CACHE MANIFEST，是必需的：

```
CACHE MANIFEST
/theme.css
/logo.gif
/main.js
```

上面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然是可用的。

#### **NETWORK**

下面的 NETWORK 小节规定文件 "login.php" 永远不会被缓存，且离线时是不可用的：

```
NETWORK:
login.php
```

可以使用星号来指示所有其他资源/文件都需要因特网连接：

```
NETWORK:
*
```

#### **FALLBACK**

下面的 FALLBACK 小节规定如果无法建立因特网连接，则用 "offline.html" 替代 /html5/ 目录中的所有文件：

```
FALLBACK:
/html/ /offline.html
```

**注意:** 第一个 URI 是资源，第二个是替补。

#### 完整的 Manifest 文件

```
CACHE MANIFEST
# 2012-02-21 v1.0.0
/theme.css
/logo.gif
/main.js

NETWORK:
login.php

FALLBACK:
/html/ /offline.html
```

**提示:** 以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存会在其 manifest 文件更改时被更新。如果您编辑了一幅图片，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。

### 更新缓存

一旦应用被缓存，它就会保持缓存直到发生下列情况：

- 用户清空浏览器缓存
- manifest 文件被修改（参阅下面的提示）
- 由程序来更新应用缓存

一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。

**注意:** 浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。

### Cache Manifest 实例

```html
<!DOCTYPE html>
<html manifest="demo_html.appcache">
<head>
<meta charset="UTF-8">
<title>牛客教程(nowcoder.com)</title>
</head>
<body>
	<script src="//static.nowcoder.com/tutorial/web-examples/js/demo_time.js"></script>
	<p id="timePara"><button onclick="getDateTime()">获取日期和时间</button></p>
	<p><img src="//static.nowcoder.com/acm/images-acm/img/home/nk-head.png" width="100" height="100"></p>
	<p>尝试打开 <a  href="//static.nowcoder.com/tutorial/web-examples/html5_html_manifest.html" target="_blank">这个页面</a>, 在离线的状态下重新载入这个页面，页面也可以访问。</p>
</body>
</html>
```



### 

##  HTML5 Web Workers

web worker 是运行在后台的 JavaScript，不会影响页面的性能。

### 什么是 Web Worker？

当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

### 检测浏览器是否支持 Web Worker

在创建 web worker 之前，请检测用户的浏览器是否支持它：

```js
if(typeof(Worker) !== "undefined") {
    // 是的! Web worker 支持!
}
else {
    //抱歉! Web Worker 不支持
}
```

### 创建 web worker 文件

现在，让我们在一个外部 JavaScript 中创建我们的 web worker。

在这里，我们创建了计数脚本。该脚本存储于 "demo_workers.js" 文件中：

```js
var i = 0;

function timedCount()
{
    i = i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
```

以上代码中重要的部分是 postMessage() 方法 - 它用于向 HTML 页面传回一段消息。

**注意:** web worker 通常不用于如此简单的脚本，而是用于更耗费 CPU 资源的任务。

### 创建 Web Worker 对象

我们已经有了 web worker 文件，现在我们需要从 HTML 页面调用它。

下面的代码检测是否存在 worker，如果不存在，它会创建一个新的 web worker 对象，然后运行 "demo_workers.js" 中的代码：

```js
if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
}
```

然后我们就可以从 web worker 发生和接收消息了。

向 web worker 添加一个 "onmessage" 事件监听器：

```js
w.onmessage = function(event) {
    document.getElementById("result").innerHTML=event.data;
};
```

### 终止 Web Worker

当我们创建 web worker 对象后，它会继续监听消息（即使在外部脚本完成之后）直到其被终止为止。

如需终止 web worker，并释放浏览器/计算机资源，请使用 terminate() 方法：

```js
w.terminate();
```



###  Web Workers 实例

创建了一个简单的 web worker，在后台计数：

```js
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>牛客教程(nowcoder.com)</title> 
</head>
<body>
    <p>计数： <output id="result"></output></p>
    <button onclick="startWorker()">开始工作</button> 
    <button onclick="stopWorker()">停止工作</button>
    <p>
        <strong>注意：</strong> 
        Internet Explorer 9 及更早 IE 版本浏览器不支持 Web Workers.
    </p>
    <script>
        var w;

        function startWorker() {
            if(typeof(Worker) !== "undefined") {
                if(typeof(w) == "undefined") {
                    w = new Worker("demo_workers.js");
                }
                w.onmessage = function(event) {
                    document.getElementById("result").innerHTML = event.data;
                };
            } else {
                document.getElementById("result").innerHTML = 
                    "抱歉，你的浏览器不支持 Web Workers...";
            }
        }

        function stopWorker() { 
            w.terminate();
            w = undefined;
        }
    </script>
</body>
</html>
```

```js
//demo_workers.js 文件代码
var i = 0;

function timedCount() {
    i = i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
```

### Web Workers 和 DOM

由于 web worker 位于外部文件中，它们无法访问下列 JavaScript 对象：

- window 对象
- document 对象
- parent 对象



##  HTML5 SSE

HTML5 服务器发送事件（server-sent event）允许网页获得来自服务器的更新。

### Server-Sent 事件 - 单向消息传递

Server-Sent 事件指的是网页自动获取来自服务器的更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

例子：Facebook/Twitter 更新、股价更新、新的博文、赛事结果等。

### 接收 Server-Sent 事件通知

EventSource 对象用于接收服务器发送事件通知：

```js
var source = new EventSource("demo_sse.php");
source.onmessage=function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
};
```

实例解析：

- 创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL
- 每接收到一次更新，就会发生 onmessage 事件
- 当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

### 检测 Server-Sent 事件支持

以下实例，我们编写了一段额外的代码来检测服务器发送事件的浏览器支持情况：

```js
if(typeof(EventSource) !== "undefined") {
    // 浏览器支持 Server-Sent
}
else {
    // 浏览器不支持 Server-Sent..
}
```

### 服务器端代码实例

为了让上面的例子可以运行，您还需要能够发送数据更新的服务器（比如 PHP 和 ASP）。

服务器端事件流的语法是非常简单的，把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。

```php
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}

";
flush();
?>
```

ASP 代码 (VB) (demo_sse.asp)：

```asp
<%
Response.ContentType="text/event-stream"
Response.Expires=-1
Response.Write("data: " & now())
Response.Flush()
%>
```

代码解释:

- 把报头 "Content-Type" 设置为 "text/event-stream"
- 规定不对页面进行缓存
- 输出发送日期（始终以 "data: " 开头）
- 向网页刷新输出数据

### EventSource 对象

在上面的例子中，我们使用 onmessage 事件来获取消息。不过还可以使用其他事件：

|   事件    |           描述           |
| :-------: | :----------------------: |
|  onopen   | 当通往服务器的连接被打开 |
| onmessage |       当接收到消息       |
|  onerror  |        当发生错误        |



##  HTML5 WebSocket

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。

HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。

浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

当你获取 Web Socket 连接后，你可以通过 **send()** 方法来向服务器发送数据，并通过 **onmessage** 事件来接收服务器返回的数据。

以下 API 用于创建 WebSocket 对象。

```js
var Socket = new WebSocket(url, [protocol] );
```

以上代码中的第一个参数 url, 指定连接的 URL。第二个参数 protocol 是可选的，指定了可接受的子协议。

### WebSocket 属性

|         属性          | 描述                                                         |
| :-------------------: | :----------------------------------------------------------- |
|   Socket.readyState   | 只读属性 **readyState** 表示连接状态，可以是以下值： 0 - 表示连接尚未建立。 1 - 表示连接已建立，可以进行通信。 2 - 表示连接正在进行关闭。 3 - 表示连接已经关闭或者连接不能打开。 |
| Socket.bufferedAmount | 只读属性 **bufferedAmount** 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。 |

### WebSocket 事件

|  事件   |   事件处理程序   |            描述            |
| :-----: | :--------------: | :------------------------: |
|  open   |  Socket.onopen   |       连接建立时触发       |
| message | Socket.onmessage | 客户端接收服务端数据时触发 |
|  error  |  Socket.onerror  |     通信发生错误时触发     |
|  close  |  Socket.onclose  |       连接关闭时触发       |

### WebSocket 方法

|      方法      |       描述       |
| :------------: | :--------------: |
| Socket.send()  | 使用连接发送数据 |
| Socket.close() |     关闭连接     |

### WebSocket 实例

WebSocket 协议本质上是一个基于 TCP 的协议。

为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

#### **客户端的 HTML 和 JavaScript**

目前大部分浏览器支持 WebSocket() 接口，你可以在以下浏览器中尝试实例： Chrome, Mozilla, Opera 和 Safari。

nowcoder_websocket.html 文件内容

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>牛客教程(nowcoder.com)</title>
<script>
    function WebSocketTest() {
        if ("WebSocket" in window) {
            alert("您的浏览器支持 WebSocket!");

            // 打开一个 web socket
            var ws = new WebSocket("ws://localhost:9998/echo");

            ws.onopen = function() {
                // Web Socket 已连接上，使用 send() 方法发送数据
                ws.send("发送数据");
                alert("数据发送中...");
            };

            ws.onmessage = function(evt) {
                var received_msg = evt.data;
                alert("数据已接收...");
            };

            ws.onclose = function() {
                // 关闭 websocket
                alert("连接已关闭...");
            };
        } else {
            // 浏览器不支持 WebSocket
            alert("您的浏览器不支持 WebSocket!");
        }
    }
</script>
</head>
<body>
    <div id="sse">
        <a href="javascript:WebSocketTest();">运行 WebSocket</a>
    </div>
</body>
</html>

```

#### 安装 pywebsocket

在执行以上程序前，我们需要创建一个支持 WebSocket 的服务。从 [pywebsocket](https://github.com/google/pywebsocket) 下载 mod_pywebsocket ,或者使用 git 命令下载：

```bash
git clone https://github.com/google/pywebsocket.git
```

mod_pywebsocket 需要 python 环境支持

mod_pywebsocket 是一个 Apache HTTP 的 Web Socket扩展，安装步骤如下：

- 解压下载的文件。

- 进入 **pywebsocket** 目录。

- 执行命令：

  ```bash
  $ python setup.py build
  $ sudo python setup.py install
  ```

- 查看文档说明：

  ```bash
  $ pydoc mod_pywebsocket
  ```

#### **开启服务**

在 **pywebsocket/mod_pywebsocket** 目录下执行以下命令：

```bash
$ sudo python standalone.py -p ``9998` `-w ../example/
```

以上命令会开启一个端口号为 9998 的服务，使用 -w 来设置处理程序 echo_wsh.py 所在的目录。

现在我们可以在 Chrome 浏览器打开前面创建的 nowcoder_websocket.html 文件。如果你的浏览器支持 WebSocket()，点击"运行 WebSocket"，你就可以看到整个流程各个步骤弹出的窗口。
