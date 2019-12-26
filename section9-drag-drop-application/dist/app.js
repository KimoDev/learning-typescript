"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid == isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}
function autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFunc = originalMethod.bind(this);
            return boundFunc;
        }
    };
    return adjDescriptor;
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.domRoot = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild;
        this.formElement.id = 'user-input';
        this.titleInputElement = this.formElement.querySelector('#title');
        this.descriptionInputElement = this.formElement.querySelector('#description');
        this.peopleInputElement = this.formElement.querySelector('#people');
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const titleInput = this.titleInputElement.value;
        const descriptionInput = this.descriptionInputElement.value;
        const peopleInput = this.peopleInputElement.value;
        const titleValidateable = {
            value: titleInput,
            required: true
        };
        const descriptionValidateable = {
            value: descriptionInput,
            required: true,
            minLength: 5
        };
        const peopleValidateable = {
            value: +peopleInput,
            required: true,
            min: 1
        };
        if (validate(titleValidateable) && validate(descriptionValidateable) && validate(peopleValidateable)) {
            return [titleInput, descriptionInput, +peopleInput];
        }
        else {
            alert('invalid input, please try again');
            return;
        }
    }
    clearFormInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearFormInputs();
        }
    }
    configure() {
        this.formElement.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.domRoot.insertAdjacentElement('afterbegin', this.formElement);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const project = new ProjectInput();
//# sourceMappingURL=app.js.map