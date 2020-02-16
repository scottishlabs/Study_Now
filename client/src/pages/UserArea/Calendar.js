import React, { Fragment } from 'react';

import { NavBar, CalendarArea, EventsArea } from '../../components';

const Calendar = () => {
	return (
		<Fragment>
			<NavBar />
			<div className='container mt-5'>
				<CalendarArea />
			</div>
		</Fragment>
	);
};

export default Calendar;
