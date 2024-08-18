import "./UpcomingList.css";
import { UpcomingCard } from "../UpcomingCard/UpcomingCard.jsx";
import useFetchMovies from "../../../../hooks/useFetchMovies.js";
import React, { useRef } from "react";
import arrowLeft from "../../../../assets/Icons/angle-left-solid.svg";
import arrowRight from "../../../../assets/Icons/angle-right-solid.svg";

export const UpcomingList = () => {
  const movies = useFetchMovies();
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="up-container" ref={sliderRef}>
      <button
        onClick={() => scroll(-1800)}
        className="up-first-btn"
        aria-label="Scroll left"
      >
        <img className="up-arrow" src={arrowLeft} alt="" />
      </button>
      <div className="up-slider-container">
        {movies &&
          movies.map((movie) => <UpcomingCard movie={movie} key={movie.id} />)}
      </div>

      <button
        onClick={() => scroll(1800)}
        className="up-second-btn"
        aria-label="Scroll right"
      >
        <img className="up-arrow" src={arrowRight} alt="" />
      </button>
    </section>
  );
};
