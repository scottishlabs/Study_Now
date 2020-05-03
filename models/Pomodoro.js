const mongoose = require('mongoose');

const PomodoroSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	pomodoroTime: {
		type: Number,
		required: true,
		default: 25,
	},
	breakTime: {
		type: Number,
		required: true,
		default: 5,
	},
	longBreakTime: {
		type: Number,
		required: true,
		default: 30,
	},
});

module.exports = mongoose.model('pomodoro', PomodoroSchema);
