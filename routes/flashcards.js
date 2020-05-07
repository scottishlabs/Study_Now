const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Flashcard = require('../models/SubTodo');

// @route    GET api/flashcards
// @desc     Get all users/flashcards
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const flashcards = await Flashcard.find({ user: req.user.id });
		res.json(flashcards);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    POST api/flashcards
// @desc     Add new flashcard
// @access   Private
router.post(
	'/',
	[
		auth,
		[
			check('title', 'Title is required!').not().isEmpty(),
			check('front', 'Front is required!').not().isEmpty(),
			check('back', 'Back is required!').not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, front, back } = req.body;

		try {
			const newFlashcard = new Flashcard({
				title,
				front,
				back,
				user: req.user.id,
			});

			const flashcard = await newFlashcard.save();

			res.json(flashcard);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('FAILURE! ... Server Error');
		}
	}
);

// @route    PUT api/flashcards/:id
// @desc     Update flashcard
// @access   Private
router.put('/:id', auth, async (req, res) => {
	const { title, front, back } = req.body;

	const flashcardFields = {};
	if (title) flashcardFields.title = title;
	if (front) flashcardFields.front = front;
	if (back) flashcardFields.back = back;

	try {
		let flashcard = await Flashcard.findById(req.params.id);

		if (!flashcard) {
			return res.status(404).json({ msg: 'FAILURE! ... Flashcard Not Found' });
		}

		if (flashcard.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}

		flashcard = await Flashcard.findByIdAndUpdate(
			req.params.id,
			{ $set: flashcardFields },
			{ new: true }
		);

		res.json(flashcard);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    DELETE api/flashcards/:id
// @desc     Delete flashcard
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let flashcard = await Flashcard.findById(req.params.id);

		if (!flashcard) {
			return res.status(404).json({ msg: 'FAILURE! ... Flashcard Not Found' });
		}

		if (flashcard.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}
		await Flashcard.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Flashcard Removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

module.exports = router;
