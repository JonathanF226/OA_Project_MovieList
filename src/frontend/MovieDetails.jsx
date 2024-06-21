import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/movies/${id}`);
                if (!response.ok) {
                    throw new Error('Error!');
                }
                const data = await response.json();
                setMovie(data);
            } catch (e) {
                console.error('Error fetching movies:', e);
            }
        };
        fetchMovieDetails();
    }, [id]);

    return (
        <div className='details-container'>
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
            <img src={`https://image.tmdb.org/t/p/w154${movie.posterPath}`} alt={movie.title} />
            <p>Overview: {movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
        </div>
    );
};

export default MovieDetails;
