import { Movie } from '@app/core/models/movie';
import { LoadMovies, LOAD_MOVIES, GetMovies } from './../actions/movie.action';
import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
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

  constructor(private actions$: Actions, private moviesService: MoviesService, private store: Store<AppState>) {}
}
