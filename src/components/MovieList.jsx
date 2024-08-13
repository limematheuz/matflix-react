// import React from 'react'
import "./MovieList.css";
import { Upcoming } from "./MovieList/Upcoming/Upcoming.jsx";
import useFetchMovies from "../hooks/useFetchMovies.js";

export const MovieList = () => {
  const movies = useFetchMovies();
  return (
    <section className="movie-list-carousel">
      <div className="movie-list-container">
        {movies &&
          movies.map((movie, id) => <Upcoming movie={movie} key={id} />)}
      </div>
    </section>
  );
};
