import { Button } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const { clear, cart, montoEnCarrito } = useCart();
  return (
    <div>
      {cart.map((p) => {
        return (
          <div key={p.id}>
            <CartItem producto={p}></CartItem>
          </div>
        );
      })}

      <Button onClick={clear}>Eliminar Carrito</Button>
      <h3>Monto total: ${montoEnCarrito()}.-</h3>
    </div>
  );
};

export default CartList;
