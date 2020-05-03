import React, { useReducer } from 'react';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import uuid from 'uuid';

import {
	GET_EVENTS,
	ADD_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
	SET_CURRENT_EVENT,
	CLEAR_CURRENT_EVENT,
} from '../types';

const EventState = (props) => {
	const initialState = {
		events: [
			{
				id: 1,
				start: new Date(2020, 4, 27, 12, 0),
				end: new Date(2020, 4, 27, 18, 30),
				title: 'event 1',
				description: 'this is event 1',
			},
			{
				id: 2,
				start: new Date(2020, 4, 27, 11, 0),
				end: new Date(2020, 4, 27, 16, 0),
				title: 'event 2',
				description: 'this is event 2',
			},
			{
				id: 3,
				start: new Date(2020, 4, 27, 12, 0),
				end: new Date(2020, 4, 28, 18, 0),
				title: 'event 3',
				description: 'this is event 3',
			},
			{
				id: 4,
				start: new Date(2020, 4, 28, 12, 0),
				end: new Date(2020, 4, 28, 18, 0),
				title: 'event 4',
				description: 'this is event 4',
			},
		],
		current: null,
	};

	const [state, dispatch] = useReducer(eventReducer, initialState);

	const getEvents = (event) => {};
	const addEvent = (event) => {
		event.id = uuid.v4();
		dispatch({ type: ADD_EVENT, payload: event });
	};
	const editEvent = (event) => {
		dispatch({ type: UPDATE_EVENT, payload: event });
	};
	const deleteEvent = (id) => {
		dispatch({ type: DELETE_EVENT, payload: id });
	};
	const setCurrentEvent = (event) => {
		dispatch({ type: SET_CURRENT_EVENT, payload: event });
	};
	const clearCurrentEvent = () => {
		dispatch({ type: CLEAR_CURRENT_EVENT });
	};

	return (
		<EventContext.Provider
			value={{
				events: state.events,
				current: state.current,
				addEvent,
				editEvent,
				deleteEvent,
				setCurrentEvent,
				clearCurrentEvent,
			}}
		>
			{props.children}
		</EventContext.Provider>
	);
};

export default EventState;
