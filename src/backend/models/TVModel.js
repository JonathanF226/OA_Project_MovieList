import axios from "axios";
import { TVShowDTO } from "../dtos/TVShowDTO.js";
import { TVDetailDTO } from "../dtos/TVDetailDTO.js";

export const getPopularTVShows = async () => {
    const cleanedTVShows = []
    try{
        const response = await axios.get('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    })
    const data = response.data
    const shows = data.results
    shows.map(show => {
        let cleanedShow = new TVShowDTO(show.id, show.original_name, show.vote_average, show.first_air_date, show.poster_path)
        cleanedTVShows.push(cleanedShow)
    })
    return cleanedTVShows
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const getTVShowDetails = async (id) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });
        const show = response.data;
        return new TVDetailDTO(
            show.id,
            show.original_name,
            show.vote_average,
            show.first_air_date, 
            show.poster_path,
            show.overview,
            show.popularity
        );
    } catch(e) {
        console.log(e);
        throw e;
    }
};