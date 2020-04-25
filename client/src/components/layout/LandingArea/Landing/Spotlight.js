import React from 'react';
import { Link } from 'react-router-dom';
import spotlightExample from '../../../../assets/images/LandingArea/Landing/spotlightExample-01.png';

const Spotlight = ({ scrollToRef, scrollRef }) => {
	return (
		<div className='spotlightJumboWrapper'>
			<div className='container bg-transparent text-center text-lg-left'>
				<div className='d-flex flex-column-reverse flex-lg-row'>
					<div
						className='spotlightJumbo container-fluid'
						style={{ flex: '3 1 0' }}
					>
						<h1
							className='display-3 text-dark'
							style={{
								fontSize: '5vmax',
								fontWeight: '350',
							}}
						>
							<strong>Study Smarter Not Harder</strong>
						</h1>
						<p
							className='display-5 my-4 text-dark'
							style={{ fontSize: '2vmax' }}
						>
							Study Now is the perfect companion for any student from GCSE to
							PhD students you can stay organized and get more done!
						</p>
						<div className='d-flex flex-row w-100 justify-content-center justify-content-lg-start my-4'>
							<Link
								className='btn btn-primary shadow mr-2 p-lg-3 px-lg-4'
								to='/signup'
							>
								Get Started - It's Free!
							</Link>
							<button
								className='btn btn-light text-dark p-lg-2 px-lg-4'
								onClick={() => scrollToRef(scrollRef)}
							>
								Learn More
							</button>
						</div>
					</div>
					<div className='' style={{ flex: '0.25 1 0' }}></div>
					<div className='container-fluid ' style={{ flex: '1 1 0' }}>
						<img
							src={spotlightExample}
							alt=''
							className='spotlightImage m-auto'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spotlight;
