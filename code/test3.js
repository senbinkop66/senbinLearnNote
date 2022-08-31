function solution(starts, ends, n) {
  if (n < 2) {
    return 0;
  }
  let ans = 0;
  const m = new Map(starts.map((item, index) => [item, index]));
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (m.get(ends[i]) > m.get(ends[j])) {
        ans++;
        break;
      }
    }
  }
  return ans;
}

let n = parseInt(read_line().trim());
let starts = read_line().trim().split(" ").map(Number);
let ends = read_line().trim().split(" ").map(Number);

console.log(solution(starts, ends, n));