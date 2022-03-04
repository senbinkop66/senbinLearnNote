var user=(function(){
   var __name="Arnold";
   var __age=23;
   return {
      getUserInfo:function(){
         return __name+"-"+__age;
      }
   }
})();

console.log(user.getUserInfo());  //Arnold-23