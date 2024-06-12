import db from "../db.js"; 

export const addFavorite = async (movieId, name) => {
    try {
        const sql = 'INSERT INTO favorites (movie_id, name) VALUES (?, ?)';
        await db.execute(sql, [movieId, name]);
    } catch (error) {
        throw new Error("Error adding the movie/TV show to favorites.");
    }
};

export const removeFavorite = async (movieId) => {
    try {
        const sql = 'DELETE FROM favorites WHERE movie_id = ?';
        await db.execute(sql, [movieId]);
    } catch (error) {
        throw new Error("Error removing the movie/TV show from favorites.");
    }
};

export const getFavorites = async () => {
    try {
        const sql = 'SELECT * FROM favorites';
        const result = await db.execute(sql);
        return result;
    } catch (error) {
        console.error('Error fetching favorites:', error);
        throw new Error('Error fetching favorites');
    }
};






