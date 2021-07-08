import React, { useReducer } from "react";
import axios from "axios";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  UPDATE_TODO,
  DELETE_SUBTODO,
  UPDATE_SUBTODO,
  ADD_SUBTODO,
  FILTER_TODOS,
  CLEAR_FILTER,
  SORT_TODOS_DEADLINE,
  SORT_TODOS_ALPHABETICAL,
  SORT_TODOS_PRIORITY,
  TODO_ERROR,
  SUBTODO_ERROR,
  GET_SUBTODOS,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: null,
    subTodos: null,
    current: null,
    filtered: null,
    error: null,
  };

  // Initial state of the context and the reducer to execute updates to context
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // The following dispatches the called update to the reducer to update state

  // Get Todos
  const getTodos = async () => {
    try {
      const res = await axios.get("/api/todos");

      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get SubTodos
  const getSubTodos = async () => {
    try {
      const res = await axios.get("/api/subTodos");

      dispatch({
        type: GET_SUBTODOS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SUBTODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Todo
  const addTodo = async (todo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/todos", todo, config);

      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add SubTodo
  const addSubTodo = async (subTodo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/subTodos", subTodo, config);

      dispatch({
        type: ADD_SUBTODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SUBTODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);

      const currentSubTodos = state.subTodos.filter(
        (subTodo) => id === subTodo.subTodoId
      );

      currentSubTodos.forEach((subTodo) => {
        axios.delete(`/api/subTodos/${subTodo._id}`);
      });

      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete SubTodo
  const deleteSubTodo = async (id) => {
    try {
      await axios.delete(`/api/subTodos/${id}`);

      dispatch({
        type: DELETE_SUBTODO,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: SUBTODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Todo
  const updateTodo = async (todo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/todos/${todo._id}`, todo, config);

      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Sub-Todo
  const updateSubTodo = async (subTodo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/subTodos/${subTodo._id}`,
        subTodo,
        config
      );

      dispatch({
        type: UPDATE_SUBTODO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SUBTODO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Select Current Todo
  const setCurrent = (todo) => {
    dispatch({ type: SET_CURRENT, payload: todo });
  };

  // Filter Todos
  const filterTodos = (text) => {
    dispatch({ type: FILTER_TODOS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Sort Todos by priority
  const prioritySort = () => {
    dispatch({ type: SORT_TODOS_PRIORITY });
  };

  // Sort Todos by deadline
  const deadlineSort = () => {
    dispatch({ type: SORT_TODOS_DEADLINE });
  };

  // Sort Todos by A - Z
  const alphabeticalSort = () => {
    dispatch({ type: SORT_TODOS_ALPHABETICAL });
  };

  // This is the provider that provides the context to its children including any methods and state
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        subTodos: state.subTodos,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getTodos,
        getSubTodos,
        addTodo,
        addSubTodo,
        updateTodo,
        updateSubTodo,
        deleteTodo,
        deleteSubTodo,
        setCurrent,
        filterTodos,
        clearFilter,
        prioritySort,
        deadlineSort,
        alphabeticalSort,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
