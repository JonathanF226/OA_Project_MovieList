import express from "express";
import { addFavoriteController, removeFavoriteController, getFavoritesController } from "../controllers/FavoriteController.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const favorites = await getFavoritesController();
        res.status(200).json(favorites); 
    } catch (error) {
        console.error(error.message); 
        res.status(500).send("Internal Server Error");
    }
});


router.post("/insertFavorite", async (req, res) => {
    try {
        const { movieId, name } = req.body;
        await addFavoriteController(movieId, name);
        res.status(201).send('Movie/TV show added to favorites successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.delete("/deleteFavorite/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await removeFavoriteController(id);
        res.status(200).send('Movie/TV show removed from favorites successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
