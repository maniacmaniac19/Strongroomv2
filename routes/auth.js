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

    router.post("/login", (req, res) => {
        const  errors ={};
      
        // Set values for email and password
        const username = req.body.username;
        const password = req.body.password;
      
        // Find User by email
        db.Users.findOne({ username: username }).then(user => {
          // If user isn't found
          if (!user) {
            errors.username = "User not found";
            return res.status(404).json(errors);
          }

        
          
          // Check password
          bcrypt.compare(password, user.password, (err, response) => {
              console.log(response);
            if (response) {
                
              // If the user is matched, add a token
              return res.json(user);
              
            } else {
              errors.password = "Password Incorrect";
              return res.status(400).json(errors);
            }
          });
        });
      });





    // router.post('/login', passport.authenticate('local',{
    //     failureRedirect:'/login',
    //     successRedirect:'/landing'
    // }),(req, res) =>{
    //     console.log('something else')
    // });
    return router;




    
}