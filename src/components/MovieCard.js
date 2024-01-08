// MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  const { title, release_date, overview, poster_path } = movie;

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{release_date}</p>
      <p className="text-sm text-gray-700">{overview}</p>
    </div>
  );
};

export default MovieCard;
