import { AuthState, initialAuthState } from './auth.state';
import { MovieState, initialMovieState } from './movie.state';

export interface AppState {
  movies: MovieState;
  auth: AuthState;
}

export const initialAppState: AppState = {
  movies: initialMovieState,
  auth: initialAuthState
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
