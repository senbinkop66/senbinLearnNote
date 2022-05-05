/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr=new Array(n).fill(0);
    for (let i=0;i<n;i++){
        arr[i]=i+1;
    }
    let k1;
    while(arr.length>1){
        k1=k;
        if (k>arr.length) {
            k1=k%arr.length;
            if (k1===0) {
                k1=arr.length;
            }
        }

        for (let i=1;i<k1;i++){
            arr.push(arr.shift());
        }
        arr.shift();
    }
    return arr[0];
};

let n = 6, k = 5;
let result=findTheWinner(n,k);
console.log(result);