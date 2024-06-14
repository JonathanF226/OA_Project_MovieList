import React, { useState, useEffect } from 'react';
import CustomCardTV from './TVCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const TVList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch('http://localhost:3001/tvshows/popularTVShows');
                if (!response.ok) {
                    throw new Error('Error!');
                }
                const data = await response.json();
                setShows(data);
            } catch (e) {
                console.error('Error fetching TV shows:', e);
            }
        };
        fetchShows();
    }, []);

    return (
        <div className="tvshows-list">
            {shows.map((show) => (
                <CustomCardTV
                    key={show.id}
                    id={show.id}
                    title={show.title}
                    image={`https://image.tmdb.org/t/p/w154${show.posterPath}`}
                    rating={show.rating}
                    airDate={show.airDate}
                />
            ))}
        </div>
    );
};

export default TVList;
