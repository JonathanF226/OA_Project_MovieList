import { addFavorite, removeFavorite, getFavorites } from "../models/FavoriteModel.js";

export const addFavoriteController = async (movieId, name) => {
    return await addFavorite(movieId, name);
}

export const removeFavoriteController = async (movieId) => {
    return await removeFavorite(movieId);
}

export const getFavoritesController = async () => {
    return await getFavorites();
}

