const express = require('express');

const postRouter = express.Router();

const posts = require('./data/helpers/postDb');

/*****************************************************************************************/
postRouter.get('/', (req,res) => {
    posts.get()
    .then( posts => {
        res.status(200).json(posts);
    })
    .catch( err => {
        res.status(500).json(err);
    })
})
/*****************************************************************************************/
postRouter.get('/:id', (req,res) => {
    const postID = req.params.id;
    posts.getById(postID)
    .then( post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({error : `post with id #: ${postID} could not be found`})
        }
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    })
})
/*****************************************************************************************/





module.exports = postRouter;
