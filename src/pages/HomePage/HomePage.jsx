import React from "react";
import "../HomePage/HomePage.css";
import { MovieList } from "../../components/MovieList.jsx";
import { Header } from "../../components/Header/Header.jsx";
import {Footer} from "../../components/Footer/Footer.jsx"

export const HomePage = () => {
  return (
    <section className="all-movies-container">
      <Header />
      <MovieList />
      <Footer/>
    </section>
  );
};
