import React, { useContext, useState, useEffect, Fragment } from 'react';
import TodoContext from '../../../../context/todo/todoContext';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import SubTodoItem from './SubTodoItem';
import './Todos.css';

// A component that contains all the forms for the currently selected todo
const TodoForm = ({ isActive, setIsActive }) => {
	const todoContext = useContext(TodoContext);
	const {
		current,
		subTodos,
		setCurrent,
		updateTodo,
		addSubTodo,
		deleteTodo,
	} = todoContext;

	// Current sub todos pulled from context
	const [currentSubTodos, setCurrentSubTodos] = useState(subTodos);
	// Refreshes the rendered components so they are updated with current context
	useEffect(() => {
		setCurrentSubTodos(subTodos);
		if (current !== null) {
			setPayload(current);
			setNewSubTodo({ ...newSubTodo, subTodoId: current.id });
		} else {
			setPayload({
				name: '',
				description: '',
				isCompleted: false,
				urgent: false,
				important: false,
				deadline: new Date(),
			});
			setIsActive(false);
		}
	}, [TodoContext, current, subTodos]);

	// The initial state of a new sub todo object
	const [newSubTodo, setNewSubTodo] = useState({
		subTodoId: null,
		name: '',
		isCompleted: false,
	});

	// Initial state of whether the forms are editable
	const [isEditing, setIsEditing] = useState(false);

	// Initial state of a new todo object
	const [payload, setPayload] = useState({
		name: '',
		description: '',
		isCompleted: false,
		urgent: false,
		important: false,
		deadline: new Date(),
	});

	// Updates currently selected todo with the inputs in the form and pushes it to context
	const submitUpdate = () => {
		updateTodo(payload);
		setIsEditing(false);
	};

	// Renders a different component depending on whether a todo is selected or not
	const isTodoSelected = () => {
		// Updates new todo state for each value of the input
		const onChange = (e) => {
			setPayload({ ...payload, [e.target.id]: e.target.value });
		};

		const onChangeDate = (e) => {
			setPayload({ ...payload, deadline: e });
		};

		// Adds a new sub todo to the context (as long as the input is not empty)
		const handleAddSubTodo = () => {
			if (newSubTodo.name !== '') {
				addSubTodo(newSubTodo);
				setNewSubTodo({ ...newSubTodo, name: '' });
			}
		};

		// Deletes the currently selected todo from context
		const handleDeleteTodo = () => {
			deleteTodo(current.id);
			setCurrent(null);
		};

		// draws the sub todo list from context
		const drawSubTodo = () => {
			let thisSubTodos = null;
			if (current !== null) {
				thisSubTodos = currentSubTodos.filter(
					(subTodo) => current.id === subTodo.subTodoId
				);
			}

			// Renders the todo form component populating the inputs from the current selected todo from state
			return (
				<Fragment>
					<div className='input-group mb-3'>
						<input
							placeholder='Add New Sub-Todo..'
							type='text'
							name='name'
							maxLength='42'
							value={newSubTodo.name}
							onChange={(e) =>
								setNewSubTodo({ ...newSubTodo, name: e.target.value })
							}
							className='form-control'
						/>
						<div className='input-group-append'>
							<button
								type='submit'
								className='btn btn-primary'
								onClick={() => handleAddSubTodo()}
							>
								<i className='fas fa-plus'></i>
							</button>
						</div>
					</div>
					<ul className='list-group col-12 mt-2 p-0'>
						{thisSubTodos && thisSubTodos.length > 0 ? (
							thisSubTodos.map((subTodo) => (
								<SubTodoItem
									key={subTodo.id}
									id={subTodo.id}
									subTodo={subTodo}
								/>
							))
						) : (
							<li
								className='list-group-item px-3 d-flex align-items-center'
								style={{ minHeight: '54px' }}
							>
								Add a Sub-todo Above..
							</li>
						)}
					</ul>
				</Fragment>
			);
		};

		// If no todo is selected a default form screen will be displayed
		// Otherwise a form will be displayed containing all information about the currently selected todo which can be edited
		if (current === null) {
			return (
				<div className='todoForm d-flex flex-column defaultIcon'>
					<i className='fas fa-check-square'></i>
					Click a To-do to view details
				</div>
			);
		} else {
			const {
				id,
				name,
				description,
				isCompleted,
				urgent,
				important,
				deadline,
			} = payload;

			return (
				<div className='todoForm form p-3 mx-2'>
					<div className='row w-100 border border-secondary border-top-0 border-left-0 border-right-0 pb-2 mb-2'>
						<div className='col-11 p-0'>
							<h3 className='text-left text-white text-capitalize px-0'>
								{name}
							</h3>
							{deadline && (
								<h6 className='text-left px-0'>
									Due: {moment(deadline).format('dddd Do MMMM YYYY')}
								</h6>
							)}
						</div>
						<div
							className='btn text-secondary position-absolute mx-4 closeSettingsBtn'
							onClick={() => {
								setCurrent(null);
							}}
						>
							<i className='fas fa-times'></i>
						</div>
					</div>
					{isEditing ? (
						<div
							className='mt-3 mb-2 btn btn-success btn-block'
							onClick={() => submitUpdate()}
						>
							<i className='fas fa-check'></i>
						</div>
					) : (
						<div
							className='mt-3 mb-2 btn btn-primary btn-block'
							onClick={() => setIsEditing(true)}
						>
							<i className='fas fa-edit'></i>
						</div>
					)}

					<div className='form-group'>
						<label className='text-white' htmlFor='name'>
							Title
						</label>
						<input
							type='text'
							className='form-control'
							id='name'
							value={name}
							onChange={onChange}
							placeholder='Title'
							readOnly={!isEditing}
						/>
					</div>
					<div className='form-group'>
						<label className='text-white' htmlFor='description'>
							Description
						</label>
						<textarea
							type='text'
							className='form-control'
							id='description'
							value={description}
							onChange={onChange}
							placeholder='Description'
							rows='4'
							readOnly={!isEditing}
						/>
					</div>
					<div className='form-group w-100 row'>
						<label className='text-white col-12  p-0' htmlFor='deadline'>
							Deadline:
						</label>
						<DateTimePicker
							className='form-control col-12'
							id='deadline'
							minDate={new Date()}
							value={deadline}
							onChange={(e) => onChangeDate(e)}
							disabled={!isEditing}
							clearIcon={null}
						/>
					</div>
					<div className='custom-control custom-checkbox mt-4'>
						<input
							type='checkbox'
							id='urgent'
							className='custom-control-input'
							checked={urgent}
							onChange={onChange}
							disabled={!isEditing}
						/>
						<label className='custom-control-label text-white' htmlFor='urgent'>
							Urgent
						</label>
					</div>
					<div className='custom-control custom-checkbox mb-4'>
						<input
							type='checkbox'
							id='important'
							className='custom-control-input'
							checked={important}
							onChange={onChange}
							disabled={!isEditing}
						/>
						<label
							className='custom-control-label text-white'
							htmlFor='important'
						>
							Important
						</label>
					</div>
					{drawSubTodo()}
					<div
						className='mb-2 mt-4 btn btn-danger btn-block'
						onClick={() => handleDeleteTodo()}
					>
						<i className='fas fa-trash'></i>
					</div>
				</div>
			);
		}
	};

	return (
		<div
			className={`todoFormWrapper m-auto col-lg-5 bg-dark ${
				isActive ? 'active' : ''
			}`}
		>
			{isTodoSelected()}
		</div>
	);
};

export default TodoForm;
