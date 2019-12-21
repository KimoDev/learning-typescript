"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
// get a todo
router.get('/', todos_1.getTodos);
// add a todo
router.post('/', todos_1.createTodo);
// update/modify a todo
router.patch('/:id', todos_1.updateTodo);
// delete/remove a todo
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
