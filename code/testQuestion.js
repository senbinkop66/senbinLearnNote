/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
	let ans=0;
	for(let i=left;i<=right;i++){
		if(isPrime(bitCount(i))){
			ans++;
		}
	}
	return ans;
};

const isPrime=(n)=>{
	if (n<2) {
		return false;
	}
	for (let i=2;i*i<=n;i++){
		if (n%i===0) {
			return false;
		}
	}
	return true;
}

const bitCount=(n)=>{
	return n.toString(2).split("0").join("").length;
}

let left = 10, right = 15;
let result=countPrimeSetBits(left,right);
console.log(result);