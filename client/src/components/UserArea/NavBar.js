import React from 'react';

const NavBar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
			<a class='navbar-brand' href='#'>
				Study Now
			</a>
			<button
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span class='navbar-toggler-icon'></span>
			</button>

			<div class='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul class='navbar-nav mr-auto'>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							Calendar
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							To-do Lists
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							Pomodoro Timer
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='#'>
							Flashcards
						</a>
					</li>
				</ul>
				<button
					class='btn btn-outline-light py-1 my-2 my-lg-0'
					type='submit'
				>
					Sign out
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
