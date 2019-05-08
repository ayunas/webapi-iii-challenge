const express = require('express');

const users = require('./data/helpers/userDb');

const userRouter = express.Router();

userRouter.get('/', (req,res) => {
    users.get()
    .then( users => {
        res.status(200).json(users);
    })
    .catch( err => {
        console.log('error retrieving users from the database', err);
        res.status(500).json({error : err})
    })
})

module.exports = userRouter;
