function (nums, n) {
	let evenMax = 0;
	let oddMax = 0；
	for (let i = 0; i < n; ++i) {
			let num = nums[i]
      if (i % 2 === 0) {
      	evenMax = evenMax > num ? evenMax : num;
      } else {
      	oddMax = oddMax > num ? oddMax : num;
      }
  }

  let res = 0
  for (let i = 0; i < n; ++i) {
      if (i % 2 === 0) {
          res += (evenMax - nums[i]);
      }
      else {
          res += (oddMax - nums[i]);
      }
  }
  if (evenMax == oddMax){
  	res += (n / 2);
  }
  return ans;
}