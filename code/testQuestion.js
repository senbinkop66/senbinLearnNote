function newInstance(left, right) {
    let rightProto = right.prototype;
    let leftValue = left.__proto__;
    while (true) {
        if (leftValue === null) {
            return false;
        }
        if (leftValue === rightProto) {
            return true;
        }
        leftValue = leftValue.__proto__;
    }
}