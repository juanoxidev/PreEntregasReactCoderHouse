import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { id, nombre, precio, imagen, categoria, stock, descripcion } =
    producto;
  const formatoGuarani = new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG",
  });
  return (
    <div key={id}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/prueba-765b7.appspot.com/o/touchicon-180.png?alt=media&token=a03cbb64-8cd0-4431-a1e6-a8a695f1fa78&_gl=1*a1xwe6*_ga*MTQ5Nzk2NDQ1NC4xNjk1ODQ0NjUz*_ga_CW55HF8NVT*MTY5NjA5MDE1Mi4yLjEuMTY5NjA5MDI0Ny40MS4wLjA."
            alt={descripcion}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text fontSize="xl">{formatoGuarani.format(precio)}.-</Text>
            <Text fontSize="xl">Descripción: {descripcion}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ItemCount producto={producto} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;
// nombre descripcion categoria precio
