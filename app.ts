// TS introduced unknown type. More restrictive and better than any type, due to type checking
let userInput: unknown;
let userName: string;

// no errors. same as no type or any type.
userInput = 5;
userInput = 'Max'

// Error because expects type string. 
// Receives a unknown type, despite assigning a string ^ 
// userName = userInput;

// unknown 

// Type checking allows this assignment, due to TS knowing inside the if it has to be a string.
if(typeof userInput === 'string') {
  userName = userInput;
}

// Never returns a value. Never type used in this case. TS will infer void, as never is new syntax
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code}
}

generateError("Error", 500);