import { Genre } from './genre';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  runtime: string;
  budget: number;
  genres: Array<Genre>;
}
