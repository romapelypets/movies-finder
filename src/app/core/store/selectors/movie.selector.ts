import { createSelector } from '@ngrx/store';
import { MovieState } from '../state/movie.state';

export const movies = (state: MovieState) => state.movies;
export const selectedMovie = (state: MovieState) => state.selectedMovie;

// export const getMovies = createSelector(
//   movies,
//   (state: MovieState) => state.movies
// );
