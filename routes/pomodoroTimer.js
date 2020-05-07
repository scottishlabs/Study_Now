const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Pomodoro = require('../models/Pomodoro');

// @route    GET api/pomodoroTimer
// @desc     Get all users pomodoroTimer
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const pomodoro = await Pomodoro.find({ user: req.user.id });
		res.json(pomodoro);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});

// @route    PUT api/pomodoroTimer/:id
// @desc     Update pomodoroTimer
// @access   Private
router.put('/:id', auth, async (req, res) => {
	const { pomodoroTime, breakTime, longBreakTime } = req.body;

	const pomodoroFields = {};
	if (pomodoroTime) pomodoroFields.pomodoroTime = pomodoroTime;
	if (breakTime) pomodoroFields.breakTime = breakTime;
	if (longBreakTime) pomodoroFields.longBreakTime = longBreakTime;

	try {
		let pomodoro = await Pomodoro.findById(req.params.id);

		if (!pomodoro) {
			return res.status(404).json({ msg: 'FAILURE! ... Pomodoro Not Found' });
		}

		if (pomodoro.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'FAILURE! .. Not Authorised' });
		}

		pomodoro = await Pomodoro.findByIdAndUpdate(
			req.params.id,
			{ $set: pomodoroFields },
			{ new: true }
		);

		res.json(pomodoro);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('FAILURE! ... Server Error');
	}
});
