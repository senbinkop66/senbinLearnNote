/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const n = arr.length;
  let ans = 0, maxValue = 0;
  for (let i = 0; i < n; i++) {
    maxValue = Math.max(maxValue, arr[i]);
    if (maxValue === i) {
      ans++;
    }
  }
  return ans;
};

let arr = [1,0,2,3,4];
console.log(maxChunksToSorted(arr));