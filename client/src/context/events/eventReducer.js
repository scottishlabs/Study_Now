import {
	GET_EVENTS,
	ADD_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
	SET_CURRENT_EVENT,
	CLEAR_CURRENT_EVENT,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_EVENTS:
			return state;
		case ADD_EVENT:
			return {
				...state,
				events: [...state.events, action.payload],
			};
		case UPDATE_EVENT:
			return {
				...state,
				events: state.events.map((event) =>
					event.id === action.payload.id ? action.payload : event
				),
			};
		case DELETE_EVENT:
			return {
				...state,
				events: state.events.filter((event) => event.id !== action.payload),
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
	}
};
