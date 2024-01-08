// movieActions.js
import axios from "axios";
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAILS_SUCCESS,
} from "../constants/actionTypes";

const TMDB_API_KEY = "55d6a099b32fe8b51644ba3620e6f8bd";

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMovieDetailsSuccess = (movieDetails) => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload: movieDetails,
});

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: TMDB_API_KEY,
        },
      }
    );

    dispatch(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: TMDB_API_KEY,
        },
      }
    );

    dispatch(fetchMovieDetailsSuccess(response.data));
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
