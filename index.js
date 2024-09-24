const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile:', profile);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// google OAuth callback (after login) route handler
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5001;
app.listen(5001);
