/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let s = new Set();
    let n = candyType.length;
    for (let i =0; i < n; i++){
        s.add(candyType[i]);
    }
    let candyTypeNum = s.size;
    if (n / 2 >= candyTypeNum) {
        return candyTypeNum;
    }else{
        return n / 2;
    }
};