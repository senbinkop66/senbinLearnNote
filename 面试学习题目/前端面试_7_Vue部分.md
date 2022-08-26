

# vue基础

----



## 1.1 v-model 作用？

v-model本质上不过是语法糖，可以用 v-model 指令在**表单**及**元素**上创建双向数据绑定。

1. 它会**根据控件类型自动选取正确的方法**来更新元素
2. 它**负责监听用户的输入事件以更新数据**，并对一些极端场景进行一些特殊处理
3. v-model会忽略所有表单元素的value、checked、selected特性的初始值,而**总是将 Vue 实例的数据作为数据来源**，因此**我们应该通过 JavaScript 在组件的data选项中声明初始值。**

**扩展：**

v-model在内部**为不同的输入元素使用不同的属性并抛出不同的事件**：

1. text 和 textarea 元素使用value属性和input事件；
2. checkbox 和 radio 使用checked属性和change事件；
3. select 字段将value作为 prop 并将change作为事件。





---

## 1.2 v-model 实现原理？

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

## 1.3 Vue2.0 双向绑定的缺陷？

Vue2.0的数据响应是采用**数据劫持**结合**发布者-订阅者模式**的方式，通过**Object.defineProperty ()** 来劫持各个属性的setter、getter，但是它并不算是实现数据的响应式的完美方案，某些情况下需要对其进行修补或者hack这也是它的缺陷，主要表现在两个方面：

1. vue 实例创建后，**无法检测到对象属性的新增或删除**，只能追踪到数据是否被修改
2. **不能监听数组的变化**

**解析：**

1. vue 实例创建后，无法检测到对象属性的新增或删除，只能追踪到数据是否被修改(**Object.defineProperty只能劫持对象的属性**)。

   当创建一个Vue实例时，将遍历所有DOM对象，并为每个数据属性添加了get和set。get和set 允许Vue观察数据的更改并触发更新。但是，**如果你在Vue实例化后添加（或删除）一个属性，这个属性不会被vue处理，改变get和set。**

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

   vue在实现数组的响应式时，它使用了一些hack，**把无法监听数组的情况通过重写数组的部分方法来实现响应式**，这也只限制在数组的push/pop/shift/unshift/splice/sort/reverse七个方法，其他数组方法及数组的使用则无法检测到，例如如下两种使用方式

   ```js
   vm.items[index] = newValue;
   vm.items.length
   ```

   vue实现数组响应式的方法

   **通过重写数组的Array.prototype对应的方法**，具体来说就是重新指定要操作数组的prototype，并重新该prototype中对应上面的7个数组方法，通过下面代码简单了解下实现原理：

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

## 1.4 Vue3.0 实现数据双向绑定的方法

vue3.0 实现数据双向绑定是通过**Proxy**

**Proxy**是 ES6 中新增的一个特性，翻译过来意思是"代理"，用在这里表示由它来“代理”某些操作。 Proxy 让我们能够以简洁易懂的方式控制外部对对象的访问。其功能非常类似于设计模式中的代理模式。

Proxy 可以理解成，**在目标对象之前架设一层“拦截**”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

使用 Proxy 的**核心优点**是可以交由它来**处理一些非核心逻辑**（如：读取或设置对象的某些属性前记录日志；设置对象的某些属性值前，需要验证；某些属性的访问控制等）。 从而可以让对象只需关注于核心逻辑，达到关注点分离，降低对象复杂度等目的。

**扩展：**

使用proxy实现，双向数据绑定，相比2.0的Object.defineProperty ()优势：

1. 可以劫持整个对象，并返回一个新对象
2. 有13种劫持操作



---

## 1.5 8种组件间通信的方式

开始之前，我们把**组件间通信**这个词进行拆分

- 组件
- 通信

都知道组件是`vue`最强大的功能之一，`vue`中每一个`.vue`我们都可以视之为一个组件通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的。广义上，任何信息的交通都是通信**组件间通信**即指组件(`.vue`)通过某种方式来传递信息以达到某个目的。举个栗子我们在使用`UI`框架中的`table`组件，可能会往`table`组件中传入某些数据，这个本质就形成了组件之间的通信

组件间通信的分类可以分成以下

- 父子组件之间的通信
- 兄弟组件之间的通信
- 祖孙与后代组件之间的通信
- 非关系组件间之间的通信

**思路**

1. 总述知道的所有方式
2. 按组件关系阐述使用场景

整理`vue`中8种常规的通信方案

1. 通过 props 传递
2. 通过 $emit / $on 触发自定义事件
3. 使用 ref
4. EventBus
5. $parent 或$root / $children
6. $attrs 与 $listeners
7. Provide 与 Inject
8. Vuex

应用

- 父子关系的组件数据传递选择 

  - `props`

  - `$emit`/`$on`

  - `$parent` / `$children`

  - `ref`

  - `$attrs` / `$listeners`

- 兄弟关系的组件数据传递
  - `$parent`
  - `eventbus`
  - `vuex`
- 祖先与后代组件数据传递可选择`attrs`与`listeners`或者 `Provide`与 `Inject`
- 复杂关系的组件数据传递可以通过`vuex`存放共享的变量



-----

## 1.6 props传递数据

这是最最常用的父子组件通信方式，父组件向子组件传递数据是通过prop传递的，子组件传递数据给父组件是通过$emit触发事件来做到的

![img](E:\pogject\学习笔记\image\vue\8f80a670-3aca-11eb-ab90-d9ae814b240d.png)

- 适用场景：父组件传递数据给子组件
- 子组件设置`props`属性，定义接收父组件传递过来的参数
- 父组件在使用子组件标签中通过字面量来传递值

Children.vue

```js
props:{  
    // 字符串形式  
    name:String // 接收的类型参数  
    // 对象形式  
    age:{    
        type:Number, // 接收的类型为数值  
        defaule:18,  // 默认值为18  
       require:true // age属性必须传递  
    }  
}  
```

Father.vue组件

```vue
<Children name="jack" age=18 />  
```





----

## 1.7 $emit 触发自定义事件传递数据

- 适用场景：子组件传递数据给父组件
- 子组件通过`$emit触发`自定义事件，**`$emit`第二个参数为传递的数值**
- 父组件绑定监听器获取到子组件传递过来的参数

```js
// Childen.vue
this.$emit('add', good)  
```

Father.vue

```vue
<Children @add="cartAdd($event)" />  
```





----

##  1.8 使用 ref 传递数据

- 父组件在使用子组件的时候设置`ref`
- 父组件通过设置子组件`refs来获取数据

```vue
<Children ref="foo" />  
  
this.$refs.foo  // 获取子组件实例，通过子组件实例我们就能拿到对应的数据  
```





----

## 1.9 中央事件总线EventBus

上面方式都是处理的父子组件之间的数据传递，那如果两个组件不是父子关系呢?也就是兄弟组件如何通信?

这种情况下可以使用中央事件总线的方式。新建一个Vue事件bus对象，然后通过bus.emit触发事件，bus.on监听触发的事件。

![img](E:\pogject\学习笔记\image\vue\500809B9BD071EA8067678D9EC046261)

- 使用场景：兄弟组件传值
- 创建一个中央时间总线`EventBus`
- 兄弟组件通过`$emit`触发自定义事件，`$emit`第二个参数为传递的数值
- 另一个兄弟组件通过`$on`监听自定义事件

```vue
<script>
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
         bus.$emit('globalEvent', val) 
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
     bus.$on('globalEvent', (val)=>{ 
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
</script>
```



----

## 1.10 $parent 或$root

- 通过共同祖辈`$parent`或者`$root`搭建通信桥梁

兄弟组件

```js
this.$parent.on('add', this.add)
```

另一个兄弟组件

```js
this.$parent.emit('add')
```



----

## 1.11 attrs和listeners

attrs和isteners的作用：解决多层嵌套情况下，父组件A下面有子组件B，组件B下面有组件C，组件A传递数据给组件B的问题，这个方法是在Vue 2.4提出的。

- 适用场景：祖先传递数据给子孙
- 设置批量向下传属性`$attrs`和 `$listeners`
- 包含了父级作用域中不作为 `prop` 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。
- 可以通过 `v-bind="$attrs"` 传⼊内部组件



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

- C组件中能直接触发getCData的**原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性**
- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props(除了B组件中props声明的)

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128655053/F98E288D764804F2354ED35EC26D637C)



-----

## 1.12 provide和inject

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

```
provide：Object | () => Object
inject：Array<string> | { [key: string]: string | Symbol | Object }
```

`provide` 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的 property。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 `Symbol` 和 `Reflect.ownKeys` 的环境下可工作。

`inject` 选项应该是：

- 一个字符串数组，或
- 一个对象，对象的 key 是本地的绑定名，value 是：
  - 在可用的注入内容中搜索用的 key (字符串或 Symbol)，或
  - 一个对象，该对象的：
    - `from` property 是在可用的注入内容中搜索用的 key (字符串或 Symbol)
    - `default` property 是降级情况下使用的 value

- 在祖先组件定义`provide`属性，返回传递的值
- 在后代组件通过`inject`接收组件传递过来的值

> 提示：`provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。然而，**如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。**

```js
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```



我们就可以通过传递一个对象的方式，实现数据的响应式。

数据格式为对象Object的类型，父组件修改数据影响子组件，子组件修改数据影响父组件，感觉和对象的存储有关，对象格式数据存储的是指针而不是数据，所以父子组件其实是用的同一个对象，修改的也是同一个对象，因此会实现双向响应改变

```js
//父组件Father.vue

 data(){
     return {
        obj: {            //一定是个对象,才能实现响应式
             name: 'eavan'
         }
     }
 },
 provide() {            //要访问组件实例 property，我们需要将 provide 转换为返回对象的函数
     return{
         user: this.obj
    }
 }
//子组件Child.vue

export default {
    name: 'Child',
    inject: ['user']    //正常使用inject
}
```



```html
<script setup>
import { ref, provide } from 'vue'
import { fooSymbol } from './injectionSymbols'

// 提供静态值
provide('foo', 'bar')

// 提供响应式的值
const count = ref(0)
provide('count', count)

// 提供时将 Symbol 作为 key
provide(fooSymbol, count)
</script>
```





----

##  1.13 vuex处理组件之间的数据交互

如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候才有上面这一些方法可能不利于项目的维护，vuex的做法就是将这一些公共的数据抽离出来，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的

- 适用场景: 复杂关系的组件数据传递
- `Vuex`作用**相当于一个用来存储共享变量的容器**

![img](E:\pogject\学习笔记\image\vue\fa207cd0-3aca-11eb-ab90-d9ae814b240d.png)

- `state`用来存放共享变量的地方
- `getter`，可以增加一个`getter`派生状态，(相当于`store`中的计算属性），用来获得共享变量的值
- `mutations`用来存放修改`state`的方法。
- `actions`也是用来存放修改state的方法，不过`action`是在`mutations`的基础上进行。常用来做一些异步操作



----

##  1.14 Vue 模板是如何编译的

```js
new Vue({
  render: h => h(App)
})
```

调用 render 就会得到传入的模板(`.vue`文件)对应的虚拟 DOM，那么这个 render 是哪来的呢？它是怎么把 `.vue` 文件转成浏览器可识别的代码的呢？

render 函数是怎么来的有两种方式

- 第一种就是**经过模板编译生成 render 函数**
- 第二种是我们**自己在组件里定义了 render 函数**，这种会跳过模板编译的过程

我们知道 `<template></template>` 这个是模板，不是真实的 HTML，浏览器是不认识模板的，所以我们需要把它编译成浏览器认识的原生的 HTML

这一块的主要流程就是

1. 提取出模板中的原生 HTML 和非原生 HTML，比如绑定的属性、事件、指令等等
2. 经过一些处理生成 render 函数
3. render 函数再将模板内容生成对应的 vnode
4. 再经过 patch 过程( Diff )得到要渲染到视图中的 vnode
5. 最后根据 vnode 创建真实的 DOM 节点，也就是原生 HTML 插入到视图中，完成渲染

上面的 1、2、3 条就是模板编译的过程了



---

## 1.15 vue3中怎么设置全局变量？

### (1) config.globalProperties

`vue2.x`挂载全局是使用 `Vue.prototype.$xxxx=xxx` 的形式来挂载，然后通过 `this.$xxx`来获取挂载到全局的变量或者方法。

这在 `Vue 3` 中，就等同于 `config.globalProperties`。这些 `property` 将被复制到应用中作为实例化组件的一部分。

```js
// 之前 (Vue 2.x)
Vue.prototype.$http = () => {}

// 之后 (Vue 3.x)
const app = createApp({})
app.config.globalProperties.$http = () => {}
```

### (2)  Provide / Inject

vue3新的 `provide/inject` 功能可以穿透多层组件，实现数据从父组件传递到子组件。

可以将全局变量放在根组件的 `provide` 中，这样所有的组件都能使用到这个变量。

**如果需要变量是响应式的，就需要在 `provide` 的时候使用 `ref` 或者 `reactive` 包装变量。**



----









----

## 1.19 vue生命周期中异步加载在mouted还是create里实现

最常用的是在 created 钩子函数中调用异步请求

一般来说，可以在，created，mounted中都可以发送数据请求，但是，**大部分时候，会在created发送请求**。

Created的使用场景：如果页面首次渲染的就来自后端数据。因为，此时data已经挂载到vue实例了。
在 created（如果希望首次选的数据来自于后端，就在此处发请求）（只发了异步请求，渲染是在后端响应之后才进行的）、beforeMount、mounted（**在mounted中发请求会进行二次渲染**） 这三个钩子函数中进行调用。

因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是**最常用的是在 created 钩子函数中调用异步请求**，

因为在 created 钩子函数中调用异步请求有**两个优点**：

- 第一点：能更快获取到服务端数据，减少页面 loading 时间；

- 第二点：放在 created 中有助于一致性，因为ssr 不支持 beforeMount 、mounted 钩子函数。



----

## 1.20 vue钩子函数

![Vue 实例生命周期](https://vuejs.bootcss.com/images/lifecycle.png)

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

   如果：数据的初始值就来自于后端，可以发送ajax，或者fetch请求获取数据，但是，**此时不会触发updated函数**

6. 检查

6.1 检查是否有el属性
检查vue配置，即new Vue{}里面的el项是否存在，有就继续检查template项。没有则等到手动绑定调用 vm.mount()完成了全局变量el的绑定。

6.2 检查是否有template属性

检查配置中的template项，如果没有template进行填充被绑定区域，则被绑定区域的el对outerHTML（即 整个#app DOM对象，包括和标签）都作为被填充对象替换掉填充区域。即： 如果vue对象中有 template属性，那么，template后面的HTML会替换$el对应的内容。如果有render属 性，那么render就会替换template。 即：**优先关系**是： render > template > el



7. beforeMount函数：

模板编译(template)、数据挂载(把数据显示在模板里)之前执行的钩子函数

此时 this.$el有值，但是数据还没有挂载到页面上。即此时页面中的{{}}里的变量还没有被数据替换

8. 模板编译：用vue对象的数据（属性）替换模板中的内容

9. Mounted函数：

模板编译完成，数据挂载完毕

即：此时已经把数据挂载到了页面上，所以，页面上能够看到正确的数据了。

一般来说，我们在此处发送异步请求（ajax，fetch，axios等），获取服务器上的数据，显示在DOM里。

10. beforeUpdate函数：

组件更新之前执行的函数，只有数据更新后，才能调用（触发）beforeUpdate，注意：**此数据一定是在模板上出现的数据**，否则，不会，也没有必要触发组件更新（因为数据不出现在模板里，就没有必要再次渲染）

数据更新了，但是，vue（组件）对象对应的dom中的内部（innerHTML）没有变，所以叫作**组件更新前**

11. updated函数：

组件更新之后执行的函数

vue（组件）对象对应的dom中的内部（innerHTML）改变了，所以，叫作**组件更新之后**

12. activated函数：keep-alive组件激活时调用

13. deactivated函数：keep-alive组件停用时调用

14. beforeDestroy：vue（组件）对象销毁之前

15. destroyed：vue组件销毁后

keep-alive

`<keep-alive></keep-alive>`包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染。

**解析：** 比如有一个列表和一个详情，那么用户就会经常执行打开详情=>返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可以对列表组件使用`<keep-alive></keep-alive>`进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染



-----

## 1.21 vue keep-alive

**keep-alive**：keep-alive可以实现组件缓存，是Vue.js的一个内置组件。

作用：

1. 它能够把不活动的组件实例保存在内存中，而不是直接将其销毁
2. 它是一个抽象组件，**不会被渲染到真实DOM中**，也不会出现在父组件链中

使用方式：

1. 常用的两个属性include/exclude，允许组件有条件的进行缓存。
2. 两个生命周期activated/deactivated，用来得知当前组件是否处于活跃状态。
3. keep-alive的中还运用了LRU(Least Recently Used)算法。

```vue
<KeepAlive>
  <component :is="view"></component>
</KeepAlive>
```

原理：Vue 的缓存机制并不是直接存储 DOM 结构，**而是将 DOM 节点抽象成了一个个 VNode节点**，所以，keep- alive的缓存也是基于VNode节点的而不是直接存储DOM结构。

其实就是将需要缓存的VNode节点保存在this.cache中, 在render时,如果VNode的name符合在缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染。

```

```



---

## 1.22 既然函数是引用类型，为什么 vue 的 data 还是可以用函数

为了使组件实例有自己的作用域

JavaScript只有函数构成作用域(注意理解作用域，**只有函数{}构成作用域**，对象的{}以及if(){}都不构成作用域)

**data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立，不会相互影响**。



---

## 1.23 vue 中 $nextTick 作用与原理

作用：是**为了可以获取更新后的DOM** 。

由于Vue DOM更新是**异步执行**的，即修改数据时，视图不会立即更新，**而是会监听数据变化，并缓存在同一事件循环中，等同一数据循环中的所有数据变化完成之后，再统一进行视图更新。**

为了确保得到更新后的DOM，所以设置了 Vue.nextTick()，**就是在下次DOM更新循环结束之后执行延迟回调**。在修改数据之后立即使用这个方法，获取更新后的DOM。

原理：

**在下次 DOM 更新循环结束之后执行延迟回调**。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用

- Promise
- MutationObserver
- setImmediate
- 如果以上都不行则采用setTimeout

定义了一个异步方法，多次调用nextTick会将方法存入队列中，**通过这个异步方法清空当前队列。**



---

## 1.24 vue的特性

- 表单操作
- 自定义指令
- 计算属性
- 过滤器
- 侦听器
- 生命周期



---

## 1.25 v-if 与 v-show的异同

### 共同点

我们都知道在 `vue` 中 `v-show `与 `v-if` 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示

在用法上也是相同的

```vue
<Model v-show="isShow" />
<Model v-if="isShow" />
```

- 当表达式为`true`的时候，都会占据页面的位置
- 当表达式都为`false`时，都不会占据页面位置

### 区别

- 控制手段不同
- 编译过程不同
- 编译条件不同

**控制手段**：`v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是将`dom`元素整个添加或删除

**编译过程**：`v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于css切换

**编译条件**：`v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染

- `v-show` 由`false`变为`true`的时候不会触发组件的生命周期
- `v-if`由`false`变为`true`的时候，触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`方法

**性能消耗**：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗；



v-show和v-if都是用来显示隐藏元素，v-if还有一个v-else配合使用，两者达到的效果都一样，**但是v-if更消耗性能的，因为v-if在显示隐藏过程中有DOM的添加和删除**，v-show就简单多了，只是操作css。

v-show

v-show不管条件是真还是假，第一次渲染的时候都会编译出来，也就是标签都会添加到DOM中。之后切换的时候，通过display: none;样式来显示隐藏元素。**可以说只是改变css的样式，几乎不会影响什么性能**。

v-if

在首次渲染的时候，如果条件为假，什么也不操作，页面当作没有这些元素。当条件为真的时候，开始**局部编译**，动态的向DOM元素里面添加元素。当条件从真变为假的时候，开始局部编译，卸载这些元素，也就是删除。

### 使用场景

`v-if` 与 `v-show` 都能控制`dom`元素在页面的显示

`v-if` 相比 `v-show` 开销更大的（直接操作`dom`节点增加与删除）

如果需要非常频繁地切换，则使用 v-show 较好

如果在运行时条件很少改变，则使用 v-if 较好





---

## 1.26  v-for中的key的理解？

思路分析：总分总模式

1. 给出结论，key的作用是用于优化patch性能
2. key的必要性
3. 实际使用方式
4. 总结：可从源码层面描述一下vue如何判断两个节点是否相同

回答范例：

1. key的作用主要是为了更高效的更新虚拟DOM。
2. vue在patch过程中**判断两个节点是否是相同节点是key是一个必要条件**，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能。
3. 实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug；vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。
4. 从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，**因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作**，这造成了大量的dom更新操作，明显是不可取的。



需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。主要是为了高效的更新虚拟DOM。

vue中列表循环需加:key="唯一标识" 唯一标识且最好是静态的，因为vue组件高度复用增加Key可以标识组件的唯一性，为了更好地区别各个组件 key的作用**主要是为了高效的更新虚拟DOM**

**解析：**

vue和react的虚拟DOM的Diff算法大致相同，其核心是基于两个简单的假设
首先讲一下diff算法的处理方法，对操作前后的dom树同一层的节点进行对比，一层一层对比，



![img](E:\pogject\学习笔记\image\vue\448BD33DD57542E1E6A5B03957CC7034)

当某一层有很多相同的节点时，也就是列表节点时，Diff算法的更新过程默认情况下也是遵循以上原则。

比如一下这个情况：



![img](E:\pogject\学习笔记\image\vue\EAA1B46F9F910D663C45A96D03B305C4)

可以在B和C之间加一个F，Diff算法默认执行起来是这样的：

![img](https://uploadfiles.nowcoder.com/images/20220301/4107856_1646128776932/CE0C377B5746FC3BE8D5C8466A40AA87)

即把C更新成F，D更新成C，E更新成D，最后再插入E，是不是很没有效率？

所以我们需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

```
// 首次循环patch A
A B C D E
A B F C D E

// 第2次循环patch B
B C D E
B F C D E

// 第3次循环patch E
C D E
F C D E

// 第4次循环patch D
C D
F C D

// 第5次循环patch C
C 
F C

// oldCh全部处理结束，newCh中剩下的F，创建F并插入到C前面
```



----

## 1.27 v-if和v-for哪个优先级更高？

思路分析：总分总模式

1. 先给出结论
2. 为什么是这样的
3. 它们能放一起吗
4. 如果不能，那应该怎样
5. 总结

回答范例：

1. 在 `Vue 2` 中，`v-for` 优先于 `v-if` 被解析；但在 `Vue 3` 中，则完全相反，`v-if` 的优先级高于 `v-for`。
2. 曾经做过实验，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件
3. 实践中也不应该把它们放一起，因为哪怕我们只渲染列表中一小部分元素，也得在每次重渲染的时候遍历整个列表。
4. 通常有两种情况下导致我们这样做：
   - 为了过滤列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。此时定义一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表即可。
   - 为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。此时把 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)即可。
5. 文档中明确指出**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上**，显然这是一个重要的注意事项。
6. 看过源码里面关于代码生成的部分







----

## 1.30 vue双向数据绑定的原理

1. 给出双绑定义
2. 双绑带来的好处
3. 在哪使用双绑
4. 使用方式
5. 扩展：使用细节、原理实现描述

**回答范例：**

1. vue中双向绑定是一个指令v-model，可以绑定一个动态值到视图，同时视图中变化能改变该值。v-model是语法糖，默认情况下相当于:value和@input。
2. 使用v-model可以减少大量繁琐的事件处理代码，提高开发效率，代码可读性也更好
3. 通常在表单项上使用v-model
4. 原生的表单项可以直接使用v-model，自定义组件上如果要使用它需要在组件内绑定value并处理输入事件
5. 做过测试，输出包含v-model模板的组件渲染函数，发现它会被转换为value属性的绑定以及一个事件监听，事件回调函数中会做相应变量更新操作，这说明神奇魔法实际上是vue的编译器完成的。

可能的追问：

1. v-model和sync修饰符有什么区别
2. 自定义组件使用v-model如果想要改变事件名或者属性名应该怎么做



目前几种主流的mvc(vm)框架都实现了单向数据绑定，而双向数据绑定**无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view**，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。

实现数据绑定的做法有大致如下几种：

**发布者-订阅者模式:** 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是vm.set('property', value)

这种方式现在毕竟太low了，我们更希望通过vm.property = value这种方式更新数据，同时自动更新视图，于是有了下面两种方式

**脏值检查:** angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过setInterval()定时轮询检测数据变动，当然Google不会这么low，**angular只有在指定的事件触发时进入脏值检测**，大致如下：

- DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
- XHR响应事件 ( $http )
- 浏览器Location变更事件 ( $location )
- Timer事件( timeout，interval )
- 执行 digest()或apply()

**数据劫持:** vue.js 则是采用**数据劫持**结合**发布者-订阅者模式**的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。



----

## 1.31 既然 Vue 通过数据劫持可以精准探测数据在具体dom上的变化,为什么还需要虚拟 DOM diff 呢?

**前置知识:** 依赖收集、虚拟 DOM、响应式系统

现代前端框架有两种方式侦测变化，一种是 **pull** ，一种是 **push**

**pull:** 其代表为React，我们可以回忆一下React是如何侦测到变化的,我们通常会用setStateAPI显式更新，然后React会进行一层层的Virtual Dom Diff操作找出差异，然后Patch到DOM上**，React从一开始就不知道到底是哪发生了变化，只是知道「有变化了」，然后再进行比较暴力的Diff操作查找「哪发生变化了」**，另外一个代表就是Angular的脏检查操作。

**push:** Vue的响应式系统则是push的代表，**当Vue程序初始化的时候就会对数据data进行依赖的收集，一但数据发生变化,响应式系统就会立刻得知。**因此Vue是一开始就知道是「在哪发生变化了」，但是这又会产生一个问题，如果你熟悉Vue的响应式系统就知道，通常一个绑定一个数据就需要一个Watcher

**一但我们的绑定细粒度过高就会产生大量的Watcher，这会带来内存以及依赖追踪的开销**，而细粒度过低会无法精准侦测变化,

因此Vue的设计是选择中等细粒度的方案,**在组件级别进行push侦测的方式**,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在**组件内部**进行Virtual Dom Diff获取更加具体的差异，而Virtual Dom Diff则是pull操作，**Vue是push+pull结合的方式进行变化侦测的。**



---

## 1.32 new Vue 以后发生的事情

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



---

## 1.33 root、refs、$parent、$children的使用？

$root    **访问根元素**。

```js
this.$root.属性名。
```

如果在vue-cli工程内使用$root:
有人可能认为根元素是App.vue。**但是其实是main.js中new Vue这个实例**，在new Vue这个实例中定义data即可

$root可以将根组件作为一个全局store来访问或使用。

> 官网提示：对于这种在根组件定义data以实现全局数据来替换vuex的方式仅适用于demo或者非常小型的有少量组件的应用。但是对于中大型应用就很不适用了。强烈推荐适用Vuex
> 

$parent

$parent属性可以用来从一个子组件访问父组件的实例，可以替代将数据以 prop 的方式传入子组件的方式；当变更父级组件的数据的时候，容易造成调试和理解难度增加；

访问父元素。

```js
this.$parent.属性名。
```

$refs
$refs用来实现父组件对于特定子组件进行访问

子组件标签需要添加ref属性值，父组件可通过this.$refs.ref属性值来访问实例
举例：

```vue
<base-input ref="usernameInput"></base-input>

this.$refs.usernameInput
```

> $refs 只会在组件渲染完成之后生效，**并且它们不是响应式的**。这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。

$children

$children返回的是一个组件集合，如果你能清楚的知道子组件的顺序，你也可以使用下标来操作；

```js
this.$children[0]
```



---

## 1.34 scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？

css的预编译。

使用步骤：

1. 先装css-loader、node-loader、sass-loader等加载器模块
2. 在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss
3. 在同一个文件，配置一个module属性
4. 然后在组件的style标签加上lang属性 ，例如：lang=”scss”

特性:

- 可以用变量，例如（$变量名称=值）；

- 可以用混合器，例如（）
- 可以嵌套



----

## 1.35 delete与vue.delete区别?

- delte会删除数组的值，但是它依然会在内存中占位置

- 而vue.delete会删除数组在内存中的占位

```js
let arr1 = [1,2,3]
let arr2 = [1,2,3]

delete arr1[1]
this.$delete(arr2,2)

console.log(arr1)    //[1, empty, 3]
console.log(arr2)    //[1,2]
```

---

## 1.36 computed和watch的区别

computed 和 watch看似都能实现对数据的监听

### computed

 计算属性

**其他属性计算而来**

计算属性基于 data 中声明过或者父组件传递的 props 中的数据通过计算得到的一个**新值**，这个新值只会根据已知值的变化而变化，简言之：这个属性依赖其他属性，由**其他属性计算而来**的。

```js
<p>姓名：{{ fullName }}</p>
... ...
data: {
    firstName: 'David',
    lastName: 'Beckham'
},
computed: {
    fullName: function() { //方法的返回值作为属性值
            return this.firstName + ' ' + this.lastName
    }
}
```

在 computed 属性对象中定义计算属性的方法，和取data对象里的数据属性一样以**属性访问**的形式调用，即在页面中使用 {{ 方法名 }} 来显示计算的结果。

> **注**：计算属性 fullName 不能在 data 中定义，而计算属性值的相关已知值在data中；如果 fullName 在 data 中定义了会报错.

因为如果 computed 属性值是一个函数，那么默认会走 get 方法，**必须要有一个返回值，函数的返回值就是属性的属性值**。计算属性定义了 fullName 并返回对应的结果给这个变量，**变量不可被重复定义和赋值**。

**computed 带有缓存功能**

在官方文档中，还强调了 computed 一个重要的特点，就是 **computed 带有缓存功能**。比如我在页面中多次显示 fullName：

```js
<p>姓名：{{ fullName }}</p>
<p>姓名：{{ fullName }}</p>
<p>姓名：{{ fullName }}</p>
<p>姓名：{{ fullName }}</p>
<p>姓名：{{ fullName }}</p>
... ... 

computed: {
    fullName: function () {
         console.log('computed') // 在控制台只打印了一次
         return this.firstName + ' ' + this.lastName
    }
}
```

我们知道 computed 内定义的 function 只执行一次，**仅当初始化显示或者相关的 data、props 等属性数据发生变化的时候调用**；
而 **computed 属性值默认会缓存计算结果**，计算属性是基于它们的响应式依赖进行缓存的；
只有当 computed 属性被使用后，才会执行 computed 的代码，**在重复的调用中，只要依赖数据不变，直接取缓存中的计算结果**。只有**依赖型数据**发生**改变**，computed 才会重新计算。

**计算属性的高级：**

在computed 中的属性都有一个 **get** 和一个 **set** 方法，当数据变化时，调用 set 方法。下面我们通过计算属性的 getter/setter 方法来**实现对属性数据的显示和监视，即双向绑定。**

```js
computed: {
    fullName: {
        get() { //读取当前属性值的回调，根据相关的数据计算并返回当前属性的值
            return this.firstName + ' ' + this.lastName
        },
        set(val) { // 当属性值发生改变时回调，更新相关的属性数据，val就是fullName的最新属性值
            const names = val ? val.split(' ') : [];
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
}
```



### watch 

监听属性

通过 vm 对象的 $watch() 或 watch 配置来监听 Vue 实例上的属性变化，或某些特定数据的变化，然后执行某些具体的业务逻辑操作**。当属性变化时，回调函数自动调用，在函数内部进行计算。**其可以监听的数据来源：data，props，computed 内的数据。

以上示例通过 watch 来实现：

```js
watch: {
    // 监听 data 中的 firstName，如果发生了变化，就把变化的值给 data 中的 fullName， val 就是 firstName 的最新值
    firstName: function(val) { 
        this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
        this.fullName = this.firstName + ' ' + val
    }    
}
// 由上可以看出 watch 要监听两个数据，而且代码是同类型的重复的，所以相比用 computed 更简洁
```

**注：** 监听函数有两个参数，第一个参数是**最新的值**，第二个参数是**输入之前的值**，顺序一定是**新值，旧值**，如果只写一个参数，那就是最新属性值。

在使用时选择 watch 还是 computed，还有一个参考点就是官网说的：**当需要在数据变化时执行异步或开销较大的操作时，watch方式是最有用的。**所以 watch 一定是**支持异步**的。

上面仅限监听简单数据类型，监听复杂数据类型就需要用到深度监听 deep。

**deep：**为了发现**对象内部值**的变化，可以在选项参数中指定 deep: true。**注意监听数组的变更不需要这么做。**

```js
data: {
    fullName: {
        firstName: 'David',
        lastName: 'Beckham'
    }
},
watch: {
    fullName: {
        handler(newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
        },
        deep: true
    }
}
```

打印出来的 newVal 和 oldVal 值是一样的，所以深度监听虽然可以监听到对象的变化，**但是无法监听到对象里面哪个具体属性的变化**。这是因为它们的**引用指向同一个**对象/数组。**Vue 不会保留变更之前值的副本**。

若果要监听对象的单个属性的变化，有两种方法：
1.直接监听对象的属性

```js
watch:{
    fullName.firstName: function(newVal,oldVal){
        console.log(newVal,oldVal);
    }
}
```

2.与 computed 属性配合使用，computed 返回想要监听的属性值，watch 用来监听

```js
computed: {
    firstNameChange() {
    	return this.fullName.firstName
    }
},
watch: {
    firstNameChange() {
        console.log(this.fullName)
    }
}
```



### 总结

**watch和computed都是以Vue的依赖追踪机制为基础**的，当某一个依赖型数据（**依赖型数据**：简单理解即放在 data 等对象下的实例数据）发生变化的时候，所有依赖这个数据的相关数据会自动发生变化，即自动调用相关的函数，来实现数据的变动。

**当依赖的值变化时，在watch中，是可以做一些复杂的操作的，**而computed中的依赖，**仅仅是一个值依赖于另一个值，是值上的依赖。**

### 应用场景

computed：用于处理复杂的逻辑运算；**一个数据受一个或多个数据影响**；用来处理watch和methods无法处理的，或处理起来不方便的情况。

例如处理模板中的复杂表达式、购物车里面的商品数量和总金额之间的变化关系等。

watch：用来处理当一个属性发生变化时，需要执行某些具体的业务逻辑操作，**或要在数据变化时执行异步或开销较大的操作**；**一个数据改变影响多个数据**。

例如用来监控路由、inpurt 输入框值的特殊处理等。

### 区别

**computed**

- 初始化显示或者相关的 data、props 等属性数据发生变化的时候调用；
- 计算属性不在 data 中，它是基于data 或 props 中的数据通过计算得到的一个新值，这个新值根据已知值的变化而变化；
- 在 computed 属性对象中定义计算属性的方法，和取data对象里的数据属性一样，以属性访问的形式调用；
- **如果 computed 属性值是函数，那么默认会走 get 方法，必须要有一个返回值**，函数的返回值就是属性的属性值；
- computed 属性值默认会**缓存**计算结果，在重复的调用中，只要依赖数据不变，直接取缓存中的计算结果，只有**依赖型数据**发生**改变**，computed 才会重新计算；
- 在computed中的，**属性都有一个 get 和一个 set 方法**，当数据变化时，调用 set 方法。

**watch**

- 主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作，**可以看作是 computed 和 methods 的结合体**；
- 可以监听的数据来源：data，props，computed内的数据；
- watch**支持异步**；
- **不支持缓存**，监听的数据改变，直接会触发相应的操作；
- 监听函数有两个参数，第一个参数是最新的值，第二个参数是输入之前的值，顺序一定是新值，旧值。



---

## 1.37 computed怎么实现的缓存

```vue
<div id="app">
  <span @click="change">{{sum}}</span>
</div>
<script src="./vue2.6.js"></script>
<script>
  new Vue({
    el: "#app",
    data() {
      return {
        count: 1,
      }
    },
    methods: {
      change() {
        this.count = 2
      },
    },
    computed: {
      sum() {
        return this.count + 1
      },
    },
  })
</script>
```

1. 初始化data和computed,分别代理其set以及get方法, 对data中的所有属性生成唯一的dep实例。
2. 对computed中的sum生成唯一watcher,并保存在vm._computedWatchers中
3. 执行render函数时会访问sum属性，从而执行initComputed时定义的getter方法，会将Dep.target指向sum的watcher,并调用该属性具体方法sum。
4. sum方法中访问this.count，即会调用this.count代理的get方法，将this.count的dep加入sum的watcher,同时该dep中的subs添加这个watcher。
5. 设置vm.count = 2，调用count代理的set方法触发dep的notify方法，因为是computed属性，只是将watcher中的dirty设置为true。
6. 最后一步vm.sum，访问其get方法时，得知sum的watcher.dirty为true,调用其watcher.evaluate()方法获取新的值。



----

## 1.38 自定义指令是什么？有哪些应用场景？

在`vue`中提供了一套为数据驱动视图更为方便的操作，这些操作被称为指令系统

我们看到的`v- `开头的行内属性，都是指令，不同的指令可以完成或实现不同的功能

除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，`Vue` 也允许注册自定义指令

指令使用的几种方式：

```js
//会实例化一个指令，但这个指令没有参数 
`v-xxx`

// -- 将值传到指令中
`v-xxx="value"`  

// -- 将字符串传入到指令中，如`v-html="'<p>内容</p>'"`
`v-xxx="'string'"` 

// -- 传参数（`arg`），如`v-bind:class="className"`
`v-xxx:arg="value"` 

// -- 使用修饰符（`modifier`）
`v-xxx:arg.modifier="value"` 
```

注册一个自定义指令有全局注册与局部注册

全局注册注册主要是用过`Vue.directive`方法进行注册

`Vue.directive`第一个参数是指令的名字（不需要写上`v-`前缀），第二个参数可以是对象数据，也可以是一个指令函数

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能
  }
})
```

局部注册通过在组件`options`选项中设置`directive`属性

```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
    }
  }
}
```

然后你可以在模板中任何元素上使用新的 `v-focus` property，如下：

```vue
<input v-focus />
```

自定义指令也像组件那样存在钩子函数：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
- `update`：所在组件的 `VNode` 更新时调用，但是可能发生在其子 `VNode` 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
- `componentUpdated`：指令所在组件的 `VNode` 及其子 `VNode` 全部更新后调用
- `unbind`：只调用一次，指令与元素解绑时调用

所有的钩子函数的参数都有以下：

- `el`：指令所绑定的元素，可以用来直接操作 `DOM`
- binding：一个对象，包含以下property：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`
- `vnode`：`Vue` 编译生成的虚拟节点
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用

> 除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 `dataset` 来进行

举个例子：

```vue
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
<script>
    Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // "white"
    console.log(binding.value.text)  // "hello!"
    })
</script>
```



使用自定义组件组件可以满足我们日常一些场景，这里给出几个自定义组件的案例：

- 防抖
- 图片懒加载
- 一键 Copy的功能

### 输入框防抖

防抖这种情况设置一个`v-debounce`自定义指令来实现

举个例子：

```js
// 1.设置v-debounce自定义指令
Vue.directive('debounce', {
  bind: (el, binding) => {
    let debounceTime = binding.value; // 防抖时间
    if (!debounceTime) { // 用户若不设置防抖时间，则默认2s
      debounceTime = 2000;
    }
    let cbFun;
    el.addEventListener('click', event => {
      if (!cbFun) { // 第一次执行
        cbFun = setTimeout(() => {
          cbFun = null;
        }, debounceTime);
      } else {
        event && event.stopImmediatePropagation();
      }
    }, true);
  },
});

// 2.为button标签设置v-debounce自定义指令
<button @click="sayHello" v-debounce>提交</button>
```

### 图片懒加载

设置一个`v-lazy`自定义组件完成图片懒加载

```js
const LazyLoad = {
    // install方法
    install(Vue,options){
    	  // 代替图片的loading图
        let defaultSrc = options.default;
        Vue.directive('lazy',{
            bind(el,binding){
                LazyLoad.init(el,binding.value,defaultSrc);
            },
            inserted(el){
                // 兼容处理
                if('IntersectionObserver' in window){
                    LazyLoad.observe(el);
                }else{
                    LazyLoad.listenerScroll(el);
                }
                
            },
        })
    },
    // 初始化
    init(el,val,def){
        // data-src 储存真实src
        el.setAttribute('data-src',val);
        // 设置src为loading图
        el.setAttribute('src',def);
    },
    // 利用IntersectionObserver监听el
    observe(el){
        let io = new IntersectionObserver(entries => {
            let realSrc = el.dataset.src;
            if(entries[0].isIntersecting){
                if(realSrc){
                    el.src = realSrc;
                    el.removeAttribute('data-src');
                }
            }
        });
        io.observe(el);
    },
    // 监听scroll事件
    listenerScroll(el){
        let handler = LazyLoad.throttle(LazyLoad.load,300);
        LazyLoad.load(el);
        window.addEventListener('scroll',() => {
            handler(el);
        });
    },
    // 加载真实图片
    load(el){
        let windowHeight = document.documentElement.clientHeight
        let elTop = el.getBoundingClientRect().top;
        let elBtm = el.getBoundingClientRect().bottom;
        let realSrc = el.dataset.src;
        if(elTop - windowHeight<0&&elBtm > 0){
            if(realSrc){
                el.src = realSrc;
                el.removeAttribute('data-src');
            }
        }
    },
    // 节流
    throttle(fn,delay){
        let timer; 
        let prevTime;
        return function(...args){
            let currTime = Date.now();
            let context = this;
            if(!prevTime) prevTime = currTime;
            clearTimeout(timer);
            
            if(currTime - prevTime > delay){
                prevTime = currTime;
                fn.apply(context,args);
                clearTimeout(timer);
                return;
            }

            timer = setTimeout(function(){
                prevTime = Date.now();
                timer = null;
                fn.apply(context,args);
            },delay);
        }
    }

}
export default LazyLoad;
```

### 一键 Copy的功能

```js
import { Message } from 'ant-design-vue';

const vCopy = { //
  /*
    bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
    el: 作用的 dom 对象
    value: 传给指令的值，也就是我们要 copy 的值
  */
  bind(el, { value }) {
    el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
    el.handler = () => {
      if (!el.$value) {
      // 值为空的时候，给出提示，我这里的提示是用的 ant-design-vue 的提示，你们随意
        Message.warning('无复制内容');
        return;
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea');
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value;
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      // textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy');
      if (result) {
        Message.success('复制成功');
      }
      document.body.removeChild(textarea);
    };
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler);
  },
};

export default vCopy;
```

关于自定义组件还有很多应用场景，如：拖拽指令、页面水印、权限校验等等应用场景



---



----

## 1.40说说Vue 页面渲染流程

![img](E:\pogject\学习笔记\image\vue\aTr1W4.png)







---

## 1.41 Vue 为什么要用 vm.$set() 解决对象新增属性不能响应的问题 ？你能说说如下代码的实现原理么？

**1）Vue为什么要用vm.$set() 解决对象新增属性不能响应的问题**

1. Vue使用了Object.defineProperty实现双向数据绑定
2. 在初始化实例时对属性执行 getter/setter 转化
3. **属性必须在data对象上存在才能让Vue将它转换为响应式的**（这也就造成了Vue无法检测到对象属性的添加或删除）

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
3. 最终如果要对属性进行响应式处理，**则是通过调用 defineReactive 方法进行响应式处理**





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

1.什么是组件化，一句话来说就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在`Vue`中每一个`.vue`文件都可以视为一个组件

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

没有指令之前我们是怎么做的？是不是先要获取到DOM然后在....



----

##  1.43 Vue2.0为什么不能检查数组的变化，该怎么解决？

我们都知道，Vue2.0对于响应式数据的实现有一些不足：

- 无法检测数组/对象的新增
- 无法检测通过索引改变数组的操作。

**分析**

- 无法检测数组/对象的新增？

**Vue检测数据的变动是通过Object.defineProperty实现的**，所以无法监听数组的添加操作是可以理解的，因为是在构造函数中就已经为所有属性做了这个检测绑定操作。

- 无法检测通过索引改变数组的操作。即vm.items[indexOfItem] = newValue？

**官方文档**中对于这两点都是简要的概括为“由于JavaScript的限制”无法实现，而Object.defineProperty是实现检测数据改变的方案，这个限制是指Object.defineProperty

**vm.items[indexOfItem] = newValue真的不能被监听么？**

> Vue对数组的7个变异方法（push、pop、shift、unshift、splice、sort、reverse）实现了响应式

测试一下通过索引改变数组的操作，能不能被监听到。遍历数组，用Object.defineProperty对每一项进行监测

```js
function defineReactive(data, key, value) {
	 Object.defineProperty(data, key, {
		 enumerable: true,
		 configurable: true,
		 get: function defineGet() {
			 console.log(`get key: ${key} value: ${value}`)
			 return value
		 },
		 set: function defineSet(newVal) {
			 console.log(`set key: ${key} value: ${newVal}`)
			 value = newVal
		 }
	 })
}
 
function observe(data) {
	Object.keys(data).forEach(function(key) {
		defineReactive(data, key, data[key])
	})
}
 
let arr = [1, 2, 3]
observe(arr)

arr[1] = 100;
// set key: 1 value: 100
```

通过索引改变arr[1]，我们发现触发了set，也就是Object.defineProperty是可以检测到通过索引改变数组的操作的，那Vue2.0为什么没有实现呢？

**小结**：**是出于对性能原因的考虑，没有去实现它**。而不是不能实现。

对于对象而言，每一次的数据变更都会对对象的属性进行一次枚举，一般对象本身的属性数量有限，所以对于遍历枚举等方式产生的性能损耗可以忽略不计，但是对于数组而言呢？数组包含的元素量是可能达到成千上万，假设对于每一次数组元素的更新都触发了枚举/遍历，其带来的性能损耗将与获得的用户体验不成正比，故vue无法检测数组的变动。

不过Vue3.0用proxy代替了defineProperty之后就解决了这个问题。

**解决方案**

**数组**

1. this.$set(array, index, data)

```js
//这是个深度的修改，某些情况下可能导致你不希望的结果，因此最好还是慎用
this.dataArr = this.originArr
this.$set(this.dataArr, 0, {data: '修改第一个元素'})
console.log(this.dataArr)        
console.log(this.originArr)  //同样的 源数组也会被修改 在某些情况下会导致你不希望的结果 
```

1. splice

   ```js
   this.dataArr.splice(index,1)
   //因为splice会被监听有响应式，而splice又可以做到增删改。
   ```

2. 利用临时变量进行中转

   ```js
   let tempArr = [...this.targetArr]
   tempArr[0] = {data: 'test'}
   this.targetArr = tempArr
   ```

**对象**

1. this.$set(obj, key ,value) - 可实现增、改

   
   
2. watch时添加`deep：true`深度监听，**只能监听到属性值的变化**，新增、删除属性无法监听

   ```js
   this.$watch('blog', this.getCatalog, {
       deep: true
       // immediate: true // 是否第一次触发
     });
   ```

3. watch时直接监听某个key

   ```js
   watch: {
     'obj.name'(curVal, oldVal) {
       // TODO
     }
   }
   ```





---

## 1.44 Vue响应式原理

### 如何追踪变化

当你把一个普通的 JavaScript 对象传入 Vue 实例作为 `data` 选项，Vue 将遍历此对象所有的 property，并使用 [`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 把这些 property 全部转为 [getter/setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#定义_getters_与_setters)。`Object.defineProperty` 是 ES5 中一个无法 shim 的特性，**这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。**

**这些 getter/setter 对用户来说是不可见的**，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。这里需要注意的是不同浏览器在控制台打印数据对象时对 getter/setter 的格式化并不同，所以建议安装 [vue-devtools](https://github.com/vuejs/vue-devtools) 来获取对检查数据更加友好的用户界面。

每个组件实例都对应一个 **watcher** 实例，它**会在组件渲染的过程中把“接触”过的数据 property 记录为依赖**。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

![data](https://cn.vuejs.org/images/data.png)

由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。

### 对于对象

Vue 无法检测 property 的添加或移除。**由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化**，所以 property **必须在 `data` 对象上存在**才能让 Vue 将它**转换为响应式的**。

```js
var vm = new Vue({
  data:{
    a:1
  }
})

// `vm.a` 是响应式的

vm.b = 2
// `vm.b` 是非响应式的
```

对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，**可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式 property。**例如，对于：

```js
Vue.set(vm.someObject, 'b', 2)
```

您还可以使用 `vm.$set` 实例方法，这也是全局 `Vue.set` 方法的别名：

```js
this.$set(this.someObject,'b',2)
```

有时你可能需要为已有对象赋值多个新 property，比如使用 `Object.assign()` 或 `_.extend()`。但是，这样添加到对象上的新 property 不会触发更新。在这种情况下，**你应该用原对象与要混合进去的对象的 property 一起创建一个新的对象。**

```js
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```

### 对于数组

Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

举个例子：

```js
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
```

为了解决第一类问题，以下两种方式都可以实现和 `vm.items[indexOfItem] = newValue` 相同的效果，同时也将在响应式系统内触发状态更新：

```js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)

// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

你也可以使用 [`vm.$set`](https://cn.vuejs.org/v2/api/#vm-set) 实例方法，该方法是全局方法 `Vue.set` 的一个别名：

```js
vm.$set(vm.items, indexOfItem, newValue)
```

为了解决第二类问题，你可以使用 `splice`：

```js
vm.items.splice(newLength)
```

### [声明响应式 property](https://cn.vuejs.org/v2/guide/reactivity.html#声明响应式-property)

由于 Vue **不允许动态添加根级响应式** property，**所以你必须在初始化实例前声明所有根级响应式 property**，哪怕只是一个空值：

```js
var vm = new Vue({
  data: {
    // 声明 message 为一个空值字符串
    message: ''
  },
  template: '<div>{{ message }}</div>'
})
// 之后设置 `message`
vm.message = 'Hello!'
```

**如果你未在 `data` 选项中声明 `message`，Vue 将警告你渲染函数正在试图访问不存在的 property。**

这样的限制在背后是有其技术原因的，**它消除了在依赖项跟踪系统中的一类边界情况**，也使 Vue 实例能更好地配合类型检查系统工作。但与此同时在代码可维护性方面也有一点重要的考虑：`data` 对象就像组件状态的结构 (schema)。**提前声明所有的响应式 property，可以让组件代码在未来修改或给其他开发人员阅读时更易于理解。**

### [异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列)

可能你还没有注意到，Vue 在更新 DOM 时是**异步**执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。**如果同一个 watcher 被多次触发，只会被推入到队列中一次**。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替。

例如，当你设置 `vm.someData = 'new value'`，该组件不会立即重新渲染。**当刷新队列时，组件会在下一个事件循环“tick”中更新。**多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，**可以在数据变化之后立即使用** `Vue.nextTick(callback)`。**这样回调函数将在 DOM 更新完成后被调用**。例如：

```html
<div id="example">{{message}}</div>
<script>
var vm = new Vue({
  el: '#example',
  data: {
    message: '123'
  }
})
vm.message = 'new message' // 更改数据
vm.$el.textContent === 'new message' // false
Vue.nextTick(function () {
  vm.$el.textContent === 'new message' // true
})
</script>
```

在组件内使用 `vm.$nextTick()` 实例方法特别方便，因为它不需要全局 `Vue`，**并且回调函数中的 `this` 将自动绑定到当前的 Vue 实例**上：

```js
Vue.component('example', {
  template: '<span>{{ message }}</span>',
  data: function () {
    return {
      message: '未更新'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = '已更新'
      console.log(this.$el.textContent) // => '未更新'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => '已更新'
      })
    }
  }
})
```

因为 `$nextTick()` 返回一个 `Promise` 对象，所以你可以使用新的 [ES2017 async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 语法完成相同的事情：

```js
methods: {
  updateMessage: async function () {
    this.message = '已更新'
    console.log(this.$el.textContent) // => '未更新'
    
    await this.$nextTick()
    console.log(this.$el.textContent) // => '已更新'
  }
}
```

---

## 1.44 vue3响应式原理

### 响应式核心

假如下面的例子中，想让sum变为响应式变量：

```javascript
let num1 = 1;
let num2 = 2;
let sum = num1 + num2;

num1 = 10
console.log(sum) //sum依旧是3，非响应式
```

则要实现的部分有：

- 数据劫持：**要知道num1、num2何时发生变化**
- 依赖收集：**知道sum依赖哪些数据**，例子中sum依赖了num1、num2，则要建立它们的依赖关系
- 派发更新：**当依赖的数据num1、num2发生改变时，要通知响应对象sum重新运算**

**vue3通过Proxy拦截数据的读取和设置**（数据劫持）

- 当数据读取时，通过**track**函数触发依赖的收集；
- 当数据被设置时，通过**trigger**函数去派发更新。

那么vue3如何使用响应式呢？

- vue3既可以通过data函数返回一个响应式对象，也可以通过ref、reactive来创建响应式变量。使用reactive时，即在内部对数据用Proxy进行了包装。
- 使用computed、watch、视图渲染函数时，可以看作声明了一个依赖响应式数据的回调，这个回调会被传入**effect**（副作用函数），当依赖的数据改变时，回调被重新调用，从而computed得到更新。

要实现简单版的响应式，其大致结构为：

```javascript
//创建响应式变量，拦截数据的get和set
function reactive(obj){}

//effect函数包裹那些 依赖响应式数据的函数cb
//cb依赖的数据更新时，重新执行effect
function effect(cb){}

//依赖收集，建立响应式数据和effect的映射关系
function track(target, property){}

//触发更新，根据依赖关系，执行effect函数
function trigger(target, property){}
```

使用：

```javascript
let obj = reactive({
  num1: 10,
  num2: 20
})
let sum = 0

effect(()=>{
  sum = obj.num1 + obj.num2
})

console.log(sum) //30

obj.num1 = 100
console.log(sum)  //应该为120
```

----

## 1.45 说说 Vue 中 CSS scoped 的原理

在日常的Vue项目开发过程中，为了让项目更好的维护一般都会使用模块化开发的方式进行。也就是每个组件维护独立的`template`，`script`，`style`。今天主要介绍一下使用`<style scoped>`为什么在页面渲染完后样式之间并不会造成污染。

1. **每个组件都会拥有一个`[data-v-hash:8]`插入HTML标签**，子组件标签上也具体父组件`[data-v-hash:8]`;
2. 如果style标签加了`scoped属性`，**里面的选择器都会变成`(Attribute Selector) [data-v-hash:8]`**;
3. 如果子组件选择器跟父组件选择器完全一样，那么就会出现子组件样式被父组件覆盖，因为`子组件会优先于父组件mounted`





---

# vue性能

----

## 2.0 说说你对vue的理解?

Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。

Vue 是一套用于构建用户界面的渐进式MVVM框架。那怎么理解渐进式呢？**渐进式**含义：强制主张最少。

Vue.js包含了声明式渲染、组件化系统、客户端路由、大规模状态管理、构建工具、数据持久化、跨平台支持等，但在实际开发中，并没有强制要求开发者之后某一特定功能，而是根据需求逐渐扩展。

Vue所关注的核心是MVC模式中的**视图层**，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。

Vue.js的核心库只关心视图渲染，且由于渐进式的特性，Vue.js便于与第三方库或既有项目整合。Vue.js 实现了一套声明式渲染引擎，并在runtime或者预编译时将声明式的模板编译成渲染函数，挂载在观察者 Watcher 中，在渲染函数中（touch），响应式系统使用响应式数据的getter方法对观察者进行依赖收集（Collect as Dependency），使用响应式数据的setter方法通知（notify）所有观察者进行更新，此时观察者 Watcher 会触发组件的渲染函数（Trigger re-render），组件执行的 render 函数，生成一个新的 Virtual DOM Tree，此时 Vue 会对新老 Virtual DOM Tree 进行 Diff，查找出需要操作的真实 DOM 并对其进行更新。



---

## 2.1 Vue跟传统开发的区别

总结就是：

- Vue所有的界面事件，**都是只去操作数据的**，Jquery操作DOM
- **Vue所有界面的变动，都是根据数据自动绑定出来的**，Jquery操作DOM

前端传统开发:假设你要写个网页

        搭建结构：html语言搭建网页的结构,渲染数据到页面
    
        美化样式:css语言美化
    
        交互:js语言,操作DOM实现用户跟网页的交互行为,跟后端的数据交互

缺点:

    大量操作DOM
    
    渲染数据/更新页面数据很麻烦

vue开发：

    通过vue提供指令(模板语法)更快捷方便渲染页面结构,
    
    交互：通过vue内的事件机制,处理页面与用户交互行为,大大减轻的DOM操作



----

## 2.2 jquery 和 vue相比

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

- **vue适用的场景**：复杂数据操作的后台页面，表单填写页面
- **jquery适用的场景**：比如说一些html5的动画页面，一些需要js来操作页面样式的页面
- 二者也是可以结合起来一起使用的，vue**侧重数据绑定**，jquery**侧重样式操作，动画效果**等，则会更加高效率的完成业务需求



----

## 2.3 为什么选择用vue做页面展示

- **MVVM 框架**：

  Vue 正是使用了这种 MVVM 的框架形式，并且通过声明式渲染和响应式数据绑定的方式来帮助我们完全避免了对 DOM 的操作。

- **单页面应用程序**

  Vue 配合生态圈中的 Vue-Router 就可以非常方便的开发复杂的单页应用

- **轻量化与易学习**

  Vue 的生产版本只有 30.90KB 的大小，几乎不会对我们的网页加载速度产生影响。同时因为 Vue 只专注于视图层，单独的 Vue 就像一个库一样，所以使我们的学习成本变得非常低

- **渐进式与兼容性**

  Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。Vue 只做界面，而把其他的一切都交给了它的周边生态（axios（Vue 官方推荐）、Loadsh.js、Velocity.js 等）来做处理，这就要求 Vue 必须要对其他的框架拥有最大程度的兼容性

- **视图组件化**

  Vue 允许通过组件来去拼装一个页面，每个组件都是一个可复用的 Vue 实例，组件里面可以包含自己的数据，视图和代码逻辑。方便复用

- **虚拟 DOM（Virtual DOM）**

  Vue 之所以可以完全避免对 DOM 的操作，就是因为 Vue 采用了虚拟 DOM 的方式，不但避免了我们对 DOM 的复杂操作，并且大大的加快了我们应用的运行速度。

- **社区支持**

  得益于 Vue 的本土化身份（Vue 的作者为国人尤雨溪），再加上 Vue 本身的强大，所以涌现出了特别多的国内社区，这种情况在其他的框架身上是没有出现过的，这使得我们在学习或者使用 Vue 的时候，可以获得更多的帮助

- **未来的 Vue 走向**

  

---

## 2.4 vue/angular区别

1. **体积和性能**

   相较于vue，angular显得比较臃肿，比如一个包含了 Vuex + Vue Router 的 Vue 项目 (gzip 之后 30kB) ，而 angular-cli 生成的默认项目尺寸 (~65KB) 还是要小得多。

   在性能上，AngularJS依赖对数据做脏检查，所以Watcher越多越慢。Vue.js使用基于依赖追踪的观察并且使用异步队列更新。所有的数据都是独立触发的。 对于庞大的应用来说，这个优化差异还是比较明显的

2. **Virtual DOM vs Incremental DOM**

   在底层渲染方面，vue 使用的虚拟dom，而angular 使用的是Incremental DOM，Incremental DOM的优势在于低内开销

3. **灵活性**

   Vue 相比于 Angular 更加灵活，可以按照不同的需要去组织项目的应用代码。比如，甚至可以直接像引用jquery那样在HTML中引用vue，然后仅仅当成一个前端的模板引擎来用。

4. **es6支持**

   es6是新一代的javascript标准，对JavaScript进行了大量的改进，使用es6开发已是基本需求。虽然有部分十分老旧的浏览器不支持es6，但是可以利用现代开发工具将es6编译成es5。在对es6的支持上两者都做得很好，（TS本身就是es6的超集）

5. **学习难度**

   针对前端而言，angular的学习曲线相对较大，vue学习起来更容易一些。不过对java和c的使用者而言，angular的静态检查、依赖注入的特性，以及面向对象的编程风格，使得angular都要更亲切一些。

6. **使用热度**

   在使用热度上，vue具有更大优势，主要原因是更受数量庞大的中国开发者欢迎。较低的上手难度，易懂的开发文档，以及国人主导开发的光环，都使得vue更为流行



----

## 2.5Vue和React对比

React 是由Facebook创建的JavaScript UI框架，React推广了 Virtual DOM( 虚拟 DOM )并创造了 JSX 语法。JSX 语法的出现允许我们在 javascript 中书写 HTML 代码。

VUE 是由尤雨溪开发的，VUE 使用了**模板系统**而不是JSX，因其实模板系统都是用的普通的 HTML，所以对应用的升级更方便、更容易，而不需要整体重构。

VUE 相较于 React 更容易上手，如果是一个有一定开发经验的开发者，甚至都不需要花额外的时间去学习，直接一遍开发一遍查文挡即可。

### 相同点

- 都有**组件化思想**
- 都支持**服务器端渲染**
- 都有Virtual DOM（虚拟dom）
- 数据驱动视图
- 都有支持native的方案：`Vue`的`weex`、`React`的`React native`
- 都有自己的构建工具：`Vue`的`vue-cli`、`React`的`Create React App`
- 都有状态管理工具：Vue的 vuex、React的 redux
- 都支持路由

### 区别

- **数据流向**的不同。`react`从诞生开始就推崇**单向数据流**，而`Vue`是**双向数据流**
- **数据变化**的实现原理不同。`react`使用的是**不可变数据**，而`Vue`使用的是**可变的数据**
- **组件化通信**的不同。`react`中我们通过使用**回调函数**来进行通信的，而`Vue`中子组件向父组件传递消息有两种方式：**事件和回调函数**
- **diff算法不同**。`react`主要使用**diff队列**保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。`Vue` 使用**双向指针**，边对比，边更新DOM

### 优势

**React**

- 灵活性和响应性：它提供最大的灵活性和响应能力。
- 丰富的JavaScript库：来自世界各地的贡献者正在努力添加更多功能。
- 可扩展性：由于其灵活的结构和可扩展性，**React已被证明对大型应用程序更好。**
- 不断发展： React得到了Facebook专业开发人员的支持，他们不断寻找改进方法。
- Web或移动平台： React提供React Native平台，可通过相同的React组件模型为iOS和Android开发本机呈现的应用程序。

**Vue**

- 易于使用： Vue.js包含基于HTML的标准模板，可以更轻松地使用和修改现有应用程序。
- 更顺畅的集成：无论是单页应用程序还是复杂的Web界面，Vue.js都可以更平滑地集成更小的部件，而不会对整个系统产生任何影响。
- 更好的性能，更小的尺寸：它占用更少的空间，并且往往比其他框架提供更好的性能。
- 精心编写的文档：通过详细的文档提供简单的学习曲线，无需额外的知识; HTML和JavaScript将完成工作。
- 适应性：整体声音设计和架构使其成为一种流行的JavaScript框架。
- 它提供无障碍的迁移，简单有效的结构和可重用的模板。

如上所说的 Vue 的响应式机制也有问题，当 state 特别多的时候，Watcher 会很多，会导致卡顿，所以大型应用（状态特别多的）一般用 React，更加可控。

可对于易用性来说，VUE 是更容易上手的，对于项目来说新人更容易接手。

所以，技术没有哪个更好或者是更优秀，只要适合自己的才是最合适的。





----

## 2.6 vue单页面和传统的多页面区别？

单页面应用（SPA）

通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。**所有的页面内容都包含在这个所谓的主页面中**。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。

多页面（MPA）

指一个应用中有多个页面，页面跳转时是整页刷新

**单页面的优点：**

- 用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；
- 前后端分离；
- 页面效果会比较炫酷（比如切换页面内容时的转场动画）。

**单页面缺点：**

- 不利于SEO；
- 导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，**所以需要自己建立堆栈管理**）；
- 初次加载时耗时多；
- 页面复杂度提高很多。



----

## 了解vue中的diff算法吗？

vue基于虚拟DOM做更新，diff又是其核心部分

思路

1. diff算法是干什么的
2. 它的必要性
3. 它何时执行
4. 具体执行方式
5. 拔高：说一下vue3中的优化

回答范例

1.Vue中的diff算法称为patching算法，它由Snabbdom修改而来，虚拟DOM要想转化为真实DOM就需要通过patch方法转换。

2.最初Vue1.x视图中每个依赖均有更新函数对应，可以做到精准更新，因此并不需要虚拟DOM和patching算法支持，但是这样粒度过细导致Vue1.x无法承载较大应用；Vue 2.x中为了降低Watcher粒度，每个组件只有一个Watcher与之对应，此时就需要引入patching算法才能精确找到发生变化的地方并高效更新。

3.vue中diff执行的时刻是组件内响应式数据变更触发实例执行其更新函数时，更新函数会再次执行render函数获得最新的虚拟DOM，然后执行patch函数，并传入新旧两次虚拟DOM，通过比对两者找到变化的地方，最后将其转化为对应的DOM操作。

4.patch过程是一个递归过程，遵循深度优先、同层比较的策略；以vue3的patch为例：

- 首先判断两个节点是否为相同同类节点，不同则删除重新创建
- 如果双方都是文本则更新文本内容
- 如果双方都是元素节点则递归更新子元素，同时更新元素属性
- 更新子节点时又分了几种情况：
  - 新的子节点是文本，老的子节点是数组则清空，并设置文本；
  - 新的子节点是文本，老的子节点是文本则直接更新文本；
  - 新的子节点是数组，老的子节点是文本则清空文本，并创建新子节点数组中的子元素；
  - 新的子节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节blabla

1. vue3中引入的更新策略：编译期优化patchFlags、block等





---

## 2.7 vue2的diff算法与vue3的diff算法

vue2 核心 diff 算法 采用的是`双端比较算法`

vue3 核心 diff 算法采用的是`去头尾的最长递增子序列算法`

在计算机科学中，**最长递增子序列**（longest increasing subsequence）问题是指，在一个给定的数值序列中，找到一个子序列，使得这个子序列元素的数值依次递增，并且这个子序列的长度尽可能地大。**最长递增子序列中的元素在原序列中不一定是连续的**。解决最长递增子序列问题的算法最低要求O(n log n)的时间复杂度，这里n表示输入序列的规模。

多数解法是使用动态规划的思想，算法的时间复杂度是 O(n2)，而 Vue.js 内部使用的是“**贪心 + 二分查找**”的算法，贪心算法的时间复杂度是 O(n)，二分查找的时间复杂度是 O(logn)，所以它的总时间复杂度是 `O(nlogn)`。



Diff算法即**差异查找算法**。

### Vue的diff策略

- 传统的计算两颗树的差异时间复杂度为O(n^3),显然成本比较高（老树的每一个节点都去遍历新树的节点，直到找到新树对应的节点。那么这个流程就是 O(n^2)，再紧接着找到不同之后，再计算最短修改距离然后修改节点，这里是 O(n^3)。）
- Vue采用对树的节点进行同层比较，**所以时间复杂度是O(n)，比较高效**

### Vue Diff算法的基于什么策略

- Web UI 中 DOM 节点**跨层级的移动操作特别少**，可以忽略不计 （tree-diff）
- 拥有**相同类的两个组件将会生成相似的树形结构**，拥有不同类的两个组件将会生成不同的树形结（component diff）
- **对于同一层级的一组子节点**，它们**可以通过唯一 id 进行区分**（element-diff）

### Vue Diff算法的原因以及目的

Vue diff算法是vue2中引入虚拟DOM的产物，它的出现是**为了通过对比新旧节点计算出需要改动的最小变化**。 

核心思想：**尽可能的复用老节点**

### Vue2 diff流程

#### 新老节点不同

- 创建新节点 以当前旧节点为参考 插入到DOM
- 删除旧节点

#### 新老节点相同

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

### Vue3的diff流程

#### 新旧节点不同

- 销毁旧节点
- 根据新节点的类型 去挂载不同的节点

#### 处理组件

- 先判断子组件是否需要更新
- 如果需要则递归执行子组件的副渲染函数来更新
- 否则仅仅更新一些 vnode 的属性，并让子组件实例保留对组件 vnode 的引用

#### 处理元素

- 更新props
- 更新子节点 子节点有三种类型 纯文本 Vnode数组 和 空

#### 旧节点是纯文本：

- 新节点也是 做简单的替换
- 新节点是空 删除
- 新节点是Vnode数组 批量添加

#### 旧节点是空：

- 如果新子节点是纯文本，那么在旧子节点的父容器下添加新文本节点即可；
- 如果新子节点也是空，那么什么都不需要做
- 如果新子节点是 vnode 数组，那么直接去旧子节点的父容器下添加多个新子节点即可。

#### 旧子节点是 vnode 数组：

- 如果新子节点是纯文本，那么先删除旧子节点，再去旧子节点的父容器下添加新文本节点；
- 如果新子节点是空，那么删除旧子节点即可
- **如果新子节点也是 vnode 数组，那么就需要做完整的 diff 新旧子节点了**，这是最复杂的情况，内部运用了核心 diff 算法

#### 新旧节点都是数组

新旧数组之间的对比，无非是通过更新、删除、添加和移除节点来完成的，diff算法的核心以**较低的成本完成子节点的更新为目的**，求解生成新子节点 DOM 的系列操作。 过程：

- 同步头节点
- 同步尾节点
- 新子节点有剩余，添加新节点 
- 旧节点有剩余，删除多余节点 
- 处理未知子序列

#### 处理未知子序列

有时会碰到比较复杂的未知子序列：对于移动、删除、添加、更新这些操作，其中最复杂的就是移动操作，`Vue针对未知子序列的核心是通过最长递增子序列查找到需要移动的最小值`。

在查找过程中需要对比新旧子序列，那么我们就要遍历某个序列，如果在遍历旧子序列的过程中需要判断某个节点是否在新子序列中存在，这就需要双重循环，而双重循环的复杂度是 O(n2) ，**为了优化这个复杂度，我们可以用一种空间换时间的思路**，建立索引图，把时间复杂度降低到 O(n)。

建立索引图

- 根据for循环中的key建立新子序列中的索引图
- 然后再创建一个新旧子序列索引的映射关系，用于确定**最长递增子序列**、
- 然后正序遍历旧子序列，看看是否在新子序列的索引图中，如果不再就删除，如果在根据索引去判断这个节点是否在最长递增子序列中，如果在就不需要进行移动，**如果不再就要进行移动操作**
- 然后在遍历的过程中对新节点打上标记，对于没有被查找的标识为0，需要进行添加操作



---

## 2.8 vue首屏白屏如何解决？

1. 路由懒加载
2. vue-cli开启打包压缩 和后台配合 gzip访问
3. 进行cdn加速
4. 开启vue服务渲染模式
5. 用webpack的externals属性**把不需要打包的库文件分离出去**，减少打包后文件的大小
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

## 2.9 SPA首屏加载速度慢的怎么解决？

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

### 什么是首屏加载

首屏时间（First Contentful Paint），**指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间**，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容

首屏加载可以说是用户体验中**最重要**的环节

### 加载慢的原因

在页面渲染的过程，导致加载速度慢的因素可能如下：

- 网络延时问题
- 资源文件体积是否过大
- 资源是否重复发送请求去加载了
- 加载脚本的时候，渲染内容堵塞了

### 解决方案

常见的几种SPA首屏优化方式

- 减小入口文件体积
- 静态资源本地缓存
- UI框架按需加载
- 图片资源的压缩
- 组件重复打包
- 开启GZip压缩
- 使用SSR

#### 减小入口文件体积

常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加

在`vue-router`配置路由的时候，采用动态加载路由的形式

```js
routes:[ 
    path: 'Blogs',
    name: 'ShowBlogs',
    component: () => import('./components/ShowBlogs.vue')
]
```

**以函数的形式加载路由，这样就可以把各自的路由文件分别打包**，只有在解析给定的路由时，才会加载路由组件

#### 静态资源本地缓存

后端返回资源问题：

- 采用`HTTP`缓存，设置`Cache-Control`，`Last-Modified`，`Etag`等响应头
- 采用`Service Worker`离线缓存

前端合理利用`localStorage`

#### UI框架按需加载

在日常使用`UI`框架，例如`element-UI`、或者`antd`，我们经常性直接引用整个`UI`库

```js
import ElementUI from 'element-ui'
Vue.use(ElementUI)
```

但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用

```js
import { Button, Input, Pagination, Table, TableColumn, MessageBox } from 'element-ui';
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
```

#### 组件重复打包

假设`A.js`文件是一个常用的库，现在有多个路由使用了`A.js`文件，这就造成了重复下载

解决方案：在`webpack`的`config`文件中，修改`CommonsChunkPlugin`的配置

```js
minChunks: 3
```

`minChunks`为3表示**会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件**

#### 图片资源的压缩

图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素

对于所有的图片资源，我们可以进行适当的压缩

对页面上使用到的`icon`，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻`http`请求压力。

#### 开启GZip压缩

拆完包之后，我们再用`gzip`做一下压缩 安装`compression-webpack-plugin`

```js
cnmp i compression-webpack-plugin -D
```

在服务器我们也要做相应的配置 如果发送请求的浏览器支持`gzip`，就发送给它`gzip`格式的文件， 服务器是用`express`框架搭建的 只要安装一下`compression`就能使用

#### 使用SSR

SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器

从头搭建一个服务端渲染是很复杂的，`vue`应用建议使用`Nuxt.js`实现服务端渲染



---

## 2.10 虚拟DOM

### 什么是虚拟DOM

Virtual dom, 即虚拟DOM节点。**它通过`JS`的Object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点**。

*所谓虚拟DOM，**是一个用于表示真实 DOM 结构和属性的 `JavaScript` 对象**，这个对象用于对比前后虚拟 DOM 的差异化，然后进行局部渲染从而实现性能上的优化。在`Vue.js` 中虚拟 DOM 的 `JavaScript` 对象就是 VNode。*

```
1.     虚拟dom就是通过一个对象描述一个html结构
2.     在js对象和真实dom树之间存在的一个虚拟对象
3.     所有的dom树节点都是根据这个虚拟dom实现生成的
4.     在虚拟dom向真实的dom树转换之前会根据diff算法动态的计算需要更改的标签 进行替换操作
```

虚拟 DOM （`Virtual DOM` ）这个概念相信大家都不陌生，从 `React` 到 `Vue` ，虚拟 `DOM` 为这两个框架都带来了跨平台的能力（`React-Native` 和 `Weex`）

实际上它只是一层对真实`DOM`的抽象，以`JavaScript` 对象 (`VNode` 节点) 作为基础的树，**用对象的属性来描述节点**，最终可以通过一系列操作使这棵树映射到真实环境上

在`Javascript`对象中，虚拟`DOM` 表现为一个 `Object`对象。并且最少包含**标签名** (`tag`)、**属性** (`attrs`) 和**子元素对象** (`children`) 三个属性，不同框架对这三个属性的名命可能会有差别

创建虚拟`DOM`就是为了更好将虚拟的节点渲染到页面视图中，所以**虚拟`DOM`对象的节点与真实`DOM`的属性一一照应**

在`vue`中同样使用到了虚拟`DOM`技术

定义真实`DOM`

```html
<div id="app">
    <p class="p">节点内容</p>
    <h3>{{ foo }}</h3>
</div>
```

实例化`vue`

```js
const app = new Vue({
    el:"#app",
    data:{
        foo:"foo"
    }
})
```

观察`render`的`render`，我们能得到虚拟`DOM`

```js
(function anonymous(
) {
	with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',{staticClass:"p"},
					  [_v("节点内容")]),_v(" "),_c('h3',[_v(_s(foo))])])}})
```

通过`VNode`，`vue`可以对这颗抽象树进行创建节点,删除节点以及修改节点的操作， **经过`diff`算法得出一些需要修改的最小单位**,再更新视图，减少了`dom`操作，提高了性能

### **虚拟DOM的优势**

1.  可以针对不同的终端平台 输出不同的页面展示节点
    比如：网页、微信小程序、原生应用
    
2.  在生成的时候只需要修改render方法渲染出不同的节点标签即可



### 为什么需要虚拟DOM

`DOM`是很慢的，其元素非常庞大，**页面的性能问题，大部分都是由`DOM`操作引起的**

由此可见，操作`DOM`的代价仍旧是昂贵的，**频繁操作还是会出现页面卡顿，影响用户的体验**

浏览器在生成dom树的时候，非常消耗资源，因此**引入虚拟dom概念通过一定的算法优化之后能够非常快捷的根据数据生成真实的html节点**，现在`vue`和`react`都是使用的虚拟dom

**举个例子：**

你用传统的原生`api`或`jQuery`去操作`DOM`时，浏览器会从构建`DOM`树开始从头到尾执行一遍流程

当你在一次操作时，需要更新10个`DOM`节点，浏览器没这么智能，收到第一个更新`DOM`请求后，并不知道后续还有9次更新操作，因此会马上执行流程，最终执行10次流程

而通过`VNode`，同样更新10个`DOM`节点，虚拟`DOM`不会立即操作`DOM`，**而是将这10次更新的`diff`内容保存到本地的一个`js`对象中，最终将这个`js`对象一次性`attach`到`DOM`树上，避免大量的无谓计算**

> 很多人认为虚拟 DOM 最大的优势是 diff 算法**，减少 JavaScript 操作真实 DOM 的带来的性能消耗**。虽然这一个虚拟 DOM 带来的一个优势，但并不是全部。**虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力**，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种GUI

集中操作dom的话，会减少重排和重绘的次数，重排开销是比较大的，为什么重排开销大？因**为重排会导致浏览器重新生成渲染树**



### Virtual DOM 真的比操作原生 DOM 快吗？

**对 React 的 Virtual DOM 的误解**

React 从来没有说过 “React 比原生操作 DOM 快”。**React 的基本思维模式是每次有变动就整个重新渲染整个应用**。如果没有 Virtual DOM，简单来想就是直接重置 innerHTML。很多人都没有意识到，在一个大型列表所有数据都变了的情况下，重置 innerHTML 其实是一个还算合理的操作... 真正的问题是在 “全部重新渲染” 的思维模式下，即使只有一行数据变了，它也需要重置整个 innerHTML，这时候显然就有大量的浪费。

我们可以比较一下 innerHTML vs. Virtual DOM 的重绘性能消耗：

（1）innerHTML: render html string O(template size) + 重新创建所有 DOM 元素 O(DOM size)

（2）Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)

Virtual DOM render + diff 显然比渲染 html 字符串要慢，但是！它依然是纯 js 层面的计算，比起后面的 DOM 操作来说，依然便宜了太多。可以看到，innerHTML 的总计算量不管是 js 计算还是 DOM 操作都是和整个界面的大小相关，**但 Virtual DOM 的计算量里面，只有 js 计算和界面大小相关**，DOM 操作是和数据的变动量相关的。前面说了，**和 DOM 操作比起来，js 计算是极其便宜的**。

这才是为什么要有 Virtual DOM：它保证了 1）不管你的数据变化多少，每次重绘的性能都可以接受；2) 你依然可以用类似 innerHTML 的思路去写你的应用。

**MVVM vs. Virtual DOM**

相比起 React，其他 MVVM 系框架比如 Angular, Knockout 以及 Vue、Avalon 采用的都是数据绑定：通过 Directive/Binding 对象，观察数据变化并保留对实际 DOM 元素的引用，当有数据变化时进行对应的操作。MVVM 的变化检查是**数据层面**的，而 **React 的检查是 DOM 结构层面的**。MVVM 的性能也根据变动检测的实现原理有所不同：Angular 的脏检查使得任何变动都有固定的O(watcher count) 的代价；Knockout/Vue/Avalon 都采用了依赖收集，在 js 和 DOM 层面都是 O(change)：

（1）脏检查：scope digest O(watcher count) + 必要 DOM 更新 O(DOM change)

（2）依赖收集：重新收集依赖 O(data change) + 必要 DOM 更新 O(DOM change)可以看到，Angular 最不效率的地方在于任何小变动都有 watcher 数量相关的性能代价。但是！当所有数据都变了的时候，Angular 其实并不吃亏。依赖收集在初始化和数据变化的时候都需要重新收集依赖，这个代价在小量更新的时候几乎可以忽略，但在数据量庞大的时候也会产生一定的消耗。

MVVM 渲染列表的时候，由于每一行都有自己的数据作用域，所以通常都是每一行有一个对应的 ViewModel 实例，或者是一个稍微轻量一些的利用原型继承的 "scope" 对象，但也有一定的代价。所以，MVVM 列表渲染的初始化几乎一定比 React 慢，因为创建 ViewModel / scope 实例比起 Virtual DOM 来说要昂贵很多。这里所有 MVVM 实现的一个共同问题就是在列表渲染的数据源变动时，尤其是当数据是全新的对象时，如何有效地复用已经创建的 ViewModel 实例和 DOM 元素。假如没有任何复用方面的优化，由于数据是 “全新” 的，MVVM 实际上需要销毁之前的所有实例，重新创建所有实例，最后再进行一次渲染！这就是为什么题目里链接的 angular/knockout 实现都相对比较慢。相比之下，React 的变动检查由于是 DOM 结构层面的，即使是全新的数据，只要最后渲染结果没变，那么就不需要做无用功。

Angular 和 Vue 都提供了列表重绘的优化机制，也就是 “提示” 框架如何有效地复用实例和 DOM 元素。比如数据库里的同一个对象，在两次前端 API 调用里面会成为不同的对象，但是它们依然有一样的 uid。这时候你就可以提示 track by uid 来让 Angular 知道，这两个对象其实是同一份数据。那么原来这份数据对应的实例和 DOM 元素都可以复用，只需要更新变动了的部分。或者，你也可以直接 track by $index 来进行 “原地复用”：直接根据在数组里的位置进行复用。在题目给出的例子里，如果 angular 实现加上 track by $index 的话，后续重绘是不会比 React 慢多少的。甚至在 dbmonster 测试中，Angular 和 Vue 用了 track by $index 以后都比 React 快: dbmon (注意 Angular 默认版本无优化，优化过的在下面）

顺道说一句，React 渲染列表的时候也需要提供 key 这个特殊 prop，本质上和 track-by 是一回事。

**性能比较也要看场合**

在比较性能的时候，要分清楚**初始渲染、小量数据更新、大量数据更新**这些不同的场合。Virtual DOM、脏检查 MVVM、数据收集 MVVM 在不同场合各有不同的表现和不同的优化需求。Virtual DOM 为了提升小量数据更新时的性能，也需要针对性的优化，比如 shouldComponentUpdate 或是 immutable data。

（1）初始渲染：Virtual DOM > 脏检查 >= 依赖收集

（2）小量数据更新：依赖收集 >> Virtual DOM + 优化 > 脏检查（无法优化） > Virtual DOM 无优化

（3）大量数据更新：脏检查 + 优化 >= 依赖收集 + 优化 > Virtual DOM（无法/无需优化）>> MVVM 无优化

**不要天真地以为 Virtual DOM 就是快，diff 不是免费的**，batching 么 MVVM 也能做，而且最终 patch 的时候还不是要用原生 API。 Virtual DOM 真正的价值从来都不是性能，而是：

(1) 为函数式的 UI 编程方式打开了大门；(2) 可以渲染到 DOM 以外的 backend，比如 ReactNative。





---

## 2.11 mvc和mvvm的区别

MVC: MVC是应用最广泛的软件架构之一,一般MVC分为:Model(模型),View(视图),Controller(控制器)。 这主要是基于分层的目的,让彼此的职责分开.View一般用Controller来和Model进行联系。Controller是Model和View的协调者,View和Model不直接联系。基本都是**单向联系**。

MVVM:MVVM是把MVC中的**Controller改变成了ViewModel**。View的变化会自动更新到ViewModel，ViewModel的变化也会自动同步到View上显示，通过数据来显示视图层。

MVVM和MVC的区别:

- MVC中Controller演变成MVVM中的ViewModel
- MVVM通过数据来显示视图层而不是节点操作
- MVVM主要解决了MVC中大量的dom操作使页面渲染性能降低,加载速度变慢,影响用户体验



---

## 2.12 单页应用优缺点

优点

1. **良好的交互体验**

   单页应用的内容的改变不需要重新加载整个页面，获取数据也是通过Ajax异步获取，没有页面之间的切换，就不会出现“白屏现象”,也不会出现假死并有“闪烁”现象，页面显示流畅，web应用更具响应性和更令人着迷。

2. **良好的前后端工作分离模式**

   后端不再负责模板渲染、输出页面工作，后端API通用化，即同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端。

3. **减轻服务器压力**

单页应用相对服务器压力小，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍。

缺点

(1) 首屏加载慢

- 如果不对路由进行处理，在加载首页的时候，就会将所有组件全部加载，并向服务器请求数据，这必将拖慢加载速度；
- 通过查看Network，发现整个网站加载试讲长达10几秒，加载时间最长的就是js、css文件和媒体文件及图片

解决方案：

- Vue-router懒加载

  ​	Vue-router懒加载就是按需加载组件，只有当路由被访问时才会加载对应的组件，而不是在加载首页的时候就加载，项目越大，对首屏加载的速度提升得越明显。

- 使用CDN加速

  ​	在做项目时，我们会用到很多库，采用cdn加速可以加快加载速度。

- 异步加载组件

- 服务端渲染

  ​	服务端渲染还能对seo优化起到作用，有利于搜索引擎抓取更多有用的信息（如果页面纯前端渲染，搜索引擎抓取到的就只是空页面）

(2) 不利于SEO

seo 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的js的。也就是说，搜索引擎的基础爬虫的原理就是抓取url，然后获取html源代码并解析。 如果一个单页应用，html在服务器端还没有渲染部分数据，在浏览器才渲染出数据，即搜索引擎请求到的html是模型页面而不是最终数据的渲染页面。 这样就很不利于内容被搜索引擎搜索到。



解决方案：

- 服务端渲染:服务器合成完整的 html 文件再输出到浏览器
- 页面预渲染
- **路由采用h5 history模式**

(3) 不适合开发大型项目

大型项目中可能会涉及大量的DOM操作、复杂的动画效果，也就不适合使用Vue、react框架进行开发。



---

## 2.13 框架带来的好处和弊端

优势：

1. 组件化：其中以react的组件化最为彻底，甚至可以到函数级别的原子组件，高度的组件化可以使我们的工程易于维护，易于组合扩展；
2. 天然分层：jQuery时代的代码大部分情况下是面条代码，耦合严重，现代框架不管是MVC、MVP还是MVVM模式都可以帮我们进行分层，代码解耦更易于读写；
3. 生态：现代主流框架都自带生态，不管是数据流管理架构还是UI库都有成熟的解决方案；
4. 开发效率：现在前端框架都默认自动更新DOM，而非我们手动操作，解放了开发者的手动DOM成本，提高开发效率，从根本上解决了UI与状态同步问题。

劣势：

1. 兼容性问题，SEO不友好
2. 有场景要求，开发自由度降低
3. 有黑盒开发，框架本身有出错的风险
4. 有学习成本



---

## 2.14 模块化、组件化、工程化

工程化：

前端工程化是一个高层次的思想，而模块化和组件化是为工程化思想下相对较具体的开发方式，因此可以简单的认为模块化和组件化是工程化的表现形式。工程化是将前端项目当成一项系统工程进行分析、组织和构建从而达到项目结构清晰、分工明确、团队配合默契、开发效率提高的目的。

模块化：

一个模块就是一个实现特定功能的文件，有了模块我们就可以更方便的使用别人的代码，要用什么功能就加载什么模块。

js模块化方案很多有AMD、CommonJS、UMD、ES6 Module等。css模块化开发大多数是在less、sass、stylus等预处理器的import、minxin特性支持下实现。

模块化优势：

- 避免变量污染，命名冲突
- 提高代码复用率
- 提高维护性
- 依赖关系的管理

组件化：

页面上的每个独立的、可视/可交互区域视为一个组件

每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护；由于组件具有独立性，因此组件与组件之间可以自由组合；页面不过是组件的容器，负责组合组件形成功能完整的界面；



---

## 2.15 谈谈对 MVC、MVP、MVVM 模式的理解

在开发图形界面应用程序的时候，会把管理用户界面的层次称为 View，应用程序的数据为 Model，Model 提供数据操作的接口，执行相应的业务逻辑。

**MVC**

MVC 除了把应用程序分为 View、Model层，还额外的加了一个 Controller层，它的职责是进行 Model 和 View 之间的协作（路由、输入预处理等）的应由逻辑（application logic）；Model 进行处理业务逻辑。

用户对 View 操作以后，View 捕获到这个操作，会把处理的权利交移给Controller（Pass calls）；Controller 会对来自 View 数据进行预处理、决定调用哪个 Model 的接口；然后由 Model 执行相关的业务逻辑；当Model 变更了以后，会通过观察者模式（Observer Pattern）通知 View；View 通过观察者模式收到 Model 变更的消息以后，会向 Model 请求最新的数据，然后重新更新界面。

**MVP**

和 MVC 模式一样，用户对 View 的操作都会从 View 交易给 Presenter。Presenter 会执行相应的应用程序逻辑，并且会对 Model 进行相应的操作；而这时候 Model 执行业务逻辑以后，也是通过观察者模式把自己变更的消息传递出去，但是是传给 Presenter 而不是 View。Presenter 获取到 Model变更的消息以后，通过 View 提供的接口更新界面。

**MVVM**

MVVM 可以看做是一种特殊的 MVP（Passive View）模式，或者说是对 MVP 模式的一种改良。

MVVM 代表的是 Model-View-ViewModel，可以简单把 ViewModel 理解为页面上所显示内容的数据抽象，和 Domain Model 不一样，ViewModel 更适合用来描述 View。 MVVM 的依赖关系和 MVP 依赖关系一致，只不过是把 P 换成了 VM。

MVVM的调用关系：

MVVM 的调用关系和 MVP 一样。但是，在 ViewModel 当中会有一个叫 Binder，或者是 Data-binding engine 的东西。以前全部由 Presenter 负责的 View 和 Model 之间数据同步操作交由给 Binder 处理。你只需要在View 的模板语法当中，指令式声明 View 上的显示的内容是和 Model 的哪一块数据绑定的。当 ViewModel 对进行 Model 更新的时候，Binder 会自动把数据更新到 View 上，当用户对 View 进行操作（例如表单输入），Binder 也会自动把数据更新到 Model 上。这种方式称为：Two-way data-binding，双向数据绑定。可以简单而不恰当地理解为一个模板引擎，但是会根据数据变更实时渲染。



----

## 2.16 elementui 有什么用?

**Element-UI**：是一套采用 Vue 2.0 作为基础框架实现的组件库，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助网站快速成型

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

## 2.17 修改ElementUI 样式的几种方式?

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

##  2.18 说下Vite的原理

### 共存的模块化标准

为什么`JavaScript`会有多种共存的模块化标准？因为js在设计之初并没有模块化的概念，随着前端业务复杂度不断提高，模块化越来越受到开发者的重视，社区开始涌现多种模块化解决方案，它们相互借鉴，也争议不断，形成多个派系，从`CommonJS`开始，到`ES6`正式推出`ES Modules`规范结束，所有争论，终成历史，`ES Modules`也成为前端重要的基础设施。

- **CommonJS**：现主要用于Node.js（Node@13.2.0开始支持直接使用ES Module）
- **AMD**：`require.js` 依赖前置，市场存量不建议使用
- **CMD**：`sea.js` 就近执行，市场存量不建议使用
- **ES Module**：**ES语言规范，标准，趋势，未来**

### 当前工程化痛点

现在常用的构建工具如`Webpack`，主要是通过抓取-编译-构建整个应用的代码（也就是常说的打包过程），生成一份编译、优化后能良好兼容各个浏览器的的生产环境代码。在开发环境流程也基本相同，需要先将整个应用构建打包后，再把打包后的代码交给`dev server`（开发服务器）。

`Webpack`等构建工具的诞生给前端开发带来了极大的便利，但随着前端业务的复杂化，js代码量呈指数增长，打包构建时间越来越久，`dev server`（开发服务器）性能遇到瓶颈：

- **缓慢的服务启动：** 大型项目中`dev server`启动时间达到几十秒甚至几分钟。
- **缓慢的HMR热更新：** 即使采用了 HMR 模式，其热更新速度也会随着应用规模的增长而显著下降，已达到性能瓶颈，无多少优化空间。

**缓慢的开发环境，大大降低了开发者的幸福感，在以上背景下`Vite`应运而生。**

### 什么是Vite？

**基于esbuild与Rollup，依靠浏览器自身ESM编译功能， 实现极致开发体验的新一代构建工具！**

#### 概念

先介绍以下文中会经常提到的一些基础概念：

- **依赖：** 指开发不会变动的部分(npm包、UI组件库)，esbuild进行预构建。
- **源码：** 浏览器不能直接执行的非js代码(.jsx、.css、.vue等)，vite只在浏览器请求相关源码的时候进行转换，以提供ESM源码。

#### 开发环境

- 利用浏览器原生的`ES Module`编译能力，省略费时的编译环节，直给浏览器开发环境源码，`dev server`只提供轻量服务。
- 浏览器执行ESM的`import`时，会向`dev server`发起该模块的`ajax`请求，服务器对源码做简单处理后返回给浏览器。
- `Vite`中HMR是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块失活，使得无论应用大小如何，HMR 始终能保持快速更新。
- 使用`esbuild`处理项目依赖，`esbuild`使用go编写，比一般`node.js`编写的编译器快几个数量级。

#### 生产环境

- 集成`Rollup`打包生产环境代码，依赖其成熟稳定的生态与更简洁的插件机制。

#### 处理流程对比

`Webpack`通过先将整个应用打包，再将打包后代码提供给`dev server`，开发者才能开始开发。

![img](E:\pogject\学习笔记\image\vue\webpack流程)

`Vite`直接将源码交给浏览器，实现`dev server`秒开，浏览器显示页面需要相关模块时，再向`dev server`发起请求，服务器简单处理后，将该模块返回给浏览器，实现真正意义的按需加载。

![img](E:\pogject\学习笔记\image\vue\vite流程)

### 基本用法

#### 创建vite项目

```bash
$ npm create vite@latest
```

#### 选取模板

`Vite` 内置6种常用模板与对应的TS版本，可满足前端大部分开发场景，可以点击下列表格中模板直接在 [StackBlitz](https://vite.new/) 中在线试用，还有其他更多的 [社区维护模板](https://github.com/vitejs/awesome-vite#templates)可以使用。

| JavaScript                          | TypeScript                                |
| ----------------------------------- | ----------------------------------------- |
| [vanilla](https://vite.new/vanilla) | [vanilla-ts](https://vite.new/vanilla-ts) |
| [vue](https://vite.new/vue)         | [vue-ts](https://vite.new/vue-ts)         |
| [react](https://vite.new/react)     | [react-ts](https://vite.new/react-ts)     |
| [preact](https://vite.new/preact)   | [preact-ts](https://vite.new/preact-ts)   |
| [lit](https://vite.new/lit)         | [lit-ts](https://vite.new/lit-ts)         |
| [svelte](https://vite.new/svelte)   | [svelte-ts](https://vite.new/svelte-ts)   |

#### 启动

```json
{
  "scripts": {
    "dev": "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
    "build": "vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  }
}
```

### 实现原理

#### ESbuild 编译

`esbuild` 使用go编写，cpu密集下更具性能优势，编译速度更快

#### 依赖预构建

- **模块化兼容：** 如开头背景所写，现仍共存多种模块化标准代码，`Vite`在预构建阶段将依赖中各种其他模块化规范(CommonJS、UMD)转换 成ESM，以提供给浏览器。
- **性能优化：** npm包中大量的ESM代码，大量的`import`请求，会造成网络拥塞。`Vite`使用`esbuild`，将有大量内部模块的ESM关系转换成单个模块，以减少 `import`模块请求次数。

#### 按需加载

- 服务器只在接受到import请求的时候，才会编译对应的文件，将ESM源码返回给浏览器，实现真正的按需加载。

#### 缓存

- **HTTP缓存：** 充分利用`http`缓存做优化，依赖（不会变动的代码）部分用max-age,immutable **强缓存**，源码部分用304**协商缓存**，提升页面打开速度。
- **文件系统缓存：** `Vite`在预构建阶段，将构建后的依赖缓存到`node_modules/.vite` ，相关配置更改时，或手动控制时才会重新构建，以提升预构建速度。

#### 重写模块路径

浏览器`import`只能引入相对/绝对路径，而开发代码经常使用`npm`包名直接引入`node_module`中的模块，需要做路径转换后交给浏览器。

- `es-module-lexer` 扫描 import 语法
- `magic-string` 重写模块的引入路径

```js
// 开发代码
import { createApp } from 'vue'

// 转换后
import { createApp } from '/node_modules/vue/dist/vue.js'
```

### 优势

- 快！快！非常快！！
- 高度集成，开箱即用。
- 基于ESM急速热更新，无需打包编译。
- 基于`esbuild`的依赖预处理，比`Webpack`等node编写的编译器快几个数量级。
- 兼容`Rollup`庞大的插件机制，插件开发更简洁。
- 不与`Vue`绑定，支持`React`等其他框架，独立的构建工具。
- 内置SSR支持。
- 天然支持TS。

### 不足

- `Vue`仍为第一优先支持，量身定做的编译插件，对`React`的支持不如`Vue`强大。

- 虽然已经推出2.0正式版，已经可以用于正式线上生产，但目前市场上实践少。

- 生产环境集成`Rollup`打包，与开发环境最终执行的代码不一致。

  

### 与 webpack 对比

由于`Vite`主打的是开发环境的极致体验，生产环境集成`Rollup`，这里的对比主要是`Webpack-dev-server`与`Vite-dev-server`的对比：

- 到目前很长时间以来`Webpack`在前端工程领域占统治地位，`Vite`推出以来备受关注，社区活跃，GitHub star 数量激增
- `Webpack`配置丰富使用极为灵活但上手成本高，`Vite`开箱即用配置高度集成
- `Webpack`启动服务需打包构建，速度慢，`Vite`免编译可秒开
- `Webpack`热更新需打包构建，速度慢，`Vite`毫秒响应
- `Webpack`成熟稳定、资源丰富、大量实践案例，`Vite`实践较少
- `Vite`使用`esbuild`编译，构建速度比`webpack`快几个数量级

### 兼容性

- 默认目标浏览器是在`script`标签上支持原生 ESM 和 原生 ESM 动态导入
- 可使用官方插件 `@vitejs/plugin-legacy`，转义成传统版本和相对应的`polyfill`



---

## 2.19 VNode 有哪些属性？

Vue内部定义的Vnode对象包含了以下属性：

- __v_isVNode: *true*，内部属性，有该属性表示为Vnode
- __v_skip: true，内部属性，表示跳过响应式转换，reactive转换时会根据此属性进行判断
- isCompatRoot?: *true*，用于是否做了兼容处理的判断
- type: VNodeTypes，虚拟节点的类型
- props: (VNodeProps & ExtraProps) | *null*，虚拟节点的props
- key: *string* | *number* | *null*，虚拟阶段的key，可用于diff
- ref: VNodeNormalizedRef | *null*，虚拟阶段的引用
- scopeId: *string* | *null*，仅限于SFC(单文件组件)，在设置currentRenderingInstance当前渲染实例时，一期设置
- slotScopeIds: *string*[] | *null*，仅限于单文件组件，与单文件组件的插槽有关
- children: VNodeNormalizedChildren，子节点
- component: ComponentInternalInstance | null，组件实例
- dirs: DirectiveBinding[] | null，当前Vnode绑定的指令
- transition: TransitionHooks<HostElement> | null，TransitionHooks
- DOM相关属性
  - el: HostNode | *null*，宿主阶段
  - anchor: HostNode | *null* // fragment anchor
  - target: HostElement | *null* ，teleport target 传送的目标
  - targetAnchor: HostNode | *null* // teleport target anchor
  - staticCount: *number*，包含的静态节点的数量
- suspense 悬挂有关的属性
  - suspense: SuspenseBoundary | *null*
  - ssContent: VNode | *null*
  - ssFallback: VNode | *null*
- optimization only 用于优化的属性
  - shapeFlag: *number*
  - patchFlag: *number*
  - dynamicProps: *string*[] | *null*
  - dynamicChildren: VNode[] | *null*
- 根节点会有的属性
  - appContext: AppContext | *null*，实例上下文

可以看到在Vue内部，对于一个Vnode描述对象的属性大概有二十多个。

Vue为了给用于减轻一定的负担，但又不至于太封闭，就创建了渲染h。可以在用户需要的时候，通过h函数创建对应的Vnode即可。



---

## 2.20 vue-loader做了哪些事情？



----

## 2.21 vue3有什么优点

不以解决实际业务痛点的更新都是耍流氓，下面我们来列举一下`Vue3`之前我们或许会面临的问题

- 随着功能的增长，复杂组件的代码变得越来越难以维护
- 缺少一种比较「干净」的在多个组件之间提取和复用逻辑的机制
- 类型推断不够友好
- `bundle`的时间太久了

而 `Vue3` 经过长达两三年时间的筹备，做了哪些事情？

我们从结果反推

- 更小
- 更快
- TypeScript支持
- API设计一致性
- 提高自身可维护性
- 开放更多底层功能

一句话概述，就是更小更快更友好了

**更小**

```
Vue3`移除一些不常用的 `API
```

引入`tree-shaking`，**可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了**

**更快**

主要体现在编译方面：

- diff算法优化
- 静态提升
- 事件监听缓存
- SSR优化

**更友好**

`vue3`在兼顾`vue2`的`options API`的同时还推出了`composition API`，大大增加了代码的逻辑组织和代码复用能力

这里代码简单演示下：

存在一个获取鼠标位置的函数

```js
import { toRefs, reactive } from 'vue';
function useMouse(){
    const state = reactive({x:0,y:0});
    const update = e=>{
        state.x = e.pageX;
        state.y = e.pageY;
    }
    onMounted(()=>{
        window.addEventListener('mousemove',update);
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',update);
    })

    return toRefs(state);
}
```



我们只需要调用这个函数，即可获取`x`、`y`的坐标，完全不用关注实现过程

试想一下，如果很多类似的第三方库，我们只需要调用即可，不必关注实现过程，开发效率大大提高

同时，`VUE3`是基于`typescipt`编写的，可以享受到自动的类型定义提示



---

## 2.22 vue3 相比 vue2 的十项优点

### 优点1：diff算法的优化

vue2中的虚拟dom是全量的对比（每个节点不论写死的还是动态的都会一层一层比较，这就浪费了大部分事件在对比静态节点上）

vue3新增了静态标记（patchflag）与上次虚拟节点对比时，**只对比带有patch flag的节点**（动态数据所在的节点）；可通过flag信息得知当前节点要对比的具体内容。

### 优点2：hoistStatic 静态提升

vue2无论元素是否参与更新，每次都会重新创建然后再渲染。

vue3对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用即可。

### 优点3：cacheHandlers 事件侦听器缓存

vue2.x中，绑定事件每次触发都要重新生成全新的function去更新，cacheHandlers 是Vue3中提供的事件缓存对象，当 cacheHandlers 开启，会自动生成一个内联函数，同时生成一个静态节点。当事件再次触发时，只需从缓存中调用即可，无需再次更新。

默认情况下onClick会被视为动态绑定，所以每次都会追踪它的变化，但是同一个函数没必要追踪变化，直接缓存起来复用即可。

### 优点4：ssr渲染

Vue2 中也是有 SSR 渲染的，但是 Vue3 中的 SSR 渲染相对于 Vue2 来说，性能方面也有对应的提升。

当存在大量静态内容时，这些内容会被当作纯字符串推进一个 buffer 里面，即使存在动态的绑定，会通过模版插值潜入进去。这样会比通过虚拟 dom 来渲染的快上很多。

当静态内容大到一个量级的时候，会用_createStaticVNode 方法在客户端去生成一个 static node，这些静态 node，会被直接 innerHtml，就不需要再创建对象，然后根据对象渲染。

### 优点5：更好的TS支持

vue2不适合使用ts，原因在于vue2的Option API风格。options是个简单对象，而ts是一种类型系统、面向对象的语法。两者有点不匹配。

在vue2结合ts的具体实践中，要用 vue-class-component 强化 vue 组件，让 Script 支持 TypeScript 装饰器，用 vue-property-decorator 来增加更多结合 Vue 特性的装饰器，最终搞得ts的组件写法和js的组件写法差别挺大。

在vue3中，量身打造了defineComponent函数，使组件在ts下，更好的利用参数类型推断 。Composition API 代码风格中，比较有代表性的api就是 ref 和 reactive，也很好的支持了类型声明。

### 优点6：Compostion API: 组合API/注入API

传统的网页是html/css/javascript（结构/样式/逻辑）分离。vue通过组件化的方式，将联系紧密的结构/样式/逻辑放在一起，有利于代码的维护。compostion api更进一步，着力于JS（逻辑）部分，将逻辑相关的代码放在一起，这样更有利于代码的维护。

在vue2的组件内使用的是Option API风格(data/methods/mounted)来组织的代码，这样会让逻辑分散，举个例子就是我们完成一个计数器功能，要在data里声明变量，在methods定义响应函数，在mounted里初始化变量，如果在一个功能比较多、代码量比较大的组件里，你要维护这样一个功能，就需要在data/methods/mounted反复的切换到对应位置，然后进行代码的更改。

### 优点7：更先进的组件

vue2是不允许这样写的，组件必须有一个跟节点，现在可以这样写，**vue将为我们创建一个虚拟的Fragment节点**。

```html
<template>
    <div>华为云享专家</div>
    <div>全栈领域博主</div>
</template>
```

在Suspended-component完全渲染之前，备用内容会被显示出来。如果是异步组件，Suspense可以等待组件被下载，或者在设置函数中执行一些异步操作。

### 优点8：自定义渲染API

vue2.x项目架构对于weex（移动端跨平台方案）和myvue（小程序上使用）等渲染到不同平台不太友好，vue3.0推出了自定义渲染API解决了该问题。下面我们先看vue2和vue3的入口写法有哪些不同。

vue2

```javascript
import Vue from 'vue'
import App from './App.vue'
new Vue({ => h(App)}).$mount('#app')
```

vue3

```javascript
const { createApp } from 'vue'
import App from "./src/App"
createApp(App).mount(('#app')
```

vue官方实现的 createApp 会给我们的 template 映射生成 html 代码，但是要是你不想渲染生成到 html ，而是要渲染生成到 canvas 之类的不是html的代码的时候，那就需要用到 Custom Renderer API 来定义自己的 render 渲染生成函数了。

```javascript
import { createApp } from "./runtime-render";
import App from "./src/App"; // 根组件
createApp(App).mount('#app');
```

使用自定义渲染API，如weex和myvue这类方案的问题就得到了完美解决。只需重写createApp即可。

### 优点9：按需编译，体积比vue2.x更小

框架的大小也会影响其性能。这是 Web 应用程序的唯一关注点，因为需要即时下载资源，在浏览器解析必要的 JavaScript 之前该应用程序是不可交互的。对于单页应用程序尤其如此。尽管 Vue 一直是相对轻量级的（Vue 2 的运行时大小压缩为 23 KB）。
在 Vue 3 中，通过将大多数全局 API 和内部帮助程序移至 ES 模块导出来，实现了这一目标。这使现代的打包工具可以静态分析模块依赖性并删除未使用的导出相关的代码。模板编译器还会生成友好的 Tree-shaking 代码，在模板中实际使用了该功能时才导入该功能的帮助程序。
框架的某些部分永远不会 Tree-shaking，因为它们对于任何类型的应用都是必不可少的。我们将这些必不可少的部分的度量标准称为基准尺寸。尽管增加了许多新功能，但 Vue 3 的基准大小压缩后约为 10 KB，还不到 Vue 2 的一半。

### 优点10：支持多根节点组件

Vue3 一个模板不再限制有多个根节点，(多个根节点上的 Attribute 继承) 需要显式定义 attribute 应该分布在哪里。否则控制台会给出警告提示。
在 Vue 3 中，组件现在正式支持多根节点组件，即片段！

在 2.x 中，不支持多根组件，当用户意外创建多根组件时会发出警告，因此，为了修复此错误，许多组件被包装在一个

Vue是国内最火的前端框架之一。性能提升，运行速度是vue2的1.2-2倍。

- 体积更小，按需编译体积vue2要更小。
- 类型推断，更好的支持ts这个也是趋势。
- 高级给予，暴露了更底层的API和提供更先进的内置组件。
- 组合API，能够更好的组织逻辑，封装逻辑，复用逻辑





-----

# vuex

-----

## 3.1 说说对Vuex的理解

回答策略：3w1h

1. 首先给vuex下一个定义
2. vuex解决了哪些问题，解读理念
3. 什么时候我们需要vuex
4. 你的具体用法
5. 简述原理，提升层级

Vuex是什么？

官网定义：Vuex是专门为Vuejs应用程序设计的**状态管理工具**。它采用**集中式存储管理应用的所有组件的状态**，并**以相应的规则保证状态以一种可预测的方式发生变化**



**回答范例：**

1. vuex是vue专用的状态管理库。它以全局方式集中管理应用的状态，并且可以保证状态变更的可预测性。
2. vuex主要解决的问题是多组件之间状态共享的问题，利用各种组件通信方式，我们虽然能够做到状态共享，但是往往需要在多个组件之间保持状态的一致性，这种模式很容易出现问题，也会使程序逻辑变得复杂。vuex通过把组件的共享状态抽取出来，以全局单例模式管理，这样任何组件都能用一致的方式获取和修改状态，响应式的数据也能够保证简洁的单向数据流动，我们的代码将变得更结构化且易维护。
3. vuex并非必须的，它帮我们管理共享状态，但却带来更多的概念和框架。如果我们不打算开发大型单页应用或者我们的应用并没有大量全局的状态需要维护，完全没有使用vuex的必要。一个简单的[store 模式](https://cn.vuejs.org/v2/guide/state-management.html#简单状态管理起步使用)就足够了。反之，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：Flux 架构就像眼镜：您自会知道什么时候需要它。
4. 我在使用vuex过程中有如下理解：首先是对核心概念的理解和运用，将全局状态放入state对象中，它本身一棵状态树，组件中使用store实例的state访问这些状态；然后有配套的mutation方法修改这些状态，并且只能用mutation修改状态，在组件中调用commit方法提交mutation；如果应用中有异步操作或者复杂逻辑组合，我们需要编写action，执行结束如果有状态修改仍然需要提交mutation，组件中调用这些action使用dispatch方法派发。最后是模块化，通过modules选项组织拆分出去的各个子模块，在访问状态时注意添加子模块的名称，如果子模块有设置namespace，那么在提交mutation和派发action时还需要额外的命名空间前缀。
5. vuex在实现单项数据流时需要做到数据的响应式，通过源码的学习发现是借用了vue的数据响应化特性实现的，它会利用Vue将state作为data对其进行响应化处理，从而使得这些状态发生变化时，能够导致组件重新渲染。



具体工作：vuex是一种状态管理机制，将全局组件的共享状态抽取出来为一个store，以一个**单例模式**存在，应用任何一个组件中都可以使用，vuex更改state的唯一途径是通过mutation，mutation需要commit触发, action实际触发是mutation，其中**mutation处理同步任务**，**action处理异步任务**。

Vuex每个属性是干嘛的？

![img](E:\pogject\学习笔记\image\vue\EB5115B586566907B3B642BA58A4482A)

Vuex的属性包含以下6个：

1）state

state是存储的单一状态，是存储的基本数据。

2）Getters

getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，getter返回的值会根据它的依赖被缓存起来，**且只有当它的依赖值发生改变才会被重新计算。**

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

![img](E:\pogject\学习笔记\image\vue\5ACC9FABB642EADBED3478A9397CEF15)

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

## 3.2 Vuex实现原理

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

## 3.3 mutation和action有什么区别？

**mutation**：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件： 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进 行状态更改的地方，并且它会接受 state 作为第一个参数

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

**vuex 真正限制你的只有 mutation 必须是同步的这一点**（在 redux 里面就好像 reducer 必须同步返回下一个状态一样）。

同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态（和 reducer 一样），这样 devtools 就可以打个 snapshot 存下来，然后就可以随便 time-travel 了。如果你开着 devtool 调用一个异步的 action，你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。



---

## 3.4 刷新浏览器后，Vuex的数据是否存在？如何解决？

在vue项目中用vuex来做全局的状态管理， 发现当刷新网页后，保存在vuex实例store里的数据会丢失。

原因：**因为 `store` 里的数据是保存在运行内存中的**，当页面刷新时，**页面会重新加载vue实例，store里面的数据就会被重新赋值初始化。**

我们有两种方法解决该问题：

1. 使用 `vuex-along`
2. 使用 `localStorage` 或者 `sessionStroage`

### 使用vuex-along

`vuex-along` 的实质也是将 `vuex` 中的数据存放到 `localStorage` 或者 `sessionStroage` 中，**只不过这个存取过程组件会帮我们完成**，我们只需要用vuex的读取数据方式操作就可以了，简单介绍一下 `vuex-along` 的使用方法。

安装 `vuex-along`:

```bash
npm install vuex-along --save
```

配置 `vuex-along`: 在 `store/index.js` 中最后添加以下代码:

```js
import VueXAlong from 'vuex-along' //导入插件
export default new Vuex.Store({
    //modules: {
        //controler  //模块化vuex
    //},
    plugins: [VueXAlong({
        name: 'store',     //存放在localStroage或者sessionStroage 中的名字
        local: false,      //是否存放在local中  false 不存放 如果存放按照下面session的配置
        session: { list: [], isFilter: true } //如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
    })]
});
```

### 使用 `localStorage` 或者 `sessionStroage`

```js
created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
},
```



----







----

# 路由

----

## 4. 1 Vue router 原理, 哪个模式不会请求服务器

Vue router 的两种方法，hash模式不会请求服务器

**解析：**

1. url的hash，就是通常所说的锚点#，javascript通过hashChange事件来监听url的变化，IE7以下需要轮询。比如这个 URL：http://www.abc.com/#/hello，hash 的值为#/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此**改变 hash 不会重新加载页面**。
2. HTML5的History模式，它使url看起来像普通网站那样，以“/”分割，没有#，单页面并没有跳转。**不过使用这种模式需要服务端支持，服务端在接收到所有请求后，都只想同一个html文件，不然会出现404**。因此单页面应用只有一个html，整个网站的内容都在这一个html里，通过js来处理。



---

## 4.2  路由跳转和location.href的区别？

使用location.href='/url'来跳转，简单方便，但是刷新了页面；

使用路由方式跳转，无刷新页面，静态跳转；



---

## 4.3  路由守卫

路由守卫主要用来**通过跳转或取消的方式守卫导航**。

简单的说，**路由守卫就是路由跳转过程中的一些钩子函数**。路由跳转是一个大的过程，这个大的过程分为跳转**前中后**等等细小的过程，在每一个过程中都有一函数，这个函数能让你操作一些其他的事儿的时机，这就是路由守卫。

**解析：**

路由守卫的具体方法：

（1）全局前置守卫

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
2.  from: Route: 当前导航正要离开的路由
3.  next: Function: 一定要调用该方法将控制权交给下一个守卫，**执行效果依赖 next 方法的参数。**

- next(): **进入下一个守卫**。如果全部守卫执行完了。则导航的状态就是 confirmed (确认的)。

- next(false): **中断当前的导航**。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器 后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

- next('/') 或者 next({ path: '/' }): **跳转到一个不同的地址**。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

- next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，**则导航会被终止且该错误会被传递router**.


onError() 注册过的回调。

注意：**永远不要使用两次next**，这会产生一些误会。

（2）全局解析守卫

这和 router.beforeEach 类似，但他总是被放在最后一个执行。

（3）全局后置钩子

导航已经确认了

```js
router.afterEach((to, from) => {
    // 你并不能调用next
  // ...
})

```



（4）路由独享的守卫

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

（5） 组件内的守卫

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

## 4.4  路由守卫进行判断登录

在vue项目中，切换路由时肯定会碰到需要登录的路由，其**原理就是在切换路径之前进行判断**，你不可能进入页面再去判断有无登录重新定向到login，那样的话会导致页面已经渲染以及它的各种请求已经发出。

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

## 4.5 vue-router 实现懒加载

懒加载：当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

实现：结合 Vue 的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件)和 Webpack 的[代码分割功能](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)，可以实现路由组件的懒加载

1. 首先，**可以将异步组件定义为返回一个 Promise 的工厂函数** (该函数返回的 Promise 应该 resolve 组件本身)：

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

## 4.6  js是如何监听HistoryRouter的变化的

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

## 4.7 HashRouter 和 HistoryRouter的区别和原理

前端路由有两种模式：hash 模式和 history 模式。

**vue-router**是Vue官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。**vue-router默认 hash 模式**，还有一种是history模式。

### hash 模式

hash 模式是一种把前端路由的路径用井号 `#` 拼接在真实 URL 后面的模式。当井号 `#` 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 `hashchange` 事件。

我们新建一个 `hash.html` 文件，内容为：

```html
<a href="#/a">A页面</a>
<a href="#/b">B页面</a>
<div id="app"></div>
<script>
  function render() {
    app.innerHTML = window.location.hash
  }
  window.addEventListener('hashchange', render)
  render()
</script>
```

在上面的例子中，我们利用 `a` 标签设置了两个路由导航，把 `app` 当做视图渲染容器，当切换路由的时候触发视图容器的更新，这其实就是大多数前端框架哈希路由的实现原理。

原理：

hash路由：hash模式的工作原理是hashchange事件，可以在window监听hash的变化。

我们在url后面随便添加一个#xx触发这个事件。**vue-router默认的是hash模式**—使用URL的hash来模拟一个完整的URL,于是当URL改变的时候,页面不会重新加载,也就是单页面应用了，当#后面的hash发生变化,不会导致浏览器向服务器发出请求,浏览器不发出请求就不会刷新页面,并且会触发hasChange这个事件,**通过监听hash值的变化来实现更新页面部分内容的操作**

对于hash模式会创建hashHistory对象,在访问不同的路由的时候,会发生两件事:

- HashHistory.push() **将新的路由添加到浏览器访问的历史的栈顶**
- HasHistory.replace() **替换到当前栈顶的路由**

总结一下 hash 模式的优缺点：

- **优点**：浏览器兼容性较好，连 IE8 都支持
- **缺点**：路径在井号 `#` 的后面，比较丑



### history 模式

history API 是 H5 提供的新特性，允许开发者直接更改前端路由，**即更新浏览器 URL 地址而不重新发起请求。**

我们新建一个 `history.html`，内容为：

```html
<a href="javascript:toA();">A页面</a>
<a href="javascript:toB();">B页面</a>
<div id="app"></div>
<script>
  function render() {
    app.innerHTML = window.location.pathname
  }
  function toA() {
    history.pushState({}, null, '/a')
    render()
  }
  function toB() {
    history.pushState({}, null, '/b')
    render()
  }
  window.addEventListener('popstate', render)
</script>
```

原理：

history路由：**主要使用HTML5的pushState()和replaceState()这两个api**结合**window.popstate事件**（监听浏览器前进后退）来实现的, pushState()可以**改变url地址且不会发送请求**, replaceState()可以**读取历史记录栈**,还可以**对浏览器记录进行修改**。

history API 提供了丰富的函数供开发者调用，我们不妨把控制台打开，然后输入下面的语句来观察浏览器地址栏的变化：

```js
history.replaceState({}, null, '/b') // 替换路由
history.pushState({}, null, '/a') // 路由压栈
history.back() // 返回
history.forward() // 前进
history.go(-2) // 后退2次
```

上面的代码监听了 `popstate` 事件，该事件能监听到：

- 用户点击浏览器的前进和后退操作
- 手动调用 history 的 `back`、`forward` 和 `go` 方法

**监听不到**：

- history 的 `pushState` 和 `replaceState`方法

**这也是为什么上面的 `toA` 和 `toB` 函数内部需要手动调用 `render` 方法的原因**。另外，大家可能也注意到 `light-server` 的命令多了 `--historyindex '/history.html'` 参数，这是干什么的呢？

浏览器在刷新的时候，会按照路径发送真实的资源请求，如果这个路径是前端通过 history API 设置的 URL，那么在服务端往往不存在这个资源，于是就返回 404 了。**上面的参数的意思就是如果后端资源不存在就返回 `history.html` 的内容。**

因此在线上部署基于 history API 的单页面应用的时候，一定要后端配合支持才行，否则会出现大量的 404。以最常用的 Nginx 为例，只需要在配置的 `location /` 中增加下面一行即可：

```apl
try_files $uri /index.html;
```

总结一下 history 模式的优缺点：

- **优点**：路径比较正规，没有井号 `#`
- **缺点**：兼容性不如 hash，且需要服务端支持，否则一刷新页面就404了



### 区别

1. hash模式较丑，**history模式较优雅**
2. pushState设置的新URL可以是与当前URL**同源**的任意URL；**而hash只可修改#后面的部分，故只可设置与当前同文档的URL**
3. pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；**而hash设置的新值必须与原来不一样才会触发记录添加到栈中**
4. pushState通过stateObject可以添加任意类型的数据到记录中；**而hash只可添加短字符串**
5. pushState可额外设置title属性供后续使用
6. hash兼容IE8以上，history兼容IE10以上
7. **history模式需要后端配合将所有访问都指向index.html**，否则用户刷新页面，会导致404错误

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

##  4.8 vue 中 $route 和 $router 有什么区别？

**this.$router**

是 routerr实例

通过 `this.$router` 访问路由器,**相当于获取了整个路由文件**，在`$router.option.routes`中，或查看到当前项目的整个路由结构 具有实例方法

```js
// 导航守卫
router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
})
router.beforeResolve((to, from, next) => {
  /* 必须调用 `next` */
})
router.afterEach((to, from) => {})

// 动态导航到新路由
router.push
router.replace
router.go
router.back
router.forward
```



**this.$route**

**当前激活的路由信息对象**。这个属性是只读的，里面的属性是 immutable (不可变) 的，不过可以 watch (监测变化) 它。

通过 `this.$route` 访问的是当前路由，获取和当前路由有关的信息

```json
fullPath: ""  // 当前路由完整路径，包含查询参数和 hash 的完整路径
hash: "" // 当前路由的 hash 值 (锚点)
matched: [] // 包含当前路由的所有嵌套路径片段的路由记录 
meta: {} // 路由文件中自赋值的meta信息
name: "" // 路由名称
params: {}  // 一个 key/value 对象，包含了动态片段和全匹配片段就是一个空对象。
path: ""  // 字符串，对应当前路由的路径
query: {}  // 一个 key/value 对象，表示 URL 查询参数。跟随在路径后用'?'带的参数
```



