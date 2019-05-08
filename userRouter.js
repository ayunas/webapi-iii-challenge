const express = require('express');

const users = require('./data/helpers/userDb');

const userRouter = express.Router();

/*****************************************************************************************/
userRouter.get('/', (req,res) => {
    users.get()
    .then( users => {
        res.status(200).json(users);
    })
    .catch( err => {
        console.log('error retrieving users from the database', err);
        res.status(500).json({error : err});
    })
})
/*****************************************************************************************/
userRouter.get('/:id', (req,res) => {
    users.getById(req.params.id)
    .then( user => {
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({error : 'no user with that id found'})
        }
    })
    .catch( err => {
        console.log('error retrieving that user from the database', err);
        res.status(500).json({error : err});
    })
})





module.exports = userRouter;
