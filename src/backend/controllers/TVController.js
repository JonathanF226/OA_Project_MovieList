import { getPopularTVShows, getTVShowDetails } from "../models/TVModel.js"

export const getPopularTVShowsController = async () => {
    return await getPopularTVShows()
}

export const getTVShowDetailsController = async (id) => {
    return await getTVShowDetails(id)
}