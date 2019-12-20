// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.
var Department = /** @class */ (function () {
    // initialize object instances through the constructor. We can also add modifers inside the header to initialize class fields
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // field/property of a class.
        // private readonly id: string;
        // private name : string;
        // protected is a modifier that allows (other than itself) classes that inherit it to access & modify the field.
        this.employees = [];
        // this.name = name;
        // this.id = id;
    }
    // class method with special this param
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        // this wont work, as id is a readonly property and cannot be modified.
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
// extends symbolises that we can inherit functionality from a class. Multiple-class inheritance is not allowed. 
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        // super is needed in any class constructor that inherits from a super/base class.
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
// Here is another example of a class inheriting from the Department super/base class.
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // The constructor should satisfy the params/args of the super constructor. Can also initalize new fields for this class too.
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Naruto') {
            return;
        }
        this.employees.push(name); // this only works if the employees field has the protected modifier.
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
// Initialise an object/instance of a class.
var programming = new ITDepartment("D1", ['Kimo']);
programming.addEmployee('Joseph');
programming.addEmployee('Kimo');
programming.printEmployeeInfo();
// not allowed since the employees visiblity modifer is private. if it was public it would be fine.
// programming.employees[2] = 'new employee';
// displays the whole class and it's properties.
console.log(programming);
var accounting = new AccountingDepartment('D2', []);
accounting.addReport("We hit our annual target revenue");
accounting.addEmployee('Naruto');
accounting.addEmployee('Madara');
accounting.printEmployeeInfo();
accounting.printReports();
programming.describe();
// js object that has a prop/value. The value refers to a class.method
var programmingCopy = { describe: programming.describe };
// we can execute the object property here as it points/refers to a function value.
// we get undefined due to 'this' keyword referring to programmingCopy, rather than the Department class and it can't find a name variable.
// programmingCopy.describe(); error, programmingCopy needs a name prop
// const programmingCopy2 = { name: 'Kimo', describe: programming.describe };
// programmingCopy2.describe(); // this now works perfectly fine.
