import React from 'react';

const PageChooser = () => {
	return (
		<div className='container mt-5'>
			<div className='row row-cols-1 row-cols-md-2'>
				<div className='col mb-3'>
					<div className='card'>
						<div className='card-header h3'>Calendar</div>
						<div className='card-body'>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<button className='btn btn-outline-primary py-1 px-3'> Enter</button>
						</div>
					</div>
				</div>
				<div className='col mb-3'>
					<div className='card'>
						<div className='card-header h3'>To-do Lists</div>
						<div className='card-body'>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<button className='btn btn-outline-primary py-1 px-3'> Enter</button>
						</div>
					</div>
				</div>
				<div className='col mb-3'>
					<div className='card'>
						<div className='card-header h3'>Pomodoro Timer</div>
						<div className='card-body'>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<button className='btn btn-outline-primary py-1 px-3'> Enter</button>
						</div>
					</div>
				</div>
				<div className='col mb-3'>
					<div className='card'>
						<div className='card-header h3'>Flashcards</div>
						<div className='card-body'>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<button className='btn btn-outline-primary py-1 px-3'> Enter</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageChooser;
