import { getMovieDetails, getPopularMovies } from "../models/MovieModel.js"

export const getPopularMoviesController = async () => {
    return await getPopularMovies()
}

export const getMovieDetailsController = async (id) => {
    return await getMovieDetails(id)
}

export const autocompleteMoviesController = async (query) => {
    return await autocompleteMovies(query);
}