import React from 'react';
import PomodoroTimer from './PomodoroTimer';
import './PomodoroTimer.css';

const PomodoroTimerArea = () => {
	return (
		<div className='container-fluid wrapper row'>
			<PomodoroTimer />
		</div>
	);
};

export default PomodoroTimerArea;
