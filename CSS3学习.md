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