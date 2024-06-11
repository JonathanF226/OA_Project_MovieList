import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MoviesShow from "./MoviesShow";
import MovieDetails from "./MovieDetails";
import TVList from "./TVList";
import TVDetails from "./TVDetails";

function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MoviesShow/>}></Route>
        <Route path="/movies/:id" element={<MovieDetails/>}></Route>
        <Route path="/tvshows" element={<TVList />}></Route>
        <Route path="/tvshows/:id" element={<TVDetails />}></Route>
      </Routes>
    </Router>
  )
}

export default App
