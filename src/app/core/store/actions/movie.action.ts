import { Action } from '@ngrx/store';
import { IMovie } from '@app/core/models/movie';

export const GET = '[MOVIE] GET';
export const SELECT = '[MOVIE] SELECT';

export class Get implements Action {
  readonly type = GET;
  constructor(public payload: IMovie[]) {}
}

export class Select implements Action {
  readonly type = SELECT;
  constructor(public paylaod: IMovie) {}
}

export type Action = Get | Select;
