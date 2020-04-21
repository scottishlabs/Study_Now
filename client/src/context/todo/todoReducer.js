import {
	GET_TODOS,
	ADD_TODO,
	ADD_SUBTODO,
	DELETE_TODO,
	SET_CURRENT,
	UPDATE_TODO,
	UPDATE_SUBTODO,
	FILTER_TODOS,
	CLEAR_FILTER,
	DELETE_SUBTODO,
	SORT_TODOS_ALPHABETICAL,
	SORT_TODOS_DEADLINE,
	SORT_TODOS_PRIORITY,
} from '../types';

// Takes type enum form props and switches between them and enacts the update to state by payload
export default (state, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload,
			};
		case ADD_TODO:
			return {
				...state,
				todos: [action.payload, ...state.todos],
			};
		case ADD_SUBTODO:
			return {
				...state,
				subTodos: [action.payload, ...state.subTodos],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case DELETE_SUBTODO:
			return {
				...state,
				subTodos: state.subTodos.filter(
					(subTodo) => subTodo.id !== action.payload
				),
			};
		case UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo
				),
			};
		case UPDATE_SUBTODO:
			return {
				...state,
				subTodos: state.subTodos.map((subTodo) =>
					subTodo.id === action.payload.id ? action.payload : subTodo
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case FILTER_TODOS:
			return {
				...state,
				filtered: state.todos.filter((todo) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return todo.name.match(regex);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case SORT_TODOS_ALPHABETICAL:
			const sortedTodosAZ = state.todos;
			sortedTodosAZ.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});

			return {
				...state,
				todos: sortedTodosAZ,
			};
		case SORT_TODOS_DEADLINE:
			const sortedTodosDead = state.todos;
			console.log(sortedTodosDead);
			sortedTodosDead.sort((a, b) => {
				if (a.deadline < b.deadline) {
					return -1;
				}
				if (a.deadline > b.deadline) {
					return 1;
				}
				return 0;
			});
			console.log(sortedTodosDead);
			return {
				...state,
				todos: sortedTodosDead,
			};
		case SORT_TODOS_PRIORITY:
			const sortedTodosPriority = state.todos;
			sortedTodosPriority.sort((b, a) => a.important - b.important);
			sortedTodosPriority.sort((b, a) => a.urgent - b.urgent);
			return {
				...state,
				todos: sortedTodosPriority,
			};
		default:
			return state;
	}
};
