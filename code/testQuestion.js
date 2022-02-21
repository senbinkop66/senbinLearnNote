/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let n=dominoes.length;
    dominoes=dominoes.split("");
    let left=-1;  //往右倒的
    let right=n;  //往左倒的
    for(let i=0;i<n;i++){
        if(dominoes[i]==="L"){
            right=i;
            if (left===-1) {
                //前面向right倒的没有或倒完了
                while(dominoes[right-1]==="."){
                    dominoes[--right]="L";
                }
                right=n;
            }else{
                //前面有向right倒的
                while((left+1)!==(right-1) && (left+1)!==right && left!==(right-1)){
                    dominoes[++left]="R";
                    dominoes[--right]="L";
                }
                left=-1;
                right=n;
            }
        }else if(dominoes[i]==="R"){
            if (left!==-1) {
                //连续遇到往右倒的
                while(dominoes[left+1]==="."){
                    dominoes[++left]="R";
                }
            }
            left=i;

        }else{}
    }
    if (right===n && left!==-1) {
        while((left+1)<n){
            //后面只有往右倒的
            dominoes[++left]="R";
        }
    }
    return dominoes.join("");
};

let test=".L.R...LR..L..";
let result=pushDominoes(test);
console.log(result);