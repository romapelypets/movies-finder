import * as AuthAction from './../actions/auth.action';
import { initialAuthState } from '../state/auth.state';

export function authReducer(state = initialAuthState, action: AuthAction.Action) {
  switch (action.type) {
    case AuthAction.SIGNIN:
      return {
        ...state,
        user: action.payload
      };
    case AuthAction.SIGNIN_GOOGLE:
      return state;
    case AuthAction.SIGNUP:
      return {
        ...state,
        user: action.payload
      };
    case AuthAction.SET_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload
      };
    case AuthAction.LOGOUT:
      return initialAuthState;
    default:
      return state;
  }
}
