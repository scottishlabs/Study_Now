const express = require('express');
const router = express.Router();

// @route    GET api/subTodos
// @desc     Get all users subTodos
// @access   Private
router.get('/', (req, res) => {
	res.send('Get all subTodos');
});

// @route    POST api/subTodos
// @desc     Add new subTodo
// @access   Private
router.post('/', (req, res) => {
	res.send('Add subTodo');
});

// @route    PUT api/subTodos/:id
// @desc     Update subTodo
// @access   Private
router.put('/:id', (req, res) => {
	res.send('Update subTodo');
});

// @route    DELETE api/subTodos/:id
// @desc     Delete subTodo
// @access   Private
router.delete('/:id', (req, res) => {
	res.send('Delete subTodo');
});

module.exports = router;
