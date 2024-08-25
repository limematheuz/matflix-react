import { AuthForm } from "../../components/AuthForm/AuthForm";
import "./AuthPage.css";

export const AuthPage = () => {
  return (
    <section className="ap-container">
      <AuthForm />
      <img className="ap-img-container" src="https://img.freepik.com/vector-gratis/textura-granulada-degradada_23-2148976750.jpg?t=st=1724626577~exp=1724630177~hmac=0ac637c372ffa789503d10cc912b6352d48f1f7e34be14aed72dc95a4dce2b65&w=1380" alt="" />
    </section>
  );
};
