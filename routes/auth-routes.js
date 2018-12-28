const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
	res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
	// handle with passport
	res.send('logging out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

// callback auth redirect google
router.get('/google/redirect', (req, res) => {
	res.render('login');
});

// auth with github
router.get('/github', passport.authenticate('github', {
	scope: ['profile']
}));

// callback auth redirect github
router.get('/github/redirect', (req, res) => {
	res.render('login');
});

module.exports = router;