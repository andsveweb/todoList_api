require("dotenv").config();
const mongoose = require('mongoose');


// variables

const DATABASE_URL = process.env.DATABASE_URL;
const config = {useUnifiedTopology: true, useNewUrlParser: true};


// connect to database

mongoose.connect(DATABASE_URL, config);


// Message to console


mongoose.connection
.on('connected', () => {
    console.log('Mongoose is connected to ' + DATABASE_URL);
})
.on('close', () => {
    console.log('Mongoose is disconnected');
})
.on('error', (err) => {;
    console.log('Mongoose connection error: ' + err);
});

module.exports = mongoose;