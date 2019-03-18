import { createSelector } from '@ngrx/store';
import { IMovieState } from '../state/movie.state';

export const movies = (state: IMovieState) => state.movies;
export const selectedMovie = (state: IMovieState) => state.selectedMovie;

// export const getMovies = createSelector(
//   movies,
//   (state: IMovieState) => state.movies
// );
