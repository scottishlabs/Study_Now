import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = props => {
	const [state, setState] = useState({
		isActive: true
	});

	const handleClick = () => {
		setState({ isActive: !state.isActive });
	};

	const closeOnClick = () => {};

	return (
		<div className='wrapper'>
			<nav
				className={state.isActive ? 'bg-dark' : 'active bg-dark'}
				id='sidebar'
			>
				<div className='sidebar-header'>
					<h3>Study Now</h3>
					<strong>SN</strong>
				</div>

				<ul className='list-unstyled components'>
					<li className='active'>
						<Link to='/UserHome'>
							<i className='fas fa-home'></i>
							Home
						</Link>
					</li>
					<li>
						<Link to='/Calendar'>
							<i className='fas fa-calendar-alt'></i>
							Calendar
						</Link>
					</li>
					<li>
						<Link to='/Todos'>
							<i className='fas fa-check-square'></i>
							To-do Lists
						</Link>
					</li>
					<li>
						<Link to='/PomodoroTimer'>
							<i className='fas fa-stopwatch'></i>
							Pomodoro Timer
						</Link>
					</li>
					<li>
						<Link to='/Flashcards'>
							<i className='fas fa-pencil-ruler'></i>
							Flashcards
						</Link>
					</li>
				</ul>

				<div></div>
			</nav>

			<div className='content w-100' id='content'>
				<div className='topbar py-3 '>
					<button
						type='button'
						id='sidebarCollapse'
						className='btn btn-dark btnSideBar mx-3'
						onClick={() => handleClick()}
					>
						<i className='fas fa-align-left'></i>
					</button>
					<Link to='/'>
						<button className='btn btn-danger mr-3 float-right'>
							<i className='fas fa-sign-out-alt'></i>
						</button>
					</Link>
				</div>
				<props.content />
			</div>
		</div>
	);
};

export default NavBar;
