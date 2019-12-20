// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.
// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.
var Department = /** @class */ (function () {
    // 
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    // class method with special this param
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// Initialise an object/instance of a class.
var programming = new Department("Joseph");
programming.addEmployee('Joseph');
programming.addEmployee('Kimo');
programming.printEmployeeInfo();
// not allowed since the employees visiblity modifer is private. if it was public it would be fine.
// programming.employees[2] = 'new employee';
programming.describe();
// js object that has a prop/value. The value refers to a class.method
var programmingCopy = { describe: programming.describe };
// we can execute the object property here as it points/refers to a function value.
// we get undefined due to 'this' keyword referring to programmingCopy, rather than the Department class and it can't find a name variable.
// programmingCopy.describe(); error, programmingCopy needs a name prop
// const programmingCopy2 = { name: 'Kimo', describe: programming.describe };
// programmingCopy2.describe(); // this now works perfectly fine.
