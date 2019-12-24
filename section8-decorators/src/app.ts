// A decorator is just a function we apply to a class in a certain way.
// Start with a capital Letter for decorator convention.
function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

// Factory Decorator function
function Logger2(logString: string) {
  return function(constructor: Function) { //  
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // _ is a placeholder for the constructor. we used _ to tell typescript we care about it, but we are not using it here.
  return function(constructor: any) {
    console.log('rendering Template');
    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector('h1')!.textContent = p.name;
    }
  }
}



// Decorators run when the class is defined. Not when the class is instantiated.
// @Logger
@Logger2('Logging - Person') // We can customise our decorator by passing in args
@WithTemplate('<h1>My Person Object</h1>', 'app') // The first decorator to execute.
class Person {
  name = 'Joseph';

  constructor() {
    console.log('creating person object...');
  }  
}

const p1 = new Person();

console.log(p1);

// -- Start of Property Decorators
function Log(target: any) { // arguments depend on where we use them. 
  console.log('Property decorator');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string; // This is the prototype of the object, if called on a instance
  private _price: number;

  set price(val: number) {
    val > 0 ? this._price = val : new Error('Invalid price');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;

  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const p = new Product('baby yoda', 1);