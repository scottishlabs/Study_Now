import React, { useContext } from 'react';
import TodoContext from '../../../../context/todo/todoContext';

const TodoItem = ({ todo, setIsActive }) => {
	const todoContext = useContext(TodoContext);
	const { updateTodo, setCurrent, deleteTodo } = todoContext;

	const { id, name, isCompleted, urgent, important } = todo;

	// Deletes todo by id from context and the interface
	const handleDeleteTodo = () => {
		deleteTodo(id);
		setCurrent(null);
	};

	// Sets the complete property of the todo
	const handleCheck = () => {
		updateTodo({ ...todo, isCompleted: !isCompleted });
	};

	// Sets the current property of context to this todo and opens the todo form sidebar
	const handleTodoSelect = (e) => {
		setIsActive(true);
		setCurrent(todo);
	};

	// Renders the individual todo item which can be selected, checked and deleted
	return (
		<li
			className='list-group-item d-flex align-items-center todoUnSelectable'
			style={{ minHeight: '54px' }}
			onDoubleClick={handleTodoSelect}
		>
			<div className='row'>
				<div className='col-12'>
					<div className='custom-control custom-checkbox'>
						<input
							type='checkbox'
							className='custom-control-input'
							id={id}
							checked={isCompleted}
							onChange={handleCheck}
						/>
						<label
							className='custom-control-label todoItemLabel'
							style={
								isCompleted
									? { textDecoration: ' line-through' }
									: { textDecoration: '' }
							}
							htmlFor={id}
						>
							{name}
						</label>
						<div className='float-right'>
							{urgent ? (
								<span className='badge badge-pill badge-primary mx-1'>
									Urgent
								</span>
							) : null}
							{important ? (
								<span className='badge badge-pill badge-secondary mx-1'>
									Important
								</span>
							) : null}
							{isCompleted && (
								<div
									className='btn text-danger float-right p-0 pl-2 pr-1'
									onClick={() => handleDeleteTodo()}
								>
									<i className='fas fa-times'></i>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;