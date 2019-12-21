"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
// get a todo
router.get('/', () => {
    console.log('get root hit');
});
// add a todo
router.post('/', todos_1.createTodo);
// update/modify a todo
router.patch('/:id');
// delete/remove a todo
router.delete('/');
exports.default = router;
