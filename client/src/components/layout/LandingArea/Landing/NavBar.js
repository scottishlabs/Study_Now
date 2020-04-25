import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Fragment>
			<nav className='navbarWrapper navbar fixed-top navbar-expand-lg navbar-light bg-light shadow'>
				<a href='/' className='navbar-brand text-primary '>
					<strong>Study Now</strong>
				</a>
				<ul className='navbar-nav ml-auto'>
					<div className='form-inline my-2 my-lg-0 ml-auto'>
						<Link className='nav-link mx-2 my-2 my-sm-0 text-dark' to='/Signin'>
							Sign in
						</Link>
						<Link className='btn btn-primary mx-2 my-2 my-sm-0' to='/Signup'>
							Sign up
						</Link>
					</div>
				</ul>
			</nav>
		</Fragment>
	);
};

export default NavBar;
