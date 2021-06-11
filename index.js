const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
const conn = require('./database')

// Set public path
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine as pug
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
	res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Get Everything
app.use('/get', (req, res) => {
	res.render('register', { title: 'Hey', message: 'Hello there!' });
});

//Import Routes
const router = require('./routes/register');
const get = require('./routes/get');
const update = require('./routes/update');
const delete_data = require('./routes/delete');

//Middleware
app.use(express.json());

//Route Middleware
app.use('/api/', router);
app.use('/api/', get);
app.use('/api/', update);
app.use('/api/', delete_data);


app.listen(5000, () => console.log('Server Up and Running'));