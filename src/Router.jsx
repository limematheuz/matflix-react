import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MovieDetail } from "./components/Movies/MovieDetail/MovieDetail.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/detailed-upcoming/:id" element={<MovieDetail/>} />

    </Routes>
  );
}
