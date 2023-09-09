import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <img src="https://i.ibb.co/JvBZTX6/logo.webp" alt="logo_sissi" />
        </Link>
        <ul>
          <li>
            <Link to={"/categoria/aromaterapia"}>Aromaterapia</Link>
          </li>
          <li>
            <Link to={"/categoria/souvenirs"}>Souvenirs</Link>
          </li>
          <li>
            <Link to={"/categoria/elimitada"}>Edición Limitada</Link>
          </li>
          <li>
            <Link to={"/categoria/ofertas"}>Ofertas</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
