import { getMovieDetails, getPopularMovies, searchMovies } from "../models/MovieModel.js"

export const getPopularMoviesController = async (page) => {
    try {
        const { movies, totalPages } = await getPopularMovies(page); 
        return { results: movies, total_pages: totalPages }; 
    } catch (e) {
        console.log(e);
        throw new Error("Error fetching popular movies.");
    }
}

export const getMovieDetailsController = async (id) => {
    try {
        const movieDetails = await getMovieDetails(id);
        if (!movieDetails) {
            throw new Error(`Movie with ID ${id} not found.`);
        }
        return movieDetails;
    } catch (e) {
        console.log(e);
        throw new Error('Error fetching movie details.');
    }
}

export const getSearchMovieController = async (query, page) => {
    return await searchMovies(query, page)
}