import axios from "axios";
import { MovieDTO } from "../dtos/MovieDTO.js";
import { DetailDTO } from "../dtos/DetailDTO.js";

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
        let cleanedMovie = new MovieDTO(movie.id, movie.title, movie.vote_average, movie.release_date, movie.poster_path)
        cleanedMovies.push(cleanedMovie)
    })
    return cleanedMovies
    } catch(e) {
        console.log(e)
        throw e
    }
}

export const getMovieDetails = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const movie = response.data;
        return new DetailDTO(
            movie.id,
            movie.title,
            movie.vote_average,
            movie.release_date,
            movie.poster_path,
            movie.overview,
            movie.popularity
        );
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export const autocompleteMovies = async (query) => {
    const cleanedMovies = [];
    try {
        // Make a request to the TMDB API to search for movies based on the query
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query: query,
                api_key: process.env.API_KEY
            }
        });
        
        // Extract the movie data from the response and create MovieDTO objects
        const data = response.data;
        const movies = data.results;
        movies.forEach(movie => {
            let cleanedMovie = new MovieDTO(movie.id, movie.title, movie.vote_average, movie.release_date, movie.poster_path);
            cleanedMovies.push(cleanedMovie);
        });
        
        return cleanedMovies;
    } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
        throw error;
    }
};