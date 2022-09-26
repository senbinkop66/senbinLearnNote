function getProperty<T, K extends keyof T>(obj:T, key:K): T[K]{
	return obj[key];
}


let x = {a:1, b:2, c:3, d:4};
console.log(getProperty(x, "b"));  //2
//Argument of type '"e"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
console.log(getProperty(x, "e"));  //