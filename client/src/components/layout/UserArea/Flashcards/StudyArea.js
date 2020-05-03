import React, { useState, useContext, useEffect } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';

const StudyArea = ({ isStudying, setIsStudying }) => {
	const flashcardsContext = useContext(FlashcardsContext);
	const {
		flashcards,
		current,
		filtered,
		active,
		inactive,
		addFlashcard,
		updateFlashcard,
		deleteFlashcard,
		setCurrentFlashcard,
		clearCurrentFlashcard,
		filterFlashcards,
		clearFilterFlashcards,
		setFlashcardActive,
		setFlashcardInactive,
		setAllFlashcardsActive,
	} = flashcardsContext;

	const [isAnswered, setIsAnswered] = useState(false);

	const setInactiveBad = () => {
		const currentCard = active[0];
		setFlashcardInactive(currentCard);
		setIsAnswered(false);
		setTimeout(setFlashcardActive, 60000, currentCard);
	};

	const setInactiveGood = () => {
		const currentCard = active[0];
		setTimeout(setFlashcardActive, 3600000, currentCard);
		setFlashcardInactive(currentCard);
		setIsAnswered(false);
	};

	const setInactivePerfect = () => {
		const currentCard = active[0];
		setTimeout(setFlashcardActive, 86400000, currentCard);
		setFlashcardInactive(currentCard);
		setIsAnswered(false);
	};

	return (
		<div>
			<div className='topBar w-100 py-2 px-4' style={{ height: '70px' }}>
				<div
					className='float-right btn text-dark'
					onClick={() => setIsStudying(false)}
					style={{ fontSize: '2rem' }}
				>
					<i className='fas fa-times'></i>
				</div>
			</div>
			<div className='container text-dark d-flex flex-column flex-center'>
				{active.length === 0 ? (
					<div className='container bg-white text-center p-4'>
						<h5 className=''>No cards available comeback later!</h5>
					</div>
				) : isAnswered ? (
					<>
						<div className='flashcardContainer my-4 py-5 px-4 px-lg-5 container bg-white'>
							<h4>{active[0].back}</h4>
						</div>
						<div className='m-4 d-flex flex-row'>
							<div
								className='btn btn-block btn-danger mx-3 mt-2 shadow'
								onClick={setInactiveBad}
							>
								Bad (1m)
							</div>
							<div
								className='btn btn-block btn-warning text-white  mx-3 shadow'
								onClick={setInactiveGood}
							>
								Good (1h)
							</div>
							<div
								className='btn btn-block btn-success mx-3 shadow'
								onClick={setInactivePerfect}
							>
								Perfect (1d)
							</div>
						</div>
					</>
				) : (
					<>
						<div className='flashcardContainer my-4 py-5 px-4 px-lg-5 container bg-white'>
							<h4>{active[0].front}</h4>
						</div>
						<div
							className='btn btn-dark m-4'
							onClick={() => setIsAnswered(true)}
						>
							Show Answer
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default StudyArea;
