import * as MovieAction from './../actions/movie.action';
import { initialMovieState, IMovieState } from './../state/movie.state';

export function movieReducer(state = initialMovieState, action: MovieAction.Action) {
  switch (action.type) {
    case MovieAction.GET: {
      return {
        ...state,
        movies: action.payload
      };
    }
    case MovieAction.SELECT: {
      return {
        ...state,
        selectedMovie: action.paylaod
      };
    }
    default:
      return state;
  }
}
