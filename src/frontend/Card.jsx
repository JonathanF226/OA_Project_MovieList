import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomCard = ({ id, title, posterPath, rating, releaseDate }) => {
    const handleFavoriteClick = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3001/favorite/insertFavorite',
                {
                    movieId: id,
                    name: title
                },
                {
                    headers: {
                        'Content-Type': 'application/json' 
                    }
                }
            );
            console.log('Added to favorites:', response.data);
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    };

    return (
      <Card style={{ width: '18rem' }}>
            {posterPath ? (
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w154${posterPath}`} alt={title} />
            ) : (
                <div className="no-poster">No Poster Available</div>
            )}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {rating ? <p>Rating: {rating}</p> : <p>No rating available</p>}
                    {releaseDate ? <p>Release Date: {releaseDate}</p> : <p>No release date available</p>}
                </Card.Text>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Link to={`/movies/${id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                    <Button variant="primary" onClick={handleFavoriteClick}>Favorite</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;
