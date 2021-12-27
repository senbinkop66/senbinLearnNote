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
 现在给类名为"media"的盒子设置"float: left"属性，让该盒子成为浮动盒子，背景色可以自定义便于观察。此时可以观察到盒子下方的文字内容跑到了盒子右侧。通过调试工具可以发现，两个"p"标签被浮动元素所覆盖，并且内部的文字识别到了浮动元素从而绕开了浮动元素。如果给"section"元素添加边框，就会发现"section"这个父级盒子的高度只有两个"p"标签那么高，并没有将浮动元素的高度计算进去，这样会让布局很困难。
 clear属性的值有"left"、"right"、"both"和"none"，用于指定盒子的那一侧不应该紧挨着浮动盒子。现在再给类名为"clear-left"的"p"标签设置"clear: left"属性，现在可以发现"universe"文本到了浮动盒子的下方并且"section"盒子的高度也发生了变化，该高度包含了浮动盒子的高度。

