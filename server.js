// Express.js server
const express = require('express');

// File system and path to write to file and work with directories
const fs = require('fs');
const path = require('path');

// JSON note data
const notes = require('./db/db.json');

// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

//Instantiating server (with ability to use Heroku port)
const app = express();
const PORT = process.env.PORT || 3001;

// Parsing incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public folder for static requests
app.use(express.static('public'));

//Defining routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });