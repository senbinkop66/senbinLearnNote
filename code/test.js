function formatNumber(num) {
	let [int, fraction] = num.toString().split(".");
	let reg = /\d{1,3}(?=(\d{3})+$)/g
	return (int + '').replace(reg, "$&,") + (!!fraction ? "." + fraction : "");
}

let num1 = 123456.342;
console.log(formatNumber(num1));  // 123,456.342

let num2 = -1234567.342;
console.log(formatNumber(num2));  // -1,234,567.342