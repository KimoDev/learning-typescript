import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';
const router = Router();

// get a todo
router.get('/', getTodos)

// add a todo
router.post('/', createTodo);

// update/modify a todo
router.patch('/:id', updateTodo);

// delete/remove a todo
router.delete('/:id', deleteTodo);

export default router;