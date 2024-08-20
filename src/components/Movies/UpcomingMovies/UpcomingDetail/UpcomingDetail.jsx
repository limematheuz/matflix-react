import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getUpcomingMovies } from "../../../../Shared/Services/MovieService";
import "../UpcomingDetail/UpcomingDetail.css";
import { Header } from "../../../Header/Header";

export function UpcomingDetail() {
  const rick = "https://media.tenor.com/onTlUVMtWy4AAAAM/rickroll-rick.gif";
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getUpcomingMovies();
        setMovie(movies.find((movie) => movie.id === parseInt(id)));
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [id]);

  const releaseYear = movie?.release_date ? movie.release_date.split("-")[0] : "Unknown";

  return (
    <section className="md-container">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : movie ? (
        <article className="md-article-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="md-info-container">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <span>{releaseYear}</span>
            <Link className="linkRick" to={rick}>
              Play
            </Link>
          </div>
        </article>
      ) : (
        <p>Movie not found</p>
      )}
      <span className="md-black-bg"></span>
    </section>
  );
}