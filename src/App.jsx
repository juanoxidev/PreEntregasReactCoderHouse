import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const greeting = "Bienvenido a mi E-commerce";
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={greeting} />
      </ChakraProvider>
    </>
  );
}

export default App;
