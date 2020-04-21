import React from 'react';
import { NavBar, FlashcardArea } from '../../';

// Renders the flashcard page
const Flashcards = () => {
	return (
		<>
			<NavBar className='navbar' content={FlashcardArea} />
		</>
	);
};

export default Flashcards;
