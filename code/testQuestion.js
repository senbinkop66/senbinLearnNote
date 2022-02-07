/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let result=[];
    const arr=[[a,'a'],[b,'b'],[c,'c']];
    while(true){
        arr.sort((a,b)=>b[0]-a[0]);
        let hasNext=false;
        for(const [i,[c,ch]] of arr.entries()){
            if (c<=0) {
                break;
            }
            const m=result.length;
            if (m>=2 && result[m-2]===ch && result[m-1]===ch) {
                continue;
            }
            hasNext=true;
            result.push(ch);
            arr[i][0]--;
            break;
        }
        if (!hasNext) {
            break;
        }
    }
    return result.join("");
};



let test=100;
let result=longestDiverseString(1,1,7);
console.log(result);

