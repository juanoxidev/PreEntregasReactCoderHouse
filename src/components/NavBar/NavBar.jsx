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
            {/* CON LINK DEFINIMOS EL NOMBRE DE LAS RUTAS, EN EL APP DEFINIMOS LA ESTRUCTURA DE LA RUTA*/}
            <Link to={`/categoria/${"A"}`}>Aromaterapia</Link>
            {/* Un NavLink es un link con un estilo, está siempre detectando la ruta actual, y si coincide con la suya nos activa la clase que le demos para que el user sepa qué item de la lista corresponde con la vista actual. */}
          </li>
          <li>
            <Link to={`/categoria/${"S"}`}>Souvenirs</Link>
          </li>
          <li>
            <Link to={`/categoria/${"EL"}`}>Edición Limitada</Link>
          </li>
          <li>
            <Link to={`/categoria/${"O"}`}>Ofertas</Link>
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
