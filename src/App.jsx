import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import FormFormik from "./components/FormFormik/FormFormikPrueba1";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {/* DEFINIMOS LA ESTRUCTURA DE LA RUTA EJ /CATEGORIA/:(COMO QUIERO QUE SE LLAME EL USEPARAM)*/}
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/cart" element={<CartContainer />} />
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
      )}
      {/* <FormFormik /> */}
    </>
  );
};

export default App;
