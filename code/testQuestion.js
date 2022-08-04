function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用 new 命令生成实例');
  }
}

let obj = {}
new Person.call(obj, 'red') // 此时使用非new的调用方式就会报错