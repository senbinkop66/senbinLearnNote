var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
var p = new Octopus("dog");
console.log(p.name); //dog
p.name = "cat";
