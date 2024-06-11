export class DetailDTO {
    constructor(id, title, rating, releaseDate, posterPath, overview, popularity){
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
        this.overview = overview;
        this.popularity = popularity;
    }
}