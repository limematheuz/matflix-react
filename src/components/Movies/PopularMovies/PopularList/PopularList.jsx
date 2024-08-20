import "./PopularList.css";
import { PopularCard } from "../../PopularMovies/PopularCard/PopularCard.jsx";
import React, { useRef, useEffect, useState } from "react";
import arrowLeft from "../../../../assets/Icons/angle-left-solid.svg";
import arrowRight from "../../../../assets/Icons/angle-right-solid.svg";
import { getPopularMovies } from "../../../../Shared/Services/MovieService";  

export default function PopularList() {
  const [popularMovies, setPopularMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="pl-container" ref={sliderRef}>
        <button
          onClick={() => scroll(-1800)}
          className="pl-first-btn"
          aria-label="Scroll left"
        >
          <img className="pl-arrow" src={arrowLeft} alt="" />
        </button>
        <div className="pl-slider-container">
          {popularMovies &&
            popularMovies.map((movie) => <PopularCard movie={movie} key={movie.id} />)}
        </div>
        <button
          onClick={() => scroll(1800)}
          className="pl-second-btn"
          aria-label="Scroll right"
        >
          <img className="pl-arrow" src={arrowRight} alt="" />
        </button>
    </section>
  );
}