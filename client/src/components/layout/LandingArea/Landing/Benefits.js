import React from 'react';
import benefits1 from '../../../../assets/images/LandingArea/Landing/benefits1.jpg';
import benefits2 from '../../../../assets/images/LandingArea/Landing/benefits2.jpg';
import benefits3 from '../../../../assets/images/LandingArea/Landing/benefits3.png';

const Benefits = ({ myRef }) => {
	return (
		<div className='benefitWrapper shadow' ref={myRef}>
			<div className='container d-flex flex-column justify-content-around'>
				{/*  */}
				<div className='card bg-transparent border-0 benefitCard'>
					<div className='container d-flex flex-column-reverse flex-lg-row text-center text-lg-left'>
						<div className='container-fluid m-auto'>
							<img
								src={benefits1}
								alt=''
								height='500px'
								className='benefit1 shadow'
							/>
						</div>
						<div className='container-fluid m-auto'>
							<div className='text-center'>
								<i className='far fa-calendar-check card-img-top text-light text-center mb-2 circleIcon shadow' />
							</div>
							<div className='card-body'>
								<h6 className='card-subtitle text-primary mb-1'>ORGANIZE</h6>
								<h3 className='card-title text-dark'>
									It's never been so easy to put your life together.
								</h3>
								<p className='card-text'>
									Organize everything you need to to do in one simple list with
									one easy to use to-do list feature. Each to-do with a deadline
									will be synchronized seamlessly to the calendar page
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='card bg-transparent border-0 benefitCard'>
					<div className='container d-flex flex-column flex-lg-row text-center text-lg-left'>
						<div className='container-fluid m-auto'>
							<div className='text-center'>
								<i className='fas fa-pencil-alt card-img-top text-light text-center mb-2 circleIcon shadow' />
							</div>
							<div className='card-body'>
								<h6 className='card-subtitle text-primary mb-1'>CREATE</h6>
								<h3 className='card-title text-dark'>
									Learn information in a flash.
								</h3>
								<p className='card-text'>
									Great research has been done to find the most effective of
									studying so you can retain as much information as possible in
									the shortest amount of time. Our flashcard feature has been
									developed using a combination of the active recall and spaced
									repetition study techniques to learn as fast as possible
								</p>
								<a
									href='https://aliabdaal.com/guide/study/activerecallstudytechnique/'
									className='card-link text-primary'
								>
									Learn more abut active recall and spaced repetition
								</a>
							</div>
						</div>
						<div className='container-fluid m-auto text-lg-right'>
							<img src={benefits2} alt='' className='benefit1 shadow' />
						</div>
					</div>
				</div>

				<div className='card benefitCard border-0 bg-transparent '>
					<div className='container d-flex flex-column text-center text-lg-left'>
						<div className='container-fluid m-auto w-75'>
							<div className='text-center'>
								<i className='fas fa-bus card-img-top center text-light mb-2 circleIcon shadow' />
							</div>
							<div className='card-body '>
								<h6 className='card-subtitle text-primary text-center mb-1'>
									TRAVEL
								</h6>
								<h3 className='card-title text-dark text-center'>
									Your life at the end of your fingertips anytime, anywhere.
								</h3>
								<p className='card-text text-center'>
									Wherever you are, wherever you go you can bring you revision
									with you. Study Now is available on any platform with a web
									browser and automatically synchronizes between devices every
									time you open the application. You have full and easy control
									of your studies.
								</p>
							</div>
						</div>
						<img src={benefits3} alt='' className='benefit3 shadow mt-5 p-5' />
					</div>
				</div>

				<div className='card benefitCard border-0 bg-transparent'>
					<div className='container d-flex flex-column text-center text-lg-left'>
						<div className='container-fluid m-auto'>
							<div className='card-body '>
								<h2 className='card-title text-dark text-center'>
									Available on:
								</h2>
								<div className='d-flex flex-row w-75 mx-auto justify-content-around my-5'>
									<i className='fab fa-microsoft'></i>
									<i className='fab fa-apple'></i>
									<i className='fab fa-linux'></i>
									<i className='fab fa-android'></i>
									<i className='fas fa-mobile'></i>
									<i className='fas fa-tablet'></i>
									<i className='fas fa-laptop'></i>
									<i className='fas fa-desktop'></i>
								</div>
								<h5 className='card-subtitle text-center'>
									Any platform with a browser!
								</h5>
							</div>
						</div>
					</div>
				</div>
				{/*  */}
			</div>
		</div>
	);
};

export default Benefits;
