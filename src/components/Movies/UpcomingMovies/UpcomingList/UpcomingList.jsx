import "./UpcomingList.css";
import { UpcomingCard } from "../UpcomingCard/UpcomingCard.jsx";
import React, { useRef, useEffect, useState } from "react";
import arrowLeft from "../../../../assets/Icons/angle-left-solid.svg";
import arrowRight from "../../../../assets/Icons/angle-right-solid.svg";
import { getUpcomingMovies } from "../../../../Shared/Services/MovieService";

export const UpcomingList = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const movies = await getUpcomingMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, []);

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