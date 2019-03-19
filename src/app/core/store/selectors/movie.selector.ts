import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { MovieState } from '../state/movie.state';

export const selectMovies = (state: AppState) => state.movies;

export const getMovies = createSelector(
  selectMovies,
  (state: MovieState) => state.movies
);

export const selectMovie = createSelector(
  selectMovies,
  (state: MovieState) => state.selectedMovie
);
