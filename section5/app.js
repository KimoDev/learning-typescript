// You can implement multiple interfaces. Unlike inheritance.
// This class MUST adhear to the contract/structure of the interface. 
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
// valid object as it satisifes the properties of the interface
user1 = new Person('Joseph');
user1.greet('Hi there - i am');
console.log(user1);
