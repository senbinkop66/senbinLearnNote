/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const dirs=[[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]];
    
};

let n = 3, k = 2, row = 0, column = 0;
let result=knightProbability(n, k, row, column);
console.log(result);
