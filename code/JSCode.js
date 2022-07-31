function foo() {
    console.error('foo');
}

process.nextTick(foo);
console.error('bar');