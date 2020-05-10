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
	FLASHCARD_ERROR,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_FLASHCARDS:
			return {
				...state,
				flashcards: action.payload,
				loading: false,
			};
		case ADD_FLASHCARD:
			return {
				...state,
				flashcards: [...state.flashcards, action.payload],
				loading: false,
			};
		case UPDATE_FLASHCARD:
			return {
				...state,
				flashcards: state.flashcards.map((flashcard) =>
					flashcard.id === action.payload.id ? action.payload : flashcard
				),
				loading: false,
			};
		case DELETE_FLASHCARD:
			return {
				...state,
				flashcards: state.flashcards.filter(
					(flashcard) => flashcard.id !== action.payload
				),
				loading: false,
			};
		case SET_CURRENT_FLASHCARD:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT_FLASHCARD:
			return {
				...state,
				current: null,
			};
		case FILTER_FLASHCARDS:
			return {
				...state,
				filtered: state.flashcards.filter((flashcard) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return flashcard.title.match(regex);
				}),
			};
		case CLEAR_FILTER_FLASHCARDS:
			return {
				...state,
				filtered: null,
			};
		case FLASHCARD_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
