import { getAuthenticated, getToken } from './auth.selector';
import { initialAuthState } from './../state/auth.state';
import { initialMovieState } from './../state/movie.state';
import { AppState } from '@app/core/store/state/app.state';

describe('AuthSelector', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      movies: initialMovieState,
      auth: initialAuthState
    };
  });

  it('it should create selector for getAuthenticated', () => {
    expect(getAuthenticated(state)).toEqual(state.auth.isAuthenticated);
  });

  it('it should create selector for getToken', () => {
    expect(getToken(state)).toEqual(state.auth.token);
  });
});
