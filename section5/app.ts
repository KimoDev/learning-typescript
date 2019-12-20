// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.

// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.

class Department {
  // field/property of a class.
  // private id: string;
  // private name : string;
  private employees: string[] = [];

  // initialize object instances through the constructor. We can also add modifers inside the header to initialize class fields
  constructor(private id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  // class method with special this param
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Initialise an object/instance of a class.
const programming = new Department("D1", "Programming");

programming.addEmployee('Joseph');
programming.addEmployee('Kimo');
programming.printEmployeeInfo();

// not allowed since the employees visiblity modifer is private. if it was public it would be fine.
// programming.employees[2] = 'new employee';



programming.describe();

// js object that has a prop/value. The value refers to a class.method
const programmingCopy = { describe: programming.describe };

// we can execute the object property here as it points/refers to a function value.
// we get undefined due to 'this' keyword referring to programmingCopy, rather than the Department class and it can't find a name variable.
// programmingCopy.describe(); error, programmingCopy needs a name prop

// const programmingCopy2 = { name: 'Kimo', describe: programming.describe };
// programmingCopy2.describe(); // this now works perfectly fine.