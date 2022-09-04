// 每个数加任意次k后最多有多少数相等
function solution(nums, n, k){
    if (k === 1) {
        return n;
    }
    let ans = 1;
    // nums.sort((a, b) =>a - b);
    let flag = false;
    for (let i = 0; i < n; i++) {
        if (nums[i] === -1) {
            continue;
        }
        if (flag) {
            break;
        }
        let count = 1;
        flag = true;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] === -1) {
                continue;
            }
            flag = false;
            if (Math.abs(nums[j] - nums[i]) % k === 0) {
                count++;
                nums[j] = -1;
            }
        }
        nums[i] = -1;
        ans = Math.max(ans, count);
    }
    return ans;
}

// console.log(solution([1, 4, 2,3,5], 5, 2));

const [n, k] = readline().trim().split(" ").map(Number);
const nums = readline().trim().split(" ").map(Number);
console.log(solution(nums, n, k));