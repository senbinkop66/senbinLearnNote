/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let num = 1;
    while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
            // 左到右
            matrix[top][col] = num;
            num++;
        }
        for (let row = top + 1; row <= bottom; row++) {
            // 上到下
            matrix[row][right] = num;
            num++;
        }
        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col--) {
                // 右到左
                matrix[bottom][col] = num;
                num++;
            }
            for (let row = bottom; row > top; row--) {
                // 下到上
                matrix[row][left] = num;
                num++;
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return matrix;
};

let n = 4;
let result = generateMatrix(n);
console.log(result);