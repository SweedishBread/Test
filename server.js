const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const DiscordStrategy = require('passport-discord').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('./src/models/User'); // Import your User model

require('dotenv').config();

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://encespprt:p2OGxYmItlzV8DJi@cluster1.i5zttvo.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Local strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// Discord strategy
passport.use(new DiscordStrategy({
  clientID: '1154234576328208525',
  clientSecret: 'Rjx02LdmSoPOUcIiYFRqsNVlwktenK9Y',
  callbackURL: 'https://discord.com/api/oauth2/authorize?client_id=1154234576328208525&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord%2Fcallback&scope=identify+email+guilds.join+guild',
  scope: ['identify', 'email', 'guilds', 'guilds.join'],
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ discordId: profile.id }, function(err, user) {
    return cb(err, user);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Routes
app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', {
  failureRedirect: '/'
}), function(req, res) {
  res.redirect('/dashboard'); // Successful auth
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});