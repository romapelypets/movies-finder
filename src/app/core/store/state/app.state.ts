import { MovieState, initialMovieState } from './movie.state';

export interface AppState {
  movies: MovieState;
}

export const initialAppState: AppState = {
  movies: initialMovieState
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
