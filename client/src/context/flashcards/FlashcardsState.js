import React, { useReducer } from "react";
import axios from "axios";
import FlashcardsContext from "./flashcardsContext";
import flashcardsReducer from "./flashcardsReducer";
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
} from "../types";

const FlashcardsState = (props) => {
  const initialState = {
    flashcards: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(flashcardsReducer, initialState);

  const getFlashcards = async () => {
    try {
      const res = await axios.get("/api/flashcards");

      dispatch({
        type: GET_FLASHCARDS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FLASHCARD_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const addFlashcard = async (flashcard) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/flashcards", flashcard, config);

      dispatch({
        type: ADD_FLASHCARD,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FLASHCARD_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const updateFlashcard = async (flashcard) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/flashcards/${flashcard._id}`,
        flashcard,
        config
      );

      dispatch({
        type: UPDATE_FLASHCARD,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FLASHCARD_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const deleteFlashcard = async (id) => {
    try {
      await axios.delete(`/api/flashcards/${id}`);

      dispatch({
        type: DELETE_FLASHCARD,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: FLASHCARD_ERROR,
        payload: err.response.msg,
      });
    }
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

  return (
    <FlashcardsContext.Provider
      value={{
        flashcards: state.flashcards,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getFlashcards,
        addFlashcard,
        updateFlashcard,
        deleteFlashcard,
        setCurrentFlashcard,
        clearCurrentFlashcard,
        filterFlashcards,
        clearFilterFlashcards,
      }}
    >
      {props.children}
    </FlashcardsContext.Provider>
  );
};

export default FlashcardsState;
