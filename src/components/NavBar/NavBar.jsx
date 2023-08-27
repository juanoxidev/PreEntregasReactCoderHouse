import CartWidget from "../CartWidget/CartWidget";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>
      <nav>
        <a className="logo" href="/">
          <img src="https://i.ibb.co/JvBZTX6/logo.webp" alt="logo_sissi" />
        </a>
        <ul>
          <li>
            <a href="/">Aromaterapia</a>
          </li>
          <li>
            <a href="/">Souvenirs</a>
          </li>
          <li>
            <a href="/">Edición Limitada</a>
          </li>
          <li>
            <a href="/">Ofertas</a>
          </li>
          <li>
            {" "}
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
