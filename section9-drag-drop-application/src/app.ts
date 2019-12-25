// Code goes here!
// This project is written as an object-oriented programming project (OOP)

class ProjectInput {
  templateElement: HTMLTemplateElement; // Global type from "dom" library in tsconfig.json
  domRoot: HTMLDivElement;
  formElement: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; // getElementByiD doesnt know the type we get 
    this.domRoot = document.getElementById('app')! as HTMLDivElement; // so we cast as a HTMLDivElement
  
    // importNode global to the doc object. content is a property existing on a HTMLTemplateElement
    // Document Fragment
    const importedNode = document.importNode(this.templateElement.content, true);// true so the Nodes children are also referenced too. (deep clone)
    // We need the concrete HTML. We use Form because it is the first element in our template
    this.formElement = importedNode.firstElementChild as HTMLFormElement;
    // Then add to the dom.
    this.attach();
  }


  private attach() {
    // @'afterbegin' - 1 of 4 position options.
  this.domRoot.insertAdjacentElement('afterbegin', this.formElement)   
  }

}

const project = new ProjectInput();
