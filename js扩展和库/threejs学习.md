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

### 几何体Geometry

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

代码`var material=new THREE.MeshLambertMaterial({color:0x0000ff});`通过构造函数[THREE.MeshLambertMaterial()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshLambertMaterial)创建了一个可以用于立方体的材质对象， 构造函数的参数是一个对象，对象包含了颜色、透明度等属性，本案例中只定义了颜色`color`，颜色属性值`0x0000ff`表示蓝色，可以把颜色值改为`0x00ff00`，可以看到是绿色的立方体效果， 这里使用的颜色值表示方法是16进制RGB三原色模型。

### 光源Light

代码`var point=new THREE.PointLight(0xffffff);`通过构造函数[THREE.PointLight()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/PointLight)创建了一个点光源对象，参数`0xffffff`定义的是光照强度， 你可以尝试把参数更改为为`0x444444`，刷新浏览器你会看到立方体的表面颜色变暗，这很好理解，实际生活中灯光强度变低了，周围的景物自然暗淡，three.js引擎对WebGL光照模型算法都进行了封装，不需要你了解计算机图形学， 可以直接使用调用three.js光源相关API直接创建一个光源对象，就像你使用普通的三维建模渲染软件一样，只是这里多了一个Javascript编程语言而已。

### 相机Camera

代码`var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);`通过构造函数[THREE.OrthographicCamera()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/cameras/OrthographicCamera)创建了一个正射投影相机对象， 什么是“正射投影”，什么是“相机对象”，每个人的基础不一样，或许你不太理解，或许你非常理解，如果不清楚还是那句话，刚一开始不用深究，改个参数测试一下看看视觉效果你就会有一定的感性认识。 比如把该构造函数参数中用到的参数s，也就是代码`var s = 200;`中定义的一个系数，可以把200更改为300,你会发现立方体显示效果变小，这很好理解，相机构造函数的的前四个参数定义的是拍照窗口大小， 就像平时拍照一样，取景范围为大，被拍的人相对背景自然变小了。`camera.position.set(200, 300, 200);`和`camera.lookAt(scene.position);`定义的是相机的位置和拍照方向，可以更改`camera.position.set(200,300,200);`参数重新定义的相机位置，把第一个参数也就是x坐标从200更改为250， 你会发现立方的在屏幕上呈现的角度变了，这就像你生活中拍照人是同一个人，但是你拍照的位置角度不同，显示的效果肯定不同。这些具体的参数细节可以不用管， 至少你知道相机可以缩放显示三维场景、对三维场景的不同角度进行取景显示。

### 整个程序的结构

![threejs结构](E:\pogject\学习笔记\image\其他\threejs结构.png)

### 场景——相机——渲染器

从实际生活中拍照角度或是使用三维渲染软件角度理解本节课的案例代码，立方体网格模型和光照组成了一个虚拟的三维场景,相机对象就像你生活中使用的相机一样可以拍照，只不过一个是拍摄真实的景物，一个是拍摄虚拟的景物，拍摄一个物体的时候相机的位置和角度需要设置，虚拟的相机还需要设置投影方式，当你创建好一个三维场景，相机也设置好，就差一个动作“咔”，通过渲染器就可以执行拍照动作。

![threejs](E:\pogject\学习笔记\image\其他\threejs9threejs.png)

### 对象、方法和属性

从面向对象编程的角度理解上面的程序，使用three.js和使用其它传统前端Javascript库或框架一样，通过框架提供的构造函数可以创建对象，对象拥有方法和属性，只不过three.js是一款3D引擎， 如果你对HTML、Javascript语言、三维建模渲染软件都能够理解应用，即使你不懂计算机图形学和WebGL，也能够学习three.js引擎,创建可以在线预览的三维场景。

案例源码分别使用构造函数`THREE.Scene()`、`THREE.OrthographicCamera()`、`THREE.WebGLRenderer()`创建了场景、相机、渲染器三个最顶层的总对象，然后通过总对象的子对象、方法和属性进行设置， 相机对象和渲染对象相对简单，最复杂的是场景对象，`new THREE.Mesh(box,material);`使用构造函数`Mesh()`创建了一个网格模型对象，该对象把上面两行含有顶点位置信息的几何体对象和含有颜色信息的材质对象作为参数，网格模型创建好之后， 需要使用场景对象的方法`.add()`把三维场景的子对象添加到场景中，`new THREE.PointLight(0xffffff);`、`new THREE.AmbientLight(0x444444);`定义了两个点光源、环境光对象，然后作为场景的子对象插入场景中。 场景、相机、渲染器设置完成后，设置代码`renderer.render(scene,camera)`把场景、相机对象作为渲染器对象方法`render()`的参数，这句代码的意义相当于告诉浏览器根据相机的放置方式拍摄已经创建好的三维场景对象。

![threejs2.png](E:\pogject\学习笔记\image\其他\threejs9threejs2.png)

### WebGL封装

如果你有WebGL基础，可以通过下面介绍了解Three.js对WebGL的封装，如果不了解WebGL或计算机图形学，随便阅读一下或者直接跳过。

从WebGL的角度来看，three.js提供的构造函数基本是对原生WebGL的封装，如果你有了WebGL的基础，在学习three.js的很多对象、方法和属性是很容易理解的。在three.js入门教程中不会去过多讲解WebGL的基础知识， 但是为了大家更好的理解three.js的很多命令，与three.js相关的WebGL API知识、GPU渲染管线的知识。图形学可能很多人会觉得比较难，其实主要是算法部分，大家先可以学习一些基本的WebGL知识，初学的时候尽量不关注算法，主要了解顶点数据处理的过程，GPU渲染管线的基本功能单元。实际的工作中如果不是开发3D引擎可能不会使用原生WebGL API，但是学习了这些之后，对于three.js的深度开发学习很有好处，如果你了解你WebGL知识，可以联系绘制函数`drawArrays()`来理解渲染器的渲染操作方法`render()`。

![render.png](E:\pogject\学习笔记\image\其他\threejs9render.png)



----

# 旋转动画、requestAnimationFrame周期性渲染

### 周期性渲染

每执行一次渲染器对象[WebGLRenderer](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/renderers/WebGLRenderer)的渲染方法`.render()`，浏览器就会渲染出一帧图像并显示在Web页面上，这就是说你按照一定的周期不停地调用渲染方法`.render()`就可以不停地生成新的图像覆盖原来的图像。这也就是说只要一边旋转立方体，一边执行渲染方法`.render()`重新渲染，就可以实现立方体的旋转效果。

为了实现周期性渲染可以通过浏览器全局对象`window`对象的一个方法`setInterval()`,可以通过window对象调用该方法`window.setInterval()`，也可以直接以函数形式调用`setInterval()`。

`setInterval()`是一个周期性函数，就像一个定时器，每隔多少毫秒ms执行一次某个函数。

```javascript
// 间隔20ms周期性调用函数fun
setInterval("render()",20)
```

为了实现立方体旋转动画效果，直接使用下面的代码代替1.1节中代码`renderer.render(scene,camera);`即可。

```javascript
// 渲染函数
function render() {
    renderer.render(scene,camera);  //执行渲染操作
    mesh.rotateY(0.01);  //每次绕y轴旋转0.01弧度
}
//间隔20ms周期性调用函数fun,20ms也就是刷新频率是50FPS(1s/20ms)，每秒渲染50次
setInterval("render()",20);
```

上面代码定义了一个渲染函数`render()`，函数中定义了三个语句，通过`setInterval("render()",20);`可以实现m每间隔20毫秒调用一次函数`render()`，每次调用渲染函数的时候，执行`renderer.render(scene,camera);`渲染出一帧图像，执行`mesh.rotateY(0.01);`语句使立方体网格模型绕y轴旋转0.01弧度。

### 渲染频率

调用渲染方法`.render()`进行渲染的渲染频率不能太低，比如执行`setInterval("render()",200);`间隔200毫秒调用渲染函数渲染一次，相当于每秒渲染5次，你会感觉到比较卡顿。渲染频率除了不能太低，也不能太高，太高的话计算机的硬件资源跟不上，函数`setInterval()`设定的渲染方式也未必能够正常实现。一般调用渲染方法`.render()`进行渲染的渲染频率控制在每秒30~60次，人的视觉效果都很正常，也可以兼顾渲染性能。

```javascript
//设置调用render函数的周期为200ms，刷新频率相当于5你能明显的感受到卡顿
setInterval("render()",200);
```

### 函数`requestAnimationFrame()`

前面讲解threejs动画效果，使用了`setInterval()`函数，实际开发中，为了更好的利用浏览器渲染，可以使用函数`requestAnimationFrame()`代替`setInterval()`函数，`requestAnimationFrame()`和`setInterval()`一样都是浏览器`window`对象的方法。

`requestAnimationFrame()`参数是将要被调用函数的函数名，`requestAnimationFrame()`调用一个函数**不是立即调用而是向浏览器发起一个执行某函数的请求， 什么时候会执行由浏览器决定，一般默认保持60FPS的频率**，大约每16.7ms调用一次`requestAnimationFrame()`方法指定的函数，60FPS是理想的情况下，如果渲染的场景比较复杂或者说硬件性能有限可能会低于这个频率。可以查看文章[《requestAnimationFrame()》](http://www.yanhuangxueyuan.com/HTML5/time.html)了解更多`requestAnimationFrame()`函数的知识。

```javascript
function render() {
        renderer.render(scene,camera);//执行渲染操作
        mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(render);//请求再次执行渲染函数render
    }
render();
```



### 均匀旋转

在实际执行程序的时候，可能`requestAnimationFrame(render)`请求的函数并不一定能按照理想的60FPS频率执行，两次执行渲染函数的时间间隔也不一定相同，如果执行旋转命令的`rotateY`的时间间隔不同，旋转运动就不均匀，为了解决这个问题需要记录两次执行绘制函数的时间间隔。

使用下面的渲染函数替换原来的渲染函数即可，`rotateY()`的参数是`0.001*t`，也意味着两次调用渲染函数执行渲染操作的间隔`t`毫秒时间内，立方体旋转了`0.001*t`弧度，很显然立方体的角速度是`0.001`弧度每毫秒(0.0001 rad/ms = 1 rad/s = 180度/s)。CPU和GPU执行一条指令时间是纳秒ns级，相比毫秒ms低了6个数量级，所以一般不用考虑渲染函数中几个计时语句占用的时间，除非你编写的是要精确到纳秒ns的级别的标准时钟程序。

```javascript
let T0 = new Date();//上次时间
function render() {
        let T1 = new Date();//本次时间
        let t = T1-T0;//时间差
        T0 = T1;//把本次时间赋值给上次时间
        requestAnimationFrame(render);
        renderer.render(scene,camera);//执行渲染操作
        mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
    }
render();
```

```js
		let T0 = new Date();
		function render() {
			let T1 = new Date();
			let t = T1 - T0;
			T0 = T1;
			requestAnimationFrame(render);
			renderer.render(scene, camera);  //执行渲染操作   指定场景、相机作为参数
			mesh.rotateX(0.001 * t);  // 每次绕y轴旋转0.01弧度
			mesh.rotateY(0.001 * t);  // 每次绕y轴旋转0.01弧度
			mesh.rotateZ(0.001 * t);  // 每次绕y轴旋转0.01弧度
		}
		render();
		const controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.addEventListener("change", render
```



----

# 鼠标操作三维场景

为了使用鼠标操作三维场景，可以借助three.js众多控件之一`OrbitControls.js`，可以在下载的`three.js-master`文件中找到(`three.js-master\examples\js\controls`)。 然后和引入`three.js`文件一样在html文件中引入控件`OrbitControls.js`。本节课的目的不是为了深入讲解`OrbitControls.js`，主要目的一方面向大家展示下threejs的功能，另一方面后面课程学习过程中经常会通过鼠标旋转、缩放模型进行代码调试。

`OrbitControls.js`控件支持鼠标左中右键操作和键盘方向键操作，具体代码如下，使用下面的代码替换1.1节中`renderer.render(scene,camera);`即可。

```javascript
function render() {
  renderer.render(scene,camera);//执行渲染操作
}
render();
var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
controls.addEventListener('change', render);//监听鼠标、键盘事件
```

OrbitControls.js控件提供了一个构造函数`THREE.OrbitControls()`，把一个相机对象作为参数的时候，执行代码`new THREE.OrbitControls(camera,renderer.domElement)`，浏览器会自动检测鼠标键盘的变化， 并根据鼠标和键盘的变化更新相机对象的参数，比如你拖动鼠标左键，浏览器会检测到鼠标事件，把鼠标平移的距离按照一定算法转化为相机的的旋转角度，你可以联系生活中相机拍照,即使景物没有变化，你的相机拍摄角度发生了变化，自然渲染器渲染出的结果就变化了，通过定义监听事件`controls.addEventListener('change', render)`，如果你连续操作鼠标，相机的参数不停的变化，同时会不停的调用渲染函数`render()`进行渲染，这样threejs就会使用相机新的位置或角度数据进行渲染。

执行构造函数`THREE.OrbitControls()`浏览器会同时干两件事，一是给浏览器定义了一个鼠标、键盘事件，自动检测鼠标键盘的变化，如果变化了就会自动更新相机的数据， 执行该构造函数同时会返回一个对象，可以给该对象添加一个监听事件，只要鼠标或键盘发生了变化，就会触发渲染函数。 关于监听函数`addEventListener`介绍可以关注文章[《HTML5事件》](http://www.yanhuangxueyuan.com/HTML5/event.html)。

### 场景操作

- 缩放：滚动—鼠标中键
- 旋转：拖动—鼠标左键
- 平移：拖动—鼠标右键

### `requestAnimationFrame()`使用情况

如果threejs代码中通过`requestAnimationFrame()`实现渲染器渲染方法`render()`的周期性调用，当通过OrbitControls操作改变相机状态的时候，没必要在通过`controls.addEventListener('change', render)`监听鼠标事件调用渲染函数，因为`requestAnimationFrame()`就会不停的调用渲染函数。

```javascript
function render() {
  renderer.render(scene,camera);//执行渲染操作
  // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
  requestAnimationFrame(render);//请求再次执行渲染函数render
}
render();
var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
// 已经通过requestAnimationFrame(render);周期性执行render函数，没必要再通过监听鼠标事件执行render函数
// controls.addEventListener('change', render)
```

注意开发中**不要同时使用`requestAnimationFrame()`或`controls.addEventListener('change', render)`调用同一个函数，这样会冲突**。



----

# 3D场景中插入新的几何体

### SphereGeometry构造函数

```javascript
SphereGeometry(radius, widthSegments, heightSegments)
```

第一个参数`radius`约束的是球的大小，参数`widthSegments`、`heightSegments`约束的是球面的精度，球体你可以理解为正多面体，就像圆一样是正多边形，当分割的边足够多的时候，正多边形就会无限接近于圆，球体同样的的道理， 有兴趣可以研究利用WebGL实现它的算法，对于three.js就是查找文档看使用说明。

| 参数          | 含义                     |
| :------------ | :----------------------- |
| radius        | 球体半径                 |
| widthSegments | 控制球面精度，水平细分数 |

heightSegments| 控制球面精度，水平细分数|

## 绘制球体网格模型

使用`THREE.SphereGeometry(60,40,40);`替换立方体几何体代码`new THREE.BoxGeometry(100, 100, 100);`。

```javascript
var box=new THREE.SphereGeometry(60,40,40);//创建一个球体几何对象
```

### 更多几何体

threejs除了立方体、球体还提供了很多的常见几何体的API，这里不再过多讲解，具体可以查看[threejs文档](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/geometries/CylinderGeometry)，你可以在案例源码中测试下面的几何体代码。

```javascript
//长方体 参数：长，宽，高
var geometry = new THREE.BoxGeometry(100, 100, 100);
// 球体 参数：半径60  经纬度细分数40,40
var geometry = new THREE.SphereGeometry(60, 40, 40);
// 圆柱  参数：圆柱面顶部、底部直径50,50   高度100  圆周分段数
var geometry = new THREE.CylinderGeometry( 50, 50, 100, 25 );
// 正八面体
var geometry = new THREE.OctahedronGeometry(50);
// 正十二面体
var geometry = new THREE.DodecahedronGeometry(50);
// 正二十面体
var geometry = new THREE.IcosahedronGeometry(50);
```

### 同时绘制多个几何体

<embed width="770" height="500" src="1.插入多个几何体并偏移.html"/>

这也比较简单，直接模仿立方体的代码就可以，需要创建一个几何体对象作和一个材质对象，然后把两个参数作为网格模型构造函数`Mesh()`的参数创建一个网格模型，然后再使用场景对象`scene`的方法`.add()`把网格模型`mesh`加入场景中。

threejs的几何体默认位于场景世界坐标的原点(0,0,0),所以绘制多个几何体的时候，主要它们的位置设置。

下面代码同时绘制了立方体、球体和圆柱三个几何体对应的网格模型。

```html
	<script>
		const scene = new THREE.Scene();  // 创建场景对象Scene

		// 创建网格模型
		const geometry = new THREE.BoxGeometry(100, 100, 100);  // 创建一个立方体几何对象Geometry
		const material = new THREE.MeshLambertMaterial({color: 0x34ff89});  //  材质对象Material
		const mesh = new THREE.Mesh(geometry, material);  // 网格模型对象Mesh
		mesh.position.set(-120, 0, 0);  //球体网格模型沿Y轴正方向平移120
		scene.add(mesh);  //  网格模型添加到场景中

		const geometry2 = new THREE.SphereGeometry(60,40,40);//创建一个球体几何对象
		const material2 = new THREE.MeshLambertMaterial({color: 0x340089});  //  材质对象Material
		const mesh2 = new THREE.Mesh(geometry2, material2);  // 网格模型对象Mesh
		mesh2.position.set(0, 0, 0);  //球体网格模型沿Y轴正方向平移120
		scene.add(mesh2);  //  网格模型添加到场景中

		const geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);;//创建圆柱网格模型
		const material3= new THREE.MeshLambertMaterial({color: 0xff0089});  //  材质对象Material
		const mesh3 = new THREE.Mesh(geometry3, material3);  // 网格模型对象Mesh
		mesh3.position.set(120,0,0);//设置mesh3模型对象的xyz坐标为120,0,0
		scene.add(mesh3);  //  网格模型添加到场景中

		// 光源设置
		const point = new THREE.PointLight(0xff99ff);  //点光源
		point.position.set(400, 200, 300);  // 点光源位置
		scene.add(point); //点光源添加到场景中

		const ambient = new THREE.AmbientLight(0x444444);  // 环境光
		scene.add(ambient);

		const width = window.innerWidth;  //窗口宽度
		const height = window.innerHeight;  //窗口高度
		const k = width / height;  //窗口宽高比
		const s = 200;  //三维场景显示范围控制系数，系数越大，显示的范围越大

		const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);  // 创建相机对象
		camera.position.set(100, 100, 50);  //设置相机位置
		camera.lookAt(scene.position);  //设置相机方向(指向的场景对象)

		const renderer = new THREE.WebGLRenderer();  // 创建渲染器对象
		renderer.setSize(width, height);
		renderer.setClearColor(0xb9d3ff, 1);  //设置背景颜色

		document.body.appendChild(renderer.domElement);  //body元素中插入canvas对象

		function render() {
			renderer.render(scene,camera);//执行渲染操作
		}
		render();
		var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
		controls.addEventListener('change', render);//监听鼠标、键盘事件

	</script>
```

### 辅助三维坐标系`AxisHelper`

为了方便调试预览threejs提供了一个辅助三维坐标系`AxisHelper`，可以直接调用`THREE.AxisHelper`创建一个三维坐标系，然后通过`.add()`方法插入到场景中即可。

```javascript
// 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
var axisHelper = new THREE.AxisHelper(250);
scene.add(axisHelper);
```

threejs三维坐标系老版本名称是`AxisHelper`，新版本名称[AxesHelper](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/helpers/AxesHelper)。



----

# 材质效果

### 半透明效果

更改场景中的球体材质对象构造函数[THREE.MeshLambertMaterial()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshLambertMaterial)的参数，添加`opacity`和`transparent`属性，`opacity`的值是`0~1`之间，`transparent`表示是否开启透明度效果， 默认是`false`表示透明度设置不起作用，值设置为`true`，网格模型就会呈现透明的效果，使用下面的代码替换原来的球体网格模型的材质， 刷新浏览器,通过鼠标旋转操作场景,可以看到半透明的球体和立方体颜色叠加融合的效果。

```javascript
var sphereMaterial=new THREE.MeshLambertMaterial({
    color:0xff0000,
    opacity:0.7,
    transparent:true
});//材质对象
```

材质对象的一些属性可以在构造函数参数中设置，也可以访问材质对象的属性设置。

```javascript
material.opacity = 0.5 ;
material.transparent = true ;
```

### 材质常见属性

| 材质属性    | 简介                                       |
| :---------- | :----------------------------------------- |
| color       | 材质颜色，比如蓝色0x0000ff                 |
| wireframe   | 将几何图形渲染为线框。 默认值为false       |
| opacity     | 透明度设置，0表示完全透明，1表示完全不透明 |
| transparent | 是否开启透明，默认false                    |

### 添加高光效果

直接使用下面的代码替换上面的透明度材质即可，刷新浏览器可以看到球体表面的高光效果。

```javascript
var sphereMaterial=new THREE.MeshPhongMaterial({
    color:0x0000ff,
    specular:0x4488ee,
    shininess:12
});//材质对象
```

处在光照条件下的物体表面会发生光的反射现象，不同的表面粗糙度不同，宏观上来看对光的综合反射效果，可以使用两个反射模型来概括，一个是漫反射，一个是镜面反射， 使用渲染软件或绘画的时候都会提到一个高光的概念，其实说的就是物理光学中镜面反射产生的局部高亮效果。实际生活中的物体都是镜面反射和漫反射同时存在，只是哪个占得比例大而已， 比如树皮的表面更多以漫反射为主基本没有体现出镜面反射，比如一辆轿车的外表面在阳光下你会看到局部高亮的效果，这很简单汽车表面经过抛光等表面处理粗糙度非常低， 镜面反射效果明显，对于three.js而言漫反射、镜面反射分别对应两个构造函数[MeshLambertMaterial()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshLambertMaterial)、[MeshPhongMaterial()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshPhongMaterial),通过three.js引擎你可以很容易实现这些光照模型，不需要自己再使用原生WebGL实现，更多关于光照模型的知识可以参考文章[《WebGL_course光照渲染立方体》](http://www.yanhuangxueyuan.com/WebGL_course/light.html)或计算机图形学的相关书籍。

前面案例都是通过构造函数`MeshLambertMaterial()`实现漫反射进行渲染，高光效果要通过构造函数`MeshPhongMaterial()`模拟镜面反射实现，属性`specular`表示球体网格模型的高光颜色，改颜色的RGB值会与光照颜色的RGB分量相乘， `shininess`属性可以理解为光照强度的系数，初学的的时候这些细节如果不清楚，不用深究，每个人的基础不同，理解问题的深度和角度不同，比如高光，学习过计算机图形学的会联想到镜面反射模型和物理光学， 从事过与美术相关工作，都知道需要的时候会给一个物体添加高光，视觉效果更加高亮，因此对于构造函数`MeshPhongMaterial()`的参数设置不太清除也没关系，对于零基础的读者本节课的要求就是有个简单印象就可以， 站在黑箱外面理解黑箱；对于有WebGL基础的，可以思考three.js引擎构造函数实际封装了哪些WebGL API和图形学算法，站在黑箱里面理解黑箱，如果是你你会怎么封装开发一个三维引擎，这样你可以从底层理解上层的问题， 保证学习的连贯性；如果你使用过其它的三维建模渲染软件，那就使用three.js这个黑箱类比一个你熟悉的黑箱，通过类比降低学习难度，比如你可以打开3dmax软件设置一个材质的高光，体验下视觉效果。

### 材质类型

threejs提供了很多常用的材质效果，这些效果本质上都是对WebGL着色器的封装，对于开发者来说直接使用就可以,这里不再做过多介绍，大家现有一个印象即可。

| 材质类型                                                     | 功能                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [MeshBasicMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshBasicMaterial) | 基础网格材质，不受光照影响的材质                             |
| [MeshLambertMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshLambertMaterial) | Lambert网格材质，与光照有反应，漫反射                        |
| [MeshPhongMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshPhongMaterial) | 高光Phong材质,与光照有反应                                   |
| [MeshStandardMaterial](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/MeshStandardMaterial) | PBR物理材质，相比较高光Phong材质可以更好的模拟金属、玻璃等效果 |



----

# threejs光源

如全部删除所有的光源代码，你会发现场景中的物体是黑色的，就像生活中一样没有光，物体是黑色的。

| 光源                                                         | 简介               |
| :----------------------------------------------------------- | :----------------- |
| [AmbientLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/AmbientLight) | 环境光             |
| [PointLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/PointLight) | 点光源             |
| [DirectionalLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/DirectionalLight) | 平行光，比如太阳光 |
| [SpotLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/SpotLight) | 聚光源             |

环境光创建

```javascript
//环境光    环境光颜色与网格模型的颜色进行RGB进行乘法运算
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
```

点光源创建

```javascript
//点光源
var point = new THREE.PointLight(0xffffff);
point.position.set(400, 200, 300); //点光源位置
// 通过add方法插入场景中，不插入的话，渲染的时候不会获取光源的信息进行光照计算
scene.add(point); //点光源添加到场景中
```

光源通过`add`方法插入场景中，不插入的话，渲染的时候不会获取光源的信息进行光照计算

### 立体效果

仅仅使用环境光的情况下，你会发现整个立方体没有任何棱角感，这是因为环境光只是设置整个空间的明暗效果。如果需要立方体渲染要想有立体效果，需要使用具有方向性的点光源、平行光源等。

### 光源光照强度

通过光源构造函数的参数可以设置光源的颜色，一般设置明暗程度不同的白光RGB三个分量值是一样的。如果把`THREE.AmbientLight(0x444444);`的光照参数`0x444444`改为`0xffffff`,你会发现场景中的立方体渲染效果更明亮。

### 光源位置

```javascript
//点光源
var point = new THREE.PointLight(0xffffff);
point.position.set(400, 200, 300); //点光源位置
scene.add(point); //点光源添加到场景中
```

你可以把点光源的位置设置为`(0,0,0)`，然后不使用其它任何光源，这时候你会发现场景中立方体渲染效果是黑色。其实原因很简单，立方体是有大小占，用一定空间的，如果光源位于立方体里面，而不是外部，自然无法照射到立方体外表面。

```javascript
point.position.set(0, 0, 0);
```

如果只设置一个点光源的情况下，你通过鼠标旋转操作整个三维场景，你会发现立方体点光源无法照射的地方相对其他位置会比较暗，你可以通过下面的代码在新的位置插入一个新的光源对象。点光源设置的位置是(-400, -200, -300)，相当于把立方体夹在两个点光源之间。

```javascript
// 点光源2  位置和point关于原点对称
var point2 = new THREE.PointLight(0xffffff);
point2.position.set(-400, -200, -300); //点光源位置
scene.add(point2); //点光源添加到场景中
```

```html
	<script src="./js/three.js"></script>
	<script src="./js/three.js-master/examples/js/controls/OrbitControls.js"></script>	
<script>
		const scene = new THREE.Scene();  // 创建场景对象Scene

		// 创建网格模型
		const geometry = new THREE.BoxGeometry(100, 100, 100);  // 创建一个立方体几何对象Geometry
		const material = new THREE.MeshLambertMaterial({color: 0x34ff89, opacity: 1, transparent: true});  //  材质对象Material
		const mesh = new THREE.Mesh(geometry, material);  // 网格模型对象Mesh
		mesh.position.set(-120, 0, 0);  //球体网格模型沿Y轴正方向平移120
		scene.add(mesh);  //  网格模型添加到场景中

		const geometry2 = new THREE.SphereGeometry(60,40,40);//创建一个球体几何对象
		const material2 = new THREE.MeshLambertMaterial({color: 0x0000ff, specular: 0x4488ee, shininess: 12});  //  材质对象Material
		const mesh2 = new THREE.Mesh(geometry2, material2);  // 网格模型对象Mesh
		mesh2.position.set(0, 0, 0);  //球体网格模型沿Y轴正方向平移120
		scene.add(mesh2);  //  网格模型添加到场景中

		const geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);;//创建圆柱网格模型
		const material3= new THREE.MeshLambertMaterial({color: 0xff0089});  //  材质对象Material
		const mesh3 = new THREE.Mesh(geometry3, material3);  // 网格模型对象Mesh
		mesh3.position.set(120,0,0);//设置mesh3模型对象的xyz坐标为120,0,0
		scene.add(mesh3);  //  网格模型添加到场景中

		// 光源设置
		const point = new THREE.PointLight(0xff99ff);  //点光源
		point.position.set(0, 0, 200);  // 点光源位置
		scene.add(point); //点光源添加到场景中
		const point2 = new THREE.PointLight(0x44aaff);  //点光源
		point2.position.set(0, 0, -200);  // 点光源位置
		scene.add(point2); //点光源添加到场景中

		const ambient = new THREE.AmbientLight(0x444444);  // 环境光
		scene.add(ambient);

		const width = window.innerWidth;  //窗口宽度
		const height = window.innerHeight;  //窗口高度
		const k = width / height;  //窗口宽高比
		const s = 200;  //三维场景显示范围控制系数，系数越大，显示的范围越大

		const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);  // 创建相机对象
		camera.position.set(0, 0, 300);  //设置相机位置
		camera.lookAt(scene.position);  //设置相机方向(指向的场景对象)

		const renderer = new THREE.WebGLRenderer();  // 创建渲染器对象
		renderer.setSize(width, height);
		renderer.setClearColor(0xb9d3ff, 1);  //设置背景颜色

		document.body.appendChild(renderer.domElement);  //body元素中插入canvas对象

		function render() {
			renderer.render(scene,camera);//执行渲染操作
		}
		render();
		var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
		controls.addEventListener('change', render);//监听鼠标、键盘事件

	</script>
```



----

# 几何体顶点概念

## 顶点位置数据解析渲染

### 自定义几何体

你可以直接调用`BoxGeometry`直接创建一个立方体几何体，调用`SphereGeometry`创建一个球体几何体。不过为了大家更好的建立顶点概念，通过下面的代码自定义了一个几何体，通过网格模型可以渲染出来两个三角形效果。

下面代码通过Threejs引擎的[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)和[BufferAttribute](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferAttribute)两个API自定义了一个具有六个顶点数据的几何体。

下面代码通过Threejs引擎的[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)和[BufferAttribute](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferAttribute)两个API自定义了一个具有六个顶点数据的几何体。

```javascript
var geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
//类型数组创建顶点数据
var vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  50, 0, 0, //顶点2坐标
  0, 100, 0, //顶点3坐标
  0, 0, 10, //顶点4坐标
  0, 0, 100, //顶点5坐标
  50, 0, 10, //顶点6坐标
]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;
```

通过自定义的几何体创建一个网格模型。对于网格模型而言，几何体所有顶点每三个顶点为一组可以确定一个三角形，几何体是六个顶点，也就是说可以绘制两个三角形，当然了你可以自己再增加三个顶点位置坐标数据，测试下渲染效果。

```javascript
// 三角面(网格)渲染模式
var material = new THREE.MeshBasicMaterial({
  color: 0x0000ff, //三角面颜色
  side: THREE.DoubleSide //两面可见
}); //材质对象
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
```

### 点模型`Points`

为了更好的理解几何体是由顶点构成的，可以把几何体geometry作为点模型`Points`而不是网格模型`Mesh`的参数，你会发现上面的六个点坐标会渲染为六个方形的点区域，可以用下面代码代替上面的网格模型部分代码测试效果。

对于网格模型`Mesh`而言，几何体geometry三个顶点为一组渲染出来一个三角形，对于点模型`Points`而言，几何体的每个顶点对应位置都会渲染出来一个方形的点区域，该区域可以设置大小。

```javascript
		// 创建网格模型
		const geometry = new THREE.BufferGeometry();  // 创建一个Buffer类型几何体对象
		//类型数组创建顶点数据
		var vertices = new Float32Array([
			0, 0, 0, //顶点1坐标
			50, 0, 0, //顶点2坐标
			0, 100, 0, //顶点3坐标
			0, 0, 10, //顶点4坐标
			0, 0, 100, //顶点5坐标
			50, 0, 10, //顶点6坐标
		]);
		// 创建属性缓冲区对象
		const attribute = new THREE.BufferAttribute(vertices, 3);  // 3个为一组，表示一个顶点的xyz坐标
		geometry.attributes.position = attribute;  // 设置几何体attributes属性的位置属性

		const material = new THREE.PointsMaterial({
			color: 0x0000ff,  //颜色
			size: 10.0 //点对象像素尺寸
		});  //  材质对象Material

		const points = new THREE.Points(geometry, material); //点模型对象
		scene.add(points); //点对象添加到场景中

```



### 线模型`Line`

上面两个案例适用点模型和网格模型去渲染几何体的顶点数据，下面代码是把几何体作为线模型`Line`参数，你会发现渲染效果是从第一个点开始到最后一个点，依次连成线。

```javascript
		// 线条渲染模式
		const material = new THREE.LineBasicMaterial({
			color:0xff0000 //线条颜色
		});//材质对象

		const line = new THREE.Line(geometry,material);//线条模型对象
		scene.add(line); //点对象添加到场景中
```

### 几何体本质

查看下面一段代码，你可以看出来立方体网格模型Mesh是由立方体几何体geometry和材质material两部分构成，立方体几何体`BoxGeometry`本质上就是一系列的顶点构成，只是Threejs的API`BoxGeometry`把顶点的生成细节封装了，用户可以直接使用。比如一个立方体网格模型，有6个面，每个面至少两个三角形拼成一个矩形平面，每个三角形三个顶点构成，对于球体网格模型而言，同样是通过三角形拼出来一个球面，**三角形数量越多，网格模型表面越接近于球形**。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff
}); //材质对象Material
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
```



----

## 顶点颜色数据插值计算

通常几何体顶点位置坐标数据和几何体顶点颜色数据都是一一对应的，比如顶点1有一个顶点位置坐标数据，也有一个顶点颜色数据，顶点2同样也有一个顶点位置坐标数据，也有一个顶点颜色数据...

![顶点颜色数据](E:\pogject\学习笔记\image\其他\顶点颜色数据.png)

### 每个顶点设置一种颜色

```javascript
var geometry = new THREE.BufferGeometry(); //声明一个缓冲几何体对象

//类型数组创建顶点位置position数据
var vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  50, 0, 0, //顶点2坐标
  0, 100, 0, //顶点3坐标

  0, 0, 10, //顶点4坐标
  0, 0, 100, //顶点5坐标
  50, 0, 10, //顶点6坐标
]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，作为一个顶点的xyz坐标
// 设置几何体attributes属性的位置position属性
geometry.attributes.position = attribue;
//类型数组创建顶点颜色color数据
var colors = new Float32Array([
  1, 0, 0, //顶点1颜色
  0, 1, 0, //顶点2颜色
  0, 0, 1, //顶点3颜色

  1, 1, 0, //顶点4颜色
  0, 1, 1, //顶点5颜色
  1, 0, 1, //顶点6颜色
]);
// 设置几何体attributes属性的颜色color属性
geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
//材质对象
var material = new THREE.PointsMaterial({
  // 使用顶点颜色数据渲染模型，不需要再定义color属性
  // color: 0xff0000,
  vertexColors: THREE.VertexColors, //以顶点颜色为准
  size: 10.0 //点对象像素尺寸
});
// 点渲染模式  点模型对象Points
var points = new THREE.Points(geometry, material); //点模型对象
scene.add(points); //点对象添加到场景
```

### 材质属性`.vertexColors`

你可以看到上面案例的材质代码和前面稍有不同，原来是通过材质的颜色属性`color`设置模型颜色，而本案例并没有这样设置，而是设置了材质属性`.vertexColors`。

```javascript
var material = new THREE.PointsMaterial({
  // 使用顶点颜色数据渲染模型，不需要再定义color属性
  // color: 0xff0000,
  vertexColors: THREE.VertexColors, //以顶点颜色为准
  size: 10.0 //点对象像素尺寸
});
```

关于材质的属性`.vertexColors`可以查看[Material文档](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/Material)介绍，属性`.vertexColors`的默认值是`THREE.NoColors`，这也就是说模型的颜色渲染效果取决于材质属性`.color`，如果把材质属性`.vertexColors`的值设置为`THREE.VertexColors`,threejs渲染模型的时候就会使用几何体的顶点颜色数据`geometry.attributes.color`。

### 属性缓冲区对象`BufferAttribute`

Threejs提供的接口[BufferAttribute](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferAttribute)目的是为了创建各种各样顶点数据，比如顶点颜色数据，顶点位置数据，然后作为几何体`BufferGeometry`的顶点位置坐标属性`BufferGeometry.attributes.position`、顶点颜色属性`BufferGeometry.attributes.color`的值。

缓冲类型几何体`BufferGeometry`除了顶点位置、顶点颜色属性之外还有其他顶点属性，后面课程都会讲解到。关于`BufferGeometry`更多属性和方法可以查看文档[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)。

### 颜色插值

如果你把几何体作为网格模型`Mesh`或者线模型`Line`构造函数的参数，你会发现渲染出渐变的彩色效果。

之所以出现渐变是因为Threejs通过底层WebGL进行渲染的时候会对顶点的颜色数据进行插值计算。颜色插值计算简单点说，比如一条直线的端点1设置为红色，端点2设置为蓝色，整条直线就会呈现出从点1到红色点2的蓝色颜色渐变，对于网格模型Mesh而言，就是三角形的三个顶点分别设置一个颜色，三角形内部的区域像素会根据三个顶点的颜色进行插值计算。



---

## 顶点法向量数据光照计算

有初高中物理的光学基础，应该会有漫反射、镜面反射的概念。比如太阳光照在一个物体表面，物体表面与光线夹角位置不同的区域明暗程度不同，WebGL中为了计算光线与物体表面入射角，你首先要计算物体表面每个位置的法线方向，在Threejs中表示物体的网格模型Mesh的曲面是由一个一个三角形构成，所以为了表示物体表面各个位置的法线方向，可以给几何体的每个顶点定义一个方向向量。

![立方体](http://www.webgl3d.cn/upload/threejs18webgl.png)

### 不设置顶点法向量数据

下面代码仅仅定义了几何体[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)的顶点位置数据，没有定义顶点法向量数据。没有法向量数据，点光源、平行光等带有方向性的光源不会起作用，三角形平面整个渲染效果相对暗淡，而且两个三角形分界位置没有棱角感。

```javascript
var geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
//类型数组创建顶点位置position数据
var vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  50, 0, 0, //顶点2坐标
  0, 100, 0, //顶点3坐标

  0, 0, 0, //顶点4坐标
  0, 0, 100, //顶点5坐标
  50, 0, 0, //顶点6坐标

]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
// 设置几何体attributes属性的位置position属性
geometry.attributes.position = attribue
```

### 定义几何体顶点法向量数据

在上面顶点位置数据基础上定义顶点法向量数据，这时候除了环境光以外，点光源也会参与光照计算，三角形整个表面比较明亮，同时两个三角形表面法线不同，即使光线方向相同，明暗自然不同，在分界位置有棱角感。

```javascript
var normals = new Float32Array([
  0, 0, 1, //顶点1法向量
  0, 0, 1, //顶点2法向量
  0, 0, 1, //顶点3法向量

  0, 1, 0, //顶点4法向量
  0, 1, 0, //顶点5法向量
  0, 1, 0, //顶点6法向量
]);
// 设置几何体attributes属性的位置normal属性
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的法向量数据
```

顶点法向量数据和前面两节课讲解到的顶点位置数据、顶点颜色数据一样都是一一对应的。

### API使用总结

```javascript
// 访问几何体顶点位置数据
BufferGeometry.attributes.position
// 访问几何体顶点颜色数据
BufferGeometry.attributes.color
// 访问几何体顶点法向量数据
BufferGeometry.attributes.normal
```

几何体[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)的顶点法向量数据和几何体位置、颜色等顶点数据一样使用[BufferAttribute](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferAttribute)表示。

```javascript
// 设置几何体attributes属性的位置normal属性
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的法向量数据
```



---

## 顶点索引复用顶点数据

通过几何体[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)的顶点索引属性`BufferGeometry.index`可以设置几何体顶点索引数据，如果你有WebGL基础很容易理解顶点索引的概念，如果没有也没有关系，下面会通过一个简单的例子形象说明。

比如绘制一个矩形网格模型,至少需要两个三角形拼接而成，两个三角形，每个三角形有三个顶点，也就是说需要定义6个顶点位置数据。对于矩形网格模型而言，两个三角形有两个顶点位置是重合的。也就是说可以重复的位置可以定义一次，然后通过通过顶点数组的索引值获取这些顶点位置数据。

### 不使用顶点索引

下面通过几何体六个顶点定义了两个三角形，几何体的顶点位置数据、顶点法向量数据都是6个。

```javascript
var geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
//类型数组创建顶点位置position数据
var vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  80, 0, 0, //顶点2坐标
  80, 80, 0, //顶点3坐标

  0, 0, 0, //顶点4坐标   和顶点1位置相同
  80, 80, 0, //顶点5坐标  和顶点3位置相同
  0, 80, 0, //顶点6坐标
]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
// 设置几何体attributes属性的位置position属性
geometry.attributes.position = attribue
var normals = new Float32Array([
  0, 0, 1, //顶点1法向量
  0, 0, 1, //顶点2法向量
  0, 0, 1, //顶点3法向量

  0, 0, 1, //顶点4法向量
  0, 0, 1, //顶点5法向量
  0, 0, 1, //顶点6法向量
]);
// 设置几何体attributes属性的位置normal属性
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标
```

### 顶点索引`.index`

下面代码通过几何体[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)的顶点索引`BufferGeometry.index`定义了一个矩形。通过顶点索引组织网格模型三角形的绘制，因为矩形的两个三角形有两个顶点位置重复，所以顶点位置数据、顶点法向量数据都只需要定义4个就可以。

```javascript
var geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
//类型数组创建顶点位置position数据
var vertices = new Float32Array([
  0, 0, 0, //顶点1坐标
  80, 0, 0, //顶点2坐标
  80, 80, 0, //顶点3坐标
  0, 80, 0, //顶点4坐标
]);
// 创建属性缓冲区对象
var attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
// 设置几何体attributes属性的位置position属性
geometry.attributes.position = attribue
var normals = new Float32Array([
  0, 0, 1, //顶点1法向量
  0, 0, 1, //顶点2法向量
  0, 0, 1, //顶点3法向量
  0, 0, 1, //顶点4法向量
]);
// 设置几何体attributes属性的位置normal属性
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标
```

通过顶点索引组织顶点数据，顶点索引数组`indexes`通过索引值指向顶点位置`geometry.attributes.position`、顶点法向量`geometry.attributes.normal`中顶面数组。

```javascript
// Uint16Array类型数组创建顶点索引数据
var indexes = new Uint16Array([
  // 0对应第1个顶点位置数据、第1个顶点法向量数据
  // 1对应第2个顶点位置数据、第2个顶点法向量数据
  // 索引值3个为一组，表示一个三角形的3个顶点
  0, 1, 2,
  0, 2, 3,
])
// 索引数据赋值给几何体的index属性
geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
```

创建顶点索引数组的时候，可以根据顶点的数量选择类型数组`Uint8Array`、`Uint16Array`、`Uint32Array`。对于顶点索引而言选择整型类型数组，对于非索引的顶点数据，需要使用浮点类型数组`Float32Array`等。

| 类型数组     | 位数 | 字节 | 类型描述           | C语言等价类型 |
| :----------- | :--- | :--- | :----------------- | :------------ |
| Int8Array    | 8    | 1    | 有符号8位整型      | int8_t        |
| Uint8Array   | 8    | 1    | 无符号8位整型      | uint8_t       |
| Int16Array   | 16   | 2    | 有符号16位整型     | int16_t       |
| Uint16Array  | 16   | 2    | 无符号16位整型     | int16_t       |
| Int32Array   | 32   | 4    | 有符号32位整型     | int32_t       |
| Uint32Array  | 32   | 4    | 无符号32位整型     | uint32_t      |
| Float32Array | 32   | 4    | 单精度(32位)浮点数 | float         |
| Float64Array | 64   | 8    | 双精度(64位)浮点数 | double        |

### `BufferGeometry`总结

![BufferGeometry](E:\pogject\学习笔记\image\其他\BufferGeometry.png)



----

## 设置`Geometry`顶点位置、顶点颜色数据

几何体`Geometry`和缓冲类型几何体`BufferGeometry`表达的含义相同，只是对象的结构不同，Threejs渲染的时候会先把`Geometry`转化为`BufferGeometry`再解析几何体顶点数据进行渲染。

### [Vector3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3)定义顶点位置坐标数据

`Vector3`是threejs的三维向量对象,可以通过`Vector3`对象表示一个顶点的xyz坐标，顶点的法线向量。

几何体`Geometry`的顶点位置属性`geometry.vertices`和缓冲类型几何体`BufferGeometry`顶点位置属性`BufferGeometry.attributes.position`是对应的。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
var p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
var p2 = new THREE.Vector3(0, 70, 0); //顶点2坐标
var p3 = new THREE.Vector3(80, 70, 0); //顶点3坐标
//顶点坐标添加到geometry对象
geometry.vertices.push(p1, p2, p3);
```

### [Color](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Color)定义顶点颜色数据

通过threejs顶点颜色对象`Color`可以定义几何体顶点颜色数据，然后顶点颜色数据构成的数组作为几何体`Geometry`顶点颜色属性`geometry.colors`的值。

几何体`Geometry`的顶点颜色属性`geometry.colors`和缓冲类型几何体`BufferGeometry`顶点颜色属性`BufferGeometry.attributes.color`是对应的。

```javascript
// Color对象表示顶点颜色数据
var color1 = new THREE.Color(0x00ff00); //顶点1颜色——绿色
var color2 = new THREE.Color(0xff0000); //顶点2颜色——红色
var color3 = new THREE.Color(0x0000ff); //顶点3颜色——蓝色
//顶点颜色数据添加到geometry对象
geometry.colors.push(color1, color2, color3);
```

注意设置几何体`Geometry`顶点颜色属性`geometry.colors`，对网格模型`Mesh`是无效的，对于点模型`Points`、线模型`Line`是有效果。

### 材质属性`.vertexColors`

注意使用顶点颜色数据定义模型颜色的时候，要把材质的属性`vertexColors`设置为`THREE.VertexColors`,这样顶点的颜色数据才能取代材质颜色属性`.color`起作用。

```javascript
//材质对象
var material = new THREE.MeshLambertMaterial({
  // color: 0xffff00,
  vertexColors: THREE.VertexColors, //以顶点颜色为准
  side: THREE.DoubleSide, //两面可见
});
```



---

## `Face3`对象定义`Geometry`的三角形面

几何体[Geometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Geometry)的三角面属性`geometry.faces`和缓冲类型几何体[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)顶点索引属性`BufferGeometry.index`类似都是顶点位置数据的索引值,用来组织网格模型三角形的绘制。

下面代码自定义了一个由两个三角形构成的几何体，两个三角形有两个顶点坐标位置是重合的。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry

var p1 = new THREE.Vector3(0, 0, 0); //顶点1坐标
var p2 = new THREE.Vector3(0, 100, 0); //顶点2坐标
var p3 = new THREE.Vector3(50, 0, 0); //顶点3坐标
var p4 = new THREE.Vector3(0, 0, 100); //顶点4坐标
//顶点坐标添加到geometry对象
geometry.vertices.push(p1, p2, p3,p4);

// Face3构造函数创建一个三角面
var face1 = new THREE.Face3(0, 1, 2);
//三角面每个顶点的法向量
var n1 = new THREE.Vector3(0, 0, -1); //三角面Face1顶点1的法向量
var n2 = new THREE.Vector3(0, 0, -1); //三角面2Face2顶点2的法向量
var n3 = new THREE.Vector3(0, 0, -1); //三角面3Face3顶点3的法向量
// 设置三角面Face3三个顶点的法向量
face1.vertexNormals.push(n1,n2,n3);

// 三角面2
var face2 = new THREE.Face3(0, 2, 3);
// 设置三角面法向量
face2.normal=new THREE.Vector3(0, -1, 0);

//三角面face1、face2添加到几何体中
geometry.faces.push(face1,face2);
```

### 设置四个顶点

两个三角形有6个顶点，但是两个顶点位置重合的，可以设置4个顶点即可。

```javascript
var p1 = new THREE.Vector3(0, 0, 0); //顶点1坐标
var p2 = new THREE.Vector3(0, 100, 0); //顶点2坐标
var p3 = new THREE.Vector3(50, 0, 0); //顶点3坐标
var p4 = new THREE.Vector3(0, 0, 100); //顶点4坐标
//顶点坐标添加到geometry对象
geometry.vertices.push(p1, p2, p3,p4);
```

### [Face3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Face3)构建三角形

threejs提供了`Face3`对象构建三角形，通过`Face3`构建一个三角形，不要设置顶点位置坐标数据，只需要通过数组索引值从`geometry.vertices`数组中获得顶点位置坐标数据。

`geometry.vertices`数组索引0, 1, 2对应的顶点位置坐标数据表示三角形1的三个顶点坐标，索引0, 2, 3对应的顶点位置坐标数据表示三角形2的三个顶点坐标。

```javascript
// Face3构造函数创建一个三角面
var face1 = new THREE.Face3(0, 1, 2);
// 三角面2
var face2 = new THREE.Face3(0, 2, 3);
```

### 三角形法线设置

前面课程将结果网格模型Mesh的几何体Geometry本质上都是一个一个三角形拼接而成，所以可以通过设置三角形的法线方向向量来表示几何体表面各个位置的法线方向向量。

设置三角形法线方向向量有两种方式，一种是直接定义三角形面的法线方向，另一个是定义三角形三个顶点的法线方向数据来表示三角形面法线方向。

使用三维向量`THREE.Vector3`表示三角形法线方向数值，然后赋值给三角形对象`Face3`的法线属性`Face3.normal`。

```javascript
// 三角面2
var face2 = new THREE.Face3(0, 2, 3);
// 设置三角面法向量
face2.normal=new THREE.Vector3(0, -1, 0);
```

换另一种方式，通过三角形面`Face3`的`Face3.vertexNormals`属性给三角形的三个顶点分别设置一个顶点法线方向数据。

```javascript
// Face3构造函数创建一个三角面
var face1 = new THREE.Face3(0, 1, 2);
//三角面每个顶点的法向量
var n1 = new THREE.Vector3(0, 0, -1); //三角面Face1顶点1的法向量
var n2 = new THREE.Vector3(0, 0, -1); //三角面2Face2顶点2的法向量
var n3 = new THREE.Vector3(0, 0, -1); //三角面3Face3顶点3的法向量
// 设置三角面Face3三个顶点的法向量
face1.vertexNormals.push(n1,n2,n3);
```

### 三角形颜色设置

三角形颜色设置和三角形法线方向设置类型，可以直接设置三角形颜色，也可以设置三角形三个顶点的颜色。

```javascript
// 三角形1颜色
face1.color = new THREE.Color(0xffff00);
// 设置三角面face1三个顶点的颜色
face1.color = new THREE.Color(0xff00ff);
```

通过三角形面`Face3`的`.vertexColors`属性设置三角形三个顶点颜色。

三个顶点颜色不同三角形面渲染的时候会进行颜色插值计算，测到一个颜色渐变效果。

```javascript
face1.vertexColors = [
  new THREE.Color(0xffff00),
  new THREE.Color(0xff00ff),
  new THREE.Color(0x00ffff),
]
```

使用顶点颜色数据的时候，注意设置材质的属性`vertexColors`属性值为`THREE.VertexColors`。

注意设置三角形`Face3`的颜色对threejs网格模型`Mesh`有效，对于点模型`Points`、线模型`Line`是无效果，如果想设置点、线模型对应的几何体`Geometry`的顶点颜色，可以通过`Geometry`的顶点颜色属性`geometry.colors`实现。



----

# 访问几何体对象的数据

实际开发项目的时候，可能会加载外部模型，有些时候需要获取模型几何体的顶点数据，如果想获取几何体的顶点数据首先要熟悉three.js几何体`BoxGeometry`和`BufferGeometry`的结构。

访问几何体顶点数据其实很简单，刚开始学习不用刻意记忆，直接查看threejs文档，就像访问javascript对象的属性一样。

### 测试`BoxGeometry`

调用`BoxGeometry`创建一个立方体，执行`THREE.BoxGeometry`构造函数会自动生成几何体对象的顶点位置坐标、顶点法向量等数据。

你可以通过执行下面代码，然后查看浏览器控制台打印的数据

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
console.log(geometry);
console.log('几何体顶点位置数据',geometry.vertices);
console.log('三角行面数据',geometry.faces);
```

`BoxGeometry`、`PlaneGeometry`、`SphereGeometry`等几何体类的基类是`Geometry`，所以访问这些几何体的顶点数据,不知道具体属性名称，可以查问threejs文档[Geometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Geometry)

![Geometry](E:\pogject\学习笔记\image\其他\Geometry.png)

### 测试`PlaneBufferGeometry`

`PlaneBufferGeometry`表示一个矩形平面几何体，执行下面代码，你可以查看该几何体的相关顶点数据。

```javascript
//创建一个矩形平面几何体
var geometry = new THREE.PlaneBufferGeometry(100, 100);
console.log(geometry);
console.log('几何体顶点位置数据',geometry.attributes.position);
console.log('几何体索引数据',geometry.index);
```

`BoxBufferGeometry`、`PlaneBufferGeometry`、`SphereBufferGeometry`等几何体类的基类是`BufferGeometry`，所以访问这些几何体的顶点数据,不知道具体属性名称，可以查问threejs文档[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)

通过下面代码修改`BoxGeometry`的三角形顶点颜色的数据，可以渲染出来如下效果。

```js
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
// 遍历几何体的face属性
geometry.faces.forEach(face => {
  // 设置三角面face三个顶点的颜色
  face.vertexColors = [
    new THREE.Color(0xffff00),
    new THREE.Color(0xff00ff),
    new THREE.Color(0x00ffff),
  ]
});
var material = new THREE.MeshBasicMaterial({
  // color: 0x0000ff,
  vertexColors: THREE.FaceColors,
  // wireframe:true,//线框模式渲染
}); //材质对象Material
```

你可以通过下面代码删除立方体部分三角形面，测试删除效果。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
// pop()：删除数组的最后一个元素   shift：删除数组的第一个元素
geometry.faces.pop();
geometry.faces.pop();
geometry.faces.shift();
geometry.faces.shift();
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide, //两面可见
}); //材质对象Material
```

### 访问外部模型几何体顶点数据

Threejs加载外部模型的时候，会把几何体解析为缓冲类型几何体`BufferGeometry`，所以访问外部模型几何体顶点数据，可以查看文档[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)。



----

## 几何体旋转、缩放、平移变换

![几何体变换](E:\pogject\学习笔记\image\其他\几何体变换.png)

几何体[Geometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Geometry)对象有一系列的顶点属性，也封装了一系列的方法，通过`.scale()`、`.translate()`、`.rotateX()`等方法可以对几何体本身进行缩放、平移、旋转等几何变换。通过`.scale()`、`.translate()`、`.rotateX()`这些方法对几何体进行变换，注意本质上都是改变结合体顶点位置坐标数据。你可以执行测斜方法，然后在浏览器控制打印顶点位置坐标数据`console.log(geometry.vertices);`,然后对比几何体变化前后定点位置坐标是否变化。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
// 几何体xyz三个方向都放大2倍
geometry.scale(2, 2, 2);
// 几何体沿着x轴平移50
geometry.translate(50, 0, 0);
// 几何体绕着x轴旋转45度
geometry.rotateX(Math.PI / 4);
// 居中：偏移的几何体居中
geometry.center();
console.log(geometry.vertices);
```

[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)和几何体[Geometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Geometry) 一样具有`.scale()`、`.rotateZ()`、`.rotateX()`等几何体变换的方法。

### 注意

注意网格模型`Mesh`进行缩放旋转平移变换和几何体`Geometry`可以实现相同的渲染效果，但是网格模型`Mesh`进行这些变换不会影响几何体的顶点位置坐标，网格模型缩放旋转平移变换改变的是模型的本地矩阵、世界矩阵。

你可以执行下面代码测试。

```javascript
// 几何体xyz方向分别缩放0.5,1.5,2倍
geometry.scale(0.5, 1.5, 2);
// 网格模型xyz方向分别缩放0.5,1.5,2倍
mesh.scale.set(0.5, 1.5, 2)
```



----

