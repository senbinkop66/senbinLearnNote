/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let len = matchsticks.length;
    if (len < 4) {
        return false;
    }
    let totalLen = 0;
    matchsticks.forEach((item) => {
        totalLen += item;
    });
    if (totalLen % 4 !== 0) {
        return false;
    }
    matchsticks.sort((a, b) => b - a);
    let edgeLength = totalLen / 4;
    if (matchsticks[0] > edgeLength) {
        return false;
    }
    const edges = new Array(4).fill(0);

    const dfs = (index) => {
        if (index === len) {
            return true;
        }
        for (let i = 0; i < 4; i++){
            edges[i] += matchsticks[index];
            if (edges[i] <= edgeLength && dfs(index + 1)) {
                return true;
            }
            edges[i] -= matchsticks[index];
        }
        return false;
    }
    return dfs(0);

};


let matchsticks = [1,1,2,2,2];
let result = makesquare(matchsticks);
console.log(result);