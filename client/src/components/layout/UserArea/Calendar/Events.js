import React, { useState } from 'react';
import EventItem from './EventItem';

const Events = () => {
	const [events, setEvents] = useState([
		{
			id: 1,
			eventName: 'Hello',
			startDate: new Date(),
			endDate: new Date(),
			isAllDay: false,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sapiente ex a tempora ipsa dolorem architecto delectus eius iste, in tenetur fugiat quaerat earum accusantium, rem autem harum ducimus debitis.',
			location: 'Here',
			color: 'blue'
		},
		{
			id: 2,
			eventName: 'World',
			startDate: new Date(),
			endDate: new Date(),
			isAllDay: true,
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sapiente ex a tempora ipsa dolorem architecto delectus eius iste, in tenetur fugiat quaerat earum accusantium, rem autem harum ducimus debitis.',
			location: 'There',
			color: 'red'
		}
	]);

	return (
		<div>
			{events.map(event => (
				<EventItem key={event.id} event={event} />
			))}
		</div>
	);
};

export default Events;
