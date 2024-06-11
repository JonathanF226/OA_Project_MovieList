import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import movies from './routes/movies.js';
import shows from './routes/shows.js';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(cors());

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.use('/movies', movies)
app.use('/tvshows', shows)