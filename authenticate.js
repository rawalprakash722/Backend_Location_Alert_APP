var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());