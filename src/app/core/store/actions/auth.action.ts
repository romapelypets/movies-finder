import { Action } from '@ngrx/store';

export const SIGNUP = '[AUTH] SIGNUP';
export const SIGNIN = '[AUTH] SIGNIN';
export const LOGOUT = '[AUTH] LOGOUT';
export const SET_TOKEN = '[AUTH] SET_TOKEN';

export class Signup implements Action {
  readonly type = SIGNUP;
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type Action = Signup | Signin | Logout | SetToken;
