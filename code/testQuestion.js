var Event=(function(){
   var global=this,Event,_default="default";

   Event=function(){
      var _listen,_trigger,_remove,
         _slice=Array.prototype.slice,
         _shift=Array.prototype.shift,
         _unshift=Array.prototype.unshift,
         namespaceCache={},
         _create,
         find,
         each=function(arr,fn){
            var ret;
            for (let i=0;i<arr.length;i++){
               let n=arr[i];
               ret=fn.call(n,i,n);
            }
            return ret;
         };
         _listen=function(key,fn,cache){
            if (!cache[key]) {
               cache[key]=[];
            }
            cache[key].push(fn);  //订阅的消息添加进缓存列表
         };
         _remove=function(key,cache,fn){
            if (cache[key]) {
              if(fn){
                  for(let i=cache[key].length-1;i>=0;i--){  //反向遍历订阅的回调函数列表
                     if (cache[key][i]===fn) {
                        cache[key].splice(i,1);  //删除订阅者的回调函数
                     }
                  }
               }else{
                  cache[key]=[];
               }
            }
         };
         _trigger=function(){  //发布消息
            var cache=_shift.call(arguments),
               key=_shift.call(arguments),
               args=arguments,
               _self=this,
               ret,
               stack=cache[key];
            if (!stack || stack.length===0) {
               return;  //如果没有订阅该消息，则返回
            }
            return each(stack,function(){
               return this.apply(_self,args);
            });
         };
         _create=function(namespace){
            var namespace=namespace || _default;
            var cache={};
            var offlineStack=[];//离线事件
            var ret={
               listen:function(key,fn,last){
                  _listen(key,fn,cache);
                  if (offlineStack===null) {
                     return;
                  }
                  if (last==="last") {
                     offlineStack.length && offlineStack.pop()();
                  }else{
                     each(offlineStack,function(){
                        this();
                     });
                  }
                  offlineStack=null;
               },
               one:function(key,fn,last){
                  _remove(key,cache);
                  this.listen(key,fn,last);
               },
               remove:function(key,fn){
                  _remove(key,cache,fn);
               },
               trigger:function(){
                  var fn,args,_self=this;
                  _unshift.call(arguments,cache);
                  args=arguments;
                  fn=function(){
                     return _trigger.apply(_self,args);
                  };
                  if (offlineStack) {
                     return offlineStack.push(fn);
                  }
                  return fn();
               },
            };
            return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace]=ret) : ret;
         };
      return {
         create:_create,
         one:function(key,fn,last){
            var event=this.create();
            event.one(key,fn,last);
         },
         remove:function(key,fn){
            var event=this.create();
            event.remove(key,fn);
         },
         listen:function(key,fn,last){
            var event=this.create();
            event.listen(key,fn,last);
         },
         trigger:function(){
            var event=this.create();
            event.trigger.apply(this,arguments);
         }
      };
   }();
   return Event;
})();



/************** 先发布后订阅 ********************/
Event.trigger( 'click', 1 );

Event.listen( 'click', function( a ){
   console.log( a ); // 输出：1
});

/************** 使用命名空间 ********************/
Event.create( 'namespace1' ).listen( 'click', function( a ){
   console.log( a ); // 输出：1
});

Event.create( 'namespace1' ).trigger( 'click', 1 );

Event.create( 'namespace2' ).listen( 'click', function( a ){
   console.log( a ); // 输出：2
});
Event.create( 'namespace2' ).trigger( 'click', 2 );