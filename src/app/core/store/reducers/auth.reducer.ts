import * as AuthAction from './../actions/auth.action';
import { initialAuthState } from '../state/auth.state';

export function authReducer(state = initialAuthState, action: AuthAction.Action) {
  switch (action.type) {
    case AuthAction.SIGNUP:
    case AuthAction.SIGNIN:
      return {
        ...state,
        authenticated: true
      };
    case AuthAction.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case AuthAction.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
