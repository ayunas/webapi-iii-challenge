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
/*****************************************************************************************/
userRouter.post('/', (req,res) => {
    console.log(req.body);
    users.insert(req.body)
    .then( newUser => {
        res.status(201).json(newUser);
    })
    .catch( err => {
        res.status(500).json({error : 'error adding new user'});
    })
})
/*****************************************************************************************/
userRouter.delete('/:id', (req,res) => {
    const userID = req.params.id;
    users.remove(userID)
    .then( delCount => {
        if (delCount > 0) {
            res.status(204).json({message : `The user with id #: ${userID} has been deleted`})
        } else {
            res.status(404).json({message : `the user with id ${userID} could not be found`})
        }
    })
    .catch( err => {
        res.status(500).json({message : `error deleting user with id: ${userID}`})
    })
})
/*****************************************************************************************/
userRouter.put('/:id', (req,res) => {
    const userID = req.params.id;
    const changes = req.body;
    users.update(userID, changes)
    .then( updateCount => {
        if (updateCount > 0) {
            res.status(200).send(`the user with id #: ${userID} has been updated`);
        } else {
            res.status(404).json({ error : `the user with id ${userID} could not be updated`});
        }
    })
})



module.exports = userRouter;
