import "./UpcomingCard.css";
import { Link } from "react-router-dom";

export function UpcomingCard({ movie }) {
  return (
    <Link to={`/detailed-upcoming/${movie.id}`}>
      <div key={movie.id} className="movie-card-upcoming">
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
    </Link>
  );
}
