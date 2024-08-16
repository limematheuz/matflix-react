import React, { useState, useEffect } from "react";
import "../PosterMovies/PosterMovies.css";
import { MovieList } from "../MovieList";

// const movieImages = [
//   "https://s1.1zoom.me/big0/841/287634-Sepik.jpg", //hp
//   "https://wallpapers.com/images/featured/coco-y9omqvuggsgv90cp.jpg", //coco
//   "https://m.media-amazon.com/images/S/pv-target-images/64f8b240e7660e3fe4e774cc8496b7af41f17cc02225a5f6d5e1f6542eac9e95.jpg", //ven
//   "https://i.pinimg.com/originals/33/ff/20/33ff20650468428dfb4e0ac41e9a1c5f.jpg", //joker
//   "https://i.pinimg.com/originals/8b/0f/be/8b0fbe82c3f5bb73eca9f557e8a9879c.jpg", //btman
//   "https://images4.alphacoders.com/130/thumb-1920-1306935.jpg", //macaco
//   "https://images.hdqwalls.com/wallpapers/spiderman-2-2004-8m.jpg",
//   "https://wallpapers.com/images/hd/1920-x-1080-deadpool-pceouzot37jcnqiz.jpg", //dead
// ];

const movieImages = [
  "https://static.posters.cz/image/hp/80594.jpg", 
  "https://static.posters.cz/image/hp/69061.jpg", 
  "https://static.posters.cz/image/hp/47521.jpg", 
  "https://static.posters.cz/image/hp/72629.jpg", 
  "https://static.posters.cz/image/hp/66923.jpg", 
  "https://static.posters.cz/image/hp/66112.jpg", 
  "https://static.posters.cz/image/hp/69167.jpg",
  "https://static.posters.cz/image/hp/69083.jpg", 
  "https://static.posters.cz/image/hp/66133.jpg"

];

export default function PosterMovies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % movieImages.length);
    }, 5000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <section className="poster-movies-container">
      <img src={movieImages[currentImageIndex]} alt="Movie Poster" />

      <section className="pm-mv-container">
        <h3>Upcoming</h3>
        <MovieList />
      </section>
      <span className="pm-first-black-span"></span>
      <span className="pm-second-black-span"></span>
      <span className="pm-black-bg"></span>
    </section>
  );
}
