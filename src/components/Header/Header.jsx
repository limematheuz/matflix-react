import "../../components/Header/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/generatedtext.png";

export function Header() {
  const removeUser = () => {
    localStorage.removeItem("user");
  }

  const handleonLogout = () => {
    removeUser();
    navigate("/login");
  }



  return (
    <header className="header-container">
      <Link to={"/"}>
        <h1>
          <img src={Logo} alt="" />
        </h1>
      </Link>
      <nav>
        <ul>
          <a href="">
            <li>Favoritos</li>
          </a>
          <a href="">
            <li>Perfil</li>
          </a>
          <a href="/login" onClick={handleonLogout} >
            <li>Logout</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
