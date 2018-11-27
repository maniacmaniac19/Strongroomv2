const express = require('express');
const router = express.Router();
const db = require('../models/index')
const passport = require('passport')
const bcrypt = require('bcrypt')

module.exports = (passport) => {

    router.post('/users', (req, res) => {
        const data = req.body;
        username = data.username;
        // password = db.Users.hashPassword(data.password);
        password = data.password;
        console.log(data);
        db.Users.create({username: username, password : password})
        .then(data =>{
            console.log(data)
            res.status(200).json({
                data: data
            })
        })
        .catch(err =>{
            res.status(500).json({
                error: err
            })
        });
    });







    router.post('/login', passport.authenticate('local',{
        failureRedirect:'/login',
        successRedirect:'/landing'
    }),(req, res) =>{
        console.log('something else')
    });
    return router;




    
}