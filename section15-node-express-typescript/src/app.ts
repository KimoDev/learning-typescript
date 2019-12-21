// typescript does not know about the nodejs require function. Hence, we need to install @types/node
// const express = require('express');
import express from 'express';

const app = express();

app.listen(3000)