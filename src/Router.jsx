import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import { UpcomingDetail } from "./components/Movies/UpcomingMovies/UpcomingDetail/UpcomingDetail.jsx";
import { PopularDetail } from "./components/Movies/PopularMovies/PopularDetail/PopularDetail.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/detailed-upcoming/:id" element={<UpcomingDetail/>} />
      <Route path="/detailed-popular/:id" element={<PopularDetail/>} />
    </Routes>
  );
}
