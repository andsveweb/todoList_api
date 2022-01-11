require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const TodoRouter = require('./controllers/todo');



// Variables
const PORT = process.env.PORT || 3000;


// Creat object for express

const app = express();

// Middleware

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



//Routes


app.get('/', (req, res) => res.send('Hello World!'));
app.use("/todos", TodoRouter);


// Server listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));