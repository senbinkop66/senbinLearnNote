if (true) { // enter new scope, TDZ starts
    const func = function () {
        console.log(myVar); // OK!
    };

    // Here we are within the TDZ and
    // accessing `myVar` would cause a `ReferenceError`
    console.log(myVar);  //undefined
    var myVar = 3; // TDZ ends
    func(); // called outside TDZ
}