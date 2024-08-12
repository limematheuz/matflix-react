// import React from 'react'
import "./MovieList.css"
import { Upcoming } from "./MovieList/Upcoming/Upcoming.jsx";
import useFetchMovies from "../hooks/useFetchMovies.js";

export const MovieList = () => {
  const movies = useFetchMovies();
  return (
    <article className="movie-list-container">
      {movies && movies.map((movie, id) => <Upcoming movie={movie} id={id} />)}
    </article>
  );
};
