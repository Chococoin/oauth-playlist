const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GithubStrategy = require('passport-github2');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
	new GoogleStrategy({
	// option for the google strategy
	clientID: keys.google.clientID,
	clientSecret: keys.google.clientSecret,
	callbackURL: "/auth/google/redirect"
	}, (accessToken, refreshToken, profile, done) =>{
	// check is user already exists in our db
	User.findOne({ googleId: profile.id })
	.then((currentUser) => {
		if(!currentUser){
			new User({
				username: profile.displayName,
				googleId: profile.id
			}).save()
			  .then((newUser)=>{
				console.log('New User created: ' + newUser);
			});
		} else {
			console.log('User already exists as ' + currentUser)
		}
	})	
}));

passport.use(
	new GithubStrategy({
	// option for the github strategy
	clientID: keys.github.clientID,
	clientSecret: keys.github.clientSecret,	
	callbackURL: "/auth/github/redirect"
	}, () => {
	// passport callback function
	console.log('passport callback function fired');
	}
));
