import "./Upcoming.css"

export function Upcoming ({movie, id}){
  return (
    <div key={id} className="movie-card-upcoming">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  );
};

