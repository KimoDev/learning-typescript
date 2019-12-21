// Instead of constantly importing these types for our functions. There is a shorter way by just defining the type of function.
// import { Request, Response, NextFunction } from 'express'; 
// Much more simpler import.
import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Created the todo.', createTodo: newTodo});
};