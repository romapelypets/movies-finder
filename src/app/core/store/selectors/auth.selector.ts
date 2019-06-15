import { AuthState } from './../state/auth.state';
import { AppState } from '@app/core/store/state/app.state';
import { createSelector } from '@ngrx/store';

export const selectAuth = (state: AppState) => state.auth;

export const getAuthenticated = createSelector(
  selectAuth,
  (state: AuthState) => state.isAuthenticated
);

export const getToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);
