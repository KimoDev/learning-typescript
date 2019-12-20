// TS introduced unknown type. More restrictive and better than any type, due to type checking
var userInput;
var userName;
// no errors. same as no type or any type.
userInput = 5;
userInput = 'Max';
// Error because expects type string. 
// Receives a unknown type, despite assigning a string ^ 
// userName = userInput;
// unknown 
// Type checking allows this assignment, due to TS knowing inside the if it has to be a string.
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Error", 500);
