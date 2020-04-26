import React from 'react';
import NavBar from '../../layout/UserArea/NavBar';
import PageChooser from '../../layout/UserArea/UserHome/PageChooser';

// Renders the user home page
const UserHome = () => {
	return (
		<>
			<NavBar className='navbar' content={PageChooser} />
		</>
	);
};

export default UserHome;
