import React, { useState, useContext } from 'react';
import EventContext from '../../../../context/events/eventContext';
import AlertContext from '../../../../context/alert/alertContext';
import 'react-datepicker/dist/react-datepicker.css';
import parseISO from 'date-fns/parseISO';
import DatePicker from 'react-datepicker';

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

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [form, setForm] = useState({
		start: new Date(),
		end: new Date(),
		title: '',
		description: '',
	});

	const { start, end, title, description } = form;

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const onChangeStart = (e) => {
		setForm({ ...form, start: e });
	};

	const onChangeEnd = (e) => {
		setForm({ ...form, end: e });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setForm({ ...form, start: parseISO(form.start), end: parseISO(form.end) });
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
		<form className='text-white' onSubmit={onSubmit}>
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
				<DatePicker
					id='start'
					selected={start}
					onChange={(e) => onChangeStart(e)}
					className='form-control'
					maxDate={end}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='end'>End Date</label>
				<DatePicker
					id='end'
					selected={end}
					onChange={(e) => onChangeEnd(e)}
					className='form-control'
					minDate={start}
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
				/>
			</div>
			<div className='d-flex flex-column mt-4'>
				<button type='submit' className='btn btn-block btn-success'>
					<i className='fas fa-check'></i>
				</button>
			</div>
		</form>
	);
};

export default AddArea;
