import React, { useState, useContext, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import EventContext from '../../../../context/events/eventContext';

const EditArea = ({ setIsAdd, setIsActive }) => {
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
		start: null,
		end: null,
		title: '',
		description: '',
	});

	const { id, start, end, title, description } = form;

	useEffect(() => {
		resetForms();
	}, []);

	const resetForms = () => {
		setForm({
			id: current.id,
			start: current.start,
			end: current.end,
			title: current.title,
			description: current.description,
		});
	};

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const startChange = (date) => {
		setForm({ ...form, start: date });
	};

	const endChange = (date) => {
		setForm({ ...form, end: date });
	};

	const onSubmit = () => {
		editEvent(form);
		setIsActive(false);
		clearCurrentEvent();
	};

	const onClose = () => {
		setIsActive(false);
		clearCurrentEvent();
	};

	const onDelete = () => {
		deleteEvent(current.id);
		clearCurrentEvent();
	};

	return (
		<form className='text-white'>
			<div className='row'>
				<div className='col-11 p-0 eventUnselectable'>
					<h1>Edit Event</h1>
				</div>
				<div className='col-1 p-0'>
					<i
						className='fas fa-times text-secondary float-right fa-2x'
						style={{ lineHeight: '55px' }}
						onClick={onClose}
					></i>
				</div>
			</div>

			<hr className='bg-secondary' />
			<div className='btn btn-block btn-secondary mb-2' onClick={resetForms}>
				<i className='fas fa-undo'></i>
			</div>
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
					onChange={startChange}
					maxDate={end}
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
					onChange={endChange}
					minDate={start}
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
				<div className='btn btn-danger btn-block' onClick={onDelete}>
					<i className='fas fa-trash'></i>
				</div>
			</div>
		</form>
	);
};

export default EditArea;
