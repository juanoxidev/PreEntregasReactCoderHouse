//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
// LISTADO DE ICONOS: https://fontawesome.com/search?q=shop&o=r

const CartWidget = () => {
  const { productosEnCarrito, cart } = useCart();
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    // Este efecto se ejecutará cada vez que 'valor' cambie
    setCantidad(productosEnCarrito());
  }, [productosEnCarrito()]);

  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} />
      <b>
        <span>{cantidad}</span>
      </b>
    </>
  );
};

export default CartWidget;
