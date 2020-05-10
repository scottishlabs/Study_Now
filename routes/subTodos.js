const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const SubTodo = require('../models/SubTodo');

// @route    GET api/subTodos
// @desc     Get all users subTodos
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const subTodos = await SubTodo.find({ user: req.user.id });
		res.json(subTodos);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    POST api/subTodos
// @desc     Add new subTodo
// @access   Private
router.post(
	'/',
	[auth, [check('name', 'Name is required!').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, isCompleted, subTodoId } = req.body;

		try {
			const newSubTodo = new SubTodo({
				name,
				isCompleted,
				subTodoId,
				user: req.user.id,
			});

			const subTodo = await newSubTodo.save();

			res.json(subTodo);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('FAILURE! ... Server Error');
		}
	}
);

// @route    PUT api/subTodos/:id
// @desc     Update subTodo
// @access   Private
router.put('/:id', auth, async (req, res) => {
	const { name, isCompleted } = req.body;

	const subTodoFields = {};
	if (name) subTodoFields.name = name;
	if (typeof isCompleted !== 'undefined')
		subTodoFields.isCompleted = isCompleted;

	try {
		let subTodo = await SubTodo.findById(req.params.id);

		if (!subTodo) {
			return res.status(404).json({ msg: 'FAILURE! ... SubTodo Not Found' });
		}

		if (subTodo.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}

		subTodo = await SubTodo.findByIdAndUpdate(
			req.params.id,
			{ $set: subTodoFields },
			{ new: true }
		);

		res.json(subTodo);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    DELETE api/subTodos/:id
// @desc     Delete subTodo
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let subTodo = await SubTodo.findById(req.params.id);

		if (!subTodo) {
			return res.status(404).json({ msg: 'FAILURE! ... SubTodo Not Found' });
		}

		if (subTodo.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}
		await SubTodo.findByIdAndRemove(req.params.id);

		res.json({ msg: 'SubTodo Removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

module.exports = router;
