import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import './style.css';

import * as actionConstants from '../../constants/actionConstants';


function Home() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionConstants.LOGOUT_INSTANCE })
        history.push('/');
        setUser(null);
    };

    // useEffect(() => {
    //     const token = user?.token;

    //     if (token) {
    //         const decodedToken = decode(token);

    //         if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    //     }

    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [location])


    return (
        <div>
            <nav className="nav">
          <div className="brand">
          </div>
          <div className="nav-links">
            {/* <a href="cart.html">Profile</a> */}

              {/* <Link to="/profile"></Link> */}
              
           <Link onClick={logout}>Log Out</Link>
          </div>
        </nav>
        <h1 id="center">WELOCME TO MY HOME PAGE</h1>
        </div>
    )
}

export default Home
