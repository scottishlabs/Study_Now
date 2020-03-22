import React from 'react';
import { NavBar, CalendarArea } from '../../';

const Calendar = () => {
	return (
		<>
			<NavBar className='navbar' content={CalendarArea} />
		</>
	);
};

export default Calendar;
