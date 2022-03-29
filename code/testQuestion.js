/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
	return Math.max(maxConsecutiveChar(answerKey,k,"T"),maxConsecutiveChar(answerKey,k,"F"));
};
var maxConsecutiveChar=function(answerKey,k,ch){
	let n=answerKey.length;
	let ans=0;
	for (let left=0,right=0,sum=0;right<n;right++){
		sum+=answerKey.charAt(right)!==ch ? 1 : 0;
		while(sum>k){
			sum-=answerKey[left++]!==ch ? 1 : 0;
		}
		ans=Math.max(ans,right-left+1);
	}
	return ans;
}

let answerKey = "TTFF", k = 2;
let result=maxConsecutiveAnswers(answerKey,k);
console.log(result);