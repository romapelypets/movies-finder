import { User } from './../../models/user';
import { Action } from '@ngrx/store';

export const SIGNUP = '[AUTH] SIGNUP';
export const SIGNIN = '[AUTH] SIGNIN';
export const SIGNIN_GOOGLE = '[AUTH] SIGNIN_GOOGLE';
export const LOGOUT = '[AUTH] LOGOUT';
export const SET_TOKEN = '[AUTH] SET_TOKEN';

export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: User) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
  constructor(public payload: User) {}
}

export class SigninGoogle implements Action {
  readonly type = SIGNIN_GOOGLE;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type Action = Signup | Signin | SigninGoogle | Logout | SetToken;
