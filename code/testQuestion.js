var each=function(arr,callback){
   for(var i=0;i<arr.length;i++){
      callback.call(arr[i],i,arr[i]);  //把下标和元素当作参数传给 callback 函数
   }
};

each([12,3,4],function(i,n){
   console.log([i,n]);
})