var Iterator=function(obj){
   var current=0;
   var next=function(){
      current+=1;
   };
   var isDone=function(){
      return current>=obj.length;
   };
   var getCurrItem=function(){
      return obj[current];
   };
   return {
      next:next,
      isDone:isDone,
      getCurrItem:getCurrItem,
      length:obj.length
   }
};

var compare = function(iterator1,iterator2){
   if ( iterator1.length !== iterator2.length ){
      console.log( 'iterator1 和 iterator2 不相等' );
      return;
   }
   while(!iterator1.isDone() && !iterator2.isDone()){
      if (iterator1.getCurrItem()!==iterator2.getCurrItem()) {
         console.log( 'iterator1 和 iterator2 不相等' );
         return;
      }
      iterator1.next();
      iterator2.next();
   }
   console.log ( 'iterator1 和 iterator2 相等' );
};

var iterator1 = Iterator( [ 1, 2, 3 ,4] );
var iterator2 = Iterator( [ 1, 2, 3 ,5] );
compare( iterator1, iterator2 ); 