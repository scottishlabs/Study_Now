import React, { useContext } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';

const FlashcardItem = ({ flashcard, setIsActive }) => {
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

	const { title, front, back, due } = flashcard;

	const selectFlashcard = () => {
		setCurrentFlashcard(flashcard);
		setIsActive(true);
	};

	const handleDeleteTodo = () => {
		deleteFlashcard(flashcard._id);
		setIsActive(false);
		clearCurrentFlashcard();
	};

	return (
		<li className='list-group-item' style={{ height: '54px' }}>
			<div className='row '>
				<div className='col-11 p-0' onClick={selectFlashcard}>
					<div className='flashcardTitle flashcardUnselectable float-left'>
						{title}
					</div>
				</div>
				<div className='col-1 p-0'>
					<div
						className='btn btn-sm float-right text-danger'
						onClick={handleDeleteTodo}
					>
						<i className='fas fa-times '></i>
					</div>
				</div>
			</div>
		</li>
	);
};

export default FlashcardItem;
