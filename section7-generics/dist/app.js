"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Kimo', hobbies: ['Programming', 'Photography'] }, { age: 100 });
console.log(mergedObj.age);
//# sourceMappingURL=app.js.map