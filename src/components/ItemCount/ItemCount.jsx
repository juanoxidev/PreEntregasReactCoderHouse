import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartContext";

const ItemCount = ({ producto }) => {
  const { stock, nombre } = producto;
  const [cantidad, setCantidad] = useState(1);
  const { addItem, cart, setCart } = useContext(CartContext);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  const onAdd = () => {
    alert(`Se agrego ${cantidad} unidad/es de ${nombre} al carrito`);
    addItem(producto, cantidad);
  };
  const mostrarCarro = () => {
    console.log(cart);
  };

  return (
    <>
      <Button onClick={restar} variant="ghost">
        <MinusIcon />
      </Button>
      <Button variant="ghost">{cantidad}</Button>
      <Button onClick={sumar} variant="ghost">
        <AddIcon />
      </Button>
      <Button onClick={onAdd} colorScheme="yellow" variant="outline">
        Agregar al carrito
      </Button>
      <button onClick={mostrarCarro}>M</button>
    </>
  );
};

export default ItemCount;
