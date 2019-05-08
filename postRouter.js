const express = require('express');

const postRouter = express.Router();

const posts = require('./data/helpers/postDb');


postRouter.get('/', (req,res) => {
    posts.get()
    .then( posts => {
        res.status(200).json(posts);
    })
    .catch( err => {
        res.status(500).json(err);
    })
})

module.exports = postRouter;
