import { Action } from '@ngrx/store';
import { Movie } from '@app/core/models/movie';

export const LOAD_MOVIES = '[MOVIE] LOAD_MOVIES';
export const GET_MOVIES = '[MOVIE] GET_MOVIES';
export const LOAD_TOP_RATED_MOVIES = '[MOVIE] LOAD_TOP_RATED_MOVIES';
export const GET_TOP_RATED_MOVIES = '[MOVIE] GET_TOP_RATED_MOVIES';
export const LOAD_UPCOMING_MOVIES = '[MOVIE] LOAD_UPCOMING_MOVIES';
export const GET_UPCOMING_MOVIES = '[MOVIE] GET_UPCOMING_MOVIES';
export const LOAD_MOVIE = '[MOVIE] LOAD_MOVIE';
export const GET_MOVIE = '[MOVIE] GET_MOVIE';

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;
}

export class GetMovies implements Action {
  readonly type = GET_MOVIES;
  constructor(public payload: Movie[]) {}
}

export class LoadTopRatedMovies implements Action {
  readonly type = LOAD_TOP_RATED_MOVIES;
}

export class GetTopRatedMovies implements Action {
  readonly type = GET_TOP_RATED_MOVIES;
  constructor(public payload: Movie[]) {}
}

export class LoadUpcomingMovies implements Action {
  readonly type = LOAD_UPCOMING_MOVIES;
}

export class GetUpcomingMovies implements Action {
  readonly type = GET_UPCOMING_MOVIES;
  constructor(public payload: Movie[]) {}
}

export class LoadMovie implements Action {
  readonly type = LOAD_MOVIE;
  constructor(public paylaod: number) {}
}

export class GetMovie implements Action {
  readonly type = GET_MOVIE;
  constructor(public paylaod: Movie) {}
}

export type Action =
  | LoadMovies
  | GetMovies
  | LoadMovie
  | GetMovie
  | LoadTopRatedMovies
  | GetTopRatedMovies
  | LoadUpcomingMovies
  | GetUpcomingMovies;
