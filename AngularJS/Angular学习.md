# Angular9 简介

Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。

大多数 Angular 代码都只能用最新的 Javascript 编写。它会用类型实现依赖注入，还会用装饰器来提供元数据。

Angular 版本更迭速度很快，但是每个版本均往前兼容1-2个版本。正常情况下，不会出现较大的跨越。

AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易。

- AngularJS 把应用程序数据绑定到 HTML 元素。
- AngularJS 可以克隆和重复 HTML 元素。
- AngularJS 可以隐藏和显示 HTML 元素。
- AngularJS 可以在 HTML 元素"背后"添加代码。
- AngularJS 支持输入验证。

# Angular9 搭建环境

**安装 Angular CLI**

Angular CLI 可以帮助您创建项目、生成应用和库代码，以及执行各种开发 任务，比如测试，打包和部署。

- 使用 npm 命令安装 CLI ，请打开终端输入如下命令：

```bash
npm install -g @angular/cli
```

**创建工作空间和初始应用**

您要在 Angular 工作区上下文中开发应用，需要创建一个新的工作空间和初始入门应用。

- 运行 CLI 命令 `ng new`并提供 `my-app`名称作为参数。

```shell
ng new my-app
```

- `ng new`命令会提示您提供要将哪些特性包含在初始应用中。若无特殊要求，可按 `Enter`或`Return`接受默认值。

**运行应用**

Angular CLI 中包含一个服务器，方便您在本地构建和提供应用。

- 转到 workspace 文件夹（`my-app`）。
- 使用 CLI 命令 `ng serve`和`--open`选项来启动服务器。

```shell
cd my-app
ng serve --open
```

> 注：
> \- `ng serve`命令会启动开发服务器、监视文件，并在这些文件发生更改时重建应用。

`--open`可缩写为`-o`，该选项会自动打开您的浏览器访问 "http://localhost:4200/" 



# Angular9 架构概览

## 架构概览

Angular 是一个用 HTML 和 TypeScript 构建客户端应用的平台与框架。 Angular 本身就是用 TypeScript 写成的。它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。

Angular 的基本构造块是 NgModule，它为组件提供了编译的上下文环境。 NgModule 会把相关的代码收集到一些功能集中。 Angular 应用就是由一组 NgModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多特性模块。

- 组件定义视图。视图是一组可见的屏幕元素，Angular 可以根据你的程序逻辑和数据来选择和修改它们。 每个应用都至少有一个根组件。

- 组件使用服务。服务会提供那些与视图不直接相关的功能。服务提供者可以作为依赖被注入到组件中， 这能让你的代码更加模块化、更加可复用、更加高效。

组件和服务都是简单的类，这些类使用装饰器来标出它们的类型，并提供元数据以告知 Angular 该如何使用它们。

- 组件类的元数据将组件类和一个用来定义视图的模板关联起来。 模板把普通的 HTML 和 Angular 指令与绑定标记（markup）组合起来，这样 Angular 就可以在渲染 HTML 之前先修改这些 HTML。

- 服务类的元数据提供了一些信息，Angular 要用这些信息来让组件可以通过依赖注入（DI）使用该服务。

应用的组件通常会定义很多视图，并进行分级组织。Angular 提供了 Router 服务来帮助你定义视图之间的导航路径。 路由器提供了先进的浏览器内导航功能。

## 模块

Angular 定义了 NgModule，它和 JavaScript（ES2015） 的模块不同而且有一定的互补性。 NgModule 为一个组件集声明了编译的上下文环境，它专注于某个应用领域、某个工作流或一组紧密相关的能力。 NgModule 可以将其组件和一组相关代码（如服务）关联起来，形成功能单元。

每个 Angular 应用都有一个根模块，通常命名为 AppModule。根模块提供了用来启动应用的引导机制。 一个应用通常会包含很多特性模块。

像 JavaScript 模块一样，NgModule 也可以从其它 NgModule 中导入功能，并允许导出它们自己的功能供其它 NgModule 使用。 比如，要在你的应用中使用路由器（Router）服务，就要导入 Router 这个 NgModule。

把你的代码组织成一些清晰的特性模块，可以帮助管理复杂应用的开发工作并实现可复用性设计。 另外，这项技术还能让你获得惰性加载（也就是按需加载模块）的优点，以尽可能减小启动时需要加载的代码体积。

## 组件

每个 Angular 应用都至少有一个组件，也就是根组件，它会把组件树和页面中的 DOM 连接起来。 每个组件都会定义一个类，其中包含应用的数据和逻辑，并与一个 HTML 模板相关联，该模板定义了一个供目标环境下显示的视图。

@Component() 装饰器表明紧随它的那个类是一个组件，并提供模板和该组件专属的元数据。

注：
\- 装饰器是一些用于修饰 JavaScript 类的函数。Angular 定义了许多装饰器，这些装饰器会把一些特定种类的元数据附加到类上，以便 Angular 了解这些这些类的含义以及该如何使用它们。

## 模块、指令及数据绑定

模板会把 HTML 和 Angular 的标记（markup）组合起来，这些标记可以在 HTML 元素显示出来之前修改它们。 模板中的指令会提供程序逻辑，而绑定标记会把你应用中的数据和 DOM 连接在一起。 有两种类型的数据绑定：

- 事件绑定让你的应用可以通过更新应用的数据来响应目标环境下的用户输入。

- 属性绑定让你将从应用数据中计算出来的值插入到 HTML 中。

在视图显示出来之前，Angular 会先根据你的应用数据和逻辑来运行模板中的指令并解析绑定表达式，以修改 HTML 元素和 DOM。 Angular 支持双向数据绑定，这意味着 DOM 中发生的变化（比如用户的选择）同样可以反映回你的程序数据中。

你的模板也可以用管道转换要显示的值以增强用户体验。比如，可以使用管道来显示适合用户所在语言环境的日期和货币格式。 Angular 为一些通用的转换提供了预定义管道，你还可以定义自己的管道。

## 服务与依赖注入

对于与特定视图无关并希望跨组件共享的数据或逻辑，可以创建服务类。 服务类的定义通常紧跟在 “@Injectable()” 装饰器之后。该装饰器提供的元数据可以让你的服务作为依赖被注入到客户组件中。

依赖注入（或 DI）让你可以保持组件类的精简和高效。有了 DI，组件就不用从服务器获取数据、验证用户输入或直接把日志写到控制台，而是会把这些任务委托给服务。

## 路由

Angular 的 Router 模块提供了一个服务，它可以让你定义在应用的各个不同状态和视图层次结构之间导航时要使用的路径。 它的工作模型基于人们熟知的浏览器导航约定：

- 在地址栏输入 URL，浏览器就会导航到相应的页面。

- 在页面中点击链接，浏览器就会导航到一个新页面。

- 点击浏览器的前进和后退按钮，浏览器就会在你的浏览历史中向前或向后导航。

不过路由器会把类似 URL 的路径映射到视图而不是页面。 当用户执行一个动作时（比如点击链接），本应该在浏览器中加载一个新页面，但是路由器拦截了浏览器的这个行为，并显示或隐藏一个视图层次结构。

如果路由器认为当前的应用状态需要某些特定的功能，而定义此功能的模块尚未加载，路由器就会按需惰性加载此模块。

路由器会根据你应用中的导航规则和数据状态来拦截 URL。 当用户点击按钮、选择下拉框或收到其它任何来源的输入时，你可以导航到一个新视图。 路由器会在浏览器的历史日志中记录这个动作，所以前进和后退按钮也能正常工作。

要定义导航规则，你就要把导航路径和你的组件关联起来。 路径（path）使用类似 URL 的语法来和程序数据整合在一起，就像模板语法会把你的视图和程序数据整合起来一样。 然后你就可以用程序逻辑来决定要显示或隐藏哪些视图，以根据你制定的访问规则对用户的输入做出响应。

# Angular9 模块简介

## NgModule 简介

Angular 应用是模块化的，它拥有自己的模块化系统，称作 NgModule。 **一个 NgModule 就是一个容器，用于存放一些内聚的代码块，这些代码块专注于某个应用领域、某个工作流或一组紧密相关的功能。** 它可以包含一些组件、服务提供者或其它代码文件，其作用域由包含它们的 NgModule 定义。 它还可以导入一些由其它模块中导出的功能，并导出一些指定的功能供其它 NgModule 使用。

**每个 Angular 应用都至少有一个 NgModule 类，也就是根模块，它习惯上命名为 AppModule**，并位于一个名叫 app.module.ts 的文件中。引导这个根模块就可以启动你的应用。

虽然小型的应用可能只有一个 NgModule，不过大多数应用都会有很多特性模块。应用的根模块之所以叫根模块，是因为它可以包含任意深度的层次化子模块。

## @NgModule 元数据

NgModule 是一个带有 @NgModule() 装饰器的类。@NgModule() 装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。其中最重要的属性如下。

- declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。

- exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。

- imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。

- providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供者，这通常是首选方式。）

- bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。

下面展示一个简单的根 NgModule 定义(Bath: "src/app/app.module.ts" )：

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [AppComponent],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

注：
\- 把 AppComponent 放到 exports 中是为了演示导出的语法，这在本例子中实际上是没必要的。
\- 根模块没有任何理由导出任何东西，因为其它模块永远不需要导入根模块。

## NgModule 和组件

- NgModule 为其中的组件提供了一个编译上下文环境。根模块总会有一个根组件，并在引导期间创建它。 但是，任何模块都能包含任意数量的其它组件，这些组件可以通过路由器加载，也可以通过模板创建。那些属于这个 NgModule 的组件会共享同一个编译上下文环境。

- 组件及其模板共同定义视图。组件还可以包含视图层次结构，它能让你定义任意复杂的屏幕区域，可以将其作为一个整体进行创建、修改和销毁。 一个视图层次结构中可以混合使用由不同 NgModule 中的组件定义的视图。 这种情况很常见，特别是对一些 UI 库来说。

- 当你创建一个组件时，它直接与一个叫做宿主视图的视图关联起来。 宿主视图可以是视图层次结构的根，该视图层次结构可以包含一些内嵌视图，这些内嵌视图又是其它组件的宿主视图。 这些组件可以位于相同的 NgModule 中，也可以从其它 NgModule 中导入。 树中的视图可以嵌套到任意深度。

注：
\- 视图的这种层次结构是 Angular 在 DOM 和应用数据中检测与响应变更时的关键因素。

## NgModule 和 JavaScript 的模块

NgModule 系统与 JavaScript（ES2015）用来管理 JavaScript 对象的模块系统不同，而且也没有直接关联。 这两种模块系统不同但互补。你可以使用它们来共同编写你的应用。

JavaScript 中，每个文件是一个模块，文件中定义的所有对象都从属于那个模块。 通过 export 关键字，模块可以把它的某些对象声明为公共的。 其它 JavaScript 模块可以使用import 语句来访问这些公共对象。

```js
import { NgModule }     form '@angular/core';
import { AppComponent } form './app.component';
```

```js
export class AppModule { }
```

## Angular 自带库

Angular 会作为一组 JavaScript 模块进行加载，你可以把它们看成库模块。每个 Angular 库的名称都带有 @angular 前缀。 使用 npm 包管理器安装 Angular 的库，并使用 JavaScript 的 import 语句导入其中的各个部分。

- 如下，从`@angular/core`库中导入 Angular 的 Component 装饰器:

```js
import { Component } from '@angular/core';
```

- 还可以使用 JavaScript 的导入语句从 Angular 库中导入 Angular 模块。 比如，下列代码从 `platform-browser` 库中导入了 `BrowserModule` 这个 NgModule。

```js
import { BrowserModule } from '@angular/platform-browser';
```

- 在上面这个简单的根模块范例中，应用的根模块需要来自 BrowserModule 中的素材。要访问这些素材，就要把它加入 @NgModule 元数据的 imports 中，代码如下：

```js
inports:    [ BrowserModule ],
```

通过这种方式，你可以同时使用 Angular 和 JavaScript 的这两种模块系统。 虽然这两种模块系统容易混淆（它们共享了同样的词汇 `import` 和 `export`），不过只要多用用你就会熟悉它们各自的语境了。

# Angular9 组件简介

组件控制屏幕上被称为视图的一小片区域。比如，教程中的下列视图都是由一个个组件所定义和控制的：

- 带有导航链接的应用根组件。

- 英雄列表。

- 英雄编辑器。

你在类中定义组件的应用逻辑，为视图提供支持。 组件通过一些由属性和方法组成的 API 与视图交互。

比如，HeroListComponent 中有一个 名为 `heroes` 的属性，它储存着一个数组的英雄数据。 HeroListComponent 还有一个 `selectHero()` 方法，当用户从列表中选择一个英雄时，它会设置 `selectedHero` 属性的值。 该组件会从服务获取英雄列表，它是一个 TypeScript 的构造器参数型属性。本服务通过依赖注入系统提供给该组件。

```typescript
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
```

当用户在应用中穿行时，Angular 就会创建、更新、销毁一些组件。 你的应用可以通过一些可选的生命周期钩子（比如 `ngOnInit()`）来在每个特定的时机采取行动。

## 组件的元数据

@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 HeroListComponent 只是一个普通类，完全没有 Angular 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。

组件的元数据告诉 Angular 到哪里获取它需要的主要构造块，以创建和展示这个组件及其视图。 具体来说，它把一个模板（无论是直接内联在代码中还是引用的外部文件）和该组件关联起来。 该组件及其模板，共同描述了一个视图。

除了包含或指向模板之外，@Component 的元数据还会配置要如何在 HTML 中引用该组件，以及该组件需要哪些服务等等。

下面的例子中就是 HeroListComponent 的基础元数据：

```typescript
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```

这个例子展示了一些最常用的 @Component 配置选项：

- selector：是一个 CSS 选择器，它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。 比如，如果应用的 HTML 中包含 <app-hero-list></app-hero-list>，Angular 就会在这些标签中插入一个 HeroListComponent 实例的视图。

- templateUrl：该组件的 HTML 模板文件相对于这个组件文件的地址。 另外，你还可以用 template 属性的值来提供内联的 HTML 模板。 这个模板定义了该组件的宿主视图。

- providers：当前组件所需的服务提供者的一个数组。在这个例子中，它告诉 Angular 该如何提供一个 HeroService 实例，以获取要显示的英雄列表。

## 模板与视图

你要通过组件的配套模板来定义其视图。模板就是一种 HTML，它会告诉 Angular 如何渲染该组件。

视图通常会分层次进行组织，让你能以 UI 分区或页面为单位进行修改、显示或隐藏。 与组件直接关联的模板会定义该组件的宿主视图。该组件还可以定义一个带层次结构的视图，它包含一些内嵌的视图作为其它组件的宿主。

带层次结构的视图可以包含同一模块（NgModule）中组件的视图，也可以（而且经常会）包含其它模块中定义的组件的视图。

## 模板语法

模板很像标准的 HTML，但是它还包含 Angular 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。 你的模板可以使用数据绑定来协调应用和 DOM 中的数据，使用管道在显示出来之前对其进行转换，使用指令来把程序逻辑应用到要显示的内容上。

比如，下面是本教程中 HeroListComponent 的模板：

```html
<h2>Hero List</h2>

<p><i>Pick a hero from the list</i></p>
<ul>
  <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
    {{hero.name}}
  </li>
</ul>

<app-hero-detail *ngIf="selectedHero" [hero]="selectedHero"></app-hero-detail>
```

这个模板使用了典型的 HTML 元素，比如 `<h2>` 和 `<p>`，还包括一些 Angular 的模板语法元素，如 `*ngFor`，`{{hero.name}}`，`click`、`[hero]` 和 `<app-hero-detail>`。这些模板语法元素告诉 Angular 该如何根据程序逻辑和数据在屏幕上渲染 HTML。

- `*ngFor` 指令告诉 Angular 在一个列表上进行迭代。

- `{{hero.name}}`、`(click)` 和 `[hero]` 把程序数据绑定到及绑定回 DOM，以响应用户的输入。更多内容参见稍后的数据绑定部分。

- 模板中的 `<app-hero-detail>` 标签是一个代表新组件 HeroDetailComponent 的元素。 HeroDetailComponent（代码略）定义了 HeroListComponent 的英雄详情子视图。 注意观察像这样的自定义组件是如何与原生 HTML 元素无缝的混合在一起的。

## 数据绑定

如果没有框架，你就要自己负责把数据值推送到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 有前端 JavaScript 开发经验的程序员一定深有体会。

Angular 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。 往模板 HTML 中添加绑定标记可以告诉 Angular 该如何连接它们。

这个来自 HeroListComponent 模板中的例子展示了其中的三种形式：这个来自 HeroListComponent 模板中的例子展示了其中的三种形式：

```html
<li>{{hero.name}}</li>
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
<li (click)="selectHero(hero)"></li>
```

- {{hero.name}} 这个插值在 <li> 标签中显示组件的 hero.name 属性的值。

- [hero]属性绑定把父组件 HeroListComponent 的 selectedHero 的值传到子组件 HeroDetailComponent 的 hero 属性中。

- 当用户点击某个英雄的名字时，(click) 事件绑定会调用组件的 selectHero 方法。

双向数据绑定（主要用于模板驱动表单中），它会把属性绑定和事件绑定组合成一种单独的写法。下面这个来自 HeroDetailComponent 模板中的例子通过 ngModel 指令使用了双向数据绑定：

```html
<input [(ngModel)]="hero.name">
```

在双向绑定中，数据属性值通过属性绑定从组件流到输入框。用户的修改通过事件绑定流回组件，把属性值设置为最新的值。

Angular 在每个 JavaScript 事件循环中处理所有的数据绑定，它会从组件树的根部开始，递归处理全部子组件。

数据绑定在模板及其组件之间的通讯中扮演了非常重要的角色，它对于父组件和子组件之间的通讯也同样重要。

```

```

## 管道

Angular 的管道可以让你在模板中声明显示值的转换逻辑。 **带有 @Pipe 装饰器的类中会定义一个转换函数，用来把输入值转换成供视图显示用的输出值。**

Angular 自带了很多管道，比如 `date` 管道和 `currency` 管道，完整的列表参见 Pipes API 列表。你也可以自己定义一些新管道。

要在 HTML 模板中指定值的转换方式，请使用 管道操作符 (`|`)。

```html
{{interpolated_value | pipe_name}}
```

你可以把管道串联起来，把一个管道函数的输出送给另一个管道函数进行转换。 管道还能接收一些参数，来控制它该如何进行转换。比如，你可以把要使用的日期格式传给 `date` 管道：

```html
<!-- Default format: output 'Jun 15, 2015'-->

 <p>Today is {{today | date}}</p>

<!-- fullDate format: output 'Monday, June 15, 2015'-->

<p>The date is {{today | date:'fullDate'}}</p>

 <!-- shortTime format: output '9:43 AM'-->

 <p>The time is {{today | date:'shortTime'}}</p>
```

## 指令

Angular 的模板是动态的。当 Angular 渲染它们的时候，会根据指令给出的指示对 DOM 进行转换。 指令就是一个带有 `@Directive()` 装饰器的类。

组件从技术角度上说就是一个指令，但是由于组件对 Angular 应用来说非常独特、非常重要，因此 Angular 专门定义了 `@Component()` 装饰器，它使用一些面向模板的特性扩展了 `@Directive()` 装饰器。

除组件外，还有两种指令：结构型指令和属性型指令。 Angular 本身定义了一系列这两种类型的指令，你也可以使用 `@Directive()` 装饰器来定义自己的指令。

像组件一样，指令的元数据把它所装饰的指令类和一个 `selector` 关联起来，`selector` 用来把该指令插入到 HTML 中。 在模板中，指令通常作为属性出现在元素标签上，可能仅仅作为名字出现，也可能作为赋值目标或绑定目标出现。

**1. 结构型指令**

结构型指令通过添加、移除或替换 DOM 元素来修改布局。 这个范例模板使用了两个内置的结构型指令来为要渲染的视图添加程序逻辑：

```html
<li *ngFor="let hero of heroes"></li>
<app-hero-detail *ngIf="selectedHero"></app-hero-detail>
```

- `*ngFor` 是一个迭代器，它要求 Angular 为 heroes 列表中的每个英雄渲染出一个 `<li>`。

- `*ngIf` 是个条件语句，只有当选中的英雄存在时，它才会包含 HeroDetail 组件。

**2. 属性型指令**

属性型指令会修改现有元素的外观或行为。 在模板中，它们看起来就像普通的 HTML 属性一样，因此得名“属性型指令”。

ngModel 指令就是属性型指令的一个例子，它实现了双向数据绑定。 ngModel 修改现有元素（一般是 `<input>`）的行为：设置其显示属性值，并响应 change 事件。

```html
<input [(ngModel)]="hero.name">
```

注：
\- Angular 还有很多预定义指令，有些修改布局结构（比如 `ngSwitch`），有些修改 DOM 元素和组件的样子（比如 `ngStyle` 和 `ngClass`）。

# Angular9 服务与 DI 简介

## 服务与依赖注入简介

服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做，并做好一些具体的事。

Angular 把组件和服务区分开，以提高模块性和复用性。 通过把组件中和视图有关的功能与其它类型的处理分离开，你可以让组件类更加精简、高效。

理想情况下，组件的工作只管用户体验，而不用顾及其它。 它应该提供用于数据绑定的属性和方法，以便作为视图（由模板渲染）和应用逻辑（通常包含一些模型的概念）的中介者。

组件应该把诸如从服务器获取数据、验证用户输入或直接往控制台中写日志等工作委托给各种服务。通过把各种处理任务定义到可注入的服务类中，你可以让它被任何组件使用。 通过在不同的环境中注入同一种服务的不同提供者，你还可以让你的应用更具适应性。

Angular 不会强迫您遵循这些原则。Angular 只会通过依赖注入来帮您更容易地将应用逻辑分解为服务，并让这些服务可用于各个组件中。

**应用示例**

以下示例，用于将日志记录到浏览器的控制台。

```typescript
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
```

服务也可以依赖其它服务。比如，这里的 HeroService 就依赖于 Logger 服务，它还用 BackendService 来获取英雄数据。BackendService 还可能再转而依赖 HttpClient 服务来从服务器异步获取英雄列表。

```typescript
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
```

## 依赖注入

DI 被融入 Angular 框架中，用于在任何地方给新建的组件提供服务或所需的其它东西。 组件是服务的消费者，也就是说，你可以把一个服务注入到组件中，让组件类得以访问该服务类。

在 Angular 中，要把一个类定义为服务，就要用 `@Injectable()` 装饰器来提供元数据，以便让 Angular 可以把它作为依赖注入到组件中。 同样，也要使用 `@Injectable()` 装饰器来表明一个组件或其它类（比如另一个服务、管道或 NgModule）拥有一个依赖。

- 注入器是主要的机制。Angular 会在启动过程中为你创建全应用级注入器以及所需的其它注入器。你不用自己创建注入器。

- 该注入器会创建依赖、维护一个容器来管理这些依赖，并尽可能复用它们。

- 提供者是一个对象，用来告诉注入器应该如何获取或创建依赖。

你的应用中所需的任何依赖，都必须使用该应用的注入器来注册一个提供者，以便注入器可以使用这个提供者来创建新实例。 对于服务，该提供者通常就是服务类本身。

注：
\- 依赖不一定是服务，它也有可能是函数或者值。

当 Angular 创建组件类的新实例时，它会通过查看该组件类的构造函数，来决定该组件依赖哪些服务或其它依赖项。 比如 HeroListComponent 的构造函数中需要 HeroService：

```
constructor(private service: HeroService) { }
```

当 Angular 发现某个组件依赖某个服务时，它会首先检查是否该注入器中已经有了那个服务的任何现有实例。如果所请求的服务尚不存在，注入器就会使用以前注册的服务提供者来制作一个，并把它加入注入器中，然后把该服务返回给 Angular。

当所有请求的服务已解析并返回时，Angular 可以用这些服务实例为参数，调用该组件的构造函数。

## 提供服务

对于要用到的任何服务，您必须至少注册一个提供者。服务可以在自己的元数据中把自己注册为提供者，这样可以让自己随处可用。或者，您也可以为特定的模块或组件注册提供者。要注册提供者，就要在服务的 `@Injectable()` 装饰器中提供它的元数据，或者在 `@NgModule()` 或 `@Component()` 的元数据中。

- 默认情况下，Angular CLI 的 ng generate service 命令会在 @Injectable() 装饰器中提供元数据来把它注册到根注入器中。本教程就用这种方法注册了 HeroService 的提供者：

```typescript
@Injectable({
  providedIn: 'root',
})
```

当你在根一级提供服务时，Angular 会为 HeroService 创建一个单一的共享实例，并且把它注入到任何想要它的类中。这种在 @Injectable 元数据中注册提供者的方式还让 Angular 能够通过移除那些从未被用过的服务来优化大小。

- 当你使用特定的 NgModule 注册提供者时，该服务的同一个实例将会对该 NgModule 中的所有组件可用。要想在这一层注册，请用 @NgModule() 装饰器中的 providers 属性：

```
@NgModule({
  providers: [
   BackendService,
   Logger
 ],
 ...
})
```

- 当您在组件级注册提供者时，您会为该组件的每一个新实例提供该服务的一个新实例。 要在组件级注册，就要在 `@Component()` 元数据的 providers 属性中注册服务提供者。

```
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
```

# Angular9 技能扩展

## 工具与技巧

在了解了基本的 Angular 构建块之后，您可以进一步了解可以帮助你开发和交付 Angular 应用的特性和工具。

- 参考“英雄指南”教程，了解如何将这些基本构建块放在一起，来创建设计精良的应用。

- 查看词汇表，了解 Angular 特有的术语和用法。

- 根据您的开发阶段和感兴趣的领域，使用该文档更深入地学习某些关键特性。

## 应用架构

- 组件与模板一章中介绍了如何把组件中的应用数据与页面显示模板联系起来，以创建一个完整的交互式应用。

- NgModules 一章中提供了关于 Angular 应用模块化结构的深度信息。

- 路由与导航一章中提供了一些深度信息，教您如何构造出一个允许用户导航到单页面应用中不同视图 的应用。

- 依赖注入一章提供了一些深度信息，教您如何让每个组件类都可以获取实现其功能所需的服务和对象。

## 响应式编程

“组件和模板”一章提供了模板语法的指南和详细信息，用于在视图中随时随地显示组件数据，并从用户那里收集输入，以便做出响应。

其它页面和章节则描述了 Angular 应用的一些基本编程技巧。

- 生命周期钩子：通过实现生命周期钩子接口，可以窃听组件生命周期中的一些关键时刻 —— 从创建到销毁。

- 可观察对象（Observable）和事件处理：如何在组件和服务中使用可观察对象来发布和订阅任意类型的消息，比如用户交互事件和异步操作结果。

- Angular 自定义元素：如何使用 Web Components 把组件打包成自定义元素，Web Components 是一种以框架无关的方式定义新 HTML 元素的 Web 标准。

- 表单：通过基于 HTML 的输入验证，来支持复杂的数据录入场景。

- 动画：使用 Angular 的动画库，您可以让组件支持动画行为，而不用深入了解动画技术或 CSS。

## “客户端-服务器”交互

Angular 为单页面应用提供了一个框架，其中的大多数逻辑和数据都留在客户端。大多数应用仍然需要使用 HttpClient 来访问服务器，以访问和保存数据。对于某些平台和应用，您可能还希望使用 PWA（渐进式 Web 应用）模型来改善用户体验。

- HTTP：与服务器通信，通过 HTTP 客户端来获取数据、保存数据，并调用服务端的动作。

- 服务器端渲染：Angular Universal 通过服务器端渲染（SSR）在服务器上生成静态应用页面。这允许您在服务器上运行 Angular 应用，以提高性能，并在移动设备和低功耗设备上快速显示首屏，同时也方便了网页抓取工具。

- Service Worker 和 PWA：使用 Service Worker 来减少对网络的依赖，并显著改善用户体验。

- Web worker：学习如何在后台线程中运行 CPU 密集型的计算。

## 为开发周期提供支持

“开发工作流”部分描述了用于编译、测试和部署 Angular 应用的工具和过程。

- CLI 命令参考手册：Angular CLI 是一个命令行工具，可用于创建项目、生成应用和库代码，以及执行各种持续开发任务，如测试、打包和部署。

- 编译：Angular 为开发环境提供了 JIT（即时）编译方式，为生产环境提供了 AOT（预先）编译方式。

- 测试平台：对应用的各个部件运行单元测试，让它们好像在和 Angular 框架交互一样。

- 部署：学习如何把 Angular 应用部署到远端服务器上。

- 安全指南：学习 Angular 对常见 Web 应用的弱点和工具（比如跨站脚本攻击）提供的内置防护措施。

- 国际化 ：借助 Angular 的国际化（i18n）工具，可以让您的应用支持多语言环境。

- 无障碍性：让所有用户都能访问您的应用。

## 文件结构、配置和依赖

- 工作区与文件结构：理解 Angular 工作区与项目文件夹的结构。

- 构建与运行：学习为项目定义不同的构建和代理服务器设置的配置方式，比如开发、预生产和生产。

- npm 包：Angular 框架、Angular CLI 和 Angular 应用中用到的组件都是用 npm 打包的，并通过 npm 注册服务器进行发布。Angular CLI 会创建一个默认的 package.json 文件，它会指定一组初始的包，它们可以一起使用，共同支持很多常见的应用场景。

- TypeScript 配置：TypeScript 是 Angular 应用开发的主要语言。

- 浏览器支持：让您的应用能和各种浏览器兼容。

## 扩展 Angular

- Angular 库：学习如何使用和创建可复用的库。

- 学习原理图 ：学习如何自定义和扩展 CLI 的生成（generate）能力。

- CLI 构建器：学习如何自定义和扩展 CLI 的能力，让它使用工具来执行复杂任务，比如构建和测试应用。



