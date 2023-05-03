import React from 'react';
import "./ErrorPage.css"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <img className='error-logo' src="error-logo.png" alt="" />
            <h1>404</h1>
            <h2>Error</h2>
            <h3>Worn Route</h3>
            <Link to="/">
                <button className='btn error-btn'>GO TO Home page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;