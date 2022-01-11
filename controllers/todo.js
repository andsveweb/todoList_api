const Todo = require('../models/todo');
const {Router} = require('express');


// Error handling
const handleError = (err, res) => {
    res
        .status(500)
        .json({
            message: err.message,
            error: err
        });
};

// Create router
const router = Router();

// index route - GET /todos
// Returns all todos

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        handleError(err, res);
    }
});

// Show single todo - GET /todos/:id
router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (err) {
        handleError(err, res);
    }
});

// Create todo - POST /todos
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.json(todo);
    } catch (err) {
        handleError(err, res);
    }
});

// Update todo - PUT /todos/:id
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(todo);
    } catch (err) {
        handleError(err, res);
    }
});

// Delete todo - DELETE /todos/:id
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({message: 'Todo deleted'});
    } catch (err) {
        handleError(err, res);
    }
});






module.exports = router;