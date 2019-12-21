// Instead of constantly importing these types for our functions. There is a shorter way by just defining the type of function.
// import { Request, Response, NextFunction } from 'express'; 
// Much more simpler import.
import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

// To store dummy data. In a real application, we would use a database such as MongoDB or Firebases (firestore).
const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Created the todo.', createTodo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
  // send back all the todos. other logic could include filtering or sorting.
  res.json({todos: TODOS});
}
// Generic type used here for better type support when working with params.
export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
  // store the id of the todo we wish to update.
  const todoId = req.params.id;
  // we use type casting here to tell ts that there will be a text property in the body of type string.
  const updatedText = (req.body as {text: string}).text;

  // find the relevant todo in the array/database we wish to update and store it.
  const todoIndex = TODOS.findIndex(todo => todoId === todo.id);

  if (todoIndex < 0) {
    throw new Error("could not find todo");
  }
  // update the correct located todo with a new todo with the same id as before, but with the updatedt text content
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  // send back json data with a message to show that the todo was updated. As well as the updated version of the todo.
  res.json({message: "Updated todo!", updatedTodo: TODOS[todoIndex]});
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  // Retrieve and store the id of the todo we wish to delete.
  const todoId = req.params.id;
  // retreive the correct todo object.
  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIndex<0) {
    throw new Error('Could not find todo!');
  }
  // remove the todo from the array/database.
  TODOS.splice(todoIndex, 1);
  // send back some json to let the user know that the todo has been deleted.
  res.json({message: 'todo deleted!'})
}