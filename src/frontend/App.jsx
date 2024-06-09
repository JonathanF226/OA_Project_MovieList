import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MoviesShow from "./MoviesShow";

function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MoviesShow/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
