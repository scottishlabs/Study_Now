import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footerWrapper'>
			<div className='navbar navbar-expand-lg navbar-light container'>
				<Link className='nav-link'>About</Link>
				<Link className='nav-link'>Contact us</Link>
				<Link className='nav-link'>Site map</Link>
			</div>
		</footer>
	);
};

export default Footer;
