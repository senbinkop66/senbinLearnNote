# 关于Three.js



Three.js是基于原生WebGL封装运行的三维引擎，在所有WebGL引擎中，Three.js是国内文资料最多、使用最广泛的三维引擎。

**物联网3D可视化**

在人与人之间联系的互联网时代，主要是满足人与人之间的交流，Web页面的交互界面主要呈现为2D的交互效果，比如按钮、输入框等。

随着物联网的发展,工业、建筑等各个领域与物联网相关Web项目网页交互界面都会呈现出3D化的趋势。物联网相比较传统互联网更强调的是人与物、物与物的联系，当人与物进行交互的时候，比如你通过网页页面远程控制工厂中的一台机器启动或关停，你可以在网页上通过div元素写一个按钮，然后表示机器设备的开关，当然你也可以把该设备以3D的形式展示在网页上，然后就像玩游戏一样直接点击模型上的开关按钮，这两种方式肯定是3D的方式更为直观，当然开发成本也比较大。

**产品720在线预览**

在浏览器不支持WebGL技术的时代，如果你想在网页上展示一款产品往往是通过2D图片的形式实现。如果想3D展示一个产品，往往依赖于OpenGL技术，比如通过unity3D或ue4开发一个桌面应用，这样做往往很难随意传播，需要用户下载程序很麻烦，如果是通过Web的方式展示产品的三维模型，一个超链接就可以随意传播。

随着WebGL技术的持续推广，5G技术的持续推广，各种产品在线3D展示将会变得越来越普及，比如一家汽车公司的新款轿车可以在官网上在线预览，也许有一天一些电商平台会通过3D模型取代2D图片，现在你朋友推荐推荐给你一款新衣服，你会说发一张图片看看，也许将来你会说发来一个3D模型链接看看。

**数据可视化**

与webgl相关的数据可视化主要是两方面，一方面是海量超大数据的可视化，另一方面是与3D相关的数据可视化。对于超大的海量数据而言，基于canvas、svg等方式进行web可视化，没有基于WebGL技术实现性能更好，对于3D相关的数据可视化基于WebGL技术，借助3D引擎Threejs可以很好的实现。

**H5/微信小游戏**

非常火的微信小游戏跳一跳就是使用Three.js引擎开发的。 开发3D类的H5小游戏或者微信小游戏，Three.js引擎是非常好的选择。

通过Threejs开发的小游戏，可以直接部署在微信小程序或者web端，无需下载，方便传播，目前的生态非常和小游戏开发。

**科教领域**

在科教领域通过3D方式展示特定的知识相比较图像更为直观。

**机械领域**

Onshape是一款机械领域的三维建模软件，如果熟悉Solidworks、UG等CAD软件，那么你可以把Onshape理解为云Solidworks。

**WebVR**

对于现在比较火的VR、AR概念，WebGL技术的出现，也是一个好消息，如果你想预览一些VR内容，完全可以不下载一个VR相关的APP，通过threejs引擎实现VR内容发布，然后用户直接通过微信等社交方式推广，直接打开VR内容链接就可以观看。

VR与Web3D技术结合自然就衍生出来一个新的概念WebVR，也就是基于Web实现的VR内容。

**家装室内设计相关**

云装修平台酷家乐

**室内逆向全景漫游平台**

通过3D相机对室内空间进行逆向，在Web端以全景图的方式预览室内效果。



----

# 安装（Installation）

你可以使用[npm](https://www.npmjs.com/)以及现代构建工具来安装 three.js ，也可以只需静态主机或是 CDN 来快速上手。对于大多数用户来说，从 npm 安装是最佳选择。

无论你选择哪种方式，请始终保持一致，并注意从相同版本的库中导入所有文件。混合不同来源的文件可能会导致包含重复代码，甚至会以意料之外的方式破坏应用程序，

所有安装 three.js 的方式都依赖于 ES modules（参见 [Eloquent JavaScript: ECMAScript Modules](https://eloquentjavascript.net/10_modules.html#h_hF2FmOVxw7)）。ES modules使你能够在最终项目中包含所需库的一小部分。

## 安装自 npm

要安装[three](https://www.npmjs.com/package/three) 的 npm 模块，请在你的项目文件夹里打开终端窗口，并运行：

```
npm install three
```

包将会被下载并安装。然后你就可以将它导入你的代码了：

```js
// 方式 1: 导入整个 three.js核心库
import * as THREE from 'three';

const scene = new THREE.Scene();


// 方式 2: 仅导入你所需要的部分
import { Scene } from 'three';

const scene = new Scene();
```

从npm上进行安装的时候，几乎总是使用某种构建工具（[bundling tool](https://eloquentjavascript.net/10_modules.html#h_zWTXAU93DC)）来将你项目中需要的所有包组合到一个独立的JavaScript软件中。虽然任何现代的 JavaScript 打包器都可以和 three.js 一起使用，但最流行的选择是 [webpack](https://webpack.js.org/) 。

并非所有功能都可以通过 *three* 模块来直接访问（也称为“裸导入”）。three.js 中其它较为流行的部分 —— 如控制器（control）、加载器（loader）以及后期处理效果（post-processing effect） —— 必须从 [examples/jsm](https://github.com/mrdoob/three.js/tree/dev/examples/jsm) 子目录下导入。了解更多信息，请参阅下方的*示例*。

你可以从 [Eloquent JavaScript: Installing with npm](https://eloquentjavascript.net/20_node.html#h_J6hW/SmL/a) 来了解更多有关 npm 模块的信息。

## 从CDN或静态主机安装

通过将文件上传到你自己的服务器，或是使用一个已存在的CDN，three.js 便可以不借助任何构建系统来进行使用。由于 three.js 依赖于ES module，因此任何引用它的script标签必须使用*type="module"*。如下所示：

```html
<script type="module">

  // 通过访问 https://cdn.skypack.dev/three 来查找最新版本。

  import * as THREE from 'https://cdn.skypack.dev/three@<version>';

  const scene = new THREE.Scene();

</script>
```



## 示例

three.js的核心专注于3D引擎最重要的组件。其它很多有用的组件 —— 如控制器（control）、加载器（loader）以及后期处理效果（post-processing effect） —— 是 [examples/jsm](https://github.com/mrdoob/three.js/tree/dev/examples/jsm) 目录的一部分。它们被称为“示例”，虽然你可以直接将它们拿来使用，但它们也需要重新混合以及定制。这些组件和 three.js 的核心保持同步，而 npm 上类似的第三方包则由不同的作者进行维护，可能不是最新的。

示例无需被单独地*安装*，但需要被单独地*导入*。如果 three.js 是使用 npm 来安装的，你可以使用如下代码来加载轨道控制器（OrbitControls）：

```js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls( camera, renderer.domElement );
```

如果 three.js 安装自一个 CDN ，请使用相同的 CDN 来安装其他组件：

```html
<script type="module">

  // 通过访问 https://cdn.skypack.dev/three 来查找最新版本。

  import { OrbitControls } from 'https://cdn.skypack.dev/three@<version>/examples/jsm/controls/OrbitControls.js';

  const controls = new OrbitControls( camera, renderer.domElement );

</script>
```

所有文件使用相同版本是十分重要的。请勿从不同版本导入不同的示例，也不要使用与 three.js 本身版本不一致的示例。

----

# WebGL兼容性检查

虽然这个问题现在已经变得越来不明显，但不可否定的是，某些设备以及浏览器直到现在仍然不支持WebGL。
以下的方法可以帮助你检测当前用户所使用的环境是否支持WebGL，如果不支持，将会向用户提示一条信息。

```js
if (WebGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
```



----

# 创建一个场景

在开始使用three.js之前，你需要一个地方来显示它。将下列HTML代码保存为你电脑上的一个HTML文件，同时将[three.js](https://threejs.org/build/three.js)复制到该HTML文件所在的目录下的js/目录下，然后在你的浏览器中打开这个HTML文件。

## 创建一个场景

为了真正能够让你的场景借助three.js来进行显示，我们需要以下几个对象：场景、相机和渲染器，这样我们就能透过摄像机渲染出场景。

```html
	<script src="./js/three.js"></script>
</head>
<body>
	<script>
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		
		document.body.appendChild(renderer.domElement);
	</script>
</body>
```

我们现在建立了场景、相机和渲染器。

three.js里有几种不同的相机，在这里，我们使用的是**PerspectiveCamera**（透视摄像机）。

第一个参数是**视野角度（FOV）**。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。

第二个参数是**长宽比（aspect ratio）**。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。

接下来的两个参数是**近截面**（near）和**远截面**（far）。 当物体某些部分比摄像机的**远截面**远或者比**近截面**近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

接下来是渲染器。这里是施展魔法的地方。除了我们在这里用到的WebGLRenderer渲染器之外，Three.js同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持WebGL时，可以使用这几种渲染器进行降级。

除了创建一个渲染器的实例之外，我们还需要在我们的应用程序里设置一个渲染器的尺寸。比如说，我们可以使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序。因此，我们可以将渲染器宽高设置为浏览器窗口宽高。对于性能比较敏感的应用程序来说，你可以使用**setSize**传入一个较小的值，例如**window.innerWidth/2**和**window.innerHeight/2**，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景。

如果你希望保持你的应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用**setSize**时，将**updateStyle**（第三个参数）设为false。例如，假设你的`<canvas>` 标签现在已经具有了100%的宽和高，调用**setSize(window.innerWidth/2, window.innerHeight/2, false)**将使得你的应用程序以一半的分辨率来进行渲染。

最后一步很重要，我们将**renderer**（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的`<canvas>`元素。

我们就来添加立方体。

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;
```

要创建一个立方体，我们需要一个**BoxGeometry**（立方体）对象. 这个对象包含了一个立方体中所有的顶点（**vertices**）和面（**faces**）。未来我们将在这方面进行更多的探索。

接下来，对于这个立方体，我们需要给它一个材质，来让它有颜色。Three.js自带了几种材质，在这里我们使用的是**MeshBasicMaterial**。所有的材质都存有应用于他们的属性的对象。在这里为了简单起见，我们只设置一个color属性，值为**0x00ff00**，也就是绿色。这里所做的事情，和在CSS或者Photoshop中使用十六进制(**hex colors**)颜色格式来设置颜色的方式一致。

第三步，我们需要一个**Mesh**（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。

默认情况下，当我们调用**scene.add()**的时候，物体将会被添加到**(0,0,0)**坐标。但将使得摄像机和立方体彼此在一起。为了防止这种情况的发生，我们只需要将摄像机稍微向外移动一些即可。

## 渲染场景

现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“**渲染循环**”（render loop）或者“**动画循环**”（animate loop）的东西。

```js
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
```

在这里我们创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）。如果你是一个浏览器游戏开发的新手，你或许会说*“为什么我们不直接用setInterval来实现刷新的功能呢？”*当然啦，我们的确可以用setInterval，但是，**requestAnimationFrame**有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。

## 使立方体动起来

在开始之前，如果你已经将上面的代码写入到了你所创建的文件中，你可以看到一个绿色的方块。让我们来做一些更加有趣的事 —— 让它旋转起来。

将下列代码添加到animate()函数中**renderer.render**调用的上方：

```js
		function animate() {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}
```

这段代码每帧都会执行（正常情况下是60次/秒），这就让立方体有了一个看起来很不错的旋转动画。基本上来说，当应用程序运行时，如果你想要移动或者改变任何场景中的东西，都必须要经过这个动画循环。当然，你可以在这个动画循环里调用别的函数，这样你就不会写出有上百行代码的**animate**函数。

```html
	<script>
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({color: 0x34ff89});
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		camera.position.z = 5;

		document.body.appendChild(renderer.domElement);

		function animate() {
			requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		}
		animate();

	</script>
```



----

# 画线

假设你将要画一个圆或者画一条线，而不是一个线框模型，或者说不是一个Mesh（网格）。 第一步我们要做的，是设置好renderer（渲染器）、scene（场景）和camera（相机）

```js
		const scene = new THREE.Scene();  // 场景

		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);  // 相机
		camera.position.set(0, 0, 100);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer();  // 渲染器
		renderer.setSize(window.innerWidth, window.innerHeight);
```

接下来我们要做的事情是定义一个材质。对于线条来说，我们能使用的材质只有LineBasicMaterial 或者 LineDashedMaterial。

```js
const material = new THREE.LineBasicMaterial({color: 0x34ff89});
```

定义好材质之后，我们需要一个带有一些顶点的geometry（几何体）。

```js
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
```

注意，线是画在每一对连续的顶点之间的，而不是在第一个顶点和最后一个顶点之间绘制线条（线条并未闭合）。

既然我们已经有了能够画两条线的点和一个材质，那我们现在就可以将他们组合在一起，形成一条线。

```js
const line = new THREE.Line( geometry, material );
```

剩下的事情就是把它添加到场景中，并调用render（渲染）函数。

```js
scene.add( line );
renderer.render( scene, camera );
```

你现在应当已经看到了一个由两条蓝线组成的、指向上的箭头。

```html
	<script>
		const scene = new THREE.Scene();  // 场景

		const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);  // 相机
		camera.position.set(0, 0, 100);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer();  // 渲染器
		renderer.setSize(window.innerWidth, window.innerHeight);

		const material = new THREE.LineBasicMaterial({color: 0x34ff89});

		const points = [];
		points.push(new THREE.Vector3(-10, 0, 0));
		points.push(new THREE.Vector3(0, 10, 0));
		points.push(new THREE.Vector3(10, 0, 0));

		const geometry = new THREE.BufferGeometry().setFromPoints(points);

		const line = new THREE.Line(geometry, material);

		scene.add(line);

		document.body.appendChild(renderer.domElement);

		renderer.render(scene, camera);

	</script>
```



----

# 创建文字

## (1) DOM + CSS

使用HTML通常是最简单、最快速的添加文本的方法，这是大多数的Three.js示例中用于添加描述性叠加文字的方法。

你可以在这里添加内容

```html
<div id="info">Description</div>
```

然后使用CSS来将其绝对定位在其它具有z-index的元素之上，尤其是当你全屏运行three.js的时候。

```css
#info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	display:block;
}
```

## (2) 将文字绘制到画布中，并将其用作Texture（纹理）

如果你希望在three.js的场景中的平面上轻松地绘制文本，请使用此方法。

## (3) 在你所喜欢的3D软件里创建模型，并导出给three.js

如果你更喜欢使用3D建模软件来工作并导出模型到three.js，请使用这种方法。

## (4) three.js自带的文字几何体

如果你更喜欢使用纯three.js来工作，或者创建能够由程序改变的、动态的3D文字，你可以创建一个其几何体为THREE.TextGeometry的实例的网格：

```js
new THREE.TextGeometry( text, parameters );
```

然而，为了使得它能够工作，你的TextGeometry需要在其“font”参数上设置一个THREE.Font的实例。
请参阅 TextGeometry 页面来阅读如何完成此操作的详细信息，以及每一个接收的参数的描述，还有由three.js分发、自带的JSON字体的列表。

## (5) 位图字体

BMFonts (位图字体) 可以将字形批处理为单个BufferGeometry。BMFont的渲染支持自动换行、字母间距、字句调整、signed distance fields with standard derivatives、multi-channel signed distance fields、多纹理字体等特性。 详情请参阅 [three-mesh-ui](https://github.com/felixmariotto/three-mesh-ui) 或 [three-bmfont-text](https://github.com/Jam3/three-bmfont-text)。

现有库存的字体在项目中同样可用，就像[A-Frame Fonts](https://github.com/etiennepinchon/aframe-fonts)一样， 或者你也可以从任何TTF字体中创建你自己的字体，优化时，只需要包含项目中所需的字符即可。



---

# Threejs第一个3D场景

整体展示了Three.js的整套渲染系统。

```html
	<style type="text/css">
		body {
			margin: 0;
			overflow: hidden;  /* 隐藏body窗口区域滚动条 */
		}
	</style>
	<script src="./js/three.js"></script>
</head>
<body>
	<script>
		const scene = new THREE.Scene();  // 创建场景对象Scene

		// 创建网格模型
		const geometry = new THREE.BoxGeometry(100, 100, 100);  // 创建一个立方体几何对象Geometry
		const material = new THREE.MeshLambertMaterial({color: 0x34ff89});  //  材质对象Material
		const mesh = new THREE.Mesh(geometry, material);  // 网格模型对象Mesh
		scene.add(mesh);  //  网格模型添加到场景中

		// 光源设置
		const point = new THREE.PointLight(0xffffff);  //点光源
		point.position.set(400, 200, 300);  // 点光源位置
		scene.add(point); //点光源添加到场景中

		const ambient = new THREE.AmbientLight(0x444444);  // 环境光
		scene.add(ambient);

		const width = window.innerWidth;  //窗口宽度
		const height = window.innerHeight;  //窗口高度
		const k = width / height;  //窗口宽高比
		const s = 200;  //三维场景显示范围控制系数，系数越大，显示的范围越大

		const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);  // 创建相机对象
		camera.position.set(0, 0, 100);  //设置相机位置
		camera.lookAt(scene.position);  //设置相机方向(指向的场景对象)

		const renderer = new THREE.WebGLRenderer();  // 创建渲染器对象
		renderer.setSize(width, height);
		renderer.setClearColor(0xb9d3ff, 1);  //设置背景颜色

		document.body.appendChild(renderer.domElement);  //body元素中插入canvas对象

		renderer.render(scene, camera);  //执行渲染操作   指定场景、相机作为参数

	</script>
```

直接看上面的代码大家可能不太理解，如果是第一次接触会比较陌生，可以尝试更改代码的参数看看有什么效果，代码的功能都有注释， 看着注释也能大概猜出一个参数的含义。通过修改代码，同时刷新浏览器查看效果形成一个互动来提高自己学习的驱动力。

#### 几何体Geometry

```javascript
//创建一个立方体几何对象Geometry
var geometry = new THREE.BoxGeometry(100, 100, 100);
```

代码`var box=new THREE.BoxGeometry(100,100,100);`通过构造函数`THREE.BoxGeometry()`创建了一个长宽高都是100的立方体，通过构造函数名字[BoxGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/geometries/BoxGeometry)也能猜出这个构造函数的意义，利用new关键字操作构造函数可以创建一个对象， 这都是Javascript语言的基本知识，至于`THREE.BoxGeometry()`构造函数具体是什么可以不用关心， 就像你使用前端使用JQuery库一样查找官方文档就可以，你可以把代码`THREE.BoxGeometry(100,100,100)`中的第一个参数更改为为50，刷新浏览器查看数据更改后长方体的效果图，可以看到已经不是长宽高一样的立方体， 而是普通的长方体。

你也可以用下面一段代码代替上面的长方体代码，你会发现会渲染出来一个球体效果。

```javascript
//创建一个球体几何对象
var geometry = new THREE.SphereGeometry(60, 40, 40);
```

### 材质Material

代码`var material=new THREE.MeshLambertMaterial({color:0x0000ff});`通过构造函数[THREE.MeshLambertMaterial()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshLambertMaterial)创建了一个可以用于立方体的材质对象， 构造函数的参数是一个对象，对象包含了颜色、透明度等属性，本案例中只定义了颜色`color`，颜色属性值`0x0000ff`表示蓝色，可以把颜色值改为`0x00ff00`，可以看到是绿色的立方体效果， 这里使用的颜色值表示方法是16进制RGB三原色模型。使用过渲染类软件、设计过网页或者学习过图形学应该能知道RGB三原色模型，这里就不再详述。
