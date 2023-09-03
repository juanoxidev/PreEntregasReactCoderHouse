import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ nombre, precio, stock, descripcion }) => {
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
            <Button variant="solid" colorScheme="yellow">
              Detalles
            </Button>
            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              Unidades Disponibles: {stock}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ItemCount stock={stock} />
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
