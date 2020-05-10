import React, { useState, useContext, useEffect } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';
import cloneDeep from 'lodash/cloneDeep';

const StudyArea = ({ isStudying, setIsStudying }) => {
	const flashcardsContext = useContext(FlashcardsContext);
	const {
		flashcards,
		current,
		filtered,
		getFlashcards,
		addFlashcard,
		updateFlashcard,
		deleteFlashcard,
		setCurrentFlashcard,
		clearCurrentFlashcard,
		filterFlashcards,
		clearFilterFlashcards,
	} = flashcardsContext;

	const [isAnswered, setIsAnswered] = useState(false);

	const [status, setStatus] = useState({
		active: flashcards.filter((flashcard) => flashcard.isActive === true),
		inactive: flashcards.filter((flashcard) => flashcard.isActive === false),
	});

	useEffect(() => {
		updateStatus();
		getFlashcards();
	}, [flashcards]);

	const { active, inactive } = status;

	const [ptr, setPtr] = useState(0);
	const [selectCard, setSelectCard] = useState(active[0]);

	const getActive = () => {
		return flashcards.filter((flashcard) => flashcard.isActive === true);
	};

	const getInactive = () => {
		return flashcards.filter((flashcard) => flashcard.isActive === false);
	};

	const updateStatus = () => {
		setStatus({ ...status, active: getActive(), inactive: getInactive() });
	};

	const updateInactive = (card) => {
		updateFlashcard({ ...card, isActive: false });
	};

	const updateActive = (card) => {
		updateFlashcard({ ...card, isActive: true });
	};

	const setInactiveBad = () => {
		const currentCard = active[0];
		updateInactive(currentCard);
		selectACard();
		setTimeout(() => updateActive(currentCard), 5000, currentCard);
		setIsAnswered(false);
	};

	const setInactiveGood = () => {
		const currentCard = active[0];
		updateInactive(currentCard);
		selectACard();

		setTimeout(() => updateActive(currentCard), 3600000, currentCard);
		setIsAnswered(false);
	};

	const setInactivePerfect = () => {
		const currentCard = active[0];
		updateInactive(currentCard);
		selectACard();

		setTimeout(() => updateActive(currentCard), 86400000, currentCard);
		setIsAnswered(false);
	};

	const selectACard = () => {
		setSelectCard(active[ptr]);
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
				{!selectCard || active.length === 0 ? (
					<div className='container bg-white text-center p-4'>
						<h5 className=''>No cards available comeback later!</h5>
					</div>
				) : isAnswered ? (
					<>
						<div className='flashcardContainer my-4 py-5 px-4 px-lg-5 container bg-white'>
							<h4>{selectCard.back}</h4>
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
							<h4>{selectCard.front}</h4>
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
