import React from 'react';
import { MovieList } from './../MovieList';
import { Movie } from './../Movie';
import { Outlet } from 'react-router-dom';
import './movies.css';


export const Movies = () => {

    return (
        <div className="movies">
            <h1>Movies</h1>
            <div className="movies-container">
                <MovieList />
                <Outlet>
                    <Movie/>
                </Outlet>
            </div>
        </div>
    )
};
