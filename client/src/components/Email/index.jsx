import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';
import { signinquery } from '../../actions/auth';

function Email() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault()
        dispatch(signinquery(email, history))
        console.log("DATAS2: ", email);
    }

    const changeHandler = e => setEmail({ ...email, [e.target.name]: e.target.value });

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
                        <input type="email" name="email" id="email" onChange={changeHandler}/>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Continue</button>
                    </li>
                    <hr id="under-line" />
                    <p className="center">New to AutoGurus?</p>
                    <Link to="/user/signup" className="button secondary text-center"> Create an account</Link>
                </ul>
            </form>
        </div>
    </div>  
)};

export default Email;