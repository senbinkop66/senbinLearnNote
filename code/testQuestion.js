/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
	let n=arr.length;
	if (n===0) {
		return false;
	}
	arr.sort((a,b)=>b-a);
	//console.log(arr);
	let m=new Map();
	m.set(arr[0],1);
	for (let i=1;i<n;i++){
		//console.log(s);
		if (arr[i]>=0) {
			if (m.has(arr[i]*2)) {
				m.set(arr[i]*2,m.get(arr[i]*2)-1);
				if (m.get(arr[i]*2)===0) {
					m.delete(arr[i]*2);
				}
			}else{
				m.set(arr[i],m.has(arr[i]) ? m.get(arr[i])+1 : 1);
			}
		}else{
			if (m.has(arr[i]/2)) {
				m.set(arr[i]/2,m.get(arr[i]/2)-1);
				if (m.get(arr[i]/2)===0) {
					m.delete(arr[i]/2);
				}
			}else{
				m.set(arr[i],m.has(arr[i]) ? m.get(arr[i])+1 : 1);
			}
		}
	}
	//console.log(m);
	return m.size===0;
};

let arr = [2,1,2,1,1,1,2,2];
let result=canReorderDoubled(arr);
console.log(result);