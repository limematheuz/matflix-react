import "./MovieList.css";
import { Upcoming } from "./Movies/Upcoming/Upcoming.jsx";
import useFetchMovies from "../hooks/useFetchMovies.js";
import React, { useRef } from "react";
import arrowLeft from "../../src/assets/Icons/angle-left-solid.svg";
import arrowRight from "../../src/assets/Icons/angle-right-solid.svg";

export const MovieList = () => {
  const movies = useFetchMovies();
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="movie-list-container" ref={sliderRef}>
      <div className="ml-carousel-controllers">
        <button
          onClick={() => scroll(-1800)}
          className="ml-first-btn"
          aria-label="Scroll left"
        >
          <img className="ml-arrow" src={arrowLeft} alt="" />
        </button>
        <div className="movie-list-carousel">
          {movies &&
            movies.map((movie) => <Upcoming movie={movie} key={movie.id} />)}
        </div>
        <button
          onClick={() => scroll(1800)}
          className="ml-second-btn"
          aria-label="Scroll right"
        >
          <img className="ml-arrow" src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};
