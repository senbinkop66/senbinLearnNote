/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
     let m=matrix.length;
     let n=matrix[0].length;
     const maxColArr=new Array(n).fill(0);;  //每一列的最大值
     const minRowArr=new Array(m).fill(0);  //每一行的最大值索引;
     for(let i=0;i<m;i++){
          for(let j=0;j<n;j++){
               maxColArr[j]=Math.max(maxColArr[j],matrix[i][j]);
               //矩阵中的所有元素都是不同的
               minRowArr[i]=matrix[i][minRowArr[i]]<matrix[i][j] ? minRowArr[i] : j;
          }
     }
     //console.log(matrix);
     //console.log(maxColArr);
     //console.log(minRowArr);
     let result=[];
     for (let i=0;i<m;i++){
          if (matrix[i][minRowArr[i]]===maxColArr[minRowArr[i]]) {
               result.push(matrix[i][minRowArr[i]]);
          }
     }
     return result;

};

let test=[[1,10,4,2],[9,3,8,7],[15,16,17,12]];
let result=luckyNumbers(test);
console.log(result);