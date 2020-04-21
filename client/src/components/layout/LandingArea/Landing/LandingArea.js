import React, { useRef } from 'react';
import Spotlight from './Spotlight';
import NavBar from './NavBar';
import SignUpSidebar from './SignUpSidebar';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Benefits from './Benefits';
import Features from './Features';
import Footer from './Footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const LandingArea = () => {
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

	return (
		<div className='d-flex flex-column mainColumn'>
			<NavBar />
			<Spotlight scrollToRef={executeScroll} />
			<Benefits myRef={myRef} />
			<Features />
			<Footer />
		</div>
	);
};

export default LandingArea;
