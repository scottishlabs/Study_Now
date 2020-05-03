const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Todo = require('../models/Todo');
const User = require('../models/User');

// @route    GET api/todos
// @desc     Get all users todos
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const todos = await Todo.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(todos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    POST api/todos
// @desc     Add new todo
// @access   Private
router.post(
	'/',
	[auth, [check('title', 'Title is required!').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			title,
			desc,
			datePosted,
			dateEnd,
			priority,
			tags,
			subTodos,
			completed,
		} = req.body;
		try {
			const newTodo = new Todo({
				title,
				desc,
				datePosted,
				dateEnd,
				priority,
				tags,
				subTodos,
				completed,
				user: req.user.id,
			});

			const todo = await newTodo.save();

			res.json(todo);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('FAILURE! ... Server Error');
		}
	}
);

// @route    PUT api/todos/:id
// @desc     Update todo
// @access   Private
router.put('/:id', auth, async (req, res) => {
	const {
		title,
		desc,
		datePosted,
		dateEnd,
		priority,
		tags,
		subTodos,
		completed,
	} = req.body;

	const todoFields = {};
	if (title) todoFields.title = title;
	if (desc) todoFields.desc = desc;
	if (datePosted) todoFields.datePosted = datePosted;
	if (dateEnd) todoFields.dateEnd = dateEnd;
	if (priority) todoFields.title = priority;
	if (tags) todoFields.tags = tags;
	if (subTodos) todoFields.subTodos = subTodos;
	if (completed) todoFields.completed = completed;

	try {
		let todo = await Todo.findById(req.params.id);

		if (!todo) {
			return res.status(404).json({ msg: 'FAILURE! ... Todo Not Found' });
		}

		if (todo.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}
		todo = await Todo.findByIdAndUpdate(
			req.params.id,
			{ $set: todoFields },
			{ new: true }
		);

		res.json(todo);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    DELETE api/todos/:id
// @desc     Delete todo
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let todo = await Todo.findById(req.params.id);

		if (!todo) {
			return res.status(404).json({ msg: 'FAILURE! ... Todo Not Found' });
		}

		if (todo.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}
		await Todo.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Todo Removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

module.exports = router;
