# CSS学习

## CSS 简介

### 什么是 CSS?

- CSS 指层叠样式表 (**C**ascading **S**tyle **S**heets)
- 样式定义**如何显示** HTML 元素
- 样式通常存储在**样式表**中
- 把样式添加到 HTML 4.0 中，是为了**解决内容与表现分离的问题**
- **外部样式表**可以极大提高工作效率
- 外部样式表通常存储在 **CSS 文件**中
- 多个样式定义可**层叠**为一个

## CSS 语法

### CSS 规则

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:

选择器通常是您需要改变样式的 HTML 元素。每条声明由一个属性和一个值组成。

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

不要在属性值与单位之间留有空格（如："margin-left: 20 px" ），正确的写法是 "margin-left: 20px" 。

CSS声明总是以分号(;)结束，声明总以大括号({})括起来：

```css
p {
    color:red;
    text-align:center;
}
```

### CSS 注释

注释是用来解释你的代码，并且可以随意编辑它，浏览器会忽略它。

CSS注释以 "/\*" 开始, 以 "\*/" 结束, 实例如下：

```css
/*这是个注释*/
p {
    text-align: center;
    /*这是另一个注释*/
    color: black;
    font-family: arial;
}
```

## CSS 选择器

如果你要在HTML元素中设置CSS样式，你需要在元素中设置"id" 和 "class"选择器。

### id 选择器

id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。

*ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。*

以下的样式规则应用于元素属性 id="para1"：

```css
#para1 {
    text-align: center;
    color: red;
}
```

### class 选择器

class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。

class 选择器在HTML中以class属性表示, 在 CSS 中，类选择器以一个点"."号显示

*类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。*

在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。

```css
.center {text-align:center;}
```

你也可以指定特定的HTML元素使用class。

在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中：

```css
p.center {text-align:center;}
```



## CSS 分组和嵌套

### 分组选择器

在样式表中有很多具有相同样式的元素。

```css
h1 {
    color:green;
}
h2 {
    color:green;
}
p {
    color:green;
}
```

为了尽量减少代码，你可以使用分组选择器。每个选择器用逗号分隔。在下面的例子中，我们对以上代码使用分组选择器：

```css
h1,h2,p {
    color:green;
}
```

### 嵌套选择器

它可能适用于选择器内部的选择器的样式。

在下面的例子设置了三个样式：

- **p{ }**: 为所有 **p** 元素指定一个样式。
- **.marked{ }**: 为所有 **class="marked"** 的元素指定一个样式。
- **.marked p{ }**: 为所有 **class="marked"** 元素内的 **p** 元素指定一个样式。
- **p.marked{ }**: 为所有 **class="marked"** 的 **p** 元素指定一个样式。

```css
p {
    color:blue;
    text-align:center;
}
.marked {
    background-color:red;
}
.marked p {
    color:white;
}
p.marked {
    text-decoration:underline;
}
```



## CSS 组合选择符

CSS组合选择符包括各种简单选择符的组合方式。

在 CSS3 中包含了四种组合方式:

- 后代选择器(以空格分隔)
- 子元素选择器(以大于号分隔）
- 相邻兄弟选择器（以加号分隔）
- 普通兄弟选择器（以破折号分隔）

*组合选择符说明了两个选择器直接的关系。*

### 后代选择器

后代选择器用于选取某元素的后代元素。

以下实例选取所有在 `<div>` 元素中的 `<p>` 元素：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div p {
			background-color: yellow;
		}
	</style>
</head>
<body>

	<div>
		<p>段落 1。 在 div 中。</p>
		<p>段落 2。 在 div 中。</p>
	</div>

	<p>段落 3。不在 div 中。</p>
	<p>段落 4。不在 div 中。</p>

</body>
</html>
```

### 子元素选择器

与后代选择器相比，子元素选择器（Child selectors）只能选择作为某元素子元素的元素。

以下实例选择了 `<div>` 元素中所有**直接子元素** `<p>` ：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div>p {
			background-color: yellow;
		}
	</style>
</head>

<body>
	<h1>Welcome to My Homepage</h1>
	<div>
		<h2>My name is Donald</h2>
		<p>I live in Duckburg.</p>
	</div>

	<div>
		<span>
			<p>I will not be styled.</p>
		</span>
	</div>

	<p>My best friend is Mickey.</p>
</body>
</html>
```

### 相邻兄弟选择器

相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。

如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）。

以下实例选取了所有位于 `<div>` 元素后的第一个 `<p>` 元素：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div+p {
			background-color: yellow;
		}
	</style>
</head>
<body>

	<h1>文章标题</h1>

	<div>
		<h2>DIV 内部标题</h2>
		<p>DIV 内部段落。</p>
	</div>

	<p>DIV 之后的第一个 P 元素。</p>

	<p>DIV 之后的第二个 P 元素。</p>

</body>
</html>
```

### 后续兄弟选择器

后续兄弟选择器选取所有指定元素之后的相邻兄弟元素。

以下实例选取了所有 `<div>` 元素之后的所有相邻兄弟元素 `<p>` :

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div~p {
			background-color: yellow;
		}
	</style>
</head>
<body>

	<p>之前段落，不会添加背景颜色。</p>
	<div>
		<p>段落 1。 在 div 中。</p>
		<p>段落 2。 在 div 中。</p>
	</div>

	<p>段落 3。不在 div 中。</p>
	<p>段落 4。不在 div 中。</p>

</body>
</html>
```



## CSS 伪类

CSS伪类是用来添加一些选择器的特殊效果。

### 语法

伪类的语法：

```css
selector:pseudo-class {property:value;}
```

CSS类也可以使用伪类

```css
selector.class:pseudo-class {property:value;}
```

### anchor伪类

在支持 CSS 的浏览器中，链接的不同状态都可以以不同的方式显示。

```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
```

**注意：** 在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。

**注意：** 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。

**注意：**伪类的名称不区分大小写。

### 伪类和CSS类

伪类可以与 CSS 类配合使用：

```css
a.red:visited {color:#FF0000;}

<a class="red" href="css-syntax.html">CSS 语法</a>
```

如果在上面的例子的链接已被访问，它会显示为红色。

###  :first-child 伪类

您可以使用 :first-child 伪类来选择父元素的第一个子元素。

注意：在IE8的之前版本必须声明<!DOCTYPE> ，这样 :first-child 才能生效。

#### 匹配第一个 \<p\> 元素

在下面的例子中，选择器匹配作为任何元素的第一个子元素的

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		p:first-child {
			color: blue;
		}
	</style>
</head>

<body>
	<p>This is some text.</p>
	<p>This is some text.</p>
	<p><b>注意:</b>对于 :first-child 工作于 IE8 以及更早版本的浏览器, ！DOCTYPE 必须已经声明.</p>
</body>
</html>
```

#### 匹配所有 \<p\> 元素中的第一个 \<i\> 元素

在下面的例子中，选择相匹配的所有 `<p>` 元素的第一个 `<i>` 元素：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		p>i:first-child {
			color: blue;
		}
	</style>
</head>

<body>
	<p>I am a <i>strong</i> man. I am a <i>strong</i> man.</p>
	<p>I am a <i>strong</i> man. I am a <i>strong</i> man.</p>
	<p><b>注意:</b> 当 :first-child 作用于 IE8 以及更早版本的浏览器, ！DOCTYPE 必须已经定义.</p>
</body>
</html>
```

#### 匹配所有作为第一个子元素的 \<p\> 元素中的所有 \<i\> 元素

在下面的例子中，选择器匹配所有作为元素的第一个子元素的 `<p>` 元素中的所有 `<i>` 元素：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		p:first-child i {
			color: blue;
		}
	</style>
</head>

<body>
	<p>I am a <i>strong</i> man. I am a <i>strong</i> man.</p>
	<p>I am a <i>strong</i> man. I am a <i>strong</i> man.</p>
	<p><b>注意:</b> 当:first-child 作用于 IE8 及更早版本的浏览器, DOCTYPE 必须已经定义.</p>
</body>
</html>
```





## CSS 创建

### 如何插入样式表

插入样式表的方法有三种:

- 外部样式表(External style sheet)
- 内部样式表(Internal style sheet)
- 内联样式(Inline style)

### 外部样式表

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 `<link>` 标签链接到样式表。`<link>` 标签在（文档的）头部：

```html
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

浏览器会从文件 mystyle.css 中读到样式声明，并根据它来格式文档。

外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 html 标签。样式表应该以 .css 扩展名进行保存。

```css
hr {
    color: sienna;
}
p {
    margin-left: 20px;
}
body {
    background-image: url("/images/x.gif");
}
```

### 内部样式表

当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 `<style>` 标签在文档头部定义内部样式表，就像这样：

```html
<head>
    <style>
        hr {
            color: sienna;
        }
        p {
            margin-left: 20px;
        }
        body {
            background-image: url("images/x.gif");
        }
    </style>
</head>
```

### 内联样式

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。本例展示如何改变段落的颜色和左外边距：

```html
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```

### 多重样式

如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。

例如，外部样式表拥有针对 h3 选择器的三个属性：

```css
h3 {
    color:red;
    text-align:left;
    font-size:8pt;
}
```

而内部样式表拥有针对 h3 选择器的两个属性：

```css
h3 {
    text-align:right;
    font-size:20pt;
}
```

假如拥有内部样式表的这个页面同时与外部样式表链接，那么 h3 得到的样式是：

```css
color:red;
text-align:right;
font-size:20pt;
```

即颜色属性将被继承于外部样式表，而文字排列（text-alignment）和字体尺寸（font-size）会被内部样式表中的规则取代。

### 多重样式优先级

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。

一般情况下，优先级如下：

**(内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式**

```html
<head>
    <!-- 外部样式 style.css -->
    <link rel="stylesheet" type="text/css" href="style.css" />
    <!-- 设置：h3{color:blue;} -->
    <style type="text/css">
        /* 内部样式 */
        h3 {
            color: green;
        }
    </style>
</head>
<body>
    <h3>测试！</h3>
</body>
```

**注意：** 如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。

##  CSS 背景

CSS 背景属性用于定义HTML元素的背景。

CSS 属性定义背景效果:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

### 背景颜色

background-color 属性定义了元素的背景颜色。页面的背景颜色使用在body的选择器中：

```css
body {background-color:#b0c4de;}
```

CSS中，颜色值通常以以下方式定义:

- 十六进制 - 如："#ff0000"
- RGB - 如："rgb(255,0,0)"
- 颜色名称 - 如："red"

以下实例中, h1, p, 和 div 元素拥有不同的背景颜色：

```css
h1 {background-color:#6495ed;}
p {background-color:#e0ffff;}
div {background-color:#b0c4de;}
```

属性值

|     值      | 描述                                                         |
| :---------: | :----------------------------------------------------------- |
|   *color*   | 指定背景颜色。在[CSS颜色值](https://www.nowcoder.com/tutorial/10008/84fe71cfeab447f99f59fecf78c69ad0)近可能的寻找一个颜色值的完整列表。 |
| transparent | 指定背景颜色应该是透明的。这是默认                           |
|   inherit   | 指定背景颜色，应该从父元素继承                               |

### 背景图像

background-image 属性描述了元素的背景图像。默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体.

页面背景图片设置实例：

```css
body {background-image:url('paper.gif');}
```

属性值

|                              值                              | 说明                                      |
| :----------------------------------------------------------: | :---------------------------------------- |
|                         url(*'URL'*)                         | 图像的URL                                 |
|                             none                             | 无图像背景会显示。这是默认                |
| [linear-gradient()](https://www.nowcoder.com/tutorial/10011/53c1f19624bf49c9b2cd72d687a0de06) | 创建一个线性渐变的 "图像"(从上到下)       |
| [radial-gradient()](https://www.nowcoder.com/tutorial/10011/763f7a6d34f64b1ebe6abbee08c977a2) | 用径向渐变创建 "图像"。 (center to edges) |
| [repeating-linear-gradient()](https://www.nowcoder.com/tutorial/10011/91f183f9f79c4cd5b08f04975c06e90d) | 创建重复的线性渐变 "图像"。               |
| [repeating-radial-gradient()](https://www.nowcoder.com/tutorial/10011/45bf19d6f7fe47a5b3bfd1df452a1fe0) | 创建重复的径向渐变 "图像"                 |
|                           inherit                            | 指定背景图像应该从父元素继承              |

#### background-repeat 属性

设置如何平铺对象的 background-image 属性。

默认情况下，重复background-image的垂直和水平方向。

只有垂直方向重复background-image：

```css
body {
    background-image:url('paper.gif');
    background-repeat:repeat-y;
}
```

属性值

|    值     | 说明                                         |
| :-------: | :------------------------------------------- |
|  repeat   | 背景图像将向垂直和水平方向重复。这是默认     |
| repeat-x  | 只有水平位置会重复背景图像                   |
| repeat-y  | 只有垂直位置会重复背景图像                   |
| no-repeat | background-image不会重复                     |
|  inherit  | 指定background-repea属性设置应该从父元素继承 |

#### background-attachment 属性

background-attachment设置背景图像是否固定或者随着页面的其余部分滚动。

属性值

|   值    | 描述                                                         |
| :-----: | :----------------------------------------------------------- |
| scroll  | 背景图片随着页面的滚动而滚动，这是默认的。                   |
|  fixed  | 背景图片不会随着页面的滚动而滚动。                           |
|  local  | 背景图片会随着元素内容的滚动而滚动。                         |
| initial | 设置该属性的默认值。 [阅读关于 *initial* 内容](https://www.nowcoder.com/tutorial/10011/ba066c14e10c4d998da0d83296cfc42d) |
| inherit | 指定 background-attachment 的设置应该从父元素继承。 [阅读关于 *inherit* 内容](https://www.nowcoder.com/tutorial/10011/0413600196dd47a59757fb3ef362fcae) |

#### background-position 属性

background-position属性设置背景图像的起始位置。

```css
body {
    background-image:url('smiley.gif');
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
}
```

属性值

|                              值                              | 描述                                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------- |
| left top left center left bottom right top right center right bottom center top center center center bottom | 如果仅指定一个关键字，其他值将会是"center"                   |
|                            x% y%                             | 第一个值是水平位置，第二个值是垂直。 左上角是0％0％。右下角是100％100％。 如果仅指定了一个值，其他值将是50％。 默认值为：0％0％ |
|                          xpos ypos                           | 第一个值是水平位置，第二个值是垂直。 左上角是0。单位可以是像素（0px0px）或任何其他 [CSS单位](https://www.nowcoder.com/tutorial/10008/48b0f3d78856402aa11eeebc0a134e30)。 如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions |
|                           inherit                            | 指定background-position属性设置应该从父元素继承              |

#### background-clip 属性

background-clip 属性指定背景绘制区域。

```css
background-clip: border-box|padding-box|content-box;
```

|     值      | 说明                                             |
| :---------: | :----------------------------------------------- |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框）。 |
| padding-box | 背景绘制在衬距方框内（剪切成衬距方框）。         |
| content-box | 背景绘制在内容方框内（剪切成内容方框）。         |

#### background-origin 属性

background-Origin属性指定background-position属性应该是相对位置。

**注意** 如果背景图像background-attachment是"固定"，这个属性没有任何效果。

```css
background-origin: padding-box|border-box|content-box;
```

|     值      | 描述                       |
| :---------: | :------------------------- |
| padding-box | 背景图像填充框的相对位置   |
| border-box  | 背景图像边界框的相对位置   |
| content-box | 背景图像的相对位置的内容框 |

#### background-size 属性

background-size属性指定背景图片大小。

```css
div {
    background:url(img_flwr.gif);
    background-size:80px 60px;
    background-repeat:no-repeat;
}
```

```css
background-size: length|percentage|cover|contain;
```

|     值     | 描述                                                         |
| :--------: | :----------------------------------------------------------- |
|   length   | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。 如果只给出一个值，第二个是设置为 **auto**(自动) |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。 如果只给出一个值，第二个是设置为"auto(自动)" |
|   cover    | 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 |
|  contain   | 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 |

## CSS 文本格式

### 文本颜色

Color属性指定文本的颜色。颜色属性被用来设置文字的颜色。一个网页的背景颜色是指在主体内的选择：

```css
body {color:red;}
h1 {color:#00ff00;}
h2 {color:rgb(255,0,0);}
```

*对于W3C标准的CSS：如果你定义了颜色属性，你还必须定义背景色属性。*

### 文本方向

direction属性指定文本方向/书写方向。

```css
div {
    direction:rtl;
    unicode-bidi: bidi-override; 
}
```

|   值    |                   描述                    |
| :-----: | :---------------------------------------: |
|   ltr   |         默认。文本方向从左到右。          |
|   rtl   |            文本方向从右到左。             |
| inherit | 规定应该从父元素继承 direction 属性的值。 |

### 字符间距

letter-spacing 属性增加或减少字符间的空白（字符间距）

```css
h1 {letter-spacing:2px}
h2 {letter-spacing:-3px}
```

|   值    |                      描述                      |
| :-----: | :--------------------------------------------: |
| normal  |        默认。规定字符间没有额外的空间。        |
| length  |     定义字符间的固定空间（允许使用负值）。     |
| inherit | 规定应该从父元素继承 letter-spacing 属性的值。 |

### 行高

设置以百分比计的行高。**注意：** 负值是不允许的

```css
p.small {line-height:90%}
p.big {line-height:200%}
p.small {line-height: 0.5}
p.big {line-height: 2}
```

|   值    |                         描述                         |
| :-----: | :--------------------------------------------------: |
| normal  |               默认。设置合理的行间距。               |
| number  | 设置数字，此数字会与当前的字体尺寸相乘来设置行间距。 |
| length  |                  设置固定的行间距。                  |
|    %    |           基于当前字体尺寸的百分比行间距。           |
| inherit |     规定应该从父元素继承 line-height 属性的值。      |

### 对齐方式

text-align属性指定元素文本的水平对齐方式。文本排列属性是用来设置文本的水平对齐方式。文本可居中或对齐到左或右,两端对齐.

当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。

```css
h1 {text-align:center;}
p.date {text-align:right;}
p.main {text-align:justify;}
```

|   值    |                    描述                    |
| :-----: | :----------------------------------------: |
|  left   |  把文本排列到左边。默认值：由浏览器决定。  |
|  right  |             把文本排列到右边。             |
| center  |             把文本排列到中间。             |
| justify |           实现两端对齐文本效果。           |
| inherit | 规定应该从父元素继承 text-align 属性的值。 |

### 垂直对齐方式

vertical-align 属性设置一个元素的垂直对齐方式。

该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。

```css
img {
    vertical-align:text-top;
}
```

|     值      |                             描述                             |
| :---------: | :----------------------------------------------------------: |
|  baseline   |               默认。元素放置在父元素的基线上。               |
|     sub     |                     垂直对齐文本的下标。                     |
|    super    |                      垂直对齐文本的上标                      |
|     top     |             把元素的顶端与行中最高元素的顶端对齐             |
|  text-top   |              把元素的顶端与父元素字体的顶端对齐              |
|   middle    |                 把此元素放置在父元素的中部。                 |
|   bottom    |           把元素的底端与行中最低的元素的顶端对齐。           |
| text-bottom |             把元素的底端与父元素字体的底端对齐。             |
|   length    |                                                              |
|      %      | 使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。 |
|   inherit   |        规定应该从父元素继承 vertical-align 属性的值。        |

### 文本修饰

text-decoration 属性用来设置或删除文本的装饰。

text-decoration 属性规定添加到文本的修饰，下划线、上划线、删除线等。

text-decoration 属性是以下三种属性的简写：

- [text-decoration-line]
- [text-decoration-color]
- [text-decoration-style]

```css
/*关键值*/
text-decoration: none;                     /*没有文本装饰*/
text-decoration: underline red;            /*红色下划线*/
text-decoration: underline wavy red;       /*红色波浪形下划线*/

/*全局值*/
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

从设计的角度看 text-decoration属性主要是用来删除链接的下划线：

```css
a {text-decoration:none;}
```

也可以这样装饰文字：

```css
h1 {text-decoration:overline;}
h2 {text-decoration:line-through;}
h3 {text-decoration:underline;}
```

*不建议强调指出不是链接的文本，因为这常常混淆用户。*

|      值      |                      描述                       |
| :----------: | :---------------------------------------------: |
|     none     |             默认。定义标准的文本。              |
|  underline   |              定义文本下的一条线。               |
|   overline   |              定义文本上的一条线。               |
| line-through |            定义穿过文本下的一条线。             |
|    blink     |                定义闪烁的文本。                 |
|   inherit    | 规定应该从父元素继承 text-decoration 属性的值。 |

```css
h1.under {
    text-decoration: underline;
}
h1.over {
    text-decoration: overline;
}
p.line {
    text-decoration: line-through;
}
p.blink {
    text-decoration: blink;
}
a.none {
    text-decoration: none;
}
p.underover {
    text-decoration: underline overline;
}
```

虚线与波浪线：

```css
h1 {
  text-decoration: underline overline dotted red;
}

h2 {
  text-decoration: underline overline wavy blue;
}
```

### 文本转换

文本转换属性是用来指定在一个文本中的大写和小写字母。

可用于所有字句变成大写或小写字母，或每个单词的首字母大写。

```css
p.uppercase {text-transform:uppercase;}
p.lowercase {text-transform:lowercase;}
p.capitalize {text-transform:capitalize;}
```

|     值     |                      描述                      |
| :--------: | :--------------------------------------------: |
|    none    | 默认。定义带有小写字母和大写字母的标准的文本。 |
| capitalize |        文本中的每个单词以大写字母开头。        |
| uppercase  |               定义仅有大写字母。               |
| lowercase  |         定义无大写字母，仅有小写字母。         |
|  inherit   | 规定应该从父元素继承 text-transform 属性的值。 |

### 文本缩进

text-indent 属性规定文本块中首行文本的缩进。文本缩进属性是用来指定文本的第一行的缩进。

**注意：** 负值是允许的。如果值是负数，将第一行左缩进。

```css
p {text-indent:50px;}
```

|   值    |                    描述                     |
| :-----: | :-----------------------------------------: |
| length  |         定义固定的缩进。默认值：0。         |
|    %    |     定义基于父元素宽度的百分比的缩进。      |
| inherit | 规定应该从父元素继承 text-indent 属性的值。 |

### 文本阴影

text-shadow 属性应用于阴影文本。

基本文字阴影（text-shadow）：

```css
h1 {
    text-shadow: 2px 2px 3px #ff0000;
}
text-shadow: h-shadow v-shadow blur color;
```

**注意：** text-shadow属性连接一个或更多的阴影文本。属性是阴影，指定的每2或3个长度值和一个可选的颜色值用逗号分隔开来。已失时效的长度为0。

|    值    |                             描述                             |
| :------: | :----------------------------------------------------------: |
| h-shadow |               必需。水平阴影的位置。允许负值。               |
| v-shadow |               必需。垂直阴影的位置。允许负值。               |
|   blur   |                      可选。模糊的距离。                      |
|  color   | 可选。阴影的颜色。参阅 [CSS 颜色值](https://www.nowcoder.com/tutorial/10008/84fe71cfeab447f99f59fecf78c69ad0)。 |

### unicode-bidi 属性

unicode-bidi 属性与 [direction](https://www.nowcoder.com/tutorial/10011/249351f677a046f1adc2b18e7778925a) 属性一起使用，来设置或返回文本是否被重写，以便在同一文档中支持多种语言。

```css
div {
    direction:rtl;
    unicode-bidi:bidi-override;
}
unicode-bidi: normal|embed|bidi-override|initial|inherit;
```

|      值       |                             描述                             |
| :-----------: | :----------------------------------------------------------: |
|    normal     |                 默认。不使用附加的嵌入层面。                 |
|     embed     |                   创建一个附加的嵌入层面。                   |
| bidi-override |   创建一个附加的嵌入层面。重新排序取决于 direction 属性。    |
|    initial    | 设置该属性为它的默认值。请参阅 [*initial*](https://www.nowcoder.com/tutorial/10011/ba066c14e10c4d998da0d83296cfc42d)。 |
|    inherit    | 从父元素继承该属性。请参阅 [*inherit*](https://www.nowcoder.com/tutorial/10011/0413600196dd47a59757fb3ef362fcae)。 |

### 文本空白的处理方式

white-space属性指定元素内的空白怎样处理。

```css
p {
    white-space:nowrap;
}
```

|    值    | 描述                                                         |
| :------: | :----------------------------------------------------------- |
|  normal  | 默认。空白会被浏览器忽略。                                   |
|   pre    | 空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。  |
|  nowrap  | 文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止。 |
| pre-wrap | 保留空白符序列，但是正常地进行换行。                         |
| pre-line | 合并空白符序列，但是保留换行符。                             |
| inherit  | 规定应该从父元素继承 white-space 属性的值。                  |

### 设置字间距

word-spacing属性增加或减少字与字之间的空白。

```css
p {
    word-spacing:30px;
}
```

|   值    | 描述                                         |
| :-----: | :------------------------------------------- |
| normal  | 默认。定义单词间的标准空间。                 |
| length  | 定义单词间的固定空间。                       |
| inherit | 规定应该从父元素继承 word-spacing 属性的值。 |

### word-wrap 属性

word-wrap属性允许长的内容可以自动换行。

```css
p.test {word-wrap:break-word;}
word-wrap: normal|break-word;
```

|     值     |                     描述                     |
| :--------: | :------------------------------------------: |
|   normal   | 只在允许的断字点换行（浏览器保持默认处理）。 |
| break-word |      在长单词或 URL 地址内部进行换行。       |

### word-break 属性

```css
p.test {word-break:break-all;}
word-break: normal|break-all|keep-all;
```

word-break属性指定非CJK脚本的断行规则。

|    值     |              描述              |
| :-------: | :----------------------------: |
|  normal   |   使用浏览器默认的换行规则。   |
| break-all |       允许在单词内换行。       |
| keep-all  | 只能在半角空格或连字符处换行。 |



## CSS 字体

CSS字体属性定义字体，加粗，大小，文字样式。

### CSS字型

在CSS中，有两种类型的字体系列名称：

- **通用字体系列** - 拥有相似外观的字体系统组合（如 "Serif" 或 "Monospace"）
- **特定字体系列** - 一个特定的字体系列（如 "Times" 或 "Courier"）

| Generic family |          字体系列          |                    说明                     |
| :------------: | :------------------------: | :-----------------------------------------: |
|     Serif      |  Times New Roman Georgia   |   Serif字体中字符在行的末端拥有额外的装饰   |
|   Sans-serif   |       Arial Verdana        | "Sans"是指无 - 这些字体在末端没有额外的装饰 |
|   Monospace    | Courier New Lucida Console |        所有的等宽字符具有相同的宽度         |

### 字体系列

font-family 属性设置文本的字体系列。

font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。

**注意**: 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。

多个字体系列是用一个逗号分隔指明：

```css
p{font-family:"Times New Roman", Times, serif;}
```

### 字体样式

主要是用于指定斜体文字的字体样式属性。

这个属性有三个值：

- 正常 - 正常显示文本

- 斜体 - 以斜体字显示的文字

- 倾斜的文字 - 文字向一边倾斜（和斜体非常类似，但不太支持

  ```css
  p.normal {font-style:normal;}
  p.italic {font-style:italic;}
  p.oblique {font-style:oblique;}
  ```

### 字体大小

font-size 属性设置文本的大小。

能否管理文字的大小，在网页设计中是非常重要的。但是，你不能通过调整字体大小使段落看上去像标题，或者使标题看上去像段落。

请务必使用正确的HTML标签，就 `<h1>` - `<h6>` 表示标题和 `<p>` 表示段落：

字体大小的值可以是绝对或相对的大小。

绝对大小：

- 设置一个指定大小的文本
- 不允许用户在所有浏览器中改变文本大小
- 确定了输出的物理尺寸时绝对大小很有用

相对大小：

- 相对于周围的元素来设置大小
- 允许用户在浏览器中改变文字大小

*如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（**16px=1em**）。*

#### 设置字体大小像素

设置文字的大小与像素，让您完全控制文字大小：

```css
h1 {font-size:40px;}
h2 {font-size:30px;}
p {font-size:14px;}
```

#### 用em来设置字体大小

为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。em的尺寸单位由W3C建议。

1em和当前字体大小相等。在浏览器中默认的文字大小是16px。因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：**px/16=em**

```css
h1 {font-size:2.5em;} /* 40px/16=2.5em */
h2 {font-size:1.875em;} /* 30px/16=1.875em */
p {font-size:0.875em;} /* 14px/16=0.875em */
```

#### 使用百分比和EM组合

在所有浏览器的解决方案中，设置 `<body>` 元素的默认字体大小的是百分比：

```css
body {font-size:100%;}
h1 {font-size:2.5em;}
h2 {font-size:1.875em;}
p {font-size:0.875em;}
```

### font-variant 属性

font-variant 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小

```css
p.small {
    font-variant:small-caps;
}
```

|     值     |                     描述                     |
| :--------: | :------------------------------------------: |
|   normal   |     默认值。浏览器会显示一个标准的字体。     |
| small-caps |       浏览器会显示小型大写字母的字体。       |
|  inherit   | 规定应该从父元素继承 font-variant 属性的值。 |

### font-weight 属性

font-weight 属性设置文本的粗细

```css
p.normal {font-weight:normal;}
p.thick {font-weight:bold;}
p.thicker {font-weight:900;}
```

|                 值                  |                            描述                             |
| :---------------------------------: | :---------------------------------------------------------: |
|               normal                |                  默认值。定义标准的字符。                   |
|                bold                 |                       定义粗体字符。                        |
|               bolder                |                      定义更粗的字符。                       |
|               lighter               |                      定义更细的字符。                       |
| 100 200 300 400 500 600 700 800 900 | 定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 |
|               inherit               |              规定应该从父元素继承字体的粗细。               |



## CSS 链接

### 链接样式

链接的样式，可以用任何CSS属性（如颜色，字体，背景等）。

特别的链接，可以有不同的样式，这取决于他们是什么状态。

这四个链接状态是：

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

```css
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}  /* 鼠标移动到链接上 */
a:active {color:#0000FF;}  /* 鼠标点击时 */
```

当设置为若干链路状态的样式，也有一些顺序规则：

- a:hover 必须跟在 a:link 和 a:visited后面
- a:active 必须跟在 a:hover后面

**文本修饰**

text-decoration 属性主要用于删除链接中的下划线：

```css
a:link {text-decoration:none;}
a:visited {text-decoration:none;}
a:hover {text-decoration:underline;}
a:active {text-decoration:underline;}
```

**背景颜色**

背景颜色属性指定链接背景色：

```css
a:link {background-color:#B2FF99;}
a:visited {background-color:#FFFF85;}
a:hover {background-color:#FF704D;}
a:active {background-color:#FF704D;}
```



##  CSS 列表样式

### CSS列表属性作用

在HTML中，有两种类型的列表：

- 无序列表 - 列表项标记用特殊图形（如小黑点、小方框等）
- 有序列表 - 列表项的标记有数字或字母

使用CSS，可以列出进一步的样式，并可用图像作列表项标记。

CSS列表属性作用如下：

- 设置不同的列表项标记为有序列表
- 设置不同的列表项标记为无序列表
- 设置列表项标记为图像

### 不同的列表项标记

list-style-type属性指定列表项标记的类型是：

```css
ul.a {list-style-type: circle;}
ul.b {list-style-type: square;}

ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}
```

### 作为列表项标记的图像

要指定列表项标记的图像，使用列表样式图像属性：

```css
ul {
    list-style-image: url('sqpurple.gif');
}
```

如果你想在所有的浏览器放置同样的形象标志，就应使用浏览器兼容性解决方案，过程如下。

### 浏览器兼容性解决方案

同样在所有的浏览器，下面的例子会显示的图像标记：

```css
ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}
ul li {
    background-image: url(sqpurple.gif);
    background-repeat: no-repeat;
    background-position: 0px 5px; 
    padding-left: 14px; 
}
```

例子解释：

- ul:
  - 设置列表类型为没有列表项标记
  - 设置填充和边距0px（浏览器兼容性）
- ul中所有li:
  - 设置图像的URL，并设置它只显示一次（无重复）
  - 您需要的定位图像位置（左0px和上下5px）
  - 用padding-left属性把文本置于列表中

### 列表 -简写属性

在单个属性中可以指定所有的列表属性。这就是所谓的简写属性。

为列表使用简写属性，列表样式属性设置如下：

```css
ul {
    list-style: square url("sqpurple.gif");
}
```

可以按顺序设置如下属性：

- list-style-type
- list-style-position
- list-style-image

如果上述值丢失一个，其余仍在指定的顺序，就没关系。

所有的CSS列表属性

|                             属性                             |                        描述                        |
| :----------------------------------------------------------: | :------------------------------------------------: |
| [list-style](https://www.nowcoder.com/tutorial/10011/8fe36cfc8cd14ebba99f41f4a00568be) | 简写属性。用于把所有用于列表的属性设置于一个声明中 |
| [list-style-image](https://www.nowcoder.com/tutorial/10011/da81e8bcc0414941b9efbf91823224c7) |              将图象设置为列表项标志。              |
| [list-style-position](https://www.nowcoder.com/tutorial/10011/0286de203cd14af6a0019984f6038c42) |            设置列表中列表项标志的位置。            |
| [list-style-type](https://www.nowcoder.com/tutorial/10011/178f628a762f4a05964285f4d44efbb9) |               设置列表项标志的类型。               |

### list-style 属性

list-style 简写属性在一个声明中设置所有的列表属性。

可以设置的属性（按顺序）： list-style-type, list-style-position, list-style-image.

可以不设置其中的某个值，比如 "list-style:circle inside;" 也是允许的。未设置的属性会使用其默认值。

```css
ul {
    list-style:square url("sqpurple.gif");
}
```

### list-style-type 属性

ist-style-type 属性设置列表项标记的类型。

属性值

|          值          |                            描述                             |
| :------------------: | :---------------------------------------------------------: |
|         none         |                          无标记。                           |
|         disc         |                    默认。标记是实心圆。                     |
|        circle        |                       标记是空心圆。                        |
|        square        |                      标记是实心方块。                       |
|       decimal        |                        标记是数字。                         |
| decimal-leading-zero |             0开头的数字标记。(01, 02, 03, 等。)             |
|     lower-roman      |            小写罗马数字(i, ii, iii, iv, v, 等。)            |
|     upper-roman      |            大写罗马数字(I, II, III, IV, V, 等。)            |
|     lower-alpha      | 小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。) |
|     upper-alpha      | 大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。) |
|     lower-greek      |           小写希腊字母(alpha, beta, gamma, 等。)            |
|     lower-latin      |              小写拉丁字母(a, b, c, d, e, 等。)              |
|     upper-latin      |              大写拉丁字母(A, B, C, D, E, 等。)              |
|        hebrew        |                    传统的希伯来编号方式                     |
|       armenian       |                   传统的亚美尼亚编号方式                    |
|       georgian       |          传统的乔治亚编号方式(an, ban, gan, 等。)           |
|   cjk-ideographic    |                       简单的表意数字                        |
|       hiragana       |      标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）      |
|       katakana       |      标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）      |
|    hiragana-iroha    |    标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）    |
|    katakana-iroha    |    标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）    |

### list-style-position 属性

list-style-position属性指示如何相对于对象的内容绘制列表项标记。

```css
ul {
    list-style-position: inside;
}
```

|   值    | 描述                                                         |
| :-----: | :----------------------------------------------------------- |
| inside  | 列表项目标记放置在文本以内，且环绕文本根据标记对齐。         |
| outside | 默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。 |
| inherit | 规定应该从父元素继承 list-style-position 属性的值。          |

### list-style-image 属性

list-style-image 属性使用图像来替换列表项的标记。

```css
ul {
    list-style-image:url('sqpurple.gif');
}
```

|   值    |                       描述                       |
| :-----: | :----------------------------------------------: |
|   URL   |                   图像的路径。                   |
|  none   |               默认。无图形被显示。               |
| inherit | 规定应该从父元素继承 list-style-image 属性的值。 |



## CSS 表格

使用 CSS 可以使 HTML 表格更美观。

### 表格边框

指定CSS表格边框，使用border属性。下面的例子指定了一个表格的Th和TD元素的黑色边框：

```css
table, th, td {
    border: 1px solid black;
}
```

请注意，在上面的例子中的表格有双边框。这是因为表和th/ td元素有独立的边界。为了显示一个表的单个边框，使用 border-collapse属性。

### 折叠边框

border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开：

```css
table {
    border-collapse:collapse;
}
table,th, td {
    border: 1px solid black;
}
```

### 表格宽度和高度

Width和height属性定义表格的宽度和高度。

下面的例子是设置100％的宽度，50像素的th元素的高度的表格：

```css
table {
    width:100%;
}
th {
    height:50px;
}
```

### 表格文字对齐

表格中的文本对齐和垂直对齐属性。

text-align属性设置水平对齐方式，向左，右，或中心：

```css
td {
    text-align:right;
}
```

垂直对齐属性设置垂直对齐，比如顶部，底部或中间：

```css
td {
    height:50px;
    vertical-align:bottom;
}
```

### 表格填充

如果在表的内容中控制空格之间的边框，应使用td和th元素的填充属性：

```css
td {
    padding:15px;
}
```

### 表格颜色

指定边框的颜色，和th元素的文本和背景颜色：

```css
table, td, th {
    border:1px solid green;
}
th {
    background-color:green;
    color:white;
}
```



## CSS 盒子模型

### CSS 盒子模型(Box Model)

所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

下面的图片说明了盒子模型(Box Model)：

![CSS盒子模型](E:\pogject\学习笔记\image\CSS盒子模型.png)

不同部分的说明：

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

为了正确设置元素在所有浏览器中的宽度和高度，你需要知道的盒模型是如何工作的。

### 元素的宽度和高度

**重要:** 当您指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完全大小的元素，你还必须添加填充，边框和边距。

下面的例子中的元素的总宽度为300px：

```css
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```

让我们自己算算：
300px (宽)\+ 50px (左 + 右填充)\+ 50px (左 + 右边框)\+ 50px (左 + 右边距)= 450px

最终元素的总宽度计算公式是这样的：

**总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距**

元素的总高度最终计算公式是这样的：

**总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距**



## CSS 边框

### CSS 边框属性

CSS边框属性允许你指定一个元素边框的样式和颜色。

### 边框样式

边框样式属性指定要显示什么样的边界。**border-style**属性用来定义边框的样式。

border-style属性设置一个元素的四个边框的样式。此属性可以有一到四个值。

|   值    | 描述                                                         |
| :-----: | :----------------------------------------------------------- |
|  none   | 定义无边框。                                                 |
| hidden  | 与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。 |
| dotted  | 定义点状边框。在大多数浏览器中呈现为实线。                   |
| dashed  | 定义虚线。在大多数浏览器中呈现为实线。                       |
|  solid  | 定义实线。                                                   |
| double  | 定义双线。双线的宽度等于 border-width 的值。                 |
| groove  | 定义 3D 凹槽边框。其效果取决于 border-color 的值。           |
|  ridge  | 定义 3D 垄状边框。其效果取决于 border-color 的值。           |
|  inset  | 定义 3D inset 边框。其效果取决于 border-color 的值。         |
| outset  | 定义 3D outset 边框。其效果取决于 border-color 的值。        |
| inherit | 规定应该从父元素继承边框样式。                               |

### 边框宽度

可以通过 border-width 属性为边框指定宽度。

为边框指定宽度有两种方法：可以指定长度值，比如 2px 或 0.1em(单位为 px, pt, cm, em 等)，或者使用 3 个关键字之一，它们分别是 thick 、medium（默认值） 和 thin。

**注意：**CSS 没有定义 3 个关键字的具体宽度，所以一个用户可能把 thick 、medium 和 thin 分别设置为等于 5px、3px 和 2px，而另一个用户则分别设置为 3px、2px 和 1px。

|   值    | 描述                           |
| :-----: | :----------------------------- |
|  thin   | 定义细的边框。                 |
| medium  | 默认。定义中等的边框。         |
|  thick  | 定义粗的边框。                 |
| length  | 允许您自定义边框的宽度。       |
| inherit | 规定应该从父元素继承边框宽度。 |

### 边框颜色

border-color属性用于设置边框的颜色。可以设置的颜色：

- name - 指定颜色的名称，如 "red"
- RGB - 指定 RGB 值, 如 "rgb(255,0,0)"
- Hex - 指定16进制值, 如 "#ff0000"

您还可以设置边框的颜色为"transparent"。

**注意：** border-color单独使用是不起作用的，必须得先使用border-style来设置边框样式。

|     值      | 说明                                                         |
| :---------: | :----------------------------------------------------------- |
|   *color*   | 指定背景颜色。在[CSS颜色值](https://www.nowcoder.com/tutorial/10008/84fe71cfeab447f99f59fecf78c69ad0)查找颜色值的完整列表 |
| transparent | 指定边框的颜色应该是透明的。这是默认                         |
|   inherit   | 指定边框的颜色，应该从父元素继承                             |

### 边框-单独设置各边

```css
p {
    border-top-style:dotted;
    border-right-style:solid;
    border-bottom-style:dotted;
    border-left-style:solid;
}
```

border-style属性可以有1-4个值：

- border-style:dotted solid double dashed;
  - 上边框是 dotted
  - 右边框是 solid
  - 底边框是 double
  - 左边框是 dashed
- border-style:dotted solid double;
  - 上边框是 dotted
  - 左、右边框是 solid
  - 底边框是 double
- border-style:dotted solid;
  - 上、底边框是 dotted
  - 右、左边框是 solid
- border-style:dotted;
  - 四面边框是 dotted

上面的例子用了border-style。然而，它也可以和border-width 、 border-color一起使用。

### 边框-简写属性

缩写边框属性设置在一个声明中所有的边框属性。

可以设置的属性分别（按顺序）：border-width, border-style,和border-color.

如果上述值缺少一个没有关系，例如border：＃FF0000;是允许的。

你也可以在一个属性中设置边框。你可以在"border"属性中设置：

```css
border:5px solid red;
```



## CSS 轮廓属性

轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。

![CSS 轮廓](E:\pogject\学习笔记\image\CSS 轮廓.png)

|                             属性                             |              说明              |                              值                              | CSS  |
| :----------------------------------------------------------: | :----------------------------: | :----------------------------------------------------------: | :--: |
| [outline](https://www.nowcoder.com/tutorial/10011/f78e0bdee2764037a2dfc4225d3a9151) | 在一个声明中设置所有的轮廓属性 |      outline-color outline-style outline-width inherit       |  2   |
| [outline-color](https://www.nowcoder.com/tutorial/10011/f8e93e401e6846cc9b5b6c1b61459000) |         设置轮廓的颜色         |       color-name hex-number rgb-number invert inherit        |  2   |
| [outline-style](https://www.nowcoder.com/tutorial/10011/ade344e9c9084bf2bbae5fe35c09c63c) |         设置轮廓的样式         | none dotted dashed solid double groove ridge inset outset inherit |  2   |
| [outline-width](https://www.nowcoder.com/tutorial/10011/77193e80f660441fa2690f264f199cd5) |         设置轮廓的宽度         |               thin medium thick length inherit               |  2   |



## CSS 外边距

CSS margin(外边距)属性定义元素周围的空间。

### margin

margin 清除周围的（外边框）元素区域。margin 没有背景颜色，是完全透明的。

margin 可以单独改变元素的上，下，左，右边距，也可以一次改变所有的属性。

**可能的值**

|    值    | 说明                                        |
| :------: | :------------------------------------------ |
|   auto   | 设置浏览器边距。 这样做的结果会依赖于浏览器 |
| *length* | 定义一个固定的margin（使用像素，pt，em等）  |
|   *%*    | 定义一个使用百分比的边距                    |

*Margin可以使用负值，重叠的内容。*

### 单边外边距属性

在CSS中，它可以指定不同的侧面不同的边距：

```css
margin-top:100px;
margin-bottom:100px;
margin-right:50px;
margin-left:50px;
```

### 简写属性

为了缩短代码，有可能使用一个属性中margin指定的所有边距属性。这就是所谓的简写属性。

所有边距属性的简写属性是 **margin** ：margin属性可以有一到四个值。

```css
margin:100px 50px;
```



## CSS 填充

CSS padding（填充）是一个简写属性，定义元素边框与元素内容之间的空间，即上下左右的内边距。

### padding（填充）

当元素的 padding（填充）内边距被清除时，所释放的区域将会受到元素背景颜色的填充。

单独使用 padding 属性可以改变上下左右的填充。

|    值    |                说明                 |
| :------: | :---------------------------------: |
| *length* | 定义一个固定的填充(像素, pt, em,等) |
|   *%*    |      使用百分比值定义一个填充       |

### 单边内边距属性

在CSS中，它可以指定不同的侧面不同的填充：

```css
padding-top:25px;
padding-bottom:25px;
padding-right:50px;
padding-left:50px;
```

### 简写属性

为了缩短代码，它可以在一个属性中指定的所有填充属性。

这就是所谓的简写属性。所有的填充属性的简写属性是 **padding** ：Padding属性，可以有一到四个值。

```css
padding:25px 50px;
```



## CSS 尺寸

CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。

### height 属性

height属性设置元素的高度。**注意：** height属性不包括填充，边框，或页边距！

|   值    | 描述                                   |
| :-----: | :------------------------------------- |
|  auto   | 默认。浏览器会计算出实际的高度。       |
| length  | 使用 px、cm 等单位定义高度。           |
|    %    | 基于包含它的块级对象的百分比高度。     |
| inherit | 规定应该从父元素继承 height 属性的值。 |

### line-height 属性

设置以百分比计的行高：**注意：** 负值是不允许的

```css
p.small {line-height:90%}
p.big {line-height:200%}
```

|   值    | 描述                                                 |
| :-----: | :--------------------------------------------------- |
| normal  | 默认。设置合理的行间距。                             |
| number  | 设置数字，此数字会与当前的字体尺寸相乘来设置行间距。 |
| length  | 设置固定的行间距。                                   |
|    %    | 基于当前字体尺寸的百分比行间距。                     |
| inherit | 规定应该从父元素继承 line-height 属性的值。          |

### max-height 属性

max-height 属性设置元素的最大高度。**注意：** max-height属性不包括填充，边框，或页边距！

```css
p {
    max-height:50px;
}
```

|   值    | 描述                                       |
| :-----: | :----------------------------------------- |
|  none   | 默认。定义对元素被允许的最大高度没有限制。 |
| length  | 定义元素的最大高度值。                     |
|    %    | 定义基于包含它的块级对象的百分比最大高度。 |
| inherit | 规定应该从父元素继承 max-height 属性的值。 |

### min-height 属性

min-height 属性设置元素的最低高度。min-height属性不包括填充，边框，或页边距！

```css
p {
    min-height:100px;
}
```

|   值    | 描述                                       |
| :-----: | :----------------------------------------- |
| length  | 定义元素的最小高度。默认值是 0。           |
|    %    | 定义基于包含它的块级对象的百分比最小高度。 |
| inherit | 规定应该从父元素继承 min-height 属性的值。 |

### width 属性

width属性设置元素的宽度。

```css
p.ex {
    height:100px;
    width:100px;
}
```

|   值    | 描述                                       |
| :-----: | :----------------------------------------- |
|  auto   | 默认值。浏览器可计算出实际的宽度。         |
| length  | 使用 px、cm 等单位定义宽度。               |
|    %    | 定义基于包含块（父元素）宽度的百分比宽度。 |
| inherit | 规定应该从父元素继承 width 属性的值。      |

### max-width 属性

max-width属性设置元素的最大宽度。max-width属性不包括填充，边框，或页边距！

```css
p {
    max-width:100px;
}
```

|   值    | 描述                                       |
| :-----: | :----------------------------------------- |
|  none   | 默认。定义对元素的最大宽度没有限制。       |
| length  | 定义元素的最大宽度值。                     |
|    %    | 定义基于包含它的块级对象的百分比最大宽度。 |
| inherit | 规定应该从父元素继承 max-width 属性的值。  |

### min-width 属性

设置段落的最小宽度：

```css
p {
    min-width:1000px;
}
```

|   值    |                     描述                     |
| :-----: | :------------------------------------------: |
| length  | 定义元素的最小宽度值。默认值：取决于浏览器。 |
|    %    |  定义基于包含它的块级对象的百分比最小宽度。  |
| inherit |  规定应该从父元素继承 min-width 属性的值。   |



## CSS 显示

display属性设置一个元素应如何显示，visibility属性指定一个元素应可见还是隐藏。

### 隐藏元素

隐藏一个元素可以通过把display属性设置为"none"，或把visibility属性设置为"hidden"。但是请注意，这两种方法会产生不同的结果。

#### visibility:hidden

visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。也就是说，该元素虽然被隐藏了，但仍然会影响布局。

```css
h1.hidden {visibility:hidden;}
```

#### display:none

display:none可以隐藏某个元素，且隐藏的元素不会占用任何空间。也就是说，该元素不但被隐藏了，而且该元素原本占用的空间也会从页面布局中消失。

```css
h1.hidden {display:none;}
```

### 块和内联元素

块元素是一个元素，占用了全部宽度，在前后都是换行符。

块元素的例子：

- `<h1>`
- `<p>`
- `<div>`

内联元素只需要必要的宽度，不强制换行。

内联元素的例子：

- `<span>`
- `<a>`

### 如何改变一个元素显示

可以更改内联元素和块元素，反之亦然，可以使页面看起来是以一种特定的方式组合，并仍然遵循web标准。

下面的示例把列表项显示为内联元素：

```css
li {display:inline;}
```

下面的示例把span元素作为块元素：

```css
span {display:block;}
```

**注意：**变更元素的显示类型看该元素是如何显示，它是什么样的元素。例如：一个内联元素设置为display:block是不允许有它内部的嵌套块元素。

### display 属性

display 属性规定元素应该生成的框的类型。

```css
p.inline {
    display:inline;
}
```

|         值         | 描述                                                         |
| :----------------: | :----------------------------------------------------------- |
|        none        | 此元素不会被显示。                                           |
|       block        | 此元素将显示为块级元素，此元素前后会带有换行符。             |
|       inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。         |
|    inline-block    | 行内块元素。（CSS2.1 新增的值）                              |
|     list-item      | 此元素会作为列表显示。                                       |
|       run-in       | 此元素会根据上下文作为块级元素或内联元素显示。               |
|      compact       | CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。 |
|       marker       | CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。 |
|       table        | 此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。 |
|    inline-table    | 此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。 |
|  table-row-group   | 此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。     |
| table-header-group | 此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。     |
| table-footer-group | 此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。     |
|     table-row      | 此元素会作为一个表格行显示（类似 `<tr>`）。                  |
| table-column-group | 此元素会作为一个或多个列的分组来显示（类似 `<colgroup>`）。  |
|    table-column    | 此元素会作为一个单元格列显示（类似 `<col>`）                 |
|     table-cell     | 此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）      |
|   table-caption    | 此元素会作为一个表格标题显示（类似 `<caption>`）             |
|      inherit       | 规定应该从父元素继承 display 属性的值。                      |

### visibility 属性

visibility属性指定一个元素是否是可见的。

```css
h2 {
    visibility:hidden;
}
```

|    值    | 描述                                                         |
| :------: | :----------------------------------------------------------- |
| visible  | 默认值。元素是可见的。                                       |
|  hidden  | 元素是不可见的。                                             |
| collapse | 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。 被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"。 |
| inherit  | 规定应该从父元素继承 visibility 属性的值。                   |



## CSS 定位

position 属性指定了元素的定位类型。position属性指定一个元素（静态的，相对的，绝对或固定）的定位方法的类型。

position 属性的五个值：static,relative,fixed,absolute,sticky

元素可以使用的顶部，底部，左侧和右侧属性定位。然而，这些属性无法工作，除非是先设定position属性。他们也有不同的工作方式，这取决于定位方法。

|                              值                              | 描述                                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------- |
| [absolute](https://www.nowcoder.com/tutorial/10008/c877a6071e75445f998894e28943fd5e) | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| [fixed](https://www.nowcoder.com/tutorial/10008/c877a6071e75445f998894e28943fd5e) | 生成固定定位的元素，相对于浏览器窗口进行定位。 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| [relative](https://www.nowcoder.com/tutorial/10008/c877a6071e75445f998894e28943fd5e) | 生成相对定位的元素，相对于其正常位置进行定位。 因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| [static](https://www.nowcoder.com/tutorial/10008/c877a6071e75445f998894e28943fd5e) | 默认值。没有定位，元素出现在正常的流中 （忽略 top, bottom, left, right 或者 z-index 声明）。 |
| [sticky](https://www.nowcoder.com/tutorial/10008/c877a6071e75445f998894e28943fd5e) | 粘性定位，该定位基于用户滚动的位置。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;， 它会固定在目标位置。 **注意:** Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。 |
|                           inherit                            | 规定应该从父元素继承 position 属性的值。                     |
|                           initial                            | 设置该属性为默认值，详情查看 [CSS initial 关键字](https://www.nowcoder.com/tutorial/10011/0413600196dd47a59757fb3ef362fcae)。 |

### static 定位

HTML 元素的默认值，即没有定位，遵循正常的文档流对象。静态定位的元素不会受到 top, bottom, left, right影响。

```css
div.static {
    position: static;
    border: 3px solid #73AD21;
}
```

### fixed 定位

元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动：

```css
p.pos_fixed {
    position:fixed;
    top:30px;
    right:5px;
}
```

**注意：** Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持。

Fixed定位使元素的位置与文档流无关，因此不占据空间。

Fixed定位的元素和其他元素重叠。

### relative 定位

相对定位元素的定位是相对其正常位置。

```css
h2.pos_left {
    position:relative;
    left:-20px;
}
h2.pos_right {
    position:relative;
    left:20px;
}
```

```css
h2.pos_top {
    position:relative;
    top:-50px;
}
```

移动相对定位元素，但它原本所占的空间不会改变。

相对定位元素经常被用来作为绝对定位元素的容器块。

### absolute 定位

绝对定位的元素的位置相对于**最近的已定位父元素**，如果元素没有已定位的父元素，那么它的位置相对于`<html>`：

```css
h2 {
    position:absolute;
    left:100px;
    top:150px;
}
```

absolute 定位使元素的位置与文档流无关，因此不占据空间。

absolute 定位的元素和其他元素重叠。

### sticky 定位

sticky 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。

**position: sticky;** 基于用户的滚动位置来定位。

粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。

它的行为就像 **position:relative;** 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。

元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

**注意:** Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。

```css
div.sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50;
}
```

### 重叠的元素

元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素

z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）

一个元素可以有正数或负数的堆叠顺序：

```css
img {
    position:absolute;
    left:0px;
    top:0px;
    z-index:-1;
}
```

具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面。

**注意：** 如果两个定位元素重叠，没有指定z - index，最后定位在HTML代码中的元素将被显示在最前面。

### top 属性

```css
/*把图像的上边缘设置在其包含元素上边缘之下5像素高的位置：*/
img {
    position:absolute;
    top:5px;
}
```

top 属性规定元素的顶部边缘。该属性定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。

对于相对定义元素，如果 top 和 bottom 都是 auto，其计算值则都是 0；如果其中之一为 auto，则取另一个值的相反数；如果二者都不是 auto，bottom 将取 top 值的相反数。

**注意：** 如果 "position" 属性的值为 "static"，那么设置 "top" 属性不会产生任何效果。

|   值    | 描述                                               |
| :-----: | :------------------------------------------------- |
|  auto   | 默认值。通过浏览器计算上边缘的位置。               |
|    %    | 设置以包含元素的百分比计的上边位置。可使用负值。   |
| length  | 使用 px、cm 等单位设置元素的上边位置。可使用负值。 |
| inherit | 规定应该从父元素继承 top 属性的值。                |

### bottom 属性

```css
/*设置图像的底部边缘，在元素的底边上面5px：*/
img {
    position:absolute;
    bottom:5px;
}
```

对于绝对定位元素，bottom属性设置单位高于/低于包含它的元素的底边。

对于相对定位元素，bottom属性设置单位高于/低于其正常位置的元素的底边。

**注意：**如果"position：static"，底部的属性没有任何效果。

**说明：** 对于 static 元素，为 auto；对于长度值，则为相应的绝对长度；对于百分比数值，为指定值；否则为 auto。 对于相对定义元素，如果 bottom 和 top 都是 auto，其计算值则都是 0；如果其中之一为 auto，则取另一个值的相反数；如果二者都不是 auto，bottom 将取 top 值的相反数。

|   值    | 描述                                               |
| :-----: | :------------------------------------------------- |
|  auto   | 默认值。通过浏览器计算底部的位置。                 |
|    %    | 设置以包含元素的百分比计的底边位置。可使用负值。   |
| length  | 使用 px、cm 等单位设置元素的底边位置。可使用负值。 |
| inherit | 规定应该从父元素继承 bottom 属性的值。             |

### left 属性

```css
/*把图像的左边缘设置在其包含元素左边缘向右5像素的位置：*/
img {
    position:absolute;
    left:5px;
}
```

left 属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。

如果 "position" 属性的值为 "static"，那么设置 "left" 属性不会产生任何效果。

|   值    | 描述                                               |
| :-----: | :------------------------------------------------- |
|  auto   | 默认值。通过浏览器计算左边缘的位置。               |
|    %    | 设置以包含元素的百分比计的左边位置。可使用负值。   |
| length  | 使用 px、cm 等单位设置元素的左边位置。可使用负值。 |
| inherit | 规定应该从父元素继承 left 属性的值。               |

### right 属性

```css
/*把图像的右边缘设置在其包含元素右边缘向左 5 像素的位置：：*/
img {
    position:absolute;
    left:5px;
}
```

对于 static 元素，为 auto；对于长度值，则为相应的绝对长度；对于百分比数值，为指定值；否则为 auto。 对于相对定义元素，left 的计算值始终等于 right。

right 属性规定元素的右边缘。该属性定义了定位元素右外边距边界与其包含块右边界之间的偏移。

**注意：** 如果 "position" 属性的值为 "static"，那么设置 "right" 属性不会产生任何效果。

|   值    | 描述                                               |
| :-----: | :------------------------------------------------- |
|  auto   | 默认值。通过浏览器计算右边缘的位置。               |
|    %    | 设置以包含元素的百分比计的右边位置。可使用负值。   |
| length  | 使用 px、cm 等单位设置元素的右边位置。可使用负值。 |
| inherit | 规定应该从父元素继承 right 属性的值。              |

### clip 属性

裁剪一张图像：

```css
img {
    position:absolute;
    clip:rect(0px,60px,200px,0px);
}
```

如果图像大于包含它的元素，会发生什么？-clip属性，让你指定一个绝对定位的元素，该尺寸应该是可见的，该元素被剪裁成这种形状并显示。

**注意：**如果先有"overflow：visible"，clip属性不起作用。

|   值    | 描述                                                         |
| :-----: | :----------------------------------------------------------- |
|  shape  | 设置元素的形状。唯一合法的形状值是：rect (top, right, bottom, left) |
|  auto   | 默认值。不应用任何剪裁。                                     |
| inherit | 规定应该从父元素继承 clip 属性的值。                         |

### cursor 属性

一些不同的光标：

```css
span.crosshair {cursor:crosshair}
span.help {cursor:help}
span.wait {cursor:wait}
```

cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状

|    值     | 描述                                                         |
| :-------: | :----------------------------------------------------------- |
|    url    | 需使用的自定义光标的 URL。 注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
|  default  | 默认光标（通常是一个箭头）                                   |
|   auto    | 默认。浏览器设置的光标。                                     |
| crosshair | 光标呈现为十字线。                                           |
|  pointer  | 光标呈现为指示链接的指针（一只手）                           |
|   move    | 此光标指示某对象可被移动。                                   |
| e-resize  | 此光标指示矩形框的边缘可被向右（东）移动。                   |
| ne-resize | 此光标指示矩形框的边缘可被向上及向右移动（北/东）。          |
| nw-resize | 此光标指示矩形框的边缘可被向上及向左移动（北/西）。          |
| n-resize  | 此光标指示矩形框的边缘可被向上（北）移动。                   |
| se-resize | 此光标指示矩形框的边缘可被向下及向右移动（南/东）。          |
| sw-resize | 此光标指示矩形框的边缘可被向下及向左移动（南/西）。          |
| s-resize  | 此光标指示矩形框的边缘可被向下移动（北/西）。                |
| w-resize  | 此光标指示矩形框的边缘可被向左移动（西）。                   |
|   text    | 此光标指示文本。                                             |
|   wait    | 此光标指示程序正忙（通常是一只表或沙漏）。                   |
|   help    | 此光标指示可用的帮助（通常是一个问号或一个气球）。           |

### z-index 属性

设置图像的 z-index：

```css
img {
    position:absolute;
    left:0px;
    top:0px;
    z-index:-1;
}
```

z-index 属性指定一个元素的堆叠顺序。

拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

|   值    | 描述                                    |
| :-----: | :-------------------------------------- |
|  auto   | 默认。堆叠顺序与父元素相等。            |
| number  | 设置元素的堆叠顺序。                    |
| inherit | 规定应该从父元素继承 z-index 属性的值。 |



## CSS 布局

###  overflow 属性

CSS overflow 属性用于控制内容溢出元素框时显示的方式。默认情况下，overflow 的值为 visible， 意思是内容溢出元素框。

```css
div.ex1 {
    overflow: scroll;
}

div.ex2 {
    overflow: hidden;
}

div.ex3 {
    overflow: auto;
}

div.ex4 {
    overflow: visible;
}
```

CSS overflow 属性可以控制内容溢出元素框时在对应的元素区间内添加滚动条。

overflow属性有以下值：

|   值    | 描述                                                     |
| :-----: | :------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
|  auto   | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承 overflow 属性的值。                 |

**注意:**overflow 属性只工作于指定高度的块元素上。

**注意:** 在 OS X Lion ( Mac 系统) 系统上，滚动条默认是隐藏的，使用的时候才会显示 (设置 "overflow:scroll" 也是一样的)。

### overflow-x 属性

overflow-x属性指定如果它溢出了元素的内容区是否剪辑左/右边缘内容。

**提示:** 使用overflow-y属性来判断顶部和底部边缘是否裁剪。

```css
div {
    overflow-x:hidden;
}
overflow-x: visible|hidden|scroll|auto|no-display|no-content;
```

|     值     | 描述                                   |
| :--------: | :------------------------------------- |
|  visible   | 不裁剪内容，可能会显示在内容框之外。   |
|   hidden   | 裁剪内容 - 不提供滚动机制。            |
|   scroll   | 裁剪内容 - 提供滚动机制。              |
|    auto    | 如果溢出框，则应该提供滚动机制。       |
| no-display | 如果内容不适合内容框，则删除整个框。   |
| no-content | 如果内容不适合内容框，则隐藏整个内容。 |

### overflow-y 属性

overflow-y属性指定如果它溢出了元素的内容区是否剪辑顶部/底部边缘内容。

**提示:**使用 [overflow-x](https://www.nowcoder.com/tutorial/10011/903627ea4f2c471ea9144cbc81935663) 属性来判断左右边缘是否裁剪。

```css
overflow-y: visible|hidden|scroll|auto|no-display|no-content;
```

|     值     | 描述                                   |
| :--------: | :------------------------------------- |
|  visible   | 不裁剪内容，可能会显示在内容框之外。   |
|   hidden   | 裁剪内容 - 不提供滚动机制。            |
|   scroll   | 裁剪内容 - 提供滚动机制。              |
|    auto    | 如果溢出框，则应该提供滚动机制。       |
| no-display | 如果内容不适合内容框，则删除整个框。   |
| no-content | 如果内容不适合内容框，则隐藏整个内容。 |



## CSS 浮动

CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。

Float（浮动），往往是用于图像，但它在布局时一样非常有用。

### 元素怎样浮动

元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动元素之后的元素将围绕它。浮动元素之前的元素将不会受到影响。

如果图像是右浮动，下面的文本流将环绕在它左边：

```css
img {
    float:right;
}
```

### 彼此相邻的浮动元素

如果你把几个浮动的元素放到一起，如果有空间的话，它们将彼此相邻。

在这里，我们对图片廊使用 float 属性：

```css
.thumbnail {
    float:left;
    width:110px;
    height:90px;
    margin:5px;
}
```

### 清除浮动 

元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用 clear 属性。

clear 属性指定元素两侧不能出现浮动元素。

使用 clear 属性往文本中添加图片廊：

```css
.text_line {
    clear:both;
}
```

### float 属性

float属性指定一个盒子（元素）是否应该浮动。

|   值    | 描述                                                 |
| :-----: | :--------------------------------------------------- |
|  left   | 元素向左浮动。                                       |
|  right  | 元素向右浮动。                                       |
|  none   | 默认值。元素不浮动，并会显示在其在文本中出现的位置。 |
| inherit | 规定应该从父元素继承 float 属性的值。                |

### clear 属性

clear属性指定段落的左侧或右侧不允许浮动的元素。

```css
img {
    float:left;
}
p.clear {
    clear:both;
}
```

|   值    | 描述                                  |
| :-----: | :------------------------------------ |
|  left   | 在左侧不允许浮动元素。                |
|  right  | 在右侧不允许浮动元素。                |
|  both   | 在左右两侧均不允许浮动元素。          |
|  none   | 默认值。允许浮动元素出现在两侧。      |
| inherit | 规定应该从父元素继承 clear 属性的值。 |



## CSS 对齐

### 水平 & 垂直对齐

要水平居中对齐一个元素(如 `<div>`)，可以使用 **margin: auto;**。

设置到元素的宽度将防止它溢出到容器的边缘。元素通过指定宽度，并将两边的空外边距平均分配：

```css
.center {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}
```

**注意:** 如果没有设置 **width** 属性(或者设置 100%)，居中对齐将不起作用。

### 文本居中对齐

如果仅仅是为了文本在元素内居中对齐，可以使用 **text-align: center;**

```css
.center {
    text-align: center;
    border: 3px solid green;
}
```

### 图片居中对齐

要让图片居中对齐, 可以使用 **margin: auto;** 并将它放到 **块** 元素中：

```css
img {
    display: block;
    margin: auto;
    width: 40%;
}
```

### 左右对齐 - 使用定位方式

我们可以使用 **position: absolute;** 属性来对齐元素:

```css
/*右对齐*/
.right {
    position: absolute;
    right: 0px;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

注释：绝对定位元素会被从正常流中删除，并且能够交叠元素。

**提示:** 当使用 **position** 来对齐元素时, 通常 `<body>` 元素会设置 **margin** 和 **padding** 。 这样可以避免在不同的浏览器中出现可见的差异。

当使用 position 属性时，IE8 以及更早的版本存在一个问题。如果容器元素（在我们的案例中是 `<div class="container">`）设置了指定的宽度，并且省略了 !DOCTYPE 声明，那么 IE8 以及更早的版本会在右侧增加 17px 的外边距。这似乎是为滚动条预留的空间。当使用 position 属性时，请始终设置 !DOCTYPE 声明：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		body {
			margin: 0;
			padding: 0;
		}

		.container {
			position: relative;
			width: 100%;
		}

		.right {
			position: absolute;
			right: 0px;
			width: 300px;
			background-color: #b0e0e6;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="right">
			<p><b>注意: </b>当使用浮动属性对齐,总是包括 !DOCTYPE 声明!如果丢失,它将会在 IE 浏览器产生奇怪的结果。</p>
		</div>
	</div>
</body>
</html>
```

### 左右对齐 - 使用 float 方式

我们也可以使用 **float** 属性来对齐元素：

```
.right {
    float: right;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

当像这样对齐元素时，对 `<body>` 元素的外边距和内边距进行预定义是一个好主意。这样可以避免在不同的浏览器中出现可见的差异。

*注意：如果子元素的高度大于父元素，且子元素设置了浮动，那么子元素将溢出，这时候你可以使用 "clearfix(清除浮动)" 来解决该问题。*

我们可以在父元素上添加 overflow: auto; 来解决子元素溢出的问题:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div {
			border: 3px solid #4CAF50;
			padding: 5px;
		}

		.img1 {
			float: right;
		}

		.clearfix {
			overflow: auto;
		}

		.img2 {
			float: right;
		}
	</style>
</head>
<body>

	<p>以下实例图在父元素中溢出，很不美观:</p>

	<div>
		<img class="img1" src="//static.nowcoder.com/tutorial/web-examples/img/pineapple.jpg" alt="Pineapple" width="170" height="170">
		牛客教程 - 学的不仅是技术，更是梦想！！！</div>

	<p style="clear:right">在父元素上通过添加 clearfix 类，并设置 overflow: auto; 来解决该问题:</p>

	<div class="clearfix">
		<img class="img2" src="//static.nowcoder.com/tutorial/web-examples/img/pineapple.jpg" alt="Pineapple" width="170" height="170">
		牛客教程 - 学的不仅是技术，更是梦想！！！</div>

</body>
</html>
```

### 垂直居中对齐 - 使用 padding

CSS 中有很多方式可以实现垂直居中对齐。 一个简单的方式就是头部顶部使用 **padding**：

```css
.center {
    padding: 70px 0;
    border: 3px solid green;
}
```

如果要水平和垂直都居中，可以使用 **padding** 和 **text-align: center**：

```css
.center {
    padding: 70px 0;
    border: 3px solid green;
    text-align: center;
}
```

### 垂直居中 - 使用 line-height

```css
.center {
    line-height: 200px;
    height: 200px;
    border: 3px solid green;
    text-align: center;
}

/* 如果文本有多行，添加以下代码: */
.center p {
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
}
```

### 垂直居中 - 使用 position 和 transform

除了使用 **padding** 和 **line-height** 属性外,我们还可以使用 **transform** 属性来设置垂直居中：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		.center {
			height: 200px;
			position: relative;
			border: 3px solid green;
		}

		.center p {
			margin: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
	</style>
</head>
<body>

	<h2>居中</h2>
	<p>以下实例中，我们使用了 positioning 和 transform 属性来设置水平和垂直居中：</p>

	<div class="center">
		<p>我是水平和垂直居中的。</p>
	</div>

	<p>注意: IE8 及更早版本不支持 transform 属性。</p>

</body>
</html>
```



