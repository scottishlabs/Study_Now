import React from 'react';
import NavBar from '../../layout/UserArea/NavBar';
import FlashcardArea from '../../layout/UserArea/Flashcards/FlashcardArea';

// Renders the flashcard page
const Flashcards = () => {
	return (
		<>
			<NavBar className='navbar' content={FlashcardArea} />
		</>
	);
};

export default Flashcards;
