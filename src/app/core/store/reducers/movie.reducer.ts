import * as MovieAction from './../actions/movie.action';
import { initialMovieState } from './../state/movie.state';

export function movieReducer(state = initialMovieState, action: MovieAction.Action) {
  switch (action.type) {
    case MovieAction.GET_MOVIES: {
      return {
        ...state,
        movies: action.payload
      };
    }
    case MovieAction.GET_MOVIE: {
      return {
        ...state,
        selectedMovie: action.paylaod
      };
    }
    default:
      return state;
  }
}
