# 问答题

## Cookie的弊端

cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。

第一：每个特定的域名下最多生成20个cookie

1.IE6或更低版本最多20个cookie

2.IE7和之后的版本最后可以有50个cookie。

3.Firefox最多50个cookie

4.chrome和Safari没有做硬性限制

IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。

cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。

IE 提供了一种存储可以持久化用户数据，叫做 userData，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

优点：极高的扩展性和可用性

1.通过良好的编程，控制保存在cookie中的session对象的大小。

2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。

3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。

4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

缺点：

1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。

2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3.有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

## 浏览器本地存储是怎样的

在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。

html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。

而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

## web storage和cookie的区别

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。

除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。

但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生

浏览器的支持除了IE７及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的UserData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。

localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

## display:none和visibility:hidden的区别？

display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。

visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。

## CSS中 link 和@import 的区别是？

(1) link属于HTML标签，而@import是CSS提供的;

(2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

(3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题;

## position的absolute与fixed共同点与不同点

共同点：

1、改变行内元素的呈现方式，将display置为inline-block 

2、使元素脱离普通文档流，不再占据文档物理空间

3、覆盖非定位文档元素

不同点：

1、abuselute与fixed的根元素不同，abuselute的根元素可以设置，fixed根元素是浏览器。

滚动网页，fixed与浏览器的距离是不变的。

## CSS的盒子模型

1）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)

2）有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 padding;

## CSS 选择符有哪些？哪些属性可以继承？

CSS 选择符：

```
1.id选择器(# myid)

2.类选择器(.myclassname)

3.标签选择器(div, h1, p)

4.相邻选择器(h1 + p)

5.子选择器(ul > li)

6.后代选择器(li a)

7.通配符选择器( * )

8.属性选择器(a[rel = "external"])

9.伪类选择器(a: hover, li:nth-child)
```

可继承的样式：

```
1.font-size

2.font-family

3.color

4.text-indent
```

不可继承的样式：

```
1.border

2.padding

3.margin

4.width

5.height
```

优先级算法：

```
1.优先级就近原则，同权重情况下样式定义最近者为准;

2.载入样式以最后载入的定位为准;

3.!important >  id > class > tag  

4.important 比 内联优先级高，但内联比 id 要高
```

## 优先级算法如何计算？ CSS3新增伪类有那些？

CSS3新增伪类举例：

```
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。

p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。

p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。

p:only-child   选择属于其父元素的唯一子元素的每个 <p> 元素。

p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

:enabled :disabled 控制表单控件的禁用状态。

:checked     单选框或复选框被选中。
```

```
:first-child 选择属于其父元素的首个元素。

:last-child 选择属于其父元素的最后一个元素。

:only-child 选择属于其父元素唯一的元素。

:nth-child(n) 选择属于其父元素的任意一个子元素。

:empty 选择没有子元素的元素。

:not(selector) 将满足指定选择器的元素给排除在外
```

```
内联样式，如: style="..."，权值为1000。
ID选择器，如：#content，权值为100。
类，伪类、属性选择器，如.content，权值为10。
类型选择器、伪元素选择器，如div p，权值为1。
通配符、子选择器、相邻选择器等。如* > +，权值为0。
继承的样式没有权值
```

## 列出display的值，说明他们的作用。

display 的值的作用：

1.block 像块类型元素一样显示。

2.inline 缺省值。像行内元素类型一样显示。

3.inline-block 像行内元素一样显示，但其内容像块类型元素一样显示。

4.list-item 像块类型元素一样显示，并添加样式列表标记。



## position的值， relative和absolute分别是相对于谁进行定位的？

position 的值的定位区别：

1.absolute 生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。

2.fixed 生成固定定位的元素，相对于浏览器窗口进行定位（老IE不支持）。

3.relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。

4.static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。

5.inherit 规定从父元素继承 position 属性的值。

## CSS3有哪些新特性？

```
1. CSS3实现圆角（border-radius），阴影（box-shadow），
2. 对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
3. transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);// 旋转,缩放,定位,倾斜
4. 增加了更多的CSS选择器  多背景 rgba
5. 在CSS3中唯一引入的伪类是 ::selection.
6. 媒体查询，多栏布局
7. border-image
```

