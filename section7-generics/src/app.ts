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
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({name: 'Kimo'}, {age: 100}));

// The generic types are set dynamically, when we call the function. Such as here:
const mergedObj = merge({name: 'Kimo', hobbies: ['Programming', 'Photography']}, {age: 100});
// mergedObj.name; mergedObj.age; // would not work without Generics. 
console.log(mergedObj.age);