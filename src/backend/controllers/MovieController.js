import { getPopularMovies } from "../models/MovieModel.js"

export const getPopularMoviesController = async () => {
    return await getPopularMovies()
}