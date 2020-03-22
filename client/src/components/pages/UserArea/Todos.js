import React from 'react';
import { NavBar, TodoArea } from '../../';

const Todos = () => {
	return (
		<>
			<NavBar className='navbar' content={TodoArea} />
		</>
	);
};

export default Todos;
