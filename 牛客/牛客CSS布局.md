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

