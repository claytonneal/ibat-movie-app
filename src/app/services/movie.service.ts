import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() : Observable<Movie[]> {

    const endpoint = `https://college-movies.herokuapp.com/`;
    return this.http.get<Movie[]>(endpoint).pipe();

  }

}
