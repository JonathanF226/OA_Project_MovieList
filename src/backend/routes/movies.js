import express from "express";
import { getMovieDetailsController, getPopularMoviesController } from "../controllers/MovieController.js";

const router = express.Router();

router.get("/popularMovies", async (req, res) => {
    try{
        const movies = await getPopularMoviesController();
        res.send(movies)
    } catch (e){
        console.log(e);
        res.status(500).send("Internal Server Error");
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