import React, { useState, useEffect } from "react";
import "../MainMoviesComponent/MainMoviesComponent.css";
import { UpcomingList } from "../Movies/UpcomingMovies/UpcomingList/UpcomingList.jsx";


const movieImages = [
  "https://img.tvb.com/mytvs/poster/1387/h_138685_v1_o.jpg",
  "https://wallpapers.com/images/hd/fantastic-beasts-and-where-to-find-them-horizontal-poster-86utad5c6nr65k54.jpg", 
  "https://www.todofondos.net/wp-content/uploads/1920x1080-Wallpaper-No-Time-to-Die-Poster-4K-Peliculas.png",
  "https://i.pinimg.com/originals/41/04/07/41040789d61be2e4ab0ee7708623fad4.jpg", 
  "https://motor.elpais.com/wp-content/uploads/2023/03/john-wick-2.webp", 
  "https://www.10wallpaper.com/wallpaper/1920x1080/1605/X-Men_Apocalypse_2016_Movies_Posters_HD_Wallpaper_03_1920x1080.jpg", 
  "https://img.usanetwork.com/files/images/2019/5/29/HarryPotterAndTheHalfBloodPrince-s6-KeyArt-Logo-Show-Tile-1920x1080.jpg", 
  "https://wallpapers.com/images/hd/batman-begins-1920-x-1080-wallpaper-otdxlr13h8dfz5fm.jpg", 
];

export default function PosterMovies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % movieImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="poster-movies-container">
      <img src={movieImages[currentImageIndex]} alt="Movie Poster" />

      <section className="pm-mv-container">
        <h3>Upcoming Movies</h3>
        <UpcomingList />
      </section>
      <span className="pm-first-black-span"></span>
      <span className="pm-second-black-span"></span>
      <span className="pm-black-bg"></span>
    </section>
  );
}
