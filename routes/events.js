const express = require('express');
const router = express.Router();

// @route    GET api/events
// @desc     Get all users events
// @access   Private
router.get('/', (req, res) => {
	res.send('Get all events');
});

// @route    POST api/events
// @desc     Add new event
// @access   Private
router.post('/', (req, res) => {
	res.send('Add event');
});

// @route    PUT api/events/:id
// @desc     Update event
// @access   Private
router.put('/:id', (req, res) => {
	res.send('Update event');
});

// @route    DELETE api/events/:id
// @desc     Delete event
// @access   Private
router.delete('/:id', (req, res) => {
	res.send('Delete event');
});

module.exports = router;
