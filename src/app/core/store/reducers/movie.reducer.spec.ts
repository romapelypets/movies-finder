import { initialMovieState } from './../state/movie.state';
import { GetMovies, GetMovie, GetTopRatedMovies, GetUpcomingMovies } from './../actions/movie.action';
import { Movie } from '@app/core/models/movie';
import { movieReducer } from './movie.reducer';

describe('MovieReducer', () => {
  let movie: Movie;
  let movies: Movie[];

  beforeEach(() => {
    movie = {
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
    movies = [
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
  });

  it('it should return a get movies reducer', () => {
    const action = new GetMovies(movies);
    const result = movieReducer(initialMovieState, action);

    expect(result).toEqual({
      ...initialMovieState,
      movies
    });
  });

  it('it should return a get top rated movies reducer', () => {
    const action = new GetTopRatedMovies(movies);
    const result = movieReducer(initialMovieState, action);

    expect(result).toEqual({
      ...initialMovieState,
      movies
    });
  });

  it('it should return a get top rated movies reducer', () => {
    const action = new GetTopRatedMovies(movies);
    const result = movieReducer(initialMovieState, action);

    expect(result).toEqual({
      ...initialMovieState,
      movies
    });
  });

  it('it should return a get upcoming movies reducer', () => {
    const action = new GetUpcomingMovies(movies);
    const result = movieReducer(initialMovieState, action);

    expect(result).toEqual({
      ...initialMovieState,
      movies
    });
  });

  it('it should return a get movie reducer', () => {
    const action = new GetMovie(movie);
    const result = movieReducer(initialMovieState, action);

    expect(result).toEqual({
      ...initialMovieState,
      selectedMovie: movie
    });
  });

  it('it should return a default reducer', () => {
    const result = movieReducer(undefined, { type: null, payload: null });

    expect(result).toEqual({ ...initialMovieState });
  });
});
