import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('http://localhost:3001/favorite');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error.message);
      }
    };
  
    fetchFavorites();
  }, []);

  return (
    <Container>
      <h1>Favorites</h1>
      <div className="d-flex flex-wrap">
        {favorites.map((favorite) => (
          <Card key={favorite.movie_id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{favorite.name}</Card.Title>
              {/* Additional fields can be displayed here */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Favorites;
