// App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchMovieDetails } from "./actions/movieActions";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center text-red-500">
          {" "}
          Satya Kabir Movie App
        </h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
