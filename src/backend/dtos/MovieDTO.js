export class MovieDTO {
    constructor(id, title, rating, releaseDate, posterPath){
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
    }
}