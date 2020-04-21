import React from 'react';
import { NavBar, TodoArea } from '../../';

// TODO: when add todo also set it to current
// Renders the todos page
const Todos = () => {
	return (
		<>
			<NavBar className='navbar' content={TodoArea} />
		</>
	);
};

export default Todos;
