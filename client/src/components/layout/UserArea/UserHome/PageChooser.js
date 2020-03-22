import React from 'react';
import { Link } from 'react-router-dom';

const PageChooser = () => {
	return (
		<div className='fluid-container' style={{ marginTop: '70px' }}>
			<div className='row'>
				<div className='col-md-6 d-flex align-items-stretch mb-3'>
					<div className='card'>
						<div className='card-header h3 nowrap '>Calendar</div>
						<div className='card-body'>
							<h5 className='card-subtitle mb-2'>
								A <strong>more effective</strong> way of managing your day...
							</h5>
							<p className='card-text'>
								See your month at a glance and make your time more productive.
								You can view and add your events all at a touch of a button.
							</p>
						</div>
						<div className='card-footer'>
							<Link
								to='/Calendar'
								className='btn btn-outline-primary w-100 py-1 px-3'
							>
								{' '}
								Enter
							</Link>
						</div>
					</div>
				</div>
				<div className='col-md-6 d-flex align-items-stretch mb-3'>
					<div className='card'>
						<div className='card-header h3 nowrap'>To-do Lists</div>
						<div className='card-body'>
							<h5 className='card-subtitle mb-2'>
								<strong>Plan</strong> and <strong>organize</strong> all of your
								To-dos all in one place...
							</h5>
							<p className='card-text'>
								Take notes in an organized fashion and cross off tasks as they
								are completed. Stay on top of what your are doing by sorting
								items by colour{' '}
							</p>
						</div>
						<div className='card-footer'>
							<Link
								to='/Todos'
								className='btn btn-outline-primary w-100 py-1 px-3'
							>
								{' '}
								Enter
							</Link>
						</div>
					</div>
				</div>
				<div className='col-md-6 d-flex align-items-stretch mb-3'>
					<div className='card'>
						<div className='card-header h3 nowrap'>Pomodoro Timer</div>
						<div className='card-body'>
							<h5 className='card-subtitle mb-2'>
								Break up your studies, <strong>reduce the burning out</strong>{' '}
								feeling...
							</h5>
							<p className='card-text'>
								The Pomodoro timer is a time management technique created by
								Francesco Cirillo for a more productive way to work and study
								and reducing the fatigue of cramming information.
							</p>
						</div>
						<div className='card-footer'>
							<Link
								to='/PomodoroTimer'
								className='btn btn-outline-primary w-100 py-1 px-3'
							>
								{' '}
								Enter
							</Link>
						</div>
					</div>
				</div>
				<div className='col-md-6 d-flex align-items-stretch mb-3'>
					<div className='card'>
						<div className='card-header h3 nowrap'>Flashcards</div>
						<div className='card-body'>
							<h5 className='card-subtitle mb-2'>
								A <strong>much more efficient</strong> study technique than
								traditional methods...
							</h5>
							<p className='card-text'>
								Using an intelligent spaced repetition algorithm flashcards have
								been revolutionized to be be as effective learning tool as
								possible.
							</p>
						</div>
						<div className='card-footer'>
							<Link
								to='/Flashcards'
								className='btn btn-outline-primary w-100 py-1 px-3'
							>
								{' '}
								Enter
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageChooser;
