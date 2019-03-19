import { AppState } from './../state/app.state';
import { movieReducer } from './movie.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const appReducer: ActionReducerMap<AppState> = {
  movies: movieReducer
};
