function repeat(fn,n,delay){
    let str="hello world";
    let flag=0;
    function st(){
        setTimeout(function(){
            if (flag<n) {
                fn.call(this,str);
                st();
                flag++;
            }else{
                return;
            }
        },delay);
    }
    st();
}


var repeatFunc=repeat(console.log,4,3000);

