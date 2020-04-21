import React from 'react';
import { NavBar, CalendarArea } from '../../';

// Renders the calendar page
const Calendar = () => {
	return (
		<>
			<NavBar className='navbar' content={CalendarArea} />
		</>
	);
};

export default Calendar;
