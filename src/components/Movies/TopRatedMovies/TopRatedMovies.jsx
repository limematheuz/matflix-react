import TopRatedMovies from "../../../Shared/Data/TopRatedMovies.js";
import React, { useRef } from "react";
import "../TopRatedMovies/TopRatedMovies.css";
import arrowLeft from "../../../assets/Icons/angle-left-solid.svg";
import arrowRight from "../../../assets/Icons/angle-right-solid.svg";
import Like from "../../../assets/Icons/bookmark-regular.svg";

const topRatedMovies = TopRatedMovies();

export default function TopRated() {
  const sliderRef = useRef(null);

  // const ratingValue = topRatedMovies?.find((topRated)=> topRated.rating === rating);


  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="tr-container" ref={sliderRef}>
      <h2>Top Rated</h2>
      <div className="tr-controllers-container">
        <button
          onClick={() => scroll(-1800)}
          className="tr-first-btn"
          aria-label="Scroll left"
        >
          <img className="tr-arrow" src={arrowLeft} alt="" />
        </button>
        <div className="tr-slider-container">
          {topRatedMovies &&
            topRatedMovies.map((topRated) => (
              <div className="tr-poster-container" key={topRated.id}>
                <img src={topRated.url} alt="" />
                <img className="like-icon" src={Like} alt="" />
                <p
                  className={`rating ${topRated.rating < 7.5 ? 'low-rating' : 'high-rating'}`}
                >
                  {topRated.rating}
                </p>
              </div>
            ))}
        </div>
        <button
          onClick={() => scroll(1800)}
          className="tr-second-btn"
          aria-label="Scroll right"
        >
          <img className="tr-arrow" src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
}
