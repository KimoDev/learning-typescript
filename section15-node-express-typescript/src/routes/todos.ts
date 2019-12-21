import { Router } from 'express';

import { createTodo } from '../controllers/todos';
const router = Router();

// get a todo
router.get('/', () => {
  console.log('get root hit');
});

// add a todo
router.post('/', createTodo);

// update/modify a todo
router.patch('/:id');

// delete/remove a todo
router.delete('/');

export default router;