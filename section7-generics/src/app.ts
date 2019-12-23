// // Array is a generic type. A generic requires type arguments.
// const names: Array<string> = []; // same as string[]
// // names[0].split(' '); // ts won't complain here as it knows we are dealing with only strings from this array.

// // A promise with a generic type that eventually resolves/rejects any type.
// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 2000)
// })

// // Any data is bad and TS doesn't know what data we are passing. 
// promise.then(data => {
//   data.split(' '); // Hence it will not complain if we try call a string method on a number.
// })

// const promise2: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000)
// });

// promise2.then(data => {
//   // data.split(' '); // TS will complain here as Promise's generic type is a number. so TS expects data to be a number.
// })

// This function merges two objects together. 
// The generic types allow us to return the intersection of specific types, rather than an unknown object.
// extends object means we are setting a type constraint. We could extend our own custom type or interface too.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({name: 'Kimo'}, {age: 100}));

// The generic types are set dynamically, when we call the function. Such as here:
const mergedObj = merge({name: 'Kimo', hobbies: ['Programming', 'Photography']}, {age: 100});
// mergedObj.name; mergedObj.age; // would not work without Generics. 
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

// This function takes a parameter that will count the length of the element. It can be a string or an array.
// Usually, our parameter is of the Generic type we define in our function
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText;
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  } else {
    descriptionText = 'Got no value';
  }
  return [element, descriptionText];
}
// Can only be called with a string or array. As they have length properties. Whereas for example a number does not.
console.log(countAndDescribe('Hi there!'));

// The keyof constraint allows us to tell typescript that we want to ensure we have the correct structure of the object in this case.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

// Start of generic classes
// We might not care about the type of data we are storing.
// therefore we can use generics, so we can create different instances for different types of data.
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Jeff');
textStorage.addItem('Joseph');
textStorage.addItem('Kimo');
textStorage.removeItem('Jeff');

console.log(textStorage.getItems());
// Generics give us more flexibility, yet still strongly typed systems.
const numberStorage = new DataStorage<number>();
const universalStorage = new DataStorage<number | string>();


const objStorage = new DataStorage<object>();
const josephObj = {name: 'joseph'}
objStorage.addItem(josephObj);
objStorage.addItem({name: 'Kimo'});
// .. do some stuff
objStorage.removeItem({name: 'joseph'}); // this doesnt work with objects. Because objects are reference types.
objStorage.removeItem(josephObj); // this instead should work. as we are storing the object and not pointing to the ref.
console.log(objStorage.getItems());


// Start of Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  // Partial is a built in type. Which makes all the properties of a generic type optional. In this case our object type(interface).
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // we cast the type here as we are returning a CourseGoal and not a partial in the end.
}

// Restrict to only read only and not modify elements.
const names: Readonly<string[]> = ['Joseph', 'Kimo'];
// names.push('Obi Wan Kenobi');
// names.pop();