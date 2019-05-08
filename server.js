const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.send('<h2>Coding up an API from scratch</h2>')
})

module.exports = server;

