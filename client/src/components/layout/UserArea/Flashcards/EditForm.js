import React, { useState, useContext, useEffect } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';

const EditForm = ({ setIsAdd, setIsActive }) => {
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

	const [form, setForm] = useState(current);

	const { title, front, back, isActive } = form;

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const resetForms = () => {
		setForm(current);
	};

	const onSubmit = () => {
		updateFlashcard(form);
		setIsActive(false);
		clearCurrentFlashcard();
	};

	const onClose = () => {
		setIsActive(false);
		clearCurrentFlashcard();
	};

	return (
		<form className='text-white'>
			<div className='row'>
				<div className='col-11 p-0 flashcardUnselectable'>
					<h1>Edit Card</h1>
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
					onChange={formChange}
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
					onChange={formChange}
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
					onChange={formChange}
					className='form-control'
					required
				/>
			</div>
			<div className='d-flex flex-column mt-4'>
				<div className='btn btn-block btn-secondary' onClick={resetForms}>
					<i className='fas fa-undo'></i>
				</div>
				<div className='btn btn-block btn-success' onClick={onSubmit}>
					<i className='fas fa-check'></i>
				</div>
			</div>
		</form>
	);
};

export default EditForm;
