import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import {
	ADD_EVENT,
	DELETE_EVENT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_EVENT,
	FILTER_EVENT,
	CLEAR_FILTER
} from '../types';
import { rgbToHex } from '@material-ui/core';

const EventState = props => {
	const initialState = {
		events: [
			{
				id: 1,
				eventName: 'Go shopping',
				eventStartDate: new Date(2020, 1, 21, 12),
				eventEndDate: new Date(2020, 1, 21, 12),
				isEventAllDay: false,
				eventDescription:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ex molestiae voluptatibus, exercitationem eius, veritatis assumenda rem aut placeat repellat temporibus, nulla cum rerum amet tempore deserunt sit magnam?',
				eventLocation: 'Tesco',
				color: 'Red'
			},
			{
				id: 2,
				eventName: 'Party at friends',
				eventStartDate: new Date(2020, 1, 21, 18, 30),
				eventEndDate: new Date(2020, 1, 21, 21),
				isEventAllDay: false,
				eventDescription:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ex molestiae voluptatibus, exercitationem eius, veritatis assumenda rem aut placeat repellat temporibus, nulla cum rerum amet tempore deserunt sit magnam?',
				eventLocation: 'Friends house',
				color: 'Red'
			},
			{
				id: 3,
				eventName: 'Double shift at work',
				eventStartDate: new Date(2020, 1, 22),
				eventEndDate: new Date(2020, 1, 22),
				isEventAllDay: true,
				eventDescription:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsa ex molestiae voluptatibus, exercitationem eius, veritatis assumenda rem aut placeat repellat temporibus, nulla cum rerum amet tempore deserunt sit magnam?',
				eventLocation: 'Work',
				color: 'Blue'
			}
		]
	};

	const [state, dispatch] = useReducer(eventReducer, initialState);

	//Add Event

	//Delete Event

	//Set Current Event

	//Clear Current Event

	//Update Event

	//Filter Event

	//Clear Filter

	return (
		<EventContext.Provider
			value={{
				events: state.events
			}}
		>
			{props.children}
		</EventContext.Provider>
	);
};

EventState.propTypes = {};

export default EventState;
