import React, { useState } from "react";
// import { Route } from 'react-router-dom'; A js module, but can install types for it using npm i --save-dev @types/react-router-dom

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

import { Todo } from "./todo.model";

// A contsant variable that stores/executes a function.
// React.FC is a custom type that is a Functional Component interface. Also have has ClassicalComponet for classes.
const App: React.FC = () => {
  // use a state of type - array of objects. These objects are defined by interface types
  const [todos, addTodo] = useState<Todo[]>([]);
  console.log(todos);
  // pointer function passed down as props to NewTodo component.
  const todoAddHandler = (text: string) => {
    // pass the previous state as a function (supported by react) and use the SPREAD op to update the array
    addTodo(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    addTodo(prevTodos => {
      // filter through the current todos state. 
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos}  onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
