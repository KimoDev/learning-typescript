"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// get a todo
router.get('/');
// add a todo
router.post('/');
// update/modify a todo
router.patch('/:id');
// delete/remove a todo
router.delete('/');
exports.default = router;
