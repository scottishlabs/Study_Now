import React, { useReducer } from 'react';
import FlashcardsContext from './flashcardsContext';
import flashcardsReducer from './flashcardsReducer';
import {
	GET_FLASHCARDS,
	ADD_FLASHCARD,
	UPDATE_FLASHCARD,
	DELETE_FLASHCARD,
	SET_CURRENT_FLASHCARD,
	CLEAR_CURRENT_FLASHCARD,
	FILTER_FLASHCARDS,
	CLEAR_FILTER_FLASHCARDS,
	SET_FLASHCARD_ACTIVE,
	SET_FLASHCARD_INACTIVE,
	SET_ALL_FLASHCARDS_ACTIVE,
} from '../types';
import uuid from 'uuid';

const FlashcardsState = (props) => {
	const initialState = {
		flashcards: [
			{
				id: 1,
				title: 'Card 1',
				front:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe autem blanditiis dignissimos esse est ipsam eligendi a, eveniet officiis tenetur perferendis, veniam illo velit nobis?',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat, dignissimos totam voluptates natus doloremque, dolorem quae quam iure delectus similique libero, obcaecati unde officia?',
			},
			{
				id: 2,
				title: 'Card 2',
				front:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, eum soluta! Nam ducimus veritatis nihil obcaecati et saepe quo, incidunt itaque sunt possimus facilis vel neque praesentium officia dolor repellat, corporis excepturi. Quo dolores vel quia repellat nesciunt illum provident optio rem dolorum exercitationem, reprehenderit aliquam tenetur velit earum minus ab id culpa eos consequatur. Reiciendis odio blanditiis in possimus ducimus unde sunt? Quae eveniet optio dolore explicabo odio a ad, facere doloribus veniam inventore voluptatum repudiandae eaque totam eos minima rem id dolores, ab alias maxime, sapiente animi? Laboriosam dignissimos neque voluptate recusandae ducimus ipsa dolores, nemo, corporis facilis amet cum distinctio. Nesciunt modi, tempora quia quod eligendi, molestiae neque, aliquam aliquid optio commodi rerum. Odit ipsam sed consectetur, reiciendis placeat inventore ea nam sint, et vel libero maxime! Quae sit cupiditate similique commodi repellendus! Ducimus eum, nesciunt ipsa tenetur nobis incidunt iste dolor non voluptatum. Quaerat voluptas illo autem, officia odit, animi ipsa ipsam unde facere ducimus, perferendis iure numquam cum non sequi nostrum. Id consectetur voluptates dolores veniam ducimus maxime obcaecati eum necessitatibus voluptatem molestiae quae qui recusandae, natus culpa, harum minima a sapiente expedita? Molestiae, aliquid quae nam obcaecati quod cupiditate maiores inventore amet deleniti magnam?',
				back:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, a quo. Consequatur dignissimos nemo porro illum omnis? Sit obcaecati illum quibusdam natus voluptas nemo voluptatem non quis aliquid nulla eius itaque facilis eos eaque reprehenderit, fugit animi cum ducimus in delectus sapiente. Voluptate dolorum aliquid officiis consequuntur eum, sint, nostrum eligendi, beatae a voluptas pariatur est reprehenderit quis at esse quidem repudiandae in vero mollitia magnam impedit! Nisi odio quam consequatur temporibus ab voluptates eaque, unde fuga nihil earum qui soluta delectus laboriosam fugit doloribus porro fugiat eos, explicabo illum molestias. Vero, facilis dolorem ipsam necessitatibus totam molestias a illo officia debitis voluptatum odit doloremque ullam quis, quod excepturi impedit neque nisi fugiat? Quo explicabo dicta expedita eum debitis quos sequi ipsum ducimus veritatis. Totam tenetur magnam consequatur earum. Asperiores recusandae maxime velit inventore quo minus rem, consequuntur, harum vitae voluptates nisi impedit ducimus magni odio modi beatae esse soluta blanditiis molestias autem accusamus aut aliquam cum provident! In deleniti ducimus, dolorum consectetur facere, labore aspernatur non similique nobis sapiente aliquam alias tempore ipsa illum perferendis fugiat quas explicabo cupiditate ullam unde et. Totam cum nam nemo maiores animi, impedit minus aspernatur dolores eos enim culpa facilis eligendi, tenetur dolor.',
			},
			{
				id: 3,
				title: 'Card 3',
				front: 'Lorem ipsum',
				back: 'Lorem ipsum',
			},
			{
				id: 4,
				title: 'Card 4',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
			{
				id: 5,
				title: 'Card 5',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
			{
				id: 6,
				title: 'Card 6',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
			{
				id: 7,
				title: 'Card 7',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
		],
		current: null,
		filtered: null,
		active: [
			{
				id: 1,
				title: 'Card 1',
				front:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe autem blanditiis dignissimos esse est ipsam eligendi a, eveniet officiis tenetur perferendis, veniam illo velit nobis?',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat, dignissimos totam voluptates natus doloremque, dolorem quae quam iure delectus similique libero, obcaecati unde officia?',
			},
			{
				id: 2,
				title: 'Card 2',
				front:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, eum soluta! Nam ducimus veritatis nihil obcaecati et saepe quo, incidunt itaque sunt possimus facilis vel neque praesentium officia dolor repellat, corporis excepturi. Quo dolores vel quia repellat nesciunt illum provident optio rem dolorum exercitationem, reprehenderit aliquam tenetur velit earum minus ab id culpa eos consequatur. Reiciendis odio blanditiis in possimus ducimus unde sunt? Quae eveniet optio dolore explicabo odio a ad, facere doloribus veniam inventore voluptatum repudiandae eaque totam eos minima rem id dolores, ab alias maxime, sapiente animi? Laboriosam dignissimos neque voluptate recusandae ducimus ipsa dolores, nemo, corporis facilis amet cum distinctio. Nesciunt modi, tempora quia quod eligendi, molestiae neque, aliquam aliquid optio commodi rerum. Odit ipsam sed consectetur, reiciendis placeat inventore ea nam sint, et vel libero maxime! Quae sit cupiditate similique commodi repellendus! Ducimus eum, nesciunt ipsa tenetur nobis incidunt iste dolor non voluptatum. Quaerat voluptas illo autem, officia odit, animi ipsa ipsam unde facere ducimus, perferendis iure numquam cum non sequi nostrum. Id consectetur voluptates dolores veniam ducimus maxime obcaecati eum necessitatibus voluptatem molestiae quae qui recusandae, natus culpa, harum minima a sapiente expedita? Molestiae, aliquid quae nam obcaecati quod cupiditate maiores inventore amet deleniti magnam?',
				back:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, a quo. Consequatur dignissimos nemo porro illum omnis? Sit obcaecati illum quibusdam natus voluptas nemo voluptatem non quis aliquid nulla eius itaque facilis eos eaque reprehenderit, fugit animi cum ducimus in delectus sapiente. Voluptate dolorum aliquid officiis consequuntur eum, sint, nostrum eligendi, beatae a voluptas pariatur est reprehenderit quis at esse quidem repudiandae in vero mollitia magnam impedit! Nisi odio quam consequatur temporibus ab voluptates eaque, unde fuga nihil earum qui soluta delectus laboriosam fugit doloribus porro fugiat eos, explicabo illum molestias. Vero, facilis dolorem ipsam necessitatibus totam molestias a illo officia debitis voluptatum odit doloremque ullam quis, quod excepturi impedit neque nisi fugiat? Quo explicabo dicta expedita eum debitis quos sequi ipsum ducimus veritatis. Totam tenetur magnam consequatur earum. Asperiores recusandae maxime velit inventore quo minus rem, consequuntur, harum vitae voluptates nisi impedit ducimus magni odio modi beatae esse soluta blanditiis molestias autem accusamus aut aliquam cum provident! In deleniti ducimus, dolorum consectetur facere, labore aspernatur non similique nobis sapiente aliquam alias tempore ipsa illum perferendis fugiat quas explicabo cupiditate ullam unde et. Totam cum nam nemo maiores animi, impedit minus aspernatur dolores eos enim culpa facilis eligendi, tenetur dolor.',
			},
			{
				id: 3,
				title: 'Card 3',
				front: 'Lorem ipsum',
				back: 'Lorem ipsum',
			},
			{
				id: 4,
				title: 'Card 4',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
			{
				id: 5,
				title: 'Card 5',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
			{
				id: 6,
				title: 'Card 6',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
			{
				id: 7,
				title: 'Card 7',
				front: 'Lorem ipsum dolor sit amet.',
				back:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut vero cum voluptatibus amet distinctio beatae corrupti laudantium praesentium fugiat?',
			},
		],
		inactive: [],
	};

	const [state, dispatch] = useReducer(flashcardsReducer, initialState);

	const addFlashcard = (flashcard) => {
		flashcard.id = uuid.v4();
		dispatch({ type: ADD_FLASHCARD, payload: flashcard });
	};

	const updateFlashcard = (flashcard) => {
		dispatch({ type: UPDATE_FLASHCARD, payload: flashcard });
	};

	const deleteFlashcard = (id) => {
		dispatch({ type: DELETE_FLASHCARD, payload: id });
	};

	const setCurrentFlashcard = (flashcard) => {
		dispatch({ type: SET_CURRENT_FLASHCARD, payload: flashcard });
	};

	const clearCurrentFlashcard = () => {
		dispatch({ type: CLEAR_CURRENT_FLASHCARD });
	};

	const filterFlashcards = (text) => {
		dispatch({ type: FILTER_FLASHCARDS, payload: text });
	};

	const clearFilterFlashcards = () => {
		dispatch({ type: CLEAR_FILTER_FLASHCARDS });
	};

	const setFlashcardActive = (flashcard) => {
		dispatch({ type: SET_FLASHCARD_ACTIVE, payload: flashcard });
	};

	const setFlashcardInactive = (flashcard) => {
		dispatch({ type: SET_FLASHCARD_INACTIVE, payload: flashcard });
	};

	const setAllFlashcardsActive = () => {
		dispatch({ type: SET_ALL_FLASHCARDS_ACTIVE });
	};

	return (
		<FlashcardsContext.Provider
			value={{
				flashcards: state.flashcards,
				current: state.current,
				filtered: state.filtered,
				active: state.active,
				inactive: state.inactive,
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
			}}
		>
			{props.children}
		</FlashcardsContext.Provider>
	);
};

export default FlashcardsState;
