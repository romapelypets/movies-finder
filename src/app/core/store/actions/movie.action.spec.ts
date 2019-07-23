import { GetMovie, GET_MOVIE } from './movie.action';
import { Movie } from '@app/core/models/movie';
import {
  LOAD_MOVIES,
  GetMovies,
  GET_MOVIES,
  LOAD_TOP_RATED_MOVIES,
  GetTopRatedMovies,
  GET_TOP_RATED_MOVIES,
  GetUpcomingMovies,
  LoadUpcomingMovies,
  GET_UPCOMING_MOVIES,
  LOAD_UPCOMING_MOVIES,
  LoadMovie,
  LOAD_MOVIE,
  LoadMovies,
  LoadTopRatedMovies
} from '@app/core/store/actions/movie.action';

describe('MovieActions', () => {
  it('it should create an action for LoadMovies', () => {
    const action = new LoadMovies();
    expect(action.type).toEqual(LOAD_MOVIES);
  });

  it('it should create an action for GetMovies', () => {
    const movies: Movie[] = [
      {
        id: 0,
        title: 'TestTitle',
        overview: 'Desc',
        poster_path: '/url',
        release_date: '12.12.12',
        vote_average: '10',
        runtime: '123',
        budget: 100000,
        genres: [{ id: 1, name: 'test' }]
      }
    ];
    const action = new GetMovies(movies);
    expect({ ...action }).toEqual({
      type: GET_MOVIES,
      payload: movies
    });
  });

  it('it should create an action for LoadTopRatedMovies', () => {
    const action = new LoadTopRatedMovies();
    expect(action.type).toEqual(LOAD_TOP_RATED_MOVIES);
  });

  it('it should create an action for GetTopRatedMovies', () => {
    const movies: Movie[] = [
      {
        id: 0,
        title: 'TestTitle',
        overview: 'Desc',
        poster_path: '/url',
        release_date: '12.12.12',
        vote_average: '10',
        runtime: '123',
        budget: 100000,
        genres: [{ id: 1, name: 'test' }]
      }
    ];
    const action = new GetTopRatedMovies(movies);
    expect({ ...action }).toEqual({
      type: GET_TOP_RATED_MOVIES,
      payload: movies
    });
  });

  it('it should create an action for LoadUpcomingMovies', () => {
    const action = new LoadUpcomingMovies();
    expect(action.type).toEqual(LOAD_UPCOMING_MOVIES);
  });

  it('it should create an action for GetUpcomingMovies', () => {
    const movies: Movie[] = [
      {
        id: 0,
        title: 'TestTitle',
        overview: 'Desc',
        poster_path: '/url',
        release_date: '12.12.12',
        vote_average: '10',
        runtime: '123',
        budget: 100000,
        genres: [{ id: 1, name: 'test' }]
      }
    ];
    const action = new GetUpcomingMovies(movies);
    expect({ ...action }).toEqual({
      type: GET_UPCOMING_MOVIES,
      payload: movies
    });
  });

  /** TODO: check why doesn't work with spread operator */
  it('it should create an action for LoadMovie', () => {
    const id: number = 1;
    const action = new LoadMovie(id);
    expect(action.type).toEqual(LOAD_MOVIE);
    expect(action.paylaod).toEqual(id);
  });

  /** TODO: check why doesn't work with spread operator */
  it('it shuld create an actino for GetMovie', () => {
    const movie: Movie = {
      id: 0,
      title: 'TestTitle',
      overview: 'Desc',
      poster_path: '/url',
      release_date: '12.12.12',
      vote_average: '10',
      runtime: '123',
      budget: 100000,
      genres: [{ id: 1, name: 'test' }]
    };
    const action = new GetMovie(movie);
    // expect({ ...action }).toEqual({
    //   type: GET_MOVIE,
    //   payload: movie
    // });
    expect(action.type).toEqual(GET_MOVIE);
    expect(action.paylaod).toEqual(movie);
  });
});
