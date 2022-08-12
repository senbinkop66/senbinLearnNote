class Octopus{
  readonly numberOfLegs:number=8;
  constructor(readonly name:string){
  }
}

let p=new Octopus("dog");
console.log(p.name);  //dog

p.name = "cat";
// test.ts(10,3): error TS2540: Cannot assign to 'name' because it is a read-only property.