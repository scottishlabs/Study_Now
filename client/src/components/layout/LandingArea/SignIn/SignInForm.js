import React, { useState } from 'react';

const SignInForm = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
		isRemember: false,
	});

	const formChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	return (
		<form className='text-left'>
			<h1>Sign In</h1>
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
			<div className='form-group form-check'>
				<label className='form-check-label'>
					<input
						type='checkbox'
						className='form-check-input'
						id='isRemember'
						value={form.isRemember}
						onChange={(e) => setForm({ ...form, isRemember: !form.isRemember })}
					/>
					Remember me
				</label>
			</div>
			<button type='submit' className='btn btn-primary btn-block'>
				Sign in
			</button>
		</form>
	);
};

export default SignInForm;
