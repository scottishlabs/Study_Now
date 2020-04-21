import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/LandingArea/Landing/android-chrome-512x512.png';

const NavBar = () => {
	return (
		<Fragment>
			<nav className='navbarWrapper navbar navbar-expand-lg navbar-dark bg-transparent'>
				<a href='/' className='navbar-brand'>
					<img
						src={logo}
						width='30'
						height='30'
						className='d-inline-block align-top border border-secondary rounded mr-2'
						alt=''
					/>
					Study Now
				</a>
				<ul className='navbar-nav ml-auto'>
					<div className='form-inline my-2 my-lg-0 ml-auto'>
						<Link
							className='nav-link mx-2 my-2 my-sm-0 text-white'
							to='/Signin'
						>
							Sign in
						</Link>
						<Link
							className='btn btn-light mx-2 shadow my-2 my-sm-0'
							to='/Signup'
						>
							Sign up
						</Link>
					</div>
				</ul>
			</nav>
		</Fragment>
	);
};

export default NavBar;
