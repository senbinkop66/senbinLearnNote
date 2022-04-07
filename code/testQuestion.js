/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length!==goal.length) {
        return false;
    }
    let index0=0;
    while(index0<s.length){
        index0=s.indexOf(goal[0],index0);
        if (index0===-1) {
            return false;
        }else{
            if (s.slice(index0)+s.slice(0,index0)===goal) {
                return true;
            }else{
                index0++;
            }
        }
    }
    return false;
};

let  s = "abcde", goal = "cdeab";
let result=rotateString(s,goal);
console.log(result);