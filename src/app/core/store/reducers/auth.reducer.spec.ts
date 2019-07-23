import { SetToken } from '@core/store/actions/auth.action';
import { Signup } from './../actions/auth.action';
import { Signin, SigninGoogle, Logout } from '@app/core/store/actions/auth.action';
import { authReducer } from './auth.reducer';
import { User } from '@app/core/models/user';
import { initialAuthState } from '../state/auth.state';

describe('AuthReducer', () => {
  let user: User;

  beforeEach(() => {
    user = { email: 'test@gmail.com', password: '111111' };
  });

  it('it should return a signin reducer', () => {
    const action = new Signin(user);
    const result = authReducer(initialAuthState, action);

    expect(result).toEqual({
      ...initialAuthState,
      user
    });
  });

  it('it should return a signin with Google reducer', () => {
    const action = new SigninGoogle();
    const result = authReducer(initialAuthState, action);

    expect(result).toEqual({ ...initialAuthState });
  });

  it('it should return a signup reducer', () => {
    const action = new Signup(user);
    const result = authReducer(initialAuthState, action);

    expect(result).toEqual({ ...initialAuthState, user });
  });

  it('it should return a set token reducer', () => {
    const tokenValue: string = 'token';
    const action = new SetToken(tokenValue);
    const result = authReducer(initialAuthState, action);

    expect(result).toEqual({ ...initialAuthState, isAuthenticated: true, token: tokenValue });
  });

  it('it should return a logout reducer', () => {
    const action = new Logout();
    const result = authReducer(initialAuthState, action);

    expect(result).toEqual({ ...initialAuthState });
  });

  it('it should return a default reducer', () => {
    const result = authReducer(undefined, { type: null, payload: null });

    expect(result).toEqual({ ...initialAuthState });
  });
});
