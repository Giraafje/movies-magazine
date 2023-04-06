import React from 'react';
import film from './../../images/film.jpg';
import './error.css';

export const Error = () => {

    return (
        <main className='container'>
            <h1 className="error-code">404</h1>
            <p className="error-text">Page not found</p>
            <div className="error-image">
                <img src={film} alt="film" width="60%" height="50%" />
            </div>
        </main>
    )
};
