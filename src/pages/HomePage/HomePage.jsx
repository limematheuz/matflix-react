import React from "react";
import "../HomePage/HomePage.css";
import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import MainMoviesComponent from "../../components/MainMoviesComponent/MainMoviesComponent.jsx";
 import TopRated from "../../components/Movies/TopRatedMovies/TopRatedMovies.jsx";
import PopularList from "../../components/Movies/PopularMovies/PopularList/PopularList.jsx";

export const HomePage = () => {
  return (
    <section className="homePage-container">
      <Header  />
      <MainMoviesComponent />
      <PopularList  />
      <TopRated /> 
      <Footer/>
    </section>
  );
};
