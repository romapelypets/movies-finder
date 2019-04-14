import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies_url = environment.movies_url;
  private movies_key = environment.movies_key;

  constructor(private http: HttpClient) {}

  getMovie(id: number): Observable<Movie> {
    return this.http.get(this.movies_url + 'movie/' + id + '?api_key=' + this.movies_key).pipe(
      map((item: Movie) => {
        return {
          id: item.id,
          title: item.title,
          overview: item.overview,
          poster_path: item.poster_path,
          release_date: item.release_date,
          vote_average: item.vote_average,
          runtime: item.runtime,
          budget: item.budget,
          genres: item.genres
        };
      })
    );
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get(this.movies_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.movies_key).pipe(
      map((data: any) =>
        data.results.map((item: Movie) => {
          return {
            id: item.id,
            title: item.title,
            overview: item.overview,
            poster_path: item.poster_path,
            release_date: item.release_date,
            vote_average: item.vote_average,
            runtime: item.runtime,
            budget: item.budget,
            genres: item.genres
          };
        })
      )
    );
  }

  getTopRatedMovies() {
    return this.http.get(this.movies_url + 'movie/top_rated' + '?api_key=' + this.movies_key);
  }

  getUpcomingMovies() {}
}
