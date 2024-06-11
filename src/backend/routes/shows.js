import express from "express";
import { getPopularTVShowsController, getTVShowDetailsController } from "../controllers/TVController.js";

const router = express.Router();

router.get("/popularTVShows", async (req, res) => {
    try{
        const shows = await getPopularTVShowsController();
        res.send(shows)
    } catch (e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/:id", async (req, res) => {
    try {
        const tvShowDetails = await getTVShowDetailsController(req.params.id);
        res.send(tvShowDetails)
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});

export default router;