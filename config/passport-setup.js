const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GithubStrategy = require('passport-github2');
const keys = require('./keys');

passport.use(
	new GoogleStrategy({
	// option for the google strategy
	clientID: keys.google.clientID,
	clientSecret: keys.google.clientSecret,
	callbackURL: "/auth/google/redirect"
	}, () =>{
	// passport callback function
	}
));

passport.use(
	new GithubStrategy({
	// option for the github strategy
	clientID: keys.github.clientID,
	clientSecret: keys.github.clientSecret,	
	callbackURL: "/auth/github/redirect"
	}, () => {
	// passport callback function
	}
));
