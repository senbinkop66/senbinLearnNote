-------

## 1. css有哪些可继承的属性

css的继承：就是给父级设置一些属性，子级继承了父级的该属性，这就是我们的css中的继承。 官方解释，继承是一种规则，它允许样式不仅应用于特定的html标签元素，而且应用于其后代元素。继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性。

### 有继承性的属性

继承中比较特殊的几点：

- a 标签的字体颜色不能被继承
- h1-h6标签字体的大下也是不能被继承的

#### (1) 字体系列属性

```css
font：组合字体
font-family：规定元素的字体系列
font-weight：设置字体的粗细
font-size：设置字体的尺寸
font-style：定义字体的风格
font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写 字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。
font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。
```

#### (2) 文本系列属性

```css
text-indent：文本缩进
text-align：文本水平对齐
line-height：行高
word-spacing：增加或减少单词间的空白（即字间隔）
letter-spacing：增加或减少字符间的空白（字符间距）
text-transform：控制文本大小写
direction：规定文本的书写方向
color：文本颜色 ,  a元素除外
```

#### (3) 元素可见性

```css
visibility: visible; /* hidden, collapse */
```

#### (4) 表格布局属性：

```css
caption-side:  /* 将表格的标题<caption> 放到规定的位置 */
border-collapse: 用来决定表格的边框是分开的还是合并的
border-spacing: 指定相邻单元格边框之间的距离
empty-cells:  属性定义了用户端 user agent 应该怎么来渲染表格 <table> 中没有可见内容的单元格的边框和背景。
table-layout:  定义了用于布局表格单元格，行和列的算法
```

#### (5) 列表布局属性

```css
list-style-type
list-style-image
list-style-position
list-style
```

#### (6) 引号类型

```css
quotes: 用于设置引号的样式。

/* Keyword value */
quotes: none;

/* <string> values */
quotes: "«" "»";           /* Set open-quote and close-quote to the French quotation marks */
quotes: "«" "»" "‹" "›";   /* Set two levels of quotation marks */

/* Global values */
quotes: inherit;
quotes: initial;
quotes: unset;
```

#### (7) 光标属性

```css
cursor: 设置光标的类型

cursor: /* help, wait, crosshair, not-allowed, zoom-in, grab; */
```

#### (8)页面样式属性

```css
@page: 用于在打印文档时修改某些 CSS 属性
page-break-inside: 调整当前元素内的分页符
windows:
orphans: 设置块容器中必须显示在页面、区域或列底部的最小行数。
```

#### (9) 声音样式属性

```
speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、 pitch、pitch-range、stress、richness、、azimuth、elevation
```

### 所有元素可以继承的属性

1. 元素可见性：visibility
2. 光标属性：cursor

### 内联元素可以继承的属性

1. 字体系列属性
2. 除text-indent、text-align之外的文本系列属性

----

## 2.块元素哪些属性可以继承？

text-indent、text-align、visibility、cursor

----

## 3. 没有继承性的属性

- display
- 文本属性：vertical-align、text-decoration
- 盒子模型的属性：宽度、高度、内外边距、边框等
- 背景属性：背景图片、颜色、位置等
- 定位属性：浮动、清除浮动、定位position等
- 生成内容属性：content、counter-reset、counter-increment
- 轮廓样式属性：outline-style、outline-width、outline-color、outline
- 页面样式属性：size、page-break-before、page-break-after

----

## 4. 请问CSS选择器有哪些

CSS选择器可将CSS样式表与HTML元素进行一一绑定，实现一对一，一对多、多对一的样式控制。CSS样式具有三大特性：**继承、 优先级和层叠**

**继承**：即子类元素继承父类的样式

**优先级**：指不同类别样式的权重比较

**层叠**：当数量相同时，后者覆盖前者

它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式。选择器所选择的元素，叫做“选择器的对象”

CSS选择器分类众多，主要可分为以下几类：

| 类型           | 示例                                                         |
| -------------- | ------------------------------------------------------------ |
| 通用选择器     | ` * ns|* *|*`    可以将其限制为特定的名称空间或所有名称空间。 |
| 标签选择器     | 如：body,div,p,ul,li  按照给定的节点名称，选择所有匹配的元素。 |
| 类选择器       | 如：.classname  按照给定的 `class` 属性的值，选择所有匹配的元素。 |
| ID选择器       | 如：#idname    按照 `id` 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。 |
| 属性选择器     | `[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]` 按照给定的属性，选择所有匹配的元素。 |
| 分组选择器     |                                                              |
| 选择器列表     | `div, span `   `,` 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。 |
| 组合器         |                                                              |
| 后代选择器     | 如：#head .nav ul li 从父集到子孙集的选择器, （各选择器用空格键分开）组合器选择前一个元素的后代节点。 |
| 直接子代组合器 | `A > B `    组合器选择前一个元素的直接子代的节点。           |
| 一般兄弟组合器 | `A ~ B`  组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。 |
| 紧邻兄弟组合器 | `A + B`      组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。 |
| 列组合器       | `A || B`  组合器选择属于某个表格行的节点。                   |
| 伪选择器       |                                                              |
| 伪类           | `:` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。 |
| 伪元素         | `::` 伪选择器用于表示无法用 HTML 语义表达的实体。            |
|                |                                                              |



----

## 5.伪类选择器

```css
:link ：选择未被访问的链接
:visited：选取已被访问的链接
:active：选择活动链接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child：父元素的首个子元素
```



----

## 6.伪元素选择器

```css
::first-letter ：用于选取指定选择器的首字母
::first-line ：选取指定选择器的首行
::before : 选择器在被选元素的内容前面插入内容
::after : 选择器在被选元素的内容后面插入内容
```



----

## 7.属性选择器

```css
[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
[attribute^=value]：选择attribute属性以value开头的元素
[attribute$=value]：选择attribute属性以value结尾的元素
```

----

## 8.CSS优先级如何计算

### css优先级

浏览器通过**优先级**来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是**基于不同种类选择器组成的匹配规则。**

### 优先级是如何计算的？

- 优先级就是**分配给指定的 CSS 声明**的一个`权重`，它由 **匹配的选择器中的 每一种选择器类型**的 `数值` 决定。

- 而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。

- 当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

**选择器类型**

下面列表中，选择器类型的优先级是递增的：

1. 标签选择器（例如，h1）和伪元素（例如，::before）
2. 类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
3. ID 选择器（例如，#example）。

通配选择符（*）关系选择符（+, >, ~, ' ', ||）和 否定伪类（:not()）**对优先级没有影响**。（但是，在 :not() 内部声明的选择器会影响优先级）。

给元素添加的**内联样式** (例如，`style="font-weight:bold"`) 总会覆盖外部样式表的任何样式 ，因此可看作是具有最高的优先级。

**规则**

```js
 `!important `> `作为style属性行内样式`> `ID选择器` >  `类选择器 = 属性选择器 = 伪类选择器`  >  `标签选择器= 伪元素选择器` >  `通配符选择器` > `继承选择器` > `浏览器默认属性`
```

对于同一优先级选择器，后写的会覆盖先写的样式

当有多个级别组合的选择器时，往往利用上述优先级排序无法得出优先级，故有以下优先级计算方式：

- 每个选择器对应一个初始"四位数"：0、0、0、0

- 若是 **行内选择器**，则加1、0、0、0

- 若是 **ID选择器**，则加0、1、0、0

- 若是 **类选择器/属性选择器/伪类选择符**，则分别加0、0、1、0

- 若是 **标签选择器/伪元素选择器**，则分别加0、0、0、1

最终优先级由**级别权重**与**出现次数**决定，统计元素对应的所有选择器的权重与次数，**最终得到的”四位数“，从左到右进行比较，大的优先级越高。**

到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：

- 如果存在内联样式，那么 A = 1, 否则 A = 0
- B的值等于 ID选择器出现的次数
- C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数
- D 的值等于 标签选择器 和 伪元素 出现的总次数

```css
#nav-global > ul > li > a.nav-link
```

套用上面的算法，依次求出 `A` `B` `C` `D` 的值：

- 因为没有内联样式 ，所以 A = 0
- ID选择器总共出现了1次， B = 1
- 类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1
- 标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3

上面算出的`A` 、 `B`、`C`、`D` 可以简记作：`(0, 1, 1, 3)`

知道了优先级是如何计算之后，就来看看比较规则：

- 从左往右依次进行比较 ，较大者优先级更高
- 如果相等，则继续往右移动一位进行比较
- 如果4位全部相等，则后面的会覆盖前面的

经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用`!important`

需注意：

- !important的优先级是最高的，但出现冲突时则需比较“四位数”
- 通配符选择器、子选择器、相邻选择器、同胞选择器权重值为0
- 优先级相同时，**则采用就近原则，选择最后出现的样式**

----

### !important 例外规则

当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，`!important` 与优先级无关，但它与最终的结果直接相关。使用 `!important` 是一个**坏习惯**，应该尽量避免，**因为这破坏了样式表中的固有的级联规则** 使得调试找bug变得更加困难了。当两条相互冲突的带有 `!important` 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。

**一些经验法则：**

- **一定**要优先考虑使用样式规则的优先级来解决问题而不是 `!important`
- **只有**在需要覆盖全站或外部 CSS 的特定页面中使用 `!important`
- **永远不要**在你的插件中使用 `!important`
- **永远不要**在全站范围的 CSS 代码中使用 `!important`

- **与其使用** **`!important`**，你可以:

1. 更好地利用 CSS 级联属性

2. 使用更具体的规则。在您选择的元素之前，增加一个或多个其他元素，使选择器变得更加具体，并获得更高的优先级。

   ```html
   <div id="test">
     <span>Text</span>
   </div>
   ```

   ```css
   div#test span { color: green; }
   div span { color: blue; }
   span { color: red; }
   ```

   无论 css 语句的顺序是什么样的，文本都会是绿色的（green），因为这一条规则是最有针对性、优先级最高的。（同理，无论语句顺序怎样，蓝色 blue 的规则都会覆盖红色 red 的规则）

3. 对于（2）的一种特殊情况，当您无其他要指定的内容时，**请复制简单的选择器以增加特异性。**

   ```css
   #myId #myId span { color: yellow; }
   .myClass .myClass span { color: orange; }
   ```

   

### 什么的情况下可以使用 `!important`：

A) **覆盖内联样式**

你的网站上有一个设定了全站样式的 CSS 文件，同时你（或是你同事）写了一些很差的内联样式。

全局的CSS文件会在全局范围内设置网站的外观，而直接在各个元素上定义的内联样式可能会覆盖您的全局CSS文件。 **内联样式和!important都被认为是非常不好的做法**，但是有时你可以在CSS文件里用!important去覆盖内联样式。

在这种情况下，你就可以在你全局的 CSS 文件中写一些 `!important` 的样式来**覆盖掉那些直接写在元素上的行内样式**。

```css
<div class="foo" style="color: red;">What color am I?</div>
```

```css
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

许多JavaScript框架和库都添加了内联样式。 有时候可以用`!important`与优先级高的选择器一起使用，**以重写覆盖这些内联样式**。

B) **覆盖优先级高的选择器**

```css
#someElement p {
  color: blue;
}
p.awesome {
  color: red;
}
```

在外层有 `#someElement` 的情况下，你怎样能使 `awesome `的段落变成红色呢？这种情况下，如果不使用 `!important` ，第一条规则永远比第二条的优先级更高

### 怎样覆盖 `!important`

A) 很简单，只需**再添加一条 带 `!important` 的CSS规则**，**再给这个给选择器更高的优先级**（添加一个标签，ID或类）；或是添加一样选择器，**把它的位置放在原有声明的后面。**

一些拥有更高优先级的例子：

```css
   table td { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
```

B)或者**使用相同的选择器，但是置于已有的样式之后：**

```css
td { height: 50px !important; }
```

C) 或干脆改写原来的规则，以避免使用 `!important`。

```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

**将id作为属性选择器的一部分而不是id选择器，将使其具有与类相同的特异性**。 上面的两个选择器现在具有相同的权重。 在优先级相同情况下，后面定义的CSS样式会被应用。

### :is() 和 :not() 例外规则

:not 否定伪类在优先级计算中不会被看作是伪类。事实上，在计算选择器数量时还是会把其中的选择器当做普通选择器进行计数。



------

## 9. 说说对 CSS 预编语言的理解，以及它们之间的区别

`Css` 作为一门标记性语言，语法相对简单，对使用者的要求较低，但同时也带来一些问题

需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少 `Css` 编写经验而很难写出组织良好且易于维护的 `Css` 代码

`Css`预处理器便是针对上述问题的解决方案

#### 预处理语言

扩充了 `Css` 语言，增加了诸如变量、混合（mixin）、函数等功能，让 `Css` 更易维护、方便

本质上，预处理是`Css`的超集

包含一套自定义的语法及一个解析器，根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 `Css` 文件



**CSS 预处理器**是一个能让你通过预处理器自己独有的语法来生成CSS的程序。

css预处理器种类繁多，三种主流css预处理器是Less、Sass（Scss）及Stylus；它们各自的背景如下:

**Sass：**

2007年诞生，最早也是最成熟的CSS预处理器，拥有ruby社区的支持和compass这一最强大的css框架，目前受LESS影响，已经进化到了全面兼容CSS的SCSS（SCSS 需要使用分号和花括号而不是换行和缩进）。文件后缀名为`.sass`与`scss`，可以严格按照 sass 的缩进方式省去大括号和分号

**Less**：

2009年出现，受SASS的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手，在ruby社区之外支持者远超过SASS。其缺点是比起SASS来，可编程功能不够。优点是简单和兼容CSS，反过来也影响了SASS演变到了SCSS的时代，著名的Twitter Bootstrap就是采用LESS做底层语言的。其缺点是比起 `SASS `来，可编程功能不够，不过优点是简单和兼容 `Css`，反过来也影响了 `SASS `演变到了` Scss` 的时代

**Stylus**：

2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如SASS和LESS。所以` Stylus` 是一种新型语言，可以创建健壮的、动态的、富有表现力的` Css`。比较年轻，其本质上做的事情与`SASS/LESS`等类似

**区别**

虽然各种预处理器功能强大，但使用最多的，还是以下特性：

- 变量（variables）
- 作用域（scope）
- 代码混合（ mixins）
- 嵌套（nested rules）
- 代码模块化（Modules）



------

## 10. 请问你了解行内元素、块级元素，它们如何互相转换？

### 块级元素

**块级元素占据其父元素（容器）的整个空间，因此创建了一个“块”。**

块级元素：总在新一行开始，一个元素独占一行，**宽度默认100%（继承父元素宽度）**

- 总是从新的一行开始，即各个块级元素独占一行，默认垂直向下排列；
- 高度、宽度、margin及padding都是可控的，设置有效，有边距效果；
- **宽度没有设置时，默认为100%；**
- 块级元素中可以包含块级元素和行内元素。

### 行内元素

根据定义，**一个行内元素只占据它对应标签的边框所包含的空间。**

行内元素（内联元素）：与其他元素水平方向依次排列，处于同一行，通常不会以新行开始，**宽度就是内容的宽度，不可改变**

- 和其他元素都在一行，即行内元素和其他行内元素都会在一条水平线上排列；
- **高度、宽度是不可控的，设置无效，由内容决定。**

- 根据标签语义化的理念，**行内元素最好只包含行内元素，不包含块级元素。**

```html
<span style="background-color: #1e7e34">行内元素</span>
<div style="background-color: #bbb">块级元素</div>
```

运行之后可以看到，行内元素只占据内容撑起来的区域，而块级元素占据了一整行的区域，

### 行内元素和块级元素的区别

- 默认情况下，行内元素不会以新的一行开始，而块级元素会新起一行。当行内元素在一行内**排不下的时候才会换行**，而且其宽度随着元素的内容而变化。块级元素的则宽度自动填满其父元素宽度。
- 块级元素可以设置 width, height属性，注意：**块级元素即使设置了宽度，仍然是独占一行的**。而行内元素设置width, height无效。
- 块级元素可以设置margin 和 padding。**行内元素的水平方向的padding-left,padding-right,margin-left,margin-right 都产生边距效果**，但是竖直方向的padding-top,padding-bottom,margin-top,margin-bottom都不会产生边距效果。（**也就是水平方向有效，竖直方向无效）**
- **块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素**。比如我们想在`<span>`标签内包含`<div>`标签是不被允许的。而在`<div>`标签中包含`<span>`标签是经常看到的。

**设置居中。**

行内元素想要设置**水平居中**，只需要text-align属性即可。 这里**设置的text-align是设置在外层的div当中**，所以我们需要的居中其实是将块级元素当中的行内元素居中。

```css
div{
    text-align:center  /*div当中的行内元素均会水平居中*/ 
}
```

而块级元素想要设置**水平居中**，需要设置宽度为父容器宽度才能居中。

```css
margin:0 auto; 
width:500px; /*块级元素父容器的宽度*/ 
```

行内元素设置**垂直居中**，设置**外层行高**为行内元素的高度即可。

```css
height:30px; 
line-height:30px 
```

而块级元素想要设置**垂直居中**，要先设置外层div的高度，然后设置内层块级元素的样式。

```css
margin:0 aut0;
height:30px;
line-height:30px
```

两者区别总结如下表：

|                   | 行内元素                                                     | 块级元素                                                     |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 容纳内容          | 只能容纳文本或其他内联元素                                   | 容纳内联元素或其他块元素                                     |
| 设置宽度width     | 无效                                                         | 有效                                                         |
| 设置高度height    | 无效                                                         | 有效                                                         |
| 设置内边距padding | 左右有效，上下无效                                           | 有效                                                         |
| 设置外边距margin  | 左右有效，上下无效                                           | 有效                                                         |
| 常见元素          | `<a>、<span>、<strong>、<i>、 <button>、<em>、<label>、<textarea>、<kbd>......` | `<div>、<hn>、<p> 、<ul>、<ol>、<li>、<header>、<footer>、<form>、<nav>......` |

### 行内元素和块级元素转换方式

当然块级元素与行内元素之间的特性是可以相互转换的。HTML可以将元素分为**行内元素**、**块状元素**和**行内块状元素**三种。

**1、display属性**

display：inline-block 行内元素——>行内块元素

display：block 行内元素——>块级元素

display：inline 块级元素——>行内元素

**2、float**

设置行内元素float：left/right，则该行内元素**隐式转换**为块级元素 ，**且有浮动特性**

**3、position**

设置行内元素position：absolute/fixed 会把行内元素**隐式转换**为块级元素，**且有定位特性**



---

## 11.置换元素定义与特点？

置换元素：内容**不受CSS视觉格式化模型控制**，渲染模型不考虑对此内容渲染，拥有固定尺寸的元素（有且仅有置换元素有固定尺寸），浏览器依据元素的标签和属性来决定具体显示内容，又名**替换元素**

块级元素包含置换元素、非置换元素；行内元素同样包含置换元素、非置换元素；**行内置换元素有可修改的宽高属性，其默认值即元素的固有宽高**

常见置换元素有：视图元素`<img>、<object>、<video>`等

表单元素`<textarea>、<input>、<select>`等

某些元素只在一些特殊情况下表现为可替换元素，如 `<audio>、<canvas>`等



---

## 12.空元素

官方术语为**自闭合标签**，没有内容的 HTML 元素，没有闭合标签，在开始标签就关闭了，常见标签：

```html
<br>、<hr>、<img>、<input>、<link>、<meta>
```

一个**空元素（empty element）**可能是 HTML，SVG，或者 MathML 里的一个不能存在子节点（例如内嵌的元素或者元素内的文本）的[element](https://developer.mozilla.org/zh-CN/docs/Glossary/Element)。

[HTML](https://www.w3.org/html/wg/drafts/html/CR/)，[SVG](https://www.w3.org/TR/SVG2/) 和 [MathML](https://www.w3.org/Math/draft-spec/) 的规范都详细定义了每个元素能包含的具体内容（define very precisely what each element can contain）。许多组合是没有任何语义含义的，比如一个`<audio>` 元素里。

**在 HTML 中，通常在一个空元素上使用一个闭标签是无效的**。例如， `<input type="text"></input>` 的闭标签是无效的 HTML。

在 HTML 中有以下这些空元素：

```html
<area> <base> <br> <col> <colgroup> <command> <embed> <hr> <img> <input> <keygen> <link> <meta> <param> <source> <track> <wbr>
```

**Note**: 在极少数情况下，空元素被错误地称为“无效元素”(void elements)。



------

## 13.盒模型

### 概念

**CSS盒模型本质上是一个盒子，封装周围的HTML元素**，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。

CSS盒模型：**标准模型 + IE模型**

### 标准模型和IE模型的区别

计算宽度和高度的不同

**标准盒模型**：盒子总宽度/高度 =width/height + padding + border + margin。（ 即 width/height 只是 内容高度，不包含 padding 和 border 值 ）

**IE盒子模型**：盒子总宽度/高度 =width/height + margin = (内容区宽度/高度 + padding + border) + margin。（ 即 width/height 包含了 padding 和 border 值 ）

> **注**: margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin。

### CSS如何设置这两种模型

如何设置盒模型？

1、若定义了完整的<!DOCTYPE>声明，会直接触发标准盒模型，若<!DOCTYPE>声明缺失，则会由浏览器自己判定，IE浏览器中IE9以下（IE6.IE7.IE8）的版本触发IE盒模型，其他浏览器会默认为标准盒模型

2、可通过box-sizing属性来设置盒模型解析模式：

- content-box： 默认值，border和padding不算到width范围内，可以理解为标准盒模型，
- border-box：border和padding划到width范围内，可以理解为怪异盒模型

CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度

```css
box-sizing: content-box|border-box|inherit;
box-sizing: content-box; /*( 标准：浏览器默认设置 ) */

box-sizing: border-box; /* IE* /
```



如果你希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>` 元素上，然后设置所有元素继承该属性，正如下面的例子。

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```



### JS如何获取盒模型对应的宽和高

（1）dom.style.width/height只能取到行内样式的宽和高，style 标签中和 link 外链的样式取不到。
（2）dom.currentStyle.width/height（只有IE兼容）取到的是最终渲染后的宽和高
（3）window.getComputedStyle(dom).width/height同（2）但是多浏览器支持，IE9 以上支持。
（4）dom.getBoundingClientRect().width/height也是得到渲染后的宽和高，大多浏览器支持。IE9 以上支持，除此外还可以取到相对于视窗的上下左右的距离。
（6）dom.offsetWidth/offsetHeight包括高度（宽度）、内边距和边框，**不包括外边距**。**最常用，兼容性最好**。



### 盒模型width:100%会出现什么问题 

```html
    <style type="text/css">
        #box1 {
            width: 200px;
            height: 200px;
            border: 1px solid gray;
        }
        #box2 {
            width: 100%;
            margin: 10px;
            padding: 10px;
            height: 100px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <div id="box1">
        <div id="box2"></div>
    </div>
</body>
```

如果设置了外边距或内边距或边框，会超出父元素范围



### width:100%、width:auto、width:80%、width:100px的区别

width:100% 子元素的width值(仅仅指content area范围)为父元素的width值
width:auto 子元素的width值则为content+padding+border+margin
width:100px 子元素的width值为100px

### CSS函数: calc()

因为我们有时候会需要子元素width减去margin值这种场景，同时子元素width是不能写固定值的，这时候就可以用calc()函数来进行计算了。该calc()函数将单个表达式作为其参数，并将表达式的结果用作值。表达式可以是使用标准运算符优先级规则组合以下运算符的任何简单表达式：

```css
/* property: calc(expression) */
width: calc(100% - 80px);
```



----

## 14.文档流有哪些

在解释BFC之前，先说一下文档流。我们常说的文档流其实分为**定位流**、**浮动流**、**普通流**三种。而普通流其实就是指BFC中的FC。FC(Formatting Context)，直译过来是**格式化上下文**，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC（grid）和FFC（flex）。

注意：**一个BFC的范围包含创建该上下文元素的所有子元素**，但**不包括**创建了新BFC的子元素的**内部**元素。这从另一方角度说明，**一个元素不能同时存在于两个BFC中。**因为如果一个元素能够同时处于两个BFC中，那么就意味着这个元素能与两个BFC中的元素发生作用，就违反了BFC的隔离作用。

**三种文档流的定位方案**

### **常规流(Normal flow)**

- 在常规流中，盒一个接着一个排列;
- 在块级格式化上下文里面， 它们竖着排列；
- 在行内格式化上下文里面， 它们横着排列;
- `当position为static或relative，并且float为none`时会**触发常规流**；
- 对于静态定位(static positioning)，position: static，**盒的位置是常规流布局里的位置；**
- 对于相对定位(relative positioning)，position: relative，盒偏移位置由top、bottom、left、right属性定义。**即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置。**

### **浮动流(Floats)**

- 左浮动元素尽量靠左、靠上，右浮动同理
- **这导致常规流环绕在它的周边**，除非设置 clear 属性
- 浮动元素不会影响块级元素的布局
- **但浮动元素会影响行内元素的布局**，让其围绕在自己周围，撑大父级元素，从而间接影响块级元素布局
- 最高点不会超过当前行的最高点、它前面的浮动元素的最高点
- 不超过它的包含块，除非元素本身已经比包含块更宽
- 行内元素出现在左浮动元素的右边和右浮动元素的左边，**左浮动元素的左边**和**右浮动元素的右边**是**不会摆放浮动元素的**

### **定位流(Absolute positioning)**

- 绝对定位方案，**盒从常规流中被移除，不影响常规流的布局**；
- 它的**定位相对于它的包含块**，相关CSS属性：top、bottom、left、right；
- 如果元素的属性position**为absolute或fixed，它是绝对定位元素；**
- **对于position: absolute**，元素定位将**相对于上级元素中最近的一个relative、fixed、absolute**，如果没有则相对于body；



----

## 15.BFC

### BFC基本概念

**块格式化上下文（Block Formatting Context，BFC）** 是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

BFC是CSS布局的一个概念，是一块独立的渲染区域，是一个环境，里面的元素不会影响到外部的元素 。父子元素和兄弟元素边距重叠，重叠原则取最大值。**空元素的边距重叠是取margin与 padding 的最大值。**

### BFC原理（渲染规则|布局规则）： 

- （1）内部的Box会在垂直方向，从顶部开始一个接着一个地放置；
- （2）Box垂直方向的距离由margin(外边距)决定，属于同一个BFC的两个相邻Box的margin会发生重叠；（完整的说法是：**属于同一个BFC的两个相邻Box的margin会发生折叠**，不同BFC不会发生折叠。）
- （3）生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），**即使浮动元素也是如此**（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。
- （4）BFC 在页面上是一个隔离的独立容器，外面的元素不会影响里面的元素，反之亦然。文字环绕效果，设置float；
- （5）BFC 的区域不会与float Box重叠（清浮动）;
- （6）计算BFC的高度时，浮动元素也参与计算。



### CSS在什么情况下会创建出BFC（即脱离文档流）

- 根元素（`<html>`）
- **浮动元素**（float 值不为 none）
- **绝对定位元素**（position 值为 absolute 或 fixed）
- **行内块元素**（display 值为 inline-block）
- 表格单元格（display 值为 table-cell，HTML 表格单元格默认值）
- 表格标题（display 值为 table-caption，HTML 表格标题默认值）
- 匿名表格单元格元素（display 值为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 inline-table）
- **overflow 值不为 visible、clip 的块元素**
- display 值为 flow-root 的元素
- contain 值为 layout、content 或 paint 的元素
- **弹性元素**（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
- **网格元素**（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
- **多列容器**（column-count 或 column-width (en-US) 值不为 auto，包括column-count 为 1）
- column-span 值为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 (规范变更, Chrome bug)



### BFC作用（使用场景）

BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用BFC的这个特性来做很多事。

1. **自适应两（三）栏布局**（避免多列布局由于宽度计算四舍五入而自动换行的情况），有时候因为多列布局采用小数点位的width导致因为浏览器因为四舍五入造成的换行的情况，**可以在最后一 列触发BFC的形式来阻止换行的发生**。
2. **避免元素被浮动元素覆盖**, 一个正常文档流的block元素可能被一个float元素覆盖，挤占正常文档流，因此可以设置一个元素的float、 display、position值等方式触发BFC，以阻止被浮动盒子覆盖。
3. **可以让父元素的高度包含子浮动元素，清除内部浮动**（原理：触发父div的BFC属性，**使下面的子div都处在父div的同一个BFC区域之内，以此来包含子元素的浮动盒子。）**
4. **去除相邻元素的边距重叠现象**，**分属于不同的BFC时，可以阻止margin重叠**。属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，(设置writing-mode:tb-rl时，水平 margin会发生重叠)。**所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠。**这里给任一个相邻块级盒子的外面包一个div，通过改变此div的属性使两个原盒子分属于两个不同的BFC，以此来阻止margin重叠。

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：

- 包含内部浮动
- 排除外部浮动
- 阻止 外边距重叠



6.1 IFC基本概念

**IFC: 行内格式化上下文**

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646122783978/CC01CC5BF7B84B6F99B134A44179B21D)

6.2 IFC原理（渲染规则|布局规则）：

（1）内部的Box会在水平方向，从含块的顶部开始一个接着一个地放置；
（2）这些Box之间的水平方向的margin，border和padding都有效；
（3）Box垂直对齐方式：以它们的底部、顶部对齐，或以它们里面的文本的基线（baseline）对齐（默认， 文本与图片对其），例：line-heigth与vertical-align。



------

## 16.盒子塌陷是什么？

### 盒子塌陷

`本应该在父盒子内部的元素跑到了外部。`

### 为什么会出现盒子塌陷？

**当父元素没设置足够大小的时候**，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，**而父元素中又没有其它非浮动的可见元素时**，父盒子的高度就会直接塌陷为零， 我们称这是**CSS高度塌陷**。

### 关于盒子塌陷的几种解决方法

（1）最简单，直接，粗暴的方法就是盒子大小写死，**给每个盒子设定固定的width和height**，直到合适为止，这样的好处是简单方便，兼容性好，适合只改动少量内容不涉及盒子排布的版面。缺点是非自适应，浏览器的窗口大小直接影响用户体验。

（2）**给外部的父盒子也添加浮动，让其也脱离标准文档流**，这种方法方便，但是对页面的布局不是很友好，不易维护。

（3）**给父盒子添加overflow属性**。

- overflow:auto; 有可能出现滚动条，影响美观。

- overflow:hidden; 可能会带来内容不可见的问题。


（4）**父盒子里最下方引入清除浮动块**。最简单的有：

```html
    <br style="clear:both;"/>
```

有很多人是这么解决的，但是我们并不推荐，**因为其引入了不必要的冗余元素** 。

  (5)**用after伪元素清除浮动**

给外部盒子的after伪元素设置clear属性，再隐藏它。这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。

```css
.clearfix::after{
  content:".";  /*尽量不要为空，一般写一个点*/
  display: block;
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
 .clearfix {
    *zoom: 1;   /*  *只有IE6,7识别 */
}
```

这是一种**纯CSS的解决浮动造成盒子塌陷方法**，`没有引入任何冗余元素，推荐使用此方法来解决CSS盒子塌陷`。

备注：第五种方法虽好，但是低版本IE不兼容，具体选择哪种解决方法，可根据实际情况决定。

(6) **给父盒子添加border**

(7) **给父盒子设置padding-top**



------

## 17. css 伪类与伪元素区别

css引入伪类和伪元素概念是**为了格式化文档树以外的信息**。也就是说，伪类和伪元素是**用来修饰不在文档树中的部分**，比如，一句话中的第一个字母，或者是列表中的第一个元素。

### 伪类(pseudo-classes)

- 其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。
- ⽐如`:hover :active :visited :link  :first-child :focus :lang`等
- 由于状态的变化是⾮静态的，**所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式**；当状态改变时，它⼜会失去这个样式。
- 由此可以看出，它的功能和class有些类似，但**它是基于⽂档之外的抽象，所以叫 伪类**。

伪类**用于当已有的元素处于某个状态时**，为其添加对应的样式，**这个状态是根据用户行为而动态变化的**。比如说，当用户悬停在指定的元素时，我们可以通过`:hover`来描述这个元素的状态。虽然它和一般css相似，可以为 已有元素添加样式，**但是它只有处于DOM树无法描述的状态下才能为元素添加样式，所以称为伪类。**

伪类：本质上是为了弥补常规CSS选择器的不足，存在DOM文档中(无标签，找不到，只有符合触发条件时才能看到 )，**逻辑上存在但在文档树中却无须标识的“幽灵”分类。**

### 伪元素(Pseudo-elements)

- DOM树**没有定义的虚拟元素**

- 核⼼就是**需要创建通常不存在于⽂档中**的元素，

- ⽐如`::before ::after `它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。

- 伪元素控制的内容和元素是没有差别的，但是**它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素**。⽤于将特殊的效果添加到某些选择器

**伪元素用于创建一些不在文档树中的元素，并为其添加样式**。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过`::before`来在一个元素前增加一些文本，并为这些文本添加样式。**虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。**

有时你会发现伪元素使用了两个冒号（`::`）而不是一个冒号（`:`）。这是CSS3的一部分，并尝试区分伪类和伪元素。大多数浏览器都支持这两个值。按照规则应该使用（`::`）而不是（`:`），从而区分伪类和伪元素。但是，由于在旧版本的W3C规范并未对此进行特别区分，因此目前绝大多数的浏览器都支持使用这两种方式表示伪元素。

伪元素：本质上是创建了一个有内容的虚拟容器，不实际存在于DOM文档树中，**仅在逻辑上存在，是虚拟的元素**，代表某个元素的子元素

### 伪类与伪元素的区别

- 表示⽅法
  - CSS2 中伪类、伪元素都是以单冒号:表示,
  - CSS2.1 后规定**伪类⽤单冒号:表示**,伪元素⽤**双冒号::**表示，
  - 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first-line, :first-letter 等)的单冒号写法。
  - CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
  - CSS3中，伪类与伪元素在语法上也有所区别，**伪元素修改为以::开头**。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
- 定义不同
  - 伪类即**假的类**，可以**添加类来达到效果**
  - 伪元素即**假元素**，需要**通过添加元素才能达到效果**
- 总结:
  - 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
  - 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
  - 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，**是否需要添加元素才能达到效果，如果是则是伪元素**，反之则是伪类
  - **伪类和伪元素都不出现在源⽂件和DOM树中**。也就是说在**html源⽂件中是看不到伪类和伪元素的**。
  - 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，是DOM元素的某⼀特征。伪元素能够**创建在DOM树中不存在**的抽象对象，⽽且这些抽象对象是能够访问到的。
  - 伪类是通过添加“class类”来实现，伪元素是通过添加“元素”来实现，**二者本质区别：是否创造了新元素**
  - **可同时使用多个伪类**，而**只能同时使用一个伪元素**，伪类可理解为添加类，所以可以多个，**而伪元素在一个选择器中只能出现一次，并且只能出现在末尾**
  - 伪类和伪元素的语法不同：伪类单冒号，如：:link 、:hover ；伪元素双冒号，如：::after、::before

比如，有以下HTML代码：

```html
<div>
    <p>a</p>
    <p>b</p>
</div>

```

想要第一个p标签字体颜色变蓝色，使用伪类就很简单：

```css
p:first-child{
    color:blue;
}
```

不用伪类呢？ 就需要为第一个p标签添加一个类class，再通过类选择器添加颜色属性：

```html
<div>
    <p class="first-child">a</p>
    <p>b</p>
</div>
<style type="text/css">
.first-child{
    color:blue;
}
</style>
```

使用伪元素来实现该效果：

```css
p::first-child{
    color:blue;
}
```

不用伪元素呢？则需要在第一个p标签中创建一个span标签，再通过span标签选择器添加颜色属性

```html
<div>
    <p><span>a</span></p>
    <p>b</p>
</div>
<style type="text/css">
    p span{
        color:blue;
    }
</style>

```

### 常见的伪类及功能

常见的伪类及功能分类如下图可见：

![img](E:\pogject\学习笔记\image\js\常见的伪类及功能分类)

### 常见的伪元素

常见的伪元素如下表可见：

| 伪元素                                   | 作用                                   |
| ---------------------------------------- | -------------------------------------- |
| ::before（CSS2中为 :before）             | 在选中元素之前添加内容                 |
| ::after（CSS2中为 :after）               | 在选中元素之后添加内容                 |
| ::first-letter（CSS1中为 :first-letter） | 向选取文字块的第一个字符添加特殊样式   |
| ::first-line（CSS1中为 :first-line）     | 向选取文字块的首行字符添加特殊样式     |
| ::placeholder                            | 选取字段的占位符文本(提示信息)         |
| ::selection                              | 选取文档中高亮(反白)的部分             |
| ::inactive-selection                     | 选取非活动状态时文档中高亮(反白)的部分 |
| ::marker                                 | 选取列表自动生成的项目标记符号         |



------

## 18.行内元素的margin 和 padding

- 水平方向：水平方向上，都有效；
- 垂直方向：垂直方向上，都无效；（padding-top和padding-bottom**会显示出效果**，**但是高度不会撑开，不会对周围元素有影响**）

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
     * {
      margin: 0;
      padding: 0;
     }
     span {
      background-color: #34ffdd;
      margin: 10px 20px 10px 20px;
      padding: 10px 20px 10px 20px;
     }
    </style>
</head>
<body>
    <p>水平方向：水平方向上，都有效；</p>
    <span>垂直方向上，都无效</span>
    <span>padding-top和padding-bottom**会显示出效果**，**但是高度不会撑开，不会对周围元素有影响**</span>
    <p>水平方向：水平方向上，都有效；</p>
    <script type="text/javascript">
      
    </script>
</body>
</html>

```



------

## 19.min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

- **max-width 会覆盖 width**，即使 width 是行内样式或者设置了 !important。
- **min-width 会覆盖 max-width**，此规则发生在 min-width 和 max-width 冲突的时候；



------

## 20.浏览器是怎样解析CSS选择器的？

CSS选择器的解析是**从右向左解析的**。

**若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能**。

若从右向左匹配，先找到所有的最右节点，**对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则**，则结束这个分支的遍历。

两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点(叶子节点)，**而从左向右的匹配规则的性能都浪费在了失败的查找上面。**

而在 CSS解析完毕后,需要将解析的结果与DOM Tree的内容-起进行分析建立一棵Render Tree，最终用来进行绘图。在建立Render Tree时(WebKit 中的「Attachment」过程)， 浏览器就要为每个DOM Tree中的元素根据CSS的解析结果(Style Rules)来确定生成怎样的Render Tree。

CSS匹配发生在Render Tree构建时（Chrome Dev Tools将其归属于Layout过程）。此时浏览器构建出了DOM，而且拿到了CSS样式，此时要做的就是把样式跟DOM上的节点对应上，浏览器为了提高性能需要做的就是快速匹配。

首先要明确一点，浏览器此时是给一个"可见"节点找对应的规则，这和jQuery选择器不同，后者是使用一个规则去找对应的节点，这样从左到右或许更快。但是对于前者，由于CSS的庞大，一个CSS文件中或许有上千条规则，而且对于当前节点来说，大多数规则是匹配不上的，稍微想一下就知道，**如果从右开始匹配（也是从更精确的位置开始），能更快排除不合适的大部分节点，而如果从左开始，只有深入了才会发现匹配失败，如果大部分规则层级都比较深，就比较浪费资源了。**

除了上面这点，我们前面还提到DOM构建是"循序渐进的"，而且DOM不阻塞Render Tree构建（只有CSSOM阻塞），这样也是为了能让页面更早有元素呈现。

考虑如下情况，如果我们此时构建的只是部分DOM，而CSSOM构建完成，浏览器就会构建Render Tree。

这个时候对每一个节点，如果找到一条规则从右向左匹配，我们只需要逐层观察该节点父节点是否匹配，而此时其父节点肯定已经在DOM上。

但是反过来，我们可能会匹配到一个DOM上尚未存在的节点，此时的匹配过程就浪费了资源。

----

## 21. 有哪些清除浮动的方法

除浮动其实叫做**闭合浮动**更合适，因为是把浮动的元素圈起来，**让父元素闭合出口和入口不让他们出来影响其他的元素**。
在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```css
选择器{clear:属性值;}
/*属性值为left,清除左侧浮动的影响
  属性值为right,清除右侧浮动的影响
  属性值为both,同时清除左右两侧浮动的影响*/
```

### 额外标签法

1.1 末尾标签法
**通过在浮动元素的末尾添加一个空的标签**。这是W3C推荐的做法，虽然比较简单，但是添加了无意义的标 签，结构化比较差，所以不推荐使用。下面三种写法都适用：

```css
1. <div style="clear:both"></div>

2. .clear { clear:both }
    <div class="clear"></div>

3. .clear{ clear:both }
    <br class="clear" />    <!--也可以使用br等别的块级元素来清除浮动-->
```

2.2 内部标签法，把div放进父盒子里，盒子会撑开，一般也不会用。

**给浮动元素下方添加空盒子**

给该空盒子清除浮动（一般用clear:both），把父元素撑开，需要注意：必须是块级元素，此方法早期比较常用，会给页面增加无意义标签，**通常不建议页面中设置多个无意义标签。**

```html
<style type="text/css">
.wrap {
    width: 520px;
    border: 1px solid black;
    margin: 0 auto;
}
.float{
  width: 200px;
  height: 200px;
  background-color: green;
  float: left;
}
.nofloat{
  width: 300px;
  height: 150px;
  background-color: gray;
}
.clear{
  clear: both;
}
</style>

<body>
<div class="wrap">
   <div class="float">浮动</div>
   <div class="clear"></div>
     <br class="clear" />    <!--也可以使用br等别的块级元素来清除浮动-->
   <div class="nofloat">不想被浮动影响</div>
</div>
</body>
```



### overflow法

 **给父元素添加 overflow：hidden（BFC布局）**

overflow：hidden为隐藏溢出，当内容超过其父元素时，可以用该方式将溢出的部分裁剪掉，使页面更加美观

当子元素浮动，给父元素添加overflow：hidden，**按照该属性特性，将子元素超出的部分截掉，但是子元素有浮动，无法裁剪，只能父元素增加高度去包裹住子元素，从而使得父元素拥有高度**，且高度随子元素自适应变化，从而清除浮动效果

代码比较简洁，可以通过触发BFC方式，**但是因为本身overflow的本质是溢出隐藏的效果，所以有的时候也会有一些问题存在**，比如内容增多的时候不会自动换行导致内容被隐藏掉，无法显示出要溢出的元素。

```html
<style type="text/css">
.wrap {
    width: 520px;
    border: 1px solid black;
    margin: 0 auto;
    overflow: hidden;
    /* 加上这句话，就可以清除浮动   overflow = hidden|auto|scroll 都可以实现*/
}
.float{
  width: 200px;
  height: 200px;
  background-color: green;
  float: left;
}
.nofloat{
  width: 300px;
  height: 150px;
  background-color: gray;
  overflow: hidden;
}
</style>

<body>
<div class="wrap">
   <div class="float">浮动</div>
   <div class="nofloat">不想被浮动影响</div>
</div>
</body>
```

这里父容器是没有设置固定高度的，本来第一个子元素浮动之后，父元素的高度会塌陷到跟第二个子元素一样高，但由于这里分别给第二个子元素和父元素都设置了overflow:hidden ，所以它们都生成了一个新的BFC区域，根据上文提供的BFC布局规则可以得知：**BFC区域不会与float box 重叠**；**计算BFC高度时浮动元素的高度也参与计算**。所以就得到清除浮动的效果。但其实清除浮动得根据自己开发中的实际情况合理使用。  

###  给需要清除浮动元素添加clear:both

**clear: both：元素的左侧和右侧均不允许出现浮动元素**（摘自W3C），添加了 clear属性的元素**只能通过调整自身来使自己不要和浮动元素排列在一起，不能移动别的元素**。若一个元素同时设置了 float：left 和 clear：left，左边不能有浮动元素，那么这个元素就要调整自己，排到下一行，因设置了 float: left，这个元素会往左边靠拢，所以这个元素会跑到下一行，同时往左浮动

```css
.wrap {
    width: 520px;
    border: 1px solid black;
    margin: 0 auto;
}
.float{
  width: 200px;
  height: 200px;
  background-color: green;
  float: left;
}
.nofloat{
  width: 300px;
  height: 150px;
  background-color: gray;
  clear: both;
}
```

  

### 伪元素法（最常用）

3.1 **使用after伪类清除浮动**
after是在父元素中加一个盒子，这个元素是通过css添加上去的，符合闭合浮动思想，结构语义化正确。
父元素中加一个类名为clearfix 。但是这个方法IE6，7不识别，要进行兼容，使用zoom:1触发 hasLayout来清除浮动

```css
.clearfix:after{
    content:".";  /*尽量不要为空，一般写一个点*/
    height:0;     /*盒子高度为0，看不见*/
    display:block;    /*插入伪元素是行内元素，要转化为块级元素*/
    visibility:hidden;      /*content有内容，将元素隐藏*/
    clear:both;  
}

.clearfix {
    *zoom: 1;   /*  *只有IE6,7识别 */
}
```

3.2 **after伪元素空余字符法**
父元素中加一个类名为clearfix，也需要兼容IE6、7

```css
.clearfix::after{
    content:"\200B";   /* content:'\0200'; 也可以 */
    display:block;
    height:0;
    clear:both;
}

.clearfix {
    *zoom: 1; 
}
```

3.3 **使用before和after双伪类清除浮动**（推荐）
**完全符合闭合浮动思想的方法**。

父元素中加一个类名为clearfix,需要兼容IE6、7


```css
 	.clearfix:before, .clearfix:after {
        content: ""; 
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
    .clearfix {
        *zoom: 1;
    }
```

  

###   让父元素也浮动

以浮制浮，父元素与子元素一起脱离文档流浮动，这样父元素就能自适应子元素高度，此方法有较大弊端，**一定会影响父元素之后的元素排列，影响页面整体布局**

```css
.wrap {
    width: 520px;
    border: 1px solid black;
    margin: 0 auto;
    float: left;
}
.float{
  width: 200px;
  height: 200px;
  background-color: green;
  float: left;
}
.nofloat{
  width: 300px;
  height: 150px;
  background-color: gray;
}
```

###  给父元素添加固定高度

此方法仅适用于子元素高度已知并且固定情况



---

## 22.padding , margin 百分比单位依据

   在CSS 盒模型中，依据CSS2.2文档，margin与padding的**百分比指定值时**，一律参考**包含盒的宽度**。
   示例：

   ```css
        .father{
            height: 100px;
            width: 200px;
            border: solid;
        }

        .son{
            margin: 20%;
            padding: 20%;
            width: 50%;
            height: 50%;
        }
   ```

包括padding-top/bottom,margin-top/bottom在内，所有padding和margin均是参考的包含块的宽度，故它们的值为200px * 20% = 40px。



---

## 23.父子边距重合

**边界重叠**是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界。

父子元素的边界重叠

```html
<style>
  .parent {
    background: #e7a1c5;
  }
  .parent .child {
    background: #c8cdf5;
    height: 100px;
    margin-top: 10px;
  }
</style>
<section class="parent">
  <article class="child"></article>
</section>
```

在这里父元素的高度不是 110px，而是 100px，在这里**发生了高度坍塌**。

**产生原因：**

是如果块元素的margin-top与它的**第一个子元素**的margin-top之间没有border、padding、inlinecontent、clearance来分隔，或者块元素的 margin-bottom 与它的**最后一个子元素**的 margin-bottom 之间没有border、padding、inlinecontent、height、min-height、max-height分隔，那么外边距会塌陷。**子元素多余的外边距会被父元素的外边距截断。**

**解决办法**：

父子元素的边界重叠得解决方案： 在父元素上加上 overflow:hidden;**使其成为 BFC。**

```css
  .parent {
    background: #e7a1c5;
    overflow: hidden;
  }
  .parent .child {
    background: #c8cdf5;
    height: 100px;
    margin-top: 10px;
  }
```



---

## 24.css字体大小设置（三种）em rem px

**px（绝对长度单位）**

相信对于前端来说px这个单位是大家并不陌生，px这个单位，兼容性可以说是相当可以。

```css
body {font-size: 10px;  }
```

**em（相对长度单位）**

1. **浏览器的默认字体都是16px**，那么1em=16px，以此类推计算12px=0.75em，10px=0.625em,2em=32px；

2. 这样使用很复杂，很难很好的与px进行对应,也导致书写、使用、视觉的复杂(0.75em、0.625em全是小数点)；

3. 为了简化font-size的换算，**我们在body中写入一下代码**

   ```css
   body {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */ 
   ```

   这样页面中1em=10px,1.2em=12px,1.4em=14px,1.6em=16px，使得视觉、使用、书写都得到了极大的帮助。

   例子如下：

   ```html
   <div class="font1" style='font-size:1.6em'>我是1.6em</div>
   ```

   缺点：

   1. **em的值并不是固定的**；

   2. em会继承父级元素的字体大小（参考物是父元素的font-size；）；

   3. **em中所有的字体都是相对于父元素的大小决定的**；所以如果一个设置了font-size:1.2em的元素在另一个设置了font-size:1.2em的元素里，而这个元素又在另一个设置了font-size:1.2em的元素里，那么最后计算的结果是1.2X1.2X1.2=1.728em

      ```html
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8" />
          <title>测试</title>
      <style type="text/css">
        body {font-size: 62.5%; } /*  公式:16px*62.5%=10px  */ 
          .big{font-size: 1.2em}
          .small{font-size: 1.2em}
      </style>
      </head>
      <body>
      <div class="big">
          我是大字体
         <div class="small">我是小字体</div>
      </div>
      
      </body>
      </html>
      
      ```

      但运行结果small的字体大小为：1.2em*1.2em=1.44em

**rem（相对长度单位）**

- 浏览器的默认字体都是16px，那么1rem=16px，以此类推计算12px=0.75rem，10px=0.625rem，2rem=32px；

- 这样使用很复杂，很难很好的与px进行对应,也导致书写、使用、视觉的复杂(0.75rem、0.625em全是小数点) ；

- 为了简化font-size的换算，**我们在根元素html中加入font-size: 62.5%;**

   ```css
   html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */  
   ```

   这样页面中1rem=10px,1.2rem=12px,1.4rem=14px,1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助；

   ```html
   <div class="font1" style='font-size:1.6rem'>我是1.6rem=16px</div>
   ```

特点：

- **rem单位可谓集相对大小和绝对大小的优点于一身**

- 和em不同的是**rem总是相对于根元素**(如:root{})，而不像em一样使用级联的方式来计算尺寸**。这种相对单位使用起来更简单**。

- rem支持IE9及以上，**意思是相对于根元素html（网页）**，不会像em那样，依赖于父元素的字体大小，而造成混乱。使用起来安全了很多。

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="utf-8" />
       <title>测试</title>
   <style type="text/css">
     html {font-size: 62.5%; } /*  公式:16px*62.5%=10px  */ 
       .big{font-size: 1.4rem}
       .small{font-size: 1.2rem}
   </style>
   </head>
   <body>
   <div class="big">
       我是14px=1.4rem
       <div class="small">我是12px=1.2rem</div>
   </div>
   
   </body>
   </html>
   
   ```

**注意：**

- 值得注意的浏览器支持问题： IE8，Safari 4或 iOS 3.2中不支持rem单位。
- 如果你的用户群都使用最新版的浏览器，那推荐使用rem，**如果要考虑兼容性，那就使用px**,或者两者同时使用。



----

## 25.什么是渐进增强和优雅降级？

渐进增强（progressive enhancement）：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果，交互等方面的改进和追加功能，以达到更好的用户体验。

优雅降级 graceful degradation： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。

区别：

- 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；
- 优雅降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。

----

## 26.css3有哪些新特性

CSS 为层叠样式表，用来定义页面中的HTML各标签如何显示，控制页面的整体布局与样式。

CSS3为W3C组织发布的最新版CSS，主要有以下新特性：

### 1. 选择器

CSS3增加了很多选择器，以供样式绑定使用，常用的主要有：

:nth-child(n)：匹配其父标签的第n个子元素，不论元素类型，n可以是数字、关键字、公式

:nth-of-type(n)：选择与之其匹配的父元素的第N个子元素

:frist-child：相对于父级做参考，“所有”子元素的第一个子元素，并且“位置”要对应

:empty：选择没有子元素的每个元素

[abc*="def"]：选择adc属性值中包含子串"def"的所有元素

###   2. 动画

CSS3新增创建动画方法，通过@keyframes 规则创建动画，在规则中指定 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果，用百分比来规定变化发生的时间，或用"from" 和 "to"（等同于 0% 和 100%）

利用animation属性将动画绑定到指定选择器上，**至少绑定动画名称与时长**

###   3. 形状变换

CSS3新增了transform属性实现元素的旋转、缩放、倾斜平移等形状变换。主要有以下新方法：

translate()：元素从当前位置在x 坐标、y 坐标上移动

rotate()：元素顺时针旋转给定的角度（负值则逆时针旋转）

scale()：通过向量形式定义的缩放值来放大或缩小元素尺寸

skew()：元素按照一定的**角度**进行**倾斜转换**

###   4. 文本

CSS3新增text-shadow属性可实现文本阴影，text-overflow属性可规定当文本溢出盒子时呈现效果

###   5. 边框

CSS3新增边框属性，可呈现更多的边框效果，有以下3个边框属性：

border-radius：创建圆角矩形

box-shadow：给盒子添加阴影效果

border-image：可利用图片创建边框

###   6. 过渡

CSS3提供transition 属性呈现元素由A样式过渡至B样式，常用两个值定义过渡效果：transition-property：过渡的属性列表，transition-duration：过渡持续的时间

###   **7.** 盒模型定义

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用CSS实现准确布局、处理元素排列的关键。

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。模型定义了盒的每个部分 —— margin, border, padding, and content —— 合在一起就可以创建我们在页面上看到的内容。为了增加一些额外的复杂性，有一个标准的和替代（IE）的盒模型。

 CSS中组成一个块级盒子需要:

- **Content box**: 这个区域是用来显示内容，大小可以通过设置 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height).
- **Padding box**: 包围在内容区域外部的空白区域； 大小通过 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 相关属性设置。

### 8.新的用户界面属性

CSS3增加了新的用户界面属性来调整标签尺寸、盒尺寸以及外部轮廓等，常用属性有：

resize：指定一个标签可由用户调整大小

outline-offset：对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓

box-sizing：允许以确切的方式定义适应某个区域的具体内容，可定义盒模型，有三个值：content-box：边框和padding不包含在元素的宽高之内、border-box：边框和padding包含在元素的宽高之内、inherit：从父标签继承 box-sizing 属性值

###  9.Flex布局

弹性布局，使页面布局更加方便与灵活，舍弃传统上下排列页面元素，采用双轴排列方式，水平主轴与垂直交叉轴，并按照比例对元素进行放大与缩小，可利用简洁语法实现自适应布局

通过6个属性设置**容器属性**：flex-direction、flex-wrap、flex-flow、justify-content、align-items、align-content，设置容器的轴线方向、元素对齐方向、换行

通过6个属性设置**元素属性**：order、flex-grow、flex-shrink、flex-basis、flex、align-self，设置元素的排列顺序、放大/缩小比例、多余空间分配方案、对齐方案



---

## 27.div 之间的空隙，原因及解决

display:inline-block布局的元素在chrome下会出现几像素的间隙，**原因是**因为我们在编辑器里写代码的时候，**同级别的标签不写在同一 行以保持代码的整齐可读性，即inline-block布局的元素在编辑器里不在同一行**，**即存在换行符**，

因此这就是著名的inline-block“**换行符/空格间隙问题**”。如果inline-block元素间有空格或是换行产生了间隙，那是正常的，应该的。如果没有空格与间隙才是不正常的（**IE6/7** block水平元素）。

**解决方法：**

1、把img标签的display属性改成block：

```css
img{dispaly:block;}
```

2、把div中的字体大小设为0：

```css
div{font-size:0;}
```

3、如果是img，修改img的vertical-align属性：

```css
img{vertical-align:bottom;}
img{vertical-align:middle;}
img{vertical-align:top;}
```

4、移除标签间的空格

```html
<ul>
    <li>这是一个li</li><li>这是另一个li</li><li>这是另另一个li</li><li>这是另另另一个li</li>
</ul>

// 方式二：在标签结束处消除换行符
<ul>
    <li>这是一个li
    </li><li>这是另一个li
    </li><li>这是另另一个li
    </li><li>这是另另另一个li</li>
</ul>

// 方式三：HTML注释标签
<ul>
    <li>这是一个li</li><!--
    --><li>这是另一个li</li><!--
    --><li>这是另另一个li</li><!--
    --><li>这是另另另一个li</li>
</ul>
```



----

## 28. 块级盒子（Block box） 和 内联盒子（Inline box）

在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (block box) 和 **内联盒子** (inline box**)**。这两种盒子会在页面流（page flow）和元素之间的关系方面表现出不同的行为:

**一个被定义成块级的（block）盒子**会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，**在绝大数情况下意味着盒子会和父容器一样宽**
- 每个盒子都会换行
- `width` 和 `height` 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

- 除非特殊指定，诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。


如果**一个盒子对外显示为 `inline`**，那么他的行为如下:

- 盒子不会产生换行。
- [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性将不起作用。
- 垂直方向的**内边距、外边距以及边框会被应用**但是**不会把其他处于 `inline` 状态的盒子推开**。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

- 用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。


我们通过对盒子[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

**补充: 内部和外部显示类型**

在这里最好也解释下**内部** 和 **外部** 显示类型。如上所述， css的box模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照 **[正常文档流](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)** 布局，也意味着它们和其他块元素以及内联元素一样(如上所述).

但是，我们可以通过使用类似 `flex` 的 `display` 属性值来更改内部显示类型。 如果设置 `display: flex`，在一个元素上，**外部显示类型**是 `block`，但是**内部显示类型**修改为 `flex`。 该盒子的所有直接子元素都会成为flex元素，会根据 [弹性盒子（Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) [）](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)规则进行布局，稍后您将了解这些规则。



---

## 29 请问你了解哪些CSS常用单位？

可将单位分为绝对单位与相对单位，**绝对单位**即固定长度的单位，不会变化，主要有：pt：Points 磅、in：Inches 英寸、mm：Millimeter 毫米、cm：Centimeter 厘米、q：Quarter millimeters 1/4毫米。

**相对单位**会随着参考值得变化而变化，在开发中使用频率更高，主要有：

- **px：**Pixel CSS像素，是web页面图像显示的基本单元，区别于物理像素，不是一个确定的物理量，也不是一个点或者小方块，而是CSS中的一个抽象概念，是一个相对单位，受上下文影响，默认情况（zoom100%）下1个CSS像素等于1个物理像素，若手动将页面放大或缩小，1个CSS像素就不等于1个物理像素。

| CSS单位      |                                            |
| ------------ | ------------------------------------------ |
| 相对长度单位 | px、em、ex、ch、rem、vw、vh、vmin、vmax、% |
| 绝对长度单位 | cm、mm、in、pt、pc                         |

在一些高PPI（每英寸像素数）的设备上，1个CSS像素默认相当于多个物理像素。比如iPhone的屏幕对比一般的手机屏幕会看起来更精细清晰一些，iPhone6、7、8都是两倍屏手机，1个CSS像素等于2个物理像素，对比一般的手机屏幕会看起来更清晰一些。

- **rem：**Root element meter **通过根文档（ body/html ）内文本的字体尺寸计算尺寸**，如下代码示例，若未指定字体大小则为浏览器默认字体大小（浏览器默认字体大小为16px)。

```html
<body>     
<div class="element"></div> 
</body>  
<style type="text/css">  
body {     
    font-size: 14px; 
} 
.element {     
    font-size: 16px;     
    width: 2rem;     /* 2rem === 28px */ 
} 
</style>

```

- **em：**Element meter 通过当前对象内文本的字体尺寸计算尺寸，**若未指定字体大小则继承自上级元素，直至 body**，若body未指定则为浏览器的默认字体尺寸。

```html
<body>     
<div class="element"></div> 
</body>  
<style type="text/css"> 
body {     
    font-size: 14px; 
} 
.element {     
    font-size: 16px;     
    width: 2em;     /* 2em === 32px */ } 
</style>

```

- **%：**百分比，笼统的说是相对于父元素的百分比，不同CSS属性，百分比的表现有所不同。常见使用场景：

- - width、height：width**相对于父元素**的宽；height相对于父元素的高进行百分比计算
  - 定位relative：top、bottom**相对父元素的高;**  left 、right**相对于父元素的宽**进行计算
  - border-radius：**相对自身标签的宽高**设置每个边角的**垂直和水平**半径
  - margin: left、right、top、bottom**相对于父元素的宽度**进行计算
  - 定位absolute：top、bottom**相对定位元素的高**；left 、right相对于**定位元素的宽**进行计算，同时位于absolute中的其他属性如width heiht margin等**都对当于定位元素**进行计算
  - line-hight设置内联元素垂直居中时，%**相对于文本的行高**进行计算，非父元素

- **vh vw：**view height/view width，相对于视口的高度和宽度，视口指屏幕可见范围，1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度。假设浏览器高度950px，宽度为1920px, 1 vh = 950px/100 = 9.5 px，1vw = 1920px/100 =19.2 px

**总结**

**px**：绝对单位，页面按精确像素展示

**em**：相对单位，基准点为父节点字体的大小，如果自身定义了`font-size`按自身来计算，整个页面内`1em`不是一个固定的值

**rem**：相对单位，可理解为`root em`, 相对根节点`html`的字体大小来计算

**vh、vw**：主要用于页面视口大小布局，在页面布局上更加方便简单



---

## 30.物理像素与CSS像素有什么换算关系呢？

CSS像素*DPR = 物理像素

像素比（DPR）：一个CSS像素占用几个物理像素



---

## 31.请问有哪些CSS浏览器兼容问题以及解决方案？

目前，浏览器厂商众多，Chrome，Frirefox，Safari，Edge，IE6……对于同一段CSS代码，不同厂商、甚至同一厂商不同版本的解析效果极大可能不一致，其根本原因是浏览器内核不同，这就导致了页面显示效果不统一，产生了CSS兼容性问题

目前对兼容问题的解决方案：

### 浏览器CSS样式初始化

在所有CSS开始前，对某些属性初始化，以防不同浏览器的显示效果不一样，**通常不推荐一味地使用通配符统一初始化样式**

```css
*{
 margin: 0;
 padding: 0;
}
```

### 浏览器私有属性

可直接在某个属性中额外添加浏览器私有写法，确保浏览器能识别该属性值，有两种开发思路，分别是渐近增强和优雅降级

**渐进增强：**先写某些特殊浏览器能识别的私有属性，再写通用写法确保大部分浏览器能正常显示

```html
<style type="text/css">
.test {
  -webkit-transform:rotate(-3deg); /*Chrome/Safari*/
  -moz-transform:rotate(-3deg); /*Firefox*/
  -ms-transform:rotate(-3deg); /*IE*/
  -o-transform:rotate(-3deg); /*Opera*/
   transform:rotate(-3deg);
  background-color: #fe3388;
  width: 300px;
  height: 300px;
}
</style>
<body>
<div class="test"></div>
</body>
```

**优雅降级：**先确保大部分浏览器能正常显示，再写某些特殊浏览器能识别的私有属性

```html
<style type="text/css">
.test {
  width: 300px;
  height: 300px;
  background-color: #fe3388;
  transform:rotate(-3deg);
  -webkit-transform:rotate(-3deg); /*Chrome/Safari*/
  -moz-transform:rotate(-3deg); /*Firefox*/
  -ms-transform:rotate(-3deg); /*IE*/
  -o-transform:rotate(-3deg); /*Opera*/
}
</style>
<body>
<div class="test"></div>
```

### CSS hack语法

（一般情况下，尽量避免使用CSS hack，过多滥用会造成html文档混乱，不易管理与维护）

**1.条件hack**，IE浏览器专有的hack方式，微软官方推荐

```css
<!--[if IE]> 	
这段文字只在IE浏览器显示 	
<![endif]-->
<!--[if gte IE 6]> 	
这段文字只在IE6以上(包括)版本IE浏览器显示 	
<![endif]-->
```

  **2. 属性级hack** CSS样式属性名前加上一些只有特定浏览器才能识别的hack前缀，以达到预期的页面展现效果

```css
.test {
  color: red; /* All browsers */
  *color: blue;  /* IE7，IE6 */
  _color: skyblue;  /* IE6 */
}
```

  **3. 选择符级hack**，在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀

```css
*html /* *前缀只对IE6生效*/
*+html /* *+前缀只对IE7生效*/
@media screen\9{...} /*只对IE6/7生效*/
@media \0screen {body { background: red; }} /*只对IE8有效*/
@media \0screen\,screen\9{body { background: blue; }} /*只对IE6/7/8有效*/
@media screen\0 {body { background: green; }} /*只对IE8/9/10有效*/
@media screen and (min-width:0\0) {body { background: gray; }} /*只对IE9/10有效*/ 
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {body { background: orange; }} /*只对IE10有效*/
```

### **自动化插件**

在解析CSS文件时，插件会自动添加浏览器前缀至CSS代码中，如Autoprefixer



---

## 32.flex:1表达什么含义？

flex：flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。



flex-grow：定义在分配多余空间时，**盒子的放大比例**，默认为0，**即存在剩余空间，也不放大**

```
flex-grow：属性定义的是项目的方法比例，默认为 0，即如果存在剩余空间，也不会去放大
如果所有的项目的flex-grow都为1，则他们将等分剩余空间。
如果一个项目的flex-grow属性为2，其他的都为1，那么前者占据的剩余空间会比其他项多一倍。
```

flex-shrink：定义在分配多余空间时，**盒子的缩小比例**（多余空间可能是负值），默认为1，**即空间不足将缩小**

```
flex-shrink：属性定义了项目的缩小比例，默认为1，即：如果空间不足，就将改项目缩小。
如果所有项目的flex-shrink属性为1，当空间不足时，就都等比例缩小。
如果一个项目的flex-shrink属性为0，其他的项目都为1，当空间不足的时候，为0的不缩小。
```

flex-basis：定义在分配多余空间之前，**盒子占据的主轴空间**（可理解为基准值），通常根据该属性计算多余空间，默认为auto，即盒子自身大小

```
flex-basis：属性定义了在分配多余空间之前，项目占据的主轴空间。
浏览器根据这个属性，计算主轴是否有多余空间，它的默认值为auto，也就是项目本来的大小

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

并且basis和width同时存在basis会把width干掉
```



```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
   .box {
      width: 500px;
      height: 100px;
      background-color: hotpink;
      display: flex;
    }
 
    .box div {
      width: 100px;
    }
 
    .box div:nth-child(1) {
        flex-grow: 2;
      flex-basis: 50px;
      background-color: gray;
    }
 
    .box div:nth-child(2) {
        flex-grow: 1;
      flex-basis: 100px;
      background-color: blue;
    }
 
    .box div:nth-child(3) {
        flex-grow: 1;
      flex-basis: 50px;
      background-color: goldenrod;
    }
    </style>
</head>
<body>
    <div class="box">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
</body>
</html>

```



除了auto (1 1 auto) 和 none (0 0 auto)这两个快捷值外，还有以下设置方式：

- 当 flex 取值为一个非负数字，**则该数字为 flex-grow 值**，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：

  ```css
  .item {flex: 1;}
  .item {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;
  }
  ```

  - 当 flex 取值为 0 时，对应的三个值分别为 0 1 0%

  ```css
  .item {flex: 0;}
  .item {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: 0%;
  }
  ```

  

flex取值不同，空间分配计算值不同，有以下几种常见情况：

|                | flex-grow | flex-shrink | flex-basis | 解释                                                         |
| -------------- | --------- | ----------- | ---------- | ------------------------------------------------------------ |
| flex: 2 3 23px | 2         | 3           | 23px       | 当flex有三个值时，则依次分配给flex-grow、flex-shrink、flex-basic |
| flex: none     | 0         | 0           | auto       | 当 flex 为none时，则计算值为0 0 auto                         |
| flex: auto     | 1         | 1           | auto       | 当 flex 为auto时，则计算值为1 1 auto                         |
| flex: 1        | 1         | 1           | 0%         | 当 flex 为一个非负数字，该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0% |
| flex: 0%       | 1         | 1           | 0%         | 当 flex 为一个长度或百分比，该数字为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1 |
| flex: 23px     | 1         | 1           | 23px       |                                                              |
| flex: 2 3      | 2         | 3           | 0%         | 当 flex 为两个非负数字，则分别为 flex-grow 和 flex-shrink 的值，flex-basis 取 0% |
| flex: 2 23px   | 2         | 1           | 23px       | 当 flex 为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，flex-shrink 取 1 |

关于 flex-basis 的取值情况：

- auto：盒子本身大小
- 百分比：根据其包含块（即伸缩父容器）的主尺寸计算
- 0：盒子本身大小，**当盒子大小未定义时，按其内容来来计算**
- 可以代替width属性定义盒子大小，**同时声明width属性和flex-basic属性时，会以flex-basic的值来计算**

针对以下Flex布局，算出三个盒子自适应后的最终宽度。

```html
<style type="text/css">
.parent {
    display: flex;
    width: 600px;
}
.item-1 {
    width: 140px;
    flex: 2 1 0%;
    background-color: red;
    height: 50px;
}
.item-2 {
    width: 100px;
    flex: 2 1 auto;
    background-color: green;
    height: 50px;
}
.item-3 {
    flex: 1 1 200px;
    background-color: blue;
    height: 50px;
}
</style>

<body>
<div class="parent">
    <div class="item-1"></div>
    <div class="item-2"></div>
    <div class="item-3"></div> 
</div>
</body>
```

```
主轴上父容器总尺寸： 600px

子元素总基准值（flex-basis）：0% + auto + 200px = 300px，其中

0% 即 600*0% = 0 宽度

auto 对应取盒子自身尺寸：100px

故剩余空间： 600px - 300px = 300px

剩余空间为正，需要扩大子元素，伸缩放大(flex-grow)系数之和为： 2 + 2 + 1 = 5

剩余空间分配如下：

item-1 和 item-2 各分配 2/5，各得 300*2/5 = 120px

item-3 分配 1/5，得 300*1/5 = 60px

各项目最终宽度为：

item-1 = 0% + 120px = 0 + 120px = 120px

item-2 = auto + 120px = 100px + 120px = 220px

item-3 = 200px + 60px = 260px
```





---



----

## 33.请问有哪些常见margin问题，有什么解决办法？

### margin重叠历史由来：

1、连续段落或者列表之类，如果没有margin重叠，首尾相间距会和其它兄弟标签1：2关系，排版不自然

2、web中任何地方嵌套或者直接放入任何裸div，都不会影响原来的布局。

3、遗落的空标签多个`<p>`元素，都不会影响原来的阅读排版。



### 重叠的结果：

1、两个相邻的外边距都是正数时，重叠结果是它们**两者之间较大的值**。
2、两个相邻的外边距都是负数时，重叠结果是两者**绝对值的较大值**。
3、两个外边距一正一负时，重叠结果是**两者的相加的和**。
margin 重叠本质上的问题还是 BFC，要理解这个问题，我们先来看看重叠的条件。

### 重叠的条件

- 必须是处于**常规文档流**（非 float 和绝对定位）的块级盒子，**并且处于同一个 BFC 当中**。
- 没有线盒，没有空隙（clearance，下面会讲到），没有 padding 和 border 将他们分隔开
- 都属于垂直方向上相邻的外边距，可以是下面任意一种情况
  - 元素的 margin-top 与其第一个常规文档流的子元素的 margin-top
  - 元素的 margin-bottom 与其下一个常规文档流的兄弟元素的 margin-top
  - height 为 auto 的元素的 margin-bottom 与其最后一个常规文档流的子元素的 margin-bottom
  - 高度为 0 或 auto 并且最小高度也为 0，不包含常规文档流的子元素，并且自身没有建立新的 BFC 的元素的 margin-top 和 margin-bottom

总结一下就是

- 浮动元素、绝对定位、inline-block元素不与任何元素的外边距产生重叠
- 不同 BFC 的元素不会产生重叠
- 特殊情况下存在间隙（clearance）的元素不会产生重叠



### (1)父元素margin塌陷,父子边距重合

边界重叠是**指两个或多个盒子**(可能相邻也可能嵌套)**的相邻边界**(其间没有任何非空内容、补白、边框)**重合在一起而形成一个单一边界**。

**只发生在垂直方向**，父元素和第一个/最后一个子元素设置了同方向的margin值，两个属性之间没有其他内容进行隔离，导致父元素margin-top/margin-bottom塌陷

父子元素的边界重叠

```html
<style>
  .parent {
    background: #e7a1c5;
  }
  .parent .child {
    background: #c8cdf5;
    height: 100px;
    margin-top: 10px;
  }
</style>
<section class="parent">
  <article class="child"></article>
</section>
```

以为期待的效果：

![img](E:\pogject\学习笔记\image\css\1696b9ade2b71502.png)

而实际上效果如下:

![img](E:\pogject\学习笔记\image\css\1696b9aded524e48.png)

在这里父元素的高度不是 110px，而是 100px，在这里发生了高度坍塌。

**产生原因：**

 是如果块元素的 **`margin-top`** 与它的**第一个子元素**的 `margin-top` 之间没有 `border`、`padding`、`inline` `content`、 `clearance` 来分隔，或者块元素的 **`margin-bottom`** 与它的**最后一个子元素**的 margin-bottom 之间没有 `border`、`padding`、`inline` `content`、`height`、`min-height`、 `max-height` 分隔，那么外边距会塌陷。**子元素多余的外边距会被父元素的外边距截断。**

**解决办法**：

父子元素的边界重叠得解决方案： **在父元素上加上 overflow:hidden;使其成为 BFC**。

```html
<style>
  .parent {
    background: #e7a1c5;
    overflow:hidden;
  }
  .parent .child {
    background: #c8cdf5;
    height: 100px;
    margin-top: 10px;
  }
</style>
<section class="parent">
  <article class="child"></article>
</section>
```

常见解决办法：

- 给父级元素设置边框或内边距
- **触发BFC布局**，改变父级元素渲染规则，将父级元素独立，可给父级盒子添加：position：absolute/fixed、display：inline-block、float：left/right、overflow：hidden等一些触发BFC的属性，但是使用的时候都会带来不同的问题，**具体使用中还需根据具体情况选择**
- **给子元素前面添加一个空的兄弟元素，其overflow设为hidden，起隔离作用**

```html
    <style type="text/css">
      .parent{
        width: 500px;
        height: 500px;
        background-color: blue;
        margin: 20px;
      }
      .child{
        width: 200px;
        height: 200px;
        background-color: orange;
        margin: 50px;
      }
      .sub{
        overflow: hidden;
      }
    </style>
      </head>

<body>
<div class="parent">
  <div class="sub"></div>
  <div class="child"></div>
</div>
```

重叠意义：外边距的重叠只产生在普通流文档的上下外边距之间，这个看起来有点奇怪的规则，**其实有其现实意义。设想，当我们上下排列一系列规则的块级元素（如段落P）时，那么块元素之间因为外边距重叠的存在，段落之间就不会产生双倍的距离。**



----

### (2)同级元素margin重叠

只发生在垂直方向，在同一个BFC区域内，相邻的兄弟元素会出现margin重叠情况，通常是上一个盒子的margin-bottom和下一个盒子的margin-top.

![img](E:\pogject\学习笔记\image\css\974EDA43625E4786A64431DC1560371A)

```html
    <style type="text/css">
      .parent{
        width: 500px;
        height: 800px;
        background-color: gray;
        margin: 20px;
        overflow: hidden;
      }
      .child1{
        width: 200px;
        height: 200px;
        background-color: blue;
        margin: 100px;
      }
      .child2{
        width: 200px;
        height: 200px;
        background-color: green;
        margin: 50px;
      }
    </style>
      </head>

<body>
<div class="parent">
  <div class="child1"></div>
  <div class="child2"></div>
</div>
```

**分析原因：**在于**child1的margin-bottom的参照元素**是child2，而**child2的margin-top的参照元素**恰好是child1，这就导致了它俩之间的间距就会以**两值中最大的那个**为实际效果。

常见解决办法：

触发BFC布局，改变元素渲染规则，**将其中一个元素独立出来**

**解决方法**：只设置一个元素的margin-top或者margin-bottom，避免margin重叠。 

```html
<style type="text/css">
    .child2_box{
        overflow: hidden;
      }
</style>

<div class="parent">
  <div class="child1"></div>
    
  <div class="child2_box">
    <div class="child2"></div>
  </div>
    
 </div>
```



---

### 3. 空元素自身margin重叠

**若一个无内容的空元素，同时设置了margin-top与margin-bottom，则会发生重叠**，如下图所示效果

![img](E:\pogject\学习笔记\image\css\FF6C2EB8F4D5CC20E8B3FCF9601FC281)

```html
    <style type="text/css">
      .parent{
        width: 500px;
        height: 800px;
        background-color: gray;
        margin: 20px;
        overflow: hidden;
      }
      .child1{
        background-color: blue;
        margin-top: 100px;
        margin-bottom: 50px;
      }
      .child2{
        width: 200px;
        height: 200px;
        background-color: green;
        margin-left: 50px;
      }
      .child2_box{
        overflow: hidden;
      }
    </style>
</head>
<body>

<div class="parent">
  <div class="child1"></div>
  <div class="child2_box">
    <div class="child2"></div>
  </div>
 </div>
```







---

## 34. 请问display:none、visibility:hidden、opacity:0有什么异同点？

相同点：都可以**让网页中某个元素隐藏**

不同点：

- **空间占据**

display:none：元素没有被渲染，**不存在于Render Tree中，不保留元素位置，在页面上彻底消失**，可理解为：看不见摸不到

visibility:hidden：**存在于Render Tree中，元素在网页上不可见，但元素位置没有改变**，可理解为：看不见但摸得到

opacity:0 ：**会占据空间**

- **子元素**

display:none：**所有子元素都会被隐藏**，占据的空间会消失，不可点击，也不可被访问

visibility:hidden：具有继承性，给父元素设置，子元素也会继承，**但若重新给子元素设置visibility: visible，子元素又会显示**

opacity:0 ：具有继承性，**不能**通过设置子元素的 opacity:1 使其显示

- **DOM结构**

display:none：影响DOM结构，**会触发回流**，**计数器不会计数**，浏览器渲染开销大

visibility:hidden：不影响DOM结构，**计数器仍运行**，**只会触发重绘**

opacity:0 ：**只会触发重绘**

- **事件绑定**

display:none和visibility:hidden：**元素上绑定的事件无法触发**

opacity:0 ：**元素上绑定的事件可以触发**



---

## 35.请问src和href有什么异同点？

相同点：都具有引用功能

不同点：

**href：**表示超文本引用，通常用于link、a等元素，**href是引用和页面关联**，在当前元素和引用资源之间建立联系

**src：**source的缩写，表示资源引用，通常用于img，script，iframe等元素，**指向外部资源的位置**，指向的内部会迁入到文档中当前标签所在的位置；在请求src资源时会将其指向的资源下载并应用到当前文档中，如js脚本，img图片等元素

href和src的区别
1.href：Hypertext Reference的缩写，超文本引用，它指向一些网络资源，**建立和当前元素或者说是本文档的链接关系**。在加载它的时候，不会停止对当前文档的处理，浏览器会继续往下走。常用在a、link等标签。

```html
<a href="http://www.baidu.com"></a>
<link type="text/css" rel="stylesheet" href="common.css">
```

如上面所显示的那样，当浏览器加载到link标签时，会识别这是CSS文档，并行下载该CSS文档，但并不会停止对当前页面后续内容的加载。这也是不建议使用@import加载CSS的原因。

2.src：source的所写，表示的是对资源的引用，它指向的内容会嵌入到当前标签所在的位置。**由于src的内容是页面必不可少的一部分，因此浏览器在解析src时会停下来对后续文档的处理，直到src的内容加载完毕**。常用在script、img、iframe标签中，我们建议js文件放在HTML文档的最后面。如果js文件放在了head标签中，可以使用window.onload实现js的最后加载。

```html
<img src="img/girl.jpg">
  
<frame src="top.html">
  
<script src="show.js">
```

总结：href用于建立当前页面与引用资源之间的关系（链接），而src则会替换当前标签。遇到href，页面会并行加载后续内容；而src则不同，浏览器需要加载完毕src的内容才会继续往下走。



----

## 36.移动端 1px 问题

**问题**：1px 的边框，在高清屏下，移动端的1px 会很粗

**产生原因**

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) **设备像素比**，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。

```css
window.devicePixelRatio = 物理像素 / CSS像素
```

目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。**一般设计稿是按照750来设计的**，它上面的1px是以750来参照的，**而我们写css样式是以设备375为参照的**，所以我们应该写的0.5px就好了啊！ 试过了就知道，iOS 8+系统支持，安卓系统不支持。

**解决方案**

1. WWDC对iOS统给出的方案

   在 WWDC大会上，给出来了1px方案，**当写 0.5px的时候，就会显示一个物理像素宽度的 border**，而不是一个css像素的 border。 所以在iOS下，你可以这样写。

   ```css
   border:0.5px solid #E5E5E5
   ```

   可能你会问为什么在3倍屏下，不是0.3333px 这样的？经过测试，**在Chrome上模拟iPhone 8Plus，发现小于0.46px的时候是显示不出来。**

   **总结：**

   - 优点：简单，没有副作用
   - 缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。

2. 使用边框图片

   ```css
    border: 1px solid transparent;
    border-image: url('./../../image/96.jpg') 2 repeat;
   ```

   **总结：**

   - 优点：没有副作用
   - 缺点：**border颜色变了就得重新制作图片**；圆角会比较模糊。

3. 使用box-shadow实现

   ```css
   box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
               1px  0  1px -1px #e5e5e5,   //右边线
               0  1px  1px -1px #e5e5e5,   //下边线
               -1px 0  1px -1px #e5e5e5;   //左边线
   
   ```

   **总结**

   - 优点：使用简单，圆角也可以实现
   - 缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。

4. 使用伪元素

   1条border

   ```css
   .setOnePx {
     position: relative;
     &::after{
       position: absolute;
       content: '';
       background-color: #e5e5e5;
       display: block;
       width: 100%;
       height: 1px; /*no*/
       transform: scale(1, 0.5);
       top: 0;
       left: 0;
     }
   }
   ```

   **可以看到，将伪元素设置绝对定位，并且和父元素的左上角对齐**，将width 设置100%，height设置为1px，然后进行在Y方向缩小0.5倍。

   4 条border

   ```css
   .setBorderAll{
        position: relative;
          &:after{
              content:" ";
              position:absolute;
              top: 0;
              left: 0;
              width: 200%;
              height: 200%;
              transform: scale(0.5);
              transform-origin: left top;
              box-sizing: border-box;
              border: 1px solid #E5E5E5;
              border-radius: 4px;
         }
       }
   
   ```

   同样为伪元素设置绝对定位，并且和父元素左上角对其。**将伪元素的长和宽先放大2倍，然后再设置一个边框，以左上角为中心，缩放到原来的0.5倍**

   **总结：**

   - 优点：全机型兼容，**实现了真正的1px，而且可以圆角**。
   - 缺点：暂用了after 伪元素，**可能影响清除浮动。**

5. 设置viewport的scale值

   这个解决方案是利用viewport+rem+js 实现的。

```html
<html>
  <head>
      <title>1px question</title>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">        
      <style>
          html {
              font-size: 1px;
          }            
          * {
              padding: 0;
              margin: 0;
          }
          .top_b {
              border-bottom: 1px solid #E5E5E5;
          }

          .a,.b {
              box-sizing: border-box;
              margin-top: 1rem;
              padding: 1rem;                
              font-size: 1.4rem;
          }

          .a {
              width: 100%;
          }

          .b {
              background: #f5f5f5;
              width: 100%;
          }
      </style>
      <script>
          var viewport = document.querySelector("meta[name=viewport]");
          //下面是根据设备像素设置viewport
          if (window.devicePixelRatio == 1) {
              viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
          }
          if (window.devicePixelRatio == 2) {
              viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
          }
          if (window.devicePixelRatio == 3) {
              viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
          }
          var docEl = document.documentElement;
          var fontsize = 32* (docEl.clientWidth / 750) + 'px';
          docEl.style.fontSize = fontsize;
      </script>
  </head>
  <body>
      <div class="top_b a">下面的底边宽度是虚拟1像素的</div>
      <div class="b">上面的边框宽度是虚拟1像素的</div>
  </body>
</html>

```

**总结**

- 优点：**全机型兼容，直接写1px不能再方便**
- 缺点：适用于新的项目，老项目可能改动大



------

## 37.移动端适配方案

适配思路

设计稿（750*1334） ---> 开发 ---> 适配不同的手机屏幕，使其显得合理

原则

1. 开发时方便，写代码时设置的值要和标注的 160px 相关
2. 方案要适配大多数手机屏幕，并且无 BUG
3. 用户体验要好，页面看着没有不适感

思路

1. 写页面时，按照设计稿写固定宽度，最后再统一缩放处理，在不同手机上都能用
2. 按照设计稿的标准开发页面，在手机上部分内容根据屏幕宽度等比缩放，部分内容按需要变化，需要缩放的元素使用 rem, vw 相对单位，不需要缩放的使用 px
3. 固定尺寸+弹性布局，不需要缩放

### viewport 适配

根据设计稿标准（750px 宽度）开发页面，**写完后页面及元素自动缩小，适配 375 宽度的屏幕**

在 head 里设置如下代码

```html
<meta name="viewport" content="width=750,initial-scale=0.5">
```

initial-scale = 屏幕的宽度 / 设计稿的宽度

为了适配其他屏幕，需要动态的设置 initial-scale 的值

```html
<head>
  <script>
    const WIDTH = 750
    const mobileAdapter = () => {
      let scale = screen.width / WIDTH
      let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
      let meta = document.querySelector('meta[name=viewport]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'viewport')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content',content)
    }
    mobileAdapter()
    window.onorientationchange = mobileAdapter //屏幕翻转时再次执行
  </script>
</head>

```

**缺点就是边线问题，不同尺寸下，边线的粗细是不一样的**（等比缩放后），**全部元素都是等比缩放**，实际显示效果可能不太好

### vw 适配（部分等比缩放）

1. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标注是基于此宽度标注）
2. 开始开发，对设计稿的标注进行转换，把px换成vw。比如页面元素字体标注的大小是32px，换成vw为 (100/750)*32 vw
3. 对于需要等比缩放的元素，CSS使用转换后的单位
4. 对于不需要缩放的元素，比如边框阴影，使用固定单位px

关于换算，为了开发方便，利用自定义属性，CSS变量

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750
    //:root { --width: 0.133333 } 1像素等于多少 vw
    document.documentElement.style.setProperty('--width', (100 / WIDTH)) 
  </script>
</head>

```

注意此时，meta 里就不要去设置缩放了

业务代码里就可以写

```css
header {
  font-size: calc(28vw * var(--width))
}
```

实现了按需缩放

### rem 适配

1. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标是基于此宽度标注）
2. 开始开发，对设计稿的标注进行转换
3. 对于需要等比缩放的元素，CSS使用转换后的单位
4. 对于不需要缩放的元素，比如边框阴影，使用固定单位px

假设设计稿的某个字体大小是 40px, 手机屏幕上的字体大小应为 420/750*40 = 22.4px (体验好)，换算成 rem（相对于 html 根节点，假设 html 的 font-size = 100px,）则这个字体大小为 0.224 rem

写样式时，对应的字体设置为 0.224 rem 即可，其他元素尺寸也做换算...

但是有问题

举个 ，设计稿的标注 是40px，写页面时还得去做计算，很麻烦（全部都要计算）

能不能规定一下，看到 40px ,就应该写 40/100 = 0.4 rem,这样看到就知道写多少了（不用计算），此时的 html 的 font-size 就不能是 100px 了，应该为 (420*100)/750 = 56px，100为我们要规定的那个参数

根据不同屏幕宽度，设置 html 的 font-size 值

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750 //设计稿尺寸
    const setView = () => {
      document.documentElement.style.fontSize = (100 * screen.width / WIDTH) + 'px'
    }
    window.onorientationchange = setView
    setView()
  </script>
</head>
```

**对于需要等比缩放的元素，CSS使用转换后的单位**

```css
header {
  font-size: .28rem;
}
```

对于不需要缩放的元素，比如边框阴影，使用固定单位px

```css
header > span.active {
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}
```

假设 html 的 font size = 1px 的话，就可以写 28 rem 了，更方便了，但是浏览器对字体大小有限制，设为 1px 的话，在浏览器中是失效的，会以 12px（或者其他值） 做一个计算 , 就会得到一个很夸张的结果，所以可以把 html 写的大一些

使用 sass 库时

JS 处理还是一样的，但看着好看些

```css
@function px2rem($px) {
  @return $px * 1rem / 100;
}

header {
  font-size: px2rem(28);
}
```

以上的三种适配方案，都是等比缩放，放到 ipad 上时（设计稿以手机屏幕设计的），页面元素会很大很丑，**有些场景下，并不需要页面整体缩放（viewport 自动处理的也很好了），所以有时只需要合理的布局即可。**

### 弹性盒适配（合理布局）

```html
<meta name="viewport" content="width=device-width">
```

使用 flex 布局

```css
section {
  display: flex;
}
```

总结一下，**什么样的页面需要做适配（等比缩放）**呢

- 页面中的布局是栅格化的

换了屏幕后，到底有多宽多高很难去做设置，整体的都需要改变，所以需要整体的缩放

- 头屏大图，宽度自适应，高度固定的话，对于不同的屏幕，形状就会发生改变（放到ipad上就变成长条了），宽度变化后，高度也要保持等比例变化

以上所有的适配都是宽度的适配，但是在某些场景下，也会出现高度的适配

比如大屏，需要适配很多的电视尺寸，要求撑满屏幕，不能有滚动条，此时若换个屏幕

**此时需要考虑小元素用 vh, 宽和高都用 vh 去表示，中间的大块去自适应**，这就做到了大屏的适配，屏幕变小了，整体变小了（体验更好），中间这块撑满了屏幕

对于更复杂的场景，需要更灵活考虑，没有一种适配方式可以囊括所有场景。



---

## 38.relative如何定位

relative (相对于自身偏移)

该关键字下，元素先放置在未添加定位时的位置，**再在不改变页面布局的前提下调整元素位置**（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。

相对定位的元素是**在文档中的正常位置偏移给定的值**，但是不影响其他元素的偏移。下面的例子中，注意未应用定位的其它元素是按照 "Two" 在正常位置的情况下进行布局的。

```html
  <style type="text/css">
  .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: red;
    color: white;
  }

  #two {
    position: relative;
    top: 20px;
    left: 20px;
    background: blue;
  }

  </style>
  <body>
  <div class="box" id="one">One</div>
  <div class="box" id="two">Two</div>
  <div class="box" id="three">Three</div>
  <div class="box" id="four">Four</div>
```

----

## 39.请问定位布局position属性有哪些取值？

定位布局：页面元素CSS样式采用position属性，可在top/bottom/right/left四个方向进行位置移动，从而达到定位效果，position属性可取以下7个值：

### (1) 静态定位 static

- **默认定位，遵循正常的文档流**。元素不会受到影响

- 该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 `top`, `right`, `bottom`, `left` 和 `z-index` 属性**无效**。



###   (2) 相对定位 relative

- **不会使元素脱离文档流**（原本位置会被保留，即改变位置也不会占用新位置）。

- 相对于自身原本位置移动（**没有定位偏移量则对元素无影响**）

- 不影响元素本身特性（无论块级元素或行内元素，保留其原本特性）

- **常用于提升层级**，从而改变元素覆盖关系，若两个都为定位元素，后面的会覆盖前面

- 该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。

```css

    #div2 {
        background-color: black;
        position: relative;
        top: 100px;
        left: 100px;
    }

```



### (3) 绝对定位 absolute

- **使元素完全脱离文档流**（在文档流中不再占原来位置）

- **行内元素设置定位效果后，支持设置宽高**

- 区块元素设置定位效果后，`未设置宽度时由内容撑开宽度`

- **相对于最近一个有定位的父元素进行偏移**，如果不存在就逐级向上排查，**直到相对于body元素**，即相对于浏览器窗口（必须有参照物）

- **子绝父相，一般配合相对定位使用**，（将父元素设置相对定位，子元素相对于父元素偏移）

- 可提升层级

- 元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。

  ```css
  {
      position:absolute;
      left:100px;
      top:150px;
  }
  ```

  

### (4) 固定定位 fixed

- 直接**相对于浏览器窗口**进行“绝对定位”

- 浮动在页面中，**元素位置不会随浏览器窗口滚动条滚动而变化**。即使窗口是滚动的它也不会移动

- **不会受文档流动影响**

- **元素会被移出正常文档流，并不为元素预留空间**，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。

- 元素的位置在屏幕滚动时不会改变。**打印时，元素会出现在的每页的固定位置**。

- `fixed` 属性会创建新的层叠上下文。

- 当元素祖先的 `transform`, `perspective` 或 `filter` 属性非 `none` 时，**容器由视口改为该祖先**。fixed效果失效。

 ```css
  {
      position:fixed;
      top:30px;
      right:5px;
  }
 ```

  

### (5) 粘性定位 sticky

- 基于用户的滚动来定位，**在相对定位与固定定位两者间切换**。滚动前相当于position:relative，当页面滚动超出目标区域时，相当于position:fixed，会将元素固定在目标位置

- **相对于离它最近的具有滚动框的父级元素**，如果父级元素都不可以滚动，那相对于浏览器窗口计算偏移量

- 如top: 50px，**在sticky元素到达距离相对定位的元素顶部50px的位置时固定，无论怎么滚动，都不再向上移动**

- 兼容性不好，如Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位，通常需要结合CSS3兼容方案

- 注意，一个 sticky 元素会“固定”在**离它最近的一个拥有“滚动机制”的祖先上**（当该祖先的`overflow` 是 `hidden`, `scroll`, `auto`, 或 `overlay`时），即便这个祖先不是最近的真实可滚动祖先。**这有效地抑制了任何“sticky”行为**

- 须指定 [`top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top), [`right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right), [`bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom) 或 [`left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left) 四个阈值其中之一，才可使粘性定位生效。**否则其行为与相对定位相同**。

- ```css
  #one { position: sticky; top: 10px; }
  /*在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。
  	之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。*/
  ```
  
  

### (6) 继承值 inherit

- 从父元素继承 position 属性值

### (7) 初始值 initial

- initial 关键字可用于任何 HTML 元素上任何 CSS 属性

- 可将所有CSS属性恢复到初始状态

**重叠的元素**

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

**注意：** 如果两个定位元素重叠，没有指定z - index，**最后定位在HTML代码中的元素将被显示在最前面**。





---

##  40.fixed定位会出现失效情况吗？有什么解决办法吗？



存在常见3种fixed定位失效情况：

(1) **父元素的transform属性值不为none时，子元素的fixed失效**（比较常见，仅在部分浏览器中失效）

```html
<p style="transform:scale(1);"><img src="mm1.jpg"style="position:fixed;" /></p>
```

```html
<div class="wrapper">
  <div class="target"></div>
</div>
```

```css
.wrapper {
  width: 200px;
  height: 200px;
  background: yellow;
  transform: translate3d(0,0,0);
}

.target {
  position: fixed;
  top: 50%;
  width: 30px;
  height: 30px;
  background: #000;
}
/*在HTML命名空间(namespace)中, 
拥有属性transform的元素(除了transform: none)的元素会创建"层叠上下文"(stacking context)和"包含块"(containing block),
该元素将作为(拥有position: fixed属性的)后代元素的"包含块"*/
```

失效原因：当元素祖先的 transform 属性非 none 时，**定位容器由视口改为该祖先**（摘自MDN）

这就涉及到了 Stacking Context ，也就是**堆叠上下文**的概念了。解释上面的问题分为两步：

1. 任何非 `none` 的 `transform` 值都会导致一个堆叠上下文（Stacking Context）和包含块（Containing Block）的创建。
2. 由于堆叠上下文的创建，**该元素会影响其子元素的固定定位**。设置了 `position:fixed` 的子元素将不会基于 `viewport` 定位，而是基于这个父元素。

解决办法：

经过实验发现，absolute定位在该情况下不会失效，**可利用absolute定位模拟fixed效果**，

主要**实现思路**：将html的滚动条禁用，开启body滚动条，对该元素absolute定位，**并不设置父级元素定位，会相对document定位**，但其滚动条未开启，不会受body滚动影响。因为在 `body`元素下，可以使用 `position:absolute` 代替 。

```

```

 (2)  **perspective属性值不为none时**（不常见）

浏览器都不支持 perspective 属性，Chrome 和 Safari 支持替代的 -webkit-perspective 属性，目前可行办法就是删掉perspective属性

```css
-webkit-perspective: 1000;
 
-moz-perspective: 1000;
 
-ms-perspective: 1000;
 
perspective: 1000;
```

(3)  元素的will-change中指定了任意 CSS 属性

目前可行办法就是尽量避免给fixed定位元素设置will-change

不要把固定定位元素放在拥有transform/will-change属性值的元素里面.
导航栏之类的元素也可以用sticky代替fixed,不过sticky的兼容性不太好.
另外,很多动画库都会使用transform来优化动画效果, 如果fixed元素出了什么奇怪的bug,那很可能是这些库搞得鬼.

`position: fixed` 还有一些其他问题，比如在在移动端实现头部、底部模块定位。或者是在 `position: fixed` 中使用了 input 也会存在一些问题





---

## 41.请问你了解浮动布局float属性吗？

浮动布局：为方便页面设计，**给元素设置float属性，将元素脱离文档流，浮动框进行左右移动**，**直至外边缘遇到包含框或者另一个浮动框边缘**，**再通过margin属性调整位置**，float属性可取3个值：left：左浮动、right：右浮动、none：不浮动（默认）

浮动的影响：

- **改变块级元素的排列方式**，内容从上下排列显示变成水平排列显示
- **浮动元素会脱离文档流**，**不占位**，**盒子重叠**，内容不重叠
- **浮动的块级元素的宽度由内容撑开**，行内元素可设宽高、margin和padding均有效，**可理解为隐式转换为inline-block元素**



---

## 42.浮动布局最常产生什么问题？

通常父级盒子不设置高度时，高度将由内容或子元素撑开，**当子元素浮动脱离文档流后， 父盒子就会出现高度塌陷**，边框变成一条线，**通常需要清除浮动来解决该问题**



---

## 43怎么理解css文档流/元素脱离文档流后有什么特点

**文档流处在文档的最底层，它规定了一个页面的位置和元素布局等规则。**

我们所创建的元素都处在文档流中，文档流所指定的规则比如块级元素独占一行，内联元素不会独占一行，内联元素不能设置高宽，父元素的高度由子元素撑开等。**文档流之所以称为流，是它的布局像流一样从上到下在从左到右。**

**而元素脱离文档流之后，该元素便不再遵循文档流的规则**，比如块级元素不再独占一行，**内联元素脱离文档流之后可以设置高宽**，脱离的元素不能撑开父元素，不再在文档流中占有位置等。

而脱离文档流的设置有两种：float，position：absolute

### 什么是脱离文档流？

浏览器默认的排版方式就是文档流(或者叫标准流)排版方式。**脱离文档流就是不按照文档流的排版方式**。

文档流的排版方式是：块级元素垂直排布，行内元素和行内块级水平排布。不脱离就是按照这种方式排版,从左到右，从上到下。

脱离文档流是指，该元素脱离了文档中。不再占据默认分配的空间，它下面的元素会上去补位。

| 脱离状态 | 区别                                                         |
| -------- | ------------------------------------------------------------ |
| 全脱离   | 补位元素中无论是有图片还是文字，都会全部上去补位             |
| 半脱离   | 补位元素中有图片、文字的，这些图片或者文字会卡在元素周围，形成环绕效果 |

### (1)float(半脱离文档)

（理解是通过设置float来脱离文档流，脱离后的元素会遵循文档流之外的另一套规则，暂且称为**浮动规则**）。
规则如下：
①、产生字围效果，元素不会盖住文字，文字会绕着元素布局。
②、**元素层级提高，会盖住非浮动的元素。**
③、父元素的垂直外边距不会和子元素重叠。
④、**浮动元素不会超过超过上面的非浮动元素，会排列在非浮动块元素的下一行。**
⑤、元素浮动后会尽量向页面的左上或右上浮动，直到遇到父元素边框或其它浮动元素（**浮动的元素不会脱离父元素，浮动还是相对于父元素浮动**）。
⑥、浮动的元素不会超过它上边的兄弟元素，最多一边齐。
⑦、文档流中子元素的宽度默认为父元素的100%，**脱离文档流之后，块元素的高宽度都只能由内容撑开**，而且**浮动的子元素无法撑开父元素（除非父元素也是浮动元素）。**
⑧、内联元素浮动后会变成块级元素。

```html
<div class="box1"></div>
<!-- 我们多写点文字 -->
<div class="box2">
麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥麒麟二哥
</div>

```



```css
.box1{
	width: 200px;
	height: 200px;
	float: left;
	background-color: #00B5EE;
}
.box2{
    /*宽度设置大一点，比200多50 实现全环绕效果*/
	width: 250px;
	height: 250px;
	background-color: #00FF00;
}

```



### (2) position:absolute（全脱离文档流）

（理解是通过设置绝对定位来脱离文档流，脱离后的元素会遵循文档流之外的另一套规则，暂且称为**绝对定位规则**）。
规则如下：
①、 绝对定位是相对于**离他最近的开启了定位的祖先元素**进行定位的，没有这种祖先元素，则相对于浏览器窗口（以左上角为坐标（0，0））
②、定位元素会**提高一个层级**。
③、**内联元素变块级元素，高宽都只能由内容撑开。**
④、当一个文档流中的元素前的一个元素开启了绝对定位，**则这个文档流中的元素会向上移动，被前元素覆盖**。（其实跟浮动规则差不多），如果没有这样的情况，则开启了绝对定位的元素**如果不设置偏移量，位置不会发生变化**。

```css
.box1{
	width: 200px;
	height: 200px;
	position: absolute;
	background-color: #00B5EE;
}
.box2{
	width: 200px;
	height: 200px;
	background-color: #00FF00;
}

```

浮动规则≠绝对定位规则，两者不相通
这句话的意思是一个浮动元素和一个定位元素会重叠，且**绝对定位元素的层级高于浮动元素的层级**（按照浮动规则，浮动的兄弟元素是不会相互覆盖的）。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<style type="text/css">
		#box1{
			width: 400px;
			height: 400px;
			/* position: absolute; */
			float: left;
			background-color: red;
		}
		#box2{
			width: 100px;
		    height: 100px;
			background: green;
			float:left;
			/* position: absolute; */
	</style>
	<body>
		<div id="box1">	
		</div>
		<div id="box2">
		</div>
	</body>
</html>

```

（当两个元素都开启绝对定位且不设置偏移量时，**两个元素也会像上面这个图一样相互覆盖**）





---

## 44.设备像素、css像素、设备独立像素、dpr、ppi 之间有什么区别？

在`css`中我们通常使用px作为单位，在PC浏览器中`css`的1个像素都是对应着电脑屏幕的1个物理像素

这会造成一种错觉，我们会认为`css`中的像素就是设备的物理像素

但实际情况却并非如此，`css`中的像素只是一个抽象的单位，在不同的设备或不同的环境中，`css`中的1px所代表的设备物理像素是不同的

当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异

这背后就涉及了css像素、设备像素、设备独立像素、dpr、ppi的概念

### CSS像素

CSS像素（css pixel, px）: 适用于web编程，在 CSS 中以 px 为后缀，是一个长度单位

在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位

**px是一个相对单位**，相对的是设备像素（device pixel）

**一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素**

`CSS`像素又具有**两个方面的相对性**：

- 在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）
- 在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）

在页面进行缩放操作也会 引起`css`中`px`的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）

假设原来需要 320px 才能填满的宽度现在只需要 160px

px会受到下面的因素的影响而变化：

- 每英寸像素（PPI）
- 设备像素比（DPR）

### 设备像素

设备像素（device pixels），又称为物理像素

**指设备能控制显示的最小物理单位**，不一定是一个小正方形区块，也没有标准的宽高，**只是用于显示丰富色彩的一个“点”而已**

从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为`pt`

### 设备独立像素

设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，**代表可以通过程序控制使用的虚拟像素**，是一个总体概念，包括了CSS像素

在`javaScript`中可以通过`window.screen.width/ window.screen.height` 查看

比如我们会说“电脑屏幕在 2560x1600分辨率下不适合玩游戏，我们把它调为 1440x900”，这里的“分辨率”（非严谨说法）指的就是设备独立像素

**一个设备独立像素里可能包含1个或者多个物理像素点**，包含的越多则屏幕看起来越清晰

至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：

iPhone 3GS 和 iPhone 4/4s 的尺寸都是 3.5 寸，但 iPhone 3GS 的分辨率是 320x480，iPhone 4/4s 的分辨率是 640x960

这意味着，iPhone 3GS 有 320 个物理像素，iPhone 4/4s 有 640 个物理像素

如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，**为了避免这种问题，就产生了虚拟像素单位**

我们统一 iPhone 3GS 和 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素

**至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比**，也就是下面介绍的`dpr`

### dpr

dpr（device pixel ratio），设备像素比，**代表设备独立像素到设备像素的转换关系**，在`JavaScript`中可以通过 `window.devicePixelRatio` 获取

计算公式如下：

```
dpr = 设备像素 / 设备独立像素
```

当设备像素比为1:1时，使用1（1×1）个设备像素显示1个CSS像素

当设备像素比为2:1时，使用**4（2×2）个设备像素**显示1个CSS像素

当设备像素比为3:1时，使用9（3×3）个设备像素显示1个CSS像素

当`dpr`为3，那么`1px`的`CSS`像素宽度对应`3px`的物理像素的宽度，1px的`CSS`像素高度对应`3px`的物理像素高度

### ppi

ppi （pixel per inch），每英寸像素，**表示每英寸所包含的像素点数目**，更确切的说法应该是**像素密度**。数值越高，说明屏幕能以更高密度显示图像

计算公式如下：

![img](E:\pogject\学习笔记\image\css\PPI)

**总结**

无缩放情况下，1个CSS像素等于1个设备独立像素

设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变

PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）

在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素

设备像素比（dpr） = 设备像素 / 设备独立像素

每英寸像素（ppi），值越大，图像越清晰



----

## 45. CSS中，有哪些方式可以隐藏页面元素？有什么区别?

通过`css`实现隐藏元素方法有如下：

- display:none
- visibility:hidden
- opacity:0
- 设置height、width模型属性为0
- position:absolute
- clip-path

### display:none

设置元素的`display`为`none`是最常用的隐藏元素的方法

```css
.hide {
    display:none;
}
```

将元素设置为`display:none`后，元素在页面上将彻底消失

元素本身占有的空间就会被其他元素占有，**也就是说它会导致浏览器的重排和重绘**

消失后，自身绑定的事件不会触发，也不会有过渡效果

特点：元素不可见，不占据空间，无法响应点击事件



### visibility:hidden

设置元素的`visibility`为`hidden`也是一种常用的隐藏元素的方法

从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘

```css
.hidden{
    visibility:hidden
}
```

给人的效果是隐藏了，**所以他自身的事件不会触发**

特点：元素不可见，占据页面空间，无法响应点击事件



### opacity:0

`opacity`属性表示元素的透明度，**将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的**

不会引发重排，**一般情况下也会引发重绘**

> 如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速）**，则只会触发 GPU 层面的 composite，不会触发重绘**

```css
.transparent {
    opacity:0;
}
```

由于其仍然是存在于页面上的，**所以他自身的的事件仍然是可以触发的**，但**被他遮挡的元素是不能触发其事件的**

需要注意的是：其子元素不能设置opacity来达到显示的效果

特点：改变元素透明度，元素不可见，占据页面空间，**可以响应点击事件**



### 设置height、width属性为0

将元素的`margin`，`border`，`padding`，`height`和`width`等**影响元素盒模型的属性设置成0**，如果元素内有子元素或内容，**还应该设置其`overflow:hidden`来隐藏其子元素**

```css
.hiddenBox {
    margin:0;     
    border:0;
    padding:0;
    height:0;
    width:0;
    overflow:hidden;
}
```

特点：元素不可见，**不占据页面空间，无法响应点击事件**



### position:absolute

将元素移出可视区域

```css
.hide {
   position: absolute;
   top: -9999px;
   left: -9999px;
}
```

特点：元素不可见，**不影响页面布局**



### clip-path

通过裁剪的形式

```css
.hide {
  clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
}
```

特点：元素不可见，**占据页面空间，无法响应点击事件**



### 区别

最常用的还是`display:none`和`visibility:hidden`，其他的方式只能认为是奇招，它们的真正用途并不是用于隐藏元素，所以并不推荐使用它们

关于`display: none`、` visibility: hidden`、`opacity: 0`的区别，如下表所示：

|                        | display: none | visibility: hidden | opacity: 0 |
| :--------------------- | :------------ | :----------------- | ---------- |
| 页面中                 | 不存在        | 存在               | 存在       |
| 重排                   | 会            | 不会               | 不会       |
| 重绘                   | 会            | 会                 | 不一定     |
| 自身绑定事件           | 不触发        | 不触发             | 可触发     |
| transition             | 不支持        | 支持               | 支持       |
| 子元素可复原           | 不能          | 能                 | 不能       |
| 被遮挡的元素可触发事件 | 能            | 能                 | 不能       |

**结构**

display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击， visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击 opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

**继承**

display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。 visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。

**性能**

displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大 visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容 opacity: 0 ：修改元素会造成重绘，性能消耗较少



---

## 46.怎么使用 CSS3 实现动画？

CSS动画（CSS Animations）是为层叠样式表建议的允许可扩展标记语言（XML）元素使用CSS的动画的模块

即指元素从一种样式逐渐过渡为另一种样式的过程

常见的动画效果有很多，如平移、旋转、缩放等等，复杂动画则是多个简单动画的组合

`css`实现动画的方式，有如下几种：

- transition 实现渐变动画
- transform 转变动画
- animation 实现自定义动画

| 属性               | 含义                                                         |
| ------------------ | ------------------------------------------------------------ |
| transition（过度） | 用于设置元素的样式过度，和animation有着类似的效果，但细节上有很大的不同 |
| transform（变形）  | 用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系，就相当于color一样用来设置元素的“外表” |
| translate（移动）  | 只是transform的一个属性值，即移动                            |
| animation（动画）  | 用于设置动画属性，他是一个简写的属性，包含6个属性            |



----

## 47.怎么理解回流跟重绘？什么场景下会触发？

### 概念

在`HTML`中，每个元素都可以理解成一个盒子，在浏览器解析过程中，会涉及到回流与重绘：

- 回流：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置
- 重绘：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制

具体的浏览器解析渲染机制如下所示：

![img](E:\pogject\学习笔记\image\css\渲染过程)

- 解析HTML，生成DOM树，解析CSS，生成CSSOM树
- 将DOM树和CSSOM树结合，生成渲染树(Render Tree)
- Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
- Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- Display:将像素发送给GPU，展示在页面上

在页面初始渲染阶段，回流不可避免的触发，可以理解成页面一开始是空白的元素，后面添加了新的元素使页面布局发生改变

当我们对 `DOM` 的修改引发了 `DOM `几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性，然后再将计算的结果绘制出来

当我们对 `DOM `的修改导致了样式的变化（`color`或`background-color`），却并未影响其几何属性时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式，这里就仅仅触发了回流



### 如何触发

要想减少回流和重绘的次数，首先要了解回流和重绘是如何触发的

#### 回流触发时机

回流这一阶段主要是计算节点的位置和几何信息，那么**当页面布局和几何信息发生变化的时候，就需要回流**，如下面情况：

- 添加或删除可见的DOM元素
- 元素的位置发生变化
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代
- 页面一开始渲染的时候（这避免不了）
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

还有一些容易被忽略的操作：获取一些特定属性的值

> offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight

**这些属性有一个共性，就是需要通过即时计算得到**。因此**浏览器为了获取这些值，也会进行回流**

除此还包括`getComputedStyle `方法，原理是一样的

#### 重绘触发时机

触发回流一定会触发重绘

可以把页面理解为一个黑板，黑板上有一朵画好的小花。现在我们要把这朵从左边移到了右边，那我们要先确定好右边的具体位置，画好形状（回流），再画上它原有的颜色（重绘）

除此之外还有一些其他引起重绘行为：

- 颜色的修改
- 文本方向的修改
- 阴影的修改

#### 浏览器优化机制

由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列

**当你获取布局信息的操作的时候，会强制队列刷新**，包括前面讲到的`offsetTop`等方法都会返回最新的数据

因此浏览器不得不清空队列，触发回流重绘来返回正确的值



### 如何减少

我们了解了如何触发回流和重绘的场景，下面给出避免回流的经验：

- 如果想设定元素的样式，通过改变元素的 `class` 类名 (**尽可能在 DOM 树的最里层**)
- **避免设置多项内联样式**
- 应用元素的动画，使用 `position` 属性的 `fixed` 值或 `absolute` 值
- 避免使用 `table` 布局，**`table` 中每个元素的大小以及内容的改动，都会导致整个 `table` 的重新计算**
- 对于那些复杂的动画，对其设置 `position: fixed/absolute`，尽可能地使元素脱离文档流，从而减少对其他元素的影响
- **使用css3硬件加速**，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘
- 避免使用 CSS 的 `JavaScript` 表达式

- 在使用 `JavaScript` 动态插入多个节点时, 可以使用`DocumentFragment`. 创建后一次插入. 就能避免多次的渲染性能

但有时候，我们会无可避免地进行回流或者重绘，我们可以更好使用它们

例如，多次修改一个把元素布局的时候，我们很可能会如下操作

```js
const el = document.getElementById('el')
for(let i=0;i<10;i++) {
    el.style.top  = el.offsetTop  + 10 + "px";
    el.style.left = el.offsetLeft + 10 + "px";
}
```

每次循环都需要获取多次`offset`属性，比较糟糕，**可以使用变量的形式缓存起来，待计算完毕再提交给浏览器发出重计算请求**

```js
// 缓存offsetLeft与offsetTop的值
const el = document.getElementById('el') 
let offLeft = el.offsetLeft, offTop = el.offsetTop

// 在JS层面进行计算
for(let i=0;i<10;i++) {
  offLeft += 10
  offTop  += 10
}

// 一次性将计算结果应用到DOM上
el.style.left = offLeft + "px"
el.style.top = offTop  + "px"
```

**我们还可避免改变样式，使用类名去合并样式**

```js
const container = document.getElementById('container')
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
```

使用类名去合并样式

```html
<style>
    .basic_style {
        width: 100px;
        height: 200px;
        border: 10px solid red;
        color: red;
    }
</style>
<script>
    const container = document.getElementById('container')
    container.classList.add('basic_style')
</script>
```

前者每次单独操作，都去触发一次渲染树更改（新浏览器不会），都去触发一次渲染树更改，从而导致相应的回流与重绘过程

**合并之后，等于我们将所有的更改一次性发出**

我们还可以通过通过设置元素属性`display: none`，将其从页面上去掉，然后再进行后续操作，这些后续操作也不会触发回流与重绘，这个过程称为**离线操作**

```js
const container = document.getElementById('container')
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
```

离线操作后

```js
let container = document.getElementById('container')
container.style.display = 'none'
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
...（省略了许多类似的后续操作）
container.style.display = 'block'
```



----

## 48. 如果使用CSS提高页面性能？

实现方式有很多种，主要有如下：

- 内联首屏关键CSS
- 异步加载CSS
- 资源压缩
- 合理使用选择器
- 减少使用昂贵的属性
- 不要使用@import

### 内联首屏关键CSS

在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，**而通过内联`css`关键代码能够使浏览器在下载完`html`后就能立刻渲染**

而如果外部引用`css`代码，在解析`html`结构过程中遇到外部`css`文件，才会开始下载`css`代码，再渲染

**所以，`CSS`内联使用使渲染时间提前**

注意：但是较大的`css`代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式

### 异步加载CSS

在`CSS`文件请求、下载、解析完成之前，`CSS`会阻塞渲染，浏览器将不会渲染任何已处理的内容

前面加载内联代码后，后面的外部引用`css`则没必要阻塞浏览器渲染。**这时候就可以采取异步加载的方案**，主要有如下：

- 使用javascript将link标签插到head标签最后

```js
// 创建link标签
const myCSS = document.createElement( "link" );
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到header的最后位置
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
```

- 设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。**加载完成后，将`media`的值设为`screen`或`all`，从而让浏览器开始解析CSS**

```html
<link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'">
```

- 通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet

```html
<link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">
```

### 资源压缩

利用`webpack`、`gulp/grunt`、`rollup`等模块化工具，将`css`代码进行压缩，使文件变小，大大降低了浏览器的加载时间

### 合理使用选择器

`css`匹配的规则是从右往左开始匹配，例如`#markdown .content h3`匹配规则如下：

- 先找到h3标签元素
- 然后去除祖先不是.content的元素
- 最后去除祖先不是#markdown的元素

如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高

所以我们**在编写选择器的时候，可以遵循以下规则：**

- 不要嵌套使用过多复杂选择器，最好不要三层以上
- 使用id选择器就没必要再进行嵌套
- **通配符和属性选择器效率最低**，避免使用

### 减少使用昂贵的属性

在页面发生重绘的时候，昂贵属性如`box-shadow`/`border-radius`/`filter`/透明度/`:nth-child`等，会降低浏览器的渲染性能

### 不要使用@import

css样式文件有两种引入方式，一种是`link`元素，另一种是`@import`

`@import`会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时

而且多个`@import`可能会导致下载顺序紊乱

比如一个css文件`index.css`包含了以下内容：`@import url("reset.css")`

那么浏览器就必须先把`index.css`下载、解析和执行后，才下载、解析和执行第二个文件`reset.css`

### 其他

- 减少重排操作，以及减少不必要的重绘
- 了解哪些属性可以继承而来，避免对这些属性重复编写
- cssSprite，合成所有icon图片，用宽高加上backgroud-position的背景图方式显现出我们要的icon图，减少了http请求
- 把小的icon图片转成base64编码
- CSS3动画或者过渡尽量使用transform和opacity来实现动画，不要使用left和top属性

`css`实现性能的方式可以从选择器嵌套、属性特性、减少`http`这三面考虑，同时还要注意`css`代码的加载顺序

-----

## 49.怎么让Chrome支持小于12px 的文字？

Chrome 中文版浏览器会默认设定页面的最小字号是12px，英文版没有限制

**原由 Chrome 团队认为汉字小于12px就会增加识别难度**

- 中文版浏览器

与网页语言无关，取决于用户在Chrome的设置里（chrome://settings/languages）把哪种语言设置为默认显示语言

- 系统级最小字号

浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改

而我们在实际项目中，不能奢求用户更改浏览器设置

对于文本需要以更小的字号来显示，就需要用到一些小技巧



常见的解决方案有：

- zoom
- -webkit-transform:scale()
- -webkit-text-size-adjust:none

### Zoom

`zoom` 的字面意思是“变焦”，**可以改变页面上元素的尺寸**，属于真实尺寸

其支持的值类型有：

- zoom:50%，表示缩小到原来的一半
- zoom:0.5，表示缩小到原来的一半

使用 `zoom` 来”支持“ 12px 以下的字体

代码如下：

```html
<style type="text/css">
    .span1{
        font-size: 12px;
        display: inline-block;
        zoom: 0.8;
    }
    .span2{
        display: inline-block;
        font-size: 12px;
    }
</style>
<body>
    <span class="span1">测试10px</span>
    <span class="span2">测试12px</span>
</body>
```

需要注意的是，`Zoom` 并不是标准属性，需要考虑其兼容性



### -webkit-transform:scale()

针对`chrome`浏览器,加`webkit`前缀，用`transform:scale()`这个属性进行放缩

注意的是，**使用`scale`属性只对可以定义宽高的元素生效**，所以，下面代码中将`span`元素转为行内块元素

实现代码如下：

```html
<style type="text/css">
    .span1{
        font-size: 12px;
        display: inline-block;
        -webkit-transform:scale(0.8);
    }
    .span2{
        display: inline-block;
        font-size: 12px;
    }
</style>
<body>
    <span class="span1">测试10px</span>
    <span class="span2">测试12px</span>
</body>
```



### -webkit-text-size-adjust:none

该属性**用来设定文字大小是否根据设备(浏览器)来自动调整显示大小**

属性值：

- percentage：字体显示的大小；
- auto：默认，字体大小会根据设备/浏览器来自动调整；
- none:字体大小不会自动调整

```css
html { -webkit-text-size-adjust: none; }
```

这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了

所以，**我们不建议全局应用该属性，而是单独对某一属性使用**

> 需要注意的是，自从`chrome 27`之后，就取消了对这个属性的支持。同时，该属性只对英文、数字生效，对中文不生效



`Zoom` 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排

`-webkit-transform:scale()` 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化

`-webkit-text-size-adjust`对谷歌浏览器有版本要求，在27之后，就取消了该属性的支持，并且只对英文、数字生效



-----

## 50.如何实现单行／多行文本溢出的省略样式？

在日常开发展示页面，如果一段文本的数量过长，受制于元素宽度的因素，有可能不能完全显示，为了提高用户的使用体验，这个时候就需要我们把溢出的文本显示成省略号

对于文本的溢出，我们可以分成两种形式：

- 单行文本溢出
- 多行文本溢出

### 单行文本溢出省略

理解也很简单，**即文本在一行内显示，超出部分以省略号的形式展现**

实现方式也很简单，涉及的`css`属性有：

- text-overflow：规定当文本溢出时，显示省略符号来代表被修剪的文本
- white-space：设置文字在一行显示，不能换行
- overflow：文字长度超出限定宽度，则隐藏超出的内容

`overflow`设为`hidden`，普通情况用在块级元素的外层隐藏内部溢出元素，或者配合下面两个属性实现文本溢出省略

`white-space:nowrap`，作用是设置文本不换行，是`overflow:hidden`和`text-overflow：ellipsis`生效的基础

`text-overflow`属性值有如下：

- clip：当对象内文本溢出部分裁切掉
- ellipsis：当对象内文本溢出时显示省略标记（...）

**`text-overflow`只有在设置了`overflow:hidden`和`white-space:nowrap`才能够生效的**

举个例子

```html
<style>
    p{
        overflow: hidden;
        line-height: 40px;
        width:400px;
        height:40px;
        border:1px solid red;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
<p 这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本</p >
```

可以看到，设置单行文本溢出较为简单，并且省略号显示的位置较好



### 多行文本溢出省略

多行文本溢出的时候，我们可以分为两种情况：

- 基于高度截断
- 基于行数截断

#### 基于高度截断

#### 伪元素 + 定位

核心的`css`代码结构如下：

- position: relative：为伪元素绝对定位
- overflow: hidden：文本溢出限定的宽度就隐藏内容）
- position: absolute：给省略号绝对定位
- line-height: 20px：结合元素高度,高度固定的情况下,设定行高, 控制显示行数
- height: 40px：设定当前元素高度
- ::after {} ：设置省略号样式

代码如下所示：

```html
<style>
    .demo {
        position: relative;
        line-height: 20px;
        height: 40px;
        overflow: hidden;
    }
    .demo::after {
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 20px 0 10px;
    }
</style>

<body>
    <div class='demo'>这是一段很长的文本</div>
</body>
```

实现原理很好理解，**就是通过伪元素绝对定位到行尾并遮住文字**，再通过 `overflow: hidden` 隐藏多余文字

这种实现具有以下**优点**：

- 兼容性好，对各大主流浏览器有好的支持
- 响应式截断，根据不同宽度做出调整

一般文本存在英文的时候，可以设置`word-break: break-all`使一个单词能够在换行时进行拆分

#### 基于行数截断

纯`css`实现也非常简单，核心的`css`代码如下：

- -webkit-line-clamp: 2：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的WebKit属性）
- display: -webkit-box：和1结合使用，将对象作为弹性伸缩盒子模型显示
- -webkit-box-orient: vertical：和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式
- overflow: hidden：文本溢出限定的宽度就隐藏内容
- text-overflow: ellipsis：多行文本的情况下，用省略号“…”隐藏溢出范围的文本

```html
<style>
    p {
        width: 400px;
        border-radius: 1px solid red;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<p>
    这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本
    这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本
</p >
```

可以看到，上述使用了`webkit`的`CSS`属性扩展，所以兼容浏览器范围是`PC`端的`webkit`内核的浏览器，**由于移动端大多数是使用`webkit`，所以移动端常用该形式**

需要注意的是，如果文本为一段很长的英文或者数字，则需要添加`word-wrap: break-word`属性

还能通过使用`javascript`实现配合`css`，实现代码如下所示：

css结构如下：

```css
p {
    position: relative;
    width: 400px;
    line-height: 20px;
    overflow: hidden;

}
.p-after:after{
    content: "..."; 
    position: absolute; 
    bottom: 0; 
    right: 0; 
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -moz-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(left, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}
```

javascript代码如下：

```js
$(function(){
 //获取文本的行高，并获取文本的高度，假设我们规定的行数是五行，那么对超过行数的部分进行限制高度，并加上省略号
   $('p').each(function(i, obj){
        var lineHeight = parseInt($(this).css("line-height"));
        var height = parseInt($(this).height());
        if((height / lineHeight) >3 ){
            $(this).addClass("p-after")
            $(this).css("height","60px");
        }else{
            $(this).removeClass("p-after");
        }
    });
})
```



----

## 51. 怎么使用 CSS 如何画一个三角形

在前端开发的时候，我们有时候会需要用到一个三角形的形状，比如地址选择或者播放器里面播放按钮

通常情况下，我们会使用图片或者`svg`去完成三角形效果图，但如果单纯使用`css`如何完成一个三角形呢？

实现过程似乎也并不困难，通过边框就可完成

### 实现过程

在以前也讲过盒子模型，默认情况下是一个矩形，实现也很简单

```html
<style>
    .border {
        width: 50px;
        height: 50px;
        border: 2px solid;
        border-color: #96ceb4 #ffeead #d9534f #ffad60;
    }
</style>
<div class="border"></div>
```



白色区域则为`width`、`height`，这时候只需要你将白色区域部分宽高逐渐变小，最终变为0，则变成如下图所示：

这时候就已经能够看到4个不同颜色的三角形，如果需要下方三角形，只需要将上、左、右边框设置为0就可以得到下方的红色三角形

但这种方式，虽然视觉上是实现了三角形，但实际上，隐藏的部分任然占据部分高度，需要将上方的宽度去掉

最终实现代码如下：

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
}
```

如果想要实现一个只有边框是空心的三角形，由于这里不能再使用`border`属性，**所以最直接的方法是利用伪类新建一个小一点的三角形定位上去**

```css
.border {
    width: 0;
    height: 0;
    border-style:solid;
    border-width: 0 50px 50px;
    border-color: transparent transparent #d9534f;
    position: relative;
}
.border:after{
    content: '';
    border-style:solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #96ceb4;
    position: absolute;
    top: 0;
    left: 0;
}
```

伪类元素定位参照对象的内容区域宽高都为0，则内容区域即可以理解成中心一点，**所以伪元素相对中心这点定位**

**将元素定位进行微调以及改变颜色**，就能够完成下方效果图：

```css
.border:after {
    content: '';
    border-style: solid;
    border-width: 0 40px 40px;
    border-color: transparent transparent #96ceb4;
    position: absolute;
    top: 6px;
    left: -40px;
}
```



可以看到，边框是实现三角形的部分，边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，将边框逐渐放大，可以得到每条边框都是一个梯形



### 原理分析

可以看到，边框是实现三角形的部分，边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，**将边框逐渐放大，可以得到每条边框都是一个梯形**

当分别取消边框的时候，发现下面几种情况：

- 取消一条边的时候，与这条边相邻的两条边的接触部分会变成直的
- 当仅有邻边时， 两个边会变成对分的三角
- 当保留边没有其他接触时，极限情况所有东西都会消失

通过利用旋转、隐藏，以及设置内容宽高等属性，就能够实现其他类型的三角形，如设置直角三角形

```css
.box {
    /* 内部大小 */
    width: 0px;
    height: 0px;
    /* 边框大小 只设置两条边*/
    border-top: #4285f4 solid;
    border-right: transparent solid;
    border-width: 85px; 
    /* 其他设置 */
    margin: 50px;
}
```



----

## 52.CSS实现一个等腰三角形

主要是通过把宽高设置成0，边框宽度设置宽一些，**设置其中三个边透明，只留一个边显示**

等边三角形是特殊的等腰三角形，它的三条边都相等，顶角为60度**，而高是边长的3^(1/2)/2倍，约等于0.866**……假设底为160px，则高约为138.56px，因此要做边长为160px的等边三角形，可以这么做：

等腰三角形

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        div {
     width:160px;
     height:160px;
     margin:100px auto;
     border-left:80px solid transparent; 
     border-right:80px solid transparent; 
     border-bottom:138.56px solid #A962CE; /*--三角形的高--*/

        }
    </style>
</head>
<body>
    <div>
    </div>
</body>
</html>

```

**扩展：**

用CSS实现一个等边三角形：

根据各个边之间的长度关系，我们易知：需要展示的边框的宽度：相邻的透明的边框的宽度 = √3 ：1

```css
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        div {
             width:0px;height:0px;margin:100px auto;
             border-left:80px solid transparent; 
             border-right:80px solid transparent; 
             border-bottom:138.56px solid #A962CE; /*--三角形的高--*/
        }
    </style>
</head>
<body>
    <div>
    </div>
</body>
</html>

```

方框

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        div {
             width:80px;height:80px;margin:100px auto;
             border-left:80px solid red; 
             border-right:80px solid green; 
             border-top:138.56px solid #A962CE; /*--三角形的高--*/
             border-bottom:138.56px solid #A962CE; /*--三角形的高--*/
        }
    </style>
</head>
<body>
    <div>
    </div>
</body>
</html>

```



实现一个 CSS 三角形，底边 60px、腰是 50px

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        div {
             width:0px;
             height:0px;
             margin:100px auto;
             border-left:30px solid transparent; 
             border-right:30px solid transparent; 
             border-bottom:40px solid #A962CE; /*--三角形的高--*/
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>

```



---

## 53.css实现扇形、圆形

圆形：

border-radius圆角的四个值按顺序取值分别为：左上、右上、右下、左下。这里只设置一个值，代表四个角的取值都为为50%

原理：border-radius: 50% 弯曲元素的边框以创建圆。
由于圆在任何给定点具有相同的半径，故宽和高都需要保证一样的值，**不同的值将创建椭圆**。

```html
<div class="circle"></div>
<style>
    .circle {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          background: #666;
    }
</style>

```

扇形：

1. 利用border-radius，实现90度角的扇形：

   原理：

   **左上角是圆角，其余三个角都是直角**：左上角的值为宽和高一样的值，其他三个角的值不变（等于0）。

```html
<div class="sector"></div>
<style>
.sector{
  border-radius:80px 0 0;
  width: 80px;
  height: 80px;
  background: #666;
}</style>

```

1. 绘制任意角度的扇形

```html
<div class="shanxing shanxing1">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个85度扇形*/--p>
<div class="shanxing shanxing2">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个向右扇形，90度扇形*-->
<div class="shanxing shanxing3">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--*绘制一个颜色扇形 */--p>
<div class="shanxing shanxing4">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<!--/*绘制一个不同颜色半圆夹角 */-->
<div class="shanxing shanxing5">
    <div class="sx1"></div>
     <div class="sx2"></div>
</div>
<style>
.shanxing{
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: yellow;
}

.sx1{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    clip: rect(0px,100px,200px,0px); /*这个clip属性用来绘制半圆，在clip的rect范围内的内容显示出来，使用clip属性，元素必须是absolute的 */
    border-radius: 100px;
    background-color: #f00;
    /*-webkit-animation: an1 2s infinite linear; */
}

.sx2{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotate(0deg);
    clip: rect(0px,100px,200px,0px);
    border-radius: 100px;
    background-color: #f00;
    /*-webkit-animation: an2 2s infinite linear;*/
}

/*绘制一个60度扇形*/
.shanxing1 .sx1{transform: rotate(-30deg);}
.shanxing1 .sx2{transform: rotate(-150deg);}

/*绘制一个85度扇形*/
.shanxing2 .sx1{transform: rotate(-45deg);}
.shanxing2 .sx2{transform: rotate(-140deg);}

/*绘制一个向右扇形，90度扇形*/
.shanxing3 .sx1{transform: rotate(45deg);}
.shanxing3 .sx2{transform: rotate(-45deg);}

/*绘制一个颜色扇形 */
.shanxing4 .sx1{transform: rotate(45deg);background-color: #fff;}
.shanxing4 .sx2{transform: rotate(-45deg);background-color: #fff;}

/*绘制一个不同颜色半圆夹角 */
.shanxing5 .sx1{transform: rotate(45deg);background-color: #f00;}
.shanxing5 .sx2{transform: rotate(-45deg);background-color: #0f0;       
</style>

```

------

## 54.旋转45度

CSS中使用**rotate**方法来实现对元素的旋转，在参数中加入角度值，旋转方式为顺时针旋转。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        div {
             width: 300px;
             height: 300px;
             margin: 200px auto;
            text-align: center;
            line-height: 300px;
             -webkit-transform: rotate(45deg);    /* for Chrome || Safari */
             -moz-transform: rotate(45deg);       /* for Firefox */
             -ms-transform: rotate(45deg);        /* for IE */
             -o-transform: rotate(45deg);         /* for Opera */
             background-color: #666;
        }
    </style>
</head>
<body>
    <div>
      kop
    </div>
</body>
</html>

```





------

## 55.画 0.5px 的直线

### 使用scale缩放

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        .hr.scale-half{
          height: 1px;
          transform:scaleY(0.5);
        }
    </style>
</head>
<body>
    <p>1px + scaleY(0.5)</p>
    <hr class="hr scale-half">
</body>
</html>

```

Chrome/Safari都变虚了，只有Firefox比较完美看起来是实的而且还很细，效果和直接设置0.5px一样。所以通过transform: scale会导致Chrome变虚了，而粗细几乎没有变化。但是如果加上transform-origin: 50% 100%：

```css
.hr.scale-half {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
}
```

### 线性渐变linear-gradient

```html
<style>
.hr.gradient {
    height: 1px;
    background: linear-gradient(0deg, #fff, #000);
}
</style>
<p>linear-gradient(0deg, #fff, #000)</p>
<hr class="hr gradient" />
```

linear-gradient(0deg, #fff, #000)的意思是：渐变的角度从下往上，从白色#fff渐变到黑色#000，而且是线性的，**在高清屏上，1px的逻辑像素代表的物理（设备）像素有2px，由于是线性渐变，所以第1个px只能是#fff，而剩下的那个像素只能是#000**，这样就达到了画一半的目的。

### boxshadow

```html
<style>
.hr.boxshadow {
    height: 1px;
    background: none;
    box-shadow: 0 0.5px 0 #000;
}
</style>
<p>box-shadow: 0 0.5px 0 #000</p>
<div class="hr boxshadow"></div>
```

### viewport

```html
<meta name="viewport" content="width=device-width,initial-sacle=0.5">
```

其中width=device-width表示将viewport视窗的宽度调整为设备的宽度，这个宽度通常是指物理上宽度。默认的缩放比例为1时，如iphone 6竖屏的宽度为750px，它的dpr=2，用2px表示1px，这样设置之后viewport的宽度就变成375px。但是**我们可以改成0.5，viewport的宽度就是原本的750px，所以1个px还是1px，正常画就行，**但这样也意味着UI需要按2倍图的出，整体面面的单位都会放大一倍。



----

### 0.5px的边框如何实现

有几种方法能实现0.5px边框：

1. 直接设置 border-width: 0.5px；使用方便，但兼容性很差，不推荐使用。
2. 用阴影代替边框，设置阴影box-shadow: 0 0 0 .5px #000; 使用方便，能正常展示圆角，兼容性一般。
3. 给容器设置伪元素，设置绝对定位，高度为1px，背景图为线性渐变，一半有颜色，一半透明。视觉上宽度只有0.5px。这种方法适合设置一条边框，没法展示圆角。
4. 给容器内**设置伪元素**，设置绝对定位，宽、高是200%，边框是1px，然后使用transform: scale(0.5) 让伪元素缩小原来的一半，这时候伪元素的边框和容器的边缘重合，视觉上宽度只有0.5px。这种方法兼容性最好，4个边框都能一次性设置，能正常展示圆角，**推荐使用**。

做移动端开发的时候，如果边框直接设置 1px的宽度，可能视觉上还是太粗无法满足设计师的要求。下面是实现0.5px边框的几种方案。推荐方案4，复杂度中等，扩展性良好，兼容性好。

```html
<div class="box box1"> 1px 边框，作为对比 </div>
<div class="box box2"> 方案1: 直接设置0.5px边框</div>
<div class="box box3"> 方案2: 设置0.5px阴影扩散半径 </div>
<div class="box box4"> 方案3: 使用背景渐变实现1px背景的一半</div>
<div class="box box5"> 方案4: 伪元素2倍尺寸1px边框scale缩小一半</div>
<style>
  .box {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-top: 10px;
}
.box1 {
  border: 1px solid #000;
}
.box2 {
  border: 0.5px solid #000;
}
.box3 {
  box-shadow: 0px 0px 0px 0.5px #000;
}
.box4 {
  position: relative;
}
.box4::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(0deg, #000 50%, transparent 50%);
}
.box5 {
  position: relative;
}
.box5::after {
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 200%;
  height: 200%;
  content: "";
  display: block;
  border: 1px solid #000;
  border-radius: 10px;
  transform: scale(0.5);
  transform-origin: left bottom;
}
</style>
```



---

## 56.css 切换主题

方式一：**主题层**

这应该是实现主题功能的一种最常用的手段了。首先，我们的站点会有一个最初的基础样式（或者叫默认样式）；然后通过添加一些后续的额外的CSS来覆盖与重新定义部分样式。

具体实现

首先，我们引入基础的样式components.*文件

```css
@import "components.tabs";
@import "components.buttons"
```

其中components.tabs文件内容如下

```css
.tab {
    margin: 0;
    padding: 0;
    background-color: gray;
}
```

然后，假设我们的某个主题的样式文件存放于theme.*文件：

对应于components.tabs，theme.tabs文件内容如下

```css
.tab {
    background-color: red;
}
```

因此，我们只需要引入主题样式文件即可

```css
@import "components.tabs";
@import "components.buttons"

@import "theme.tabs";

```

这样当前的样式就变为了

```css
.tab {
    margin: 0;
    padding: 0;
    /* background-color: gray; */
    background-color: red;
}

```

优点

- 实现方式简单
- 可以实现将主题应用与所有元素

缺点

- 过多的冗余代码
- 许多的CSS其实是无用的，浪费了带宽
- 把样式文件切分到许多文件中，更加琐碎



方式二：**有状态的主题**

该方式可以实现基于条件选择不同的主题皮肤，并允许用户在客户端随时切换主题。非常适合需要客户端样式切换功能，或者需要对站点某一部分（区域）进行独立样式设置的场景。

具体实现

还是类似上一节中 Tab 的这个例子，我们可以将 Tab 部分的 (S)CSS 改为如下形式：

```css
.tab {
    background-color: gray;

    .t-red & {
        background-color: red;
    }

    .t-blue & {
        background-color: blue;
    }
}

```

这里我们把.t-red与.t-blue称为 Tab 元素的**上下文环境**（context）。Tab 元素会根据 context 的不同展示出不同的样式。

最后我们给body元素加上这个开关

```html
<body class="t-red">
    <ul class="tabs">...</ul>
</body>

```

此时 Tab 的颜色为红色。

当我们将t-red改为t-blue时，Tab 就变为了蓝色主题。

进一步的，我们可以创建一些 (S)CSS 的 util class（工具类）来专门控制一些 CSS 属性，帮助我们更好地控制主题。例如我们使用如下的.u-color-current类来控制不同主题下的字体颜色

```css
.u-color-current {
    .t-red & {
        color: red;
    }

    .t-blue & {
        color: blue;
    }
}

```

这样，当我们在不同主题上下文环境下使用.u-color-current时，就可以控制元素展示出不同主题的字体颜色

```html
<body class="t-red">
    <h1 class="page-title u-color-current">...</h1>
</body>

```

上面这段代码会控制<h1>元素字体颜色为红色主题时的颜色。

优点

- 将许多主题放在了同一处代码中
- 非常适合主题切换的功能
- 非常适合站点局部的主题化
- 可以实现将主题应用于所有元素

缺点

- 有时有点也是缺点，将许多主题混杂在了同一块代码中
- 可能会存在冗余



方式三：**配置主题**

这种方式其实是在开发侧来实现主题样式的区分与切换的。基于不同的配置，配合一些开发的自动化工具，我们可以在开发时期根据配置文件，编译生成不同主题的 CSS 文件。

它一般会结合使用一些 CSS 预处理器，可以对不同的 UI 元素进行主题分离，并且向客户端直接提供主题样式下最终的 CSS。

具体实现

我们还是以 Sass 为例：

首先会有一份 Sass 的配置文件，例如settings.config.scss，在这份配置中定义当前的主题值以及一些其他变量

```css
$theme: red;
```

然后对于一个 Tab 组件，我们这么来写它的 Sass 文件

```css
.tab {
    margin: 0;
    padding: 0;

    @if ($theme == red) {
        background-color: red;
    } @else {
        background-color: gray;
    }
}

```

这时，我们在其之前引入相应的配置文件后

```css
@import "settings.config";
@import "components.tabs";
```

Tab 组件就会呈现出红色主题。

当然，我们也可以把我们的settings.config.scss做的更健壮与易扩展一些

```css
$config: (
    theme: red,
    env: dev,
)

// 从$config中获取相应的配置变量
@function config($key) {
    @return map-get($config, $key);
}
```

与之前相比，这时候使用起来只需要进行一些小的修改，将直接使用theme变量改为调用config方法

```css
.tab {
    margin: 0;
    padding: 0;

    @if (config(theme) == red) {
        background-color: red;
    } @else {
        background-color: gray;
    }
}

```

优点

- 访问网站时，只会传输所需的 CSS，节省带宽
- 将主题的控制位置放在了一个地方（例如上例中的settings.config.scss文件）
- 可以实现将主题应用于所有元素

缺点

- 在 Sass 中会有非常多逻辑代码
- 只支持有限数量的主题
- 主题相关的信息会遍布代码库中
- 添加一个新主题会非常费劲



方式四：**主题调色板**

这种方式有些类似于我们绘图时，预设了一个调色板（palette），然后使用的颜色都从其中取出一样。

在实现主题功能时，我们也会有一个类似的“调色板”，其中定义了主题所需要的各种属性值，之后再将这些信息注入到项目中。

当你经常需要为客户端提供完全的定制化主题，并且经常希望更新或添加主题时，这种模式会是一个不错的选择。

具体实现

在方式三中，我们在一个独立的配置文件中设置了一些“环境”变量，来标示当前所处的主题。而在方式四中，我们会更进一步，抽取出一个专门的 palette 文件，用于存放不同主题的变量信息。

例如，现在我们有一个settings.palette.red.scss文件

```css
$color: red;
$color-tabs-background: $color-red;

```

然后我们的components.tabs.scss文件内容如下

```css
.tabs {
    margin: 0;
    padding: 0;
    background-color: $color-tabs-background;
}
```

这时候，我们只需要引入这两个文件即可

```css
@import "settings.palette.red";
@import "components.tabs";
```

可以看到，components.tabs.scss中并没有关于主题的逻辑判断，我们只需要专注于编辑样式，剩下就是选择所需的主题调色板（palette）即可。

优点

- 编译出来的样式代码无冗余
- 非常适合做一些定制化主题，例如一个公司采购了你们的系统，你可以很方便实现一个该公司的主题
- 可以从一个文件中完全重制出你需要的主题样式

缺点

- 由于主要通过设定不同变量，所以代码确定后，能实现的修改范围会是有限的



方式五：**用户定制化**

这种模式一般会提供一个个性化配置与管理界面，让用户能自己定义页面的展示样式。

“用户定制化”在社交媒体产品、SaaS 平台或者是 Brandable Software 中最为常见。

具体实现

要实现定制化，可以结合方式二中提到的 util class。

首先，页面中支持自定义的元素会被预先添加 util class，例如 Tab 元素中的u-user-color-background

```html
<ul class="tabs u-user-color-background">...</ul>
```

此时，u-user-color-background还并未定义任何样式。而当用户输入了一个背景色时，我们会创建一个``标签，并将 hex 值注入其中

```html
<style id="my-custom">
    .u-user-color-background {
        background-color: #00ffff;
    }
</style>
```

这时用户就得到了一个红色的 Tab。

优点

- 不需要开发人员的输入信息（是用户定义的）
- 允许用户拥有自己“独一无二”的站点
- 非常实用

缺点

- 不需要开发人员的输入信息也意味着你需要处理更多的“不可控”情况
- 会有许多的冗余
- 会浪费 CSS 的带宽
- 失去部分 CSS 的浏览器缓存能力



---

## 57.如何使用css完成视差滚动效果?

视差滚动（Parallax Scrolling）是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验

我们可以把网页解刨成：背景层、内容层、悬浮层

![img](E:\pogject\学习笔记\image\css\视差滚动1)

当滚动鼠标滑轮的时候，各个图层以不同的速度移动，形成视觉差的效果

使用`css`形式实现视觉差滚动效果的方式有：

- background-attachment
- transform:translate3D

### background-attachment

作用是设置背景图像是否固定或者随着页面的其余部分滚动

值分别有如下：

- scroll：默认值，背景图像会随着页面其余部分的滚动而移动
- fixed：当页面的其余部分滚动时，背景图像不会移动
- inherit：继承父元素background-attachment属性的值

**完成滚动视觉差就需要将`background-attachment`属性设置为`fixed`，**让背景相对于视口固定。及时一个元素有滚动机制，背景也不会随着元素的内容而滚动

也就是说，**背景一开始就已经被固定在初始的位置**

核心的`css`代码如下：

```html
    <style type="text/css">
      div {
        height: 100vh;
        background: rgb(0, 0, 0, 0.7);
        color: #fff;
        line-height: 100vh;
        text-align: center;
        font-size: 20vh;
      }
      .img {
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
      }
      .img1 {
        background-image: url("./image1/bg1.jpg");
      }
      .img2 {
        background-image: url("./image1/bg2.jpg");
      }
      .img3 {
        background-image: url("./image1/bg3.png");
      }
    </style>
  </head>

  <body>
    <div class="text">1</div>
    <div class="img1 img">2</div>
    <div class="text">3</div>
    <div class="img2 img">4</div>
    <div class="a-text">5</div>
    <div class="img3 img">6</div>
    <div class="text">7</div>
  </body>
```



### transform:translate3D

同样，让我们先来看一下两个概念`transform`和`perspective`：

- transform: css3 属性，可以对元素进行变换(2d/3d)，包括平移 translate,旋转 rotate,缩放 scale,等等
- perspective: css3 属性，当元素涉及 3d 变换时，perspective 可以定义我们眼睛看到的 3d 立体效果，即空间感

```html
    <style type="text/css">
      html {
        overflow: hidden;
        height: 100%;
      }
      body {
        /* 视差元素的父级需要3D视角 */
        perspective: 1px;
        transform-style: preserve-3d;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      #app {
        width: 100vw;
        height: 200vh;
        background: skyblue;
        padding-top: 100px;
      }
      .item {
        width: 500px;
        height: 200px;
      }
      .one {
        background-color: #409eff;
        transform: translateZ(0px);
        margin-bottom: 50px;
      }
      .two {
        background-color: #67c23a;
        transform: translateZ(-1px);
        margin-bottom: 150px;
      }
      .three {
        background-color: #e6a23c;
        transform: translateZ(-2px);
        margin-bottom: 150px;
      }
    </style>
  </head>

  <body>
    <div id="app">
      <div class="one item">one</div>
      <div class="two item">two</div>
      <div class="three item">three</div>
    </div>
  </body>
```

而这种方式实现视觉差动的原理如下：

- 容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，
- 子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样
- 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果



----

## 58.canvas在标签上设置宽高，与在style中设置宽高有什么区别？

- canvas标签的width和height是**画布实际宽度和高度**，绘制的图形都是在这个上面。
- 而style的width和height是canvas在**浏览器中被渲染的高度和宽度**。
- 如果canvas的width和height没指定或值不正确，就被设置成默认值。



----

## 59. 页面导入样式时，使用link和@import有什么区别？

- link属于HTML标签，而@import是css提供的；
- 页面被加载时，link会同时被加载，**而@import引用的css会等到页面被加载完再加载；**
- @import只在IE5以上才能识别，而link是XHTML标签，无兼容问题；
- **link方式的样式的权重高于**@import的权重。



---

##  60.前端项目中为什么要初始化CSS样式？

因为浏览器的兼容问题，**不同浏览器对标签的默认值是不同的**，如果没有对浏览器的CSS初始化，会造成相同页面在不同浏览器的显示存在差异。

----

## 61. CSS3新增伪类有那些？

- p:first-of-type 选择属于其父元素的首个元素
- p:last-of-type 选择属于其父元素的最后元素
- p:only-of-type 选择属于其父元素唯一的元素
- p:only-child 选择属于其父元素的唯一子元素
- p:nth-child(2) 选择属于其父元素的第二个子元素
- :enabled :disabled 表单控件的禁用状态。
- :checked 单选框或复选框被选中。



---

## 62.为什么会出现浮动？什么时候需要清除浮动？清除浮动的方式有哪些？

浮动元素碰到包含它的边框或者浮动元素的边框停留。**由于浮动元素不在文档流中**，所以**文档流的块框表现得就像浮动框不存在一样。**浮动元素会漂浮在文档流的块框上。

浮动带来的问题：

- 父元素的高度无法被撑开，影响与父元素同级的元素
- 与浮动元素同级的**非浮动元素**（内联元素）会跟随其后
- **若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。**

清除浮动的方式：

- 父级div定义height
- **最后一个浮动元素后加空div标签** 并添加样式clear:both。
- 包含浮动元素的父标签添加样式overflow为hidden或auto。
- 父级div定义zoom



---

## 63.什么是CSS媒体查询?

媒体查询(Media Queries)早在在css2时代就存在,经过css3的洗礼后变得更加强大bootstrap的响应式特性就是从此而来的.

简单的来讲媒体查询是一种用于修饰css何时起作用的语法.

> Media Queries 的引入，其作用就是允许添加表达式用以确定媒体的环境情况，以此来应用不同的样式表。换句话说，其允许我们在不改变内容的情况下，改变页面的布局以精确适应不同的设备。



-----

## 64.margin和padding分别适合什么场景使用？

何时使用margin：

- 需要在border**外侧**添加空白
- 空白处**不需要背景色**
- **上下相连的两个盒子之间的空白，需要相互抵消时**。

何时使用padding：

- 需要在border**内侧**添加空白
- **空白处需要背景颜色**
- 上下相连的两个盒子的空白，**希望为两者之和**。



----

## 65.CSS优化、提高性能的方法有哪些？

- 避免过度约束
- 避免后代选择符
- 避免链式选择符
- 使用紧凑的语法
- 避免不必要的命名空间
- 避免不必要的重复
- **最好使用表示语义的名字**。一个好的类名应该是描述他是什么而不是像什么
- 避免！important，可以选择其他选择器
- 尽可能的精简规则，你可以合并不同类里的重复规则



----

## 66.元素竖向的百分比设定是相对于容器的高度吗？

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，**依据的也是父容器的宽度**，而不是高度。



---

## 67. ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用

- 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
- ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。**并不存在于dom之中，只存在在页面之中。**



---

## 68.如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。

----

## 69两个同级的相邻元素之间，有看不见的空白间隔，是什么原因引起的？有什么解决办法？

### 现象描述

行框的排列会受到**中间空白（回车空格）**等的影响，**因为空格也属于字符**,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。

元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，**根据white-space的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符**，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。**这些元素之间的间距会随着字体的大小而变化，当行内元素font-size:16px时，间距为8px。**

不过，这类间距有时会对我们布局，或是兼容性处理产生影响，以下展示N种方法去掉。

解决方法：

- 相邻元素代码代码全部写在一排
- 浮动元素，float:left;
- 在父级元素中用font-size:0;

### 去掉HTML中的空格

元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就木有了。考虑到代码可读性，显然连成一行的写法是不可取的，我们可以：

```html
<div class="space">
    <a href="##">
    惆怅</a><a href="##">
    淡定</a><a href="##">
    热血</a>
</div>
```

或者是：

```html
<div class="space">
    <a href="##">惆怅</a
    ><a href="##">淡定</a
    ><a href="##">热血</a>
</div>
```

或者是借助HTML注释：

```html
<div class="space">
    <a href="##">惆怅</a><!--
    --><a href="##">淡定</a><!--
    --><a href="##">热血</a>
</div>
```

### 使用margin负值

margin负值的大小与上下文的字体和文字大小相关：

```css
.space a {
    display: inline-block;
    margin-right: -3px;
}
```

例如，对于12像素大小的上下文，Arial字体的`margin`负值为`-3`像素，Tahoma和Verdana就是`-4`像素，而Geneva为`-6`像素。

由于外部环境的不确定性，以及最后一个元素多出的父margin值等问题，**这个方法不适合大规模使用。**

### 去掉部分闭合标签

```html
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血</a>
</div>
```

注意，为了向下兼容IE6/IE7等浏览器，最后一个列表的标签的结束（闭合）标签不能丢。

在HTML5中，我们直接：

```html
<div class="space">
    <a href="##">惆怅
    <a href="##">淡定
    <a href="##">热血
</div>
```

### 使用font-size:0

类似下面的代码：

```css
.space {
    font-size: 0;
}
.space a {
    font-size: 12px;
}
```

这个方法，基本上可以解决大部分浏览器下inline-block元素之间的间距(IE7等浏览器有时候会有1像素的间距)。

### 使用letter-spacing

类似下面的代码：

```css
.space {
    letter-spacing: -3px;
}
.space a {
    letter-spacing: 0;
}
```

该方法可以搞定基本上所有浏览器。

### 使用word-spacing

类似下面代码：

```css
.space {
    word-spacing: -6px;
}
.space a {
    word-spacing: 0;
}
```

一个是字符间距(`letter-spacing`)一个是单词间距(`word-spacing`)，大同小异。**`word-spacing`的负值只要大到一定程度，其兼容性上的差异就可以被忽略。**因为，貌似，`word-spacing`即使负值很大，也不会发生重叠。

如果您使用Chrome浏览器，可能看到的是间距依旧存在。确实是有该问题，原因不清楚，可以添加`display: table;`或`display:inline-table;`让Chrome浏览器也变得乖巧。

```css
.space {
    display: inline-table;
    word-spacing: -6px;
}
```

### 其他成品方法

下面展示的是YUI 3 CSS Grids 使用`letter-spacing`和`word-spacing`去除格栅单元见间隔方法（注意，其针对的是block水平的元素，因此对IE8-浏览器做了hack处理）：

```css
.yui3-g {
    letter-spacing: -0.31em; /* webkit */
    *letter-spacing: normal; /* IE < 8 重置 */
    word-spacing: -0.43em; /* IE < 8 && gecko */
}

.yui3-u {
    display: inline-block;
    zoom: 1; *display: inline; /* IE < 8: 伪造 inline-block */
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
}
```





----

## 70. style标签写在body后与body前有什么区别？

**页面加载自上而下** 当然是先加载样式。

写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，**在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）**



---

## 71.什么是CSS Sprites？

CSS Sprites是一种网页图片应用处理方式，**就是把网页中一些背景图片整合到一张图片文件中**，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位。

其优点在于：

- **减少网页的http请求，提高性能**，这也是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；
- **减少图片的字节**：多张图片合并成1张图片的字节小于多张图片的字节总和；
- **减少了命名困扰**：只需对一张集合的图片命名，不需要对每一个小元素进行命名提高制作效率；
- **更换风格方便**：只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变，维护起来更加方便。

诚然CSS Sprites是如此的强大，但是也存在一些不可忽视的缺点：

- 图片合成比较麻烦；
- **背景设置时，需要得到每一个背景单元的精确位置**；
- 维护合成图片时，**最好只是往下加图片，而不要更改已有图片**。



----

## 72.css加载会造成阻塞吗？

先说下结论：

- css加载**不会阻塞DOM树的解析**
- css加载**会阻塞DOM树的渲染**
- css加载**会阻塞后面js语句的执行**

为了避免让用户看到长时间的白屏时间，我们应该尽可能的提高css加载速度，比如可以使用以下几种方法:

- 使用CDN(因为CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)
- 对css进行压缩(可以用很多打包工具，比如webpack,gulp等，也可以通过开启gzip压缩)
- 合理的使用缓存(设置cache-control,expires,以及E-tag都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)
- 减少http请求数，将多个css文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)



浏览器渲染的流程如下：

- HTML解析文件，生成DOM Tree，解析CSS文件生成CSSOM Tree
- 将Dom Tree和CSSOM Tree结合，生成Render Tree(渲染树)
- 根据Render Tree渲染绘制，将像素渲染到屏幕上。

从流程我们可以看出来:

- DOM解析和CSS解析是两个并行的进程，所以这也**解释了为什么CSS加载不会阻塞DOM的解析**。
- 然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，**也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。**因此，CSS加载是会阻塞Dom的渲染的。
- 由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，**样式表会在后面的js执行前先加载执行完毕。**所以css会阻塞后面js的执行。



----

##  73.CSS中的1像素问题是什么？有哪些解决方案？

### 1px 边框问题的由来

苹果 iPhone4 首次提出了 Retina Display（视网膜屏幕）的概念，在 iPhone4 使用的视网膜屏幕中，把 2x2 个像素当 1 个物理像素使用，即使用 2x2 个像素显示原来 1 个物理像素显示的内容，从而让 UI 显示更精致清晰，这 2x2 个像素叫做逻辑像素。

像这种像素比（像素比（即dpr）＝ 物理像素 / 逻辑像素）为 2 的视网膜屏幕也被称为二倍屏，目前市面上还有像素比更高的三倍屏、四倍屏。

而 CSS 中 1px 指的是物理像素，因此，设置为 1px 的边框在 dpr = 2 的视网膜屏幕中实际占用了 2 个逻辑像素的宽度，这就导致了界面边框变粗的视觉体验。

### 使用 transform 解决

**通过设置元素的 box-sizing 为 border-box，然后构建伪元素，再使用 CSS3 的 transform 缩放**，这是目前市面上最受推崇的解决方法。这种方法可以满足所有的场景，而且修改灵活，唯一的缺陷是，对于已使用伪元素的元素要多嵌套一个无用元素。具体的实现如下：

```css
.one-pixel-border {
  position: relative;
  box-sizing: border-box;
}

.one-pixel-border::before {
  display: block;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  border: 1px solid red;
  transform: translate(-50%, -50%) scale(0.5, 0.5);
}
```

这样就可以得到 0.5px 的边框。

还可以结合媒体查询（@media）解决不同 dpr 值屏幕的边框问题，如下：

```css
@media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  ...
}

@media screen and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
  ...
}
```

当然还有不少其他的解决方案：border-image、background-image、viewport + rem + js、box-shadow等，但都有各自的缺点.

----

## 74.Atom CSS 是什么？

Atom CSS：原子CSS，意思是一个类只干一件事。

不同于大家常用的BEM这类规则，原子css就是拆分，**所有 CSS 类都有一个唯一的 CSS 规则**。例如如下

```css
.w-full{
  width:100%;
}
.h-full{
  height:100%;
}
```

而像这种就不是

```css
.w&h-full{
  width:100%;
  height:100%;
}
```

当我们使用的时候，直接写class名就可以

```html
<html>
	<body>
    	<div id="app" class="w-full h-full">
        </div>
	</body>
</html>

```

**原子CSS的优缺点**

- 优点
  - 减少了css体积，提高了css复用
  - 减少起名的复杂度
- 缺点
  - **增加了记忆成本**。将css拆分为原子之后，你势必要记住一些class才能书写，哪怕tailwindcss提供了完善的工具链，你写background，也要记住开头是bg。
  - **增加了html结构的复杂性**。当整个dom都是这样class名，势必会带来调试的麻烦，有的时候很难定位具体css问题
  - **你仍需要起class名。**对于大部分属性而言，你可以只用到center,auto，100%，这些值，但是有时候你仍需要设定不一样的参数值，例如left，top，这时候你还需要起一个class名



----

## 75.html和css中的图片加载与渲染规则是什么样的？

Web浏览器先会把获取到的HTML代码解析成一个DOM树，HTML中的每个标签都是DOM树中的一个节点，包括display: none隐藏的标签，还有JavaScript动态添加的元素等。浏览器会获取到所有样式，并会把所有样式解析成样式规则，在解析的过程中会去掉浏览器不能识别的样式。

浏览器将会把DOM树和样式规则组合在一起（DOM元素和样式规则匹配）后将会合建一个渲染树（Render Tree），渲染树类似于DOM树，但两者别还是很大的：渲染树能识别样式，渲染树中每个节点（NODE）都有自己的样式，而且渲染树不包含隐藏的节点（比如display:none的节点，还有</head>内的一些节点），因为这些节点不会用于渲染，也不会影响节点的渲染，因此不会包含到渲染树中。一旦渲染树构建完毕后，浏览器就可以根据渲染树来绘制页面了。

简单的归纳就是浏览器渲染Web页面大约会经过六个过程：

- 解析HTML，构成DOM树
- 解析加载的样式，构建样式规则树CSSOM
- 加载JavaScript，执行JavaScript代码
- DOM树和样式规则树进行匹配，构成渲染树
- 计算元素位置进行页面布局
- 绘制页面，最终在浏览器中呈现

是不是会感觉这个和我们图像加载渲染没啥关系一样，事实并非如此，因为img、picture或者background-image都是DOM树或样式规则中的一部分，那么咱们套用进来，图片加载和渲染的时机有可能是下面这样：

- 解析HTML时，如果遇到img或picture标签，**将会加载图片**
- 解析加载的样式，遇到background-image时，**并不会加载图片**，而会构建样式规则树
- 加载JavaScript，执行JavaScript代码，**如果代码中有创建img元素之类，会添加到DOM树中**；如查有**添加background-image规则，将会添加到样式规则树中**
- DOM树和样式规则匹配时构建渲染树，**如果DOM树节点匹配到样式规则中的backgorund-image，则会加载背景图片**
- 计算元素（图片）位置进行布局
- 开始渲染图片，浏览器将呈现渲染出来的图片

上面套用浏览器渲染页面的机制，但图片加载与渲染还是有一定的规则。因为，页面中不是所有的`<img>`（或picture）元素引入的图片和background-image引入的背景图片都会加载的。那么就引发出新问题了，什么时候会真正的加载，加载规则又是什么？

先概括一点：

> Web页面中不是所有的图片都会加载和渲染！

根据前面介绍的浏览器加载和渲染机制，我们可以归纳为：

- `<img>、<picture>`和设置background-image的元素**遇到display:none时，图片会加载**但**不会渲染**
- `<img>、<picture>`和设置background-image的元素**祖先元素设置display:none时**，background-image**不会渲染也不会加载**，而img和picture引入的图片**不会渲染**但**会加载**
- `<img>、<picture>`和background-image引入**相同路径相同图片文件名**时，**图片只会加载一次**
- 样式文件中background-image引入的图片，**如果匹配不到DOM元素，图片不会加载**
- 伪类引入的background-image，比如:hover，**只有当伪类被触发时，图片才会加载**



-----

## 76.有哪些css模块化的方案？

目前主流的 css 模块化分为 css modules 和 css in js 两种方案。

### css modules

> CSS Modules 指的是我们像 import js 一样去引入我们的 css 代码，代码中的每一个类名都是引入对象的一个属性, 编译时会将 css 类名 加上唯一 hash。

css module 需要 webpack 配置 css-loader 或者 scss-loader , module 为 true

```json
{
    loader: 'css-loader',
    options: {
        modules: true, // 开启模块化
        localIdentName: '[path][name]-[local]-[hash:base64:5]'
    }
}
```

localIdentName

介绍下 localIdentName 自定义生成的类名格式，可选参数有：

- [path]表示样式表相对于项目根目录所在的路径(默认不拼接)
- [name] 表示样式表文件名称
- [local] 表示样式表的类名定义名称
- [hash:length] 表示 32 位的 hash 值

注意：**只有类名选择器和 ID 选择器才会被模块化控制**，类似 `body`、`h2`、`span` 这些标签选择器不会被模块化控制。

css module 作用域

- 作用域默认为 local 即只在当前模块生效
- global：被 `:global` 包裹起来的类名，不会被模块化

```css
/* 加上 :global 会全局样式 */
:global(.global-color) {
  color: blue;
  :global(.common-width) {
    width: 200px;
  }
}
```



### css in js

CSS-in-JS是一种技术（technique），而不是一个具体的库实现（library）。

简单来说CSS-in-JS就是将应用的CSS样式写在JavaScript文件里面，而不是独立为一些.css，.scss或者less之类的文件，这样你就可以在CSS中使用一些属于JS的诸如模块声明，变量定义，函数调用和条件判断等语言特性来提供灵活的可扩展的样式定义。

值得一提的是，虽然CSS-in-JS不是一种很新的技术，它当初的出现是因为一些component-based的Web框架（例如React，Vue和Angular）的逐渐流行，使得开发者也想将组件的CSS样式也一块封装到组件中去以解决原生CSS写法的一系列问题。

还有就是CSS-in-JS在React社区的热度是最高的，这是因为React本身不会管用户怎么去为组件定义样式的问题，而Vue和Angular都有属于框架自己的一套定义样式的方案。

实现了CSS-in-JS的库有很多，虽然每个库解决的问题都差不多，可是它们的实现方法和语法却大相径庭。

从实现方法上区分大体分为两种：唯一CSS选择器和内联样式（Unique Selector VS Inline Styles）。



-----

## 77.IconFont 的原理是什么

IconFont 的使用原理来自于 css 的 `@font-face` 属性。

这个属性用来定义一个新的字体，基本用法如下：

```css
@font-face {
  font-family: <YourFontName>;
  src: <url> [<format>],[<source> [<format>]], *;
  [font-weight: <weight>];
  [font-style: <style>];
}
```

- font-family：为载入的字体取名字。
- src：[url]加载字体，可以是相对路径，可以是绝对路径，也可以是网络地址。[format]定义的字体的格式，用来帮助浏览器识别。主要取值为：【truetype(.ttf)、opentype（.otf）、truetype-aat、embedded-opentype(.eot)、svg(.svg)、woff(.woff)】。
- font-weight：定义加粗样式。
- font-style：定义字体样式。



----

## 78.Js 动画与 CSS 动画区别及相应实现

### CSS动画

**优点**

- 浏览器可以对动画进行优化
- 代码相对简单,性能调优方向固定
- 对于帧速表现不好的低版本浏览器，`CSS3`可以做到自然降级，而`JS`则需要撰写额外代码

**缺点**

- **运行过程控制较弱**,无法附加事件绑定回调函数
- **代码冗长**，想用`CSS`实现稍微复杂一点动画,最后`CSS`代码都会变得非常笨重

### JS动画

**优点**

- **控制能力很强, 可以在动画播放过程中对动画进行控制**：开始、暂停、回放、终止、取消都是可以做到的。
- **动画效果比`css3`动画丰富**,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有`js`动画才能完成
- `CSS3`有兼容性问题，**而`JS`大多时候没有兼容性问题**

**缺点**

- **代码的复杂度高于`CSS`动画**
- `JavaScript`在浏览器的主线程中运行，而主线程中还有其它需要运行的`JavaScript`脚本、样式计算、布局、绘制任务等**,对其干扰导致线程可能出现阻塞，从而造成丢帧的情况**

对于一些复杂控制的动画，使用 javascript 会比较靠谱。

而在实现一些小的交互动效的时候，就多考虑考虑 CSS 



----

## 79. 如何检测浏览器所支持的最小字体大小？

可以使用 JS 设置 DOM 的字体为某一个值，然后再取出来，如果值设置成功，就说明支持。

一般浏览器会存在支持的最小字体的概念，也就是说，当我们给标签设置字体样式比浏览器所支持的最小字体小，则会会显示最小字体的大小，而不会显示我们设置的字体样式的大小。

如何才能检测浏览器所支持的最小字体大小呢？

```html
<script>
    let pStyle = document.getElementById("p")
    pStyle.style.fontSize = '10px'
    function getstyle(obj, key) {
    
      if (obj.currentStyle) {
    
        console.log('currentStyle')
        return obj.currentStyle[key];
      } else {
    
        console.log('getComputedStyle')
        return getComputedStyle(obj, false)[key];
      }
    }
    console.log(getstyle(pStyle, 'fontSize'))
  </script>
```

我们可以首先设置字体的样式，然后可以通过`getStyle`函数来获取该对象的字体样式，如果不是和我们设置的不一致的话，则此时浏览器就不支持该字体大小。
`如果我们想要设置更小的字体该怎么做?`   **可以使用`transform: scale(0.5)`来进行缩放**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>小字体方法</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    p {
      font-size: 12px;
    }
    .small-font {
      -webkit-transform-origin-x: 0;
      transform: scale(0.5);
    }
  </style>
</head>
<body>
  <p class="small-font">温馨提示</p>
  <p>温馨提示</p>
</body>
</html>
```



---

## 80. 如何使用css来实现禁止移动端页面的左右划动手势？

CSS属性 `touch-action` 用于设置触摸屏用户如何操纵元素的区域(例如，浏览器内置的缩放功能)。

最简单方法是：

```css
html{
 touch-action: none;
 touch-action: pan-y;
}
```

还可以直接指定对应元素的宽度和overflow：

```css
html{
 width: 100vw;
 overflow-x: hidden;
}
```



----

## 81.display 有哪些取值？

display 属性可以设置元素的内部和外部显示类型。

- 元素的**外部显示类型**将**决定该元素在流式布局中的表现**（块级或内联元素）；
- 元素的**内部显示类型**可以**控制其子元素的布局**（例如：flow layout，grid 或 flex）。

以下是一些关于display比较常用的属性值：

| 值           | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| none         | 元素不会显示                                                 |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。             |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。         |
| inline-block | 行内块元素。（CSS2.1 新增的值）[IE6/7不支持]                 |
| inline-table | 此元素会作为**内联表格**来显示（类似 table），表格前后没有换行符。 |
| table        | 此元素会作为**块级表格**来显示（类似 table），表格前后带有换行符。 |
| inherit      | 规定应该从父元素继承 display 属性的值。                      |
| grid         | 网格布局（Grid）是最强大的CSS 布局方案。 它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。 |
| flex         | 弹性布局，用来为盒状模型提供最大的灵活性。                   |

从大的分类来讲，display的32种写法可以分为6个大类，再加上1个全局类，一共是7大类：

- 外部值
- 内部值
- 列表值
- 属性值
- 显示值
- 混合值
- 全局值



-----

## 82.使用原生js实现以下效果：点击容器内的图标，图标边框变成border:1px solid red，点击空白处重置

```js
const box = document.getElementById('box');

function isIcon(target) {
 return target.className.includes('icon');
}

box.onClick = function(e) {
 e.stopPropagation();
 const target = e.target;
 if (isIcon(target)) {
   target.style.border = '1px solid red';
 }
}

const doc = document;

doc.onclick = function(e) {
 const children = box.children;
 for(let i; i < children.length; i++) {
   if (isIcon(children[i])) {
     children[i].style.border = 'none';
   }
 }
}
```



----

## 83. 怎么实现样式隔离？

![img](E:\pogject\学习笔记\image\css\样式隔离)

### CSS的原生问题

#### 无作用域样式污染

CSS有一个被大家诟病的问题就是`没有本地作用域`，所有声明的样式都是`全局的（global styles）`

换句话来说页面上任意元素只要匹配上某个选择器的规则，这个规则就会被应用上，而且规则和规则之间可以`叠加作用（cascading）`

`SPA应用`流行了之后这个问题变得更加突出了，因为对于SPA应用来说所有页面的样式代码都会加载到同一个环境中，样式冲突的概率会大大加大。由于这个问题的存在，我们在日常开发中会遇到以下这些问题：

- **很难为选择器起名字**：为了避免和页面上其他元素的样式发生冲突，我们在起选择器名的时候一定要深思熟虑，起的名字一定不能太普通。举个例子，假如你为页面上某个作为标题的DOM节点定义一个叫做`.title`的样式名，这个类名很大概率已经或者将会和页面上的其他选择器发生冲突，所以你不得不**手动**为这个类名添加一些前缀，例如`.home-page-title`来避免这个问题
- **团队多人合作困难**：当多个人一起开发同一个项目的时候，特别是多个分支同时开发的时候，大家各自取的选择器名字可能有会冲突，可是在本地独立开发的时候这个问题几乎发现不了。当大家的代码合并到同一个分支的时候，一些样式的问题就会随之出现

#### 无用的CSS样式堆积

进行过大型Web项目开发的同学应该都有经历过这个情景：在开发新的功能或者进行代码重构的时候，由于`HTML代码和CSS样式之间没有显式的一一对应关系`，我们很难辨认出项目中哪些CSS样式代码是有用的哪些是无用的，这就导致了我们不敢轻易删除代码中可能是无用的样式。这样随着时间的推移，项目中的CSS样式只会增加而不会减少。无用的样式代码堆积会导致以下这些问题：

- **项目变得越来越重量级**：加载到浏览器的CSS样式会越来越多，会造成一定的性能影响
- **开发成本越来越高**：开发者发现他们很难理解项目中的样式代码，甚至可能被大量的样式代码吓到，这就导致了开发效率的降低以及一些奇奇怪怪的样式问题的出现

#### 基于状态的样式定义

对于SPA应用来说，特别是一些交互复杂的页面，页面的样式通常要根据组件的状态变化而发生变化

最常用的方式是通过不同的状态定义不同的`className名`，这种方案代码看起来十分冗余和繁琐，通常需要同时改动`js代码和css代码`

> `这个CSS重写一遍比修改老文件快`，这样的念头几乎所有人都曾有过，css虽然看似简单，但是以上问题很容易写着写着就出现了，这在于提前没有选好方案

### BEM

BEM是`一种css命名方法论`，意思是块（Block）、元素（Element）、修饰符（Modifier）的简写

这种命名方法让[CSS](https://baike.baidu.com/item/CSS/5457)便于统一团队开发规范和方便维护

以 `.block__element--modifier`或者说`block-name__element-name--modifier-name`形式命名，命名有含义，也就是`模块名 + 元素名 + 修饰器名`

如`.dropdown-menu__item--active`

社区里面对BEM命名的褒贬不一，但是对其的思想基本上还是认同的，所以可以`用它的思想，不一定要用它的命名方式`

**应用场景**

BEM思想通常用于`组件库`，业务代码中`结合less等预处理器`

**优点**：

1. 人为严格遵守BEM规范，可以解决无作用域样式污染问题
2. 可读性好，一目了然是那个dom节点，对于无用css删除，删除了相应dom节点后，对应的css也能比较放心的删除，不会影响到其他元素样式

**缺点**

1. 命名太长，至于体积增大，gzip可忽略

----

##  84.CSSOM树和DOM树是同时解析的吗？

浏览器会下下载HTML解析页面生成DOM树，遇到CSS标签就开始解析CSS，这个过程不会阻塞，但是如果遇到了JS脚本，此时假如CSSOM还没有构建完，需要等待CSSOM构建完，再去执行JS脚本，然后再执行DOM解析，此时会阻塞。



---

## 85. 如何从html元素继承box-sizing？

在大多数情况下我们在设置元素的 border 和 padding 并不希望改变元素的 width,height值，这个时候我们就可以为该元素设置 `box-sizing:border-box;`。

如果不希望每次都重写一遍，而是希望他是继承而来的，那么我们可以使用如下代码：

```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

这样的好处在于他不会覆盖其他组件的 box-sizing 值，又无需为每一个元素重复设置 box-sizing:border-box;

---

## 86.第二个子元素的高度是多少

```html
<div class="container">
    <div style="height: 100px"></div>
    <div style="min-height: 10px"></div>
</div>
<style>
    .container{
        display: flex;
    }
    .container > div {
        width: 100px;
    }
</style>
```

答案：100px

Flex 布局会默认：

- 把所有子项变成水平排列。
- 默认不自动换行。
- 让子项与其内容等宽，**并把所有子项的高度变为最高子项的高度**。

----

## 87.脱离文档流有哪些方法？

什么是文档流？

将窗体自上而下分成一行一行，并在每行中按从左至右依次排放元素，称为文档流，也称为普通流。

这个应该不难理解，HTML中全部元素都是盒模型，盒模型占用一定的空间，依次排放在HTML中，形成了文档流。

什么是脱离文档流？

元素脱离文档流之后，**将不再在文档流中占据空间，而是处于浮动状态（可以理解为漂浮在文档流的上方）**。脱离文档流的元素的定位基于正常的文档流，当一个元素脱离文档流后，依然在文档流中的其他元素将忽略该元素并填补其原先的空间。

怎么脱离文档流？

### float

使用float可以脱离文档流。

> 注意：使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在该元素的周围。

### absolute

absolute称为绝对定位，其实觉得应该称为相对定位，因为使用absolute脱离文档流后的元素，是相对于该元素的父类（及以上，如果直系父类元素不满足条件则继续向上查询）元素进行定位的，并且这个父类元素的position必须是非static定位的（static是默认定位方式）。

### fixed

**完全脱离文档流**，相对于浏览器窗口进行定位。（相对于浏览器窗口就是相对于html）。



----

## 88. 为何CSS不支持父选择器？

这个问题的答案和“为何CSS相邻兄弟选择器只支持后面的元素，而不支持前面的兄弟元素？”是一样的。

浏览器解析HTML文档，是从前往后，由外及里的。所以，我们时常会看到页面先出现头部然后主体内容再出现的加载情况。

但是，如果CSS支持了父选择器，那就必须要页面所有子元素加载完毕才能渲染HTML文档，因为所谓“父选择器”，就是后代元素影响祖先元素，如果后代元素还没加载处理，如何影响祖先元素的样式？于是，网页渲染呈现速度就会大大减慢，浏览器会出现长时间的白板。加载多少HTML就可以渲染多少HTML，在网速不是很快的时候，就显得尤为的必要。比方说你现在看的这篇文章，只要文章内容加载出来就可以了，就算后面的广告脚本阻塞了后续HTML文档的加载，我们也是可以阅读和体验。但是，如果支持父选择器，则整个文档不能有阻塞，页面的可访问性则要大大降低。

有人可能会说，要不采取加载到哪里就渲染到哪里的策略？这样子问题更大，因为会出现加载到子元素的时候，父元素本来渲染的样式突然变成了另外一个样式的情况，体验非常不好。

“相邻选择器只能选择后面的元素”也是一样的道理，不可能说后面的HTML加载好了，还会影响前面HTML的样式。

所以，从这一点来讲，CSS支持“父选择器”或者“前兄弟选择器”的可能性要比其他炫酷的CSS特性要低，倒不是技术层面，**而是CSS和HTML本身的渲染机制决定的。**当然，以后的事情谁都说不准，说不定以后网速都是每秒几个G的，网页加载速度完全就忽略不计，说不定就会支持了。

---

## 89.下面代码中，p标签的背景色是什么？

```html
<style type="text/css">
     #parent p { background-color: red;  }
      div .a.b.c.d.e.f.g.h.i.j.k p{ background-color: green;  
</style>
......
<div id="parent">
     <div class="a b c d e f g h i j k">
         <p>xxxx</p>
     </div>
</div>

```

大家需要注意，权重是按优先级进行比较的，而不是相加规则。

答案是 `red`。

----

## 90. 前端实现动画有哪些方式？

前端常用的动画实现方式有以下种：

1. css3的`transition` 属性
2. css3的`animation` 属性
3. 原生JS动画
4. 使用`canvas`绘制动画
5. SVG动画
6. Jquery的`animate`函数
7. 使用gif图片

---

## 91.什么是硬件加速？

**硬件加速就是将浏览器的渲染过程交给GPU处理**，而不是使用自带的比较慢的渲染器。**这样就可以使得 `animation` 与 `transition` 更加顺畅。**

我们可以在浏览器中用css开启硬件加速，使GPU (Graphics Processing Unit) 发挥功能，从而提升性能。

现在大多数电脑的显卡都支持硬件加速。鉴于此，我们可以发挥GPU的力量，从而使我们的网站或应用表现的更为流畅。

---

## 92.硬件加速的原理是什么？

### CPU 和 GPU 的区别

`CPU` 即中央处理器，`GPU` 即图形处理器。

`CPU`是计算机的大脑，它提供了一套指令集，我们写的程序最终会通过 `CPU` 指令来控制的计算机的运行。它会对指令进行译码，然后通过逻辑电路执行该指令。整个执行的流程分为了多个阶段，叫做流水线。指令流水线包括取`指令、译码、执行、取数、写回`五步，这是一个指令周期。`CPU`会不断的执行指令周期来完成各种任务。

`GPU`，是`Graphics ProcessingUnit`的简写，是现代显卡中非常重要的一个部分，其地位与`CPU`在主板上的地位一致，主要负责的任务是加速图形处理速度。GPU是显卡的“大脑”，它决定了该显卡的档次和大部分性能，同时也是2D显示卡和3D显示卡的区别依据。2D显示芯片在处理3D图像和特效时主要依赖CPU的处理能力，称为“**软加速**”。3D显示芯片是将三维图像和特效处理功能集中在显示芯片内，也即所谓的“**硬件加速**”功能。

要解释两者的区别，要先明白两者的相同之处：两者都有总线和外界联系，有自己的缓存体系，以及数字和逻辑运算单元。

一句话，两者都为了完成计算任务而设计。

两者的区别在于存在于片内的缓存体系和数字逻辑运算单元的结构差异：

- `CPU`虽然有多核，但总数没有超过两位数，每个核都有足够大的缓存和足够多的数字和逻辑运算单元，并辅助有很多加速分支判断甚至更复杂的逻辑判断的硬件；
- `GPU` 的核数远超`CPU`，被称为众核（NVIDIA Fermi有512个核）。每个核拥有的缓存大小相对小，数字逻辑运算单元也少而简单（`GPU`初始时在浮点计算上一直弱于`CPU`）。

从结果上导致`CPU`擅长处理具有复杂计算步骤和复杂数据依赖的计算任务，如分布式计算，数据压缩，人工智能，物理模拟，以及其他很多很多计算任务等。

`GPU`由于历史原因，是为了视频游戏而产生的（至今其主要驱动力还是不断增长的视频游戏市场），在三维游戏中常常出现的一类操作是对海量数据进行相同的操作，如：对每一个顶点进行同样的坐标变换，对每一个顶点按照同样的光照模型计算颜色值。

GPU的众核架构非常适合把同样的指令流并行发送到众核上，采用不同的输入数据执行。在通用计算领域有广泛应用，包括：数值分析，海量数据处理（排序，Map-Reduce等），金融分析等等。

简而言之，当程序员为CPU编写程序时，他们倾向于利用复杂的逻辑结构优化算法从而减少计算任务的运行时间，即 `Latency`。当程序员为GPU编写程序时，则利用其处理海量数据的优势，通过提高总的数据吞吐量（`Throughput`）来掩盖 `Lantency`。

目前，`CPU` 和 `GPU` 的区别正在逐渐缩小，因为GPU也在处理不规则任务和线程间通信方面有了长足的进步。

### 每一帧的执行步骤

一般浏览器的刷新率为60HZ，即1秒钟刷新60次。

1000ms / 60hz = 16.6 ，也就是大概每过 `16.6ms` 浏览器就会渲染一帧画面。

**浏览器对每一帧画面的渲染工作都要在 16ms 内完成，超出这个时间，页面的渲染就会出现卡顿现象**，影响用户体验。

简单概括下，浏览器在每一帧里会依次执行以下这些动作：

- `JavaScript`：JavaScript 实现动画效果，DOM 元素操作等。
- `Style`（计算样式）：确定每个 DOM 元素应该应用什么 CSS 规则。
- `Layout`（布局）：计算每个 DOM 元素在最终屏幕上显示的大小和位置。由于 web 页面的元素布局是相对的，所以其中任意一个元素的位置发生变化，都会联动的引起其他元素发生变化，这个过程叫 reflow。
- `Paint`（绘制）：在多个层上绘制 DOM 元素的的文字、颜色、图像、边框和阴影等。
- `Composite`（渲染层合并）：按照合理的顺序合并图层然后显示到屏幕上。

减少或者避免 `layout`，`paint` 可以让页面减少卡顿，动画效果更加流畅。

### 完整的渲染流程

更具体一些，一个完整的渲染步骤大致可总结为如下：

- 渲染进程将HTML内容转换为能够读懂的DOM树结构。
- 渲染引擎将CSS样式表转化为浏览器可以理解的 `styleSheets` ，计算出DOM节点的样式。
- 创建布局树，并计算元素的布局信息。
- 对布局树进行分层，并生成分层树。
- 为每个图层生成绘制列表，并将其提交到合成线程。
- 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。
- 合成线程发送绘制图块命令DrawQuad给浏览器进程。
- 浏览器进程根据DrawQuad消息生成页面，并显示到显示器上

### 普通图层和复合图层

上面的介绍中，提到了 `composite` 概念。

可以简单的这样理解，浏览器渲染的图层一般包含两大类：`渲染图层（普通图层）`以及`复合图层`

- 渲染图层：又称默认复合层，是页面普通的文档流。我们虽然可以通过绝对定位，相对定位，浮动定位脱离文档流，但它仍然属于默认复合层，共用同一个绘图上下文对象（`GraphicsContext`）。
- 复合图层，它会单独分配资源（当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响默认复合层里的回流重绘）

某些特殊的渲染层会被提升为复合成层（`Compositing Layers`），复合图层拥有单独的 `GraphicsLayer`，而其他不是复合图层的渲染层，则和其第一个拥有 `GraphicsLayer` 父层共用一个。

每个 `GraphicsLayer` 都有一个 `GraphicsContext`，`GraphicsContext` 会负责输出该层的位图，位图是存储在共享内存中，作为纹理上传到 GPU 中，最后由 GPU 将多个位图进行合成，然后 draw 到屏幕上，此时，我们的页面也就展现到了屏幕上。

可以 `Chrome源码调试 -> More Tools -> Rendering -> Layer borders`中看到，黄色的就是复合图层信息。

### 硬件加速

硬件加速，直观上说就是依赖 GPU 实现图形绘制加速，软硬件加速的区别主要是图形的绘制究竟是 GPU 来处理还是 CPU，如果是 GPU，就认为是硬件加速绘制，反之，则为软件绘制。

一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。

常用的硬件加速方法有：

- 最常用的方式：`translate3d`、`translateZ`
- `opacity` 属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）
- `will-change`属性（这个知识点比较冷僻），一般配合 `opacity` 与 `translate` 使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层），作用是提前告诉浏览器要变化，这样浏览器会开始做一些优化工作（这个最好用完后就释放）
- `<video>`、`<iframe>`、`<canvas>`、`<webgl>`等元素
- 其它，譬如以前的 `flash` 插件

当然，有的时候我们想强制触发硬件渲染，就可以通过上面的属性，比如

```css
will-change: transform; 
```

或者

```css
transform:translate3d(0, 0, 0);
```

### 使用硬件加速的注意事项

使用硬件加速并不是十全十美的事情，比如：

- 内存。如果GPU加载了大量的纹理，那么很容易就会发生内容问题，这一点在移动端浏览器上尤为明显，所以，一定要牢记不要让页面的每个元素都使用硬件加速。
- 使用GPU渲染会影响字体的抗锯齿效果。这是因为GPU和CPU具有不同的渲染机制。即使最终硬件加速停止了，文本还是会在动画期间显示得很模糊。

所以不要大量使用复合图层，否则由于资源消耗过度，页面可能会变的更加卡顿。

同时，在使用硬件加速时，尽可能的使用`z-index`，防止浏览器默认给后续的元素创建复合层渲染。

具体的原理是这样的：

> webkit CSS3中，如果一个元素添加了硬件加速，并且`z-index`层级比较低，那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且`releative`或`absolute`属性相同的），会默认变为复合层渲染，如果处理不当会极大的影响性能。

简单点理解，其实可以认为是一个隐式合成的概念：如果a是一个复合图层，而且b在a上面，那么b也会被隐式转为一个复合图层，这点需要特别注意。



---

## 93.纯css设置斑马线表格

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8">
    <title>斑马线表格</title>
    <style type="text/css">
    *{
     margin: 0;
     padding: 0;
     /*清处浏览器默认设置*/
    }
    table{
     /*表格的外边距和大小*/
     margin: 10px 0 0 0;
     width: 100%;
     border-spacing: 0;
     border-collapse: collapse;
     /*collapse 表格单元格边框合并 
      border-spacing 表格单元格间距为零
     */
    }
    caption{
     font: 30px "楷体";
     padding: 5px;
     /*表格标题*/
    }
    td{
     width: 32%;
     height: 50px;
     /*单元格大小*/
    }
    tbody td{
      border: 1px solid;
      /*表格主体的边框*/
    }
    thead{
     background-color: #A2A5A7;
     /*表格头部*/
    }
    tr:hover{
     background-color: #66D9EF;
     cursor: pointer;
     /*鼠标悬停在表格上时，表格的背景和鼠标的形状*/
    }
    table tbody tr:nth-child(even){
     background-color: #8F908A;
     box-shadow: inset 0 5px rgba(255,255,255,0.5);
     /*even为偶数行 odd为奇数行
       设置表格的主体部分偶数行的样式
       shadow 阴影  inset将外部阴影改为内部阴影
     */
    }
    thead tr th:first-child
    {
     /*表头部分th 第一个th左上角设置圆角*/
     border-radius: 15px 0 0 0;
    }
    thead tr td:last-child{
     /*最后一个单元格右上角设置圆角*/
     border-radius: 0 15px 0 0;
    }
    </style>
   </head>
   <body>
    <table>
    <caption>斑马线表格</caption>
    <thead>
     <tr>
      <th></th>
      <td></td>
      <td></td>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
     </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
     </tr>
    </tbody>
     <tfoot>
      <tr>
       <td></td>
       <td></td>
       <td></td>
      </tr>
     </tfoot>
    </table>
   </body>
   </html>
   
   ```

------

##   94.文本元素如何居中

### CSS设置文字水平居中

在CSS中可以使用text-align属性来设置文字水平居中。该属性规定元素中的文本的水平对齐方式，通过使用center值设置文本居中。

text-align是一个基本的属性，它会影响一个元素中的文本行互相间的对齐方式。值left、right和center会导致元素中的文本分别左对齐、右对齐和居中，想要使文本居中，直接使用center即可。

该属性设置文本和img标签等一些内联对象（或与之类似的元素）的居中。

该属性有如下几个**特点**：

1）text-align的center应用在一个容器上，它**只针对容器里面的文字以及容器里面的display为inline或者inline-block的容器**，如果里面的容器display为block，则里面的容器的内容不会居中。

2）text-align**具有向下传递性**，会不断地向子元素传递。如果设置一个div，则其子div中的内容也会居中。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css 水平居中</title>
        <style>
            .box {
                width: 400px;
                height: 100px;
                background: pink;
                text-align:center;
            }
        </style>
    </head>
    <body>
        <div class="box">css 水平居中了--文本文字</div>
    </body>

</html>

```

### CSS设置字体垂直居中

#### 单行文字垂直居中

对于单行文本，我们只需要将文本行高(line-height属性)和所在区域高度(height)设置一致就可以了

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css 垂直居中</title>
        <style>
            .box {
                width: 300px;
                height: 300px;
                background: paleturquoise;
                line-height:300px;
            }
        </style>
    </head>
    <body>
        <div class="box">css 垂直居中了--文本文字</div>
    </body>
</html>

```

#### 多行文本垂直居中

说明：多行文本垂直居中分为两种情况，一个是父级元素高度不固定，随着内容变化；另一个是父级元素高度固定。

##### (1) 父级元素高度不固定

父级高度不固定的时，高度只能通过内部文本来撑开。所以，我们可以**通过设置内填充（padding）的值来使文本看起来垂直居中**，只需设置padding-top和padding-bottom的值相等：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>css 垂直居中</title>
        <style>
            .box {
                width: 300px;
                margin: 50px auto;
                background: paleturquoise;
                padding: 50px 20px;
            }
        </style>
    </head>
    <body>
        <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字</div>
    </body>
</html>

```

##### (2) 父级元素高度固定

使用vertical-align:middle +display:table-cell 使文字垂直居中

```html
   <!DOCTYPE html>
   <html>
       <head>
           <meta charset="UTF-8">
           <title>css 垂直居中</title>
           <style>
               .box {
                   width: 300px;
                   height: 300px;
                   background: paleturquoise;
                   vertical-align:middle;
                   display:table-cell;
               }
           </style>
       </head>
       <body>
           <div class="box">css 垂直居中了--文本文字,文本文字,文本文字,文本文字,文本文字,文本文字。</div>
       </body>
   </html>

```

说明：vertical-align:middle +display:table-cell能够使单行文字、多行文字都居中。但是因为 table-cell 是 inline 类型，所以会导致原来的块级元素每个 div 一行移动到了同一行。如果需要分列两行，需要在外面额外添加容器对位置进行控制。

-------

## 95.用flex实现九宫格

利用了padding-top和flex-wrap:wrap，当设置background-color时，是包括盒子模型中的content和padding的，但是为什么不设置height呢？

因为父元素没有高度，所以定义height:30%是没有用的，**且若想每个block都为正方形，最好的方式就是设置padding-top/padding-bottom：a%**，因为此时的百分比是父元素宽度的百分比，而width也为父元素宽度的百分比，所以block可以成为正方形。

```html
<!DOCTYPE html>
<html>
<style>
.block {
    padding-top: 30%;
    margin-top: 3%;
    border-radius: 10%;
    background-color: orange;
    width: 30%;
}
.container-flex2  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
<body>
   <div class="container-flex2">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</body>
</html>

```

---



## 96.布局: 三栏布局(平均分布)

flex:1 : 设置父级弹性盒，子盒子三个各占1份

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
<style type="text/css">
  .grid{
    display: flex;
  }
  .grid-cell{
    flex: 1;
    background-color: #eee;
    margin: 10px;
    text-align: center;
  }
</style>
</head>
<body class="t-red">
    <div class="grid">
      <div class="grid-cell">1/3</div>
      <div class="grid-cell">1/3</div>
      <div class="grid-cell">1/3</div>
    </div>
</body>
</html>

```

flex 百分比

```html
<div class="Grid">
    <div class="Grid-cell col3"></div>
    <div class="Grid-cell col3"></div>
    <div class="Grid-cell clo3"></div>
</div>

```

```css
.col3 {
  flex: 0 0 33.3%;
}
```

流式布局

```css
.col3 {
  width: 33.33%
}
```

-----

## 97.未知高度元素垂直居中、垂直居中的实现方式有哪些？

**1、绝对定位+css3 transform:translate(-50%，-50%)**

```css
.wrap{
  position:relative;
}
.child{
  position: absolute;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%,-50%);
}
```

**2、css3 的flex布局**

```css
.wrap{
  display:flex;
  justify-content:center;
}
.child{
  align-self:center;
}
```

**3、table布局**

```html
<style>
.wrap{
  display:table;
  text-align:center;
}
.child{
  background:#ccc;
  display:table-cell;
  vertical-align:middle;
}
.child div{
    width:300px;
    height:150px;
    background:red;
    margin:0 auto;
}
</style>
<div class="wrap">
   <div class="child">
          <div>sadgsdgasgd</div>
   </div>
</div>

```

------

## 98.实现图片垂直居中

**1. 使用flex实现图片垂直居中**

利用 display: flex;align-items: center 实现垂直居中。flex可能不是实现垂直居中最好的选择，因为IE8,9并不支持它。

html代码：

```html
<div class="flexbox">
    <img src="1.jpg" alt="">
</div>
```

css代码：

```css
body{ background:#999}
.flexbox{width: 300px;height: 250px;background:#fff;display: flex;align-items: center}
.flexbox img{width: 100px;height: 100px;align-items: center;}
```

**2. 利用Display: table;实现img图片垂直居中**

给最外层的div设置display属性为table;img的父元素div设置display:table-cell,vertical-align: middle;如果你也想实现水平居中，你可以给最外层的div元素添加text-align: center属性

html代码：

```html
<div class="tablebox">
    <div id="imgbox">
        <img src="1.jpg" alt="">
    </div>
</div>
```

css代码：

```css
.tablebox{width: 300px;height: 250px;background: #fff;display: table}
#imgbox{display: table-cell;vertical-align: middle;}
#imgbox img{width: 100px}
```

**3. 用绝对定位实现垂直居中（推荐-兼容性好）**

1. 给img的父元素添加相对定位属性（position: relative），同时，要给子元素也就是图片img元素添加绝对定位属性（position: absolute）。

2. 将图片元素的top属性设置为50%。

3. 现在我们需要给img元素设置一个负的margin-top值，这个值为你想要实现垂直居中的元素高度的一半，*如果不确定元素的高度，可以不使用margin-top，而是使用transform:translateY(-50%);属性。

   记住：如果你想要同时实现水平居中，那么你可以用实现垂直居中的一样的技巧来实现。

   HTML代码：

   ```html
   <div class="posdiv">
   	<img src="1.jpg" alt="">
   </div>
   ```

   css代码：

   ```css
   body{background: #ccc;}
   .posdiv{
       width: 300px;
       height: 250px;
       background: #fff;
       position: relative;
       margin:0 auto
   }
   .posdiv img{
       width: 100px;
       position: absolute;
       top: 50%;
       margin-top: -50px;
   }
   
   ```

   

---

## 99. 请问如何将一个`<div>`盒子在页面垂直水平居中？

### 元素宽高固定时

（设元素宽高为100px）：

- **absolute + 负margin**

```html
<style type="text/css">
  .box{
    width: 100px;
    height: 100px;
    background-color: gray;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

- **absolute + margin auto**

```css
  .box{
    width: 100px;
    height: 100px;
    background-color: gray;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
```

- **absolute + calc()**

```css
  .box{
    width: 100px;
    height: 100px;
    background-color: gray;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
  }
```

### 元素宽高未知时

- absolute + transform

```html
<style type="text/css">
  .box{
    background-color: gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
<body>
  <div class="box">元素宽高未知</div>
</body>
```

- table，需要先打造一个表格结构，再将盒子放入单元格中，表格单元格中的**内容本身就是垂直居中的**，此法弊端：增加了很多冗余代码

```html
<style type="text/css">
  .wrap{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    text-align: center;
  }
  .box{
    background-color: gray;
    display: inline-block;
  }
</style>
<body>
  <body>
  <table>
    <tbody>
      <tr>
        <td class="wrap">
          <div class="box">元素宽高未知</div>
        </td>
      </tr>
    </tbody>
  </table>
</body>
```

- css-table，CSS新增的table属性，直接把普通元素，变为table元素的现实效果，原理与用table一样，但没有那么多的冗余代码

```html
<style type="text/css">
  .wrap{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .box{
    background-color: gray;
    display: inline-block;
  }
</style>
<body>
  <div class="wrap">
      <div class="box">元素宽高未知</div>
  </div>
</body>
```

- flex布局

```html
<style type="text/css">
  .wrap{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box{
    background-color: gray;
  }
</style>
<body>
  <div class="wrap">
      <div class="box">元素宽高未知</div>
  </div>
</body>
```

- grid布局，CSS新出的网格布局，代码量少，但兼容性不太好

```html
<style type="text/css">
  .wrap{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: grid;
  }
  .box{
    background-color: gray;
    align-self: center;
    justify-self: center;
  }
</style>
<body>
  <div class="wrap">
      <div class="box">元素宽高未知</div>
  </div>
</body>
```

总结：宽高固定时，推荐absolute + 负margin；宽高不固定，推荐flex

---

## 100.请问实现自适应两栏布局（左定宽，右宽度自适应）有哪些方法？

```html
<style type="text/css">
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;
  }
</style>
<body>
  <div class="wrap">
    <div class="left">左侧固定内容</div>
    <div class="right">右侧内容自适应</div>
  </div>
</body>
```

- **float**

```css
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;
      
    float: left;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;
      
    margin-left: 200px;
  }
```

- **absolute**

```css
  .wrap{
    position: relative;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    position: absolute;
    top: 0;
    left: 0;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;

    margin-left: 200px;
  }
```

- **table**

```css
  .wrap{
    display: table;
    width: 100%;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    display: table-cell;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;

    display: table-cell;
  }
```

- **calc()**

```css
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    float: left;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;

    float: left;
    width: calc(100% - 200px);
  }
```

- **inline-block+calc()**

```css
  .wrap{
    width: 100%;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    display: inline-block;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;

    display: inline-block;
    width: calc(100% - 200px);  /* 谷歌和火狐都不能达到目的*/
  }
```

- **flex布局**

```css
  .wrap{
    display: flex;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    flex: 0 0 auto;
  }
  .right{
    height: 200px;
    background-color: #c0c0c0;

    flex: 1;
  }
```

---

## 101. 请问实现自适应三栏布局（左右定宽，中间宽度自适应）有哪些方法？

- 左边左浮动，右边右浮动，中间自适应，需注意：**中间盒子必须放在DOM结构的最后**，若放在第一个，会占据第一行文档流位置，左右两边的盒子只能在第二行浮动

```html
<style type="text/css">
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    float: left;
  }
  .right{
    width: 400px;
    height: 200px;
    background-color: #9899ff;

    float: right;
  }
  .center{
    height: 200px;
    background-color: #c0c0c0;

    margin: 0 400px 0 200px; /*为左右两盒子留出位置*/
  }
</style>
<body>
  <div class="wrap">
    <div class="left">左侧固定内容</div>
    
    <div class="right">右侧宽度固定</div>
    
    <div class="center">中间宽度自适应</div>
  </div>
```

- 左右两盒子绝对定位，中间自适应，三个盒子的先后顺序无要求

```html
<style type="text/css">
  .wrap{
    position: relative;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    position: absolute;
    top: 0;
    left: 0;
  }
  .right{
    width: 400px;
    height: 200px;
    background-color: #9899ff;

    position: absolute;
    top: 0;
    right: 0;
  }
  .center{
    height: 200px;
    background-color: #c0c0c0;

    margin: 0 400px 0 200px; /*为左右两盒子留出位置*/
  }
</style>
<body>
  <div class="wrap">
    <div class="left">左侧固定内容</div>
    <div class="center">中间宽度自适应</div>
    <div class="right">右侧宽度固定</div>
  </div>
</body>
```

- flex布局，左右两盒子定宽，中间盒子flex：1，flex-grow：1、flex-shrink：1、flex-basic：0%，中间盒子的宽度：自动分配父元素除去左右盒子后的宽度，其次，弹性布局中盒子默认水平方向排列，需注意：必须最外层加一个大盒子，且中间盒子必须放在中间，按左中右顺序排列

```css
  .wrap{
    display: flex;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;
  }
  .right{
    width: 400px;
    height: 200px;
    background-color: #9899ff;
  }
  .center{
    height: 200px;
    background-color: #c0c0c0;

    flex: 1;  /*等同于flex-grow：1、flex-shrink：1、flex-basic：0%*/
  }
```

- 圣杯布局法，浮动+负margin，此方法逻辑上稍复杂，建议大家一步步理解后再实践一下，**center盒子必须放在DOM结构第一个**

```html
<div class="container">
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```

**步骤1：center盒子**宽度100%，左右两边盒子定宽

**步骤2：三个盒子**先设置相对定位，再左浮动，脱离文档流

为什么用relative 而不用 absolute呢？因为**设置absolute会让float失效**，而relative就不存在这个问题

**步骤3：left盒子** margin-left：-100%（直接将left盒子拉到center盒子左边），这里效果不等同取left盒子宽度（left盒子会跑到center盒子右边），margin设置-100%就等价于把left盒子向左移动视窗宽度的距离，等价于left盒子直接放置到最左边

**步骤4：left盒子**会覆盖center盒子左边部分内容，要把center盒子内容拉出来，在外围container加上左右padding，值分别为左右两盒子宽度，此时left盒子也会跟过来，left盒子设置left：-自身盒子宽度

**步骤5：right盒子** margin-left：-自身盒子宽度，移动到center盒子右边，不需要盒子处于最左端，所以不需要-100%，仅让它回到第一行即可

**步骤6：right盒子** right -自身盒子宽度，就可以让它不覆盖center盒子右边部分内容

完整的CSS代码如下：

```html
<style type="text/css">
  .wrap{
    padding: 0 400px 0 200px;
  }
  .center,.left,.right{
    position: relative;
    float: left;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    margin-left: -100%;
    left: -200px;
  }
  .right{
    width: 400px;
    height: 200px;
    background-color: #9899ff;

    margin-left: -400px;
    right: -400px;
  }
  .center{
    height: 200px;
    background-color: #c0c0c0;

    width: 100%;
  }
</style>
<body>
  <div class="wrap">
    <div class="center">中间宽度自适应</div>
    <div class="left">左侧固定内容</div>
    <div class="right">右侧宽度固定</div>
  </div>
</body>
```

- 双飞翼布局法，前半部分与圣杯布局基本一致，三栏全部float浮动，但左右两盒子加上负margin让其跟中间盒子并排，以形成三栏布局。

**不同处：**对于中间盒子被覆盖问题的解决思路：直接在center盒子内部创建子盒子用于放置内容，对该子盒子设置margin-left和margin-right为左右两盒子留出位置

简单地说，对比圣杯布局，双飞翼布局比圣杯布局多创建了一个div，但不用相对布局

```html
<style type="text/css">
  .center,.left,.right{
    position: relative;
    float: left;
  }
  .left{
    width: 200px;
    height: 200px;
    background-color: #389777;

    margin-left: -100%;
  }
  .right{
    width: 400px;
    height: 200px;
    background-color: #9899ff;

    margin-left: -400px;
  }
  .center{
    height: 200px;
    background-color: #c0c0c0;

    width: 100%;
  }
  .main{
    margin: 0 400px 0 200px;
  }
</style>
<body>
  <div class="wrap">
    <div class="center">
      <div class="main">中间宽度自适应</div>
    </div>
    <div class="left">左侧固定内容</div>
    <div class="right">右侧宽度固定</div>
  </div>
</body>
```



----

## 102. CSS中宽度随内容自适应，如何实现

在实际应用中，可能有这样的需求，那就是需要div根据内容进行宽度自适应。有很多开发者可能误以为如果不设定div的宽度就可以实现宽度随内容自适应，其实这是错误的，因为在默认状态下，div的宽度值是百分之百，也就是会占满整个父元素宽度。



```css
div{
    display:inline-block; 
	*display:inline; 
    *zoom:1;
}
```

`fit-content`

取以下两种值中的较大值：

- 固有的最小宽度
- 固有首选宽度（max-content）和可用宽度（available）两者中的较小值

可表示为：`min(max-content, max(min-content, <length-percentage>))`

```css
div{
    width: fit-content;
}
```



----

## 103.css如何让页面div高度一致，小的适应大的

(1) 利用dispaly:table,父级div设置dispaly:table子级div设置display: table-cell;

```html
    <style type="text/css">
    
    .div-box1{
      display: table;
      padding: 10px;
      border: 1px solid #000;
    }
    .div1{
      display: table-cell;
      border: 1px solid #000;
    }
    .div2{
      display: table-cell;
      border: 1px solid #000;
    }
    </style>
</head>
<body>
    <div class="div-box1">
      <div class="div1"><p>第一个盒子</p><p>第一个盒子</p><p>第一个盒子</p><p>第一个盒子</p><p>第一个盒子</p></div>
      <div class="div2">第二个盒子</div>
    </div>
</body>
```



(2) 利用dispaly:flex,父级div设置dispaly:flex子级div设置flex: 1;

```html
    <style type="text/css">
      
    .div-box1{
      display: flex;
      padding: 10px;
      border: 1px solid #000;
    }
    .div1{
      flex: 1;
      border: 1px solid #00f;
    }
    .div2{
      flex: 1;
      border: 1px solid #f00;
    }
    </style>
</head>
<body>
    <div class="div-box1">
      <div class="div1"><p>第一个盒子</p><p>第一个盒子</p><p>第一个盒子</p><p>第一个盒子</p><p>第一个盒子</p></div>
      <div class="div2">第二个盒子</div>
    </div>
</body>
```



----

## 104. 什么是堆叠上下文？

堆叠上下文（Stacking Context）：堆叠上下文是 HTML 元素的三维概念，这些 HTML 元素在一条假想的相对于面向（电脑屏幕的）视窗或者网页的用户的 z 轴上延伸，HTML 元素依据其自身属性按照优先级顺序占用层叠上下文的空间。

概念比较抽象，简单理解，就是 生成了 Stacking Context 的元素会影响 该元素的层叠关系与定位关系。
总之，按照上面的说法，堆叠上下文的创建，该元素会影响其子元素的固定定位。设置了 position:fixed 的子元素将不会基于 viewport 定位，而是基于这个祖先元素。
