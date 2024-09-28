const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

const PORT = process.env.PORT || 5001;
app.listen(5001);
