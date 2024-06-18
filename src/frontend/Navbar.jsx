import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function BasicExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async (query, page = 1) => {
    try {
      const response = await fetch(`http://localhost:3001/movies/searchMovies?query=${query}&page=${page}`);
      if (!response.ok) {
        throw new Error('Error fetching movies!');
      }
      const data = await response.json();
      setSearchResults(data.movies || []); 
      setError(null); 
    } catch (error) {
      setError('Error fetching data. Please try again.'); 
      setSearchResults([]); 
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== '') {
      fetchMovies(value, 1); 
    } else {
      setSearchResults([]); 
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tvshows">TV Shows</Nav.Link>
              <Nav.Link href="/favorite">Favorites</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleChange}
              />
              <Button variant="outline-success" onClick={() => fetchMovies(searchTerm, 1)}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {error && <p className="text-danger">{error}</p>}
        <ListGroup>
          {searchResults.slice(0, 5).map((movie) => (
            <ListGroup.Item key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default BasicExample;