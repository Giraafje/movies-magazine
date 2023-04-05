import React from 'react';
import { movies } from './../../movie-database';
import { NavLink } from 'react-router-dom';
import './movieList.css';

export const MovieList = () => {  
    return (  
        <div className="movie-list">
            {movies.map((movie) =>                 
                <NavLink to={`/movies/${movie.id}`} key={movie.id}>{movie.title}</NavLink>
            )} 
        </div>       
    )
};



