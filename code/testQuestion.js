
class EventEmitter{
    //第一步，创建一个类，并初始化一个事件存储中心
    constructor(){
        // 用来存放注册的事件与回调
        this._events={};
    }

    //第二步，实现事件的订阅方法 on
    //将事件回调函数存储到对应的事件上
    on(eventName,callback){
        //第六步，注册一个 newListener 用于监听新的事件订阅
        //在用户注册的事件的时候，发布一下newListener事件
        // 如果绑定的事件不是newListener 就触发改回调
        if (this._events[eventName]) {
            if (this.eventName!=="newListener") {
                this.emit("newListener",eventName);
            }
        }

        //由于一个事件可能注册多个回调函数，所以使用数组来存储事件队列
        const callbacks=this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName]=callbacks;
    }

    //第三步，实现事件的发布方法 emit
    //获取到事件对应的回调函数依次执行
    emit(eventName,...args){
        //args 用于收集发布事件时传递的参数
        const callbacks=this._events[eventName]  || [];
        callbacks.forEach(cb=>cb(...args));
    }

    //第四步，实现事件的取消订阅方法 off 
    //找到事件对应的回调函数，删除对应的回调函数
    off(eventName,callback){
        const callbacks=this._events[eventName] || [];
        /*fn.initialCallback!=callback 用于once的取消订阅 */
        const newCallbacks=callbacks.filter(fn=>fn!=callback && fn.initialCallback!=callback);

        this._events[eventName]=newCallbacks;
    }

    //第五步，实现事件的单次订阅方法 once
    //1.先注册 2.事件执行后取消订阅
    once(eventName,callback){
        //由于需要在回调函数执行后，取消订阅当前事件，所以需要对传入的回调函数做一层包装,然后绑定包装后的函数
        const one=(...args)=>{
            // 执行回调函数
            callback(...args);
            //取消订阅当前事件
            this.off(eventName,one);
        }
        // 考虑：如果当前事件在未执行，被用户取消订阅，能否取消？
        // 由于：我们订阅事件的时候，修改了原回调函数的引用，所以，用户触发 off 的时候不能找到对应的回调函数
        // 所以，我们需要在当前函数与用户传入的回调函数做一个绑定，我们通过自定义属性来实现
        one.initialCallback=callback;
        this.on(eventName,one);
    }

}

//测试用例
const events=new EventEmitter();

events.on("newListener",function(eventName){
    console.log("eventName: ",eventName);
});

events.on("hello",function(){
    console.log("Hello World!");
});

let cb=function(){
    console.log("cb");
}
events.on("hello",cb);
events.off("hello",cb);

function once(){
    console.log("once");
}
events.on("hello",once);
events.off("hello",once);

events.emit("hello");
events.emit("hello");
