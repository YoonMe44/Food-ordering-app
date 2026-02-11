const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
router.post('/create-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        _id: req.body.userId
    });
    user.save((err, user) => {
        if(err){
            res.status(500).send({error: err.message});
        } else {
            res.status(200).send({data: user});
        }
    })
})

module.exports = router;