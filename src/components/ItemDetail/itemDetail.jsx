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
const ItemDetail = ({ productos }) => {
  // const filteredProducts = productos.filter((p) => p.id == id);
  return (
    <div>
      {productos.map((p) => {
        return (
          <div key={p.id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{p.nombre}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    ${p.precio}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Descripción: {p.descripcion}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ItemCount stock={p.stock} nombre={p.nombre} />
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
// nombre descripcion categoria precio
