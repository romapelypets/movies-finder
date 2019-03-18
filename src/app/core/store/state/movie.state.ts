import { IMovie } from '@app/core/models/movie';

export interface IMovieState {
  movies: IMovie[];
  selectedMovie: IMovie;
}

export const initialMovieState: IMovieState = {
  movies: [],
  selectedMovie: null
};
