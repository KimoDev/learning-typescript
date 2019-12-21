"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// typescript does not know about the nodejs require function. Hence, we need to install @types/node
// const express = require('express');
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
// middleware
app.use('/todos', todos_1.default);
// error handling middleware function
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
