"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Kimo', hobbies: ['Programming', 'Photography'] }, { age: 100 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText;
    if (element.length === 1) {
        descriptionText = `Got 1 element`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    else {
        descriptionText = 'Got no value';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
//# sourceMappingURL=app.js.map