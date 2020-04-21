import React from 'react';
import { NavBar, PageChooser } from '../../';

// Renders the user home page
const UserHome = () => {
	return (
		<>
			<NavBar className='navbar' content={PageChooser} />
		</>
	);
};

export default UserHome;
