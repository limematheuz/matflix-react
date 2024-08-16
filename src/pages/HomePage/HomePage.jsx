import React from "react";
import "../HomePage/HomePage.css";
import { Header } from "../../components/Header/Header.jsx";
import {Footer} from "../../components/Footer/Footer.jsx"
import PosterMovies from "../../components/PosterMovies/PosterMovies.jsx";
import TopRated from "../../components/Movies/TopRated/TopRated.jsx";



export const HomePage = () => {
  return (
    <section className="home-page-container">
      <Header />
      <PosterMovies/>
      <TopRated/>
      <Footer/>
    </section>
  );
};
