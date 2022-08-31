一些科学家在研究X粒子的特性，通常情况下，X粒子在经过加速装置后拥有的速度均为V，但是加热后，某些粒子的特性发生了变化，在相同情况下经过加速装置后拥有的速度变得大于V了（变化后的速度不一定相同），于是科学家们决定研究这些特别的粒子。

科学家们对n个粒子做了特殊处理，为其从1到n分别编号，为了找出是哪些粒子的特性发生了变化（导致速度变化），他们准备让这些粒子依次通过一段相同长度的距离，速度越高的粒子通过这段距离所需的时间越短，由于技术问题，只能检测到粒子发射顺序和到达终点的顺序（没有两个粒子同时被发射或同时到达），请你通过这些数据计算出至少有多少个粒子特性发生了变化（即速度大于通常情况）。


水平的列车上有n个座位，从左到右座位号为1,2,...,n。现在有m条规定，每条规定的形式如下：从座位l到座位r，不多于x个人乘坐。在满足所有规定的前提下，该列车最多能乘坐多少人？


function solution(starts, ends, n) {
  if (n < 2) {
    return 0;
  }
  let ans = 0;
  const m = new Map(starts.map((item, index) => [item, index]));
  let minIndex = m.get(ends[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    if (m.get(ends[i]) > minIndex) {
      ans++;
    } else {
      minIndex = m.get(ends[i])
    }
  }
  return ans;
}

let n = parseInt(read_line().trim());
let starts = read_line().trim().split(" ").map(Number);
let ends = read_line().trim().split(" ").map(Number);

console.log(solution(starts, ends, n));

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