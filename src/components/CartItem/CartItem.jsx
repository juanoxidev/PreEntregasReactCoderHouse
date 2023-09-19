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

const CartItem = (p) => {
  const { producto } = p;
  const { nombre, precio, cantidad, stock, id } = producto;
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
    if (cantidadMostrada < stock) {
      let difCantidad = cantidadMostrada - cantidad;
      setUnidades(unidades + difCantidad);
      modifyProduct(producto, cantidadMostrada);
    }
  };
  const eliminar = () => {
    deleteProduct(id);
    setUnidades(unidades - cantidad);
  };

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
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
        <Button onClick={eliminar} variant="ghost">
          Eliminar
        </Button>
      </Card>
    </>
  );
};

export default CartItem;
