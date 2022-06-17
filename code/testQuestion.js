/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let top = 0;
    let i = -1;
    while (top < n) {
        i++;
        if (arr[i] !== 0) {
            top++;
        } else {
            top += 2;
        }
    }
    let j = n - 1;
    if (top === n + 1) {
        arr[j] = 0;
        j--;
        i--;
    }
    while (j >= 0) {
        arr[j] = arr[i];
        j--;
        if (arr[i] === 0) {
            arr[j] = 0;
            j--;
        }
        i--;
    }
};

let arr = [0,4,1,0,0,8,0,0,3];
duplicateZeros(arr);
console.log(arr);