const express = require('express');

const RecipesRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());

server.use('/recipes', RecipesRouter);

module.exports = server;