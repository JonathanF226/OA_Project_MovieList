export class TVDetailDTO {
    constructor(id, title, rating, airDate, posterPath, overview, popularity){
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.airDate = airDate;
        this.posterPath = posterPath;
        this.overview = overview;
        this.popularity = popularity;
    }
}