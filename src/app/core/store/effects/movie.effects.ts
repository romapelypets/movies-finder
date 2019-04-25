import { Movie } from '@app/core/models/movie';
import {
  LoadMovies,
  LoadMovie,
  LOAD_MOVIES,
  LOAD_MOVIE,
  GetMovies,
  GetMovie,
  LoadTopRatedMovies,
  LOAD_TOP_RATED_MOVIES,
  GetTopRatedMovies,
  LoadUpcomingMovies,
  LOAD_UPCOMING_MOVIES,
  GetUpcomingMovies
} from './../actions/movie.action';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesService } from '@app/core/services/movies.service';

@Injectable()
export class MovieEffects {
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType<LoadMovies>(LOAD_MOVIES),
    switchMap(() => this.moviesService.getPopularMovies()),
    switchMap((movies: Movie[]) => of(new GetMovies(movies)))
  );

  @Effect()
  $loadTopRatedMovies = this.actions$.pipe(
    ofType<LoadTopRatedMovies>(LOAD_TOP_RATED_MOVIES),
    switchMap(() => this.moviesService.getTopRatedMovies()),
    switchMap((movies: Movie[]) => of(new GetTopRatedMovies(movies)))
  );

  @Effect()
  $loadUpcomingMovies = this.actions$.pipe(
    ofType<LoadUpcomingMovies>(LOAD_UPCOMING_MOVIES),
    switchMap(() => this.moviesService.getUpcomingMovies()),
    switchMap((movies: Movie[]) => of(new GetUpcomingMovies(movies)))
  );

  @Effect()
  $loadMovie$ = this.actions$.pipe(
    ofType<LoadMovie>(LOAD_MOVIE),
    map((action: LoadMovie) => action.paylaod),
    switchMap((id: number) => {
      return this.moviesService.getMovie(id);
    }),
    switchMap((movie: Movie) => of(new GetMovie(movie)))
  );

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}
