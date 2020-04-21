import React from 'react';

const SignUpSidebar = () => {
	return (
		<div className='signUpSidebar shadow bg-light' style={{ height: '100vh' }}>
			<div className='d-block m-auto'>
				<h1>Sign Up</h1>
				<hr className='my-3 bg-white' />
				<form>
					<div className='form-group'>
						<label htmlFor='firstNameInput'>First Name</label>
						<input className='form-control' type='text' id='firstNameInput' />
					</div>
					<div className='form-group'>
						<label htmlFor='lastNameInput'>Last Name</label>
						<input className='form-control' type='text' id='lastNameInput' />
					</div>
					<div className='form-group'>
						<label htmlFor='emailInput'>Email</label>
						<input className='form-control' type='email' id='emailInput' />
					</div>
					<div className='form-group'>
						<label htmlFor='passwordInput'>Password</label>
						<input
							className='form-control'
							type='password'
							id='passwordInput'
							aria-describedby='passwordHelp'
						/>
						<small id='passwordHelp' className='form-text text-muted'>
							Passwords must have at least 8 characters and must include an
							uppercase letter, a lowercase letter, a number and a symbol
						</small>
					</div>
					<div className='form-group'>
						<label htmlFor='confirmPasswordInput'>Confirm Password</label>
						<input
							className='form-control'
							type='password'
							id='confirmPasswordInput'
							aria-describedby='confirmPasswordHelp'
						/>
						<small id='confirmPasswordHelp' className='form-text text-muted'>
							Passwords must match
						</small>
					</div>
					<button type='submit' className='btn btn-block btn-primary'>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUpSidebar;
