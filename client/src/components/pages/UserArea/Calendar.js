import React from 'react';
import NavBar from '../../layout/UserArea/NavBar';
import CalendarArea from '../../layout/UserArea/Calendar/CalendarArea';

// Renders the calendar page
// TODO: The calendar shows no events when in phone mode

const Calendar = () => {
	return (
		<>
			<NavBar className='navbar' content={CalendarArea} />
		</>
	);
};

export default Calendar;
