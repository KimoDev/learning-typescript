
// Form Validation
interface Validatable {
  value: string | number; // ? is optional. same as writing | undefined
  required?: boolean;
  minLength?: number; // length of string
  maxLength?: number;
  min?: number; // value of number
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true; // default value
  
  // checks if the form field input is required.
  if (validatableInput.required) {
    // if it is, then checks if its empty.
    isValid == isValid && validatableInput.value.toString().trim().length !== 0
  }
  // check if it is a string and it is of a certain minimum length. 
  if(validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  // check if the string is of a below the maximum length. 
  if(validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  // check if the number is greater than a minimum value
  if(validatableInput.min != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value >= validatableInput.min
  }
  // check if the number is less than than a maximum value
  if(validatableInput.max != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max
  }
  return isValid;
}

// authobind decorator
// @descriptor - methods are just properties that referred to functions.
function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  // store the method
  const originalMethod = descriptor.value;

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    // Executuable when we access the method.
    get() {
      // binding this context to the original method
      const boundFunc = originalMethod.bind(this);
      return boundFunc;
    }
  };
  return adjDescriptor;
}

// This project is written as an object-oriented programming project (OOP)

class ProjectInput {
  templateElement: HTMLTemplateElement; // Global type from "dom" library in tsconfig.json
  domRoot: HTMLDivElement;
  formElement: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; // getElementByiD doesnt know the type we get 
    this.domRoot = document.getElementById('app')! as HTMLDivElement; // so we cast as a HTMLDivElement
  
    // importNode global to the doc object. content is a property existing on a HTMLTemplateElement
    // Document Fragment
    const importedNode = document.importNode(this.templateElement.content, true);// true so the Nodes children are also referenced too. (deep clone)
    // We need the concrete HTML. We use Form because it is the first element in our template
    this.formElement = importedNode.firstElementChild as HTMLFormElement;
    this.formElement.id = 'user-input'; // add an id to the element
    
    // get access to input elements
    this.titleInputElement = this.formElement.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.formElement.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.formElement.querySelector('#people')! as HTMLInputElement;
    
    //add event listener to form elements
    this.configure();
    // Then render to the dom.
    this.attach();
  }

  // Function returns either a tuple of data or void. Void, we could use undefined, but we use void as it is exclusive to functions
  private gatherUserInput(): [string, string, number] | void {
    const titleInput = this.titleInputElement.value;
    const descriptionInput = this.descriptionInputElement.value;
    const peopleInput = this.peopleInputElement.value;

    // js object of an interface type
    const titleValidateable: Validatable = {
      value: titleInput,
      required: true
    }

    const descriptionValidateable: Validatable = {
      value: descriptionInput,
      required: true,
      minLength: 5
    }

    const peopleValidateable: Validatable = {
      value: +peopleInput,
      required: true,
      min: 1
    }

    // basic validation
    if (validate(titleValidateable) && validate(descriptionValidateable) && validate(peopleValidateable)) {
      // form inputs are valid.
      return [titleInput, descriptionInput, +peopleInput]; // + is short js syntax to convert peopleInput into a number. Refereed to as the Unary plus operator
    } else {
      // One or more form inputs were invalid.
      alert('invalid input, please try again');
      return;
    }
    
  }
  // reset fields to empty 
  private clearFormInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind // property decorator
  // will not point to the context of the class unless it is bound using .bind(this) or alternatively () => {}
  private submitHandler(event: Event) {
    event.preventDefault(); // prevent default submission behaviour
    const userInput = this.gatherUserInput();
    // tuple is not a js type. typles are just arrays in js.
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearFormInputs();
    }
  }
  
  private configure() {
    // Listen to submit event of the form. Could also use an arrow function instead of .bind(this)
    // this.formElement.addEventListener('submit', this.submitHandler.bind(this)); 
    
    // We dont bind(this) here as above we applied a property decorator to this function 
    this.formElement.addEventListener('submit', this.submitHandler); 

  }

  private attach() {
    // @'afterbegin' - 1 of 4 position options.
  this.domRoot.insertAdjacentElement('afterbegin', this.formElement);
  }

}

const project = new ProjectInput();
