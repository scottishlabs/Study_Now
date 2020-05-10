import React, { useState, useContext, useEffect, Fragment } from 'react';
import Todos from './Todos';
import TodoForm from './TodoForm';
import './Todos.css';
import TodoContext from '../../../../context/todo/todoContext';

// Contains and organizes sub components of the todos elements on the page
const TodoArea = () => {
	const todoContext = useContext(TodoContext);
	const { current } = todoContext;

	// Stores the state of whether the form element is filled by the currently selected todo
	const [isActive, setIsActive] = useState(current !== null);

	//  Returns the list of todo elements and the edit forms in columns
	return (
		<div className='row h-100'>
			<Todos active={isActive} setIsActive={setIsActive} />
			<TodoForm isActive={isActive} setIsActive={setIsActive} />
		</div>
	);
};
export default TodoArea;
