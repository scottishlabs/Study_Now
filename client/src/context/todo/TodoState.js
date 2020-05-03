import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import uuid from 'uuid';
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
} from '../types';

const TodoState = (props) => {
	const initialState = {
		todos: [
			{
				id: 1,
				name: 'get milk',
				description: 'Go to the supermarket and get milk',
				isCompleted: false,
				urgent: true,
				important: true,
				deadline: new Date(2020, 4, 3),
			},
			{
				id: 2,
				name: 'get bread 2',
				description: 'go to the supermarket and get bread 2',
				isCompleted: false,
				urgent: true,
				important: false,
				deadline: new Date(),
			},
			{
				id: 3,
				name: 'get bread 3',
				description: 'go to the supermarket and get bread 3',
				isCompleted: true,
				urgent: false,
				important: true,
				deadline: new Date(2200, 11, 17),
			},
			{
				id: 4,
				name: 'get bread 3',
				description: 'go to the supermarket and get bread 3',
				isCompleted: false,
				urgent: false,
				important: false,
				deadline: new Date(),
			},
			{
				id: 5,
				name: 'get bread 5',
				description: 'go to the supermarket and get bread 5',
				isCompleted: true,
				urgent: false,
				important: false,
				deadline: new Date(),
			},
		],
		subTodos: [
			{
				id: 6,
				subTodoId: 1,
				name: 'go to supermarket',
				isCompleted: true,
			},
			{
				id: 7,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 8,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 9,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 10,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 11,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 12,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 13,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 14,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 15,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 16,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
			{
				id: 17,
				subTodoId: 1,
				name: 'get milk',
				isCompleted: false,
			},
		],
		current: null,
		filtered: null,
	};

	// Initial state of the context and the reducer to execute updates to context
	const [state, dispatch] = useReducer(todoReducer, initialState);

	// The following dispatches the called update to the reducer to update state

	// Get Todos

	// Add Todo
	const addTodo = (todo) => {
		todo.id = uuid.v4();
		dispatch({ type: ADD_TODO, payload: todo });
	};
	// Add SubTodo
	const addSubTodo = (subTodo) => {
		subTodo.id = uuid.v4();
		dispatch({ type: ADD_SUBTODO, payload: subTodo });
	};
	// Delete Todo
	const deleteTodo = (id) => {
		dispatch({ type: DELETE_TODO, payload: id });
	};
	// Delete SubTodo
	const deleteSubTodo = (id) => {
		dispatch({ type: DELETE_SUBTODO, payload: id });
	};
	// Select Current Todo
	const setCurrent = (todo) => {
		dispatch({ type: SET_CURRENT, payload: todo });
	};
	// Update Todo
	const updateTodo = (todo) => {
		dispatch({ type: UPDATE_TODO, payload: todo });
	};
	// Update Sub-Todo
	const updateSubTodo = (subTodo) => {
		dispatch({ type: UPDATE_SUBTODO, payload: subTodo });
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
