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

// start of Function Overloads.
// A function overload allows us to define type variants of what a function should return.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
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
// Without function overloads, result would be of type Combinable, which is a problem if we wish to call specific type methods on it like split.
const result = add('Joseph', 'Kimo');
result.split(' '); // this can only be called on a string.

// Start of Optional Chaining
// Getting data from a source where we don't know if a certain prop exists
const fetchedUserData = {
  id: 'u1',
  name: 'Kimo',
  job: { title: 'CEO', description: 'Im The owner b*tch'}
};
// Javascript way to check if a prop exists
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title); // typescript way to check if a property exists on an object

const userData = '';

const storedData = userData || 'DEFAULT'; // fallback is used. '' counts as falsy.
// nullish coalescing operator use case
const storedData2 = userData ?? 'DEFAULT'; // instead we can use this
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

// Type casting - helps us tell ts that some value is of a specific type
// when ts cannot detect it on its own. For example, an element in the DOM.

// TypeScript knows paragraph a HTMLParagraphElement type
const paragraph  = document.querySelector('p');
// TypeScript only knows that this is aa HTMLElement.
const paragraphWithID = document.getElementById('message');

// Type casting version 1. ! also tells typescript that this will never return null.
const userInput = <HTMLInputElement>document.getElementById('user-input')! ;
// Type casting version 2 - mainly for react
const userInput2 = document.getElementById('user-input')! as HTMLInputElement ;

userInput.value = 'hi there!';
userInput2.value = 'boom!'

// Optionally to not use ! we could use an if to check it exists..
const userInput3 = document.getElementById('user-input');
if(userInput3) {
  // we need to wrap our cast if we want to access props on it.
  (userInput3 as HTMLInputElement).value = 'Master of TypeScript';
}

// Start of index types

// We want to be able to use a flexible error container to handle different forms & fields on a webpage.
interface ErrorContainer { // { email: 'Not a vaalid email', username: 'Must start with a character' } <- not flexible for different forms
  // index type
  // id: string; // has to be string due to our index type. (consequence)
  [prop: string]: string; // we don't know the name of the string property. but we know its value is a string type.
}
// The error container gives us the flexibility to add any string type property.
const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character'
} 