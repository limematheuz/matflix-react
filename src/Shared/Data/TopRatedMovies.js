export default function TopRatedMovies() {
  const movies = [
    {
      id: 1,
      name: "Harry Potter",
      url: "https://static.posters.cz/image/hp/80594.jpg",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Coco",
      url: "https://static.posters.cz/image/hp/69061.jpg",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Venom",
      url: "https://static.posters.cz/image/hp/47521.jpg",
      isFavorite: false,
    },
    {
      id: 4,
      name: "Joker",
      url: "https://static.posters.cz/image/hp/72629.jpg",
      isFavorite: false,
    },
    {
      id: 5,
      name: "Batman",
      url: "https://static.posters.cz/image/hp/66923.jpg",
      isFavorite: false,
    },
    {
      id: 6,
      name: "Macaco",
      url: "https://static.posters.cz/image/hp/66112.jpg",
      isFavorite: false,
    },
    {
      id: 7,
      name: "Spiderman",
      url: "https://static.posters.cz/image/hp/69167.jpg",
      isFavorite: false,
    },
    {
      id: 8,
      name: "Deadpool",
      url: "https://static.posters.cz/image/hp/69083.jpg",
      isFavorite: false,
    },
    {
      id:9,
      name: "Rick",
      url:"https://static.posters.cz/image/hp/66133.jpg",
      isFavorite: false,
    },
  ];

  // Función para alternar el estado de favorito
  function toggleFavorite(movieId) {
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
      movie.isFavorite = !movie.isFavorite;
    }
  }

  // Ejemplo de cómo usar la función
  toggleFavorite(3); // Marca "Venom" como favorito
  toggleFavorite(5); // Marca "Batman" como favorito

  return movies;
}
