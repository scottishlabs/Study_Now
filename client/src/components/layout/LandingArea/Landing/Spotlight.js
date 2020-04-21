import React from 'react';
import { Link } from 'react-router-dom';
import spotlightCalendar from '../../../../assets/images/LandingArea/Landing/spotlightCalendar.png';
import spotlightBackground from '../../../../assets/images/LandingArea/Landing/spotlightBackground.png';

const Spotlight = ({ scrollToRef, scrollRef }) => {
	return (
		<div className='row'>
			<div className='spotlightJumbo col-12 col-lg-7 bg-transparent text-white text-left'>
				<h1
					className='display-3 my-4'
					style={{ fontSize: '4vmax', fontWeight: '350' }}
				>
					<strong>Study Smarter Not Harder</strong>
				</h1>
				<p className='lead my-4'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
					accusantium ratione doloribus non obcaecati? Tempora molestias iste
					blanditiis facere obcaecati.
				</p>
				<div className='d-flex flex-row w-100 justify-content-left my-5'>
					<Link className='btn btn-light shadow-lg mr-2' to='/signup'>
						Sign up
					</Link>
					<button
						className='btn btn-outline-light'
						onClick={() => scrollToRef(scrollRef)}
					>
						Learn more
					</button>
				</div>
				<img src={spotlightBackground} alt='' className='spotlightBackground' />
			</div>
			<div className='spotlightImageWrapper col-12 col-lg-5'>
				<img
					className='spotlightImage shadow-lg'
					src={spotlightCalendar}
					alt=''
				/>
			</div>
		</div>
	);
};

export default Spotlight;
