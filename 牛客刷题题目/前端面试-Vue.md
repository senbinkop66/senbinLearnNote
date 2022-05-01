----

# 框架

-----

## Vue面试题

----

#### 1.1 v-model 作用？

**参考答案：**

v-model本质上不过是语法糖，可以用 v-model 指令在**表单**及**元素**上创建双向数据绑定。

1. 它会根据控件类型自动选取正确的方法来更新元素
2. 它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理
3. v-model会忽略所有表单元素的value、checked、selected特性的初始值,而**总是将 Vue 实例的数据作为数据来源**，因此我们应该通过 JavaScript 在组件的data选项中声明初始值

**扩展：**

v-model在内部为不同的输入元素使用不同的属性并抛出不同的事件：

1. text 和 textarea 元素使用value属性和input事件；
2. checkbox 和 radio 使用checked属性和change事件；
3. select 字段将value作为 prop 并将change作为事件。

---

#### 1.2 v-model 实现原理？

**参考答案：**

v-model只不过是一个语法糖而已,真正的实现靠的还是

1. v-bind:绑定响应式数据
2. 触发oninput 事件并传递数据

```vue
<input v-model="sth" />
<!-- 等同于-->
<input :value="sth" @input="sth = $event.target.value" />
<!--自html5开始,input每次输入都会触发oninput事件，所以输入时input的内容会绑定到sth中，于是sth的值就被改变-->
<!--$event 指代当前触发的事件对象;-->
<!--$event.target 指代当前触发的事件对象的dom;-->
<!--$event.target.value 就是当前dom的value值;-->
<!--在@input方法中，value => sth;-->
<!--在:value中,sth => value;-->
```

---

#### 1.3 Vue2.0 双向绑定的缺陷？

**参考答案：**

Vue2.0的数据响应是**采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty () 来劫持各个属性的setter、getter**，但是它并不算是实现数据的响应式的完美方案，某些情况下需要对其进行修补或者hack这也是它的缺陷，主要表现在两个方面：

1. vue 实例创建后，无法检测到对象属性的新增或删除，只能追踪到数据是否被修改
2. 不能监听数组的变化

**解析：**

1. vue 实例创建后，无法检测到对象属性的新增或删除，只能追踪到数据是否被修改(Object.defineProperty只能劫持对象的属性)。

   当创建一个Vue实例时，将遍历所有DOM对象，并为每个数据属性添加了get和set。get和set 允许Vue观察数据的更改并触发更新。但是，如果你在Vue实例化后添加（或删除）一个属性，这个属性不会被vue处理，改变get和set。

   解决方案：

   ```js
   Vue.set(obj, propertName/index, value)
   // 响应式对象的子对象新增属性，可以给子响应式对象重新赋值
   data.location = {
       x: 100,
       y: 100
   }
   data.location = {...data, z: 100}
   ```

   

2. 不能监听数组的变化

   vue在实现数组的响应式时，它使用了一些hack，把无法监听数组的情况通过重写数组的部分方法来实现响应式，这也只限制在数组的push/pop/shift/unshift/splice/sort/reverse七个方法，其他数组方法及数组的使用则无法检测到，例如如下两种使用方式

   ```js
   vm.items[index] = newValue;
   vm.items.length
   ```

   vue实现数组响应式的方法

   通过重写数组的Array.prototype对应的方法，具体来说就是重新指定要操作数组的prototype，并重新该prototype中对应上面的7个数组方法，通过下面代码简单了解下实现原理：

   ```js
   const methods = ['pop','shift','unshift','sort','reverse','splice', 'push'];
   // 复制Array.prototype，并将其prototype指向Array.prototype
   let proto = Object.create(Array.prototype);
   methods.forEach(method => {
       proto[method] = function () { // 重写proto中的数组方法
           Array.prototype[method].call(this, ...arguments);
           viewRender() // 视图更新
           function observe(obj) {
               if (Array.isArray(obj)) { // 数组实现响应式
                   obj.__proto__ = proto; // 改变传入数组的prototype
                   return;
               }
               if (typeof obj === 'object') {
                   ... // 对象的响应式实现
               }
           }
       }
   })
   ```

   

---

#### 1.4 Vue3.0 实现数据双向绑定的方法

**参考答案:**

vue3.0 实现数据双向绑定是通过**Proxy**

**Proxy**是 ES6 中新增的一个特性，翻译过来意思是"代理"，用在这里表示由它来“代理”某些操作。 Proxy 让我们能够以简洁易懂的方式控制外部对对象的访问。其功能非常类似于设计模式中的代理模式。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

使用 Proxy 的**核心优点**是可以交由它来处理一些非核心逻辑（如：读取或设置对象的某些属性前记录日志；设置对象的某些属性值前，需要验证；某些属性的访问控制等）。 从而可以让对象只需关注于核心逻辑，达到关注点分离，降低对象复杂度等目的。

**扩展：**

使用proxy实现，双向数据绑定，相比2.0的Object.defineProperty ()优势：

1. 可以劫持整个对象，并返回一个新对象
2. 有13种劫持操作

---

#### 1.5 Vuex是什么，每个属性是干嘛的，如何使用

**参考答案：**

Vuex是什么？

Vuex是专门为Vuejs应用程序设计的**状态管理工具**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

具体工作：vuex是一种状态管理机制，将全局组件的共享状态抽取出来为一个store，以一个单例模式存在，应用任何一个组件中都可以使用，vuex更改state的唯一途径是通过mutation，mutation需要commit触发, action实际触发是mutation，其中mutation处理同步任务，action处理异步任务。

Vuex每个属性是干嘛的？

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128565972/EB5115B586566907B3B642BA58A4482A)

Vuex的属性包含以下6个：

1）state

state是存储的单一状态，是存储的基本数据。

2）Getters

getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，getter返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。

3）Mutations

mutations提交更改数据，使用store.commit方法更改state存储的状态。（mutations同步函数）

4）Actions

actions像一个装饰器，提交mutation，而不是直接变更状态。（actions可以包含任何异步操作）

5）Module

Module是store分割的模块，每个模块拥有自己的state、getters、mutations、actions。

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

6）辅助函数

Vuex提供了mapState、MapGetters、MapActions、mapMutations等辅助函数给开发在vm中处理store。

Vuex的使用方法？

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128588464/5ACC9FABB642EADBED3478A9397CEF15)

```js
import Vuex from 'vuex';
Vue.use(Vuex); // 1. vue的插件机制，安装vuex
let store = new Vuex.Store({ // 2.实例化store，调用install方法
    state,
    getters,
    modules,
    mutations,
    actions,
    plugins
});
new Vue({ // 3.注入store, 挂载vue实例
    store,
    render: h=>h(app)
}).$mount('#app');
```

---

#### 1.6 Vuex实现原理

**参考答案：**

通过以下三个方面来阐述vuex的实现原理：

- store是怎么注册的?
- mutation，commit 是怎么实现的?
- 辅助函数是怎么实现的?

1. store是怎么注册的?

   我们看到Vuex在vue 的生命周期中的初始化钩子前插入一段 Vuex 初始化代码。给 Vue 的实例注入一个

   $store的属性，这也就是为什么我们在 Vue 的组件中可以通过this.$store.xxx, 访问到 Vuex 的各种数据和状态

   ```js
   export default function (Vue) {
     // 获取当前 Vue 的版本
     const version = Number(Vue.version.split('.')[0])
   
     if (version >= 2) {
       // 2.x 通过 hook 的方式注入
       Vue.mixin({ beforeCreate: vuexInit })
     } else {
       // 兼容 1.x
       // 使用自定义的 _init 方法并替换 Vue 对象原型的_init方法，实现注入
       const _init = Vue.prototype._init
       Vue.prototype._init = function (options = {}) {
         options.init = options.init
           ? [vuexInit].concat(options.init)
           : vuexInit
         _init.call(this, options)
       }
     }
   
     /**
      * Vuex init hook, injected into each instances init hooks list.
      */
   
     function vuexInit () {
       const options = this.$options
       // store 注入
       if (options.store) {
         this.$store = typeof options.store === 'function'
           ? options.store()
           : options.store
       } else if (options.parent && options.parent.$store) {
         // 子组件从其父组件引用 $store 属性
         this.$store = options.parent.$store
       }
     }
   }
   ```

   

2. mutations，commit 是怎么实现的

   ```js
   function registerMutation (store, type, handler, local) {
     // 获取 type(module.mutations 的 key) 对应的 mutations, 没有就创建一个空数组
     const entry = store._mutations[type] || (store._mutations[type] = [])
     // push 处理过的 mutation handler
     entry.push(function wrappedMutationHandler (payload) {
       // 调用用户定义的 hanler, 并传入 state 和 payload 参数
       handler.call(store, local.state, payload)
     })
   }
   ```

   registerMutation 是对 store 的 mutation 的初始化，它接受 4 个参数，store为当前 Store 实例，type为 mutation 的 key，handler 为 mutation 执行的回调函数，path 为当前模块的路径。

   mutation 的作用就是同步修改当前模块的 state ，函数首先通过 type 拿到对应的 mutation 对象数组， 然后把一个 mutation 的包装函数 push 到这个数组中，这个函数接收一个参数 payload，这个就是我们在定义 mutation 的时候接收的额外参数。这个函数执行的时候会调用 mutation 的回调函数，并通过 getNestedState(store.state, path) 方法得到当前模块的 state，和 playload 一起作为回调函数的参数。

   我们知道mutation是通过commit来触发的，这里我们也来看一下commit的定义

   ```js
   commit (_type, _payload, _options) {
       // 解析参数
       const {
         type,
         payload,
         options
       } = unifyObjectStyle(_type, _payload, _options)
   
       // 根据 type 获取所有对应的处理过的 mutation 函数集合
       const mutation = { type, payload }
       const entry = this._mutations[type]
       if (!entry) {
         if (process.env.NODE_ENV !== 'production') {
           console.error(`[vuex] unknown mutation type: ${type}`)
         }
         return
       }
       // 执行 mutation 函数
       this._withCommit(() => {
         entry.forEach(function commitIterator (handler) {
           handler(payload)
         })
       })
   
       // 执行所有的订阅者函数
       this._subscribers.forEach(sub => sub(mutation, this.state))
   
       if (
         process.env.NODE_ENV !== 'production' &&
         options && options.silent
       ) {
         console.warn(
       `[vuex] mutation type: ${type}. Silent option has been removed. ` +
           'Use the filter functionality in the vue-devtools'
     )
       }
   }
   
   ```

   commit 支持 3 个参数，type 表示 mutation 的类型，payload 表示额外的参数,根据 type 去查找对应的 mutation，如果找不到，则输出一条错误信息，否则遍历这个 type 对应的 mutation 对象数组，执行 handler(payload) 方法，这个方法就是之前定义的 wrappedMutationHandler(handler)，执行它就相当于执行了 registerMutation 注册的回调函数。

3. 辅助函数

   辅助函数的实现都差不太多，在这里了解一下mapState

   ```js
   export const mapGetters = normalizeNamespace((namespace, getters) => {
     // 返回结果
     const res = {}
   
     // 遍历规范化参数后的对象
     // getters 就是传递给 mapGetters 的 map 对象或者数组
     normalizeMap(getters).forEach(({ key, val }) => {
       val = namespace + val
       res[key] = function mappedGetter () {
         // 一般不会传入 namespace 参数
         if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
           return
         }
         // 如果 getter 不存在则报错
         if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
           console.error(`[vuex] unknown getter: ${val}`)
           return
         }
         // 返回 getter 值, store.getters 可见上文 resetStoreVM 的分析
         return this.$store.getters[val]
       }
       // mark vuex getter for devtools
       res[key].vuex = true
     })
     return res
   })
   
   ```

   mapState在调用了 normalizeMap 函数后，把传入的 states 转换成由 {key, val} 对象构成的数组，接着调用 forEach 方法遍历这个数组，构造一个新的对象，这个新对象每个元素都返回一个新的函数 mappedState，函数对 val 的类型判断，如果 val 是一个函数，则直接调用这个 val 函数，把当前 store 上的 state 和 getters 作为参数，返回值作为 mappedState 的返回值；否则直接把 this.$store.state[val]作为 mappedState 的返回值。为了更直观的理解，我们看下最终mapState的效果

   ```js
   computed: mapState({
       name: state => state.name,
   })
   // 等同于
   computed: {
       name: this.$store.state.name
   }
   
   ```

   

---

#### 1.7 mutation和action有什么区别？

**参考答案：**

**mutation**：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于件： 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进 行状态更改的地方，并且它会接受 state 作为第一个参数

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})

```

不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：

```js
store.commit('increment')
```

**Action:** Action 类似于 mutation，不同在于：

1. Action 提交的是 mutation，而不是直接变更状态。

2. Action 可以包含任意异步操作。

   让我们来注册一个简单的 action：

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

```

**扩展：**事实上在 vuex 里面 actions 只是一个架构性的概念，并不是必须的，说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理那是用户自己的事情。

vuex 真正限制你的只有 mutation 必须是同步的这一点（在 redux 里面就好像 reducer 必须同步返回下一个状态一样）。同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态（和 reducer 一样），这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。如果你开着 devtool 调用一个异步的 action，你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。

----

#### 1.8 修改ElementUI 样式的几种方式?

**参考答案：**

修改ElementUI 样式的方式有四种：

1. 新建全局样式表

   新建 global.css 文件，并在 main.js 中引入。 global.css 文件一般都放在 src->assets 静态资源文件夹下的 style 文件夹下，在 main.js 的引用写法如下：

   ```css
   import "./assets/style/global.css"
   ```

   在 global.css 文件中写的样式，无论在哪一个 vue 单页面都会覆盖 ElementUI 默认的样式。

2. 在当前-vue-单页面中添加一个新的style标签

   在当前的vue单页面的style标签后，添加一对新的style标签，新的style标签中不要添加scoped属性。在有写scoped的style标签中书写的样式不会覆盖 ElementUI 默认的样式。

3. 使用/deep/深度修改标签样式

   找到需要修改的 ElementUI 标签的类名，然后在类名前加上/deep/，可以强制修改默认样式。这种方式可以直接用到有scoped属性的 style 标签中。

   ```css
   // 修改级联选择框的默认宽度
   /deep/ .el-cascader {
     width: 100%;
   }
   
   ```

   

4. 通过内联样式 或者 绑定类样式覆盖默认样式

   通过内联样式 style ，绑定类样式的方式，可以在**某些标签**中可以直接覆盖默认样式，不是很通用。具体实例如下：

```html
   <el-button :style="selfstyle">默认按钮</el-button>
   <script>
       export default {
         data() {
           return {
               selfstyle: {
                   color: "white",
                   marginTop: "10px",
                   width: "100px",
                   backgroundColor: "cadetblue"
               }
           };
         }
       }
   </script>

```

通过绑定修改样式方式修改：

```html
   <el-button :class="[selfbutton]">默认按钮</el-button>
   <script>
     export default {
       data() {
         return {
           selfbutton: "self-button"
         };
       } 
     }
   </script>
   <style lang="stylus" rel="stylesheet/stylus" scoped>
   .self-button {
       color: white;
       margin-top: 10px;
       width: 100px;
       background-Color: cadetblue;
   }
   </style>

```

**扩展：**

第一种全局引入css文件的方式，适合于对elementUI整体的修改，比如整体配色的修改；
第二种添加一个style标签的形式，也能够实现修改默认样式的效果，但实际上因为是修改了全局的样式，因此 在不同的vue组件中修改同一个样式有可能会有冲突。
第三种方式通过 /deep/ 的方式可以很方便的在vue组件中修改默认样式，也不会于其他页面有冲突。
第四种方式局限性比较大，可以使用，但不推荐使用。

----

#### 1.9 elementui 有什么用?

**参考答案：**

**Element-UI**：是一套采用 Vue 2.0 作为基础框架实现的组件库，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助网站快速成型

**扩展：**

Element-UI特点：

一致性 Consistency

- 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
- 在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。

反馈 Feedback

- 控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
- 页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。

效率 Efficiency

- 简化流程：设计简洁直观的操作流程；
- 清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
- 帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。

可控 Controllability

- 用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
- 结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。

----

#### 1.10 路由守卫

**参考答案：**

路由守卫主要用来**通过跳转或取消的方式守卫导航**。

简单的说，路由守卫就是路由跳转过程中的一些钩子函数。路由跳转是一个大的过程，这个大的过程分为跳转前中后等等细小的过程，在每一个过程中都有一函数，这个函数能让你操作一些其他的事儿的时机，这就是路由守卫。

**解析：**

路由守卫的具体方法：

1. 全局前置守卫

   你可以使用 router.beforeEach 注册一个全局前置守卫：

   ```js
   const router = new VueRouter({ ... })
   	router.beforeEach((to, from, next) => {
     // ...
   })
   
   ```

   当一个导航开始时，全局前置守卫按照注册顺序调用。守卫是异步链式调用的，导航在最后的一层当中。

   ```js
   new Promise((resolve, reject) => {
       resolve('第一个全局前置守卫')
   }.then(() => {
       return '第二个全局前置守卫'
   }.then(() => {
       ...
   }.then(() => {
       console.log('导航终于开始了') // 导航在最后一层中
   })
   
   ```

每个守卫方法接收三个参数（往后的守卫都大同小异）：

1.  to: Route: 即将要进入的目标 路由对象
2. from: Route: 当前导航正要离开的路由
3. next: Function: 一定要调用该方法将控制权交给下一个守卫，执行效果依赖 next 方法的参数。

next(): 进入下一个守卫。如果全部守卫执行完了。则导航的状态就是 confirmed (确认的)。

next(false): 中断当前的导航（把小明腿打断了）。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器 后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航（小 明被打断腿并且送回家了）。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递router.

onError() 注册过的回调。

注意：永远不要使用两次next，这会产生一些误会。

1. 全局解析守卫

   这和 router.beforeEach 类似，但他总是被放在最后一个执行。

2. 全局后置钩子

   导航已经确认了的，小明已经到了外婆家了，你打断他的腿他也是在外婆家了。

   ```js
   router.afterEach((to, from) => {
       // 你并不能调用next
     // ...
   })
   
   ```

   

3. 路由独享的守卫

   在路由内写的守卫

   ```js
   const router = new VueRouter({
     routes: [
       {
         path: '/foo',
         component: Foo,
         beforeEnter: (to, from, next) => {
           // ...
         }
       }
     ]
   })
   
   ```

4. 组件内的守卫

   beforeRouteEnter

   beforeRouteUpdate (2.2 新增)

   beforeRouteLeave

   ```js
   const Foo = {
     template: `...`,
     beforeRouteEnter (to, from, next) {
       // 路由被 confirm 前调用
       // 组件还未渲染出来，不能获取组件实例 `this`
     },
     beforeRouteUpdate (to, from, next) {
       // 在当前路由改变，但是该组件被复用时调用
       // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
       // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
       // 可以访问组件实例 `this`，一般用来数据获取。
     },
     beforeRouteLeave (to, from, next) {
       // 导航离开该组件的对应路由时调用
       // 可以访问组件实例 `this`
     }
   }
   
   ```

**扩展：**

导航全过程

- 导航被触发。
- 在准备离开的组件里调用 beforeRouteLeave 守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。（如果你的组件是重用的）
- 在路由配置里调用 beforeEnter。
- 解析即将抵达的组件。
- 在即将抵达的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫 (2.5+)。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

---

#### 1.11 路由守卫进行判断登录

**参考答案：**

在vue项目中，切换路由时肯定会碰到需要登录的路由，其原理就是在切换路径之前进行判断，你不可能进入页面再去判断有无登录重新定向到login，那样的话会导致页面已经渲染以及它的各种请求已经发出。

1. 如需要登录的路由可在main.js中统一处理（全局前置守卫）

   我们可以在入口文件man.js里面进行配置，使用router.beforeEach方法，不懂得可以打印to，from的参数就ok，requireAuth可以随意换名的，只要man.js里面跟配置路由的routes里面的字段保持一致：

   ```js
   import router from './router'
   router.beforeEach((to, from, next) => {
     if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
       if(!sessionStorage.getItem('token') && !localStorage.getItem('token')){
         next({
           path: '/login',
           query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
         })
       }else{
            next();
       }
     }else {
       next();
     }
   });
   new Vue({
     el: '#app',
     router,
     render: h => h(App)
   })
   
   ```

   ```js
   export default new Router({
       routes: [
           {
               path: '/',
               name: 'home',
               redirect: '/home'
           },
           {
               path: '/home',
               component: Home,
               meta: {
                 title: '',
                 requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
              }
           },
           {
               path:'/login',
               name:'login',
               component:Login
           },
           {
               path:'/register',
               name:'register',
               component:Register
           }
       ]
   })
   
   ```

2. 全局后置守卫

   ```js
   router.afterEach((to, from) => {
     // ...
   })
   ```

3. 单独路由独享守卫（与全局一致，可单独对某个路由进行配置）

   ```js
   const router = new VueRouter({
     routes: [
       {
         path: '/foo',
         component: Foo,
         beforeEnter: (to, from, next) => {
           // ...
         }
       }
     ]
   })
   ```

4. 组件内部路由守卫（可写在与生命周期同级位置）

   ```js
   beforeRouteEnter (to, from, next) {
       // 在渲染该组件的对应路由被 confirm 前调用
       // 不！能！获取组件实例 `this`
       // 因为当守卫执行前，组件实例还没被创建
   },
   beforeRouteUpdate (to, from, next) {
       // 在当前路由改变，但是该组件被复用时调用
       // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
       // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
       // 可以访问组件实例 `this`
   },
   beforeRouteLeave (to, from, next) {
       // 导航离开该组件的对应路由时调用
       // 可以访问组件实例 `this`
   }
   
   ```

   

----

#### 1.12 vue-router 实现懒加载

**参考答案：**

懒加载：当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

实现：结合 Vue 的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件)和 Webpack 的[代码分割功能](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)，可以实现路由组件的懒加载

1. 首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

   ```js
   const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
   ```

2. 在 Webpack 2 中，我们可以使用[动态 import](https://github.com/tc39/proposal-dynamic-import)语法来定义代码分块点 (split point)：

   ```js
   import('./Foo.vue') // 返回 Promise
   ```

   结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

   ```js
   const Foo = () => import('./Foo.vue')
   ```

   在路由配置中什么都不需要改变，只需要像往常一样使用Foo：

   ```js
   const router = new VueRouter({
     routes: [
       { path: '/foo', component: Foo }
     ]
   })
   ```

    

   ---

#### 1.13 js是如何监听HistoryRouter的变化的

   **参考答案：**

   通过浏览器的地址栏来改变切换页面，前端实现主要有两种方式：

   1. 通过hash改变，利用window.onhashchange 监听。

   2. **HistoryRouter：**通过history的改变，进行js操作加载页面，然而history并不像hash那样简单，因为history的改变，除了浏览器的几个前进后退（使用 history.back(), history.forward()和 history.go() 方法来完成在用户历史记录中向后和向前的跳转。）等操作会主动触发popstate 事件，pushState，replaceState 并不会触发popstate事件，要解决history监听的问题，方法是：

      首先完成一个订阅-发布模式，然后重写history.pushState, history.replaceState,并添加消息通知，这样一来只要history的无法实现监听函数就被我们加上了事件通知，只不过这里用的不是浏览器原生事件，而是通过我们创建的event-bus 来实现通知，然后触发事件订阅函数的执行。

   具体操作如下：

   1. 订阅-发布模式示例

   ```js
   class Dep {                  // 订阅池
       constructor(name){
           this.id = new Date() //这里简单的运用时间戳做订阅池的ID
           this.subs = []       //该事件下被订阅对象的集合
       }
       defined(){              // 添加订阅者
           Dep.watch.add(this);
       }
       notify() {              //通知订阅者有变化
           this.subs.forEach((e, i) => {
               if(typeof e.update === 'function'){
                   try {
                      e.update.apply(e)  //触发订阅者更新函数
                   } catch(err){
                       console.warr(err)
                   }
               }
           })
       }
   }
   Dep.watch = null;
   class Watch {
       constructor(name, fn){
           this.name = name;       //订阅消息的名称
           this.id = new Date();   //这里简单的运用时间戳做订阅者的ID
           this.callBack = fn;     //订阅消息发送改变时->订阅者执行的回调函数     
       }
       add(dep) {                  //将订阅者放入dep订阅池
          dep.subs.push(this);
       }
       update() {                  //将订阅者更新方法
           var cb = this.callBack; //赋值为了不改变函数内调用的this
           cb(this.name);         
       }
   }
   
   ```

   1. 重写history方法，并添加window.addHistoryListener事件机制。

   ```js
   var addHistoryMethod = (function(){
           var historyDep = new Dep();
           return function(name) {
               if(name === 'historychange'){
                   return function(name, fn){
                       var event = new Watch(name, fn)
                       Dep.watch = event;
                       historyDep.defined();
                       Dep.watch = null;       //置空供下一个订阅者使用
                   }
               } else if(name === 'pushState' || name === 'replaceState') {
                   var method = history[name];
                   return function(){
                       method.apply(history, arguments);
                       historyDep.notify();
                   }
               }
           }
   }())
   window.addHistoryListener = addHistoryMethod('historychange');
   history.pushState =  addHistoryMethod('pushState');
   history.replaceState =  addHistoryMethod('replaceState');
   
   ```

---

#### 1.14 HashRouter 和 HistoryRouter的区别和原理

**参考答案：**

**vue-router**是Vue官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。vue-router默认 hash 模式，还有一种是history模式。

原理：

1. hash路由：hash模式的工作原理是hashchange事件，可以在window监听hash的变化。我们在url后面随便添加一个#xx触发这个事件。vue-router默认的是hash模式—使用URL的hash来模拟一个完整的URL,于是当URL改变的时候,页面不会重新加载,也就是单页应用了,当#后面的hash发生变化,不会导致浏览器向服务器发出请求,浏览器不发出请求就不会刷新页面,并且会触发hasChange这个事件,通过监听hash值的变化来实现更新页面部分内容的操作

   对于hash模式会创建hashHistory对象,在访问不同的路由的时候,会发生两件事:
   HashHistory.push()将新的路由添加到浏览器访问的历史的栈顶,和HasHistory.replace()替换到当前栈顶的路由

2. history路由：

   主要使用HTML5的pushState()和replaceState()这两个api结合window.popstate事件（监听浏览器前进后退）来实现的,pushState()可以改变url地址且不会发送请求,replaceState()可以读取历史记录栈,还可以对浏览器记录进行修改

区别：

1. hash模式较丑，history模式较优雅
2. pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL
3. pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发记录添加到栈中
4. pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串
5. pushState可额外设置title属性供后续使用
6. hash兼容IE8以上，history兼容IE10以上
7. history模式需要后端配合将所有访问都指向index.html，否则用户刷新页面，会导致404错误

使用方法:

```html
<script>
        // hash路由原理***************************
        // 监听hashchange方法
        window.addEventListener('hashchange',()=>{
            div.innerHTML = location.hash.slice(1)
        })
        // history路由原理************************
        // 利用html5的history的pushState方法结合window.popstate事件（监听浏览器前进后退）
        function routerChange (pathname){
            history.pushState(null,null,pathname)
            div.innerHTML = location.pathname
        }
        window.addEventListener('popstate',()=>{
            div.innerHTML = location.pathname
        })
</script>

```

---

#### 1.15 Vue router 原理, 哪个模式不会请求服务器

**参考答案：**

Vue router 的两种方法，hash模式不会请求服务器

**解析：**

1. url的hash，就是通常所说的锚点#，javascript通过hashChange事件来监听url的变化，IE7以下需要轮询。比如这个 URL：http://www.abc.com/#/hello，hash 的值为#/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此**改变 hash 不会重新加载页面**。
2. HTML5的History模式，它使url看起来像普通网站那样，以“/”分割，没有#，单页面并没有跳转。不过使用这种模式需要服务端支持，服务端在接收到所有请求后，都只想同一个html文件，不然会出现404。因此单页面应用只有一个html，整个网站的内容都在这一个html里，通过js来处理。

---

#### 1.16 组件通信的方式

**参考答案：**

组件通信的方式的方式有以下8种方法：

1. props和$emit

   这是最最常用的父子组件通信方式，父组件向子组件传递数据是通过prop传递的，子组件传递数据给父组件是通过$emit触发事件来做到的

2. attrs和listeners

   第一种方式处理父子组件之间的数据传输有一个问题：如果多层嵌套，父组件A下面有子组件B，组件B下面有组件C,这时如果组件A想传递数据给组件C怎么办呢?

   如果采用第一种方法，我们必须让组件A通过prop传递消息给组件B，组件B在通过prop传递消息给组件C;要是组件A和组件C之间有更多的组件，那采用这种方式就很复杂了。从Vue 2.4开始，提供了attrs和listeners来解决这个问题，能够让组件A之间传递消息给组件C。

3. v-model

   父组件通过v-model传递值给子组件时，会自动传递一个value的prop属性，在子组件中通过this.$emit(‘input',val)自动修改v-model绑定的值

4. provide和inject

   父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量。不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据，只要在父组件的生命周期内，子组件都可以调用。

5. 中央事件总线

   上面方式都是处理的父子组件之间的数据传递，那如果两个组件不是父子关系呢?也就是兄弟组件如何通信?

   这种情况下可以使用中央事件总线的方式。新建一个Vue事件bus对象，然后通过bus.emit触发事件，bus.on监听触发的事件。

   ![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128629803/500809B9BD071EA8067678D9EC046261)

6. parent和children

7. boradcast和dispatch

   vue1.0中提供了这种方式，但vue2.0中没有，但很多开源软件都自己封装了这种方式，比如min ui、element ui和iview等。 比如如下代码，一般都作为一个mixins去使用, broadcast是向特定的父组件，触发事件，dispatch是向特定的子组件触发事件，本质上这种方式还是on和on和emit的封装，但在一些基础组件中却很实用

8. vuex处理组件之间的数据交互

   如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候才有上面这一些方法可能不利于项目的维护，vuex的做法就是将这一些公共的数据抽离出来，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的

----

#### 1.17 vue组件间传值， attrs和listeners 了解过吗？

**参考答案：**

attrs和isteners的作用：解决多层嵌套情况下，父组件A下面有子组件B，组件B下面有组件C，组件A传递数据给组件B的问题，这个方法是在Vue 2.4提出的。

attrs和listeners解决问题的过程：

C组件

```js
Vue.component('C',{ 
     template:` 
     <div> 
     <input type="text" v-model="$attrs.messageC" @input="passCData($attrs.messageC)"> 
     </div> 
     `, 
     methods:{ 
         passCData(val){ 
             //触发父组件A中的事件 
             this.$emit('getCData',val) 
         } 
     } 
}) 

```

B组件

```js
Vue.component('B',{ 
 data(){ 
     return { 
         myMessage:this.message 
     } 
 }, 
 template:` 
 <div> 
 	<input type="text" v-model="myMessage" @input="passData(myMessage)"> 
 	<C v-bind="$attrs" v-on="$listeners"></C> 
 </div> 
 `, 
 //得到父组件传递过来的数据 
 props:['message'], 
 methods:{ 
     passData(val){ 
         //触发父组件中的事件 
         this.$emit('getChildData',val) 
     } 
 } 
}) 

```

A组件

```js
Vue.component('A',{ 
 template:` 
 <div> 
     <p>this is parent compoent!</p> 
     <B  
         :messageC="messageC"  
         :message="message"  
         v-on:getCData="getCData"  
         v-on:getChildData="getChildData(message)"> 
     </B> 
 </div> 
 `, 
 data(){ 
     return { 
         message:'Hello', 
         messageC:'Hello c' 
     } 
 }, 
 methods:{ 
     getChildData(val){ 
         console.log('这是来自B组件的数据') 
     }, 
     //执行C子组件触发的事件 
     getCData(val){ 
            console.log("这是来自C组件的数据："+val) 
     } 
 } 
}) 
var app=new Vue({ 
 el:'#app', 
 template:` 
 <div> 
 <A></A> 
 </div> 
 ` 
}) 

```

**解析：**

- C组件中能直接触发getCData的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性
- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props(除了B组件中props声明的)

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128655053/F98E288D764804F2354ED35EC26D637C)

----

