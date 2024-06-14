import React, { useState, useEffect } from 'react';
import CustomCard from './Card';
import './App.css';

const MoviesShow = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:3001/movies/popularMovies');
                if (!response.ok) {
                    throw new Error('Error!');
                }
                const data = await response.json();
                setMovies(data);
            } catch (e) {
                console.error('Error fetching movies:', e);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <CustomCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={`https://image.tmdb.org/t/p/w154${movie.posterPath}`}
                    rating={movie.rating}
                    releaseDate={movie.releaseDate}
                />
            ))}
        </div>
    );
};

export default MoviesShow;
