import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// A contsant variable that stores/executes a function.
// React.FC is a custom type that is a Functional Component interface. Also have has ClassicalComponet for classes.
const App: React.FC = () => {
  const todos =[{id: 't1', text: 'Finish the course'}]

  // pointer function passed down as props to NewTodo component.
  const todoAddHandler = (text: string) => {
    console.log(text);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
