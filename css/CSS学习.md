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



## CSS 属性 选择器

具有特定属性的HTML元素样式不仅仅是class和id。

### 属性选择器

下面的例子是把包含标题（title）的所有元素变为蓝色：

```html
<!DOCTYPE html>
<html>
<head>
	<style>
		[title] {
			color: blue;
		}
	</style>
</head>

<body>
	<h2>Will apply to:</h2>
	<h1 title="Hello world">Hello world</h1>
	<a title="nowcoder.com" href="//www.nowcoder.com/">nowcoder.com</a>
	<hr>
	<h2>Will not apply to:</h2>
	<p>Hello!</p>
</body>
</html>
```

### 属性和值选择器

下面的实例改变了标题title='nowcoder'元素的边框样式：

```css
[title=nowcoder] {
    border:5px solid green;
}
```

### 属性和值的选择器 - 多值

下面是包含指定值的title属性的元素样式的例子，**使用（~）分隔属性和值**：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		[title~=hello] {
			color: blue;
		}
	</style>
</head>

<body>
	<h2>将适用:</h2>
	<h1 title="hello world">Hello world</h1>
	<p title="student hello">Hello CSS students!</p>
	<hr>
	<h2>将不适用:</h2>
	<p title="student">Hi CSS students!</p>
</body>
</html>
```

下面是包含指定值的lang属性的元素样式的例子，**使用（|）分隔属性和值**：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		[lang|=en] {
			color: blue;
		}
	</style>
</head>

<body>
	<h2>将适用:</h2>
	<p lang="en">Hello!</p>
	<p lang="en-us">Hi!</p>
	<p lang="en-gb">Ello!</p>
	<hr>
	<h2>将不适用:</h2>
	<p lang="us">Hi!</p>
	<p lang="no">Hei!</p>
</body>
</html>
```

### 表单样式

属性选择器样式无需使用class或id的形式：

```css
input[type="text"] {
    width:150px;
    display:block;
    margin-bottom:10px;
    background-color:yellow;
}
input[type="button"] {
    width:120px;
    margin-left:35px;
    display:block;
}
```

## 

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

所有CSS伪类/元素

| 选择器                                                       | 示例                  | 示例说明                                   |
| :----------------------------------------------------------- | :-------------------- | :----------------------------------------- |
| [:checked](https://www.nowcoder.com/tutorial/10011/6a62a19acdde4b1398a0ba443759abf7) | input:checked         | 选择所有选中的表单元素                     |
| [:disabled](https://www.nowcoder.com/tutorial/10011/069e22b3a83743e289721ebf098d1fed) | input:disabled        | 选择所有禁用的表单元素                     |
| [:empty](https://www.nowcoder.com/tutorial/10011/bdb308ee5c194f4fa1b6e6e10e25dd6b) | p:empty               | 选择所有没有子元素的p元素                  |
| [:enabled](https://www.nowcoder.com/tutorial/10011/8d27db6749f64720b01d63a8f017e750) | input:enabled         | 选择所有启用的表单元素                     |
| [:first-of-type](https://www.nowcoder.com/tutorial/10011/241c92654f814ac9b3b8ea4cc9d3b8b6) | p:first-of-type       | 选择的每个 p 元素是其父元素的第一个 p 元素 |
| [:in-range](https://www.nowcoder.com/tutorial/10011/1983178a06b542b49bbed4f67d282ffb) | input:in-range        | 选择元素指定范围内的值                     |
| [:invalid](https://www.nowcoder.com/tutorial/10011/8b6211968ff54581846c82fc40128b47) | input:invalid         | 选择所有无效的元素                         |
| [:last-child](https://www.nowcoder.com/tutorial/10011/ebb78058049c41019ffb11d74a3a525c) | p:last-child          | 选择所有p元素的最后一个子元素              |
| [:last-of-type](https://www.nowcoder.com/tutorial/10011/fa829cdbbc634cbca68fe441b1445d78) | p:last-of-type        | 选择每个p元素是其母元素的最后一个p元素     |
| [:not(selector)](https://www.nowcoder.com/tutorial/10011/7fc2517a1c4342a0a2439a33915dd542) | :not(p)               | 选择所有p以外的元素                        |
| [:nth-child(n)](https://www.nowcoder.com/tutorial/10011/bc120b09d8594702bd4208de01baa76d) | p:nth-child(2)        | 选择所有 p 元素的父元素的第二个子元素      |
| [:nth-last-child(n)](https://www.nowcoder.com/tutorial/10011/10ac09b8b2924ba4886319a0070b38d7) | p:nth-last-child(2)   | 选择所有p元素倒数的第二个子元素            |
| [:nth-last-of-type(n)](https://www.nowcoder.com/tutorial/10011/3f843fccd7d44fbeb5b9ce99e2a8314e) | p:nth-last-of-type(2) | 选择所有p元素倒数的第二个为p的子元素       |
| [:nth-of-type(n)](https://www.nowcoder.com/tutorial/10011/15071521c91844d9951f198ad410a26e) | p:nth-of-type(2)      | 选择所有p元素第二个为p的子元素             |
| [:only-of-type](https://www.nowcoder.com/tutorial/10011/cf73adcaec764549aeb6172178d7bb5b) | p:only-of-type        | 选择所有仅有一个子元素为p的元素            |
| [:only-child](https://www.nowcoder.com/tutorial/10011/e8a6dc7500e24f5ca88ec23e551d5fd5) | p:only-child          | 选择所有仅有一个子元素的p元素              |
| [:optional](https://www.nowcoder.com/tutorial/10011/64ca8bd6acb04d12a02d204e92ab49a6) | input:optional        | 选择没有"required"的元素属性               |
| [:out-of-range](https://www.nowcoder.com/tutorial/10011/cfd96505bbaa493ba880b3dd1daad8f7) | input:out-of-range    | 选择指定范围以外的值的元素属性             |
| [:read-only](https://www.nowcoder.com/tutorial/10011/d96fe81c7c19438fb6890015f2b16704) | input:read-only       | 选择只读属性的元素属性                     |
| [:read-write](https://www.nowcoder.com/tutorial/10011/922bff1f61bf42d69767636e7e5273cb) | input:read-write      | 选择没有只读属性的元素属性                 |
| [:required](https://www.nowcoder.com/tutorial/10011/489e16d53ff041789c37501dcbc71e1d) | input:required        | 选择有"required"属性指定的元素属性         |
| [:root](https://www.nowcoder.com/tutorial/10011/cbd0b0045f0c4f8c8b7565d7739c1901) | root                  | 选择文档的根元素                           |
| [:target](https://www.nowcoder.com/tutorial/10011/2b88d2b8ffea4da4b6af99a7456f31b6) | #news:target          | 选择当前活动#news元素(点击URL包含锚的名字) |
| [:valid](https://www.nowcoder.com/tutorial/10011/7dd0878ab43f48acb22fc15286f43852) | input:valid           | 选择所有有效值的属性                       |
| [:link](https://www.nowcoder.com/tutorial/10011/3bacadaa65b7447d910736d5d0ff9c68) | a:link                | 选择所有未访问链接                         |
| [:visited](https://www.nowcoder.com/tutorial/10011/2d6a820bcf7b4d5f920435a6edc491f7) | a:visited             | 选择所有访问过的链接                       |
| [:active](https://www.nowcoder.com/tutorial/10011/c18d3c3001fd4a24a03cabf8050dc405) | a:active              | 选择正在活动链接                           |
| [:hover](https://www.nowcoder.com/tutorial/10011/a49ef44f893f48f1802c6ac30c8db82b) | a:hover               | 把鼠标放在链接上的状态                     |
| [:focus](https://www.nowcoder.com/tutorial/10011/33b5eaf37e474465bfe4ffcc0c0a6da9) | input:focus           | 选择元素输入后具有焦点                     |
| [:first-letter](https://www.nowcoder.com/tutorial/10011/5f51ddaee5d74c8baff788d5f06d91f2) | p:first-letter        | 选择每个 `<p>` 元素的第一个字母            |
| [:first-line](https://www.nowcoder.com/tutorial/10011/8de542e2258a40e79d1a36e8c688fbf9) | p:first-line          | 选择每个 `<p>` 元素的第一行                |
| [:first-child](https://www.nowcoder.com/tutorial/10011/5f188266cc2d443eaa2a51213f6d6f17) | p:first-child         | 选择器匹配属于任意元素的第一个子元素的元素 |
| [:before](https://www.nowcoder.com/tutorial/10011/e9d9bc1bdc274603b26343cbbfd0c382) | p:before              | 在每个 `<p>` 元素之前插入内容              |
| [:after](https://www.nowcoder.com/tutorial/10011/675df255316d45e3b2782b0213e392e6) | p:after               | 在每个 `<p>` 元素之后插入内容              |
| [:lang(*language*)](https://www.nowcoder.com/tutorial/10011/e127c655bf69458785f97254b02a7891) | p:lang(it)            | 为 `<p>` 元素的lang属性选择一个开始值      |

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

### :lang 伪类

:lang 伪类使你有能力为不同的语言定义特殊的规则

在下面的例子中，:lang 类为属性值为 no 的q元素定义引号的类型：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		q:lang(no) {
			quotes: "~""~";
		}
	</style>
</head>

<body>
	<p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
	<p>在这个例子中,:lang定义了q元素的值为lang =“no”</p>
	<p><b>注意:</b> 仅当 !DOCTYPE 已经声明时 IE8 支持 :lang.</p>
</body>
</html>
```

## CSS 伪元素

CSS伪元素是用来添加一些选择器的特殊效果。

### 语法

伪元素的语法：

```css
selector:pseudo-element {property:value;}
```

CSS类也可以使用伪元素：

```css
selector.class:pseudo-element {property:value;}
```

所有CSS伪类/元素

|                            选择器                            |      示例      | 示例说明                                   |
| :----------------------------------------------------------: | :------------: | :----------------------------------------- |
| [:link](https://www.nowcoder.com/tutorial/10011/3bacadaa65b7447d910736d5d0ff9c68) |     a:link     | 选择所有未访问链接                         |
| [:visited](https://www.nowcoder.com/tutorial/10011/2d6a820bcf7b4d5f920435a6edc491f7) |   a:visited    | 选择所有访问过的链接                       |
| [:active](https://www.nowcoder.com/tutorial/10011/c18d3c3001fd4a24a03cabf8050dc405) |    a:active    | 选择正在活动链接                           |
| [:hover](https://www.nowcoder.com/tutorial/10011/a49ef44f893f48f1802c6ac30c8db82b) |    a:hover     | 把鼠标放在链接上的状态                     |
| [:focus](https://www.nowcoder.com/tutorial/10011/33b5eaf37e474465bfe4ffcc0c0a6da9) |  input:focus   | 选择元素输入后具有焦点                     |
| [:first-letter](https://www.nowcoder.com/tutorial/10011/5f51ddaee5d74c8baff788d5f06d91f2) | p:first-letter | 选择每个元素的第一个字母                   |
| [:first-line](https://www.nowcoder.com/tutorial/10011/8de542e2258a40e79d1a36e8c688fbf9) |  p:first-line  | 选择每个元素的第一行                       |
| [:first-child](https://www.nowcoder.com/tutorial/10011/5f188266cc2d443eaa2a51213f6d6f17) | p:first-child  | 选择器匹配属于任意元素的第一个子元素的元素 |
| [:before](https://www.nowcoder.com/tutorial/10011/e9d9bc1bdc274603b26343cbbfd0c382) |    p:before    | 在每个元素之前插入内容                     |
| [:after](https://www.nowcoder.com/tutorial/10011/675df255316d45e3b2782b0213e392e6) |    p:after     | 在每个元素之后插入内容                     |
| [:lang(*language*)](https://www.nowcoder.com/tutorial/10011/e127c655bf69458785f97254b02a7891) |   p:lang(it)   | 为元素的lang属性选择一个开始值             |

### :first-line 伪元素

"first-line" 伪元素用于向文本的首行设置特殊样式。

在下面的例子中，浏览器会根据 "first-line" 伪元素中的样式对 p 元素的第一行文本进行格式化：

```css
p:first-line {
    color:#ff0000;
    font-variant:small-caps;
}
```

**注意：**"first-line" 伪元素只能用于块级元素。

**注意：** 下面的属性可应用于 "first-line" 伪元素：

- font properties
- color properties
- background properties
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

### :first-letter 伪元素

"first-letter" 伪元素用于向文本的首字母设置特殊样式：

```css
p:first-letter {
    color:#ff0000;
    font-size:xx-large;
}
```

**注意：** "first-letter" 伪元素只能用于块级元素。

### 伪元素和CSS类

伪元素可以结合CSS类：

下面的例子会使所有 class 为 article 的段落的首字母变为红色。

```css
p.article:first-letter {color:#ff0000;}

<p class="article">文章段落</p>
```

### 多个伪元素

可以结合多个伪元素来使用。

在下面的例子中，段落的第一个字母将显示为红色，其字体大小为 xx-large。第一行中的其余文本将为蓝色，并以小型大写字母显示。段落中的其余文本将以默认字体大小和颜色来显示：

```css
p:first-letter {
    color:#ff0000;
    font-size:xx-large;
}
p:first-line {
    color:#0000ff;
    font-variant:small-caps;
}
```

### :before 伪元素

":before" 伪元素可以在元素的内容前面插入新内容。

下面的例子在每个 `<h1>` 元素前面插入一幅图片：

```css
h1:before {
    content:url(smiley.gif);
}
```

### :after 伪元素

":after" 伪元素可以在元素的内容之后插入新内容。

下面的例子在每个 `<h1>` 元素后面插入一幅图片：

```css
h1:after {
    content:url(smiley.gif);
}
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



## CSS 导航栏

### 导航栏 = 链接列表

导航条基本上是一个链接列表，所以使用 `<ul>` 和 `<li>` 元素非常有意义：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	</style>
</head>
<body>
	<ul>
		<li><a href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li><a href="#about">关于</a></li>
	</ul>
</body>
</html>
```

例子解析：

- list-style-type:none - 移除列表前小标志。一个导航栏并不需要列表标记
- 移除浏览器的默认设置将边距和填充设置为0

### 垂直导航栏

上面的代码，我们只需要 `<a>` 元素的样式，建立一个垂直的导航栏：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
		li a {
			display: block;
			color: #000;
			padding: 8px 16px;
			text-decoration: none;
		}
		a:link,
		a:visited {
			display: block;
			font-weight: bold;
			color: #FFFFFF;
			background-color: #98bf21;
			width: 120px;
			text-align: center;
			padding: 4px;
			text-decoration: none;
			text-transform: uppercase;
		}

		/* 鼠标移动到选项上修改背景颜色 */
		li a:hover {
			background-color: #555;
			color: white;
		}
		a:active {
			background-color: #7A991A;
		}
	</style>
</head>

<body>
	<ul>
		<li><a href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li><a href="#about">关于</a></li>
	</ul>
</body>
</html>
```

示例说明：

- display:block - 显示块元素的链接，让整体变为可点击链接区域（不只是文本），它允许我们指定宽度
- width:60px - 块元素默认情况下是最大宽度。我们要指定一个60像素的宽度

**注意：** 请务必指定 `<a>` 元素在垂直导航栏的的宽度。如果省略宽度，IE6可能产生意想不到的效果。

### 创建链接并添加边框

可以在 `<li>` or `<a>` 上添加**text-align:center** 样式来让链接居中。

可以在 **border** `<ul>` 上添加 **border** 属性来让导航栏有边框。如果要在每个选项上添加边框，可以在每个 `<li>` 元素上添加 **border-bottom** :

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			width: 200px;
			background-color: #f1f1f1;
			border: 1px solid #555;
		}

		li a {
			display: block;
			color: #000;
			padding: 8px 16px;
			text-decoration: none;
		}

		li {
			text-align: center;
			border-bottom: 1px solid #555;
		}

		li:last-child {
			border-bottom: none;
		}

		li a.active {
			background-color: #4CAF50;
			color: white;
		}

		li a:hover:not(.active) {
			background-color: #555;
			color: white;
		}
	</style>
</head>
<body>

	<h2>垂直导航条</h2>
	<p>以下实例让每个链接居中，并给每个列表选项添加边框。</p>

	<ul>
		<li><a class="active" href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li><a href="#about">关于</a></li>
	</ul>

</body>
</html>
```

### 全屏高度的固定导航条

创建一个左边是全屏高度的固定导航条，右边是可滚动的内容。

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		body {
			margin: 0;
		}

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			width: 25%;
			background-color: #f1f1f1;
			position: fixed;
			height: 100%;
			overflow: auto;
		}

		li a {
			display: block;
			color: #000;
			padding: 8px 16px;
			text-decoration: none;
		}

		li a.active {
			background-color: #4CAF50;
			color: white;
		}

		li a:hover:not(.active) {
			background-color: #555;
			color: white;
		}
	</style>
</head>
<body>

	<ul>
		<li><a class="active" href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li><a href="#about">关于</a></li>
	</ul>

	<div style="margin-left:25%;padding:1px 16px;height:1000px;">
		<h2>Fixed Full-height Side Nav</h2>
		<h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
		<p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width.
			If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
		<p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long
			(for example if it has over 50 links inside of it).</p>
		<p>Some text..</p>
		<p>Some text..</p>
		<p>Some text..</p>
		<p>Some text..</p>
		<p>Some text..</p>
		<p>Some text..</p>
		<p>Some text..</p>
	</div>

</body>
</html>
```

### 水平导航栏

有两种方法创建横向导航栏。使用**内联(inline)**或**浮动(float)**的列表项。

这两种方法都很好，但如果你想链接到具有相同的大小，你必须使用浮动的方法。

#### 内联列表项

建立一个横向导航栏的方法之一是指定元素， 上述代码是标准的内联：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}

		li {
			display: inline;
		}
	</style>
</head>

<body>
	<ul>
		<li><a href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li><a href="#about">关于</a></li>
	</ul>

</body>
</html>
```

实例解析：

- display:inline;

  默认情况下，`<li>` 元素是块元素。在这里，我们删除换行符之前和之后每个列表项，以显示一行。

#### 浮动列表项

在上面的例子中链接有不同的宽度。

对于所有的链接宽度相等，浮动 `<li>` 元素，并指定为 `<a>` 元素的宽度：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
		}

		li {
			float: left;
		}

		a {
			display: block;
			width: 60px;
			background-color: #dddddd;
		}
	</style>
</head>

<body>
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#news">News</a></li>
		<li><a href="#contact">Contact</a></li>
		<li><a href="#about">About</a></li>
	</ul>

	<p><b>注意:</b> 如果 !DOCTYPE 没有定义, floating 可以产生意想不到的结果.</p>

	<p>背景颜色添加到链接中显示链接的区域。整个链接区域是可点击的,不仅仅是文本。</p>

	<p><b>注意:</b> overflow:hidden 添加到 ul 元素,以防止 li 元素列表的外出。.</p>

</body>
</html>
```

实例解析：

- float:left - 使用浮动块元素的幻灯片彼此相邻
- display:block - 显示块元素的链接，让整体变为可点击链接区域（不只是文本），它允许我们指定宽度
- width:60px - 块元素默认情况下是最大宽度。我们要指定一个60像素的宽度

#### 链接右对齐

将导航条最右边的选项设置右对齐 (float:right;)：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			background-color: #333;
		}

		li {
			float: left;
		}

		li a {
			display: block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}

		li a:hover:not(.active) {
			background-color: #111;
		}

		.active {
			background-color: #4CAF50;
		}
	</style>
</head>
<body>

	<ul>
		<li><a href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li style="float:right"><a class="active" href="#about">关于</a></li>
	</ul>

</body>
</html>
```

#### 添加分割线

`<li>` 通过 **border-right** 样式来添加分割线：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			background-color: #333;
		}

		li {
			float: left;
			border-right: 1px solid #bbb;
		}

		li:last-child {
			border-right: none;
		}

		li a {
			display: block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}

		li a:hover:not(.active) {
			background-color: #111;
		}

		.active {
			background-color: #4CAF50;
		}
	</style>
</head>
<body>

	<ul>
		<li><a class="active" href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li style="float:right"><a href="#about">关于</a></li>
	</ul>

</body>
</html>
```

### 固定导航条

可以设置页面的导航条固定在头部或者底部：

#### **固定在头部**

```css
ul {
    position: fixed;
    top: 0;
    width: 100%;
}
```

#### **固定在底部**

```css
ul {
    position: fixed;
    bottom: 0;
    width: 100%;
}
```

### 灰色水平导航条

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			border: 1px solid #e7e7e7;
			background-color: #f3f3f3;
		}

		li {
			float: left;
		}

		li a {
			display: block;
			color: #666;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}

		li a:hover:not(.active) {
			background-color: #ddd;
		}

		li a.active {
			color: white;
			background-color: #4CAF50;
		}
	</style>
</head>
<body>

	<ul>
		<li><a class="active" href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<li><a href="#contact">联系</a></li>
		<li><a href="#about">关于</a></li>
	</ul>

</body>
</html>
```



## CSS 下拉菜单

### 基本下拉菜单

当鼠标移动到指定元素上时，会出现下拉菜单。

```html
<!DOCTYPE html>
<html>
<head>
	<title>牛客教程(nowcoder.com)</title>
	<meta charset="utf-8">
	<style>
		.dropdown {
			position: relative;
			display: inline-block;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			background-color: #f9f9f9;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			padding: 12px 16px;
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}
	</style>
</head>
<body>

	<h2>鼠标移动后出现下拉菜单</h2>
	<p>将鼠标移动到指定元素上就能看到下拉菜单。</p>

	<div class="dropdown">
		<span>鼠标移动到我这！</span>
		<div class="dropdown-content">
			<p>牛客教程</p>
			<p>www.nowcoder.com</p>
		</div>
	</div>

</body>
</html>
```

**HTML 部分：**

我们可以使用任何的 HTML 元素来打开下拉菜单，如：`<span>`, 或 `<button>` 元素。

使用容器元素 (如： `<div>`) 来创建下拉菜单的内容，并放在任何你想放的位置上。

使用 `<div>` 元素来包裹这些元素，并使用 CSS 来设置下拉内容的样式。

**CSS 部分：**

`.dropdown` 类使用 `position:relative`, 这将设置下拉菜单的内容放置在下拉按钮 (使用 `position:absolute`) 的右下角位置。

`.dropdown-content` 类中是实际的下拉菜单。默认是隐藏的，在鼠标移动到指定元素后会显示。 注意 `min-width` 的值设置为 160px。你可以随意修改它。 **注意:** 如果你想设置下拉内容与下拉按钮的宽度一致，可设置 `width` 为 100% ( `overflow:auto` 设置可以在小尺寸屏幕上滚动)。

我们使用 `box-shadow` 属性让下拉菜单看起来像一个"卡片"。

`:hover` 选择器用于在用户将鼠标移动到下拉按钮上时显示下拉菜单。

### 下拉菜单

创建下拉菜单，并允许用户选取列表中的某一项。

这个实例类似前面的实例，当我们在下拉列表中添加了链接，并设置了样式。

```html
<!DOCTYPE html>
<html>
<head>
	<title>牛客教程(nowcoder.com)</title>
	<meta charset="utf-8">
	<style>
		.dropbtn {
			background-color: #4CAF50;
			color: white;
			padding: 16px;
			font-size: 16px;
			border: none;
			cursor: pointer;
		}

		.dropdown {
			position: relative;
			display: inline-block;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			background-color: #f9f9f9;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		}

		.dropdown-content a {
			color: black;
			padding: 12px 16px;
			text-decoration: none;
			display: block;
		}

		.dropdown-content a:hover {
			background-color: #f1f1f1
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}

		.dropdown:hover .dropbtn {
			background-color: #3e8e41;
		}
	</style>
</head>
<body>

	<h2>下拉菜单</h2>
	<p>鼠标移动到按钮上打开下拉菜单。</p>

	<div class="dropdown">
		<button class="dropbtn">下拉菜单</button>
		<div class="dropdown-content">
			<a href="//www.nowcoder.com">牛客教程 1</a>
			<a href="//www.nowcoder.com">牛客教程 2</a>
			<a href="//www.nowcoder.com">牛客教程 3</a>
		</div>
	</div>

</body>
</html>
```

### 下拉内容对齐方式

如果你想设置右浮动的下拉菜单内容方向是从右到左，而不是从左到右，可以添加以下代码 `right: 0;`

```css
.dropdown-content {
    right: 0;
}
```

### 导航条上添加下拉菜单

```html
<!DOCTYPE html>
<html>
<head>
	<title>牛客教程(nowcoder.com)</title>
	<meta charset="utf-8">
	<style>
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			overflow: hidden;
			background-color: #333;
		}

		li {
			float: left;
		}

		li a,
		.dropbtn {
			display: inline-block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}

		li a:hover,
		.dropdown:hover,
		.dropbtn {
			background-color: #111;
		}

		.dropdown {
			display: inline-block;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			background-color: #f9f9f9;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		}

		.dropdown-content a {
			color: black;
			padding: 12px 16px;
			text-decoration: none;
			display: block;
		}

		.dropdown-content a:hover {
			background-color: #f1f1f1
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}
	</style>
</head>
<body>

	<ul>
		<li><a class="active" href="#home">主页</a></li>
		<li><a href="#news">新闻</a></li>
		<div class="dropdown">
			<a href="#" class="dropbtn">下拉菜单</a>
			<div class="dropdown-content">
				<a href="#">链接 1</a>
				<a href="#">链接 2</a>
				<a href="#">链接 3</a>
			</div>
		</div>
	</ul>

	<h3>导航栏上的下拉菜单</h3>
	<p>鼠标移动到 "下拉菜单" 链接先显示下拉菜单。</p>

</body>
</html>
```



##  CSS 提示工具

### 基础提示框(Tooltip)

提示框在鼠标移动到指定元素上显示：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
</head>
<style>
	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;

		/* 定位 */
		position: absolute;
		z-index: 1;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
</style>
<body style="text-align:center;">

	<div class="tooltip">鼠标移动到这
		<span class="tooltiptext">提示文本</span>
	</div>

</body>
</html>
```

实例解析

**HTML：** 使用容器元素 (like `<div>`) 并添加 **"tooltip"** 类。在鼠标移动到 `<div>` 上时显示提示信息。

提示文本放在内联元素上(如 `<span>`) 并使用 **class="tooltiptext"**。

**CSS：** tooltip 类使用 **position:relative**, 提示文本需要设置定位值 **position:absolute**。 **注意:** 接下来的实例会显示更多的定位效果。

**tooltiptext** 类用于实际的提示文本。模式是隐藏的，在鼠标移动到元素显示 。设置了一些宽度、背景色、字体色等样式。

CSS3 **border-radius** 属性用于为提示框添加圆角。

**:hover** 选择器用于在鼠标移动到到指定元素 `<div>` 上时显示的提示。

### 定位提示工具

#### **显示在左侧**

以下实例中，提示工具显示在指定元素的右侧(**left:105%**) 。

注意 **top:-5px** 同于定位在容器元素的中间。使用数字 **5** 因为提示文本的顶部和底部的内边距（padding）是 5px。

如果你修改 padding 的值，top 值也要对应修改，这样才可以确保它是居中对齐的。

在提示框显示在左边的情况也是这个原理。

```css
.tooltip .tooltiptext {
    top: -5px;
    left: 105%; 
}
```

#### **显示在左侧**

```css
.tooltip .tooltiptext {
    top: -5px;
    right: 105%; 
}
```

**显示在头部**

如果你想要提示工具显示在头部和底部。我们需要使用 **margin-left** 属性，并设置为 -60px。 这个数字计算来源是使用宽度的一半来居中对齐，即： width/2 (120/2 = 60)。

#### **显示在头部**

```css
.tooltip .tooltiptext {
    width: 120px;
    bottom: 100%;
    left: 50%; 
    margin-left: -60px; /* 使用一半宽度 (120/2 = 60) 来居中提示工具 */
}
```

#### **显示在底部**

```css
.tooltip .tooltiptext {
    width: 120px;
    top: 100%;
    left: 50%; 
    margin-left: -60px; /* 使用一半宽度 (120/2 = 60) 来居中提示工具 */
}
```

### 添加箭头

我们可以用CSS 伪元素 ::after 及 content 属性为提示工具创建一个小箭头标志，箭头是由边框组成的，但组合起来后提示工具像个语音信息框。

以下实例演示了如何为显示在顶部的提示工具添加底部箭头：

#### **顶部提示框/底部箭头**

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
</head>
<style>
	.tooltip {
		position: relative;
		display: inline-block;
		border-bottom: 1px dotted black;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		width: 120px;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		bottom: 150%;
		left: 50%;
		margin-left: -60px;
	}

	.tooltip .tooltiptext::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: black transparent transparent transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}
</style>
<body style="text-align:center;">

	<h2>顶部提示框/底部箭头</h2>

	<div class="tooltip">鼠标移动到我这
		<span class="tooltiptext">提示文本</span>
	</div>

</body>
</html>
```

在提示工具内定位箭头: **top: 100%** , 箭头将显示在提示工具的底部。**left: 50%** 用于居中对齐箭头。

**注意：** **border-width** 属性指定了箭头的大小。如果你修改它，也要修改 **margin-left** 值。这样箭头在能居中显示。

**border-color** 用于将内容转换为箭头。设置顶部边框为黑色，其他是透明的。如果设置了其他的也是黑色则会显示为一个黑色的四边形。

#### **底部提示框/顶部箭头**

```css
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* 提示工具头部 */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}
```

#### **右侧提示框/左侧箭头**

```css
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* 提示工具左侧 */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}
```

#### **左侧提示框/右侧箭头**

```css
.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 100%; /* 提示工具右侧 */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
}
```

### 淡入效果

我们可以使用 CSS3 transition 属性及 opacity 属性来实现提示工具的淡入效果：

```css
.tooltip .tooltiptext {
    opacity: 0;
    transition: opacity 1s;
}

.tooltip:hover .tooltiptext {
    opacity: 1;
}
```



## CSS 图片廊

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div.img {
			margin: 5px;
			border: 1px solid #ccc;
			float: left;
			width: 180px;
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
	</style>
</head>
<body>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/demo1.jpg" alt="图片文本描述" width="300" height="200">
			</a>
			<div class="desc">这里添加图片文本描述</div>
		</div>
	</div>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/demo2.jpg" alt="图片文本描述" width="300" height="200">
			</a>
			<div class="desc">这里添加图片文本描述</div>
		</div>
	</div>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/demo3.jpg" alt="图片文本描述" width="300" height="200">
			</a>
			<div class="desc">这里添加图片文本描述</div>
		</div>
	</div>

	<div class="responsive">
		<div class="img">
			<a target="_blank" href="//www.nowcoder.com">
				<img src="//static.nowcoder.com/tutorial/web-examples/img/demo4.jpg" alt="图片文本描述" width="300" height="200">
			</a>
			<div class="desc">这里添加图片文本描述</div>
		</div>
	</div>

</body>
</html>
```

**响应式图片廊**

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

## CSS 图像透明/不透明

使用CSS很容易创建透明的图像，CSS3中属性的透明度是 **opacity**。

*CSS Opacity属性是W3C的CSS3建议的一部分。*

```css
opacity:0.4;
filter:alpha(opacity=40); /* IE8 及其更早版本 */
```

### 图像的透明度 - 悬停效果

```css
img {
  opacity:0.4;
  filter:alpha(opacity=40); /*  IE8 及其更早版本 */
}
img:hover {
  opacity:1.0;
  filter:alpha(opacity=100); /* IE8 及其更早版本 */
}
```

### 透明的盒子中的文字

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		div.background {
			width: 500px;
			height: 250px;
			background: url(img/klematis.jpg) repeat;
			border: 2px solid black;
		}

		div.transbox {
			width: 400px;
			height: 180px;
			margin: 30px 50px;
			background-color: #ffffff;
			border: 1px solid black;
			opacity: 0.6;
			filter: alpha(opacity=60);
			/* For IE8 and earlier */
		}

		div.transbox p {
			margin: 30px 40px;
			font-weight: bold;
			color: #000000;
		}
	</style>
</head>
<body>
	<div class="background">
		<div class="transbox">
			<p>
				这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。这些文本在透明框里。
			</p>
		</div>
	</div>
</body>
</html>
```

## CSS 图像拼合技术

图像拼合就是单个图像的集合。

有许多图像的网页可能需要很长的时间来加载和生成多个服务器的请求。

使用图像拼合会降低服务器的请求数量，并节省带宽。

### 图像拼合简单方法

```css
img.home {
    width:46px;
    height:44px;
    background:url(img_navsprites.gif) 0 0;
}
```

**实例解析：**

- `<img class="home" src="img_trans.gif" />` - 因为不能为空,src属性只定义了一个小的透明图像。显示的图像将是我们在CSS中指定的背景图像
- 宽度：46px;高度：44px; - 定义我们使用的那部分图像
- background:url(img_navsprites.gif) 0 0; - 定义背景图像和它的位置（左0px，顶部0px）

这是使用图像拼合最简单的方法，现在我们使用链接和悬停效果。

### 创建一个导航列表

我们想使用拼合图像 ("img_navsprites.gif")，以创建一个导航列表。

我们将使用一个HTML列表，因为它可以链接，同时还支持背景图像：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		#navlist {
			position: relative;
		}

		#navlist li {
			margin: 0;
			padding: 0;
			list-style: none;
			position: absolute;
			top: 0;
		}

		#navlist li,
		#navlist a {
			height: 44px;
			display: block;
		}

		#home {
			left: 0px;
			width: 45px;
		}

		#home {
			background: url('//static.nowcoder.com/tutorial/web-examples/img/img_navsprites.gif') 0 0;
		}

		#prev {
			left: 62px;
			width: 43px;
		}

		#prev {
			background: url('//static.nowcoder.com/tutorial/web-examples/img/img_navsprites.gif') -47px 0;
		}

		#next {
			left: 130px;
			width: 43px;
		}

		#next {
			background: url('//static.nowcoder.com/tutorial/web-examples/img/img_navsprites.gif') -91px 0;
		}
	</style>
</head>

<body>
	<ul id="navlist">
		<li id="home"><a href="//www.nowcoder.com"></a></li>
		<li id="prev"><a href="//www.nowcoder.com/courses"></a></li>
		<li id="next"><a href="//www.nowcoder.com/library"></a></li>
	</ul>
</body>
</html>
```

### 悬停效果

现在，我们希望我们的导航列表中添加一个悬停效果。

我们的新图像 ("img_navsprites_hover.gif") 包含三个导航图像和三幅图像：因为这是一个单一的图像，而不是6个单独的图像文件，当用户停留在图像上不会有延迟加载。

我们添加悬停效果只添加三行代码：

```css
#home a:hover{background: url('img_navsprites_hover.gif') 0 -45px;}
#prev a:hover{background: url('img_navsprites_hover.gif') -47px -45px;}
#next a:hover{background: url('img_navsprites_hover.gif') -91px -45px;}
```

**实例解析：**

- 由于该列表项包含一个链接，我们可以使用：hover伪类
- `#home a:hover{background: transparent url(img_navsprites_hover.gif) 0 -45px;}` - 对于所有三个悬停图像，我们指定相同的背景位置，只是每个再向下45px

## CSS 媒体类型

媒体类型允许你指定文件将如何在不同媒体呈现。该文件可以以不同的方式显示在屏幕上，在纸张上，或听觉浏览器等等。

一些 CSS 属性只设计了某些媒体。例如 **voice-family** 属性是专为听觉用户代理。其他一些属性可用于不同的媒体类型。例如， **font-size** 属性可用于屏幕和印刷媒体，但有不同的值。屏幕和纸上的文件不同，通常需要一个更大的字体，**sans-serif** 字体比较适合在屏幕上阅读，而 **serif** 字体更容易在纸上阅读。

### @media 规则

@media 规则允许在相同样式表为不同媒体设置不同的样式。

在下面的例子告诉我们浏览器屏幕上显示一个 14 像素的 Verdana 字体样式。但是如果页面打印，将是 10 个像素的 Times 字体。请注意，font-weight 在屏幕上和纸上设置为粗体：

```css
@media screen {
    p.test {font-family:verdana,sans-serif;font-size:14px;}
}
@media print {
    p.test {font-family:times,serif;font-size:10px;}
}
@media screen,print {
    p.test {font-weight:bold;}
}
```

### 其他媒体类型

**注意：**媒体类型名称不区分大小写。

|  媒体类型  | 描述                                                   |
| :--------: | :----------------------------------------------------- |
|    all     | 用于所有的媒体设备。                                   |
|   aural    | 用于语音和音频合成器。                                 |
|  braille   | 用于盲人用点字法触觉回馈设备。                         |
|  embossed  | 用于分页的盲人用点字法打印机。                         |
|  handheld  | 用于小的手持的设备。                                   |
|   print    | 用于打印机。                                           |
| projection | 用于方案展示，比如幻灯片。                             |
|   screen   | 用于电脑显示器。                                       |
|    tty     | 用于使用固定密度字母栅格的媒体，比如电传打字机和终端。 |
|     tv     | 用于电视机类型的设备。                                 |



## CSS 表单

### 输入框(input) 样式

使用 width 属性来设置输入框的宽度：

```css
input {
  width: 100%;
}
```

以上实例中设置了所有 `<input>` 元素的宽度为 100%，如果你只想设置指定类型的输入框可以使用以下属性选择器：

- `input[type=text]` - 选取文本输入框
- `input[type=password]` - 选择密码的输入框
- `input[type=number]` - 选择数字的输入框

### 输入框填充

使用 `padding` 属性可以在输入框中添加内边距。

```css
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
```

注意我们设置了 `box-sizing` 属性为 `border-box`。这样可以确保浏览器呈现出带有指定宽度和高度的输入框是把边框和内边距一起计算进去的。

### 输入框(input) 边框

使用 `border` 属性可以修改 input 边框的大小或颜色，使用 `border-radius` 属性可以给 input 添加圆角：

```css
input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}
```

如果你只想添加底部边框可以使用 `border-bottom` 属性：

```css
input[type=text] {
  border: none;
  border-bottom: 2px solid red;
}
```

### 输入框(input) 颜色

可以使用 `background-color` 属性来设置输入框的背景颜色，`color` 属性用于修改文本颜色：

```css
input[type=text] {
  background-color: #3CBC8D;
  color: white;
}
```

### 输入框(input) 聚焦

默认情况下，一些浏览器在输入框获取焦点时（点击输入框）会有一个蓝色轮廓。我们可以设置 input 样式为 `outline: none;` 来忽略该效果。

使用 `:focus` 选择器可以设置输入框在获取焦点时的样式：

```css
input[type=text]:focus {
  background-color: lightblue;
}
input[type=text]:focus {
  border: 3px solid #555;
}
```

### 输入框(input) 图标

如果你想在输入框中添加图标，可以使用 `background-image` 属性和用于定位的`background-position` 属性。注意设置图标的左边距，让图标有一定的空间：

```css
input[type=text] {
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding-left: 40px;
}
```

### 带动画的搜索框

以下实例使用了 CSS `transition` 属性，该属性设置了输入框在获取焦点时会向右延展。你可以在 [CSS 动画](https://www.nowcoder.com/tutorial/10008/1d53b4d5adc3447baa371d01056732c1) 章节查看更多内容。

```css
input[type=text] {
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
  width: 100%;
}
```

### 文本框（textarea）样式

**注意:** 使用 `resize` 属性来禁用文本框可以重置大小的功能（一般拖动右下角可以重置大小）。

```css
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
```



### 下拉菜单（select）样式

```css
select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
```



### 按钮样式

```css
input[type=button], input[type=submit], input[type=reset] {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

/* 提示: 使用 width: 100% 设置全宽按钮 */
```



### 响应式表单

响应式表带可以根据浏览器窗口的大小重新布局各个元素，我们可以通过重置浏览器窗口大小来查看效果：

```html
<!DOCTYPE html>
<html>
<head>
	<style>
		* {
			box-sizing: border-box;
		}

		input[type=text], select, textarea {
			width: 100%;
			padding: 12px;
			border: 1px solid #ccc;
			border-radius: 4px;
			resize: vertical;
		}

		label {
			padding: 12px 12px 12px 0;
			display: inline-block;
		}

		input[type=submit] {
			background-color: #4CAF50;
			color: white;
			padding: 12px 20px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			float: right;
		}

		input[type=submit]:hover {
			background-color: #45a049;
		}

		.container {
			border-radius: 5px;
			background-color: #f2f2f2;
			padding: 20px;
		}

		.col-25 {
			float: left;
			width: 25%;
			margin-top: 6px;
		}

		.col-75 {
			float: left;
			width: 75%;
			margin-top: 6px;
		}

		/* 清除浮动 */
		.row:after {
			content: "";
			display: table;
			clear: both;
		}

		/* 响应式布局 layout - 在屏幕宽度小于 600px 时， 设置为上下堆叠元素 */
		@media screen and (max-width: 600px) {
			.col-25, .col-75, input[type=submit] {
				width: 100%;
				margin-top: 0;
			}
		}
	</style>
</head>
<body>

	<h2>响应式表单</h2>
	<p>响应式表带可以根据浏览器窗口的大小重新布局各个元素，我们可以通过重置浏览器窗口大小来查看效果：</p>

	<div class="container">
		<form action="//www.nowcoder.com">
			<div class="row">
				<div class="col-25">
					<label for="fname">First Name</label>
				</div>
				<div class="col-75">
					<input type="text" id="fname" name="firstname" placeholder="Your name..">
				</div>
			</div>
			<div class="row">
				<div class="col-25">
					<label for="lname">Last Name</label>
				</div>
				<div class="col-75">
					<input type="text" id="lname" name="lastname" placeholder="Your last name..">
				</div>
			</div>
			<div class="row">
				<div class="col-25">
					<label for="country">Country</label>
				</div>
				<div class="col-75">
					<select id="country" name="country">
						<option value="australia">Australia</option>
						<option value="canada">Canada</option>
						<option value="usa">USA</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-25">
					<label for="subject">Subject</label>
				</div>
				<div class="col-75">
					<textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
				</div>
			</div>
			<div class="row">
				<input type="submit" value="Submit">
			</div>
		</form>
	</div>

</body>
</html>
```



## CSS 计数器

CSS 计数器通过一个变量来设置，根据规则递增变量。

### 使用计数器自动编号

CSS 计数器根据规则来递增变量。

CSS 计数器使用到以下几个属性：

- `counter-reset` - 创建或者重置计数器
- `counter-increment` - 递增变量
- `content` - 插入生成的内容
- `counter()` 或 `counters()` 函数 - 将计数器的值添加到元素

要使用 CSS 计数器，得先用 counter-reset 创建：

以下实例在页面创建一个计数器 (在 body 选择器中)，每个 `<h2>` 元素的计数值都会递增，并在每个 `<h2>` 元素前添加 "Section <计数值>: "

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		body {
			counter-reset: section;
		}

		h2::before {
			counter-increment: section;
			content: "Section "counter(section) ": ";
		}
	</style>
</head>
<body>

	<h1>使用 CSS 计数器:</h1>
	<h2>HTML 教程</h2>
	<h2>CSS 教程</h2>
	<h2>JavaScript 教程</h2>

	<p><b>注意:</b> IE8 需要指定 !DOCTYPE 才可以支持该属性。</p>

</body>
</html>
```

### 嵌套计数器

以下实例在页面创建一个计数器，在每一个 `<h1>` 元素前添加计数值 "Section <主标题计数值>.", 嵌套的计数值则放在 `<h2>` 元素的前面，内容为 "<主标题计数值>.<副标题计数值>"：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>牛客教程(nowcoder.com)</title>
	<style>
		body {
			counter-reset: section;
		}

		h1 {
			counter-reset: subsection;
		}

		h1::before {
			counter-increment: section;
			content: "Section "counter(section) ". ";
		}

		h2::before {
			counter-increment: subsection;
			content: counter(section) "."counter(subsection) " ";
		}
	</style>
</head>
<body>


	<h1>HTML 教程:</h1>
	<h2>HTML 教程</h2>
	<h2>CSS 教程</h2>

	<h1>Scripting 教程:</h1>
	<h2>JavaScript</h2>
	<h2>VBScript</h2>

	<h1>XML 教程:</h1>
	<h2>XML</h2>
	<h2>XSL</h2>

	<p><b>注意:</b> IE8 需要指定 !DOCTYPE 才可以支持该属性。</p>

</body>
</html>
```

计数器也可用于列表中，列表的子元素会自动创建。这里我们使用了 `counters()` 函数在不同的嵌套层级中插入字符串：

```css
ol {
  counter-reset: section;
  list-style-type: none;
}

li::before {
  counter-increment: section;
  content: counters(section,".") " ";
}
```

### CSS 计数器属性

|                             属性                             | 描述                                                |
| :----------------------------------------------------------: | :-------------------------------------------------- |
| [content](https://www.nowcoder.com/tutorial/10011/cf3e280339e3468a8f74e11003de102d) | 使用 ::before 和 ::after 伪元素来插入自动生成的内容 |
| [counter-increment](https://www.nowcoder.com/tutorial/10011/1d60089f01ee46cd9749f119b1bfc5bb) | 递增一个或多个值                                    |
| [counter-reset](https://www.nowcoder.com/tutorial/10011/f177ed8af14b441ea893ab6174860627) | 创建或重置一个或多个计数器                          |

#### counter-reset 属性

counter-reset属性创建或重置一个或多个计数器。counter-reset属性通常是和counter-increment属性，content属性一起使用。

|    值     | 说明                                                         |
| :-------: | :----------------------------------------------------------- |
|   none    | 默认。不能对选择器的计数器进行重置                           |
| id number | id 定义重置计数器的选择器、id 或 class。 number 可设置此选择器出现次数的计数器的值。可以是正数、零或负数。 |
|  inherit  | 规定应该从父元素继承 counter-reset 属性的值                  |

#### counter-increment 属性

counter-increment属性递增一个或多个计数器值。

|    值     | 说明                                                         |
| :-------: | :----------------------------------------------------------- |
|   none    | 没有计数器将递增                                             |
| id number | id 定义将增加计数的选择器、id 或 class。 number 定义增量。number 可以是正数、零或者负数。 |
|  inherit  | 指定counter-increment属性的值，应该从父元素继承              |

#### content 属性

content 属性与 :before 及 :after 伪元素配合使用，来插入生成内容。

|       值        | 说明                                                         |
| :-------------: | :----------------------------------------------------------- |
|      none       | 设置Content，如果指定成Nothing                               |
|     normal      | 设置content，如果指定的话，正常，默认是"none"（该是nothing） |
|     counter     | 设定计数器内容                                               |
| attr(attribute) | 设置Content作为选择器的属性之一。                            |
|    *string*     | 设置Content到你指定的文本                                    |
|   open-quote    | 设置Content是开口引号                                        |
|   close-quote   | 设置Content是闭合引号                                        |
|  no-open-quote  | 如果指定，移除内容的开始引号                                 |
| no-close-quote  | 如果指定，移除内容的闭合引号                                 |
|    url(url)     | 设置某种媒体（图像，声音，视频等内容）                       |
|     inherit     | 指定的content属性的值，应该从父元素继承                      |
