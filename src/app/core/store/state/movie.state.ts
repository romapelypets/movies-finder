import { Movie } from '@app/core/models/movie';

export interface MovieState {
  movies: Movie[];
  selectedMovie: Movie;
}

export const initialMovieState: MovieState = {
  movies: [],
  selectedMovie: null
};
