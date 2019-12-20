// An interface describes how an object should look like or in other words its structure.
interface Greetable {
  name: string;

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

// valid object as it satisifes the properties of the interface
user1 = new Person('Joseph');

user1.greet('Hi there - i am');
console.log(user1);