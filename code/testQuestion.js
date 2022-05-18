/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    let left = 1;
    let right = m * n;
    while (left < right){
        let x = left + Math.floor((right - left) /2);
        let count = Math.floor(x / n) * n;
        for (let i = Math.floor(x / n) + 1; i <= m; i++){
            count += Math.floor(x / i);
        }
        if (count >= k) {
            right = x;
        }else{
            left = x + 1;
        }
    }
    return left;
};

let  m = 3, n = 3, k = 5;
let result = findKthNumber(m, n, k);
console.log(result);