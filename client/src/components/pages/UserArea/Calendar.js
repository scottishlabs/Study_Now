import React, { useEffect, useContext } from 'react';
import NavBar from '../../layout/UserArea/NavBar';
import CalendarArea from '../../layout/UserArea/Calendar/CalendarArea';
import TodoContext from '../../../context/todo/todoContext';

// Renders the calendar page
// TODO: The calendar shows no events when in phone mode

const Calendar = () => {
	const todoContext = useContext(TodoContext);
	const { todos, getTodos } = todoContext;

	useEffect(() => {
		getTodos();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<NavBar className='navbar' content={CalendarArea} />
		</>
	);
};

export default Calendar;
