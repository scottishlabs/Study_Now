const mongoose = require('mongoose');

const FlashcardSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	title: {
		type: String,
		required: true,
	},
	front: {
		type: String,
		required: true,
	},
	back: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('flashcard', FlashcardSchema);
