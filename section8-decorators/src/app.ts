// A decorator is just a function we apply to a class in a certain way.
// Start with a capital Letter for decorator convention.
function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

// Factory Decorator function
function Logger2(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}



// Decorators run when the class is defined. Not when the class is instantiated.
@Logger
@Logger2('Logging - Person') // We can customise our decorator by passing in args
class Person {
  name = 'Joseph';

  constructor() {
    console.log('creating person object...');
  }  
}

const p1 = new Person();

console.log(p1);