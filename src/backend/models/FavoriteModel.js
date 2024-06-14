import db from "../db.js"; 

export const addFavorite = async (movieId, name) => {
  try {
      const sql = 'INSERT INTO favorites (movie_id, name) VALUES (?, ?)';
      await db.execute(sql, [movieId, name]);
  } catch (error) {
      throw new Error("Error adding the movie/TV show to favorites.");
  }
};

export const checkIfFavoriteExists = async (movieId) => {
  try {
      const sql = 'SELECT COUNT(*) AS count FROM favorites WHERE movie_id = ?';
      const [rows] = await db.promise().execute(sql, [movieId]);
      const count = rows[0].count;
      return count > 0;
  } catch (error) {
      throw new Error("Error checking if movie is already in favorites.");
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
      const [rows] = await db.promise().execute(sql);   
      if (!rows || rows.length === 0) {
        console.error('No favorites found in the database.');
        throw new Error('No favorites found');
      }
      return rows;
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw new Error('Error fetching favorites');
    }
  };

