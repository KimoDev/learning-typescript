const username = 'kimo';
let age : number;
age = 30;
console.log(username);

// How does ts know document exists? Through tsconfig default values or through libraries that you have defined.
// In tsconfig.json if you set lib to just an empty array, you will see the errors in this file and understand more.

const button = document.getElementById('button')!;

button.addEventListener('click', () => {
  console.log('button clicked');
})