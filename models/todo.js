// importing the mongoose module
const {Schema, model} = require('../db/connection');

// Define Schema

const TodoSchema = new Schema({
    reminder: String,
    completed: Boolean,
    createdAt: Date,
    

    

});

// Define Model

const Todo = model('Todo', TodoSchema);

// Export Model

module.exports = Todo;