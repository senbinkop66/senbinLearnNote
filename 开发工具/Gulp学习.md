

# 介绍

## Gulp 是什么

Gulp 是 Web 开发中帮你自动完成任务的工具，基于Nodejs Stream流的批处理工具。

注意：Gulp只是被广泛用于前端构建工具使用，但是它的作用不仅仅只有这些；

- 启动 Web Server
- 当文件修改保存后，自动刷新浏览器
- 批量处理 Sass 或者 Less 文件
- babel转ES11高级版本到ES5
- 优化资源 CSS, JavaScript, 和 images

Gulp 能做的比以上更多。你甚至可以用 Gulp 创建一个静态站点生成器。

如果你先前将 gulp 安装到全局环境中了，请执行 `npm rm --global gulp` 将 gulp 删除再继续以下操作。更多信息请参考 [Sip](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)。

## Gulp 优点

将重复操作的事情，编写成任务，需要的时候，一条命令，就可以让任务自动化执行了，比如压缩文件，发布文件等。

Gulp 本身比较简单，我们学习的时候，重要培养自己下面两点的能力，这才是 Gulp 的核心。

- 如何制定一套合理、可配置、能够真正提升我们工作效率的构建流程
- 如何在需要某个功能时，能够快速找到最合适的那个插件，且能够快速使用

### 特点

Gulp的任务的两大特点

- 万事皆任务
- 基于Nodejs数据流

## Gulp 使用步骤

1. [Gulp 安装](https://www.axihe.com/npm/gulp/install.html)
2. [在项目根目录下创建 gulpfile.js](https://www.axihe.com/npm/gulp/gulpfiles.html)
3. 在gulpfile.js文件中编写任务
   - 通常是处理项目内的，一般是`src`目录内文件处理到`dist`目录内
   - 注意：gulp可以把系统人的任何文件处理到任何地方，
4. 运行gulp任务

# 安装

## 检查 node、npm 和 npx 是否正确安装

```bash
$node --version
v16.14.2

$npm --version
8.5.5

$npx --version
8.5.5
```

## 安装 gulp 命令行工具

```sh
npm install --global gulp-cli
```

## 创建项目目录并进入

```sh
npx mkdirp my-project
cd my-project
```

## 在项目目录下创建 package.json 文件

```sh
npm init
```

上述命令将指引你设置项目名、版本、描述信息等。

## 安装 gulp，作为开发时依赖项

```sh
npm install --save-dev gulp
```

## 检查 gulp 版本

```sh
gulp --version

CLI version: 2.3.0
Local version: 4.0.2
```

## 创建 gulpfile 文件

```
$ touch gulpfile.js
```

利用任何文本编辑器在项目大的根目录下创建一个名为 gulpfile.js 的文件，并在文件中输入以下内容：

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

## 测试

在项目根目录下执行 gulp 命令：

```sh
gulp
```

如需运行多个任务（task），可以执行 `gulp <task> <othertask>`。

## 输出结果

默认任务（task）将执行，因为任务为空，因此没有实际动作。

```bash
$ gulp
[22:19:11] Using gulpfile E:\pogject\gulp\my-project\gulpfile.js
[22:19:11] Starting 'default'...
[22:19:11] Finished 'default' after 11 ms
```

# JavaScript 和 Gulpfile

Gulp 允许你使用现有 JavaScript 知识来书写 gulpfile 文件，或者利用你所掌握的 gulpfile 经验来书写普通的 JavaScript 代码。虽然gulp 提供了一些实用工具来简化文件系统和命令行的操作，但是你所编写的其他代码都是纯 JavaScript 代码。

## Gulpfile 详解

gulpfile 是项目目录下名为 `gulpfile.js` （或者首字母大写 `Gulpfile.js`，就像 Makefile 一样命名）的文件，**在运行 `gulp` 命令时会被自动加载**。在这个文件中，你经常会看到类似 `src()`、`dest()`、`series()` 或 `parallel()` 函数之类的 gulp API，除此之外，纯 JavaScript 代码或 Node 模块也会被使用。**任何导出（export）的函数都将注册到 gulp 的任务（task）系统中**。

## Gulpfile 转译

你**可以使用需要转译的编程语言来书写 gulpfile 文件，例如 TypeScript 或 Babel**，通过修改 `gulpfile.js` 文件的扩展名来表明所用的编程语言并安装对应的转译模块。

- 对于 TypeScript，重命名为 `gulpfile.ts` 并安装 [ts-node](https://www.npmjs.com/package/ts-node) 模块。
- 对于 Babel，重命名为 `gulpfile.babel.js` 并安装 [@babel/register](https://www.npmjs.com/package/@babel/register) 模块。

针对此功能的高级知识和已支持的扩展名的完整列表，请参考 [gulpfile 转译](https://www.gulpjs.com.cn/docs/documentation-missing) 文档。

## Gulpfile 分割

大部分用户起初是将所有业务逻辑都写到一个 gulpfile 文件中。随着文件的变大，可以将此文件重构为数个独立的文件。

**每个任务（task）可以被分割为独立的文件，然后导入（import）到 gulpfile 文件中并组合**。这不仅使事情变得井然有序，而且可以对每个任务（task）进行单独测试，或者根据条件改变组合。

Node 的模块解析功能允许你将 `gulpfile.js`' 文件替换为同样命名为 `gulpfile.js` 的目录，该目录中包含了一个名为 `index.js` 的文件，该文件被当作 `gulpfile.js` 使用。并且，该目录中还可以包含各个独立的任务（task）模块。

# 创建任务（task）

**每个 gulp 任务（task）都是一个异步的 JavaScript 函数**，此函数是一个可以接收 callback 作为参数的函数，或者是一个返回 stream、promise、event emitter、child process 或 observable ([后面会详细讲解](https://www.gulpjs.com.cn/docs/getting-started/async-completion)) 类型值的函数。由于某些平台的限制而不支持异步任务，因此 gulp 还提供了一个漂亮 [替代品](https://www.gulpjs.com.cn/docs/getting-started/async-completion#using-async-await)。

## 导出任务

任务（tasks）可以是 **public（公开）** 或 **private（私有）** 类型的。

- **公开任务（Public tasks）** 从 gulpfile 中被导出（export），可以通过 `gulp` 命令直接调用。
- **私有任务（Private tasks）** 被设计为在内部使用，通常作为 `series()` 或 `parallel()` 组合的组成部分。

一个私有（private）类型的任务（task）在外观和行为上和其他任务（task）是一样的，但是不能够被用户直接调用。**如需将一个任务（task）注册为公开（public）类型的，只需从 gulpfile 中导出（export）即可。**

```js
const { series } = require('gulp');

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
function clean(cb) {
  // body omitted
  cb();
}

// `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
// 它也仍然可以被用在 `series()` 组合中。
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);
```

```bash
$ gulp --tasks
[08:48:42] Tasks for E:\pogject\gulp\my-project\gulpfile.js
[08:48:42] ├── bulid
[08:48:42] └─┬ default
[08:48:42]   └─┬ <series>
[08:48:42]     ├── clean
[08:48:42]     └── bulid

```

> *在以前的 gulp 版本中，*`task()` *方法用来将函数注册为任务（task）。虽然这个 API 依旧是可以使用的，但是 导出（export）将会是主要的注册机制，除非遇到 export 不起作用的情况。*

## 组合任务

Gulp 提供了两个强大的组合方法： `series()` 和 `parallel()`，**允许将多个独立的任务组合为一个更大的操作**。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。`series()` 和 `parallel()` **可以互相嵌套至任意深度**。

如果需要让任务（task）**按顺序执行**，请使用 `series()` 方法。

```js
const { series } = require('gulp');

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle);
```

```bash
$ gulp --tasks
[08:51:33] Tasks for E:\pogject\gulp\my-project\gulpfile.js
[08:51:33] └─┬ build
[08:51:33]   └─┬ <series>
[08:51:33]     ├── transpile
[08:51:33]     └── bundle

```

