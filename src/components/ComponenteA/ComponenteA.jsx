import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";

const ComponenteA = () => {
  const { comision, cart, setCart } = useContext(CartContext);
  console.log(cart);
  return <div>{comision}</div>;
};

export default ComponenteA;
