import React from 'react';
import { NavBar, PomodoroTimerArea } from '../../';

// Renders the pomodoro timer page
const PomodoroTimer = () => {
	return (
		<>
			<NavBar className='navbar' content={PomodoroTimerArea} />
		</>
	);
};

export default PomodoroTimer;
