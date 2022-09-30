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

## 安装（Installation）

你可以使用[npm](https://www.npmjs.com/)以及现代构建工具来安装 three.js ，也可以只需静态主机或是 CDN 来快速上手。对于大多数用户来说，从 npm 安装是最佳选择。

无论你选择哪种方式，请始终保持一致，并注意从相同版本的库中导入所有文件。混合不同来源的文件可能会导致包含重复代码，甚至会以意料之外的方式破坏应用程序，

所有安装 three.js 的方式都依赖于 ES modules（参见 [Eloquent JavaScript: ECMAScript Modules](https://eloquentjavascript.net/10_modules.html#h_hF2FmOVxw7)）。ES modules使你能够在最终项目中包含所需库的一小部分。

### 安装自 npm

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

### 从CDN或静态主机安装

通过将文件上传到你自己的服务器，或是使用一个已存在的CDN，three.js 便可以不借助任何构建系统来进行使用。由于 three.js 依赖于ES module，因此任何引用它的script标签必须使用*type="module"*。如下所示：

```html
<script type="module">

  // 通过访问 https://cdn.skypack.dev/three 来查找最新版本。

  import * as THREE from 'https://cdn.skypack.dev/three@<version>';

  const scene = new THREE.Scene();

</script>
```



#### 示例

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

### WebGL兼容性检查

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

## 创建一个场景

在开始使用three.js之前，你需要一个地方来显示它。将下列HTML代码保存为你电脑上的一个HTML文件，同时将[three.js](https://threejs.org/build/three.js)复制到该HTML文件所在的目录下的js/目录下，然后在你的浏览器中打开这个HTML文件。

### 创建一个场景

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

### 渲染场景

现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“**渲染循环**”（render loop）或者“**动画循环**”（animate loop）的东西。

```js
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
```

在这里我们创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）。如果你是一个浏览器游戏开发的新手，你或许会说*“为什么我们不直接用setInterval来实现刷新的功能呢？”*当然啦，我们的确可以用setInterval，但是，**requestAnimationFrame**有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。

### 使立方体动起来

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

## 画线

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

## 创建文字

### (1) DOM + CSS

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

### (2) 将文字绘制到画布中，并将其用作Texture（纹理）

如果你希望在three.js的场景中的平面上轻松地绘制文本，请使用此方法。

### (3) 在你所喜欢的3D软件里创建模型，并导出给three.js

如果你更喜欢使用3D建模软件来工作并导出模型到three.js，请使用这种方法。

### (4) three.js自带的文字几何体

如果你更喜欢使用纯three.js来工作，或者创建能够由程序改变的、动态的3D文字，你可以创建一个其几何体为THREE.TextGeometry的实例的网格：

```js
new THREE.TextGeometry( text, parameters );
```

然而，为了使得它能够工作，你的TextGeometry需要在其“font”参数上设置一个THREE.Font的实例。
请参阅 TextGeometry 页面来阅读如何完成此操作的详细信息，以及每一个接收的参数的描述，还有由three.js分发、自带的JSON字体的列表。

### (5) 位图字体

BMFonts (位图字体) 可以将字形批处理为单个BufferGeometry。BMFont的渲染支持自动换行、字母间距、字句调整、signed distance fields with standard derivatives、multi-channel signed distance fields、多纹理字体等特性。 详情请参阅 [three-mesh-ui](https://github.com/felixmariotto/three-mesh-ui) 或 [three-bmfont-text](https://github.com/Jam3/three-bmfont-text)。

现有库存的字体在项目中同样可用，就像[A-Frame Fonts](https://github.com/etiennepinchon/aframe-fonts)一样， 或者你也可以从任何TTF字体中创建你自己的字体，优化时，只需要包含项目中所需的字符即可。



---

# 初始Threejs

---

## Threejs第一个3D场景

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

## 旋转动画、requestAnimationFrame周期性渲染

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

## 鼠标操作三维场景

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

## 3D场景中插入新的几何体

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

## 材质效果

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

## threejs光源

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

## 访问几何体对象的数据

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

# Threejs材质

所谓材质，简单地说就是字面意思，就像生活中你聊天一样，说这是塑料材质，这是金属材质，这是纤维材质...，深入一点说，就是包含光照算法的着色器GLSL ES代码。如果你想给一个模型设置特定的颜色，如果你想给一个模型设置一定透明度，如果你想实现一个金属效果，你想设置模型纹理贴图，那么Threejs的提供各种材质类就是你的选择。

## 常用材质介绍

Threejs提供了一系列的材质，所有材质就是对WebGL着色器代码的封装，如果你不了解WebGL，会通过查阅Threejs文档使用相关材质类即可。

![材质Material](E:\pogject\学习笔记\image\其他\材质Material.png)

### 点材质`PointsMaterial`

点材质比较简单，只有`PointsMaterial`,通常使用点模型的时候会使用点材质`PointsMaterial`。

点材质`PointsMaterial`的`.size`属性可以每个顶点渲染的方形区域尺寸像素大小。

```javascript
const geometry = new THREE.SphereGeometry(100, 25, 25); //创建一个球体几何对象
// 创建一个点材质对象
const material = new THREE.PointsMaterial({
  color: 0x003788, //颜色
  size: 3, //点渲染尺寸
});
//点模型对象  参数：几何体  点材质
const point = new THREE.Points(geometry, material);
scene.add(point); //网格模型添加到场景中
```

### 线材质

线材质有基础线材质`LineBasicMaterial`和虚线材质`LineDashedMaterial`两个，通常使用使用`Line`等线模型才会用到线材质。

基础线材质`LineBasicMaterial`。

```javascript
var geometry = new THREE.SphereGeometry(100, 25, 25);//球体
// 直线基础材质对象
var material = new THREE.LineBasicMaterial({
  color: 0x0000ff
});
var line = new THREE.Line(geometry, material); //线模型对象
scene.add(line); //点模型添加到场景中
```

虚线材质`LineDashedMaterial`。

```javascript
// 虚线材质对象：产生虚线效果
var material = new THREE.LineDashedMaterial({
  color: 0x0000ff,
  dashSize: 10,//显示线段的大小。默认为3。
  gapSize: 5,//间隙的大小。默认为1
});
var line = new THREE.Line(geometry, material); //线模型对象
//  computeLineDistances方法  计算LineDashedMaterial所需的距离数组
line.computeLineDistances();
```

### 网格模型

Threejs提供的网格类材质比较多，网格材质涉及的材质种类和材质属性也比较多。

网格材质顾名思义，网格类模型才会使用的材质对象。

基础网格材质对象`MeshBasicMaterial`,不受带有方向光源影响，没有棱角感。

```javascript
		const material = new THREE.MeshBasicMaterial({
			color: 0x003788 //颜色
		});  //  材质对象Material

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh); //线模型对象添加到场景中
```

`MeshLambertMaterial`材质可以实现网格Mesh表面与光源的漫反射光照计算，有了光照计算，物体表面分界的位置才会产生棱角感。

```javascript
		const material = new THREE.MeshLambertMaterial({
			color: 0x003788 //颜色
		});  //  材质对象Material

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh); //线模型对象添加到场景中
```

高光网格材质`MeshPhongMaterial`除了和`MeshLambertMaterial`一样可以实现光源和网格表面的漫反射光照计算，还可以产生高光效果(镜面反射)。

```javascript
		const material = new THREE.MeshPhongMaterial({
			color: 0xff0000,  //颜色
			specular: 0x444444,  //高光部分的颜色
			shininess: 20,  //高光部分的亮度，默认30
		});  //  材质对象Material

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh); //线模型对象添加到场景中
```

### 材质和模型对象对应关系

使用材质的时候，要注意材质和模型的对应关系，通过前面课程案例学习，目前为止你至少应该了解到了网格模型`Mesh`、点模型`Points`、线模型`Line`,随着课程的学习其它的模型对象也会接触到，这里先有个印象就可以。



----

## 材质共有属性、私有属性

点材质`PointsMaterial`、基础线材质`LineBasicMaterial`、基础网格材质`MeshBasicMaterial`、高光网格材质`MeshPhongMaterial`等材质都是父类[Material](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/Material)的子类。

各种各样的材质子类都有自己的特定属性，比如点材质特有的尺寸属性`.size`、高光网格材质特有的高光颜色属性`.specular`等等这些属性可以成为子类材质的私有属性。

所有子类的材质都会从父类材质[Material](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/materials/Material)继承透明度`opacity`、面`side`等属性，这些来自父类的属性都是子类共有的属性。

### `.side`属性

在Three.js开发过程中你可能会遇到下面的问题，比如three.js矩形平面`planegeometry`的网格模型插入场景看不到，一个球体或立方体网格模型如何背面显示贴图，正面不显示...，对于这些问题可以通过Three.js材质对象`.side`属性来设置。

材质`.side`属性的具体介绍可以查看Threejs文档中所有材质对象的基类`Material`。

`.side`属性的属性值**定义面的渲染方式前面后面 或 双面**. 属性的默认值是`THREE.FrontSide`，表示前面. 也可以设置为后面`THREE.BackSide` 或 双面`THREE.DoubleSide`.

```javascript
var material = new THREE.MeshBasicMaterial({
  color: 0xdd00ff,
  // 前面FrontSide  背面：BackSide 双面：DoubleSide
  side:THREE.DoubleSide,
});
```

### 材质透明度`.opacity`

通过材质的透明度属性`.opacity`可以设置材质的透明程度，`.opacity`属性值的范围是0.0~1.0，0.0值表示完全透明, 1.0表示完全不透明，`.opacity`默认值1.0。

**当设置`.opacity`属性值的时候，需要设置材质属性`transparent`值为`true`**，如果材质的transparent属性没设置为true, 材质会保持完全不透明状态。

在构造函数参数中设置`transparent`和`.opacity`的属性值

```javascript
var material = new THREE.MeshPhongMaterial({
  color: 0x220000,
  // transparent设置为true，开启透明，否则opacity不起作用
  transparent: true,
  // 设置材质透明度
  opacity: 0.4,
});
```

通过访问材质对象属性形式设置`transparent`和`.opacity`的属性值

```javascript
  // transparent设置为true，开启透明，否则opacity不起作用
material.transparent = true;
  // 设置材质透明度
material.opacity = 0.4;
```



----

# Threejs模型对象

Threejs所谓模型，如果你使用过三维软件，就是你三维软件中常说的三维模型，当然了，对于大多数前端程序员而言，不了解计算机图形学的情况下，没有使用过任何三维软件的情况下，并没有三维模型的概念。从Three.js角度来说，Threejs模型对象就是由Threejs几何体`Geometry`和Threejs材质`Material`构成，材质主要设置三维模型的颜色等外观样式，几何体主要是通过顶点坐标数据表达三维模型的外形形状。

## 点、线、网格模型

点模型`Points`、线模型`Line`、网格网格模型`Mesh`都是由几何体Geometry和材质Material构成，这三种模型的区别在于对几何体顶点数据的渲染方式不同。

### 点模型`Points`

点模型`Points`就是几何体的每一个顶点数据渲染为一个方形区域，方形区域的大小可以设置。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
// 点渲染模式
var material = new THREE.PointsMaterial({
  color: 0xff0000,
  size: 5.0 //点对象像素尺寸
}); //材质对象
var points = new THREE.Points(geometry, material); //点模型对象
```

### 线模型`Line`

两点确定一条直线，线模型`Line`就是使用线条去连接几何体的顶点数据。

线模型除了[Line](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/Line)还有[LineLoop](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/LineLoop)和[LineSegments](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/LineSegments),`LineLoop`和`Line`区别是连线的时候会闭合把第一个顶点和最后一个顶点连接起来，`LineSegments`则是顶点不共享，第1、2点确定一条线，第3、4顶点确定一条直线，第2和3点之间不连接。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
// 线条渲染模式
var material = new THREE.LineBasicMaterial({
    color:0xff0000 //线条颜色
}); //材质对象
// 创建线模型对象   构造函数：Line、LineLoop、LineSegments
var line = new THREE.Line(geometry,material);  //线条模型对象
```

### 网格模型`Mesh`

三个顶点确定一个三角形，网格模型[Mesh](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/Mesh)默认的情况下，通过三角形面绘制渲染几何体的所有顶点，通过一系列的三角形拼接出来一个曲面。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
// 三角形面渲染模式  
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff, //三角面颜色
}); //材质对象
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
```

如果设置网格模型的`wireframe`属性为`true`，所有三角形会以线条形式绘制出来。开发的时候可以通过设置wireframe属性来查看网格模型的三角形分布特点。

```javascript
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff, //三角面颜色
  wireframe:true,//网格模型以线条的模式渲染
});
// 通过访问属性的形式设置
material.wireframe = true;
```



----

## 模型对象旋转平移缩放变换

点模型`Points`、线模型`Line`、网格网格模型`Mesh`等模型对象的基类都是[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)，如果想对这些模型进行旋转、缩放、平移等操作，如何实现，可以查询Threejs文档[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)对相关属性和方法的介绍。

![Object3D](E:\pogject\学习笔记\image\其他\Object3D.png)

### 缩放

网格模型`Mesh`的属性`.scale`表示模型对象的缩放比例，默认值是`THREE.Vector3(1.0,1.0,1.0)`,`.scale`的属性值是一个三维向量对象[Vector3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3)，查看three.js文档你可以知道`Vector3`对象具有属性`.x`、`.y`、`.z`，`Vector3`对象还具有方法`.set()`，`.set`方法有三个表示xyz方向缩放比例的参数。

网格模型xyz方向分别缩放0.5,1.5,2倍

```javascript
mesh.scale.set(0.5, 1.5, 2)
```

x轴方向放大2倍

```javascript
mesh.scale.x = 2.0;
```

### 位置属性`.position`

模型位置`.position`属性和`.scale`属性的属性值一样也是三维向量对象[Vector3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3)，通过模型位置属性`.position`可以设置模型在场景Scene中的位置。模型位置`.position`的默认值是`THREE.Vector3(0.0,0.0,0.0)`。

设置网格模型y坐标

```javascript
mesh.position.y = 80;
```

设置模型xyz坐标

```javascript
mesh.position.set(80,2,10);
```

### 平移

网格模型沿着x轴正方向平移100，可以多次执行该语句，每次执行都是相对上一次的位置进行平移变换。

```javascript
// 等价于mesh.position = mesh.position + 100;
mesh.translateX(100);  //沿着x轴正方向平移距离100
```

沿着Z轴负方向平移距离50。

```javascript
mesh.translateZ(-50);
```

沿着自定义的方向移动。

```javascript
// 向量Vector3对象表示方向
var axis = new THREE.Vector3(1, 1, 1);
axis.normalize(); //向量归一化
// 沿着axis轴表示方向平移100
mesh.translateOnAxis(axis, 100);
```

执行`.translateX()`、`.translateY()`、`.translateOnAxis()`等方法本质上改变的都是模型的位置属性`.position`。

### 旋转

立方体网格模型绕立方体的x轴旋转π/4，可以多次执行该语句，每次执行都是相对上一次的角度进行旋转变化

```javascript
mesh.rotateX(Math.PI/4);//绕x轴旋转π/4
```

网格模型绕(0,1,0)向量表示的轴旋转π/8

```javascript
var axis = new THREE.Vector3(0,1,0);//向量axis
mesh.rotateOnAxis(axis,Math.PI/8);//绕axis轴旋转π/8
```

执行旋转`.rotateX()`等方法和执行平移`.translateY()`等方法一样都是对模型状态属性的改变，区别在于执行平移方法改变的是模型的位置属性`.position`，执行模型的旋转方法改变的是表示模型角度状态的角度属性`.rotation`或者四元数属性`.quaternion`。

模型的角度属性`.rotation`和四元数属性`.quaternion`都是表示模型的角度状态，只是表示方法不同，`.rotation`属性值是欧拉对象[Euler](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Euler),`.quaternion`属性值是是四元数对象[Quaternion](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Quaternion)

```javascript
// 绕着Y轴旋转90度
mesh.rotateY(Math.PI / 2);
//控制台查看：旋转方法，改变了rotation属性
console.log(mesh.rotation);
```



----

## 对象克隆`.clone()`和复制`.copy()`

Threejs大多数对象都有克隆`.clone()`和复制`.copy()`两个方法,点模型`Points`、线模型`Line`、网格网格模型`Mesh`一样具有这两个方法。

### 复制方法`.copy()`

`A.copy(B)`表示B属性的值赋值给A对应属性。

```javascript
var p1 = new THREE.Vector3(1.2,2.6,3.2);
var p2 = new THREE.Vector3(0.0,0.0,0.0);
p2.copy(p1)
// p2向量的xyz变为p1的xyz值
console.log(p2);
```

### 克隆方法`.clone()`

`N = M.clone()`表示返回一个和M相同的对象赋值给N。

```javascript
var p1 = new THREE.Vector3(1.2,2.6,3.2);
var p2 = p1.clone();
// p2对象和p1对象xyz属性相同
console.log(p2);
```

### 网格模型复制和克隆

网格模型复制克隆和三维向量基本逻辑是相同，但是注意三维向量`Vector3`的`.x`、`.y`、`.z`属性值是数字，也就是说是基本类型的数据，对于网格模型而言，网格模型对象的几何体属性`mesh.geometry`和材质属性`mesh.material`的属性值都是对象的索引值。

```javascript
var box=new THREE.BoxGeometry(10,10,10);//创建一个立方体几何对象
var material=new THREE.MeshLambertMaterial({color:0x0000ff});//材质对象


var mesh=new THREE.Mesh(box,material);//网格模型对象
var mesh2 = mesh.clone();//克隆网格模型
mesh.translateX(20);//网格模型mesh平移

scene.add(mesh,mesh2);//网格模型添加到场景中
```

缩放几何体box,你可以发现上面代码中的两个网格模型的大小都发生了变化，因为网格模型克隆的时候，mesh对象的几何体对象`mesh.geometry`属性值是box对象的索引值，返回的新对象mesh2几何体属性`mesh.geometry`的值同样是box对象的索引值。

```javascript
box.scale(1.5,1.5,1.5);//几何体缩放
```



通过本节课的学习，对Threejs不同对象的克隆`.clone()`和复制`.copy()`方法有一个大致印象即可。

实际开发的时候，注意不同对象的复制或克隆方法可能稍有区别，使用的时候最好通过代码测试，或者直接查看threejs源码某个类对`.clone()`和`.copy()`封装，这样更为直观清楚。

### 几何体复制和克隆

几何体克隆或复制和网格模型在属性值深拷贝、浅拷贝方面有些不同，比如几何体的顶点属性`Geometry.vertices`，`Geometry.vertices`的属性值是一个数组对象，但是复制或克隆的时候，不是获得对象的索引值，而是深拷贝属性的值，可以在threejs源码`Geometry.js`全文检索`copy: function`关键词，找到该类对`copy`方法的封装细节。



----

# Threejs光源对象

Threejs场景对象`Scene`主要是由模型对象和光源对象`Light`构成，在实际开发过程中，多数三维场景往往需要设置光源对象，通过不同的光源对象模型生活中的光照效果，尤其是为了提高Threejs的渲染效果更需要设置好光源，就像职业摄影师拍照要打灯一样。

![img](E:\pogject\学习笔记\image\其他\threejs32light.png)

## 常见光源类型

Threejs虚拟光源是对自然界光照的模拟，threejs搭建虚拟场景的时候，为了更好的渲染场景，往往需要设置不同的光源，设置不同的光照强度，就像摄影师给你拍照要设置各种辅助灯光一样。

![光源](E:\pogject\学习笔记\image\其他\光源.png)

### 环境光[AmbientLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/AmbientLight)

环境光是没有特定方向的光源，主要是均匀整体改变Threejs物体表面的明暗效果，这一点和具有方向的光源不同，比如点光源可以让物体表面不同区域明暗程度不同。

```javascript
//环境光:环境光颜色RGB成分分别和物体材质颜色RGB成分分别相乘
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);//环境光对象添加到scene场景中
```

你可以把光源颜色从`0x444444`更改为`0x888888`,可以看到threejs场景中的网格模型表面变的更亮。

### 点光源[PointLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/PointLight)

点光源就像生活中的白炽灯，光线沿着发光核心向外发散，同一平面的不同位置与点光源光线入射角是不同的，点光源照射下，同一个平面不同区域是呈现出不同的明暗效果。

和环境光不同，环境光不需要设置光源位置，而点光源需要设置位置属性`.position`，光源位置不同，物体表面被照亮的面不同，远近不同因为衰减明暗程度不同。

你可以把案例源码中点光源位置从`(400, 200, 300)`位置改变到`(-400, -200, -300)`，你会发现网格模型被照亮的位置从前面变到了后面，这很正常，光源只能照亮面对着光源的面，背对着光源的无法照射到，颜色会比较暗。

```javascript
//点光源
var point = new THREE.PointLight(0xffffff);
//设置点光源位置，改变光源的位置
point.position.set(400, 200, 300);
scene.add(point);
```

### 平行光[DirectionalLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/DirectionalLight)

平行光顾名思义光线平行，对于一个平面而言，平面不同区域接收到平行光的入射角一样。

点光源因为是向四周发散，所以设置好位置属性`.position`就可以确定光线和物体表面的夹角，对于平行光而言,主要是确定光线的方向,光线方向设定好了，光线的与物体表面入射角就确定了，仅仅设置光线位置是不起作用的。

在三维空间中为了确定一条直线的方向只需要确定直线上两个点的坐标即可，所以Threejs平行光提供了位置`.position`和目标`.target`两个属性来一起确定平行光方向。目标`.target`的属性值可以是Threejs场景中任何一个三维模型对象，比如一个网格模型`Mesh`，这样Threejs计算平行光照射方向的时候，会通过自身位置属性`.position`和`.target`表示的物体的位置属性`.position`计算出来。

```javascript
// 平行光
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
directionalLight.position.set(80, 100, 50);
// 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
directionalLight.target = mesh2;
scene.add(directionalLight);
```

平行光如果不设置`.position`和`.target`属性，光线默认从上往下照射，也就是可以认为`(0,1,0)`和`(0,0,0)`两个坐标确定的光线方向。

注意一点平行光光源的位置属性`.position`并不表示平行光从这个位置向远处照射，`.position`属性只是用来确定平行光的照射方向，平行光你可以理解为太阳光，从无限远处照射过来。

### 聚光源[SpotLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/SpotLight)

聚光源可以认为是一个沿着特定方会逐渐发散的光源，照射范围在三维空间中构成一个圆锥体。通过属性`.angle`可以设置聚光源发散角度，聚光源照射方向设置和平行光光源一样是通过位置`.position`和目标`.target`两个属性来实现。

```javascript
// 聚光光源
var spotLight = new THREE.SpotLight(0xffffff);
// 设置聚光光源位置
spotLight.position.set(200, 200, 200);
// 聚光灯光源指向网格模型mesh2
spotLight.target = mesh2;
// 设置聚光光源发散角度
spotLight.angle = Math.PI / 6
scene.add(spotLight);//光对象添加到scene场景中
```

### 光源辅助对象

Threejs提供了一些光源辅助对象，就像`AxesHelper`可视化显示三维坐标轴一样显示光源对象,通过这些辅助对象可以方便调试代码，查看位置、方向。

| 辅助对象           | 构造函数名                                                   |
| :----------------- | :----------------------------------------------------------- |
| 聚光源辅助对象     | [SpotLightHelper](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/helpers/SpotLightHelper) |
| 点光源辅助对象     | [PointLightHelper](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/helpers/PointLightHelper) |
|                    |                                                              |
| 平行光光源辅助对象 | [DirectionalLightHelper](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/helpers/DirectionalLightHelper) |

### 光照计算算法

Three.js渲染的时候光照计算还是比较复杂的，这里不进行深入介绍，只给大家说下光源颜色和网格模型Mesh颜色相乘的知识，如果你有兴趣可以学习计算机图形学或者WebGL教程。

Threejs在渲染的时候网格模型材质的颜色值`mesh.material.color`和光源的颜色值`light.color`会进行相乘，简单说就是RGB三个分量分别相乘。

平行光漫反射简单数学模型：`漫反射光的颜色 = 网格模型材质颜色值 x 光线颜色 x 光线入射角余弦值`

漫反射数学模型RGB分量表示：`(R2,G2,B2) = (R1,G1,B1) x (R0,G0,B0) x cosθ`

```javascript
R2 = R1 * R0 * cosθ
G2 = G1 * G0 * cosθ
B2 = B1 * B0 * cosθ
```

### 颜色相乘测试

你可以通过下面代码验证上面颜色相乘的算法，比如把网格模型的颜色设置为白色`0xffffff`,也就意味着可以反射任意光照颜色，然后把环境光和点光源只保留红色成分，绿色和蓝色成分都设置为0。你可以看到网格模型会把渲染为红色。

```javascript
// 网格模型材质设置为白色
var geometry = new THREE.BoxGeometry(100, 100, 100); //
var material = new THREE.MeshLambertMaterial({
  color: 0xffffff
});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//环境光   环境光颜色RGB成分分别和物体材质颜色RGB成分分别相乘
var ambient = new THREE.AmbientLight(0x440000);
scene.add(ambient);//环境光对象添加到scene场景中
//点光源
var point = new THREE.PointLight(0xff0000);
//设置点光源位置  光源对象和模型对象的position属性一样是Vector3对象
//PointLight的基类是Light  Light的基类是Object3D  点光源对象继承Object3D对象的位置属性position
point.position.set(400, 200, 300);
scene.add(point);
```

你还可以尝试把网格模型设置为纯蓝色`0x0000ff`,光源颜色只保留红色成分不变，你可以看到网格模型的渲染效果是黑色，因为这两个颜色相乘总有一个RGB分量为0，相乘的结果是`0x00000`,也就是黑色。这也符合实际的物理规律，蓝色的物体不会反射红色的光线，熙然就是黑色效果。

如果你想模拟一个舞台的各种颜色灯光效果，可以用这种思路设置RGB各个分量值来实现特定颜色光源，不过一般渲染的时候RGB三个分量是相同的，也就是表示白色光源，`0xffffff`表示最高强度的白色光源，`0x000000`相当于没有光照。



---

## Three.js光照阴影实时计算

在具有方向光源的作用下，物体会形成阴影投影效果。

### 平行光投影计算代码

Three.js物体投影模拟计算主要设置三部分，一个是设置产生投影的模型对象，一个是设置接收投影效果的模型，最后一个是光源对象本身的设置，光源如何产生投影。

```javascript
var geometry = new THREE.BoxGeometry(40, 100, 40);
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff
});
var mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0,0,0)
scene.add(mesh);

// 设置产生投影的网格模型
mesh.castShadow = true;


//创建一个平面几何体作为投影面
var planeGeometry = new THREE.PlaneGeometry(300, 200);
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0x999999
});
// 平面网格模型作为投影面
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh); //网格模型添加到场景中
planeMesh.rotateX(-Math.PI / 2); //旋转网格模型
planeMesh.position.y = -50; //设置网格模型y坐标
// 设置接收阴影的投影面
planeMesh.receiveShadow = true;

// 方向光
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// 设置光源位置
directionalLight.position.set(60, 100, 40);
scene.add(directionalLight);
// 设置用于计算阴影的光源对象
directionalLight.castShadow = true;
// 设置计算阴影的区域，最好刚好紧密包围在对象周围
// 计算阴影的区域过大：模糊  过小：看不到或显示不完整
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 300;
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.top = 200;
directionalLight.shadow.camera.bottom = -100;
// 设置mapSize属性可以使阴影更清晰，不那么模糊
// directionalLight.shadow.mapSize.set(1024,1024)
console.log(directionalLight.shadow.camera);
```



### 聚光光源投影计算代码

下面代码是聚光光源的设置，其它部分代码和平行光一样。

```javascript
// 聚光光源
var spotLight = new THREE.SpotLight(0xffffff);
// 设置聚光光源位置
spotLight.position.set(50, 90, 50);
// 设置聚光光源发散角度
spotLight.angle = Math.PI /6
scene.add(spotLight); //光对象添加到scene场景中
// 设置用于计算阴影的光源对象
spotLight.castShadow = true;
// 设置计算阴影的区域，注意包裹对象的周围
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 300;
spotLight.shadow.camera.fov = 20;
```

模型`.castShadow`属性

```
.castShadow`属性值是布尔值，默认false，用来设置一个模型对象是否在光照下产生投影效果。具体查看threejs文档`Object3D
// 设置产生投影的网格模型
mesh.castShadow = true;
```

`.receiveShadow`属性

```
.receiveShadow`属性值是布尔值，默认false，用来设置一个模型对象是否在光照下接受其它模型的投影效果。具体查看threejs文档`Object3D
// 设置网格模型planeMesh接收其它模型的阴影(planeMesh作为投影面使用)
planeMesh.receiveShadow = true;
```

#### 光源`.castShadow`属性

如果属性设置为 true， 光源将投射动态阴影. *警告*: 这需要很多计算资源，需要调整以使阴影看起来正确. 更多细节，查看DirectionalLightShadow. 默认值false.

```javascript
// 设置用于计算阴影的光源对象
directionalLight.castShadow = true;
// spotLight.castShadow = true;
```

#### 光源`.shadow`属性

平行光`DirectionalLight`的`.shadow`属性值是平行光阴影对象`DirectionalLightShadow`，聚光源`SpotLight`的`.shadow`属性值是聚光源阴影对象`SpotLightShadow`。关于`DirectionalLightShadow`和`SpotLightShadow`两个类的具体介绍可以参考Three.js文档Lights / Shadows分类，

#### 阴影对象基类`LightShadow`

平行光阴影对象`DirectionalLightShadow`和聚光源阴影对象`SpotLightShadow`两个类的基类是`LightShadow`

##### `LightShadow`属性`.camera`

观察光源的相机对象. 从光的角度来看，以相机对象的观察位置和方向来判断，其他物体背后的物体将处于阴影中。

```javascript
// 聚光源设置
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 300;
spotLight.shadow.camera.fov = 20;
```

##### `LightShadow`属性`.mapSize`

定义阴影纹理贴图宽高尺寸的一个二维向量Vector2.

较高的值会以计算时间为代价提供更好的阴影质量. 宽高分量值必须是2的幂, 直到给定设备的`WebGLRenderer.capabilities.maxTextureSize`, 尽管宽度和高度不必相同 (例如，(512, 1024)是有效的). 默认值为 ( 512, 512 ).

```javascript
directionalLight.shadow.mapSize.set(1024,1024)
```

##### `LightShadow`属性`.map`

该属性的值是WebGL渲染目标对象`WebGLRenderTarget`，使用内置摄像头生成的深度图; 超出像素深度的位置在阴影中。 在渲染期间内部计算。



----

## 基类Light和Object3D

### 光源位置属性

光源对象继承父类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)的位置属性`.position`。

以点光源[PointLight](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/PointLight) 为例，`PointLight`的基类是[Light](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/Light)，`Light`的基类是[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)，点光源自然继承对象`Object3D`的位置属性`.position`。

```javascript
var point = new THREE.PointLight(0xffffff);//点光源
//设置点光源位置  
//
//光源对象和模型对象的position属性一样是Vector3对象
point.position.set(400, 200, 300);
```

光源对象的`.add()`方法同样继承自基类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)

```javascript
//环境光对象添加到scene场景中
scene.add(ambient);
//点光源对象添加到scene场景中
scene.add(point);
```

### 光源颜色属性`.color`和强度属性`.intensity`

你查看光源光源[Light](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/Light)文档，可以看到该类定义了光源颜色属性`.color`和强度系数属性`.intensity`。

光源颜色属性`.color`默认值是白色`0xffffff`,强度属性`.intensity`默认1.0,光照计算的时候会把两个属性值相乘。

比如环境光颜色设置为`0xffffff`,强度系数设置为0.5，把0.5设置为0.8，threejs场景中模型会变得更明亮。调节环境颜色你可以直接设置不同颜色值，比如`0x44444`、`0xddddddd`，也可以使用更为方便的强度系数去调节。对于点光源、聚光源和环境光一样继承基类[Light](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/lights/Light)强度系数属性`.intensity`。

```javascript
//环境光：颜色设置为`0xffffff`,强度系数设置为0.5
var ambient = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambient);
```



----

# Threejs层级模型、树结构

比如一辆车，在Threejs中你可以使用一个网格模型去描述车上面的一个零件，多个零件就需要多个网格模型表示，这些网格模型之间就会构成父子或兄弟关系，从而形成一个层级结构。

在具体开发过程中，3D美术给你一个包含多个网格模型对象的层级模型，你可能需要操作某个网格模型，这时候3D美术只要通过对模型命名标记模型，那么对于程序员来说，直接调用Threejs的某个方法就可以遍历整个模型，找到某个你想要操作的模型对象。

## 组对象[Group](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/Group)、层级模型

所谓层级模型，比如一个机器人，人头、胳膊都是人的一部分，眼睛是头的一部分，手是个胳膊的一部分，手指是手的一部分...这样的话就构成一个一个层级结构或者说树结构。

### Group案例

在详细讲解层级模型之前先通过Threejs的类[Group](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/Group)实现一个网格模型简单的案例。

下面代码创建了两个网格模型mesh1、mesh2，通过`THREE.Group`类创建一个组对象group,然后通过`add`方法把网格模型mesh1、mesh2作为设置为组对象group的子对象，然后在通过执行`scene.add(group)`把组对象group作为场景对象的scene的子对象。也就是说场景对象是scene是group的父对象，group是mesh1、mesh2的父对象。这样就构成了一个三层的层级结构，当然了你也可以通过`Group`自己创建新模型节点作为层级结构中的一层。

```javascript
//创建两个网格模型mesh1、mesh2
var geometry = new THREE.BoxGeometry(20, 20, 20);
var material = new THREE.MeshLambertMaterial({color: 0x0000ff});
var group = new THREE.Group();
var mesh1 = new THREE.Mesh(geometry, material);
var mesh2 = new THREE.Mesh(geometry, material);
mesh2.translateX(25);
//把mesh1型插入到组group中，mesh1作为group的子对象
group.add(mesh1);
//把mesh2型插入到组group中，mesh2作为group的子对象
group.add(mesh2);
//把group插入到场景中作为场景子对象
scene.add(group);
```

网格模型mesh1、mesh2作为设置为父对象group的子对象，如果父对象group进行旋转、缩放、平移变换，子对象同样跟着变换，就像你的头旋转了，眼睛会跟着头旋转。

```javascript
//沿着Y轴平移mesh1和mesh2的父对象，mesh1和mesh2跟着平移
group.translateY(100);
//父对象缩放，子对象跟着缩放
group.scale.set(4,4,4);
//父对象旋转，子对象跟着旋转
group.rotateY(Math.PI/6)
```

### 查看子对象`.children`

Threejs场景对象Scene、组对象Group都有一个子对象属性`.children`,通过该属性可以访问父对象的子对象，子对象属性`.children`的值是数组，所有子对象是数组的值，你可以在浏览器控制台打印测试上面案例代码。

执行`console.log(group.children)`你可以在浏览器控制控制看到group的子对象是案例代码中通过`add`方法添加的两个网格模型对象Mesh。

```javascript
console.log('查看group的子对象',group.children);
```

### 场景对象结构

执行`console.log(scene.children)`你在浏览器控制台查看场景对象Scene的子对象，除了可以看到案例代码通过`add`方法添加的组对象group之外，还可以看到通过`add`方法插入到场景中的环境光`AmbientLight`、点光源`PointLight`、辅助坐标对象`AxesHelper`等子对象。

```javascript
console.log('查看Scene的子对象',scene.children);
```

场景对象scene构成的层级模型本身是一个树结构，场景对象层级模型的第一层，也就是树结构的根节点，一般来说网格模型Mesh、点模型Points、线模型Line是树结构的最外层叶子结点。构建层级模型的中间层一般都是通过Threejs的`Group`类来完成，`Group`类实例化的对象可以称为组对象。

Threejs渲染的时候从根节点场景对象开始解析渲染，如果一个模型要想被渲染出来就要直接或间接插入到场景scene中，一个光源如果要在光照计算中起作用同样需要通过`add`方法插入到场景中。

### `.add()`方法

场景对象`Scene`、组对象`Group`、网格模型对象`Mesh`、光源对象`Light`的`.add()`方法都是继承自它们共同的基类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)。

父对象执行`.add()`方法的本质就是把参数中的子对象添加到自身的子对象属性`.children`中。

`.add()`方法可以单独插入一个对象，也可以同时插入多个子对象。

```javascript
group.add(mesh1);
group.add(mesh2);
group.add(mesh1,mesh2);
```

Scene根节点 渲染的问题

### `.remove()`方法

`.add()`方法是给父对象添加一个子对象，`.remove()`方法是删除父对象中的一个子对象。 一个对象的全部子对象可以通过该对象的`.children()`属性访问获得，执行该对象的删除方法`.remove()`和添加方法`.add()`一样改变的都是父对象的`.children()`属性。

场景`Scene`或组对象`Group`的`.remove()`方法使用规则可以查看它们的基类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)。

```javascript
// 删除父对象group的子对象网格模型mesh1
group.remove(mesh1)
// 一次删除场景中多个对象
scene.remove(light,group)
```



----

## 层级模型节点命名、查找、遍历

### 模型命名(`.name`属性)

在层级模型中可以给一些模型对象通过`.name`属性命名进行标记。

```javascript
group.add(Mesh)
// 网格模型命名
Mesh.name = "眼睛"
// mesh父对象对象命名
group.name = "头"
```

### 树结构层级模型

实际开发的时候，可能会加载外部的模型，然后从模型对象通过节点的名称`.name`查找某个子对象，为了大家更容易理解，本节课不加载外部模型，直接通过代码创建一个非常简易的机器人模型，然后在机器人基础上进行相关操作。

```javascript
// 头部网格模型和组
var headMesh = sphereMesh(10, 0, 0, 0);
headMesh.name = "脑壳"
var leftEyeMesh = sphereMesh(1, 8, 5, 4);
leftEyeMesh.name = "左眼"
var rightEyeMesh = sphereMesh(1, 8, 5, -4);
rightEyeMesh.name = "右眼"
var headGroup = new THREE.Group();
headGroup.name = "头部"
headGroup.add(headMesh, leftEyeMesh, rightEyeMesh);
// 身体网格模型和组
var neckMesh = cylinderMesh(3, 10, 0, -15, 0);
neckMesh.name = "脖子"
var bodyMesh = cylinderMesh(14, 30, 0, -35, 0);
bodyMesh.name = "腹部"
var leftLegMesh = cylinderMesh(4, 60, 0, -80, -7);
leftLegMesh.name = "左腿"
var rightLegMesh = cylinderMesh(4, 60, 0, -80, 7);
rightLegMesh.name = "右腿"
var legGroup = new THREE.Group();
legGroup.name = "腿"
legGroup.add(leftLegMesh, rightLegMesh);
var bodyGroup = new THREE.Group();
bodyGroup.name = "身体"
bodyGroup.add(neckMesh, bodyMesh, legGroup);
// 人Group
var personGroup = new THREE.Group();
personGroup.name = "人"
personGroup.add(headGroup, bodyGroup)
personGroup.translateY(50)
scene.add(personGroup);

// 球体网格模型创建函数
function sphereMesh(R, x, y, z) {
  var geometry = new THREE.SphereGeometry(R, 25, 25); //球体几何体
  var material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
  mesh.position.set(x, y, z);
  return mesh;
}
// 圆柱体网格模型创建函数
function cylinderMesh(R, h, x, y, z) {
  var geometry = new THREE.CylinderGeometry(R, R, h, 25, 25); //球体几何体
  var material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
  mesh.position.set(x, y, z);
  return mesh;
}
```

### 递归遍历方法`.traverse()`

Threejs层级模型就是一个树结构，可以通过递归遍历的算法去遍历Threejs一个模型对象的所有后代，可以通过下面代码递归遍历上面创建一个机器人模型或者一个外部加载的三维模型。

```javascript
scene.traverse(function(obj) {
  if (obj.type === "Group") {
    console.log(obj.name);
  }
  if (obj.type === "Mesh") {
    console.log('  ' + obj.name);
    obj.material.color.set(0xffff00);
  }
  if (obj.name === "左眼" | obj.name === "右眼") {
    obj.material.color.set(0x000000)
  }
  // 打印id属性
  console.log(obj.id);
  // 打印该对象的父对象
  console.log(obj.parent);
  // 打印该对象的子对象
  console.log(obj.children);
})
```

### 查找某个具体的模型

看到Threejs的`.getObjectById()`、`.getObjectByName()`等方法，如果已有前端基础，很容易联想到DOM的一些方法。

Threejs和前端DOM一样，可以通过一个方法查找树结构父元素的某个后代对象，对于普通前端而言可以通过name或id等方式查找一个或多个DOM元素，Threejs同样可以通过一些方法查找一个模型树中的某个节点。更多的查找方法和方法的使用细节可以查看基类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)

```javascript
// 遍历查找scene中复合条件的子对象，并返回id对应的对象
var idNode = scene.getObjectById ( 4 );
console.log(idNode);
// 遍历查找对象的子对象，返回name对应的对象（name是可以重名的，返回第一个）
var nameNode = scene.getObjectByName ( "左腿" );
nameNode.material.color.set(0xff0000);
```



----

## Three.js获得世界坐标`.getWorldPosition()`

如果你对本地坐标系和世界坐标系已经有了一定概念，那么可以直接访问模型的位置属性`.position`获得模型在本地坐标系或者说模型坐标系下的三维坐标，通过模型的`.getWorldPosition()`方法获得该模型在世界坐标下的三维坐标。

### `.getWorldPosition()`方法

模型对象的方法`.getWorldPosition()`方法和位置属性`.position`一样继承自基类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)。

```javascript
// 声明一个三维向量用来保存世界坐标
var worldPosition = new THREE.Vector3();
// 执行getWorldPosition方法把模型的世界坐标保存到参数worldPosition中
mesh.getWorldPosition(worldPosition);
```

### 建立世界坐标系概念

如果你没有本地坐标系和世界坐标系的概念，可以通过下面的案例源码很快的建立两个坐标系的概念。

你首先在案例中测试下面源码，通过位置属性`.position`和`.getWorldPosition()`分别返回模型的本地位置坐标和世界坐标，查看两个坐标x分量有什么不同。你可以看到网格模型mesh通过位置属性`.position`返回的坐标x分量是50，通过`.getWorldPosition()`返回的坐标x分量是100，也就是说mesh的世界坐标是mesh位置属性`.position`和mesh父对象group位置属性`.position`的累加。

```javascript
var mesh = new THREE.Mesh(geometry, material);
// mesh的本地坐标设置为(50, 0, 0)
mesh.position.set(50, 0, 0);
var group = new THREE.Group();
// group本地坐标设置和mesh一样设置为(50, 0, 0)
// mesh父对象设置position会影响得到mesh的世界坐标
group.position.set(50, 0, 0);
group.add(mesh);
scene.add(group);

// .position属性获得本地坐标
console.log('本地坐标',mesh.position);

// getWorldPosition()方法获得世界坐标
//该语句默认在threejs渲染的过程中执行,如果渲染之前想获得世界矩阵属性、世界位置属性等属性，需要通过代码更新
scene.updateMatrixWorld(true);
var worldPosition = new THREE.Vector3();
mesh.getWorldPosition(worldPosition);
console.log('世界坐标',worldPosition);
```

所谓本地坐标系或者说模型坐标系，就是模型对象相对模型的父对象而言，模型位置属性`.position`表示的坐标值就是以本地坐标系为参考，表示子对象相对本地坐标系原点(0,0,0)的偏移量。

前面两节课说过Threejs场景Scene是一个树结构，一个模型对象可能有多个父对象节点。世界坐标系默认就是对Threejs整个场景Scene建立一个坐标系，一个模型相对世界坐标系的坐标值就是该模型对象所有父对象以及模型本身位置属性`.position`的叠加。

### 本地缩放系数`.scale`

通过前面的论述，模型的位置属性`.position`可以称为本地坐标或者说局部坐标，对于属性`.scale`一样，可以称为模型的本地缩放系数或者局部的缩放系数，通过`.getWorldScale()`方法可以获得一个模型的世界缩放系数，就像执行`.getWorldPosition()`方法一样获得世界坐标，关于`.getWorldScale()`方法可以查看基类[Object3D](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D)。

### 本地矩阵`.materix`和世界矩阵`.matrixWorld`

如果你对WebGL顶点的旋转、缩放、平移矩阵变换有一定的了解，可以继续阅读，如果没有概念也可以暂时跳过。

本地矩阵`.materix`是以本地坐标系为参考的模型矩阵，世界矩阵`.matrixWorld`自然就是以是世界坐标系为参照的模型矩阵。

Three.js模型的位置属性`.position`、缩放系数属性`.scale`和角度属性`.rotation`记录了模型的所有平移、缩放和旋转变换，本地矩阵`.materix`是以线性代数矩阵的形式表示`.position`、`.scale`和`.rotation`。世界矩阵`.matrixWorld`自然是用矩阵的形式表示模型以及模型父对象的所有旋转缩放平移变换。



----

# Three.js几何体对象、曲线、三维模型

## 常见几何体和曲线

几何体本质上就是threejs生成顶点的算法，如果有兴趣你可以打开threejs几何体部分的源码查看threejs具体如何通过程序生成顶点位置、法线方向等顶点数据。

所有几何体的基类分为[Geometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Geometry)和[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)两大类，两类几何体直接可以相互转化。

![基类Geometry](E:\pogject\学习笔记\image\其他\基类Geometry.png)

### 曲线

曲线和几何体同样本质上都是用来生成顶点的算法，曲线主要是按照一定的规则生成一系列沿着某条轨迹线分布的顶点。当你把曲线、几何体看成顶点的时候，查考文档很多属性和方法自然很同意理解。

![曲线](E:\pogject\学习笔记\image\其他\曲线.png)



----

## 直线、椭圆、圆弧、基类Curve

### 圆弧线[ArcCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/ArcCurve)

圆弧线[ArcCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/ArcCurve)的基类是椭圆弧线[EllipseCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/EllipseCurve),关于圆弧线的使用方法可以查看threejs文档中的椭圆弧线。

```javascript
ArcCurve( aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise )
```

| 参数                   | 含义                          |
| :--------------------- | :---------------------------- |
| aX, aY                 | 圆弧圆心坐标                  |
| aRadius                | 圆弧半径                      |
| aStartAngle, aEndAngle | 起始角度                      |
| aClockwise             | 是否顺时针绘制，默认值为false |

```javascript
//参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
```

### 曲线[Curve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Curve)方法`.getPoints()`

`.getPoints()`是基类[Curve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Curve)的方法，圆弧线[ArcCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/ArcCurve)的基类是椭圆弧线[EllipseCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/EllipseCurve),椭圆弧线的基类是曲线`Curve`，所以圆弧线具有`Curve`的方法`.getPoints()`。

通过方法`.getPoints()`可以从圆弧线按照一定的细分精度返回沿着圆弧线分布的顶点坐标。细分数越高返回的顶点数量越多，自然轮廓越接近于圆形。方法`.getPoints()`的返回值是一个由二维向量[Vector2](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector2)或三维向量[Vector3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3)构成的数组，`Vector2`表示位于同一平面内的点，`Vector3`表示三维空间中一点。

```javascript
var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
//getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
var points = arc.getPoints(50);//分段数50，返回51个顶点
```

### 几何体方法`.setFromPoints()`

`.setFromPoints()`是几何体[Geometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Geometry)的方法，通过该方法可以把数组`points`中顶点数据提取出来赋值给几何体的顶点位置属性`geometry.vertices`，数组`points`的元素是二维向量[Vector2](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector2)或三维向量[Vector3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3)。

[BufferGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/BufferGeometry)和`Geometry`一样具有方法`.setFromPoints()`，不过区别是提取顶点数据后赋值给`geometry.attributes.position`属性。

```javascript
// setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
geometry.setFromPoints(points);
console.log(geometry.vertices);
// 如果几何体是BufferGeometry，setFromPoints方法改变的是.attributes.position属性
// console.log(geometry.attributes.position);
```

使用threejs的API圆弧线[ArcCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/ArcCurve)绘制一个圆弧轮廓。

```js
var geometry = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
//参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);
//getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
var points = arc.getPoints(50);//分段数50，返回51个顶点
// setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
geometry.setFromPoints(points);
//材质对象
var material = new THREE.LineBasicMaterial({
  color: 0x000000
});
//线条模型对象
var line = new THREE.Line(geometry, material);
scene.add(line); //线条对象添加到场景中
```

和上面绘制圆弧线代码实现的功能相同，不过没有借助圆弧线[THREE.ArcCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/ArcCurve)，通过三角函数计算生成圆弧线上的顶点。设置这个案例的目的就是，你可以通过对比两个代码案例，明白Threejs一些曲线API本质上就是通过某种算法得到了沿着特定轨迹的顶点数据。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
var R = 100; //圆弧半径
var N = 50; //分段数量
// 批量生成圆弧上的顶点数据
for (var i = 0; i < N; i++) {
  var angle = 2 * Math.PI / N * i;
  var x = R * Math.sin(angle);
  var y = R * Math.cos(angle);
  geometry.vertices.push(new THREE.Vector3(x, y, 0));
}
// 插入最后一个点，line渲染模式下，产生闭合效果
// geometry.vertices.push(geometry.vertices[0])
//材质对象
var material = new THREE.LineBasicMaterial({
  color: 0x000000
});
//线条模型对象
var line = new THREE.Line(geometry, material);
scene.add(line); //线条对象添加到场景中
```

### 绘制直线效果

直接给几何体`Geometry`设置两个顶点数据。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
var p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
var p2 = new THREE.Vector3(0, 70, 0); //顶点2坐标
//顶点坐标添加到geometry对象
geometry.vertices.push(p1, p2);
var material = new THREE.LineBasicMaterial({
  color: 0xffff00,
});//材质对象
//线条模型对象
var line = new THREE.Line(geometry, material);
scene.add(line); //线条对象添加到场景中
```

通过[LineCurve3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/LineCurve3)绘制一条三维直线。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
var p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
var p2 = new THREE.Vector3(0, 70, 0); //顶点2坐标
// 三维直线LineCurve3
var LineCurve = new THREE.LineCurve3(p1, p2);
// 二维直线LineCurve
var LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 0), new THREE.Vector2(0, 70));
var pointArr = LineCurve.getPoints(10);
geometry.setFromPoints(pointArr);
```

通过[LineCurve](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/LineCurve)绘制一条二维直线。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
var p1 = new THREE.Vector2(50, 0); //顶点1坐标
var p2 = new THREE.Vector2(0, 70); //顶点2坐标
// 二维直线LineCurve
var LineCurve = new THREE.LineCurve(p1, p2);
var pointArr = LineCurve.getPoints(10);
geometry.setFromPoints(pointArr);
```



----

## 样条曲线、贝赛尔曲线

规则的曲线比如圆、椭圆、抛物线都可以用一个函数去描述，对于不规则的曲线无法使用一个特定的函数去描述，这也就是样条曲线和贝塞尔曲线出现的原因。

在三维空间中设置5个顶点，输入三维样条曲线[CatmullRomCurve3](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/curves/CatmullRomCurve3)作为参数，然后返回更多个顶点，通过返回的顶点数据，构建一个几何体，通过`Line`可以绘制出来一条沿着5个顶点的光滑样条曲线。

```javascript
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
// 三维样条曲线  Catmull-Rom算法
var curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-50, 20, 90),
  new THREE.Vector3(-10, 40, 40),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(60, -60, 0),
  new THREE.Vector3(70, 0, 80)
]);
//getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数组
var points = curve.getPoints(100); //分段数100，返回101个顶点
// setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
geometry.setFromPoints(points);
//材质对象
var material = new THREE.LineBasicMaterial({
  color: 0x000000
});
//线条模型对象
var line = new THREE.Line(geometry, material);
scene.add(line); //线条对象添加到场景中
```

通过调用threejs样条曲线或贝塞尔曲线的API，你可以输入有限个顶点返回更多顶点，然后绘制一条光滑的轮廓曲线。

通过调用threejs样条曲线或贝塞尔曲线的API，你可以输入有限个顶点返回更多顶点，然后绘制一条光滑的轮廓曲线。

### 贝塞尔曲线

贝塞尔曲线和样条曲线不同，多了一个控制点概念。

二次贝赛尔曲线的参数p1、p3是起始点，p2是控制点，控制点不在贝塞尔曲线上。

```javascript
var p1 = new THREE.Vector3(-80, 0, 0);
var p2 = new THREE.Vector3(20, 100, 0);
var p3 = new THREE.Vector3(80, 0, 0);
// 三维二次贝赛尔曲线
var curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);
```

三次贝赛尔曲线的参数p1、p4是起始点，p2、p3是控制点，控制点不在贝塞尔曲线上。

```js
var p1 = new THREE.Vector3(-80, 0, 0);
var p2 = new THREE.Vector3(-40, 100, 0);
var p3 = new THREE.Vector3(40, 100, 0);
var p4 = new THREE.Vector3(80, 0, 0);
// 三维三次贝赛尔曲线
var curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4);
```



---

## 多个线条组合曲线CurvePath

### U型案例

```js
var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
// 绘制一个U型轮廓
var R = 80;//圆弧半径
var arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true);
// 半圆弧的一个端点作为直线的一个端点
var line1 = new THREE.LineCurve(new THREE.Vector2(R, 200, 0), new THREE.Vector2(R, 0, 0));
var line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0, 0), new THREE.Vector2(-R, 200, 0));
// 创建组合曲线对象CurvePath
var CurvePath = new THREE.CurvePath();
// 把多个线条插入到CurvePath中
CurvePath.curves.push(line1, arc, line2);
//分段数200
var points = CurvePath.getPoints(200);
// setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
geometry.setFromPoints(points);
//材质对象
var material = new THREE.LineBasicMaterial({
  color: 0x000000
});
//线条模型对象
var line = new THREE.Line(geometry, material);
scene.add(line); //线条对象添加到场景中
```



----

## 曲线路径管道成型TubeGeometry

[TubeGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/geometries/TubeGeometry)的功能就是通过一条曲线生成一个圆管。它的本质就是以曲线上顶点为基准，生成一系列曲线等径分布的顶点数据， 具体算法如何实现的可以查看three.js引擎源码。

```javascript
构造函数格式：TubeGeometry(path, tubularSegments, radius, radiusSegments, closed)
```

| 参数            | 值                                    |
| :-------------- | :------------------------------------ |
| path            | 扫描路径，基本类是Curve的路径构造函数 |
| tubularSegments | 路径方向细分数，默认64                |
| radius          | 管道半径，默认1                       |
| radiusSegments  | 管道圆弧细分数，默认8                 |
| closed          | Boolean值，管道是否闭合               |

### 样条曲面生成圆管案例

```javascript
//创建管道成型的路径(3D样条曲线)
var path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-10, -50, -50),
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(8, 50, 50),
  new THREE.Vector3(-5, 0, 100)
]);
// path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
var geometry = new THREE.TubeGeometry(path, 40, 2, 25);
```

你也可以使用下面直线替换上面的样条曲线查看圆管生成效果。

```javascript
// LineCurve3创建直线段路径
var path = new THREE.LineCurve3(new THREE.Vector3(0, 100, 0), new THREE.Vector3(0, 0, 0));
```

### CurvePath多段路径生成管道案例

通过下面代码创建了一段样条曲线和两条直线拼接成的路径，然后通过曲线路径[CurvePath](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/CurvePath)把样条曲线和料条曲线合并成为一条路径。

```javascript
// 创建多段线条的顶点数据
var p1 = new THREE.Vector3(-85.35, -35.36)
var p2 = new THREE.Vector3(-50, 0, 0);
var p3 = new THREE.Vector3(0, 50, 0);
var p4 = new THREE.Vector3(50, 0, 0);
var p5 = new THREE.Vector3(85.35, -35.36);
// 创建线条一：直线
let line1 = new THREE.LineCurve3(p1,p2);
// 重建线条2：三维样条曲线
var curve = new THREE.CatmullRomCurve3([p2, p3, p4]);
// 创建线条3：直线
let line2 = new THREE.LineCurve3(p4,p5);
var CurvePath = new THREE.CurvePath();// 创建CurvePath对象
CurvePath.curves.push(line1, curve, line2);// 插入多段线条
//通过多段曲线路径创建生成管道
//通过多段曲线路径创建生成管道，CCurvePath：管道路径
var geometry2 = new THREE.TubeGeometry(CurvePath, 100, 5, 25, false);
```



----

## 旋转造型LatheGeometry

生活中有很多的几何体具备旋转特征，比如球体，常见杯子, three.js提供了一个构造函数`LatheGeometry()`， `LatheGeometry`可以利用已有的二维数据生成三维顶点数据，二维数据可以通过二维向量对象`Vector2`定义，也可以通过3D曲线或2D线条轮廓生成。 `LatheGeometry`的二维坐标数据默认绕y轴旋转。

```javascript
格式：LatheGeometry(points, segments, phiStart, phiLength)
```

| 参数      | 值                              |
| :-------- | :------------------------------ |
| points    | Vector2表示的坐标数据组成的数组 |
| segments  | 圆周方向细分数，默认12          |
| phiStart  | 开始角度,默认0                  |
| phiLength | 旋转角度，默认2π                |

```javascript
/**
 * 创建旋转网格模型
 */
var points = [
    new THREE.Vector2(50,60),
    new THREE.Vector2(25,0),
    new THREE.Vector2(50,-60)
];
var geometry = new THREE.LatheGeometry(points,30);
var material=new THREE.MeshPhongMaterial({
    color:0x0000ff,//三角面颜色
    side:THREE.DoubleSide//两面可见
});//材质对象
material.wireframe = true;//线条模式渲染(查看细分数)
var mesh=new THREE.Mesh(geometry,material);//旋转网格模型对象
scene.add(mesh);//旋转网格模型添加到场景中
```

### 样条曲线插值计算

借助[Shape](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Shape)对象的方法`.splineThru()`，把上面的三个顶点进行样条插值计算， 可以得到一个光滑的旋转曲面。

```javascript
var shape = new THREE.Shape();//创建Shape对象
var points = [//定位定点
    new THREE.Vector2(50,60),
    new THREE.Vector2(25,0),
    new THREE.Vector2(50,-60)
];
shape.splineThru(points);//顶点带入样条插值计算函数
var splinePoints = shape.getPoints(20);//插值计算细分数20
var geometry = new THREE.LatheGeometry(splinePoints,30);//旋转造型
```

`shape.getPoints(20)`的作用是利用已有的顶点插值计算出新的顶点，两个顶点之间插值计算出20个顶点，如果细分数是1不是20，相当于不进行插值计算， 插值计算的规则通过[Shape](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Shape)对象的方法`.splineThru()`定义，几何曲线的角度描述，`splineThru`的作用就是创建一个样条曲线，除了样条曲线还可以使用贝赛尔等曲线进行插值计算。



----

## [Shape](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Shape)对象和轮廓填充ShapeGeometry

![轮廓生成](E:\pogject\学习笔记\image\其他\轮廓生成.png)

### 填充顶点构成的轮廓

通过下面代码定义了6个顶点坐标，也可以说是5个，最后一个和第一个是重合的，构成一个五边形区域。然后使用这一组二维顶点坐标作为`Shape`的参数构成一个五边形轮廓。把五边形轮廓`Shape`作为`ShapeGeometry`的参数，可以根据轮廓坐标计算出一系列三角形面填充轮廓，形成一个平面几何体。



```javascript
var points = [
  new THREE.Vector2(-50, -50),
  new THREE.Vector2(-60, 0),
  new THREE.Vector2(0, 50),
  new THREE.Vector2(60, 0),
  new THREE.Vector2(50, -50),
  new THREE.Vector2(-50, -50),
]
// 通过顶点定义轮廓
var shape = new THREE.Shape(points);
// shape可以理解为一个需要填充轮廓
// 所谓填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
var geometry = new THREE.ShapeGeometry(shape, 25);
```

调用`Shape`圆弧方法`.absarc()`绘制一个圆形轮廓，然后通过`ShapeGeometry`可以把该圆形轮廓填充为一个圆形平面几何体。

你可以尝试更改`ShapeGeometry`的参数2，参数2表示细分数，然后网格材质设置为`wireframe: true`查看圆形区域填充三角形的数量变化。

```javascript
// 通过shpae基类path的方法绘制轮廓（本质也是生成顶点）
var shape = new THREE.Shape();
shape.absarc(0,0,100,0,2*Math.PI);//圆弧轮廓
console.log(shape.getPoints(15));//查看shape顶点数据
var geometry = new THREE.ShapeGeometry(shape, 25);
```

下面代码是通过`shpae`绘制了一个矩形区域，更多相关的轮廓绘制方法可以查看[Shape](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Shape)文档。

```javascript
// 通过shpae基类path的方法绘制轮廓（本质也是生成顶点）
var shape = new THREE.Shape();
// 四条直线绘制一个矩形轮廓
shape.moveTo(0,0);//起点
shape.lineTo(0,100);//第2点
shape.lineTo(100,100);//第3点
shape.lineTo(100,0);//第4点
shape.lineTo(0,0);//第5点
```

### shape外轮廓和内轮廓

shape可以用来绘制外轮廓，也可以用来绘制内轮廓，`ShapeGeometry`会使用三角形自动填充shape内轮廓和外轮廓中间的中部。

下面给出了几个通过shape绘制的轮廓图案。

```js
// 圆弧与直线连接
var shape = new THREE.Shape(); //Shape对象
var R = 50;
// 绘制一个半径为R、圆心坐标(0, 0)的半圆弧
shape.absarc(0, 0, R, 0, Math.PI);
//从圆弧的一个端点(-R, 0)到(-R, -200)绘制一条直线
shape.lineTo(-R, -200);
// 绘制一个半径为R、圆心坐标(0, -200)的半圆弧
shape.absarc(0, -200, R, Math.PI, 2 * Math.PI);
//从圆弧的一个端点(R, -200)到(-R, -200)绘制一条直线
shape.lineTo(R, 0);
var geometry = new THREE.ShapeGeometry(shape, 30);
```

```js
// 一个外轮廓圆弧嵌套三个内圆弧轮廓
var shape = new THREE.Shape(); //Shape对象
//外轮廓
shape.arc(0, 0, 100, 0, 2 * Math.PI);
// 内轮廓1
var path1 = new THREE.Path();
path1.arc(0, 0, 40, 0, 2 * Math.PI);
// 内轮廓2
var path2 = new THREE.Path();
path2.arc(80, 0, 10, 0, 2 * Math.PI);
// 内轮廓3
var path3 = new THREE.Path();
path3.arc(-80, 0, 10, 0, 2 * Math.PI);
//三个内轮廓分别插入到holes属性中
shape.holes.push(path1, path2, path3);
```

```js
// 矩形嵌套矩形或圆弧
var shape=new THREE.Shape();//Shape对象
//外轮廓
shape.moveTo(0,0);//起点
shape.lineTo(0,100);//第2点
shape.lineTo(100,100);//第3点
shape.lineTo(100,0);//第4点
shape.lineTo(0,0);//第5点

//内轮廓
var path=new THREE.Path();//path对象
// path.arc(50,50,40,0,2*Math.PI);//圆弧
path.moveTo(20,20);//起点
path.lineTo(20,80);//第2点
path.lineTo(80,80);//第3点
path.lineTo(80,20);//第4点
path.lineTo(20,20);//第5点
shape.holes.push(path);//设置内轮廓
```

### 多个轮廓同时填充

```js
// 轮廓对象1
 var shape=new THREE.Shape();
 shape.arc(-50,0,30,0,2*Math.PI);
 // 轮廓对象2
 var shape2=new THREE.Shape();
 shape2.arc(50,0,30,0,2*Math.PI);
 // 轮廓对象3
 var shape3=new THREE.Shape();
 shape3.arc(0,50,30,0,2*Math.PI);
// 多个shape作为元素组成数组,每一个shpae可以理解为一个要填充的轮廓
var geometry = new THREE.ShapeGeometry([shape,shape2,shape3], 30);
```



----

## 拉伸扫描成型ExtrudeGeometry

构造函数[ExtrudeGeometry()](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/geometries/ExtrudeGeometry)和[ShapeGeometry](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/geometries/ShapeGeometry)一样是利用[Shape](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/extras/core/Shape)对象生成几何体对象，区别在于`ExtrudeGeometry()`可以利用2D轮廓生成3D模型， 如果你使用任何三维软件都知道可以先绘制一个二维的轮廓图，然后拉伸成型得到三维模型。`ExtrudeGeometry()`第二个参数是拉伸参数，数据类型是对象， 属性`amount`表示拉伸长度，`bevelEnabled`表示拉伸是否产生倒角，其它参数见下表。

构造函数`ExtrudeGeometry()`拉伸参数

| 参数            | 含义                                 |      |
| :-------------- | :----------------------------------- | ---- |
| amount          | 拉伸长度，默认100                    |      |
| bevelEnabled    | 是否使用倒角                         |      |
| bevelSegments   | 倒角细分数，默认3                    |      |
| bevelThickness  | 倒角尺寸(经向)                       |      |
| curveSegments   | 拉伸轮廓细分数                       |      |
| steps           | 拉伸方向细分数                       |      |
| extrudePath     | 扫描路径THREE.CurvePath，默认Z轴方向 |      |
| material        | 前后面材质索引号                     |      |
| extrudeMaterial | 拉伸面、倒角面材质索引号             |      |
| bevelSize       | 倒角尺寸(拉伸方向)                   |      |

```javascript
/**
 * 创建拉伸网格模型
 */
var shape = new THREE.Shape();
/**四条直线绘制一个矩形轮廓*/
shape.moveTo(0,0);//起点
shape.lineTo(0,100);//第2点
shape.lineTo(100,100);//第3点
shape.lineTo(100,0);//第4点
shape.lineTo(0,0);//第5点
var geometry = new THREE.ExtrudeGeometry(//拉伸造型
    shape,//二维轮廓
    //拉伸参数
    {
        amount:120,//拉伸长度
        bevelEnabled:false//无倒角
    }
    );
```

通过使用点模式渲染上面的几何体，可以看出几何体拉伸的本质效果就是空间分布顶点数据的产生。

```javascript
var material=new THREE.PointsMaterial({
    color:0x0000ff,
    size:5.0//点对象像素尺寸
});//材质对象
var mesh=new THREE.Points(geometry,material);//点模型对象
scene.add(mesh);//点模型添加到场景中
```

拉伸和扫描一样都是三维造型建模方法，three.js提供了一个共同的构造函数来实现扫描和拉伸，对于扫描而言不需要定义`amount`属性设置拉伸距离，设置扫描路径即可， 定义属性`extrudePath`，`extrudePath`的值是路径`THREE.CurvePath`，可以通过样条曲线、贝赛尔曲线构造函数创建不规则曲线扫描轨迹。

```javascript
/**
* 创建扫描网格模型
*/
var shape = new THREE.Shape();
/**四条直线绘制一个矩形轮廓*/
shape.moveTo(0,0);//起点
shape.lineTo(0,10);//第2点
shape.lineTo(10,10);//第3点
shape.lineTo(10,0);//第4点
shape.lineTo(0,0);//第5点
/**创建轮廓的扫描轨迹(3D样条曲线)*/
var curve = new THREE.SplineCurve3([
   new THREE.Vector3( -10, -50, -50 ),
   new THREE.Vector3( 10, 0, 0 ),
   new THREE.Vector3( 8, 50, 50 ),
   new THREE.Vector3( -5, 0, 100)
]);
var geometry = new THREE.ExtrudeGeometry(//拉伸造型
   shape,//二维轮廓
   //拉伸参数
   {
       bevelEnabled:false,//无倒角
       extrudePath:curve,//选择扫描轨迹
       steps:50//扫描方向细分数
   }
);
```



----

# 纹理贴图

纹理贴图是Threejs一个很重要的内容，游戏、产品720展示、物联网3D可视化等项目程序员加载模型的同时需要处理纹理贴图。

![纹理贴图](E:\pogject\学习笔记\image\其他\纹理贴图.png)

## 创建纹理贴图

通过纹理贴图加载器[TextureLoader](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/loaders/TextureLoader)的`load()`方法加载一张图片可以返回一个纹理对象[Texture](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/textures/Texture)，纹理对象`Texture`可以作为模型材质颜色贴图`.map`属性的值。

材质的颜色贴图属性`.map`设置后，模型会从纹理贴图上采集像素值，这时候一般来说不需要再设置材质颜色`.color`。`.map`贴图之所以称之为颜色贴图就是因为网格模型会获得颜色贴图的颜色值RGB。

```javascript
// 纹理贴图映射到一个矩形平面上
var geometry = new THREE.PlaneGeometry(204, 102); //矩形平面
// TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
var textureLoader = new THREE.TextureLoader();
// 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
textureLoader.load('Earth.png', function(texture) {
  var material = new THREE.MeshLambertMaterial({
    // color: 0x0000ff,
    // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
    map: texture,//设置颜色贴图属性值
  }); //材质对象Material
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  scene.add(mesh); //网格模型添加到场景中

  //纹理贴图加载成功后，调用渲染函数执行渲染操作
  // render();
})
```

不同的几何体有不同的UV坐标来设置贴图和模型的映射规律，你可以尝试把颜色纹理贴图映射到不同的几何体上查看渲染效果。

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100); //立方体
var geometry = new THREE.SphereGeometry(60, 25, 25); //球体
```

### 纹理对象`Texture`

如果你想进一步了解`.map`的属性值[Texture](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/textures/Texture)可以阅读下面的代码。

通过图片加载器[ImageLoader](http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/loaders/ImageLoader)可以加载一张图片，所谓纹理对象Texture简单地说就是，纹理对象Texture的`.image`属性值是一张图片。

```javascript
// 图片加载器
var ImageLoader = new THREE.ImageLoader();
// load方法回调函数，按照路径加载图片，返回一个html的元素img对象
ImageLoader.load('Earth.png', function(img) {
  // image对象作为参数，创建一个纹理对象Texture
  var texture = new THREE.Texture(img);
  // 下次使用纹理时触发更新
  texture.needsUpdate = true;
  var material = new THREE.MeshLambertMaterial({
    map: texture, //设置纹理贴图
  });
  var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  scene.add(mesh); //网格模型添加到场景中
});
```

