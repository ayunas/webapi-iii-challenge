const express = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const cors = require('cors');
// const bodyParser = require('body-parser');

const bodyParser = express.json();
const server = express();


server.use(bodyParser);
// server.use(cors);

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


server.get('/', (req,res) => {
    res.send('<h2>Coding up an API from scratch</h2>')
})

server.use('/users', userRouter);
server.use('/posts', postRouter);


module.exports = server;


