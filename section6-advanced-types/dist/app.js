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
