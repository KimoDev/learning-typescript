// This is not a JS object. 
// In fact this is an object type.
// Instead of key-value pairs like in a js object, we have key-type pairs

// const person: {
//   name: string;
//   age: number
// } = {
//   name: 'Kimo',
//   age: 100
// };

// Let typescript infer the types instead
const person = {
    name: 'Kimo',
    age: 100
  };


console.log(person.name);