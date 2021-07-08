import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../../context/auth/authContext";
import AlertContext from "../../../../context/alert/alertContext";
import Alert from "../../Alert";

const SignInForm = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [form, setForm] = useState({
    email: "",
    password: "",
    // isRemember: false,
  });

  const { email, password } = form;

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <form className="text-left" onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
      </div>
      {/* 			<div className='form-group form-check'>
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
			</div> */}
      <input
        type="submit"
        className="btn btn-primary btn-block"
        value="Sign in"
      />
      <Alert />
    </form>
  );
};

export default SignInForm;
