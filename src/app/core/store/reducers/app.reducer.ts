import { AppState } from './../state/app.state';
import { movieReducer } from './movie.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './auth.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  movies: movieReducer,
  auth: authReducer
};
