/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    let minChoosableInteger = 1;
    var dfs = function(minChoosableInteger, maxChoosableInteger, desiredTotal){
            if (maxChoosableInteger >= desiredTotal) {
                return true;
            }
            if (minChoosableInteger + maxChoosableInteger < desiredTotal) {
                minChoosableInteger++;
                maxChoosableInteger--;
                desiredTotal -= minChoosableInteger + maxChoosableInteger;
                dfs(minChoosableInteger, maxChoosableInteger, desiredTotal);
            }else{
                return false;
            }
    }
    if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) {
        return false;
    }
    return dfs(minChoosableInteger, maxChoosableInteger, desiredTotal)
};


let maxChoosableInteger = 10, desiredTotal = 0;
let result = canIWin(maxChoosableInteger, desiredTotal);
console.log(result);