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
// @target is the constructor of the class. (Product class) 
// @propertyName is the name of the property this factory decorator has been applied too.
function PropertyDecorator(target: any, propertyName: string | symbol) { // arguments depend on where we use them. 
  console.log('Property decorator');
  console.log(target, propertyName); 
}
// -- Start of Access Decorators
// @target The prototype of the instance/object, if static instead it will be the constructor function as above ^.
// @name
// descriptor. 
function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
// Method Decorator. @target - object prototype, 
function MethodDecorator(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
// Parameter Decorator. 
// @position The position of the argument
function ParameterDecorator(target: any, name: string | symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropertyDecorator
  title: string; // This is the prototype of the object, if called on a instance
  private _price: number;

  @AccessorDecorator // Accessor Decorator
  set price(val: number) {
    val > 0 ? this._price = val : new Error('Invalid price');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;

  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}
