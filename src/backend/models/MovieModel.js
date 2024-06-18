import axios from "axios";
import { MovieDTO } from "../dtos/MovieDTO.js";
import { DetailDTO } from "../dtos/DetailDTO.js";


export const getPopularMovies = async (page) => {
    const cleanedMovies = [];
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const data = response.data;
        const movies = data.results;
        movies.forEach(movie => {
            let cleanedMovie = new MovieDTO(movie.id, movie.title, movie.vote_average, movie.release_date, movie.poster_path);
            cleanedMovies.push(cleanedMovie);
        });
        return { movies: cleanedMovies, totalPages: data.total_pages }; 
    } catch (e) {
        console.log(e);
        throw e;
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


export const searchMovies = async (query, page) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        const { results, total_pages } = response.data;

        const movies = results.map(movie => new MovieDTO(
            movie.id,
            movie.title,
            movie.vote_average,
            movie.release_date,
            movie.poster_path
        ));

        return { movies: movies, total_pages: total_pages };
    } catch (error) {
        console.error('Error fetching movies from TMDB API:', error.response ? error.response.data : error.message);
        throw new Error('Error fetching movies from TMDB API');
    }
}