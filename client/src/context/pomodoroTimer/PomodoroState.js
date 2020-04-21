import React, { useReducer } from 'react';
import PomodoroContext from './pomodoroContext';
import pomodoroReducer from './pomodoroReducer';
import {
	GET_POMODORO,
	UPDATE_POMODORO_TIME,
	UPDATE_BREAK_TIME,
	UPDATE_LONG_BREAK_TIME,
} from '../types';

const PomodoroState = (props) => {
	const initialState = {
		pomodoroTime: 25,
		breakTime: 5,
		longBreakTime: 30,
	};

	const [state, dispatch] = useReducer(pomodoroReducer, initialState);

	//Get Pomodoro Settings

	//Update Pomodoro Settings and dispatches to reducer
	const updatePomodoroTime = (settings) => {
		dispatch({ type: UPDATE_POMODORO_TIME, payload: settings });
	};
	const updateBreakTime = (settings) => {
		dispatch({ type: UPDATE_BREAK_TIME, payload: settings });
	};
	const updateLongBreakTime = (settings) => {
		dispatch({ type: UPDATE_LONG_BREAK_TIME, payload: settings });
	};

	// This is the provider that provides the context to its children including any methods and state
	return (
		<PomodoroContext.Provider
			value={{
				pomodoroTime: state.pomodoroTime,
				breakTime: state.breakTime,
				longBreakTime: state.longBreakTime,
				updatePomodoroTime,
				updateBreakTime,
				updateLongBreakTime,
			}}
		>
			{props.children}
		</PomodoroContext.Provider>
	);
};

export default PomodoroState;
