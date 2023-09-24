import { Button } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const { clear, cart, montoEnCarrito } = useCart();
  return (
    <>
      {cart.map((p) => {
        return (
          <div key={p.id}>
            <CartItem producto={p}></CartItem>
          </div>
        );
      })}
      {cart.length > 0 ? (
        <>
          <Button onClick={clear}>Eliminar Carrito</Button>
          <h3>Monto total: ${montoEnCarrito()}.-</h3>
        </>
      ) : (
        console.log("No hay productos en el carrito")
      )}
    </>
  );
};

export default CartList;
