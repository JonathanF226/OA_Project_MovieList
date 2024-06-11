import React, { useState, useEffect } from 'react';
import CustomCardTV from './TVCard';
import './App.css';

const TVShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try{
                const response = await fetch('http://localhost:3001/tvshows/popularTVShows');
                if(!response.ok){
                    throw new Error(`Error!`);
                }
                const data = await response.json();
                setShows(data);
            } catch(e){
                console.error('Error fetching movies:', e);
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
}

export default TVShows