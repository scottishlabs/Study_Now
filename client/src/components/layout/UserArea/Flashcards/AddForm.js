import React, { useState, useContext } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';

const AddForm = ({ setIsAdd, setIsActive }) => {
	const flashcardsContext = useContext(FlashcardsContext);
	const {
		flashcards,
		current,
		filtered,
		addFlashcard,
		updateFlashcard,
		deleteFlashcard,
		setCurrentFlashcard,
		clearCurrentFlashcard,
		filterFlashcards,
		clearFilterFlashcards,
	} = flashcardsContext;

	const [form, setForm] = useState({
		title: '',
		front: '',
		back: '',
	});

	const { title, front, back } = form;

	const onChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const onSubmit = () => {
		addFlashcard(form);
		setIsAdd(false);
		setIsActive(false);
	};

	const onClose = () => {
		setIsAdd(false);
		setIsActive(false);
		clearCurrentFlashcard();
	};

	return (
		<form className='text-white' onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-11 p-0 flashcardUnselectable'>
					<h1>Add Card</h1>
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
			<div className='form-group'>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					placeholder='Title'
					id='title'
					value={title}
					onChange={onChange}
					className='form-control'
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='front'>Front</label>
				<textarea
					placeholder='Front of the Flashcard'
					id='front'
					rows='10'
					value={front}
					onChange={onChange}
					className='form-control'
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='back'>Back</label>
				<textarea
					placeholder='Back of the Flashcard'
					id='back'
					rows='10'
					value={back}
					onChange={onChange}
					className='form-control'
					required
				/>
			</div>
			<button type='submit' className='btn btn-block btn-success mt-4'>
				<i className='fas fa-check'></i>
			</button>
		</form>
	);
};

export default AddForm;
