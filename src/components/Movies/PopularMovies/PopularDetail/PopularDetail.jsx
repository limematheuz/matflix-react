import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetchPopular from "../../../../hooks/useFetchPopular.js";
import "../PopularDetail/PopularDetail.css";
import { Header } from "../../../Header/Header";


export const PopularDetail = () => {
    const rick = "https://media.tenor.com/onTlUVMtWy4AAAAM/rickroll-rick.gif";
    const { id } = useParams();
    const movie = useFetchPopular();
    const movieDetail = movie?.find((movie) => movie.id === parseInt(id));
    const releaseYear = movieDetail?.release_date
      ? movieDetail.release_date.split("-")[0]
      : "Unknown";
  
    return (
      <section className="md-container">
        <Header />
        {movieDetail ? (
          <article className="md-article-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
              alt={movieDetail.title}
            />
            <div className="md-info-container">
              <h2>{movieDetail.title}</h2>
              <p>{movieDetail.overview}</p>
              <span>{releaseYear}</span>
              <Link className="linkRick" to={rick}>
                Play
              </Link>
            </div>
          </article>
        ) : (
          <p>Loading...</p>
        )}
        <span className="md-black-bg"></span>
      </section>
    );
}
