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
var person = {
    name: 'Kimo',
    age: 100,
    hobbies: ['Programming', 'Photography', 'Creation'],
    role: [2, 'author'] // tuple - fixed array of size 2 elements. TypeScript infers this as a UNION TYPE.
};
// Typescript wont catch this as an error at compilation time. (Possibly breaking)
// person.role.push('admin');
// Typescript will catch errors on the following lines
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favouriteLanguages;
favouriteLanguages = ['JavaScript', 'Java', 'TypeScript!'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // type inference of hobby so we can called string methods without errors
    // console.log(hobby.map()); // ERROR: cannot call map() on a string value. Typescript infers the type and makes this check.
}
