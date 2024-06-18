import express from "express";
import { getMovieDetailsController, getPopularMoviesController, getSearchMovieController } from "../controllers/MovieController.js";

const router = express.Router();

router.get("/popularMovies", async (req, res) => {
    const { page } = req.query; 
    try {
        const movies = await getPopularMoviesController(page);
        res.send(movies);
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});


router.get("/searchMovies", async (req, res) => {
    const { query, page } = req.query;
    try {
        const results = await getSearchMovieController(query, page);
        res.send(results);
    } catch (e) {
        console.error(e);
        res.status(500).send(`Internal Server Error: ${e}`);
    }
});


router.get("/:id", async (req, res) => {
    try {
        const movieDetails = await getMovieDetailsController(req.params.id);
        res.send(movieDetails);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

export default router;