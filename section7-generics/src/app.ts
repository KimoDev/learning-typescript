// Array is a generic type. A generic requires type arguments.
const names: Array<string> = []; // same as string[]
// names[0].split(' '); // ts won't complain here as it knows we are dealing with only strings from this array.

// A promise with a generic type that eventually resolves/rejects any type.
const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 2000)
})

// Any data is bad and TS doesn't know what data we are passing. 
promise.then(data => {
  data.split(' '); // Hence it will not complain if we try call a string method on a number.
})

const promise2: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000)
});

promise2.then(data => {
  // data.split(' '); // TS will complain here as Promise's generic type is a number. so TS expects data to be a number.
})