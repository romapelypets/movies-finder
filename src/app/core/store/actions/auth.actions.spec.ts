import { User } from '@app/core/models/user';
import {
  Signup,
  SIGNUP,
  Signin,
  SIGNIN,
  SigninGoogle,
  SIGNIN_GOOGLE,
  Logout,
  LOGOUT,
  SetToken,
  SET_TOKEN
} from '@app/core/store/actions/auth.action';

describe('AuthActions', () => {
  it('it should create an action for SignUp', () => {
    const user: User = { email: 'test@gmail.com', password: '111111' };
    const action = new Signup(user);
    expect({ ...action }).toEqual({
      type: SIGNUP,
      payload: user
    });
  });

  it('it should create an action for SignIn', () => {
    const user: User = { email: 'test@gmail.com', password: '111111' };
    const action = new Signin(user);
    expect({ ...action }).toEqual({
      type: SIGNIN,
      payload: user
    });
  });

  it('it should create an action for SignInGoogle', () => {
    const action = new SigninGoogle();
    expect(action.type).toEqual(SIGNIN_GOOGLE);
  });

  it('it should create an action for Logout', () => {
    const action = new Logout();
    expect(action.type).toEqual(LOGOUT);
  });

  it('it should create an action for SetToken', () => {
    const token: string = 'token';
    const action = new SetToken(token);
    expect({ ...action }).toEqual({
      type: SET_TOKEN,
      payload: token
    });
  });
});
