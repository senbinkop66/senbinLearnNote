/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret=0;
    while(n){
        //因为每次运算会使得 nn 的最低位的 11 被翻转，因此运算次数就等于 nn 的二进制位中 11 的个数。
        n&=n-1;
        ret++;
    }
    return ret;
};



let test=100;
let result=hammingWeight(test);
console.log(result);

