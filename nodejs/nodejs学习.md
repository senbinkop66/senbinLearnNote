# 介绍

Node.js是运行在服务端的JavaScript。

Node.js是一个基于Chrome JavaScript运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

## Node.js 简介

Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！

Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使 Node.js 表现得非常出色。

Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。

当 Node.js 执行 I/O 操作时（例如从网络读取、访问数据库或文件系统），Node.js 会在响应返回时恢复操作，而不是阻塞线程并浪费 CPU 循环等待。

这使 Node.js 可以在一台服务器上处理数千个并发连接，而无需引入管理线程并发的负担（这可能是重大 bug 的来源）。

Node.js 具有独特的优势，因为为浏览器编写 JavaScript 的数百万前端开发者现在除了客户端代码之外还可以编写服务器端代码，而无需学习完全不同的语言。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为不必等待所有用户更新其浏览器，你可以通过更改 Node.js 版本来决定要使用的 ECMAScript 版本，并且还可以通过运行带有标志的 Node.js 来启用特定的实验中的特性。

## Node.js 与浏览器的区别

浏览器和 Node.js 均使用 JavaScript 作为其编程语言。

构建运行于浏览器中的应用程序与构建 Node.js 应用程序完全不同。

尽管都是 JavaScript，但一些关键的差异使体验相当不同。

从广泛使用 JavaScript 的前端开发者的角度来看，Node.js 应用程序具有巨大的优势：使用单一语言轻松编程所有一切（前端和后端）。

你会拥有巨大的机会，因为全面、深入地学习一门编程语言并通过使用同一语言完成 web（无论是在客户端还是在服务器）上的所有工作是非常困难的，你会处于独特的优势地位。

不同的还有生态系统。

在浏览器中，大多数时候做的是与 DOM 或其他 Web 平台 API（例如 Cookies）进行交互。 当然，那些在 Node.js 中是不存在的。 没有浏览器提供的 document、window、以及所有其他的对象。

而且在浏览器中，不存在 Node.js 通过其模块提供的所有不错的 API，例如文件系统访问功能。

另一个很大的不同是，在 Node.js 中，可以控制运行环境。 除非构建的是任何人都可以在任何地方部署的开源应用程序，否则你能知道会在哪个版本的 Node.js 上运行该应用程序。 与浏览器环境（你无法选择访客会使用的浏览器）相比起来，这非常方便。

这意味着可以编写 Node.js 版本支持的所有现代的 ES6-7-8-9 JavaScript。

由于 JavaScript 发展的速度非常快，但是浏览器发展得慢一些，并且用户的升级速度也慢一些，因此有时在 web 上，不得不使用较旧的 JavaScript / ECMAScript 版本。

可以使用 Babel 将代码转换为与 ES5 兼容的代码，再交付给浏览器，但是在 Node.js 中，则不需要这样做。

另一个区别是 Node.js 使用 CommonJS 模块系统，而在浏览器中，则还正在实现 ES 模块标准。

在实践中，这意味着在 Node.js 中使用 require()，而在浏览器中则使用 import。



## V8 JavaScript 引擎

### **V8**

V8 是为 Google Chrome 提供支持的 JavaScript 引擎的名称。 当使用 Chrome 进行浏览时，它负责处理并执行 JavaScript。

V8 提供了执行 JavaScript 的运行时环境。 DOM 和其他 Web 平台 API 则由浏览器提供。

很酷的是，JavaScript 引擎独立于托管它的浏览器。 此关键的特性推动了 Node.js 的兴起。 V8 于 2009 年被选为为 Node.js 提供支持的引擎，并且随着 Node.js 的爆炸性发展，V8 成为了现在为大量的服务器端代码（使用 JavaScript 编写）提供支持的引擎。

Node.js 的生态系统非常庞大，得益于此，V8 还为桌面应用程序（通过 Electron 等项目）提供支持。



### **其他 JS 引擎**

其他浏览器也有自己的 JavaScript 引擎：

- Firefox 具有 [**SpiderMonkey**](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
- Safari 具有 [**JavaScriptCore**](https://developer.apple.com/documentation/javascriptcore)（又称为 Nitro）
- Edge 最初基于 [**Chakra**](https://github.com/Microsoft/ChakraCore)，但最近使用 [Chromium 和 V8 引擎进行了重建](https://support.microsoft.com/en-us/help/4501095/download-the-new-microsoft-edge-based-on-chromium)。

还有很多其他的。

所有这些引擎都实现了 [ECMA ES-262 标准](https://www.ecma-international.org/publications/standards/Ecma-262.htm)（又称为 ECMAScript），这是 JavaScript 使用的标准。

 

### **对性能的追求**

V8 使用 C++ 编写，并且不断地被改进。 它是可移植的，且可运行于 Mac、Windows、Linux 和其他一些系统。

在此 V8 的介绍中，省略了 V8 的实现细节：可以去更具权威性的网站（例如 [V8 官方网站](https://v8.dev/)）上查看。

与其他 JavaScript 引擎一样，V8 也在不断地发展以加速 Web 和 Node.js 的生态系统。

在 web 上，性能竞赛一直持续了很多年，作为用户和开发者从这场竞争中受益匪浅，因为年复一年地获得了更快、更优化的机器。

### **编译**

JavaScript 通常被认为是一门解释型的语言，但是现代的 JavaScript 引擎不再只是解释 JavaScript，也会对其进行编译。

这从 2009 年开始就一直在发生，当时 SpiderMonkey JavaScript 编译器被添加到 Firefox 3.5 中，所有人都跟进了这个想法。

JavaScript 是由 V8 在其内部编译的，使用了**即时**（JIT）**编译**以加快执行速度。

自 2004 年 Google 地图的引入以来，JavaScript 已经从一门通常执行几十行代码的语言演变为能在浏览器中运行具有成千上万行代码的完整的应用程序。

现在，应用程序可以在浏览器中运行数小时，而不仅仅是一些表单验证规则或简单的脚本。

在这个新世界中，编译 JavaScript 非常有意义，因为尽管可能需要多花费一点时间来为 JavaScript 做准备，但是一旦完成，则它会比纯解释型的代码具有更高的性能。

----

# 安装

## Node.js 安装配置

Node.js 安装包及源码下载地址为：https://nodejs.org/en/download/。

## 查看版本

```bash
$ node -v
v16.14.2
```

## 配置sublime text运行node.js

```json
nodejs.sublime-build
{
	"cmd": ["node", "$file"],
	"selector": "source.js"
}
```



## 运行Node.js程序

### 脚本模式

以下是我们的第一个Node.js程序：

```js
console.log("Hello World");
```

保存该文件，文件名为helloworld.js，并通过node命令来执行：

```bash
node helloworld.js
```

程序执行后，正常的话，就会在终端输出Hello World。

### 交互模式

打开终端，键入node进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：

```bash
$ node
> console.log('Hello World!');
Hello World!
```

---

# Node.js 创建第一个应用

Node.js 非常强大，只需动手写几行代码就可以构建出整个HTTP服务器。事实上，我们的Web应用以及对应的Web服务器基本上是一样的。

在我们创建Node.js第一个"Hello, World!"应用前，让我们先了解下Node.js应用是由哪几部分组成的：

1. 引入模块(required)：我们可以使用require指令来载入Node.js模块。
2. **创建服务器：**服务器可以监听客户端的请求，类似于Apache 、Nginx等HTTP服务器。
3. **接收请求与响应请求**：服务器很容易创建，客户端可以使用浏览器或终端发送HTTP请求，服务器接收请求后返回响应数据。

```js
//server.js的文件代码如下

//我们使用require指令来载入http模块，并将实例化的HTTP赋值给变量http
const http=require("http");

/*接下来我们使用http.createServer()方法创建服务器，并使用listen方法绑定8888端口。 函数通过request, response参数来接收和响应数据。*/

http.createServer(function(request,response){
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	// 发送响应数据 "Hello World"
	response.end("Hello World!");
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
```

以上代码我们完成了一个可以工作的HTTP服务器。

**分析Node.js的HTTP服务器：**

- 第一行请求（require）Node.js自带的 http 模块，并且把它赋值给http变量。
- 接下来我们调用http模块提供的函数：createServer 。这个函数会返回 一个对象，这个对象有一个叫做listen的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。

之后在执行下面的命令既可：

```bash
$ node test1.js
Server running at http://127.0.0.1:8888/
```

接下来，打开浏览器访问http://127.0.0.1:8888/，你会看到一个写着"Hello World"的网页。

----

# npm 包管理器

## **npm 包管理器简介**

**npm 简介**

npm 是 Node.js 标准的软件包管理器。

在 2017 年 1 月时，npm 仓库中就已有超过 350000 个软件包，这使其成为世界上最大的单一语言代码仓库，并且可以确定几乎有可用于一切的软件包。

它起初是作为下载和管理 Node.js 包依赖的方式，但其现在也已成为前端 JavaScript 中使用的工具。

npm 有很多功能。

[**Yarn**](https://yarnpkg.com/en/) *是 npm 的一个替代选择。*



NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入**`npm -v`**来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```bash
$ npm -v
8.5.5
```

如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：

```bash
$ sudo npm install npm -g
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm@2.14.2 /usr/local/lib/node_modules/npm
```

如果是 Window 系统使用以下命令即可：

```bash
$ npm install npm -g

removed 6 packages, changed 69 packages, and audited 202 packages in 5s

11 packages are looking for funding
  run `npm fund` for details

```

> 使用淘宝镜像的命令：
>
> ```bash
> npm install -g cnpm --registry=https://registry.npm.taobao.org
> ```

## 安装模块

npm 可以管理项目依赖的下载。

### **安装所有依赖**

如果项目具有 package.json 文件，则通过运行：

```bash
$ npm install
```

它会在 node_modules 文件夹（如果尚不存在则会创建）中安装项目所需的所有东西。

### 使用 npm 命令安装模块

npm 安装 Node.js 模块语法格式如下：

```bash
$ npm install <Module Name>
```

以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:

```bash
$ npm install express
```

安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。

```js
var express = require('express');
```

### 安装单个软件包

也可以通过运行以下命令安装特定的软件包：

```bash
npm install <package-name>
```

通常会在此命令中看到更多标志：

- --save 安装并添加条目到 package.json 文件的     dependencies。
- --save-dev 安装并添加条目到 package.json 文件的     devDependencies。

区别主要是，**devDependencies 通常是开发的工具**（例如测试的库），**而 dependencies 则是与生产环境中的应用程序相关**。

### 全局安装与本地安装 

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

```bash
npm install express          # 本地安装
npm install express -g   # 全局安装
```

如果出现以下错误：

```bash
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```

解决办法为：

```bash
$ npm config set proxy null
```

#### 本地安装

- 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
- 可以通过 require() 来引入本地安装的包。

#### 全局安装

- 将安装包放在 /usr/local 下或者你 node 的安装目录。
- 可以直接在命令行里使用。

如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。

接下来我们使用全局方式安装 express

```bash
$ cnpm install express -g
```

安装过程输出如下内容，第一行输出了模块的版本号及安装位置。

```bash
$ cnpm install express -g
Downloading express to C:\Users\1111\AppData\Roaming\npm\node_modules\express_tmp
Copying C:\Users\1111\AppData\Roaming\npm\node_modules\express_tmp\_express@4.18.1@express to C:\Users\1111\AppData\Roaming\npm\node_modules\express
Installing express's dependencies to C:\Users\1111\AppData\Roaming\npm\node_modules\express/node_modules
[1/31] array-flatten@1.1.1 installed at node_modules\_array-flatten@1.1.1@array-flatten
[2/31] content-type@~1.0.4 installed at node_modules\_content-type@1.0.4@content-type
[3/31] cookie-signature@1.0.6 installed at node_modules\_cookie-signature@1.0.6@cookie-signature

```

### 查看安装信息

你可以使用以下命令来查看所有全局安装的模块：

```bash
$ npm list -g
C:\Users\1111\AppData\Roaming\npm
├── @angular/cli@13.3.0
├── cnpm@7.1.1
├── express@4.18.1
├── gulp-cli@2.3.0
├── npm@8.8.0
└── typescript@4.6.3

```

如果要查看某个模块的版本号，可以使用命令如下：

```bash
$ npm list express
nodejs@ E:\pogject\nodejs
└── express@4.18.1

1111@DESKTOP-RE2QT69 MINGW64 /e/pogject/nodejs (master)
$ npm list express -g
C:\Users\1111\AppData\Roaming\npm
└── express@4.18.1

```

## 使用 package.json

package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json 内容：

```json
{
  "name": "express",
  "description": "Fast, unopinionated, minimalist web framework",
  "version": "4.18.1",
  "author": "TJ Holowaychuk <tj@vision-media.ca>",
  "contributors": [
    "Aaron Heckmann <aaron.heckmann+github@gmail.com>",
    "Ciaran Jessup <ciaranj@gmail.com>",
    "Douglas Christopher Wilson <doug@somethingdoug.com>",
    "Guillermo Rauch <rauchg@gmail.com>",
    "Jonathan Ong <me@jongleberry.com>",
    "Roman Shtylman <shtylman+expressjs@gmail.com>",
    "Young Jae Sim <hanul@hanul.me>"
  ],
    ...
 }
```

### Package.json 属性说明

- name - 包名。
- version - 包的版本号。
- description - 包的描述。
- homepage - 包的官网 url 。
- author - 包的作者姓名。
- contributors - 包的其他贡献者姓名。
- dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
- repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
- main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
- keywords - 关键字

## 卸载模块

我们可以使用以下命令来卸载 Node.js 模块。

```bash
$ npm uninstall express
```

卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：

```bash
$ npm ls
nodejs@ E:\pogject\nodejs
├── echarts@5.3.2
├── express@4.18.1
└── lodash@4.17.21
```

## 更新模块

我们可以使用以下命令更新模块：

```bash
$ npm update express
```

通过运行以下命令，更新也变得很容易：

```bash
npm update
```

npm 会检查所有软件包是否有满足版本限制的更新版本。

也可以指定单个软件包进行更新：

```bash
npm update <package-name>
```



## 搜索模块

使用以下来搜索模块：

```bash
$ npm search express
```

## 创建模块

创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs) senbin
version: (1.0.0)
description: test
entry point: (test1.js)
test command: make test
git repository: (https://github.com/senbinkop66/nodejs.git)
keywords: kop
author: senbinkop66
license: (ISC)
About to write to E:\pogject\nodejs\package.json:

{
  "dependencies": {
    "echarts": "^5.3.2",
    "express": "^4.18.1",
    "lodash": "^4.17.21"
  },
  "name": "senbin",
  "version": "1.0.0",
  "description": "test",
  "main": "test1.js",
  "devDependencies": {},
  "scripts": {
    "test": "make test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/senbinkop66/nodejs.git"
  },
  "keywords": [
    "kop"
  ],
  "author": "senbinkop66",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/senbinkop66/nodejs/issues"
  },
  "homepage": "https://github.com/senbinkop66/nodejs#readme"
}


Is this OK? (yes) yes

```

以上的信息，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。

接下来我们可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）：

```bash
$ npm adduser
npm notice Log in on https://registry.npmjs.org/
Username: senbinkop66
Password: ....
Email: (this IS public) @qq.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password: 66666666
Logged in as senbinkop66 on https://registry.npmjs.org/.

```

接下来我们就用以下命令来发布模块：

```bash
$ npm publish
npm notice
npm notice 📦  senbin@1.0.0
npm notice === Tarball Contents ===
npm notice 168B  data/test1.txt
npm notice 34B   data/test2.txt
npm notice 23B   data/text2.txt
npm notice 578B  package.json
npm notice 664B  test1.js
npm notice 1.8kB testAsyncandAwait.js
npm notice 822B  testBuffer.js
npm notice 463B  testEventloop.js
npm notice 1.4kB testEvents.js
npm notice 666B  testExports.js
npm notice 4.8kB testFile.js
npm notice 440B  testGetArgFromCommendLine.js
npm notice 2.7kB testHttpServer.js
npm notice 89B   testNPM.js
npm notice 1.3kB testOS.js
npm notice 999B  testOutput.js
npm notice 2.5kB testPromise.js
npm notice 3.2kB testStream.js
npm notice 543B  testTypeScript.ts
npm notice === Tarball Details ===
npm notice name:          senbin
npm notice version:       1.0.0
npm notice filename:      senbin-1.0.0.tgz
npm notice package size:  8.2 kB
npm notice unpacked size: 23.2 kB
npm notice shasum:        d3025f4451235e2018852727777c0e7b0774b322
npm notice integrity:     sha512-voqXL1QkgT2wM[...]xSsqBA/JkuIog==
npm notice total files:   19
npm notice
npm notice Publishing to https://registry.npmjs.org/
+ senbin@1.0.0

```

如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装。

使用

```bash
npm unpublish <package>@<version>
```

可以撤销发布自己发布过的某个版本代码。

## 版本号

使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复bug，需要更新Z位。
- 如果是新增了功能，但是向下兼容，需要更新Y位。
- 如果有大变动，向下不兼容，需要更新X位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

NPM支持的所有版本号范围指定方式可以查看[官方文档](https://npmjs.org/doc/files/package.json.html#dependencies)。

## NPM 常用命令

除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。

除了可以在[npmjs.org/doc/](https://npmjs.org/doc/)查看官方文档外，这里再介绍一些NPM常用命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

- NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
- 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
- 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
- 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
- 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
- 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
- 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

## **版本控制**

除了简单的下载外，npm 还可以管理版本控制，因此可以指定软件包的任何特定版本，或者要求版本高于或低于所需版本。

很多时候，一个库仅与另一个库的主版本兼容。或者，一个库的最新版本中有一个缺陷（仍未修复）引起了问题。

指定库的显式版本还有助于使每个人都使用相同的软件包版本，以便整个团队运行相同的版本，直至 package.json 文件被更新。

在所有这些情况中，版本控制都有很大的帮助，npm 遵循语义版本控制标准。

## **运行任务**

package.json 文件支持一种用于指定命令行任务（可通过使用以下方式运行）的格式：

```bash
npm run <task-name>
```

例如：

```json
{"scripts":{"start-dev":"node lib/server-development","start":"node lib/server-production"},}
```

使用此特性运行 Webpack 是很常见的：

```js
{"scripts":{"watch":"webpack --watch --progress --colors --config webpack.conf.js","dev":"webpack --progress --colors --config webpack.conf.js","prod":"NODE_ENV=production webpack -p --config webpack.conf.js",},}
```

因此可以运行如下，而不是输入那些容易忘记或输入错误的长命令：

```bash
$ npm run watch
 $ npm run dev
 $ npm run prod
```



## **npm 将软件包安装到哪里**

当使用 npm 安装软件包时，可以执行两种安装类型：

- 本地安装
- 全局安装

默认情况下，当输入 npm install 命令时，例如：

```
npm install lodash
```

软件包会被安装到当前文件树中的 node_modules 子文件夹下。

在这种情况下，npm 还会在当前文件夹中存在的 package.json 文件的 dependencies 属性中添加 lodash 条目。

使用 -g 标志可以执行全局安装：

```
npm install-g lodash
```

在这种情况下，npm 不会将软件包安装到本地文件夹下，而是使用全局的位置。

全局的位置到底在哪里？

npm root -g 命令会告知其在计算机上的确切位置。

```bash
$ npm root -g
C:\Users\1111\AppData\Roaming\npm\node_modules
```

但是，如果使用 nvm 管理 Node.js 版本，则该位置会有所不同。

例如，使用 nvm，则软件包的位置可能为 /Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules。

----

# Node.js REPL(交互式解释器)

Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。

REPL 的交互式的编程环境可以实时的验证你所编写的代码，非常适合于验证 Node.js 和 JavaScript 的相关 API。

Node 自带了交互式解释器，可以执行以下任务：

- **读取** - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
- **执行** - 执行输入的数据结构
- **打印** - 输出结果
- **循环** - 循环操作以上步骤直到用户两次按下 **ctrl-c** 按钮退出。

Node 的交互式解释器可以很好的调试 Javascript 代码。

开始学习 REPL

我们可以输入以下命令来启动 Node 的终端：

```bash
$ node
Welcome to Node.js v16.14.2.
Type ".help" for more information.
>

```

这时我们就可以在 > 后输入简单的表达式，并按下回车键来计算结果。

## REPL 命令

- **ctrl + c** - 退出当前终端。
- **ctrl + c 按下两次** - 退出 Node REPL。
- **ctrl + d** - 退出 Node REPL.
- **向上/向下 键** - 查看输入的历史命令
- **tab 键** - 列出当前命令
- **.help** - 列出使用命令
- **.break** - 退出多行表达式
- **.clear** - 退出多行表达式
- **.save \*filename\*** - 保存当前的 Node REPL 会话到指定文件
- **.load \*filename\*** - 载入当前 Node REPL 会话的文件内容。

```bash
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL

```

## 停止 REPL

前面我们已经提到按下两次 **ctrl + c** 建就能退出 REPL:

---

# Node.js 回调函数

Node.js 异步编程的直接体现就是回调。

异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

回调函数一般作为函数的最后一个参数出现：

```js
function foo1(name, age, callback) { }
function foo2(value, callback1, callback2) { }
```

## 阻塞代码实例

创建一个文件input.txt ，内容如下：

```
Node.js 异步编程的直接体现就是回调
```

创建 main.js 文件, 代码如下：

```js
const fs=require("fs");

var data=fs.readFileSync("./data/input.txt");

console.log(data.toString());
console.log("程序执行结束!");
```

```
$ node main.js
Node.js 异步编程的直接体现就是回调
程序执行结束!
```

## 非阻塞代码实例

创建 main.js 文件, 代码如下：

```js
const fs=require("fs");

fs.readFile("./data/input.txt",function(err,data){
	if (err) {
		console.error(err);
	}
	console.log(data.toString());
});

console.log("程序执行结束!");
```

```bash
$ node main.js
程序执行结束!
Node.js 异步编程的直接体现就是回调
```

以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。 第二个实例我们呢不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。

因此，阻塞按是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。

----

# Node.js 事件循环

Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。

Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。

Node.js 基本上所有的事件机制都是用设计模式中**观察者模式**实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

## 事件驱动程序

Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。



![img](E:\pogject\学习笔记\image\js\Node.js 事件循环)

整个事件驱动的流程就是这么实现的，非常简洁。有点类似于观察者模式，事件相当于一个主题(Subject)，而所有注册到这个事件上的处理函数相当于观察者(Observer)。

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

以下程序绑定事件处理程序：

```js
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
```

我们可以通过程序触发事件：

```js
// 触发事件
eventEmitter.emit('eventName');
```

### 实例

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

// 创建事件处理程序
var connectHandler=function(){
	console.log("连接成功！");
	// 触发 data_received 事件 
	eventEmitter.emit("data_received");
}

// 绑定 connection 事件处理程序
eventEmitter.on("connection",connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received",function(){
	console.log("数据接收成功！");
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```

```bash
$ node main.js
连接成功！
数据接收成功！
程序执行完毕。
```



## Node 应用程序是如何工作的？

在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

接下来让我们来重新看下前面的实例，创建一个 input.txt ,文件内容如下：

```
Node.js 异步编程的直接体现就是回调
```

创建 main.js 文件，代码如下：

```js
const fs=require("fs");

fs.readFile("./data/input.txt",function(err,data){
	if (err) {
		console.error(err.stack);
		return;
	}
	console.log(data.toString());
});

console.log("程序执行结束!");
```

以上程序中 fs.readFile() 是异步函数用于读取文件。 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。

执行以上代码，执行结果如下：

```bash
$ node main.js
程序执行结束!
Node.js 异步编程的直接体现就是回调

```

接下来我们更改为 input2.txt 文件，执行结果如下所示：

```bash
$ node main.js
程序执行结束!
Error: ENOENT: no such file or directory, open 'E:\pogject\nodejs\data\input2.txt'
```

---

# Node.js EventEmitter

Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js 里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。 

## EventEmitter 类

events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是**事件触发**与**事件监听器**功能的封装。

你可以通过require("events");来访问该模块。

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。

事件监听器返回及使用以下事件：

- 当监听器被添加时返回 `newListener`。
- 当监听器被移除时返回 `removeListener`。

下面我们用一个简单的例子说明 EventEmitter 的用法：

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();


// 绑定事件处理程序
eventEmitter.on("some_event",function(){
	console.log("some_event 事件触发");
});

setTimeout(function(){
	eventEmitter.emit("some_event");
},1000);

console.log("程序运行结束！");
```

执行结果如下：

运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。

```bash
$ node main.js
程序运行结束！
some_event 事件触发
```

EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

让我们以下面的例子解释这个过程：

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();


// 绑定事件处理程序
eventEmitter.on("some_event",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});
eventEmitter.on("some_event",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});

eventEmitter.emit("some_event","参数1","参数2");

```

执行以上代码，运行的结果如下：

```bash
$ node main.js
listener1 参数1 参数2
listener2 参数1 参数2

```

以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。

运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。

EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

## 常用的方法

### addListener(event, listener)

为指定事件添加一个监听器到监听器数组的尾部。`emitter.on()` 的别名。

### on(event, listener)

为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

### emit(event, [arg1], [arg2], [...])

触发事件。 按照事件被注册的顺序同步地调用每个事件监听器。如果事件有注册监听返回 true，否则返回 false。

### `emitter.eventNames()`

返回字符串（表示在当前 `EventEmitter` 对象上注册的事件）数组

### `emitter.getMaxListeners()`

获取可以添加到 `EventEmitter` 对象的监听器的最大数量（默认为 10，但可以使用 `setMaxListeners()` 进行增加或减少）。

### `emitter.setMaxListeners()`

默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于改变监听器的默认限制的数量。。

```js
door.setMaxListeners(50)
```

### `emitter.listenerCount()`

获取作为参数传入的事件监听器的计数：

```js
door.listenerCount('open')

events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
events.emitter.listenerCount(eventName) //推荐
```

### `emitter.listeners(event)`

返回指定事件的监听器数组。获取作为参数传入的事件监听器的数组：

```js
door.listeners('open')
```

### `emitter.off()`

`emitter.removeListener()` 的别名，新增于 Node.js 10。

### `emitter.removeListener()`

移除特定的监听器。 可以通过将回调函数保存到变量中（当添加时），以便以后可以引用它：

```js
const doSomething = () => {}
door.on('open', doSomething)
door.removeListener('open', doSomething)
```

### `emitter.removeAllListeners()`

移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

它接受两个参数，第一个是事件名称，第二个是回调函数名称

```js
door.removeAllListeners('open')
```

### `emitter.once()`

为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 该回调只会被调用一次，不会再被调用。

```js
const EventEmitter = require('events')
const ee = new EventEmitter()
ee.once('my-event', () => {  
    //只调用一次回调函数。
})
```

### `emitter.prependListener()`

当使用 `on` 或 `addListener` 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 `prependListener` 则可以在其他监听器之前添加并调用。

### `emitter.prependOnceListener()`

当使用 `once` 添加监听器时，监听器会被添加到监听器队列中的最后一个，并且最后一个被调用。 使用 `prependOnceListener` 则可以在其他监听器之前添加并调用。

---

```js
//以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。

// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

// 监听器 #1
var listener1=function (){
	console.log("监听器 listener1 执行");
}
// 监听器 #2
var listener2=function (){
	console.log("监听器 listener2 执行");
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.on("connection",listener1);
// 绑定 connection 事件，处理函数为 listener2 
eventEmitter.on("connection",listener2);

var eventListeners=eventEmitter.listenerCount("connection");
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener("connection",listener1);

console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");
```

```bash
$ node main.js
2 个监听器监听连接事件。
监听器 listener1 执行
监听器 listener2 执行
listener1 不再受监听。
监听器 listener2 执行
1 个监听器监听连接事件。
程序执行完毕。

```

---

## error 事件

EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

```js
// 引入 events 模块
const events=require("events");

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

eventEmitter.emit("error");
```

运行时会显示以下错误：

```bash
$ node main.js
node:events:517
    throw err; // Unhandled 'error' event
    ^

Error [ERR_UNHANDLED_ERROR]: Unhandled error. (undefined)
?[90m    at new NodeError (node:internal/errors:371:5)?[39m
?[90m    at EventEmitter.emit (node:events:515:17)?[39m
    at Object.<anonymous> (E:\pogject\nodejs\main.js:7:14)
?[90m    at Module._compile (node:internal/modules/cjs/loader:1103:14)?[39m
?[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)?[39m
?[90m    at Module.load (node:internal/modules/cjs/loader:981:32)?[39m
?[90m    at Function.Module._load (node:internal/modules/cjs/loader:822:12)?[39m
?[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)?[39m
?[90m    at node:internal/main/run_main_module:17:47?[39m {
  code: ?[32m'ERR_UNHANDLED_ERROR'?[39m,
  context: ?[90mundefined?[39m
}

```



## 继承 EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，**只要是支持事件响应的核心模块都是 EventEmitter 的子类。**

为什么要这样做呢？原因有两点：

- 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。
- 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

----

# Node.js Buffer(缓冲区)

JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

>  在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。

## Buffer 与字符编码

Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

```js
const buf=Buffer.from("senbinkop66","ascii");

console.log(buf.toString("hex"));  //73656e62696e6b6f703636
console.log(buf.toString("base64"));  //c2VuYmlua29wNjY=
```

Node.js 目前支持的字符编码包括：

- ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
- utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
- utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
- ucs2 - utf16le 的别名。
- base64 - Base64 编码。
- latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
- binary - latin1 的别名。
- hex - 将每个字节编码为两个十六进制字符。

## 创建 Buffer 类

Buffer 提供了以下 API 来创建 Buffer 类：

- Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
- Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
- Buffer.allocUnsafeSlow(size)
- Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
- Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
- Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
- Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

```js
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);  

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
```

## 写入缓冲区

语法

写入 Node 缓冲区的语法如下所示：

```
buf.write(string[, offset[, length]][, encoding])
```

参数

参数描述如下：

- string - 写入缓冲区的字符串。
- offset - 缓冲区开始写入的索引值，默认为 0 。
- length - 写入的字节数，默认为 buffer.length
- encoding - 使用的编码。默认为 'utf8' 。

根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 

返回值

返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

实例

```js
const buf = Buffer.alloc(256);

let len=buf.write("senbinkop66")

console.log("写入字节数："+len);  //写入字节数：11
```

## 从缓冲区读取数据

语法

读取 Node 缓冲区数据的语法如下所示：

```
buf.toString([encoding[, start[, end]]])
```

参数

参数描述如下：

- encoding - 使用的编码。默认为 'utf8' 。
- start - 指定开始读取的索引位置，默认为 0。
- end - 结束位置，默认为缓冲区的末尾。

返回值

解码缓冲区数据并使用指定的编码返回字符串。

实例

```js
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde
console.log(buf.toString("hex",0,5));  	 	//使用 'hex' 编码, 并输出:  6162636465
```

## 将 Buffer 转换为 JSON 对象

语法

将 Node Buffer 转换为 JSON 对象的函数语法格式如下：

```
buf.toJSON()
```

当字符串化一个 Buffer 实例时，[JSON.stringify()](https://www.runoob.com/js/javascript-json-stringify.html) 会隐式地调用该 toJSON()。

返回值

返回 JSON 对象。

实例

```js
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);

let json=JSON.stringify(buf);
console.log(json);  //{"type":"Buffer","data":[1,2,3,4,5]}

const copy=JSON.parse(json,(key,value)=>{
	return value && value.type==="Buffer" ? Buffer.from(value.data) : value;
});

console.log(copy);  //<Buffer 01 02 03 04 05>
```

## 缓冲区合并

语法

Node 缓冲区合并的语法如下所示：

```
Buffer.concat(list[, totalLength])
```

参数

参数描述如下：

- list - 用于合并的 Buffer 对象数组列表。
- totalLength - 指定合并后Buffer对象的总长度。

返回值

返回一个多个成员合并的新 Buffer 对象。

实例

```js
const buf1 = Buffer.from("senbin");
const buf2 = Buffer.from("kop66");

const buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());  //senbinkop66

```

## 缓冲区比较

语法

Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：

```
buf.compare(otherBuffer);
```

参数

参数描述如下：

- otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

返回值

返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

实例

```js
const buf1 = Buffer.from("senbin");
const buf2 = Buffer.from("senbinkop66");

let result = buf1.compare(buf2);

if (result<0) {
	console.log(buf1+" 在 "+buf2+" 之前");
}else if (result===0){
	console.log(buf1+" 与 "+buf2+" 相同");
}else{
	console.log(buf1+" 在 "+buf2+" 之后");
}

//senbin 在 senbinkop66 之前
```

## 拷贝缓冲区

语法

Node 缓冲区拷贝语法如下所示：

```
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```

参数

参数描述如下：

- targetBuffer - 要拷贝的 Buffer 对象。
- targetStart - 数字, 可选, 默认: 0
- sourceStart - 数字, 可选, 默认: 0
- sourceEnd - 数字, 可选, 默认: buffer.length

返回值

没有返回值。

实例

```js
const buf1 = Buffer.from("senbin");
const buf2 = Buffer.from("kop66");

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1,3);

console.log(buf1.toString());  //senkop
```

## 缓冲区裁剪

Node 缓冲区裁剪语法如下所示：

```
buf.slice([start[, end]])
```

参数

参数描述如下：

- start - 数字, 可选, 默认: 0
- end - 数字, 可选, 默认: buffer.length

返回值

返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

实例

```js
const buf1 = Buffer.from("senbinkop66");

const buf2 = buf1.slice(0,6);

console.log(buf2.toString());  //senbin
```

## 缓冲区长度

语法

Node 缓冲区长度计算语法如下所示：

```
buf.length;
```

返回值

返回 Buffer 对象所占据的内存长度。

实例

```js
const buf1 = Buffer.from("senbinkop66");

console.log(buf1.length);  //11
```

更多方法参考 https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html

----

# Node.js Stream(流)

