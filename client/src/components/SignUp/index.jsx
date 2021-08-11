import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';
import './style.css';

const initState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function SignUp() {
    const [ form, setForm ] = useState(initState);
    const dispatch = useDispatch();
    const history = useHistory();

    // const [showPassword, setShowPassword] = useState(true);
    // const showPasswordHandler = () => setShowPassword(!showPassword);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(signup(form, history));
        console.log("DATAS1: ", form);
    };

    const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value });

    return (
    <div className="form">
    <form onSubmit={submitHandler}>
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          <label htmlFor="firstName">
            First Name
          </label>
          <input type="name" name="firstName" id="name" onChange={changeHandler} />
        </li>
        <li>
          <label htmlFor="lastName">
            Last Name
          </label>
          <input type="name" name="lastName" id="name" onChange={changeHandler} />
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={changeHandler} />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password"
          id="password" name="password" placeholder="At least 5 characters" 
          onChange={changeHandler} />
        </li>
        <li>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="rePassword" name="confirmPassword" onChange={changeHandler} />
        </li>
        <li>
          <button type="submit" className="button primary">Sign Up</button>
        </li>
        <p>
          Already a member? <small><Link to="/">Sign-In</Link></small>
        </p>

      </ul>
    </form>
  </div>
)};

export default SignUp;
