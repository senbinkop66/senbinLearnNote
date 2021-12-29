## **CSS1** **盒模型 - content-box**

**盒模型**是CSS的核心概念，描述了元素如何显示，以及在一定程度上如何相互作用、相互影响。页面中的所有元素都被看作一个矩形盒子，这个盒子包含元素的内容、内边距、边框和外边距。
 内边距是内容周围的空间，当给元素填充背景时会作用到元素的内容区域和内边距区域。边框会在内边距外且紧挨着内边距。边框的外侧是外边距，外边距是围绕在盒子可见部分之外的透明区域，用于控制元素之间的距离。
 **默认情况下，width和height是指盒子的内容区域的大小**，如果此时给盒子添加内边距或边框，那么会导致整个盒子变大。现在给类名为"content-box"的盒子设置宽度、高度都为"80px"、内边距为"5px"、边框为"5px solid black"，此时可以打开调试工具查看该盒子的大小，会发现该盒子实际是一个长度为"100px"的正方形，并不是"80px"。
 实际上还有另外一种盒模型，它的width和height的计算方式和当前的盒子不同。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .content-box{
                width: 80px;
                height: 80px;
                margin: 0;
                padding: 5px;
                border: 5px solid black;
            }
        </style>
    </head>
    <body>
        <div class="content-box"></div>
    </body>
</html>
```

## **CSS2** **盒模型 - border-box**

默认盒模型的width和height只会作用于盒子的内容区，而通过"box-sizing"属性可以改变计算盒子大小的方式。"box-sizing"的默认值为"content-box"，即上一题看到的那样，把值只作用于内容区。现在给类名为"border-box"的盒子设置"box-sizing"属性为"border-box"，**此时width和height的值不仅会作用于内容区，并且还会包括内边距和边框。**
 很多人将"border-box"称为**怪异盒模型**，其实并不怪异。因为现实中的盒子就是这样测量的。比如快递盒，当用安全气囊包裹易碎物品时，填充物就可以视为"padding"，无论填充物有多厚，也不会影响盒子的整体大小。
 现在再给类名为"border-box"的盒子设置宽度、高度都为"100px"、内边距为"5px"、边框为"5px solid black"，此时通过调试工具会发现盒子的实际大小并没有因为添加了内边距或边框而被撑大。"border-box"在布局中可以让开发者减少不必要的烦恼，如添加内边距、边框之后盒子大小发生变化影响到整体布局的效果。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .border-box{
                box-sizing: border-box;
                width: 100px;
                height: 100px;
                margin: 0;
                padding: 5px;
                border: 5px solid black;
            }
        </style>
    </head>
    <body>
        <div class="border-box"></div>
    </body>
</html>
```

## **CSS3** **盒模型- 外边距折叠**

常规块盒子有一种机制叫外边距折叠，即垂直方向上的两个外边距相遇时，会折叠成一个外边距，**且折叠之后的外边距高度为两者之中较大的那一个**。现在给类名为"top"、"bottom"两个盒子都设置宽度、高度且都为"100px"、都设置外边距且都为"10px"，可以添加任意颜色便于区分两个盒子。此时通过调试工具可以发现两个盒子之间的距离为"10px"，并不是"20px"，说明已经发生了外边距折叠。
外边距折叠好像很奇怪，实际上却很有用。当一个页面包含了多个段落，如果没有外边距折叠，从第二个段落开始，所有段落的间距都是最上方段落的上外边距的两倍，**有了外边距折叠，段落间距才会相等**。
如果想要清除两个盒子之间的外边距折叠，可以给目标盒子设置以下属性：
\1. display: inline-block
\2. float属性值不是"none"的元素
\3. 绝对定位
现在给类名为"bottom"的盒子设置"position"属性为"absolute"，可以看到下方的盒子向下移动了，此时外边距折叠失效。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .top{
                width: 100px;
                height: 100px;
                margin: 10px;
                background-color: red;
            }
            .bottom{
                display: inline-block;
                float: none;
                position: absolute;
                width: 100px;
                height: 100px;
                margin: 10px;
                background-color: blue;
            }
        </style>
    </head>
    <body>
        <section class="top"></section>
        <section class="bottom"></section>
    </body>
</html>
```

## **CSS4** **浮动**

浮动盒子可以向左、右移动，直到它的外边沿接触父级的外边沿或另一个浮动盒子的外边沿。**浮动盒子会脱离常规文档流**，所以**文档流中的元素几乎认为浮动盒子不存在。**
 现在给"body"标签设置宽度为300px，再给类名为"left"、"center"、"right"的盒子（左、中、右盒子）皆设置宽度、高度且都为100px，三个盒子的颜色可以自定义以便于观测。继续给中间盒子设置"float: left"属性，此时中间盒子已经是一个浮动盒子，不再占据流中的位置空间，右盒子上升到了浮动盒子的区域并且被浮动盒子覆盖住了。现在再给左、右盒子皆设置"float: left"属性，此时三个盒子水平排列在一行上。重设左盒子的宽度、高度皆为120px，**可以观察到因为"body"盒子较窄，所以右盒子被迫换行并且因为左盒子的高度超过了中间盒子，右盒子被卡在了中间盒子下方。**
 以上为浮动盒子的特性。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            body{
                width: 300px;
            }
            .left{
                width: 120px;
                height: 120px;
                float: left;
                background-color: red;
            }
            .center{
                width: 100px;
                height: 100px;
                float: left;
                background-color: blue;
            }
            .right{
                width: 100px;
                height: 100px;
                float: left;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </body>
</html>
```

## **CSS5** **浮动 - 清除**

通过前面的学习了解到，浮动元素会脱离文档流，因此不会影响其他元素。但,在之前介绍浮动盒子时提到了"文档流中的元素几乎认为浮动盒子不存在"，实际上被浮动盒子覆盖的区域中的文本内容会识别到浮动盒子并且绕开浮动盒子。
 现在给类名为"media"的盒子设置"float: left"属性，让该盒子成为浮动盒子，背景色可以自定义便于观察。此时可以观察到盒子下方的文字内容跑到了盒子右侧。通过调试工具可以发现，**两个"p"标签被浮动元素所覆盖**，并且内部的文字识别到了浮动元素从而绕开了浮动元素。**如果给"section"元素添加边框，就会发现"section"这个父级盒子的高度只有两个"p"标签那么高，**并没有将浮动元素的高度计算进去，这样会让布局很困难。
 clear属性的值有"left"、"right"、"both"和"none"，**用于指定盒子的那一侧不应该紧挨着浮动盒子**。现在再给类名为"clear-left"的"p"标签设置"clear: left"属性，现在可以发现"universe"文本到了浮动盒子的下方并且"section"盒子的高度也发生了变化，该高度包含了浮动盒子的高度。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            body{
                width: 300px;
            }
            .media{
                width: 100px;
                height: 100px;
                float: left;
                background-color: red;
            }
            .clear-left{
                clear: left; /*左侧不应该紧挨着浮动盒子*/
            }
            
        </style>
    </head>
    <body>
        <section>
            <div class="media"></div>
            <p>hello</p>
            <p class="clear-left">universe</p>
        </section>
    </body>
</html>
```

## **CSS6** **定位 - static**

**在流中的元素定位属性值默认都为"static"，即没有定位**。此时元素会忽略"top"、"bottom"、"left"、"right"和"z-index"定位属性。
 现在给"section"盒子设置"left: 10px"，这时会发现定位属性无效。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            section {
                width: 100px;
                height: 100px;
                background-color: black;
                left: 10px;
            }
        </style>
    </head>
    <body>
        <section></section>
    </body>
</html>
```

## **CSS7** **定位 - inherit**

**当一个元素的定位属性设置为"inherit"时，表示从父元素继承定位属性。**现在虽然类名为"inner"的里盒子设置了"left: 10px"属性，但是这是无效的，因为该盒子的定位属性值为"static"。现在给里盒子添加"position: inherit"属性，表示从类名为"outer"的父级外盒子继承定位属性，现在发现里盒子的"left: 10px"属性依然没有生效，因为外盒子的定位值依然是"static"。最后再给外盒子添加"position: relative"属性，此时会发现里盒子向右移动了10px，定位属性"left"生效了。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .outer {
                width: 100px;
                height: 100px;
                background-color: black;
                position: relative;
            }
            .inner {
                width: 80px;
                height: 80px;
                background-color: red;
                position: inherit;
                left: 10px;
            }
        </style>
    </head>
    <body>
        <section class="outer">
            <section class="inner">
                
            </section>
        </section>
    </body>
</html>
```

## **CSS8** **定位 - absolute**

**绝对定位会把元素拿出文档流，不会再占据原来的空间**。绝对定位元素的**父级**是**距离该元素最近的定位祖先**，***也就是"position"属性不为"static"的最近任意祖先***。如果没有这个定位祖先，那么绝对定位元素就相对于文档的根元素"html"进行定位。
 当前类名为"outer"、"middle"、"inner"的盒子（外、中、里盒子）嵌套在一起，现在给三个盒子均设置左内边距10px，再自定义盒子背景颜色以便于观察。再给里盒子设置绝对定位属性"position: absolute"，**会发现里盒子的位置并没有发生改变，因为绝对定位的默认位置是当前绝对定位盒子在流中的位置**。继续给里盒子设置"left: 0px"属性，观察到里盒子是根据最外层盒子定位的，直接绕过了中间盒子，这是由于中间盒子的定位属性为默认的"static"，此时再给中间盒子设置定位属性"position: absolute"，会发现里盒子现在是根据中间盒子重新定位的。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .outer {
                width: 100px;
                height: 100px;
                background-color: red;
                padding-left: 10px;
            }
            .middle {
                width: 100px;
                height: 100px;
                background-color: blue;
                padding-left: 10px;
                position: absolute;
            }
            .inner {
                width: 100px;
                height: 100px;
                background-color: green;
                padding-left: 10px;
                position: absolute;
                left: 0px;
            }
        </style>
    </head>
    <body>
        <div class="outer">
            <div class="middle">
                <div class="inner">
                    
                </div>
            </div>
        </div>
    </body>
</html>
```

## **CSS9** **定位 - absolute - 评注**

**绝对定位非常适合创建弹出层、提示和对话框等覆盖于其他内容之上的组件**。比如有一篇文章，可以给文章添加一些行内的评注，最好以气泡图的样式显示在文章外部的空白区域中。
 **绝对定位的元素默认会待在自己还在流中时的地方**，现在给"aside"盒子设置绝对定位属性"position: absolute"，此时"aside"盒子从流中出来并且覆盖住了下方的元素，现在可以将它向左移动一些，把它定位到文章内容的左边。"article"盒子的左外边距为10rem，想让"aside"评注放在左边空白处的中间，需要进行计算，这里省略计算步骤。现在只需要将评注组件向左移动9rem即可。现在给评注组件设置"margin-left: -9rem"，**在CSS中，负边距是完全有效的，负左外边距可以将元素往左拉**，其他有趣的效果这里不做赘述。此时观察效果，评注在"相煎何太急？"内容的左边，可以很醒目的告诉读者该句的意思。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            article {
                margin-left: 10rem;
            }
            aside {
                width: 5rem;
                padding: 1rem;
                color: white;
                background-color: pink;
                border-radius: 0.5rem;
                position: absolute;
                margin-left: -9rem;
            }
            aside:after {
                content: '';
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                border: 0.5rem solid pink;
                border-bottom-color: transparent;
                border-right-color: transparent;
                right: -1rem;
                top: 0.5rem;
            }
            .note {
                color: green;
                text-decoration-line: underline;
            }
        </style>
    </head>
    <body>
        <section>
            <article>
                <p>煮豆燃豆萁，</p>
                <p>豆在釜中泣。</p>
                <p>本是同根生，</p>
                <aside>豆秸怎能这样急迫地煎熬豆子呢？</aside>
                <p class='note'>相煎何太急？</p>
            </article>
        </section>
    </body>
</html>
```

## **CSS10** **定位 - z-index**

 z-index属性设置元素的堆叠顺序，**拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的上面**。z-index可以设置为负数，**且该属性只能作用于定位元素。**
 现在给"img"图片标签添加"position: absolute"、"left: 0px"和"top: 0px"属性，此时会发现图片被定绝对定位在了页面的左上角，并且遮挡住了下方的内容。现在继续给图片标签添加"z-index: -1"属性，现在图片堆叠在了字体内容的下方。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            img{
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: -1;
            }
        </style>
    </head>
    <body>
        <h1>The countdown to Christmas starts here.</h1>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1912%2F1135-191202143454.jpg&refer=http%3A%2F%2Fuploads.xuexila.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639984107&t=eca951193e736a17eb96278117bcfb1f" width="100">
        <p>由于图像的 z-index 是 -1，因此它在文本的后面出现。</p>
    </body>
</html>
```

## **CSS11** **定位 - relative**

**相对定位的元素仍然会待在原来的地方，即不会从流中出来。**此后可以通过"top"、"right"、"bottom"和"left"属性使元素相对于初始位置进行移动。现在给类名为"center"的盒子设置相对定位属性"position: relative"、设置"left: 50px"、设置"top: 50px"，再自定义背景颜色以便于观察。此时可以观察到中间盒子在原始的位置上向右、向下均移动了50px的距离，并且保留了原来的空间。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .left {
                width: 100px;
                height: 100px;
                background-color: red;
            }
            .center {
                width: 100px;
                height: 100px;
                background-color: blue;
                position: relative;
                left: 50px;
                top: 50px;
            }
            .right {
                width: 100px;
                height: 100px;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </body>
</html>
```

<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .left {
                width: 100px;
                height: 100px;
                background-color: red;
            }
            .center {
                width: 100px;
                height: 100px;
                background-color: blue;
                position: relative;
                left: 50px;
                top: 50px;
            }
            .right {
                width: 100px;
                height: 100px;
                background-color: green;
            }
        </style>
    </head>
    <body>
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </body>
</html>

## **CSS12** **定位 - fixed**

固定定位是由绝对定位衍生出来的，不同之处在于，**固定定位元素的父级始终是视口**。因此**固定定位可以用来创建始终停留在窗口相同位置的元素**。比如：固定侧栏、固定顶栏等。这样方便用户，不必再费事寻找栏目。
 现在给"nav"盒子设置固定定位属性"position: fixed"、设置"top: 0"、设置自定义宽度、背景颜色。此时滑动滚轮，可以发现"nav"盒子始终固定在页面的最上方。但是，数字1却被覆盖了。由于固定定位的盒子不在流中，所以遮盖住了下方的元素。此时再给"section"盒子设置上外边距为1rem，此时1数字正常出现了。固定定位需要注意下方是否有元素被遮挡。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            nav{
                position: fixed;
                top: 0;
                width: 800px;
                background-color: gray;
            }
            section{
                margin-top: 1rem;
            }
        </style>
    </head>
    <body>
        <nav><br /></nav>
        <section>1<br />2<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></section>
    </body>
</html>
```

## **CSS13** **定位 - fixed - 广告**

**固定定位不仅可以用于导航栏目，还可以用于控制中心、广告、重要提示内容等。**本节使用固定定位实现一个广告牌功能，关闭按钮和该按钮的功能已给出，当点击按钮时，广告牌会消失。现在给类名为"advert"的盒子设置固定定位属性"position: fixed"、设置"right: 0"、设置"bottom: 0"，此时广告牌的位置被固定在了视口的右下方。现在还需要将关闭按钮定位在广告牌的右上方，继续给类名为"x"的按钮盒子设置绝对定位属性"position: absolute"、设置"right: 0"，观察按钮的位置，已经被定位在了广告牌的右上方。一个简易的广告牌就设计完成了。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            .advert {
                width: 300px;
                height: 200px;
                background-color: black;
                position: fixed;
                right: 0;
                bottom: 0;
            }
            .advert:first-line {
                color: white;
            }
            .x{
                position: absolute;
                right: 0;
            }
        </style>
    </head>
    <body>
        <section class="advert">
            广告文案
            <button class="x">x</button>
        </section>

        <script>
            document.querySelector('button').onclick = function() {
                this.parentNode.style.display = 'none'
            }
        </script>
    </body>
</html>
```

## **CSS14** **display - flex**

Flexbox，也就是Flexible Box Layout模块，是CSS提供的用于布局的一套新属性。这套属性包含针对容器、容器直接子元素（弹性项）的两类属性。Flexbox可以控制弹性项的这几个方面：
1. 大小，基于内容以及可用空间

2. 流动方向，水平还是垂直，正向还是反向

3. 两个轴向上的对齐与分布

4. 顺序，与源代码中的顺序无关
 
 现在给"ul"标签添加"display: flex"属性，让该列表成为flex容器，注意：**除非另有声明，否则该属性默认弹性项排列方向为正横向，即"flex-direction: row"**。现在可以看到，列表内容已经是水平排列，并且根据各自的内容宽度进行了收缩。
 
 现在对主轴（即"flex-direction"属性声明的轴向）进行排列，该属性为"justify-content"且默认值为"flex-start"，现在给"ul"标签设置"justify-content: center"属性，可以发现弹性项在主轴上已经居中了。**但是此时会发现由于"home"的字体比其他字体大，所以弹性项在辅轴（与主轴对应的另一方向的轴）上并没有对其，这是由于控制辅轴对齐方式的"align-items"属性默认为"stretch"即拉伸，会占满"ul"的所有高度空间，**并且该行的基线是默认的。
 
 现在再给"ul"标签添加"align-items: center"属性，会发现"li"标签此时没有撑满"ul"标签的高度，并且在辅轴上是居中对齐的，如果给该属性设置"baseline"值，仅仅会在辅轴上将内容文字对齐。 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            nav ul {
                height: 2rem;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            nav ul li {
                border: 1px solid black;
            }
            nav ul li:first-child {
                font-size: 1.2rem;
            }
        </style>
    </head>
    <body>
        <nav>
            <ul>
                <li>home</li>
                <li>spaceships</li>
                <li>planets</li>
                <li>stars</li>
            </ul>
        </nav>
    </body>
</html>
```

## **CSS15** **display - flex - 可伸缩项属性**

Flexbox支持对弹性项的灵活控制。Flex的意思为可伸缩，这体现在以下三个属性中：
1. flex-basis：基础值
2. flex-grow：拉伸弹性系数，如果容器宽度减去弹性项的基础值之和之后还有剩余空间，那么就按照弹性系数比例去分配剩余空间
3. flex-shrink：缩减弹性系数，和拉伸弹性系数逻辑相反
 **这三个属性应用给弹性项，而不是容器。**
  现在首先给所有的"li"添加"flex: 1 0 0%"属性，该属性的三个值分别为flex-grow、flex-shrink和flex-basis，表示：**当有剩余空间时均匀分配剩余空间、当超出容器宽度时不进行缩放、弹性项的基础值都为容器的0%。此时可以看到四个每个"li"标签的宽度都为125px，分别占据了容器的1/4。**现在再单独给第一个"li"标签设置"flex-grow: 2"属性，此时又会发现所有"li"标签的宽度比值为2:1:1:1。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            nav {
                width: 500px;
            }
            nav ul {
                display: flex;
                list-style: none;
            }
            nav ul li{
                flex: 1 0 0%;
            }
            nav ul li:first-child{
                flex-grow: 2;
            }
        </style>
    </head>
    <body>
         <nav>
            <ul>
                <li>home</li>
                <li>spaceships</li>
                <li>planets</li>
                <li>stars</li>
            </ul>
        </nav>
    </body>
</html>
```

## **CSS16** **display - flex - 标签**

通过之前的学习，现在来实现一组标签，表示星球的种类。当前的"li"标签都是行内盒子，虽然看似实现了标签效果，但是每一行的宽度却没有保持一致，当进行缩放时，布局会特别的混乱。现在使用Flex布局将当前的布局方式进行优化，

首先删除"li"标签的"display: inline-block"属性，给"ul"添加"display: flex"使该元素称为弹性容器。

再给容器添加"flex-wrap: wrap"属性表示换行，否则所有标签会在第一行排列。此时标签已经分行排列了，但，每一行的宽度看起来依然是不同的，这时候需要通过给弹性项添加属性，通过之前讲过的"flex"属性入手。继续给所有的"li"标签添加"flex: 1 0 auto"属性，**auto代表在计算剩余空间时需要减去每个标签自身的宽度而不是之前讲的0%那样忽略了自身的宽度。**

此时标签功能基本上是完成了，但是注意，最后一行可能因为页面的缩放导致只有一个标签却占满了一整行。那么继续给所有的"li"标签设置"max-width: 10rem"即可，此时最后一行标签虽然少但是看起来依旧很和谐。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                font-size: 12px;
                box-sizing: border-box;
            }
            nav ul {
                padding: 0.5rem;
                list-style: none;
                /**/
                display: flex;
                flex-wrap: wrap;
            }
            nav ul li {
                margin: 0.2rem;
                /**/
                flex: 1 0 auto;
                max-width: 10rem;
            }
            nav ul li a {
                position: relative;
                display: block;
                padding: 0.2rem 0.6rem;
                color: white;
                line-height: 1rem;
                background-color: black;
                border-radius: 0.2rem;
                text-decoration: none;
                text-align: center;
            }
            nav ul li a:before {
                position: absolute;
                content: '';
                width: 0;
                height: 0;
                border: 0.7rem solid transparent;
                border-right-width: 0.7rem;
                border-right-color: black;
                left: -1.2rem;
                top: 0;
            }
        </style>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="">Fillithar</a></li>
                <li><a href="">Berzite</a></li>
                <li><a href="">Galidraan</a></li>
                <li><a href="">Gravlex Med</a></li>
                <li><a href="">Cato Neimoidia</a></li>
                <li><a href="">Coruscant</a></li>
                <li><a href="">Dantooine</a></li>
                <li><a href="">Dhandu</a></li>
                <li><a href="">Iktotchon</a></li>
                <li><a href="">Hosnian Prime</a></li>
                <li><a href="">Harkrova I</a></li>
                <li><a href="">Livno III</a></li>
                <li><a href="">Karfeddion</a></li>
                <li><a href="">Eriadu</a></li>
                <li><a href="">Jestefad</a></li>
                <li><a href="">Iridonia</a></li>
                <li><a href="">Malachor</a></li>
                <li><a href="">Gan Moradir</a></li>
                <li><a href="">Kethmandi</a></li>
                <li><a href="">Mirrin Prime</a></li>
                <li><a href="">Ezaraa</a></li>
                <li><a href="">Muunilinst</a></li>
                <li><a href="">Itapi Prime</a></li>
                <li><a href="">Nam Chorios</a></li>
            </ul>
        </nav>
    </body>
</html>
```

## **CSS17** **display - flex - order**

**使用Flexbox的order属性，可以完全摆脱项目在源码中顺序的约束。**默认情况下，**每个项目的order值都为0，意味着按照他们在源代码中的顺序进行排列**。可以观看右边的代码效果，从设计上说，把图片放在最前面可以抓住读者的眼球，是比较好的设计方式，但是对于浏览器而言，拿到标题并且直接将标题呈现给读者的代价一定比获取一张照片并渲染出来小得多。所以可以考虑折中的方式，先渲染标题但是优先显示图片。
 现在给"img"图片标签设置"order: -1"属性，此时观察效果会发现图片的排列在标题之上，其他内容的相对位置不会变，它们的order值仍然是0。**order的值不一定要连续，并且正负都可以。**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            section {
                display: flex;
                flex-direction: column;
                text-align: center;
            }
            img{
                order: -1;
            }
        </style>
    </head>
    <body>
        <section>
            <h2>countdown</h2>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1912%2F1135-191202143454.jpg&refer=http%3A%2F%2Fuploads.xuexila.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639984107&t=eca951193e736a17eb96278117bcfb1f" width="100%">
            <article>The countdown to Christmas starts here.</article>
            <p><a href="#">more</a></p>
        </section>
    </body>
</html>
```

## **CSS18** **display - grid**

Grid，即网格布局。它将页面划分为一个个网格，可以任意组合不同的形态，做出理想的布局效果。Grid布局与Flexbox布局的**区别**在于，**Flexbox是根据轴线对弹性项进行排列**，而**Grid布局是将容器划分为行和列，产生单元格，然后再对单元格进行操作。**
 采用网格布局的区域称为**容器**。容器内部采用网格定位的每个子元素称为容器项，也是**单元格**。划分网格的线称为**网格线**，比如，3x3的网格有4条水平网格线和4条垂直网格线。
 现在给section盒子设置"display: grid"属性，将该盒子变成一个容器。**现在需要通过给该容器划分行和列来生成单元格，**给容器设置"grid-template-rows: 100px"和"grid-template-columns: repeat(2, 1fr)"两条属性以生成一个Nx2的网格，且每个容器项的宽度比为1:1、第一行的高度为100px（注意：实际上行高度可以不用设置，会根据每个容器项自动撑开，**但如果设置了，就要考虑清除需要多少行，当前的行值100px仅为第一行，如果需要前三行都为100px，需要设置为"grid-template-rows: 100px 100px 100px"）**。repeat方法可以简化属性值的书写，为了方便表示比例关系，网格布局提供了fr关键字，该关键字和flex-grow颇为相似。实际上如果想固定大小，完全可以将单位全部设置为固定的px值。现在继续给容器添加"grid-gap: 10px"属性，该属性为"grid-row-gap"和"grid-column-gap"两个属性的简写，**分别代表行间距和列间距。**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            section {
                width: 500px;
                text-align: center;
                display: grid;
                grid-template-rows: 100px;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 10px;
            }
            article {
                height: 100px;
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <section>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
            <article>5</article>
            <article>6</article>
            <article>7</article>
            <article>8</article>
            <article>9</article>
        </section>
    </body>
</html>
```

## **CSS19** **display - grid - 区域**

网格布局允许指定区域，**一个区域由单个或多个单元格组成**。

根据上一节学习的内容，请将"section"设置为网格布局容器，并且生成一个3x3的网格，该网格容器项的宽度、高度都为100px。再给容器添加"grid-template-areas: 'a b c''d e f''g h i'"属性，表示3x3的网格区域划分从左到右、从上到下依次为a、b、c、d、e、f、g、h、i。现在给第一个"article"标签设置"grid-area: e"属性，此时可以看到数字1已经被移动到了最中间的区域，即区域"e"。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            section {
                width: 500px;
                text-align: center;
                display: grid;
                grid-template-rows: 100px;
                grid-template-columns: 100px;
                grid-template-columns: repeat(3, 1fr);
                grid-template-areas: 'a b c''d e f''g h i';
                grid-gap: 10px;
            }
            article {
                height: 100px;
                border: 1px solid black;
            }
            article:first-child{
                grid-area: e;
            }
        </style>
    </head>
    <body>
        <section>
            <article>1</article>
            <article>2</article>
            <article>3</article>
            <article>4</article>
            <article>5</article>
            <article>6</article>
            <article>7</article>
            <article>8</article>
            <article>9</article>
        </section>
    </body>
</html>
```

## **CSS20** **单列布局**

**单列布局是将头部、内容区、底部在页面上垂直排列，是非常实用的一种布局方式**。主要对三个区域的宽度进行统一，然后通过设置自动外边距进行居中。

现在给"header"、"section"、"footer"三个盒子统一设置"margin: 10px auto"、"width: 360px"、"border: 1px solid black"属性。此时因为内容区有内容而头部和底部没有内容所以只有内容区的高度被撑开，**一般头部和底部的内容是根据自己的需求固定大小的**，所以现在再给头部和底部统一设置高度，即"height: 32px"。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                width: 500px;
            }
            header,section,footer{
                width: 360px;
                margin: 10px auto;
                border: 1px solid black;
            }
            header,footer{
                height: 32px;
            }
        </style>
    </head>
    <body>
        <header></header>
        <section><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></section>
        <footer></footer>
    </body>
</html>
```

## **CSS21** **双列布局 - 浮动**

