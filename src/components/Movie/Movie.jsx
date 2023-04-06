import React from 'react';
import { movies } from './../../movie-database';
import { useParams } from 'react-router-dom';
import './movie.css'

const getMovieById = (id) => {
    return movies.find(movie => movie.id === id);
  }

export const Movie = () => {
    const { id } = useParams()
    const movie = getMovieById(Number(id))
    
    return (
        <div className="movie">
            <div className="movie-detail">
                <div className="movie-poster">
                    <img src={movie.poster} alt={movie.title}/>
                </div>
                <div className="movie-info">
                    <p><b>Year: </b>{movie.year}</p>
                    <p><b>Rating: </b>{movie.rating}</p>
                    <p><b>Director: </b>{movie.director}</p>
                    <p><b>Genre: </b>{movie.genre}</p>
                    <h3>Cast:</h3>
                    <ul>{movie.cast.map((c) => <li key={c.name}>{c.name} ({c.as})</li>)}</ul>
                </div>  
            </div>
            <h2>{movie.title}</h2>
            <p>{movie.storyline}</p>
        </div>
    )
};
