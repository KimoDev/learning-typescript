import { Router } from 'express';

const router = Router();

// get a todo
router.get('/');

// add a todo
router.post('/');

// update/modify a todo
router.patch('/:id');

// delete/remove a todo
router.delete('/');

export default router;