import { Link } from "react-router-dom";
import "../PopularCard/PopularCard.css"

export const PopularCard = ({movie}) => {
    return (
        <Link to={`/detailed-popular/${movie.id}`}>
          <div key={movie.id} className="popular-card-upcoming">
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </Link>
      );
}
