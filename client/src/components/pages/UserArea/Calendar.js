import React from 'react';
import NavBar from '../../layout/UserArea/NavBar';
import CalendarArea from '../../layout/UserArea/Calendar/CalendarArea';

// Renders the calendar page
const Calendar = () => {
	return (
		<>
			<NavBar className='navbar' content={CalendarArea} />
		</>
	);
};

export default Calendar;
