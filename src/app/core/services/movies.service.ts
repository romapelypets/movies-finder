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

  getMovie(id: number) {
    return this.http.get(this.movies_url + 'movie/' + id + '?api_key=' + this.movies_key);
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get(this.movies_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.movies_key).pipe(
      map((data: any) =>
        data.results
          .sort((a: any, b: any) => (a.vote_average < b.vote_average ? 1 : -1))
          .map((item: Movie) => {
            return {
              id: item.id,
              title: item.title,
              overview: item.overview,
              poster_path: item.poster_path,
              release_date: item.release_date,
              vote_average: item.vote_average
            };
          })
      )
    );
  }

  getUpcomingMovies() {}
}
