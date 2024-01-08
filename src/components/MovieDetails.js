// MovieDetails.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../actions/movieActions";

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state);
console.log(movieDetails, "movieDetails");
  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, release_date, overview, poster_path, genres } = movieDetails;

  return (
    <div className="flex">
      <div className="w-1/3">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="w-full h-auto"
        />
      </div>
      <div className="w-2/3 ml-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{release_date}</p>
        <p className="text-sm text-gray-700 mb-4">{overview}</p>
        <p className="text-sm font-semibold mb-2">Genres:</p>
        <ul className="list-disc pl-6">
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
