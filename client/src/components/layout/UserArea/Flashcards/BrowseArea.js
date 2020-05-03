import React, { useState, useContext } from 'react';
import FlashcardsContext from '../../../../context/flashcards/flashcardsContext';
import AddEditArea from './AddEditArea';
import FlashcardItem from './FlashcardItem';
import StudyArea from './StudyArea';

const BrowseArea = () => {
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

	const [search, setSearch] = useState('');

	const [isAdd, setIsAdd] = useState(false);

	const [isStudying, setIsStudying] = useState(false);

	const [isActive, setIsActive] = useState(false);

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onAddFlashcard = () => {
		setIsAdd(true);
		setIsActive(true);
	};

	const onStartStudy = () => {
		setIsStudying(true);
		setIsActive(false);
	};

	return (
		<div className='containerWrap row'>
			<div
				className={`studyContainer bg-secondary ${
					isStudying ? 'd-block' : 'd-none'
				}`}
			>
				<StudyArea isStudying={isStudying} setIsStudying={setIsStudying} />
			</div>
			<div className='col-lg-7'>
				<div className='browseWrapper'>
					<div className='searchFilter'>
						<div className='input-group'>
							<input
								type='text'
								name='name'
								maxLength='48'
								className='form-control'
								placeholder='Search...'
								value={search}
								onChange={onChange}
							/>
							<div className='input-group-append'>
								<button
									type='submit'
									className='btn btn-primary'
									onClick={() => filterFlashcards(search)}
								>
									<i className='fas fa-search'></i>
								</button>
							</div>
							<button
								className='btn btn-secondary ml-3'
								onClick={clearFilterFlashcards}
							>
								Clear Filter
							</button>
						</div>
					</div>

					<div className='container-fluid browseFlashArea border border-light rounded-lg shadow p-0'>
						{flashcards.length === 0 ? (
							<h3 className='text-center my-5'>Add a Flashcard to begin!</h3>
						) : filtered !== null ? (
							filtered.map((flashcard) => (
								<FlashcardItem
									key={flashcard.id}
									flashcard={flashcard}
									setIsActive={setIsActive}
								/>
							))
						) : (
							flashcards.map((flashcard) => (
								<FlashcardItem
									key={flashcard.id}
									flashcard={flashcard}
									setIsActive={setIsActive}
								/>
							))
						)}
					</div>

					<div className='row optionBtns'>
						<div className=' col-6 p-0 pr-3'>
							<button
								className='btn btn-primary btn-block'
								onClick={onStartStudy}
							>
								<i className='fas fa-play'></i>
							</button>
						</div>
						<div className=' col-6 p-0'>
							<button
								className='btn btn-secondary btn-block'
								onClick={onAddFlashcard}
							>
								<i className='fas fa-plus'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='col-lg-5 p-0'>
				<AddEditArea
					isAdd={isAdd}
					setIsAdd={setIsAdd}
					setIsActive={setIsActive}
					isActive={isActive}
				/>
			</div>
		</div>
	);
};

export default BrowseArea;
