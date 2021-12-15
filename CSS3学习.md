# CSS3 简介

CSS3被拆分为"模块"。旧规范已拆分成小块，还增加了新的。

一些最重要CSS3模块如下：

- 选择器
- 盒模型
- 背景和边框
- 文字特效
- 2D/3D转换
- 动画
- 多列布局
- 用户界面

# CSS3 边框

用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。

## border-radius 属性

在 CSS2 中添加圆角棘手。我们不得不在每个角落使用不同的图像。使用 CSS3 border-radius 属性，你可以给任何元素制作 "圆角"。

在 CSS3 中，很容易创建圆角。在 CSS3 中 border-radius 属性被用于创建圆角：

border-radius 属性是一个最多可指定四个 border -*- radius 属性的复合属性

如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。

但是，如果你要在四个角上一一指定，可以使用以下规则：

- **四个值:** 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
- **三个值:** 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
- **两个值:** 第一个值为左上角与右下角，第二个值为右上角与左下角
- **一个值：** 四个圆角值相同

这是圆角边框！

```css
div {
    border:2px solid;
    border-radius:25px;
}
```

## box-shadow 属性

box-shadow属性可以设置一个或多个下拉阴影的框。

CSS3 中的 box-shadow 属性被用来添加阴影：

```css
div {
    box-shadow: 10px 10px 5px #888888;
}
box-shadow: h-shadow v-shadow blur spread color inset;
```

**注意：**boxShadow 属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值和一个可选的 inset 关键字来规定。省略长度的值是 0。

|    值    | 说明                                                         |
| :------: | :----------------------------------------------------------- |
| h-shadow | 必需的。水平阴影的位置。允许负值                             |
| v-shadow | 必需的。垂直阴影的位置。允许负值                             |
|   blur   | 可选。模糊距离                                               |
|  spread  | 可选。阴影的大小                                             |
|  color   | 可选。阴影的颜色。在[CSS颜色值](https://www.nowcoder.com/tutorial/10008/84fe71cfeab447f99f59fecf78c69ad0)寻找颜色值的完整列表 |
|  inset   | 可选。从外层的阴影（开始时）改变阴影内侧阴影                 |

## border-image 属性

有了 CSS3 的 border-image 属性，你可以使用图像创建一个边框。

border-image属性是速记属性用于设置 [border-image-source](https://www.nowcoder.com/tutorial/10011/44428b9d330b4e88a0de11adaba8c99a), [border-image-slice](https://www.nowcoder.com/tutorial/10011/4d7653b8f95540a9b462b01b333c6dd9), [border-image-width](https://www.nowcoder.com/tutorial/10011/e25e4a4d18b743018195fc2de6c6a3e8), [border-image-outset](https://www.nowcoder.com/tutorial/10011/1ae8502e749346ccb80285311121022a) 和[border-image-repeat](https://www.nowcoder.com/tutorial/10011/ebbfc916cfa747ac895e4c6dacfbd27c) 的值。

border-image 属性允许你指定一个图片作为边框！ 用于创建上文边框的原始图像。

```css
div {
    border-image:url(border.png) 30 30 round;
    -webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
    -o-border-image:url(border.png) 30 30 round; /* Opera */
}
border-image: source slice width outset repeat|initial|inherit;
```

|                              值                              | 描述                                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------- |
| [border-image-source](https://www.nowcoder.com/tutorial/10011/44428b9d330b4e88a0de11adaba8c99a) | 用于指定要用于绘制边框的图像的位置                           |
| [border-image-slice](https://www.nowcoder.com/tutorial/10011/4d7653b8f95540a9b462b01b333c6dd9) | 图像边界向内偏移                                             |
| [border-image-width](https://www.nowcoder.com/tutorial/10011/e25e4a4d18b743018195fc2de6c6a3e8) | 图像边界的宽度                                               |
| [border-image-outset](https://www.nowcoder.com/tutorial/10011/1ae8502e749346ccb80285311121022a) | 用于指定在边框外部绘制 border-image-area 的量                |
| [border-image-repeat](https://www.nowcoder.com/tutorial/10011/ebbfc916cfa747ac895e4c6dacfbd27c) | 用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。 |

# CSS3 背景

## background-image属性

CSS3中可以通过background-image属性添加背景图片。

不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。

```css
#example1 { 
    background-image: url(img_flwr.gif), url(paper.gif); 
    background-position: right bottom, left top; 
    background-repeat: no-repeat, repeat; 
}
```

可以给不同的图片设置多个不同的属性：

```css
#example1 {
    background: 
        url(img_flwr.gif) right bottom no-repeat, 
        url(paper.gif) left top repeat;
}
```

## background-size 属性

background-size指定背景图像的大小。CSS3以前，背景图像大小由图像的实际大小决定。

CSS3中可以指定背景图片，让我们重新在不同的环境中指定背景图片的大小。您可以指定像素或百分比大小。

你指定的大小是相对于父元素的宽度和高度的百分比的大小。

```css
div {
    background:url(img_flwr.gif);
    background-size:80px 60px;
    background-repeat:no-repeat;
}
```

伸展背景图像完全填充内容区域：

```css
div {
    background:url(img_flwr.gif);
    background-size:100% 100%;
    background-repeat:no-repeat;
}
background-size: length|percentage|cover|contain;
```

|     值     | 描述                                                         |
| :--------: | :----------------------------------------------------------- |
|   length   | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。 如果只给出一个值，第二个是设置为 **auto**(自动) |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。 如果只给出一个值，第二个是设置为"auto(自动)" |
|   cover    | 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 |
|  contain   | 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 |

## background-Origin属性

background-Origin属性指定了背景图像的位置区域。

background-Origin属性指定background-position属性应该是相对位置。

**注意** 如果背景图像background-attachment是"固定"，这个属性没有任何效果。

content-box, padding-box,和 border-box区域内可以放置背景图像。

在 content-box 中定位背景图片：

```css
div {
    background:url(img_flwr.gif);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
}
background-origin: padding-box|border-box|content-box;
```

|     值      | 描述                       |
| :---------: | :------------------------- |
| padding-box | 背景图像填充框的相对位置   |
| border-box  | 背景图像边界框的相对位置   |
| content-box | 背景图像的相对位置的内容框 |

## background-clip属性

CSS3中background-clip背景剪裁属性是从指定位置开始绘制。background-clip 属性指定背景绘制区域。

```css
#example1 { 
    border: 10px dotted black; 
    padding: 35px; 
    background: yellow; 
    background-clip: content-box; 
}
background-clip: border-box|padding-box|content-box;
```

|     值      | 说明                                             |
| :---------: | :----------------------------------------------- |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框）。 |
| padding-box | 背景绘制在衬距方框内（剪切成衬距方框）。         |
| content-box | 背景绘制在内容方框内（剪切成内容方框）。         |

# CSS3 渐变

CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。

以前，你必须使用图像来实现这些效果。但是，通过使用 CSS3 渐变（gradients），你可以减少下载的时间和宽带的使用。此外，渐变效果的元素在放大时看起来效果更好，因为渐变（gradient）是由浏览器生成的。

CSS3 定义了两种类型的渐变（gradients）：

- **线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向**
- **径向渐变（Radial Gradients）- 由它们的中心定义**

## CSS3 线性渐变

为了创建一个线性渐变，你必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以设置一个起点和一个方向（或一个角度）。

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

### 从上到下（默认情况下）

下面的实例演示了从顶部开始的线性渐变。起点是红色，慢慢过渡到蓝色：

```css
#grad1 {
		height: 200px;
		background-color: red;
		/* 浏览器不支持时显示 */
		background-image: linear-gradient(#e66465, #9198e5);
	}
```

### 从左到右

从左边开始的线性渐变。起点是红色，慢慢过渡到蓝色：

```css
#grad {
  height: 200px;
  background-image: linear-gradient(to right, red , yellow);
}
```

###  对角

你可以通过指定水平和垂直的起始位置来制作一个对角渐变。

下面的实例演示了从左上角开始（到右下角）的线性渐变。起点是红色，慢慢过渡到蓝色：

```css
#grad {
  height: 200px;
  background-image: linear-gradient(to bottom right, red, yellow);
}
```

### 使用角度

如果你想要在渐变的方向上做更多的控制，你可以定义一个角度，而不用预定义方向（to bottom、to top、to right、to left、to bottom right，等等）。

```css
background-image: linear-gradient(angle, color-stop1, color-stop2);
```

角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。

![渐变角度](E:\pogject\学习笔记\image\渐变角度.png)

但是，请注意很多浏览器(Chrome,Safari,fiefox等)的使用了旧的标准，即 0deg 将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。换算公式 **90 - x = y** 其中 x 为标准角度，y为非标准角度。

带有指定的角度的线性渐变：

```css
#grad {
  background-image: linear-gradient(-90deg, red, yellow);
}
```

### 使用多个颜色结点

带有多个颜色结点的从上到下的线性渐变：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		#grad1 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: linear-gradient(red, green, blue);
			/* 标准的语法（必须放在最后） */
		}

		#grad2 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet);
			/* 标准的语法（必须放在最后） */
		}

		#grad3 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: linear-gradient(red 10%, green 85%, blue 90%);
			/* 标准的语法（必须放在最后） */
		}
	</style>
</head>
<body>

	<h3>3 个颜色结点（均匀分布）</h3>
	<div id="grad1"></div>

	<h3>7 个颜色结点（均匀分布）</h3>
	<div id="grad2"></div>

	<h3>3 个颜色结点（不均匀分布）</h3>
	<div id="grad3"></div>

	<p><strong>注意：</strong> 当指定百分比时，颜色是不均匀分布。</p>
	<p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>

</body>
</html>
```

### 创建一个带有彩虹颜色和文本的线性渐变：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		#grad1 {
			height: 55px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
			/* 标准的语法（必须放在最后） */
		}
	</style>
</head>
<body>

	<div id="grad1" style="text-align:center;margin:auto;color:#888888;font-size:40px;font-weight:bold">
		渐变背景
	</div>

	<p><strong>注意：</strong> Internet Explorer 8 及之前的版本不支持渐变。</p>

</body>
</html>
```

### 使用透明度（transparent）

CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。

为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。

下面的实例演示了从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色：

```css
#grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```

### 重复的线性渐变

repeating-linear-gradient() 函数用于重复线性渐变：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		#grad1 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
		}

		#grad2 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: repeating-linear-gradient(45deg, red, yellow 7%, green 10%);
		}

		#grad3 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: repeating-linear-gradient(190deg, red, yellow 7%, green 10%);
		}

		#grad4 {
			height: 200px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: repeating-linear-gradient(90deg, red, yellow 7%, green 10%);
		}
	</style>
</head>
<body>

	<h1>重复的线性渐变</h1>

	<div id="grad1"></div>

	<p>45deg:</p>
	<div id="grad2"></div>

	<p>190deg:</p>
	<div id="grad3"></div>

	<p>90deg:</p>
	<div id="grad4"></div>

	<p><strong>注意:</strong> Internet Explorer 9 及更早版本的 IE 浏览器不支持线性渐变。</p>

</body>
</html>
```

## CSS3 径向渐变

径向渐变由它的中心定义。

为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

```css
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

### 颜色结点均匀分布（默认情况下）

```css
#grad {
  background-image: radial-gradient(red, yellow, green);
}
```

### 颜色结点不均匀分布

```css
#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
```

### 设置形状

shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。

形状为圆形的径向渐变：

```css
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}
```

### 不同尺寸大小关键字的使用

size 参数定义了渐变的大小。它可以是以下四个值：

- **closest-side**
- **farthest-side**
- **closest-corner**
- **farthest-corner**（默认）

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		#grad1 {
			height: 150px;
			width: 150px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
		}

		#grad2 {
			height: 150px;
			width: 150px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
		}

		#grad3 {
			height: 150px;
			width: 150px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: radial-gradient(closest-corner at 60% 55%, red, yellow, black);
		}

		#grad4 {
			height: 150px;
			width: 150px;
			background-color: red;
			/* 浏览器不支持的时候显示 */
			background-image: radial-gradient(farthest-corner at 60% 55%, red, yellow, black);
		}
	</style>
</head>
<body>

	<h3>径向渐变 - 不同尺寸大小关键字的使用</h3>

	<p><strong>closest-side：</strong></p>
	<div id="grad1"></div>

	<p><strong>farthest-side：</strong></p>
	<div id="grad2"></div>

	<p><strong>closest-corner：</strong></p>
	<div id="grad3"></div>

	<p><strong>farthest-corner（默认）：</strong></p>
	<div id="grad4"></div>

	<p><strong>注意：</strong> Internet Explorer 9 及之前的版本不支持渐变。</p>

</body>
</html>
```

### 重复的径向渐变

repeating-radial-gradient() 函数用于重复径向渐变：

```css
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```

# CSS3 文本效果

## 新文本属性

|                             属性                             | 描述                                                    | CSS  |
| :----------------------------------------------------------: | :------------------------------------------------------ | :--: |
| [hanging-punctuation](https://www.nowcoder.com/tutorial/10011/976804800c0343b88660e5755d455229) | 规定标点字符是否位于线框之外。                          |  3   |
| [punctuation-trim](https://www.nowcoder.com/tutorial/10011/37bc14bccc804483927fc806be4a2338) | 规定是否对标点字符进行修剪。                            |  3   |
| [text-align-last](https://www.nowcoder.com/tutorial/10011/51785468eaf54fc2a9c7cc13d96a0f9e) | 设置如何对齐最后一行或紧挨着强制换行符之前的行。        |  3   |
| [text-emphasis](https://www.nowcoder.com/tutorial/10011/c21f015a6a9d4856a5145f4fa5efd721) | 向元素的文本应用重点标记以及重点标记的前景色。          |  3   |
| [text-justify](https://www.nowcoder.com/tutorial/10011/3393b4455de5486eab85c521d0acea22) | 规定当 text-align 设置为 "justify" 时所使用的对齐方法。 |  3   |
| [text-outline](https://www.nowcoder.com/tutorial/10011/d209de63d7dd47708044683a06318860) | 规定文本的轮廓。                                        |  3   |
| [text-overflow](https://www.nowcoder.com/tutorial/10011/5647832b7cc44284a514508fe5f30442) | 规定当文本溢出包含元素时发生的事情。                    |  3   |
| [text-shadow](https://www.nowcoder.com/tutorial/10011/d2b3b178a8e44ab9b08b899a2e9fc9bd) | 向文本添加阴影。                                        |  3   |
| [text-wrap](https://www.nowcoder.com/tutorial/10011/7efe7e8ab4844b509c6d6ff723d8487d) | 规定文本的换行规则。                                    |  3   |
| [word-break](https://www.nowcoder.com/tutorial/10011/8678e02ca79d4ea9ae36287b13a5a4ce) | 规定非中日韩文本的换行规则。                            |  3   |
| [word-wrap](https://www.nowcoder.com/tutorial/10011/6507ac19ae254a3eb290b3fa6282f102) | 允许对长的不可分割的单词进行分割并换行到下一行。        |  3   |

## text-shadow属性

CSS3 中，text-shadow属性适用于文本阴影。您指定了水平阴影，垂直阴影，模糊的距离，以及阴影的颜色：

```css
h1 {
    text-shadow: 5px 5px 5px #FF0000;
}
```

## box-shadow属性

CSS3 中 CSS3 box-shadow 属性适用于盒子阴影。

```css
div {
    box-shadow: 10px 10px 5px #888888;
}
```

## text-overflow属性

CSS3文本溢出属性指定应向用户如何显示溢出内容。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div.test {
			white-space: nowrap;
			width: 12em;
			overflow: hidden;
			border: 1px solid #000000;
		}
	</style>
</head>
<body>

	<p>以下 div 容器内的文本无法完全显示，可以看到它被裁剪了。</p>
	<p>div 使用 &quot;text-overflow:ellipsis&quot;:</p>

	<div class="test" style="text-overflow:ellipsis;">This is some long text that will not fit in the box</div>
	<p>div 使用 &quot;text-overflow:clip&quot;:</p>
	<div class="test" style="text-overflow:clip;">This is some long text that will not fit in the box</div>
	<p>div 使用自定义字符串 &quot;text-overflow: &gt;&gt;&quot;(只在 Firefox 浏览器下有效):</p>
	<div class="test" style="text-overflow:'>>';">This is some long text that will not fit in the box</div>
</body>
</html>
```

## CSS3的换行

如果某个单词太长，不适合在一个区域内，它扩展到外面。

CSS3中，自动换行属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字。

```css
p {word-wrap:break-word;}
```

## CSS3 单词拆分换行

CSS3 单词拆分换行属性指定换行规则：

```css
p.test1 {
    word-break: keep-all;
}

p.test2 {
    word-break: break-all;
}
```

# CSS3 字体

**CSS3** 以前的版本，网页设计师不得不使用用户计算机上已经安装的字体。

使用 **CSS3**，网页设计师可以使用他/她喜欢的任何字体。当你发现您要使用的字体文件时，只需简单的将字体文件包含在网站中，它会自动下载给需要的用户。

您所选择的字体在新的 **CSS3** 版本有关于 **@font-face** 规则描述。您"自己的"的字体是在 **CSS3 @font-face** 规则中定义的。

## 使用您需要的字体

在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

*提示：URL请使用小写字母的字体，大写字母在IE中会产生意外的结果*

如需为 HTML 元素使用字体，请通过 font-family 属性来引用字体的名称 (myFirstFont)：

```css
@font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
div {
    font-family:myFirstFont;
}
```

## 使用粗体文本

您必须添加另一个包含粗体文字的@font-face规则：

```css
@font-face {
    font-family: myFirstFont;
    src: url(sansation_bold.woff);
    font-weight:bold;
}
```

## CSS3 字体描述

|    描述符     | 值                                                           | 描述                                                         |
| :-----------: | :----------------------------------------------------------- | :----------------------------------------------------------- |
|  font-family  | *name*                                                       | 必需。规定字体的名称。                                       |
|      src      | *URL*                                                        | 必需。定义字体文件的 URL。                                   |
| font-stretch  | normal condensed ultra-condensed extra-condensed semi-condensed expanded semi-expanded extra-expanded ultra-expanded | 可选。定义如何拉伸字体。 默认是 "normal"。                   |
|  font-style   | normal italic oblique                                        | 可选。定义字体的样式。 默认是 "normal"。                     |
|  font-weight  | normal bold 100 200 300 400 500 600 700 800 900              | 可选。定义字体的粗细。 默认是 "normal"。                     |
| unicode-range | *unicode-range*                                              | 可选。定义字体支持的 UNICODE 字符范围。 默认是 "U+0-10FFFF"。 |

# CSS3 2D 转换

CSS3 转换可以对元素进行移动、缩放、转动、拉长或拉伸。

转换的效果是让某个元素改变形状，大小和位置。您可以使用 2D 或 3D 转换来转换您的元素。

## translate() 方法

translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

```css
div {
    transform: translate(50px,100px);
    -ms-transform: translate(50px,100px); /* IE 9 */
    -webkit-transform: translate(50px,100px); /* Safari and Chrome */
}
```

translate值（50px，100px）是从左边元素移动50个像素，并从顶部移动100像素。

## rotate() 方法

rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。

```css
div {
    transform: rotate(30deg);
    -ms-transform: rotate(30deg); /* IE 9 */
    -webkit-transform: rotate(30deg); /* Safari and Chrome */
}
```

rotate值（30deg）元素顺时针旋转30度。

## scale() 方法

scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：

```css
-ms-transform:scale(2,3); /* IE 9 */
-webkit-transform: scale(2,3); /* Safari */
transform: scale(2,3); /* 标准语法 */
```

scale（2,3）转变宽度为原来的大小的2倍，和其原始大小3倍的高度。

## skew() 方法

```css
transform:skew(<angle> [,<angle>]);
```

包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。

- skewX(`<angle>`);表示只在X轴(水平方向)倾斜。
- skewY(`<angle>`);表示只在Y轴(垂直方向)倾斜。

```css
div {
    transform: skew(30deg,20deg);
    -ms-transform: skew(30deg,20deg); /* IE 9 */
    -webkit-transform: skew(30deg,20deg); /* Safari and Chrome */
}
```

skew(30deg,20deg) 元素在X轴和Y轴上倾斜20度30度。

## matrix() 方法

matrix()方法和2D变换方法合并成一个。

matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。

利用matrix()方法旋转div元素30°

```css
div {
    transform:matrix(0.866,0.5,-0.5,0.866,0,0);
    -ms-transform:matrix(0.866,0.5,-0.5,0.866,0,0); /* IE 9 */
    -webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0); /* Safari and Chrome */
}
```

## 新转换属性

### transform 属性

Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。

```css
div {
    transform:rotate(7deg);
    -ms-transform:rotate(7deg); /* IE 9 */
    -webkit-transform:rotate(7deg); /* Safari and Chrome */
}
transform: none|transform-functions;
```

|                              值                              |                  描述                   |
| :----------------------------------------------------------: | :-------------------------------------: |
|                             none                             |            定义不进行转换。             |
|               matrix(*n*,*n*,*n*,*n*,*n*,*n*)                |    定义 2D 转换，使用六个值的矩阵。     |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
|                      translate(*x*,*y*)                      |             定义 2D 转换。              |
|                   translate3d(*x*,*y*,*z*)                   |             定义 3D 转换。              |
|                       translateX(*x*)                        |       定义转换，只是用 X 轴的值。       |
|                       translateY(*y*)                        |       定义转换，只是用 Y 轴的值。       |
|                       translateZ(*z*)                        |     定义 3D 转换，只是用 Z 轴的值。     |
|                      scale(*x*[,*y*]?)                       |           定义 2D 缩放转换。            |
|                     scale3d(*x*,*y*,*z*)                     |           定义 3D 缩放转换。            |
|                         scaleX(*x*)                          |    通过设置 X 轴的值来定义缩放转换。    |
|                         scaleY(*y*)                          |    通过设置 Y 轴的值来定义缩放转换。    |
|                         scaleZ(*z*)                          |  通过设置 Z 轴的值来定义 3D 缩放转换。  |
|                       rotate(*angle*)                        |    定义 2D 旋转，在参数中规定角度。     |
|                rotate3d(*x*,*y*,*z*,*angle*)                 |             定义 3D 旋转。              |
|                       rotateX(*angle*)                       |        定义沿着 X 轴的 3D 旋转。        |
|                       rotateY(*angle*)                       |        定义沿着 Y 轴的 3D 旋转。        |
|                       rotateZ(*angle*)                       |        定义沿着 Z 轴的 3D 旋转。        |
|                  skew(*x-angle*,*y-angle*)                   |   定义沿着 X 和 Y 轴的 2D 倾斜转换。    |
|                        skewX(*angle*)                        |      定义沿着 X 轴的 2D 倾斜转换。      |
|                        skewY(*angle*)                        |      定义沿着 Y 轴的 2D 倾斜转换。      |
|                       perspective(*n*)                       |      为 3D 转换元素定义透视视图。       |

### transform-origin 属性

```css
div {
    transform: rotate(45deg);
    transform-origin:20% 40%;
    -ms-transform: rotate(45deg); /* IE 9 */
    -ms-transform-origin:20% 40%; /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
    -webkit-transform-origin:20% 40%; /* Safari and Chrome */
}
transform-origin: x-axis y-axis z-axis;
```

transform-Origin属性允许您更改转换元素的位置。2D转换元素可以改变元素的X和Y轴。 3D转换元素，还可以更改元素的Z轴。

|   值   |                             描述                             |
| :----: | :----------------------------------------------------------: |
| x-axis | 定义视图被置于 X 轴的何处。可能的值： left center right length % |
| y-axis | 定义视图被置于 Y 轴的何处。可能的值： top center bottom length % |
| z-axis |         定义视图被置于 Z 轴的何处。可能的值： length         |

## 2D 转换方法

|              函数               |                   描述                   |
| :-----------------------------: | :--------------------------------------: |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*) |     定义 2D 转换，使用六个值的矩阵。     |
|       translate(*x*,*y*)        |  定义 2D 转换，沿着 X 和 Y 轴移动元素。  |
|         translateX(*n*)         |    定义 2D 转换，沿着 X 轴移动元素。     |
|         translateY(*n*)         |    定义 2D 转换，沿着 Y 轴移动元素。     |
|         scale(*x*,*y*)          | 定义 2D 缩放转换，改变元素的宽度和高度。 |
|           scaleX(*n*)           |    定义 2D 缩放转换，改变元素的宽度。    |
|           scaleY(*n*)           |    定义 2D 缩放转换，改变元素的高度。    |
|         rotate(*angle*)         |     定义 2D 旋转，在参数中规定角度。     |
|    skew(*x-angle*,*y-angle*)    |    定义 2D 倾斜转换，沿着 X 和 Y 轴。    |
|         skewX(*angle*)          |      定义 2D 倾斜转换，沿着 X 轴。       |
|         skewY(*angle*)          |      定义 2D 倾斜转换，沿着 Y 轴。       |

# CSS3 3D 转换

CSS3 允许您使用 3D 转换来对元素进行格式化。

## rotateX() 方法

rotateX()方法，围绕其在一个给定度数X轴旋转的元素。

```css
div {
    transform: rotateX(120deg);
    -webkit-transform: rotateX(120deg); /* Safari 与 Chrome */
}
```

## rotateY() 方法

rotateY()方法，围绕其在一个给定度数Y轴旋转的元素。

```css
div {
    transform: rotateY(130deg);
    -webkit-transform: rotateY(130deg); /* Safari 与 Chrome */
}
```

## 转换属性

|                             属性                             |                 描述                 | CSS  |
| :----------------------------------------------------------: | :----------------------------------: | :--: |
| [transform](https://www.nowcoder.com/tutorial/10011/dbad0455be3f467197928acaf887e901) |      向元素应用 2D 或 3D 转换。      |  3   |
| [transform-origin](https://www.nowcoder.com/tutorial/10011/e9c5f333a97249d79755c41a7753f97b) |     允许你改变被转换元素的位置。     |  3   |
| [transform-style](https://www.nowcoder.com/tutorial/10011/2ea5a56b4b8b4545a34fd724b134c23c) | 规定被嵌套元素如何在 3D 空间中显示。 |  3   |
| [perspective](https://www.nowcoder.com/tutorial/10011/56e3d68cb7fb4da19e9f4d9adc2ab56c) |       规定 3D 元素的透视效果。       |  3   |
| [perspective-origin](https://www.nowcoder.com/tutorial/10011/74a2c7716b764ebd933ead4bff48d720) |       规定 3D 元素的底部位置。       |  3   |
| [backface-visibility](https://www.nowcoder.com/tutorial/10011/dcbfe9fb4d6146b590385ccd9b489cd7) |   定义元素在不面对屏幕时是否可见。   |  3   |

## 3D 转换方法

|                             函数                             |                   描述                    |
| :----------------------------------------------------------: | :---------------------------------------: |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*, *n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) |  定义 3D 转换，使用 16 个值的 4x4 矩阵。  |
|                   translate3d(*x*,*y*,*z*)                   |              定义 3D 转化。               |
|                       translateX(*x*)                        |    定义 3D 转化，仅使用用于 X 轴的值。    |
|                       translateY(*y*)                        |    定义 3D 转化，仅使用用于 Y 轴的值。    |
|                       translateZ(*z*)                        |    定义 3D 转化，仅使用用于 Z 轴的值。    |
|                     scale3d(*x*,*y*,*z*)                     |            定义 3D 缩放转换。             |
|                         scaleX(*x*)                          | 定义 3D 缩放转换，通过给定一个 X 轴的值。 |
|                         scaleY(*y*)                          | 定义 3D 缩放转换，通过给定一个 Y 轴的值。 |
|                         scaleZ(*z*)                          | 定义 3D 缩放转换，通过给定一个 Z 轴的值。 |
|                rotate3d(*x*,*y*,*z*,*angle*)                 |              定义 3D 旋转。               |
|                       rotateX(*angle*)                       |          定义沿 X 轴的 3D 旋转。          |
|                       rotateY(*angle*)                       |          定义沿 Y 轴的 3D 旋转。          |
|                       rotateZ(*angle*)                       |          定义沿 Z 轴的 3D 旋转。          |
|                       perspective(*n*)                       |       定义 3D 转换元素的透视视图。        |

# CSS3 过渡

## 过渡如何工作

CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

要实现这一点，必须规定两项内容：

- 指定要添加效果的CSS属性
- 指定效果的持续时间。

应用于宽度属性的过渡效果，时长为 2 秒：

```css
div {
    transition: width 2s;
    -webkit-transition: width 2s; /* Safari */
}
```

**注意：** 如果未指定的期限，transition将没有任何效果，因为默认值是0。

指定的CSS属性的值更改时效果会发生变化。一个典型CSS属性的变化是用户鼠标放在一个元素上时：

规定当鼠标指针悬浮(:hover)于 `<div>` 元素上时：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div {
			width: 100px;
			height: 100px;
			background: red;
			transition: width 2s;
			-webkit-transition: width 2s;
			/* Safari */
		}

		div:hover {
			width: 300px;
		}
	</style>
</head>
<body>

	<p><b>注意：</b>该实例无法在 Internet Explorer 9 及更早 IE 版本上工作。</p>

	<div></div>

	<p>鼠标移动到 div 元素上，查看过渡效果。</p>

</body>
</html>
```

## 多项改变

要添加多个样式的变换效果，添加的属性由逗号分隔：

添加了宽度，高度和转换效果：

```css
div {
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
```

## 过渡属性

|                             属性                             |                     描述                     | CSS  |
| :----------------------------------------------------------: | :------------------------------------------: | :--: |
| [transition](https://www.nowcoder.com/tutorial/10011/9e9d4291d496406abf6ae523999affb8) | 简写属性，用于在一个属性中设置四个过渡属性。 |  3   |
| [transition-property](https://www.nowcoder.com/tutorial/10011/c4fb0b0dd04345449565d546154f61f9) |       规定应用过渡的 CSS 属性的名称。        |  3   |
| [transition-duration](https://www.nowcoder.com/tutorial/10011/7ada4d9bc686469a955eabb367220655) |      定义过渡效果花费的时间。默认是 0。      |  3   |
| [transition-timing-function](https://www.nowcoder.com/tutorial/10011/cf74c11503b648fe9be8dd0eea14fc9c) |   规定过渡效果的时间曲线。默认是 "ease"。    |  3   |
| [transition-delay](https://www.nowcoder.com/tutorial/10011/78ec3bf160514d7f93795b1826fb50bd) |       规定过渡效果何时开始。默认是 0。       |  3   |

# CSS3 动画

CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。

动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。

## CSS3 @keyframes 规则

要创建 CSS3 动画，你需要了解 @keyframes 规则。

@keyframes 规则是创建动画。@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。

```css
@keyframes myfirst {
    from {background: red;}
    to {background: yellow;}
}

@-webkit-keyframes myfirst /* Safari 与 Chrome */ {
    from {background: red;}
    to {background: yellow;}
}
```

## 动画使用

当在 **@keyframes** 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。

指定至少这两个CSS3的动画属性绑定向一个选择器：

- 规定动画的名称
- 规定动画的时长

把 "myfirst" 动画捆绑到 div 元素，时长：5 秒：

```css
div {
    animation: myfirst 5s;
    -webkit-animation: myfirst 5s; /* Safari 与 Chrome */
}
```

**注意:** 您必须定义动画的名称和动画的持续时间。如果省略的持续时间，动画将无法运行，因为默认值是0。

当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变：

```css
@keyframes myfirst {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
}

@-webkit-keyframes myfirst { /* Safari 与 Chrome */ 
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
}
```

改变背景色和位置：

```css
@keyframes myfirst {
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
}

@-webkit-keyframes myfirst { /* Safari 与 Chrome */ 
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
}
```

## CSS3的动画属性

|                             属性                             | 描述                                                         | CSS  |
| :----------------------------------------------------------: | :----------------------------------------------------------- | :--: |
| [@keyframes](https://www.nowcoder.com/tutorial/10011/c28ea81c966e458a8a055f59e8b52db7) | 规定动画。                                                   |  3   |
| [animation](https://www.nowcoder.com/tutorial/10011/0f634c81b5d142eea6725d2224f98a80) | 所有动画属性的简写属性，除了 animation-play-state 属性。     |  3   |
| [animation-name](https://www.nowcoder.com/tutorial/10011/085233625d2d4ac991cadd951f33b067) | 规定 @keyframes 动画的名称。                                 |  3   |
| [animation-duration](https://www.nowcoder.com/tutorial/10011/88b0103a22054c05a6d2abbd10aaa0aa) | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。             |  3   |
| [animation-timing-function](https://www.nowcoder.com/tutorial/10011/d57c7fbfa0264f4aa7d308025a1a83fd) | 规定动画的速度曲线。默认是 "ease"。                          |  3   |
| [animation-fill-mode](https://www.nowcoder.com/tutorial/10011/c48f6da3163e495aa12f113306cdb578) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |  3   |
| [animation-delay](https://www.nowcoder.com/tutorial/10011/eec8b6a0d2ef435db70148f5f2c30c1b) | 规定动画何时开始。默认是 0。                                 |  3   |
| [animation-iteration-count](https://www.nowcoder.com/tutorial/10011/781743b4a2504c2ca04db66112434b9b) | 规定动画被播放的次数。默认是 1。                             |  3   |
| [animation-direction](https://www.nowcoder.com/tutorial/10011/215fde613e244ecaa81f62f2851d0a5e) | 规定动画是否在下一周期逆向地播放。默认是 "normal"。          |  3   |
| [animation-play-state](https://www.nowcoder.com/tutorial/10011/64328ec94e384f61a148103d148470f6) | 规定动画是否正在运行或暂停。默认是 "running"。               |      |

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div {
			width: 100px;
			height: 100px;
			background: red;
			position: relative;
			animation-name: myfirst;
			animation-duration: 5s;
			animation-timing-function: linear;
			animation-delay: 2s;
			animation-iteration-count: infinite;
			animation-direction: alternate;
			animation-play-state: running;
			/* Safari and Chrome: */
			-webkit-animation-name: myfirst;
			-webkit-animation-duration: 5s;
			-webkit-animation-timing-function: linear;
			-webkit-animation-delay: 2s;
			-webkit-animation-iteration-count: infinite;
			-webkit-animation-direction: alternate;
			-webkit-animation-play-state: running;
		}

		@keyframes myfirst {
			0% {
				background: red;
				left: 0px;
				top: 0px;
			}

			25% {
				background: yellow;
				left: 200px;
				top: 0px;
			}

			50% {
				background: blue;
				left: 200px;
				top: 200px;
			}

			75% {
				background: green;
				left: 0px;
				top: 200px;
			}

			100% {
				background: red;
				left: 0px;
				top: 0px;
			}
		}

		@-webkit-keyframes myfirst

		/* Safari and Chrome */
			{
			0% {
				background: red;
				left: 0px;
				top: 0px;
			}

			25% {
				background: yellow;
				left: 200px;
				top: 0px;
			}

			50% {
				background: blue;
				left: 200px;
				top: 200px;
			}

			75% {
				background: green;
				left: 0px;
				top: 200px;
			}

			100% {
				background: red;
				left: 0px;
				top: 0px;
			}
		}
	</style>
</head>
<body>

	<p><b>注意:</b> 该实例在 Internet Explorer 9 及更早 IE 版本是无效的。</p>

	<div></div>

</body>
</html>
```

# CSS3 多列

## CSS3 多列属性

|                             属性                             |                   描述                   |
| :----------------------------------------------------------: | :--------------------------------------: |
| [column-count](https://www.nowcoder.com/tutorial/10011/69baf9478b15405b9fb9d592b682d6e7) |        指定元素应该被分割的列数。        |
| [column-fill](https://www.nowcoder.com/tutorial/10011/eae377b668864fa79a57fe9af0842b4b) |              指定如何填充列              |
| [column-gap](https://www.nowcoder.com/tutorial/10011/7100840231b14a3990b8ce1e8a20e483) |           指定列与列之间的间隙           |
| [column-rule](https://www.nowcoder.com/tutorial/10011/6f065ec6f20b4675b882e1f7762f0db5) |      所有 column-rule-* 属性的简写       |
| [column-rule-color](https://www.nowcoder.com/tutorial/10011/4ab67085325e43eeb16baed30b970a9e) |           指定两列间边框的颜色           |
| [column-rule-style](https://www.nowcoder.com/tutorial/10011/717e3fcedff843da977b5a724420d026) |           指定两列间边框的样式           |
| [column-rule-width](https://www.nowcoder.com/tutorial/10011/de6a518bcb914ab5b889188ac830f560) |           指定两列间边框的厚度           |
| [column-span](https://www.nowcoder.com/tutorial/10011/3f951c61a0914ab28891394de06b296c) |           指定元素要跨越多少列           |
| [column-width](https://www.nowcoder.com/tutorial/10011/df662d5e5ffa4547afa0a749081a10b4) |               指定列的宽度               |
| [columns](https://www.nowcoder.com/tutorial/10011/e256a850e24e4bc5a820e45a58c1a6b2) | 设置 column-width 和 column-count 的简写 |

## CSS3 创建多列

`column-count` 属性指定了需要分割的列数。

以下实例将 `<div>` 元素中的文本分为 3 列：

```css
div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
}
```

## CSS3 多列中列与列间的间隙

`column-gap` 属性指定了列与列间的间隙。

以下实例指定了列与列间的间隙为 40 像素：

```css
		.newspaper {
			-moz-column-count: 3;
			/* Firefox */
			-webkit-column-count: 3;
			/* Safari and Chrome */
			column-count: 3;

			-moz-column-gap: 40px;
			/* Firefox */
			-webkit-column-gap: 40px;
			/* Safari and Chrome */
			column-gap: 40px;
		}
```

## CSS3 列边框

`column-rule-style` 属性指定了列与列间的边框样式：

```css
div {
    -webkit-column-rule-style: solid; /* Chrome, Safari, Opera */
    -moz-column-rule-style: solid; /* Firefox */
    column-rule-style: solid;
}
```

`column-rule-width` 属性指定了两列的边框厚度：

```css
div {
    -webkit-column-rule-width: 1px; /* Chrome, Safari, Opera */
    -moz-column-rule-width: 1px; /* Firefox */
    column-rule-width: 1px;
}
```

`column-rule-color` 属性指定了两列的边框颜色：

```css
div {
    -webkit-column-rule-color: lightblue; /* Chrome, Safari, Opera */
    -moz-column-rule-color: lightblue; /* Firefox */
    column-rule-color: lightblue;
}
```

`column-rule` 属性是 column-rule-* 所有属性的简写。

以下实例设置了列直接的边框的厚度，样式及颜色：

```css
div {
    -webkit-column-rule: 1px solid lightblue; /* Chrome, Safari, Opera */
    -moz-column-rule: 1px solid lightblue; /* Firefox */
    column-rule: 1px solid lightblue;
}
```

## 指定元素跨越多少列

以下实例指定 `<h2>` 元素跨越所有列：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.newspaper {
			column-count: 3;
			-moz-column-count: 3;
			/* Firefox */
			-webkit-column-count: 3;
			/* Safari and Chrome */

		}

		h2 {
			column-span: all;
			-webkit-column-span: all;
			/* Safari and Chrome */
		}
	</style>
</head>
<body>

	<p><b>注意:</b> Internet Explorer 9及更早 IE 版本浏览器不支持 column-count 属性。</p>

	<div class="newspaper">
		<h2>英国维斯米斯特教堂碑文</h2>
		当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。
	</div>

</body>
</html>
```

## 指定列的宽度

`column-width` 属性指定了列的宽度。

```css
div {
    -webkit-column-width: 100px; /* Chrome, Safari, Opera */
    column-width: 100px;
}
```

# CSS3 用户界面

在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。

## CSS3 调整尺寸(Resizing)

CSS3中，resize属性指定一个元素是否应该由用户去调整大小。

这个 div 元素由用户调整大小。 (在 Firefox 4+, Chrome, 和 Safari中)

由用户指定一个div元素尺寸大小：

```css
div {
    resize:both;
    overflow:auto;
}
```

## CSS3 方框大小调整(Box Sizing)

box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。

规定两个并排的带边框方框：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div.container {
			width: 30em;
			border: 1em solid;
		}

		div.box {
			box-sizing: border-box;
			-moz-box-sizing: border-box;
			/* Firefox */
			width: 50%;
			border: 1em solid red;
			float: left;
		}
	</style>
</head>
<body>

	<div class="container">
		<div class="box">这个 div 占据了左边的一半。</div>
		<div class="box">这个 div 占据了右边的一半。</div>
	</div>

</body>
</html>
```

## CSS3 外形修饰（outline-offset ）

outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

轮廓与边框有两点不同：

- 轮廓不占用空间
- 轮廓可能是非矩形

规定边框边缘之外 15 像素处的轮廓：

```css
		div {
			margin: 20px;
			width: 150px;
			padding: 10px;
			height: 70px;
			border: 2px solid black;
			outline: 2px solid red;
			outline-offset: 15px;
		}
```

## 新的用户界面特性

|                             属性                             | 说明                                           | CSS  |
| :----------------------------------------------------------: | :--------------------------------------------- | :--: |
| [appearance](https://www.nowcoder.com/tutorial/10011/0bb21544a48b4add81454f0468d61dc7) | 允许您使一个元素的外观像一个标准的用户界面元素 |  3   |
| [box-sizing](https://www.nowcoder.com/tutorial/10011/226e8e1421164e9188bc3a9ed0ab0ef0) | 允许你以适应区域而用某种方式定义某些元素       |  3   |
| [icon](https://www.nowcoder.com/tutorial/10011/b03fe250e5334de9818c4fa3629f094a) | 为创作者提供了将元素设置为图标等价物的能力。   |  3   |
| [nav-down](https://www.nowcoder.com/tutorial/10011/4b997fb61be64663a659233ee6102f8f) | 指定在何处使用箭头向下导航键时进行导航         |  3   |
| [nav-index](https://www.nowcoder.com/tutorial/10011/1353e1625030433f81eaafe194fe58dd) | 指定一个元素的Tab的顺序                        |  3   |
| [nav-left](https://www.nowcoder.com/tutorial/10011/81b8e3fbeeb14083abc407f0b8658118) | 指定在何处使用左侧的箭头导航键进行导航         |  3   |
| [nav-right](https://www.nowcoder.com/tutorial/10011/a0501b89e86a486b867e76121a3a5c27) | 指定在何处使用右侧的箭头导航键进行导航         |  3   |
| [nav-up](https://www.nowcoder.com/tutorial/10011/31ffab73bd1e48be88f0bb9810bd6970) | 指定在何处使用箭头向上导航键时进行导航         |  3   |
| [outline-offset](https://www.nowcoder.com/tutorial/10011/c01dc8aa846042248beecd6cfce15fd9) | 外轮廓修饰并绘制超出边框的边缘                 |  3   |
| [resize](https://www.nowcoder.com/tutorial/10011/0a824ad7f68e4e2cb1aa8c0aab964548) | 指定一个元素是否是由用户调整大小               |  3   |

# CSS 图片

## 圆角图片

### 圆角图片

```css
img {
    border-radius: 8px;
}
```

### 椭圆形图片

```css
img {
    border-radius: 50%;
}
```

## 缩略图

使用 `border` 属性来创建缩略图。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		a {
			display: inline-block;
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 5px;
			transition: 0.3s;
		}

		a:hover {
			box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
		}
	</style>
</head>
<body>

	<h2>缩略图作为连接</h2>
	<p>我们使用 border 属性来创建缩略图。在图片外层添加一个链接。</p>
	<p>点击图片查看效果：</p>

	<a target="_blank" href="//static.nowcoder.com/tutorial/web-examples/img/paris.jpg">
		<img src="//static.nowcoder.com/tutorial/web-examples/img/paris.jpg" alt="Paris" width="400" height="300">
	</a>

</body>
</html>
```

## 响应式图片

响应式图片会自动适配各种尺寸的屏幕。实例中，你可以通过重置浏览器大小查看效果。

如果你需要自由缩放图片，且图片放大的尺寸不大于其原始的最大值，则可使用以下代码：

```css
img {
    max-width: 100%;
    height: auto;
}
```

## 图片文本

如何定位图片文本：

### **左上角**

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.container {
			position: relative;
		}

		.topleft {
			position: absolute;
			top: 8px;
			left: 16px;
			font-size: 18px;
		}

		img {
			width: 100%;
			height: auto;
			opacity: 0.3;
		}
	</style>
</head>
<body>

	<h2>图片文本</h2>
	<p>在图片左上角添加文本信息:</p>

	<div class="container">
		<img src="//static.nowcoder.com/tutorial/web-examples/img/trolltunga.jpg" alt="Norway" width="1000" height="300">
		<div class="topleft">左上角</div>
	</div>

</body>
</html>
```

### **右下角**

```css
.container {
    position: relative;
}

.bottomright {
    position: absolute;
    bottom: 8px;
    right: 16px;
    font-size: 18px;
}
```

### **居中**

```css
.container {
    position: relative;
}

.center {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 18px;
    margin-top:-9px;
}
```

## 卡片式图片

```css
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		body {
			margin: 25px;
		}

		div.polaroid {
			width: 80%;
			background-color: white;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			margin-bottom: 25px;
		}

		div.container {
			text-align: center;
			padding: 10px 20px;
		}
	</style>
</head>
<body>

	<h2>响应式卡片</h2>

	<div class="polaroid">
		<img src="//static.nowcoder.com/tutorial/web-examples/img/rock600x400.jpg" alt="Norway" style="width:100%">
		<div class="container">
			<p>The Troll's tongue in Hardanger, Norway</p>
		</div>
	</div>

	<div class="polaroid">
		<img src="//static.nowcoder.com/tutorial/web-examples/img/lights600x400.jpg" alt="Norway" style="width:100%">
		<div class="container">
			<p>Northern Lights in Norway</p>
		</div>
	</div>

</body>
</html>
```

## 图片滤镜

CSS `filter` 属性用为元素添加可视效果 (例如：模糊与饱和度) 。

**注意:** Internet Explorer 或 Safari 5.1 (及更早版本) 不支持该属性。

修改所有图片的颜色为黑白 (100% 灰度)：

```css
img {
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
}
```

## 响应式图片相册

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div.img {
			border: 1px solid #ccc;
		}

		div.img:hover {
			border: 1px solid #777;
		}

		div.img img {
			width: 100%;
			height: auto;
		}

		div.desc {
			padding: 15px;
			text-align: center;
		}

		* {
			box-sizing: border-box;
		}

		.responsive {
			padding: 0 6px;
			float: left;
			width: 24.99999%;
		}

		@media only screen and (max-width: 700px) {
			.responsive {
				width: 49.99999%;
				margin: 6px 0;
			}
		}

		@media only screen and (max-width: 500px) {
			.responsive {
				width: 100%;
			}
		}

		.clearfix:after {
			content: "";
			display: table;
			clear: both;
		}
	</style>
</head>
<body>

	<h2 style="text-align:center">响应式图片相册</h2>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/img_fjords.jpg" alt="Trolltunga Norway" width="300" height="200">
			</a>
			<div class="desc">Add a description of the image here</div>
		</div>
	</div>


	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/img_forest.jpg" alt="Forest" width="600" height="400">
			</a>
			<div class="desc">Add a description of the image here</div>
		</div>
	</div>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/img_lights.jpg" alt="Northern Lights" width="600" height="400">
			</a>
			<div class="desc">Add a description of the image here</div>
		</div>
	</div>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/img_mountains.jpg" alt="Mountains" width="600" height="400">
			</a>
			<div class="desc">Add a description of the image here</div>
		</div>
	</div>

	<div class="clearfix"></div>

	<div style="padding:6px;">

		<h4>重置浏览器大小查看效果</h4>
	</div>

</body>
</html>
```

## 图片 Modal(模态)

本实例演示了如何结合 CSS 和 JavaScript 来一起渲染图片。

首先，我们使用 CSS 来创建 modal 窗口 (对话框), 默认是隐藏的。

然后，我们使用 JavaScript 来显示模态窗口，当我们点击图片时，图片会在弹出的窗口中显示：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		#myImg {
			border-radius: 5px;
			cursor: pointer;
			transition: 0.3s;
		}

		#myImg:hover {
			opacity: 0.7;
		}

		/* The Modal (background) */
		.modal {
			display: none;
			/* Hidden by default */
			position: fixed;
			/* Stay in place */
			z-index: 1;
			/* Sit on top */
			padding-top: 100px;
			/* Location of the box */
			left: 0;
			top: 0;
			width: 100%;
			/* Full width */
			height: 100%;
			/* Full height */
			overflow: auto;
			/* Enable scroll if needed */
			background-color: rgb(0, 0, 0);
			/* Fallback color */
			background-color: rgba(0, 0, 0, 0.9);
			/* Black w/ opacity */
		}

		/* Modal Content (image) */
		.modal-content {
			margin: auto;
			display: block;
			width: 80%;
			max-width: 700px;
		}

		/* Caption of Modal Image */
		#caption {
			margin: auto;
			display: block;
			width: 80%;
			max-width: 700px;
			text-align: center;
			color: #ccc;
			padding: 10px 0;
			height: 150px;
		}

		/* Add Animation */
		.modal-content,
		#caption {
			-webkit-animation-name: zoom;
			-webkit-animation-duration: 0.6s;
			animation-name: zoom;
			animation-duration: 0.6s;
		}

		@-webkit-keyframes zoom {
			from {
				-webkit-transform: scale(0)
			}

			to {
				-webkit-transform: scale(1)
			}
		}

		@keyframes zoom {
			from {
				transform: scale(0.1)
			}

			to {
				transform: scale(1)
			}
		}

		/* The Close Button */
		.close {
			position: absolute;
			top: 15px;
			right: 35px;
			color: #f1f1f1;
			font-size: 40px;
			font-weight: bold;
			transition: 0.3s;
		}

		.close:hover,
		.close:focus {
			color: #bbb;
			text-decoration: none;
			cursor: pointer;
		}

		/* 100% Image Width on Smaller Screens */
		@media only screen and (max-width: 700px) {
			.modal-content {
				width: 100%;
			}
		}
	</style>
</head>
<body>

	<h2>图片模态框</h2>
	<p>本实例演示了如何结合 CSS 和 JavaScript 来一起渲染图片。</p>
	<p>
		首先，我们使用 CSS 来创建 modal 窗口 (对话框), 默认是隐藏的。<p>
			<p>然后，我们使用 JavaScript 来显示模态窗口，当我们点击图片时，图片会在弹出的窗口中显示：</p>
			<img id="myImg" src="//static.nowcoder.com/tutorial/web-examples/img/img_lights.jpg" alt="Northern Lights, Norway" width="300" height="200">

			<!-- The Modal -->
			<div id="myModal" class="modal">
				<span class="close">×</span>
				<img class="modal-content" id="img01">
				<div id="caption"></div>
			</div>

			<script>
				// 获取模态窗口
				var modal = document.getElementById('myModal');

				// 获取图片模态框，alt 属性作为图片弹出中文本描述
				var img = document.getElementById('myImg');
				var modalImg = document.getElementById("img01");
				var captionText = document.getElementById("caption");
				img.onclick = function() {
					modal.style.display = "block";
					modalImg.src = this.src;
					modalImg.alt = this.alt;
					captionText.innerHTML = this.alt;
				}

				// 获取 <span> 元素，设置关闭模态框按钮
				var span = document.getElementsByClassName("close")[0];

				// 点击 <span> 元素上的 (x), 关闭模态框
				span.onclick = function() {
					modal.style.display = "none";
				}
			</script>

</body>
</html>
```

# CSS 按钮

```css
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
```

## 按钮颜色

```css
.button1 {background-color: #4CAF50;} /* Green */
.button2 {background-color: #008CBA;} /* Blue */
.button3 {background-color: #f44336;} /* Red */
.button4 {background-color: #e7e7e7; color: black;} /* Gray */
.button5 {background-color: #555555;} /* Black */
```

## 按钮大小

```css
.button1 {font-size: 10px;}
.button2 {font-size: 12px;}
.button3 {font-size: 16px;}
.button4 {font-size: 20px;}
.button5 {font-size: 24px;}
```

## 圆角按钮

```css
.button1 {border-radius: 2px;}
.button2 {border-radius: 4px;}
.button3 {border-radius: 8px;}
.button4 {border-radius: 12px;}
.button5 {border-radius: 50%;}
```

## 按钮边框颜色

```css
.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50; /* Green */
}
```

## 鼠标悬停按钮

我们可以使用 `:hover` 选择器来修改鼠标悬停在按钮上的样式。

**提示:** 我们可以使用 `transition-duration` 属性来设置 "hover" 效果的速度。

```css
.button {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
```

## 按钮阴影

```css
.button1 {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
```

## 禁用按钮

我们可以使用 `opacity` 属性为按钮添加透明度 (看起来类似 "disabled" 属性效果)。

**提示:** 我们可以添加 `cursor` 属性并设置为 "not-allowed" 来设置一个禁用的图片。

```
.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```

## 按钮宽度

默认情况下，按钮的大小有按钮上的文本内容决定( 根据文本内容匹配长度 )。 我们可以使用 `width` 属性来设置按钮的宽度。

**提示:** 如果要设置固定宽度可以使用像素 (px) 为单位，如果要设置响应式的按钮可以设置为百分比。

```css
.button1 {width: 250px;}
.button2 {width: 50%;}
.button3 {width: 100%;}
```

## 按钮组

移除外边距并添加 `float:left` 来设置按钮组。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.button {
			background-color: #4CAF50;
			/* Green */
			border: none;
			color: white;
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			cursor: pointer;
			float: left;
		}

		.button:hover {
			background-color: #3e8e41;
		}
	</style>
</head>
<body>

	<h2>按钮组</h2>
	<p>移除外边距并添加 float:left 来设置按钮组:</p>

	<button class="button">Button</button>
	<button class="button">Button</button>
	<button class="button">Button</button>
	<button class="button">Button</button>

	<p style="clear:both"><br>记住要清除浮动，否则下一个 p 元素的按钮也会显示在同一行。</p>

</body>
</html>
```

## 带边框按钮组

```css
.button {
    float: left;
    border: 1px solid green
}
```

## 按钮动画

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.button {
			display: inline-block;
			border-radius: 4px;
			background-color: #f4511e;
			border: none;
			color: #FFFFFF;
			text-align: center;
			font-size: 28px;
			padding: 20px;
			width: 200px;
			transition: all 0.5s;
			cursor: pointer;
			margin: 5px;
		}

		.button span {
			cursor: pointer;
			display: inline-block;
			position: relative;
			transition: 0.5s;
		}

		.button span:after {
			content: '»';
			position: absolute;
			opacity: 0;
			top: 0;
			right: -20px;
			transition: 0.5s;
		}

		.button:hover span {
			padding-right: 25px;
		}

		.button:hover span:after {
			opacity: 1;
			right: 0;
		}
	</style>
</head>
<body>

	<h2>按钮动画</h2>

	<button class="button" style="vertical-align:middle"><span>Hover </span></button>

</body>
</html>
```

## 点击时添加 "波纹" 效果

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.button {
			position: relative;
			background-color: #4CAF50;
			border: none;
			font-size: 28px;
			color: #FFFFFF;
			padding: 20px;
			width: 200px;
			text-align: center;
			-webkit-transition-duration: 0.4s;
			/* Safari */
			transition-duration: 0.4s;
			text-decoration: none;
			overflow: hidden;
			cursor: pointer;
		}

		.button:after {
			content: "";
			background: #90EE90;
			display: block;
			position: absolute;
			padding-top: 300%;
			padding-left: 350%;
			margin-left: -20px !important;
			margin-top: -120%;
			opacity: 0;
			transition: all 0.8s
		}

		.button:active:after {
			padding: 0;
			margin: 0;
			opacity: 1;
			transition: 0s
		}
	</style>
</head>
<body>

	<h2>按钮动画 - 波纹效果</h2>

	<button class="button">Click Me</button>

</body>
</html>
```

## 点击时添加 "压下" 效果

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.button {
			display: inline-block;
			padding: 15px 25px;
			font-size: 24px;
			cursor: pointer;
			text-align: center;
			text-decoration: none;
			outline: none;
			color: #fff;
			background-color: #4CAF50;
			border: none;
			border-radius: 15px;
			box-shadow: 0 9px #999;
		}

		.button:hover {
			background-color: #3e8e41
		}

		.button:active {
			background-color: #3e8e41;
			box-shadow: 0 5px #666;
			transform: translateY(4px);
		}
	</style>
</head>
<body>

	<h2>按钮动画 - "按压效果"</h2>

	<button class="button">Click Me</button>

</body>
</html>
```

# CSS 分页

## 简单分页

如果你的网站有很多个页面，你就需要使用分页来为每个页面做导航。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul.pagination {
			display: inline-block;
			padding: 0;
			margin: 0;
		}

		ul.pagination li {
			display: inline;
		}

		ul.pagination li a {
			color: black;
			float: left;
			padding: 8px 16px;
			text-decoration: none;
		}
	</style>
</head>
<body>

	<h2>简单的分页</h2>
	<ul class="pagination">
		<li><a href="#">«</a></li>
		<li><a href="#">1</a></li>
		<li><a class="active" href="#">2</a></li>
		<li><a href="#">3</a></li>
		<li><a href="#">4</a></li>
		<li><a href="#">5</a></li>
		<li><a href="#">6</a></li>
		<li><a href="#">7</a></li>
		<li><a href="#">»</a></li>
	</ul>

</body>
</html>
```

## 点击及鼠标悬停分页样式

```css
ul.pagination li a.active {
    background-color: #4CAF50;
    color: white;
}

ul.pagination li a:hover:not(.active) {background-color: #ddd;}
```

## 圆角样式

可以使用 `border-radius` 属性为选中的页码来添加圆角样式：

```css
ul.pagination li a {
    border-radius: 5px;
}

ul.pagination li a.active {
    border-radius: 5px;
}
```

## 鼠标悬停过渡效果

```css
ul.pagination li a {
    transition: background-color .3s;
}
```

## 带边框分页

```css
ul.pagination li a {
    border: 1px solid #ddd; /* Gray */
}
```

## 圆角边框

**提示:** 在第一个分页链接和最后一个分页链接添加圆角：

```css
.pagination li:first-child a {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.pagination li:last-child a {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
```

## 分页间隔

**提示:** 你可以使用 `margin` 属性来为每个页码直接添加空格：

```css
ul.pagination li a {
    margin: 0 4px; /* 0 对应的是头部与底部，可以修改它看看效果 */
}
```

## 分页字体大小

```css
ul.pagination li a {
    font-size: 22px;
}
```

## 居中分页

```css
div.center {
    text-align: center;
}
```

## 面包屑导航

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul.breadcrumb {
			padding: 8px 16px;
			list-style: none;
			background-color: #eee;
		}

		ul.breadcrumb li {
			display: inline;
		}

		ul.breadcrumb li+li:before {
			padding: 8px;
			color: black;
			content: "/\00a0";
		}

		ul.breadcrumb li a {
			color: green;
		}
	</style>
</head>
<body>

	<h2>面包屑导航</h2>
	<ul class="breadcrumb">
		<li><a href="#">首页 </a></li>
		<li><a href="#">前端 </a></li>
		<li><a href="#">HTML 教程 </a></li>
		<li>HTML 段落</li>
	</ul>

</body>
</html>
```

# CSS3 框大小

CSS3 `box-sizing` 属性可以设置 width 和 height 属性中包含了 padding(内边距) 和 border(边框)。

## 不使用 CSS3 box-sizing 属性

默认情况下，元素的宽度与高度计算方式如下：

**width(宽) + padding(内边距) + border(边框) = 元素实际宽度**

**height(高) + padding(内边距) + border(边框) = 元素实际高度**

这就意味着我们在设置元素的 width/height 时，元素真实展示的高度与宽度会更大(因为元素的边框与内边距也会计算在 width/height 中)。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.div1 {
			width: 300px;
			height: 100px;
			border: 1px solid blue;
		}

		.div2 {
			width: 300px;
			height: 100px;
			padding: 50px;
			border: 1px solid red;
		}
	</style>
</head>
<body>

	<div class="div1">这个是个较小的框 (width 为 300px ，height 为 100px)。</div>
	<br>
	<div class="div2">这个是个较大的框 (width 为 300px ，height 为 100px)。</div>

</body>
</html>
```

使用这种方式如果想要获得较小的那个框且包含内边距，就不得不考虑到边框和内边距的宽度。

CSS3 的 `box-sizing` 属性很好的解决了这个问题。

## 使用 CSS3 box-sizing 属性

CSS3 `box-sizing` 属性在一个元素的 width 和 height 中包含 padding(内边距) 和 border(边框)。

如果在元素上设置了 `box-sizing: border-box;` 则 padding(内边距) 和 border(边框) 也包含在 width 和 height 中：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.div1 {
			width: 300px;
			height: 100px;
			border: 1px solid blue;
			box-sizing: border-box;
		}

		.div2 {
			width: 300px;
			height: 100px;
			padding: 50px;
			border: 1px solid red;
			box-sizing: border-box;
		}
	</style>
</head>
<body>

	<div class="div1">两个 div 现在是一样大小的!</div>
	<br>
	<div class="div2">牛客教程!</div>

</body>
</html>
```

从结果上看 `box-sizing: border-box;` 效果更好，也正是很多开发人员需要的效果。

以下代码可以让所有元素以更直观的方式展示大小。很多浏览器已经支持 `box-sizing: border-box;` (但是并非所有 - 这就是为什么 input 和 text 元素设置了 width: 100%; 后的宽度却不一样)。

所有元素使用 box-sizing 是比较推荐的：

```css
* {
    box-sizing: border-box;
}
```

# CSS3 弹性盒子

## 弹性盒子(Flex Box)

弹性盒子是 CSS3 的一种新的布局模式。

CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。

## CSS3 弹性盒子内容

弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。

弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。

弹性容器内包含了一个或多个弹性子元素。

**注意：** 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局。

弹性子元素通常在弹性盒子内一行显示。默认情况每个容器只有一行。

以下元素展示了弹性子元素在一行内显示，从左到右：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 100px;
			height: 100px;
			margin: 10px;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

如果我们设置 `direction` 属性为 `rtl` (right-to-left),弹性子元素的排列方式也会改变，页面布局也跟着改变：

```css
body {
    direction: rtl;
}

.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}

.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    height: 100px;
    margin: 10px;
}
```

## flex-direction

`flex-direction` 属性指定了弹性子元素在父容器中的位置。

```css
flex-direction: row | row-reverse | column | column-reverse
```

`flex-direction`的值有:

- row：横向从左到右排列（左对齐），默认的排列方式。
- row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
- column：纵向排列。
- column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。

以下实例演示了 `row-reverse` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `column-reverse` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

## justify-content 属性

内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。

justify-content 语法如下：

```css
justify-content: flex-start | flex-end | center | space-between | space-around
```

各个值解析:

- flex-start：

  弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。

- flex-end：

  弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。

- center：

  弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。

- space-between：

  弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。

- space-around：

  弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。

以下实例演示了 `center` 的使用：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			-webkit-justify-content: center;
			justify-content: center;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 100px;
			height: 100px;
			margin: 10px;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

以下实例演示了 `flex-end` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `space-between` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `space-around` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

## align-items 属性

`align-items` 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

```css
align-items: flex-start | flex-end | center | baseline | stretch
```

各个值解析:

- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

以下实例演示了 `stretch(默认值)` 的使用：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			-webkit-align-items: stretch;
			align-items: stretch;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 100px;
			margin: 10px;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

以下实例演示了 `flex-start` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `flex-end` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `center` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `baseline` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: baseline;
    align-items: baseline;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
```

## flex-wrap 属性

**flex-wrap** 属性用于指定弹性盒子的子元素换行方式。

```css
flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
```

各个值解析:

- **nowrap** - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
- **wrap** - 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
- **wrap-reverse** -反转 wrap 排列。

以下实例演示了 `nowrap` 的使用：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			-webkit-flex-wrap: nowrap;
			flex-wrap: nowrap;
			width: 300px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 100px;
			height: 100px;
			margin: 10px;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

以下实例演示了 `wrap` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 300px;
    height: 250px;
    background-color: lightgrey;
}
```

以下实例演示了 `wrap-reverse` 的使用：

```css
.flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
    width: 300px;
    height: 250px;
    background-color: lightgrey;
}
```

## align-content 属性

`align-content` 属性用于修改 `flex-wrap` 属性的行为。类似于 `align-items`, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch
```

各个值解析:

- `stretch` - 默认。各行将会伸展以占用剩余的空间。
- `flex-start` - 各行向弹性盒容器的起始位置堆叠。
- `flex-end` - 各行向弹性盒容器的结束位置堆叠。
- `center` -各行向弹性盒容器的中间位置堆叠。
- `space-between` -各行在弹性盒容器中平均分布。
- `space-around` - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。

以下实例演示了 `center` 的使用：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			-webkit-flex-wrap: wrap;
			flex-wrap: wrap;
			-webkit-align-content: center;
			align-content: center;
			width: 300px;
			height: 300px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 100px;
			height: 100px;
			margin: 10px;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

## 弹性子元素属性

### 排序

```css
order: <integer>
```

各个值解析:

- `<integer>`：用整数值来定义排列顺序，数值小的排在前面。可以为负值。

`order` 属性设置弹性容器内弹性子元素的属性：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 100px;
			height: 100px;
			margin: 10px;
		}

		.first {
			-webkit-order: -1;
			order: -1;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item first">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

### 对齐

设置"margin"值为"auto"值，自动获取弹性容器中剩余的空间。所以设置垂直方向margin值为"auto"，可以使弹性子元素在弹性容器的两上轴方向都完全居中。

以下实例在第一个弹性子元素上设置了 `margin-right: auto;` 。 它将剩余的空间放置在元素的右侧：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 75px;
			height: 75px;
			margin: 10px;
		}

		.flex-item:first-child {
			margin-right: auto;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">flex item 1</div>
		<div class="flex-item">flex item 2</div>
		<div class="flex-item">flex item 3</div>
	</div>

</body>
</html>
```

### 完美的居中

以下实例将完美解决我们平时碰到的居中问题。

使用弹性盒子，居中变的很简单，只想要设置 `margin: auto;` 可以使得弹性子元素在两上轴方向上完全居中：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 75px;
			height: 75px;
			margin: auto;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item">Perfect centering!</div>
	</div>

</body>
</html>
```

### 纵轴方向上的对齐

`align-self` 属性用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式。

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch
```

各个值解析:

- auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。
- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

以下实例演示了弹性子元素上 align-self 不同值的应用效果：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			width: 60px;
			min-height: 100px;
			margin: 10px;
		}

		.item1 {
			-webkit-align-self: flex-start;
			align-self: flex-start;
		}

		.item2 {
			-webkit-align-self: flex-end;
			align-self: flex-end;
		}

		.item3 {
			-webkit-align-self: center;
			align-self: center;
		}

		.item4 {
			-webkit-align-self: baseline;
			align-self: baseline;
		}

		.item5 {
			-webkit-align-self: stretch;
			align-self: stretch;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item item1">flex-start</div>
		<div class="flex-item item2">flex-end</div>
		<div class="flex-item item3">center</div>
		<div class="flex-item item4">baseline</div>
		<div class="flex-item item5">stretch</div>
	</div>

</body>
</html>
```

### 子元素如何分配空间

`flex` 属性用于指定弹性子元素如何分配空间。

**语法**

```css
flex: auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]
```

各个值解析:

- auto: 计算值为 1 1 auto
- initial: 计算值为 0 1 auto
- none：计算值为 0 0 auto
- inherit：从父元素继承
- [ flex-grow ]：定义弹性盒子元素的扩展比率。
- [ flex-shrink ]：定义弹性盒子元素的收缩比率。
- [ flex-basis ]：定义弹性盒子元素的默认基准值。

以下实例中，第一个弹性子元素占用了 2/4 的空间，其他两个各占 1/4 的空间：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.flex-container {
			display: -webkit-flex;
			display: flex;
			width: 400px;
			height: 250px;
			background-color: lightgrey;
		}

		.flex-item {
			background-color: cornflowerblue;
			margin: 10px;
		}

		.item1 {
			-webkit-flex: 2;
			flex: 2;
		}

		.item2 {
			-webkit-flex: 1;
			flex: 1;
		}

		.item3 {
			-webkit-flex: 1;
			flex: 1;
		}
	</style>
</head>
<body>

	<div class="flex-container">
		<div class="flex-item item1">flex item 1</div>
		<div class="flex-item item2">flex item 2</div>
		<div class="flex-item item3">flex item 3</div>
	</div>

</body>
</html>
```

## CSS3 弹性盒子属性

|                             属性                             | 描述                                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------- |
| [display](https://www.nowcoder.com/tutorial/10011/bd95301ee60d4d8ca97995731c6e3c58) | 指定 HTML 元素盒子类型。                                     |
| [flex-direction](https://www.nowcoder.com/tutorial/10011/204ff1932b9a42e095a2b7463c5f6d6d) | 指定了弹性容器中子元素的排列方式                             |
| [justify-content](https://www.nowcoder.com/tutorial/10011/1ba4e316af5e4519912e87d2a715cc6c) | 设置弹性盒子元素在主轴（横轴）方向上的对齐方式。             |
| [align-items](https://www.nowcoder.com/tutorial/10011/6c03dddcdeca43a587ca316f6a035d75) | 设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。             |
| [flex-wrap](https://www.nowcoder.com/tutorial/10011/e51e724219ec4ac8988ae692818a03d9) | 设置弹性盒子的子元素超出父容器时是否换行。                   |
| [align-content](https://www.nowcoder.com/tutorial/10011/c982400407a14f149004d26fb8365c24) | 修改 flex-wrap 属性的行为，类似 align-items。 但不是设置子元素对齐，而是设置行对齐。 |
| [flex-flow](https://www.nowcoder.com/tutorial/10011/a0e4b9fea0a94e9d970e2912e5c9be57) | flex-direction 和 flex-wrap 的简写                           |
| [order](https://www.nowcoder.com/tutorial/10011/ff3c2609701044de9a4ad3970f8a0aeb) | 设置弹性盒子的子元素排列顺序。                               |
| [align-self](https://www.nowcoder.com/tutorial/10011/5e5f1ea9475b4e7f93edba3058f1776a) | 在弹性子元素上使用。覆盖容器的 align-items 属性。            |
| [flex](https://www.nowcoder.com/tutorial/10011/b48c54bad5ba473d9839dc39a2da7317) | 设置弹性盒子的子元素如何分配空间。                           |

# CSS3 多媒体查询

CSS3 的多媒体查询继承了 CSS2 多媒体类型的所有思想： 取代了查找设备的类型，CSS3 根据设置自适应显示。

媒体查询可用于检测很多事情，例如：

- viewport(视窗) 的宽度与高度
- 设备的宽度与高度
- 朝向 (智能手机横屏，竖屏) 。
- 分辨率

目前很多针对苹果手机，Android 手机，平板等设备都会使用到多媒体查询。

## 多媒体查询语法

多媒体查询由多种媒体组成，可以包含一个或多个表达式，表达式根据条件是否成立返回 true 或 false。

```css
@media not|only mediatype and (expressions) {
    CSS 代码...;
}
```

如果指定的多媒体类型匹配设备类型则查询结果返回 true，文档会在匹配的设备上显示指定样式效果。

除非你使用了 not 或 only 操作符，否则所有的样式会适应在所有设备上显示效果。

- **not:** not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。
- **only:** 用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式文件。
- **all:** 所有设备，这个应该经常看到。

你也可以在不同的媒体上使用不同的样式文件：

```html
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```

## CSS3 多媒体类型

|   值   |               描述               |
| :----: | :------------------------------: |
|  all   |      用于所有多媒体类型设备      |
| print  |            用于打印机            |
| screen | 用于电脑屏幕，平板，智能手机等。 |
| speech |          用于屏幕阅读器          |

## 多媒体查询简单实例

使用多媒体查询可以在指定的设备上使用对应的样式替代原有的样式。

以下实例中在屏幕可视窗口尺寸大于 480 像素的设备上修改背景颜色：

```css
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

以下实例在屏幕可视窗口尺寸大于 480 像素时将菜单浮动到页面左侧：

```css
@media screen and (min-width: 480px) {
    #leftsidebar {width: 200px; float: left;}
    #main {margin-left:216px;}
}
```

