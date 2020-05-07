import React, { useState } from 'react';
import moment from 'moment';
import './CalendarArea.css';
import AddEditArea from './AddEditArea';
import Events from './Events';

const CalendarArea = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [isAdd, setIsAdd] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const drawHeader = () => {
		return (
			<div className='header row flex-middle'>
				<div className='col col-start'>
					<div
						className='fas fa-chevron-left icon'
						onClick={() => {
							prevMonth();
						}}
					/>
				</div>
				<div className='col col-center'>
					<span>{moment(currentMonth).format('MMMM YYYY').toString()}</span>
				</div>
				<div
					className='col col-end'
					onClick={() => {
						nextMonth();
					}}
				>
					<div className='fas fa-chevron-right icon' />
				</div>
			</div>
		);
	};

	const drawDays = () => {
		const days = [];

		let startDate = moment(currentMonth).startOf('isoWeek');

		for (let i = 0; i < 7; i++) {
			days.push(
				<div className='col col-center' key={i}>
					{startDate.format('dd')}
				</div>
			);
			startDate.add(1, 'd');
		}

		return <div className='days row'>{days}</div>;
	};

	const drawCells = () => {
		const monthStart = moment(currentMonth).startOf('month').toDate();
		const startDate = moment(currentMonth)
			.startOf('month')
			.startOf('isoWeek')
			.toDate();
		const endDate = moment(currentMonth)
			.endOf('month')
			.endOf('isoWeek')
			.toDate();

		const rows = [];

		let days = [];
		let day = startDate;

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				const cloneDay = day;

				days.push(
					<div
						className={`col cell ${
							!moment(day).isSame(monthStart, 'month')
								? 'disabled'
								: moment(day).isSame(selectedDate, 'day')
								? 'selected'
								: ''
						}`}
						key={day}
						onClick={() => onDateClick(cloneDay)}
					>
						<span className='number mb-1'>{moment(day).format('D')}</span>
						<Events
							isDisabled={!moment(day).isSame(monthStart, 'month')}
							date={day}
						/>
					</div>
				);
				day = moment(day).add(1, 'd').toDate();
			}

			rows.push(
				<div className='row' key={day}>
					{days}
				</div>
			);
			days = [];
		}

		return <div className='body'>{rows}</div>;
	};

	const onDateClick = (day) => {
		setSelectedDate(day);
		setIsActive(true);
	};

	const nextMonth = () => {
		setCurrentMonth(moment(currentMonth).add(1, 'M').toDate());
	};

	const prevMonth = () => {
		setCurrentMonth(moment(currentMonth).subtract(1, 'M').toDate());
	};

	const onAddEvent = () => {
		setIsAdd(true);
		setIsActive(true);
	};

	return (
		<div className=''>
			<div className='containerWrap'>
				<div className='topBar w-100 py-3 px-3' style={{ height: '70px' }}>
					<div className='btn btn-primary float-right' onClick={onAddEvent}>
						New Event
						<i className='ml-2 fas fa-edit'></i>
					</div>
				</div>
				<div className='calendar'>
					{drawHeader()}
					{drawDays()}
					{drawCells()}
				</div>
				<div className='p-0'>
					<AddEditArea
						isAdd={isAdd}
						setIsAdd={setIsAdd}
						setIsActive={setIsActive}
            isActive={isActive}
            selectedDate={selectedDate}
					/>
				</div>
			</div>
		</div>
	);
};
export default CalendarArea;