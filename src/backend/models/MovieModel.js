import axios from "axios";
import { MovieDTO } from "../dtos/MovieDTO.js";

export const getPopularMovies = async () => {
    const cleanedMovies = []
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    })
    const data = response.data
    const movies = data.results
    movies.map(movie => {
        let cleanedMovie = new MovieDTO(movie.title, movie.vote_average, movie.release_date, movie.poster_path)
        cleanedMovies.push(cleanedMovie)
    })
    return cleanedMovies
    } catch(e) {
        console.log(e)
        throw e
    }
}