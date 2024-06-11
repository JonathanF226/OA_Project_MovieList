import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CustomCardTV = ({ id, title, image, rating, airDate }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>Rating: {rating}</p>
            <p>Air Date: {airDate}</p>
          </Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to={`/tvshows/${id}`}>
            <Button variant="primary">Details</Button>
        </Link>
          <Button variant="primary">Favorite</Button>
        </div>
        </Card.Body>
      </Card>
    );
  }
  
  export default CustomCardTV;