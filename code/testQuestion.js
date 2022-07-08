/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let even = 0, odd = 0;
    for (let pos of position) {
        if ((pos & 1) !== 0) {
            odd++;
        } else {
            even++;
        }
    }
    return Math.min(odd, even);
};

let position = [2,2,2,3,3];
console.log(minCostToMoveChips(position));