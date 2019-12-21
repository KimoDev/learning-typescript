"use strict";
exports.__esModule = true;
// typescript does not know about the nodejs require function. Hence, we need to install @types/node
// const express = require('express');
var express_1 = require("express");
var app = express_1["default"]();
app.listen(3000);
