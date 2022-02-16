/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                       1 if num is higher than the guess number
 *                       otherwise return 0
 */
var guess = function(num) {
    if (num>1702766719) {
        return -1;
    }else if(num<1702766719){
        return 1;
    }else{
        return 0;
    }
}


/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left=1;
    let right=n;
    let mid;
    while(left<right){
        mid= Math.floor(left + (right - left) / 2);  // 防止计算时溢出;
        if(guess(mid)===-1) {
            right=mid-1;
        }else if(guess(mid)===1){
            left=mid+1;
        }else{
            return mid;
        }
        //console.log(mid);
    }
    return left;
};


let test=2126753390;
let result=guessNumber(test);
console.log(result);
