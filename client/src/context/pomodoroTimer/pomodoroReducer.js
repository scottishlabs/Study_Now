import {
	GET_POMODORO,
	RESET_POMODORO,
	UPDATE_POMODORO_TIME,
	UPDATE_BREAK_TIME,
	UPDATE_LONG_BREAK_TIME,
} from '../types';

// Takes type enum form props and switches between them and enacts the update to state by payload
export default (state, action) => {
	switch (action.type) {
		case GET_POMODORO:
			return state;
		case UPDATE_POMODORO_TIME:
			return {
				pomodoroTime: action.payload.payload,
				breakTime: state.breakTime,
				longBreakTime: state.longBreakTime,
			};
		case UPDATE_BREAK_TIME:
			return {
				pomodoroTime: state.pomodoroTime,
				breakTime: action.payload.payload,
				longBreakTime: state.longBreakTime,
			};
		case UPDATE_LONG_BREAK_TIME:
			return {
				pomodoroTime: state.pomodoroTime,
				breakTime: state.breakTime,
				longBreakTime: action.payload.payload,
			};
		default:
			return state;
	}
};
