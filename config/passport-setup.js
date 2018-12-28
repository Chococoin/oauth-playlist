const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GithubStrategy = require('passport-github2');

passport.use(
	new GoogleStrategy({
	// option for the google strategy
	}), () =>{
	// passport callback function
	}
);

passport.use(
	new GithubStrategy({
	// option for the github strategy	
	}), () => {
	// passpor callback function
	}
);
