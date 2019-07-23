import { initialAuthState } from './../state/auth.state';
import { initialMovieState } from './../state/movie.state';
import { AppState } from '@app/core/store/state/app.state';
import { getMovies, selectMovie } from './movie.selector';

describe('MovieSelector', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      movies: initialMovieState,
      auth: initialAuthState
    };
  });

  it('it should create selector for GetMovies', () => {
    expect(getMovies(state)).toEqual(state.movies.movies);
  });

  it('it should create selector for selectMovie', () => {
    expect(selectMovie(state)).toEqual(state.movies.selectedMovie);
  });
});
