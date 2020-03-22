import React from 'react';
import moment from 'moment';

const EventItem = props => {
	const {
		eventName,
		startDate,
		endDate,
		isAllDay,
		description,
		location,
		color
	} = props.event;

	const dateStartDate = moment(startDate).format('DD/MM/YYYY');
	const dateEndDate = moment(endDate).format('DD/MM/YYYY');
	const timeStartDate = moment(startDate).format('TL');
	const timeEndDate = moment(endDate).format('TL');

	const isAllDayEvent = () => {
		if (isAllDay) {
			return <h5 className='card-subtitle'>{dateStartDate}</h5>;
		} else {
			return (
				<>
					<h5 className='card-subtitle'>
						{dateStartDate} - {dateEndDate}
					</h5>
					<h6 className='card-subtitle mb-2 text-muted'>
						{timeStartDate} - {timeEndDate}
					</h6>
				</>
			);
		}
	};

	return (
		<div
			className='card'
			style={{ borderLeft: '4px', borderColor: `${color}` }}
		>
			<div className='card-header'>
				<h4 className='card-title'>{eventName}</h4>
				<isAllDayEvent />
			</div>
			<div className='card-body'>{description}</div>
			<div className='card-footer'>{location}</div>
		</div>
	);
};

export default EventItem;
