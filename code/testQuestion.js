/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    if (k === 0) {
        return [];
    }
    if (arr.length === k) {
        return arr;
    }
    const left = [], right = [], same = [];
    let randonIndex = Math.floor(arr.length/2);
    let pivolt = arr[randonIndex];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < pivolt) {
            left.push(arr[i]);
        }else if (arr[i] > pivolt){
            right.push(arr[i]);
        }else{
            same.push(arr[i]);
        }
    }
    if (left.length === k) {
        return left;
    }else if (left.length > k){
        return smallestK(left,k);
    }else if (left.length < k) {
        let res = left.length + same.length;
        if (res >= k) {
            return left.concat(same.slice(0, k - left.length))
        }else{
            return left.concat(same, smallestK(right, k - left.length - same.length));
        }
    }
};

let arr = [1,3,5,7,2,4,6,8], k = 4;
let result = smallestK(arr, k);
console.log(result);