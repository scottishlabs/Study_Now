import React from 'react';
import SignUpForm from './SignUpForm';
import './SignUp.css';

const SignUpArea = (props) => {
	return (
		<div
			className='container w-100'
			style={{ height: '100vh', padding: '8rem 0' }}
		>
			<div
				className='jumbotron bg-white text-center h-100 border border-transparent shadow'
				style={{ borderRadius: '10px' }}
			>
				<div className='row h-100'>
					<div className='col-12 col-md-7 order-2 order-md-1 vl'></div>
					<div className='col-12 col-md-5 order-1 order-md-2'>
						<SignUpForm {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpArea;
