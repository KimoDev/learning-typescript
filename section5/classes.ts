// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.

// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.

// abstract classes are good to enforce common functionality that is shared between all classes that inherit from the base class.
// Also they are good as they allow the definition of the method. But each class has its own implementation of the method.
// You cannot instantiate abstract classes.

abstract class Department {
  static fiscalYear = 2020;
  // field/property of a class.
  // private readonly id: string;
  // private name : string;
  // protected is a modifier that allows (other than itself) classes that inherit it to access & modify the field.
  protected employees: string[] = [];

  // initialize object instances through the constructor. We can also add modifers inside the header to initialize class fields
  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
    // console.log(this.fiscalYear); Static values cannot be accessed from within an instance of a class (this).
    // console.log(Department.fiscalYear); This would however work and be valid.
  }

  get getID() {
    return this.id;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  // An abstract class so sub-classes can use but with their own implementation.
  abstract describe(this: Department): void;


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
  describe() {
    console.log('IT DEPARTMENT - ID: ' + this.getID);
  }
}
// Here is another example of a class inheriting from the Department super/base class.
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // This is a getter method.
  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found!');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }
  // The constructor should satisfy the params/args of the super constructor. Can also initalize new fields for this class too.
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  
  static getInstance() {
    if (this.instance) {
      return AccountingDepartment.instance;
    }
    return new AccountingDepartment('d2', []);
  }
  // addEmployee exists in Department. However, we can overide the implementation by defining it again here.
  addEmployee(name: string) {
    if (name === 'Naruto') {
      return;
    }
    this.employees.push(name); // this only works if the employees field has the protected modifier.
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('ACCOUNTING DEPARTMENT - ID: ' + this.getID);
  }
}


// Here we show static methods & properties being used.
const employee1 = Department.createEmployee('TheRealKimo')
console.log(employee1, Department.fiscalYear);


// Initialise an object/instance of a class.
const programming = new ITDepartment("D1", ['Kimo']);

programming.addEmployee('Joseph');
programming.addEmployee('Kimo');
programming.printEmployeeInfo();

// not allowed since the employees visiblity modifer is private. if it was public it would be fine.
// programming.employees[2] = 'new employee';

// displays the whole class and it's properties.
console.log(programming);

// This will throw an error. As AccountingDepartment has a private constructor, meaning we can only have 1 instance of the class.
// const accounting = new AccountingDepartment('D2', []);
// However, we can get around this by getting the static instance of the class. 
const accounting = AccountingDepartment.getInstance();

// we access the getter method/function as a property. Which will execute the getter method.
// console.log(accounting.mostRecentReport);

// we access the setter method as a property. We assign a value to pass into the setter method.
accounting.mostRecentReport = 'THE LAST REPORT';

accounting.addReport("We hit our annual target revenue");
console.log(accounting.mostRecentReport);

accounting.addEmployee('Naruto');
accounting.addEmployee('Madara');
accounting.printEmployeeInfo();
accounting.printReports();

accounting.describe();
programming.describe();


// js object that has a prop/value. The value refers to a class.method
const programmingCopy = { describe: programming.describe };

// we can execute the object property here as it points/refers to a function value.
// we get undefined due to 'this' keyword referring to programmingCopy, rather than the Department class and it can't find a name variable.
// programmingCopy.describe(); error, programmingCopy needs a name prop

// const programmingCopy2 = { name: 'Kimo', describe: programming.describe };
// programmingCopy2.describe(); // this now works perfectly fine.