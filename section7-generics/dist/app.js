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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Jeff');
textStorage.addItem('Joseph');
textStorage.addItem('Kimo');
textStorage.removeItem('Jeff');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const universalStorage = new DataStorage();
const objStorage = new DataStorage();
const josephObj = { name: 'joseph' };
objStorage.addItem(josephObj);
objStorage.addItem({ name: 'Kimo' });
objStorage.removeItem({ name: 'joseph' });
objStorage.removeItem(josephObj);
console.log(objStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Joseph', 'Kimo'];
//# sourceMappingURL=app.js.map