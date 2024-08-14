import React, { useState, useEffect } from 'react';
import "../PosterMovies/PosterMovies.css"

const movieImages = [
  "https://i.pinimg.com/originals/c6/fc/d8/c6fcd8ca16c4d943b1f284333cfd0efc.jpg",//hp
  "https://wallpapers.com/images/featured/coco-y9omqvuggsgv90cp.jpg",//
  "https://moviefilmsla.wordpress.com/wp-content/uploads/2018/10/venom_wallpaper_1920x1080_mf.jpg",//ven
  "https://beatdigital.mx/wp-content/uploads/2024/04/portada-6-1.jpg",//joker
  "https://i.pinimg.com/originals/8b/0f/be/8b0fbe82c3f5bb73eca9f557e8a9879c.jpg",//btman
  "https://www.antaycine.cl/publish/slides/villanofavorito.png", //gru
];

export default function PosterMovies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % movieImages.length);
    }, 5000); 

    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <div className="poster-movies-container">
      <img
        src={movieImages[currentImageIndex]}
        alt="Movie Poster"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <span className='pm-first-black-span'></span>
      <span className='pm-second-black-span'></span>

    </div>
  );
}
