import React from 'react';
import moment from 'moment';

const EventItem = ({ event }) => {
	return (
		<div
			className='badge badge-light border w-100 font-weight-normal text-capitalize text-truncate'
			onClick={() => console.log('Hello')}
		>
			{event.title && event.title}
			{event.name && event.name}
		</div>
	);
};

export default EventItem;
