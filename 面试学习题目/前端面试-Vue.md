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

#### 1.18 组建传值，事件总线是怎么用的

**参考答案：**

**中央事件总线**主要用来解决兄弟组件通信的问题。

实现方式：新建一个Vue事件bus对象，bus.emit触发事件，bus.on监听触发的事件。

```js
Vue.component('brother1',{ 
 data(){ 
     return { 
        myMessage:'Hello brother1' 
     } 
 }, 
 template:` 
     <div> 
     	<p>this is brother1 compoent!</p> 
     	<input type="text" v-model="myMessage" @input="passData(myMessage)"> 
     </div> 
 `, 
 methods:{ 
     passData(val){ 
         //触发全局事件globalEvent 
         bus.$emit('globalEvent',val) 
     } 
 } 
}) 
Vue.component('brother2',{ 
 template:` 
 <div> 
 <p>this is brother2 compoent!</p> 
 <p>brother1传递过来的数据：{{brothermessage}}</p> 
 </div> 
 `, 
 data(){ 
     return { 
         myMessage:'Hello brother2', 
         brothermessage:'' 
     } 
 }, 
 mounted(){ 
      //绑定全局事件globalEvent 
     bus.$on('globalEvent',(val)=>{ 
        this.brothermessage=val; 
     }) 
 } 
}) 
//中央事件总线 
var bus=new Vue(); 
var app=new Vue({ 
 el:'#app', 
 template:` 
     <div> 
        <brother1></brother1> 
        <brother2></brother2> 
     </div> 
 ` 
}) 

```

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128668820/B30491C32F761B02007519727B8B2DF9)

----

#### 1.19 vue生命周期中异步加载在mouted还是create里实现

**参考答案:**

最常用的是在 created 钩子函数中调用异步请求

**解析：**

一般来说，可以在，created，mounted中都可以发送数据请求，但是，**大部分时候，会在created发送请求**。
Created的使用场景：如果页面首次渲染的就来自后端数据。因为，此时data已经挂载到vue实例了。
在 created（如果希望首次选的数据来自于后端，就在此处发请求）（只发了异步请求，渲染是在后端响应之后才进行的）、beforeMount、mounted（**在mounted中发请求会进行二次渲染**） 这三个钩子函数中进行调用。
因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是**最常用的是在 created 钩子函数中调用异步请求**，

因为在 created 钩子函数中调用异步请求有两个优点：

- 第一点：能更快获取到服务端数据，减少页面 loading 时间；

- 第二点：放在 created 中有助于一致性，因为ssr 不支持 beforeMount 、mounted 钩子函数。

----

#### 1.20 vue钩子函数(重点问了keep-alive)

**参考答案：**

Vue生命周期经历哪些阶段：

1. 总体来说：初始化、运行中、销毁
2. 详细来说：开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、销毁等一系列过程

生命周期经历的阶段和钩子函数:

1. 实例化vue(组件)对象：new Vue()

2. 初始化事件和生命周期 init events 和 init cycle

3. beforeCreate函数：

   在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

   即此时vue（组件）对象被创建了，但是vue对象的属性还没有绑定，如data属性，computed属性还没有绑定，即没有值。

   此时还没有数据和真实DOM。

   即：属性还没有赋值，也没有动态创建template属性对应的HTML元素（二阶段的createUI函数还没有执行）

4. 挂载数据（属性赋值）

   包括 属性和computed的运算

5. Created函数：

   vue对象的属性有值了，但是DOM还没有生成，$el属性还不存在。

   此时有数据了，但是还没有真实的DOM

   即：data，computed都执行了。属性已经赋值，但没有动态创建template属性对应的HTML元素，所以，此时如果更改数据不会触发updated函数

   如果：数据的初始值就来自于后端，可以发送ajax，或者fetch请求获取数据，但是，此时不会触发updated函数

6. 检查

6.1 检查是否有el属性
检查vue配置，即new Vue{}里面的el项是否存在，有就继续检查template项。没有则等到手动绑定调用 vm.mount()完成了全局变量el的绑定。

6.2 检查是否有template属性

检查配置中的template项，如果没有template进行填充被绑定区域，则被绑定区域的el对outerHTML（即 整个#app DOM对象，包括和标签）都作为被填充对象替换掉填充区域。即： 如果vue对象中有 template属性，那么，template后面的HTML会替换$el对应的内容。如果有render属 性，那么render就会替换template。 即：优先关系时： render > template > el



1. beforeMount函数：

   模板编译(template)、数据挂载(把数据显示在模板里)之前执行的钩子函数

   此时 this.$el有值，但是数据还没有挂载到页面上。即此时页面中的{{}}里的变量还没有被数据替换

2. 模板编译：用vue对象的数据（属性）替换模板中的内容

3. Mounted函数：

   模板编译完成，数据挂载完毕

   即：此时已经把数据挂载到了页面上，所以，页面上能够看到正确的数据了。

   一般来说，我们在此处发送异步请求（ajax，fetch，axios等），获取服务器上的数据，显示在DOM里。

4. beforeUpdate函数：

   组件更新之前执行的函数，只有数据更新后，才能调用（触发）beforeUpdate，注意：**此数据一定是在模板上出现的数据**，否则，不会，也没有必要触发组件更新（因为数据不出现在模板里，就没有必要再次渲染）

   数据更新了，但是，vue（组件）对象对应的dom中的内部（innerHTML）没有变，所以叫作**组件更新前**

5. updated函数：

   组件更新之后执行的函数

   vue（组件）对象对应的dom中的内部（innerHTML）改变了，所以，叫作**组件更新之后**

6. activated函数：keep-alive组件激活时调用

7. deactivated函数：keep-alive组件停用时调用

8. beforeDestroy：vue（组件）对象销毁之前

9. destroyed：vue组件销毁后

keep-alive

<keep-alive></keep-alive>包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染。

**解析：** 比如有一个列表和一个详情，那么用户就会经常执行打开详情=>返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可以对列表组件使用<keep-alive></keep-alive>进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染

-----

#### 1.21 vue keep-alive

**参考答案：**

**keep-alive**：keep-alive可以实现组件缓存，是Vue.js的一个内置组件。

作用：

1. 它能够把不活动的组件实例保存在内存中，而不是直接将其销毁
2. 它是一个抽象组件，**不会被渲染到真实DOM中**，也不会出现在父组件链中

使用方式：

1. 常用的两个属性include/exclude，允许组件有条件的进行缓存。
2. 两个生命周期activated/deactivated，用来得知当前组件是否处于活跃状态。
3. keep-alive的中还运用了LRU(Least Recently Used)算法。

原理：Vue 的缓存机制并不是直接存储 DOM 结构，而是将 DOM 节点抽象成了一个个 VNode节点，所以，keep- alive的缓存也是基于VNode节点的而不是直接存储DOM结构。

其实就是将需要缓存的VNode节点保存在this.cache中, 在render时,如果VNode的name符合在缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染。

---

#### 1.22 既然函数是引用类型，为什么 vue 的 data 还是可以用函数

**参考答案：**

JavaScript只有函数构成作用域(注意理解作用域，**只有函数{}构成作用域**,对象的{}以及if(){}都不构成作用域),**data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立，不会相互影响**。

---

#### 1.23 vue 中 $nextTick 作用与原理

**参考答案:**

作用：是**为了可以获取更新后的DOM** 。

由于Vue DOM更新是异步执行的，即修改数据时，视图不会立即更新，而是会监听数据变化，并缓存在同一事件循环中，等同一数据循环中的所有数据变化完成之后，再统一进行视图更新。为了确保得到更新后的DOM，所以设置了 Vue.nextTick()，就是在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。

原理：

在下次 DOM 更新循环结束之后执行延迟回调。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用

- Promise
- MutationObserver
- setImmediate
- 如果以上都不行则采用setTimeout

定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

---

#### 1.24 vue的特性

**参考答案：**

- 表单操作
- 自定义指令
- 计算属性
- 过滤器
- 侦听器
- 生命周期

---

#### 1.25 v-if v-show区别

**参考答案：**

v-show和v-if都是用来显示隐藏元素，v-if还有一个v-else配合使用，两者达到的效果都一样，但是v-if更消耗性能的，因为v-if在显示隐藏过程中有DOM的添加和删除，v-show就简单多了，只是操作css。

**解析：**

v-show

v-show不管条件是真还是假，第一次渲染的时候都会编译出来，也就是标签都会添加到DOM中。之后切换的时候，通过display: none;样式来显示隐藏元素。可以说只是改变css的样式，几乎不会影响什么性能。

v-if

在首次渲染的时候，如果条件为假，什么也不操作，页面当作没有这些元素。当条件为真的时候，开始局部编译，动态的向DOM元素里面添加元素。当条件从真变为假的时候，开始局部编译，卸载这些元素，也就是删除。

---

#### 1.26 Vue 列表为什么加 key

**参考答案：**

vue中列表循环需加:key="唯一标识" 唯一标识且最好是静态的，因为vue组件高度复用增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用主要是为了高效的更新虚拟DOM

**解析：**

vue和react的虚拟DOM的Diff算法大致相同，其核心是基于两个简单的假设
首先讲一下diff算法的处理方法，对操作前后的dom树同一层的节点进行对比，一层一层对比，



![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128744220/448BD33DD57542E1E6A5B03957CC7034)

当某一层有很多相同的节点时，也就是列表节点时，Diff算法的更新过程默认情况下也是遵循以上原则。

比如一下这个情况：



![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128758816/EAA1B46F9F910D663C45A96D03B305C4)

可以在B和C之间加一个F，Diff算法默认执行起来是这样的：

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128776932/CE0C377B5746FC3BE8D5C8466A40AA87)

即把C更新成F，D更新成C，E更新成D，最后再插入E，是不是很没有效率？

所以我们需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

---

#### 1.27 jquery 和 vue相比

**参考答案：**

1. jquery：轻量级的js库
2. vue：前端js库，是一个精简的MVVM，它专注于MVVM模型的viewModel层，通过双向数据绑定把view和model层连接起来，通过对数据的操作就可以完成对页面视图的渲染。

| **Vue**                                                      | **jQuery**                              |
| :----------------------------------------------------------- | :-------------------------------------- |
| 数据驱动视图(MVVM思想:数据视图完全分离；数据驱动、双向绑定；) | 直接操作DOM(获取、修改、赋值、事件绑定) |
| 操作简单                                                     | 操作麻烦                                |
| 模块化                                                       | x                                       |
| 实现单页面                                                   | x                                       |
| 组件复用                                                     | x                                       |
| 性能高：使用的虚拟DOM，减少 dom的操作                        | x                                       |

**扩展：**

1. vue适用的场景：复杂数据操作的后台页面，表单填写页面
   1. jquery适用的场景：比如说一些html5的动画页面，一些需要js来操作页面样式的页面
   2. 二者也是可以结合起来一起使用的，vue侧重数据绑定，jquery侧重样式操作，动画效果等，则会更加高效率的完成业务需求

----

#### 1.28 为什么选择用vue做页面展示

**参考答案：**

- MVVM 框架：

  Vue 正是使用了这种 MVVM 的框架形式，并且通过声明式渲染和响应式数据绑定的方式来帮助我们完全避免了对 DOM 的操作。

- 单页面应用程序

  Vue 配合生态圈中的 Vue-Router 就可以非常方便的开发复杂的单页应用

- 轻量化与易学习

  Vue 的生产版本只有 30.90KB 的大小，几乎不会对我们的网页加载速度产生影响。同时因为 Vue 只专注于视图层，单独的 Vue 就像一个库一样，所以使我们的学习成本变得非常低

- 渐进式与兼容性

  Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。Vue 只做界面，而把其他的一切都交给了它的周边生态（axios（Vue 官方推荐）、Loadsh.js、Velocity.js 等）来做处理，这就要求 Vue 必须要对其他的框架拥有最大程度的兼容性

- 视图组件化

  Vue 允许通过组件来去拼装一个页面，每个组件都是一个可复用的 Vue 实例，组件里面可以包含自己的数据，视图和代码逻辑。方便复用

- 虚拟 DOM（Virtual DOM）

  Vue 之所以可以完全避免对 DOM 的操作，就是因为 Vue 采用了虚拟 DOM 的方式，不但避免了我们对 DOM 的复杂操作，并且大大的加快了我们应用的运行速度。

- 社区支持

  得益于 Vue 的本土化身份（Vue 的作者为国人尤雨溪），再加上 Vue 本身的强大，所以涌现出了特别多的国内社区，这种情况在其他的框架身上是没有出现过的，这使得我们在学习或者使用 Vue 的时候，可以获得更多的帮助

- 未来的 Vue 走向

  Vue 是由国人尤雨溪在 Google 工作的时候，为了方便自己的工作而开发出来的一个库，而在 Vue 被使用的过程中，突然发现越来越多的人喜欢上了它。所以尤雨溪就进入了一个边工作、边维护的状态，在这种情况下 Vue 依然迅速的发展。

  而现在尤雨溪已经正式辞去了 Google 的工作，开始专职维护 Vue，同时加入进来的还有几十位优秀的开发者，他们致力于把 Vue 打造为最受欢迎的前端框架。事实证明 Vue 确实在往越来越好的方向发展了（从 Angular、React、Vue 的对比图中可以看出 Vue 的势头）。所以我觉得完全不需要担心未来 Vue 的发展，至少在没有新的颠覆性创新出来之前，Vue 都会越做越好。

---

#### 1.29 vue/angular区别

**参考答案：**

1. 体积和性能

   相较于vue，angular显得比较臃肿，比如一个包含了 Vuex + Vue Router 的 Vue 项目 (gzip 之后 30kB) ，而 angular-cli 生成的默认项目尺寸 (~65KB) 还是要小得多。

   在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。 对于庞大的应用来说，这个优化差异还是比较明显的

2. Virtual DOM vs Incremental DOM

   在底层渲染方面，vue 使用的虚拟dom，而angular 使用的是Incremental DOM，Incremental DOM的优势在于低内开销

3. Vue 相比于 Angular 更加灵活，可以按照不同的需要去组织项目的应用代码。比如，甚至可以直接像引用jquery那样在HTML中引用vue，然后仅仅当成一个前端的模板引擎来用。

4. es6支持

   es6是新一代的javascript标准，对JavaScript进行了大量的改进，使用es6开发已是基本需求。虽然有部分十分老旧的浏览器不支持es6，但是可以利用现代开发工具将es6编译成es5。在对es6的支持上两者都做得很好，（TS本身就是es6的超集）

5. 学习曲线

   针对前端而言，angular的学习曲线相对较大，vue学习起来更容易一些。不过对java和c的使用者而言，angular的静态检查、依赖注入的特性，以及面向对象的编程风格，使得angular都要更亲切一些。

6. 使用热度

   在使用热度上，vue具有更大优势，主要原因是更受数量庞大的中国开发者欢迎。较低的上手难度，易懂的开发文档，以及国人主导开发的光环，都使得vue更为流行

----

#### 1.30 双向数据绑定原理

**参考答案：**

目前几种主流的mvc(vm)框架都实现了单向数据绑定，而我所理解的双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。

实现数据绑定的做法有大致如下几种：

**发布者-订阅者模式:** 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是vm.set('property', value)

这种方式现在毕竟太low了，我们更希望通过vm.property = value这种方式更新数据，同时自动更新视图，于是有了下面两种方式

**脏值检查:** angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过setInterval()定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下：

- DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
- XHR响应事件 ( $http )
- 浏览器Location变更事件 ( $location )
- Timer事件( timeout，interval )
- 执行 digest()或apply()

**数据劫持:** vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

----

#### 1.31 既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化,为什么还需要虚拟 DOM diff 呢?

**参考答案**：

**前置知识:** 依赖收集、虚拟 DOM、响应式系统

现代前端框架有两种方式侦测变化，一种是 **pull** ，一种是 **push**

**pull:** 其代表为React，我们可以回忆一下React是如何侦测到变化的,我们通常会用setStateAPI显式更新，然后React会进行一层层的Virtual Dom Diff操作找出差异，然后Patch到DOM上，React从一开始就不知道到底是哪发生了变化，只是知道「有变化了」，然后再进行比较暴力的Diff操作查找「哪发生变化了」，另外一个代表就是Angular的脏检查操作。

**push:** Vue的响应式系统则是push的代表，当Vue程序初始化的时候就会对数据data进行依赖的收集，一但数据发生变化,响应式系统就会立刻得知。因此Vue是一开始就知道是「在哪发生变化了」，但是这又会产生一个问题，如果你熟悉Vue的响应式系统就知道，通常一个绑定一个数据就需要一个Watcher

**一但我们的绑定细粒度过高就会产生大量的Watcher，这会带来内存以及依赖追踪的开销**，而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的方案,在组件级别进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异，而Virtual Dom Diff则是pull操作，Vue是push+pull结合的方式进行变化侦测的。

---

#### 1.32 简单聊聊 new Vue 以后发生的事情

**参考答案**：

1. new Vue会调用 Vue 原型链上的_init方法对 Vue 实例进行初始化；
2. 首先是initLifecycle初始化生命周期，对 Vue 实例内部的一些属性（如 children、parent、isMounted）进行初始化；
3. initEvents，初始化当前实例上的一些自定义事件（Vue.$on）；
4. initRender，解析slots绑定在 Vue 实例上，绑定createElement方法在实例上；
5. 完成对生命周期、自定义事件等一系列属性的初始化后，触发生命周期钩子beforeCreate；
6. initInjections，在初始化data和props之前完成依赖注入（类似于 React.Context）；
7. initState，完成对data和props的初始化，同时对属性完成数据劫持内部，启用监听者对数据进行监听（更改）；
8. initProvide，对依赖注入进行解析；
9. 完成对数据（state 状态）的初始化后，触发生命周期钩子created；
10. 进入挂载阶段，将 vue 模板语法通过vue-loader解析成虚拟 DOM 树，虚拟 DOM 树与数据完成双向绑定，触发生命周期钩子beforeMount；
11. 将解析好的虚拟 DOM 树通过 vue 渲染成真实 DOM，触发生命周期钩子mounted；

----

#### 1.33 v-for中的key的理解？

**参考答案**：

需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。主要是为了高效的更新虚拟DOM。

----

#### 1.34 vue首屏白屏如何解决？

**参考答案**：

1. 路由懒加载
2. vue-cli开启打包压缩 和后台配合 gzip访问
3. 进行cdn加速
4. 开启vue服务渲染模式
5. 用webpack的externals属性把不需要打包的库文件分离出去，减少打包后文件的大小
6. 在生产环境中删除掉不必要的console.log

```web-idl
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ //添加-删除console.log
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      sourceMap: true
    }),
```

7. 开启nginx的gzip ,在nginx.conf配置文件中配置

```json
http {  //在 http中配置如下代码，
   gzip on;
   gzip_disable "msie6"; 
   gzip_vary on; 
   gzip_proxied any;
   gzip_comp_level 8; #压缩级别
   gzip_buffers 16 8k;
   #gzip_http_version 1.1;
   gzip_min_length 100; #不压缩临界值
   gzip_types text/plain application/javascript application/x-javascript text/css
    application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
 }
```

8. 添加loading效果，给用户一种进度感受

---

#### 1.35 vue单页面和传统的多页面区别？

**参考答案**:

单页面应用（SPA）

通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。

多页面（MPA）

指一个应用中有多个页面，页面跳转时是整页刷新

**单页面的优点：**

用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。

**单页面缺点：**

不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，**所以需要自己建立堆栈管理**）；初次加载时耗时多；页面复杂度提高很多。

---

#### 1.36 root、refs、$parent的使用？

**参考答案**：

$root

访问根元素。

语法：
this.$root.属性名。

在普通html工程内的用法看官网即可。

如果在vue-cli工程内使用$root:
有人可能认为根元素是App.vue。但是其实是main.js中new Vue这个实例，在new Vue这个实例中定义data即可

$root可以将根组件作为一个全局store来访问或使用。

> 官网提示：对于这种在根组件定义data以实现全局数据来替换vuex的方式仅适用于demo或者非常小型的有少量组件的应用。但是对于中大型应用就很不适用了。强烈推荐适用Vuex
> 

$parent

$parent属性可以用来从一个子组件访问父组件的实例，可以替代将数据以 prop 的方式传入子组件的方式；当变更父级组件的数据的时候，容易造成调试和理解难度增加；

访问父元素。

语法很简单：
this.$parent.`属性名`。

$refs
$refs用来实现父组件对于特定子组件进行访问

子组件标签需要添加ref属性值，父组件可通过this.$refs.ref属性值来访问实例
举例：

```vue
<base-input ref="usernameInput"></base-input>

this.$refs.usernameInput
```

> $refs 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。

$children

$children返回的是一个组件集合，如果你能清楚的知道子组件的顺序，你也可以使用下标来操作；
this.$children[0]

---

#### 1.37 路由跳转和location.href的区别？

**参考答案**：

使用location.href='/url'来跳转，简单方便，但是刷新了页面；
使用路由方式跳转，无刷新页面，静态跳转；

---

#### 1.38 scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？

**参考答案**：

css的预编译。

使用步骤：

1. 先装css-loader、node-loader、sass-loader等加载器模块
2. 在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss
3. 在同一个文件，配置一个module属性
4. 然后在组件的style标签加上lang属性 ，例如：lang=”scss”

特性:

可以用变量，例如（$变量名称=值）；
可以用混合器，例如（）
可以嵌套

----

#### 1.39 delete与vue.delete区别?

delte会删除数组的值，但是它依然会在内存中占位置
而vue.delete会删除数组在内存中的占位

```js
let arr1 = [1,2,3]
let arr2 = [1,2,3]
delete arr1[1]
this.$delete(arr2,2)
console.log(arr1)    //【1, empty, 3】
console.log(arr2)    //【1,2】
```

---

#### 1.40 computed和watch的区别

**参考答案**：

computed

计算结果并返回，只有当被计算的属性发生改变时才会触发（即：计算属性的结果会被缓存，除非依赖的响应属性变化才会重新计算）

watch

监听某一个值，当被监听的值发生变化时，执行相关操作。

与computed的区别是，**watch更加适用于监听某一个值的变化，并做对应操作**，比如请求后的接口等。**而computed适用于计算已有的值并返回结果**。 监听简单数据类型：

```js
data(){      
    return{        
        'first':2     
    }   
},   
 watch:{      
     first(){        
         console.log(this.first)    
    }   
 },
```

---

#### 1.41 Vue 为什么要用 vm.$set() 解决对象新增属性不能响应的问题 ？你能说说如下代码的实现原理么？

**参考答案**：

**1）Vue为什么要用vm.$set() 解决对象新增属性不能响应的问题**

1. Vue使用了Object.defineProperty实现双向数据绑定
2. 在初始化实例时对属性执行 getter/setter 转化
3. 属性必须在data对象上存在才能让Vue将它转换为响应式的（这也就造成了Vue无法检测到对象属性的添加或删除）

所以Vue提供了Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value)

**2）框架本身是如何实现的呢?**

> Vue 源码位置：vue/src/core/instance/index.js

```js
export function set (target: Array<any> | Object, key: any, val: any): any {
  // target 为数组  
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式  
    target.splice(key, 1, val)
    return val
  }
  // key 已经存在，直接修改属性值  
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = (target: any).__ob__
  // target 本身就不是响应式数据, 直接赋值
  if (!ob) {
    target[key] = val
    return val
  }
  // 对属性进行响应式处理
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}
```

我们阅读以上源码可知，vm.$set 的实现原理是：

1. 如果目标是数组，直接使用数组的 splice 方法触发相应式；
2. 如果目标是对象，会先判读属性是否存在、对象是否是响应式，
3. 最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理

---

## 1.42 说说你对vue的理解

Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。是一款流行的JavaScript前端框架，旨在更好地组织与简化Web开发。Vue**所关注的核心是MVC模式中的视图层**，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互  PS: Vue作者尤雨溪是在为AngularJS工作之后开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于2014年2月

### **Vue核心特性**

**数据驱动（MVVM)**

```
MVVM 表示的是 Model-View-ViewModel
```

- Model：模型层，负责处理业务逻辑以及和服务器端进行交互
- View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
- ViewModel：视图模型层，**用来连接Model和View**，是Model和View之间的通信桥梁

### 组件化

1.什么是组件化一句话来说就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在`Vue`中每一个`.vue`文件都可以视为一个组件

2.组件化的优势

- 降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现
- 调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单
- 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级

### 指令系统

解释：指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

- 常用的指令
  - 条件渲染指令 `v-if`
  - 列表渲染指令`v-for`
  - 属性绑定指令`v-bind`
  - 事件绑定指令`v-on`
  - 双向数据绑定指令`v-model`

没有指令之前我们是怎么做的？是不是先要获取到DOM然后在....干点啥

---

## Vue跟传统开发的区别

总结就是：

- Vue所有的界面事件，都是只去操作数据的，Jquery操作DOM
- Vue所有界面的变动，都是根据数据自动绑定出来的，Jquery操作DOM

---

## Vue和React对比

### 相同点

- 都有**组件化思想**
- 都支持服务器端渲染
- 都有Virtual DOM（虚拟dom）
- 数据驱动视图
- 都有支持native的方案：`Vue`的`weex`、`React`的`React native`
- 都有自己的构建工具：`Vue`的`vue-cli`、`React`的`Create React App`

### 区别

- 数据流向的不同。`react`从诞生开始就推崇**单向数据流**，而`Vue`是**双向数据流**
- 数据变化的实现原理不同。`react`使用的是**不可变数据**，而`Vue`使用的是**可变的数据**
- 组件化通信的不同。`react`中我们通过使用**回调函数**来进行通信的，而`Vue`中子组件向父组件传递消息有两种方式：**事件和回调函数**
- diff算法不同。`react`主要使用**diff队列**保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。`Vue` 使用**双向指针**，边对比，边更新DOM

---

## vue2的diff算法与vue3的diff算法

vue2 核心 diff 算法 采用的是`双端比较算法`

vue3 核心 diff 算法采用的是`去头尾的最长递增子序列算法`

在计算机科学中，最长递增子序列（longest increasing subsequence）问题是指，在一个给定的数值序列中，找到一个子序列，使得这个子序列元素的数值依次递增，并且这个子序列的长度尽可能地大。最长递增子序列中的元素在原序列中不一定是连续的。解决最长递增子序列问题的算法最低要求O(n log n)的时间复杂度，这里n表示输入序列的规模。

多数解法是使用动态规划的思想，算法的时间复杂度是 O(n2)，而 Vue.js 内部使用的是“贪心 + 二分查找”的算法，贪心算法的时间复杂度是 O(n)，二分查找的时间复杂度是 O(logn)，所以它的总时间复杂度是 `O(nlogn)`。



Diff算法即差异查找算法。

## Vue的diff策略

- 传统的计算两颗树的差异时间复杂度为O(n^3),显然成本比较高（老树的每一个节点都去遍历新树的节点，直到找到新树对应的节点。那么这个流程就是 O(n^2)，再紧接着找到不同之后，再计算最短修改距离然后修改节点，这里是 O(n^3)。）
- Vue采用对树的节点进行同层比较，**所以时间复杂度是O(n)，比较高效**

## Vue Diff算法的基于什么策略

- Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计 （tree-diff）
- 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结（component diff）
- 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分（element-diff）

## Vue Diff算法的原因以及目的

Vue diff算法是vue2中引入虚拟DOM的产物，它的出现是为了通过对比新旧节点计算出需要改动的最小变化。 **核心思想：尽可能的复用老节点**

## Vue2 diff流程

### 新老节点不同

- 创建新节点 以当前旧节点为参考 插入到DOM
- 删除旧节点

### 新老节点相同

- 如果两个节点引用一致 直接返回
- 内部都是文本节点 新旧不同 更新文本节点的内容
- 只有新的有子节点 移除旧节点的内容 批量添加
- 只有老的有子节点 批量移除
- 两者都有子节点且不同 执行`updateChildren`更新子节点

#### updateChildren

根据我们日常操作节点的习惯、移动 添加 和 删除 ，Vue2对比两个子节点采用**双端比较法**，通过对比老节点在新节点的位置尽可能的复用老节点。

- 头头对比 尾尾对比
- 交叉对比 头尾对比
- 新的节点有剩余 进行添加操作
- 老的节点有剩余 进行移除

## Vue3的diff流程

### 新旧节点不同

- 销毁旧节点
- 根据新节点的类型 去挂载不同的节点

### 处理组件

- 先判断子组件是否需要更新
- 如果需要则递归执行子组件的副渲染函数来更新
- 否则仅仅更新一些 vnode 的属性，并让子组件实例保留对组件 vnode 的引用

### 处理元素

- 更新props
- 更新子节点 子节点有三种类型 纯文本 Vnode数组 和 空

**旧节点是纯文本：**

- 新节点也是 做简单的替换
- 新节点是空 删除
- 新节点是Vnode数组 批量添加

**旧节点是空：**

- 如果新子节点是纯文本，那么在旧子节点的父容器下添加新文本节点即可；
- 如果新子节点也是空，那么什么都不需要做
- 如果新子节点是 vnode 数组，那么直接去旧子节点的父容器下添加多个新子节点即可。

**旧子节点是 vnode 数组：**

- 如果新子节点是纯文本，那么先删除旧子节点，再去旧子节点的父容器下添加新文本节点；
- 如果新子节点是空，那么删除旧子节点即可
- 如果新子节点也是 vnode 数组，那么就需要做完整的 diff 新旧子节点了，这是最复杂的情况，内部运用了核心 diff 算法

### 新旧节点都是数组

新旧数组之间的对比，无非是通过更新、删除、添加和移除节点来完成的，diff算法的核心以**较低的成本完成子节点的更新为目的**，求解生成新子节点 DOM 的系列操作。 过程：

- 同步头节点
- 同步尾节点
- 添加新节点 新子节点有剩余
- 删除多余节点 旧节点有剩余
- 处理未知子序列

### 处理未知子序列

有时会碰到比较复杂的未知子序列：对于移动、删除、添加、更新这些操作，其中最复杂的就是移动操作，`Vue针对未知子序列的核心是通过最长递增子序列查找到需要移动的最小值`。

在查找过程中需要对比新旧子序列，那么我们就要遍历某个序列，如果在遍历旧子序列的过程中需要判断某个节点是否在新子序列中存在，这就需要双重循环，而双重循环的复杂度是 O(n2) ，为了优化这个复杂度，我们可以用一种空间换时间的思路，建立索引图，把时间复杂度降低到 O(n)。

#### 建立索引图

- 根据for循环中的key建立新子序列中的索引图
- 然后再创建一个新旧子序列索引的映射关系，用于确定**最长递增子序列**、
- 然后正序遍历旧子序列，看看是否在新子序列的索引图中，如果不再就删除，如果在根据索引去判断这个节点是否在最长递增子序列中，如果在就不需要进行移动，**如果不再就要进行移动操作**
- 然后在遍历的过程中对新节点打上标记，对于没有被查找的标识为0，需要进行添加操作



---

## SPA首屏加载速度慢的怎么解决？

```js
const times = performance.timing;
for (let key in times){
  console.log(key + ": " + times[key]);
}
/*
navigationStart: 1654001520782
test127.html:258 unloadEventStart: 1654001520897
test127.html:258 unloadEventEnd: 1654001520897
test127.html:258 redirectStart: 0
test127.html:258 redirectEnd: 0
test127.html:258 fetchStart: 1654001520790
test127.html:258 domainLookupStart: 1654001520790
test127.html:258 domainLookupEnd: 1654001520790
test127.html:258 connectStart: 1654001520790
test127.html:258 connectEnd: 1654001520790
test127.html:258 secureConnectionStart: 0
test127.html:258 requestStart: 1654001520819
test127.html:258 responseStart: 1654001520833
test127.html:258 responseEnd: 0
test127.html:258 domLoading: 1654001520909
test127.html:258 domInteractive: 0
test127.html:258 domContentLoadedEventStart: 0
test127.html:258 domContentLoadedEventEnd: 0
test127.html:258 domComplete: 0
test127.html:258 loadEventStart: 0
test127.html:258 loadEventEnd: 0
test127.html:258 toJSON: function toJSON() { [native code] }
*/
```

