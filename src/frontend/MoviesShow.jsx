import React, { useState, useEffect } from 'react';
import CustomCard from './Card';
import './App.css';

const MoviesShow = () => {
    const [movies, setMovies] = useState([]); 
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true); 

    const fetchMovies = async () => {
        try {
            const response = await fetch(`http://localhost:3001/movies/popularMovies?page=${page}`);
            if (!response.ok) {
                throw new Error('Error fetching movies!');
            }
            const data = await response.json();
            if (data.results) {
                setMovies(data.results); 
            } else {
                setMovies([]); 
            }
            if (data.total_pages !== undefined) {
                setTotalPages(data.total_pages); 
            } else {
                setTotalPages(1); 
            }
            setLoading(false); 
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [page]); 

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="movies-list">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <CustomCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.posterPath} 
                        rating={movie.rating} y
                        releaseDate={movie.releaseDate}
                    />
                ))
            ) : (
                <p>No movies found.</p>
            )}
            <div className="pagination">
                <button onClick={prevPage} disabled={page === 1}>Previous</button>
                <span>{page} of {totalPages}</span>
                <button onClick={nextPage} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default MoviesShow;
