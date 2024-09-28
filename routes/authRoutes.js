app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// google OAuth callback (after login) route handler
app.get('/auth/google/callback', passport.authenticate('google'));
