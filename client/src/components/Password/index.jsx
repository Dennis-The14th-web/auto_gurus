import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/auth';
import './style.css';


const initState = { email: '', password: '' };

function Password() {
    const [form, setForm] = useState(initState);
    const dispatch = useDispatch();
    const history = useHistory();
    // const email = useSelector(state => state.email)

    const submitHandler = e => {
        e.preventDefault();
        dispatch(signin(form, history));
        console.log("DATAS2: ", form);
    };

    const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value });

    return (
    <div>
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Sign-In</h2>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="text" name="email" onChange={changeHandler} />
                    </li>
                    <li>
                        <label htmlFor="password">Password  
                            <small>
                                <Link className="forgot-password" name="password">Forgot password?</Link>
                            </small>
                        </label>
                        <input type="password" id="password" name="password" onChange={changeHandler} />
                    </li>
                    <li>
                        <button type="submit" className="button primary">Sign-In</button>
                    </li>
                    <p>
                    <input type="checkbox" name="email" />
                    <label htmlFor="email">Keep me signed in.</label>
                    </p>
                </ul>
            </form>
        </div>
    </div>  
)};

export default Password;

{/* <Link to="/"><small>Change</small></Link> */}