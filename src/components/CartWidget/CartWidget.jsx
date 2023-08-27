//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// LISTADO DE ICONOS: https://fontawesome.com/search?q=shop&o=r

const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} />
      <b>
        <span>1</span>
      </b>
    </>
  );
};

export default CartWidget;
