import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const CustomCard = ({ id, title, image, rating, releaseDate }) => {
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
            'Content-Type': 'application/json' // Specify the Content-Type header
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
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>Rating: {rating}</p>
            <p>Release Date: {releaseDate}</p>
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
  }
  
  export default CustomCard;