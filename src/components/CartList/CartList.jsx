import { Button, ButtonGroup } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";
import FormFormik from "../FormFormik/FormFormik";

const CartList = () => {
  const { clear, cart, montoEnCarrito } = useCart();
  const formatoGuarani = new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
  });
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {cart.map((p) => {
        return (
          <div key={p.id}>
            <CartItem producto={p}></CartItem>
          </div>
        );
      })}
      {cart.length > 0 && (
        <>
          <ButtonGroup variant="outline" spacing="6">
            <Button onClick={clear} variant="outline" colorScheme="yellow">
              Eliminar Carrito
            </Button>
            <Button
              colorScheme="green"
              variant="outline"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Finalizar Compra
            </Button>
          </ButtonGroup>
          <h3>Monto total: {formatoGuarani.format(montoEnCarrito())}.-</h3>
          {showForm && <FormFormik />}
        </>
      )}
    </>
  );
};

export default CartList;
