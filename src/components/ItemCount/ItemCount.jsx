import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ producto }) => {
  const { stock } = producto;
  const [cantidad, setCantidad] = useState(1);
  const { addItem } = useCart();
  const [ocultar, setOcultar] = useState(false);

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
    addItem(producto, cantidad);
    setOcultar(true);
  };

  return (
    <>
      {!ocultar && (
        <>
          <Button onClick={restar} variant="ghost">
            <MinusIcon />
          </Button>
          <Button variant="ghost">{cantidad}</Button>
          <Button onClick={sumar} variant="ghost">
            <AddIcon />
          </Button>
          <Button
            onClick={onAdd}
            colorScheme="yellow"
            variant="outline"
            rightIcon={
              <FontAwesomeIcon icon={faCartPlus} style={{ color: "#2e2e2d" }} />
            }
          >
            Agregar
          </Button>
        </>
      )}
    </>
  );
};

export default ItemCount;
