// Code goes here!
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

  // binds to the event listener.
  private submitHandler(event: Event) {
    event.preventDefault(); // prevent default submission behaviour
    console.log(this.titleInputElement.value); 
  }

  private configure() {
    this.formElement.addEventListener('submit', this.submitHandler.bind(this)); // will not point to the class unless it is bound (bind) to this class (this)
  }

  private attach() {
    // @'afterbegin' - 1 of 4 position options.
  this.domRoot.insertAdjacentElement('afterbegin', this.formElement);
  }

}

const project = new ProjectInput();
