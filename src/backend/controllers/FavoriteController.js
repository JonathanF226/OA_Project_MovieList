import { addFavorite, removeFavorite, getFavorites, checkIfFavoriteExists } from "../models/FavoriteModel.js";

export const addFavoriteController = async (movieId, name) => {
    try {
        const isFavorite = await checkIfFavoriteExists(movieId);
        if (isFavorite) {
            throw new Error("Movie is already in favorites.");
        }
        await addFavorite(movieId, name);
    } catch (error) {
        throw new Error("Error adding the movie/TV show to favorites: " + error.message);
    }
}

export const removeFavoriteController = async (movieId) => {
    return await removeFavorite(movieId);
}

export const getFavoritesController = async () => {
    return await getFavorites();
}

