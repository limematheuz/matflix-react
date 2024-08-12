import { useEffect, useState } from "react";

const useFetchMovies = () => {
  const api_token = import.meta.env.VITE_API_TOKEN;
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
        Authorization: `Bearer ${api_token}`,
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }

  return movies;
};

export default useFetchMovies;
