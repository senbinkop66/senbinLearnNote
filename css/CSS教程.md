----

# CSS（层叠样式表）

**层叠样式表** (Cascading Style Sheets，缩写为 **CSS**），是一种 [样式表](https://developer.mozilla.org/zh-CN/docs/Web/API/StyleSheet) 语言，用来描述 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 或 [XML](https://developer.mozilla.org/zh-CN/docs/Web/XML/XML_Introduction)（包括如 [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG)、[MathML](https://developer.mozilla.org/zh-CN/docs/Web/MathML)、[XHTML](https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML) 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

CSS 是**开放网络**的核心语言之一，由 [W3C 规范](https://w3.org/Style/CSS/#specs) 实现跨浏览器的标准化。CSS节省了大量的工作。 样式可以通过定义保存在外部.css文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1 是推荐标准， [CSS3](https://developer.mozilla.org/zh-CN/docs/CSS/CSS3) 分成多个小模块且正在标准化中。

CSS（层叠样式表）用于设置网页的样式及布局——比如，可以更改内容的字体、颜色、大小以及间距，或是将其分列，或是添加动画及赋予内容其它装饰性的特征。



# 伪类和伪元素

## [什么是伪类？](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#什么是伪类？)

伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。它们表现得会像是你向你的文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。

伪类就是开头为冒号的关键字：

```
:pseudo-class-name
```

### [简单伪类示例](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#简单伪类示例)

让我们看下一个简单的示例。如果我们想要让一篇文章中的第一段变大加粗，可为此段加上一个类，然后为那个类添加 CSS，

```css
.first {
    font-size: 120%;
    font-weight: bold;
}   
```

```html
<article>
    <p class="first">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo
            melon azuki bean garlic.</p>

    <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
            greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
</article>
```

不过，这在维护的时候可能会很恼人——要是文档的头部又加上一段的话呢？我们会需要把这个类挪到新加的这段上。假如我们不加类，我们可以使用[`:first-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child)伪类选择器——这将*一直*选中文章中的第一个子元素，我们将不再需要编辑 HTML（编辑 HTML 并不总是可行，也许是因为它是由一个 CMS 生成的）。

```css
article p:first-child {
    font-size: 120%;
    font-weight: bold;
}   
```

所有的伪类以同样的方式实现。它们选中你的文档中处于某种状态的那部分，表现得就像是你已经向你的 HTML 加入类一样。

### [用户行为伪类](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#用户行为伪类)

一些伪类只会在用户以某种方式和文档交互的时候应用。这些**用户行为伪类**，有时叫做**动态伪类**，表现得就像是一个类在用户和元素交互的时候加到了元素上一样。案例包括：

- `:hover`——上面提到过，只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
- `:focus`——只会在用户使用键盘控制，选定元素的时候激活。

```css
a:link,
a:visited {
    color: rebeccapurple;
    font-weight: bold;
}

a:hover {
    color:hotpink;
}   
```

```html
<p><a href="">Hover over me</a></p>
```

## [伪元素是啥？](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#伪元素是啥？)

伪元素以类似方式表现，不过表现得是像你往标记文本中加入全新的 HTML 元素一样，而不是向现有的元素上应用类。伪元素开头为双冒号`::`。

```
::pseudo-element-name
```

> **备注：**一些早期的伪元素曾使用单冒号的语法，所以你可能会在代码或者示例中看到。现代的浏览器为了保持后向兼容，支持早期的带有单双冒号语法的伪元素。

例如，如果你想选中一段的第一行，你可以把它用一个`<span>`元素包起来，然后使用元素选择器；不过，如果包起来的单词/字符数目长于或者短于父元素的宽度，这样做会失败。由于我们一般不会知道一行能放下多少单词/字符——因为屏幕宽度或者字体大小改变的时候这也会变——通过改变 HTML 的方式来可预测地这么做是不可能的。

`::first-line`伪元素选择器会值得信赖地做到这件事——即使单词/字符的数目改变，它也只会选中第一行。

```css
article p::first-line {
    font-size: 120%;
    font-weight: bold;
}   
    
```

```html
<article>
    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo
            melon azuki bean garlic.</p>

    <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
            greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
</article>
    
```

这表现得就像是`<span>`神奇地包在第一个被格式化的行一样，每当行长改变的时候还会更新。

## [把伪类和伪元素组合起来](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#把伪类和伪元素组合起来)

如果你想让第一段的第一行加粗，你需要把`:first-child`和`::first-line`选择器放到一起。试着编辑前面的实时示例，让它使用下面的 CSS。这里的意思是，我们想选择一个`<article>`元素里面的第一个`<p>`元素的第一行。

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## [生成带有::before 和::after 的内容](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#生成带有before和after的内容)

有一组特别的伪元素，它们和`content`属性一同使用，使用 CSS 将内容插入到你的文档中中。

你能用这些插入一个文本字符串，和在下面的实时示例里那样。试着改变[`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)属性的文本值，看看输出是怎么改变的。你也能改变`::before`伪元素为`::after`，看到这段文本插入到了元素的末尾而不是开头。

```css
.box::before {
    content: "This should show before the other content."
}   
```

```html
<p class="box">Content in the box in my HTML page.</p>
```

从 CSS 插入文本字符串，我们并不会在 Web 浏览器上经常这么做，因为对于一些屏幕阅读器来说，文本是不可见的，而且对于未来别人的查找和编辑也不是很方便。

这些伪元素的更推荐的用法是插入一个图标，例如下面的示例加入的一个小箭头，作为一个视觉性的提示，而且我们并不希望屏幕阅读器读出它。

```css
.box::after {
    content: " ➥"
}   
```

**这些伪元素经常用于插入空字符串**，其后可以像页面上的其他元素被样式化。

下个示例，我们已经用 `::before`伪元素加入了个空字符串。我们把它设为了`display: block`，以让它可以用 width 和 height 进行样式化。然后我们可以用 CSS 像任何元素那样样式化。你可以摆弄 CSS，改变它的外观和行为。

```css
.box::before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background-color: rebeccapurple;
    border: 1px solid black;
}   
```

`::before`和`::after`伪元素与`content`属性的共同使用，在 CSS 中被叫做“生成内容”，而且你会见到这种技术被用于完成各种任务。[CSS Arrow Please](http://www.cssarrowplease.com/)网站就是一个著名的示例，它帮你用 CSS 生成一个箭头。在你创建你的箭头的时候看下 CSS，你将会看到实际使用的[`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)和[`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)伪元素。无论什么时候你看到了这些选择器，都要看下[`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)属性，以了解文档中添加了什么。

## 



# filter

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)属性 **`filter`** 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。

CSS 标准里包含了一些已实现预定义效果的函数。你也可以参考一个 SVG 滤镜，通过一个 URL 链接到 SVG 滤镜元素（[SVG filter element](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/filter)）。

## 语法

```js
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Use no filter */
filter: none;

/* Global values */
filter: inherit;
filter: initial;
filter: revert;
filter: unset;
```

设置一种函数，方法如下：

```js
filter: <filter-function> [<filter-function>]* | none
```

给 SVG 元素 `filter` 引用滤镜，如下：

```css
filter: url(file.svg#filter-element-id)
```

### 插值

如果起始和结束过滤器都有一个不含 [`url()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/url) 的相同长度的函数列表，则会根据其指定的规则对其每个过滤器函数进行插值。如果它们的长度不同，较长列表中缺少的等效过滤器函数将使用空白的值添加到较短列表的尾部，然后所有的过滤器函数根据其特定的规则插值。如果一个过滤器是 `none` 则会使用过滤器函数的默认值替换函数列表，然后根据特定的规则进行插值，否则使用离散插值。

## 函数

使用 CSS 滤镜属性，你需要设定下面某一函数的值。如果该值无效，函数返回 `none`。除特殊说明外，函数的值如果接受百分比值（如 `34%`），那么该函数也接受小数值（如 `0.34`）。

当单个 `filter` 属性具有两个或多个函数时，其结果将不同于把两个或多个 `filter` 属性分别应用于相同的函数时的结果。

