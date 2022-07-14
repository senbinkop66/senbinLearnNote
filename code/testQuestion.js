const obj = {
  prop: 42,
};

// Object.seal(obj);
Object.defineProperty(obj, "b", {
    value: 20,
});

obj.b = 30;

obj.aa = 10;

console.log(Object.getOwnPropertyDescriptors(obj));