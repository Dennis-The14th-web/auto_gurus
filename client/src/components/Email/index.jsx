import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Email() {
    const [email, setEmail] = useState('');
    const changeHandler = e => setEmail({ ...email, [e.target.name]: e.target.value });
    return (
    <div>
        <div className="form">
            <form onSubmit={e => e.preventDefault()}>
                <ul className="form-container">
                    <li>
                        <h2>Sign-In</h2>
                    </li>
                    <li>
                        <label htmlFor="email">
                            User Name
                        </label>
                        <input type="email" name="email" id="email" onChange={changeHandler}/>
                    </li>
                    <li>
                        <Link to="/user/signin" type="submit" className="button primary">Continue</Link>
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