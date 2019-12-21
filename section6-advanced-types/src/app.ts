// could also be an interface.
type Admin = {
  name: string;
  privilages: string[];
}

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {};

type ElevatedEmployee = Admin & Employee;

// Any object of type ElevatedEmployee must satisfy properties of Admin & Employee.
const e1: ElevatedEmployee = {
  name: 'joseph',
  privilages: ['create-server'],
  startDate: new Date()
}
// custom union types
type Combinable = string | number;
type Numeric = number | boolean;
// Universal is of type number because it is the only intersection between the two types ^
type Universal = Combinable & Numeric

// Start of type guards here 
function add(a: Combinable, b: Combinable) {
  // This is called a type guard using typeof.
  // if one argument/parameter is of type string then concatinate them
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  // else add them as of type numbers.
  return a+b;
}
// Custom Union type using our Object types
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
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

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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

// Start of discriminated Unions - 1 property in every object that describes it. (such as type)
interface Bird {
  // literal type assignment
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  // literal type assignment
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // This would work. but if we had alot of types, we would have to check them.
  // Also instanceof wouldnt work here either as we aint using classes.
  // if('flyingSpeed' in animal) {
  //   console.log('Moving with speed:' + animal.flyingSpeed);
  // }
  let speed;
  switch(animal.type) {
    case 'bird': 
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 100});