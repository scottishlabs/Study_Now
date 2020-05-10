const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Event = require('../models/Event');

// @route    GET api/events
// @desc     Get all users events
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const events = await Event.find({ user: req.user.id });
		res.json(events);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    POST api/events
// @desc     Add new event
// @access   Private
router.post(
	'/',
	[auth, [check('title', 'Title is required!').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { start, end, title, description } = req.body;

		try {
			const newEvent = new Event({
				start,
				end,
				title,
				description,
				user: req.user.id,
			});

			const event = await newEvent.save();

			res.json(event);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('FAILURE! ... Server Error');
		}
	}
);

// @route    PUT api/events/:id
// @desc     Update event
// @access   Private
router.put('/:id', auth, async (req, res) => {
	const { start, end, title, description } = req.body;

	const eventFields = {};
	if (title) eventFields.title = title;
	if (start) eventFields.start = start;
	if (end) eventFields.end = end;
	if (description) eventFields.description = description;

	try {
		let event = await Event.findById(req.params.id);

		if (!event) {
			return res.status(404).json({ msg: 'FAILURE! ... Event Not Found' });
		}

		if (event.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}

		event = await Event.findByIdAndUpdate(
			req.params.id,
			{ $set: eventFields },
			{ new: true }
		);

		res.json(event);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    DELETE api/events/:id
// @desc     Delete event
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let event = await Event.findById(req.params.id);

		if (!event) {
			return res.status(404).json({ msg: 'FAILURE! ... Event Not Found' });
		}

		if (event.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}
		await Event.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Event Removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

module.exports = router;
