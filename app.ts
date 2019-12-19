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

// Values can also be undefined/don't exist... (yet)
// let someValue : undefined;

printA(addTogether(5, 12));



console.log(combineValues(8, 8));