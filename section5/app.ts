// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.

// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.

class Department {
  // field/property of a class.
  name : string;

  // 
  constructor(name: string) {
    this.name = name;
  }

  // class method with special this param
  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

// Initialise an object/instance of a class.
const programming = new Department("Joseph");

programming.describe();

// js object that has a prop/value. The value refers to a class.method
const programmingCopy = { describe: programming.describe };

// we can execute the object property here as it points/refers to a function value.
// we get undefined due to 'this' keyword referring to programmingCopy, rather than the Department class and it can't find a name variable.
// programmingCopy.describe(); error, programmingCopy needs a name prop

const programmingCopy2 = { name: 'Kimo', describe: programming.describe };
programmingCopy2.describe(); // this now works perfectly fine.