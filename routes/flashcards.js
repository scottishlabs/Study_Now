const express = require('express');
const router = express.Router();

// @route    GET api/flashcards
// @desc     Get all users/flashcards
// @access   Private
router.get('/', (req, res) => {
	res.send('Get all/flashcards');
});

// @route    POST api/flashcards
// @desc     Add new flashcard
// @access   Private
router.post('/', (req, res) => {
	res.send('Add flashcard');
});

// @route    PUT api/flashcards/:id
// @desc     Update flashcard
// @access   Private
router.put('/:id', (req, res) => {
	res.send('Update flashcard');
});

// @route    DELETE api/flashcards/:id
// @desc     Delete flashcard
// @access   Private
router.delete('/:id', (req, res) => {
	res.send('Delete flashcard');
});

module.exports = router;
