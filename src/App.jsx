import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";

const App = () => {
  const greeting = "Bienvenido a mi E-commerce";
  // uso de useParams => ItemsListConteiner(categoria) ItemDetailContainer(id)
  return (
    <>
      {/* DEFINIMOS LA ESTRUCTURA DE LA RUTA EJ /CATEGORIA/:(COMO QUIERO QUE SE LLAME EL USEPARAM)*/}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/categoria/:catid"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/producto/:pid"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
