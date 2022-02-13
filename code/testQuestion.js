/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result=[0];
    let len=1;
    while(n>0){
        len=result.length < n ? result.length : n;
        for(let i=0;i<len;i++){
            result.push(1+result[i])
        }
        n=n-len;
    }
    //console.log(result);
    return result;
};

for(let i=0;i<=64;i++){
    let result=countBits(i);
    console.log(i,result[i]);
}
