// MovieList.js
import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
