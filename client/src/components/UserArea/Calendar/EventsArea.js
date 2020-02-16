import React, { Fragment } from 'react';

const EventsArea = () => {
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	return (
		<Fragment>

		</Fragment>
	);
};

export default EventsArea;
