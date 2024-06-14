import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Track if search is in progress
  const [suggestions, setSuggestions] = useState([]); // Autocomplete suggestions

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setIsSearching(true);
      const response = await fetch(`http://localhost:3001/search?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for movies:', error);
    } finally {
      setIsSearching(false);
    }
  };  

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    try {
        setIsSearching(true);
        const response = await fetch(`http://localhost:3001/autocomplete?query=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data);
    } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
    } finally {
        setIsSearching(false);
    }
};

  const handleResultSelect = (result) => {
    // Handle the selection of a search result
    console.log('Selected result:', result);
    // Navigate to the details page of the selected movie
    window.location.href = `/movies/${result.id}`; // Navigate using window.location
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/tvshows">TV Shows</Nav.Link>
            <Nav.Link href="/favorite">Favorites</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>

      {/* Display autocomplete suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="dropdown">
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleResultSelect(suggestion)}
                >
                  {suggestion.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display search results dropdown if available */}
      {searchResults.length > 0 && (
        <div className="dropdown">
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {searchResults.map((result) => (
              <li key={result.id}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleResultSelect(result)}
                >
                  {result.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display message if search is in progress */}
      {isSearching && <p>Searching...</p>}
    </Navbar>
  );
}

export default NavScrollExample;
