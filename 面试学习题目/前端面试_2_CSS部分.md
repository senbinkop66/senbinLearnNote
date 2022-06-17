-------

#### 10.1 继承相关

css的继承：就是给父级设置一些属性，子级继承了父级的该属性，这就是我们的css中的继承。 官方解释，继承是一种规则，它允许样式不仅应用于特定的html标签元素，而且应用于其后代元素。

**无继承性的属性**

1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、 border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

**有继承性的属性**

1、字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写 字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2、文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色 a元素除外

3、元素可见性：visibility

4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性：quotes

7、光标属性：cursor

8、页面样式属性：page、page-break-inside、windows、orphans

9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、 pitch、pitch-range、stress、richness、、azimuth、elevation

**所有元素可以继承的属性**

1. 元素可见性：visibility
2. 光标属性：cursor

**内联元素可以继承的属性**

1. 字体系列属性
2. 除text-indent、text-align之外的文本系列属性

**块级元素可以继承的属性**

1. text-indent、text-align

------

#### 10.2 css预处理工具

**参考答案**：

**CSS 预处理器**是一个能让你通过预处理器自己独有的语法来生成CSS的程序。

css预处理器种类繁多，三种主流css预处理器是Less、Sass（Scss）及Stylus；它们各自的背景如下:

**Sass：**

2007年诞生，最早也是最成熟的CSS预处理器，拥有ruby社区的支持和compass这一最强大的css框架，目前受LESS影响，已经进化到了全面兼容CSS的SCSS（SCSS 需要使用分号和花括号而不是换行和缩进）。

**Less**：

2009年出现，受SASS的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手，在ruby社区之外支持者远超过SASS。其缺点是比起SASS来，可编程功能不够。优点是简单和兼容CSS，反过来也影响了SASS演变到了SCSS的时代，著名的Twitter Bootstrap就是采用LESS做底层语言的。

**Stylus**：

2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如SASS和LESS。

**比较**

在使用 CSS 预处理器之前最重要的是理解语法，幸运的是基本上大多数预处理器的语法跟 CSS 都差不多。

首先 Sass 和 Less 都使用的是标准的 CSS 语法，因此如果可以很方便的将已有的 CSS 代码转为预处理器代码，默认 Sass 使用 .sass 扩展名，而 Less 使用 .less 扩展名。

```less
h1 {
  color: #0982C1;
}
```

这是一个再普通不过的，不过 Sass 同时也支持老的语法，就是不包含花括号和分号的方式：

```css
h1
color: #0982c1
```

而 Stylus 支持的语法要更多样性一点，它默认使用 .styl 的文件扩展名，下面是 Stylus 支持的语法

```stylus
/* style.styl */
h1 {
  color: #0982C1;
}
/* omit brackets */
h1
color: #0982C1;
/* omit colons and semi-colons */
h1
color #0982C1
```

可以在同一个样式单中使用不同的变量，例如下面的写法也不会报错：

```stylus
h1 {
  color #0982c1
}
h2
font-size: 1.2em
```

------

#### 10.3 行内元素和块级元素什么区别，然后怎么相互转换

**参考答案:**

**块级元素**

1.总是从新的一行开始，即各个块级元素独占一行，默认垂直向下排列；

2.高度、宽度、margin及padding都是可控的，设置有效，有边距效果；

3.宽度没有设置时，默认为100%；

4.块级元素中可以包含块级元素和行内元素。

**行内元素**

1.和其他元素都在一行，即行内元素和其他行内元素都会在一条水平线上排列；

2.高度、宽度是不可控的，设置无效，由内容决定。

3.根据标签语义化的理念，行内元素最好只包含行内元素，不包含块级元素。

**转换**

当然块级元素与行内元素之间的特性是可以相互转换的。HTML可以将元素分为行内元素、块状元素和行内块状元素三种。

使用display属性能够将三者任意转换：

(1)display:inline;转换为**行内元素**；

(2)display:block;转换为**块状元素**；

(3)display:inline-block;转换为**行内块状元素**。

------

#### 10.4 块元素哪些属性可以继承？

**参考答案**：

text-indent、text-align、visibility、cursor

------

#### 10.5 盒模型

**参考答案**：

1. 概念

   CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。
   CSS盒模型：**标准模型 + IE模型**

2. 标准模型和IE模型的区别

计算宽度和高度的不同
标准盒模型：盒子总宽度/高度 =width/height + padding + border + margin。（ 即 width/height 只是 内容高度，不包含 padding 和 border 值 ）
IE盒子模型：盒子总宽度/高度 =width/height + margin = (内容区宽度/高度 + padding + border) + margin。（ 即 width/height 包含了 padding 和 border 值 ）

1. CSS如何设置这两种模型

   标准：box-sizing: content-box;( 浏览器默认设置 )
   IE：box-sizing: border-box;

2. JS如何获取盒模型对应的宽和高

   （1）dom.style.width/height只能取到行内样式的宽和高，style 标签中和 link 外链的样式取不到。
   （2）dom.currentStyle.width/height（只有IE兼容）取到的是最终渲染后的宽和高
   （3）window.getComputedStyle(dom).width/height同（2）但是多浏览器支持，IE9 以上支持。
   （4）dom.getBoundingClientRect().width/height也是得到渲染后的宽和高，大多浏览器支持。IE9 以上支持，除此外还可以取到相对于视窗的上下左右的距离。
   （6）dom.offsetWidth/offsetHeight包括高度（宽度）、内边距和边框，不包括外边距。最常用，兼容性最好。

3. BFC（边距重叠解决方案）

   5.1 BFC基本概念

   **BFC: 块级格式化上下文**
   BFC基本概念：BFC是CSS布局的一个概念，是一块独立的渲染区域，是一个环境，里面的元素不会影响到外部的元素 。
   父子元素和兄弟元素边距重叠，重叠原则取最大值。空元素的边距重叠是取margin与 padding 的最大值。

   5.2 BFC原理（渲染规则|布局规则）：

   （1）内部的Box会在垂直方向，从顶部开始一个接着一个地放置；
   （2）Box垂直方向的距离由margin(外边距)决定，属于同一个BFC的两个相邻Box的margin会发生重叠；
   （3）每个元素的margin Box的左边， 与包含块border Box的左边相接触，（对于从左到右的格式化，否则相反）。即使存在浮动也是如此；
   （4）BFC 在页面上是一个隔离的独立容器，外面的元素不会影响里面的元素，反之亦然。文字环绕效果，设置float；
   （5）BFC 的区域不会与float Box重叠（清浮动）;
   （6）计算BFC的高度时，浮动元素也参与计算。

   5.3 CSS在什么情况下会创建出BFC（即脱离文档流）

   0、根元素，即 HTML 元素（最大的一个BFC）
   1、浮动（float 的值不为 none）
   2、绝对定位元素（position 的值为 absolute 或 fixed）
   3、行内块（display 为 inline-block）
   4、表格单元（display 为 table、table-cell、table-caption、inline-block 等 HTML 表格相关的属性)
   5、弹性盒（display 为 flex 或 inline-flex）
   6、默认值。内容不会被修剪，会呈现在元素框之外（overflow 不为 visible）

   5.4 BFC作用（使用场景）

   1、自适应两（三）栏布局（避免多列布局由于宽度计算四舍五入而自动换行）
   2、避免元素被浮动元素覆盖
   3、可以让父元素的高度包含子浮动元素，清除内部浮动（原理：触发父div的BFC属性，使下面的子div都处在父div的同一个BFC区域之内）
   4、去除边距重叠现象，分属于不同的BFC时，可以阻止margin重叠

4. IFC

   6.1 IFC基本概念

   **IFC: 行内格式化上下文**
   IFC基本概念：

   ![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646122783978/CC01CC5BF7B84B6F99B134A44179B21D)

6.2 IFC原理（渲染规则|布局规则）：

（1）内部的Box会在水平方向，从含块的顶部开始一个接着一个地放置；
（2）这些Box之间的水平方向的margin，border和padding都有效；
（3）Box垂直对齐方式：以它们的底部、顶部对齐，或以它们里面的文本的基线（baseline）对齐（默认， 文本与图片对其），例：line-heigth与vertical-align。



------

#### 10.6 样式优先级

**参考答案**：

样式类型

样式类型分为三类

1. 行间

```html
<h1 style="font-size:12px;color:#000;">我的行间CSS样式。</h1>
```

1. 内联

```html
<style type="text/css">
   h1{font-size:12px;
      color:#000;
      }
</style>
```

1. 外部

```html
<link rel="stylesheet" href="css/style.css">
```

选择器类型

- ID　　#id
- class　　.class
- 标签　　p
- 通用　　*
- 属性　　[type="text"]
- 伪类　　:hover
- 伪元素　　::first-line
- 子选择器、相邻选择器

权重计算规则

第一等：代表内联样式，如: style=””，权值为1000。
第二等：代表ID选择器，如：#content，权值为100。
第三等：代表类，伪类和属性选择器，如.content，权值为10。
第四等：代表类型选择器和伪元素选择器，如div p，权值为1。
通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
继承的样式没有权值。

比较规则

遵循如下法则：

- 选择器都有一个权值，权值越大越优先；
- 当权值相等时，**后出现的样式表设置要优于先出现的样式表设置**；
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
- 继承的 CSS 样式**不如**后来指定的 CSS 样式；
- 在同一组属性设置中**标有!important规则的优先级最大**
- 通配符、子选择器、相邻选择器等的。虽然权值为0000，**但是也比继承的样式优先。**

！important

1. !important 的作用是提升优先级，换句话说。加了这句的样式的优先级是最高的（比内联样式的优先级还高)。

```html
<style> 
p{
    color:red !important;
} 
</style>
<p style="color:blue;">我显示红色</p>
```

1. ie7+和别的浏览器对important的这种作用的支持度都很好。只有ie6有些bug

```css
p{
      color:red !important;
      color:blue;    
 }//会显示blue

```

但是这并不说明ie6不支持important，只是支持上有些bug。看下面

```css
p{
     color:red !important;  
}
p{
    color:blue;  
} //这样就会显示的是red。说明ie6还是支持important的。

```

------

#### 10.7 盒子塌陷是什么？

**参考答案：**

**盒子塌陷**

本应该在父盒子内部的元素跑到了外部。

**关于盒子塌陷的几种解决方法**

（1）最简单，直接，粗暴的方法就是盒子大小写死，给每个盒子设**定固定的width和height**，直到合适为止，这样的好处是简单方便，兼容性好，适合只改动少量内容不涉及盒子排布的版面。缺点是非自适应，浏览器的窗口大小直接影响用户体验。

（2）给外部的父盒子也添加浮动，让其也脱离标准文档流，这种方法方便，但是对页面的布局不是很友好，不易维护。

（3）给父盒子添加overflow属性。

overflow:auto; 有可能出现滚动条，影响美观。

overflow:hidden; 可能会带来内容不可见的问题。

（4）父盒子里最下方引入清除浮动块。最简单的有：

```html
    <br style="clear:both;"/>
```

有很多人是这么解决的，但是我们并不推荐，因为其引入了不必要的冗余元素 。

(5)用after伪元素清除浮动

给外部盒子的after伪元素设置clear属性，再隐藏它

这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。

```css
.clearfix {*zoom: 1;}

.clearfix:before,.clearfix:after {

    display: table;

    line-height: 0;

    content: "";

}

.clearfix:after {clear: both;}
```

这也是bootstrap框架采用的清除浮动的方法。

这是一种纯CSS的解决浮动造成盒子塌陷方法，没有引入任何冗余元素，推荐使用此方法来解决CSS盒子塌陷。

备注：第五种方法虽好，但是低版本IE不兼容，具体选择哪种解决方法，可根据实际情况决定。

(6) 给父盒子添加border

(7) 给父盒子设置padding-top

------

#### 10.8 为什么会出现盒子塌陷？

**参考答案**：

当父元素没设置足够大小的时候，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，而父元素中又没有其它非浮动的可见元素时，父盒子的高度就会直接塌陷为零， 我们称这是**CSS高度塌陷**。

------

#### 10.9 css 伪类与伪元素区别

css引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。

伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过`:hover`来描述这个元素的状态。

伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过`::before`来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

有时你会发现伪元素使用了两个冒号（`::`）而不是一个冒号（`:`）。这是CSS3的一部分，并尝试区分伪类和伪元素。大多数浏览器都支持这两个值。按照规则应该使用（`::`）而不是（`:`），从而区分伪类和伪元素。但是，由于在旧版本的W3C规范并未对此进行特别区分，因此目前绝大多数的浏览器都支持使用这两种方式表示伪元素。

**伪类**：用于已有元素处于某种状态时为其添加对应的样式，**这个状态是根据用户行为而动态变化的。**

例如：当用户悬停在指定元素时，可以通过:hover来描述这个元素的状态，虽然它和一般css相似，可以为 已有元素添加样式，**但是它只有处于DOM树无法描述的状态下才能为元素添加样式，所以称为伪类。**



**伪元素**：用于创建一些不在DOM树中的元素，并为其添加样式。

例如，我们可以通过:before来在一个元素之前添加一些文本，并为这些文本添加样式，**虽然用户可以看见 这些文本，但是它实际上并不在DOM文档中。**



1. **伪类**(pseudo-classes)

- 其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。
- ⽐如:hover :active :visited :link  :first-child :focus :lang等
- 由于状态的变化是⾮静态的，所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式；当状态改变时，它⼜会失去这个样式。
- 由此可以看出，它的功能和class有些类似，但**它是基于⽂档之外的抽象，所以叫 伪类**。

1. **伪元素**(Pseudo-elements)

- DOM树没有定义的虚拟元素
- 核⼼就是需要创建通常不存在于⽂档中的元素，
- ⽐如::before ::after 它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。
- 伪元素控制的内容和元素是没有差别的，但是**它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素**。⽤于将特殊的效果添加到某些选择器

1. 伪类与伪元素的区别

- 表示⽅法
  - CSS2 中伪类、伪元素都是以单冒号:表示,
  - CSS2.1 后规定**伪类⽤单冒号:表示**,伪元素⽤**双冒号::**表示，
  - 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
  - CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
  - CSS3中，伪类与伪元素在语法上也有所区别，**伪元素修改为以::开头**。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
- 定义不同
  - 伪类即**假的类**，可以**添加类来达到效果**
  - 伪元素即**假元素**，需要**通过添加元素才能达到效果**
- 总结:
  - 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
  - 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
  - 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类
  - **伪类和伪元素都不出现在源⽂件和DOM树中**。也就是说在html源⽂件中是看不到伪类和伪元素的。
  - 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
  - 伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。

------

#### 10.10 行内元素的margin 和 padding

**参考答案：**

- 水平方向：水平方向上，都有效；
- 垂直方向：垂直方向上，都无效；（padding-top和padding-bottom会显示出效果，但是高度不会撑开，不会对周围元素有影响）

------

#### 10.11 min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

**参考答案**：

1. max-width 会覆盖 width，即使 width 是行内样式或者设置了 !important。
2. min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候；

------

#### 10.12 浏览器是怎样解析CSS选择器的？

**参考答案**：

CSS选择器的解析是**从右向左解析的**。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。

两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点(叶子节点)，而从左向右的匹配规则的性能都浪费在了失败的查找上面。而在 CSS解析完毕后,需要将解析的结果与DOM Tree的内容-起进行分析建立一棵Render Tree，最终用来进行绘图。在建立Render Tree时(WebKit 中的「Attachment」过程)， 浏览器就要为每个DOM Tree中的元素根据CSS的解析结果(Style Rules)来确定生成怎样的Render Tree。

------

## 布局

------

#### 11.1 未知高度元素垂直居中、垂直居中的实现方式有哪些？

**参考答案：**

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

#### 11.2 实现图片垂直居中

**参考答案：**

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

   ------

#### 11.3 设置斑马线表格(纯css)

   **参考答案：**

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

   11.4 文本元素如何居中

**参考答案：**

1. CSS设置文字水平居中

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

2. CSS设置字体垂直居中

   2.1 **单行文字垂直居中**

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

   2.2 **多行文本垂直居中**

   说明：多行文本垂直居中分为两种情况，一个是父级元素高度不固定，随着内容变化；另一个是父级元素高度固定。

   (1) **父级元素高度不固定**

   父级高度不固定的时，高度只能通过内部文本来撑开。所以，我们可以通过设置内填充（padding）的值来使文本看起来垂直居中，只需设置padding-top和padding-bottom的值相等：

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
   
   (2) **父级元素高度固定**

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

#### 11.5 用flex实现九宫格讲思路

**参考答案：**

利用了padding-top和flex-wrap:wrap，当设置background-color时，是包括盒子模型中的content和padding的，但是为什么不设置height呢？因为父元素没有高度，所以定义height:30%是没有用的，且若想每个block都为正方形，最好的方式就是设置padding-top/padding-bottom：a%，因为此时的百分比是父元素宽度的百分比，而width也为父元素宽度的百分比，所以block可以成为正方形。

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

#### 11.6 CSS实现一个等腰三角形

**参考答案**：

主要是通过把宽高设置成0，边框宽度设置宽一些，设置其中三个边透明，只留一个边显示

等边三角形是特殊的等腰三角形，它的三条边都相等，顶角为60度，而高是边长的3^(1/2)/2倍，约等于0.866……假设底为160px，则高约为138.56px，因此要做边长为160px的等边三角形，可以这么做：

等腰三角形

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>测试</title>
    <style type="text/css">
        div {
             width:160px;height:160px;margin:100px auto;
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

---

#### 11.7 实现扇形、圆形

**参考答案**：

圆形：

border-radius圆角的四个值按顺序取值分别为：左上、右上、右下、左下。这里只设置一个值，代表四个角的取值都为为50%

原理：border-radius: 50% 弯曲元素的边框以创建圆。
由于圆在任何给定点具有相同的半径，故宽和高都需要保证一样的值，不同的值将创建椭圆。

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

   左上角是圆角，其余三个角都是直角：左上角的值为宽和高一样的值，其他三个角的值不变（等于0）。

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

#### 11.8 旋转45度

**参考答案**：

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

#### 11.9 画 0.5px 的直线

**参考答案**：

1. 使用scale缩放

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

2.线性渐变linear-gradient

```html
<style>
.hr.gradient {
    height: 1px;
    background: linear-gradient(0deg, #fff, #000);
}
</style>
<p>linear-gradient(0deg, #fff, #000)</p>
<div class="hr gradient"></div>
```

linear-gradient(0deg, #fff, #000)的意思是：渐变的角度从下往上，从白色#fff渐变到黑色#000，而且是线性的，在高清屏上，1px的逻辑像素代表的物理（设备）像素有2px，由于是线性渐变，所以第1个px只能是#fff，而剩下的那个像素只能是#000，这样就达到了画一半的目的。

3. boxshadow

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

4. viewport

```html
<meta name="viewport" content="width=device-width,initial-sacle=0.5">
```

其中width=device-width表示将viewport视窗的宽度调整为设备的宽度，这个宽度通常是指物理上宽度。默认的缩放比例为1时，如iphone 6竖屏的宽度为750px，它的dpr=2，用2px表示1px，这样设置之后viewport的宽度就变成375px。但是我们可以改成0.5，viewport的宽度就是原本的750px，所以1个px还是1px，正常画就行，但这样也意味着UI需要按2倍图的出，整体面面的单位都会放大一倍。

---

#### 11.10 css 切换主题

**参考答案**：

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



------

#### 11.11 布局: 三栏布局(平均分布)

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

#### 11.12 移动端 1px 问题

**参考答案**：

**问题**：1px 的边框，在高清屏下，移动端的1px 会很粗

**产生原因**

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) **设备像素比**，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。

```css
window.devicePixelRatio=物理像素 /CSS像素
```

目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。一般设计稿是按照750来设计的，它上面的1px是以750来参照的，**而我们写css样式是以设备375为参照的**，所以我们应该写的0.5px就好了啊！ 试过了就知道，iOS 8+系统支持，安卓系统不支持。

**解决方案**

1. WWDC对iOS统给出的方案

   在 WWDC大会上，给出来了1px方案，当写 0.5px的时候，就会显示一个物理像素宽度的 border，而不是一个css像素的 border。 所以在iOS下，你可以这样写。

   ```css
   border:0.5px solid #E5E5E5
   ```

   可能你会问为什么在3倍屏下，不是0.3333px 这样的？经过测试，在Chrome上模拟iPhone 8Plus，发现小于0.46px的时候是显示不出来。

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
   - 缺点：border颜色变了就得重新制作图片；圆角会比较模糊。

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
   .setOnePx{
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

   可以看到，将伪元素设置绝对定位，并且和父元素的左上角对齐，将width 设置100%，height设置为1px，然后进行在Y方向缩小0.5倍。

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

   同样为伪元素设置绝对定位，并且和父元素左上角对其。将伪元素的长和宽先放大2倍，然后再设置一个边框，以左上角为中心，缩放到原来的0.5倍

   **总结：**

   - 优点：全机型兼容，实现了真正的1px，而且可以圆角。
   - 缺点：暂用了after 伪元素，可能影响清除浮动。

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

- 优点：全机型兼容，直接写1px不能再方便
- 缺点：适用于新的项目，老项目可能改动大

------

#### 11.13 BFC

**参考答案**：

1. **简介**

   在解释BFC之前，先说一下文档流。我们常说的文档流其实分为**定位流**、**浮动流**、**普通流**三种。而普通流其实就是指BFC中的FC。FC(Formatting Context)，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。

   **BFC**(Block Formatting Context)块级格式化上下文，是用于布局块级盒子的一块渲染区域。[MDN上的解释](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)：BFC是Web页面 CSS 视觉渲染的一部分，用于决定块盒子的布局及浮动相互影响范围的一个区域。

   注意：一个BFC的范围包含创建该上下文元素的所有子元素，但**不包括**创建了新BFC的子元素的内部元素。这从另一方角度说明，**一个元素不能同时存在于两个BFC中。**因为如果一个元素能够同时处于两个BFC中，那么就意味着这个元素能与两个BFC中的元素发生作用，就违反了BFC的隔离作用。

2. **三种文档流的定位方案**

   **常规流(Normal flow)**

   - 在常规流中，盒一个接着一个排列;
   - 在块级格式化上下文里面， 它们竖着排列；
   - 在行内格式化上下文里面， 它们横着排列;
   - 当position为static或relative，并且float为none时会触发常规流；
   - 对于静态定位(static positioning)，position: static，盒的位置是常规流布局里的位置；
   - 对于相对定位(relative positioning)，position: relative，盒偏移位置由top、bottom、left、right属性定义。即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置。

   **浮动(Floats)**

   - 左浮动元素尽量靠左、靠上，右浮动同理
   - 这导致常规流环绕在它的周边，除非设置 clear 属性
   - 浮动元素不会影响块级元素的布局
   - 但**浮动元素会影响行内元素的布局**，让其围绕在自己周围，撑大父级元素，从而间接影响块级元素布局
   - 最高点不会超过当前行的最高点、它前面的浮动元素的最高点
   - 不超过它的包含块，除非元素本身已经比包含块更宽
   - 行内元素出现在左浮动元素的右边和右浮动元素的左边，左浮动元素的左边和右浮动元素的右边是不会摆放浮动元素的

   **绝对定位(Absolute positioning)**

   - 绝对定位方案，盒从常规流中被移除，不影响常规流的布局；
   - 它的定位相对于它的包含块，相关CSS属性：top、bottom、left、right；
   - 如果元素的属性position为absolute或fixed，它是绝对定位元素；
   - 对于position: absolute，元素定位将相对于上级元素中最近的一个relative、fixed、absolute，如果没有则相对于body；

3. **BFC触发方式**

   3.1 根元素，即HTML标签

   3.2 浮动元素：float值为left、right

   3.3 overflow值不为 visible，为auto、scroll、hidden

   3.4 display值为inline-block、table-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid

   3.5 定位元素：position值为absolute、fixed

   **注意：**display:table也可以生成BFC的原因在于Table会默认生成一个匿名的table-cell，是这个匿名的table-cell生成了BFC。

4. **约束规则**

   浏览器对BFC区域的约束规则：

   1. 生成BFC元素的子元素会一个接一个的放置。
   2. 垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的margin特性。在BFC中相邻的块级元素的外边距会折叠(Mastering margin collapsing)
   3. 生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。

   规则解读：

   1. 内部的Box会在垂直方向上一个接一个的放置
   2. 内部的Box垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠。）
   3. 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
   4. BFC的区域不会与float的元素区域重叠
   5. 计算BFC的高度时，浮动子元素也参与计算

5. **作用**

   BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用BFC的这个特性来做很多事。

   5.1 阻止元素被浮动元素覆盖

   一个正常文档流的block元素可能被一个float元素覆盖，挤占正常文档流，因此可以设置一个元素的float、 display、position值等方式触发BFC，以阻止被浮动盒子覆盖。

   5.2 可以包含浮动元素

   通过改变包含浮动子元素的父盒子的属性值，触发BFC，以此来包含子元素的浮动盒子。

   5.3 阻止因为浏览器因为四舍五入造成的多列布局换行的情况

   有时候因为多列布局采用小数点位的width导致因为浏览器因为四舍五入造成的换行的情况，可以在最后一 列触发BFC的形式来阻止换行的发生。比如下面栗子的特殊情况

   5.4 阻止相邻元素的margin合并

   属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，(设置writing-mode:tb-rl时，水平 margin会发生重叠)。所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠。
   这里给任一个相邻块级盒子的外面包一个div，通过改变此div的属性使两个原盒子分属于两个不同的BFC，以此来阻止margin重叠。

------

#### 11.14 移动端适配方案

**参考答案：**

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

**viewport 适配**

根据设计稿标准（750px 宽度）开发页面，写完后页面及元素自动缩小，适配 375 宽度的屏幕

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

缺点就是边线问题，不同尺寸下，边线的粗细是不一样的（等比缩放后），全部元素都是等比缩放，实际显示效果可能不太好

**vw 适配（部分等比缩放）**

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

**rem 适配**

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

对于需要等比缩放的元素，CSS使用转换后的单位

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

以上的三种适配方案，都是等比缩放，放到 ipad 上时（设计稿以手机屏幕设计的），页面元素会很大很丑，有些场景下，并不需要页面整体缩放（viewport 自动处理的也很好了），所以有时只需要合理的布局即可。

**弹性盒适配（合理布局）**

```html
<meta name="viewport" content="width=device-width">
```

使用 flex 布局

```css
section {
  display: flex;
}
```

总结一下，什么样的页面需要做适配（等比缩放）呢

- 页面中的布局是栅格化的

换了屏幕后，到底有多宽多高很难去做设置，整体的都需要改变，所以需要整体的缩放

- 头屏大图，宽度自适应，高度固定的话，对于不同的屏幕，形状就会发生改变（放到ipad上就变成长条了），宽度变化后，高度也要保持等比例变化

以上所有的适配都是宽度的适配，但是在某些场景下，也会出现高度的适配

比如大屏，需要适配很多的电视尺寸，要求撑满屏幕，不能有滚动条，此时若换个屏幕

此时需要考虑小元素用 vh, 宽和高都用 vh 去表示，中间的大块去自适应，这就做到了大屏的适配，屏幕变小了，整体变小了（体验更好），中间这块撑满了屏幕

对于更复杂的场景，需要更灵活考虑，没有一种适配方式可以囊括所有场景。

---

#### 11.15 relative如何定位

(相对于自身偏移)

relative

该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。

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

---







---

## 属性

---

#### 12.1 清除浮动

**参考答案**：

除浮动其实叫做**闭合浮动**更合适，因为是把浮动的元素圈起来，**让父元素闭合出口和入口不让他们出来影响其他的元素**。
在CSS中，clear属性用于清除浮动，其基本语法格式如下：

```css
选择器{clear:属性值;}
/*属性值为left,清除左侧浮动的影响
  属性值为right,清除右侧浮动的影响
  属性值为both,同时清除左右两侧浮动的影响*/
```

1. **额外标签法**

   1.1 末尾标签法
   通过在浮动元素的末尾添加一个空的标签。这是W3C推荐的做法，虽然比较简单，但是添加了无意义的标 签，结构化比较差，所以不推荐使用。下面三种写法都适用：

   ```css
   1. <div style="clear:both"></div>
   2. .clear { clear:both }
       <div class="clear"></div>
   
   3. .clear{ clear:both }
       <br class="clear" />    <!--也可以使用br等别的块级元素来清除浮动-->
   ```

   2.2 内部标签法，把div放进父盒子里，盒子会撑开，一般也不会用。

2. **overflow**

   给父级元素添加overflow样式方法。
   代码比较简洁，可以通过触发BFC方式，但是因为本身overflow的本质是溢出隐藏的效果，所以有的时候也会有一些问题存在，比如内容增多的时候不会自动换行导致内容被隐藏掉，无法显示出要溢出的元素。

   ```css
   .father {
           overflow: auto;  
         /* 加上这句话，就可以清除浮动   overflow = hidden|auto|scroll 都可以实现*/
      }
   ```

   

3. **伪元素法**（最常用）

   3.1 使用after伪元素清除浮动
   after是在父元素中加一个盒子，这个元素是通过css添加上去的，符合闭合浮动思想，结构语义化正确。
   父元素中加一个类名为clearfix 。但是这个方法IE6，7不识别，要进行兼容，使用zoom:1触发 hasLayout来清除浮动
   代表网站：百度、淘宝、网易等

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

   3.2 after伪元素空余字符法
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

   3.3 使用before和after双伪元素清除浮动（推荐）
   **完全符合闭合浮动思想的方法**。
   父元素中加一个类名为clearfix,需要兼容IE6、7
   代表网站：小米、腾讯

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

   ---

#### 12.2 padding , margin 百分比单位依据

   **参考答案**：

   在CSS 盒模型中，依据CSS2.2文档，margin与padding的百分比指定值时，一律参考**包含盒的宽度**。
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

   如下图，包括padding-top/bottom,margin-top/bottom在内，所有padding和margin均是参考的包含块的宽度，故它们的值为200px * 20% = 40px。

---

#### 12.3 父子边距重合

**参考答案**：

**效果：**

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

是如果块元素的margin-top与它的第一个子元素的margin-top之间没有border、padding、inlinecontent、clearance来分隔，或者块元素的 margin-bottom 与它的最后一个子元素的 margin-bottom 之间没有border、padding、inlinecontent、height、min-height、max-height分隔，那么外边距会塌陷。**子元素多余的外边距会被父元素的外边距截断。**

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

#### 12.4 css字体大小设置（三种）.em rem px

**参考答案**：

**px（绝对长度单位）**

相信对于前端来说px这个单位是大家并不陌生，px这个单位，兼容性可以说是相当可以，大家对px的了解肯 定是没有很大的问题的。

**em（相对长度单位）**

**使用：**

1. 浏览器的默认字体都是16px，那么1em=16px，以此类推计算12px=0.75em，10px=0.625em,2em=32px；

2. 这样使用很复杂，很难很好的与px进行对应,也导致书写、使用、视觉的复杂(0.75em、0.625em全是小数点)；

3. 为了简化font-size的换算，我们在body中写入一下代码

   ```css
   body {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */ 
   ```

   这样页面中1em=10px,1.2em=12px,1.4em=14px,1.6em=16px，使得视觉、使用、书写都得到了极大的帮助。

   例子如下：

   ```html
   <div class="font1" style='font-size:1.6em'>我是1.6em</div>
   ```

   缺点：

   1. em的值并不是固定的；

   2. em会继承父级元素的字体大小（参考物是父元素的font-size；）；

   3. em中所有的字体都是相对于父元素的大小决定的；所以如果一个设置了font-size:1.2em的元素在另一个设置了font-size:1.2em的元素里，而这个元素又在另一个设置了font-size:1.2em的元素里，那么最后计算的结果是1.2X1.2X1.2=1.728em

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

**使用：**

1. 浏览器的默认字体都是16px，那么1rem=16px，以此类推计算12px=0.75rem，10px=0.625rem，2rem=32px；

2. 这样使用很复杂，很难很好的与px进行对应,也导致书写、使用、视觉的复杂(0.75rem、0.625em全是小数点) ；

3. 为了简化font-size的换算，我们在根元素html中加入font-size: 62.5%;

   ```css
   html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */  
   ```

   这样页面中1rem=10px,1.2rem=12px,1.4rem=14px,1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助；

   ```html
   <div class="font1" style='font-size:1.6rem'>我是1.6rem=16px</div>
   ```

   特点：

1. rem单位可谓集相对大小和绝对大小的优点于一身

2. 和em不同的是**rem总是相对于根元素**(如:root{})，而不像em一样使用级联的方式来计算尺寸。这种相对单位使用起来更简单。

3. rem支持IE9及以上，意思是相对于根元素html（网页），不会像em那样，依赖于父元素的字体大小，而造成混乱。使用起来安全了很多。

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
- 如果你的用户群都使用最新版的浏览器，那推荐使用rem，如果要考虑兼容性，那就使用px,或者两者同时使用。

---

#### 12.5 css3新特性

通过 CSS3 转换，我们能够对元素进行**移动、缩放、转动、拉长或拉伸**，转换是使元素改变形状、尺寸和位置的一种效果。

通过 CSS3可以创建动画，这些动画可以取代网页中的画图片、Flash 动画以及 JavaScript。

CSS3 中通过@keyframes 规则来创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式（动画开始前的样式）逐渐改为新样式（需要变到的样式）的动画效果。

通过 CSS3够创建多个列来对文本进行布局，就像我们经常看到的报纸的布局一样。

1. CSS3 用户界面

**CSS3 resize**

在 CSS3中resize属性设置是否可由用户调整元素尺寸。

```css
/* 设置div可以由用户调整大小 */
div{
  resize:both;
  overflow:auto;
}

```

**CSS3 box-sizing**

box-sizing属性允许您以确切的方式定义适应某个区域的具体内容。边框计算在width中

```css
/* 规定两个并排的带边框方框 */
div{
  box-sizing:border-box;
  -moz-box-sizing:border-box;        /* Firefox */
  -webkit-box-sizing:border-box;     /* Safari */
  width:50%;
  float:left;
}

```

**CSS3 outline-offset**

outline-offset属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

轮廓与边框有两点不同：

> - 轮廓不占用空间；
> - 轮廓可能是非矩形；

```css
/* 规定边框边缘之外 15 像素处的轮廓 */
  div{
    margin: 30px;
    border: 2px solid black;
    outline: 2px solid red;
    outline-offset: 15px;
    width: 200px;
    height: 200px;
  }
```

---

#### 12.6 css：inline-block 的 div 之间的空隙，原因及解决

**参考答案**：

display:inline-block布局的元素在chrome下会出现几像素的间隙，原因是因为我们在编辑器里写代码的时候，同级别的标签不写在同一 行以保持代码的整齐可读性，即inline-block布局的元素在编辑器里不在同一行，**即存在换行符**，因此这就是著名的inline-block“**换行 符/空格间隙问题**”。如果inline-block元素间有空格或是换行产生了间隙，那是正常的，应该的。如果没有空格与间隙才是不正常的（**IE6/7** block水平元素）。

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

---

---

## 1.2 请问CSS3有哪些新特性？

CSS 为层叠样式表，用来定义页面中的HTML各标签如何显示，控制页面的整体布局与样式。

CSS3为W3C组织发布的最新版CSS，主要有以下新特性：

**1. 选择器**

CSS3增加了很多选择器，以供样式绑定使用，常用的主要有：

:nth-child(n)：匹配其父标签的第n个子元素，不论元素类型，n可以是数字、关键字、公式

:nth-of-type(n)：选择与之其匹配的父元素的第N个子元素

:frist-child：相对于父级做参考，“所有”子元素的第一个子元素，并且“位置”要对应

:empty：选择没有子元素的每个元素

[abc*="def"]：选择adc属性值中包含子串"def"的所有元素

  **2. 动画**

CSS3新增创建动画方法，通过@keyframes 规则创建动画，在规则中指定 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果，用百分比来规定变化发生的时间，或用"from" 和 "to"（等同于 0% 和 100%）

利用animation属性将动画绑定到指定选择器上，至少绑定动画名称与时长

  **3. 形状变换**

CSS3新增了transform属性实现元素的旋转、缩放、倾斜平移等形状变换。主要有以下新方法：

translate()：元素从当前位置在x 坐标、y 坐标上移动

rotate()：元素顺时针旋转给定的角度（负值则逆时针旋转）

scale()：通过向量形式定义的缩放值来放大或缩小元素尺寸

skew()：元素按照一定的角度进行倾斜转换

  **4. 文本**

CSS3新增text-shadow属性可实现文本阴影，text-overflow属性可规定当文本溢出盒子时呈现效果

  **5. 边框**

CSS3新增边框属性，可呈现更多的边框效果，有以下3个边框属性：

border-radius：创建圆角矩形

box-shadow：给盒子添加阴影效果

border-image：可利用图片创建边框

  **6. 过渡**

CSS3提供transition 属性呈现元素由A样式过渡至B样式，常用两个值定义过渡效果：transition-property：过渡的属性列表，transition-duration：过渡持续的时间

  **7.** **盒模型定义**

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用CSS实现准确布局、处理元素排列的关键。

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。模型定义了盒的每个部分 —— margin, border, padding, and content —— 合在一起就可以创建我们在页面上看到的内容。为了增加一些额外的复杂性，有一个标准的和替代（IE）的盒模型。

[盒模型的各个部分](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#盒模型的各个部分)

 CSS中组成一个块级盒子需要:

- **Content box**: 这个区域是用来显示内容，大小可以通过设置 [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height).
- **Padding box**: 包围在内容区域外部的空白区域； 大小通过 [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 相关属性设置。

CSS3增加了新的用户界面属性来调整标签尺寸、盒尺寸以及外部轮廓等，常用属性有：

resize：指定一个标签可由用户调整大小

outline-offset：对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓

box-sizing：允许以确切的方式定义适应某个区域的具体内容，可定义盒模型，有三个值：content-box：边框和padding不包含在元素的宽高之内、border-box：边框和padding包含在元素的宽高之内、inherit：从父标签继承 box-sizing 属性值

 **8.Flex布局**

弹性布局，使页面布局更加方便与灵活，舍弃传统上下排列页面元素，采用双轴排列方式，水平主轴与垂直交叉轴，并按照比例对元素进行放大与缩小，可利用简洁语法实现自适应布局

通过6个属性设置**容器属性**：flex-direction、flex-wrap、flex-flow、justify-content、align-items、align-content，设置容器的轴线方向、元素对齐方向、换行

通过6个属性设置**元素属性**：order、flex-grow、flex-shrink、flex-basis、flex、align-self，设置元素的排列顺序、放大/缩小比例、多余空间分配方案、对齐方案

---

### 1.盒模型与宽高计算方式？

前端页面都由一个个盒子组成，每个盒子由content、padding、border、margin4部分组成。目前主要有两种盒模型：标准盒模型与IE盒模型（怪异盒模型），不同盒模型盒子的宽高值不同

标准盒模型：width 和 height 指content区域的宽度和高度，增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸

IE盒模型（怪异盒模型）：width 和 height 指content+border+padding的宽度和高度

如何设置盒模型？

1、若定义了完整的<!DOCTYPE>声明，会直接触发标准盒模型，若<!DOCTYPE>声明缺失，则会由浏览器自己判定，IE浏览器中IE9以下（IE6.IE7.IE8）的版本触发IE盒模型，其他浏览器会默认为标准盒模型

2、可通过box-sizing属性来设置盒模型解析模式：

- content-box： 默认值，border和padding不算到width范围内，可以理解为标准盒模型，
- border-box：border和padding划到width范围内，可以理解为怪异盒模型

**[标准盒模型]**

在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是 *content box*。 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。

假设定义了 `width`, `height`, `margin`, `border`, and `padding`:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

如果使用标准模型宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)，padding 加 border 再加 content box。

> **注**: margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin。

[替代（IE）盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#替代（ie）盒模型)

你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且你的想法是对的! 因为这个原因，css还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。 这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。

```css
.box {
  box-sizing: border-box;
} 
```

如果你希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>` 元素上，然后设置所有元素继承该属性，正如下面的例子。如果想要深入理解，请看 [the CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)。

```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

---

### 2.[块级盒子（Block box） 和 内联盒子（Inline box）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#块级盒子（block_box）_和_内联盒子（inline_box）)

在 CSS 中我们广泛地使用两种“盒子” —— **块级****盒子** (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**方面表现出不同的行为:

一个被定义成块级的（block）盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。

如果一个盒子对外显示为 `inline`，那么他的行为如下:

- 盒子不会产生换行。
-  [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

[补充: 内部和外部显示类型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#补充_内部和外部显示类型)

在这里最好也解释下**内部** 和 **外部** 显示类型。如上所述， css的box模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照 **[正常文档流](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)** 布局，也意味着它们和其他块元素以及内联元素一样(如上所述).

但是，我们可以通过使用类似 `flex` 的 `display` 属性值来更改内部显示类型。 如果设置 `display: flex`，在一个元素上，外部显示类型是 `block`，但是内部显示类型修改为 `flex`。 该盒子的所有直接子元素都会成为flex元素，会根据 [弹性盒子（Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) [）](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)规则进行布局，稍后您将了解这些规则。

---



## 1.3 请问你了解行内元素、块级元素、空元素吗，它们如何互相转换？

- 行内元素、块级元素、空元素定义

行内元素（内联元素）：与其他元素水平方向依次排列，处于同一行，通常不会以新行开始，宽度就是内容的宽度，不可改变

块级元素：总在新一行开始，一个元素独占一行，宽度默认100%（继承父元素宽度）

两者区别总结如下表：

|                   | 行内元素                                                     | 块级元素                                                     |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 容纳内容          | 只能容纳文本或其他内联元素                                   | 容纳内联元素或其他块元素                                     |
| 设置宽度width     | 无效                                                         | 有效                                                         |
| 设置高度height    | 无效                                                         | 有效                                                         |
| 设置内边距padding | 左右有效，上下无效                                           | 有效                                                         |
| 设置外边距margin  | 左右有效，上下无效                                           | 有效                                                         |
| 常见元素          | <a>、<span>、<strong>、<i>、 <button>、<em>、<label>、<textarea>、<kbd>...... | <div>、<hn>、<p> 、<ul>、<ol>、<li>、<header>、<footer>、<form>、<nav>...... |

**空元素**：官方术语为**自闭合标签**，没有内容的 HTML 元素，没有闭合标签，在开始标签就关闭了，常见标签：

```
<br>、<hr>、<img>、<input>、<link>、<meta>
```



----

### 1.行内元素和块级元素转换方式

**1、display属性**

display：inline-block 行内元素——>行内块元素

display：block 行内元素——>块级元素

display：inline 块级元素——>行内元素

**2、float**

设置行内元素float：left/right，则该行内元素**隐式转换**为块级元素 ，且有浮动特性

**3、position**

设置行内元素position：absolute/fixed 会把行内元素**隐式转换**为块级元素，且有定位特性

---

### 2.置换元素定义与特点？

置换元素：内容不受CSS视觉格式化模型控制，渲染模型不考虑对此内容渲染，拥有固定尺寸的元素（有且仅有置换元素有固定尺寸），浏览器依据元素的标签和属性来决定具体显示内容，又名**替换元素**

块级元素包含置换元素、非置换元素；行内元素同样包含置换元素、非置换元素；行内置换元素有可修改的宽高属性，其默认值即元素的固有宽高

常见置换元素有：视图元素<img>、<object>、<video>等

表单元素<textarea>、<input>、<select>等

某些元素只在一些特殊情况下表现为可替换元素，如 <audio>、<canvas>等

---

### 3. 空元素

一个**空元素（empty element）**可能是 HTML，SVG，或者 MathML 里的一个不能存在子节点（例如内嵌的元素或者元素内的文本）的[element](https://developer.mozilla.org/zh-CN/docs/Glossary/Element)。

[HTML](https://www.w3.org/html/wg/drafts/html/CR/)，[SVG](https://www.w3.org/TR/SVG2/) 和 [MathML](https://www.w3.org/Math/draft-spec/) 的规范都详细定义了每个元素能包含的具体内容（define very precisely what each element can contain）。许多组合是没有任何语义含义的，比如一个 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 元素嵌套在一个 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr) 元素里。

在 HTML 中，通常在一个空元素上使用一个闭标签是无效的。例如， `<input type="text"></input>` 的闭标签是无效的 HTML。

在 HTML 中有以下这些空元素：

```html
<area>
<base>
<br>
<col>
<colgroup> when the span is present
<command>
<embed>
<hr>
<img>
<input>
<keygen>
<link>
<meta>
<param>
<source>
<track>
<wbr>
```

**Note**: 在极少数情况下，空元素被错误地称为“无效元素”(void elements)。

----

## 1.4 请问CSS选择器有哪些，应该如何计算优先级？

CSS选择器可将CSS样式表与HTML元素进行一一绑定，实现一对一，一对多、多对一的样式控制。CSS样式具有三大特性：继承、 优先级和层叠

**继承**：即子类元素继承父类的样式

**优先级**：指不同类别样式的权重比较

**层叠**：当数量相同时，后者覆盖前者

CSS选择器分类众多，主要可分为以下几类：

| 标签选择器                 | 如：body,div,p,ul,li                                   |
| -------------------------- | ------------------------------------------------------ |
| 类选择器                   | 如：class="head",class="head_logo"                     |
| ID选择器                   | 如：id="name",id="name_txt"                            |
| 全局选择器（通配符选择器） | 如：*号                                                |
| 组合选择器                 | 如：.head .head_logo（各选择器用空格键分开）           |
| 后代选择器                 | 如：#head .nav ul li 从父集到子孙集的选择器            |
| 群组选择器                 | div,span,img {color:Red} 即具有相同样式的标签分组显示  |
| 继承选择器                 | 如：div p（各选择器用空格键分开）                      |
| 伪类选择器                 | 如：a元素的伪类，4种状态：link、visited、active、hover |
| 字符串匹配属性选择器       | 如：^  $  *三种，分别对应开始、结尾、包含              |
| 子选择器                   | 如：div>p （大于号>分隔）                              |
| 相邻选择器                 | 如：h1+p（加号+分隔）                                  |

CSS优先级算法：

对于同一优先级选择器，后写的会覆盖先写的样式

当两个不同选择器都作用到同一个HTML元素时，如果定义的属性值有冲突，那么应该受哪个选择器控制？CSS有一套固定的优先级排序：

属性后面使用!important > 作为style属性行内样式>ID选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器= 伪元素选择器 > 通配符选择器 > 继承选择器 > 浏览器默认属性

当有多个级别组合的选择器时，往往利用上述优先级排序无法得出优先级，故有以下优先级计算方式：

每个选择器对应一个初始"四位数"：0、0、0、0

若是 行内选择器，则加1、0、0、0

若是 ID选择器，则加0、1、0、0

若是 类选择器/属性选择器/伪类选择符，则分别加0、0、1、0

若是 标签选择器/伪元素选择器，则分别加0、0、0、1

最终优先级由级别权重与出现次数决定，统计元素对应的所有选择器的权重与次数，最终得到的”四位数“，从左到右进行比较，大的优先级越高。

需注意：

- !important的优先级是最高的，但出现冲突时则需比较“四位数”
- 通配符选择器、子选择器、相邻选择器、同胞选择器权重值为0
- 优先级相同时，则采用就近原则，选择最后出现的样式

---

### 1.优先级

浏览器通过**优先级**来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类[选择器](https://developer.mozilla.org/en-US/CSS/CSS_Reference#selectors)组成的匹配规则。

优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。

而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。

当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

[选择器类型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity#选择器类型)

下面列表中，选择器类型的优先级是递增的：

1. [类型选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)（例如，`h1`）和伪元素（例如，`::before`）
2. [类选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) (例如，`.example`)，属性选择器（例如，`[type="radio"]`）和伪类（例如，`:hover`）
3. [ID 选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)（例如，`#example`）。

**通配选择符**（universal selector）（[`*`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)）**关系选择符**（combinators）（[`+`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator), [`>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator), [`~`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator), ['` `'](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator), [`||`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Column_combinator)）和 **否定伪类**（negation pseudo-class）（[`:not()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)）对优先级没有影响。（但是，在 `:not()` 内部声明的选择器会影响优先级）。

给元素添加的**内联样式** (例如，`style="font-weight:bold"`) 总会覆盖外部样式表的任何样式 ，因此可看作是具有最高的优先级。

---

### 2. [`!important` 例外规则](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity#!important_例外规则)

当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，`!important` 与优先级无关，但它与最终的结果直接相关。使用 `!important` 是一个**坏习惯**，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找bug变得更加困难了。当两条相互冲突的带有 `!important` 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。

**一些经验法则：**

- **一定**要优先考虑使用样式规则的优先级来解决问题而不是 `!important`
- **只有**在需要覆盖全站或外部 CSS 的特定页面中使用 `!important`
- **永远不要**在你的插件中使用 `!important`
- **永远不要**在全站范围的 CSS 代码中使用 `!important`

- **与其使用** **`!important`****，你可以：**

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

3. 对于（2）的一种特殊情况，当您无其他要指定的内容时，请复制简单的选择器以增加特异性。

   ```css
   #myId#myId span { color: yellow; }
   .myClass.myClass span { color: orange; }
   ```

   

什么的情况下可以使用 `!important`：

A) 覆盖内联样式

你的网站上有一个设定了全站样式的 CSS 文件，同时你（或是你同事）写了一些很差的内联样式。

全局的CSS文件会在全局范围内设置网站的外观，而直接在各个元素上定义的内联样式可能会覆盖您的全局CSS文件。 内联样式和!important都被认为是非常不好的做法，但是有时你可以在CSS文件里用!important去覆盖内联样式。

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

B) 覆盖优先级高的选择器

```css
#someElement p {
  color: blue;
}

p.awesome {
  color: red;
}
```

在外层有 `#someElement` 的情况下，你怎样能使 `awesome `的段落变成红色呢？这种情况下，如果不使用 `!important` ，第一条规则永远比第二条的优先级更高

**怎样覆盖** `!important`

A)很简单，只需再添加一条 带 `!important` 的CSS规则，再给这个给选择器更高的优先级（添加一个标签，ID或类）；或是添加一样选择器，把它的位置放在原有声明的后面。

一些拥有更高优先级的例子：

```css
   table td { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
```



B)或者使用相同的选择器，但是置于已有的样式之后：

```css
td { height: 50px !important; }
```

C)或干脆改写原来的规则，以避免使用 `!important`。

```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

将id作为属性选择器的一部分而不是id选择器，将使其具有与类相同的特异性。 上面的两个选择器现在具有相同的权重。 在优先级相同情况下，后面定义的CSS样式会被应用。

---

## 1.5 请问伪元素与伪类有什么区别？

伪类：本质上是为了弥补常规CSS选择器的不足，存在DOM文档中(无标签，找不到，只有符合触发条件时才能看到 )，逻辑上存在但在文档树中却无须标识的“幽灵”分类。

伪元素：本质上是创建了一个有内容的虚拟容器，不实际存在于DOM文档树中，仅在逻辑上存在，是虚拟的元素，代表某个元素的子元素

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

- 伪类是通过添加“class类”来实现，伪元素是通过添加“元素”来实现，**二者本质区别：是否创造了新元素**
- **可同时使用多个伪类**，而只能同时使用一个伪元素，伪类可理解为添加类，所以可以多个，**而伪元素在一个选择器中只能出现一次，并且只能出现在末尾**
- 伪类和伪元素的语法不同：伪类单冒号，如：:link 、:hover ；伪元素双冒号，如：::after、::before

常见的伪类及功能分类如下图可见：

![img](E:\pogject\学习笔记\image\js\常见的伪类及功能分类)

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

---

## 1.7 请问你了解哪些CSS常用单位？

可将单位分为绝对单位与相对单位，**绝对单位**即固定长度的单位，不会变化，主要有：pt：Points 磅、in：Inches 英寸、mm：Millimeter 毫米、cm：Centimeter 厘米、q：Quarter millimeters 1/4毫米。

**相对单位**会随着参考值得变化而变化，在开发中使用频率更高，主要有：

- **px：**Pixel CSS像素，是web页面图像显示的基本单元，区别于物理像素，不是一个确定的物理量，也不是一个点或者小方块，而是CSS中的一个抽象概念，是一个相对单位，受上下文影响，默认情况（zoom100%）下1个CSS像素等于1个物理像素，若手动将页面放大或缩小，1个CSS像素就不等于1个物理像素。

在一些高PPI（每英寸像素数）的设备上，1个CSS像素默认相当于多个物理像素。比如iPhone的屏幕对比一般的手机屏幕会看起来更精细清晰一些，iPhone6、7、8都是两倍屏手机，1个CSS像素等于2个物理像素，对比一般的手机屏幕会看起来更清晰一些。

- **rem：**Root element meter 通过根文档（ body/html ）内文本的字体尺寸计算尺寸，如下代码示例，若未指定字体大小则为浏览器默认字体大小（浏览器默认字体大小为16px)。

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

- **em：**Element meter 通过当前对象内文本的字体尺寸计算尺寸，若未指定字体大小则继承自上级元素，直至 body，若body未指定则为浏览器的默认字体尺寸。

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
  - 定位relative：top、bottom相对父元素的高;  left 、right相对于父元素的宽进行计算
  - border-radius：**相对自身标签的宽高**设置每个边角的**垂直和水平**半径
  - margin: left、right、top、bottom**相当于父元素的宽度**进行计算
  - 定位absolute：top、bottom**相对定位元素**的高；left 、right相对于定位元素的宽进行计算，同时位于absolute中的其他属性如width heiht margin等**都对当于定位元素**进行计算
  - line-hight设置内联元素垂直居中时，%**相对于文本的行高**进行计算，非父元素

- **vh vw：**view height/view width，相对于视口的高度和宽度，视口指屏幕可见范围，1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度。假设浏览器高度950px，宽度为1920px, 1 vh = 950px/100 = 9.5 px，1vw = 1920px/100 =19.2 px

---

1. **物理像素与CSS像素有什么换算关系呢？**

CSS像素*DPR = 物理像素

像素比（DPR）：一个CSS像素占用几个物理像素

---

## 2.1 请问有哪些CSS浏览器兼容问题以及解决方案？

目前，浏览器厂商众多，Chrome，Frirefox，Safari，Edge，IE6……对于同一段CSS代码，不同厂商、甚至同一厂商不同版本的解析效果极大可能不一致，其根本原因是浏览器内核不同，这就导致了页面显示效果不统一，产生了CSS兼容性问题

目前对兼容问题的解决方案：

- **浏览器CSS样式初始化**

在所有CSS开始前，对某些属性初始化，以防不同浏览器的显示效果不一样，通常不推荐一味地使用通配符统一初始化样式

```css
*{
 margin: 0;
 padding: 0;
}
```

- **浏览器私有属性**

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

- **CSS hack语法（**一般情况下，尽量避免使用CSS hack，过多滥用会造成html文档混乱，不易管理与维护）

1. **条件hack**，IE浏览器专有的hack方式，微软官方推荐

```css
<!--[if IE]> 	
这段文字只在IE浏览器显示 	
<![endif]-->
<!--[if gte IE 6]> 	
这段文字只在IE6以上(包括)版本IE浏览器显示 	
<![endif]-->
```

  **2.** **属性级hack** CSS样式属性名前加上一些只有特定浏览器才能识别的hack前缀，以达到预期的页面展现效果

```css
.test {
  color: red; /* All browsers */
  *color: blue;  /* IE7，IE6 */
  _color: skyblue;  /* IE6 */
}
```

  **3.** **选择符级hack，**在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀

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

- **自动化插件**

在解析CSS文件时，插件会自动添加浏览器前缀至CSS代码中，如Autoprefixer

---

## 2.2 请问Flex的常见写法：flex:1表达什么含义？

虽说Flex具有众多属性，但在实际开发常简写为：flex：1，再结合display：flex，就能轻松打造出自适应布局，这也是Flex布局最大的优势。实际上flex为：flex-grow flex-shrink flex-basic三者的缩写。

flex-grow：定义在分配多余空间时，盒子的放大比例，默认为0，**即存在剩余空间，也不放大**

flex-shrink：定义在分配多余空间时，盒子的缩小比例（多余空间可能是负值），默认为1，**即空间不足将缩小**

flex-basis：定义在分配多余空间之前，**盒子占据的主轴空间**（可理解为基准值），通常根据该属性计算多余空间，默认为auto，即盒子自身大小

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
- 0：盒子本身大小，当盒子大小未定义时，按其内容来来计算
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

## 2.3 请问清除浮动有哪些常用方法？

目前常用清除浮动的方法主要有：

  **1.** **给父元素添加 overflow：hidden（BFC布局）**

overflow：hidden为隐藏溢出，当内容超过其父元素时，可以用该方式将溢出的部分裁剪掉，使页面更加美观

当子元素浮动，给父元素添加overflow：hidden，按照该属性特性，将子元素超出的部分截掉，但是子元素有浮动，无法裁剪，只能父元素增加高度去包裹住子元素，从而使得父元素拥有高度，且高度随子元素自适应变化，从而清除浮动效果

代码比较简洁，可以通过触发BFC方式，但是因为本身overflow的本质是溢出隐藏的效果，所以有的时候也会有一些问题存在，比如内容增多的时候不会自动换行导致内容被隐藏掉，无法显示出要溢出的元素。

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

这里父容器是没有设置固定高度的，本来第一个子元素浮动之后，父元素的高度会塌陷到跟第二个子元素一样高，但由于这里分别给第二个子元素和父元素都设置了overflow:hidden ，所以它们都生成了一个新的BFC区域，根据上文提供的BFC布局规则可以得知：**BFC区域不会与float box 重叠**；**计算BFC高度时浮动元素的高度也参与计算**。所以就得到清除浮动的效果。说得比较绕，但其实清除浮动得根据自己开发中的实际情况合理使用。  

**2. 给需要清除浮动元素添加clear:both**

clear: both：元素的左侧和右侧均不允许出现浮动元素（摘自W3C），添加了 clear属性的元素只能通过调整自身来使自己不要和浮动元素排列在一起，不能移动别的元素。若一个元素同时设置了 float：left 和 clear：left，左边不能有浮动元素，那么这个元素就要调整自己，排到下一行，因设置了 float: left，这个元素会往左边靠拢，所以这个元素会跑到下一行，同时往左浮动

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

  **3. 给浮动元素下方添加空盒子**

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

  **4. 利用after伪元素清除浮动::after**

该种方式的原理和方法3一样，添加一个内容为空的伪类，同时清除浮动（一般用clear:both），**这里用伪类代替了空盒子，避免增加无意义标签**

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
.clearfix:after{
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
</style>

<body>
<div class="wrap clearfix">
   <div class="float">浮动</div>
   <div class="nofloat">不想被浮动影响</div>
</div>
```

**5. 利用after伪元素空余字符法**

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

  **6.** **让父元素也浮动**

以浮制浮，父元素与子元素一起脱离文档流浮动，这样父元素就能自适应子元素高度，此方法有较大弊端，一定会影响父元素之后的元素排列，影响页面整体布局

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

  **7. 给父元素添加固定高度**

此方法仅适用于子元素高度已知并且固定情况

----

## 2.4 请问有哪些常见margin问题，有什么解决办法？

### **1. 父元素margin塌陷,父子边距重合**

边界重叠是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界。

只发生在垂直方向，父元素和第一个/最后一个子元素设置了同方向的margin值，两个属性之间没有其他内容进行隔离，导致父元素margin-top/margin-bottom塌陷

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

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/1696b9ade2b71502.png)

而实际上效果如下:

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/1696b9aded524e48.png)

在这里父元素的高度不是 110px，而是 100px，在这里发生了高度坍塌。

**产生原因：**

 是如果块元素的 `margin-top` 与它的第一个子元素的 `margin-top` 之间没有 `border`、`padding`、`inline` `content`、 `clearance` 来分隔，或者块元素的 margin-bottom 与它的最后一个子元素的 margin-bottom 之间没有 `border`、`padding`、`inline` `content`、`height`、`min-height`、 `max-height` 分隔，那么外边距会塌陷。**子元素多余的外边距会被父元素的外边距截断。**

**解决办法**：

父子元素的边界重叠得解决方案： 在父元素上加上 overflow:hidden;使其成为 BFC。

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
- **触发BFC布局**，改变父级元素渲染规则，将父级元素独立，可给父级盒子添加：position：absolute/fixed、display：inline-block、float：left/right、overflow：hidden等一些触发BFC的属性，但是使用的时候都会带来不同的问题，具体使用中还需根据具体情况选择
- 给子元素前面添加一个空的兄弟元素，其overflow设为hidden，起隔离作用

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

重叠意义：外边距的重叠只产生在普通流文档的上下外边距之间，这个看起来有点奇怪的规则，其实有其现实意义。设想，当我们上下排列一系列规则的块级元素（如段落P）时，那么块元素之间因为外边距重叠的存在，段落之间就不会产生双倍的距离。

解决方法： 

外层元素padding代替
内层元素透明边框 border:1px solid transparent;
内层元素绝对定位 postion:absolute:
外层元素 overflow:hidden;
内层元素 加float:left;或display:inline-block;
内层元素padding:1px;

----

###  **2. 同级元素margin重叠**

只发生在垂直方向，在同一个BFC区域内，相邻的兄弟元素会出现margin重叠情况，通常是上一个盒子的margin-bottom和下一个盒子的margin-top，叠加后的间距通常是：**两者为正取大值**（如下图所示效果），**一正一负/两者为负取两者之和**

![img](https://uploadfiles.nowcoder.com/images/20210930/897353_1632985623694/974EDA43625E4786A64431DC1560371A)

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

**分析原因：**在于child1的margin-bottom的参照元素是child2，而child2的margin-top的参照元素恰好是child1，这就导致了它俩之间的间距就会以**两值中最大的那个**为实际效果。这个现象其实和我们生活中很多场景很像，仔细想想应该不难理解。

常见解决办法：

触发BFC布局，改变元素渲染规则，将其中一个元素独立出来

**解决方法**：只设置一个元素的margin-top或者margin-bottom，避免margin重叠。 

```

```

---

###  **3. 空元素自身margin重叠**

若一个无内容的空元素，同时设置了margin-top与margin-bottom，则会发生重叠，如下图所示效果

![img](https://uploadfiles.nowcoder.com/images/20210930/897353_1632985644955/FF6C2EB8F4D5CC20E8B3FCF9601FC281)

---

## 2.5 请问display:none、visibility:hidden、opacity:0有什么异同点？

相同点：都可以让网页中某个元素隐藏

不同点：

- **空间占据**

display:none：元素没有被渲染，不存在于Render Tree中，不保留元素位置，在页面上彻底消失，可理解为：看不见摸不到

visibility:hidden：存在于Render Tree中，元素在网页上不可见，但元素位置没有改变，可理解为：看不见但摸得到

opacity:0 ：会占据空间

- **子元素**

display:none：所有子元素都会被隐藏，占据的空间会消失，不可点击，也不可被访问

visibility:hidden：具有继承性，给父元素设置，子元素也会继承，但若重新给子元素设置visibility: visible，子元素又会显示

opacity:0 ：具有继承性，**不能**通过设置子元素的 opacity:1 使其显示

- **DOM结构**

display:none：影响DOM结构，会触发回流，计数器不会计数，浏览器渲染开销大

visibility:hidden：不影响DOM结构，计数器仍运行，只会触发重绘

opacity:0 ：只会触发重绘

- **事件绑定**

display:none和visibility:hidden：元素上绑定的事件无法触发

opacity:0 ：元素上绑定的事件可以触发

---

## 2.6 请问src和href有什么异同点？

相同点：都具有引用功能

不同点：

**href：**表示超文本引用，通常用于link、a等元素，**href是引用和页面关联**，在当前元素和引用资源之间建立联系

**src：**source的缩写，表示资源引用，通常用于img，script，iframe等元素，**指向外部资源的位置**，指向的内部会迁入到文档中当前标签所在的位置；在请求src资源时会将其指向的资源下载并应用到当前文档中，如js脚本，img图片等元素

href和src的区别
1.href：Hypertext Reference的缩写，超文本引用，它指向一些网络资源，建立和当前元素或者说是本文档的链接关系。在加载它的时候，不会停止对当前文档的处理，浏览器会继续往下走。常用在a、link等标签。

```html
<a href="http://www.baidu.com"></a>
<link type="text/css" rel="stylesheet" href="common.css">
```

如上面所显示的那样，当浏览器加载到link标签时，会识别这是CSS文档，并行下载该CSS文档，但并不会停止对当前页面后续内容的加载。这也是不建议使用@import加载CSS的原因。

2.src：source的所写，表示的是对资源的引用，它指向的内容会嵌入到当前标签所在的位置。由于src的内容是页面必不可少的一部分，因此浏览器在解析src时会停下来对后续文档的处理，直到src的内容加载完毕。常用在script、img、iframe标签中，我们建议js文件放在HTML文档的最后面。如果js文件放在了head标签中，可以使用window.onload实现js的最后加载。

```html
<img src="img/girl.jpg">
  
<frame src="top.html">
  
<iframe src="top.html">
  
<script src="show.js">
```

总结：href用于建立当前页面与引用资源之间的关系（链接），而src则会替换当前标签。遇到href，页面会并行加载后续内容；而src则不同，浏览器需要加载完毕src的内容才会继续往下走。

---

# 页面布局

---

## 3.1 请问定位布局position属性有哪些取值？

定位布局：页面元素CSS样式采用position属性，可在top/bottom/right/left四个方向进行位置移动，从而达到定位效果，position属性可取以下7个值：

  **1. 相对定位 relative**

- 不会使元素脱离文档流（原本位置会被保留，即改变位置也不会占用新位置）
- 相对于自身原本位置移动（没有定位偏移量则对元素无影响）
- 不影响元素本身特性（无论块级元素或行内元素，保留其原本特性）
- 常用于提升层级，从而改变元素覆盖关系，若两个都为定位元素，后面的会覆盖前面

  **2. 绝对定位 absolute**

- 使元素完全脱离文档流（在文档流中不再占原来位置）
- 行内元素设置定位效果后，支持设置宽高
- 区块元素设置定位效果后，未设置宽度时由内容撑开宽度
- **相对于最近一个有定位的父元素进行偏移**，如果不存在就逐级向上排查，直到相对于body元素，即相对于浏览器窗口（必须有参照物）
- 子绝父相，一般配合相对定位使用，（将父元素设置相对定位，子元素相对于父元素偏移）
- 可提升层级

  **3. 固定定位 fixed**

- 直接相对于浏览器窗口进行“绝对定位”
- 浮动在页面中，元素位置不会随浏览器窗口滚动条滚动而变化
- 不会受文档流动影响

  **4. 粘性定位 sticky**

- 基于用户的滚动来定位，在相对定位与绝对定位两者间切换。滚动前相当于position:relative，当页面滚动超出目标区域时，相当于position:fixed，会将元素固定在目标位置
- 相对于离它最近的具有滚动框的父级元素，如果父级元素都不可以滚动，那相对于浏览器窗口计算偏移量
- 如top: 50px，在sticky元素到达距离相对定位的元素顶部50px的位置时固定，无论怎么滚动，都不再向上移动
- 兼容性不好，如Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位，通常需要结合CSS3兼容方案

  **5. 静态定位 static**

- 默认定位，遵循正常的文档流
- 元素不会受到影响

  **6. 继承值 inherit**

- 从父元素继承 position 属性值

  **7. 初始值 initial**

- initial 关键字可用于任何 HTML 元素上任何 CSS 属性
- 可将所有CSS属性恢复到初始状态

---

###  **1. fixed定位会出现失效情况吗？有什么解决办法吗？**

存在常见3种fixed定位失效情况：

    (1) 父元素的transform属性值不为none时，子元素的fixed失效（比较常见，仅在部分浏览器中失效）
    
    失效原因：当元素祖先的 transform 属性非 none 时，**定位容器由视口改为该祖先**（摘自MDN）
    
    解决办法：
    
    经过实验发现，absolute定位在该情况下不会失效，**可利用absolute定位模拟fixed效果**，

主要**实现思路**：将html的滚动条禁用，开启body滚动条，对该元素absolute定位，并不设置父级元素定位，会相对document定位，但其滚动条未开启，不会受body滚动影响

```

```

   (2)  perspective属性值不为none时（不常见）

    浏览器都不支持 perspective 属性，Chrome 和 Safari 支持替代的 -webkit-perspective 属性，目前可行办法就是删掉perspective属性
    
    (3)  元素的will-change中指定了任意 CSS 属性
    
    目前可行办法就是尽量避免给fixed定位元素设置will-change

---

## 3.2 请问你了解浮动布局float属性吗？

浮动布局：为方便页面设计，给元素设置float属性，将元素脱离文档流，浮动框进行左右移动，直至外边缘遇到包含框或者另一个浮动框边缘，**再通过margin属性调整位置**，float属性可取3个值：left：左浮动、right：右浮动、none：不浮动（默认）

浮动的影响：

- 改变块级元素的排列方式，内容从上下排列显示变成水平排列显示
- 浮动元素会脱离文档流，**不占位**，盒子重叠，内容不重叠
- 浮动的块级元素的宽度由内容撑开，行内元素可设宽高、margin和padding均有效，**可理解为隐式转换为inline-block元素**

---

### 1. 浮动布局最常产生什么问题？

通常父级盒子不设置高度时，高度将由内容或子元素撑开，当子元素浮动脱离文档流后， 父盒子就会出现高度塌陷，边框变成一条线，通常需要清除浮动来解决该问题

---

### 2.怎么理解css文档流/元素脱离文档流后有什么特点

文档流处在文档的最底层，它规定了一个页面的位置和元素布局等规则。
我们所创建的元素都处在文档流中，文档流所指定的规则比如块级元素独占一行，内联元素不会独占一行，内联元素不能设置高宽，父元素的高度由子元素撑开等。文档流之所以称为流，是它的布局像流一样从上到下在从左到右。
而元素脱离文档流之后，该元素便不再遵循文档流的规则，比如块级元素不再独占一行，内联元素脱离文档流之后可以设置高宽，脱离的元素不能撑开父元素，不再在文档流中占有位置等。
而脱离文档流的设置有两种：float，position：absolute

1、float
（我的理解是通过设置float来脱离文档流，脱离后的元素会遵循文档流之外的另一套规则，暂且称为浮动规则）。
规则如下：
①、产生字围效果，元素不会盖住文字，文字会绕着元素布局。
②、元素层级提高，会盖住非浮动的元素。
③、父元素的垂直外边距不会和子元素重叠。
④、浮动元素不会超过超过上面的非浮动元素，会排列在非浮动块元素的下一行。
⑤、元素浮动后会尽量向页面的左上或右上浮动，直到遇到父元素边框或其它浮动元素（浮动的元素不会脱离父元素，浮动还是相对于父元素浮动）。
⑥、浮动的元素不会超过它上边的兄弟元素，最多一边齐。
⑦、文档流中子元素的宽度默认为父元素的100%，脱离文档流之后，块元素的高宽度都只能由内容撑开，而且浮动的子元素无法撑开父元素（除非父元素也是浮动元素）。
⑧、内联元素浮动后会变成块级元素。

2、position:absolute
（我的理解是通过设置绝对定位来脱离文档流，脱离后的元素会遵循文档流之外的另一套规则，暂且称为绝对定位规则）。
规则如下：
①、 绝对定位是相对于离他最近的开启了定位的祖先元素进行定位的，没有这种祖先元素，则相对于浏览器窗口（以左上角为坐标（0，0））
②、定位元素会提高一个层级。
③、内联元素变块级元素，高宽都只能由内容撑开。
④、当一个文档流中的元素前的一个元素开启了绝对定位，则这个文档流中的元素会向上移动，被前元素覆盖。（其实跟浮动规则差不多），如果没有这样的情况，则开启了绝对定位的元素如果不设置偏移量，位置不会发生变化。

浮动规则≠绝对定位规则，两者不相通
这句话的意思是一个浮动元素和一个定位元素会重叠，且绝对定位元素的层级高于浮动元素的层级（按照浮动规则，浮动的兄弟元素是不会相互覆盖的）。

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

（当两个元素都开启绝对定位且不设置偏移量时，两个元素也会像上面这个图一样相互覆盖）

---

## 3.3 请问BFC布局有哪些特点、触发条件以及实际应用？

BFC（Block Formatting Context）：格式化上下文，也称BFC布局，是Web页面中盒模型布局的CSS渲染模式，**指一个独立的渲染区域，与其他元素隔离，不受外部布局影响**

BFC布局特点：

- 在BFC区域内，内部盒子会在垂直方向上一个接一个地放置
- 在BFC区域内，内部盒子垂直方向上的距离由margin决定。（可理解为：属于同一个BFC的两个相邻盒子的上下margin会发生重叠）
- 同一个BFC区域内，**设置了float属性的盒子不会重叠**
- BFC就是页面上的一个隔离的独立容器，容器内外元素互不影响
- 计算BFC的高度时，区域内的浮动元素也参与计算

BFC布局触发条件（满足任意一个即可形成BFC）：

- 根元素<html>
- 浮动元素：float不为none
- 绝对定位元素：position（absolute、fixed）
- display为inline-block、table-cells、table-caption、flex、inline-flex
- overflow不为visible（hidden、auto、scroll）

BFC布局实际应用：

- 清除浮动，通过设置overflow:hidden解决父元素坍塌问题
- 垂直margin合并，BFC区域内两个相邻元素的垂直外边距会发生叠加，**叠加后的外边距为两者外边距的最大值。这样可保持各区域间上下间距一致**，比如多个段落之间与顶部底部的边距保持一致
- 防止垂直 margin 合并，**反之可以在元素外层包裹一层容器，并触发该容器生成一个新的BFC布局**，与相邻元素隔离开来
- 实现自适应双栏、三栏布局，利用浮动、定位、Flex布局原理可实现多种自适应布局

---

## 3.4 请问如何将一个<div>盒子在页面垂直水平居中？

### 元素宽高固定时（设元素宽高为100px）：

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

### 元素宽高未知时：

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

## 3.5 请问实现自适应两栏布局（左定宽，右宽度自适应）有哪些方法？

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

## 3.6 请问实现自适应三栏布局（左右定宽，中间宽度自适应）有哪些方法？

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

---
