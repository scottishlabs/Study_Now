import React, { useState } from 'react';
import './Todos.css';
import TodoItem from './TodoItem';

const Todos = () => {
	const [selected, setSelected] = useState(null);
	const [todos, setTodos] = useState([
		{
			id: 1,
			name: 'get milk',
			description: 'Go to the supermarket and get milk',
			isCompleted: false,
			urgent: true,
			important: true,
			deadline: new Date(),
			subTodos: [
				{
					id: 1,
					name: 'go to supermarket',
					isCompleted: true,
					deadline: new Date()
				},
				{
					id: 2,
					name: 'get milk',
					isCompleted: false,
					deadline: new Date()
				}
			]
		},
		{
			id: 2,
			name: 'get bread 2',
			description: 'go to the supermarket and get bread 2',
			isCompleted: false,
			urgent: true,
			important: false,
			deadline: new Date(),
			subTodos: []
		},
		{
			id: 3,
			name: 'get bread 3',
			description: 'go to the supermarket and get bread 3',
			isCompleted: true,
			urgent: false,
			important: true,
			deadline: new Date(),
			subTodos: []
		},
		{
			id: 4,
			name: 'get bread 3',
			description: 'go to the supermarket and get bread 3',
			isCompleted: false,
			urgent: false,
			important: false,
			deadline: new Date(),
			subTodos: []
		},
		{
			id: 5,
			name: 'get bread 5',
			description: 'go to the supermarket and get bread 5',
			isCompleted: true,
			urgent: false,
			important: false,
			deadline: new Date(),
			subTodos: []
		}
	]);

	const isTodoSelected = () => {
		if (selected == null) {
			return (
				<div className='d-flex flex-column defaultIcon'>
					<i className='fas fa-check-square'></i>
					Click a To-do to view details
				</div>
			);
		}
	};

	const toggleTodo = ({ todo }) => {
		todo.isCompleted = !todo.isCompleted;
	};

	return (
		<>
			<div className='row h-100'>
				<div className='todoListArea col-12 col-lg-7'>
					<div className='addTodo input-group'>
						<input
							placeholder='Add New To-do'
							type='text'
							className='form-control'
						/>
						<div className='input-group-append'>
							<span className='btn btn-primary'>
								<i className='fas fa-plus'></i>
							</span>
						</div>
					</div>
					<div className='todoList'>
						<div className='list-group'>
							{todos.map(todo => (
								<TodoItem
									key={todo.id}
									name={todo.name}
									isCompleted={todo.isCompleted}
									onClick={() => toggleTodo(todo)}
								/>
							))}
						</div>
					</div>
				</div>
				<div className='todoInfo col-lg-5 bg-dark'>{isTodoSelected()}</div>
			</div>
		</>
	);
};

export default Todos;
