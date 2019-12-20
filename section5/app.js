// Classes & Object Instances
// Object are instances of classes. An can can perform multiple tasks.
// Classes are blueprints for objects, by defining properties and methods they have access to.
// Classes also allow us to create multiple instances from it.
var Department = /** @class */ (function () {
    // 
    function Department(name) {
        this.name = name;
    }
    // class method
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
// Initialise an object/instance of a class.
var programming = new Department("Joseph");
programming.describe();
