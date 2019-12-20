// An interface describes how an object should look like or in other words its structure.
// You can add readonly modifier.. But not Public or Private modifiers.
interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

// You can implement multiple interfaces. Unlike inheritance.
// This class MUST adhear to the contract/structure of the interface. 
class Person implements Greetable {
  name : string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
// user1.name = 'Kimo'; Error as name cannot be modified after being set due to readonly modifier on the property.

// valid object as it satisifes the properties of the interface
user1 = new Person('Joseph');

user1.greet('Hi there - i am');
console.log(user1);