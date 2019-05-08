const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

const server = express();

server.get('/', (req,res) => {
    res.send('<h2>Coding up an API from scratch</h2>')
})

server.use('/users',userRouter);
server.use('/posts', postRouter);

module.exports = server;

