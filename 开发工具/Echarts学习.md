# ECharts 教程

ECharts 是一个使用 JavaScript 实现的开源可视化库，涵盖各行业图表，满足各种需求。

ECharts 遵循 Apache-2.0 开源协议，免费商用。

ECharts 兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等）及兼容多种设备，可随时随地任性展示。

## 第一个 ECharts 实例

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>test</title>
        <script src="https://unpkg.com/vue@3.2.31"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <!-- 引入 echarts.js -->
        <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
    </head>
<style type="text/css">
body {
  margin: 30px;
}
#main{
  width: 600px;
  height: 400px;
}

</style>

<body>

<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<div id="main"></div>

<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart=echarts.init(document.getElementById("main"));

  // 指定图表的配置项和数据
  var option={
    title:{
      text:"echarts实例"
    },
    tooltip:{},
    legend:{
      data:["销量"]
    },
    xAxis:{
      data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis:{},
    series:[{
      name:"销量",
      type:"bar",
      data:[5, 20, 36, 10, 10, 20]
    }],
  };

  //使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

</script>

    </body>
</html>
```



## ECharts 特性

ECharts 包含了以下特性：

- **丰富的可视化类型**: 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。
- **多种数据格式无需转换直接使用**: 内置的 dataset 属性（4.0+）支持直接传入包括二维表，key-value 等多种格式的数据源，此外还支持输入 TypedArray 格式的数据。
- **千万数据的前端展现**: 通过增量渲染技术（4.0+），配合各种细致的优化，ECharts 能够展现千万级的数据量。
- **移动端优化**: 针对移动端交互做了细致的优化，例如移动端小屏上适于用手指在坐标系中进行缩放、平移。 PC 端也可以用鼠标在图中进行缩放（用鼠标滚轮）、平移等。
- **多渲染方案，跨平台使用**: 支持以 Canvas、SVG（4.0+）、VML 的形式渲染图表。
- **深度的交互式数据探索**: 提供了 图例、视觉映射、数据区域缩放、tooltip、数据刷选等开箱即用的交互组件，可以对数据进行多维度数据筛取、视图缩放、展示细节等交互操作。
- **多维数据的支持以及丰富的视觉编码手段**: 对于传统的散点图等，传入的数据也可以是多个维度的。
- **动态数据**: 数据的改变驱动图表展现的改变。
- **绚丽的特效**: 针对线数据，点数据等地理数据的可视化提供了吸引眼球的特效。
- **通过 GL 实现更多更强大绚丽的三维可视化**: 在 VR，大屏场景里实现三维的可视化效果。
- **无障碍访问（4.0+）**: 支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问！

# 获取 Apache ECharts

Apache ECharts 提供了多种安装方式，你可以根据项目的实际情况选择以下任意一种方式安装。

- 从 GitHub 获取
- 从 npm 获取
- 从 CDN 获取
- 在线定制

## 1、独立版本

我们可以在直接下载 echarts.min.js 并用 **<script>** 标签引入。

[echarts.min.js(4.7.0)](https://cdn.staticfile.org/echarts/4.7.0/echarts.min.js)

另外，开发环境下可以使用源代码版本 echarts.js 并用 **<script>** 标签引入，源码版本包含了常见的错误提示和警告。

[echarts.js(4.7.0)](https://cdn.staticfile.org/echarts/4.7.0/echarts.js)

我们也可以在 ECharts 的官网上直接下载更多丰富的版本，包含了不同主题跟语言，下载地址：https://echarts.apache.org/zh/download.html。

这些构建好的 echarts 提供了下面这几种定制：

- 完全版：`echarts/dist/echarts.js`，体积最大，包含所有的图表和组件，所包含内容参见：`echarts/echarts.all.js`。
- 常用版：`echarts/dist/echarts.common.js`，体积适中，包含常见的图表和组件，所包含内容参见：`echarts/echarts.common.js`。
- 精简版：`echarts/dist/echarts.simple.js`，体积较小，仅包含最常用的图表和组件，所包含内容参见：`echarts/echarts.simple.js`。

------

## 2、使用 CDN 方法

以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。

- **Staticfile CDN（国内）** : https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js
- **jsDelivr**：https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js。
- **cdnjs** : https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js

------

## 3、NPM 方法

由于 npm 安装速度慢，本教程使用了淘宝的镜像及其命令 cnpm，安装使用介绍参照：[使用淘宝 NPM 镜像](https://www.runoob.com/nodejs/nodejs-npm.html#taobaonpm)。

npm 版本需要大于 3.0，如果低于此版本需要升级它：

```bash
# 查看版本
$ npm -v
2.3.0

#升级 npm
cnpm install npm -g

# 升级或安装 cnpm
npm install cnpm -g
```

通过 cnpm 获取 echarts：

```bash
# 最新稳定版
$ cnpm install echarts --save
```

安装完成后 ECharts 和 zrender 会放在 node_modules 目录下，我们可以直接在项目代码中使用 **require('echarts')** 来使用。

## 实例

```js
var echarts = require('echarts');
 
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```



# 在项目中引入 Apache ECharts

## 引入 ECharts

```js
import * as echarts from 'echarts';

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
```



## 按需引入 ECharts 图表和组件

上面的代码会引入 ECharts 中所有的图表和组件，但是假如你不想引入所有组件，也可以使用 ECharts 提供的按需引入的接口来打包必须的组件。

```js
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// 接下来的使用就跟之前一样，初始化图表，设置配置项
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
  // ...
});
```



> 需要注意的是为了保证打包的体积是最小的，ECharts 按需引入的时候不再提供任何渲染器，所以需要选择引入 `CanvasRenderer` 或者 `SVGRenderer` 作为渲染器。这样的好处是假如你只需要使用 svg 渲染模式，打包的结果中就不会再包含无需使用的 `CanvasRenderer` 模块。

我们在示例编辑页的“完整代码”标签提供了非常方便的生成按需引入代码的功能。这个功能会根据当前的配置项动态生成最小的按需引入的代码。你可以直接在你的项目中使用。

## 在 TypeScript 中按需引入

对于使用了 TypeScript 来开发 ECharts 的开发者，我们提供了类型接口来组合出最小的`EChartsOption`类型。这个更严格的类型可以有效帮助你检查出是否少加载了组件或者图表。

```ts
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const option: ECOption = {
  // ...
};
```



# 图表容器及大小

## 初始化

**在 HTML 中定义有宽度和高度的父容器（推荐）**

通常来说，需要在 HTML 中先定义一个 `<div>` 节点，并且通过 CSS 使得该节点具有宽度和高度。初始化的时候，传入该节点，图表的大小默认即为该节点的大小，除非声明了 `opts.width` 或 `opts.height` 将其覆盖。

```html
<div id="main" style="width: 600px;height:400px;"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
</script>
```

需要注意的是，使用这种方法在调用 `echarts.init` 时需保证容器已经有宽度和高度了。

### 指定图表的大小

如果图表容器不存在宽度和高度，或者，你希望图表宽度和高度不等于容器大小，也可以在初始化的时候指定大小。

```html
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'), null, {
    width: 600,
    height: 400
  });
</script>
```

### 响应容器大小的变化

**监听图表容器的大小并改变图表大小**

在有些场景下，我们希望当容器大小改变时，图表的大小也相应地改变。

比如，图表容器是一个高度为 400px、宽度为页面 100% 的节点，你希望在浏览器宽度改变的时候，始终保持图表宽度是页面的 100%。

这种情况下，**可以监听页面的 `window.onresize` 事件获取浏览器大小改变的事件**，然后调用 [`echartsInstance.resize`](https://echarts.apache.org/api.html#echartsInstance.resize) 改变图表的大小。

```html
<style>
  #main,
  html,
  body {
    width: 100%;
  }
  #main {
    height: 400px;
  }
</style>
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
  window.onresize = function() {
    myChart.resize();
  };
</script>
```

### 为图表设置特定的大小

除了直接调用 `resize()` 不含参数的形式之外，还可以指定宽度和高度，实现图表大小不等于容器大小的效果。

```js
myChart.resize({
  width: 800,
  height: 400
});
```



> 小贴士：阅读 API 文档的时候要留意接口的定义方式，这一接口有时会被误认为是 myCharts.resize(800, 400) 的形式，但其实不存在这样的调用方式。

### 容器节点被销毁以及被重建时

假设页面中存在多个标签页，每个标签页都包含一些图表。当选中一个标签页的时候，其他标签页的内容在 DOM 中被移除了。这样，当用户再选中这些标签页的时候，就会发现图表“不见”了。

本质上，这是由于图表的容器节点被移除导致的。即使之后该节点被重新添加，图表所在的节点也已经不存在了。

正确的做法是，在图表容器被销毁之后，调用 [`echartsInstance.dispose`](https://echarts.apache.org/api.html#echartsInstance.dispose) 销毁实例，在图表容器重新被添加后再次调用 [echarts.init](https://echarts.apache.org//api.html#echarts.init) 初始化。

> 小贴士：在容器节点被销毁时，总是应调用 [`echartsInstance.dispose`](https://echarts.apache.org/api.html#echartsInstance.dispose) **以销毁实例释放资源，避免内存泄漏**。



# 样式

本文介绍这几种方式，他们的功能范畴可能会有交叉（即同一种细节的效果可能可以用不同的方式实现），但是他们各有各的场景偏好。

- 颜色主题（Theme）
- 调色盘
- 直接样式设置（itemStyle、lineStyle、areaStyle、label、...）
- 视觉映射（visualMap）

## 颜色主题（Theme）

最简单的更改全局样式的方式，是直接采用颜色主题（theme）。例如，在 [示例集合](https://echarts.apache.org/examples) 中，可以通过切换深色模式，直接看到采用主题的效果。

ECharts5 除了一贯的默认主题外，还内置了`'dark'`主题。可以像这样切换成深色模式：

```js
var chart = echarts.init(dom, 'dark');
```



**其他的主题，没有内置在 ECharts 中，需要自己加载**。这些主题可以在 [主题编辑器](https://echarts.apache.org/theme-builder.html) 里访问到。也可以使用这个主题编辑器，自己编辑主题。下载下来的主题可以这样使用：

如果主题保存为 JSON 文件，则需要自行加载和注册，例如：

```js
// 假设主题名称是 "vintage"
$.getJSON('xxx/xxx/vintage.json', function(themeJSON) {
  echarts.registerTheme('vintage', JSON.parse(themeJSON));
  var chart = echarts.init(dom, 'vintage');
});
```



如果保存为 UMD 格式的 JS 文件，文件内部已经做了自注册，直接引入 JS 即可：

```js
// HTML 引入 vintage.js 文件后（假设主题名称是 "vintage"）
var chart = echarts.init(dom, 'vintage');
// ...
```

## 调色盘

调色盘，可以在 option 中设置。它给定了一组颜色，图形、系列会自动从其中选择颜色。 **可以设置全局的调色盘，也可以设置系列自己专属的调色盘。**

```js
option = {
  // 全局调色盘。
  color: [
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265',
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3'
  ],

  series: [
    {
      type: 'bar',
      // 此系列自己的调色盘。
      color: [
        '#dd6b66',
        '#759aa0',
        '#e69d87',
        '#8dc1a9',
        '#ea7e53',
        '#eedd78',
        '#73a373',
        '#73b9bc',
        '#7289ab',
        '#91ca8c',
        '#f49f42'
      ]
      // ...
    },
    {
      type: 'pie',
      // 此系列自己的调色盘。
      color: [
        '#37A2DA',
        '#32C5E9',
        '#67E0E3',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293',
        '#E062AE',
        '#E690D1',
        '#e7bcf3',
        '#9d96f5',
        '#8378EA',
        '#96BFFF'
      ]
      // ...
    }
  ]
};
```

## 直接的样式设置 

直接的样式设置是比较常用设置方式。纵观 ECharts 的 [option](https://echarts.apache.org/option.html#) 中，很多地方可以设置 [itemStyle](https://echarts.apache.org/option.html#series-bar.itemStyle)、[lineStyle](https://echarts.apache.org/option.html#series-line.lineStyle)、[areaStyle](https://echarts.apache.org/option.html#series-line.areaStyle)、[label](https://echarts.apache.org/option.html#series-bar.label) 等等。这些的地方可以直接设置图形元素的颜色、线宽、点的大小、标签的文字、标签的样式等等。

一般来说，ECharts 的各个系列和组件，都遵从这些命名习惯，虽然不同图表和组件中，`itemStyle`、`label` 等可能出现在不同的地方。

在下面例子中我们给气泡图设置了阴影，渐变色等复杂的样式，你可以修改代码中的样式看修改后的效果：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>test</title>
        <script src="https://unpkg.com/vue@3.2.31"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <!-- 引入 echarts.js -->
        <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
    </head>
<style type="text/css">
body {
  margin: 30px;
}
#main{
  height: 400px;
}

</style>

<body>

<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<div id="main"></div>

<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart=echarts.init(document.getElementById("main"),"dark");
  window.onresize=function(){
    myChart.resize();
  }
  // 指定图表的配置项和数据
var data = [
  [
    [28604, 77, 17096869, 'Australia', 1990],
    [31163, 77.4, 27662440, 'Canada', 1990],
    [1516, 68, 1154605773, 'China', 1990],
    [13670, 74.7, 10582082, 'Cuba', 1990],
    [28599, 75, 4986705, 'Finland', 1990],
    [29476, 77.1, 56943299, 'France', 1990],
    [31476, 75.4, 78958237, 'Germany', 1990],
    [28666, 78.1, 254830, 'Iceland', 1990],
    [1777, 57.7, 870601776, 'India', 1990],
    [29550, 79.1, 122249285, 'Japan', 1990],
    [2076, 67.9, 20194354, 'North Korea', 1990],
    [12087, 72, 42972254, 'South Korea', 1990],
    [24021, 75.4, 3397534, 'New Zealand', 1990],
    [43296, 76.8, 4240375, 'Norway', 1990],
    [10088, 70.8, 38195258, 'Poland', 1990],
    [19349, 69.6, 147568552, 'Russia', 1990],
    [10670, 67.3, 53994605, 'Turkey', 1990],
    [26424, 75.7, 57110117, 'United Kingdom', 1990],
    [37062, 75.4, 252847810, 'United States', 1990]
  ],
  [
    [44056, 81.8, 23968973, 'Australia', 2015],
    [43294, 81.7, 35939927, 'Canada', 2015],
    [13334, 76.9, 1376048943, 'China', 2015],
    [21291, 78.5, 11389562, 'Cuba', 2015],
    [38923, 80.8, 5503457, 'Finland', 2015],
    [37599, 81.9, 64395345, 'France', 2015],
    [44053, 81.1, 80688545, 'Germany', 2015],
    [42182, 82.8, 329425, 'Iceland', 2015],
    [5903, 66.8, 1311050527, 'India', 2015],
    [36162, 83.5, 126573481, 'Japan', 2015],
    [1390, 71.4, 25155317, 'North Korea', 2015],
    [34644, 80.7, 50293439, 'South Korea', 2015],
    [34186, 80.6, 4528526, 'New Zealand', 2015],
    [64304, 81.6, 5210967, 'Norway', 2015],
    [24787, 77.3, 38611794, 'Poland', 2015],
    [23038, 73.13, 143456918, 'Russia', 2015],
    [19360, 76.5, 78665830, 'Turkey', 2015],
    [38225, 81.4, 64715810, 'United Kingdom', 2015],
    [53354, 79.1, 321773631, 'United States', 2015]
  ]
];

option = {
  backgroundColor: {
    type: 'radial',
    x: 0.3,
    y: 0.3,
    r: 0.8,
    colorStops: [
      {
        offset: 0,
        color: '#f7f8fa'
      },
      {
        offset: 1,
        color: '#cdd0d5'
      }
    ]
  },
  grid: {
    left: 10,
    containLabel: true,
    bottom: 10,
    top: 10,
    right: 30
  },
  xAxis: {
    splitLine: {
      show: false
    }
  },
  yAxis: {
    splitLine: {
      show: false
    },
    scale: true
  },
  series: [
    {
      name: '1990',
      data: data[0],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: {
          type: 'radial',
          x: 0.4,
          y: 0.3,
          r: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(251, 118, 123)'
            },
            {
              offset: 1,
              color: 'rgb(204, 46, 72)'
            }
          ]
        }
      }
    },
    {
      name: '2015',
      data: data[1],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: {
          type: 'radial',
          x: 0.4,
          y: 0.3,
          r: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(129, 227, 238)'
            },
            {
              offset: 1,
              color: 'rgb(25, 183, 207)'
            }
          ]
        }
      }
    }
  ]
};

  //使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

</script>

    </body>
</html>
```

## 高亮的样式：emphasis

在鼠标悬浮到图形元素上时，一般会出现高亮的样式。默认情况下，高亮的样式是根据普通样式自动生成的。但是高亮的样式也可以自己定义，主要是通过 [emphasis](https://echarts.apache.org/option.html#series-bar.emphasis) 属性来定制。[emphsis](https://echarts.apache.org/option.html#series-bar.emphasis) 中的结构，和普通样式的结构相同，例如：

```js
option = {
  series: {
    type: 'scatter',

    // 普通样式。
    itemStyle: {
      // 点的颜色。
      color: 'red'
    },
    label: {
      show: true,
      // 标签的文字。
      formatter: 'This is a normal label.'
    },

    // 高亮样式。
    emphasis: {
      itemStyle: {
        // 高亮时点的颜色。
        color: 'blue'
      },
      label: {
        show: true,
        // 高亮时标签的文字。
        formatter: 'This is a emphasis label.'
      }
    }
  }
};
```



注意：在 ECharts4 以前，高亮和普通样式的写法，是这样的：

```js
option = {
  series: {
    type: 'scatter',

    itemStyle: {
      // 普通样式。
      normal: {
        // 点的颜色。
        color: 'red'
      },
      // 高亮样式。
      emphasis: {
        // 高亮时点的颜色。
        color: 'blue'
      }
    },

    label: {
      // 普通样式。
      normal: {
        show: true,
        // 标签的文字。
        formatter: 'This is a normal label.'
      },
      // 高亮样式。
      emphasis: {
        show: true,
        // 高亮时标签的文字。
        formatter: 'This is a emphasis label.'
      }
    }
  }
};
```



这种写法 **仍然被兼容**，但是，不再推荐。事实上，**多数情况下，开发者只想配置普通状态下的样式，而使用默认的高亮样式。**所以在 ECharts4 中，支持不写 `normal` 的配置方法（即前一个代码片段里的写法），使得配置项更扁平简单。

## 通过 visualMap 组件设定样式

[visualMap 组件](https://echarts.apache.org/option.html#visualMap) 能指定数据到颜色、图形尺寸的映射规则，详见 [数据的视觉映射](https://echarts.apache.org/handbook/zh/concepts/visual-map)。



# 数据集

`数据集`（`dataset`）是专门用来管理数据的组件。虽然每个系列都可以在 `series.data` 中设置数据，但是从 ECharts4 支持 `数据集` 开始，更推荐使用 `数据集` 来管理数据。因为这样，数据可以被多个组件复用，也方便进行 “数据和其他配置” 分离的配置风格。**毕竟，在运行时，数据是最常改变的，而其他配置大多并不会改变。**

## 在系列中设置数据

如果数据设置在 `系列`（`series`）中，例如：

```html
<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart=echarts.init(document.getElementById("main"));
  window.onresize=function(){
    myChart.resize();
  }
  // 指定图表的配置项和数据

var option = {
  xAxis: {
    type: 'category',
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1]
    }
  ]
};

  //使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

</script>
```

这种方式的优点是，适于对一些特殊的数据结构（如“树”、“图”、超大数据）进行一定的数据类型定制。 但是缺点是，常需要用户先处理数据，把数据分割设置到各个系列（和类目轴）中。此外，不利于多个系列共享一份数据，也不利于基于原始数据进行图表类型、系列的映射安排。

## 在数据集中设置数据

而数据设置在 `数据集`（`dataset`）中，会有这些好处：

- 能够贴近数据可视化常见思维方式：（I）提供数据，（II）指定数据到视觉的映射，从而形成图表。
- 数据和其他配置可以被分离开来。数据常变，其他配置常不变。分开易于分别管理。
- 数据可以被多个系列或者组件复用，对于大数据量的场景，不必为每个系列创建一份数据。
- 支持更多的数据的常用格式，例如二维数组、对象数组等，一定程度上避免使用者为了数据格式而进行转换。

下面是一个最简单的 `dataset` 的例子：

```js
option = {
  legend: {},
  tooltip: {},
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  xAxis: { type: 'category' },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
```

或者也可以使用常见的“对象数组”的格式：

```js
option = {
  legend: {},
  tooltip: {},
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
      { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
      { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
      { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
```

## 数据到图形的映射

如上所述，数据可视化的一个常见思路是：（I）提供数据，（II）指定数据到视觉的映射。

简而言之，可以进行这些映射的设定：

- 指定 `数据集` 的列（column）还是行（row）映射为 `系列`（`series`）。这件事可以使用 [series.seriesLayoutBy](https://echarts.apache.org/option.html##series.seriesLayoutBy) 属性来配置。默认是按照列（column）来映射。
- 指定维度映射的规则：如何从 dataset 的维度（一个“维度”的意思是一行/列）映射到坐标轴（如 X、Y 轴）、提示框（tooltip）、标签（label）、图形元素大小颜色等（visualMap）。这件事可以使用 [series.encode](https://echarts.apache.org/option.html##series.encode) 属性，以及 [visualMap](https://echarts.apache.org/option.html##visualMap) 组件来配置（如果有需要映射颜色大小等视觉维度的话）。上面的例子中，没有给出这种映射配置，那么 ECharts 就按最常见的理解进行默认映射：X 坐标轴声明为类目轴，默认情况下会自动对应到 `dataset.source` 中的第一列；三个柱图系列，一一对应到 `dataset.source` 中后面每一列。

下面详细解释这些映射的设定。

## 把数据集（ dataset ）的行或列映射为系列（series）

有了数据表之后，使用者可以灵活地配置：数据如何对应到轴和图形系列。

用户可以使用 `seriesLayoutBy` 配置项，改变图表对于行列的理解。`seriesLayoutBy` 可取值：

- 'column': 默认值。系列被安放到 `dataset` 的列上面。
- 'row': 系列被安放到 `dataset` 的行上面。

看这个例子：

```js
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: '55%' }, { top: '55%' }],
  series: [
    // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    // 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
  ]
};
```

## 维度（ dimension ）

常用图表所描述的数据大部分是“二维表”结构，上述的例子中，我们都使用二维数组来容纳二维表。现在，当我们把系列（ series ）对应到“列”的时候，那么每一列就称为一个“维度（ dimension ）”，而每一行称为数据项（ item ）。反之，如果我们把系列（ series ）对应到表行，那么每一行就是“维度（ dimension ）”，每一列就是数据项（ item ）。

维度可以有单独的名字，便于在图表中显示。**维度名（ dimension name ）可以在定义在 dataset 的第一行（或者第一列）**。例如上面的例子中，`'score'`、`'amount'`、`'product'` 就是维度名。**从第二行开始，才是正式的数据**。

`dataset.source` 中第一行（列）到底包含不包含维度名，ECharts 默认会自动探测。**当然也可以设置 `dataset.sourceHeader: true` 显示声明第一行（列）就是维度**，或者 `dataset.sourceHeader: false` 表明第一行（列）开始就直接是数据。

维度的定义，也可以使用单独的 `dataset.dimensions` 或者 `series.dimensions` 来定义，这样可以同时指定维度名，和维度的类型（ dimension type ）：

```js
var option1 = {
  dataset: {
    dimensions: [
      { name: 'score' },
      // 可以简写为 string ，表示 dimension name 。
      'amount',
      // 可以在 type 中指定维度类型。
      { name: 'product', type: 'ordinal' }
    ],
    source: [
      //...
    ]
  }
  // ...
};

var option2 = {
  dataset: {
    source: [
      // ...
    ]
  },
  series: {
    type: 'line',
    // series.dimensions 会更优先于 dataset.dimension 采纳。
    dimensions: [
      null, // 可以设置为 null 表示不想设置维度名
      'amount',
      { name: 'product', type: 'ordinal' }
    ]
  }
  // ...
};
```

大多数情况下，我们并不需要去设置维度类型，因为 ECharts 会自动尝试判断。但是如果不足够准确时，可以手动设置维度类型。

维度类型（ dimension type ）可以取这些值：

- `'number'`: 默认，表示普通数据。
- `'ordinal'`: 对于类目、文本这些 string 类型的数据，如果需要能在数轴上使用，须是 'ordinal' 类型。ECharts 默认会试图自动判断这个类型。但是自动判断也可能不准确，所以使用者也可以手动强制指定。
- `'time'`: 表示时间数据。设置成 `'time'` 则能支持自动解析数据成时间戳（timestamp），比如该维度的数据是 '2017-05-10'，会自动被解析。如果这个维度被用在时间数轴（[axis.type](https://echarts.apache.org/option.html##xAxis.type) 为 `'time'`）上，那么会被自动设置为 `'time'` 类型。时间类型的支持参见 [data](https://echarts.apache.org/option.html##series.data)。
- `'float'`: 如果设置成 `'float'`，在存储时候会使用 `TypedArray`，对性能优化有好处。
- `'int'`: 如果设置成 `'int'`，在存储时候会使用 `TypedArray`，对性能优化有好处。

## 数据到图形的映射（ series.encode ）

了解了维度的概念后，我们就可以使用 [series.encode](https://echarts.apache.org/option.html##series.encode) 来做映射。总体是这样的感觉：

```js
var option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 58212, 'Matcha Latte'],
      [57.1, 78254, 'Milk Tea'],
      [74.4, 41032, 'Cheese Cocoa'],
      [50.1, 12755, 'Cheese Brownie'],
      [89.7, 20145, 'Matcha Cocoa'],
      [68.1, 79146, 'Tea'],
      [19.6, 91852, 'Orange Juice'],
      [10.6, 101852, 'Lemon Juice'],
      [32.7, 20112, 'Walnut Brownie']
    ]
  },
  xAxis: {},
  yAxis: { type: 'category' },
  series: [
    {
      type: 'bar',
      encode: {
        // 将 "amount" 列映射到 X 轴。
        x: 'amount',
        // 将 "product" 列映射到 Y 轴。
        y: 'product'
      }
    }
  ]
};
```

`series.encode` 声明的基本结构如下。其中冒号左边是坐标系、标签等特定名称，如 `'x'`, `'y'`, `'tooltip'` 等，冒号右边是数据中的**维度名**（string 格式）或者**维度的序号**（number 格式，从 0 开始计数）**，可以指定一个或多个维度（使用数组）**。通常情况下，下面各种信息不需要所有的都写，按需写即可。

下面是 `series.encode` 支持的属性：

```js
// 在任何坐标系和系列中，都支持：
encode: {
  // 使用 “名为 product 的维度” 和 “名为 score 的维度” 的值在 tooltip 中显示
  tooltip: ['product', 'score']
  // 使用 “维度 1” 和 “维度 3” 的维度名连起来作为系列名。（有时候名字比较长，这可以避免在 series.name 重复输入这些名字）
  seriesName: [1, 3],
  // 表示使用 “维度2” 中的值作为 id。这在使用 setOption 动态更新数据时有用处，可以使新老数据用 id 对应起来，从而能够产生合适的数据更新动画。
  itemId: 2,
  // 指定数据项的名称使用 “维度3” 在饼图等图表中有用，可以使这个名字显示在图例（legend）中。
  itemName: 3
}

// 直角坐标系（grid/cartesian）特有的属性：
encode: {
  // 把 “维度1”、“维度5”、“名为 score 的维度” 映射到 X 轴：
  x: [1, 5, 'score'],
  // 把“维度0”映射到 Y 轴。
  y: 0
}

// 单轴（singleAxis）特有的属性：
encode: {
  single: 3
}

// 极坐标系（polar）特有的属性：
encode: {
  radius: 3,
  angle: 2
}

// 地理坐标系（geo）特有的属性：
encode: {
  lng: 3,
  lat: 2
}

// 对于一些没有坐标系的图表，例如饼图、漏斗图等，可以是：
encode: {
  value: 3
}
```

## 默认的 series.encode

值得一提的是，当 `series.encode` 并没有指定时，**ECharts 针对最常见直角坐标系中的图表（折线图、柱状图、散点图、K 线图等）、饼图、漏斗图，会采用一些默认的映射规则。默认的映射规则比较简单**，大体是：

- 在坐标系中（如直角坐标系、极坐标系等）
  - 如果有类目轴（axis.type 为 'category'），则将第一列（行）映射到这个轴上，后续每一列（行）对应一个系列。
  - 如果没有类目轴，假如坐标系有两个轴（例如直角坐标系的 X Y 轴），则每两列对应一个系列，这两列分别映射到这两个轴上。
- 如果没有坐标系（如饼图）
  - 取第一列（行）为名字，第二列（行）为数值（如果只有一列，则取第一列为数值）。

默认的规则不能满足要求时，就可以自己来配置 `encode`，也并不复杂。

## 几个常见的 series.encode 设置方式举例

如何把第三列设置为 X 轴，第五列设置为 Y 轴？

```js
option = {
  series: {
    // 注意维度序号（dimensionIndex）从 0 开始计数，第三列是 dimensions[2]。
    encode: { x: 2, y: 4 }
    // ...
  }
};
```

如何把第三行设置为 X 轴，第五行设置为 Y 轴？

```js
option = {
  series: {
    encode: { x: 2, y: 4 },
    seriesLayoutBy: 'row'
    // ...
  }
};
```

如何把第二列设置为标签？

关于标签的显示 [label.formatter](https://echarts.apache.org/option.html##series.label.formatter)，现在支持引用特定维度的值，例如：

```js
series: {
  label: {
    // `'{@score}'` 表示 “名为 score” 的维度里的值。
    // `'{@[4]}'` 表示引用序号为 4 的维度里的值。
    formatter: 'aaa{@product}bbb{@score}ccc{@[4]}ddd';
  }
}
```

如何让第 2 列和第 3 列显示在提示框（tooltip）中？

```js
option = {
  series: {
    encode: {
      tooltip: [1, 2]
      // ...
    }
    // ...
  }
};
```

数据里没有维度名，那么怎么给出维度名？

```js
var option = {
  dataset: {
    dimensions: ['score', 'amount'],
    source: [
      [89.3, 3371],
      [92.1, 8123],
      [94.4, 1954],
      [85.4, 829]
    ]
  }
};
```

如何把第三列映射为气泡图的点的大小？

```js
var option = {
  dataset: {
    source: [
      [12, 323, 11.2],
      [23, 167, 8.3],
      [81, 284, 12],
      [91, 413, 4.1],
      [13, 287, 13.5]
    ]
  },
  color:["#336699"],
  visualMap: {
    show: false,
    dimension: 2, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
    min: 2, // 需要给出数值范围，最小数值。
    max: 15, // 需要给出数值范围，最大数值。
    inRange: {
      // 气泡尺寸：5 像素到 60 像素。
      symbolSize: [5, 60]
    }
  },
  xAxis: {},
  yAxis: {},
  series: {
    type: 'scatter'
  }
};
```

encode 里指定了映射，但是不管用？

可以查查有没有拼错，比如，维度名是：`'Life Expectancy'`，encode 中拼成了 `'Life Expectency'`。

## 视觉通道（颜色、尺寸等）的映射

我们可以使用 [visualMap](https://echarts.apache.org/option.html##visualMap) 组件进行视觉通道的映射。详见 [visualMap](https://echarts.apache.org/option.html##visualMap) 文档的介绍。

## 数据的各种格式

多数常见图表中，数据适于用二维表的形式描述。广为使用的数据表格软件（如 MS Excel、Numbers）或者关系数据数据库都是二维表。他们的数据可以导出成 JSON 格式，输入到 `dataset.source` 中，在不少情况下可以免去一些数据处理的步骤。

> 假如数据导出成 csv 文件，那么可以使用一些 csv 工具如 [dsv](https://github.com/d3/d3-dsv) 或者 [PapaParse](https://github.com/mholt/PapaParse) 将 csv 转成 JSON。

在 JavaScript 常用的数据传输格式中，二维数组可以比较直观的存储二维表。前面的示例都是使用二维数组表示。

除了二维数组以外，dataset 也支持例如下面 key-value 方式的数据格式，这类格式也非常常见。但是这类格式中，目前并不支持 [seriesLayoutBy](https://echarts.apache.org/option.html##series.seriesLayoutBy) 参数。

```js
dataset: [
  {
    // 按行的 key-value 形式（对象数组），这是个比较常见的格式。
    source: [
      { product: 'Matcha Latte', count: 823, score: 95.8 },
      { product: 'Milk Tea', count: 235, score: 81.4 },
      { product: 'Cheese Cocoa', count: 1042, score: 91.2 },
      { product: 'Walnut Brownie', count: 988, score: 76.9 }
    ]
  },
  {
    // 按列的 key-value 形式。
    source: {
      product: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
      count: [823, 235, 1042, 988],
      score: [95.8, 81.4, 91.2, 76.9]
    }
  }
];
```

## 多个 dataset 以及如何引用他们

可以同时定义多个 dataset。系列可以通过 [series.datasetIndex](https://echarts.apache.org/option.html##series.datasetIndex) 来指定引用哪个 dataset。例如：

```js
var option = {
  dataset: [
    {
      // 序号为 0 的 dataset。
      source: []
    },
    {
      // 序号为 1 的 dataset。
      source: []
    },
    {
      // 序号为 2 的 dataset。
      source: []
    }
  ],
  series: [
    {
      // 使用序号为 2 的 dataset。
      datasetIndex: 2
    },
    {
      // 使用序号为 1 的 dataset。
      datasetIndex: 1
    }
  ]
};
```

## ECharts 3 的数据设置方式（series.data）仍正常使用

ECharts 4 之前一直以来的数据声明方式仍然被正常支持，如果系列已经声明了 [series.data](https://echarts.apache.org/option.html##series.data)， 那么就会使用 [series.data](https://echarts.apache.org/option.html##series.data) 而非 `dataset`。

```js
option = {
  xAxis: {
    type: 'category',
    data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1]
    }
  ]
};
```

其实，[series.data](https://echarts.apache.org/option.html##series.data) 也是种会一直存在的重要设置方式。**一些特殊的非 table 格式的图表**，如 [treemap](https://echarts.apache.org/option.html##series-treemap)、[graph](https://echarts.apache.org/option.html##series-graph)、[lines](https://echarts.apache.org/option.html##series-lines) 等，现在仍不支持在 dataset 中设置，仍然需要使用 [series.data](https://echarts.apache.org/option.html##series.data)。另外，**对于巨大数据量的渲染**（如百万以上的数据量），需要使用 [appendData](https://echarts.apache.org/handbook/api.html#echartsInstance.appendData) 进行增量加载，这种情况不支持使用 `dataset`。

## 其他

目前并非所有图表都支持 dataset。支持 dataset 的图表有： `line`、`bar`、`pie`、`scatter`、`effectScatter`、`parallel`、`candlestick`、`map`、`funnel`、`custom`。 后续会有更多的图表进行支持。

最后，给出这个 [示例](https://echarts.apache.org/examples/zh/editor.html?c=dataset-link&edit=1&reset=1)，多个图表共享一个 `dataset`，并带有联动交互。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>test</title>
        <script src="https://unpkg.com/vue@3.2.31"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <!-- 引入 echarts.js -->
        <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
    </head>
<style type="text/css">
body {
  margin: 30px;
}
#main{
  height: 800px;
}

</style>

<body>

<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<div id="main"></div>

<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart=echarts.init(document.getElementById("main"));
  window.onresize=function(){
    myChart.resize();
  }
  // 指定图表的配置项和数据

  setTimeout(function(){
    option={
      legend:{},
      tooltip:{
        trigger:"axis",
        showContent:false,
      },
      dataset:{
        source:[
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
      ],
      },
      xAxis:{type:"category"},
      yAxis:{gridIndex:0},
      grid:{top:"55%"},
      series:[
        {
          type:"line",
          smooth:true,
          seriesLayoutBy:"row",
          emphasis:{focus:"series"},
        },
        {
          type:"line",
          smooth:true,
          seriesLayoutBy:"row",
          emphasis:{focus:"series"},
        },
        {
          type:"line",
          smooth:true,
          seriesLayoutBy:"row",
          emphasis:{focus:"series"},
        },
        {
          type:"line",
          smooth:true,
          seriesLayoutBy:"row",
          emphasis:{focus:"series"},
        },
        {
          type:"pie",
          id:"pie",
          radius:"30%",
          center:["50%","25%"],
          emphasis:{
            focus:"self",
          },
          label:{
            formatter:"{b}:{@2012}({d}%)",
          },
          encode:{
            itemName:"product",
            value:"2012",
            tooltip:"2012",
          }
        }
      ],
    };
    myChart.on("updateAxisPointer",function(event){
      const xAxisInfo=event.axesInfo[0];
      if (xAxisInfo) {
        const dimension=xAxisInfo.value+1;
        myChart.setOption({
          series:{
            id:"pie",
            label:{
              formatter:"{b}{@["+dimension+"]} ({d}%)",
            },
            encode:{
              value:dimension,
              tooltip:dimension,
            }
          }
        });
      }
    });
    myChart.setOption(option);
  });

</script>

    </body>
</html>
```



# 数据转换

Apache EChartsTM 5 开始支持了“数据转换”（ data transform ）功能。在 echarts 中，“数据转换” 这个词指的是，给定一个已有的“数据集”（[dataset](https://echarts.apache.org/option.html##dataset)）和一个“转换方法”（[transform](https://echarts.apache.org/option.html##dataset.transform)），echarts 能生成一个新的“数据集”，然后可以使用这个新的“数据集”绘制图表。这些工作都可以声明式地完成。

抽象地来说，数据转换是这样一种公式：`outData = f(inputData)`。`f` 是转换方法，例如：`filter`、`sort`、`regression`、`boxplot`、`cluster`、`aggregate`(todo) 等等。有了数据转换能力后，我们就至少可以做到这些事情：

- 把数据分成多份用不同的饼图展现。
- 进行一些数据统计运算，并展示结果。
- 用某些数据可视化算法处理数据，并展示结果。
- 数据排序。
- 去除或直选择数据项。
- ...

## 数据转换基础使用

在 echarts 中，数据转换是依托于数据集（[dataset](https://echarts.apache.org/option.html##dataset)）来实现的. 我们可以设置 [dataset.transform](https://echarts.apache.org/option.html##dataset.transform) 来表示，此 dataset 的数据，来自于此 transform 的结果。

下面是上述例子的效果，三个饼图分别显示了 2011、2012、2013 年的数据。

```js
var option = {
  dataset: [
    {
      // 这个 dataset 的 index 是 `0`。
      source: [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Cereal', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Dumpling', 341, 25, 2011],
        ['Biscuit', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Cereal', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Dumpling', 241, 27, 2012],
        ['Biscuit', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Cereal', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Dumpling', 281, 31, 2013],
        ['Biscuit', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Cereal', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Dumpling', 211, 35, 2014],
        ['Biscuit', 72, 24, 2014]
      ]
      // id: 'a'
    },
    {
      // 这个 dataset 的 index 是 `1`。
      // 这个 `transform` 配置，表示，此 dataset 的数据，来自于此 transform 的结果。
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2011 }
      }
      // 我们还可以设置这些可选的属性： `fromDatasetIndex` 或 `fromDatasetId`。
      // 这些属性，指定了，transform 的输入，来自于哪个 dataset。例如，
      // `fromDatasetIndex: 0` 表示输入来自于 index 为 `0` 的 dataset 。又例如，
      // `fromDatasetId: 'a'` 表示输入来自于 `id: 'a'` 的 dataset。
      // 当这些属性都不指定时，默认认为，输入来自于 index 为 `0` 的 dataset 。
    },
    {
      // 这个 dataset 的 index 是 `2`。
      // 同样，这里因为 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，
      // 那么输入默认来自于 index 为 `0` 的 dataset 。
      transform: {
        // 这个类型为 "filter" 的 transform 能够遍历并筛选出满足条件的数据项。
        type: 'filter',
        // 每个 transform 如果需要有配置参数的话，都须配置在 `config` 里。
        // 在这个 "filter" transform 中，`config` 用于指定筛选条件。
        // 下面这个筛选条件是：选出维度（ dimension ）'Year' 中值为 2012 的所有
        // 数据项。
        config: { dimension: 'Year', value: 2012 }
      }
    },
    {
      // 这个 dataset 的 index 是 `3`。
      transform: {
        type: 'filter',
        config: { dimension: 'Year', value: 2013 }
      }
    }
  ],
  series: [
    {
      type: 'pie',
      radius: 50,
      center: ['25%', '50%'],
      // 这个饼图系列，引用了 index 为 `1` 的 dataset 。也就是，引用了上述
      // 2011 年那个 "filter" transform 的结果。
      datasetIndex: 1
    },
    {
      type: 'pie',
      radius: 50,
      center: ['50%', '50%'],
      datasetIndex: 2
    },
    {
      type: 'pie',
      radius: 50,
      center: ['75%', '50%'],
      datasetIndex: 3
    }
  ]
};
```

现在我们简单总结下，使用 transform 时的几个要点：

- 在一个空的 dataset 中声明 `transform`, `fromDatasetIndex`/`fromDatasetId` 来表示我们要生成新的数据。
- 系列引用这个 dataset 。

## 数据转换的进阶使用

#### 链式声明 transform

`transform` 可以被链式声明，这是一个语法糖。

```js
option = {
  dataset: [
    {
      source: [
        // 原始数据
      ]
    },
    {
      // 几个 transform 被声明成 array ，他们构成了一个链，
      // 前一个 transform 的输出是后一个 transform 的输入。
      transform: [
        {
          type: 'filter',
          config: { dimension: 'Product', value: 'Tofu' }
        },
        {
          type: 'sort',
          config: { dimension: 'Year', order: 'desc' }
        }
      ]
    }
  ],
  series: {
    type: 'pie',
    // 这个系列引用上述 transform 的结果。
    datasetIndex: 1
  }
};
```

> 注意：理论上，任何 transform 都可能有多个输入或多个输出。但是，如果一个 transform 被链式声明，它只能获取前一个 transform 的第一个输出作为输入（第一个 transform 除外），以及它只能把自己的第一个输出给到后一个 transform （最后一个 transform 除外）。

#### 一个 transform 输出多个 data

**在大多数场景下，transform 只需输出一个 data** 。但是也有一些场景，需要输出多个 data ，每个 data 可以被不同的 series 或者 dataset 所使用。

例如，在内置的 "boxplot" transform 中，除了 boxplot 系列所需要的 data 外，离群点（ outlier ）也会被生成，并且可以用例如散点图系列显示出来。例如，[example](https://echarts.apache.org/examples/zh/editor.html?c=boxplot-light-velocity)。

我们提供配置 [dataset.fromTransformResult](https://echarts.apache.org/option.html##dataset.fromTransformResult) 来满足这种情况，例如：

```js
option = {
  dataset: [
    {
      // 这个 dataset 的 index 为 `0`。
      source: [
        // 原始数据
      ]
    },
    {
      // 这个 dataset 的 index 为 `1`。
      transform: {
        type: 'boxplot'
      }
      // 这个 "boxplot" transform 生成了两个数据：
      // result[0]: boxplot series 所需的数据。
      // result[1]: 离群点数据。
      // 当其他 series 或者 dataset 引用这个 dataset 时，他们默认只能得到
      // result[0] 。
      // 如果想要他们得到 result[1] ，需要额外声明如下这样一个 dataset ：
    },
    {
      // 这个 dataset 的 index 为 `2`。
      // 这个额外的 dataset 指定了数据来源于 index 为 `1` 的 dataset。
      fromDatasetIndex: 1,
      // 并且指定了获取 transform result[1] 。
      fromTransformResult: 1
    }
  ],
  xAxis: {
    type: 'category'
  },
  yAxis: {},
  series: [
    {
      name: 'boxplot',
      type: 'boxplot',
      // Reference the data from result[0].
      // 这个 series 引用 index 为 `1` 的 dataset 。
      datasetIndex: 1
    },
    {
      name: 'outlier',
      type: 'scatter',
      // 这个 series 引用 index 为 `2` 的 dataset 。
      // 从而也就得到了上述的 transform result[1] （即离群点数据）
      datasetIndex: 2
    }
  ]
};
```

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <title>test</title>
        <script src="https://unpkg.com/vue@3.2.31"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <!-- 引入 echarts.js -->
        <script src="https://cdn.staticfile.org/echarts/5.3.2/echarts.min.js"></script>
    </head>
<style type="text/css">
body {
  margin: 30px;
}
#main{
  height: 800px;
}

</style>

<body>

<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<div id="main"></div>

<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart=echarts.init(document.getElementById("main"));
  window.onresize=function(){
    myChart.resize();
  }
  // 指定图表的配置项和数据

var option = {
  title: [
    {
      text: 'Michelson-Morley Experiment',
      left: 'center'
    },
    {
      text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
      borderColor: '#999',
      borderWidth: 1,
      textStyle: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20
      },
      left: '10%',
      top: '90%'
    }
  ],
  dataset: [
    {
      // prettier-ignore
      source: [
                [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
            ]
    },
    {
      transform: {
        type: 'boxplot',
        config: { itemNameFormatter: 'expr {value}' }
      }
    },
    {
      fromDatasetIndex: 1,
      fromTransformResult: 1
    }
  ],
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'km/s minus 299,000',
    splitArea: {
      show: true
    }
  },
  series: [
    {
      name: 'boxplot',
      type: 'boxplot',
      datasetIndex: 1
    },
    {
      name: 'outlier',
      type: 'scatter',
      datasetIndex: 2
    }
  ]
};

myChart.setOption(option);

</script>

    </body>
</html>
```

另外，[dataset.fromTransformResult](https://echarts.apache.org/option.html##dataset.fromTransformResult) 和 [dataset.transform](https://echarts.apache.org/option.html##dataset.transform) 能同时出现在一个 dataset 中，这表示，这个 transform 的输入，是上游的结果中以 `fromTransformResult` 获取的结果。例如：

```js
{
  fromDatasetIndex: 1,
  fromTransformResult: 1,
  transform: {
    type: 'sort',
    config: { dimension: 2, order: 'desc' }
  }
}
```

#### 在开发环境中 debug

使用 transform 时，有时候我们会配不对，显示不出来结果，并且不知道哪里错了。所以，这里提**供了一个配置项 `transform.print` 方便 debug 。这个配置项只在开发环境中生效**。如下例：

```js
option = {
  dataset: [
    {
      source: []
    },
    {
      transform: {
        type: 'filter',
        config: {},
        // 配置为 `true` 后， transform 的结果
        // 会被 console.log 打印出来。
        print: true
      }
    }
  ]
  // ...
};
```

## 数据转换器 "filter"

echarts 内置提供了能起过滤作用的数据转换器。我们只需声明 `transform.type: "filter"`，以及给出数据筛选条件。如下例：

```js
option = {
  dataset: [
    {
      source: [
        ['Product', 'Sales', 'Price', 'Year'],
        ['Cake', 123, 32, 2011],
        ['Latte', 231, 14, 2011],
        ['Tofu', 235, 5, 2011],
        ['Milk Tee', 341, 25, 2011],
        ['Porridge', 122, 29, 2011],
        ['Cake', 143, 30, 2012],
        ['Latte', 201, 19, 2012],
        ['Tofu', 255, 7, 2012],
        ['Milk Tee', 241, 27, 2012],
        ['Porridge', 102, 34, 2012],
        ['Cake', 153, 28, 2013],
        ['Latte', 181, 21, 2013],
        ['Tofu', 395, 4, 2013],
        ['Milk Tee', 281, 31, 2013],
        ['Porridge', 92, 39, 2013],
        ['Cake', 223, 29, 2014],
        ['Latte', 211, 17, 2014],
        ['Tofu', 345, 3, 2014],
        ['Milk Tee', 211, 35, 2014],
        ['Porridge', 72, 24, 2014]
      ]
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'Year', '=': 2011 }
        // 这个筛选条件表示，遍历数据，筛选出维度（ dimension ）
        // 'Year' 上值为 2011 的所有数据项。
      }
    }
  ],
  series: {
    type: 'pie',
    datasetIndex: 1
  }
};
```

在 "filter" transform 中，有这些要素：

### **关于维度（ dimension ）：**

`config.dimension` 指定了维度，能设成这样的值：

- 设定成声明在 dataset 中的维度名，例如 `config: { dimension: 'Year', '=': 2011 }`。不过， dataset 中维度名的声明并非强制，所以我们也可以
- 设定成 dataset 中的维度 index （index 值从 0 开始）例如 `config: { dimension: 3, '=': 2011 }`。

### **关于关系比较操作符：**

关系操作符，可以设定这些： `>`（`gt`）、`>=`（`gte`）、`<`（`lt`）、`<=`（`lte`）、`=`（`eq`）、`!=`（`ne`、`<>`）、`reg`。（小括号中的符号或名字，是别名，设置起来作用相同）。**他们首先基本地能基于数值大小进行比较，然后也有些额外的功能特性**：

- **多个关系操作符能声明在一个 {} 中**，例如 `{ dimension: 'Price', '>=': 20, '<': 30 }`。这表示“**与**”的关系，即，筛选出价格大于等于 20 小于 30 的数据项。
- data 里的值，**不仅可以是数值**（ number ），**也可以是“类数值的字符串”**（“ numeric string ”）。“类数值的字符串”本身是一个字符串，但是可以被转换为字面所描述的数值，例如 `' 123 '`。**转换过程中，空格（全角半角空格）和换行符都能被消除（ trim ）**。
- 如果我们需要对日期对象（JS `Date`）或者日期字符串（如 '2012-05-12'）进行比较，我们**需要手动指定 `parser: 'time'`**，例如 `config: { dimension: 3, lt: '2012-05-12', parser: 'time' }`。
- **纯字符串比较也被支持，但是只能用在 `=` 或 `!=` 上**。而 `>`, `>=`, `<`, `<=` 并不支持纯字符串比较，也就是说，这四个操作符的右值，不能是字符串。
- `reg` 操作符能**提供正则表达式比较**。例如， `{ dimension: 'Name', reg: /\s+Müller\s*$/ }` 能在 `'Name'` 维度上选出姓 `'Müller'` 的数据项。

### **关于逻辑比较：**

我们也支持了逻辑比较操作符 **与或非**（ `and` | `or` | `not` ）：

```js
option = {
  dataset: [
    {
      source: [
        // ...
      ]
    },
    {
      transform: {
        type: 'filter',
        config: {
          // 使用 and 操作符。
          // 类似地，同样的位置也可以使用 “or” 或 “not”。
          // 但是注意 “not” 后应该跟一个 {...} 而非 [...] 。
          and: [
            { dimension: 'Year', '=': 2011 },
            { dimension: 'Price', '>=': 20, '<': 30 }
          ]
        }
        // 这个表达的是，选出 2011 年价格大于等于 20 但小于 30 的数据项。
      }
    }
  ],
  series: {
    type: 'pie',
    datasetIndex: 1
  }
};
```

`and`/`or`/`not` 自然可以被嵌套，例如：

```js
transform: {
  type: 'filter',
  config: {
    or: [{
      and: [{
        dimension: 'Price', '>=': 10, '<': 20
      }, {
        dimension: 'Sales', '<': 100
      }, {
        not: { dimension: 'Product', '=': 'Tofu' }
      }]
    }, {
      and: [{
        dimension: 'Price', '>=': 10, '<': 20
      }, {
        dimension: 'Sales', '<': 100
      }, {
        not: { dimension: 'Product', '=': 'Cake' }
      }]
    }]
  }
}
```

### **关于解析器（ parser ）：**

还可以指定“解析器”（ parser ）来对值进行解析后再做比较。现在支持的解析器有：

- `parser: 'time'`：把原始值解析成时间戳（ timestamp ）后再做比较。这个解析器的行为，和 `echarts.time.parse` 相同，即，**当原始值为时间对象（ JS `Date` 实例），或者是时间戳，或者是描述时间的字符串**（例如 `'2012-05-12 03:11:22'` ），都可以被解析为时间戳，然后就可以基于数值大小进行比较。**如果原始数据是其他不可解析为时间戳的值，那么会被解析为 Na**N。
- `parser: 'trim'`：如果原始数据是字符串，**则把字符串两端的空格（全角半角）和换行符去掉**。如果不是字符串，还保持为原始数据。
- `parser: 'number'`：**强制把原始数据转成数值。如果不能转成有意义的数值**，那么转成 `NaN`。在大多数场景下，我们并不需要这个解析器，因为按默认策略，“像数值的字符串”就会被转成数值。**但是默认策略比较严格，这个解析器比较宽松**，如果我们遇到含有尾缀的字符串（例如 `'33%'`, `12px`），我们需要手动指定 `parser: 'number'`，从而去掉尾缀转为数值才能比较。

这个例子显示了如何使用 `parser: 'time'`：

```js
option = {
  dataset: [
    {
      source: [
        ['Product', 'Sales', 'Price', 'Date'],
        ['Milk Tee', 311, 21, '2012-05-12'],
        ['Cake', 135, 28, '2012-05-22'],
        ['Latte', 262, 36, '2012-06-02'],
        ['Milk Tee', 359, 21, '2012-06-22'],
        ['Cake', 121, 28, '2012-07-02'],
        ['Latte', 271, 36, '2012-06-22']
        // ...
      ]
    },
    {
      transform: {
        type: 'filter',
        config: {
          dimension: 'Date',
          '>=': '2012-05',
          '<': '2012-06',
          parser: 'time'
        }
      }
    }
  ]
};
```

### **形式化定义：**

最后，我们给出，数据转换器 "filter" 的 config 的形式化定义：

```js
type FilterTransform = {
  type: 'filter';
  config: ConditionalExpressionOption;
};
type ConditionalExpressionOption =
  | true
  | false
  | RelationalExpressionOption
  | LogicalExpressionOption;
type RelationalExpressionOption = {
  dimension: DimensionName | DimensionIndex;
  parser?: 'time' | 'trim' | 'number';
  lt?: DataValue; // less than
  lte?: DataValue; // less than or equal
  gt?: DataValue; // greater than
  gte?: DataValue; // greater than or equal
  eq?: DataValue; // equal
  ne?: DataValue; // not equal
  '<'?: DataValue; // lt
  '<='?: DataValue; // lte
  '>'?: DataValue; // gt
  '>='?: DataValue; // gte
  '='?: DataValue; // eq
  '!='?: DataValue; // ne
  '<>'?: DataValue; // ne (SQL style)
  reg?: RegExp | string; // RegExp
};
type LogicalExpressionOption = {
  and?: ConditionalExpressionOption[];
  or?: ConditionalExpressionOption[];
  not?: ConditionalExpressionOption;
};
type DataValue = string | number | Date;
type DimensionName = string;
type DimensionIndex = number;
```

> 注意：使用[按需引入](https://echarts.apache.org/handbook/zh/basics/import#按需引入-echarts-图表和组件)接口时，如果需要使用该内置转换器，除了 `Dataset` 组件，还需引入 `Transform` 组件。

```js
import {
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

echarts.use([
  DatasetComponent,
  TransformComponent
]);
```

## 数据转换器 "sort"

"sort" 是另一个内置的数据转换器，用于排序数据。目前主要能用于在类目轴（ `axis.type: 'category'` ）中显示排过序的数据。例如：

```js
var option = {
  dataset: [
    {
      dimensions: ['name', 'age', 'profession', 'score', 'date'],
      source: [
        ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
        ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
        ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
        ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
        ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
        ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
        ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
        ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
        ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
      ]
    },
    {
      transform: {
        type: 'sort',
          // 按分数排序
        config: { dimension: 'score', order: 'desc' }
      }
    }
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 }
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'name', y: 'score' },
    datasetIndex: 1
  }
};
```

数据转换器 "sort" 还有一些额外的功能：

- **可以多重排序，多个维度一起排序**。见下面的例子。

- 排序规则是这样的：

  - **默认按照数值大小排序**。其中，“可转为数值的字符串”也被转换成数值，和其他数值一起按大小排序。
  - **对于其他“不能转为数值的字符串”，也能在它们之间按字符串进行排序**。这个特性有助于这种场景：把相同标签的数据项排到一起，尤其是当多个维度共同排序时。见下面的例子。
  - 当“数值及可转为数值的字符串”和“不能转为数值的字符串”进行排序时，或者它们和“其他类型的值”进行比较时，**它们本身是不知如何进行比较的。那么我们称呼“后者”为“incomparable”**，并且可以设置 `incomparable: 'min' | 'max'` 来指定一个“incomparable”在这个比较中是最大还是最小，从而能使它们能产生比较结果。**这个设定的用途，比如可以是，决定空值（例如 `null`, `undefined`, `NaN`, `''`, `'-'`）在排序的头还是尾。**

- 解析器

   

  ```
  parser: 'time' | 'trim' | 'number'
  ```

   

  可以被使用，和数据转换器 "filter" 中的情况一样。

  - 如果要对时间进行排序（例如，值为 JS `Date` 实例或者时间字符串如 `'2012-03-12 11:13:54'`），我们需要声明 `parser: 'time'`。
  - 如果需要对有后缀的数值进行排序（如 `'33%'`, `'16px'`）我们需要声明 `parser: 'number'`。

这是一个“多维度排序”的例子。

```js
var option = {
  dataset: [
    {
      dimensions: ['name', 'age', 'profession', 'score', 'date'],
      source: [
        [' Hannah Krause ', 41, 'Engineer', 314, '2011-02-12'],
        ['Zhao Qian ', 20, 'Teacher', 351, '2011-03-01'],
        [' Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
        ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
        [' Karle Neumann ', 25, 'Engineer', 253, '2011-04-02'],
        [' Adrian Groß', 19, 'Teacher', null, '2011-01-16'],
        ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
        [' Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
        ['Han Meimei ', 67, 'Engineer', 366, '2011-03-12']
      ]
    },
    {
      transform: {
        type: 'sort',
        config: [
        // 对两个维度按声明的优先级分别排序。
          { dimension: 'profession', order: 'desc' },
          { dimension: 'score', order: 'desc' }
        ]
      }
    }
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 }
  },
  yAxis: {},
  series: {
    type: 'bar',
    label: {
      show: true,
      rotate: 90,
      position: 'insideBottom',
      align: 'left',
      verticalAlign: 'middle'
    },
    itemStyle: {
      color: function (params) {
        return {
          Engineer: '#5470c6',
          Teacher: '#91cc75',
          Musician: '#fac858'
        }[params.data[2]];
      }
    },
    encode: { x: 'name', y: 'score', label: ['profession'] },
    datasetIndex: 1
  }
};
```

最后，我们给出数据转换器 "sort" 的 config 的形式化定义。

```js
type SortTransform = {
  type: 'filter';
  config: OrderExpression | OrderExpression[];
};
type OrderExpression = {
  dimension: DimensionName | DimensionIndex;
  order: 'asc' | 'desc';
  incomparable?: 'min' | 'max';
  parser?: 'time' | 'trim' | 'number';
};
type DimensionName = string;
type DimensionIndex = number;
```

> 注意：使用[按需引入](https://echarts.apache.org/handbook/zh/basics/import#按需引入-echarts-图表和组件)接口时，如果需要使用该内置转换器，除了 `Dataset` 组件，还需引入 `Transform` 组件。

```js
import {
  DatasetComponent,
  TransformComponent
} from 'echarts/components';

echarts.use([
  DatasetComponent,
  TransformComponent
]);
```

## 使用外部的数据转换器

除了上述的内置的数据转换器外，我们也可以使用外部的数据转换器。外部数据转换器能提供或自己定制更丰富的功能。下面的例子中，我们使用第三方库 [ecStat](https://github.com/ecomfe/echarts-stat) 提供的数据转换器。

生成数据的回归线：

```js
// 首先要注册外部数据转换器。
echarts.registerTransform(ecStatTransform(ecStat).regression);
```

```js
option = {
  dataset: [
    {
      source: rawData
    },
    {
      transform: {
        // 引用注册的数据转换器。
        // 注意，每个外部的数据转换器，都有名空间（如 'ecStat:xxx'，'ecStat' 是名空间）。
        // 而内置数据转换器（如 'filter', 'sort'）没有名空间。
        type: 'ecStat:regression',
        config: {
          // 这里是此外部数据转换器所需的参数。
          method: 'exponential'
        }
      }
    }
  ],
  xAxis: { type: 'category' },
  yAxis: {},
  series: [
    {
      name: 'scatter',
      type: 'scatter',
      datasetIndex: 0
    },
    {
      name: 'regression',
      type: 'line',
      symbol: 'none',
      datasetIndex: 1
    }
  ]
};
```

一些使用 echarts-stat 的例子：

- [聚集 (Aggregate)](https://echarts.apache.org/examples/zh/editor.html?c=data-transform-aggregate&edit=1&reset=1)
- [直方图 (Histogram)](https://echarts.apache.org/examples/zh/editor.html?c=bar-histogram&edit=1&reset=1)
- [简单聚类 (Clustering)](https://echarts.apache.org/examples/zh/editor.html?c=scatter-clustering&edit=1&reset=1)
- [线性回归线 (Linear Regression)](https://echarts.apache.org/examples/zh/editor.html?c=scatter-linear-regression&edit=1&reset=1)
- [指数回归线 (Exponential Regression)](https://echarts.apache.org/examples/zh/editor.html?c=scatter-exponential-regression&edit=1&reset=1)
- [对数回归线 (Logarithmic Regression)](https://echarts.apache.org/examples/zh/editor.html?c=scatter-logarithmic-regression&edit=1&reset=1)
- [多项式回归线 (Polynomial Regression)](https://echarts.apache.org/examples/zh/editor.html?c=scatter-polynomial-regression&edit=1&reset=1)



# 坐标轴

## x 轴、y 轴

x 轴和 y 轴都由轴线、刻度、刻度标签、轴标题四个部分组成。部分图表中还会有网格线来帮助查看和计算数据

普通的二维数据坐标系都有 x 轴和 y 轴，通常情况下，x 轴显示在图表的底部，y 轴显示在左侧，一般配置如下：

```js
option = {
  xAxis: {
    // ...
  },
  yAxis: {
    // ...
  }
};
```

x 轴常用来标示数据的维度，维度一般用来指数据的类别，是观察数据的角度，例如“销售时间” “销售地点” “产品名称”等。y 轴常常用来标示数据的数值，数值是用来具体考察某一类数据的数量值，也是我们需要分析的指标，例如“销售数量”和“销售金额”等。

```js
option = {
  xAxis: {
    type: 'time',
    name: '销售时间'
    // ...
  },
  yAxis: {
    type: 'value',
    name: '销售数量'
    // ...
  }
  // ...
};
```

当 x 轴（水平坐标轴）跨度很大，可以采用区域缩放方式灵活显示数据内容。

```js
option = {
  xAxis: {
    type: 'time',
    name: '销售时间'
    // ...
  },
  yAxis: {
    type: 'value',
    name: '销售数量'
    // ...
  },
  dataZoom: [
    // ...
  ]
  // ...
};
```

在二维数据中，轴也可以有多个。ECharts 中一般情况下单个 grid 组件最多只能放两个 x/y 轴，多于两个 x/y 轴需要通过配置 [offset](https://echarts.apache.org/option.html#xAxis.offset) 属性防止同个位置多个轴的重叠。两个 x 轴显示在上下，两个 y 轴显示在左右两侧。

```js
option = {
  xAxis: {
    type: 'time',
    name: '销售时间'
    // ...
  },
  yAxis: [
    {
      type: 'value',
      name: '销售数量'
      // ...
    },
    {
      type: 'value',
      name: '销售金额'
      // ...
    }
  ]
  // ...
};
```

## 轴线

ECharts 提供了轴线 [axisLine](https://echarts.apache.org/option.html#xAxis.axisLine) 相关的配置，我们可以根据实际情况调整，例如轴线两端的箭头，轴线的样式等。

```js
option = {
  xAxis: {
    axisLine: {
      symbol: 'arrow',
      lineStyle: {
        type: 'dashed'
        // ...
      }
    }
    // ...
  },
  yAxis: {
    axisLine: {
      symbol: 'arrow',
      lineStyle: {
        type: 'dashed'
        // ...
      }
    }
  }
  // ...
};
```

## 刻度

ECharts 提供了轴线 [axisTick](https://echarts.apache.org/option.html#xAxis.axisTick) 相关的配置，我们可以根据实际情况调整，例如刻度线的长度，样式等。

```js
option = {
  xAxis: {
    axisTick: {
      length: 6,
      lineStyle: {
        type: 'dashed'
        // ...
      }
    }
    // ...
  },
  yAxis: {
    axisTick: {
      length: 6,
      lineStyle: {
        type: 'dashed'
        // ...
      }
    }
  }
  // ...
};
```

## 刻度标签

ECharts 提供了轴线 [axisLabel](https://echarts.apache.org/option.html#xAxis.axisLabel) 相关的配置，我们可以根据实际情况调整，例如文字对齐方式，自定义刻度标签内容等。

```js
option = {
  xAxis: {
    axisLabel: {
      formatter: '{value} kg',
      align: 'center'
      // ...
    }
    // ...
  },
  yAxis: {
    axisLabel: {
      formatter: '{value} 元',
      align: 'center'
      // ...
    }
  }
  // ...
};
```

## 示例

图左侧的 y 轴代表东京月平均气温，右侧的 y 轴表示东京降水量，x 轴表示时间。两组 y 轴在一起，反映了平均气温和降水量间的趋势关系。

```js
var option = {
  tooltip:{
    trigger:"axis",
    axisPointer:{type:"cross"},
  },
  legend:{},
  xAxis:[
  {
    type:"category",
    axisTick:{
      alignWithLable:true,
    },
    data:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] ,
  }],
  yAxis:[
    {
      type:"value",
      name:"降水量",
      min:0,
      max:250,
      position:"right",
      axisLabel:{
        formatter:"{value} ml",
      }
    },
    {
      type:"value",
      name:"温度",
      min:0,
      max:25,
      position:"left",
      axisLabel:{
        formatter:"{value} °C",
      }
    },
  ],
  series:[
    {
      name:"降水量",
      type:"bar",
      yAxisIndex:0,
      data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
    },
    {
      name:"温度",
      type:"line",
      smooth:true,
      yAxisIndex:1,
      data:[6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0, 5.2],
    },
  ],
  
};
```

# 数据的视觉映射

数据可视化是**数据到视觉元素的映射过程**（这个过程也可称为**视觉编码**，视觉元素也可称为视觉通道）。

**ECharts 的每种图表本身就内置了这种映射过程**，比如折线图把数据映射到“线”，柱状图把数据映射到“长度”。一些更复杂的图表，如关系图、事件河流图、树图也都会做出各自内置的映射。

此外，ECharts 还提供了 [visualMap 组件](https://echarts.apache.org/option.html#visualMap) 来提供通用的视觉映射。`visualMap` 组件中可以使用的视觉元素有：

- 图形类别（symbol）、图形大小（symbolSize）
- 颜色（color）、透明度（opacity）、颜色透明度（colorAlpha）、
- 颜色明暗度（colorLightness）、颜色饱和度（colorSaturation）、色调（colorHue）

下面对 `visualMap` 组件的使用方式进行简要的介绍。

## 数据和维度

ECharts 中的数据，一般存放于 [`series.data`](https://echarts.apache.org/option.html#series.data) 中。根据图表类型不同，数据的具体形式也可能有些许差异。比如可能是“线性表“、“树“、“图“等。但他们都有个共性：都是“数据项（dataItem）“的集合。每个数据项含有“数据值（value）“和其他信息（如果需要的话）。每个数据值，可以是单一的数值（一维）或者一个数组（多维）。

例如，[series.data](https://echarts.apache.org/option.html#series.data) 最常见的形式，是“线性表“，即一个普通数组：

```js
series: {
  data: [
    {
      // 这里每一个项就是数据项（dataItem）
      value: 2323, // 这是数据项的数据值（value）
      itemStyle: {}
    },
    1212, // 也可以直接是 dataItem 的 value，这更常见。
    2323, // 每个 value 都是“一维“的。
    4343,
    3434
  ];
}
```

```js
series: {
  data: [
    {
      // 这里每一个项就是数据项（dataItem）
      value: [3434, 129, '圣马力诺'], // 这是数据项的数据值（value）
      itemStyle: {}
    },
    [1212, 5454, '梵蒂冈'], // 也可以直接是 dataItem 的 value，这更常见。
    [2323, 3223, '瑙鲁'], // 每个 value 都是“三维“的，每列是一个维度。
    [4343, 23, '图瓦卢'] // 假如是“气泡图“，常见第一维度映射到x轴，
    // 第二维度映射到y轴，
    // 第三维度映射到气泡半径（symbolSize）
  ];
}
```

在图表中，往往默认把 value 的前一两个维度进行映射，比如取第一个维度映射到 x 轴，取第二个维度映射到 y 轴。如果想要把更多的维度展现出来，可以借助 `visualMap`。最常见的情况，[散点图（scatter）](https://echarts.apache.org/option.html#series-scatter) 使用半径展现了第三个维度。

## visualMap 组件

visualMap 组件定义了把数据的*哪个维度*映射到*什么视觉元素上*。

现在提供如下两种类型的 visualMap 组件，通过 [visualMap.type](https://echarts.apache.org/option.html#visualMap.type) 来区分。

其定义结构例如：

```js
option = {
  visualMap: [
    // 可以同时定义多个 visualMap 组件。
    {
      // 第一个 visualMap 组件
      type: 'continuous' // 定义为连续型 visualMap
      // ...
    },
    {
      // 第二个 visualMap 组件
      type: 'piecewise' // 定义为分段型 visualMap
      // ...
    }
  ]
  // ...
};
```

## 连续型与分段型视觉映射组件

ECharts 的视觉映射组件分为连续型（[visualMapContinuous](https://echarts.apache.org/option.html#visualMap-continuous)）与分段型（[visualMapPiecewise](https://echarts.apache.org/option.html#visualMap-piecewise)）。

连续型的意思是，进行视觉映射的数据维度是连续的数值；而分段型则是数据被分成了多段或者是离散型的数据。

### 连续型视觉映射

连续型视觉映射通过指定最大值、最小值，就可以确定视觉映射的范围。

```js
option = {
  visualMap: [
    {
      type: 'continuous',
      min: 0,
      max: 5000,
      dimension: 3, // series.data 的第四个维度（即 value[3]）被映射
      seriesIndex: 4, // 对第四个系列进行映射。
      inRange: {
        // 选中范围中的视觉配置
        color: ['blue', '#121122', 'red'], // 定义了图形颜色映射的颜色列表，
        // 数据最小值映射到'blue'上，
        // 最大值映射到'red'上，
        // 其余自动线性计算。
        symbolSize: [30, 100] // 定义了图形尺寸的映射范围，
        // 数据最小值映射到30上，
        // 最大值映射到100上，
        // 其余自动线性计算。
      },
      outOfRange: {
        // 选中范围外的视觉配置
        symbolSize: [30, 100]
      }
    }
    //    ...
  ]
};
```

其中，[visualMap.inRange](https://echarts.apache.org/option.html#visualMap.inRange) 表示在数据映射范围内的数据采用的样式；而 [visualMap.outOfRange](https://echarts.apache.org/option.html#visualMap.outOfRange) 则指定了超出映射范围外的数据的样式。

[visualMap.dimension](https://echarts.apache.org/handbook/~visualMap.dimension) 则指定了将数据的哪个维度做视觉映射。

### 分段型视觉映射

分段型视觉映射组件有三种模式：

- 连续型数据平均分段：依据 [visualMap-piecewise.splitNumber](https://echarts.apache.org/option.html#visualMap-piecewise.splitNumber) 来自动平均分割成若干块。
- 连续型数据自定义分段：依据 [visualMap-piecewise.pieces](https://echarts.apache.org/option.html#visualMap-piecewise.pieces) 来定义每块范围。
- 离散数据（类别性数据）：类别定义在 [visualMap-piecewise.categories](https://echarts.apache.org/option.html#visualMap-piecewise.categories) 中。

使用分段型视觉映射时，需要将 `type` 设为 `'piecewise'`，并且将上面的三个配置项选其一配置即可，其他配置项类似连续型视觉映射。



# 图例

**图例是图表中对内容区元素的注释**、用不同形状、颜色、文字等来标示不同数据列，通过点击对应数据列的标记，可以显示或隐藏该数据列。图例虽然不是图表中的主要信息、却是了解图表信息的钥匙。

## 布局

图例一般放在图表的右上角、也可以放在图表的底部、同一页面中的所有图例位置保持一致，可以横排对齐也可以纵排对齐。还要综合考虑整体的图表空间是适合哪种摆放方式。当图表纵向空间紧张或者内容区量过大的时候、建议摆放在图表的下方。下面是几种图例的摆放方式：

```js
option = {
  legend: {
    // Try 'horizontal'
    orient: 'vertical',
    right: 10,
    top: 'center'
  },
  dataset: {
    source: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};
```

对于图例较多时，可以使用可滚动翻页的图例

```js
option = {
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    data: ['图例一', '图例二', '图例三' /* ... */, , '图例n']
    // ...
  }
  // ...
};
```

## 样式

在深色系背景下、为了方便阅读，建议给图例加上半透明的浅色背景层，文字颜色设置为浅色。

```js
option = {
  legend: {
    data: ['图例一', '图例二', '图例三'],
    backgroundColor: '#ccc',
    textStyle: {
      color: '#ccc'
      // ...
    }
    // ...
  }
  // ...
};
```

图例的颜色标签有很多种设计方式、针对不同的图表、图例样式也会有所不同。

```js
option = {
  legend: {
    data: ['图例一', '图例二', '图例三'],
    icon: 'rect'
    // ...
  }
  // ...
};
```

## 交互

根据场景需要，图例可支持交互操作，点击控制显示或隐藏对应的数据列；

```js
option = {
  legend: {
    data: ['图例一', '图例二', '图例三'],
    selected: {
      图例一: true,
      图例二: true,
      图例三: false
    }
    // ...
  }
  // ...
};
```

## 图例注意事项

图例要要注意视情况使用，有些双轴图包含了多种图表类型，不同类型的图例样式要有所区分。

```js
option = {
  legend: {
    data: [
      {
        name: '图例一',
        icon: 'rect'
      },
      {
        name: '图例二',
        icon: 'circle'
      },
      {
        name: '图例三',
        icon: 'pin'
      }
    ]
    // ...
  },
  series: [
    {
      name: '图例一'
      // ...
    },
    {
      name: '图例二'
      // ...
    },
    {
      name: '图例三'
      // ...
    }
  ]
  // ...
};
```

当图表只有一种数据信息时，用图表标题说明数据信息即可。建议此时不要加上图例。



# 事件与行为

在 Apache ECharts 的图表中用户的操作将会触发相应的事件。开发者可以监听这些事件，然后通过回调函数做相应的处理，比如跳转到一个地址，或者弹出对话框，或者做数据下钻等等。

ECharts 中的事件名称对应 DOM 事件名称，均为小写的字符串，如下是一个绑定点击操作的示例。

```js
myChart.on('click', function(params) {
  // 控制台打印数据的名称
  console.log(params.name);
});
```

在 ECharts 中事件分为两种类型，一种是**用户鼠标操作点击，或者 hover 图表的图形时触发的事件**，还有一种是用户**在使用可以交互的组件后触发的行为事件**，例如在切换图例开关时触发的 ['legendselectchanged'](https://echarts.apache.org/api.html#events.legendselectchanged) 事件（这里需要注意切换图例开关是不会触发 `'legendselected'` 事件的），数据区域缩放时触发的 ['datazoom'](https://echarts.apache.org/api.html#events.legendselectchanged) 事件等等。

## 鼠标事件的处理

ECharts 支持常规的鼠标事件类型，包括 `'click'`、 `'dblclick'`、 `'mousedown'`、 `'mousemove'`、 `'mouseup'`、 `'mouseover'`、 `'mouseout'`、 `'globalout'`、 `'contextmenu'` 事件。下面先来看一个简单的点击柱状图后打开相应的百度搜索页面的示例。

```js
// 基于准备好的dom，初始化ECharts实例
// var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 处理点击事件并且跳转到相应的百度搜索页面
myChart.on('click', function(params) {
  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});
```

所有的鼠标事件包含参数 `params`，**这是一个包含点击图形的数据信息的对象**，如下格式：

```ts
type EventParams = {
 
  componentType: string; // 当前点击的图形元素所属的组件名称， 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
 
  seriesType: string; // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
 
  seriesIndex: number; // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
 
  seriesName: string; // 系列名称。当 componentType 为 'series' 时有意义。
  
  name: string;// 数据名，类目名
  
  dataIndex: number;// 数据在传入的 data 数组中的 index
  
  data: Object;// 传入的原始数据项
  
  dataType: string;// sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
  // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
  // 其他大部分图表中只有一种 data，dataType 无意义。
 
  value: number | Array; // 传入的数据值
  
  color: string;// 数据图形的颜色。当 componentType 为 'series' 时有意义。
};
```

如何区分鼠标点击到了哪里：

```js
myChart.on('click', function(params) {
  if (params.componentType === 'markPoint') {
    // 点击到了 markPoint 上
    if (params.seriesIndex === 5) {
      // 点击到了 index 为 5 的 series 的 markPoint 上。
    }
  } else if (params.componentType === 'series') {
    if (params.seriesType === 'graph') {
      if (params.dataType === 'edge') {
        // 点击到了 graph 的 edge（边）上。
      } else {
        // 点击到了 graph 的 node（节点）上。
      }
    }
  }
});
```

使用 `query` **只对指定的组件的图形元素的触发回调**：

```js
chart.on(eventName, query, handler);
```

`query` 可为 `string` 或者 `Object`。

如果为 `string` 表示组件类型。格式可以是 'mainType' 或者 'mainType.subType'。例如：

```js
chart.on('click', 'series', function() {});
chart.on('click', 'series.line', function() {});
chart.on('click', 'dataZoom', function() {});
chart.on('click', 'xAxis.category', function() {});
```

如果为 `Object`，可以包含以下一个或多个属性，每个属性都是可选的：

```ts
{
  ${mainType}Index: number // 组件 index
  ${mainType}Name: string // 组件 name
  ${mainType}Id: string // 组件 id
  dataIndex: number // 数据项 index
  name: string // 数据项 name
  dataType: string // 数据项 type，如关系图中的 'node', 'edge'
  element: string // 自定义系列中的 el 的 name
}
```

例如：

```js
chart.setOption({
  // ...
  series: [
    {
      name: 'uuu'
      // ...
    }
  ]
});
chart.on('mouseover', { seriesName: 'uuu' }, function() {
  // series name 为 'uuu' 的系列中的图形元素被 'mouseover' 时，此方法被回调。
});
```

例如：

```js
chart.setOption({
  // ...
  series: [
    {
      // ...
    },
    {
      // ...
      data: [
        { name: 'xx', value: 121 },
        { name: 'yy', value: 33 }
      ]
    }
  ]
});
chart.on('mouseover', { seriesIndex: 1, name: 'xx' }, function() {
  // series index 1 的系列中的 name 为 'xx' 的元素被 'mouseover' 时，此方法被回调。
});
```

例如：

```js
chart.setOption({
  // ...
  series: [
    {
      type: 'graph',
      nodes: [
        { name: 'a', value: 10 },
        { name: 'b', value: 20 }
      ],
      edges: [{ source: 0, target: 1 }]
    }
  ]
});
chart.on('click', { dataType: 'node' }, function() {
  // 关系图的节点被点击时此方法被回调。
});
chart.on('click', { dataType: 'edge' }, function() {
  // 关系图的边被点击时此方法被回调。
});
```

例如：

```js
chart.setOption({
  // ...
  series: {
    // ...
    type: 'custom',
    renderItem: function(params, api) {
      return {
        type: 'group',
        children: [
          {
            type: 'circle',
            name: 'my_el'
            // ...
          },
          {
            // ...
          }
        ]
      };
    },
    data: [[12, 33]]
  }
});
chart.on('mouseup', { element: 'my_el' }, function() {
  // name 为 'my_el' 的元素被 'mouseup' 时，此方法被回调。
});
```

你**可以在回调函数中获得这个对象中的数据名、系列名称后在自己的数据仓库中索引得到其它的信息后更新图表，显示浮层等等**，如下示例代码：

```js
myChart.on('click', function(parmas) {
  $.get('detail?q=' + params.name, function(detail) {
    myChart.setOption({
      series: [
        {
          name: 'pie',
          // 通过饼图表现单个柱子中的数据分布
          data: [detail.data]
        }
      ]
    });
  });
});
```

## 组件交互的行为事件

在 ECharts 中基本上所有的组件交互行为都会触发相应的事件，常用的事件和事件对应参数在 [events](https://echarts.apache.org//api.html#events) 文档中有列出。

下面是监听一个图例开关的示例：

```js
// 图例开关的行为只会触发 legendselectchanged 事件
myChart.on('legendselectchanged', function(params) {
  // 获取点击图例的选中状态
  var isSelected = params.selected[params.name];
  // 在控制台中打印
  console.log((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
  // 打印所有图例的状态
  console.log(params.selected);
});
```

## 代码触发 ECharts 中组件的行为

上面提到诸如 `'legendselectchanged'` 事件会由组件交互的行为触发，**那除了用户的交互操作，有时候也会有需要在程序里调用方法触发图表的行为，诸如显示 tooltip，选中图例。**

在 ECharts 通过调用 `myChart.dispatchAction({ type: '' })` 触发图表行为，统一管理了所有动作，也可以方便地根据需要去记录用户的行为路径。

常用的动作和动作对应参数在 [action](https://echarts.apache.org//api.html#action) 文档中有列出。

下面示例演示了如何通过 `dispatchAction` 去轮流高亮饼图的每个扇形。

```js
option = {
  title: {
    text: '饼图程序调用高亮示例',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

let currentIndex = -1;

setInterval(function() {
  var dataLen = option.series[0].data.length;
  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  currentIndex = (currentIndex + 1) % dataLen;
  // 高亮当前图形
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
  // 显示 tooltip
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: currentIndex
  });
}, 1000);
```

## 监听“空白处”的事件

有时候，开发者需要监听画布的“空白处”所触发的事件。比如，当需要在用户点击“空白处”的时候重置图表时。

在讨论这个功能之前，我们需要先明确两种事件。zrender 事件和 echarts 事件。

```js
myChart.getZr().on('click', function(event) {
  // 该监听器正在监听一个`zrender 事件`。
});
myChart.on('click', function(event) {
  // 该监听器正在监听一个`echarts 事件`。
});
```



zrender 事件与 echarts 事件不同。**前者是当鼠标在任何地方都会被触发**，而后者是只有当鼠标在图形元素上时才能被触发。**事实上，echarts 事件是在 zrender 事件的基础上实现的**，也就是说，当一个 zrender 事件在图形元素上被触发时，echarts 将触发一个 echarts 事件给开发者。

有了 zrender 事件，我们就可以实现监听空白处的事件，具体如下：

```js
myChart.getZr().on('click', function(event) {
  // 没有 target 意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的。
  if (!event.target) {
    // 点击在了空白处，做些什么。
  }
});
```



# 柱状图 

## 基本柱状图

柱状图（或称条形图）是一种通过柱形的长度来表现数据大小的一种常用图表类型。

设置柱状图的方式，是将 `series` 的 `type` 设为 `'bar'`。

[[配置项手册\]](https://echarts.apache.org/option.html#series-bar)

### 最简单的柱状图

最简单的柱状图可以这样设置：

```js
option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
};
```

在这个例子中，横坐标是类目型的，因此需要在 `xAxis` 中指定对应的值；而纵坐标是数值型的，可以根据 `series` 中的 `data`，自动生成对应的坐标范围。

### 多系列的柱状图

我们可以用一个系列表示一组相关的数据，**如果需要实现多系列的柱状图，只需要在 `series` 多添加一项就可以了**——

```js
option = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    },
    {
      type: 'bar',
      data: [26, 24, 18, 22, 23, 20, 27]
    }
  ]
};
```

### 柱状图样式设置

#### 柱条样式

柱条的样式可以通过 [`series.itemStyle`](https://echarts.apache.org/option.html#series-bar.itemStyle) 设置，包括：

- 柱条的颜色（`color`）；
- 柱条的描边颜色（`borderColor`）、宽度（`borderWidth`）、样式（`borderType`）；
- 柱条圆角的半径（`barBorderRadius`）；
- 柱条透明度（`opacity`）；
- 阴影（`shadowBlur`、`shadowColor`、`shadowOffsetX`、`shadowOffsetY`）。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [
        10,
        22,
        28,
        {
          value: 43,
          // 设置单个柱子的样式
          itemStyle: {
            color: '#91cc75',
            shadowColor: '#91cc75',
            borderType: 'dashed',
            opacity: 0.5
          }
        },
        49
      ],
      itemStyle: {
        barBorderRadius: 5,
        borderWidth: 1,
        borderType: 'solid',
        borderColor: '#73c0de',
        shadowColor: '#5470c6',
        shadowBlur: 3
      }
    }
  ]
```

在这个例子中，我们通过设置柱状图对应 `series` 的`itemStyle`，设置了柱条的样式。完整的配置项及其用法请参见配置项手册 [`series.itemStyle`](https://echarts.apache.org/option.html#series-bar.itemStyle)。

#### 柱条宽度和高度

柱条宽度可以通过 [`barWidth`](https://echarts.apache.org/option.html##series-bar.barWidth) 设置。比如在下面的例子中，将 `barWidth` 设为 `'20%'`，**表示每个柱条的宽度就是类目宽度的 20%**。由于这个例子中，**每个系列有 5 个数据，20% 的类目宽度也就是整个 x 轴宽度的 4%**。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [10, 22, 28, 43, 49],
      barWidth: '20%'
    }
  ]
};
```

另外，还可以设置 [`barMaxWidth`](https://echarts.apache.org/option.html#series-bar.barMaxWidth) 限制柱条的最大宽度。对于一些特别小的数据，我们也可以为柱条指定最小高度 [`barMinHeight`](https://echarts.apache.org/option.html#series-bar.barMinHeight)，当数据对应的柱条高度小于该值时，柱条高度将采用这个最小高度。

#### 柱条间距

柱条间距分为两种，一种是**不同系列在同一类目下的距离** [`barGap`](https://echarts.apache.org/option.html#series-bar.barGap)，另一种是**类目与类目的距离** [`barCategoryGap`](https://echarts.apache.org/option.html#series-bar.barCategoryGap)。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 18],
      barGap: '20%',
      barCategoryGap: '40%'
    },
    {
      type: 'bar',
      data: [12, 14, 9, 9, 11]
    }
  ]
};
```

在这个例子中，`barGap` 被设为 `'20%'`，这**意味着每个类目（比如 `A`）下的两个柱子之间的距离，相对于柱条宽度的百分比**。而 `barCategoryGap` 是 `'40%'`，**意味着柱条每侧空余的距离，相对于柱条宽度的百分比**。

通常而言，设置 `barGap` 及 `barCategoryGap` 后，就不需要设置 `barWidth` 了，这时候的宽度会自动调整。**如果有需要的话，可以设置 `barMaxWidth` 作为柱条宽度的上限**，当图表宽度很大的时候，柱条宽度也不会太宽。

> 在同一坐标系上，此属性会被多个柱状图系列共享。**此属性应设置于此坐标系中最后一个柱状图系列上才会生效，并且是对此坐标系中所有柱状图系列生效。**

#### 为柱条添加背景色

有时，我们希望能够为柱条添加背景色。从 ECharts 4.7.0 版本开始，这一功能可以简单地用 [`showBackground`](https://echarts.apache.org/option.html#series-bar.showBackground) 开启，并且可以通过 [`backgroundStyle`](https://echarts.apache.org/option.html#series-bar.backgroundStyle) 配置。

```js
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      }
    }
  ]
};
```

## 堆叠柱状图

有时候，我们不仅希望知道不同系列各自的数值，还希望知道它们之和的变化，这时候通常使用堆积柱状图图来表现。顾名思义，**堆积柱状图就是一个系列的数值“堆积”在另一个系列上，因而从他们的高度总和就能表达总量的变化**。

使用 EChart 实现堆积折线图的方法非常简单，**只需要给一个系列的 `stack` 值设置一个字符串类型的值，这一个值表示该系列堆积的类别**。也就是说，**拥有同样 `stack` 值的系列将堆积在一组**。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'bar',
      stack: 'x'
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'bar',
      stack: 'x'
    }
  ]
```

在这个例子中，第二个系列所在的位置是在第一个系列的位置的基础上，上升了第二个系列数值对应的高度。因此，从第二个系列的位置，就能看出这两者总和的变化趋势。

> `stack` 的取值用来表明哪些系列将被堆积在一起，**理论上只要取值相同即可**，具体的取值并没有什么区别。**但在实际的应用中，我们建议使用一些有意义的字符串方便阅读**。
>
> 比如，在一个统计男女人数的图中，有四个系列，“成年男性”和“男孩”系列需要进行堆积，“成年女性”和“女孩”系列需要堆积。这时，这两组的的 `stack` 值就建议分别设为 `'男'` 和 `'女'`。虽然使用 `'a'` 和 `'b'` 这样没有意义的字符串也能实现同样的效果，但是代码的可阅读性就差了。

## 动态排序柱状图

### 基本设置

动态排序柱状图**是一种展示随时间变化的数据排名变化的图表**，从 ECharts 5 开始内置支持。

> 动态排序柱状图通常是横向的柱条，**如果想要采用纵向的柱条，只要把本教程中的 X 轴和 Y 轴相反设置即可**。

1. 柱状图系列的 `realtimeSort` 设为 `true`，表示开启该系列的动态排序效果
2. `yAxis.inverse` 设为 `true`，表示 Y 轴从下往上是从小到大的排列
3. `yAxis.animationDuration` 建议设为 `300`，表示第一次柱条排序动画的时长
4. `yAxis.animationDurationUpdate` 建议设为 `300`，表示第一次后柱条排序动画的时长
5. 如果想**只显示前 *n* 名**，将 `yAxis.max` 设为 *n - 1*，否则显示所有柱条
6. `xAxis.max` 建议设为 `'dataMax'` **表示用数据的最大值作为 X 轴最大值**，视觉效果更好
7. 如果想要**实时改变标签**，需要将 `series.label.valueAnimation` 设为 `true`
8. `animationDuration` 设为 `0`，**表示第一份数据不需要从 `0` 开始动画**（如果希望从 `0` 开始则设为和 `animationDurationUpdate` 相同的值）
9. `animationDurationUpdate` 建议设为 `3000` **表示每次更新动画时长**，这一数值应与调用 `setOption` 改变数据的频率相同
10. 以 `animationDurationUpdate` 的频率调用 `setInterval`，更新数据值，显示下一个时间点对应的柱条排序

完整的例子如下：

```js
var data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}

option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 3000,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

function update() {
  var data = option.series[0].data;
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption(option);
}

setInterval(function() {
  update();
}, 3000);
```

## 阶梯瀑布图

Apache ECharts 中并没有单独的瀑布图类型，但是我们**可以使用堆叠的柱状图模拟该效果**。

假设数据数组中的值是表示对前一个值的增减：

```js
var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
```

也就是第一个数据是 `900`，第二个数据 `345` 表示的是在 `900` 的基础上增加了 `345`……将这个数据展示为阶梯瀑布图时，我们可以使用三个系列：第一个是不可交互的透明系列，用来实现“悬空”的柱状图效果；第二个系列用来表示正数；第三个系列用来表示负数。

```js
var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
var help = [];
var positive = [];
var negative = [];
for (var i = 0, sum = 0; i < data.length; ++i) {
  if (data[i] >= 0) {
    positive.push(data[i]);
    negative.push('-');
  } else {
    positive.push('-');
    negative.push(-data[i]);
  }

  if (i === 0) {
    help.push(0);
  } else {
    sum += data[i - 1];
    if (data[i] < 0) {
      help.push(sum + data[i]);
    } else {
      help.push(sum);
    }
  }
}

option = {
  title: {
    text: 'Waterfall'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: (function() {
      var list = [];
      for (var i = 1; i <= 11; i++) {
        list.push('Oct/' + i);
      }
      return list;
    })()
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'bar',
      stack: 'all',
      itemStyle: {
        normal: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        }
      },
      data: help
    },
    {
      name: 'positive',
      type: 'bar',
      stack: 'all',
      data: positive
    },
    {
      name: 'negative',
      type: 'bar',
      stack: 'all',
      data: negative,
      itemStyle: {
        color: '#f33'
      }
    }
  ]
};
```



# 折线图

## 基础折线图

折线图主要用来展示数据项随着时间推移的趋势或变化。

### 最简单的折线图

如果我们想建立一个横坐标是类目型（category）、纵坐标是数值型（value）的折线图，我们可以使用这样的方式：

```js
option = {
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]
}
```

在这个例子中，我们通过 `xAxis` 将横坐标设为**类目型**，并指定了对应的值；通过 `type` 将 `yAxis` 的类型设定为**数值型**。在 `series` 中，我们将系列类型设为 `line`，并且通过 `data` 指定了折线图三个点的取值。这样，就能得到一个最简单的折线图了。

> 这里 `xAxis` 和 `yAxis` 的 `type` 属性都可以隐去不写。因为坐标轴的默认类型是数值型，而 `xAxis` 指定了类目型的 `data`，所以 `ECharts` 也能识别出这是类目型的坐标轴。为了让大家更容易理解，我们特意写了 `type`。**在实际的应用中，如果是 `'value'` 类型，也可以省略不写。**

### 笛卡尔坐标系中的折线图

如果我们希望折线图在横坐标和纵坐标上都是连续的，即在笛卡尔坐标系中，应该如何实现呢？答案也很简单，**只要把 `series` 的 `data` 每个数据用一个包含两个元素的数组表示就行了。**

```js
option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      data: [
        [20, 120],
        [50, 200],
        [40, 50]
      ],
      type: 'line'
    }
  ]
};
```

### 折线图样式设置

#### 折线的样式

折线图中折线的样式可以通过 `lineStyle` 设置。可以为其指定颜色、线宽、折线类型、阴影、不透明度等等，具体的可以参考配置项手册 [`series.lineStyle`](https://echarts.apache.org/option.html#series-line.lineStyle) 了解。这里，我们以设置颜色（color）、线宽（width）和折线类型（type）为例说明。

```js
var option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      type:"line",
      data: [10, 22, 28, 23, 19],
      lineStyle:{
        normal:{
          color:"#329876",
          width:4,
          type:"dashed",
        }
      }
    },
    ],
};
```

这里设置折线宽度时，**数据点描边的宽度是不会跟着改变的**，而应该在数据点的配置项中另外设置。

#### 数据点的样式

数据点的样式可以通过 [`series.itemStyle`](https://echarts.apache.org/option.html#series-line.itemStyle) 指定填充颜色（color）、描边颜色（borderColor）、描边宽度（borderWidth）、描边类型（borderType）、阴影（shadowColor）、不透明度（opacity）等。与折线样式的设置十分相似，这里不再展开说明。

### 在数据点处显示数值

在系列中，这数据点的标签通过 [`series.label`](https://echarts.apache.org/option.html#series-line.label) 属性指定。如果将 `label` 下的 `show` 指定为`true`，则表示该数值默认时就显示；如果为 `false`，**而 [`series.emphasis.label.show`](https://echarts.apache.org/option.html#series-line.emphasis.label.show) 为 `true`，则表示只有在鼠标移动到该数据时，才显示数值。**

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      label: {
        show: true,
        position: 'bottom',
        textStyle: {
          fontSize: 20
        }
      }
    }
  ]
};
```

### 空数据

在一个系列中，可能一个横坐标对应的取值是“空”的，将其设为 0 有时并不能满足我们的期望--**空数据不应被其左右的数据连接**。

在 ECharts 中，**我们使用字符串 `'-'` 表示空数据**，这对其他系列的数据也是适用的。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [0, 22, '-', 23, 19],
      type: 'line'
    }
  ]
};
```

注意区别这个例子中，“空”数据与取值为 0 的数据。

## 堆叠折线图

与[堆叠柱状图](https://echarts.apache.org/handbook/zh/application/chart-types/bar/stacked-bar)类似，堆叠折线图也是用系列的 `stack` 设置哪些系列堆叠在一起。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'line',
      stack: 'x'
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'line',
      stack: 'x'
    }
  ]
};
```

但是不同的是，如果不加说明的话，我们很难判断出这是一个堆叠折线图，还是一个普通的折线图。所以，**对于堆叠折线图而言，一般建议使用区域填充色以表明堆叠的情况。**

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'line',
      stack: 'x',
      areaStyle: {}
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'line',
      stack: 'x',
      areaStyle: {}
    }
  ]
};
```

## 区域面积图

区域面积图将折线到坐标轴的空间设置背景色，**用区域面积表达数据**。相比普通的折线图，**区域面积图的视觉效果更加饱满丰富**，在系列不多的场景下尤其适用。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      areaStyle: {}
    },
    {
      data: [25, 14, 23, 35, 10],
      type: 'line',
      areaStyle: {
        color: '#ff0',
        opacity: 0.5
      }
    }
  ]
};
```

通过 [`areaStyle`](https://echarts.apache.org/option.html#series-line.areaStyle) 设置折线图的填充区域样式，**将其设为为 `{}` 表示使用默认样式**，即使用系列的颜色以半透明的方式填充区域。如果想指定特定的样式，可以通过设置 `areaStyle` 下的配置项覆盖，如第二个系列将填充区域的颜色设为不透明度为 0.5 的黄色。

## 平滑曲线图

平滑曲线图也是折线图的一种变形，这种更柔和的样式也是一种不错的视觉选择。使用时，**只需要将折线图系列的 `smooth` 属性设置为 `true` 即可**。

```js
option = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      smooth: true
    }
  ]
};
```

## 阶梯线图

阶梯线图又称**方波图**，它**使用水平和垂直的线来连接两个数据点**，而普通折线图则直接将两个点连接起来。**阶梯线图能够很好地表达数据的突变**。

在 ECharts 中，**系列的 `step` 属性用来表征阶梯线图的连接类型**，它共有**三种取值：`'start'`、`'middle'` 和 `'end'`**，分别表示在当前点，当前点与下个点的中间点，下个点拐弯。

```js
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510]
    }
  ]
};
```

请注意这个例子中不同的 `step` 取值对应的数据点和连线的区别。



# 饼图

## 基础饼图

饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。

### 最简单的饼图

饼图的配置和折线图、柱状图略有不同，**不再需要配置坐标轴，而是把数据名称和值都写在系列中**。以下是一个最简单的饼图的例子。

```js
option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
      ]
    }
  ]
};
```

需要注意的是，这里是 `value` 不需要是百分比数据，ECharts 会根据所有数据的 `value` ，按比例分配它们在饼图中对应的弧度。

### 饼图样式设置

#### 饼图的半径

饼图的半径可以通过 [`series.radius`](https://echarts.apache.org/option.html#series-pie.radius) 设置，可以是诸如 `'60%'` 这样相对的百分比字符串，或是 `200` 这样的绝对像素数值。**当它是百分比字符串时，它是相对于容器宽高中较小的一条边的。**也就是说，如果宽度大于高度，则百分比是相对于高度的，反之则反；**当它是数值型时，它表示绝对的像素大小**。

```js
option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
      ],
      radius: '50%'
    }
  ]
};
```

### 如果数据和为 0，不显示饼图

在默认情况下，如果数据值和为 0，会显示平均分割的扇形。比如，如果有 4 个数据项，并且每个数据项都是 0，则每个扇形都是 90°。**如果我们希望在这种情况下不显示任何扇形**，可以将 [`series.stillShowZeroSum`](https://echarts.apache.org/option.html#series-pie.stillShowZeroSum) 设为 `false`。

```js
option = {
  series: [
    {
      type: 'pie',
      stillShowZeroSum: false,
      data: [
        {
          value: 0,
          name: '直接访问'
        },
        {
          value: 0,
          name: '联盟广告'
        },
        {
          value: 0,
          name: '搜索引擎'
        }
      ]
    }
  ]
};
```

**如果希望扇形对应的标签也不显示**，可以将 [`series.label.show`](https://echarts.apache.org/option.html#series-pie.label.show) 设为 `false`。

```js
option = {
  series: [
    {
      type: 'pie',
      stillShowZeroSum: false,
      label: {
        show: false
      },
      data: [
        {
          value: 0,
          name: '直接访问'
        },
        {
          value: 0,
          name: '联盟广告'
        },
        {
          value: 0,
          name: '搜索引擎'
        }
      ]
    }
  ]
};
```

## 圆环图

圆环图同样可以用来表示数据占总体的比例，相比于饼图，它中间空余的部分可以用来显示一些额外的文字等信息，因而也是一种常用的图表类型。

### 基础圆环图

在 ECharts 中，饼图的半径除了上一小节提到的，可以是一个数值或者字符串之外，**还可以是一个包含两个元素的数组**，每个元素可以为数值或字符串。当它是一个数组时，**它的前一项表示内半径，后一项表示外半径**，这样就形成了一个圆环图。

从这个角度上来说，**可以认为饼图是一个内半径为 0 的圆环图**，也就是说，饼图是圆环图的特例。

```js
option = {
  title: {
    text: '圆环图的例子',
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'A'
        },
        {
          value: 234,
          name: 'B'
        },
        {
          value: 1548,
          name: 'C'
        }
      ],
      radius: ['40%', '70%']
    }
  ]
};
```

如果半径是数组，其中的两项也可以一项是数值，另一项是百分比形式的字符串。但是这样可能导致在某些分辨率下，内半径小于外半径。**ECharts 会自动使用小的一项作为内半径，**但是仍应小心这样可能会导致的非预期效果。

### 在圆环图中间显示高亮扇形对应的文字

上面的例子展现了在圆环图中间显示固定文字的例子，下面我们要介绍，如何在圆环图中间显示鼠标高亮的扇形对应的文字。实现这一效果的思路是，利用系列的 `label`（默认用扇形颜色显示数据的 `name`），显示在圆环图中间。**在默认情况下不显示系列的 `label`，在高亮时显示**。具体的代码如下：

```js
option = {
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['A', 'B', 'C', 'D', 'E']
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
        emphasis: {
          show: true
        }
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      data: [
        { value: 335, name: 'A' },
        { value: 310, name: 'B' },
        { value: 234, name: 'C' },
        { value: 135, name: 'D' },
        { value: 1548, name: 'E' }
      ]
    }
  ]
};
```

其中，`avoidLabelOverlap` 是用来控制是否由 ECharts 调整标签位置以实现防止标签重叠。**它的默认值是 `true`，而在这里，我们不希望标签位置调整到不是中间的位置，因此我们需要将其设为 `false`。**

这样，圆环图中间会显示高亮数据的 `name` 值。



## 南丁格尔图（玫瑰图）

南丁格尔图又称玫瑰图，**通常用弧度相同但半径不同的扇形表示各个类目。**

ECharts 可以通过将饼图的 [`series.roseType`](https://echarts.apache.org/option.html#series-pie.roseType) 值设为 `'area'` 实现南丁格尔图，其他配置项和饼图是相同的。

```js
option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 100,
          name: 'A'
        },
        {
          value: 200,
          name: 'B'
        },
        {
          value: 300,
          name: 'C'
        },
        {
          value: 400,
          name: 'D'
        },
        {
          value: 500,
          name: 'E'
        }
      ],
      roseType: 'area'
    }
  ]
};
```

# 散点图

散点图，也是一种常见的图表类型。散点图由许多“点”组成，有时，这些点用来表示数据在坐标系中的位置（比如在笛卡尔坐标系下，表示数据在 x 轴和 y 轴上的坐标；在地图坐标系下，表示数据在地图上的某个位置等）；有时，这些点的大小、颜色等属性也可以映射到数据值，用以表现高维数据。

## 最简单的散点图

下面是一个横坐标为类目轴、纵坐标为数值轴的最简单的散点图配置：

```js
option = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}
```

## 笛卡尔坐标系下的散点图

在上文的例子中，散点图的横坐标都是离散的类目轴，而纵坐标都是连续的数值轴。而对于散点图而言，另一种常见的场景是，**两个坐标轴均为连续的数值轴，也就是笛卡尔坐标系**。这时的系列形式略有不同，数据的横坐标和纵坐标一同写在 `data` 中，而非坐标轴中。

```js
option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [
        [10, 5],
        [0, 8],
        [6, 10],
        [2, 12],
        [8, 9]
      ]
    }
  ]
};
```

## 散点图样式设置

### 图形的形状

图形（symbol）**指的是散点图中数据“点”的形状**。有三类图形可选，一种是 **ECharts 内置形状**，第二种是**图片**，第三种是 **SVG 的路径**。

ECharts 内置形状包括：圆形、矩形、圆角矩形、三角形、菱形、大头针形、箭头形，分别对应`'circle'`、`'rect'`、`'roundRect'`、`'triangle'`、`'diamond'`、`'pin'`、`'arrow'`。**使用内置形状时，只要将 `symbol` 属性指定为形状名称对应的字符串即可。**

**如果想要将图形指定为任意的图片，以 `'image://'` 开头，后面跟图片的绝对或相对地址**。形如：`'image://http://example.com/xxx.png'` 或 `'image://./xxx.png'`。

除此之外，**还支持 SVG 的路径作为矢量图形，将 `symbol` 设置为以 `'path://'` 开头的 SVG 路径即可**。使用矢量图形的好处是，图片不会因为缩放而产生锯齿或模糊，并且通常而言比图片形式的文件大小更小。**路径的查看方法为，打开一个 `SVG` 文件，找到形如 `<path d="M… L…"></path>` 的路径，将 `d` 的值添加在 `'path://'` 后即可。**

下面，我们展示一个将图形设置为矢量爱心形状的方式。

首先，我们需要一个爱心的 SVG 文件，可以使用矢量编辑软件绘制，或者从网上下载到相关资源。其内容如下：

```html
<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.997 51.997" style="enable-background:new 0 0 51.997 51.997;" xml:space="preserve">
    <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z"/>
</svg>
```

在 ECharts 的 `symbol` 配置项中，我们使用 `d` 的值作为路径。

```js
option = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310],
      symbolSize: 20,
      symbol:
        'path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z'
    }
  ]
};
```

这样，就能得到爱心形状的图形作为点的形状了。

### 图形的大小

图形大小可以使用 [`series.symbolSize`](https://echarts.apache.org/option.html#series-scatter.symbolSize) 控制。它既可以是一个表示图形大小的像素值，也可以是一个包含两个 number 元素的数组，分别表示图形的宽和高。

除此之外，它还可以是一个回调函数，其参数格式为：

```ts
(value: Array | number, params: Object) => number | Array;
```

第一个参数为数据值，第二个参数是数据项的其他参数。

在下面的例子中，我们将散点图点的大小设置为与其数据值成正比。

```js
option = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310],
      symbolSize: function(value) {
        return value / 10;
      }
    }
  ]
};
```



# 跨平台方案 

## 服务端渲染

### 服务端渲染 ECharts 图表

通常情况下，Apache EChartsTM 会在浏览器中动态的渲染图表，并且根据用户的交互来更新渲染。但是在下面这些比较特殊的场景，我们也需要在服务端中渲染图表并且输出到浏览器中：

- 需要缩短前端的渲染时间，保证第一时间显示图表
- 需要在 Markdown, PDF 等不支持动态运行脚本的环境中嵌入图表

在这些场景下，ECharts 也提供了多种服务端渲染的方案：

### 服务端 SVG 字符串渲染

如果你在使用 5.3.0 以及更新的版本，我们强烈推荐你使用 5.3.0 里新引入的零依赖的服务端 SVG 字符串渲染方案：

```ts
const echarts = require('echarts');

// 在 SSR 模式下第一个参数不需要再传入 DOM 对象
const chart = echarts.init(null, null, {
  renderer: 'svg', // 必须使用 SVG 模式
  ssr: true, // 开启 SSR
  width: 400, // 需要指明高和宽
  height: 300
});

// 像正常使用一样 setOption
chart.setOption({
  //...
});

// 输出字符串
const svgStr = chart.renderToSVGString();
```



整体使用的代码结构跟在浏览器中使用一样，首先是`init`初始化一个图表实例，然后通过`setOption`设置图表的配置项。但是`init`传入的参数会跟在跟浏览器中使用有所不同：

- 首先因为在服务端会采用字符串拼接的方式来渲染得到 SVG，我们**并不需要容器来展示渲染的内容**，所以我们可以在`init`的时候第一个`container`参数传入`null`或者`undefined`。
- 然后我们在`init`的第三个参数中，我们**需要通过显示指定`ssr: true`来告诉 ECharts 我们需要开启服务端渲染的模式**，该模式下 ECharts 会关闭动画循环的模块以及事件交互的模块。
- 在服务端渲染中我们也**必须要通过`width`和`height`显示的指定图表的高和宽**，因此如果你的图表是需要根据容器大小自适应的话，可能需要思考一下服务端渲染是否适合你的场景了。

在浏览器中我们在`setOption`完之后 ECharts 就会自动进行渲染将结果绘制到页面中，后续也会在每一帧判断是否有动画需要进行重绘。NodeJS 中我们在设置了`ssr: true`后则没有这个过程。取而代之我们使用了`renderToSVGString`，**将当前的图表渲染到 SVG 字符串，进一步得再通过 HTTP Response 返回给前端或者缓存到本地。**

HTTP Response 返回给前端：

```ts
res.writeHead(200, {
  'Content-Type': 'application/xml'
});
res.write(chart.renderToSVGString());
res.end();
```

或者保存到本地：

```ts
fs.writeFile('bar.svg', chart.renderToSVGString(), 'utf-8');
```



下面是一个完整的在 CodeSandbox 中搭建一个最简单的 NodeJS 服务器然后使用 ECharts 服务端 SVG 渲染的效果：

```js

const http=require('http');
const echarts=require("echarts");

function renderChart(){
	const chart=echarts.init(null,null,{
		renderer:"svg",
		ssr:true,
		width:400,
		height:300,
	});
	chart.setOption({
		xAxis:{
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		},
		yAxis:{
			type:"value",
		},
		series:[
			{
				data:[120, 200, 150, 80, 70, 110, 130],
				type:'bar',
				animationDelay:(idx)=>{
					return idx+100;
				},
			}
		],
	});
	return chart.renderToSVGString();
}

http.createServer(function(req,res){
	res.writeHead(200,{
		"Content-Type":"application/xml"
	});
	res.write(renderChart());
	res.end();
}).listen(8080);
```

### 服务端渲染中的动画效果

上面的例子中可以看到，就算是服务端渲染 ECharts 也可以提供动画效果，这个动画效果是通过在输出的 SVG 字符串中嵌入 CSS 动画实现的。并不需要额外的 JavaScript 再去控制动画。

但是，也因为 CSS 动画的局限性，我们没法在服务端渲染中实现一些更灵活的动画功能，诸如柱状图排序动画，标签动画，路径图的特效动画等。部分系列诸如饼图的动画效果也为服务端渲染做了特殊的优化。

如果你不希望有这个动画效果，可以在`setOption`的时候通过`animation: false`关闭动画。

```ts
setOption({
  animation: false
});
```

### 服务端 Canvas 渲染

如果你希望输出的是一张图片而非 SVG 字符串，或者你还在使用更老的版本，我们会推荐使用 [node-canvas](https://github.com/Automattic/node-canvas) 来实现 ECharts 的服务渲染，[node-canvas](https://github.com/Automattic/node-canvas) 是在 NodeJS 上的一套 Canvas 实现，它提供了跟浏览器中 Canvas 几乎一致的接口。

下面是一个简单的例子

```js
var echarts = require('echarts');
const { createCanvas } = require('canvas');

// 在 5.3.0 之前的版本中，你必须要通过该接口注册 canvas 实例创建方法。
// 从 5.3.0 开始就不需要了
echarts.setCanvasCreator(() => {
  return createCanvas();
});

const canvas = createCanvas(800, 600);
// ECharts 可以直接使用 node-canvas 创建的 Canvas 实例作为容器
const chart = echarts.init(canvas);

// 像正常使用一样 setOption
chart.setOption({
  //...
});

// 通过 Response 输出 PNG 图片
res.writeHead(200, {
  'Content-Type': 'image/png'
});
res.write(renderChart().toBuffer('image/png'));
res.end();
```

### 图片的加载

[node-canvas](https://github.com/Automattic/node-canvas) 提供了图片加载的`Image`实现，如果你在图表中使用了到了图片，我们可以使用`5.3.0`新增的`setPlatformAPI`接口来适配。

```ts
echarts.setPlatformAPI({
  // 同老版本的 setCanvasCreator
  createCanvas() {
    return createCanvas();
  },
  loadImage(src, onload, onerror) {
    const img = new Image();
    // 必须要绑定 this context.
    img.onload = onload.bind(img);
    img.onerror = onerror.bind(img);
    img.src = src;
    return img;
  }
});
```



如果你的图片是需要远程获取的，我们建议你通过 http 请求先预取该图片得到`base64`之后再作为图片的 URL 传入，这样可以保证在 Response 输出的时候图片是加载完成的。

## 在微信小程序中使用 ECharts

[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin) 项目提供了一个小程序组件，用这种方式可以方便地使用 ECharts。

### 使用方式

1. 下载该项目
2. 如有必要，将 `ec-canvas` 目录下的 `echarts.js` 替换为最新版的 ECharts。如果希望减小包体积大小，可以使用[自定义构建](https://echarts.apache.org//builder.html)生成并替换 `echarts.js`
3. `pages` 目录下是使用的示例文件，可以作为参考，或者删除不需要的页面。

更详细的说明请参见 [echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin) 项目。

### 注意事项

最新版的 ECharts 微信小程序支持微信 Canvas 2d，当用户的基础库版本 >= 2.9.0 且没有设置 `force-use-old-canvas="true"` 的情况下，使用新的 Canvas 2d（默认）。

使用新的 Canvas 2d 可以提升渲染性能，解决非同层渲染问题，强烈建议开启。

更详细的说明请参见 [Canvas 2d 版本要求](https://github.com/ecomfe/echarts-for-weixin#canvas-2d-版本要求)。



# 数据处理

## 异步加载

[入门示例](https://echarts.apache.org/handbook/zh/get-started)中的数据是在初始化后`setOption`中直接填入的，但是很多时候可能数据需要异步加载后再填入。`ECharts` 中实现异步数据的更新非常简单，在图表初始化后不管任何时候只要通过 jQuery 等工具异步获取数据后通过 `setOption` 填入数据和配置项就行。

```js
var myChart = echarts.init(document.getElementById('main'));

$.get('data.json').done(function(data) {
  // data 的结构:
  // {
  //     categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
  //     values: [5, 20, 36, 10, 10, 20]
  // }
  myChart.setOption({
    title: {
      text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {},
    xAxis: {
      data: data.categories
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: data.values
      }
    ]
  });
});
```

或者先设置完其它的样式，显示一个空的直角坐标轴，然后获取数据后填入数据。

```js
var myChart = echarts.init(document.getElementById('main'));
// 显示标题，图例和空的坐标轴
myChart.setOption({
  title: {
    text: '异步数据加载示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: []
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: []
    }
  ]
});

// 异步加载数据
$.get('data.json').done(function(data) {
  // 填入数据
  myChart.setOption({
    xAxis: {
      data: data.categories
    },
    series: [
      {
        // 根据名字对应到相应的系列
        name: '销量',
        data: data.data
      }
    ]
  });
});
```

ECharts 中在更新数据的时候需要通过`name`属性对应到相应的系列，上面示例中如果`name`不存在也可以根据系列的顺序正常更新，但是更多时候推荐更新数据的时候加上系列的`name`数据。

## loading 动画

如果数据加载时间较长，一个空的坐标轴放在画布上也会让用户觉得是不是产生 bug 了，因此需要一个 loading 的动画来提示用户数据正在加载。

ECharts 默认有提供了一个简单的加载动画。只需要调用 [showLoading](https://echarts.apache.org//api.html#echartsInstance.showLoading) 方法显示。数据加载完成后再调用 [hideLoading](https://echarts.apache.org//api.html#echartsInstance.hideLoading) 方法隐藏加载动画。

```js
myChart.showLoading();
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});
```

## 数据的动态更新

ECharts 由数据驱动，数据的改变驱动图表展现的改变，因此动态数据的实现也变得异常简单。

所有数据的更新都通过 [setOption](https://echarts.apache.org//api.html#echartsInstance.setOption)实现，你只需要定时获取数据，[setOption](https://echarts.apache.org/handbook/~api.html#echartsInstance.setOption) 填入数据，而不用考虑数据到底产生了那些变化，ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

```js
var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [Math.random() * 150];
var now = new Date(base);
function addData(shift) {
  now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
  date.push(now);
  data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
  if (shift) {
    date.shift();
    data.shift();
  }
  now = new Date(+new Date(now) + oneDay);
}
for (var i = 1; i < 100; i++) {
  addData();
}
option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    boundaryGap: [0, '50%'],
    type: 'value'
  },
  series: [
    {
      name: '成交',
      type: 'line',
      smooth: true,
      symbol: 'none',
      stack: 'a',
      areaStyle: {
        normal: {}
      },
      data: data
    }
  ]
};
myChart.setOption(option);
setInterval(function () {
  addData(true);
  myChart.setOption({
    xAxis: {
      data: date
    },
    series: [
      {
        name: '成交',
        data: data
      }
    ]
  });
}, 500);
```



# 标签

Apache EChartsTM 中的文本标签从 v3.7 开始支持富文本模式，能够：

- 定制文本块整体的样式（如背景、边框、阴影等）、位置、旋转等。
- 对文本块中个别片段定义样式（如颜色、字体、高宽、背景、阴影等）、对齐方式等。
- 在文本中使用图片做小图标或者背景。
- 特定组合以上的规则，可以做出简单表格、分割线等效果。

开始下面的介绍之前，先说明一下下面会使用的两个名词的含义：

- 文本块（Text Block）：文本标签块整体。
- 文本片段（Text fragment）：文本标签块中的部分文本。

## 文本样式相关的配置项

echarts 提供了丰富的文本标签配置项，包括：

- 字体基本样式设置：`fontStyle`、`fontWeight`、`fontSize`、`fontFamily`。
- 文字颜色：`color`。
- 文字描边：`textBorderColor`、`textBorderWidth`。
- 文字阴影：`textShadowColor`、`textShadowBlur`、`textShadowOffsetX`、`textShadowOffsetY`。
- 文本块或文本片段大小：`lineHeight`、`width`、`height`、`padding`。
- 文本块或文本片段的对齐：`align`、`verticalAlign`。
- 文本块或文本片段的边框、背景（颜色或图片）：`backgroundColor`、`borderColor`、`borderWidth`、`borderRadius`。
- 文本块或文本片段的阴影：`shadowColor`、`shadowBlur`、`shadowOffsetX`、`shadowOffsetY`。
- 文本块的位置和旋转：`position`、`distance`、`rotate`。

可以在各处的 `rich` 属性中定义文本片段样式。例如 [series-bar.label.rich](https://echarts.apache.org/handbook/option.html#series-bar.label.rich)

例如：

```js
labelOption = {
  // 在文本中，可以对部分文本采用 rich 中定义样式。
  // 这里需要在文本中使用标记符号：
  // `{styleName|text content text content}` 标记样式名。
  // 注意，换行仍是使用 '\n'。
  formatter: [
    '{a|这段文本采用样式a}',
    '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
  ].join('\n'),

  // 这里是文本块的样式设置：
  color: '#333',
  fontSize: 5,
  fontFamily: 'Arial',
  borderWidth: 3,
  backgroundColor: '#984455',
  padding: [3, 10, 10, 5],
  lineHeight: 20,

  // rich 里是文本片段的样式设置：
  rich: {
    a: {
      color: 'red',
      lineHeight: 10
    },
    b: {
      backgroundColor: {
        image: 'xxx/xxx.jpg'
      },
      height: 40
    },
    x: {
      fontSize: 18,
      fontFamily: 'Microsoft YaHei',
      borderColor: '#449933',
      borderRadius: 4
    }
  }
};
```

```js
var option = {
  series: [
    {
      type: 'scatter',
      data: [[0, 0]],
      symbolSize: 1,
      label: {
        normal: {
          show: true,
          formatter: [
            'The whole box is a {term|Text Block}, with',
            'red border and grey background.',
            '{fragment1|A Text Fragment} {fragment2|Another Text Fragment}',
            'Text fragments can be customized.'
          ].join('\n'),
          backgroundColor: '#eee',
          // borderColor: '#333',
          borderColor: 'rgb(199,86,83)',
          borderWidth: 2,
          borderRadius: 5,
          padding: 10,
          color: '#000',
          fontSize: 14,
          shadowBlur: 3,
          shadowColor: '#888',
          shadowOffsetX: 0,
          shadowOffsetY: 3,
          lineHeight: 30,
          rich: {
            term: {
              fontSize: 18,
              color: 'rgb(199,86,83)'
            },
            fragment1: {
              backgroundColor: '#000',
              color: 'yellow',
              padding: 5
            },
            fragment2: {
              backgroundColor: '#339911',
              color: '#fff',
              borderRadius: 15,
              padding: 5
            }
          }
        }
      }
    }
  ],
  xAxis: {
    axisLabel: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    min: -1,
    max: 1
  },
  yAxis: {
    axisLabel: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    min: -1,
    max: 1
  }
};
```

> 注意：如果不定义 `rich`，不能指定文字块的 `width` 和 `height`。

## 文本、文本框、文本片段的基本样式和装饰

每个文本可以设置基本的字体样式：`fontStyle`、`fontWeight`、`fontSize`、`fontFamily`。

可以设置文字的颜色 `color` 和边框的颜色 `textBorderColor`、`textBorderWidth`。

文本框可以设置边框和背景的样式：`borderColor`、`borderWidth`、`backgroundColor`、`padding`。

文本片段也可以设置边框和背景的样式：`borderColor`、`borderWidth`、`backgroundColor`、`padding`。

例如：

```js
option = {
  series: [
    {
      type: 'scatter',
      symbolSize: 1,
      data: [
        {
          value: [0, 0],
          label: {
            normal: {
              show: true,
              formatter: [
                'Plain text',
                '{textBorder|textBorderColor + textBorderWidth}',
                '{textShadow|textShadowColor + textShadowBlur + textShadowOffsetX + textShadowOffsetY}',
                '{bg|backgroundColor + borderRadius + padding}',
                '{border|borderColor + borderWidth + borderRadius + padding}',
                '{shadow|shadowColor + shadowBlur + shadowOffsetX + shadowOffsetY}'
              ].join('\n'),
              backgroundColor: '#eee',
              borderColor: '#333',
              borderWidth: 2,
              borderRadius: 5,
              padding: 10,
              color: '#000',
              fontSize: 14,
              shadowBlur: 3,
              shadowColor: '#888',
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              lineHeight: 30,
              rich: {
                textBorder: {
                  fontSize: 20,
                  textBorderColor: '#000',
                  textBorderWidth: 3,
                  color: '#fff'
                },
                textShadow: {
                  fontSize: 16,
                  textShadowBlur: 5,
                  textShadowColor: '#000',
                  textShadowOffsetX: 3,
                  textShadowOffsetY: 3,
                  color: '#fff'
                },
                bg: {
                  backgroundColor: '#339911',
                  color: '#fff',
                  borderRadius: 15,
                  padding: 5
                },
                border: {
                  color: '#000',
                  borderColor: '#449911',
                  borderWidth: 1,
                  borderRadius: 3,
                  padding: 5
                },
                shadow: {
                  backgroundColor: '#992233',
                  padding: 5,
                  color: '#fff',
                  shadowBlur: 5,
                  shadowColor: '#336699',
                  shadowOffsetX: 6,
                  shadowOffsetY: 6
                }
              }
            }
          }
        }
      ]
    }
  ],
  xAxis: {
    show: false,
    min: -1,
    max: 1
  },
  yAxis: {
    show: false,
    min: -1,
    max: 1
  }
};
```

## 标签的位置

对于折线图、柱状图、散点图等，均可以使用 `label` 来设置标签。标签的相对于图形元素的位置，一般使用 [label.position](https://echarts.apache.org/handbook/option.html#series-scatter.label.position)、[label.distance](https://echarts.apache.org/handbook/option.html#series-scatter.label.distance) 来配置。

试试在下面例子中修改`position`和`distance` 属性：

```js
option = {
  series: [
    {
      type: 'scatter',
      symbolSize: 160,
      symbol: 'roundRect',
      data: [[1, 1]],
      label: {
        normal: {
          // 修改 position 和 distance 的值试试
          // 支持：'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
          position: 'top',
          distance: 10,

          show: true,
          formatter: ['Label Text'].join('\n'),
          backgroundColor: '#eee',
          borderColor: '#555',
          borderWidth: 2,
          borderRadius: 5,
          padding: 10,
          fontSize: 18,
          shadowBlur: 3,
          shadowColor: '#888',
          shadowOffsetX: 0,
          shadowOffsetY: 3,
          textBorderColor: '#000',
          textBorderWidth: 3,
          color: '#fff'
        }
      }
    }
  ],
  xAxis: {
    max: 2
  },
  yAxis: {
    max: 2
  }
};
```

注意：`position` 在不同的图中可取值有所不同。`distance` 并不是在每个图中都支持。详情请参见 [option 文档](https://echarts.apache.org/option.html)。

## 标签的旋转

某些图中，为了能有足够长的空间来显示标签，需要对标签进行旋转。例如：

```js
const labelOption = {
  show: true,
  rotate: 90,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};

option = {
  xAxis: [
    {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Forest',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390]
    },
    {
      name: 'Steppe',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290]
    }
  ]
};
```

这种场景下，可以结合 [align](https://echarts.apache.org/handbook/option.html#series-bar.label.align) 和 [verticalAlign](https://echarts.apache.org/handbook/option.html#series-bar.label.verticalAlign) 来调整标签位置。

注意，逻辑是，**先使用 `align` 和 `verticalAlign` 定位，再旋转。**

## 文本片段的排版和对齐

关于排版方式，每个文本片段，可以想象成 CSS 中的 `inline-block`，在文档流中按行放置。

每个文本片段的内容盒尺寸（`content box size`），默认是根据文字大小决定的。但是，**也可以设置 `width`、`height` 来强制指定**，虽然一般不会这么做（参见下文）。文本片段的边框盒尺寸（`border box size`），由上述本身尺寸，加上文本片段的 `padding` 来得到。

**只有 `'\n'` 是换行符，能导致换行。**

一行内，会有多个文本片段。每行的实际高度，由 `lineHeight` 最大的文本片段决定。**文本片段的 `lineHeight` 可直接在 `rich` 中指定**，也可以在 `rich` 的父层级中统一指定而采用到 `rich` 的所有项中，如果都不指定，则取文本片段的边框盒尺寸（`border box size`）。

在一行的 `lineHeight` 被决定后，**一行内，文本片段的竖直位置，由文本片段的 `verticalAlign` 来指定**（这里和 CSS 中的规则稍有不同）：

- `'bottom'`：文本片段的盒的底边贴住行底。
- `'top'`：文本片段的盒的顶边贴住行顶。
- `'middle'`：居行中。

**文本块的宽度**，可以直接由文本块的 `width` 指定，否则，由最长的行决定。宽度决定后，在一行中进行文本片段的放置。文本片段的 `align` 决定了文本片段在行中的水平位置：

- 首先，从左向右连续紧靠放置 `align` 为 `'left'` 的文本片段盒。
- 然后，从右向左连续紧靠放置 `align` 为 `'right'` 的文本片段盒。
- 最后，剩余的没处理的文本片段盒，紧贴着，在中间剩余的区域中居中放置。

**关于文字在文本片段盒中的位置：**

- 如果 `align` 为 `'center'`，则文字在文本片段盒中是居中的。
- 如果 `align` 为 `'left'`，则文字在文本片段盒中是居左的。
- 如果 `align` 为 `'right'`，则文字在文本片段盒中是居右的。

## 特殊效果：图标、分割线、标题块、简单表格

看下面的例子：

```js
option = {
  series: [
    {
      type: 'scatter',
      data: [
        {
          value: [0, 0],
          label: {
            normal: {
              formatter: [
                '{tc|Center Title}{titleBg|}',
                '  Content text xxxxxxxx {sunny|} xxxxxxxx {cloudy|}  ',
                '{hr|}',
                '  xxxxx {showers|} xxxxxxxx  xxxxxxxxx  '
              ].join('\n'),
              rich: {
                titleBg: {
                  align: 'right'
                }
              }
            }
          }
        },
        {
          value: [0, 1],
          label: {
            normal: {
              formatter: [
                '{titleBg|Left Title}',
                '  Content text xxxxxxxx {sunny|} xxxxxxxx {cloudy|}  ',
                '{hr|}',
                '  xxxxx {showers|} xxxxxxxx  xxxxxxxxx  '
              ].join('\n')
            }
          }
        },
        {
          value: [0, 2],
          label: {
            normal: {
              formatter: [
                '{titleBg|Right Title}',
                '  Content text xxxxxxxx {sunny|} xxxxxxxx {cloudy|}  ',
                '{hr|}',
                '  xxxxx {showers|} xxxxxxxx  xxxxxxxxx  '
              ].join('\n'),
              rich: {
                titleBg: {
                  align: 'right'
                }
              }
            }
          }
        }
      ],
      symbolSize: 1,
      label: {
        normal: {
          show: true,
          backgroundColor: '#ddd',
          borderColor: '#555',
          borderWidth: 1,
          borderRadius: 5,
          color: '#000',
          fontSize: 14,
          rich: {
            titleBg: {
              backgroundColor: '#000',
              height: 30,
              borderRadius: [5, 5, 0, 0],
              padding: [0, 10, 0, 10],
              width: '100%',
              color: '#eee'
            },
            tc: {
              align: 'center',
              color: '#eee'
            },
            hr: {
              borderColor: '#777',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            sunny: {
              height: 30,
              align: 'left',
              backgroundColor: {
                image:
                  'https://echarts.apache.org/examples/data/asset/img/weather/sunny_128.png'
              }
            },
            cloudy: {
              height: 30,
              align: 'left',
              backgroundColor: {
                image:
                  'https://echarts.apache.org/examples/data/asset/img/weather/cloudy_128.png'
              }
            },
            showers: {
              height: 30,
              align: 'left',
              backgroundColor: {
                image:
                  'https://echarts.apache.org/examples/data/asset/img/weather/showers_128.png'
              }
            }
          }
        }
      }
    }
  ],
  xAxis: {
    show: false,
    min: -1,
    max: 1
  },
  yAxis: {
    show: false,
    min: 0,
    max: 2,
    inverse: true
  }
};
```

文本片段的 `backgroundColor` 可以指定为图片后，就可以在文本中使用图标了：

```js
labelOption = {
  rich: {
    Sunny: {
      // 这样设定 backgroundColor 就可以是图片了。
      backgroundColor: {
        image: './data/asset/img/weather/sunny_128.png'
      },
      // 可以只指定图片的高度，从而图片的宽度根据图片的长宽比自动得到。
      height: 30
    }
  }
};
```

分割线实际是用 border 实现的：

```js
labelOption = {
  rich: {
    hr: {
      borderColor: '#777',
      // 这里把 width 设置为 '100%'，表示分割线的长度充满文本块。
      // 注意，这里是文本块内容盒（content box）的 100%，而不包含 padding。
      // 虽然这和 CSS 相关的定义有所不同，但是在这类场景中更加方便。
      width: '100%',
      borderWidth: 0.5,
      height: 0
    }
  }
};
```



标题块是使用 `backgroundColor` 实现的：

```js
labelOption = {
  // 标题文字居左
  formatter: '{titleBg|Left Title}',
  rich: {
    titleBg: {
      backgroundColor: '#000',
      height: 30,
      borderRadius: [5, 5, 0, 0],
      padding: [0, 10, 0, 10],
      width: '100%',
      color: '#eee'
    }
  }
};

// 标题文字居中。
// 这个实现有些 tricky，但是，能够不引入更复杂的排版规则而实现这个效果。
labelOption = {
  formatter: '{tc|Center Title}{titleBg|}',
  rich: {
    titleBg: {
      align: 'right',
      backgroundColor: '#000',
      height: 30,
      borderRadius: [5, 5, 0, 0],
      padding: [0, 10, 0, 10],
      width: '100%',
      color: '#eee'
    }
  }
};
```



简单表格的设定，其实就是给不同行上纵向对应的文本片段设定同样的宽度就可以了。见 [该例子](https://echarts.apache.org/examples/zh/editor.html?c=pie-rich-text)

```js
const weatherIcons = {
  Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
  Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
  Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
};
option = {
  title: {
    text: 'Weather Statistics',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    bottom: 10,
    left: 'center',
    data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
  },
  series: [
    {
      type: 'pie',
      radius: '65%',
      center: ['50%', '50%'],
      selectedMode: 'single',
      data: [
        {
          value: 1548,
          name: 'CityE',
          label: {
            formatter: [
              '{title|{b}}{abg|}',
              '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
              '{hr|}',
              '  {Sunny|}{value|202}{rate|55.3%}',
              '  {Cloudy|}{value|142}{rate|38.9%}',
              '  {Showers|}{value|21}{rate|5.8%}'
            ].join('\n'),
            backgroundColor: '#eee',
            borderColor: '#777',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              title: {
                color: '#eee',
                align: 'center'
              },
              abg: {
                backgroundColor: '#333',
                width: '100%',
                align: 'right',
                height: 25,
                borderRadius: [4, 4, 0, 0]
              },
              Sunny: {
                height: 30,
                align: 'left',
                backgroundColor: {
                  image: weatherIcons.Sunny
                }
              },
              Cloudy: {
                height: 30,
                align: 'left',
                backgroundColor: {
                  image: weatherIcons.Cloudy
                }
              },
              Showers: {
                height: 30,
                align: 'left',
                backgroundColor: {
                  image: weatherIcons.Showers
                }
              },
              weatherHead: {
                color: '#333',
                height: 24,
                align: 'left'
              },
              hr: {
                borderColor: '#777',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              value: {
                width: 20,
                padding: [0, 20, 0, 30],
                align: 'left'
              },
              valueHead: {
                color: '#333',
                width: 20,
                padding: [0, 20, 0, 30],
                align: 'center'
              },
              rate: {
                width: 40,
                align: 'right',
                padding: [0, 10, 0, 0]
              },
              rateHead: {
                color: '#333',
                width: 40,
                align: 'center',
                padding: [0, 10, 0, 0]
              }
            }
          }
        },
        { value: 735, name: 'CityC' },
        { value: 510, name: 'CityD' },
        { value: 434, name: 'CityB' },
        { value: 335, name: 'CityA' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
```



# 动画

## 基础的过渡动画

Apache EChartsTM 中使用了平移，缩放，变形等形式的过渡动画让数据的添加更新删除，以及用户的交互变得更加顺滑。通常情况下开发者不需要操心该如何去使用动画，只需要按自己的需求使用`setOption`更新数据，ECharts 就会找出跟上一次数据之间的区别，然后自动应用最合适的过渡动画。

比如下面例子就是定时更新饼图数据（随机）的过渡动画效果。

```js
function makeRandomData() {
  return [
    {
      value: Math.random(),
      name: 'A'
    },
    {
      value: Math.random(),
      name: 'B'
    },
    {
      value: Math.random(),
      name: 'C'
    }
  ];
}
option = {
  series: [
    {
      type: 'pie',
      radius: [0, '50%'],
      data: makeRandomData()
    }
  ]
};
myChart.setOption(option);
setInterval(() => {
  myChart.setOption({
    series: {
      data: makeRandomData()
    }
  });
}, 2000);
```

## 过渡动画的配置

因为数据添加和数据更新往往会需要不一样的动画效果，比如我们会期望数据更新动画的时长更短，因此 ECharts 区分了这两者的动画配置：

- 对于新添加的数据，我们会应用入场动画，通过`animationDuration`, `animationEasing`, `animationDelay`三个配置项分别配置动画的时长，缓动以及延时。
- 对于数据更新，我们会应用更新动画，通过`animationDurationUpdate`, `animationEasingUpdate`, `animationDelayUpdate`三个配置项分别配置动画的时长，缓动以及延时。

可以看到，更新动画配置是入场动画配置加上了`Update`的后缀。

> 在 ECharts 中每次 setOption 的更新，数据会跟上一次更新的数据做对比，然后根据对比结果分别为数据执行三种状态：添加，更新以及移除。这个比对是根据数据的`name`来决定的，例如上一次更新数据有三个`name`为`'A'`, `'B'`, `'C'`的数据，而新更新的数据变为了`'B'`, `'C'`, `'D'`的数据，则数据`'B'`, `'C'`会被执行更新，数据`'A'`会被移除，而数据`'D'`会被添加。如果是第一次更新因为没有旧数据，所以所有数据都会被执行添加。根据这三种状态 ECharts 会分别应用相应的入场动画，更新动画以及移除动画。

所有这些配置都可以分别设置在`option`最顶层对所有系列和组件生效，也可以分别为每个系列配置。

**如果我们想要关闭动画，可以直接设置`option.animation`为`false`。**

### 动画时长

`animationDuration`和`animationDurationUpdate`用于设置动画的时长，单位为`ms`，设置较长的动画时长可以让用户更清晰的看到过渡动画的效果，但是我们也需要小心过长的时间会让用户再等待的过程中失去耐心。

设置为`0`会关闭动画，在我们只想要单独关闭入场动画或者更新动画的时候可以通过单独将相应的配置设置为`0`来实现。

### 动画缓动

`animationEasing`和`animationEasingUpdate`两个配置项用于设置动画的缓动函数，缓动函数是一个输入动画时间，输出动画进度的函数：

```ts
(t: number) => number;
```



在 ECharts 里内置了缓入`'cubicIn'`，缓出`'cubicOut'`等常见的动画缓动函数，我们可以直接通过名字来声明使用这些缓动函数。

内置缓动函数：

```js
const easingFuncs = {
  linear: function (k) {
    return k;
  },
  quadraticIn: function (k) {
    return k * k;
  },
  quadraticOut: function (k) {
    return k * (2 - k);
  },
  quadraticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }
    return -0.5 * (--k * (k - 2) - 1);
  },
  cubicIn: function (k) {
    return k * k * k;
  },
  cubicOut: function (k) {
    return --k * k * k + 1;
  },
  cubicInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k + 2);
  },
  quarticIn: function (k) {
    return k * k * k * k;
  },
  quarticOut: function (k) {
    return 1 - --k * k * k * k;
  },
  quarticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k;
    }
    return -0.5 * ((k -= 2) * k * k * k - 2);
  },
  quinticIn: function (k) {
    return k * k * k * k * k;
  },
  quinticOut: function (k) {
    return --k * k * k * k * k + 1;
  },
  quinticInOut: function (k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k * k * k + 2);
  },
  sinusoidalIn: function (k) {
    return 1 - Math.cos((k * Math.PI) / 2);
  },
  sinusoidalOut: function (k) {
    return Math.sin((k * Math.PI) / 2);
  },
  sinusoidalInOut: function (k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  },
  exponentialIn: function (k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  },
  exponentialOut: function (k) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
  },
  exponentialInOut: function (k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1);
    }
    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
  },
  circularIn: function (k) {
    return 1 - Math.sqrt(1 - k * k);
  },
  circularOut: function (k) {
    return Math.sqrt(1 - --k * k);
  },
  circularInOut: function (k) {
    if ((k *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k * k) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
  },
  elasticIn: function (k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    return -(
      a *
      Math.pow(2, 10 * (k -= 1)) *
      Math.sin(((k - s) * (2 * Math.PI)) / p)
    );
  },
  elasticOut: function (k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    return (
      a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1
    );
  },
  elasticInOut: function (k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = (p * Math.asin(1 / a)) / (2 * Math.PI);
    }
    if ((k *= 2) < 1) {
      return (
        -0.5 *
        (a *
          Math.pow(2, 10 * (k -= 1)) *
          Math.sin(((k - s) * (2 * Math.PI)) / p))
      );
    }
    return (
      a *
        Math.pow(2, -10 * (k -= 1)) *
        Math.sin(((k - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    );
  },
  // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
  backIn: function (k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  backOut: function (k) {
    var s = 1.70158;
    return --k * k * ((s + 1) * k + s) + 1;
  },
  backInOut: function (k) {
    var s = 1.70158 * 1.525;
    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  // 创建弹跳效果
  bounceIn: function (k) {
    return 1 - easingFuncs.bounceOut(1 - k);
  },
  bounceOut: function (k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    } else {
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    }
  },
  bounceInOut: function (k) {
    if (k < 0.5) {
      return easingFuncs.bounceIn(k * 2) * 0.5;
    }
    return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  }
};
const N_POINT = 30;
const grids = [];
const xAxes = [];
const yAxes = [];
const series = [];
const titles = [];
let count = 0;
Object.keys(easingFuncs).forEach(function (easingName) {
  var easingFunc = easingFuncs[easingName];
  var data = [];
  for (var i = 0; i <= N_POINT; i++) {
    var x = i / N_POINT;
    var y = easingFunc(x);
    data.push([x, y]);
  }
  grids.push({
    show: true,
    borderWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowBlur: 2
  });
  xAxes.push({
    type: 'value',
    show: false,
    min: 0,
    max: 1,
    gridIndex: count
  });
  yAxes.push({
    type: 'value',
    show: false,
    min: -0.4,
    max: 1.4,
    gridIndex: count
  });
  series.push({
    name: easingName,
    type: 'line',
    xAxisIndex: count,
    yAxisIndex: count,
    data: data,
    showSymbol: false,
    animationEasing: easingName,
    animationDuration: 1000
  });
  titles.push({
    textAlign: 'center',
    text: easingName,
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal'
    }
  });
  count++;
});
var rowNumber = Math.ceil(Math.sqrt(count));
grids.forEach(function (grid, idx) {
  grid.left = ((idx % rowNumber) / rowNumber) * 100 + 0.5 + '%';
  grid.top = (Math.floor(idx / rowNumber) / rowNumber) * 100 + 0.5 + '%';
  grid.width = (1 / rowNumber) * 100 - 1 + '%';
  grid.height = (1 / rowNumber) * 100 - 1 + '%';
  titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
  titles[idx].top = parseFloat(grid.top) + '%';
});
option = {
  title: titles.concat([
    {
      text: 'Different Easing Functions',
      top: 'bottom',
      left: 'center'
    }
  ]),
  grid: grids,
  xAxis: xAxes,
  yAxis: yAxes,
  series: series
};
```

### 延时触发

`animationDelay`和`animationDelayUpdate`用于设置动画延迟开始的时间，通常我们会使用回调函数将不同数据设置不同的延时来实现交错动画的效果：

```js
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
  xAxisData.push('A' + i);
  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
option = {
  legend: {
    data: ['bar', 'bar2']
  },
  xAxis: {
    data: xAxisData,
    splitLine: {
      show: false
    }
  },
  yAxis: {},
  series: [
    {
      name: 'bar',
      type: 'bar',
      data: data1,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function(idx) {
        return idx * 10;
      }
    },
    {
      name: 'bar2',
      type: 'bar',
      data: data2,
      emphasis: {
        focus: 'series'
      },
      animationDelay: function(idx) {
        return idx * 10 + 100;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function(idx) {
    return idx * 5;
  }
};
```

## 动画的性能优化

在数据量特别大的时候，为图形应用动画可能会导致应用的卡顿，这个时候我们可以设置`animation: false`关闭动画。

对于数据量会动态变化的图表，我们**更推荐使用`animationThreshold`这个配置项，当画布中图形数量超过这个阈值的时候，ECharts 会自动关闭动画来提升绘制性能**。这个配置往往是一个经验值，通常 ECharts 的性能足够实时渲染上千个图形的动画（我们**默认值也是给了 2000**），但是如果你的图表很复杂，或者你的用户环境比较恶劣，页面中又同时会运行很多其它复杂的代码，也可以适当的下调这个值保证整个应用的流畅性。

## 监听动画结束

有时候我们想要获取当前渲染的结果，如果没有使用动画，我们在`setOption`之后 ECharts 就会直接执行渲染，**我们可以同步的通过`getDataURL`方法获取渲染得到的结果。**

```ts
const chart = echarts.init(dom);
chart.setOption({
  animation: false
  //...
});
// 可以直接同步执行
const dataUrl = chart.getDataURL();
```



但是如果图表中有动画，马上执行`getDataURL`得到的是动画刚开始的画面，而非最终展示的结果。因此我们需要知道动画结束然后再执行`getDataURL`得到结果。

假如你确定动画的时长，**一种比较简单粗暴的方式是根据动画时长来执行`setTimeout`延迟执行**：

```ts
chart.setOption({
  animationDuration: 1000
  //...
});
setTimeout(() => {
  const dataUrl = chart.getDataURL();
}, 1000);
```



或者我们**也可以使用 ECharts 提供的`rendered`事件来判断 ECharts 已经动画结束停止了渲染**

```ts
chart.setOption({
  animationDuration: 1000
  //...
});

function onRendered() {
  const dataUrl = chart.getDataURL();
  // ...
  // 后续如果有交互，交互发生重绘也会触发该事件，因此使用完就需要移除
  chart.off('rendered', onRendered);
}
chart.on('rendered', onRendered);
```



# 交互

## 拖拽的实现

本篇通过介绍一个实现拖拽的小例子来介绍如何在 Apache EChartsTM 中实现复杂的交互。

```

```

这个例子主要做到了这样一件事，用鼠标可以拖拽曲线的点，从而改变曲线的形状。例子很简单，但是有了这个基础我们还可以做更多的事情，比如在图中进行可视化得编辑。所以我们从这个简单的例子开始。

echarts 本身没有提供封装好的“拖拽改变图表”这样比较业务定制的功能。但是这个功能开发者可以通过 API 扩展实现。
