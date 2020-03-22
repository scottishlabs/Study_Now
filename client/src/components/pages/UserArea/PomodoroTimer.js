import React from 'react';
import { NavBar, PomodoroTimerArea } from '../../';

const PomodoroTimer = () => {
	return (
		<>
			<NavBar className='navbar' content={PomodoroTimerArea} />
		</>
	);
};

export default PomodoroTimer;
