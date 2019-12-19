// this functions return type is a number.
// we do not explicity set the type :number, instead we SHOULD let TS infer the type
function addTogether(n1, n2) {
    return n1 + n2;
}
// void return type. like C or Java. // Again we explicity set the return type, we SHOULD LET TS infer this.
function printA(num) {
    console.log('Result: ' + num);
}
// Undefined is a type. A function that returns and nothing more.
function printB(num) {
    console.log('something');
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// Values can also be undefined/don't exist... (yet)
// let someValue : undefined;
printA(addTogether(5, 12));
// Function types
var combineValues;
// We can create pointers to functions using variables.
combineValues = addTogether;
// This function expects 2 params. Given only 1 here. return type must also be a number 
// combineValues = printA;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
