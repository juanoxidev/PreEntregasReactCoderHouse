import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ producto }) => {
  // desestructuracion de props.producto
  const { nombre, precio, cantidad, stock, id, descripcion } = producto;
  const [cantidadMostrada, setCantidadMostrada] = useState(cantidad);
  const { modifyProduct, setUnidades, unidades, deleteProduct } = useCart();
  useEffect(() => {
    modificar();
  }, [cantidadMostrada]);

  const sumar = () => {
    if (cantidadMostrada >= 0 && stock > cantidadMostrada) {
      setCantidadMostrada(cantidadMostrada + 1);
    }
  };
  const restar = () => {
    if (cantidadMostrada > 1) {
      setCantidadMostrada(cantidadMostrada - 1);
    }
  };
  const modificar = () => {
    if (cantidadMostrada <= stock) {
      let difCantidad = cantidadMostrada - cantidad;
      setUnidades(unidades + difCantidad);
      modifyProduct(producto, cantidadMostrada);
    }
  };
  const eliminar = () => {
    deleteProduct(id);
    setUnidades(unidades - cantidad);
  };
  const formatoGuarani = new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
  });
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/prueba-765b7.appspot.com/o/touchicon-180.png?alt=media&token=a03cbb64-8cd0-4431-a1e6-a8a695f1fa78&_gl=1*a1xwe6*_ga*MTQ5Nzk2NDQ1NC4xNjk1ODQ0NjUz*_ga_CW55HF8NVT*MTY5NjA5MDE1Mi4yLjEuMTY5NjA5MDI0Ny40MS4wLjA."
            alt={descripcion}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text fontSize="2xl">{formatoGuarani.format(precio)}.-</Text>
          </Stack>
        </CardBody>
        <Button onClick={restar} variant="ghost">
          <MinusIcon />
        </Button>
        <Button variant="ghost">{cantidadMostrada}</Button>
        <Button onClick={sumar} variant="ghost">
          <AddIcon />
        </Button>
        <Divider />
        <Button
          onClick={eliminar}
          variant="ghost"
          leftIcon={
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "#000000" }} />
          }
        >
          Eliminar
        </Button>
      </Card>
    </>
  );
};

export default CartItem;
