const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5001;

app.listen(5001);
