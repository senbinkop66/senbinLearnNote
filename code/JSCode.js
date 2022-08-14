/*
(1) 创建一个 EventEmitter 类在该类上创建一个事件中心（Map）

(2) on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）

(3)emit 方法取到 arguments 里第一个当做 event，根据 event 去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）

(4) off 方法可以根据 event 值取消订阅（取消订阅）

(5) once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）

(6) 注册一个 newListener 用于监听新的事件订阅
*/

class EventEmitter {
  // 创建一个类，并初始化一个事件存储中心
  constructor(){
    // 单例模式
    if (!EventEmitter.instance) {
      EventEmitter.instance = this;
      this._events = {};  // 事件缓存列表
    }
    return EventEmitter.instance;
  }

  // 实现事件的订阅方法 on, 需要接收订阅事件名和对应的回调函数
  // 基本思路：将事件回调函数存储到对应的事件上
  on(eventName, callback) {
    // 由于一个事件可能注册多个回调函数，所以使用数组来存储事件队列
    if (this._events[eventName]) {
      // 如果存在该事件名
      this._events[eventName].push(callback);
    } else {
      this._events[eventName] = [callback];
    }
  }

  // 实现事件的发布方法 emit，需要接收发布事件名和对应的参数
  // 基本思路： 获取到事件对应的回调函数依次执行
  emit(eventName, ...args) {
    // args 用于收集发布事件时传递的参数
    if (this._events[eventName]) {
      //创建副本，如果回调函数内部继续注册相同的事件，会造成死循环
      let handlers = [...this._events[eventName]];
      handlers.forEach(callback => callback(...args));
    }
  }

  // 实现事件的取消订阅方法 off
  // 基本思路：找到事件对应的回调函数，删除对应的回调函数
  off(eventName, callback) {
    let callbacks = this._events[eventName];
    let newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback);
    // fn.initialCallback != callback /* 用于once的取消订阅 */
    this._events[eventName] = newCallbacks;
    /*
    let index = callback.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    */
  }

  //实现事件的单次订阅方法 once，需要添加的订阅事件名及指定的回调函数
  once(eventName, callback) {
    //由于需要在回调函数执行后，取消订阅当前事件，所以需要对传入的回调函数做一层包装,然后绑定包装后的函数
    let wrapper = (...args) => {
      // 执行回调函数
      callback(...args);
      // 取消订阅当前事件
      this.off(eventName, wrapper);
    }
    // 由于：我们订阅事件的时候，修改了原回调函数的引用，所以，用户触发 off 的时候不能找到对应的回调函数
    // 所以，我们需要在当前函数与用户传入的回调函数做一个绑定，我们通过自定义属性来实现
    wrapper.initialCallback = callback;
    this.on(eventName, wrapper);
  }

}

// 测试
let eventBus = new EventEmitter();

let fn1 = function(name, age) {
  console.log(`hello1, ${name} ${age}`);
}

let fn2 = function(name, age) {
  console.log(`hello2, ${name} ${age}`);
}

eventBus.on('aaa', fn1);
eventBus.on('aaa', fn2);

eventBus.emit('aaa', 'kop', 66);
// hello1, kop 66
// hello2, kop 66

eventBus.once("bbb", fn2);

eventBus.emit("bbb", "John", 26);
// hello2, John 26

eventBus.emit("bbb", "Bob", 21);

eventBus.off("aaa",fn1);

eventBus.emit("aaa", "Alison", 29);
// hello2, Alison 29

console.log(eventBus._events);   
// { aaa: [ [Function: fn2] ], bbb: [] }