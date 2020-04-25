import React, { useRef } from 'react';
import Spotlight from './Spotlight';
import NavBar from './NavBar';
import Benefits from './Benefits';
import Footer from './Footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 72);

const LandingArea = () => {
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

	return (
		<div className='d-flex flex-column mainColumn'>
			<NavBar />
			<Spotlight scrollToRef={executeScroll} />
			<Benefits myRef={myRef} />
			<Footer className='shadow-lg' />
		</div>
	);
};

export default LandingArea;
