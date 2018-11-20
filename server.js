const express = require("express");
const mongoose = require("mongoose");
const app = express();
const passport = require('passport');
const PORT = process.env.PORT || 3001;
const session = require('express-session')
require('dotenv').config();
require('./passport')(passport)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const routes = require('./routes/api-routes');
const auth = require('./routes/auth')(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use(auth);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/strngrm_db");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });