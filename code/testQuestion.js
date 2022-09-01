
//反转部分字符串
function solution(str, start, end) {
  str = str.split("");
  const n = str.length;
  let left = 0, right = n - 1;
  for (let i = 0; i < n; i++) {
    if (str[i] === start) {
      left = i;
      break;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] === end) {
      right = i;
      break;
    }
  }
  reverseStr(str, left, right);
  return str.join("");
}

function reverseStr(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}


const [str, start, end] = readline().trim().split(" ");
console.log(solution(str, start, end));