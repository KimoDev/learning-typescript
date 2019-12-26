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
    const descInput = this.descriptionInputElement.value;
    const peopleInput = this.peopleInputElement.value;

    // basic validation
    if (titleInput.trim().length === 0 || descInput.trim().length === 0 || peopleInput.trim().length === 0) {
      alert('invalid input, please try again');
      return;
    } else {
      // + is short js syntax to convert peopleInput into a number. Refereed to as the Unary plus operator
      return [titleInput, descInput, +peopleInput];
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
