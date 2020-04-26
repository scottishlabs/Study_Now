import React from 'react';
import NavBar from '../../layout/UserArea/NavBar';
import PomodoroTimerArea from '../../layout/UserArea/Pomodoro/PomodoroTimerArea';

// Renders the pomodoro timer page
const PomodoroTimer = () => {
	return (
		<>
			<NavBar className='navbar' content={PomodoroTimerArea} />
		</>
	);
};

export default PomodoroTimer;
