function solution(str, n, k) {
  for (let i = 0; i < n; i++) {
    if (i < k) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join("");
}

let [n, k] = readline().trim().split(" ").map(Number);
let line2 = readline().trim().split("");
console.log(solution(line2, n, k));