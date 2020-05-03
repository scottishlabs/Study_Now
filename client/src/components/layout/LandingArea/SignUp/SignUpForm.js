import React, { useState } from 'react';

const SignUpForm = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	return (
		<form className='text-left'>
			<h1>Sign Up</h1>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					className='form-control'
					placeholder='Name'
					value={form.name}
					onChange={formChange}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='email'>Email address</label>
				<input
					type='email'
					id='email'
					className='form-control'
					aria-describedBy='emailHelp'
					placeholder='Email'
					value={form.email}
					onChange={formChange}
				/>
				<small id='emailHelp' className='form-text text-muted'>
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					className='form-control'
					placeholder='Password'
					value={form.password}
					onChange={formChange}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='confirmPassword'>Confirm password</label>
				<input
					type='password'
					id='confirmPassword'
					className='form-control'
					placeholder='Confirm password'
					value={form.confirmPassword}
					onChange={formChange}
				/>
			</div>
			<button type='submit' className='btn btn-primary btn-block'>
				Sign up
			</button>
		</form>
	);
};

export default SignUpForm;
