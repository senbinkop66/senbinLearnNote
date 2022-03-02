var Extent=function(){
   this.value=0;
};
Extent.prototype.call=function(){
   this.value++;
   console.log(this.value);
};

var extent=new Extent();
extent.call();  //  1
extent.call();  //  2
extent.call();  //  3