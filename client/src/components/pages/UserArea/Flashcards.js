import React from 'react';
import { NavBar, FlashcardArea } from '../../';

const Flashcards = () => {
	return (
		<>
			<NavBar className='navbar' content={FlashcardArea} />
		</>
	);
};

export default Flashcards;
