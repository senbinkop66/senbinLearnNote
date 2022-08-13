function solution(nums, n) {
    if (n < 1) {
        return 0;
    }
    let maxSum = nums[0], prevMax = nums[0];
    let minSum = nums[0], prevMin = nums[0];
    let sum = nums[0];
    for (let i = 1; i < n; i++) {
        sum += nums[i];

        prevMax = Math.max(prevMax + nums[i], nums[i]);
        maxSum = Math.max(prevMax, maxSum);

        prevMin = Math.min(prevMin + nums[i], nums[i]);
        minSum = Math.min(prevMin, minSum);
    }

    let ans = Math.max(maxSum, sum - minSum);
    return ans > 0 ? ans : 0;
}

let T = parseInt(readline().trim());
while (T > 0) {
    let N = parseInt(readline().trim());
    let nums = readline().trim().split(" ").map(Number);

    let result = solution(nums, N);
    console.log(result);

    T--;
}



let N = 4;
let nums = [3, -2, 4, -1];

let result = solution(nums, N);
console.log(result);