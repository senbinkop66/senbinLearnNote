function solution(n, m) {

  const rules = new Array(m);
  for (let i = 0; i < m; i++) {
    rules[i] = read_line().trim().split(" ").map(Number);
  }
  let ans = 0;
  const sets = new Array(n).fill(0);
  return n;
  // for (let i = 0; i < m; i++) {

  // }
}


let [n, m] = read_line().trim().split(" ").map(Number);
console.log(solution(n, m));