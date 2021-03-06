// An interface describes how an object should look like or in other words its structure.
// You can extend/inherit multiple interfaces. As they are just being merged together in the end. Unlike classes single-inheritance
interface Greetable extends Named {
  greet(phrase: string): void;
}

// You can add readonly modifier.. But not Public or Private modifiers.
interface Named {
  readonly name?: string;
  // ? symbolises that this property is optional and doesnt need to exist.
  outputName?: string;
}

// recap of function types
// type addFunction = (a: number, b: number) => number;
// let add : addFunction;

// Intefaces as Function types
interface AddFunction {
  // sort of like an anonymous function. Probably less common, but does exist.
  (a: number, b: number) : number;
}
let add : AddFunction;

add = (n1: number, n2: number) => n1 + n2;

// This class MUST adhear to the contract/structure of the interface/s. 
// You can implement multiple interfaces. Unlike inheritance.
class Person implements Greetable {
  name? : string;
  age = 30;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if(this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}
let user1: Greetable;
// user1.name = 'Kimo'; Error as name cannot be modified after being set due to readonly modifier on the property.

// valid object as it satisifes the properties of the interface
user1 = new Person('Joseph');
// is Valid. Due to name being optional both as a property & as a constructor parameter.
// let user2: Greetable;
// user2 = new Person();

user1.greet('Hi there - i am');
console.log(user1);