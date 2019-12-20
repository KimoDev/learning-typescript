// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.

// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.

class Department {
  // field/property of a class.
  // private readonly id: string;
  // private name : string;
  private employees: string[] = [];

  // initialize object instances through the constructor. We can also add modifers inside the header to initialize class fields
  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  // class method with special this param
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this wont work, as id is a readonly property and cannot be modified.
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// extends symbolises that we can inherit functionality from a class. Multiple-class inheritance is not allowed. 
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // super is needed in any class constructor that inherits from a super/base class.
    super(id, 'IT');
    this.admins = admins;

  }
}
// Here is another example of a class inheriting from the Department super/base class.
class AccountingDepartment extends Department {
  // The constructor should satisfy the params/args of the super constructor. Can also initalize new fields for this class too.
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// Initialise an object/instance of a class.
const programming = new ITDepartment("D1", ['Kimo']);

programming.addEmployee('Joseph');
programming.addEmployee('Kimo');
programming.printEmployeeInfo();

// not allowed since the employees visiblity modifer is private. if it was public it would be fine.
// programming.employees[2] = 'new employee';

// displays the whole class and it's properties.
console.log(programming);

const accounting = new AccountingDepartment('D2', []);

accounting.addReport("We hit our annual target revenue");
accounting.printReports();

programming.describe();

// js object that has a prop/value. The value refers to a class.method
const programmingCopy = { describe: programming.describe };

// we can execute the object property here as it points/refers to a function value.
// we get undefined due to 'this' keyword referring to programmingCopy, rather than the Department class and it can't find a name variable.
// programmingCopy.describe(); error, programmingCopy needs a name prop

// const programmingCopy2 = { name: 'Kimo', describe: programming.describe };
// programmingCopy2.describe(); // this now works perfectly fine.