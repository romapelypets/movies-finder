import { Movie } from '@app/core/models/movie';
import { LoadMovies, LoadMovie, LOAD_MOVIES, LOAD_MOVIE, GetMovies, GetMovie } from './../actions/movie.action';
import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesService } from '@app/core/services/movies.service';
import { selectMovies } from '../selectors/movie.selector';

@Injectable()
export class MovieEffects {
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType<LoadMovies>(LOAD_MOVIES),
    switchMap(() => this.moviesService.getPopularMovies()),
    switchMap((movies: Movie[]) => of(new GetMovies(movies)))
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

  constructor(private actions$: Actions, private moviesService: MoviesService, private store: Store<AppState>) {}
}
