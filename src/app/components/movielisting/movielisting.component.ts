import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Movielist } from 'src/app/models/movielist';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.css']
})
export class MovielistingComponent implements OnInit {

  //listing : Movie[] = [
  //  {title: "Batman", year: 1989, director: "Tim Burton", cast: "Michael Keaton, Jack Nicholson"}, 
  //  {title: "Superman", year: 1989, director: "Richard Donner", cast: "Christopher Reeve, Margot Kidder, Gene Hackman"}, 
  //  {title: "Spiderman", year: 1989, director: "Samiu Raimi", cast: "Toby Maguire, Kirsten Dunst, William Dafoe"}
  //];
  listing : Movie[] | any;
  selectedMovie : Movie | any;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.listing = movies;
      this.selectedMovie = this.listing[0];
    });
  }

  selectMovie(movie : Movie) {
    this.selectedMovie = movie;
    console.log(`selected movie = ${movie.title}`)
  }

}
