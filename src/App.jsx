import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail.jsx/ProductDetail";

const App = () => {
  const greeting = "Bienvenido a mi E-commerce";
  // uso de useParams => ItemsListConteiner(categoria) ItemDetailContainer(id)
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <NavBar />
          {/* <ItemListContainer greeting={greeting} /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/producto/:id" element={<ProductDetail />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
