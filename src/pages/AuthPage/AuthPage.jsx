import { AuthForm } from "../../components/AuthForm/AuthForm";
import bg from "../../assets/Backgrounds/blue-auth-bg.jpg";
import "./AuthPage.css";

export const AuthPage = () => {
  return (
    <section className="ap-container">
      <AuthForm />
      <img className="ap-img-container" src={bg} alt="" />
    </section>
  );
};
