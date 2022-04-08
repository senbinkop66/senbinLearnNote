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