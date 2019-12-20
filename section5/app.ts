// An interface describes how an object should look like
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

// valid object as it satisifes the properties of the interface
user1 = {
  name: 'Kimo',
  age: 100,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - i am');