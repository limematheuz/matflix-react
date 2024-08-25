import "../../components/Header/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Icons/logo.png";

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
        <img src={Logo} alt="Logo" />
      </h1>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleonLogout}>Logout</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}
