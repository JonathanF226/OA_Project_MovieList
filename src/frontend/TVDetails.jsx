import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TVDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/tvshows/${id}`);
                if (!response.ok) {
                    throw new Error('Error!');
                }
                const data = await response.json();
                setShow(data);
            } catch (e) {
                console.error('Error fetching TV show:', e);
            }
        };
        fetchShowDetails();
    }, [id]);

    return (
        <div className='details-container'>
            <h1>{show.title}</h1>
            <p>Release Date: {show.airDate}</p>
            <p>Rating: {show.rating}</p>
            <img src={`https://image.tmdb.org/t/p/w154${show.posterPath}`} alt={show.title} />
            <p>Overview: {show.overview}</p>
            <p>Popularity: {show.popularity}</p>
        </div>
    );
};

export default TVDetails;
