const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Dotenv config
dotenv.config();

//Connect DB
mongoose.connect(
	process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Connected to DB!')
);

let conn = mongoose.connection;

module.exports = conn;

