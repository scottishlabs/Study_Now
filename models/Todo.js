const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubTodoSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	datePosted: {
		type: Date
	},
	dateEnd: {
		type: Date
	},
	completed: {
		type: Boolean
	}
});

const TodoSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	title: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		default: ''
	},
	datePosted: {
		type: Date,
		default: Date.now
	},
	dateEnd: {
		type: Date,
		default: Date.now
	},
	priority: {
		type: Number,
		default: 0
	},
	tags: {
		type: [String]
	},
	subTodos: {
		type: [SubTodoSchema],
		default: []
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('todo', TodoSchema);
