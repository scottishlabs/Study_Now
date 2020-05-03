import React, { useContext } from 'react';
import EventsViewItem from './EventsViewItem';
import EventContext from '../../../../context/events/eventContext';

const EventsView = ({ date }) => {
	const eventContext = useContext(EventContext);
	const {
		events,
		current,
		addEvent,
		editEvent,
		deleteEvent,
		setCurrentEvent,
		clearCurrentEvent,
	} = eventContext;

	const currentEventsFilter = () => {
		return events.filter(
			(event) =>
				date >= getDateOnly(event.start) && date <= getDateOnly(event.end)
		);
	};

	const getDateOnly = (currentDate) => {
		return new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate()
		);
	};

	const currentEvents = currentEventsFilter();

	return (
		<div>
			{currentEvents.map((event) => (
				<EventsViewItem key={event.id} event={event} />
			))}
		</div>
	);
};

export default EventsView;
