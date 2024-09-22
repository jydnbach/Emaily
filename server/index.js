const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
// environment variable
app.listen(PORT);
