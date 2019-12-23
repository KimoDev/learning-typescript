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