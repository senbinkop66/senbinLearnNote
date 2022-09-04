// 计算所有子树权值之和
function solution(nums, n){
    const edges = [];
    for (let i = 0; i < n - 1; i++) {
        edges.push(readline().trim().split(" ").map(Number));
    }
    return 0;
}

// console.log(solution(10, 9, 5));

const n = parseInt(readline().trim());
const nums = readline().trim().split(" ").map(Number);

console.log(solution(nums, n));