const mongoose = require('mongoose');

const SubTodoSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	isCompleted: {
		type: Boolean,
		default: false,
		required: true,
	},
});

module.exports = mongoose.model('subTodo', SubTodoSchema);
