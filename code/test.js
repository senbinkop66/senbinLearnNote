function solution(n) {
  let start = 1;
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i % 2 === 0) {
        arr.push(start);
      } else {
        arr.unshift(start)
      }
      start++;
    }
    console.log(arr.join(" "));
  }
}

let n = parseInt(readline());
// let n = 4;
solution(n);
