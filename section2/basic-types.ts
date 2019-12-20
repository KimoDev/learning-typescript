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
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple type
// } = {
//     name: 'Kimo',
//     age: 100,
//     hobbies: ['Programming', 'Photography', 'Creation'],
//     role: [2, 'author'] // tuple - fixed array of size 2 elements. TypeScript infers this as a UNION TYPE.
//   };

  // enum starting from 5. Can also assign custom values with each enum CONSTANT. 
  enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 'Author'};

  const person = {
    name: 'Kimo',
    age: 100,
    hobbies: ['Programming', 'Photography', 'Creation'],
    role: Role.ADMIN
  };

  // Typescript wont catch this as an error at compilation time. (Possibly breaking)
  // person.role.push('admin');

  // Typescript will catch errors on the following lines
  // person.role[1] = 10;
  // person.role = [0, 'admin', 'user'];
  
  let favouriteLanguages: string[]; 
  favouriteLanguages = ['JavaScript', 'Java', 'TypeScript!']

  // Any data type allows for any type to be assigned to that variable.
  let anyType : any[];
  anyType = [0, [1, 2, 3], 'anyanyany', true, { id: 0}]

  // Any data type should be avoided. only in very specific cases, such as you don't know what kind of data will be stored.
  // Hence we should use run time checks instead. such as If statements to check typeof data


  console.log(person.name);

  for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // type inference of hobby so we can called string methods without errors
    // console.log(hobby.map()); // ERROR: cannot call map() on a string value. Typescript infers the type and makes this check.
  }

  if (person.role === Role.ADMIN) {
    console.log('user is logged in as a Admin');
  }