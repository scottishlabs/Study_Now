import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../../../../context/alert/alertContext";
import AuthContext from "../../../../context/auth/authContext";
import Alert from "../../Alert";

const SignUpForm = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const { name, email, password, confirmPassword } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <form className="text-left" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        />
      </div>
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
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={onChange}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary btn-block"
        value="Sign up"
      />
      <Alert />
    </form>
  );
};

export default SignUpForm;
