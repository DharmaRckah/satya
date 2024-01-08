// movieReducer.js
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  movies: [],
  movieDetails: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
