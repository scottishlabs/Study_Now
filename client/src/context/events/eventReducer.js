import {
	GET_EVENTS,
	ADD_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
	SET_CURRENT_EVENT,
	CLEAR_CURRENT_EVENT,
	EVENT_ERROR,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_EVENTS:
			return {
				...state,
				events: action.payload,
				loading: false,
			};
		case ADD_EVENT:
			return {
				...state,
				events: [...state.events, action.payload],
				loading: false,
			};
		case UPDATE_EVENT:
			return {
				...state,
				events: state.events.map((event) =>
					event._id === action.payload._id ? action.payload : event
				),
				loading: false,
			};
		case DELETE_EVENT:
			return {
				...state,
				events: state.events.filter((event) => event._id !== action.payload),
				loading: false,
			};
		case SET_CURRENT_EVENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT_EVENT:
			return {
				...state,
				current: null,
			};
		case EVENT_ERROR:
			return {
				...state,
				error: action.payload,
			};
	}
};
