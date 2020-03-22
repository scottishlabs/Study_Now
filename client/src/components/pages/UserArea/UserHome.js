import React from 'react';
import { NavBar, PageChooser } from '../../';

const UserHome = () => {
	return (
		<>
			<NavBar className='navbar' content={PageChooser} />
		</>
	);
};

export default UserHome;
