import React, { useContext } from 'react';
import moment from 'moment';
import EventContext from '../../../../context/events/eventContext';

const EventsViewItem = ({ event }) => {
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

	return (
		<div className='card text-dark my-2'>
			<div className='card-body'>
				<div className='row p-0'>
					<div className='col p-0'>
						<h4 className='float-left pt-2'>{event.title}</h4>
					</div>
					<div className='col p-0'>
						<div className='float-right'>
							<div
								className=' btn py-2 mr-2'
								onClick={() => setCurrentEvent(event)}
							>
								<i className='fas fa-edit'></i>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<p className='card-text'>
					<strong>Start Date: </strong>
					{moment(event.start).format('LL')} <br />
					<strong>End Date: </strong>
					{moment(event.end).format('LL')}
					<br />
					<strong>Start Time: </strong>
					{moment(event.start).format('LTS')} <br />
					<strong>End Time: </strong>
					{moment(event.end).format('LTS')}
					<br />
					<strong>Description: </strong>
					{event.description}
				</p>
			</div>
		</div>
	);
};

export default EventsViewItem;
