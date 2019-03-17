import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

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

  getPopularMovies() {
    return this.http.get(this.movies_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.movies_key);
  }

  getUpcomingMovies() {}
}
