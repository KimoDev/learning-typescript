var add;
add = function (n1, n2) { return n1 + n2; };
// This class MUST adhear to the contract/structure of the interface/s. 
// You can implement multiple interfaces. Unlike inheritance.
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    };
    return Person;
}());
var user1;
// user1.name = 'Kimo'; Error as name cannot be modified after being set due to readonly modifier on the property.
// valid object as it satisifes the properties of the interface
user1 = new Person();
// is Valid. Due to name being optional both as a property & as a constructor parameter.
// let user2: Greetable;
// user2 = new Person();
user1.greet('Hi there - i am');
console.log(user1);
