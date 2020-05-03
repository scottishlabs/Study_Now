const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	start: {
		type: Date,
		default: Date.now,
		required: true,
	},
	end: {
		type: Date,
		default: Date.now,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: '',
	},
});

module.exports = mongoose.model('event', EventSchema);
