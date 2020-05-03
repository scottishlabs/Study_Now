import React, { useContext } from 'react';
import EventItem from './EventItem';
import EventContext from '../../../../context/events/eventContext';
import TodoContext from '../../../../context/todo/todoContext';

const Events = ({ date, isDisabled }) => {
	const eventContext = useContext(EventContext);
	const {
		events,
		current,
		addEvent,
		updateEvent,
		deleteEvent,
		setCurrentEvent,
		clearCurrentEvent,
	} = eventContext;

	const todoContext = useContext(TodoContext);
	const { todos } = todoContext;

	const datesAreOnSameDay = (first, second) =>
		first.getFullYear() === second.getFullYear() &&
		first.getMonth() === second.getMonth() &&
		first.getDate() === second.getDate();

	const currentEventsFilter = () => {
		return events.filter(
			(event) =>
				date >= getDateOnly(event.start) && date <= getDateOnly(event.end)
		);
	};

	const currentTodosFilter = () => {
		return todos.filter((todo) => datesAreOnSameDay(date, todo.deadline));
	};

	const getDateOnly = (currentDate) => {
		return new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate()
		);
	};

	const currentEvents = currentEventsFilter();
	const currentTodos = currentTodosFilter();

	return (
		<div
			className={`dateEvents d-none d-md-block  ${
				isDisabled ? 'disabled' : ''
			}`}
		>
			{currentEvents.map((event) => (
				<EventItem key={event.id} event={event} />
			))}
			{currentTodos.map((event) => (
				<EventItem key={event.id} event={event} />
			))}
		</div>
	);
};

export default Events;
