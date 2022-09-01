// 找到第一个赢得k次的数字
function solution(arr, k) {
  const n = arr.length;
  if (k === 1 || n < 3) {
    return Math.max(arr[0], arr[1]);
  }
  let MaxIndex = 0;
  let ans = arr[0];
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (ans > arr[i]) {
      count++;
      if (count === k) {
        return ans;
      }
    } else {
      count = 1;
      ans = arr[i];
    }
  }
  return ans;

}

const arr = readline().trim().split(" ").map(Number);
const k = arr.pop()
console.log(solution(arr, k));