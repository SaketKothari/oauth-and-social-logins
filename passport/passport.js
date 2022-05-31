const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: 'AClientIdGoesHere',
      clientSecret: 'AClientSecretGoesHere',
      callbackURL: 'http://localhost:4000/auth/google/callback',
    },
    () => {
      //   callback
    }
  )
);
