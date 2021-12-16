CSS 响应式设计

# Viewport

## 什么是 Viewport?

viewport 是用户网页的可视区域。viewport 翻译为中文可以叫做"视区"。

手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

## 设置 Viewport

一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- height：和 width 相对应，指定高度。
- initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
- maximum-scale：允许用户缩放到的最大比例。
- minimum-scale：允许用户缩放到的最小比例。
- user-scalable：用户是否可以手动缩放。

以下实例演示了使用viewport和没使用viewport在移动端上的效果：

# 网格视图

## 什么是网格视图?

很多网页都是基于网格设计的，这说明网页是按列来布局的。

使用网格视图有助于我们设计网页。这让我们向网页添加元素变的更简单。

响应式网格视图通常是 12 列，宽度为100%，在浏览器窗口大小调整时会自动伸缩。

```html
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<style>
		* {
			box-sizing: border-box;
		}

		.gridwrapper {
			overflow: auto;
			position: relative;
			height: 250px;
		}

		.gridcontent {
			width: 8.33%;
			margin: 0;
			xborder-left: 1px solid grey;
			border-right: 1px solid grey;
			height: 100%;
			float: left;
			background-color: #84c754;
			background-color: #f1f1f1;
		}
	</style>
</head>
<body>

	<div style="position:absolute;opacity:0.9;width:auto;left:8px;right:10px;">
		<div class="gridcontainer">
			<div class="gridwrapper" style="height:90px;">
				<div class="gridcontent" style="width:100%;background:#9933cc;border-right-color:transparent;">

				</div>
			</div>
			<div class="gridwrapper" style="height:230px;">
				<div class="gridcontent" style="background-color:#ffffff;border:none;width:25%;padding-top:15px;">
					<div style="background-color:#33b5e5;border:none;width:100%;height:15%;margin-bottom:10px;"></div>
					<div style="background-color:#33b5e5;border:none;width:100%;height:15%;margin-bottom:10px;"></div>
					<div style="background-color:#33b5e5;border:none;width:100%;height:15%;margin-bottom:10px;"></div>
					<div style="background-color:#33b5e5;border:none;width:100%;height:15%;"></div>
				</div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;"></div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;"></div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;"></div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;"></div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;"></div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;"></div>
				<div class="gridcontent" style="background-color:#ffffff;border:none;width:25%;padding-top:15px;">
					<div style="background-color:#33b5e5;border:none;width:100%;height:92%;"></div>
				</div>
			</div>
			<div class="gridwrapper" style="height:50px;">
				<div class="gridcontent" style="width:100%;background:#0099cc;border-right-color:transparent;">

				</div>
			</div>

		</div>
	</div>
	<div class="gridcontainer" style="opacity:0.1;">
		<div class="gridwrapper" style="height:370px;">
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;border-left:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
			<div class="gridcontent" style="background-color:#ffffff;border-right:1px solid #000000;"></div>
		</div>
	</div>

</body>
</html>
```

## 创建响应式网格视图

接下来我们来创建一个响应式网格视图。

首先确保所有的 HTML 元素都有 **box-sizing** 属性且设置为 **border-box**。

确保边距和边框包含在元素的宽度和高度间。

```css
* {
    box-sizing: border-box;
}
```

以下实例演示了简单的响应式网页，包含两列：

```html
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		* {
			box-sizing: border-box;
		}

		.header {
			border: 1px solid red;
			padding: 15px;
		}

		.menu {
			width: 25%;
			float: left;
			padding: 15px;
			border: 1px solid red;
		}

		.main {
			width: 75%;
			float: left;
			padding: 15px;
			border: 1px solid red;
		}
	</style>
</head>
<body>

	<div class="header">
		<h1>Chania</h1>
	</div>

	<div class="menu">
		<ul>
			<li>The Flight</li>
			<li>The City</li>
			<li>The Island</li>
			<li>The Food</li>
		</ul>
	</div>

	<div class="main">
		<h1>The City</h1>
		<p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old
			town and the modern city.</p>
		<p>Resize the browser window to see how the content respond to the resizing.</p>
	</div>

</body>
</html>
```

12 列的网格系统可以更好的控制响应式网页。

首先我们可以计算每列的百分比: 100% / 12 列 = 8.33%。

在每列中指定 class， **class="col-"** 用于定义每列有几个 span ：

```css
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
```

所有的列向左浮动，间距(padding) 为 15px：

```css
[class*="col-"] {
    float: left;
    padding: 15px;
    border: 1px solid red;
}
```

每一行使用 `<div>` 包裹。所有列数加起来应为 12：

```html
<div class="row">
  <div class="col-3">...</div>
  <div class="col-9">...</div>
</div>
```

列中行为左浮动，并添加清除浮动：

```css
.row:after {
    content: "";
    clear: both;
    display: block;
}
```

我们可以添加一些样式和颜色，让其更好看：

```css
html {
    font-family: "Lucida Sans", sans-serif;
}
.header {
    background-color: #9933cc;
    color: #ffffff;
    padding: 15px;
}
.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.menu li {
    padding: 8px;
    margin-bottom: 7px;
    background-color :#33b5e5;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.menu li:hover {
    background-color: #0099cc;
}
```

# 媒体查询

## 添加断点

在先前的教程中我们使用行和列来制作网页，它是响应式的，但在小屏幕上并不能友好的展示。

媒体查询可以帮我们解决这个问题。我们可以在设计稿的中间添加断点，不同的断点有不同的效果。

当屏幕 (浏览器窗口) 小于 768px, 每一列的宽度是 100%：

```html
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		* {
			box-sizing: border-box;
		}

		.row:after {
			content: "";
			clear: both;
			display: block;
		}

		[class*="col-"] {
			float: left;
			padding: 15px;
		}

		html {
			font-family: "Lucida Sans", sans-serif;
		}

		.header {
			background-color: #9933cc;
			color: #ffffff;
			padding: 15px;
		}

		.menu ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		.menu li {
			padding: 8px;
			margin-bottom: 7px;
			background-color: #33b5e5;
			color: #ffffff;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		}

		.menu li:hover {
			background-color: #0099cc;
		}

		.aside {
			background-color: #33b5e5;
			padding: 15px;
			color: #ffffff;
			text-align: center;
			font-size: 14px;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		}

		.footer {
			background-color: #0099cc;
			color: #ffffff;
			text-align: center;
			font-size: 12px;
			padding: 15px;
		}

		/* For desktop: */
		.col-1 {
			width: 8.33%;
		}

		.col-2 {
			width: 16.66%;
		}

		.col-3 {
			width: 25%;
		}

		.col-4 {
			width: 33.33%;
		}

		.col-5 {
			width: 41.66%;
		}

		.col-6 {
			width: 50%;
		}

		.col-7 {
			width: 58.33%;
		}

		.col-8 {
			width: 66.66%;
		}

		.col-9 {
			width: 75%;
		}

		.col-10 {
			width: 83.33%;
		}

		.col-11 {
			width: 91.66%;
		}

		.col-12 {
			width: 100%;
		}

		@media only screen and (max-width: 768px) {

			/* For mobile phones: */
			[class*="col-"] {
				width: 100%;
			}
		}
	</style>
</head>
<body>

	<div class="header">
		<h1>Chania</h1>
	</div>

	<div class="row">

		<div class="col-3 menu">
			<ul>
				<li>The Flight</li>
				<li>The City</li>
				<li>The Island</li>
				<li>The Food</li>
			</ul>
		</div>

		<div class="col-6">
			<h1>The City</h1>
			<p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old
				town and the modern city.</p>
		</div>
		<div class="col-3 right">
			<div class="aside">
				<h2>What?</h2>
				<p>Chania is a city on the island of Crete.</p>
				<h2>Where?</h2>
				<p>Crete is a Greek island in the Mediterranean Sea.</p>
				<h2>How?</h2>
				<p>You can reach Chania airport from all over Europe.</p>
			</div>
		</div>

	</div>

	<div class="footer">
		<p>Resize the browser window to see how the content respond to the resizing.</p>
	</div>

</body>
</html>
```

## 为移动端优先设计

移动端优先意味着在设计桌面和其他设备时优先考虑移动端的设计。

这就意味着我们必须对 CSS 做一些改变。

我们在屏幕小于 768px 进行样式修改，同样在屏幕宽度大于 768px 时也需要修改样式。以下是移动端优先实例：

```css
/* 为移动端设计: */
[class*="col-"] {
    width: 100%;
}
@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
}
```

## 其他断点

你可以根据自己的需要添加断点。我们同样可以为平板设备和移动手机设备设置断点。

在屏幕为 600px 时添加媒体查询，并设置新的样式（屏幕大于600px但小于768px）：

```css
/* For mobile phones: */
[class*="col-"] {
    width: 100%;
}
@media only screen and (min-width: 600px) {
    /* For tablets: */
    .col-m-1 {width: 8.33%;}
    .col-m-2 {width: 16.66%;}
    .col-m-3 {width: 25%;}
    .col-m-4 {width: 33.33%;}
    .col-m-5 {width: 41.66%;}
    .col-m-6 {width: 50%;}
    .col-m-7 {width: 58.33%;}
    .col-m-8 {width: 66.66%;}
    .col-m-9 {width: 75%;}
    .col-m-10 {width: 83.33%;}
    .col-m-11 {width: 91.66%;}
    .col-m-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
}
```

以上代码看起来很多余，但是他可以根据屏幕大小自动设置不同的样式，所以还是非常必要的。

## 方向：横屏/竖屏

结合CSS媒体查询,可以创建适应不同设备的方向(横屏landscape、竖屏portrait等)的布局。

**语法**

```css
orientation：portrait | landscape
```

- **portrait：**指定输出设备中的页面可见区域高度大于或等于宽度
- **landscape：** 除portrait值情况外，都是landscape

如果是横屏背景将是浅蓝色：

```
@media only screen and (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
```

# 图片

## 使用 width 属性

如果 width 属性设置为 100%，图片会根据上下范围实现响应式功能：

```css
img {
    width: 100%;
    height: auto;
}
```

注意在以上实例中，图片会比它的原始图片大。我们可以使用 **max-width** 属性很好的解决这个问题。

## 使用 max-width 属性

如果 max-width 属性设置为 100%, 图片永远不会大于其原始大小：

```css
img {
    max-width: 100%;
    height: auto;
}
```

## 网页中添加图片

```css
img {
    width: 100%;
    height: auto;
}
```

## 背景图片

背景图片可以响应调整大小或缩放。

以下是三个不同的方法：

1、如果 background-size 属性设置为 "contain", 背景图片将按比例自适应内容区域。图片保持其比例不变：

```css
div {
    width: 100%;
    height: 400px;
    background-image: url('img_flowers.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid red;
}
```

2、如果 background-size 属性设置为 "100% 100%" ，背景图片将延展覆盖整个区域：

```css
div {
    width: 100%;
    height: 400px;
    background-image: url('img_flowers.jpg');
    background-size: 100% 100%;
    border: 1px solid red;
}
```

3、如果 background-size 属性设置为 "cover"，则会把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。注意该属性保持了图片的比例因此 背景图像的某些部分无法显示在背景定位区域中。

```css
div {
    width: 100%;
    height: 400px;
    background-image: url('img_flowers.jpg');
    background-size: cover;
    border: 1px solid red;
}
```

## 不同设备显示不同图片

大尺寸图片可以显示在大屏幕上，但在小屏幕上确不能很好显示。我们没有必要在小屏幕上去加载大图片，这样很影响加载速度。所以我们可以使用媒体查询，根据不同的设备显示不同的图片。

以下大图片和小图片将显示在不同设备上：

```css
/* For width smaller than 400px: */
body {
    background-image: url('img_smallflower.jpg');
}

/* For width 400px and larger: */
@media only screen and (min-width: 400px) {
    body {
        background-image: url('img_flowers.jpg');
    }
}
```

你可以使用媒体查询的 min-device-width 替代 min-width 属性，它将检测的是设备宽度而不是浏览器宽度。浏览器大小重置时，图片大小不会改变。

```css
/* 设备小于 400px: */
body {
    background-image: url('img_smallflower.jpg');
}

/* 设备大于 400px (也等于): */
@media only screen and (min-device-width: 400px) {
    body {
        background-image: url('img_flowers.jpg');
    }
}
```

## HTML5 \<picture\> 元素

HTML5 的 `<picture>` 元素可以设置多张图片。

`<picture>` 元素类似于 `<video>` 和 `<audio>` 元素。可以设备不同的资源，第一个设置的资源为首选使用的：

```html
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
  <source srcset="img_flowers.jpg">
  <img src="img_flowers.jpg" alt="Flowers">
</picture>
```

`srcset` 属性的必须的，定义了图片资源。

`media` 属性是可选的，可以在媒体查询的 [CSS @media 规则](https://www.nowcoder.com/tutorial/10011/3a0b988eff65447f8c923940c2d919e0) 查看详情。

对于不支持 `<picture>` 元素的浏览器你也可以定义 `<img>` 元素来替代。

#  视频

## 使用 width 属性

如果 width 属性设置为 100%，视频播放器会根据屏幕大小自动调整比例：

```css
video {
    width: 100%;
    height: auto;
}
```

注意在以上实例中，视频播放器根据屏幕大小自动调整比例，且可以比原始尺寸大。更多情况下我们可以使用 max-width 属性来替代。

## 使用 max-width 属性

如果 max-width 属性设置为 100%, 视频播放器会根据屏幕自动调整比例，但不会超过其原始大小：

```css
video {
    max-width: 100%;
    height: auto;
}
```

我们可以在网页中添加视频。以下实例视频根据 div 区域大小自动调整并占满整个 div 区域：

```
video {
    width: 100%;
    height: auto;
}
```



