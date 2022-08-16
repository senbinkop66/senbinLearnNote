



//2、在setTimeout内部函数创建一个闭包，并将i当作参数传递进去
for(var i = 0; i < 10 ; i++){
    setTimeout(function(num){
        return function(){ //用匿名函数打造一个num变量副本
            console.log(num);   // 输出0，1，2，3，4 
        }
    }(i), 0);
}