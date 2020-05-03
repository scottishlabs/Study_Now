const express = require('express');
const router = express.Router();

// @route    GET api/pomodoroTimer
// @desc     Get all users pomodoroTimer
// @access   Private
router.get('/', (req, res) => {
	res.send('Get all pomodoroTimer');
});

// @route    PUT api/pomodoroTimer/:id
// @desc     Update pomodoroTimer
// @access   Private
router.put('/:id', (req, res) => {
	res.send('Update pomodoroTimer');
});
