import React from 'react';

const TodoItem = ({ onClick, isCompleted, name }) => {
	return (
		<div className='list-group-item'>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='checkbox'
					checked={isCompleted}
					id='check'
				/>
				<label
					style={{ textDecoration: isCompleted ? 'line-through' : '' }}
					className='form-check-label'
					htmlFor='check'
				>
					{name}
				</label>
			</div>
		</div>
	);
};

export default TodoItem;
