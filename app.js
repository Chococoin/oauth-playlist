const express = require('express');

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res)=> {
	res.render('home');
});

app.listen(8000, ()=>{
	console.log('app now listen for requests on port 8000');

})