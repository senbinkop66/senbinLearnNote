/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
   let n=data.length;
   let m=0;  //1~4
   let flag=true;
   for(let i=0;i<n;i++){
      let binary=("00000000"+data[i].toString(2)).slice(-8);
      //console.log(binary);
      if (flag) {
         //每个字符的第一个字节
         for(let j=0;j<8;j++){
            if (binary[j]==="0") {
               break;
            }else{
               m++;
            }
         }
         if(m===1 || m>4){
            //开始字节不能一个1开头,不能超过4
            return false;
         }else if (m!==0) {
            flag=false;
            m--;  //再遍历m-1个
         }else{
            //为0时代表一个字节的字符
         }
      }else{
         //判断后续m-1个
         if (binary.indexOf("10")!==0) {
            return false;
         }
         m--;
         if (m==0) {
            flag=true;
         }
      }
   }
   if(m>0){
      //判断最后是否满足
      return false;
   }
   return true;
};

let data = [197,130,1];
let result=validUtf8(data);
console.log(result);