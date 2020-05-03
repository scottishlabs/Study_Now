import React, { useContext } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';
import AddForm from './AddForm';
import EditForm from './EditForm';

const AddEditArea = ({ isAdd, setIsAdd, isActive, setIsActive }) => {
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

	return (
		<div
			className={`bg-dark addEditWrapper ${isActive ? 'active' : ''}`}
			style={{ padding: '1rem 39px' }}
		>
			<div className='container h-100 w-100'>
				{isAdd ? (
					<AddForm
						isAdd={isAdd}
						setIsAdd={setIsAdd}
						setIsActive={setIsActive}
					/>
				) : current !== null ? (
					<EditForm
						isAdd={isAdd}
						setIsAdd={setIsAdd}
						setIsActive={setIsActive}
					/>
				) : (
					<div className='d-flex flex-column defaultIcon'>
						<i className='fas fa-pencil-ruler'></i>
						Add a new Flashcard or select a Flashcard to edit
					</div>
				)}
			</div>
		</div>
	);
};

export default AddEditArea;
