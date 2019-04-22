import { User } from '@app/core/models/user';
export interface AuthState {
  token: string;
  isAuthenticated: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  token: null,
  isAuthenticated: false,
  user: null
};
