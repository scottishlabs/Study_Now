import React, { useReducer } from 'react';
import PomodoroContext from './pomodoroContext';
import pomodoroReducer from './pomodoroReducer';

import { UPDATE_POMODORO_SETTINGS } from '../types';

const PomodoroState = (props) => {
	const initialState = {
		pomodoroSettings: { pomodoroTime: 25, breakTime: 5, longBreakTime: 30 },
	};

	const [state, dispatch] = useReducer(pomodoroReducer, initialState);

	//Update Pomodoro Settings and dispatches to reducer
	const updatePomodoroSettings = (settings) => {
		dispatch({
			type: UPDATE_POMODORO_SETTINGS,
			payload: settings,
		});
	};

	// This is the provider that provides the context to its children including any methods and state
	return (
		<PomodoroContext.Provider
			value={{
				pomodoroSettings: state.pomodoroSettings,
				updatePomodoroSettings,
			}}
		>
			{props.children}
		</PomodoroContext.Provider>
	);
};

export default PomodoroState;
