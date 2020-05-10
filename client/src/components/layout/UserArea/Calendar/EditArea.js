import React, { useState, useContext } from 'react';
import EventContext from '../../../../context/events/eventContext';
import 'react-datepicker/dist/react-datepicker.css';
import parseISO from 'date-fns/parseISO';
import DatePicker from 'react-datepicker';
import { useEffect } from 'react';

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
		...current,
		start: parseISO(current.start),
		end: parseISO(current.end),
	});

	const { start, end, title, description } = form;

	// useEffect(() => {
	// 	console.log(current);
	// 	setForm({
	// 		...form,
	// 		start: parseISO(current.start),
	// 		end: parseISO(current.end),
	// 	});
	// }, [parseISO(start)]);

	const resetForms = () => {
		setForm({
			...form,
			start: current.start,
			end: current.end,
			title: current.title,
			description: current.description,
		});
	};

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const onChangeStart = (e) => {
		setForm({ ...form, start: e });
	};

	const onChangeEnd = (e) => {
		setForm({ ...form, end: e });
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
		deleteEvent(current._id);
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
					minDate={start}
					className='form-control'
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
