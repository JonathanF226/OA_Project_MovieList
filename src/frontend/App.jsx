import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MoviesShow from "./MoviesShow";
import MovieDetails from "./MovieDetails";
import TVList from "./TVList";
import TVDetails from "./TVDetails";
import Favorites from "./Favorites";
import Navbar from './Navbar.jsx';

function App() {
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesShow/>}></Route>
        <Route path="/movies/:id" element={<MovieDetails/>}></Route>
        <Route path="/tvshows" element={<TVList />}></Route>
        <Route path="/tvshows/:id" element={<TVDetails />}></Route>
        <Route path="/favorite" element={<Favorites />}></Route>
      </Routes>
    </Router>
  )
}

export default App
