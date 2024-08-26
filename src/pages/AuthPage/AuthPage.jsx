import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Shared/Services/AuthService";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import bg from "../../assets/Backgrounds/blue-auth-bg.jpg";
import "./AuthPage.css";

export const AuthPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <section className="ap-container">
      <AuthForm />
      <img className="ap-img-container" src={bg} alt="" />
    </section>
  );
};