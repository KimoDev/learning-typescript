"use strict";
// Any object of type ElevatedEmployee must satisfy properties of Admin & Employee.
var e1 = {
    name: 'joseph',
    privilages: ['create-server'],
    startDate: new Date()
};
// Start of type guards here 
function add(a, b) {
    // This is called a type guard using typeof.
    // if one argument/parameter is of type string then concatinate them
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    // else add them as of type numbers.
    return a + b;
}
// Without function overloads, result would be of type Combinable, which is a problem if we wish to call specific type methods on it like split.
var result = add('Joseph', 'Kimo');
result.split(' '); // this can only be called on a string.
function printEmployeeInfo(emp) {
    // shouldn't be a problem since both object types have a name.
    console.log('Name: ' + emp.name);
    // However, typescript complains about this, as it may not exist. 
    // console.log('Pribileges: ' + emp.privilages);
    // javascript that lets us check if the given property exists 'in' emp. (using typeof will not work here)
    if ('privilages' in emp) {
        console.log('Privileges: ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
// Will only print out which type checks succeed above.
printEmployeeInfo(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // One way to check if an instance has a method or field.
    // if ('loadCargo' in vehicle) {
    //   vehicle.loadCargo(1000);
    // }
    // But another more elegant way we could use is. FOR CLASSES, not interfaces.
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    // This would work. but if we had alot of types, we would have to check them.
    // Also instanceof wouldnt work here either as we aint using classes.
    // if('flyingSpeed' in animal) {
    //   console.log('Moving with speed:' + animal.flyingSpeed);
    // }
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
// Type casting - helps us tell ts that some value is of a specific type
// when ts cannot detect it on its own. For example, an element in the DOM.
// TypeScript knows paragraph a HTMLParagraphElement type
var paragraph = document.querySelector('p');
// TypeScript only knows that this is aa HTMLElement.
var paragraphWithID = document.getElementById('message');
// Type casting version 1. ! also tells typescript that this will never return null.
var userInput = document.getElementById('user-input');
// Type casting version 2 - mainly for react
var userInput2 = document.getElementById('user-input');
userInput.value = 'hi there!';
userInput2.value = 'boom!';
// Optionally to not use ! we could use an if to check it exists..
var userInput3 = document.getElementById('user-input');
if (userInput3) {
    // we need to wrap our cast if we want to access props on it.
    userInput3.value = 'Master of TypeScript';
}
// The error container gives us the flexibility to add any string type property.
var errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character'
};
