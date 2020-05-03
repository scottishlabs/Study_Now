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

export default (state, action) => {
	switch (action.type) {
		case GET_FLASHCARDS:
			return {
				...state,
				flashcards: action.payload,
			};
		case ADD_FLASHCARD:
			return {
				...state,
				flashcards: [...state.flashcards, action.payload],
				active: [...state.active, action.payload],
			};
		case UPDATE_FLASHCARD:
			return {
				...state,
				flashcards: state.flashcards.map((flashcard) =>
					flashcard.id === action.payload.id ? action.payload : flashcard
				),
				active: state.active.map((flashcard) =>
					flashcard.id === action.payload.id ? action.payload : flashcard
				),
				inactive: state.flashcards.map((flashcard) =>
					flashcard.id === action.payload.id ? action.payload : flashcard
				),
			};
		case DELETE_FLASHCARD:
			return {
				...state,
				flashcards: state.flashcards.filter(
					(flashcard) => flashcard.id !== action.payload
				),
				active: state.active.filter(
					(flashcard) => flashcard.id !== action.payload
				),
				inactive: state.inactive.filter(
					(flashcard) => flashcard.id !== action.payload
				),
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
		case SET_FLASHCARD_ACTIVE:
			return {
				...state,
				inactive: state.inactive.filter(
					(flashcard) => flashcard.id !== action.payload.id
				),
				active: [...state.active, action.payload],
			};
		case SET_FLASHCARD_INACTIVE:
			return {
				...state,
				active: state.active.filter(
					(flashcard) => flashcard.id !== action.payload.id
				),
				inactive: [...state.inactive, action.payload],
			};
		case SET_ALL_FLASHCARDS_ACTIVE:
			return {
				...state,
				active: state.flashcards,
				inactive: [],
			};
		default:
			return state;
	}
};
