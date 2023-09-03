import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(1);
  const sumar = () => {
    if (cantidad <= stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <Button onClick={restar} variant="ghost">
        -
      </Button>
      <Button variant="ghost">{cantidad}</Button>
      <Button onClick={sumar} variant="ghost">
        +
      </Button>
      <Button colorScheme="yellow" variant="outline">
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
