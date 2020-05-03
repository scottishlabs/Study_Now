import React, { useState, useContext } from 'react';
import DateTimePicker from 'react-datetime-picker';
import EventContext from '../../../../context/events/eventContext';

const AddArea = ({ setIsAdd, setIsActive, date }) => {
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

	const [form, setForm] = useState({
		id: null,
		start: new Date(),
		end: new Date(),
		title: '',
		description: '',
	});

	const { id, start, end, title, description } = form;

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const onSubmit = () => {
		addEvent(form);
		setIsActive(false);
		setIsAdd(false);
		clearCurrentEvent();
	};

	const onClose = () => {
		setIsActive(false);
		clearCurrentEvent();
		setIsAdd(false);
	};

	return (
		<form className='text-white'>
			<div className='row'>
				<div className='col-11 p-0 eventUnselectable'>
					<h1>Add Event</h1>
				</div>
				<div className='col-1 p-0'>
					<i
						className='fas fa-times text-secondary float-right fa-2x'
						style={{ lineHeight: '50px' }}
						onClick={onClose}
					></i>
				</div>
			</div>

			<hr className='bg-secondary' />
			<div className='form-group'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					placeholder='Title'
					id='title'
					value={title}
					onChange={formChange}
					className='form-control'
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='start'>Start Date</label>
				<DateTimePicker
					id='start'
					value={start}
					onChange={formChange}
					className='form-control'
					clearIcon={null}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='end'>End Date</label>
				<DateTimePicker
					id='end'
					value={end}
					onChange={formChange}
					className='form-control'
					clearIcon={null}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Description</label>
				<textarea
					placeholder='Description'
					id='description'
					rows='10'
					value={description}
					onChange={formChange}
					className='form-control'
					required
				/>
			</div>
			<div className='d-flex flex-column mt-4'>
				<div className='btn btn-block btn-success' onClick={onSubmit}>
					<i className='fas fa-check'></i>
				</div>
			</div>
		</form>
	);
};

export default AddArea;
