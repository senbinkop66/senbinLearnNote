# flex 布局

## 基本概念

Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。本文给出了 flexbox 的主要特性，更多的细节将在别的文档中探索。

我们说 flexbox 是一种一维的布局，是因为一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。作为对比的是另外一个二维布局 [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)，可以同时处理行和列上的布局。

## flexbox 的两根轴线

当使用 flex 布局时，首先想到的是两根轴线 — 主轴和交叉轴。主轴由 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 定义，另一根轴垂直于它。我们使用 flexbox 的所有属性都跟这两根轴线有关, 所以有必要在一开始首先理解它。

### 主轴

主轴由 `flex-direction` 定义，可以取4个值：

- `row`
- `row-reverse`
- `column`
- `column-reverse`

如果你选择了 `row` 或者 `row-reverse`，你的主轴将沿着 **inline** 方向延伸。

![If flex-direction is set to row the main axis runs along the row in the inline direction.](https://mdn.mozillademos.org/files/15614/Basics1.png)

选择 `column` 或者 `column-reverse` 时，你的主轴会沿着上下方向延伸 — 也就是 **block 排列的方向。**

![If flex-direction is set to column the main axis runs in the block direction.](https://mdn.mozillademos.org/files/15615/Basics2.png)

### [交叉轴](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#交叉轴)

交叉轴垂直于主轴，所以如果你的`flex-direction` (主轴) 设成了 `row` 或者 `row-reverse` 的话，交叉轴的方向就是沿着列向下的。

![If flex-direction is set to row then the cross axis runs in the block direction.](https://mdn.mozillademos.org/files/15616/Basics3.png)

如果主轴方向设成了 `column` 或者 `column-reverse`，交叉轴就是水平方向。

![If flex-direction is set to column then the cross axis runs in the inline direction.](https://mdn.mozillademos.org/files/15617/Basics4.png)

理解主轴和交叉轴的概念对于对齐 flexbox 里面的元素是很重要的；flexbox 的特性是沿着主轴或者交叉轴对齐之中的元素。

## [起始线和终止线](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#起始线和终止线)

另外一个需要理解的重点是 flexbox 不会对文档的书写模式提供假设。过去，CSS的书写模式主要被认为是水平的，从左到右的。现代的布局方式涵盖了书写模式的范围，所以我们不再假设一行文字是从文档的左上角开始向右书写, 新的行也不是必须出现在另一行的下面。

你可以在接下来的文章中学到更多 flexbox 和书写模式关系的详细说明。下面的描述是来帮助我们理解为什么不用上下左右来描述 flexbox 元素的方向。

如果 `flex-direction` 是 `row` ，并且我是在书写英文，那么主轴的起始线是左边，终止线是右边。

![Working in English the start edge is on the left.](https://mdn.mozillademos.org/files/15618/Basics5.png)

如果我在书写阿拉伯文，那么主轴的起始线是右边，终止线是左边。

![The start edge in a RTL language is on the right.](https://mdn.mozillademos.org/files/15619/Basics6.png)

在这两种情况下，交叉轴的起始线是flex容器的顶部，终止线是底部，因为两种语言都是水平书写模式。

之后，你会觉得用起始和终止来描述比左右更合适，这会对你理解其他相同模式的布局方法（例如：CSS Grid Layout）起到帮助的作用。

## [Flex 容器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_容器)

文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器， 我们把一个容器的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性值改为 `flex` 或者 `inline-flex`。 完成这一步之后，容器中的直系子元素就会变为 **flex 元素**。所有CSS属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：

- 元素排列为一行 (`flex-direction` 属性的初始值是 `row`)。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小。
- [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性为 `auto`。
- [`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) 属性为 `nowrap`。

这会让你的元素呈线形排列，并且把自己的大小作为主轴上的大小。如果有太多元素超出容器，它们会溢出而不会换行。如果一些元素比其他元素高，那么元素会沿交叉轴被拉伸来填满它的大小。

```html
<style type="text/css">
.parent {
    width: 600px;
    display: flex;
}
.item-1 {
    background-color: red;
    height: 50px;
}
.item-2 {
    background-color: green;
    height: 50px;
}
.item-3 {
    background-color: blue;
    height: 50px;
}
</style>

<body>
<div class="parent">
    <div class="item-1">One</div>
    <div class="item-2">Two</div>
    <div class="item-3">Three
              <br>has
              <br>extra
              <br>text
    </div> 
</div>
</body>
```

### [更改flex方向 flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#更改flex方向_flex-direction)

在 flex 容器中添加 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 属性可以让我们更改 flex 元素的排列方向。设置 `flex-direction: row-reverse` 可以让元素沿着行的方向显示，但是起始线和终止线位置会交换。

把 flex 容器的属性 `flex-direction` 改为 `column` ，主轴和交叉轴交换，元素沿着列的方向排列显示。改为 `column-reverse` ，起始线和终止线交换。

下面的例子中，`flex-direction` 值为 `row-reverse`。尝试使用其他的值 `row` ，`column`，`column-reverse`，看看内容会发生什么改变。

```html
<style type="text/css">
.parent {
    width: 600px;
    display: flex;
    flex-direction: column-reverse;
}
.item-1 {
    background-color: red;
    height: 50px;
}
.item-2 {
    background-color: green;
    height: 50px;
}
.item-3 {
    background-color: blue;
    height: 50px;
}
</style>

<body>
<div class="parent">
    <div class="item-1">One</div>
    <div class="item-2">Two</div>
    <div class="item-3">Three</div> 
</div>
</body>
```

## [用flex-wrap实现多行Flex容器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#用flex-wrap实现多行flex容器)

虽然`flexbox`是一维模型，但可以使我们的`flex`项目应用到多行中。 在这样做的时候，您应该把每一行看作一个新的`flex`容器。 任何空间分布都将在该行上发生，而不影响该空间分布的其他行。

为了实现多行效果，请为属性[`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)添加一个属性值`wrap`。 现在，如果您的项目太大而无法全部显示在一行中，则会换行显示。 下面的实时例子包含已给出宽度的项目，对于`flex`容器，项目的子元素总宽度大于容器最大宽度。 由于`flex-wrap`的值设置为`wrap`，所以项目的子元素换行显示。若将其设置为`nowrap`，这也是初始值，它们将会缩小以适应容器，因为它们使用的是允许缩小的初始`Flexbox`值。 **如果项目的子元素无法缩小，使用`nowrap`会导致溢出，或者缩小程度还不够小**。

```html
<style type="text/css">
.parent {
    width: 800px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.item-1 {
    width: 300px;
    height: 50px;
    background-color: red;
}
.item-2 {
    width: 300px;
    height: 50px;
    background-color: green;
}
.item-3 {
    width: 300px;
    height: 50px;
    background-color: blue;
}
</style>

<body>
<div class="parent">
    <div class="item-1">One</div>
    <div class="item-2">Two</div>
    <div class="item-3">Three</div> 
</div>
```

## [简写属性 flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#简写属性_flex-flow)

你可以将两个属性 `flex-direction` 和 `flex-wrap` 组合为简写属性 [`flex-flow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)。第一个指定的值为 `flex-direction` ，第二个指定的值为 `flex-wrap`.

在下面的例子中，尝试将第一个值修改为 `flex-direction` 的允许取值之一，即 `row`, `row-reverse`, `column` 或 `column-reverse`, 并尝试将第二个指定值修改为 `wrap` 或 `nowrap`。

```css
.parent {
    width: 800px;
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
}
```

## [ flex 元素上的属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_元素上的属性)

为了更好地控制 flex 元素，有三个属性可以作用于它们：

- [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)
- [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)
- [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)

在这里，我们只会大概介绍一下它们的用法，更详细的细节请参阅其它的文章。

在考虑这几个属性的作用之前，需要先了解一下 **可用空间** available space 这个概念。这几个 flex 属性的作用其实就是改变了 flex 容器中的可用空间的行为。同时，可用空间对于 flex 元素的对齐行为也是很重要的。

假设在 1 个 500px 的容器中，我们有 3 个 100px 宽的元素，那么这 3 个元素需要占 300px 的宽，剩下 200px 的可用空间。在默认情况下， flexbox 的行为会把这 200px 的空间留在最后一个元素的后面。

![This flex container has available space after laying out the items.](https://mdn.mozillademos.org/files/15620/Basics7.png)

如果期望这些元素能自动地扩展去填充满剩下的空间，那么我们需要去控制可用空间在这几个元素间如何分配，这就是元素上的那些 `flex` 属性要做的事。 

### [Flex 元素属性：`flex-basis` ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_元素属性：flex-basis)

 `flex-basis` 定义了该元素的**空间大小（**the size of that item in terms of the space**）**，flex容器里除了元素所占的空间以外的富余空间就是**可用空间** available space。 该属性的默认值是 `auto` 。此时，浏览器会检测这个元素是否具有确定的尺寸。 在上面的例子中, 所有元素都设定了宽度（width）为100px，所以 `flex-basis` 的值为100px。

如果没有给元素设定尺寸，`flex-basis` 的值采用元素内容的尺寸。这就解释了：我们给只要给Flex元素的父元素声明 `display: flex` ，所有子元素就会排成一行，且自动分配小大以充分展示元素的内容。

### [Flex 元素属性：`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_元素属性：flex-grow)

`flex-grow` 若被赋值为一个正整数， flex 元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。

如果我们给上例中的所有元素设定 `flex-grow` 值为1， 容器中的可用空间会被这些元素平分。它们会延展以填满容器主轴方向上的空间。

flex-grow 属性可以按比例分配空间。如果第一个元素 `flex-grow` 值为2， 其他元素值为1，则第一个元素将占有2/4（上例中，即为 200px 中的 100px）, 另外两个元素各占有1/4（各50px）。

### [Flex 元素属性： `flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_元素属性：_flex-shrink)

`flex-grow`属性是处理flex元素在主轴上**增加空间**的问题，相反`flex-shrink`属性是处理flex元素**收缩**的问题。如果我们的容器中没有足够排列flex元素的空间，那么可以把flex元素`flex-shrink`属性设置为正整数来缩小它所占空间到`flex-basis`以下。与`flex-grow`属性一样，可以赋予不同的值来控制flex元素收缩的程度 —— 给`flex-shrink`属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。

在计算flex元素收缩的大小时，它的最小尺寸也会被考虑进去，就是说实际上flex-shrink属性可能会和flex-grow属性表现的不一致。因此，我们可以在文章《[控制Flex子元素在主轴上的比例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)》中更详细地看一下这个算法的原理。

> 在给 `flex-grow` 和 `flex-shrink` 赋值时要注意比例。如果我们给所有flex元素的flex属性赋值为 `1 1 200px` ，并且希望其中一个元素可以增加到2倍，我们可以给该元素的flex属性赋值为`2 1 200px`。当然，你也可以选择赋值为flex: `10 1 200px` 和 flex: `20 1 200px` 。

### [Flex属性的简写](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex属性的简写)

你可能很少看到 `flex-grow`，`flex-shrink`，和 `flex-basis` 属性单独使用，而是混合着写在 [`flex`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 简写形式中。 `Flex` 简写形式允许你把三个数值按这个顺序书写 — `flex-grow`，`flex-shrink`，`flex-basis`。

你可以在下面的实例中尝试把flex简写形式中的数值更改为不同数值，但要记得第一个数值是 `flex-grow`。赋值为正数的话是让元素增加所占空间。第二个数值是`flex-shrink` — 正数可以让它缩小所占空间，但是只有在flex元素总和超出主轴才会生效。最后一个数值是 `flex-basis`；flex元素是在这个基准值的基础上缩放的。

```html
<style type="text/css">
.parent {
    width: 800px;
    border: 1px solid black;
    display: flex;
}
.item-1 {
    height: 50px;
    flex: 2 1 200px;
    background-color: red;
}
.item-2 {
    flex: 1 1 200px;
    height: 50px;
    background-color: green;
}
.item-3 {
    flex: 2 1 200px;
    height: 50px;
    background-color: blue;
}
</style>

<body>
<div class="parent">
    <div class="item-1">One</div>
    <div class="item-2">Two</div>
    <div class="item-3">Three</div> 
</div>
</body>
```

大多数情况下可以用预定义的简写形式。 在这个教程中你可能经常会看到这种写法，许多情况下你都可以这么使用。下面是几种预定义的值：

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

`flex: initial` 是把flex元素重置为Flexbox的初始值，它相当于 `flex: 0 1 auto`。在这里 `flex-grow` 的值为0，所以flex元素不会超过它们 `flex-basis` 的尺寸。`flex-shrink` 的值为1, 所以可以缩小flex元素来防止它们溢出。`flex-basis` 的值为 `auto`. Flex元素尺寸可以是在主维度上设置的，也可以是根据内容自动得到的。

`flex: auto` 等同于 `flex: 1 1 auto`；和上面的 `flex:initial` 基本相同，但是这种情况下，flex元素在需要的时候既可以拉伸也可以收缩。

`flex: none` 可以把flex元素设置为不可伸缩。它和设置为 `flex: 0 0 auto` 是一样的。元素既不能拉伸或者收缩，但是元素会按具有 `flex-basis: auto` 属性的flexbox进行布局。

你在教程中常看到的 `flex: 1` 或者 `flex: 2` 等等。它相当于`flex: 1 1 0`。元素可以在`flex-basis`为0的基础上伸缩。

```css
.parent {
    width: 800px;
    border: 1px solid black;
    display: flex;
}
.item-1 {
    height: 50px;
    flex: 1;
    background-color: red;
}
.item-2 {
    flex: 1;
    height: 50px;
    background-color: green;
}
.item-3 {
    flex: 1;
    height: 50px;
    background-color: blue;
}
```

## [元素间的对齐和空间分配](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#元素间的对齐和空间分配)

Flexbox的一个关键特性是能够设置flex元素沿主轴方向和交叉轴方向的对齐方式，以及它们之间的空间分配。

### [`align-items`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#align-items)

[`align-items`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 属性可以使元素在**交叉轴**方向对齐。

这个属性的初始值为`stretch`，这就是为什么flex元素会默认被拉伸到最高元素的高度。实际上，它们被拉伸来填满flex容器 —— 最高的元素定义了容器的高度。

你也可以设置`align-items`的值为`flex-start`，使flex元素按flex容器的顶部对齐, `flex-end` 使它们按flex容器的下部对齐, 或者`center`使它们居中对齐. 在实例中尝试——我给出了flex容器的高度，以便你可以看到元素在容器中移动。看看如果更改 align-items的值为下列值会发生什么：

- `stretch`
- `flex-start`
- `flex-end`
- `center`

```html
<style type="text/css">
.parent {
    width: 800px;
    border: 1px solid black;
    display: flex;
    align-items: flex-start;
}
.item-1 {
    background-color: red;
}
.item-2 {
    background-color: green;
}
.item-3 {
    background-color: blue;
}
</style>

<body>
<div class="parent">
    <div class="item-1">One</div>
    <div class="item-2">Two</div>
    <div class="item-3">Three<br>has
              <br>extra
              <br>text
            </div> 
</div>
```

### [`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#justify-content)

[`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)属性用来使元素在**主轴方向**上对齐，主轴方向是通过 `flex-direction` 设置的方向。初始值是`flex-start`，元素从容器的起始线排列。但是你也可以把值设置为`flex-end`，从终止线开始排列，或者`center`，在中间排列.

你也可以把值设置为`space-between`，把元素排列好之后的剩余空间拿出来，平均分配到元素之间，所以元素之间间隔相等。或者使用`space-around`，使每个元素的左右空间相等。

在实例中尝试下列`justify-content`属性的值：

- `stretch`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`

```css
.parent {
    width: 800px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}
```





# flex-wrap

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 的 **`flex-wrap`** 属性**指定 flex 元素单行显示还是多行显示**。如果允许换行，这个属性允许你控制行的堆叠方向。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap#语法)

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: unset;
```



`flex-wrap` 属性可指定为以下取值列表中的任意一个关键字。

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap#取值)

`flex-wrap` 属性接受以下取值：

- `nowrap`

  **flex 的元素被摆放到到一行，这可能导致 flex 容器溢出**。**cross-start** 会根据 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 的值等价于 **start** 或 **before**。为该属性的默认值。

- wrap

  flex 元素 被打断到多个行中。**cross-start** 会根据 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 的值等价于 **start** 或**before**。**cross-end** 为确定的 **cross-start** 的另一端。

- `wrap-reverse`

  和 wrap 的行为一样，但是 **cross-start** 和 **cross-end** 互换。

### [形式定义](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap#形式定义)

| [初始值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial_value) | `nowrap`        |
| :----------------------------------------------------------- | --------------- |
| 适用元素                                                     | flex containers |
| [是否是继承属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance) | 否              |
| [计算值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/computed_value) | as specified    |
| Animation type                                               | discrete        |

### [形式语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap#形式语法)

```
nowrap | wrap | wrap-reverse
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap#示例)

### [设置 flex 容器堆叠形式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap#设置_flex_容器堆叠形式)

#### HTML

```html
<h4>这是一个关于 flex-wrap:wrap 的例子</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>这是一个关于 flex-wrap:nowrap 的例子</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>这是一个关于 flex-wrap:wrap-reverse 的例子</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```



# flex-direction

CSS flex-direction 属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向 (正方向或反方向)。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction#语法)

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction#取值)

接受以下取值：

- `row`

  flex 容器的主轴被定义为与文本方向相同。主轴起点和主轴终点与内容方向相同。

- `row-reverse`

  表现和 row 相同，但是置换了主轴起点和主轴终点

- `column`

  flex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同

- `column-reverse`

  表现和`column`相同，但是置换了主轴起点和主轴终点

- 语法格式

```css
row | row-reverse | column | column-reverse
```

请注意，值 `row` 和 `row-reverse` 受 flex 容器的方向性的影响。如果它的 dir 属性是 ltr，row 表示从左到右定向的水平轴，而 row-reverse 表示从右到左; 如果 dir 属性是 rtl，row 表示从右到左定向的轴，而 row-reverse 表示从左到右。

### 示例

```html
<h4>This is a Column-Reverse</h4>
<div id="content">
    <div id="box" style="background-color:red;">A</div>
    <div id="box" style="background-color:lightblue;">B</div>
    <div id="box" style="background-color:yellow;">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="content1">
    <div id="box1" style="background-color:red;">A</div>
    <div id="box1" style="background-color:lightblue;">B</div>
    <div id="box1" style="background-color:yellow;">C</div>
</div>
```



```css
#content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: column-reverse;
  display: flex;
  flex-direction: column-reverse;
}

#box {
  width: 50px;
  height: 50px;
}

#content1 {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: row-reverse;
  display: flex;
  flex-direction: row-reverse;
}

#box1 {
  width: 50px;
  height: 50px;
}
```



# flex-flow

CSS flex-flow 属性是 flex-direction 和 flex-wrap 的简写。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow#语法)

```css
<'flex-direction'> || <'flex-wrap'>
```

### 示例

```css
element {
  /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
  flex-flow: column-reverse wrap;
}
```



# justify-content

CSS justify-content 属性定义了浏览器之间，**如何分配顺着弹性容器主轴 (或者网格行轴) 的元素之间及其周围的空间。**

```css
/* Positional alignment */
justify-content: center;     /* 居中排列 */
justify-content: start;      /* Pack items from the start */
justify-content: end;        /* Pack items from the end */
justify-content: flex-start; /* 从行首起始位置开始排列 */
justify-content: flex-end;   /* 从行尾位置开始排列 */
justify-content: left;       /* Pack items from the left */
justify-content: right;      /* Pack items from the right */

/* Baseline alignment */
justify-content: baseline;
justify-content: first baseline;
justify-content: last baseline;

/* Distributed alignment */
justify-content: space-between;  /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放置于终点 */
justify-content: space-around;  /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
justify-content: space-evenly;  /* 均匀排列每个元素
                                   每个元素之间的间隔相等 */
justify-content: stretch;       /* 均匀排列每个元素
                                   'auto'-sized 的元素会被拉伸以适应容器的大小 */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

当 length 属性和自动外边距属性（margin: auto）生效之后，对齐已经完成了。也就是说，如果存在至少一个弹性元素，而且这个元素的 flex-grow 属性不等于 0，那么对齐方式不会生效，就像没有多余空间的情况。 

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#语法)

### [值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#值)

- `start`

  从行首开始排列。每行第一个元素与行首对齐，同时所有后续的元素与前一个对齐。

- `flex-start`

  从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。

- `flex-end`

  从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。

- `center`

  伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。

- `left`

  伸缩元素一个挨一个在对齐容器得左边缘，如果属性的轴与内联轴不平行，则`left`的行为类似于`start`。

- `right`

  元素以容器右边缘为基准，一个挨着一个对齐，如果属性轴与内联轴不平行，则`right`的行为类似于`end`。

- `baselinefirst baseline` `last baseline`

  Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.

- `space-between`

  在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。

- `space-around`

  在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。

- `space-evenly`

  flex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 flex 项之间的间距，主轴起始位置到第一个 flex 项的间距，主轴结束位置到最后一个 flex 项的间距，都完全一样。

- `stretch`

  If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by [`max-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-height)/[`max-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width) (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.

- `safe`

  与对齐关键字一起使用，如果选定的关键字会导致元素溢出容器造成数据丢失，那么将会使用 `start` 代替它。

- `unsafe`

  Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.

### [语法格式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content#语法格式)

```css
normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]where 
<content-distribution> = space-between | space-around | space-evenly | stretch
<overflow-position> = unsafe | safe
<content-position> = center | start | end | flex-start | flex-end
```

```css
#container {
  display: flex;
  justify-content: space-between; /* Can be changed in the live sample */
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}

```



# align-items

CSS align-items 属性将所有直接子节点上的 align-self 值设置为一个组。align-self 属性设置项目在其包含块中在交叉轴方向上的对齐方式。

目前，Flexbox 和 CSS 网格布局支持此属性。在 Flexbox 中，它控制十字轴上项目的对齐方式，在网格布局中，它控制块轴上项目的对齐方式。

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
align-items: center; /* Pack items around the center */
align-items: start; /* Pack items from the start */
align-items: end; /* Pack items from the end */
align-items: flex-start; /* Pack flex items from the start */
align-items: flex-end; /* Pack flex items from the end */
align-items: self-start;
align-items: self-end;

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items#取值)

- `normal`

  这个关键字的效果取决于我们处在什么布局模式中：在绝对定位的布局中，对于被替代的绝对定位盒子，这个效果和`start?`的效果的一样；对于其他所有绝对定位的盒子，这个效果和`stretch`的效果一样。 在绝对定位布局的静态位置上，效果和`stretch`一样。对于那些弹性项目而言，效果和`stretch`一样。对于那些网格项目而言，效果和`stretch`一样，除了有部分比例或者一个固定大小的盒子的效果像`start`。这个属性不适用于块级盒子和表格。

- `flex-start`

  元素向侧轴起点对齐。

- `flex-end`

  元素向侧轴终点对齐。

- `start`

  The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.

- `end`

  The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.

- `center`

  元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。

- `left`

  The items are packed flush to each other toward the left edge of the alignment container. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.

- `right`

  The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property’s axis is not parallel with the inline axis, this value behaves like `start`.

- `self-start`

  The items is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.

- `self-end`

  The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.

- `baseline`

- `first baselinelast baseline`

  所有元素向基线对齐。侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。

- `stretch`

  弹性项包含外边距的交叉轴尺寸被拉升至行高

- `safe`

  Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were `start`.

- `unsafe`

  Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

- 语法格式

```css
normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]where 
<baseline-position> = [ first | last ]? baseline
<overflow-position> = unsafe | safe
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items#示例)

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>

```

```css
#container {
  height:200px;
  width: 240px;
  align-items: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```





# align-content

CSS 的 align-content 属性设置了浏览器**如何沿着弹性盒子布局的纵轴和网格布局的主轴在内容项之间和周围分配空间**。

该属性对单行弹性盒子模型无效。（即：带有 `flex-wrap: nowrap`）。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content#语法)

```css
/* 基本位置对齐 */
/*align-content 不采用左右值 */
align-content: center;     /* 将项目放置在中点 */
align-content: start;      /* 最先放置项目 */
align-content: end;        /* 最后放置项目 */
align-content: flex-start; /* 从起始点开始放置 flex 元素 */
align-content: flex-end;   /* 从终止点开始放置 flex 元素 */

/* 默认对齐 */
align-content: normal;

/*基线对齐*/
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* 分布式对齐 */
align-content: space-between; /* 均匀分布项目
                                 第一项与起始点齐平，
                                 最后一项与终止点齐平 */
align-content: space-around;  /* 均匀分布项目
                                 项目在两端有一半大小的空间*/
align-content: space-evenly;  /* 均匀分布项目
                                 项目周围有相等的空间 */
align-content: stretch;       /* 均匀分布项目
                                 拉伸‘自动’ - 大小的项目以充满容器 */

/* 溢出对齐 */
align-content: safe center;
align-content: unsafe center;

/* 全局属性 */
align-content: inherit; /* 继承 */
align-content: initial;  /* 初始值 */
align-content: unset; /* 未设置 */

```

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content#取值)

- `start`

  所有行从容器的起始边缘开始填充。

- `end`

  所有行从容器的结束边缘开始填充。

- `flex-start`

  所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。

- `flex-end`

  所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。

- `center`

  所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。

- `normal`

  这些项按默认位置填充，就像没有设置对齐内容值一样。

- 

- `baselinefirst baseline` `last baseline`

- ![img](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/410px-Typography_Line_Terms.svg.png)

  Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box’s first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group. The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.

- `space-between`

  所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。

- `space-around`

  所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。

- `space-evenly`

  所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。

- `stretch`

  拉伸所有行来填满剩余空间。剩余空间平均地分配给每一行。

- `safe`

  与对齐关键字一起使用。如果所选的关键字意味着项溢出对齐容器（data loss），则将采用备用策略对项进行对齐，就像启动了 `start` 对齐模式一样。

- `unsafe`

  与对齐关键字一起使用。无论元素和对齐容器的相对大小如何、是否会导致一些元素溢出可见范围（data loss），都使用给定的对齐值。

### [标准语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content#标准语法)

```css
normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>where 
<baseline-position> = [ first | last ]? baseline
<content-distribution> = space-between | space-around | space-evenly | stretch
<overflow-position> = unsafe | safe
<content-position> = center | start | end | flex-start | flex-end
```

### 示例

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-content: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="space-between">space-between</option>
    <option value="space-around">space-around</option>
    <option value="space-evenly">space-evenly</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="baseline">baseline</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>

```

```css
#container {
  height:200px;
  width: 240px;
  align-content: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

```



# order

CSS order 属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

> **注意**: `order` 仅仅对元素的视觉顺序 (**visual order**) 产生作用，并不会影响元素的逻辑或 tab 顺序。 `**order**` 不可以用于非视觉媒体，例如 speech。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order#syntax)

```css
/* Numerical value including negative numbers */
order: 5;
order: -5;

/* Global values */
order: inherit;
order: initial;
order: unset;
```

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order#values)

- `<integer>`

  表示此可伸缩项目所在的次序组。

### 示例

```html
<!DOCTYPE html>
<header>…</header>
<div id='main'>
   <article>…</article>
   <nav>…</nav>
   <aside>…</aside>
</div>
<footer>…</footer>
```

下面的 CSS 代码会创建一个经典的双 sidebar 围绕一个中央内容块的布局。Flexible Box 布局模块会自动地创建三个具有相同高度的内容块，也会使用所有可用的水平空间。

```css
#main { display: flex; }
#main > article { flex:1;         order: 2; }
#main > nav     { width: 200px;   order: 1; }
#main > aside   { width: 200px;   order: 3; }
```



# align-self

CSS 属性 align-self 会对齐当前 grid 或 flex 行中的元素，并覆盖已有的 align-items 的值。In Grid, it aligns the item inside the grid area. 在 Flexbox 中，会按照 cross axis（当前 flex 元素排列方向的垂直方向）进行排列。

align-self 属性不适用于块类型的盒模型和表格单元。如果任何 flexbox 元素的侧轴方向 margin 值设置为 auto，则会忽略 `align-self`。

## 语法

```css
/* Keyword values */
align-self: auto;
align-self: normal;

/* Positional alignment */
/* align-self does not take left and right values */
align-self: center; /* Put the item around the center */
align-self: start;  /* Put the item at the start */
align-self: end;    /* Put the item at the end */
align-self: self-start; /* Align the item flush at the start */
align-self: self-end;   /* Align the item flush at the end */
align-self: flex-start; /* Put the flex item at the start */
align-self: flex-end;   /* Put the flex item at the end */

/* Baseline alignment */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Stretch 'auto'-sized items to fit the container */

/* Overflow alignment */
align-self: safe center;
align-self: unsafe center;

/* Global values */
align-self: inherit;
align-self: initial;
align-self: unset;
```

### [值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self#值)

- `auto`

  设置为父元素的 [`align-items`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 值。

- `normal`

- `self-start`

  Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis.

- `self-end`

  Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis.

- `flex-start`

  flex 元素会对齐到 cross-axis 的首端。

- `flex-end`

  flex 元素会对齐到 cross-axis 的尾端。

- `center`

  flex 元素会对齐到 cross-axis 的中间，如果该元素的 cross-size 尺寸大于 flex 容器，将在两个方向均等溢出。

### [形式化语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self#形式化语法)

```css
auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>where 
<baseline-position> = [ first | last ]? baseline
<overflow-position> = unsafe | safe
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self#示例)

```html
<section>
  <div>Item #1</div>
  <div>Item #2</div>
  <div>Item #3</div>
</section>
```

```css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```



# flex-grow

CSS 属性 flex-grow CSS 设置 flex 项 主尺寸 的 **flex 增长系数**。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow#语法)

```css
/* <number> 值 */
flex-grow: 3;
flex-grow: 0.6;

/* 全局值 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: unset;

```

`flex-grow` 的属性规定为一个 `<number>`。

### [值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow#值)

- `<number>`

  参见 number。负值无效，默认为 0。

## [描述](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow#描述)

这个属性规定了 `flex-grow` 项在 flex 容器中分配剩余空间的相对比例。 [主尺寸](https://www.w3.org/TR/css-flexbox/#main-size)是项的宽度或高度，这取决于[`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)值。

**剩余空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小**。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow 定义的比例进行分配。

`flex-grow` 与其他的 flex 属性[`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)和[`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)一起使用，通常使用[`flex`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) 速记来定义，以确保所有的值都被设置。

## [样例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow#样例)

### [设置 flex 项目增长因子](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow#设置_flex_项目增长因子)

#### HTML

```html
<h4>这展示了 flex 增长</h4>
<h5>A,B,C 和 F 具有 flex-grow:1。D 和 E 具有 flex-grow:2 .</h5>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;

  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0,0,0,.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0,0,0,.2);
}
```



# flex-shrink

CSS flex-shrink 属性指定了 flex 元素的收缩规则。**flex 元素仅在默认宽度之和大于容器的时候才会发生收缩**，其收缩的大小是依据 flex-shrink 的值。

```css
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset
```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink#语法)

```
flex-shrink` 属性只能是一个 `<number>。
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink#示例)

### [HTML](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink#html)

```html
<p>the width of content is 500px, flex-basic of flex item is 120px.</p>
<p>A, B, C are flex-shrink:1. D and E are flex-shrink:2</p>
<p>the width of D is not the same as A's</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

### [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink#css)

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0,0,0,.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```



# flex-basis

CSS 属性 flex-basis 指定了 flex 元素在主轴方向上的初始大小。如果不使用  box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

> **Note:** 当一个元素同时被设置了 `flex-basis` (除值为 `auto` 外) 和 `width` (或者在 `flex-direction: column` 情况下设置了`height`) , **`flex-basis` 具有更高的优先级。**

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis#语法)

```css
/* 指定<'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 在 flex item 内容上的自动尺寸 */
flex-basis: content;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;

```

这个 `flex-basis` 属性 被指定为关键词 `content` 或者 `<'width'>`.

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis#取值)

- `<'width'>`

  width 值可以是` <length>`; 该值也可以是一个相对于其父弹性盒容器主轴尺寸的**百分数** 。负值是不被允许的。默认为 auto。

- `content`

  基于 flex 的元素的内容自动调整大小。

## [例子](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis#例子)

### [HTML](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis#html)

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

Copy to Clipboard

### [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis#css)

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6AB6D8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2E86BB;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: 'auto';
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: 'max-content';
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: 'min-content';
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: 'fit-content';
}

.flex5 {
   flex-basis: content;
}

.flex5:after {
  content: 'content';
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: 'fill/-webkit-fill-available/-moz-available';
}
```

```

```



# flex

flex CSS 简写属性设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#syntax)

```
/* 关键字值 */
flex: auto;
flex: initial;
flex: none;

/* 一个值，无单位数字：flex-grow */
flex: 2;

/* 一个值，width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: min-content;

/* 两个值：flex-grow | flex-basis */
flex: 1 30px;

/* 两个值：flex-grow | flex-shrink */
flex: 2 2;

/* 三个值：flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/*全局属性值 */
flex: inherit;
flex: initial;
flex: unset;
```

Copy to Clipboard

可以使用一个，两个或三个值来指定 `flex`属性。

**单值语法**: 值必须为以下其中之一：

- 一个**无单位数** (`<number>`): 它会被当作**flex:`<number>` 1 0**; `<flex-shrink>`的值被假定为 1，然后`<flex-basis>` 的值被假定为0。
- 一个**有效的宽度** (width)值：它会被当作 `<flex-basis>`的值。
- 关键字none，auto或initial.

**双值语法**: 第一个值**必须为一个无单位数**，并且它会被当作 `<flex-grow>` 的值。第二个值必须为以下之一：

- 一个无单位数：它会被当作 `<flex-shrink>` 的值。
- 一个有效的宽度值：它会被当作 `<flex-basis>` 的值。

**三值语法：**

- 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值。
- 第二个值必须为一个无单位数，并且它会被当作 `<flex-shrink>` 的值。
- 第三个值必须为一个有效的宽度值，并且它会被当作 `<flex-basis>` 的值。

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#values)

- `initial`

  元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为"`flex: 0 1 auto`"。

- `auto`

  元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "`flex: 1 1 auto`".

- `none`

  元素会根据自身宽高来设置尺寸。**它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器**。相当于将属性设置为"`flex: 0 0 auto`"。

- `<'flex-grow'>`

  定义 flex 项目的 [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 。负值无效。省略时默认值为 1。 (初始值为 `0`)

- `<'flex-shrink'>`

  定义 flex 元素的 [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 。负值无效。省略时默认值为`1`。 (初始值为 `1`)

- `<'flex-basis'>`

  定义 flex 元素的 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性。**若值为`0`，则必须加上单位，以免被视作伸缩性**。省略时默认值为 0。(初始值为 auto)

- 描述

大多数情况下，开发者需要将 `flex` 设置为以下值之一： `auto`，`initial`，`none`，或一个无单位正数。

默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的[`min-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-width) 与 [`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)属性。

## [正式语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#正式语法)

```
none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#示例)

### [设置 flex: auto](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#设置_flex_auto)

#### HTML

```html
<div id="flex-container">
  <div class="flex-item" id="flex">Flex box (click to toggle raw box)</div>
  <div class="raw-item" id="raw">Raw box</div>
</div>
```

Copy to Clipboard

#### CSS

```css
#flex-container {
  display: flex;
  flex-direction: row;
}

#flex-container > .flex-item {
  flex: auto;
}

#flex-container > .raw-item {
  width: 5rem;
}
```

```

```

