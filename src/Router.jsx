import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import { UpcomingDetail } from "./components/Movies/UpcomingMovies/UpcomingDetail/UpcomingDetail.jsx";
import { PopularDetail } from "./components/Movies/PopularMovies/PopularDetail/PopularDetail.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<PrivateRoute element={HomePage} />} />
      <Route path="/detailed-upcoming/:id" element={<PrivateRoute element={UpcomingDetail} />} />
      <Route path="/detailed-popular/:id" element={<PrivateRoute element={PopularDetail} />} />
    </Routes>
  );
}