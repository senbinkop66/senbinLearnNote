## yarn特点

快速、可靠、安全的依赖管理工具。

**速度超快**

Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。

**超级安全**

在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。

**超级可靠**

使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

**离线模式**

如果你以前安装过某个包，再次安装时可以在没有任何互联网连接的情况下进行。

**确定性**

不管安装顺序如何，相同的依赖关系将在每台机器上以相同的方式安装。

**网络性能**

Yarn 有效地对请求进行排队处理，避免发起的请求如瀑布般倾泻，以便最大限度地利用网络资源。

**相同的软件包**

从 npm 安装软件包并保持相同的包管理流程。

**网络弹性**

重试机制确保单个请求失败并不会导致整个安装失败。

**扁平模式**

将依赖包的不同版本归结为单个版本，以避免创建多个副本。

----

## 安装

在使用 Yarn 之前，首先要在您的系统上安装 Yarn 。 虽然安装 Yarn 有很多种方式，但是建议采用这一种跨平台的安装方式

建议通过 npm 包管理器安装 Yarn，当您在系统上安装它时，它与 Node.js 捆绑在一起。

安装 npm 后，您可以运行以下命令来安装和升级 Yarn

```bash
npm install --global yarn
```

安装后检查

通过如下命令测试 Yarn 是否安装成功：

```bash
$ yarn --version
1.22.19
```



----

## 使用方法

**初始化一个新项目**

```bash
yarn init
```

**添加依赖包**

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**将依赖项添加到不同依赖项类别中**

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies` 类别中：

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**升级依赖包**

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**移除依赖包**

```bash
yarn remove [package]
```

**安装项目的全部依赖**

```
yarn
```

或者

```bash
yarn install
```



----

## Yarn 工作流

将包管理器引入到项目中会引入一个围绕依赖关系的新工作流。 Yarn 尽最大努力不让你感知它的存在，并让工作流中的每一步 都易于理解。

关于基本工作流程，您应该了解以下几点：

1. 创建一个新项目
2. 添加/更新/删除依赖项
3. 安装/重新安装依赖项
4. 使用版本管理工具（例如 git）
5. 持续集成



----

