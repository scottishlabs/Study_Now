import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import eventReducer from "./eventReducer";

import {
  GET_EVENTS,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  SET_CURRENT_EVENT,
  CLEAR_CURRENT_EVENT,
  EVENT_ERROR,
} from "../types";

const EventState = (props) => {
  const initialState = {
    events: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  const getEvents = async () => {
    try {
      const res = await axios.get("/api/events");

      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const addEvent = async (event) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/events", event, config);

      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const editEvent = async (event) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(event);

    try {
      const res = await axios.put(`/api/events/${event._id}`, event, config);

      console.log(res.data);

      dispatch({
        type: UPDATE_EVENT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);

      dispatch({
        type: DELETE_EVENT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg,
      });
    }
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
        error: state.error,
        getEvents,
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
