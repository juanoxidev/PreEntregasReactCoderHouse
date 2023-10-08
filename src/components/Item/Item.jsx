import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ nombre, precio, id, imagen }) => {
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
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text fontSize="xl">{formatoGuarani.format(precio)}.-</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="outline" colorScheme="yellow">
              <Link to={`/producto/${id}`}>Detalle</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
