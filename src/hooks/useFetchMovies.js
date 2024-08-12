import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchMoviesData();
      setMovies(data.results);
      console.log(data);
    }
    getMovies();
  }, []);

  async function fetchMoviesData() {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjQ5NzUzYTFiZTgzN2FkMjA4YzRlNDQwYTJiMWU3NyIsIm5iZiI6MTcyMzQ5ODY3My45NDY4LCJzdWIiOiI2NTJmYWU0YzBjYjMzNTE2Zjc0OTgxNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.07EgN4wna804Zf8PQSSjaFoP6y1fjS5n-fnq0O1dXvw",
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }

  return movies;
};

export default useFetchMovies;
