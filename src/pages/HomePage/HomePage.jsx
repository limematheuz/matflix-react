import React from "react";
import "../HomePage/HomePage.css";
import { MovieList } from "../../components/MovieList.jsx";
import { Header } from "../../components/Header/Header.jsx";
import {Footer} from "../../components/Footer/Footer.jsx"
import PosterMovies from "../../components/PosterMovies/PosterMovies.jsx";

export const HomePage = () => {
  return (
    <section className="home-page-container">
      <Header />
      <PosterMovies/>
      <MovieList />
      <Footer/>
    </section>
  );
};
