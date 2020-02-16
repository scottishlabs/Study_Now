import React, { Fragment } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

const CalendarArea = () => {
	const [state, setState] = React.useState({
		calendarEvents: [{ title: 'Event Now', start: new Date() }]
	});

	const calendarComponentRef = React.createRef();

	const handleDateClick = arg => {};

	return (
		<Fragment>
			<div>
				<FullCalendar
					defaultView='dayGridMonth'
					header={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
					}}
					plugins={[
						dayGridPlugin,
						timeGridPlugin,
						interactionPlugin,
						listPlugin
					]}
					ref={calendarComponentRef}
					weekends={state.calendarWeekends}
					events={state.calendarEvents}
					dateClick={handleDateClick}
					selectable='true'
					unselectAuto='true'
				/>
			</div>
		</Fragment>
	);
};

export default CalendarArea;
