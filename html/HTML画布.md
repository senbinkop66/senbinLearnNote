#  canvas

`<canvas>`元素可被用来通过 JavaScript（[Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API) API 或 [WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) API）绘制图形及图形动画。

`<canvas>`是一个可以使用脚本(通常JavaScript))来绘制图形的 [HTML]元素.例如,它可以用于绘制图表、制作图片构图或者制作简单的(以及[不那么简单的]动画. 

`<canvas>` 最早由Apple引入WebKit，用于Mac OS X 的 Dashboard，随后被各个浏览器实现。如今，所有主流的浏览器都支持它。

Canvas 的默认大小为300像素×150像素（宽×高，像素的单位是px）。但是，可以使用HTML的高度和宽度属性来自定义Canvas 的尺寸。为了在 Canvas 上绘制图形，我们使用一个JavaScript上下文对象，它能动态创建图像（ creates graphics on the fly）。

# Canvas 的基本用法

## `<canvas>` 元素

```html
  <canvas id="test" width="150" height="150"></canvas>
```

`<canvas>` 看起来和 `<img>` 元素很相像，唯一的不同就是它并没有 src 和 alt 属性。实际上，`<canvas>` 标签只有两个属性—— width和height。这些都是可选的，并且同样利用 DOM properties 来设置。当没有设置宽度和高度的时候，canvas 会初始化宽度为 300 像素和高度为 150 像素。该元素可以使用CSS来定义大小，但在绘制时图像会伸缩以适应它的框架尺寸：如果 CSS 的尺寸与初始画布的比例不一致，它会出现扭曲。

> **注意：** 如果你绘制出来的图像是扭曲的，尝试用 width 和 height 属性为<canvas>明确规定宽高，而不是使用 CSS。

id属性并不是`<canvas>`元素所特有的，而是每一个 HTML 元素都默认具有的属性（比如 class 属性）。给每个标签都加上一个 id 属性是个好主意，因为这样你就能在我们的脚本中很容易的找到它。

`<canvas>`元素可以像任何一个普通的图像一样（有margin，border，background等等属性）被设计。然而，这些样式不会影响在 canvas 中的实际图像。我们将会在一个专门的章节里看到这是如何解决的。当开始时没有为 canvas 规定样式规则，其将会完全透明。

### 替换内容

`<canvas>`元素与`<img>`标签的不同之处在于，就像`<video>`，`<audio>`，或者 `<picture>`元素一样，很容易定义一些替代内容。由于某些较老的浏览器（尤其是 IE9 之前的 IE 浏览器）或者文本浏览器不支持 HTML 元素"canvas"，在这些浏览器上你应该总是能展示替代内容。

这非常简单：我们只是在`<canvas>`标签中提供了替换内容。不支持`<canvas>`的浏览器将会忽略容器并在其中渲染后备内容。而支持`<canvas>`的浏览器将会忽略在容器中包含的内容，并且只是正常渲染 canvas。

举个例子，我们可以提供对 canvas 内容的文字描述或者是提供动态生成内容相对应的静态图片，如下所示：

```html
  <canvas id="test1" width="150" height="150">
    current stock price: $3.15 +0.15
  </canvas>
  <canvas id="test2">
    <img src="./image1/img1.png" width="150" height="50" alt="clock">
  </canvas>
```

###  `</canvas>` 标签不可省

与 `<img>` 元素不同，`<canvas>` 元素需要结束标签 (`</canvas>`)。如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来。

如果不需要替代内容，一个简单的 `<canvas id="foo" ...>``</canvas>` 在所有支持 canvas 的浏览器中都是完全兼容的。

## 渲染上下文（The rendering context）

`<canvas>` 元素创造了一个固定大小的画布，它公开了一个或多个渲染上下文，其可以用来绘制和处理要展示的内容。我们将会将注意力放在 2D 渲染上下文中。其他种类的上下文也许提供了不同种类的渲染方式；比如， WebGL 使用了基于OpenGL ES的 3D 上下文 ("experimental-webgl") 。

canvas 起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。`<canvas>` 元素有一个叫做 getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()接受一个参数，即上下文的类型。对于 2D 图像而言，如本教程，你可以使用 CanvasRenderingContext2D。

```js
  let testCanvas = document.getElementById("test1")
  let ctx = testCanvas.getContext("2d");
```

代码的第一行通过使用 document.getElementById() 方法来为 `<canvas>` 元素得到 DOM 对象。一旦有了元素对象，你可以通过使用它的 getContext() 方法来访问绘画上下文。

## 检查支持性

替换内容是用于在不支持 `<canvas>` 标签的浏览器中展示的。通过简单的测试 getContext() 方法的存在，脚本可以检查编程支持性。上面的代码片段现在变成了这个样子：

```js
  let testCanvas = document.getElementById("test1");
  if (testCanvas.getContext) {
    let ctx = testCanvas.getContext("2d");
      // drawing code here
  } else {
    // canvas-unsupported code here
  }
```

## [一个模板骨架](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage#一个模板骨架)

这里的是一个最简单的模板，我们之后就可以把它作为之后的例子的起点。

> **注意：**为了简洁，我们在 HTML 中内嵌了 script 元素，但并不推荐这种做法。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>test</title>
  <style>
    #test1{
      border: 1px solid black;
    }
  </style>
</head>
<body onload="draw();">

  <canvas id="test1" width="150" height="150">
    
  </canvas>

<script type="text/javascript">
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
    } else {
      
    }
  }
</script>
</body>
</html>
```

上面的脚本中包含一个叫做 draw() 的函数，当页面加载结束的时候就会执行这个函数。通过使用在文档上加载事件来完成。只要页面加载结束，这个函数，或者像是这个的，同样可以使用 window.setTimeout() (en-US)， window.setInterval() (en-US)，或者其他任何事件处理程序来调用。

## [一个简单例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage#一个简单例子)

一开始，让我们来看个简单的例子，我们绘制了两个有趣的长方形，其中的一个有着 alpha 透明度。我们将在接下来的例子里深入探索一下这是如何工作的。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(10, 10, 55, 50);

      ctx.fillStyle = "rgb(0, 0, 200, 0.5)";
      ctx.fillRect(30, 30, 55, 50);
    }
  }
```

# 使用 canvas 来绘制图形

既然我们已经设置了 canvas 环境，我们可以深入了解如何在 canvas 上绘制。到本文的最后，你将学会如何绘制矩形，三角形，直线，圆弧和曲线，变得熟悉这些基本的形状。绘制物体到 Canvas 前，需掌握路径，我们看看到底怎么做。

## [栅格](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#栅格)

![img](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)

在我们开始画图之前，我们需要了解一下**画布栅格**（canvas grid）以及**坐标空间**。上一页中的 HTML 模板中有个宽 150px, 高 150px 的 canvas 元素。如右图所示，canvas 元素默认被网格所覆盖。**通常来说网格中的一个单元相当于 canvas 元素中的一像素**。栅格的起点为左上角（坐标为（0,0））。**所有元素的位置都相对于原点定位**。所以图中蓝色方形左上角的坐标为距离左边（X 轴）x 像素，距离上边（Y 轴）y 像素（坐标为（x,y））。在课程的最后我们会平移原点到不同的坐标上，旋转网格以及缩放。现在我们还是使用原来的设置。

## 绘制矩形

不同于 SVG，`<canvas>` 只支持两种形式的图形绘制：**矩形**和**路径**（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

首先，我们回到矩形的绘制中。canvas 提供了三种方法绘制矩形：

**fillRect(x, y, width, height)** : 绘制一个填充的矩形

**strokeRect(x, y, width, height)** : 绘制一个矩形的边框

**clearRect(x, y, width, height)** : 清除指定矩形区域，让清除部分完全透明。

上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸。

下面的 draw() 函数是前一页中取得的，现在就来使用上面的三个函数。

### 矩形（Rectangular）例子

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(25, 25, 100, 100);
      
      ctx.fillStyle = "rgb(0, 200, 0)";
      ctx.clearRect(45, 45, 60, 60);

      ctx.fillStyle = "rgb(0, 0, 200)";
      ctx.strokeRect(50, 50, 50, 50);
    }
  }
```

`fillRect()`函数绘制了一个边长为 100px 的黑色正方形。`clearRect()`函数从正方形的中心开始擦除了一个 60*60px 的正方形，接着`strokeRect()`在清除区域内生成一个 50*50 的正方形边框。

接下来我们能够看到 clearRect() 的两个可选方法，然后我们会知道如何改变渲染图形的填充颜色及描边颜色。

不同于下一节所要介绍的路径函数（path function），以上的三个函数绘制之后会马上显现在 canvas 上，即时生效。

## 绘制路径

**图形的基本元素是路径**。路径是**通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合**。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

1. 首先，你需要创建路径起始点。
2. 然后你使用[画图命令](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#Paths)去画出路径。
3. 之后你把路径封闭。
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

以下是所要用到的函数：

- `beginPath()`

  新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

- `closePath()`

  闭合路径之后图形绘制命令又重新指向到上下文中。

- `stroke()`

  通过线条来绘制图形轮廓。

- `fill()`

  通过填充路径的内容区域生成实心的图形。

生成路径的第一步叫做 beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。**而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形**。

> 注意：当前路径为空，即调用 beginPath() 之后，或者 canvas 刚建的时候，第一条路径构造命令通常被视为是 moveTo（），无论实际上是什么。出于这个原因，**你几乎总是要在设置路径之后专门指定你的起始位置**。

第二步就是调用函数指定绘制路径，本文稍后我们就能看到了。

第三，就是闭合路径 closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。**如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。**

> 注意：**当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合**，所以你不需要调用 closePath() 函数。但是**调用 stroke() 时不会自动闭合。**

### 绘制一个三角形

例如，绘制三角形的代码如下：

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(200, 80, 0)";
      
      ctx.beginPath();
      ctx.moveTo(75, 50);  // 将笔触移动到指定的坐标 x 以及 y 上。
      ctx.lineTo(100, 75);  //绘制一条从当前位置到指定 x 以及 y 位置的直线。
      ctx.lineTo(100, 25);
      ctx.fill();
    }
  }
```

### 移动笔触

一个非常有用的函数，**而这个函数实际上并不能画出任何东西**，也是上面所描述的路径列表的一部分，这个函数就是`moveTo()`。或者你可以想象一下在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。

- `moveTo(x, y)`

  **将笔触移动到指定的坐标 x 以及 y 上。**

当 canvas 初始化或者`beginPath()`调用后，你**通常会使用`moveTo()`函数设置起点**。我们也能够使用`moveTo()`绘制一些不连续的路径。看一下下面的笑脸例子。我将用到`moveTo()`方法（红线处）的地方标记了。

你可以尝试一下，使用下边的代码片。只需要将其复制到之前的`draw()`函数即可。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";
      
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // 绘制
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);  // 口 (顺时针)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
      ctx.stroke();
    }
  }
```

如果你想看到连续的线，你可以移除调用的 moveTo()。

### 线

绘制直线，需要用到的方法`lineTo()`。

- [`lineTo(x, y)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo)

  绘制一条从当前位置到指定 x 以及 y 位置的直线。

该方法有两个参数：x 以及 y，代表坐标系中直线结束的点。**开始点和之前的绘制路径有关**，之前路径的结束点就是接下来的开始点，等等。开始点也可以通过`moveTo()`函数改变。

下面的例子绘制两个三角形，一个是填充的，另一个是描边的。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";
      
      // 填充三角形
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();

      //描边三角形
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    }
  }
```

你会注意到填充与描边三角形步骤有所不同。正如上面所提到的，因为路径使用填充（fill）时，路径自动闭合，使用描边（stroke）则不会闭合路径。**如果没有添加闭合路径`closePath()`到描边三角形函数中，则只绘制了两条线段**，并不是一个完整的三角形。

### 圆弧

绘制圆弧或者圆，我们使用`arc()`方法。当然可以使用`arcTo()`，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

- [`arc(x, y, radius, startAngle, endAngle, anticlockwise)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc)

  画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（**默认为顺时针**）来生成。

- [`arcTo(x1, y1, x2, y2, radius)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arcTo)

  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下 arc 方法，该方法有六个参数：`x,y`为绘制圆弧所在圆上的圆心坐标。`radius`为半径。`startAngle`以及`endAngle`参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。参数`anticlockwise`为一个布尔值。**为 true 时，是逆时针方向**，否则顺时针方向。

> 注意：`arc()`函数中表示角的**单位是弧度**，不是角度。角度与弧度的 js 表达式：**弧度=(Math.PI/180)\*角度。**

下面的例子比上面的要复杂一下，下面绘制了 12 个不同的角度以及填充的圆弧。

下面两个`for`循环，生成圆弧的行列（x,y）坐标。**每一段圆弧的开始都调用`beginPath()`**。代码中，每个圆弧的参数都是可变的，实际编程中，我们并不需要这样做。

x,y 坐标是可变的。半径（radius）和开始角度（startAngle）都是固定的。结束角度（endAngle）在第一列开始时是 180 度（半圆）然后每列增加 90 度。最后一列形成一个完整的圆。

`clockwise`语句作用于第一、三行是顺时针的圆弧，`anticlockwise`作用于二、四行为逆时针圆弧。`if`语句让一、二行描边圆弧，下面两行填充路径。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          let x = 25 + j * 50;  // x 坐标值
          let y = 25 + i * 50;  // y 坐标值
          let radius = 20;  // 圆弧半径
          let startAngle = 0; //开始点
          let endAngle = Math.PI + (Math.PI * j) / 2;  //结束点
          let anticlockwise = i % 2 === 0 ? false : true;  // 顺时针或逆时针

          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }
```

### 二次贝塞尔曲线及三次贝塞尔曲线

下一个十分有用的路径类型就是[贝塞尔曲线](https://zh.wikipedia.org/wiki/貝茲曲線)。二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。

- `quadraticCurveTo(cp1x, cp1y, x, y)`

  绘制二次贝塞尔曲线，`cp1x,cp1y`为一个控制点，`x,y为`结束点。

- `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`

  绘制三次贝塞尔曲线，`cp1x,cp1y`为控制点一，`cp2x,cp2y`为控制点二，`x,y`为结束点。

![img](https://mdn.mozillademos.org/files/223/Canvas_curves.png)右边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。

**参数 x、y 在这两个方法中都是结束点坐标。**`cp1x,cp1y`为坐标中的第一个**控制点**，`cp2x,cp2y`为坐标中的第二个**控制点**。

使用二次以及三次贝塞尔曲线是有一定的难度的，因为不同于像 Adobe Illustrators 这样的矢量软件，**我们所绘制的曲线没有给我们提供直接的视觉反馈。这让绘制复杂的图形变得十分困难**。在下面的例子中，我们会绘制一些简单有规律的图形，如果你有时间以及更多的耐心，很多复杂的图形你也可以绘制出来。

下面的这些例子没有多少困难。这两个例子中我们会连续绘制贝塞尔曲线，最后形成复杂的图形。

#### 二次贝塞尔曲线

这个例子使用多个贝塞尔曲线来渲染对话气泡。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

      ctx.beginPath();
      ctx.moveTo(75, 25);

      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }
  }
```

#### 三次贝塞尔曲线

这个例子使用贝塞尔曲线绘制心形。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");

    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

      ctx.beginPath();
      ctx.moveTo(75, 40);

      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
  }
```

### 矩形

直接在画布上绘制矩形的三个额外方法，正如我们开始所见的[绘制矩形](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#绘制矩形)，同样，也有 rect() 方法，将一个矩形路径增加到当前路径上。

- `rect(*x*, *y*, *width*, *height*)`

  绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。

当该方法执行的时候，moveTo() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

      ctx.beginPath();
      ctx.rect(20, 20, 60, 40);
      ctx.fill();
    }
  }
```

### 组合使用

目前为止，每一个例子中的每个图形都只用到一种类型的路径。然而，绘制一个图形并没有限制使用数量以及类型。所以在最后的一个例子里，让我们组合使用所有的路径函数来重现一款著名的游戏。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

      roundedRect(ctx, 12, 12, 150, 150, 15);
      roundedRect(ctx, 19, 19, 150, 150, 9);
      roundedRect(ctx, 53, 53, 49, 33, 10);
      roundedRect(ctx, 53, 119, 49, 16, 6);
      roundedRect(ctx, 135, 53, 49, 33, 10);
      roundedRect(ctx, 135, 119, 25, 49, 10);

      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7 - Math.PI / 7, false);
      ctx.lineTo(31, 37);
      ctx.fill();

      for (let i = 0; i < 8; i++){
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }
      for (let i = 0; i < 6; i++){
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }
      for (let i = 0; i < 8; i++){
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }

      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();

      // 封装的一个用于绘制圆角矩形的函数。
      function roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
        ctx.lineTo(x + width - radius, y + height);
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        ctx.lineTo(x + width, y + radius);
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.quadraticCurveTo(x, y, x, y + radius);
        ctx.stroke();
      }
    }
  }
```

## Path2D 对象

正如我们在前面例子中看到的，你可以使用一系列的路径和绘画命令来把对象“画”在画布上。为了简化代码和提高性能，[`Path2D`](https://developer.mozilla.org/zh-CN/docs/Web/API/Path2D)对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。

怎样产生一个 Path2D 对象呢？

- [`Path2D()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Path2D/Path2D)

  `Path2D()`会返回一个新初始化的 Path2D 对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含 SVG path 数据的字符串作为变量）。

```js
new Path2D();     // 空的 Path 对象
new Path2D(path); // 克隆 Path 对象
new Path2D(d);    // 从 SVG 建立 Path 对象
```

所有的路径方法比如`moveTo`, `rect`, `arc`或`quadraticCurveTo`等，如我们前面见过的，都可以在 Path2D 中使用。

Path2D API 添加了 `addPath`作为将`path`结合起来的方法。当你想要从几个元素中来创建对象时，这将会很实用。比如：

- **[`Path2D.addPath(path [, transform\])`](https://developer.mozilla.org/zh-CN/docs/Web/API/Path2D/addPath)**

  添加了一条路径到当前路径（可能添加了一个变换矩阵）。

### Path2D 示例

在这个例子中，我们创造了一个矩形和一个圆。它们都被存为 Path2D 对象，后面再派上用场。随着新的 Path2D API 产生，几种方法也相应地被更新来使用 Path2D 对象而不是当前路径。在这里，带路径参数的`stroke`和`fill`可以把对象画在画布上。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

     let rectangle = new Path2D();
     rectangle.rect(10, 10, 50, 50);

     let circle = new Path2D();
     circle.moveTo(125, 35);
     circle.arc(100, 35, 35, 0, Math.PI * 2);

     ctx.stroke(rectangle);
     ctx.fill(circle);
    }
  }
```

### 使用 SVG paths

新的 Path2D API 有另一个强大的特点，就是使用 SVG path data 来初始化 canvas 上的路径。这将使你获取路径时可以以 SVG 或 canvas 的方式来重用它们。

这条路径将先移动到点 `(M10 10)` 然后再水平移动 80 个单位`(h 80)`，然后下移 80 个单位 `(v 80)`，接着左移 80 个单位 `(h -80)`，再回到起点处 (`z`)。你可以在[Path2D constructor](https://developer.mozilla.org/en-US/docs/Web/API/Path2D.Path2D#Using_SVG_paths) 查看这个例子。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.fillStyle = "rgb(20, 80, 60)";

      let p = new Path2D('M10 10 h 80 v 80 h -80 Z');
      ctx.fill(p);
    }
  }
```

# 使用样式和颜色

## [色彩 Colors](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)

到目前为止，我们只看到过绘制内容的方法。如果我们想要给图形上色，有两个重要的属性可以做到：`fillStyle` 和 `strokeStyle。`

- [`fillStyle = color`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle)

  设置图形的填充颜色。

- [`strokeStyle = color`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

  设置图形轮廓的颜色。

`color` 可以是表示 CSS 颜色值的字符串，渐变对象或者图案对象。我们迟些再回头探讨渐变和图案对象。默认情况下，线条和填充颜色都是黑色（CSS 颜色值 `#000000`）。

> **注意：** 一旦您设置了 `strokeStyle` 或者 `fillStyle` 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 `fillStyle` 或 `strokeStyle` 的值。

您输入的应该是符合 [CSS3 颜色值标准](https://www.w3.org/TR/css-color-3/) 的有效字符串。下面的例子都表示同一种颜色。

```js
// 这些 fillStyle 的值均为 '橙色'
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

### [`fillStyle` 示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_fillstyle_example)

在本示例里，我会再度用两层 `for` 循环来绘制方格阵列，每个方格不同的颜色。结果如右图，但实现所用的代码却没那么绚丽。我用了两个变量 i 和 j 来为每一个方格产生唯一的 RGB 色彩值，其中仅修改红色和绿色通道的值，而保持蓝色通道的值不变。你可以通过修改这些颜色通道的值来产生各种各样的色板。通过增加渐变的频率，你还可以绘制出类似 Photoshop 里面的那样的调色板。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      for (let i = 0; i < 6; i++){
        for (let j = 0; j < 6; j++){
          ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ", 0)";
          ctx.fillRect(j * 25, i * 25, 25, 25);
        }
      }
    }
  }
```

### [`strokeStyle` 示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_strokestyle_example)

这个示例与上面的有点类似，但这次用到的是 `strokeStyle` 属性，画的不是方格，而是用 `arc` 方法来画圆。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      for (let i = 0; i < 6; i++){
        for (let j = 0; j < 6; j++){
          ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ")";
          ctx.beginPath();
          ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
          ctx.stroke();
        }
      }
    }
  }
```

## [透明度 Transparency](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#transparency)

除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。通过设置 `globalAlpha` 属性或者使用一个半透明颜色作为轮廓或填充的样式。

## [透明度 Transparency](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#transparency)

除了可以绘制实色图形，我们还可以用 canvas 来绘制半透明的图形。通过设置 `globalAlpha` 属性或者使用一个半透明颜色作为轮廓或填充的样式。

- [`globalAlpha = transparencyValue`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalAlpha)

  这个属性影响到 canvas 里所有图形的透明度，**有效的值范围是 0.0（完全透明）到 1.0（完全不透明）**，默认是 1.0。

`globalAlpha` 属性在需要绘制大量拥有相同透明度的图形时候相当高效。不过，我认为下面的方法可操作性更强一点。

因为 `strokeStyle` 和 `fillStyle` 属性接受符合 CSS 3 规范的颜色值，**那我们可以用下面的写法来设置具有透明度的颜色**。

```js
// 指定透明颜色，用于描边和填充样式
ctx.strokeStyle = "rgba(255,0,0,0.5)";
ctx.fillStyle = "rgba(255,0,0,0.5)";
```

`rgba() `方法与 `rgb() `方法类似，就多了一个用于**设置色彩透明度的参数**。它的有效范围是从 0.0（完全透明）到 1.0（完全不透明）。

### [`globalAlpha` 示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_globalalpha_example)

在这个例子里，将用四色格作为背景，设置 `globalAlpha` 为 `0.2` 后，在上面画一系列半径递增的半透明圆。最终结果是一个径向渐变效果。圆叠加得越更多，原先所画的圆的透明度会越低。通过增加循环次数，画更多的圆，从中心到边缘部分，背景图会呈现逐渐消失的效果。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      //画背景
      ctx.fillStyle = "#FD0";
      ctx.fillRect(0, 0, 75, 75);
      ctx.fillStyle = "#6C0";
      ctx.fillRect(75, 0, 75, 75);
      ctx.fillStyle = "#09F";
      ctx.fillRect(0, 75, 75, 75);
      ctx.fillStyle = "#F30";
      ctx.fillRect(75, 75, 75, 75);
      ctx.fillStyle = "#FFF";

      //设置透明度
      ctx.globalAlpha = 0.2;
      // 画半透明圆

      for (let i = 0; i < 7; i++){
        ctx.beginPath();
        ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
        ctx.fill();
      }
    }
  }
```

### [`rgba()` 示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#an_example_using_rgba)

第二个例子和上面那个类似，不过不是画圆，而是画矩形。这里还可以看出，rgba() 可以分别设置轮廓和填充样式，因而具有更好的可操作性和使用灵活性。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      //画背景
      ctx.fillStyle = 'rgb(255,221,0)';
      ctx.fillRect(0,0,150,37.5);
      ctx.fillStyle = 'rgb(102,204,0)';
      ctx.fillRect(0,37.5,150,37.5);
      ctx.fillStyle = 'rgb(0,153,255)';
      ctx.fillRect(0,75,150,37.5);
      ctx.fillStyle = 'rgb(255,51,0)';
      ctx.fillRect(0,112.5,150,37.5);

      // 画半透明矩形
      for (let i = 0; i < 10; i++){
        ctx.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10})`;
        for (let j = 0; j < 4; j++){
          ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
        }
      }
    }
  }
```

## [线型 Line styles](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles)

可以通过一系列属性来设置线的样式。

- [`lineWidth = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineWidth)

  设置线条宽度。

- [`lineCap = type`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)

  设置线条末端样式。

- [`lineJoin = type`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)

  设定线条与线条间接合处的样式。

- [`miterLimit = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)

  限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。

- [`getLineDash()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getLineDash)

  返回一个包含当前虚线样式，长度为非负偶数的数组。

- [`setLineDash(segments)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)

  设置当前虚线样式。

- [`lineDashOffset = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)

  设置虚线样式的起始偏移量。

通过以下的样例可能会更加容易理解。

#### `lineWidth` 属性的例子

这个属性设置当前绘线的粗细。属性值必须为正数。默认值是 1.0。

**线宽**是指**给定路径的中心到两边的粗细**。换句话说就是**在路径的两边各绘制线宽的一半**。因为画布的坐标并不和像素直接对应，当需要获得精确的水平或垂直线的时候要特别注意。

在下面的例子中，用递增的宽度绘制了 10 条直线。最左边的线宽 1.0 单位。并且，**最左边的以及所有宽度为奇数的线并不能精确呈现**，这就是因为路径的定位问题。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      ctx.fillStyle = 'rgb(11, 10, 66)';
      ctx.strokeStyle = 'rgb(67, 26, 66)';

      // 画半透明矩形
      for (let i = 0; i < 10; i++){
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(5 + i * 14, 5);
        ctx.lineTo(5 + i * 14, 140);
        ctx.stroke();
      }
    }
  }
```

想要获得精确的线条，必须对线条是如何描绘出来的有所理解。见下图，用网格来代表 canvas 的坐标格，每一格对应屏幕上一个像素点。在第一个图中，填充了 (2,1) 至 (5,5) 的矩形，整个区域的边界刚好落在像素边缘上，这样就可以得到的矩形有着清晰的边缘。

![img](https://developer.mozilla.org/@api/deki/files/601/=Canvas-grid.png)

如果你想要绘制一条从 (3,1) 到 (3,5)，宽度是 1.0 的线条，你会得到像第二幅图一样的结果。**实际填充区域（深蓝色部分）仅仅延伸至路径两旁各一半像素**。**而这半个像素又会以近似的方式进行渲染，这意味着那些像素只是部分着色**，**结果就是以实际笔触颜色一半色调的颜色来填充整个区域（浅蓝和深蓝的部分）**。这就是上例中为何宽度为 1.0 的线并不准确的原因。

要解决这个问题，你必须对路径施以更加精确的控制。已知粗 1.0 的线条会在路径两边各延伸半像素，那么像第三幅图那样绘制从 (3.5,1) 到 (3.5,5) 的线条**，其边缘正好落在像素边界，填充出来就是准确的宽为 1.0 的线条**。

> **注意：**在这个竖线的例子中，其 Y 坐标刚好落在网格线上，否则端点上同样会出现半渲染的像素点（但还要注意，这种行为的表现取决于当前的 lineCap 风格，它默认为 butt；**您可能希望通过将 lineCap 样式设置为 square 正方形，来得到与奇数宽度线的半像素坐标相一致的笔画**，这样，端点轮廓的外边框将被自动扩展以完全覆盖整个像素格）。

> 还请注意，只有路径的起点和终点受此影响：如果一个路径是通过 closePath() 来封闭的，它是没有起点和终点的；相反的情况下，路径上的所有端点都与上一个点相连，下一段路径使用当前的 lineJoin 设置（默认为 miter），如果相连路径是水平和/或垂直的话，会导致相连路径的外轮廓根据相交点自动延伸，因此渲染出的路径轮廓会覆盖整个像素格。接下来的两个小节将展示这些额外的行样式。

对于那些宽度为偶数的线条，每一边的像素数都是整数，那么你想要其路径是落在像素点之间 (如那从 (3,1) 到 (3,5)) 而不是在像素点的中间。同样，注意到那个例子的垂直线条，**其 Y 坐标刚好落在网格线上，如果不是的话，端点上同样会出现半渲染的像素点**。

虽然开始处理可缩放的 2D 图形时会有点小痛苦，但是**及早注意到像素网格与路径位置之间的关系，可以确保图形在经过缩放或者其它任何变形后都可以保持看上去蛮好**：线宽为 1.0 的垂线在放大 2 倍后，会变成清晰的线宽为 2.0，并且出现在它应该出现的位置上。

#### `lineCap` 属性的例子

![img](https://developer.mozilla.org/@api/deki/files/88/=Canvas_linecap.png)

属性 `lineCap` 的值**决定了线段端点显示的样子**。它可以为下面的三种的其中之一：`butt`，`round` 和 `square`。默认是 `butt。`

在这个例子里面，我绘制了三条直线，分别赋予不同的 `lineCap` 值。还有两条辅助线，为了可以看得更清楚它们之间的区别，**三条线的起点终点都落在辅助线上**。

最左边的线用了默认的 `butt` 。可以注意到它是与辅助线齐平的。中间的是 `round` 的效果，端点处加上了半径为一半线宽的半圆。右边的是 `square` 的效果，**端点处加上了等宽且高度为一半线宽的方块**。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      ctx.fillStyle = 'rgb(11, 10, 66)';
      ctx.strokeStyle = 'rgb(67, 26, 66)';
      const lineCaps = ["butt", "round", "square"];

      // 创建路径
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(140, 10);
      ctx.moveTo(10, 140);
      ctx.lineTo(140, 140);
      ctx.stroke();

      // 画线条
      ctx.strokeStyle = "black";
      for (let i = 0; i < 3; i++){
        ctx.lineWidth = 15;
        ctx.lineCap = lineCaps[i];
        ctx.beginPath();
        ctx.moveTo(25 + i * 50, 10);
        ctx.lineTo(25 + i * 50, 140);
        ctx.stroke();
      }
    }
  }
```

#### `lineJoin` 属性的例子

![img](https://developer.mozilla.org/@api/deki/files/89/=Canvas_linejoin.png)

`lineJoin` 的属性值决定了图形中两线段连接处所显示的样子。它可以是这三种之一：`round`, `bevel` 和 `miter。`默认是 `miter``。`

这里我同样用三条折线来做例子，分别设置不同的 `lineJoin` 值。最上面一条是 `round` 的效果，边角处被磨圆了，**圆的半径等于线宽**。中间和最下面一条分别是 bevel 和 miter 的效果。当值是 `miter `的时候，线段会在连接处外侧延伸直至交于一点，延伸效果受到下面将要介绍的 `miterLimit` 属性的制约。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      ctx.fillStyle = 'rgb(11, 10, 66)';
      ctx.strokeStyle = 'rgb(67, 26, 66)';
      const lineJoins = ["round", "bevel", "miter"];

      // 画线条
      ctx.lineWidth = 10;
      for (let i = 0; i < 3; i++){
        ctx.lineJoin = lineJoins[i];
        ctx.beginPath();
        ctx.moveTo(-5, 5 + i * 40);
        ctx.lineTo(35, 45 + i * 40);
        ctx.lineTo(75, 5 + i * 40);
        ctx.lineTo(115, 45 + i * 40);
        ctx.lineTo(155, 5 + i * 40);
        ctx.stroke();
      }
    }
  }
```

#### `miterLimit` 属性的演示例子

就如上一个例子所见的应用 `miter` 的效果，线段的外侧边缘会被延伸交汇于一点上。线段之间夹角比较大时，交点不会太远，**但随着夹角变小，交点距离会呈指数级增大。**

`miterLimit` 属性就是用来设定外延交点与连接点的最大距离，**如果交点距离大于此值，连接效果会变成了 bevel**。注意，最大斜接长度（即交点距离）是当前坐标系测量线宽与此`miterLimit`属性值（HTML canvas 默认为 10.0）的乘积，**所以`miterLimit`可以单独设置，不受显示比例改变或任何仿射变换的影响**：它只影响线条边缘的有效绘制形状。

更准确的说，斜接限定值（`miterLimit`）是**延伸长度**（在 HTML Canvas 中，这个值是线段外连接点与路径中指定的点之间的距离）与**一半线宽**的**最大允许比值**。它也可以被等效定义为线条内外连接点距离（`miterLength`）与线宽（`lineWidth`）的最大允许比值（因为路径点是内外连接点的中点）。这等同于相交线段最小内夹角（*θ* ）的一半的余割值，小于此角度的斜接将不会被渲染，而仅渲染斜边连接：

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** *θ* / 2 )
- 斜接限定值默认为 10.0，这将会去除所有小于大约 11 度的斜接。
- 斜接限定值为√2 ≈ 1.4142136（四舍五入）时，将去除所有锐角的斜接，仅保留钝角或直角。
- 1.0 是合法的斜接限定值，但这会去除所有斜接。
- **小于 1.0 的值不是合法的斜接限定值。**

在下面的小示例中，您可以动态的设置`miterLimit`的值并查看它对画布中图形的影响。蓝色线条指出了锯齿图案中每个线条的起点与终点（同时也是不同线段之间的连接点）。

在此示例中，当您设定`miterLimit`的值小于 4.2 时，图形可见部分的边角不会延伸相交，而是在蓝色线条边呈现斜边连接效果；当`miterLimit`的值大于 10.0 时，此例中大部分的边角都会在远离蓝线的位置相交，且从左至右，距离随着夹角的增大而减小；而介于上述值之间的值所呈现的效果，也介于两者之间。

```html
    <canvas id="test1" width="400" height="400"></canvas>
    <input type="number" id="miterlimit1" min="1" value="10" />
    <button onclick="draw();">重绘</button>
<script type="text/javascript">
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      ctx.clearRect(0, 0, 400, 400);  // 清空画布
      // 绘制参考线
      ctx.strokeStyle = 'rgb(67, 26, 66)';
      ctx.lineWidth = 2;
      ctx.strokeRect(-5, 50, 160, 50);

      // 设置线条样式
      ctx.strokeStyle = "#432888";
      ctx.lineWidth = 10;
      
       // 检查输入
      let miterlimit1 = document.getElementById("miterlimit1").value;
      if (miterlimit1.match(/\d+(\.\d+)?/)){
        ctx.miterLimit = parseFloat(miterlimit1.value);
      }else{
        alert("Value must be a positive number");
      }
      console.log(miterlimit1);
      // 绘制线条
      ctx.beginPath();
      ctx.moveTo(0, 100);
      for (let i = 0; i < 24; i++){
        let dy = i % 2 === 0 ? 25 : -25;
        ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
      }
      ctx.stroke();
      return false;
    }
  }
</script>
```

### [使用虚线](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#using_line_dashes)

用 `setLineDash` 方法和 `lineDashOffset` 属性来制定虚线样式。**`setLineDash` 方法接受一个数组，来指定线段与间隙的交替**；`lineDashOffset `属性设置起始偏移量。

在这个例子中，我们要创建一个蚂蚁线的效果。它往往应用在计算机图形程序选区工具动效中。它可以帮助用户通过动画的边界来区分图像背景选区边框。

```js
  let testCanvas = document.getElementById("test1");
  let ctx = testCanvas.getContext("2d");
  let offset = 0
  function draw() {
    ctx.clearRect(0, 0, testCanvas.width, testCanvas.height);
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 100, 100);
  }
  function march() {
    offset++;
    if (offset > 16){
      offset = 0;
    }
    draw();
    setTimeout(march, 20);
  }
  march();
```

## [渐变 Gradients](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#gradients)

就好像一般的绘图软件一样，我们可以用线性或者径向的渐变来填充或描边。我们用下面的方法新建一个 `canvasGradient` 对象，并且赋给图形的 `fillStyle` 或 `strokeStyle` 属性。

- [`createLinearGradient(x1, y1, x2, y2)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)

  createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。

- [`createRadialGradient(x1, y1, r1, x2, y2, r2)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)

  createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。

```js
var lineargradient = ctx.createLinearGradient(0,0,150,150);
var radialgradient = ctx.createRadialGradient(75,75,0,75,75,100);
```

创建出 `canvasGradient` 对象后，我们就可以用 `addColorStop` 方法给它上色了。

- [`gradient.addColorStop(position, color)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasGradient/addColorStop)

  addColorStop 方法接受 2 个参数，`position` 参数**必须是一个 0.0 与 1.0 之间的数值**，**表示渐变中颜色所在的相对位置**。例如，0.5 表示颜色会出现在正中间。`color` 参数必须是一个有效的 CSS 颜色值（如 #FFF，rgba(0,0,0,1)，等等）。

你可以根据需要添加任意多个色标（color stops）。下面是最简单的线性黑白渐变的例子。

```js
    let lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
    lineargradient.addColorStop(0, "white");
    lineargradient.addColorStop(1, "black");
```

#### `createLinearGradient` 的例子

![img](https://developer.mozilla.org/@api/deki/files/87/=Canvas_lineargradient.png)

本例中，我弄了两种不同的渐变。第一种是**背景色渐变**，你会发现，我给同一位置设置了两种颜色，你也可以用这来实现突变的效果，就像这里从白色到绿色的突变。**一般情况下，色标的定义是无所谓顺序的，但是色标位置重复时，顺序就变得非常重要了**。所以，保**持色标定义顺序和它理想的顺序一致**，结果应该没什么大问题。

第二种渐变，我并不是从 0.0 位置开始定义色标，因为那并不是那么严格的。**在 0.5 处设一黑色色标，渐变会默认认为从起点到色标之间都是黑色。**

你会发现，`strokeStyle` 和 `fillStyle` 属性都可以接受 `canvasGradient` 对象。

```js
<script type="text/javascript">
  let testCanvas = document.getElementById("test1");
  let ctx = testCanvas.getContext("2d");
  function draw() {
    //创建渐变
    let lineargradient1 = ctx.createLinearGradient(0, 0, 0, 150);
    lineargradient1.addColorStop(0, "#00ABEB");
    lineargradient1.addColorStop(0.5, "#FFFFFF");
    lineargradient1.addColorStop(0.5, "#26C000");
    lineargradient1.addColorStop(1, "#FFFFFF");

    let lineargradient2 = ctx.createLinearGradient(0, 50, 0, 95);
    lineargradient2.addColorStop(0.5, "#000000");
    lineargradient2.addColorStop(0.5, "rgba(0, 0, 0, 0)");

    //为填充和描边样式分配渐变
    ctx.fillStyle = lineargradient1;
    ctx.strokeStyle = lineargradient2;

    //绘制形状
    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
  }
```

### [`createRadialGradient` 的例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_createradialgradient_example)

这个例子，我定义了 4 个不同的径向渐变。由于可以控制渐变的起始与结束点，所以我们可以实现一些比（如在 Photoshop 中所见的）经典的径向渐变更为复杂的效果。（经典的径向渐变是只有一个中心点，简单地由中心点向外围的圆形扩张）

```js
  function draw() {
    //创建渐变
    let radgrad1 = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
    radgrad1.addColorStop(0, '#A7D30C');
    radgrad1.addColorStop(0.9, '#019F62');
    radgrad1.addColorStop(1, 'rgba(1,159,98,0)');

    let radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(0.75, '#FF0188');
    radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

    let radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(0.8, '#00B5E2');
    radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

    let radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(0.8, '#E4C700');
    radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

    //绘制形状
    ctx.fillStyle = radgrad1;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radgrad3;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radgrad2;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radgrad4;
    ctx.fillRect(0, 0, 150, 150);
  }
```

这里，我让起点稍微偏离终点，这样可以达到一种球状 3D 效果。但最好不要让里圆与外圆部分交叠，那样会产生什么效果就真是不得而知了。

4 个径向渐变效果的最后一个色标都是透明色。**如果想要两色标直接的过渡柔和一些，只要两个颜色值一致就可以了**。代码里面看不出来，是因为我用了两种不同的颜色表示方法，但其实是相同的，`#019F62 = rgba(1,159,98,1)。`

## [图案样式 Patterns](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#patterns)

上一节的一个例子里面，我用了循环来实现图案的效果。其实，有一个更加简单的方法：`createPattern。`

- [`createPattern(image, type)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createPattern)

  该方法接受两个参数。Image 可以是一个 `Image` 对象的引用，或者另一个 canvas 对象。`Type` 必须是下面的字符串值之一：`repeat`，`repeat-x`，`repeat-y` 和 `no-repeat`。

> **注意：** 用 canvas 对象作为 `Image` 参数在 Firefox 1.5 (Gecko 1.8) 中是无效的。

图案的应用跟渐变很类似的，创建出一个 pattern 之后，赋给 `fillStyle` 或 `strokeStyle` 属性即可。

```js
var img = new Image();
img.src = 'someimage.png';
var ptrn = ctx.createPattern(img,'repeat');
```

> **注意：**与 drawImage 有点不同，你需要确认 image 对象已经装载完毕，否则图案可能效果不对的。

### [`createPattern` 的例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_createpattern_example)

在最后的例子中，我创建一个图案然后赋给了 `fillStyle` 属性。唯一要注意的是，**使用 Image 对象的 `onload` handler 来确保设置图案之前图像已经装载完毕。**

```js
  function draw() {
    // 创建新 image 对象，用作图案
    let img = new Image();
    img.src = "./image1/img1.png";
    img.onload = function(){
      //创建图案
      let pattern = ctx.createPattern(img, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, 180, 235);
    }
  }
```

## [阴影 Shadows](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#阴影_shadows)

- [`shadowOffsetX = float`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)

  `shadowOffsetX` 和 `shadowOffsetY `用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。**负值表示阴影会往上或左延伸**，正值则表示会往下或右延伸，它们**默认都为 `0`**。

- [`shadowOffsetY = float`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)

  shadowOffsetX 和 `shadowOffsetY `用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，**正值则表示会往下或右延伸**，它们默认都为 `0`。

- [`shadowBlur = float`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowBlur)

  shadowBlur **用于设定阴影的模糊程度**，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 `0`。

- [`shadowColor = color`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowColor)

  shadowColor 是标准的 CSS 颜色值，**用于设定阴影颜色效果**，默认是全透明的黑色。

### [文字阴影的例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#a_shadowed_text_example)

这个例子绘制了带阴影效果的文字。

```js
  function draw() {
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "rgba(66, 0, 58, 0.5)";

    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Sample String shadow", 30, 50);
  }
```

## [Canvas 填充规则](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#canvas_fill_rules)

当我们用到 `fill`（或者 [`clip`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip)和[`isPointinPath`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/isPointInPath) ）你可以选择一个填充规则，**该填充规则根据某处在路径的外面或者里面来决定该处是否被填充**，这对于自己与自己路径相交或者路径被嵌套的时候是有用的。

两个可能的值：

-  `nonzero`: [non-zero winding rule](http://en.wikipedia.org/wiki/Nonzero-rule), 默认值。
- ` evenodd`: [even-odd winding rule](http://en.wikipedia.org/wiki/Even–odd_rule).

这个例子，我们用填充规则 `evenodd`

```js
  function draw() {
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
    ctx.arc(150, 150, 30, 0, Math.PI * 2, true);
    ctx.fill("evenodd")
  }
```

# 绘制文本

canvas 提供了两种方法来渲染文本：

- [`fillText(text, x, y [, maxWidth\])`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillText)

  在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。

- [`strokeText(text, x, y [, maxWidth\])`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeText)

  在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

### [一个填充文本的示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text#a_filltext_example)

文本用当前的填充方式被填充：

```js
  function draw() {
    ctx.font = "48px serif";
    ctx.fillText("Hello World",50, 50, 300);
  }
```

### [一个文本边框的示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text#a_stroketext_example)

文本用当前的边框样式被绘制：

```js
  function draw() {
    ctx.font = "48px serif";
    ctx.strokeStyle = "#345fff";
    ctx.strokeText("Hello World",50, 50, 300);
  }
```

## [有样式的文本](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text#有样式的文本)

在上面的例子用我们已经使用了 `font` 来使文本比默认尺寸大一些。还有更多的属性可以让你改变 canvas 显示文本的方式：

- [`font = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/font)

  当前我们用来绘制文本的样式。这个字符串使用和 [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 属性相同的语法。**默认的字体是 `10px sans-serif`。**

- [`textAlign = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)

  文本对齐选项。可选的值包括：`start`, `end`, `left`, `right` or `center`. 默认值是 `start`。

- [`textBaseline = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline)

  基线对齐选项。可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic。`

- [`direction = value`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/direction)

  文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit。`

如果你之前使用过 CSS，那么这些选项你会很熟悉。

### [textBaseline 例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text#textbaseline例子)

编辑下面的代码，看看它们在 canvas 中的变化：

```js
  function draw() {
    ctx.font = "48px serif";
    ctx.strokeStyle = "#345fff";
    ctx.textBaseline = "hanging";  //top, hanging, middle, alphabetic, ideographic, bottom
    ctx.strokeText("Hello World",50, 50, 300);
  }

function draw() {
    ctx.font = '48px serif';
    ctx.fillText('Hi!', 150, 50);
    ctx.direction = 'rtl';
    ctx.fillText('Hi!', 150, 130);
  }
```

## [预测量文本宽度](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text#预测量文本宽度)

当你需要获得更多的文本细节时，下面的方法可以给你测量文本的方法。

- [`measureText()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/measureText)

  将返回一个 [`TextMetrics`](https://developer.mozilla.org/zh-CN/docs/Web/API/TextMetrics)对象的宽度、所在像素，这些体现文本特性的属性。

下面的代码段将展示如何测量文本来获得它的宽度：

```js
  function draw() {
    ctx.font = '48px serif';
    ctx.strokeStyle = "#345fff";
    ctx.strokeText("Hello World",50, 50, 300);

    let text = ctx.measureText("Hello World");
    console.log(text.width); // 264
  }
```

# 使用图像 Using images

canvas 更有意思的一项特性就是图像操作能力。可以用于动态的图像合成或者作为图形的背景，以及游戏界面（Sprites）等等。浏览器支持的任意格式的外部图片都可以使用，比如 PNG、GIF 或者 JPEG。你甚至可以将同一个页面中其他 canvas 元素生成的图片作为图片源。

引入图像到 canvas 里需要以下两步基本操作：

1. 获得一个指向[`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)的对象或者另一个 canvas 元素的引用作为源，也可以通过提供一个 URL 的方式来使用图片（参见[例子](https://www.html5canvastutorials.com/tutorials/html5-canvas-images/)）
2. 使用`drawImage()`函数将图片绘制到画布上

## [获得需要绘制的图片](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#获得需要绘制的图片)

canvas 的 API 可以使用下面这些类型中的一种作为图片的源：

- **[`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)**

  这些图片是由`Image()函数构造出来的，或者任何的<img>元素`

- **[`HTMLVideoElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)**

  用一个 HTML 的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)元素作为你的图片源，可以从视频中抓取当前帧作为一个图像

- **[`HTMLCanvasElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement)**

  可以使用另一个 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 元素作为你的图片源。

- **[`ImageBitmap`](https://developer.mozilla.org/zh-CN/docs/Web/API/ImageBitmap)**

  这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其它几种源中生成。

这些源统一由 [`CanvasImageSource`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasImageSource)类型来引用。

有几种方式可以获取到我们需要在 canvas 上使用的图片。

### [使用相同页面内的图片](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#using_images_which_are_on_the_same_page)

我们可以通过下列方法的一种来获得与 canvas 相同页面内的图片的引用：

- [`document.images`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/images)集合
-  [`document.getElementsByTagName()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByTagName)方法
- 如果你知道你想使用的指定图片的 ID，你可以用[`document.getElementById()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById)获得这个图片

### [使用其它域名下的图片](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#using_other_canvas_elements)

在 [`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)上使用[crossOrigin](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes)属性，你可以请求加载其它域名上的图片。如果图片的服务器允许跨域访问这个图片，那么你可以使用这个图片而不污染 canvas，否则，使用这个图片将会[污染 canvas](https://developer.mozilla.org/zh-CN/docs/CORS_Enabled_Image#.E4.BB.80.E4.B9.88.E6.98.AF.22.E8.A2.AB.E6.B1.A1.E6.9F.93.22.E7.9A.84canvas)。

### [使用其它 canvas 元素](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#using_other_canvas_elements_2)

和引用页面内的图片类似地，用 `document.getElementsByTagName `或 `document.getElementById `方法来获取其它 canvas 元素。但你引入的应该是已经准备好的 canvas。

一个常用的应用就是将第二个 canvas 作为另一个大的 canvas 的缩略图。

### [由零开始创建图像](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#creating_an_image_from_scratch)

或者我们可以用脚本创建一个新的 [`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement) 对象。要实现这个方法，我们可以使用很方便的`Image()构造函数。`

```js
var img = new Image();   // 创建一个<img>元素
img.src = 'myImage.png'; // 设置图片源地址
```

当脚本执行后，图片开始装载。

若调用 `drawImage` 时，图片没装载完，那什么都不会发生（在一些旧的浏览器中可能会抛出异常）。因此你**应该用 load 事件来保证不会在加载完毕之前使用这个图片**：

```js
var img = new Image();   // 创建 img 元素
img.onload = function(){
  // 执行 drawImage 语句
}
img.src = 'myImage.png'; // 设置图片源地址
```

如果你只用到一张图片的话，这已经够了。但一旦需要不止一张图片，那就需要更加复杂的处理方法，但图片预加载策略超出本教程的范围。

### [通过 data: url 方式嵌入图像](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#embedding_an_image_via_data_url)

我们还可以通过 [data:url](http://en.wikipedia.org/wiki/Data:_URL) 方式来引用图像。Data urls 允许用一串 Base64 编码的字符串的方式来定义一个图片。

```js
img.src = 'data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==';
```

其**优点就是图片内容即时可用**，无须再到服务器兜一圈。（还有一个优点是，可以将 CSS，JavaScript，HTML 和 图片全部封装在一起，迁移起来十分方便。）**缺点就是图像没法缓存**，图片大的话内嵌的 url 数据会相当的长：

### [使用视频帧](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#drawimage)

你还可以使用`<video>` 中的视频帧（即便视频是不可见的）。例如，如果你有一个 ID 为“myvideo”的`<video>` 元素，你可以这样做：

```js
  function getMyVideo() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      let myVideo = document.getElementById("video1");
      return myVideo;
      
    }
  }
```

它将为这个视频返回[`HTMLVideoElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLVideoElement)对象，正如我们前面提到的，它可以作为我们的 Canvas 图片源。

## [绘制图片](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#drawimage_2)

一旦获得了源图对象，我们就可以使用 `drawImage` 方法将它渲染到 canvas 里。`drawImage` 方法有三种形态，下面是最基础的一种。

- **`drawImage(image, x, y)`**

  其中 `image` 是 image 或者 canvas 对象，**`x` 和 `y 是其在目标 canvas 里的起始坐标。`**

> SVG 图像必须在 <svg> 根指定元素的宽度和高度。

### [例子：一个简单的线图](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#example_a_simple_line_graph)

下面一个例子我用一个外部图像作为一线性图的背景。用背景图我们就不需要绘制复杂的背景，省下不少代码。这里只用到一个 image 对象，于是就在它的 `onload` 事件响应函数中触发绘制动作。`drawImage` 方法将背景图放置在 canvas 的左上角 (0,0) 处。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");

      let img = new Image();
      img.onload = function(){
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
        ctx.moveTo(30, 96);
        ctx.lineTo(70, 66);
        ctx.lineTo(103, 76);
        ctx.lineTo(170, 15);
        ctx.stroke();
      }

      img.src = "./image1/backdrop.png";
    }
  }
```

## [缩放 Scaling](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#scaling)

`drawImage` 方法的又一变种是增加了两个用于控制图像在 canvas 中缩放的参数。

- [`drawImage(image, x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)

  这个方法多了 2 个参数：`width` 和 `height，`**这两个参数用来控制 当向 canvas 画入时应该缩放的大小**

### [例子：平铺图像](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#example_tiling_an_image)

在这个例子里，我会用一张图片像背景一样在 canvas 中以重复平铺开来。实现起来也很简单，只需要循环铺开经过缩放的图片即可。见下面的代码，第一层 `for` 循环是做行重复，第二层是做列重复的。图像大小被缩放至原来的三分之一，50x38 px。这种方法可以用来很好的达到背景图案的效果，在下面的教程中会看到。

> 注意：图像可能会因为大幅度的缩放而变得起杂点或者模糊。如果您的图像里面有文字，那么最好还是不要进行缩放，因为那样处理之后很可能图像里的文字就会变得无法辨认了。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      let img = new Image();
      img.onload = function(){
        for (let i = 0; i < 4; i++){
          for (let j = 0; j < 3; j++){
            ctx.drawImage(img, j * 50, i * 38, 50, 38);
          }
        }
      }
      img.src = "./image1/rhino.jpg";
    }
  }
```

## [切片 Slicing](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#slicing)

`drawImage` 方法的第三个也是最后一个变种有 8 个新参数，用于控制做切片显示的。

- [`drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)

  第一个参数和其它的是相同的，都是一个图像或者另一个 canvas 的引用。其它 8 个参数最好是参照右边的图解，前 4 个是定义**图像源的切片位置和大小**，后 4 个则是定义切片的**目标显示位置和大小**。

![img](https://developer.mozilla.org/@api/deki/files/79/=Canvas_drawimage.jpg)

**切片是个做图像合成的强大工具**。假设有一张包含了所有元素的图像，那么你可以用这个方法来合成一个完整图像。例如，你想画一张图表，而手上有一个包含所有必需的文字的 PNG 文件，那么你可以很轻易的根据实际数据的需要来改变最终显示的图表。这方法的另一个好处就是你不需要单独装载每一个图像。

### [例子：相框](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#example_framing_an_image)

在这个例子里面我用到上面已经用过的犀牛图像，不过这次我要给犀牛头做个切片特写，然后合成到一个相框里面去。相框带有阴影效果，是一个以 24-bit PNG 格式保存的图像。因为 24-bit PNG 图像带有一个完整的 8-bit alpha 通道，与 GIF 和 8-bit PNG 不同，我可以将它放成背景而不必担心底色的问题。

我用一个与上面用到的不同的方法来装载图像，直接将图像插入到 HTML 里面，然后通过 CSS 隐藏（`display:none`）它。两个图像我都赋了 `id` ，方便后面使用。看下面的脚本，相当简单，首先对犀牛头做好切片（第一次`drawImage`）放在 canvas 上，然后再上面套个相框（第二次`drawImage`）。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      let img1 = new Image();
      let img2 = new Image();
      img1.onload = function(){
        ctx.drawImage(img1, 33, 71, 104, 124, 21, 20, 87, 104);
      }
      img2.onload = function() {
        ctx.drawImage(img2, 0, 0);
      }
      img1.src = "./image1/rhino.jpg";
      img2.src = "./image1/Canvas_picture_frame.png";
    }
  }
```

## [示例：画廊 Art gallery example](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#art_gallery_example)

这一章最后的示例是弄一个小画廊。画廊由挂着几张画作的格子组成。当页面装载好之后，为每张画创建一个 canvas 元素并用加上画框然后插入到画廊中去。

在这个例子里面，所有“画”都是固定宽高的，画框也是。你可以做些改进，通过脚本用画的宽高来准确控制围绕它的画框的大小。

下面的代码应该是蛮简单易懂的了。就是遍历图像对象数组，依次创建新的 canvas 元素并添加进去。可能唯一需要注意的，对于那些并不熟悉 DOM 的朋友来说，是 `insertBefore` 方法的用法。`insertBefore` 是父节点（单元格）的方法，用于将新节点（canvas 元素）插入到我们想要插入的节点之前。

```js
function draw() {

  // Loop through all images
  for (let i=0;i<document.images.length;i++){

    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute('id')!='frame'){

      // Create canvas element
      canvas = document.createElement('CANVAS');
      canvas.setAttribute('width',132);
      canvas.setAttribute('height',150);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // Draw image to canvas
      ctx.drawImage(document.images[i],15,20);

      // Add frame
      ctx.drawImage(document.getElementById('frame'),0,0);
    }
  }
}
```

## 控制图像的缩放行为 

如同前文所述，过度缩放图像可能会导致图像模糊或像素化。您可以通过使用绘图环境的[`imageSmoothingEnabled`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)属性来**控制是否在缩放图像时使用平滑算法**。默认值为`true`，即启用平滑缩放。您也可以像这样禁用此功能：

```js
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
```

# 变形 

变形是一种更强大的方法，可以将原点移动到另一点、对网格进行旋转和缩放。

## 状态的保存和恢复 

在了解变形之前，我先介绍两个在你开始绘制复杂图形时必不可少的方法。

- [`save()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/save)

  保存画布 (canvas) 的所有状态

- [`restore()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/restore)

  save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的**状态**就是**当前画面应用的所有样式和变形的一个快照。**

Canvas 状态存储在栈中，**每当`save()`方法被调用后，当前的状态就被推送到栈中保存**。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放，见下）
- 以及下面这些属性：strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前的裁切路径（clipping path）

你可以调用任意多次 `save`方法。**每一次调用 `restore` 方法，上一个保存的状态就从栈中弹出**，所有设定都恢复。

### [`save` 和 `restore` 的应用例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#a_save_and_restore_canvas_state_example)

我们尝试用这个连续矩形的例子来描述 canvas 的状态栈是如何工作的。

第一步是用默认设置画一个大四方形，然后保存一下状态。改变填充颜色画第二个小一点的蓝色四方形，然后再保存一下状态。再次改变填充颜色绘制更小一点的半透明的白色四方形。

到目前为止所做的动作和前面章节的都很类似。不过一旦我们调用 `restore`，状态栈中最后的状态会弹出，并恢复所有设置。如果不是之前用 `save `保存了状态，那么我们就需要手动改变设置来回到前一个状态，这个对于两三个属性的时候还是适用的，一旦多了，我们的代码将会猛涨。

当第二次调用 `restore` 时，已经恢复到最初的状态，因此最后是再一次绘制出一个黑色的四方形。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    if (testCanvas.getContext) {
      let ctx = testCanvas.getContext("2d");
      
      ctx.fillRect(0, 0, 150, 150);  // 使用默认设置绘制一个矩形
      ctx.save();  // 保存默认状态

      ctx.fillStyle = "#09F";  // 在原有配置基础上对颜色做改变
      ctx.fillRect(15, 15, 120, 120);  // 使用新的设置绘制一个矩形
      ctx.save();  // 保存当前状态

      ctx.fillStyle = "#FFF";  // 再次改变颜色配置
      ctx.globalAlpha = 0.5;
      ctx.fillRect(30, 30, 90, 90);  // 使用新的配置绘制一个矩形

      ctx.restore();  // 重新加载之前的颜色状态
      ctx.fillRect(45, 45, 60, 60);  // 使用上一次的配置绘制一个矩形

      ctx.restore();  // 加载默认颜色配置
      ctx.fillRect(60, 60, 30, 30);  // 使用加载的配置绘制一个矩形
    }
  }
```

## [移动 Translating](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#translating)


![img](https://developer.mozilla.org/@api/deki/files/85/=Canvas_grid_translate.png)

我们先介绍 `translate `方法，它用来移动 canvas 和它的原点到一个不同的位置。

- `translate(x, y)`

  `translate `方法接受两个参数。x 是左右偏移量，y 是上下偏移量，如右图所示。

在做变形之前先保存状态是一个良好的习惯。**大多数情况下，调用 restore 方法比手动恢复原先的状态要简单得多**。又，如果你是在一个循环中做位移但没有保存和恢复 canvas 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 canvas 范围以外了。

### [`translate` 的例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#a_translate_example)

这个例子显示了一些移动 canvas 原点的好处。如果不使用 `translate `方法，那么所有矩形都将被绘制在相同的位置（0,0）。`translate `方法**同时让我们可以任意放置这些图案，而不需要在 `fillRect()` 方法中手工调整坐标值，既好理解也方便使用**。

在 `draw `方法中调用 `fillRect()` 方法 9 次，用了 2 层循环。每一次循环，先移动 canvas，画螺旋图案，然后恢复到原始状态。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    let ctx = testCanvas.getContext("2d");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.save();
        ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
        ctx.translate(10 + j * 50, 10 + i * 50);
        ctx.fillRect(0, 0, 25, 25);
        ctx.restore();  //恢复到原始状态
      }
    }
  }
```

## [旋转 Rotating](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#rotating)

![img](https://developer.mozilla.org/@api/deki/files/84/=Canvas_grid_rotate.png)

第二个介绍 `rotate `方法，它用于以原点为中心旋转 canvas。

- `rotate(angle)`

  这个方法只接受一个参数：旋转的角度 (angle)，它是顺时针方向的，以弧度为单位的值。

**旋转的中心点始终是 canvas 的原点**，如果要改变它，我们需要用到 `translate `方法。

### rotate 的例子

在这个例子里，见右图，我用 `rotate `方法来画圆并构成圆形图案。当然你也可以分别计算出 x 和 y 坐标（`x = r*Math.cos(a); y = r*Math.sin(a)`）。这里无论用什么方法都无所谓的，因为我们画的是圆。计算坐标的结果只是旋转圆心位置，而不是圆本身。即使用 `rotate `旋转两者，那些圆看上去还是一样的，不管它们绕中心旋转有多远。

这里我们又用到了两层循环。**第一层循环决定环的数量，第二层循环决定每环有多少个点**。每环开始之前，我都保存一下 canvas 的状态，这样恢复起来方便。每次画圆点，我都以一定夹角来旋转 canvas，**而这个夹角则是由环上的圆点数目的决定的**。最里层的环有 6 个圆点，这样，每次旋转的夹角就是 360/6 = 60 度。往外每一环的圆点数目是里面一环的 2 倍，那么每次旋转的夹角随之减半。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    let ctx = testCanvas.getContext("2d");

    ctx.translate(75, 75);
    for (let i = 1; i < 6; i++) {
      ctx.save();
      ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
      for (let j = 0; j < 6 * i; j++) {
        ctx.rotate(Math.PI * 2 / (i * 6));
        ctx.beginPath();
        ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
        ctx.fill();
      }
      ctx.restore();
    }
  }
```

## 缩放 Scaling

接着是缩放。我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。

- `scale(x, y)`

  `scale ` 方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，**如果比 1 小，会缩小图形**，如果**比 1 大会放大图形**。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。**如果参数为负实数，相当于以 x 或 y 轴作为对称轴镜像反转**（例如，使用`translate(0,canvas.height); scale(1,-1);` 以 y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

**默认情况下，canvas 的 1 个单位为 1 个像素**。举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。同理，**设置为 2.0 时，1 个单位就对应变成了 2 像素**，绘制的结果就是图形放大了 2 倍。

### scale 的例子

这最后的例子里，我们用不同的缩放方式来画两个图形。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    let ctx = testCanvas.getContext("2d");

    // 画一个简单的矩形，但缩放它
    ctx.save();  //保存默认配置
    ctx.scale(10, 3);
    ctx.fillRect(1, 10, 10, 10);
    ctx.restore();

    //水平镜像
    ctx.scale(-1, 1);
    ctx.font = "48px serif";
    ctx.fillText("KOP", -135, 120);
  }
```

## [变形 Transforms](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)

最后一个方法允许对变形矩阵直接修改。

- [`transform(a, b, c, d, e, f)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/transform)

  这个方法是**将当前的变形矩阵乘上一个基于自身参数的矩阵**，如下面的矩阵所示：

  ```
  [ 
      a	c	e
      b	d	f
      0	0	1
   ]
  ```

  **如果任意一个参数是`Infinity`，变形矩阵也必须被标记为无限大**，否则会抛出异常。

这个函数的参数各自代表如下：

- `a (m11)`

  水平方向的缩放

- `b(m12)`

  竖直方向的倾斜偏移

- `c(m21)`

  水平方向的倾斜偏移

- `d(m22)`

  竖直方向的缩放

- `e(dx)`

  水平方向的移动

- `f(dy)`

  竖直方向的移动

- [`setTransform(a, b, c, d, e, f)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)

  **这个方法会将当前的变形矩阵重置为单位矩阵**，然后用相同的参数调用 `transform `方法。如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。**从根本上来说，该方法是取消了当前变形，然后设置为指定的变形，一步完成。**

- [`resetTransform()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/resetTransform)

  **重置当前变形为单位矩阵**，它和调用以下语句是一样的：`ctx.setTransform(1, 0, 0, 1, 0, 0);`

### transform / setTransform 的例子

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    let ctx = testCanvas.getContext("2d");

    let sin = Math.sin(Math.PI / 6);
    let cos = Math.cos(Math.PI / 6);

    ctx.translate(100, 100);

    let c = 0;
    for (let i = 0; i <= 12; i++) {
      c = Math.floor(255 / 12 * i);
      ctx.fillStyle = `rgb(${c}, ${c}, ${c})`;
      ctx.fillRect(0, 0, 100, 10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }
    ctx.setTransform(-1, 0, 0, 1, 100, 100);
    ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
    ctx.fillRect(0, 50, 100, 100);
  }
```

# 组合 Compositing

在之前的例子里面，我们总是将一个图形画在另一个之上，对于其他更多的情况，仅仅这样是远远不够的。比如，对合成的图形来说，绘制顺序会有限制。不过，我们可以利用 globalCompositeOperation 属性来改变这种状况。此外，**clip属性允许我们隐藏不想看到的部分图形。**

## [`globalCompositeOperation`](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing#globalcompositeoperation)

我们不仅可以在已有图形后面再画新图形，还可以用来遮盖指定区域，清除画布中的某些部分（清除区域不仅限于矩形，像[`clearRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)方法做的那样）以及更多其他操作。

- [`globalCompositeOperation = type`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

  这个属性**设定了在画新图形时采用的遮盖策略**，其值是一个标识 12 种遮盖方式的字符串。

| 属性值           | 功能                                                         |
| ---------------- | ------------------------------------------------------------ |
| source-over      | 这是默认设置，并在现有画布上下文之上绘制新图形。             |
| source-in        | 新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。 |
| source-out       | 在不与现有画布内容重叠的地方绘制新图形。                     |
| source-atop      | 新图形只在与现有画布内容重叠的地方绘制。                     |
| destination-over | 在现有的画布内容后面绘制新的图形。                           |
| destination-in   | 现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。 |
| destination-out  | 现有内容保持在新图形不重叠的地方。                           |
| destination-atop | 现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。 |
| lighter          | 两个重叠图形的颜色是通过颜色值相加来确定的。                 |
| copy             | 只显示新图形。                                               |
| xor              | 图像中，那些重叠和正常绘制之外的其他地方是透明的。           |
| multiply         | 将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。       |
| screen           | 像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。           |
| overlay          | multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮。 |
| darken           | 保留两个图层中最暗的像素。                                   |
| lighten          | 保留两个图层中最亮的像素。                                   |
| color-dodge      | 将底层除以顶层的反置。                                       |
| color-burn       | 将反置的底层除以顶层，然后将结果反过来。                     |
| hard-light       | 屏幕相乘（A combination of multiply and screen）类似于叠加，但上下图层互换了。 |
| soft-light       | 用顶层减去底层或者相反来得到一个正值。                       |
| difference       | 一个柔和版本的强光（hard-light）。纯黑或纯白不会导致纯黑或纯白。 |
| exclusion        | 和 difference 相似，但对比度较低。                           |
| hue              | 保留了底层的亮度（luma）和色度（chroma），同时采用了顶层的色调（hue）。 |
| saturation       | 保留底层的亮度（luma）和色调（hue），同时采用顶层的色度（chroma）。 |
| color            | 保留了底层的亮度（luma），同时采用了顶层的色调 (hue) 和色度 (chroma)。 |
| luminosity       | 保持底层的色调（hue）和色度（chroma），同时采用顶层的亮度（luma）。 |

## [裁切路径](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing#clipping_paths)

![img](https://mdn.mozillademos.org/files/209/Canvas_clipping_path.png)

裁切路径和普通的 canvas 图形差不多，不同的是它的作用是遮罩，用来隐藏不需要的部分。如右图所示。红边五角星就是裁切路径，所有在路径以外的部分都不会在 canvas 上绘制出来。

如果和上面介绍的 `globalCompositeOperation` 属性作一比较，它可以实现与 `source-in` 和 `source-atop`差不多的效果。**最重要的区别是裁切路径不会在 canvas 上绘制东西，而且它永远不受新图形的影响**。这些特性使得它在特定区域里绘制图形时相当好用。

在 [绘制图形](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) 一章中，我只介绍了 `stroke` 和 `fill` 方法，这里介绍第三个方法`clip`。

- [`clip()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip)

  将当前正在构建的路径转换为当前的裁剪路径。

我们使用 `clip()`方法来创建一个新的裁切路径。

默认情况下，canvas 有一个与它自身一样大的裁切路径（**也就是没有裁切效果**）。

### [`clip` 的例子](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing#a_clip_example)

这个例子，我会用一个圆形的裁切路径来限制随机星星的绘制区域。

```js
  function draw() {
    let testCanvas = document.getElementById("test1");
    let ctx = testCanvas.getContext("2d");

    ctx.fillRect(0, 0, 400, 400);
    ctx.translate(200, 200);

    //创建一个圆形剪切路径
    ctx.beginPath();
    ctx.arc(0, 0, 150, 0, Math.PI * 2, true);
    ctx.clip();

    // 画背景
    let lineargradient1 = ctx.createLinearGradient(0, -200, 0, 200);
    lineargradient1.addColorStop(0, "#232256");
    lineargradient1.addColorStop(1, "#143778");

    ctx.fillStyle = lineargradient1;
    ctx.fillRect(-200, -200, 400, 400);

    //画星星
    for (let i = 1; i <80; i++) {
      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.translate(200 - Math.floor(Math.random() * 400), 200 - Math.floor(Math.random() * 400));
      drawStar(ctx, Math.floor(Math.random() * 4) + 2);
      ctx.restore();
    }
  }

  function drawStar(ctx, r) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for (let i = 0; i < 9; i++){
      ctx.rotate(Math.PI / 5);
      if (i % 2 === 0) {
        ctx.lineTo((r/0.525731)*0.200811, 0);
      }else{
        ctx.lineTo(r, 0);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
```

首先，我画了一个与 canvas 一样大小的黑色方形作为背景，然后移动原点至中心点。然后用 `clip` 方法创建一个弧形的裁切路径。裁切路径也属于 canvas 状态的一部分，可以被保存起来。如果我们在创建新裁切路径时想保留原来的裁切路径，我们需要做的就是保存一下 canvas 的状态。

裁切路径创建之后所有出现在它里面的东西才会画出来。在画线性渐变时我们就会注意到这点。然后会绘制出 80 颗随机位置分布（经过缩放）的星星，当然也只有在裁切路径里面的星星才会绘制出来。

# 基本的动画

由于我们是用 JavaScript 去操控 `<canvas>` 对象，这样要实现一些交互动画也是相当容易的。在本章中，我们将看看如何做一些基本的动画。

可能最大的限制就是图像一旦绘制出来，它就是一直保持那样了。**如果需要移动它，我们不得不对所有东西（包括之前的）进行重绘**。重绘是相当费时的，而且性能很依赖于电脑的速度。

## [动画的基本步骤](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations#basic_animation_steps)

你可以通过以下的步骤来画出一帧：

1. **清空 canvas**
   除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 `clearRect` 方法。
2. **保存 canvas 状态**
   如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. **绘制动画图形（animated shapes）**
   这一步才是重绘动画帧。
4. **恢复 canvas 状态**
   如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

## [操控动画 Controlling an animation](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations#controlling_an_animation)

在 canvas 上绘制内容是用 canvas 提供的或者自定义的方法，而通常，我们仅仅在脚本执行结束后才能看见结果，比如说，在 for 循环里面做完成动画是不太可能的。

因此，**为了实现动画，我们需要一些可以定时执行重绘的方法**。有两种方法可以实现这样的动画操控。首先可以通过 `setInterval` 和 `setTimeout` 方法来控制在设定的时间点上执行重绘。

### [**有安排的更新画布** Scheduled updates](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations#有安排的更新画布_scheduled_updates)

首先，可以用[`window.setInterval()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval), [`window.setTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout),和[`window.requestAnimationFrame()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)来设定定期执行一个指定函数。

- [`setInterval(function, delay)` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

  当设定好间隔时间后，function 会定期执行。

- [`setTimeout(function, delay)` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

  ​	在设定好的时间之后执行函数

  

- [`requestAnimationFrame(callback)`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)

  告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

如果你并不需要与用户互动，你可以使用 setInterval() 方法，它就可以定期执行指定代码。如果我们需要做一个游戏，我们可以使用键盘或者鼠标事件配合上 setTimeout() 方法来实现。**通过设置事件监听，我们可以捕捉用户的交互，并执行相应的动作。**

下面的例子，采用 [`window.requestAnimationFrame()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)实现动画效果。这个方法提供了更加平缓并更加有效率的方式来执行动画，**当系统准备好了重绘条件的时候，才调用绘制动画帧。**一般每秒钟回调函数执行 60 次，也有可能会被降低。

## [太阳系的动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations#太阳系的动画)

这个例子里面，我会做一个小型的太阳系模拟动画。

