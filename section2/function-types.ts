// this functions return type is a number.
// we do not explicity set the type :number, instead we SHOULD let TS infer the type
function addTogether(n1: number, n2:number) {
  return n1 + n2;
}

// void return type. like C or Java. // Again we explicity set the return type, we SHOULD LET TS infer this.
function printA(num: number): void {
  console.log('Result: ' + num );
}

// Undefined is a type. A function that returns and nothing more.
function printB(num: number): undefined {
  console.log('something');
  return;
}
// cb is a callback function that function after the function is complete. The cb expects return type of void.
function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}



// Values can also be undefined/don't exist... (yet)
// let someValue : undefined;

printA(addTogether(5, 12));

// Function types
let combineValues : (a: number, b: number) => number;
// We can create pointers to functions using variables.
combineValues = addTogether;
// This function expects 2 params. Given only 1 here. return type must also be a number 
// combineValues = printA;

// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
})